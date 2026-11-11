# Content library — session handoff

Last updated: 2026-11-11. Read this first next session.

- Per-page record: `odd/tasks/content-pages.md`
- Page contract and copy gate: `odd/tasks/guides-page-contract.md`
- Repo rules: `AGENTS.md`
- Engram project: `webgymlab`

## State

- **125 / 792 bilingual pages** (ES 125, EN 125).
- Blocks: Entrenamiento **86**, Por Músculo **5**, Ejercicios **34**.
- **125 unique heroes, 0 duplicates.**
- **Batch 12 is built and green (2026-11-11).** The build has **266 pages** and **262 sitemap URLs**.
- One archive row is discarded and must stay out: the FiveStars Fitness congress page.
- Batch record: `odd/tasks/content-library-batch-12.md`.

## Gates

```powershell
npm run check:copy   # 6,375/6,375
npm run build        # 266 pages
npm run check:i18n   # 4,216/4,216
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
- **Musculación (67):** the first eighteen, batches 8 to 12: choosing a gym, the Bulgarian method,
  one-rep max, somatotypes, muscle fibre types, the 100-push-up plan, training mistakes, fitness
  tests, muscle oxygenation, ballistic training, the training-frequency myth, heavy days, split
  routines, fibre recruitment by exercise, 1RM in volume routines, exercise technique, muscle
  contractions, natural muscle growth, training with music and gym etiquette.
- **Recovery and planning (10):** back-pain exercises (YMYL), stretching, stretching circuit, muscle
  failure, periodization, exercise and immune system, deload week, sleep, training planning and
  muscle recovery.

## Next 10

1. Skip the discarded FiveStars row and start at `/como-entrenar-con-altas-temperaturas/`.
2. Then `/multipower-para-superar-puntos-de-estancamiento/`, `/rango-completo-de-movimiento-rom/`,
   `/dolor-crecimiento-muscular/`, `/como-respirar-mientras-entrenamos/`, `/menos-grasa-mas-musculo/`,
   `/entrenamiento-con-companero/`, `/guia-de-entrenamiento-hitt/` and `/rutina-entrenamiento-natacion/`,
   plus the next Musculación row after those.
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
- Batches 5-11 heroes: Wikimedia Commons (CC0, CC BY, CC BY-SA, public domain), one per page;
  credits in the `alt`.
- The image pipeline (`<Picture>`, AVIF/WebP, srcset) is still pending.

## Pending decisions

- **Discarded row:** `/congresos-profesores-factores-clave-fivestars-fitness/` does not go to
  production (owner decision, 2026-11-07). Do not rebuild it in a later batch.
- **Scaling architecture (deferred):** route-manifest unification and guides-nav generation; see
  `odd/tasks/architecture-scaling.md` and `PLAN.md` Phase 7. Do not implement during the content
  batches.
- Phase 1: `Article` + `BreadcrumbList` JSON-LD, `og:type=article`, dates, per-article OG image.
- Phase 2: guides hub, real menu hrefs, internal links from the landing and hubs.
- Phase 6: read Search Console on 2026-11-19 before scaling beyond the 115-page pilot.
- Engram topic `content-library/handoff` covers the current state; the scaling architecture is PLAN
  Phase 7.

## Session close (2026-11-11)

- Batch 12 wrote 10 page pairs (20 files) from `/mitos-estupidos-…/` to
  `/normas-para-hacer-del-gimnasio-…/`: 125/792 pages, 125 unique heroes.
- Two writers ran sequentially, five pairs each; the parent added the cross-links, registered the 10
  pairs in `ROUTE_PAIRS`, `PAGES` and `ROUTES`, and ran the gates.
- Gates are green: `check:copy` 6,375/6,375, build **266 pages**, `check:i18n` 4,216/4,216, sitemap
  **262 URLs** with 786 alternates.
- Structural checks the gate does not cover, run by hand on the 20 built pages: 212 internal links
  all resolve; zero `.md` links and zero em dashes; 132 TOC anchors match their heading ids; the two
  tables are text tables and wrap.
- Commits, one per page with its checklist rows marked: `8d4b84f`, `964fe79`, `670de48`, `9aaee48`,
  `990ebb8`, `d636681`, `997a706`, `aa960cd`, `dff0602`, `d87104f`; routes `82639eb`; docs at the
  close.
- **Gotcha:** `ROUTES` in `scripts/check-i18n.mjs` is keyed, and a new key that collides with an
  existing one silently overwrites it. All ten keys in batch 12 were checked free first.
- **Gotcha:** `Set-Content -Encoding UTF8` in PowerShell 5.1 writes a BOM; use
  `[System.IO.File]::WriteAllText` with `UTF8Encoding($false)` for repo files.
- **Archive correction:** the contractions article has its "Excéntrica" and "Concéntrica" headings
  swapped relative to the definitions; each H2 is now named after the contraction it describes.
- Next session starts at `/como-entrenar-con-altas-temperaturas/`.
- Engram topic `content-library/handoff` is updated with this state.
