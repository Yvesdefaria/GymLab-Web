"""Render the 1200x630 Open Graph image from the brand system.

Usage: python scripts/make-og.py
Output: public/og/gymlab-og.jpg
"""

from pathlib import Path
from urllib.parse import quote

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
FONTS = ROOT / "public" / "fonts"
BRAND = ROOT / "public" / "brand"
OUT = ROOT / "public" / "og" / "gymlab-og.jpg"


def file_url(path: Path) -> str:
    return "file:///" + quote(path.as_posix().lstrip("/"))


HTML = """<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<style>
  @font-face {{ font-family: "Oswald"; font-weight: 600; src: url("{oswald600}") format("woff2"); }}
  @font-face {{ font-family: "Oswald"; font-weight: 700; src: url("{oswald700}") format("woff2"); }}
  @font-face {{ font-family: "Barlow"; font-weight: 400; src: url("{barlow400}") format("woff2"); }}
  @font-face {{ font-family: "Barlow"; font-weight: 600; src: url("{barlow600}") format("woff2"); }}
  * {{ box-sizing: border-box; margin: 0; padding: 0; }}
  html, body {{ width: 1200px; height: 630px; overflow: hidden; }}
  body {{
    background: #121214; color: #f8fafc; font-family: Barlow, sans-serif; position: relative;
    background-image:
      radial-gradient(760px 460px at 84% -14%, rgba(217,179,132,.17), transparent 62%),
      radial-gradient(620px 420px at -8% 40%, rgba(217,179,132,.08), transparent 58%),
      repeating-linear-gradient(90deg, rgba(217,179,132,.06) 0 1px, transparent 1px 120px),
      repeating-linear-gradient(0deg, rgba(217,179,132,.05) 0 1px, transparent 1px 120px);
  }}
  .frame {{ position: absolute; inset: 26px; border: 1px solid rgba(217,179,132,.38); }}
  .tick {{ position: absolute; width: 14px; height: 14px; border-color: #d9b384; border-style: solid; }}
  .tick.tl {{ top: -1px; left: -1px; border-width: 2px 0 0 2px; }}
  .tick.tr {{ top: -1px; right: -1px; border-width: 2px 2px 0 0; }}
  .tick.bl {{ bottom: -1px; left: -1px; border-width: 0 0 2px 2px; }}
  .tick.br {{ bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }}
  .wrap {{ position: absolute; inset: 74px 84px; display: flex; flex-direction: column; }}
  .brand {{ display: flex; align-items: center; gap: 14px; font-family: Oswald; font-weight: 600; font-size: 34px; letter-spacing: .06em; }}
  .brand img {{ width: 44px; height: 44px; }}
  .brand .dot {{ width: 8px; height: 8px; border-radius: 50%; background: #d9b384; box-shadow: 0 0 16px rgba(217,179,132,.9); margin-left: 4px; }}
  h1 {{ margin-top: 54px; font-family: Oswald; font-weight: 700; font-size: 82px; line-height: .95; letter-spacing: .005em; max-width: 880px; }}
  h1 span {{ color: #d9b384; }}
  .sub {{ margin-top: 22px; font-size: 24px; line-height: 1.45; color: #a39b8c; max-width: 760px; }}
  .sub b {{ color: #f8fafc; font-weight: 600; }}
  .foot {{ margin-top: auto; display: flex; align-items: center; justify-content: space-between; }}
  .site {{ font-family: Oswald; font-weight: 600; font-size: 22px; letter-spacing: .18em; color: #fdddb4; text-transform: uppercase; }}
  .chips {{ display: flex; gap: 10px; }}
  .chip {{ border: 1px solid rgba(217,179,132,.45); background: rgba(217,179,132,.1); color: #fdddb4; padding: 7px 12px; font-size: 11px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; }}
</style>
</head>
<body>
  <div class="frame"><i class="tick tl"></i><i class="tick tr"></i><i class="tick bl"></i><i class="tick br"></i></div>
  <div class="wrap">
    <div class="brand"><img src="{logo}" alt=""><span>GymLab</span><span class="dot"></span></div>
    <h1>Deja de entrenar<br><span>de memoria</span></h1>
    <p class="sub">GymLab organiza tu rutina, registra cada serie mientras entrenas y te muestra tu progreso en gráficos. <b>873 ejercicios, 9 calculadoras y 68 plantillas</b> en una sola app.</p>
    <div class="foot">
      <span class="site">gymlab.dev</span>
      <div class="chips"><span class="chip">Próximamente en Google Play</span><span class="chip">Próximamente en App Store</span></div>
    </div>
  </div>
</body>
</html>
"""


def main() -> None:
    OUT.parent.mkdir(parents=True, exist_ok=True)
    html = HTML.format(
        oswald600=file_url(FONTS / "oswald-600.woff2"),
        oswald700=file_url(FONTS / "oswald-700.woff2"),
        barlow400=file_url(FONTS / "barlow-400.woff2"),
        barlow600=file_url(FONTS / "barlow-600.woff2"),
        logo=file_url(BRAND / "logo_simbolo_gold.svg"),
    )
    page_file = ROOT / ".impeccable" / "og" / "og.html"
    page_file.parent.mkdir(parents=True, exist_ok=True)
    page_file.write_text(html, encoding="utf-8")

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1200, "height": 630}, device_scale_factor=1)
        page.goto(page_file.as_uri(), wait_until="load")
        page.wait_for_function("document.fonts.ready.then(() => true)")
        page.wait_for_timeout(300)
        page.screenshot(path=str(OUT), type="jpeg", quality=92)
        browser.close()
    print(f"{OUT.relative_to(ROOT).as_posix()}  {OUT.stat().st_size / 1024:.1f} KB")


if __name__ == "__main__":
    main()
