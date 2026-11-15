# Content library — session handoff

Last updated: 2026-11-12. Read this first next session.

- Per-page record: `odd/tasks/content-pages.md`
- Page contract and copy gate: `odd/tasks/guides-page-contract.md`
- Repo rules: `AGENTS.md`
- Engram project: `webgymlab`

## State

- **201 / 792 bilingual pages** (ES 201, EN 201).
- Blocks: Entrenamiento **162**, Por Músculo **5**, Ejercicios **34**.
- **201 unique hero paths.** One exact duplicate pair remains from an earlier batch
  (`remo-polea-sentado` with `superserie-de-espalda-para-terminar-tu-rutina`); the batch 17 to 20
  duplicates were fixed. See the follow-up in `PLAN.md`.
- **Batch 20 is built, green and committed (2026-11-15).** The build has **418 pages** and
  **414 sitemap URLs**. The last eight rows of the Prevención block shipped as pages; the two
  duplicate rows were fused.
- Four archive rows are settled and must stay out: the FiveStars Fitness congress page (discarded),
  the AEKE S1 Pro page (discarded 2026-11-14), `/velocidad-repeticiones/` (fused into the tempo page,
  2026-11-14) and the two batch 20 fusions (2026-11-15).
- Batch record: `odd/tasks/content-library-batch-20.md`.

## Gates

```powershell
npm run check:copy   # 10,251/10,251
npm run build        # 418 pages
npm run check:i18n   # 6,572/6,572
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
- **Entrenamiento (23):** high-intensity training methods and rules, giant sets, muscle memory, the
  ten machine exercises, functional training, the gym warm-up, yoga for bodybuilders, supersets, the
  Weider principles, forced reps, partial reps, super-slow training, cheat reps, drop sets,
  pre-fatigue, tri-sets, rest-pause, alternating sets, negative reps, high-intensity finishers, the
  peak-contraction principle, when to see a sports doctor and training through summer.
- **Prevención y Recuperación de Lesiones (6):** the most injurious exercises, common gym injuries,
  correct posture, physiotherapy for chronic pain, soreness (DOMS) and overtraining.
- **Prevención y Recuperación de Lesiones (14):** the most injurious exercises, common gym injuries,
  correct posture, physiotherapy for chronic pain, soreness (DOMS), overtraining, active recovery,
  central nervous system fatigue, tennis elbow, carpal tunnel, Achilles tendinopathy, plantar
  fasciitis, training with back problems and patellar tendinopathy.
- **Recovery and planning (10):** back-pain exercises (YMYL), stretching, stretching circuit, muscle
  failure, periodization, exercise and immune system, deload week, sleep, training planning and
  muscle recovery.

## Next 10

1. Start at `/consejos-entrenar-deltoides-posterior/` and follow the pending rows in
   `content-pages.md` in order; the Entrenamiento del Hombro block has nine rows, then Físicos de
   leyenda.
2. Keep the same copy, unique-hero and gate flow.
3. Before publishing another photo from Shixart1985, Nenad Stojkovic, Miguel Angel Omaña Rojas or the
   InjuryMap illustration family, compare the Commons file title and the dHash against the 201
   existing heroes.
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

## Session close (2026-11-15, batch 20)

- Batch 20 closed the Prevención y Recuperación de Lesiones block: 8 page pairs (16 files) from
  `/recuperacion-activa-entrenamiento/` to `/tendinitis-rotuliana/`, 201/792 pages, 8 new heroes.
  Two rows were fused into published pages by owner decision (see the checklist).
- Writers: A took pages 1-4, B pages 5-8. The parent wrote the two fusions, registered the routes,
  ran the gates and committed per page.
- Gates: `check:copy` 10,251/10,251, build **418 pages**, `check:i18n` 6,572/6,572, sitemap
  **414 URLs** with 1,242 alternates.
- Structural checks: 116 internal links resolve; zero external links, `.md` links, `#` links, inline
  images, manual anchors or em dashes. All 16 pages render at 390 px with no horizontal overflow.
- Commits: fusions `a2fcb70`; pages `76e550d`, `980eed6`, `dfa320f`, `e4459bb`, `4f8af70`, `f698299`,
  `cd02fb9`, `eb04662`; routes `f5770e6`. Push pending owner go-ahead together with batch 19.
- **Gotcha:** the InjuryMap illustrations carry baked-in labels, Spanish on the plantar fascia figure
  and English on the spine figure, so each shows a foreign label on the other locale.
- **Gotcha:** `check:copy` still does not resolve internal links nor measure heroes; both are separate
  passes.
- Next session starts at `/consejos-entrenar-deltoides-posterior/`.
- Engram topic `content-library/handoff` is updated with this state.

## Session close (2026-11-15, batch 19)

- Batch 19 wrote 10 page pairs (20 files) from `/ejercicios-de-alta-intensidad/` to
  `/sobreentrenamiento/`: 193/792 pages, 10 new heroes.
- Two writers ran in parallel over disjoint files: Writer A took pages 1-5, Writer B pages 6-10. The
  parent registered the routes, added five same-batch cross-links, ran the gates and committed per
  page.
- Gates: `check:copy` 9,843/9,843, build **402 pages**, `check:i18n` 6,324/6,324, sitemap **398 URLs**
  with 1,194 alternates.
- Structural checks the gate does not cover: 117 internal links all resolve; zero external links,
  zero `.md` links, zero `#` links, zero inline images, zero manual anchors and zero em dashes in the
  20 files. dHash over all 193 heroes: 192 distinct, the only distance-0 pair is the pre-existing
  `remo-polea-sentado` / `superserie-de-espalda-para-terminar-tu-rutina`.
- Commits: pages `e9d5b89`, `672b933`, `415dbaa`, `63b3cdb`, `857485f`, `771248a`, `cddead5`,
  `7cd3627`, `b8507d2`, `082e1db`; routes `90288dd`. Push pending owner go-ahead.
- **Gotcha:** `check:copy` does not resolve internal links. The 404-link check is still a separate
  pass.
- **Gotcha:** the archive's old pages mix in promos (clinics, supplements, newsletters) and invented
  numeric protocols. Read them as raw material, never as house copy.
- Next session starts at `/recuperacion-activa-entrenamiento/`.
- Engram topic `content-library/handoff` is updated with this state.

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
  `db4d137`, `983ded4`; merge `fac33b0`; routes `e0ae34f`; docs `7aa2ca8`. Pushed
  `6df914a..7aa2ca8` with the owner's explicit go-ahead; production verified at **378 sitemap URLs**
  and 1,134 alternates, with the new routes answering 200.
- **Gotcha:** a small Commons photo can pass every gate; check pixel dimensions, not only file size.
  The seated calf-raise source was 640×384 and had to be replaced.
- **Gotcha:** `check:copy` does not validate link resolution; the 404-link check is a separate script.
- **Gotcha:** the English Weider page names the alternating-set principle `Interleaved sets`, so
  English anchors must use that wording.
- Next session starts at `/ejercicios-de-alta-intensidad/`.
- Engram topic `content-library/handoff` is updated with this state.
