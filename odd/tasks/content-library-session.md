# Content library — session handoff

Last updated: 2026-11-12. Read this first next session.

- Per-page record: `odd/tasks/content-pages.md`
- Page contract and copy gate: `odd/tasks/guides-page-contract.md`
- Repo rules: `AGENTS.md`
- Engram project: `webgymlab`

## State

- **261 / 792 bilingual pages** (ES 261, EN 261).
- Blocks: Entrenamiento **222**, Por Músculo **5**, Ejercicios **34**.
- **261 unique hero paths.** One exact duplicate pair remains from an earlier batch
  (`remo-polea-sentado` with `superserie-de-espalda-para-terminar-tu-rutina`); the batch 17 to 24
  duplicates were fixed. See the follow-up in `PLAN.md`.
- **Batch 25 is built, green and committed (2026-11-16).** The build has **518 pages** and
  **514 sitemap URLs**. Chest is closed at 6/6 and the biceps block has five of its seven pages.
- Five archive rows are settled and must stay out: the FiveStars Fitness congress page (discarded),
  the AEKE S1 Pro page (discarded 2026-11-14), `/velocidad-repeticiones/` (fused into the tempo page,
  2026-11-14) and the two batch 20 fusions (2026-11-15).
- Batch record: `odd/tasks/content-library-batch-26.md`.

## Gates

```powershell
npm run check:copy   # 13,311/13,311
npm run build        # 538 pages
npm run check:i18n   # 8,432/8,432
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
- **Entrenamiento del Hombro (9):** rear delts, trap execution, the military press comparison, shoulder
  anatomy, shoulder stretches, the complete routine, Arnold's techniques, trap placement and the
  upright row grip.
- **Físicos de Leyenda (1):** Jay Cutler's hamstring routine.
- **Físicos de Leyenda (11):** Jay Cutler's hamstring routine, Franco Columbu, Ronnie Coleman,
  Mike Mentzer and the Heavy Duty, the complete Mr. Olympia winners, Jeff Seid, Simeon Panda,
  Andreia Brazier, Larry Scott, Arnold's exercises and Shawn Ray's competition preparation.
- **Entrenamiento de las Piernas (18):** box squat heights, hip thrust benefits, hamstring training,
  quadriceps anatomy, quadriceps myths, the best quadriceps exercises, the glute warm-up, hamstring
  anatomy, leg press foot position, squat gaze, standing versus seated calf raises, squat versus leg
  press, calf anatomy, the knee-friendly warm-up, tibialis anterior, static versus walking lunges, hip
  anatomy and calf growth.
- **Entrenamiento del Pecho (6):** dumbbells versus barbell, chest anatomy, the incline angle, gaining
  pectoral muscle, machines versus free weights, and training chest with dumbbells.
- **Entrenamiento de los Bíceps (5):** the partner curl, the ten routines, bigger biceps, biceps and
  forearm anatomy, and wrist position in the curl.
- **Recovery and planning (10):** back-pain exercises (YMYL), stretching, stretching circuit, muscle
  failure, periodization, exercise and immune system, deload week, sleep, training planning and
  muscle recovery.

## Next 10

1. Start at `/consigue-grandes-brazos/` and follow the pending rows in `content-pages.md` in order;
   the biceps block has two rows left, then the triceps block.
2. Keep the same copy, unique-hero and gate flow.
3. Before publishing another photo from Shixart1985, Nenad Stojkovic, Miguel Angel Omaña Rojas, the
   InjuryMap family, PTPioneer, KeepActive Australia, Everkinetic or Wellcome Collection, compare the
   Commons file title and the dHash against the 231 existing heroes. That shoot has already produced
   three collisions.
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

## Session close (2026-11-16, batch 24)

- Batch 24 closed the legs block and opened chest: 10 page pairs (20 files), 241/792 pages, 10 new
  heroes. Writers A and B split pages 1-5 and 6-10; the parent registered routes, fixed one table
  wrap defect and committed per page.
- Gates: `check:copy` 12,291/12,291, build **498 pages**, `check:i18n` 7,812/7,812, sitemap
  **494 URLs** with 1,482 alternates.
- Commits: layout `f0f5cfd`; pages `80d4887`, `cd2b232`, `cad1da0`, `722d7fd`, `ec207ae`,
  `2dbd755`, `160ad41`, `ae0ec06`, `0815d71`, `728641a`; routes `d3d44fa`.
- **Gotcha:** the reps column is nowrap, so a five-number string clips; on mobile those two columns
  now wrap at the commas and drop to 0.8rem.
- Next session starts at `/anatomia-del-pecho/`.

## Session close (2026-11-16, batch 23)

- Batch 23 closed Físicos de leyenda with `/serie-dorian-yates/` and opened the legs block: 10 page
  pairs (20 files), 231/792 pages, 10 new heroes.
- Writers: A took pages 1-5, B pages 6-10. The parent registered the routes, replaced two heroes and
  committed per page.
- Gates: `check:copy` 11,781/11,781, build **478 pages**, `check:i18n` 7,502/7,502, sitemap
  **474 URLs** with 1,422 alternates.
- Structural checks: 96 internal links resolve; zero external links, `.md` links, `#` links, inline
  images, manual anchors or em dashes. All 20 pages render at 390 px with no overflow and no clipped
  cells.
- Commits: pages `cce451c`, `e275207`, `73779ed`, `8fd6a16`, `76a9a4b`, `2ee3117`, `1ba61e1`,
  `c09988e`, `7760dc0`, `fad0054`; routes `ed321f0`. Push pending owner go-ahead with batches 19-22.
- **Gotcha:** the Nenad Stojkovic squat photos are already deployed twice
  (`rutina-espalda-amplitud-densidad`, `pesas-salud-cardiovascular`). Two different file names from
  that shoot hash to the same picture, so the dHash check must run before vendoring, not after.
- **Gotcha:** a portrait hero loses its labels in the 16:9 band. Crop the file itself to 16:9 around
  the meaningful region instead of relying on the layout.
- Next session starts at `/sentadilla-mirada-al-frente/`.
- Engram topic `content-library/handoff` is updated with this state.

## Session close (2026-11-16, batch 22)

- Batch 22 published ten of the eleven remaining Físicos de leyenda rows: 10 page pairs (20 files)
  from Franco Columbu to Shawn Ray, 221/792 pages, 10 new heroes. `/serie-dorian-yates/` is the last.
- Writers: A took pages 1-5, B pages 6-10. The parent verified the Olympia list against the public
  source, fixed one clipped reps cell, registered the routes and committed per page.
- Gates: `check:copy` 11,271/11,271, build **458 pages**, `check:i18n` 7,192/7,192, sitemap
  **454 URLs** with 1,362 alternates.
- Structural checks: 96 internal links resolve; zero external links, `.md` links, `#` links, inline
  images, manual anchors, em dashes or supplement sections. All 20 pages render at 390 px with no
  overflow.
- Commits: pages `f066884`, `8287b93`, `2f47115`, `8fd66c3`, `8e09690`, `19700ff`, `f7ef4e0`, `1d923ef`,
  `632feaf`, `0c7c445`; routes `10f3b1f`. Push pending owner go-ahead together with batches 19-21.
- **Gotcha:** `white-space: nowrap` on the sets and reps columns means any cell text longer than the
  column clips instead of wrapping. Keep rep strings numeric and explain exceptions in the prose.
- **Gotcha:** the Commons thumbnail endpoint rejects arbitrary widths on `upload.wikimedia.org`;
  `Special:FilePath/<file>?width=N` still returns the requested size.
- **Gotcha:** `guia-de-entrenamiento-hitt` is the HIIT cardio guide, not high-intensity strength
  training; the strength page is `entrenamiento-alta-intensidad`.
- Next session starts at `/serie-dorian-yates/`.
- Engram topic `content-library/handoff` is updated with this state.

## Session close (2026-11-15, batch 21)

- Batch 21 closed the Entrenamiento del Hombro block and opened Físicos de leyenda: 10 page pairs
  (20 files) from `/consejos-entrenar-deltoides-posterior/` to `/rutina-de-femorales/`, 211/792 pages,
  10 new heroes.
- Writers: A took pages 1-5, B pages 6-10. The parent registered the routes, fixed two table defects
  in `ArticleLayout` and committed per page.
- Gates: `check:copy` 10,761/10,761, build **438 pages**, `check:i18n` 6,882/6,882, sitemap
  **434 URLs** with 1,302 alternates.
- Structural checks: 94 internal links resolve; zero external links, `.md` links, `#` links, inline
  images, manual anchors or em dashes. All 20 pages render at 390 px with no horizontal overflow.
- Commits: layout `9aa6efe`; pages `2627eb4`, `cb95795`, `ddab839`, `426075b`, `d6f1d8b`, `7f2c335`,
  `2b6da59`, `fa889a6`, `f3e6232`, `21d56bb`; routes `1693e32`. Push pending owner go-ahead together
  with batches 19 and 20.
- **Gotcha:** Astro scopes the trailing element of `:global(X) Y`. A rule written as
  `:global(table) th:nth-child(1)` needs the `th` inside `:global()` too, or the markdown cells, which
  carry no scope attribute, never match. The text-table and routine-table mobile rules both depend on it.
- **Gotcha:** the routine table's 58/21/21 geometry overflows a 390 px phone by 8 px because
  "Repeticiones" does not fit a 73 px column; the mobile block now uses 52/18/30 with tighter header
  padding.
- Next session starts at `/franco-columbu-dieta-y-entrenamiento/`.
- Engram topic `content-library/handoff` is updated with this state.

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
