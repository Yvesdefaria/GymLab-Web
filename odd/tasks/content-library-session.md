# Content library — session handoff

Last updated: 2026-11-24. Read this first next session.

- Per-page record: `odd/tasks/content-pages.md`
- Page contract and copy gate: `odd/tasks/guides-page-contract.md`
- Repo rules: `AGENTS.md`
- Engram project: `webgymlab`

## State

- **711 / 792 bilingual pages** (ES 711, EN 711).
- Blocks by archive section: Entrenamiento **217/222** (the five missing rows are settled: two
  descartadas and three fusionadas), Por Músculo **80/80**, Rutinas **80/80**, Ejercicios
  **196/196 — COMPLETO**, Nutrición 138/191, Mujer Fitness 0/23. The publishable total is 787.
  Suplementos Dietéticos is **35/35 — COMPLETO**; Nutrición Aplicada is 90/111.
- **711 unique hero paths.** The dHash pairs under 7 are listed in `PLAN.md`; every new one was opened
  and the equipment or subject differs.
- **Batch 71 is built, green and committed (2026-11-24).** The build has **1,438 pages** and **1,434
  sitemap URLs**. Batches 63-71 added 90 Nutrición Aplicada pairs.
- Five archive rows are settled and must stay out: the FiveStars Fitness congress page (discarded),
  the AEKE S1 Pro page (discarded 2026-11-14), `/velocidad-repeticiones/` (fused into the tempo page,
  2026-11-14) and the two batch 20 fusions (2026-11-15).
- **Production runs batch 32 (pushed 2026-11-16).** Batches 19 to 32 are live; `origin/main` is at
  the batch 32 docs push. Batches 33 to 71 are committed locally and not pushed.
- Batch records: `odd/tasks/content-library-batch-69.md`, `-70.md`, `-71.md` and the session closes
  below.

## Gates

```powershell
npm run check:copy   # 36,261/36,261
npm run build        # 1,438 pages
npm run check:i18n   # 22,382/22,382, 1,434 sitemap URLs
npm run verify       # all three, in that order
npm run dev          # http://localhost:4321
```

Start the dev server with `npm run dev` for local review.

## How to run the next batch

1. Take the first unchecked row in `content-pages.md`; the checklist is in archive order.
2. Map the ten sources with one read-only explorer: every routine, set, rep, percentage and rest with
   line cites; the numeric, medical and marketing claims; the register violations; the overlap with
   published pages; the one error to fix; and one honest angle per page.
3. Write `odd/tasks/content-library-batch-NN.md`: scope table (ES/EN slugs, source, words, keyword),
   binding conflicts, global rules with the link whitelist, tables and hero rules, per-page
   instructions, writer split, hero shortlist and the expected gate counts (pages = articles × 2 + 16,
   sitemap = pages − 4).
4. Register the routes before the writers finish: `ROUTE_PAIRS` in `astro.config.mjs`, and both `PAGES`
   and `ROUTES` in `scripts/check-i18n.mjs`. `check:i18n` is the gate that proves the pairing.
5. Launch two writers on disjoint files (`src/content/articles/{es,en}` plus
   `public/content/<es-slug>/hero.jpg`), each with the batch document, the contract, the
   `copy-editing` skill and `.agents/product-marketing.md`. Writers run `npm run check:copy` only; the
   parent builds, verifies and commits.
6. Verify with the parent scripts in `%TEMP%\opencode-parent` (`verify-NN.py`, `render-widths-NN.py`),
   then `npm run verify`, then tick `content-pages.md` (header, block row, `— COMPLETO` headings),
   update this file and `PLAN.md`, and commit per page plus routes and docs.

Never run analysis scripts from `%TEMP%\opencode`: a writer's `struct.py` there shadows the standard
library and breaks every Python process that imports Pillow.

## Gotchas that keep costing time

- **Heroes.** dHash 0 is a duplicate, crops have measured up to 14, and a distance of 7 can still be the
  same photograph. Open the closest hero before vendoring, always. White Everkinetic line art scores 4-7
  against other line art because empty space dominates the hash; open both drawings. The obvious Commons
  gym photos are spent; Everkinetic's `Category:Weight training diagrams` is the fallback, rendered
  through `thumb.wikimedia.org/.../<1280>px-<File>.svg.png` (1600 returns 400 on tall SVGs). Pexels is a
  working second source when Commons has no honest photo.
- **Tables.** The routine grid is 58/21/21 and clips any long header or long middle cell at 360–390 px.
  Schedules, week maps, phase tables, decision tables and hub summaries are `<table class="text-table">`.
- **Section casing.** `section` must match `src/data/guides-nav.ts` and the published pages, not the
  batch brief: 18 pages use `"Ejercicios de Tríceps"` with a capital T.
- **Encoding.** `Set-Content -Encoding utf8` writes a BOM that breaks the `---` frontmatter split. Use
  Python or the edit tool.
- **Parallel writers.** A writer's gate can fail on the other writer's half-written files; verify your
  own files with a grep and report, never fix them.
- **Dev server.** A long render loop can fail transiently while Astro recompiles; re-run before chasing
  a layout bug. Restart it before the render pass; a direct write can leave it serving stale content,
  and a restart during writes can throw a transient `EPERM` on `.astro/data-store.json`.
- **check:i18n and unbuilt routes.** The gate reads `dist` and throws `ENOENT` when `PAGES` lists a route
  whose page is not built yet. Register the routes per batch, or remove the not-yet-built ones before
  running it.
- **Calculator links.** The article-only link pass flags `/es/calcular-calorias/` and
  `/en/calorie-calculator/`; guide pages link articles only.
- **Slug typos.** A link with a double m (`sistema-immunologico` instead of `sistema-inmunologico`)
  passed `check:copy` and the build; only the parent link pass caught it.
- **Repo state.** The local branch is more than 150 commits ahead of origin; production runs batch 32.
  The 18 untracked files (six stray images in the root, twelve mockups) predate this work.

## What is built

The per-page record in `content-pages.md` is authoritative; this section summarises the blocks. At
**711 pages**, Por Músculo (80/80), Rutinas (80/80) and **Ejercicios (196/196)** are closed, and
Entrenamiento is effectively closed (217/222 with five settled rows). Nutrición is 138/191
(Suplementos **35/35 — COMPLETO**, Nutrición Aplicada 90/111) and Mujer Fitness 0/23.

The list below describes the blocks finished before batch 42; the checklist and the batch records carry
the current per-page state.

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

1. Batch 72 takes the next rows: `/marisco-minerales-proteinas/`, `/problema-raciones-de-comida/`,
   `/como-identificar-y-evitar-una-dieta-milagro/`, `/sustituir-batidos-por-comida-natural/`,
   `/frutos-secos/`, `/combinaciones-de-alimentos-saludables-y-no-saludables/`,
   `/alubias-excelente-alimento-para-tus-musculos/`, `/comer-carne-roja/`,
   `/programa-de-entrenamiento-para-aumentar-testosterona/` and `/dieta-de-hipertrofia-muscular/`.
2. Ejercicios is closed at 196/196 and Suplementos Dietéticos at 35/35. Nutrición is 138/191; Mujer
   Fitness 0/23.
3. Keep the same copy, unique-hero and gate flow.
4. Before publishing another photo from Shixart1985, Nenad Stojkovic, Miguel Angel Omaña Rojas, the
   InjuryMap family, PTPioneer, KeepActive Australia, Everkinetic or Wellcome Collection, compare the
   Commons file title and the dHash against the 711 existing heroes. A crop of a library hero scores
   1-14 and is a duplicate in practice, not only at 0.
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
- **Push is the owner's call:** batches 19 to 32 were pushed on 2026-11-16 from `6293327` to
  `f7f8de1`. Batches 33 to 47, page commits and docs, remain local; production still serves 658 pages.

## Session close (2026-11-24, wrap: batches 69 to 71)

- Three batches in one session: **681 → 711 / 792**, 30 bilingual pairs, 60 files, 30 heroes.
  Nutrición 108 → **138/191**; Nutrición Aplicada is 90/111.
- Final gates: `check:copy` **36,261/36,261**, build **1,438 pages**, `check:i18n` **22,382/22,382**,
  sitemap **1,434 URLs** with 4,302 alternates. 370 internal links across the 60 files, **0 broken**;
  420 page/width pairs clean across the three batches.
- **Editorial rules settled in this stretch:** diuretics are a water-weight page; phytic acid is
  two-sided; the menu is weighed; vegetarian fat loss is protein and B12; "clean eating" is discipline,
  not morality; the CAE taxonomy is administrative; coffee is 3-6 mg/kg; tracking fails on portions;
  ROS are signalling molecules; meat carcinogens are a cooking-method problem; rice cakes are 30 kcal of
  air; GMOs are evidence and label with no brand blacklist; eating fast has a real 20-minute window;
  alcohol is 7 kcal/g plus sleep and protein synthesis; sex has no measurable performance effect; meal
  splitting is total plus 25-40 g per meal; energy needs explains why calculators fail; cut fruit loses
  some vitamin C; additives are a safety list; frozen food is a cold chain; vitamin D, B6 and B3 carry
  their ULs; skin care is sunscreen; 70+ is supervised strength; the Adonis page names muscle dysmorphia;
  gynaecomastia triages to a doctor; ten myths; the 1992 pyramid is superseded; fish gets the mercury
  rule.
- **Gotchas that cost time:** the Ella Olsson meal-prep series and the Liat Portal plate are already
  library heroes, so dHash 0 hits are routine; the Adonis gym-mirror candidate was already taken; a
  16:9 crop can destroy a still life without changing the source; `check:copy` counts 51 checks per pair
  and the total moves while parallel writers land; the render pass must wait for all writers and a
  server restart.
- **Fixed by the parent:** nothing content-side across the three batches; the writers self-corrected
  descriptions, and the first parent link pass found every target.
- **Next session starts at `/marisco-minerales-proteinas/`** (batch 72). Batches 33 to 71 are committed
  locally and not pushed; production runs batch 32. Push is the owner's call.

## Session close (2026-11-24, wrap: batches 66 to 68)

- Three batches in one session: **651 → 681 / 792**, 30 bilingual pairs, 60 files, 30 heroes.
  Nutrición 78 → **108/191**; Nutrición Aplicada is 60/111.
- Final gates: `check:copy` **34,731/34,731**, build **1,378 pages**, `check:i18n` **21,452/21,452**,
  sitemap **1,374 URLs** with 4,122 alternates. 348 internal links across the 60 files, **0 broken**;
  420 page/width pairs clean across the three batches.
- **Editorial rules settled in this stretch:** vegetables are satiety, not hormones; micronutrients are
  food-first with documented gaps; sodium is a processed-food lever, not a water cut; the homemade
  isotonic is water, sugar and a pinch of salt; sushi is a rice vehicle; clenbuterol in meat is a
  contamination and doping-risk page with no protocol; cured meat is a condiment under IARC Group 1;
  casein and whey differ in speed; excess protein costs money and fibre, not kidneys; carb cycling is
  calorie cycling; de novo lipogenesis is modest; loading and depletion is published as risk; fat type
  drives cardiovascular risk while calories drive weight; trans fats are the one class with clear harm;
  lentils are cheap protein and fibre; "light" is a label; the liver and kidneys detoxify; pizza fits by
  portion; stretch marks are largely genetic and no cream prevents them.
- **Gotchas that cost time:** a library hero reappears as an exact duplicate from a different Commons
  file (lentils, bread, milk, tape measure) and the dHash catches it only if it runs on the final crop;
  `check:copy` can be red on another writer's page while yours is green, so failures must be filtered by
  slug; a dev-server restart during concurrent writes produced 74 navigation errors in the first render
  pass, all transient; the archive's YMYL pages need full rebuilds, not edits.
- **Fixed by the parent:** nothing content-side across the three batches; the writers corrected their own
  descriptions before close, and every internal link resolved on the first parent pass.
- **Next session starts at `/mejores-diureticos-naturales/`** (batch 69). Batches 33 to 68 are committed
  locally and not pushed; production runs batch 32. Push is the owner's call.

## Session close (2026-11-24, wrap: batches 63 to 65)

- Three batches in one session: **621 → 651 / 792**, 30 bilingual pairs, 60 files, 30 heroes.
  Nutrición 48 → **78/191**; Nutrición Aplicada is 30/111.
- Final gates: `check:copy` **33,201/33,201**, build **1,318 pages**, `check:i18n` **20,522/20,522**,
  sitemap **1,314 URLs** with 3,942 alternates. 302 internal links across the 60 files, **0 broken**;
  420 page/width pairs clean.
- **Editorial rules settled in this stretch:** the rebound is arithmetic and adherence, not "genetic
  memory"; anabolism is a daily net balance; the anabolic window lasts hours; the ideal diet is a plate
  template; the deficit is a dose with Mifflin-St Jeor named correctly; the anti-inflammatory label is
  audited, not promised; egg white is cheap complete protein; food lists become per-100 g tables;
  hydration is thirst plus weight change; protein needs are 1.6-2.2 g/kg; a clean bulk is a rate; peak
  week is published as risk, not protocol; macros are grams, not percentages; a cheat meal is a budget
  line; dairy is a dose limit; cherries are fruit, not recovery medicine.
- **Gotchas that cost time:** a library hero can reappear as an exact duplicate from a different
  Commons file (lentils, oats bowl, meal-prep containers all hashed 0), so the post-vendor scan is
  mandatory; concurrent writers can turn `check:copy` red on another block's page (a 147- and a
  166-character description) and green again once the owner fixes it; Commons full-text search returns
  PDFs and text noise, so `intitle:` and category generators are the reliable path; the article-only
  link pass still flags the calorie calculator.
- **Fixed by the parent:** nothing content-side across the three batches; the writers fixed their own
  descriptions before close, and every internal link resolved on the first parent pass.
- **Next session starts at `/verdura-masa-muscular/`** (batch 66). Batches 33 to 65 are committed
  locally and not pushed; production runs batch 32. Push is the owner's call.

## Session close (2026-11-24, wrap: batches 60 to 62)

- Three batches in one session: **591 → 621 / 792**, 30 bilingual pairs, 60 files, 30 heroes.
  Suplementos Dietéticos closed at **35/35 — COMPLETO**; Nutrición Aplicada opened at 10/111 and
  Nutrición is now 48/191.
- Final gates: `check:copy` **31,671/31,671**, build **1,258 pages**, `check:i18n` **19,592/19,592**,
  sitemap **1,254 URLs** with 3,762 alternates. 398 internal links across the 60 files, **0 broken**;
  420 page/width pairs clean.
- **Editorial rules settled in this stretch:** steroids are published as a risk page with no protocol,
  dose, PCT or sourcing detail; CBD is a label and THC-trace problem with no recovery claim; glutamine
  is the honest "do not buy it" page; tribulus carries the corrected WADA line and no "dangerous list";
  BCAAs are a subset of EAAs and add nothing at 1.6-2.2 g/kg; caffeine is 3-6 mg/kg with the 400 mg
  daily ceiling; night carbs do not become fat by the clock; wine is alcohol and an IARC Group 1
  carcinogen; training after 50 is strength work, not a cure; fasting is a calorie tool; insulin
  transports and does not build.
- **Gotchas that cost time:** `check:i18n` crashes with `ENOENT` when `PAGES` lists a route whose page
  is not built yet, so routes are registered per batch; the article-only link pass flags
  `/es/calcular-calorias/` and `/en/calorie-calculator/`, and two batch 62 pages needed that fix; a
  double-m slug (`sistema-immunologico` instead of `sistema-inmunologico`) passed `check:copy` and the
  build and was caught only by the parent link pass; `check:copy` asserts hero existence only for ES
  entries, so an EN hero path still needs the parent check; the dev server had to be restarted before
  each render pass and once hit a transient `EPERM` on its data store.
- **Fixed by the parent:** four calculator links removed from `reemplazo-comidas` and the two batch 62
  pages; one broken slug fixed on the immune page; short sections added to `reemplazo-comidas` and
  `glucosamina` so the prose floor held.
- **Next session starts at `/efecto-rebote-perder-peso/`** (batch 63). Batches 33 to 62 are committed
  locally and not pushed; production runs batch 32. Push is the owner's call.

## Session close (2026-11-24, wrap: batches 51 to 60)

- Ten batches in this stretch: **501 → 601 / 792**, 100 bilingual pairs, 200 files, 100 heroes.
  Closed end to end: Básicos (6), Cuádriceps (23), Pierna (6), Gemelo (9), Bíceps y Antebrazo (22) and
  the whole **Ejercicios block at 196/196**; Suplementos Dietéticos is 28/35.
- Final gates: `check:copy` **30,651/30,651**, build **1,218 pages**, `check:i18n` **18,972/18,972**,
  sitemap **1,214 URLs** with 3,642 alternates. Every batch closed with 0 broken links and 0 clipped
  cells across 140 page/width pairs.
- **Editorial rules settled in this stretch:** grip width does not choose a biceps head (shoulder angle
  does); the calf rule is straight knee for the gastrocnemius and bent knee for the soleus; creatine is
  monohydrate 3-5 g/day with no rituals; protein is 1.6-2.2 g/kg; supplements carry no purchase CTAs,
  brands or medical claims, and "no evidence" beats an invented mechanism. The published
  `sentadilla-sin-lesiones` knee-travel sentence and the `ganar-masa-muscular` creatine/GH sentence
  were corrected to match.
- **Gotchas that cost time:** the dev server can keep serving stale content after a direct file write,
  so restart it before the render pass; the article-only link check flags calculator routes, so pages
  link articles only; four shrug pages and several thin sources closed under the 600-word floor and
  needed one substantive section each; the provider's weekly limit killed both writers mid-batch and
  relaunching the next day from the same briefs worked without duplicate pages; a parallel session can
  advance the library (batch 60 landed and batch 61 started while this handoff was being written), so
  always reconcile against `git log` and the checklist before trusting a stale count.
- **Next session starts at `/aminoacidos/`** (batch 61, already in progress in a parallel session).
  Batch 61 also opens Nutrición Aplicada with the first three food pages.
- Batches 33 to 60 are committed locally and not pushed; production runs batch 32. Push is the owner's
  call.

## Session close (2026-11-24, batch 60)

- Batch 60 continued Suplementos Dietéticos: 591 → **601 / 792**, 10 pairs, 20 files, 10 heroes.
  Suplementos 28/35; Nutrición 28/191.
- Gates: `check:copy` **30,651/30,651**, build **1,218 pages**, `check:i18n` **18,972/18,972**, sitemap
  **1,214 URLs** with 3,642 alternates. 150 links, 0 broken; 140 render pairs clean.
- **Corrections made:** CBD is a label and THC-trace problem; beginners get four questions before a
  purchase; the hub teaches label literacy and third-party certificates; only protein and creatine
  survive, with the dose arithmetic; glutamine, tribulus and BCAAs are anti-hype pages; a meal
  replacement is convenience food with a label; glucosamine is modest at best and does not repair
  tendons.
- **Fixed by the parent:** the two meal-replacement locales linked the calorie calculator (article-only
  link check); both now link the muscle-building guide. Two pages gained a label section to hold the
  word floor.
- Commits: pages `c680c65`-`90caae9`, routes `1c819a1`.

## Session close (2026-11-23, batch 59)

- Batch 59 continued the supplement block: 581 → **591 / 792**, 10 pairs, 20 files, 10 heroes.
  Suplementos Dietéticos 18/35; Nutrición 18/191.
- Gates: `check:copy` **30,141/30,141**, build **1,198 pages**, `check:i18n` **18,662/18,662**, sitemap
  **1,194 URLs** with 3,582 alternates. 132 links, 0 broken; 140 render pairs clean.
- **Fixed by the parent:** the published `ganar-masa-muscular` and `build-muscle` claimed creatine
  stimulates growth hormone and beats whey alone; both sentences now match the evidence (`9e210b5`).
- **Heroes:** eight Wikimedia and two CC0/CC-BY images. The creatine evidence page uses a molecule
  render because Commons has only three creatine photos and the unbranded one is already the hub hero.
- Commits: pages `09cbb23`-`25f8f52`, routes `ada040b`.
- Next session starts at `/aminoacidos-bcaas/`; Ejercicios is closed, Nutrición is the remaining block.

## Session close (2026-11-23, batch 58)

- Batch 58 closed the Ejercicios block at **196/196** and opened Suplementos Dietéticos at 8/35:
  571 → **581 / 792**, 10 pairs, 20 files, 10 heroes.
- Gates: `check:copy` **29,631/29,631**, build **1,178 pages**, `check:i18n` **18,352/18,352**, sitemap
  **1,174 URLs** with 3,522 alternates. 126 links, 0 broken; 140 render pairs clean.
- **Fixed by the parent:** the carnitine pages linked the calorie calculator, which the article-only link
  check flags; the link was removed. The behind-the-back shrug wording was polished in `285fee5`.
- **Heroes:** eight Wikimedia and two Pexels. The creatine hero is the weakest visually (white powder on
  a white tub); labelled alternatives showed brands.
- Commits: pages `341d3f7`-`e7eab24`, polish `285fee5`, routes `e295408`.
- Next session continues the supplement block at `/pros-y-contras-de-las-proteinas/`.

## Session close (2026-11-23, batch 57)

- Batch 57 closed Bíceps y Antebrazo at **22/22** and opened Trapecios at 4/6: 561 → **571 / 792**,
  10 pairs, 20 files, 10 heroes. Ejercicios 194/196.
- Gates: `check:copy` **29,121/29,121**, build **1,158 pages**, `check:i18n` **18,042/18,042**, sitemap
  **1,154 URLs** with 3,462 alternates. 133 links, 0 broken; 140 render pairs clean after a dev-server
  restart.
- **Fixed by the parent:** the four shrug pages closed under 600 words (471-515); each gained one
  substantive section, from the range check to the bar loading and the behind-the-back setup.
- **Heroes:** nine Everkinetic and one Pexels. No exact diagram exists for four of the curls; body-position
  frames were used with literal alts.
- Commits: pages `86830f4`-`d345693`, routes `324e20f`.
- Next session starts at `/encogimientos-trapecio-polea/` and then opens Suplementos Dietéticos.

## Session close (2026-11-23, batch 56)

- Batch 56 took Bíceps y Antebrazo from 6/22 to **16/22**: 551 → **561 / 792**, 10 pairs, 20 files,
  10 heroes. Ejercicios 184/196.
- Gates: `check:copy` **28,611/28,611**, build **1,138 pages**, `check:i18n` **17,732/17,732**, sitemap
  **1,134 URLs** with 3,402 alternates. 140 render pairs clean after the parent fixed the preacher table.
- **Fixed by the parent:** the Spanish preacher family table used the routine grid and clipped at
  360-900 px; it became a `text-table` in both locales. The dev server had to be restarted to publish it.
- **Heroes:** ten Everkinetic illustrations. The standing-curl figures sit at dHash 2-6 between pages;
  every pair was opened and differs in equipment or arm phase.
- Commits: pages `d48753b`-`80c4492`, routes `3a6ab11`.
- Next session starts at `/curl-invertido-barra/` and closes Bíceps, then Trapecios.

## Session close (2026-11-23, batches 54 and 55)

- Two blocks in one session: 531 → **551 / 792**, 20 pairs, 40 files, 20 heroes. Pierna **6/6 — COMPLETO**,
  Gemelo **9/9 — COMPLETO**, Bíceps y Antebrazo 6/22, Ejercicios 174/196.
- Writers: two per batch, pages 1-5 and 6-10, disjoint files. The parent wrote both briefs from source
  maps, registered routes, ran the gates, the render pass and committed per page.
- Gates: `check:copy` **28,101/28,101**, build **1,118 pages**, `check:i18n` **17,422/17,422**, sitemap
  **1,114 URLs** with 3,342 alternates. 300 internal links across the 40 files, **0 broken**.
- **Fixed by the parent:** `sentadilla-sin-lesiones` still said the knees must not pass the toes; the
  sentence now matches the Bulgarian page and says the knees may travel over the foot but must not
  collapse inward. Commit `cb3cae6`.
- **Known approximations:** the goblet hero is a kettlebell front squat; the standing calf machine
  illustration is cropped at the ankles; the donkey raise is a 2.4x upscale; the EZ preacher page uses
  the barbell frame with an alt that says "una barra"; the hack calf raise uses a standing calf photo.
- Commits: batch 54 pages `86c5871`-`fb10cf1` plus `cb3cae6`, routes `13dc892`; batch 55 pages
  `8a1d5d3`-`8808ef1` plus polish `e6ec4fb`, routes `30d6443`.
- Next session starts at `/curl-maquina-predicador/` (batch 56) and then closes Bíceps and Trapecios.

## Session close (2026-11-22, batches 51, 52 and 53)

- Three leg blocks in one session: 501 → **531 / 792**, 30 bilingual pairs, 60 files, 30 heroes.
  Básicos **6/6 — COMPLETO**, Cuádriceps **23/23 — COMPLETO**, Pierna 1/6, Ejercicios 154/196.
- Writers: two per batch, pages 1-5 and 6-10, disjoint files. The parent wrote three briefs from three
  source maps, registered routes, ran the gates, the render pass and committed per page.
- Gates: `check:copy` **27,081/27,081**, build **1,078 pages**, `check:i18n` **16,802/16,802**, sitemap
  **1,074 URLs** with 3,222 alternates. 474 internal links across the 60 files, **0 broken**.
- **Fixed by the parent:** three competition heroes with identifiable lifters and sponsors were replaced
  (snatch, clean, clean and jerk) with an anonymous photo, an Everkinetic front rack and a CC0 split-jerk
  sequence. Four pages closed under the 600-word floor and gained one real cue each (English bodyweight,
  English jump squat, both adduction pages). The English horizontal leg press description was fixed from
  148 to 159 chars. The batch 53 writers died on the provider's weekly limit and were relaunched the next
  day from the same briefs.
- Heroes: 30 new, mostly Everkinetic and Pexels. Three known approximations: the single-leg press shows a
  two-leg press, the vertical press shows a leg press, the jump squat shows a box jump; alts are literal.
- Commits: batch 51 pages `1b35098`-`b2925e1` plus `9b2b74d` (hero fix), routes `c7542a3`; batch 52 pages
  `d3a44e7`-`19c387a`, routes `da198b0`; batch 53 pages `42aeee9`-`0598337`, routes `bff8486`.
- Next session starts at `/hip-thrust-guia-completa-de-entrenamiento/` and then opens Gemelo.

## Session close (2026-11-21, batch 50)

- Batch 50 closed Ejercicios de Hombro: 491 → **501 / 792**, ten bilingual pairs, 20 files, ten heroes.
  Hombro **29/29 — COMPLETO**; Ejercicios **124/196**. The block's hub is live with 28 exercise links.
- Writers: two per batch, pages 1-5 and 6-10, disjoint files. The parent wrote the brief from one source
  map, registered the routes, ran the gates, the render pass and committed per page.
- Gates: `check:copy` **25,551/25,551**, build **1,018 pages**, `check:i18n` **15,872/15,872**, sitemap
  **1,014 URLs** with 3,042 alternates. 198 internal links, **0 broken**; 0 clipped cells over 140
  page/width pairs.
- **Editorial win:** the hub is rebuilt as a catalogue instead of the archive's four empty sections. It
  links all 28 shoulder exercises with honest family counts (10 press, 1 upright row, 4 lateral, 7 rear,
  6 front), a goal table and the rear-delt argument.
- **Fixed by the parent:** three mandatory pairs shipped one-way because the targets were outside the
  writer's surfaces. The reverse pec deck, the lateral raise and the Smith behind-neck press now link
  back in both locales.
- Heroes: three Pexels photos and seven Wikimedia files. The closest new pair is 13 except for the
  one-arm front raise, which opened as a line-art pair at 3 and 6 and was compared by eye; the drawings
  differ. The Smith shoulder press uses a guided press machine because every free Smith photo is already
  a hero and the plate close-up is the same photograph as the decline page.
- **Fixed after owner review (2026-11-21):** the three cable heroes did not match their exercises. The
  one-arm cable front raise and the leaning lateral raise now use Everkinetic illustrations of the
  movement; the standing reverse fly keeps its photo and loses the false "crossed handles" alt. Commit
  `8864f11`.
- Commits: pages `3266e85`, `9180ab8`, `91a3779`, `6b73c9d`, `1547460`, `ff54a12`, `58f9332`, `ec0dd01`,
  `bf56972`, `5bb5ada`; cross-links `24669e6`; routes `8b1a130`.
- Next session starts at `/ejercicios-basicos/`; the Básicos block and the first four Cuádriceps rows
  need a source map and a brief.

## Session close (2026-11-21, batch 49)

- Batch 49 took Ejercicios de Hombro to 19/29: 481 → **491 / 792**, ten bilingual pairs, 20 files, ten
  heroes. Ejercicios **114/196**.
- Writers: two per batch, pages 1-5 and 6-10, disjoint files. The parent wrote the brief from one source
  map, registered the routes, ran the gates, the render pass and committed per page.
- Gates: `check:copy` **25,041/25,041**, build **998 pages**, `check:i18n` **15,562/15,562**, sitemap
  **994 URLs** with 2,982 alternates. 136 internal links, **0 broken**; 0 clipped cells over 140
  page/width pairs.
- **Editorial win:** the lateral raise now owns the only original datum in the archive (the start-position
  lever trade) instead of the supraspinatus myth, and the press family is split by variable: rotation
  (Arnold), bench angle and grip (seated), cam and fixed path (machine), trunk brace (standing),
  lockout profile (cable).
- **Fixed by the parent:** the mandatory Arnold pair shipped one-way because the published history page
  was outside the writer's surfaces. It now links the new technique page in both locales.
- Heroes: eight Pexels photos and two Wikimedia files. The closest new pair is 11; the library still has
  only the eight pre-existing pairs at 6 or less. The one-arm cable page uses a bilateral cable photo
  because no free single-arm shot exists; the alt says so.
- Commits: pages `b319e3f`, `d2391a3`, `954a304`, `7f26d63`, `3698806`, `f2feeab`, `63eac73`, `92d7934`,
  `a65bfc5`, `1df31b9`; routes `3a3352b`.
- Next session starts at `/elevaciones-frontales-banco-inclinado/`; the batch 50 brief is written.

## Session close (2026-11-21, batch 48)

- Batch 48 closed Pecho and opened Ejercicios de Hombro: 471 → **481 / 792**, ten bilingual pairs,
  20 files, ten heroes. Pecho **27/27 — COMPLETO**; Ejercicios **104/196**; Hombro **9/29**.
- Writers: two per batch, pages 1-5 and 6-10, disjoint files. The parent wrote the brief from one source
  map, registered the routes, ran the gates, the render pass and committed per page.
- Gates: `check:copy` **24,531/24,531**, build **978 pages**, `check:i18n` **15,252/15,252**, sitemap
  **974 URLs** with 2,922 alternates. 152 internal links, **0 broken**; 0 clipped cells over 140
  page/width pairs.
- **Editorial win:** the batch fixes the block's scapular doctrine. Five rear-delt pages now teach the
  same rule ("la escápula se queda quieta") instead of the archive's contradiction between squeezing and
  limiting the shoulder blades. It also kills "hiperlordosis torácica" (the thoracic spine is kyphotic),
  the upright row's ear-level target, the reverse pec deck's mid-back claim and the Smith behind-neck's
  deleted anterior deltoid.
- **Fixed by the parent:** the Smith muscle paragraph overcorrected to "the anterior deltoid does the
  most work", which contradicts the published comparison page. It now says the middle deltoid leads,
  with the anterior and the supraspinatus assisting.
- Heroes: eight Pexels photos and two Wikimedia files. No new dHash pair under 7; the only eight pairs
  in the library are the pre-existing ones. One Smith candidate duplicated an existing Smith photo at
  distance 5 and was replaced.
- Commits: pages `0d69751`, `d7b07a5`, `bb23321`, `a2fc6d7`, `94c39e8`, `68d0290`, `6e97b80`, `9011a10`,
  `81196f7`, `4c12109`; routes `f3a3b1c`.
- Next session starts at `/elevaciones-laterales/`; the batch 49 and 50 briefs are already written.

## Session close (2026-11-19, batches 46 and 47)

- Two chest batches in one session: 451 → **471 / 792**, 20 bilingual pairs, 40 files, 20 heroes.
  Pecho **6/27 → 26/27**; Ejercicios **94/196**. Only `pullover-con-mancuerna-en-banco-inclinado`
  is left in the chest block.
- Writers: two per batch, pages 1-5 and 6-10, disjoint files. The parent wrote both briefs from one
  source map per batch, registered routes, ran the gates, the render pass and committed per page.
- Gates: `check:copy` **24,021/24,021**, build **958 pages**, `check:i18n` **14,942/14,942**, sitemap
  **954 URLs** with 2,862 alternates. 318 internal links across the 40 files, **0 broken**.
- **Fixed by the parent:** the incline barbell dose table used the routine grid and clipped at 360-1024
  px in both locales; it became `<table class="text-table">`. The 47 render pass failed once at 1280
  while the dev server recompiled; the re-run was clean.
- Heroes: 20 new. Nine Everkinetic in batch 46; eight Everkinetic, one public-domain bench photo and
  two Pexels in batch 47. The close pairs are same-bench line art at 3, 5 and 6 and every one was
  opened: bar vs dumbbells, flat vs incline bench, dumbbells vs cable handles.
- Commits: batch 46 pages `daa6f93`, `fd03838`, `7eee9e7`, `aae71b4`, `bdc0a91`, `80e097e`, `91e4884`,
  `440d334`, `35b2a47`, `1e9fd8c`, routes `68cad4d`, docs `b443793`; batch 47 pages `8601ce1`,
  `4096fa1`, `33e2d4c`, `f4f8430`, `e8a6063`, `83fc604`, `f07c68d`, `e5811e5`, `2e1dcb2`, `589b11b`,
  routes `3d427fb`.
- **Editorial win:** the bench-to-neck row ships as a correction page, not a how-to; the archive's
  premise is priced, not denied. The decline and machine pages own their resistance lines instead of
  repeating "guided bar, 8-12 reps".
- **Fixed after owner review (2026-11-19):** `/es/cruces-en-polea-baja/` and its English pair closed
  with a one-sentence "Para seguir" block. It now carries four links in both locales (exercises,
  routines, anatomy, technique); commit `b9abb81`. The hero stays: an equipment close-up that the alt
  describes honestly, not an exercise photo.
- Next session starts at `/pullover-con-mancuerna-en-banco-inclinado/`, then Ejercicios de Hombro.

## Session close (2026-11-19, batch 45)

- Batch 45 closed Ejercicios de Femoral y Glúteos and opened Ejercicios de Pecho: 441 → **451 / 792**.
  Ejercicios **74/196**; Femoral y glúteos **12/12 — COMPLETO**; Pecho 6/27.
- Writers: A pages 1-5 (seated curl, abduction machine, dumbbell RDL, dumbbell lying curl, overhead
  dumbbell squat), B pages 6-10 (RDL, chest dips, barbell bench press, incline cable fly, Smith incline),
  disjoint files. The parent registered routes, verified 140 page/width pairs, ran the gates and
  committed per page.
- Gates: `check:copy` **23,001/23,001**, build **918 pages**, `check:i18n` **14,322/14,322**, sitemap
  **914 URLs** with 2,742 alternates. 166 internal links, **0 broken**; no clipped cell from 360 to
  1280 after the render pass.
- Heroes: 451 files; five Pexels photos and five Wikimedia files, three Everkinetic illustrations
  (dip, incline fly, Smith incline). Two line-art pairs at dHash 4 and 5 exist and were opened: the
  drawings differ.
- Commits: pages `22b1272`, `dacb871`, `1711aa7`, `8f0c182`, `064cd19`, `b8a0d69`, `4ae1917`,
  `70616ce`, `51c4b64`, `c4867b7`; routes `19efd48`.
- **Editorial wins:** the seated curl biases the monoarticular short head and runs to 130-140°; the
  abductor machine gets its verdict inverted; both RDL pages stop at the pelvis tuck; the chest dip
  owns the shoulder-to-elbow depth rule; the bench press page kills the inner/outer pectoral myth and
  keeps the thumbless-grip warning.
- **Gotcha:** `check:i18n` assertions grow by 31 per pair, not 51; the count that matches `check:copy`
  is a coincidence in some batches. Read the gate output, not the copy total.
- Next session starts at `/press-inclinado-mancuernas/`; batch 46 continues Pecho.

## Session close (2026-11-18, wrap: batches 33 to 44)

- Twelve batches in one session: **321 → 441 / 792**, 120 bilingual pairs, 240 files, 120 heroes.
  Closed: Pierna 9/9, Rutinas de Pierna 3/3, Rutinas de Tríceps, Rutinas de Pecho, Tríceps (routine),
  Rutinas de Fuerza 9/9, Rutinas de Volumen 29/29, Rutinas de Definición 20/20, Rutinas full body 5/5,
  Rutinas de deportes 8/8, Rutinas en Principiantes 9/9, Ejercicios de Tríceps 17/17 and the four
  exercise catalogue hubs. Rutinas is 80/80.
- Final gates: `check:copy` **22,491/22,491**, build **898 pages**, `check:i18n` **14,012/14,012**,
  sitemap **894 URLs** with 2,682 alternates.
- **Fixed after owner review:** the reps column no longer forces `nowrap` (`75d5d61`), so long rep
  strings wrap at every width; a week table in the twelve-week programme and six hub week tables became
  `text-table`; and the reverse-grip pushdown hero was replaced with the matching Everkinetic
  illustration (`f1135fc`).
- **More than 150 commits are local and unpushed**; production runs batch 32. The push is the owner's
  call.
- Next session starts at `/femoral-maquina-sentado-2/`; the Rutinas block is finished and the
  Ejercicios block is the only content block left besides Nutrición and Mujer Fitness.

## Session close (2026-11-18, batch 44)

- Batch 44 published the four remaining catalogue hubs and opened femoral and glute: 431 → **441 /
  792**. Ejercicios **64/196**; Femoral y glúteos 6/12.
- Writers: A pages 1-5 (pierna, bíceps, trapecios, manguito, curl tumbado), B pages 6-10 (puente,
  extensión de cadera, hack inversa, polea, curl de pie), disjoint files. The parent converted six hub
  week tables, registered routes, verified 140 page/width pairs, ran the gates and committed.
- Gates: `check:copy` **22,491/22,491**, build **898 pages**, `check:i18n` **14,012/14,012**, sitemap
  **894 URLs** with 2,682 alternates. 112 internal links, **0 broken**; no clipped cell from 360 to
  1280 after the table fix.
- Heroes: 441 files; the only dHash pairs under 7 are the three pre-existing ones. Five heroes are
  Everkinetic illustrations; four first-choice photos were exact duplicates of existing heroes.
- Commits: pages `2f4b301`, `09555c6`, `f060d42`, `0994b51`, `a757fde`, `44bc805`, `7277ed4`,
  `0a178a1`, `4f3f653`, `58147cb`; routes `9f028c7`.
- **Gotcha:** hub week tables with a long middle column clip at 360 px in the routine grid; schedules
  are `text-table`, including inside hubs.
- **Gotcha:** Wikimedia renders SVGs at any width through
  `thumb.wikimedia.org/.../thumb/.../<W>px-<Name>.svg.png`; 1280 works and 1600 returns 400 on tall
  files.
- Next session starts at `/femoral-maquina-sentado-2/`; batch 45 continues femoral and glute.

## Session close (2026-11-18, batch 43)

- Batch 43 closed Tríceps and published the first three catalogue hubs: 421 → **431 / 792**.
  Ejercicios **54/196**, Tríceps **17/17**.
- Writers: A pages 1-5, B pages 6-10, disjoint files. The parent normalised the section capitalisation,
  registered routes, verified 140 page/width pairs, ran the gates and committed per page.
- Gates: `check:copy` **21,981/21,981**, build **878 pages**, `check:i18n` **13,702/13,702**, sitemap
  **874 URLs** with 2,622 alternates. 156 internal links, **0 broken**; no clipped cell from 360 to
  1280.
- Heroes: 431 files; the only dHash pairs under 7 are the three pre-existing ones. Four heroes are
  Everkinetic illustrations because Commons has no honest photo of a machine extension or an assisted
  dip machine.
- Commits: pages `5c27916`, `9b7ed00`, `47fd4c8`, `889b320`, `21553bf`, `e03e19c`, `15eea4d`,
  `0af464b`, `14403bd`, `46a8091`; routes `a5d0e8b`.
- **Gotcha:** two writers can disagree on `section` casing; the 18 published pages and the nav decide,
  and the parent normalised five files after the fact.
- **Gotcha:** the triceps hub links all 17 triceps exercise pages, so it depends on the other writer's
  five files landing; `check:i18n` is what catches a missing half.
- Next session starts at `/ejercicios-pierna/`; the batch 44 brief is written.

## Session close (2026-11-18, batch 42)

- Batch 42 opened the Ejercicios block with ten triceps pages: 411 → **421 / 792**. Ejercicios
  **44/196**, Tríceps 10/17.
- Writers: A pages 1-5, B pages 6-10, disjoint files. The parent registered routes, verified 140
  page/width pairs, ran the gates and committed per page.
- Gates: `check:copy` **21,471/21,471**, build **858 pages**, `check:i18n` **13,392/13,392**, sitemap
  **854 URLs** with 2,562 alternates. 106 internal links, **0 broken**; no clipped cell from 360 to
  1280.
- Heroes: 421 files; the only dHash pairs under 7 are the three pre-existing ones.
- Commits: pages `ff945e1`, `4d56dd1`, `f952812`, `2a55b03`, `554d536`, `541f95c`, `4f6f2bd`,
  `1d9aa09`, `370d08a`, `24de023`; routes `951b92c`.
- **Gotcha:** the brief listed `ejercicios-triceps` as a published hub, but it is batch 43's row.
  Writer A dropped it instead of shipping dead links; the hub arrives next batch.
- **Gotcha:** Commons has exactly one Smith machine photo and it is already a hero, so the Smith page
  uses a free-bar bench press with an honest alt.
- Next session starts at `/extensiones-mancuerna-sentado/`; the batch 43 brief is written.

## Session close (2026-11-17, batch 41)

- Batch 41 closed the whole Rutinas block: 401 → **411 / 792**. Deportes **8/8**, Principiantes
  **9/9**, and Rutinas **80/80** end to end.
- Writers: A pages 1-5 (basketball, maintenance, full-body levels, first three months, printable),
  B pages 6-10 (ABAB, weight routines, twelve-week programme, five weeks, intensive), disjoint files.
  The parent registered routes, fixed the sports hub count and row, converted one week table, ran the
  gates and committed per page.
- Gates: `check:copy` **20,961/20,961**, build **838 pages**, `check:i18n` **13,082/13,082**, sitemap
  **834 URLs** with 2,502 alternates. 104 internal links, **0 broken**; no clipped cell from 360 to
  1280 after one fix.
- Heroes: 411 files; the only dHash pairs under 7 are the three pre-existing ones.
- Commits: pages `66cd656`, `acb1d05`, `4303e45`, `f30ac73`, `82cc3fe`, `a9ecf66`, `f126ca5`,
  `b09d87e`, `8b86385`, `c871809`; hub fix `940956c`; routes `6f7313e`.
- **Gotcha:** a week header as short as "Semana 1" clips in the 52 % first column at 360 px when the
  table uses the routine grid; week tables are `text-table`, like every other schedule.
- **Gotcha:** a long render loop can fail transiently while the dev server recompiles; re-run before
  chasing a layout bug.
- Next session starts at `/jalones-barra-recta/`; the Ejercicios block needs its source map.

## Session close (2026-11-17, batch 40)

- Batch 40 closed Rutinas full body and took Rutinas de deportes to 7/8: 391 → **401 / 792**.
- Writers: A pages 1-5 (mass, overtraining, full-body hub, tennis, football), B pages 6-10 (boxing,
  cycling, running, swimming, sports hub), disjoint files. The parent registered routes, fixed the hub
  `meta` from 8 to 6, verified 140 page/width pairs, ran the gates and committed per page.
- Gates: `check:copy` **20,451/20,451**, build **818 pages**, `check:i18n` **12,772/12,772**, sitemap
  **814 URLs** with 2,442 alternates. 108 internal links, **0 broken**; no clipped cell from 360 to
  1280.
- Heroes: 401 files; the only dHash pairs under 7 are the three pre-existing ones. Two obvious Commons
  candidates were already vendored at distance 0.
- Commits: pages `e9b8f69`, `c4bebf0`, `5cd35cb`, `8d5affb`, `3ec889d`, `f67c352`, `6471205`,
  `d2f8e59`, `284f804`, `174b1b1`; routes `c7d280b`.
- **Gotcha:** a hub's links can live inside an HTML table, which the copy gate does not exercise; the
  build and the render pass are the real check.
- Next session starts at `/rutina-dieta-baloncesto/`; the batch 41 brief is written and closes the
  Rutinas block.

## Session close (2026-11-17, batch 39)

- Batch 39 closed Rutinas de Definición and opened Rutinas full body: 381 → **391 / 792**.
  Definition **20/20**, Full Body 2/5.
- Writers: A pages 1-5, B pages 6-10, disjoint files. The parent registered routes, converted four
  pages' in-cell asterisks to words, verified 140 page/width pairs, ran the gates and committed.
- Gates: `check:copy` **19,941/19,941**, build **798 pages**, `check:i18n` **12,462/12,462**, sitemap
  **794 URLs** with 2,382 alternates. 112 internal links, **0 broken**; no clipped cell from 360 to
  1280.
- Heroes: 391 files; the only dHash pairs under 7 are the three pre-existing ones. Two candidates at
  distance 7 and 13 were the same photographs as library heroes.
- Commits: pages `1b85c60`, `a0a65cd`, `252ed16`, `0a92dc7`, `87db291`, `56f6334`, `6ebc2ed`,
  `3795b33`, `fc85bac`, `ebc4a54`; routes `8c0182f`.
- **Gotcha:** the gate does not catch a footnote marker inside a table cell; `15\*` plus a blockquote
  is a rendering defect the structural pass must find.
- Next session starts at `/rutina-masa-muscular-cuerpo-completo/`; the batch 40 brief is written.

## Session close (2026-11-17, batch 38)

- Batch 38 took Rutinas de Definición to **12/20**: 371 → **381 / 792**.
- Writers: A pages 1-5 (compound-set routine, weight training for fat loss, cutting hub, torso/legs,
  Tabata), B pages 6-10 (superset cut, time-saving, shock block, 100 reps, advanced plan), disjoint
  files. A's page 1 was sent back once for length (597/546 prose) and returned at 969/905.
- Gates: `check:copy` **19,431/19,431**, build **778 pages**, `check:i18n` **12,152/12,152**, sitemap
  **774 URLs** with 2,322 alternates. 120 internal links, **0 broken**; 20 pages clean at 390 px and no
  clipped cell from 360 to 1280.
- Heroes: 381 files; the only dHash pairs under 7 are the three pre-existing ones. Seven of twelve
  candidates duplicated an existing hero, including two that collided with the other writer's page
  vendored minutes earlier.
- Commits: pages `48113ce`, `6ff2a0b`, `ff0261c`, `82b020f`, `3a752a5`, `d0d2d7c`, `13d353c`,
  `c8c12c5`, `85040d9`, `6fd326c`; routes `87f4dbc`.
- **Known thin page:** `/es/rutinas-torso-pierna/` runs 563 prose words in Spanish and 520 in English;
  the four tables carry the prescription.
- Next session starts at `/entrenamiento-espartano/`; batch 39 needs its source map and brief.

## Session close (2026-11-17, batch 37)

- Batch 37 closed Rutinas de Volumen and opened Rutinas de Definición: 361 → **371 / 792**;
  Volume **29/29**, Definition 2/20.
- Writers: A pages 1-5 (torso, high frequency, progressive four-day, Weider, plateau), B pages 6-10
  (return to training, HST, GH page, heavy-load cutting, weights and cardio), disjoint files. The
  parent registered routes, verified 140 page/width pairs, ran the gates and committed per page.
- Gates: `check:copy` **18,921/18,921**, build **758 pages**, `check:i18n` **11,842/11,842**, sitemap
  **754 URLs** with 2,262 alternates. 116 internal links, **0 broken**; 20 pages clean at 390 px and
  no clipped cell from 360 to 1280.
- Heroes: 371 files; the only dHash pairs under 7 are the three pre-existing ones.
- Commits: pages `f0d1a37`, `8aa31f7`, `625e162`, `71994da`, `a2c6fe1`, `c52d2fa`, `819dad5`,
  `c072dbe`, `746b877`, `d6d5347`; routes `ba48d1b`.
- **Gotcha:** a dHash of 7 can be a false positive and a distance-6 crop can be the same photograph.
  Opening both images is the only reliable check.
- Next session starts at `/rutina-de-definicion-con-series-compuestas/`; the batch 38 brief is written.

## Session close (2026-11-17, batch 36)

- Batch 36 added ten Rutinas de Volumen pairs: 351 → **361 / 792**, volume block at 21/29.
- Writers: A pages 1-5 (Smith machine, home dumbbells, infinite sets, gaining weight, volume tables),
  B pages 6-10 (intermediate, Harrison twins, Heavy Duty, ectomorph, natural mass), disjoint files.
  The parent registered routes, verified 140 page/width pairs, ran the gates and committed per page.
- Gates: `check:copy` **18,411/18,411**, build **738 pages**, `check:i18n` **11,532/11,532**, sitemap
  **734 URLs** with 2,202 alternates. 116 internal links, **0 broken**; 20 pages clean at 390 px and
  no clipped cell at any width from 360 to 1280.
- Heroes: 361 files; the only dHash pairs under 7 are the three pre-existing ones.
- Commits: pages `7ed334a`, `c84744c`, `369fd40`, `1f57a98`, `f5c9c0d`, `917bb82`, `9dfd059`,
  `75b8e2d`, `19a7b4f`, `4abc616`; routes `b7b7c65`.
- **Gotcha:** the shared `%TEMP%\opencode` directory accumulated a `struct.py`, which shadows the
  standard library and breaks every Python script that imports Pillow. Parent helpers now live in
  `%TEMP%\opencode-parent`; never run analysis scripts from the shared folder.
- **Gotcha:** a re-crop of a library hero can hash at 9, so "1-6" is not the full duplicate band.
  Open the closest hero before vendoring, whatever the distance.
- Next session starts at `/rutina-volumen-pecho-hombro-espalda/`; the batch 37 brief is written.

## Session close (2026-11-17, batches 33, 34 and 35)

- Three batches in one session, all committed, none pushed: **30 pairs**, 321 → **351 / 792**.
  Batch 33 closed Pierna (9/9), Rutinas de Pierna (3/3), Rutinas de Tríceps (1/1), Rutinas de Pecho
  (1/1) and Tríceps (1/1). Batch 34 closed Rutinas de Fuerza (9/9) and opened Rutinas de Volumen.
  Batch 35 took that block to **11/29**.
- Writers: two per batch, pages 1-5 and 6-10 in disjoint files. The parent wrote the three briefs from
  source maps, registered routes, fixed three 390 px table defects, ran the gates and committed per
  page.
- Gates after the three: `check:copy` **17,901/17,901**, build **718 pages**, `check:i18n`
  **11,222/11,222**, sitemap **714 URLs** with 2,142 alternates. 410 internal links across the 60
  files, 0 broken. All 60 pages clean at 390 px.
- Commits: batch 33 `87a98f4`-`4830d3c` plus routes `3f34e3a`; batch 34 `b4ca8ea`-`20af704` plus
  routes `028ab29`; batch 35 `fe28d68`-`a1037c2` plus routes `9f29bc5`.
- **Gotcha:** `check:copy` only catches an exact hero path duplicate. A 1280x720 crop of a library
  hero hashes 1-6 from the original, so the dHash distance must be read and the closest hero opened
  before vendoring.
- **Gotcha:** schedule tables with long cells or headers clip at 390 px even when the document does
  not overflow. The render check must inspect every cell's `scrollWidth`, and schedules belong in
  `<table class="text-table">`.
- **Gotcha:** writers report prose and table-inclusive word counts differently; say which method a
  batch record uses.
- **Fixed after owner review (2026-11-17):** long rep strings clipped inside routine tables between
  768 and 1280 px, because the sets and reps cells were `nowrap` above the mobile breakpoint. They now
  wrap at every width (`ArticleLayout`, `75d5d61`); two cells were shortened and the warm-up detail
  moved to prose. Re-checked at 1280, 1024, 900, 768, 480, 390 and 360 over the 60 pages of batches
  33-35: zero clipped cells.
- **Open defect, not from these batches:** every page, landing included, scrolls ~51 px sideways at
  exactly 768 px (~1 px at 820); 700 and 900 are clean. Tracked in `PLAN.md` T17.
- Next session starts at `/rutina-con-multipower/`.

## Session close (2026-11-17, batch 34)

- Batch 34 closed Rutinas de Fuerza and opened Rutinas de Volumen: 10 pairs, 331 → **341 / 792**.
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
