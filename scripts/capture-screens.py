"""Capture real GymLab app screenshots for the marketing-site showcase.

Run from the APP repo (server managed by its e2e helper):

    $env:GYMLAB_RECON='1'  # optional: broad candidate sweep into the temp dir
    python tests/e2e/scripts/with_server.py <abs-path-to-this-file> --port 5180

- Recon mode (env GYMLAB_RECON=1): captures candidate screens into
  %TEMP%/gymlab-recon and prints UI elements for selector inspection.
- Final mode (default): captures the showcase set into ../public/screens/.
"""

import os
import re
import tempfile
from pathlib import Path

from playwright.sync_api import sync_playwright

OUT_FINAL = Path(__file__).resolve().parent.parent / "public" / "screens"
PORT = os.environ.get("E2E_PORT", "5173")
BASE = f"http://localhost:{PORT}"
VIEWPORT = {"width": 375, "height": 812}
DPR = 2

RECON = os.environ.get("GYMLAB_RECON") == "1"

ROUTES = [
    ("home", "/"),
    ("rutinas", "/rutinas"),
    ("ejercicios", "/ejercicios"),
    ("calculadoras", "/calculadoras"),
    ("estadisticas", "/estadisticas"),
]


def capture(page, out_dir: Path, name: str) -> None:
    path = out_dir / f"{name}.png"
    page.screenshot(path=str(path))
    print(f"[shot] {path}")


def dismiss_onramp(page) -> None:
    """Close the per-page first-visit on-ramp card ("Entendido") if present."""
    try:
        for _ in range(3):
            button = page.locator("button", has_text="Entendido").first
            if button.is_visible(timeout=600):
                button.click(timeout=1500)
                page.wait_for_timeout(500)
            else:
                break
    except Exception:
        pass


def main() -> None:
    out_dir = Path(tempfile.gettempdir()) / "gymlab-recon" if RECON else OUT_FINAL
    out_dir.mkdir(parents=True, exist_ok=True)
    print(f"[info] base={BASE} out={out_dir} recon={RECON}")

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        ctx = browser.new_context(viewport=VIEWPORT, device_scale_factor=DPR)
        page = ctx.new_page()
        errors: list[str] = []
        page.on("pageerror", lambda e: errors.append(f"pageerror: {e}"))
        page.on("console", lambda m: errors.append(m.text) if m.type == "error" else None)

        # Readiness: the app can cold-boot slowly (vite prebundle + first seed).
        # Poll until the onboarding skip chip or the bottom nav is visible.
        page.goto(BASE + "/", wait_until="load")
        skip = page.locator("button", has_text="Ya entreno aquí").first
        nav = page.locator("a[href='/rutinas']").first
        ready = False
        for _ in range(60):  # up to ~60 s
            page.wait_for_timeout(1000)
            if skip.is_visible(timeout=400):
                skip.click(timeout=3000)
                page.wait_for_timeout(1500)
                print("[info] onboarding skipped via 'Ya entreno aquí'")
                ready = True
                break
            if nav.is_visible(timeout=400):
                print("[info] app ready without onboarding")
                ready = True
                break
        print(f"[info] ready={ready}")
        page.wait_for_timeout(1500)
        dismiss_onramp(page)
        capture(page, out_dir, "home")

        for name, route in ROUTES[1:]:
            page.goto(BASE + route, wait_until="load")
            page.wait_for_timeout(2500)
            dismiss_onramp(page)
            capture(page, out_dir, name)

        # Live workout attempt: home routine card -> detail -> start -> active session.
        try:
            page.goto(BASE + "/", wait_until="load")
            page.wait_for_timeout(2000)
            card = page.locator("a, button").filter(has_text="Full Body Express").first
            card.click(timeout=4000)
            page.wait_for_timeout(1800)
            started = False
            for label in ("Empezar", "Comenzar", "Iniciar"):
                try:
                    button = page.locator("a, button").filter(has_text=re.compile(label)).first
                    if button.is_visible(timeout=700):
                        button.click(timeout=1800)
                        started = True
                        break
                except Exception:
                    pass
            page.wait_for_timeout(2200)
            capture(page, out_dir, "entrenamiento")
            print(f"[info] workout flow started={started}")
        except Exception as exc:
            print(f"[warn] workout flow failed: {exc}")

        if RECON:
            page.goto(BASE + "/", wait_until="load")
            page.wait_for_timeout(1500)
            print("== title ==", page.title())
            for el in page.locator("a, button").all()[:40]:
                try:
                    text = (el.inner_text(timeout=400) or "").strip().replace("\n", " | ")[:70]
                    if text:
                        href = el.get_attribute("href") or ""
                        print(f"[ui] {text} {('-> ' + href) if href else ''}")
                except Exception:
                    pass
            print("== console errors ==", errors[:8] if errors else "none")

        browser.close()


if __name__ == "__main__":
    main()
