# Content library — session handoff

Last updated: 2026-11-08. Read this first next session.

- Per-page record: `odd/tasks/content-pages.md`
- Page contract and copy gate: `odd/tasks/guides-page-contract.md`
- Repo rules: `AGENTS.md`
- Engram project: `webgymlab`

## State

- **105 / 792 bilingual pages** (ES 105, EN 105).
- Blocks: Entrenamiento **66**, Por Músculo **5**, Ejercicios **34**.
- **105 unique heroes, 0 duplicates.**
- **Batch 10 is built and green (2026-11-08), not yet pushed.** Production still serves the batch 9
  build: **206 pages** and **202 sitemap URLs**. The batch 10 build has **226 pages** and
  **222 sitemap URLs**.
- One archive row is discarded and must stay out: the FiveStars Fitness congress page.
- Batch record: `odd/tasks/content-library-batch-10.md`.

## Gates

```powershell
npm run check:copy   # 5,355/5,355
npm run build        # 226 pages
npm run check:i18n   # 3,596/3,596
npm run verify       # all three, in that order
npm run dev          # http://localhost:4321
```

Start the dev server with `npm run dev` for local review.

## What is built

- **Entrenamiento de la Espalda (9):** rutinas, anatomía, elegir dominadas, mancuernas, consejos,
  espalda baja, agarres, cómo ampliar dorsales, mejores jalones para la parte inferior.
- **Ejercicios de Espalda (34):** the exercise hub plus the pull-up, lat-pulldown, row, deadlift,
  good-morning, pullover and back-extension families, including the Smith machine row.
- **Por Músculo / Rutinas de Espalda (5):** amplitud/densidad, 15 minutos, dorsales grandes, the
  advanced pull-up programme and the back superset finisher.
- **Musculación (47):** the first eighteen, batches 8 and 9, and batch 10: pyramid training, training
  volume, the muscle pump, weak-point routines, the 5% progression, choosing an activity when you
  return to the gym, stability-ball exercises, muscle imbalance, rep tempo and the eight-rep debate.
- **Recovery and planning (10):** back-pain exercises (YMYL), stretching, stretching circuit, muscle
  failure, periodization, exercise and immune system, deload week, sleep, training planning and
  muscle recovery.

## Next 10

1. Skip the discarded FiveStars row and start at `/elegir-gimnasio/`.
2. Then `/metodo-bulgaro/`, `/repeticion-maxima/`,
   `/tipos-somaticos-endomorfos-ectomorfos-y-mesomorfos/`, `/tipos-de-fibras-musculares/`,
   `/desafio-100-flexiones/`, `/errores-entrenamiento/`, `/tests-evaluar-estado-fisico/`,
   `/entrenamiento-oxigenacion/` and `/entrenamiento-balistico/`.
3. Keep the same copy, unique-hero and gate flow.
4. The scaling architecture is deferred to PLAN Phase 7; do not implement it during content batches.

## Page contract (short)

1. Load the `copy-editing` skill and read `.agents/product-marketing.md`.
2. Run the seven sweeps and the AI-tell check. Neutral Spanish, `tú`; zero vosotros/voseo; zero em
   dashes.
3. `title` 45–60 chars, `description` 150–160, all required frontmatter, reciprocal `alternate`.
4. One **unique** hero per page. Never reuse a path; `check:copy` fails on a duplicate.
5. Two files: `src/content/articles/es/<slug>.md` and `en/<en-slug>.md`.
6. Add the pair to `astro.config.mjs` (`ROUTE_PAIRS`) and `scripts/check-i18n.mjs` (`PAGES` and
   `ROUTES`).
7. Run `npm run verify` and record the page in `content-pages.md` (row + copy-pass log).

## Images

- Free licences only: public domain, CC0, CC BY, CC BY-SA. Vendor under
  `public/content/<slug>/hero.jpg`; no hotlinks.
- Credit goes in `heroCredit` and is appended to the `alt`; there is no visible caption.
- Known approximations: the three good-morning pages use a Smith squat, a seated row and a deadlift;
  the one-arm lat pulldown uses a lat pulldown photo because no free one-arm pulldown photo exists.
  The `alt` describes what is actually shown.
- Batches 5-7 heroes: Wikimedia Commons (CC0, CC BY, CC BY-SA, public domain), one per page;
  credits in the `alt`.
- The image pipeline (`<Picture>`, AVIF/WebP, srcset) is still pending.

## Pending decisions

- **Batch 10 push pending.** Batches 8 and 9 went live on 2026-11-07 (`f000c18`..`1442772`). Future
  batches deploy via Workers Builds; run `npm run verify` first.
- **Discarded row:** `/congresos-profesores-factores-clave-fivestars-fitness/` does not go to
  production (owner decision, 2026-11-07). Do not rebuild it in a later batch.
- **Scaling architecture (deferred):** route-manifest unification and guides-nav generation; see
  `odd/tasks/architecture-scaling.md` and `PLAN.md` Phase 7. Do not implement during the content
  batches.
- Phase 1: `Article` + `BreadcrumbList` JSON-LD, `og:type=article`, dates, per-article OG image.
- Phase 2: guides hub, real menu hrefs, internal links from the landing and hubs.
- Phase 6: read Search Console on 2026-11-19 before scaling beyond the 96-page pilot.
- Engram topic `content-library/handoff` covers the current state; the scaling architecture is PLAN
  Phase 7.

## Session close (2026-11-08)

- Batch 10 wrote 10 page pairs (20 files) from `/entrenamiento-piramidal/` to
  `/8-repeticiones-entrenando/`: 105/792 pages, 105 unique heroes.
- Two writers ran sequentially, five pairs each; the parent registered the 10 pairs in `ROUTE_PAIRS`,
  `PAGES` and `ROUTES` and ran the gates.
- Gates are green: `check:copy` 5,355/5,355, build **226 pages**, `check:i18n` 3,596/3,596,
  sitemap **222 URLs** with 666 alternates.
- Structural checks the gate does not cover, run by hand: 78 internal links across the 20 files all
  resolve to a built page; zero `.md` links, zero `#` links and zero em dashes in the 20 files; the
  TOC anchor sets match the H2 ids on five sampled pages; `sitemap-0.xml` publishes 222 URLs.
- **Gotcha:** `ROUTES` in `scripts/check-i18n.mjs` is keyed, and a new key that collides with an
  existing one silently overwrites it (`musclePump` was already taken by
  `/ejercicios-maxima-congestion-muscular`). A duplicate key crashes `check:i18n` on the older pair
  with `Cannot read properties of undefined`. Check for key collisions before adding a route.
- Batch 10 is committed but **not pushed**; production still serves the batch 9 build.
- Next session starts at `/elegir-gimnasio/` (the FiveStars row is discarded).
- Engram topic `content-library/handoff` is updated with this state.
