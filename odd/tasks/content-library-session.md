# Content library — session handoff

Last updated: 2026-11-12. Read this first next session.

- Per-page record: `odd/tasks/content-pages.md`
- Page contract and copy gate: `odd/tasks/guides-page-contract.md`
- Repo rules: `AGENTS.md`
- Engram project: `webgymlab`

## State

- **155 / 792 bilingual pages** (ES 155, EN 155).
- Blocks: Entrenamiento **116**, Por Músculo **5**, Ejercicios **34**.
- **155 unique hero paths.** Three older pages share a byte-identical hero (see the follow-up below).
- **Batch 15 is built, green and pushed (2026-11-13).** The build has **326 pages** and
  **322 sitemap URLs**.
- One archive row is discarded and must stay out: the FiveStars Fitness congress page.
- Batch record: `odd/tasks/content-library-batch-15.md`.

## Gates

```powershell
npm run check:copy   # 7,905/7,905
npm run build        # 326 pages
npm run check:i18n   # 5,146/5,146
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
- **Musculación (74):** the first twenty-five, batches 8 to 13: choosing a gym, the Bulgarian method,
  one-rep max, somatotypes, muscle fibre types, the 100-push-up plan, training mistakes, fitness
  tests, muscle oxygenation, ballistic training, the training-frequency myth, heavy days, split
  routines, fibre recruitment by exercise, 1RM in volume routines, exercise technique, muscle
  contractions, natural muscle growth, training with music, gym etiquette, training in hot weather,
  Smith-machine plateaus, range of motion, soreness versus growth, breathing and body recomposition,
  and training with a partner.
- **Ejercicio Cardiovascular (23):** the 13 from batch 14, plus where cardio fits in a programme,
  cardio routines, weights and heart health, fasted cardio, continuous methods, aerobic machines,
  aerobic adaptations, aerobic training and muscle loss, too much cardio and maximum heart rate.
- **Recovery and planning (10):** back-pain exercises (YMYL), stretching, stretching circuit, muscle
  failure, periodization, exercise and immune system, deload week, sleep, training planning and
  muscle recovery.

## Next 10

1. Start at `/ropa-y-calzado-para-el-ejercicio-cardiovascular/`.
2. Then `/saltar-comba/`, `/flato-prevenirlo-eliminarlo/`,
   `/cinta-correr-vs-bicicleta-para-quemar-grasa/`, `/test-de-cooper/`,
   `/consigue-correr-30-minutos-seguidos/`, `/caminar-como-metodo-para-perder-grasa-y-estar-en-forma/`,
   `/bicicleta-para-perder-grasa/`, `/spinning-mejores-consejos-por-nivel/` and
   `/entrenamiento-alta-intensidad/` (first row of the next Entrenamiento subsection).
3. Keep the same copy, unique-hero and gate flow.
4. Replace two of the three pages that share a byte-identical hero: `/ejercicios-en-polea-ventajas`,
   `/escoger-actividad-en-tu-vuelta-al-gimnasio`, `/jalones-frontales-brazos-rectos`.
5. The scaling architecture is deferred to PLAN Phase 7; do not implement it during content batches.

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

## Session close (2026-11-13)

- Batch 15 wrote 10 page pairs (20 files) from `/entrenamiento-cardiovascular-…/` to
  `/calcular-frecuencia-cardiaca-maxima/`: 155/792 pages, 10 new unique heroes.
- Two writers ran sequentially, five pairs each; a server restart interrupted the second writer and
  the rerun completed the same five pairs. The parent replaced two duplicated heroes, added the
  cross-links, registered the routes and ran the gates.
- Gates are green: `check:copy` 7,905/7,905, build **326 pages**, `check:i18n` 5,146/5,146, sitemap
  **322 URLs** with 966 alternates.
- Structural checks the gate does not cover, run by hand on the 20 built pages: 84 internal links all
  resolve; zero `.md` links, zero `#` links and zero em dashes; 104 TOC anchors match their heading
  ids; 8 text tables across the batch.
- Commits, one per page with its checklist rows marked: `f73e3bf`, `3cb25d9`, `9f29db4`, `c48b44a`,
  `480dc89`, `a12c220`, `2193647`, `26f9b22`, `f3d936f`, `3ae7307`; routes `ab22bdb`; docs after
  this. Push and production verification recorded in the batch 15 doc.
- **Gotcha:** `check:copy` compares hero paths, not bytes; hash every new hero. Two batch 15 heroes
  repeated earlier images and had to be replaced.
- **Gotcha:** Wikimedia Commons rate-limits the Action API; leave 4–10 s between calls.
- **Archive edits:** two data tables that only existed as JPGs were transcribed; the printed
  programme totals were preserved even where the listed sessions add up differently.
- Next session starts at `/ropa-y-calzado-para-el-ejercicio-cardiovascular/`.
- Engram topic `content-library/handoff` is updated with this state.
