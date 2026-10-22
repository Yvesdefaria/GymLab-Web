"""Capture real GymLab app screenshots for the marketing-site showcase.

Run from the APP repo (server managed by its e2e helper):

    node scripts/tools/generateFakeData.cjs          # writes ./fake-data.json (backup format)
    python tests/e2e/scripts/with_server.py <abs-path-to-this-file> --port 5180

Flow (English UI, the app default):
    1. Skip onboarding ("I already train here").
    2. Import fake-data.json from Ajustes -> Backup and restore -> Restore from file,
       then assert the data landed (workout totals, 30-day count, streak, volume).
    3. Capture `home`, `estadisticas` and `entrenamiento` (a live session with a set
       marked done so the rest timer is running).

Shots land in ../assets/screens/ as source PNGs (not shipped; run
scripts/optimize-screens.py to regenerate the WebP derivatives).

Recon mode (env GYMLAB_RECON=1): same flow, but writes to %TEMP%/gymlab-recon and
prints the UI text so selectors can be re-inspected after an app redesign.
"""

import os
import re
import tempfile
from pathlib import Path

from playwright.sync_api import sync_playwright

OUT_FINAL = Path(__file__).resolve().parent.parent / "assets" / "screens"
PORT = os.environ.get("E2E_PORT", "5173")
BASE = f"http://localhost:{PORT}"
VIEWPORT = {"width": 375, "height": 812}
DPR = 2

RECON = os.environ.get("GYMLAB_RECON") == "1"

# Selectores por texto: inglés (UI por defecto) con el español como respaldo.
SKIP_ONBOARDING = re.compile(r"I already train here|Ya entreno aquí", re.I)
TIP_DISMISS = re.compile(r"^\s*(Got it|Entendido)\s*$", re.I)
BACKUP_PANEL = re.compile(r"Backup and restore|Copia de seguridad", re.I)
RESTORE_CONFIRM = re.compile(r"^\s*(Restore|Restaurar)\s*$", re.I)
START_TODAY = re.compile(r"^\s*(Start today|Empezar hoy|Train again|Entrenar otra vez)\s*$", re.I)
MARK_DONE = re.compile(r"Mark as done|Marcar como completada", re.I)
SKIP_WARMUP = re.compile(r"Skip warmup|Saltar calentamiento", re.I)
REST_HEADING = re.compile(r"^(Rest|Descanso)$", re.I)


def find_backup() -> Path:
    """Locate fake-data.json: env override, app-repo cwd, then the WebGymLab repo root."""
    candidates = []
    if os.environ.get("GYMLAB_BACKUP"):
        candidates.append(Path(os.environ["GYMLAB_BACKUP"]))
    candidates.append(Path.cwd() / "fake-data.json")
    candidates.append(Path(__file__).resolve().parent.parent / "fake-data.json")
    for candidate in candidates:
        if candidate.is_file():
            return candidate
    raise SystemExit(
        "[error] fake-data.json not found. Run `node scripts/tools/generateFakeData.cjs` "
        "from the app repo, or point GYMLAB_BACKUP at the file."
    )


def capture(page, out_dir: Path, name: str) -> None:
    path = out_dir / f"{name}.png"
    page.screenshot(path=str(path))
    print(f"[shot] {path}")


def dismiss_tips(page) -> None:
    """Close the per-page first-visit on-ramp card ("Got it") if present."""
    for _ in range(4):
        try:
            button = page.get_by_role("button", name=TIP_DISMISS).first
            if button.is_visible():
                button.click(timeout=2000)
                page.wait_for_timeout(400)
            else:
                break
        except Exception:
            break


def skip_onboarding(page) -> bool:
    """Dismiss the first-run wizard and wait until the home hero is mounted."""
    hero = page.locator("[data-tour='home-hero']").first
    for _ in range(60):  # up to ~60 s: cold Vite boot + first seed
        page.wait_for_timeout(1000)
        try:
            skip = page.get_by_role("button", name=SKIP_ONBOARDING).first
            if skip.is_visible():
                skip.click(timeout=3000)
                page.wait_for_timeout(1500)
                print("[onboarding] skipped via 'I already train here'")
        except Exception:
            pass
        if hero.is_visible():
            return True
    return False


def import_backup(page, data_file: Path) -> None:
    """Restore the fake backup through the real Ajustes flow."""
    page.goto(BASE + "/ajustes", wait_until="load")
    page.wait_for_timeout(2500)
    dismiss_tips(page)

    panel = page.get_by_role("button", name=BACKUP_PANEL).first
    panel.wait_for(state="visible", timeout=15000)
    panel.click(timeout=5000)
    page.wait_for_timeout(600)

    field = page.locator("#backup-file-input")
    field.wait_for(state="attached", timeout=10000)
    field.set_input_files(str(data_file))
    page.wait_for_timeout(800)

    confirm = page.get_by_role("button", name=RESTORE_CONFIRM).first
    confirm.wait_for(state="visible", timeout=10000)
    confirm.click(timeout=5000)
    # The app reloads itself ~1.2 s after a successful restore.
    page.wait_for_timeout(4500)
    page.wait_for_load_state("load")
    print(f"[import] {data_file.name} imported via Ajustes -> Backup and restore -> Restore")


def read_cards(page) -> dict:
    """Read the summary KPI cards (label -> value) from the stats header."""
    pairs = page.evaluate(
        """() => [...document.querySelectorAll('p.kicker')].map((k) => {
            const value = k.parentElement && k.parentElement.querySelector('.stat-value');
            return [k.textContent.trim(), value ? value.textContent.trim() : ''];
        }).filter(([, value]) => value)"""
    )
    return {label: value for label, value in pairs}


def assert_data_imported(page) -> dict:
    """Fail fast if the backup did not land: the showcase must never ship empty states."""
    page.goto(BASE + "/estadisticas", wait_until="load")
    page.wait_for_timeout(3500)
    dismiss_tips(page)
    page.wait_for_selector("svg.recharts-surface", timeout=15000)

    cards = read_cards(page)
    lowered = {label.lower(): value for label, value in cards.items()}
    total = int(re.sub(r"\D", "", lowered.get("total workouts", "0")) or 0)
    last30 = int(re.sub(r"\D", "", lowered.get("workouts 30 d", "0")) or 0)
    streak = lowered.get("current streak", "")
    weekly = lowered.get("weekly vol.", "")
    bars = page.locator("svg.recharts-surface .recharts-bar-rectangle").count()

    if total < 20 or last30 < 5 or not weekly or weekly in ("—", "-"):
        raise AssertionError(f"import did not land: {lowered}")

    print(
        f"[data] total workouts={total} | 30 d={last30} | streak={streak} | "
        f"weekly volume={weekly} | volume bars={bars}"
    )
    return cards


def open_session(page) -> str:
    """Home hero -> day picker -> active session; returns the routine day name."""
    page.goto(BASE + "/", wait_until="load")
    page.wait_for_timeout(2500)
    dismiss_tips(page)

    hero = page.locator("[data-tour='home-hero']").first
    day_name = hero.locator("h2").first.inner_text().strip()

    start = page.get_by_role("button", name=START_TODAY).first
    start.wait_for(state="visible", timeout=10000)
    start.click(timeout=5000)

    # The picker lists the routine days; pick the one the hero announced as today's.
    dialog = page.locator("div[role='dialog']").first
    try:
        dialog.wait_for(state="visible", timeout=3000)
    except Exception:
        start.click(timeout=5000)
        dialog.wait_for(state="visible", timeout=8000)
    page.wait_for_timeout(500)

    option = page.get_by_role("button", name=re.compile(rf"^\s*{re.escape(day_name)}\s*$", re.I)).first
    option.wait_for(state="visible", timeout=8000)
    option.click(timeout=5000)
    page.wait_for_url(re.compile(r"/entrenamiento/active"), timeout=15000)
    page.wait_for_timeout(1500)

    try:
        skip = page.get_by_role("button", name=SKIP_WARMUP).first
        if skip.is_visible(timeout=3000):
            skip.click(timeout=3000)
            page.wait_for_timeout(800)
            print("[session] guided warm-up skipped")
    except Exception:
        pass

    dismiss_tips(page)
    print(f"[session] started routine day '{day_name}'")
    return day_name


def assert_rest_timer(page) -> str:
    """Mark the first set done (auto-starts the rest) and assert the countdown runs."""
    button = page.get_by_role("button", name=MARK_DONE).first
    button.wait_for(state="visible", timeout=10000)
    button.click(timeout=5000)
    page.wait_for_timeout(1400)

    text = page.evaluate(
        """() => {
            const heading = [...document.querySelectorAll('h3')]
                .find((h) => /^(Rest|Descanso)$/i.test(h.textContent.trim()));
            return heading && heading.closest('section') ? heading.closest('section').innerText : '';
        }"""
    )
    match = re.search(r"\b(\d+)S\b", text or "")
    if not match or int(match.group(1)) <= 0:
        raise AssertionError(f"rest timer is not running: {text!r}")
    if not re.search(r"Pause|Pausar", text or ""):
        raise AssertionError("rest timer is not in the running state (no Pause)")
    print(f"[session] set marked done; rest timer running at {match.group(1)}s")
    return match.group(1)


def frame_rest_timer(page) -> None:
    """Scroll so the whole rest panel sits above the fixed session action bar."""
    page.evaluate(
        """() => {
            const heading = [...document.querySelectorAll('h3')]
                .find((h) => /^(Rest|Descanso)$/i.test(h.textContent.trim()));
            const section = heading && heading.closest('section');
            if (section) {
                const top = section.getBoundingClientRect().top + window.scrollY;
                window.scrollTo(0, Math.max(0, top - 180));
            }
        }"""
    )
    page.wait_for_timeout(700)


def main() -> None:
    data_file = find_backup()
    out_dir = Path(tempfile.gettempdir()) / "gymlab-recon" if RECON else OUT_FINAL
    out_dir.mkdir(parents=True, exist_ok=True)
    print(f"[info] base={BASE} out={out_dir} backup={data_file} recon={RECON}")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        ctx = browser.new_context(viewport=VIEWPORT, device_scale_factor=DPR)
        page = ctx.new_page()
        errors: list[str] = []
        page.on("pageerror", lambda e: errors.append(f"pageerror: {e}"))
        page.on("console", lambda m: errors.append(m.text) if m.type == "error" else None)

        try:
            page.goto(BASE + "/", wait_until="load")
            if not skip_onboarding(page):
                raise AssertionError("the app never reached the home screen")
            page.wait_for_timeout(1200)

            import_backup(page, data_file)
            assert_data_imported(page)

            # 1) Home: active plan, streak, current week.
            page.goto(BASE + "/", wait_until="load")
            page.wait_for_timeout(3000)
            dismiss_tips(page)
            page.wait_for_timeout(600)
            capture(page, out_dir, "home")

            # 2) Stats: real charts from the imported history.
            page.goto(BASE + "/estadisticas", wait_until="load")
            page.wait_for_timeout(3500)
            dismiss_tips(page)
            page.wait_for_selector("svg.recharts-surface", timeout=15000)
            page.wait_for_timeout(600)
            capture(page, out_dir, "estadisticas")

            # 3) Active session: a logged set and the rest timer running.
            open_session(page)
            assert_rest_timer(page)
            frame_rest_timer(page)
            capture(page, out_dir, "entrenamiento")

            if RECON:
                print("== home ==", page.locator("body").inner_text()[:400].replace("\n", " | "))
                print("== console errors ==", errors[:8] if errors else "none")
        finally:
            browser.close()


if __name__ == "__main__":
    main()
