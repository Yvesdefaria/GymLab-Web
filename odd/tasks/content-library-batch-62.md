# Content library — batch 62

Started: 2026-11-24. Continues the library from 611/792 (`odd/tasks/content-pages.md`).

Objective: the first ten Nutrición Aplicada rows, from `/carbohidratos/` to `/vino-es-realmente-saludable/`,
as ten bilingual pairs. Library 611 → 621. Nutrición 18/191 → 48/191.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Sources: `...\content\nutricion\nutricion-aplicada\`
- Depends on batches 60 and 61.

## Tasks

- [x] T1 Scope, conflicts and house rules written (this document).
- [x] T2 Writer A: pages 1-5, ES + EN + heroes.
- [x] T3 Writer B: pages 6-10, ES + EN + heroes.
- [x] T4 Routes registered in `astro.config.mjs` and `scripts/check-i18n.mjs`.
- [x] T5 Parent gates, link check, render pass, dHash pass, per-page commits, checklist and handoff.

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `carbohidratos` | `carbohydrates` | `carbohidratos.md` | 2,501 | carbohidratos | |
| 2 | `guia-definitiva-de-recomposicion-corporal` | `body-recomposition-guide` | `guia-definitiva-de-recomposicion-corporal.md` | 2,060 | recomposición corporal | |
| 3 | `culturismo-la-cura-para-el-envejecimiento` | `bodybuilding-and-aging` | `culturismo-la-cura-para-el-envejecimiento.md` | 1,347 | entrenamiento después de los 50 | |
| 4 | `suplementacion-deportiva-alcanzar-objetivos` | `sports-supplementation-guide` | `suplementacion-deportiva-alcanzar-objetivos.md` | 1,426 | suplementación deportiva | |
| 5 | `engordan-los-hidratos-en-las-cenas` | `carbs-at-night-and-fat-gain` | `engordan-los-hidratos-en-las-cenas.md` | 775 | hidratos por la noche | |
| 6 | `sistema-inmune-con-vitaminas` | `immune-system-vitamins` | `sistema-inmune-con-vitaminas.md` | 614 | vitaminas para el sistema inmune | |
| 7 | `quieres-perder-grasa-no-solo-perder-peso` | `lose-fat-not-weight` | `quieres-perder-grasa-no-solo-perder-peso.md` | 1,976 | perder grasa no solo peso | |
| 8 | `ayuno-intermitente` | `intermittent-fasting-and-weights` | `ayuno-intermitente.md` | 1,761 | ayuno intermitente | |
| 9 | `insulina-y-culturismo-aliada-ganar-masa-muscular` | `insulin-and-bodybuilding` | `insulina-y-culturismo-aliada-ganar-masa-muscular.md` | 1,048 | insulina y culturismo | |
| 10 | `vino-es-realmente-saludable` | `is-wine-healthy` | `vino-es-realmente-saludable.md` | 868 | vino y salud | |

All: `block: "Entrenamiento"` (`Training`), `section: "Nutrición aplicada"` (`Applied nutrition`),
`updated: "2026-11-24"`.

## House rules (binding, YMYL)

1. **No purchase CTAs, affiliate links, shop names, brand names or "best" rankings.**
2. **No medical claims.** Fat loss, immunity, aging, fasting, insulin and alcohol statements stay inside
   what trials in healthy adults support, with the qualifier kept.
3. **No invented doses or percentages.** Protein 1.6-2.2 g/kg, carbohydrate 3-5 g/kg for lifters and
   6-10 g/kg for endurance (as a range, not a prescription), fibre 25-35 g/day, a 200-500 kcal deficit,
   creatine 3-5 g/day. Anything else is described as unstudied.
4. **No alcohol promotion.** Wine is not a health strategy. No "safe" level, no "two to four glasses",
   no French-paradox endorsement.
5. **No exogenous insulin protocol, no steroid-style detail.** Page 9 is physiology plus risk.
6. **No athlete photos, no before/after imagery.**
7. **Say "no evidence" when there is none.**

## Conflicts the batch settles (binding)

1. **Carbohydrates: the pillar page.** 4 kcal/g, types, fibre 25-35 g/day, 3-5 g/kg for lifters and
   6-10 g/kg for endurance, timing around training, ketosis described honestly. Delete the "24 effective
   minutes per hour" invention, the 500 g/day ceiling, "you will lose memory", the 3:1 soluble-fibre
   ratio and the 20% fat floor. The per-kilo figures are the only numbers that change the plate;
   quality and timing do the rest.
2. **Recomposition is a rate problem.** Small deficit (200-300 kcal), protein 1.6-2.2 g/kg, progressive
   strength, patience. Delete "fat turns into muscle", "starvation mode hoards fat", the 2 kg of fat =
   2 kg of muscle claim and the "95% of supplements are useless" line. Creatine, whey and caffeine are
   optional, not magic. No newsletter CTA, no first person.
3. **Aging: strength, not a cure.** Retitle and reframe away from "the cure for aging". After 50 the
   fastest loss and the fastest recovery are both strength; start with two sessions a week, stable
   machines and a progression. Delete "perfect health", "best preventive medicine", the unsourced 25%,
   "immediate cure", the self-citation and the 15-rep routine with no sets or load: publish a real
   two-day plan with sets, reps and a progression rule. Screening and medical clearance first.
4. **Sports supplementation is a decision tree.** Goal first, then the short list: protein, creatine,
   caffeine, beta-alanine, vitamin D if deficient, hydration. Delete the shop links, "experts
   recommend", "creatine never lets you down", BCAAs preventing "muscle hunger", the recovery-product
   fear and the anabolic-window hard deadline. Anti-doping note kept.
5. **Night carbs do not become fat by the clock.** Total energy and sleep decide; the time of day is a
   scheduling choice. Delete "carbs relax, protein keeps you alert", the "eliminate carbs to lose fat"
   causal claim and the anecdote. The rebound is real; say why.
6. **Immunity: no megadose shield.** Cover real deficiencies (vitamin D in winter, with a test), sleep
   7-9 hours, moderate exercise and food first. Delete "boost your defenses", "antioxidants are the real
   key" (high doses can blunt training adaptations) and the multivitamin absolution. Built from 614
   words: reach 600 with the deficiency map and the sleep/exercise evidence, no filler.
7. **Fat loss is not weight loss.** The scale mixes fat, muscle, glycogen and water; measure the waist,
   photos every four weeks and strength. Deficit 300-500 kcal, protein high, steps and lifting. Delete
   the AIDS/steroids paragraph, the affiliate CTA, "infallible and proven", the thyroid and cellulite
   claims, the 2-3 meals absolutism and every voseo form. 900-1,000 words.
8. **Fasting is a calorie tool.** 16/8, 5:2, alternate-day and OMAD, with the practical template and the
   people who should not fast. Delete the autophagy-neurodegeneration claim, the longevity claims, the
   invented 3-6% / 20-30% figures, "prevents type 2 diabetes" and "safe for most". Protein 1.6-2.2 g/kg
   and two large meals work as well as six.
9. **Insulin transports, it does not build.** No exogenous protocol: delete "only in high performance
   could it be considered", the post-workout spike as "extremely useful", the creatine/BCAA/glutamine
   hormone stack and the "no uncontrolled fat gain" line. Keep hypoglycaemia and coma risk,
   desensitisation and the myth section. A post-workout spike adds nothing when daily protein is
   covered.
10. **Wine is alcohol, and alcohol is a Group 1 carcinogen.** No safe level; the low-risk guideline is
    the ceiling, not a target. Delete "2-4 glasses a day", the absurd equivalences, the -50%, -32% and
    -22% figures, the n=14 study, "one glass is no problem" and the sleep-improvement claim (alcohol
    worsens sleep architecture). Red-wine polyphenols are available from grapes. Calories 7 kcal/g.
    If you drink, count it; who should avoid. No promotion.

## Global rules

1. Neutral Spanish with `tú`; zero vosotros, voseo or `usted`. Never the word `gym` in Spanish.
2. No first person, no newsletter or comment CTAs, no supplement promotions, no athlete photos, no
   medical or rehab claims, no injury promises, no "Conclusión" section, no marketing headings.
3. Zero external links, `.md` links, `#` anchors, inline images, `▷`/`✔`, escaped asterisks, emoji
   artifacts, empty headings, manual TOCs, embedded videos, duplicate images, headings with no body.
4. Links only to pages that exist (ES slugs): the ten batch pages and the batch 60 and 61 pages
   (`aceite-de-cbd-beneficios-para-el-deportista`, `como-empezar-a-tomar-suplementos-deportivos`,
   `como-mejorar-tus-fisico-con-estos-batidos`, `suplementos-dieteticos`,
   `los-dos-mejores-suplementos-para-ganar-masa-muscular`, `suplementos-glutamina`,
   `tribulus-terrestris`, `aminoacidos-bcaas`, `reemplazo-comidas`, `glucosamina`, `esteroides`,
   `bloqueadores-de-carbohidratos`, `gaba-neotropico-para-la-calma-y-relajacion`, `vitargo`,
   `ganadores-de-peso-mass-gainers`, `cafeina-suplemento`, `aminoacidos`,
   `almuerzos-saludables-altos-en-proteinas`, `combinar-proteinas-carbohidratos`, `cenar-verdura`),
   `ganar-masa-muscular`, `como-ganar-peso`, `menos-grasa-mas-musculo`,
   `perder-grasa-abdominal-con-abdominales`, `cardio-ayunas`, `mejor-proteina-nocturna`,
   `creatina-la-verdad`, `suplementos-creatina`, `suplementos-proteina`, `comprar-proteinas`,
   `errores-al-tomar-suplementos`, `pros-y-contras-de-las-proteinas`,
   `hmb-protector-de-masa-muscular`, `alcohol-creatina`, `creatina-cafeina`,
   `potencia-tu-sistema-immunologico-con-el-entrenamiento`,
   `como-orientar-tu-rutina-de-pesas-para-perder-grasa`,
   `caminar-como-metodo-para-perder-grasa-y-estar-en-forma`, `entrenamiento-perder-grasa`,
   `rutina-quema-grasa-sin-hacer-aerobicos`, `rutina-pesas-tras-inactividad`,
   `rutina-de-cuerpo-completo-para-recuperar-la-forma`, `guia-musculacion-principiantes`,
   `rutina-de-entrenamiento-primer-mes-en-el-gimnasio`, `calcular-calorias`,
   `cuanto-dormir-para-progresar-en-el-gimnasio`.
5. Zero em dashes. Titles 45-60, descriptions 150-160, reciprocal `alternate`.
6. Tables: comparison and decision tables as `<table class="text-table">` with three columns. The
   carbohydrate targets, the fasting protocols and the low-risk alcohol guide are text tables.
7. Heroes: one unique per page, free licence only (Wikimedia Commons first, Pexels second), 1280 px,
   >=1200 on disk, <250 KB, credit plus honest alt, dHash on the final crop. Distance 0 is a duplicate,
   crops have measured up to 14, and white Everkinetic line art hashes 2-9 against other line art:
   open the closest hero and compare by equipment. Prefer product-free, person-free images.
8. Body 600-900 words per locale, table-inclusive under 1,150. Page 1 (pillar) and page 7 may reach
   1,000. Page 6 (614 words) must reach 600 with real content.
9. Mandatory intra-batch links: 1 -> 2, 5, 8; 2 -> 1, 5, 7; 3 -> 2, 4, 7; 4 -> 1, 2, 5; 5 -> 1, 2, 8;
   6 -> 3, 7, 4; 7 -> 1, 2, 5, 8; 8 -> 1, 2, 5; 9 -> 1, 2, 3; 10 -> 5, 7, 8. All ten link
   `errores-al-tomar-suplementos`.

## Per page

### 1. Carbohydrates

- Pillar page: what they are, 4 kcal/g, simple versus complex versus fibre, 25-35 g/day of fibre, the
  per-kilo table by goal, timing around training, ketosis without the scare, and the plate.
- Delete the "24 effective minutes per hour" invention, the 500 g ceiling, "you will lose memory", the
  3:1 fibre ratio, the 20% fat floor and the "fast carbs lower cortisol" claim.
- Link `guia-definitiva-de-recomposicion-corporal` (page 2), `engordan-los-hidratos-en-las-cenas`
  (page 5), `ayuno-intermitente` (page 8), `ganar-masa-muscular`, `menos-grasa-mas-musculo`,
  `calcular-calorias`, `errores-al-tomar-suplementos`.

### 2. Body recomposition

- Decision page: who can recompose (novice, returning, higher body fat), the three rules (small deficit
  200-300 kcal, protein 1.6-2.2 g/kg, progressive strength), the realistic rate, the signals to stop.
- Delete fat-into-muscle, starvation mode, 2 kg = 2 kg and "95% supplements". No CTA, no first person.
- Link `carbohidratos` (page 1), `engordan-los-hidratos-en-las-cenas` (page 5),
  `quieres-perder-grasa-no-solo-perder-peso` (page 7), `menos-grasa-mas-musculo`,
  `ganar-masa-muscular`, `errores-al-tomar-suplementos`.

### 3. Training after 50

- Reframe: strength is the variable that declines fastest and responds fastest. A real two-day plan with
  sets, reps and a progression rule; machines first, then free weights; screening and medical clearance;
  protein and sleep.
- Delete "the cure for aging", "perfect health", "best preventive medicine", the 25% figure, "immediate
  cure", the self-citation and the load-less 15-rep list.
- Link `guia-definitiva-de-recomposicion-corporal` (page 2), `suplementacion-deportiva-alcanzar-objetivos`
  (page 4), `quieres-perder-grasa-no-solo-perder-peso` (page 7), `rutina-pesas-tras-inactividad`,
  `rutina-de-cuerpo-completo-para-recuperar-la-forma`, `guia-musculacion-principiantes`.

### 4. Sports supplementation by goal

- Decision tree by goal (strength, endurance, fat loss, health): protein, creatine, caffeine,
  beta-alanine, vitamin D if deficient, hydration. What each does, the dose with evidence, what to skip.
- Delete the shop links ("Dietética Ferrer"), "experts recommend", "creatine never lets you down", BCAA
  "muscle hunger", recovery-product fear and the hard anabolic window. Anti-doping note kept.
- Link `carbohidratos` (page 1), `guia-definitiva-de-recomposicion-corporal` (page 2),
  `engordan-los-hidratos-en-las-cenas` (page 5), `errores-al-tomar-suplementos`,
  `suplementos-creatina`, `creatina-la-verdad`.

### 5. Carbs at night

- Myth page: the clock does not change energy balance; total intake and sleep decide. Timing follows
  training. The rebound after restrictive diets is real; explain it.
- Delete "carbs relax, protein keeps you alert", "eliminate carbs to lose fat" and the anecdote about
  years without vegetables.
- Link `carbohidratos` (page 1), `guia-definitiva-de-recomposicion-corporal` (page 2),
  `ayuno-intermitente` (page 8), `mejor-proteina-nocturna`, `menos-grasa-mas-musculo`,
  `errores-al-tomar-suplementos`.

### 6. Immune system and vitamins

- Deficiency map: vitamin D in winter (test first), vitamin C from food, zinc and iron only when low,
  protein and calories enough. Sleep 7-9 hours and moderate exercise carry more weight than any pill.
- Delete "boost your defenses", "antioxidants are the real key" and the multivitamin absolution. Built
  from 614 words: reach 600 with the deficiency map and the evidence.
- Link `culturismo-la-cura-para-el-envejecimiento` (page 3), `quieres-perder-grasa-no-solo-perder-peso`
  (page 7), `suplementacion-deportiva-alcanzar-objetivos` (page 4),
  `potencia-tu-sistema-immunologico-con-el-entrenamiento`,
  `cuanto-dormir-para-progresar-en-el-gimnasio`, `errores-al-tomar-suplementos`.

### 7. Lose fat, not weight

- Metrics page: waist, photos every four weeks, strength, and why the scale lies (glycogen, water,
  sodium, fibre). Deficit 300-500 kcal, protein high, lifting plus steps, patience.
- Delete the AIDS/steroids paragraph, the affiliate CTA, "infallible and proven", the thyroid and
  cellulite claims, the 2-3 meals absolutism and every voseo form. 900-1,000 words.
- Link `carbohidratos` (page 1), `guia-definitiva-de-recomposicion-corporal` (page 2),
  `engordan-los-hidratos-en-las-cenas` (page 5), `ayuno-intermitente` (page 8),
  `perder-grasa-abdominal-con-abdominales`,
  `como-orientar-tu-rutina-de-pesas-para-perder-grasa`, `menos-grasa-mas-musculo`,
  `calcular-calorias`.

### 8. Intermittent fasting and weights

- Calorie tool: 16/8, 5:2, alternate-day and OMAD, a template with protein spread, training fasted
  versus fed, and the people who should not fast (pregnancy, lactation, eating-disorder history,
  type 1 diabetes, underweight).
- Delete autophagy-neurodegeneration, longevity, the invented 3-6% / 20-30% figures, "prevents type 2
  diabetes" and "safe for most".
- Link `carbohidratos` (page 1), `guia-definitiva-de-recomposicion-corporal` (page 2),
  `engordan-los-hidratos-en-las-cenas` (page 5), `cardio-ayunas`, `menos-grasa-mas-musculo`,
  `mejor-proteina-nocturna`, `errores-al-tomar-suplementos`.

### 9. Insulin and bodybuilding

- Physiology: insulin transports glucose and amino acids, is permissive for growth, and does not build
  muscle by itself. A post-workout spike adds nothing when daily protein is covered. Exogenous insulin
  is a drug with hypoglycaemia and coma risk; no protocol.
- Delete "only in high performance could it be considered", "extremely useful", the
  creatine/BCAA/glutamine hormone stack and "no uncontrolled fat gain". Keep the risks and the myths.
- Link `carbohidratos` (page 1), `guia-definitiva-de-recomposicion-corporal` (page 2),
  `culturismo-la-cura-para-el-envejecimiento` (page 3), `ganar-masa-muscular`,
  `mejor-proteina-nocturna`, `errores-al-tomar-suplementos`.

### 10. Is wine healthy?

- Alcohol is an IARC Group 1 carcinogen; there is no safe level, and the low-risk guideline is a ceiling,
  not a target. Red-wine polyphenols are available from grapes. Alcohol costs sleep (worse architecture)
  and 7 kcal/g. If you drink, count it; who should avoid. No promotion.
- Delete "2-4 glasses a day", the equivalences, the -50%, -32%, -22% figures, the n=14 study, "one glass
  is no problem" and the sleep-improvement claim.
- Link `engordan-los-hidratos-en-las-cenas` (page 5), `quieres-perder-grasa-no-solo-perder-peso`
  (page 7), `ayuno-intermitente` (page 8), `alcohol-creatina`,
  `cuanto-dormir-para-progresar-en-el-gimnasio`, `errores-al-tomar-suplementos`.

## Writer split

- **Writer A:** pages 1-5: `carbohidratos`, `guia-definitiva-de-recomposicion-corporal`,
  `culturismo-la-cura-para-el-envejecimiento`, `suplementacion-deportiva-alcanzar-objetivos`,
  `engordan-los-hidratos-en-las-cenas`, plus five heroes.
- **Writer B:** pages 6-10: `sistema-inmune-con-vitaminas`,
  `quieres-perder-grasa-no-solo-perder-peso`, `ayuno-intermitente`,
  `insulina-y-culturismo-aliada-ganar-masa-muscular`, `vino-es-realmente-saludable`, plus five heroes.
- Neither writer touches `astro.config.mjs`, `scripts/check-i18n.mjs`, `guides-nav.ts`,
  `content-pages.md` or this document.

## Hero shortlist

1. Oats in a wooden bowl or wheat ears.
2. Tape measure on a neutral table or dumbbells and a notebook.
3. Empty rack with dawn light or a stair handrail.
4. Empty scoop on slate or lab beakers and a scale.
5. Whole-grain pasta beside a wall clock.
6. Halved citrus on a board or winter sun on a window.
7. Bathroom scale beside a tape measure.
8. Analogue clock on an empty table or an empty plate with a fork.
9. Glucose meter with no person or rice and sugar on slate.
10. Grapes on the vine or an empty wine glass upside down on stone.

## Verification

```powershell
npm run check:copy   # expected 31,671
npm run build        # expected 1,258 pages
npm run check:i18n   # expected 19,592, 1,254 sitemap URLs
```

Parent checks beyond the gates: every internal link resolves, zero em dashes, no BOM, dHash over all
heroes, 140 page/width pairs with no clipped cell.

## Result (2026-11-24)

- 10 bilingual pairs, 20 files, 10 heroes. Library 611 → **621 / 792**. Nutrición **48/191**.
- Gates: `check:copy` **31,671/31,671**, build **1,258 pages**, `check:i18n` **19,592/19,592**, sitemap
  **1,254 URLs** with 3,762 alternates.
- Structural checks: 130 internal links, **0 broken**; zero em dashes; no BOM; 140 page/width pairs with
  **0 clipped cells**.
- **Corrections made:** carbohydrates become the pillar with per-kilo targets and no "24 effective
  minutes" invention; recomposition is a rate problem, not fat turning into muscle; training after 50 is
  strength work with a real two-day plan, not a cure; sports supplementation is a decision tree without
  a shop; night carbs do not become fat by the clock; immunity has no megadose shield; fat loss is
  measured with a tape, not only a scale; fasting is a calorie tool; insulin transports and does not
  build; wine is alcohol and a Group 1 carcinogen, without promotion.
- **Fixed by the parent:** `carbohidratos` and `quieres-perder-grasa-no-solo-perder-peso` linked the
  calorie calculator in both locales, which the article-only link check flags; the clauses now carry no
  calculator link. The immune page pointed at
  `/es/potencia-tu-sistema-immunologico-con-el-entrenamiento/` with a double m
  (`sistema-immunologico`), a real 404; it now points at `sistema-inmunologico`.
- **Writers:** A pages 1-5, B pages 6-10, disjoint files.
- **Heroes:** ten Wikimedia files, all 1280x720. The minimum distance is 13 on a tape-measure still life;
  every nearest neighbour was opened and none is a crop.
- Commits: pages `42d6715`, `2a685f1`, `aab8e2a`, `76573db`, `eee7bd7`, `37aaf06`, `c4ffec3`, `f65170b`,
  `dd9b941`, `c1b36da`; routes `6241c9f`.
