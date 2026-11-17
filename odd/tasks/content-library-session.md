# Content library — session handoff

Last updated: 2026-11-16. Read this first next session.

- Per-page record: `odd/tasks/content-pages.md`
- Page contract and copy gate: `odd/tasks/guides-page-contract.md`
- Repo rules: `AGENTS.md`
- Engram project: `webgymlab`

## State

- **351 / 792 bilingual pages** (ES 351, EN 351).
- Blocks: Entrenamiento **292**, Por Músculo **5**, Ejercicios **34**.
- **351 unique hero paths.** One exact duplicate pair remains from an earlier batch
  (`remo-polea-sentado` with `superserie-de-espalda-para-terminar-tu-rutina`), plus two pre-existing
  near pairs at dHash 4 and 5; the batch 17 to 34 duplicates were fixed. See `PLAN.md`.
- **Batch 34 is built, green and committed (2026-11-17).** The build has **698 pages** and **694
  sitemap URLs**. Abdomen (39/39), Hombro (5/5), Rutinas de Bíceps (7/7), Pecho (9/9), Pierna (9/9),
  Rutinas de Pierna (3/3), Rutinas de Tríceps (1/1), Rutinas de Pecho (1/1), Tríceps (1/1) and
  Rutinas de Fuerza (9/9) are closed. Rutinas de Volumen is 1/29.
- Five archive rows are settled and must stay out: the FiveStars Fitness congress page (discarded),
  the AEKE S1 Pro page (discarded 2026-11-14), `/velocidad-repeticiones/` (fused into the tempo page,
  2026-11-14) and the two batch 20 fusions (2026-11-15).
- **Production runs batch 32 (pushed 2026-11-16).** Batches 19 to 32 are live; `origin/main` is at
  the batch 32 docs push. Batches 33 and 34 are committed locally and not pushed.
- Batch records: `odd/tasks/content-library-batch-32.md`, `-33.md` and `-34.md`.

## Gates

```powershell
npm run check:copy   # 16,371/16,371
npm run build        # 658 pages
npm run check:i18n   # 10,292/10,292
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
- **Entrenamiento de los Bíceps (7):** the partner curl, the ten routines, bigger biceps, biceps and
  forearm anatomy, wrist position in the curl, big arms, and biceps progression.
- **Entrenamiento del Tríceps (3):** the ten routines, the long head, and triceps anatomy.
- **Abdomen (5):** Dorian Yates's routine, the Swiss-ball crunch, plate twists, the ab routine
  catalogue and isometric abs.
- **Recovery and planning (10):** back-pain exercises (YMYL), stretching, stretching circuit, muscle
  failure, periodization, exercise and immune system, deload week, sleep, training planning and
  muscle recovery.

## Next 10

1. Batch 35 is the next ten Rutinas de Volumen rows from `/rutina-de-tiron-empujon/` to
   `/rutina-con-superseries-musculos-antagonistas/`; the brief already exists at
   `odd/tasks/content-library-batch-35.md`. After it, the volume block continues with
   `/rutina-con-multipower/`.
2. Keep the same copy, unique-hero and gate flow.
3. Before publishing another photo from Shixart1985, Nenad Stojkovic, Miguel Angel Omaña Rojas, the
   InjuryMap family, PTPioneer, KeepActive Australia, Everkinetic or Wellcome Collection, compare the
   Commons file title and the dHash against the 331 existing heroes. A crop of a library hero scores
   1-5 and is a duplicate in practice, not only at 0.
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
- Phase 10: coupling audit and themeability (2026-11-16). Measured: the article route is a 24-line
  wrapper, all 86 article CSS rules live in `ArticleLayout.astro`, the only class inside content is
  `text-table`, and eight literal hex colours in `Header.astro` are not tokens. The phase exists so
  the next redesign is one file, not 642 edits; it ships no visual change.
- Engram topic `content-library/handoff` covers the current state; the scaling architecture is PLAN
  Phase 7.
- **Open defects to pick up, none blocking:** the isometric pair now links `/plancha-lateral-tecnica-y-beneficios/`,
  `/press-pallof/` and `/plancha-con-peso/` (batches 29 and 30). `/encogimientos-invertidos/` is
  published, so the bench reverse crunch page can link its floor regression when that page is next
  touched. One pre-existing 3 px clipped cell in `/rutinas-espalda/` (a nowrap numeric column) is
  documented in the batch 22 record.
- **Push is the owner's call:** satisfied on 2026-11-16. Batches 19 to 32 were pushed from
  `6293327` to `f7f8de1`; production serves 658 pages.

## Session close (2026-11-17, batch 34)

- Batch 34 closed Rutinas de Fuerza and opened Rutinas de Volumen: 10 pairs, 341 → **351 / 792**.
  Rutinas de Fuerza **9/9**; Rutinas de Volumen 1/29.
- Writers: A pages 1-5 (hub, Bilbo, Wendler, 5x5, upper-body programme), B pages 6-10 (Starting
  Strength, powerlifting, 3x2, Korte, GVT), disjoint files. The parent registered the routes, fixed two
  390 px table defects, ran the gates and committed per page.
- Gates: `check:copy` **17,391/17,391**, build **698 pages**, `check:i18n` **10,912/10,912**, sitemap
  **694 URLs** with 2,082 alternates. 134 internal links, **0 broken**; all 20 pages clean at 390 px.
- Heroes: 341 files; the only dHash pairs under distance 7 are the three pre-existing ones.
- Commits: pages `b4ca8ea`, `93f82b3`, `7d8e75e`, `9d9b7ad`, `2bc10b8`, `27ad035`, `0c0cb54`,
  `e6e8b7d`, `98196d9`, `20af704`; routes `028ab29`.
- **Gotcha:** a schedule table with a long header ("Series y repeticiones") overflows 14 px at 390 px
  in the routine grid even when its cells are short. Schedules are `<table class="text-table">`.
- **Gotcha:** a hero at dHash 6 can still be the same photograph (a tighter crop). Open the closest
  hero before vendoring, not only when the distance is 0.
- Next session starts at `/rutina-de-tiron-empujon/`; the batch 35 brief is already written.

## Session close (2026-11-17, batch 33)

- Batch 33 closed Pierna and the three loose routine rows: 10 pairs, 321 → **331 / 792**. Pierna 9/9,
  Rutinas de Pierna 3/3, Rutinas de Tríceps 1/1, Rutinas de Pecho 1/1 and Tríceps 1/1.
- Writers: A took pages 1-5 (leg mass, double split, hub, calves, hamstrings), B pages 6-10 (quad
  templates, old-school squats, triceps mass, rest-pause chest, triceps shock), disjoint files. Both
  returned green; the parent registered the routes, ran the gates, the 390 px pass and the commits.
- Gates: `check:copy` **16,881/16,881**, build **678 pages**, `check:i18n` **10,602/10,602**, sitemap
  **674 URLs** with 2,022 alternates. 156 internal links, **0 broken**; all 20 pages clean at 390 px.
- Heroes: 331 files. The only dHash pairs under distance 7 are the three pre-existing ones
  (`remo-polea-sentado` 0, `como-respirar-mientras-entrenamos` 4, `pullover-barra` 5); every new hero
  is 13 or more away from anything else.
- Commits: pages `87a98f4`, `1426ae9`, `9d7bca5`, `06780fc`, `077c6ff`, `a3eae69`, `9d4afa8`,
  `737def5`, `1694731`, `4830d3c`; routes `3f34e3a`.
- **Gotcha:** `check:copy` catches an exact hero path duplicate, not a crop. A 1280x720 crop of a
  library photo hashes 1-5 from the original, so the dHash distance must be read, not only the zero.
- **Gotcha:** Commons has no usable free photo of a leg extension machine or a gym parallel-bar dip;
  pages 6 and 10 use equipment fallbacks with an alt that names only what is visible.
- Next session starts at `/rutinas-de-fuerza/`; the batch 34 brief is already written.

## Session close (2026-11-16, push of batches 19-32)

- Pushed `6293327..f7f8de1`: **180 commits**, batches 19 to 32. Nothing is pending locally and
  `origin/main` matches `main`.
- Gates at the push: `check:copy` **16,371/16,371**, build **658 pages**, `check:i18n`
  **10,292/10,292**.
- Production verified after the Workers build: sitemap **654 URLs** with 1,962 alternates, and the
  new routes answer 200 (`/es/rutinas-pecho/`, `/en/chest-routines/`, `/es/face-pull/`,
  `/en/calf-routines/`, `/es/plancha-lateral-tecnica-y-beneficios/`, `/en/bench-press-strength/`).
- Library at **321 / 792**. Closed: Abdomen 39/39, Hombro 5/5, Rutinas de Bíceps 7/7, Pecho 9/9,
  Rutinas de Pierna 3/3. Pierna is 2/9.
- **Where the next session starts:** `/rutina-volumen-pierna-completa/`, then
  `/rutina-de-piernas-de-doble-division/`, `/rutinas-pierna/`,
  `/entrenamiento-de-gemelos-diferente/`, `/entrenar-femorales/`,
  `/rutinas-cuadriceps-objetivos/` and `/rutina-de-piernas-con-sentadillas-de-la-vieja-escuela/`.
  After those, the three loose routine rows.
- **Not started, by design:** Phase 10 (coupling audit and themeability) ships no visual change; the
  next redesign should wait for it. Phase 1 (article JSON-LD and OG image), Phase 2 (guides hub and
  menu), Phase 5 (image pipeline) and Phase 6 (Search Console read on 2026-11-19) remain open.
- **Two clean-up items nobody owns yet:** the six stray images in the repo root
  (`bands.jpg`, `curl.jpg`, `fly.jpg`, `front.jpg`, `me.jpg`, `model.jpg`) and the eleven untracked
  mockups in `odd/mockups/`; both predate this session.

## Session close (2026-11-16, batches 30, 31 and 32)

- Three batches in one session, all committed, none pushed. Thirty pairs: 291 → **321 / 792**.
  Abdomen, Hombro, Rutinas de Bíceps and Pecho are closed; Rutinas de Pierna is 3/3 and Pierna has two
  of nine.
- Writers: two per batch, pages 1-5 and 6-10, disjoint files. The parent fixed the `section` casing
  against `guides-nav.ts`, stripped a PowerShell BOM from seven files, converted a clipped schedule
  table to a text table and re-pointed the isometric pair at the new plank pages.
- Gates: `check:copy` **16,371/16,371**, build **658 pages**, `check:i18n` **10,292/10,292**, sitemap
  **654 URLs** with 1,962 alternates. 306 internal links across the 60 files, 0 broken. 321 heroes,
  320 distinct dHash. All 60 pages clean at 390 px.
- Commits: thirty page commits, `f1e7b00` (routes for 30-32) and a text-table fix.
- **Gotcha:** a three-column markdown text table inherits the 58/21/21 routine geometry and clips its
  middle column at 390 px. Schedules and comparisons must be `<table class="text-table">`.
- **Gotcha:** `Set-Content -Encoding utf8` in PowerShell 5 writes a BOM. Use Python or .NET for
  in-place encoding edits; the gate does not catch it, Astro tolerates it, but it is not shipped.
- **Gotcha:** hero uniqueness decays during a parallel batch. A photo validated against 301 heroes can
  collide with a page the other writer publishes minutes later; re-run the dHash after the pair
  closes.
- **Gotcha:** several archive pages carry no sets or reps (chest alternation, chest without bench,
  shoulder routines 2-3-5-6). Declaring the general scheme in prose is the honest option; never fill a
  table with invented numbers.
- Next session starts at `/rutina-volumen-pierna-completa/`.

## Session close (2026-11-16, batches 28 and 29)

- Two batches in one session, both committed, neither pushed. Batches 28 and 29 added twenty abdomen
  pairs: 271 → **291 / 792**, abdomen 15/39 → **35/39**, twenty new heroes. Four rows stay for
  batch 30.
- Writers: two per batch, pages 1-5 and 6-10, disjoint files. The parent fixed the missing intra-batch
  cross-links, added the isometric pair's links to the new Pallof and weighted-plank pages, registered
  both batches' routes in one commit, ran the gates and committed per page.
- Gates: `check:copy` **14,841/14,841**, build **598 pages**, `check:i18n` **9,362/9,362**, sitemap
  **594 URLs** with 1,782 alternates. All 60 pages of batches 27-29 clean at 390 px. dHash over 291
  heroes: 290 distinct, only the known `remo-polea-sentado` pair.
- Commits: batch 28 pages `610eb6f`, `241003e`, `a70e95f`, `63842f2`, `c797d83`, `b318cca`,
  `f1d8a83`, `d0bfb1c`, `e53623c`, `8a1cacc`; batch 29 pages `5a270d2`, `ae234cd`, `e49ec6e`,
  `ecf8085`, `94111c3`, `3631ea5`, `28bed03`, `5c8c33f`, `bbcc62b`, `83bfb03`; routes shared.
- **Gotcha:** the archive's rotation pages ("encogimientos con giro son peligrosos" on the hanging
  side leg raise page) contradict the rotation pages of batch 28. House line: light load and a small
  range are fine; the risk is heavy load, a fixed pelvis and a long lever at end range.
- **Gotcha:** the obvious cable-station and hanging photos are largely spent. Three plausible cable
  heroes hashed 0 against earlier pages, and five of the twenty new heroes are equipment or anatomy
  fallbacks with an honest alt. Check the dHash immediately before downloading, not before searching.
- **Gotcha:** Commons has no free photo of a Pallof press, a bicycle crunch, a finger-to-heel reach or
  a side jackknife. Plan the alt around what exists instead of hunting the exact movement.
- Next session starts at `/encogimientos-invertidos/`, then the three plank rows.

## Session close (2026-11-16, batch 27)

- Batch 27 added ten abdomen pairs from `/abdominales-ejercicios-colgado/` to `/rodar-con-barra/`:
  261 → 271/792, abdomen 5/39 → 15/39, 10 new heroes. Writers A and B split pages 1-5 and 6-10; the
  parent added the hub cross-links, rebuilt one hero crop, ran the gates and committed per page.
- Gates: `check:copy` 13,821/13,821, build **558 pages**, `check:i18n` 8,742/8,742, sitemap
  **554 URLs** with 1,662 alternates. 100 internal links, 0 broken; all 20 pages clean at 390 px.
- Commits: pages `edd9506`, `8178ef5`, `dace7d7`, `2e2e6f0`, `0dac076`, `7c23769`, `5dd9b1e`,
  `86ad6aa`, `db13f12`, `f28b312`; routes `7fa76c6`; docs `65e9b14`.
- **Gotcha:** the archive's "encogimientos en banco inclinado" is a decline bench. The page says it
  once and keeps the archive slug.
- **Gotcha:** `1112 Muscles of the Abdomen` (OpenStax) is 1046 px wide, labelled in English and has
  its caption inside the file. Crop above the caption row (y=575 of 1351) before scaling to 1280; the
  plate is upscaled 1.22×, still passes, and is now the smallest source hero in the library.
- **Gotcha:** the obvious "Sit-up with weight" photo hashes 0 against the Dorian Yates hero
  (`embhoo`). The dHash check caught it before vendoring.
- **Gotcha:** the Commons API answers 429 after a handful of queries and 400 for thumbnail widths
  outside its allowed list; `Special:FilePath/<file>?width=1280` still works.
- Next session starts at `/encogimientos-abdominales-suelo/`.

## Session close (2026-11-16, batches 24, 25 and 26)

Three batches in one session, all committed, none pushed.

- **Batch 24:** closed Entrenamiento de las Piernas (18/18) and opened chest. 10 pairs, 231 → 241.
- **Batch 25:** closed chest (6/6) and put biceps at 5/7. 10 pairs, 241 → 251.
- **Batch 26:** closed biceps (7/7) and triceps (3/3), opened abdomen (5/39). 10 pairs, 251 → 261.
- Gates after the three: `check:copy` 13,311/13,311, build **538 pages**, `check:i18n` 8,432/8,432,
  sitemap **534 URLs** with 1,602 alternates. 270 internal links across the 60 files, 0 broken. All 60
  pages clean at 390 px. dHash over 261 heroes: 260 distinct.
- Commits: 30 page commits, three route commits (`d3d44fa`, `bef44e4`, `8ad74c0`), batch docs and a
  polish pass (`d54fd73`) that caught a writer's final edits made after its pages were committed.
- **Editorial wins worth remembering:** the calf rule (straight leg = gastrocnemius, bent = soleus),
  the incline ceiling at 30 degrees, the rectus abdominis as one muscle, the brachialis not being the
  main flexor, and the biceps peak being genetic.
- **Known thin pages:** `/cabeza-larga-del-triceps/` and `/como-proteger-tus-rodillas-en-el-entrenamiento-de-cuadriceps/`
  are the shortest of the 60; both were built from 225 and 297 archive words.
- **Pending decisions for the owner:** push the 106 commits, and whether
  `/como-proteger-tus-rodillas/` and `/aumentar-biceps/` stay as pages or fold into their siblings when
  the abdomen block is done.

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
