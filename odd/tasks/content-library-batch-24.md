# Content library — batch 24

Started: 2026-11-16. Continues the library from 231/792 (`odd/tasks/content-pages.md`).

Objective: close the Entrenamiento de las Piernas block (nine remaining rows) and open the chest block
with its first page: ten bilingual pairs (20 files, 10 unique heroes), routes registered, gates green,
one commit per page with its evidence here.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Source archive: `C:\Users\Yves De Faria\Desktop\cambiatufisico.com\content\entrenamiento\` (`entrenamiento-de-las-piernas\` and `entrenamiento-del-pecho\`)

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `sentadilla-mirada-al-frente` | `squat-head-position` | `piernas/sentadilla-mirada-al-frente.md` | 405 | mirada en la sentadilla | | `80d4887`
| 2 | `grandes-gemelos-elevaciones-de-pie-o-sentado` | `standing-vs-seated-calf-raises` | `piernas/grandes-gemelos-elevaciones-de-pie-o-sentado.md` | 532 | elevaciones de pie o sentado | | `cd2b232`
| 3 | `sentadilla-prensa` | `squat-vs-leg-press` | `piernas/sentadilla-prensa.md` | 576 | sentadilla y prensa | | `cad1da0`
| 4 | `anatomia-gemelo-soleo` | `calf-anatomy` | `piernas/anatomia-gemelo-soleo.md` | 375 | anatomía gemelo y sóleo | | `722d7fd`
| 5 | `como-proteger-tus-rodillas-en-el-entrenamiento-de-cuadriceps` | `protect-knees-quad-training` | `piernas/como-proteger-tus-rodillas-en-el-entrenamiento-de-cuadriceps.md` | 297 | proteger rodillas cuádriceps | | `ec207ae`
| 6 | `anatomia-y-entrenamiento-del-tibial-anterior` | `tibialis-anterior` | `piernas/anatomia-y-entrenamiento-del-tibial-anterior.md` | 238 | tibial anterior | | `2dbd755`
| 7 | `zancadas-estaticas-zancadas-caminando-cual-es-mas-efectiva` | `static-vs-walking-lunges` | `piernas/zancadas-estaticas-zancadas-caminando-cual-es-mas-efectiva.md` | 495 | zancadas estáticas o caminando | | `160ad41`
| 8 | `anatomia-de-la-cadera-gluteos` | `hip-anatomy` | `piernas/anatomia-de-la-cadera-gluteos.md` | 773 | anatomía de la cadera | | `ae0ec06`
| 9 | `como-ganar-volumen-en-los-gemelos` | `calf-growth` | `piernas/como-ganar-volumen-en-los-gemelos.md` | 861 | volumen en los gemelos | | `0815d71`
| 10 | `press-de-banca-mas-efectivo-con-mancuernas-o-con-barra` | `dumbbell-vs-barbell-bench-press` | `pecho/press-de-banca-mas-efectivo-con-mancuernas-o-con-barra.md` | 522 | press de banca mancuernas o barra | `728641a` |

Pages 1-9: `section: "Entrenamiento de las Piernas"` (EN `Leg Training`). Page 10:
`section: "Entrenamiento del Pecho"` (EN `Chest Training`). All ten: `block: "Entrenamiento"`
(EN `Training`), `updated: "2026-11-16"`.

## The three calf rows stay three pages (binding)

The archive has two calf pages and one calf anatomy page that contradict each other: the anatomy page
names a **seated** raise as a gastrocnemius builder two paragraphs after explaining that the
gastrocnemius is slack when the knee is bent, and both training pages say straight-leg work trains
"gastrocnemius and soleus". The house line, applied everywhere:

- The gastrocnemius crosses the knee and the ankle, so it works with the leg straight (standing raises,
  donkey raises, press raises with the knee extended).
- The soleus crosses only the ankle, so it works with the knee bent (seated raises).
- Straight-leg work is mainly gastrocnemius; bent-knee work is mainly soleus. Neither is "both".
- The soleus is the **larger** of the two by mass and sits deeper, not "mucho más pequeño".

Each page keeps one job: **page 2** owns the position rule and the cues, **page 4** owns the anatomy
and nothing else (no prescriptions, no exercises), **page 9** owns the routines.

## Other positions settled before writing

1. **Depth.** Page 1 says "hasta que los muslos queden paralelos al suelo" as a rule; the library
   already publishes depth as a controlled range (`sentadilla-sin-lesiones`,
   `rango-completo-de-movimiento-rom`). Page 1 drops the rule and links both.
2. **The gaze study.** Page 1 reports a study with 10 rugby players (Journal of Sports Sciences,
   University of Miami). Keep the measured numbers (8 % more hip flexion, 2 % more spinal flexion when
   looking down) and **do not** turn them into an injury claim. The archive's "aumento del riesgo de
   lesión" is an extrapolation, not a finding.
3. **Squat versus press.** Page 3 contradicts itself ("la sentadilla enfatiza femorales y glúteo" and
   later "no puede trabajar tanto los cuádriceps como la prensa") and has no verdict. It ships as a
   decision rule: what each one is for, what each one costs, and how to sequence them.
4. **Knee protection.** Page 5 claims its warm-up "evitará o atenuará" knee pain and that "los gemelos
   se insertan en el fémur". Only the gastrocnemius originates on the femur, a warm-up does not prevent
   injury, and static stretching before lifting is contested. The page becomes a knee-friendly warm-up
   with the reason for each step, not a prevention promise.
5. **Shin splints.** Page 6 calls it "periostitis pretibiales"; the term is periostitis tibial / medial
   tibial stress syndrome, and the page says so.

## Global rules for this batch

1. Neutral Spanish with `tú`; zero vosotros, zero voseo, zero `usted`. Never the word `gym`.
2. No first person. Page 10 mixes three registers; all of them become guide voice.
3. Zero external links: the `bodybuilding.com` credits on page 10 die, and the dangling "en el siguiente
   vídeo" on page 6 goes with them (there is no video).
4. Zero inline images, zero image-as-heading lines, zero archive anchors, zero "Highlights", zero
   newsletter CTA, zero `▷` or `|` furniture in titles.
5. Zero em dashes. Titles 45-60 characters, descriptions 150-160, reciprocal `alternate`.
6. Tables: routine tables markdown with three columns; everything else `<table class="text-table">`.
   One footnote maximum, as a blockquote after the table — the archive uses three conventions for the
   same thing and none of them survives.
7. Anatomy pages: correct names and correct attachments. A wrong claim is fixed or removed.
8. Heroes: one unique per page, Wikimedia Commons, `iiurlwidth=1280`, at least 1200 px on disk, under
   ~250 KB, credit in `heroCredit`, alt in each file's own locale. The library already uses 231 heroes,
   including Gray's and Wellcome plates; check the dHash before vendoring.

## Editorial decisions per page

### 1. Sentadilla: la mirada al frente

One variable, one study. Keep it that size and do not inflate it.

- Keep: the gaze cue (eyes level, a fixed point at eye height), the setup short version (feet,
  knees soft, toes slightly out, bar on the upper back, descent led by the hips) and the study as
  reported (10 rugby players with at least a year of squatting, two sets of five at 25 % of 1RM, three
  gaze targets; looking down added 8 % hip flexion and 2 % spinal flexion).
- Add: what the numbers mean (a kinematic difference, not an injury outcome), how to set the gaze in a
  home gym, and that looking at the ceiling is not better, it just moves the neck.
- Delete: "hasta que los muslos queden paralelos al suelo" as a rule (link both depth pages), the
  "riesgo de lesión" extrapolation, "En cambiatufisico.com lo hemos dicho muchas veces", the duplicated
  study block, the vosotros and the typos (`25°0`, `IRM`, `Strenght`).
- Links: `tecnica-ejecucion-ejercicios`, `sentadilla-sin-lesiones`, `rango-completo-de-movimiento-rom`,
  `sentadilla-prensa`.

### 2. Gemelos: ¿elevaciones de pie o sentado?

Owns the position rule. Short page, one idea, no filler.

- Keep: standing work for the gastrocnemius (knee straight), seated work for the soleus (knee bent),
  seated after standing when both are in the session, moderate reps with heavy resistance (the archive's
  `6 a 1 O` is an OCR of 6-10), the one-to-two-second hold at the top, constant tension, full range, and
  no fear of load.
- Fix: "los gemelos se mantienen en un estado perpetuo de contracción" and "se recuperan deprisa" are
  softened to what is defensible (they are postural muscles that tolerate frequency, and small muscles
  recover quickly for most lifters); drop "extremadamente fuertes en relación con su tamaño".
- Delete the vosotros, the paragraph glued to the image and the stray periods.
- Links: `anatomia-gemelo-soleo`, `como-ganar-volumen-en-los-gemelos`, `fallo-muscular`,
  `mejores-ejercicios-en-maquina-de-musculacion`.

### 3. Sentadilla y prensa: lo mejor para tus piernas

An argument, not a list. Give it a verdict.

- Ship the decision rule: the squat loads the whole body, the hips through a long range and the
  stabilisers, and it costs systemic fatigue; the press supports the back, isolates knee extension and
  lets you take the quadriceps closer to failure with less of that cost. Neither replaces the other.
- Sequencing: in the same session, squat first and press after; across the week, one day of each also
  works, and the page says why.
- Delete: "trabaja a la vez más músculos que cualquier movimiento conocido", "Enfatiza los femorales y
  el glúteo" as written, "el incremento del ROM se traduce en mayor activación" (link
  `rango-completo-de-movimiento-rom` instead) and "la prensa ofrece más seguridad" as a bare claim.
- Keep the pointers to foot position on the press without repeating the four positions: that is
  `prensa-posicion-pies`.
- Links: `sentadilla-sin-lesiones`, `prensa-posicion-pies`, `mejores-ejercicios-cuadriceps`,
  `rango-completo-de-movimiento-rom`, `volumen-de-entrenamiento`.

### 4. Anatomía del gemelo y el sóleo

Anatomy only. The archive's training half is wrong and duplicated; it does not ship.

- Structure: the two muscles, their origins and insertions, the shared Achilles insertion, why one
  crosses the knee and the other does not, the fibre-type difference (the soleus is more slow-twitch),
  and the practical consequence in one closing paragraph that links page 2.
- Fix: the soleus is the larger of the two and sits deeper, not "mucho más pequeño"; drop the seated
  raise from the gastrocnemius list; drop the "es mucho más fácil estimularlo" versus "es muy difícil
  hipertrofiarlo" pair.
- Delete the three images and the two caption lines acting as headings.
- Links: `grandes-gemelos-elevaciones-de-pie-o-sentado`, `como-ganar-volumen-en-los-gemelos`,
  `anatomia-femorales`, `prensa-posicion-pies`.

### 5. Cómo proteger tus rodillas en el entrenamiento de cuádriceps

297 words with no headings at all. Rebuild as a knee-friendly warm-up.

- Keep the circuit with its order and its numbers: calves, then quads, then hamstrings; 20-30 light reps
  each of standing calf raise, squat, stiff-leg deadlift and squat again, no rest between; optional
  second round; then at least one light working set of the first quad exercise; skip the circuit if the
  legs are already warm, but never skip the specific set.
- Fix the reasons: the gastrocnemius **originates** on the femur (the soleus does not), so ankle work
  warms the knee's neighbourhood; static stretching before lifting is a contested habit and the page
  replaces it with the dynamic reps it already prescribes.
- Delete "evitará o atenuará las molestias y los dolores en las rodillas" and the six-item injury list:
  a warm-up prepares, it does not prevent injuries.
- Add what actually protects the knee, with links: load management, tracking over the foot, control of
  the descent, and not training through sharp pain.
- Links: `calentamiento-y-estiramientos`, `como-calentar-para-tu-entrenamiento-de-gluteos`,
  `sentadilla-sin-lesiones`, `entrenamiento-del-cuadriceps-mitos`.

### 6. Anatomía y entrenamiento del tibial anterior

238 words, one heading, and a reference to a video that does not exist. The topic is unique in the
library: build it properly.

- Keep: origin on the lateral condyle and body of the tibia, insertion on the first metatarsal and the
  medial cuneiform, dorsiflexion and inversion, its role as the antagonist of the calf, and the link
  between weak dorsiflexors and shin pain in runners.
- Correct the term: periostitis tibial, also called medial tibial stress syndrome.
- Training without inventing numbers: banded dorsiflexion, heel walking, and a loaded option described
  generically (never a product name). If the archive gives no sets or reps, say so and link
  `volumen-de-entrenamiento` for the dosing logic.
- Delete the dangling video line, the `DDRA` product framing and the "prevenir lesiones" promise.
- Links: `anatomia-gemelo-soleo`, `como-ganar-volumen-en-los-gemelos`, `calentamiento-y-estiramientos`,
  `volumen-de-entrenamiento`.

### 7. Zancadas estáticas y zancadas caminando

The emphasis matrix is the page's asset. Give it a heading and align the prose to it.

- Ship the matrix as `<table class="text-table">`: descent, ascent and back-leg involvement for the
  static and the walking version, with the archive's ratings.
- Fix the contradiction: the prose says the back leg's glutes, hamstrings and quads lift the body in the
  static version, while its own table rates that cell moderate and elsewhere the page says the back leg
  works little. The table wins; the prose follows it.
- Delete "la zancada supone mayor recorrido que la sentadilla" as written (hedge or drop).
- Add the practical rule: walking for conditioning and unilateral work over distance, static for focus
  and for small spaces.
- Fix `¿Cual`, `Cuadriceps`, "Énfasis en las músculos".
- Links: `mejores-ejercicios-cuadriceps`, `beneficios-hip-thrust`, `tecnica-ejecucion-ejercicios`,
  `anatomia-de-la-cadera-gluteos`.

### 8. Anatomía de la cadera y los glúteos

- Keep: the three glutes with their actions, the iliopsoas as the main hip flexor, the adductors, and the
  exercise map (squats and lunges for the glute max, abduction machine and band walks for the medius,
  RDL and hip extension for the hamstring side, lateral lunges for the adductors).
- Fix: "recto interino (o músculo grácil)" is the gracilis, known as recto interno; use one name.
  "individualizadamente" becomes "de forma individual". Drop the "reduce el riesgo de lesión lumbar"
  promise and the flat "es prácticamente imposible" (say that you can emphasise, not isolate, and link
  `entrenamiento-del-cuadriceps-mitos` for the same logic).
- This is the third glute page in the library: it must not repeat the hip thrust benefits. It is anatomy
  plus exercise map, and it links the other two.
- Title: drop the `▷` and the "¡Tu CORE importa!" furniture.
- Links: `beneficios-hip-thrust`, `como-calentar-para-tu-entrenamiento-de-gluteos`,
  `anatomia-femorales`, `zancadas-estaticas-zancadas-caminando-cual-es-mas-efectiva`.

### 9. Cómo ganar volumen en los gemelos

The routines page. Keep the numbers; fix the anatomy errors and the footnote chaos.

- Keep the three routines exactly as prescribed: the mass routine (donkey raise 5 × 15, 12, 12, 20, 20;
  standing machine 5 × the same; seated 4 × 15, 15, 20, 20; to failure; one warm-up set of 15; the last
  two sets lighter for congestion), the beginner routine for the first three months (standing and seated
  3 × 15, 12, 12, not to failure) and the home routine (single-leg standing 4 × 15, 12, 12, 20; seated
  with a dumbbell 4 × the same; 8-10 cm block under the toes).
- Keep the cues: seated after standing, toes forward, knees unlocked, slow tempo, accelerate when
  fatigued.
- Fix: straight-leg work trains the gastrocnemius (not "gastrocnemius and soleus"); the soleus does not
  stabilise the knee; the gastrocnemius is not mostly slow-twitch (the soleus is).
- Fix the footnotes: one convention, one footnote per table as a blockquote, and the mangled `3****`
  markers disappear.
- Delete the vosotros, "La rutina de casera" and "soleo".
- Links: `grandes-gemelos-elevaciones-de-pie-o-sentado`, `anatomia-gemelo-soleo`, `fallo-muscular`,
  `principios-weider`, `volumen-de-entrenamiento`.

### 10. Press de banca: ¿mancuernas o barra?

- Keep the comparison and the verdict as the archive's conclusion: dumbbells give more range, more
  independent stabilisation and a more natural line for most lifters; a barbell allows heavier loads,
  easier progression and a fixed path.
- Fix the EMG claim: report it as what the cited study found (10-20 % more activation in the upper and
  middle chest with dumbbells) without inventing the journal, and say plainly that one study on a small
  sample is a hint, not a rule.
- Rewrite the cheat-rep line: a barbell keeps both arms in the same plane, which makes a controlled
  cheat rep easier to keep symmetrical; it does not make cheating safe.
- Delete the two `(Ref: bodybuilding.com)` credits, the first person ("todavía sigo viendo", "vamos a ir
  al grano"), the vosotros, the corrupted emphasis markup and `que ejercicio` / `cual es más efectivo`.
- Practical close: dumbbells as the first or second chest movement, then the barbell for load, flyes
  last; comparison always at the same percentage of 1RM.
- Links: `mejores-ejercicios-en-maquina-de-musculacion`, `tecnica-ejecucion-ejercicios`,
  `ejercicios-multiarticulares-y-ejercicios-de-aislamiento`, `repeticion-maxima`, `principios-weider`.

## Cross-links

Each page needs 2-4 sibling links, at least one inside this batch. The calf trio links itself in a
triangle (2 → 4 → 9 → 2) and page 9 is the hub of the block.

## Hero images

One unique hero per page, Wikimedia Commons only, CC0, public domain, CC BY or CC BY-SA, 1280 px wide
(`iiurlwidth=1280`), at least 1200 px on disk, under ~250 KB, credit in `heroCredit`, alt in each
file's locale. Three calf pages need three clearly different images; the anatomy page can use a plate,
but the quadriceps plate is already in the library, so check the dHash.

Suggested subjects: (1) a squat with the lifter's eyes on a point ahead; (2) a seated calf raise
machine; (3) a leg press with feet high; (4) a plate of the posterior lower leg; (5) a wall calf
stretch; (6) banded dorsiflexion or the anterior lower leg; (7) a dumbbell walking lunge; (8) a plate
of the gluteal muscles; (9) a standing calf raise on a step; (10) a dumbbell bench press.

## Verification

```powershell
npm run check:copy   # 241 pages expected, 12,291 assertions
npm run build        # 498 pages expected
npm run check:i18n   # after the routes are registered, 494 sitemap URLs
```

Each writer runs `npm run check:copy` at the end of its own scope. The parent registers the routes,
runs `npm run verify`, checks link resolution and the 390 px render, runs the hero dHash and commits
per page.

## Result (2026-11-16)

- 10 bilingual pairs, 20 files, 10 heroes. Library: 231 → **241 / 792**. The Entrenamiento de las
  Piernas block is closed (18/18) and the chest block has its first page.
- Gates: `check:copy` **12,291/12,291** (241 files), build **498 pages**, `check:i18n`
  **7,812/7,812**, sitemap **494 URLs** with **1,482 alternates**.
- Route registration: commit `d3d44fa`.
- Structural checks: 92 internal links across the new files, **0 broken**; zero external links,
  zero `.md` links, zero `#` links, zero inline images, zero manual anchors, zero em dashes.
- Heroes: 1200-1280 px wide, 30-245 KB. dHash over all 241 heroes gives 240 distinct values; only the
  pre-existing `remo-polea-sentado` pair is identical.
- 390 px render: one defect found and fixed. The calf routine table's five-number rep strings
  ("15, 12, 12, 20, 20") clipped against the nowrap reps column, so the mobile block now lets those
  two columns wrap and drops them to 0.8 rem. Commit `f0f5cfd`. Every page in the batch is clean after it.

### Corrections to the record

1. The archive's "la elevación sentado es buena para el gemelo" contradicts its own knee-angle rule; the
   three calf pages now split the work (position rule, anatomy, routines) and none claims "both".
2. "Periostitis pretibiales" is not the clinical term; the page uses periostitis tibial / síndrome de
   estrés tibial medial.
3. Only the gastrocnemius originates on the femur, and a warm-up prepares rather than prevents.
4. The gaze study's 8 % and 2 % are kinematics, not injury risk, and the page says so.

