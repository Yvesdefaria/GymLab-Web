# 404 dedicada y favicon del símbolo

## Objective

Serve a real 404 page in the site's own design instead of an empty body, and
give the site a favicon that is legible in a browser tab.

## Problem

Audited 2026-10-29 against production:

1. There is no `src/pages/404.astro` and no `dist/404.html`. Three unmatched
   paths (`/es/no-existe-esta-pagina/`, `/no-existe`,
   `/es/calculadora-imc/typo`) all return **HTTP 404 with a 0-byte body and no
   `Content-Type`**. The visitor sees a blank page.
2. `wrangler.jsonc` declares `assets.directory` only. Workers Static Assets
   defaults `not_found_handling` to `none`, which is what produces that bare
   response. Creating the page alone would not serve it.
3. `BaseLayout.astro` sets `<link rel="icon" href="/brand/icon-192.png">`, which
   overrides the implicit `/favicon.ico` lookup. That file is the full wordmark
   ("GYM LAB" plus the emblem); at 16 px it is unreadable.
4. `public/favicon.ico` is a valid 16/32/48 ICO by structure, but its artwork is
   the same wordmark, so it buys nothing either.

## Scope

In scope: `src/pages/404.astro` (new), `public/favicon.svg` (new),
`public/site.webmanifest` (new), `public/favicon.ico` (regenerated),
`src/layouts/BaseLayout.astro` (head links plus a `noindex` prop),
`wrangler.jsonc`.

Out of scope: Header/Footer changes, the app at `app.gymlab.dev`, the landing
copy.

## Constraints

- The 404 reuses `BaseLayout` so it inherits Header, Footer, fonts and tokens.
- A static `404.html` cannot know the visitor's locale: it ships the default
  locale (Spanish, neutral register — no voseo) and links to `/en/`.
- The 404 must not emit a canonical pointing at a fake `/es/404/`. A `noindex`
  prop on `BaseLayout` suppresses canonical and alternates for that page.
- Favicon artwork: the emblem cropped to helmet + chevrons, gold `#d9b384` on
  `#121214`, matching `theme_color`. The full emblem is 2.92:1 and turns into a
  band at 16 px, so the crop carries the identity at small size.
- No new dependency: rasterisation for the `.ico` uses the locally installed
  Chrome in headless mode.

## Tasks

- [x] T1 — `public/favicon.svg`, derived from `brand/logo_simbolo_gold.svg`,
  cropped to the dense core, on the brand's dark rounded square.
- [x] T2 — Document the measured artwork bounds and the crop decision here.
- [x] T3 — `public/site.webmanifest` with the existing 192/512/maskable icons.
- [x] T4 — `src/pages/404.astro` in the site's design.
- [x] T5 — `BaseLayout`: `noindex` prop, SVG-first icon links, manifest link.
- [x] T6 — `wrangler.jsonc`: `not_found_handling: "404-page"`.
- [x] T7 — Regenerate `public/favicon.ico` at 16/32/48 from the new SVG.
- [x] T8 — Verify: build, `check:i18n`, `dist/404.html` present and on-brand,
  ICO parses with three entries.

## Measurements

Rendered `logo_simbolo_gold.svg` at 1024 px and scanned the alpha bounding box:

```
artwork bbox in a 600x600 canvas:  x 137.1..461.7   y 191.0..302.3
aspect: 2.92:1
favicon crop:  x 232..366  y 180..313   (134 x 133)
```

The crop keeps the helmet and the nested chevrons, the only dense region, and
turns a 2.92:1 band into a nearly square mark.

## Routes chosen

| Task | Route | Trigger evidence |
| --- | --- | --- |
| T3–T6 | parent | one new page, one layout touch, two config files, spec fixed by the audit |
| T7 | parent | single rasterisation step with local Chrome |

## Progress

- 2026-10-29: audit of production; artwork bounds measured; `favicon.svg`
  produced and checked by rendering at 256, 32 and 16 px.

## Verification evidence

```
npm run build    → 16 page(s) built (was 15), no warnings
npm run check:i18n → 254/254 i18n checks passed
dist/404.html    → 7038 bytes
```

Head of the built page:

```
<meta name="robots" content="noindex">   present
<link rel="canonical">                    absent on purpose
favicon.svg / favicon.ico / manifest      linked
title "Página no encontrada — GymLab"     present
h1 "Esta página no existe"                present
```

ICO structure re-parsed from the written file:

```
type 1 (icon)  count 3
  entry 0  16x16  size=798   offset=54    png=true  inRange=true
  entry 1  32x32  size=2187  offset=852   png=true  inRange=true
  entry 2  48x48  size=3994  offset=3039  png=true  inRange=true
```

Rendered with local Chrome at 1280 and 390 px over `npm run preview`: the 404
carries the header, the hairline label row, the translucent gold "404", the
display heading, both buttons and the footer, all in the site tokens.

## Correction — a false finding, retracted

During verification I screenshotted with Chrome headless at `--window-size=375`
and `=390` and saw the layout clipped on the right, then reported a site-wide
horizontal overflow. That was wrong, and the tool was the culprit:

```
--window-size=390  →  window.innerWidth reports 500
```

Chrome headless on Windows enforces a **minimum window width of 500 px**. The
"mobile" screenshots were a 500 px layout cropped to 390, which looks exactly
like overflow.

Measured properly with Playwright and a real emulated viewport:

```
390px  /es/                innerWidth 390  scrollWidth 390  overflow 0
390px  /en/                innerWidth 390  scrollWidth 390  overflow 0
390px  /es/calculadora-imc  innerWidth 390  scrollWidth 390  overflow 0
390px  /pagina-que-no-existe (404)  innerWidth 390  scrollWidth 390  overflow 0
375px  all four pages       innerWidth 375  scrollWidth 375  overflow 0
768px  all four pages       no overflow
```

The site is responsive. The only element whose box passes the viewport edge is
`.floor-hero__beam`, a decorative off-canvas beam that is clipped by its
container and contributes no scroll: `document.scrollWidth` stays equal to
`innerWidth`.

## Next step

Deploy: without `wrangler deploy`, `not_found_handling` stays `none` in
production and the blank 404 keeps happening.
