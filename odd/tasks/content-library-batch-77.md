# Content library — batch 77

Started: 2026-11-25. Continues the library from 761/792 after batch 76
(`odd/tasks/content-pages.md`).

Objective: `dieta-paleo` to `dietas-para-mujer`, as ten bilingual pairs. Library 761 → 771.
This batch closes Dietas y planes de alimentación and opens Mujer Fitness.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Sources: `...\content\nutricion\dietas-y-planes-de-alimentacion\` (pages 1-3) and
  `...\content\mujer-fitness\fitness-y-bienestar-para-mujeres\` (pages 4-10)
- Depends on batch 76.

## Tasks

- [x] T1 Scope, conflicts and house rules written (this document).
- [x] T2 Writer A: pages 1-5, ES + EN + heroes.
- [x] T3 Writer B: pages 6-10, ES + EN + heroes.
- [x] T4 Routes registered in `astro.config.mjs` and `scripts/check-i18n.mjs`.
- [x] T5 Parent gates, link check, render pass, dHash pass, per-page commits, checklist and handoff.

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `dieta-paleo-que-es-beneficios-reales` | `paleo-diet` | `dieta-paleo-que-es-beneficios-reales.md` | 1,654 | dieta paleo | |
| 2 | `tentempies-para-dieta-de-definicion-muscular` | `cutting-snacks` | `tentempies-para-dieta-de-definicion-muscular.md` | 790 | tentempiés fitness | |
| 3 | `psicologia-de-la-definicion` | `diet-psychology` | `psicologia-de-la-definicion.md` | 1,929 | psicología de la definición | |
| 4 | `rutina-piernas-mujeres` | `women-leg-workout` | `rutina-piernas-mujeres.md` | 554 | rutina de piernas mujer | |
| 5 | `rutina-gimnasio-para-mujer` | `women-gym-workout` | `rutina-gimnasio-para-mujer.md` | 691 | rutina de gimnasio mujer | |
| 6 | `entrenamiento-para-mujer-fitness` | `womens-fitness-training` | `entrenamiento-para-mujer-fitness.md` | 6,401 | entrenamiento mujer | |
| 7 | `entrenamiento-de-fuerza-y-ciclo-menstrual` | `strength-training-and-menstrual-cycle` | `entrenamiento-de-fuerza-y-ciclo-menstrual.md` | 1,962 | ciclo menstrual y fuerza | |
| 8 | `rutinas-para-mujer` | `women-weight-routines` | `rutinas-para-mujer.md` | 3,208 | rutinas para mujer | |
| 9 | `pesas-y-la-mujer` | `women-and-weights` | `pesas-y-la-mujer.md` | 1,210 | pesas para mujeres | |
| 10 | `dietas-para-mujer` | `womens-diet-guide` | `dietas-para-mujer.md` | 1,421 | dietas para mujer | |

Pages 1-3: `section: "Dietas y planes"` (`Diets and meal plans`). Pages 4-10:
`section: "Fitness y bienestar"` (`Fitness and wellbeing`). All: `block: "Entrenamiento"` (`Training`),
`updated: "2026-11-25"`.

## Expected gates

- `check:copy`: 38,811 + 510 = **39,321**
- build: 1,537 + 20 = **1,557 pages**
- `check:i18n`: 23,932 + 310 = **24,242**, sitemap **1,554 URLs**

## House rules (binding, YMYL and ED risk)

1. **No purchase CTAs, affiliate links, shop names, brand names or "best" rankings.**
2. **No calorie plan below 1,400 kcal for a man or 1,200 for a woman presented as a recommendation.**
3. **No appetite-suppression tricks as the answer to hunger.** Gum, sparkling water, zero soda and
   "walk to the shop" are not strategies for a person who is hungry in a deficit.
4. **No medical claims.** Cycle, iron, amenorrhea and postpartum statements stay inside what is known
   and always end in "see a doctor" when they are a symptom.
5. **No "tonificar".** The word does not describe a physiological process. Write strength, muscle mass,
   fat loss or the specific adaptation.
6. **No body-shaming, no "bikini body", no condescension, no "you will not get bulky" without the real
   explanation.**
7. **No athlete photos, no before/after imagery, no person on a scale.**

## Preservation policy (owner decision, 2026-11-25)

**Keep the archive's information wherever it survives as fact.** Correct the number, name the evidence
and change the angle; do not amputate the topic. Only these go outright: promotional or affiliate
links, newsletter CTAs, product or brand endorsements, and any claim that can harm a reader (a crash
diet, a supplement protocol, an appetite-suppression trick sold as the answer to hunger).

When a section cannot stand as written, replace it with the nearest true version and say in one
sentence what changed and why. The page should carry more of the original, not less.

## Conflicts the batch settles (binding)

1. **Paleo is a swap, not an ancestry.** What changes is ultra-processed food out, meat, fish,
   vegetables, fruit and tubers in. Keep the 80/20 rule as a practical line. Delete the leaky-gut and
   antinutrient claims, the automatic fat loss, "you do not need to count" and the whey and creatine
   endorsement. Add the real cost: fibre, calcium, iron and eating out. No newsletter CTA.
2. **Snacks carry 20-25 g of protein plus fibre, and that is the whole job.** Delete the
   six-meals-for-metabolism myth, the "sugar crashes", the vegetables-as-slow-carbohydrates line and
   the butter phobia. The egg arithmetic is correct and stays.
3. **Hunger in a deficit is physiology, and this page is where disordered eating gets named.** Keep the
   page's structure and its physiology: less energy, lower leptin, higher ghrelin, poorer sleep. Keep
   the strategy list too, but evaluate each one instead of prescribing it: protein, fibre, volume,
   sleep and an honest deficit have evidence; gum, sparkling water, zero soda and walking to the shop
   are distraction, and the page says so. Separate physical hunger from emotional appetite. Correct the
   ego-depletion battery and the invented citation, and rewrite "reverses metabolic adaptation" as what
   a diet break really does: adherence and fatigue. Add the mandatory paragraph in both locales: if food
   dominates the day, if you binge, if you fear eating, stop the diet and speak to a professional.
4. **The women's leg routine needs its missing day and its progression.** Fill phase 1 day 2, label the
   phases consistently, keep two leg days a week and the squat and hinge selection, add warm-up, load
   and progression, and drop the daily cardio and "tonificar".
5. **The women's gym routine is a two-day upper/lower, not twenty sets plus six cardio days.** Keep one
   superset day and one triset day but halve the volume, set the level honestly (intermediate), add
   warm-up and progression, and delete the six-cardio-day prescription and "tono".
6. **The training pillar teaches how to build a plan.** Frequency, exercise count, sets, load and
   session length, with effort-based guidance (RIR/RPE). Delete the 3 kg a month, the uncited
   researcher, the rep-range and rest-length fat-loss myths and the collagen contradiction (women do
   not need shorter rests between sets). Link out instead of repeating the beginner guide.
7. **Cycle and strength is symptom-based autoregulation.** Keep the phase map, the RIR/RPE example and
   the temperature and sleep effects. Delete "oestrogens are anabolic", the ligament-laxity claim as
   fact, the mandatory premenstrual deload, the "natural anabolic window", creatine for mental fatigue
   and "superpoder cíclico". Add bleeding and iron: heavy periods mean ferritin, and amenorrhea means a
   doctor.
8. **Six routines become a chooser.** Three honest templates by weekly frequency; the five- and six-day
   plans link out. Keep the exercise tables, the 4-6 week block and the warm-up. Delete "tonificación
   real", the metabolism and neurotransmitter claims, the fixed 6-8 week aesthetic promise and the
   unqualified competition plan.
9. **Women build real muscle, and the page explains why.** Keep the testosterone order of magnitude and
   the life-stage benefits: bone, muscle, function. Delete "a woman will never get too big", the
   30/70 genetics split, the 21-minutes-per-hour and three-year figures, the "muscle weighs more"
   heading (explain glycogen and water instead), "cardio alone does not work" and the postpartum
   "restructure your body" line without a pelvic-floor caveat.
10. **One worked day of food at three calorie levels.** Keep the kg x 30-33 maintenance, the 300-500
    deficit, 1.6-2.2 g/kg and the 20-40 g per meal. Fix the missing sections 4-6 by renumbering, settle
    the carbohydrate ratio (2-3:1, not 4:1), demote the post-workout ratio, and delete the cycle-diet
    hint and the crowd-sourced "send me your story" line. Add the medical and pregnancy caveat.

## Global rules

1. Neutral Spanish with `tú`; zero vosotros, voseo or `usted`. Never the word `gym` in Spanish.
2. No first person, no newsletter CTAs, no supplement promotions, no athlete photos, no medical or rehab
   claims, no "Conclusión" section, no marketing headings, no "Nivel pro", no manual TOC.
3. Zero external links, `.md` links, `#` anchors, inline images, `▷`/`✔`, escaped asterisks, emoji
   artifacts, empty headings, duplicate images, headings with no body.
4. Links only to pages that exist. Whitelist: the ten batch pages, any slug ticked under Nutrición or in
   the exercise/routine blocks in `odd/tasks/content-pages.md`, and these when useful:
   `como-combinar-cardio-y-pesas-para-mujeres`, `rutinas-torso-pierna`, `superseries`, `triseries`,
   `guia-musculacion-principiantes`, `frecuencia-entrenar-cada-musculo`, `volumen-de-entrenamiento`,
   `principio-adaptacion-sobrecarga-progresiva`, `tiempo-de-descanso-entre-series`,
   `sentadilla-frontal-barra`, `peso-muerto-rumano`, `rutinas-pierna`,
   `perder-grasa-abdominal-con-abdominales`, `pesas-salud-cardiovascular`, `semana-de-descarga`,
   `sobreentrenamiento`, `fatiga-del-sistema-nervioso-central-snc`, `creatina-la-verdad`,
   `ayuno-intermitente`, `efecto-rebote-perder-peso`, `como-ser-disciplinado-dieta`,
   `comida-pre-entrenamiento`, `comida-post-entrenamiento`, `calculo-calorico-mantenimiento`,
   `deficit-calorico-clave-para-perder-peso`, `legumbres-beneficiosas-dieta`, `frutos-secos`,
   `reemplazo-comidas`, `dividir-comidas-dieta`, `almuerzos-saludables-altos-en-proteinas`,
   `dietas-definicion-muscular`, `mitos-dieta-saludable`, `dieta-dash-guia-completa`,
   `como-identificar-y-evitar-una-dieta-milagro`, `suplementos-creatina`. Verify each slug on disk; if
   one does not exist, do not use it.
5. Zero em dashes. Titles 45-60, descriptions 150-160, reciprocal `alternate`.
6. Tables: routine tables are markdown with exactly three columns (Exercise | Sets | Reps). Comparison,
   decision and weekly-grid tables are `<table class="text-table">` with three cells per row.
7. Heroes: one unique per page, free licence only, 1280 px, >=1200 on disk, <250 KB, credit plus honest
   alt, dHash on the final crop. Open the closest hero; distance 0 is a duplicate and crops measure up
   to 14. No person on a scale, no before/after, no body-baring image.
8. Body 600-900 words per locale, table-inclusive under 1,150. Page 6 arrives at 6,256 words and page 8
   at 3,208: choose one idea per H2 and cut whole sections. Pages 4 (554) and 5 (691) must be rebuilt.
9. Mandatory intra-batch links: 1 -> 2, 3; 2 -> 3, 4; 3 -> 4, 5; 4 -> 5, 6; 5 -> 6, 7; 6 -> 7, 8;
   7 -> 8, 9; 8 -> 9, 10; 9 -> 10, 1; 10 -> 1, 2.

## Per page

### 1. Paleo diet

- The swap and its real evidence; 80/20 as a line; fibre, calcium and iron cost; eating out. Delete the
  leaky-gut, antinutrient and automatic-fat-loss claims. Link `deficit-calorico-clave-para-perder-peso`,
  `legumbres-beneficiosas-dieta`, `mitos-dieta-saludable`, `ayuno-intermitente`, page 2, page 3.

### 2. Cutting snacks

- Portable 20-25 g protein plus fibre, built from a fridge and a lunch bag, with the egg and peanut
  arithmetic. Delete the metabolism, sugar-crash and vegetable-carbohydrate myths. Link
  `dividir-comidas-dieta`, `comida-pre-entrenamiento`, `almuerzos-saludables-altos-en-proteinas`,
  `frutos-secos`, page 3, page 4.

### 3. Diet psychology

- Why hunger rises in a deficit; physical hunger versus emotional appetite; keep the strategy list and
  say which items have evidence and which are only distraction; protein, fibre, volume, sleep and an
  honest deficit as the real levers. Mandatory stop rule and help pathway. Link
  `como-ser-disciplinado-dieta`, `dietas-definicion-muscular`, `efecto-rebote-perder-peso`,
  `como-identificar-y-evitar-una-dieta-milagro`, page 4, page 5.

### 4. Women's leg workout

- Two leg days a week for someone with about a year of training: squat and hinge, the missing phase 1
  day 2 filled, warm-up, load and progression. No daily cardio, no "tonificar". Link
  `rutinas-pierna`, `sentadilla-frontal-barra`, `peso-muerto-rumano`,
  `como-combinar-cardio-y-pesas-para-mujeres`, page 5, page 6.

### 5. Women's gym workout

- Two-day upper/lower with a sane set count, one superset day and one triset day, intermediate level,
  warm-up and progression. Delete the six cardio days. Link `rutinas-torso-pierna`, `superseries`,
  `triseries`, `como-combinar-cardio-y-pesas-para-mujeres`, page 6, page 7.

### 6. Women's fitness training

- Build your own week: frequency, exercises per session, sets, load and session length, with RIR/RPE.
  Delete the 3 kg a month, the uncited researcher and the rep-range myths. Link
  `guia-musculacion-principiantes`, `frecuencia-entrenar-cada-musculo`, `volumen-de-entrenamiento`,
  `principio-adaptacion-sobrecarga-progresiva`, page 7, page 8.

### 7. Strength training and the menstrual cycle

- Phase map, symptom-based autoregulation with RIR/RPE, temperature and sleep, bleeding and iron,
  amenorrhea means a doctor. Delete the anabolic oestrogen, the ligament claim as fact and the
  mandatory deload. Link `como-combinar-cardio-y-pesas-para-mujeres`, `sobreentrenamiento`,
  `semana-de-descarga`, `fatiga-del-sistema-nervioso-central-snc`, page 8, page 9.

### 8. Women's weight routines

- A chooser: two, three and four days, with the exercise tables, the 4-6 week block and the warm-up;
  five and six days link out. Delete "tonificación real" and the aesthetic promise. Link
  `rutinas-torso-pierna`, `rutinas-pierna`, `guia-musculacion-principiantes`, `volumen-de-entrenamiento`,
  page 9, page 10.

### 9. Women and weights

- What strength training changes across life stages: bone, muscle, function, and real hypertrophy. Keep
  the testosterone order of magnitude with the explanation. Delete the absolutes, the 30/70 split, the
  life-expectancy arithmetic and the postpartum line without the pelvic-floor caveat. Link
  `pesas-salud-cardiovascular`, `ganar-masa-muscular`, `perder-grasa-abdominal-con-abdominales`,
  `culturismo-la-cura-para-el-envejecimiento`, page 10, page 1.

### 10. Women's diet guide

- One worked day at three calorie levels, protein at 1.6-2.2 g/kg and 20-40 g per meal, with the
  arithmetic visible. Renumber, settle the carbohydrate ratio, demote the post-workout ratio, add the
  medical and pregnancy caveat. Link `calculo-calorico-mantenimiento`, `dietas-definicion-muscular`,
  `comida-pre-entrenamiento`, `comida-post-entrenamiento`, `suplementos-creatina`, page 1, page 2.

## Writer split

- **Writer A:** pages 1-5: `dieta-paleo-que-es-beneficios-reales`,
  `tentempies-para-dieta-de-definicion-muscular`, `psicologia-de-la-definicion`,
  `rutina-piernas-mujeres`, `rutina-gimnasio-para-mujer`, plus five heroes.
- **Writer B:** pages 6-10: `entrenamiento-para-mujer-fitness`,
  `entrenamiento-de-fuerza-y-ciclo-menstrual`, `rutinas-para-mujer`, `pesas-y-la-mujer`,
  `dietas-para-mujer`, plus five heroes.

## Hero shortlist

1. A shopping trolley with fresh produce, one packaged snack left on the shelf.
2. Stacked glass containers with boiled eggs, chopped carrots and fresh cheese.
3. A full plate of rice, beans and vegetables on a plain table, no person.
4. A barbell in a rack with two small plates stacked on the floor.
5. An empty cable station with a straight bar and a lat-pulldown seat.
6. An open training notebook and pen beside a dumbbell on a gym floor.
7. A paper calendar on a fridge door with training days pencilled in.
8. A whiteboard weekly grid with magnets on training days.
9. A chalked barbell on a gym floor with two 10 kg plates.
10. A kitchen scale with a bowl of rice, chicken and green beans.

## Verification

```powershell
npm run check:copy   # expected 39,321
npm run build        # expected 1,557 pages
npm run check:i18n   # expected 24,242, 1,554 sitemap URLs
```

Parent checks beyond the gates: every internal link resolves, zero em dashes, no BOM, dHash over all
heroes, 140 page/width pairs with no clipped cell.

## Result (2026-11-25)

- 10 bilingual pairs, 20 files, 10 heroes. Library 761 → **771 / 792**. **Nutrición 191/191 —
  COMPLETO**; Mujer Fitness **7/23**.
- Gates: `check:copy` **39,321/39,321**, build **1,557 pages**, `check:i18n` **24,242/24,242**, sitemap
  **1,554 URLs**.
- Structural checks: **134 internal links** across the ten pairs, **0 broken**; 0 files with problems;
  **0 clipped cells over 420 page/width pairs** for the whole 30-pair render pass.
- **Fixed by the parent:** seven decision tables in four files used the routine grid (58/21/21) and
  clipped 17 cells at 1024, 900, 480, 390 and 360 px. They became `<table class="text-table">` in both
  locales (`2bdff0c`), and the re-run closed at zero clips.
- **What the batch kept and what it corrected:** paleo keeps its food pattern and gains the real cost in
  fibre, calcium and iron, without the leaky-gut and automatic-fat-loss claims; cutting snacks keep the
  egg and peanut arithmetic with the meal-frequency myth and the vegetable-carbohydrate line removed;
  the psychology page keeps every strategy and evaluates them one by one (protein, fibre, volume and
  sleep have evidence; gum, sparkling water and zero soda are distraction), with the stop-and-seek-help
  paragraph as the last body section in both locales; the women's leg routine gains the missing phase 1
  day 2, warm-up and progression; the gym routine drops from twenty-plus sets and six cardio days to a
  two-day upper/lower; the 6,256-word pillar becomes the week-building guide with RIR/RPE; the cycle page
  is symptom-based autoregulation with basal temperature, sleep, ferritin and amenorrhoea triage, and no
  mandatory deload; the routine catalogue is a 2/3/4-day chooser with five and six days linking out;
  women and weights keeps the testosterone order of magnitude and explains hypertrophy instead of the
  "never too big" absolute; the diet guide carries three worked days at 1,582 / 2,017 / 2,421 kcal and
  124 / 135 / 145 g of protein for a 65 kg reference, above the 1,200 floor.
- **Writers:** A pages 1-5, B pages 6-10, disjoint files.
- **Heroes:** ten files. Nearest dHash 9 (an unrelated sunset runner) in writer A, 11-20 in writer B.
  Two notes: the cycle hero credit is `Vulvani`, the Commons author and a period-care organisation, kept
  because attribution is not endorsement; and the week-building hero is a closed notebook, subject-near
  the open planner of `dieta-culturismo-profesional` and the agenda in `rutina-principiantes-cinco-semanas`.
  Different photos and hashes, so it stays.
- Commits: pages `7cb06cb`, `f2254b1`, `2852d43`, `272f606`, `ae94639`, `040b148`, `647b8de`, `04f12e0`,
  `93ec223`, `8914d1a`; routes `6d15f8a`; table fix `2bdff0c`.
