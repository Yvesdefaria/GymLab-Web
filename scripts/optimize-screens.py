"""Generate optimized WebP derivatives for the marketing showcase.

Sources live in assets/screens/ (not shipped, keep their provenance metadata);
derivatives ship from public/screens/ as WebP, the landing set at 375w and 750w
for responsive srcset.

Usage: python scripts/optimize-screens.py
"""

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "assets" / "screens"
OUT = ROOT / "public" / "screens"

USED = {
    "home": [375, 750],
    "entrenamiento": [375, 750],
    "estadisticas": [375, 750],
}
ARCHIVE = []


def save(img: Image.Image, path: Path, width: int | None) -> None:
    if width is not None and width != img.size[0]:
        height = round(img.size[1] * width / img.size[0])
        img = img.resize((width, height), Image.LANCZOS)
    img.save(path, "WEBP", quality=82, method=6)
    print(f"{path.relative_to(ROOT).as_posix()}  {path.stat().st_size / 1024:.1f} KB")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for name, widths in USED.items():
        with Image.open(SRC / f"{name}.png") as source:
            img = source.convert("RGB")
        for width in widths:
            save(img, OUT / f"{name}-{width}.webp", width)
    for name in ARCHIVE:
        with Image.open(SRC / f"{name}.png") as source:
            img = source.convert("RGB")
        save(img, OUT / f"{name}.webp", None)


if __name__ == "__main__":
    main()
