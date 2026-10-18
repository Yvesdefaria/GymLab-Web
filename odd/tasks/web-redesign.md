# Web redesign — landing

- Feature: `web-redesign`
- Status: done (build shipped; finish review verdict `ship`; RDD slice pending)
- Branch: `main` (solo-project; work-unit pushes standing-authorized by the owner, announced per push)
- Delivery strategy: `exception-ok` — direct-to-main work-unit stream by owner decision; the redesign naturally exceeds the ~400-line advisory (a full visual world replacement), disclosed instead of size-splitting
- Route per task: T1–T2 inline (product truth + direction are parent-owned design decisions); T3–T4 delegated to one writer (2+ non-trivial files); T5–T7 parent (captures, detector, review, documentation)

## Objective

Replace the landing's visual composition with an Impeccable-led redesign in Persuade mode: a first viewport that demonstrates the product mechanism, a paced scroll, and committed craft — preserving product truth, neutral-Spanish copy, the gold×night brand system (Oswald/Barlow), and the real app screenshots.

## Problem

The previous landing was a uniform stack of centered sections: same-width panels, one rhythm, no product demonstration above the fold, no signature moment. It read as a template even though the copy was sharp.

## Confirmed constraints (user, 2026-10-18)

- Keep: brand and typography (gold×night tokens, Oswald/Barlow, self-hosted), real screenshots, current neutral-Spanish copy.
- Site goal: launch-notice emails (`mailto:gymlab@gymlab.dev`); no waitlist backend.
- No price, date, rating, testimonial, or benchmark claims.
- Static Astro + Tailwind v4; no new runtime dependencies; Cloudflare Pages target.
- Legal pages keep working and readable through the shared layout.

## Impeccable artifacts

- `PRODUCT.md` — product truth (init, confirmed by the user).
- `.impeccable/surfaces/src-pages-index-astro.md` — surface brief + direction contract (seed `seed:0ceeb32d36009018`).
- `.impeccable/mocks/decision/` — the decision round (sketch `piso-gym.html` locked by the user).
- `DESIGN.md` + `.impeccable/design.json` — written at finish from the built world.

## Tasks

- [x] T1 — Impeccable init: `PRODUCT.md` with confirmed product truth
- [x] T2 — Direction: grounded structures, `concept-seed --scope surface --mode persuade` roll, decision page, user locked "piso-gimnasio"; direction contract in the surface brief
- [x] T3 — Design system additions in `global.css` (floor composition, plates, stencils, one hero motion assembly; brand tokens untouched)
- [x] T4 — Landing rebuild: hero thesis, proof band, station board, evidence showcase, privacy band, FAQ, closing wall, footer (7 section components)
- [x] T5 — Responsive (390/768/1440), keyboard/focus, reduced motion, no-JS visibility; screenshot round in `.impeccable/review/`
- [x] T6 — Detector (0 findings), finish review (`fix`: eyebrow ban + motion), fix batch, verdict pass (`ship`), `DESIGN.md` + sidecar, raster provenance embedded
- [x] T7 — Checks and work-unit commits

## Acceptance criteria (result)

- First viewport: offer intelligible, one visible primary action (launch-notice email), product demonstrated with real assets. Achieved per the finish review.
- One committed visual grammar; no stock template look; no icon tiles; one authored motion moment (hero assembly) with everything below the fold static. Achieved; both review findings resolved.
- Brand tokens, self-hosted Oswald/Barlow, screenshots, and neutral-Spanish copy preserved (all 48 landing strings present in `dist`). Achieved.
- Keyboard-operable; focus visible; `prefers-reduced-motion` disables the hero assembly; no overflow at 390/768/1440. Achieved.
- `npm run build` green; ids `features`/`capturas`/`faq` and 5 FAQ items present. Achieved.
- Craft-floor fix: eyebrow kickers removed as a pattern; their strings relocated to non-eyebrow positions to preserve the user's copy constraint (hero meta line, section-frame rules, closing stamp).

## Checks

- `npm run build` (green, 3 pages)
- Structural readback over `dist/` (ids, 5 details, mailto, zero voseo, zero scripts)
- Impeccable `detect --json` on changed targets: `[]`
- Captures: hero/desktop/mobile/showcase/showcase-mobile/legal in `.impeccable/review/` (validated twice by the reviewer)
- `embed-prompt --scan public/brand public/images public/screens`: 11 rasters, 0 missing

## Evidence log

- 2026-10-18 — Impeccable installed (`pbakaus/impeccable@impeccable`, 342K installs); `impeccable context` run; init required (no PRODUCT.md). User confirmed the product frame and the intact set (brand/typography, screenshots, copy).
- 2026-10-18 — `PRODUCT.md` written; surface roll `concept-seed --scope surface --mode persuade` (key `e703d06180244cf144c1aafdcd12ba6c`, seed reference `seed:0ceeb32d36009018`) dealt structures 4/7/6; decision page served; user locked **piso-gym** (gym floor) over the dealt lead.
- 2026-10-18 — Direction contract written to the surface brief; delegated build (one writer): 7 section components + composition layer in `global.css`; build green; structural readback green; copy audit green.
- 2026-10-18 — Parent capture round (Python Playwright, 6 captures); detector `[]`; fresh finish review (`fix`): (1) craft-floor eyebrow ban on six labels, (2) identical blur-rise reveal on 33 elements.
- 2026-10-18 — Fix batch: labels relocated off headings (hero meta line, section-frame rules, closing stamp); reveal system deleted; one hero assembly authored (headline mask-rise + rail hairline draw), reduced-motion safe, zero scripts in `dist`.
- 2026-10-18 — Verdict pass: **both fixes resolved, no regressions — disposition `ship`** (scoped to the two fixes).
- 2026-10-18 — Documentation: `DESIGN.md` (+ `.impeccable/design.json`, schemaVersion 2) written and verified; North Star "The Gym Floor Drawn in Gold" derived from the locked world (user may rename).
- 2026-10-18 — Raster provenance embedded for all 11 shipping rasters (origin: pre-existing assets from the app repo; screenshots captured via `scripts/capture-screens.py`, commit `f561fd4`). Scan: 0 missing.
