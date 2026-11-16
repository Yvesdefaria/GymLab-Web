# Content library — batch 27

Started: 2026-11-16. Continues the library from 261/792 (`odd/tasks/content-pages.md`).

Objective: the next ten abdomen rows as ten bilingual pairs (20 files, 10 heroes), routes
registered, gates green, one commit per page with its evidence here. The block goes from 5/39 to
15/39 and the library from 261 to 271.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Source archive: `C:\Users\Yves De Faria\Desktop\cambiatufisico.com\content\por-musculo\abdomen\`

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `abdominales-ejercicios-colgado` | `hanging-ab-exercises` | `abdominales-ejercicios-colgado.md` | 606 | abdominales colgados | |
| 2 | `abdominales-cambiatufisico` | `four-day-ab-routine` | `abdominales-cambiatufisico.md` | 371 | rutina de abdominales 4 días | |
| 3 | `ejercicios-de-abdominales` | `ab-exercises` | `ejercicios-de-abdominales.md` | 1,987 | ejercicios de abdominales | |
| 4 | `perder-grasa-abdominal-con-abdominales` | `spot-reduction-myth` | `perder-grasa-abdominal-con-abdominales.md` | 704 | perder grasa abdominal | |
| 5 | `rutina-abdominales-para-culturismo` | `abs-hypertrophy-routine` | `rutina-abdominales-para-culturismo.md` | 720 | rutina de abdominales hipertrofia | |
| 6 | `rutina-abdominales-ab` | `ab-routine-a-b` | `rutina-abdominales-ab.md` | 653 | rutina de abdominales A/B | |
| 7 | `encogimientos-banco-inclinado` | `decline-bench-crunches` | `encogimientos-banco-inclinado.md` | 295 | encogimientos en banco declinado | |
| 8 | `encogimientos-maquina` | `machine-crunches` | `encogimientos-maquina.md` | 313 | encogimientos en máquina | |
| 9 | `encogimientos-polea-2` | `kneeling-cable-crunches` | `encogimientos-polea-2.md` | 306 | encogimientos en polea | |
| 10 | `rodar-con-barra` | `barbell-ab-rollout` | `rodar-con-barra.md` | 243 | rodamiento abdominal | |

All ten: `block: "Entrenamiento"` (EN `Training`), `section: "Abdomen"` (EN `Abs`),
`updated: "2026-11-16"`.

## Conflicts the batch settles (binding)

1. **The rectus abdominis is one muscle** (settled in batch 26). Page 1 opens with "podemos y
   debemos entrenarlo como dos grupos distintos: superior e inferior". That premise is out. What
   changes between exercises is the pattern (hip flexion versus trunk flexion) and which muscles
   arrive fresh, not which part of one muscle is trained.
2. **The bench is decline, not incline.** Page 7 is titled "banco inclinado" but describes and
   photographs a decline bench: head below the hips, feet anchored under the rollers, harder than
   a flat bench. Write the page around the decline position and say once that some sources call it
   an incline bench. The slug stays `encogimientos-banco-inclinado`.
3. **Spot reduction is a myth.** Page 4 already owns the correct argument. Keep it, drop the first
   person and the rhetorical absolute ("have you ever seen someone with cut abs and fat
   elsewhere?"), and name what does work: a whole-body deficit, protein and resistance training.
4. **The abs do not grow forward.** Page 5 is right that abdominal training does not create a
   protruding belly, but the reason is the flat sheet arrangement of the rectus: it thickens and
   the blocks become more visible. A protruding abdomen is fat, visceral or subcutaneous, not
   abdominal muscle. Say it that way and drop the disc-hernia and hip anteversion predictions.
5. **You cannot isolate a portion of the abdomen.** Page 6 asks the reader to "aislar los
   abdominales". Isolation is impossible; what you can do is stop helping with momentum.
6. **Burning is not fat melting.** Page 4 is right in substance and wrong in the mechanism: it
   blames lactic acid. The burn comes from metabolites and local acidosis during hard work. Do not
   claim the burn is proof of anything about the fat layer.
7. **Four days a week versus three.** The hub page says not to exceed three abdominal sessions a
   week outside specialised programmes, and page 2 is a four-day programme. It is the specialised
   case: say so, run it four to six weeks, then return to two or three sessions.
8. **No invented numbers.** Pages 1, 7, 8, 9 and 10 carry no sets or reps in the archive. Do not
   invent a protocol. Point at the routine pages of the block for volume and give the stopping rule
   the technique implies.

## Global rules for this batch

1. Neutral Spanish with `tú`; zero vosotros, zero voseo, zero `usted`. Never the word `gym`.
2. No first person. Pages 2, 4, 5 and 6 all carry it ("la solución que a mí...", "puedo asegurar",
   "en mi rutina", "es firme partidario"): all become guide voice.
3. Zero external links: every `bodybuilding.com` shop credit dies, and so does the archive link to
   the boxing article. Zero `.md` links, zero `#` anchors, zero inline images, zero `▷` or `✔✔` in
   titles, zero escaped asterisks, zero empty trailing headings.
4. Links only to pages that exist. The published Spanish slugs are the set in
   `src/content/articles/es/`; inside this block: `abdominales-isometricos`,
   `entrenamiento-abdominal-por-dorian-yates`, `encogimientos-sobre-balon-ejercicio`,
   `giros-en-disco`, `rutinas-ejercicios-abdominales`, plus this batch. Outside the block:
   `volumen-de-entrenamiento`, `fallo-muscular`, `series-descendentes`, `ejercicios-dolor-de-espalda`,
   `hiperextensiones-espalda`, `tecnica-ejecucion-ejercicios`, `rango-completo-de-movimiento-rom`,
   `tiempo-de-descanso-entre-series`, `ejercicios-sobre-balon`. Exercises without a page yet are
   named in prose, never linked.
5. Zero em dashes. Titles 45-60 characters, descriptions 150-160, reciprocal `alternate`.
6. Tables: routine tables as markdown with exactly three columns (Ejercicio | Series | Reps);
   everything else `<table class="text-table">` with three columns. One footnote maximum, as a
   blockquote after the table. No merged cells.
7. Anatomy and physiology correct the archive. A wrong claim is fixed or removed, never softened.
8. Heroes: one unique per page, Wikimedia Commons, `iiurlwidth=1280`, at least 1200 px on disk,
   under ~250 KB, credit in `heroCredit`, alt in each file's locale. 261 heroes already exist; run
   the dHash check before vendoring, not after.
9. Body length: 600-900 words per page except the hub (page 3), which can run 1,200-1,600 because
   it indexes the block. Pages 7-10 are thin in the archive (243-313 words) and must be rebuilt
   around technique, errors and progression, not padded with filler.

## Editorial decisions per page

### 1. Abdominales colgados

The family page for hanging and supported leg raises.

- Keep: the hanging versus supported distinction, the four-step difficulty ladder (vertical bench
  with bent legs, vertical bench with straight legs, bar with bent legs, bar with straight legs),
  the grip and body-stillness demand of the bar version, the posterior pelvic tilt cue ("pull with
  the hips, let the knees follow"), the leg length as a lever, and hamstring flexibility limiting
  the range.
- Fix the premise: hanging raises are hip flexion with trunk flexion at the top. The rectus
  stabilises the pelvis and adds the posterior tilt; the hip flexors move the legs. Drop "superior
  and inferior as two groups" and the claim that pulling with the legs turns the abs into a purely
  isometric stabiliser until the legs reach horizontal.
- Structure: what the family trains, the technique (hips first), the four-level progression as a
  `text-table`, hanging versus vertical bench, the errors (swinging, pulling with the arms, leg
  drive, half range), and how to program it without inventing numbers.
- Delete: the duplicated link list at the end (three entries point at the same page), the vosotros,
  the inline images and their captions.
- Links: `ejercicios-de-abdominales`, `rutinas-ejercicios-abdominales`, `abdominales-isometricos`,
  `rutina-abdominales-para-culturismo`.

### 2. Rutina de abdominales de 4 días

- Keep the programme exactly: Monday and Thursday (inverse crunches on a decline bench 4 x 15-20,
  hanging leg raises 4 x 15-20, cable oblique crunches 3 x 15, kneeling cable crunches 3 x 15,
  30-45 seconds between sets and 1-2 minutes between exercises); Tuesday and Friday (three
  supersets on the floor: inverse crunch plus leg raise 4 x 20 + 20 with 15 seconds between
  supersets and a minute at the end; lying oblique crunches 4 x 20 with no rest between sides;
  floor crunch plus right-angle leg crunch 4 x 20 + 20 under the same rest scheme); rest
  Wednesday, Saturday and Sunday.
- Fix the naming: "oblicuos en polea de tríceps" is a cable oblique crunch, and "crunch en polea de
  tríceps" is the kneeling cable crunch. Triceps has nothing to do with either.
- Turn the four asterisk footnotes into prose: visibility needs a low body-fat percentage and comes
  from diet, weights and cardio together; if the session is too much after weights, do it before;
  the technique rules are the ones in the block's hub; progress by adding sets, slowing the tempo or
  cutting rest.
- Frame it as a specialisation block: advanced lifters, four to six weeks, then back to two or three
  sessions a week. This resolves the conflict with the hub.
- Two routine tables, three columns, one per training day; name the superset pairs in prose and keep
  each exercise on its own row.
- Delete: the vosotros, the duplicated H1 artifacts and the archive's arrow title.
- Links: `rutinas-ejercicios-abdominales`, `abdominales-ejercicios-colgado`,
  `rutina-abdominales-para-culturismo`, `abdominales-isometricos`.

### 3. Ejercicios de abdominales

The hub of the block: the exercise index, not another routine page.

- Keep: the anatomy frame (the rectus is one muscle crossed by connective bands; the obliques
  rotate and side-bend; the transverse stabilises), the five-muscle list, the technique rules
  (relaxed head, hands behind the head without pulling, chin off the chest, ribs down, lumbar
  contact, exhale on the way up, slow eccentric, no momentum), the strength-endurance versus
  strength versus power framing, and the overtraining ceiling.
- Rebuild the anatomy section so it does not repeat the routine page word for word: here it
  explains what each muscle does and which exercise family trains it; the routine page owns sets,
  reps and planning.
- Fix: drop "garantizado"; soften "las planchas previenen multitud de problemas de espalda" to what
  is true (a trained core supports the spine; planks are one tool, not a treatment); drop the
  manual table of contents with anchors, because the layout builds the index from the H2s.
- The exercise catalogue is the page. Group it by family (trunk flexion, hip flexion, rotation and
  anti-rotation, isometric) and name the exercises the archive lists. Link only the published ones:
  `abdominales-ejercicios-colgado`, `encogimientos-banco-inclinado`, `encogimientos-maquina`,
  `encogimientos-polea-2`, `rodar-con-barra`, `encogimientos-sobre-balon-ejercicio`,
  `abdominales-isometricos`. The pending ones (hanging leg raise, oblique crunch, bicycle, planks)
  are described in prose without a link.
- Delete: the two empty trailing sections, the first person ("en mi rutina"), the boxing link, the
  "drama" aside, and every image credit.
- Add: how to choose an exercise (equipment, level, hip versus trunk flexion) and one closing
  paragraph that sends the reader to the routine page for volume.
- Links: `rutinas-ejercicios-abdominales`, `abdominales-isometricos`, `giros-en-disco`,
  `entrenamiento-abdominal-por-dorian-yates`, and the four exercise pages of this batch.

### 4. Perder grasa abdominal con abdominales

The myth page, and the block's only fat-loss page.

- Keep the whole argument: you cannot burn fat from one spot; abdominal exercise works the muscle
  under the fat layer and does nothing to the layer itself; fat is not muscle and cannot be
  "toned" into it; the burn is local metabolic work, not the fat melting; daily marathon sessions
  are wasted effort; a whole-body deficit is the only route.
- Fix the mechanism: name metabolites and local acidosis, not lactic acid.
- Replace the rhetorical absolute with the honest version: fat distribution is individual, which is
  why two people at the same body-fat percentage can look different around the waist.
- Add the other half the archive leaves implicit: abdominal training still earns its place for
  strength, hypertrophy and spinal support, independent of whether the abs are visible.
- Delete the first person, the vosotros, the bodybuilding.com image credit, the "dejad de hacerlo"
  imperative tone and the "punto" emphasis block.
- Links: `rutinas-ejercicios-abdominales`, `ejercicios-de-abdominales`,
  `volumen-de-entrenamiento`, `menos-grasa-mas-musculo`.

### 5. Rutina de abdominales para hipertrofiar

The two hypertrophy routines and the reasoning behind them.

- Keep: the abs are a muscle and respond to load; the corset role in the squat (intra-abdominal
  pressure stabilises the spine); the observation that most people train the abs far below the
  intensity they give the chest or the biceps; the high-load, low-rep approach; the "heavy first,
  high reps last" logic that recruits fast fibres early and slow fibres when fatigued; train them
  at the end of the session; two sessions a week; both routines exactly as written.
- Fix the risk claim: a weak trunk shifts load to the lumbar spine and the hip. Drop the disc
  hernia and anteversion predictions.
- Fix the growth claim (see conflict 4): the rectus thickens, it does not bulge forward like a
  belly; a protruding abdomen is fat.
- Fix "cada 4 días aproximadamente" so the page states one frequency, not two readings of it.
- Fix the typo in the rep ladder ("15-12-1 0-8-6" and "5 x 15-12-1 0-8-6").
- Delete: "es firme partidario" and the vosotros, "machacar".
- Links: `rutinas-ejercicios-abdominales`, `ejercicios-de-abdominales`, `encogimientos-polea-2`,
  `encogimientos-maquina`, `fallo-muscular`, `series-descendentes`.

### 6. Rutina A/B

- Keep: the A/B concept (two alternating sessions), the four benefits, both trainings with their
  exact numbers and rests (A: floor crunch 3 x 30, leg raise 3 x 30, back extension 3 x 30, 45-60
  seconds between sets; B: kneeling cable crunch 3 x 15, incline leg raise 3 x 15, back extension
  2 x 30, machine crunch 3 x 15, captain's chair knee raise 3 x 15, 60-90 seconds), the 3-day and
  4-day weekly distributions with the alternating week, and the 40/40/20 rule for trunk flexion,
  leg raises and lumbar work.
- Fix: "procurad aislar los abdominales" becomes "busca que el abdomen haga el trabajo, sin impulso
  de cadera ni de brazos".
- Keep the ten rules, but present them as the archive's checklist and drop the moralising tone and
  the "never more than 300 reps" absolutism: it is a ceiling for control, not a law.
- Delete: the first person ("la solución que a mí tan buenos resultados me ha dado"), the vosotros,
  "Tened en cuenta".
- Links: `rutinas-ejercicios-abdominales`, `rutina-abdominales-para-culturismo`,
  `abdominales-cambiatufisico`, `encogimientos-maquina`, `abdominales-isometricos`.

### 7. Encogimientos en banco declinado

Thin page (295 words) rebuilt around the technique.

- Keep: the starting angle around 30 degrees, feet anchored under the rollers, shoulder blades off
  the pad, fingers around the head without pulling, chin off the chest, exhale as you rise, round
  the back to increase the contraction, do not drive with the hip flexors, stop about 25 cm short
  at the bottom, and the two progressions (more angle, a plate on the chest).
- Add: why the decline works (more range and no rest at the bottom), the errors (pulling the neck,
  momentum, rising past perpendicular, hip flexor dominance, too much angle too soon), the
  progression order (angle, then load, then tempo) and the stopping rule (the set ends when the
  shoulder blades touch the pad or the neck takes over).
- No invented sets or reps: point at the routine pages.
- Delete: the bodybuilding.com credit, the inline image, the vosotros.
- Links: `ejercicios-de-abdominales`, `rutinas-ejercicios-abdominales`,
  `rutina-abdominales-para-culturismo`, `encogimientos-maquina`.

### 8. Encogimientos en máquina

- Keep: the machine variants (upper-body-only crunch, rotary torso), the plate stack, the moderate
  to high reps, the setup (adjust the machine, test unloaded, sit tight against the pad, feet under
  the rollers, grip the handles, look forward), the execution (smooth pull, round the lower back,
  one-second squeeze, exhale), and the progression (add a plate once 12 clean reps are easy, drop
  set to failure on the last set).
- Add: why the machine is useful (load without balance demands, easy to progress, good for
  beginners and for finishing a session), the errors (chin to chest, pulling with the arms, half
  range, too much weight), and the stop rule.
- Delete the vosotros.
- Links: `ejercicios-de-abdominales`, `rutinas-ejercicios-abdominales`,
  `rutina-abdominales-para-culturismo`, `encogimientos-polea-2`, `series-descendentes`.

### 9. Encogimientos en polea arrodillado

- Keep: the whole abdomen under load and real hypertrophy, the rope on the high pulley, the
  distance so the rope clears the head when you fold, the rope locked behind the head, thighs
  vertical, a slight fold at the start to feel tension, chin off the chest, fold at the waist and
  round the back, do not sit back, one-second squeeze, and the drop set with a 30% reduction after
  failure.
- Add: kneeling versus standing (standing is the more popular version and adds a balance demand;
  kneeling removes momentum), the errors (pulling with the arms, hips travelling back, rope
  slipping, too much weight, half range), and the loading rule (this is the block's main
  hypertrophy lift).
- Delete: the bodybuilding.com credit, the vosotros.
- Links: `rutinas-ejercicios-abdominales`, `rutina-abdominales-para-culturismo`,
  `encogimientos-maquina`, `fallo-muscular`, `series-descendentes`.

### 10. Rodamiento abdominal con barra

The hardest exercise of the block.

- Keep: the requirement (smooth floor, two equal round plates), the starting loads (5 kg, then
  10 kg), the position (kneeling on a mat, pronated grip at shoulder width, shoulders over the
  bar), the execution (roll forward until the arms are straight but not locked, pause, return), the
  cues (hips do not sag, abs and glutes braced), the range rule (only as far as you can hold) and
  the progression (longer range, thicker plates).
- Add: what it trains (anti-extension: the abs stop the lumbar spine from arching as the lever
  lengthens), the prerequisite (a solid plank first), the regressions (short range, band-assisted,
  wall stop), the errors (hips dropping, elbows bending, going past the point of control) and when
  to skip it (low back pain, no plank base).
- No invented sets or reps: the set ends when the hips start to sag; point at the volume page.
- Delete: the bodybuilding.com credit, the inline image, the vosotros.
- Links: `abdominales-isometricos`, `ejercicios-de-abdominales`,
  `rutinas-ejercicios-abdominales`, `ejercicios-dolor-de-espalda`, `volumen-de-entrenamiento`.

## Cross-links

Each page needs 2-4 sibling links and at least one inside this batch. Page 3 is the hub of the
block; pages 2, 5 and 6 are the routine variants; pages 1 and 7-10 are the exercise pages.

## Hero images

One unique hero per page, Wikimedia Commons only, CC0, public domain, CC BY or CC BY-SA, 1280 px
wide (`iiurlwidth=1280`), at least 1200 px on disk, under ~250 KB, credit in `heroCredit`, alt in
each file's locale. 261 heroes already exist, including several Gray's and Wellcome plates; check
the dHash before vendoring.

Suggested subjects: (1) a hanging knee raise on a pull-up bar; (2) an abdominal session with a
medicine ball or a mat; (3) an anatomy plate of the abdominal wall; (4) a waist measurement or a
body-composition scene; (5) a weighted cable crunch; (6) a decline-bench sit-up; (7) a decline
bench with a person mid-crunch; (8) an abdominal machine in a gym; (9) a kneeling cable crunch;
(10) a barbell or ab-wheel rollout.

## Verification

```powershell
npm run check:copy   # 271 pages expected, 13,821 assertions
npm run build        # 558 pages expected
npm run check:i18n   # after the routes are registered, 554 sitemap URLs
```

Each writer runs `npm run check:copy` at the end of its own scope. The parent registers the routes,
runs `npm run verify`, checks link resolution and the 390 px render, runs the hero dHash and commits
per page.

## Result (2026-11-16)

- 10 bilingual pairs, 20 files, 10 heroes. Library: 261 → **271 / 792**. Abdomen: 5/39 → 15/39.
- Two writers built the ten pairs; the closing session registered the routes, ran the gates, the
  link and dHash checks and the 390 px render, and committed per page.
- Gates after committing: `check:copy` **13,821/13,821** (271 pairs), build **558 pages**,
  `check:i18n` **8,742/8,742**, sitemap **554 URLs** with 1,662 alternates.
- Structural checks run by the closing session: 100 internal links, **0 broken**; zero external links,
  `.md` links or `#` links; heroes 1280 px wide, 144-240 KB, dHash 271 hashes with 270 distinct
  (only the pre-existing pair), and all 20 pages clean at 390 px.
- Route registration: commit `7fa76c6`.
- Commits: `edd9506`, `8178ef5`, `dace7d7`, `2e2e6f0`, `0dac076`, `7c23769`, `5dd9b1e`,
  `86ad6aa`, `db13f12`, `f28b312`.