# Content library — session handoff

Last updated: 2026-11-12. Read this first next session.

- Per-page record: `odd/tasks/content-pages.md`
- Page contract and copy gate: `odd/tasks/guides-page-contract.md`
- Repo rules: `AGENTS.md`
- Engram project: `webgymlab`

## State

- **183 / 792 bilingual pages** (ES 183, EN 183).
- Blocks: Entrenamiento **144**, Por Músculo **5**, Ejercicios **34**.
- **183 unique hero paths.** Three suspected pairs from earlier batches remain (dHash 1-5, same
  author); the batch 17 and 18 duplicates were fixed. See the follow-up in `PLAN.md`.
- **Batch 18 is built and green locally (2026-11-14); batch 17 is the last one live.** Pending: push
  batch 18, which leaves the build at **382 pages** and **378 sitemap URLs**.
- Three archive rows are settled and must stay out: the FiveStars Fitness congress page (discarded),
  the AEKE S1 Pro page (discarded 2026-11-14) and `/velocidad-repeticiones/` (fused into the tempo
  page, 2026-11-14).
- Batch record: `odd/tasks/content-library-batch-18.md`.

## Gates

```powershell
npm run check:copy   # 9,333/9,333
npm run build        # 382 pages
npm run check:i18n   # 6,014/6,014
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
- **Ejercicio Cardiovascular (33):** the 23 from batch 15, plus clothing and shoes, jump rope, side
  stitch, treadmill vs bike, the Cooper test, the 30-minute running plan, walking, cycling and
  spinning.
- **Entrenamiento (19):** high-intensity training methods and rules, giant sets, muscle memory, the
  ten machine exercises, functional training, the gym warm-up, yoga for bodybuilders, supersets, the
  Weider principles, forced reps, partial reps, super-slow training, cheat reps, drop sets,
  pre-fatigue, tri-sets, rest-pause, alternating sets and negative reps.
- **Recovery and planning (10):** back-pain exercises (YMYL), stretching, stretching circuit, muscle
  failure, periodization, exercise and immune system, deload week, sleep, training planning and
  muscle recovery.

## Next 10

1. Start at `/ejercicios-de-alta-intensidad/` and follow the pending rows in `content-pages.md` in
   order.
2. Keep the same copy, unique-hero and gate flow.
3. Before publishing another photo from Shixart1985, Nenad Stojkovic or Miguel Angel Omaña Rojas,
   compare the Commons file title and the dHash against the 183 existing heroes: three suspected
   duplicate pairs remain from earlier batches.
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

## Session close (2026-11-14, batch 18)

- Batch 18 wrote 9 page pairs (18 files) from `/repeticiones-parciales/` to
  `/repeticiones-negativas/`: 183/792 pages, 9 new heroes. `/velocidad-repeticiones/` was fused into
  the tempo page instead of published.
- Two writers ran sequentially: Writer A took pages 1-5, Writer B pages 6-9 plus the merge. The parent
  replaced one undersized hero, added 24 cross-links, registered the routes and ran the gates.
- Gates: `check:copy` 9,333/9,333, build **382 pages**, `check:i18n` 6,014/6,014, sitemap **378 URLs**
  with 1,134 alternates.
- Structural checks the gate does not cover: 404 internal links all resolve; zero `.md` links, zero
  empty `#` links and zero em dashes in the sources; 112 TOC anchors match; 12 tables, all within the
  three-column rule.
- Commits: pages `c5f12c8`, `af0e50e`, `fa86bb4`, `9cff69c`, `6c15137`, `48a124d`, `eb8b531`,
  `db4d137`, `983ded4`; merge `fac33b0`; routes `e0ae34f`; docs commit and push added at close.
  **The push waits for the owner's go-ahead.**
- **Gotcha:** a small Commons photo can pass every gate; check pixel dimensions, not only file size.
  The seated calf-raise source was 640×384 and had to be replaced.
- **Gotcha:** `check:copy` does not validate link resolution; the 404-link check is a separate script.
- **Gotcha:** the English Weider page names the alternating-set principle `Interleaved sets`, so
  English anchors must use that wording.
- Next session starts at `/ejercicios-de-alta-intensidad/`.
- Engram topic `content-library/handoff` is updated with this state.
