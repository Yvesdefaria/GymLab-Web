# Content library — session handoff

Last updated: 2026-11-07. Read this first next session.

- Per-page record: `odd/tasks/content-pages.md`
- Page contract and copy gate: `odd/tasks/guides-page-contract.md`
- Repo rules: `AGENTS.md`
- Engram project: `webgymlab`

## State

- **95 / 792 bilingual pages** (ES 95, EN 95).
- Blocks: Entrenamiento **56**, Por Músculo **5**, Ejercicios **34**.
- **95 unique heroes, 0 duplicates.**
- **Batches 8 and 9 are live (pushed 2026-11-07, `f000c18`..`1442772`).** Production has
  **206 pages** and **202 sitemap URLs**.
- One archive row is discarded and must stay out: the FiveStars Fitness congress page.
- The live `/es/rutinas-espalda/` has the new copy, the credit in the alt and the correct
  language switch.

## Gates

```powershell
npm run check:copy   # 4,845/4,845
npm run build        # 206 pages
npm run check:i18n   # 3,286/3,286
npm run verify       # all three, in that order
npm run dev          # http://localhost:4321
```

Start the dev server with `npm run dev` for local review. Production serves the 206-page build with
batches 8 and 9 live.

## What is built

- **Entrenamiento de la Espalda (9):** rutinas, anatomía, elegir dominadas, mancuernas, consejos,
  espalda baja, agarres, cómo ampliar dorsales, mejores jalones para la parte inferior.
- **Ejercicios de Espalda (34):** the exercise hub plus the pull-up, lat-pulldown, row, deadlift,
  good-morning, pullover and back-extension families, including the Smith machine row.
- **Por Músculo / Rutinas de Espalda (5):** amplitud/densidad, 15 minutos, dorsales grandes, the
  advanced pull-up programme and the back superset finisher.
- **Musculación (37):** the first eighteen plus batches 8 and 9: the first-day guide, both grip
  articles, the plateau guide, the home-equipment buying guide, the lifting belt, Poliquin's
  strategies, the bodybuilding lifestyle piece, the anaerobic power test, the rep-range guide, the
  weight-selection guide, the equipment guide, rest between sets, cable exercises, compound versus
  isolation, body adaptation, grip training, deadlift grip and old-school gyms.
- **Recovery and planning (10):** back-pain exercises (YMYL), stretching, stretching circuit, muscle
  failure, periodization, exercise and immune system, deload week, sleep, training planning and
  muscle recovery.

## Next 10

1. Start with the first unchecked row: `/entrenamiento-piramidal/`.
2. Then `/volumen-de-entrenamiento/`, `/congestion-muscular/`,
   `/elaboracion-de-rutinas-puntos-debiles/`, `/levantar-aumentar-peso/`,
   `/escoger-actividad-en-tu-vuelta-al-gimnasio/`, `/ejercicios-sobre-balon/`,
   `/los-peligros-de-entrenar-como-un-preplaya/`, `/tiempos-entrenamiento/` and
   `/8-repeticiones-entrenando/`.
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

- **Push done 2026-11-07** (`f000c18`..`1442772`). Future batches deploy via Workers Builds; run
  `npm run verify` first.
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

## Session close (2026-11-07)

- Batches 8 and 9 wrote 19 pages (38 files) from `/tu-primer-dia-en-el-gimnasio.../` to
  `/gimnasio-de-la-vieja-escuela/`: 95/792 pages, 95 unique heroes.
- The FiveStars Fitness congress row was discarded by the owner and removed from the build.
- Gates are green: `check:copy` 4,845/4,845, build 206 pages, `check:i18n` 3,286/3,286.
- Both batches are pushed and live: production serves 206 pages and 202 sitemap URLs.
- The FiveStars Fitness page is 404 in production, as intended.
- Next session starts at `/entrenamiento-piramidal/`.
- Engram topic `content-library/handoff` is updated with this state.
