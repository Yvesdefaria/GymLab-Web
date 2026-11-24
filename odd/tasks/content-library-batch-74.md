# Content library — batch 74

Started: 2026-11-24. Continues the library from 731/792 after batch 73
(`odd/tasks/content-pages.md`).

Objective: `dieta-de-volumen-con-alimentos-para-maxima-energia` to `dieta-estacional`, as ten
bilingual pairs. Library 731 → 741. This batch closes Dietas de volumen at 13/13 and opens Dietas de
definición.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Sources: `...\content\nutricion\dietas-de-volumen-muscular\` (page 1) and
  `...\content\nutricion\dietas-de-definicion-muscular\` (pages 2-10)
- Depends on batch 73.

## Tasks

- [x] T1 Scope, conflicts and house rules written (this document).
- [x] T2 Writer A: pages 1-5, ES + EN + heroes.
- [x] T3 Writer B: pages 6-10, ES + EN + heroes.
- [x] T4 Routes registered in `astro.config.mjs` and `scripts/check-i18n.mjs`.
- [x] T5 Parent gates, link check, render pass, dHash pass, per-page commits, checklist and handoff.

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `dieta-de-volumen-con-alimentos-para-maxima-energia` | `high-energy-bulking-foods` | `dieta-de-volumen-con-alimentos-para-maxima-energia.md` | 2,247 | dieta de volumen | |
| 2 | `definicion-muscular` | `muscle-definition` | `definicion-muscular.md` | 5,033 | definición muscular | |
| 3 | `dietas-definicion-muscular` | `cutting-diets` | `dietas-definicion-muscular.md` | 1,903 | dietas de definición | |
| 4 | `quemar-grasa` | `fat-burning` | `quemar-grasa.md` | 3,677 | quemar grasa | |
| 5 | `perder-peso` | `weight-loss-guide` | `perder-peso.md` | 5,103 | perder peso | |
| 6 | `dieta-dash-guia-completa` | `dash-diet` | `dieta-dash-guia-completa.md` | 2,380 | dieta DASH | |
| 7 | `dieta-baja-en-grasas` | `low-fat-diet` | `dieta-baja-en-grasas.md` | 1,897 | dieta baja en grasas | |
| 8 | `ejemplos-de-dietas-de-definicion-muscular-para-culturistas` | `bodybuilder-cutting-diet` | `ejemplos-de-dietas-de-definicion-muscular-para-culturistas.md` | 5,201 | dieta de definición para culturistas | |
| 9 | `dieta-maxima-definicion-muscular` | `maximum-definition-diet` | `dieta-maxima-definicion-muscular.md` | 419 | máxima definición muscular | |
| 10 | `dieta-estacional` | `diet-by-goals` | `dieta-estacional.md` | 1,763 | dieta por objetivos | |

Page 1: `section: "Dietas de volumen"` (`Bulking diets`). Pages 2-10:
`section: "Dietas de definición"` (`Cutting diets`). All: `block: "Entrenamiento"` (`Training`),
`updated: "2026-11-24"`.

## House rules (binding, YMYL)

1. **No purchase CTAs, affiliate links, shop names, brand names or "best" rankings.** No supplement
   brand, no "quemador", no meal-replacement product.
2. **No crash diet and no eating-disorder-adjacent advice.** No plan below 1,400 kcal/day for a man or
   1,200 for a woman is presented as a recommendation. Contest-level steps are documented as an
   advanced, supervised protocol with the risk written, never as a starting point.
3. **No medical claims.** Blood pressure, sodium and potassium stay inside what DASH trials show, with
   numbers and population named. No "comparable to medication" without a figure.
4. **No "detox", "adrenal fatigue", "metabolic damage" or "fat-burning zone" mechanics.** Adherence and
   energy balance explain the results.
5. **No moral language about food.** No "clean/dirty", "contaminated", "poison" or "sin".
6. **No athlete photos, no before/after imagery, no body-shaming.**

## Conflicts the batch settles (binding)

1. **Bulking food is fuel with a number.** Keep the 15 foods and rebuild them into one day with a
   declared target (start at maintenance + 300 kcal). Delete the quercetin "10 % of the onion's weight"
   figure, bison "high in omega", the 70 °C meat ceiling, the unsourced Arizona State study, "gain size
   and lose fat" in the same phase and the vosotros register.
2. **Definition is losing fat while keeping muscle, and the arithmetic must add up.** Fix the three
   macro rows (400/120/85 = 2,845, not 2,800; 200/120/85 = 2,045; 100/120/90 = 1,690). Delete "fat burns
   in the fire of carbohydrates", "no carbs means no fat loss", the metabolic-slowing mechanism, the
   ephedra reference and the anti-protein note. Keep the deficit, the protein floor and the training
   preservation.
3. **A 12-week descending-carb template for an 80 kg reader.** The macros do add up (2,460 and 1,980);
   keep them. Delete the TEF myth ("small meals burn calories"), "toxic ketones", the "very reduced"
   label on 40 % carbohydrate, the "quemagrasa" and the moral language. Fix the week overlap: weeks
   1-4, 5-8, 9-12.
4. **Fat loss is balance and patience, not a zone.** Delete the 40-60 minute fat-burning window, the
   60-70 % heart-rate zone, "adrenal regeneration", "toxic liver components", the 200 kcal sleeping
   figure and the congenital-fat fatalism. Keep strength before cardio, sleep and the training log.
   Sweat garments are water loss, not fat loss, and are written as such.
5. **Weight loss is the deficit held long enough to become a habit.** Delete the concentration-camp
   analogy, "smoke half a cigarette", homogenised milk as harmful, corn syrup as "lipogenic", the
   biotype fatalism and "starvation diets work". Fix "73 % thermogenesis" (that is basal metabolism,
   not the thermic effect of food), the CoQ10 typo and the 44 g fat row that contradicts the 20 %
   rule. Keep 0.5-1 % of body weight per week and the habit list.
6. **DASH is a pattern with numbers.** Sodium 1,500-2,300 mg/day, potassium 3,500-5,000 mg, published
   1997. Keep the food groups and the blood-pressure evidence with its population. Delete "comparable
   to first-line medication" without a mmHg figure, the two-week promise, the "almost free deficit",
   the creatine and whey blocks, the newsletter CTA and the broken TOC.
7. **Low fat means 20-30 % of calories, not zero.** 0.5-1 g/kg of fat, never below 10 %. Delete the
   dizziness reassurance, "eat as much as you want", "lipolysis needs carbohydrate", the fat-burning
   fire, the weekly overfeed that "boosts metabolism", organic pesticides storing fat, soy and beer as
   "estrogenic belly fat" and dairy as a fat-loss tool. Every menu carries grams.
8. **Eight calorie steps, documented, not prescribed.** The macros multiply correctly; fix 75 × 25 =
   1,875, not 1,865. Delete every brand, the pre-workout burner and the Sunday binge. State that the
   two lowest steps are contest territory, require supervision and are not a starting point for a
   general reader. Link the 12-week template and do not duplicate it.
9. **The maximum-definition day is advanced, temporary and priced.** Show 240 P / 100 C / 60 G = 1,900
   kcal at 80 kg, say it is aggressive, add vegetables and fibre, delete the brands, the BCAA stack,
   the thermogenic and the "elevated intensity without depletion" contradiction.
10. **Seasonal dieting is periodisation in three-month blocks.** Keep the loss and maintenance blocks
    and the adherence argument. Delete "only grapefruit", "down to 40 kilos", "peanuts are pure fat",
    the fruit restriction and "one muffin as your starch". Give every food a real measure and the day
    a calorie total.

## Global rules

1. Neutral Spanish with `tú`; zero vosotros, voseo or `usted`. Never the word `gym` in Spanish.
2. No first person, no newsletter CTAs, no supplement promotions, no athlete photos, no medical or rehab
   claims, no "Conclusión" section, no marketing headings, no manual TOC.
3. Zero external links, `.md` links, `#` anchors, inline images, `▷`/`✔`, escaped asterisks, emoji
   artifacts, empty headings, duplicate images, headings with no body.
4. Links only to pages that exist: the ten batch pages, any slug ticked under Nutrición in
   `odd/tasks/content-pages.md`, and these cross-block pages when useful: `ganar-masa-muscular`,
   `rutinas-de-definicion`, `como-combinar-cardio-y-pesas-para-mujeres`,
   `cuanto-dormir-para-progresar-en-el-gimnasio`. Never invent a slug.
5. Zero em dashes. Titles 45-60, descriptions 150-160, reciprocal `alternate`.
6. Tables: comparison and decision tables as `<table class="text-table">` with three columns. The
   three macro rows, the eight calorie steps and the seasonal blocks are text tables.
7. Heroes: one unique per page, free licence only, 1280 px, >=1200 on disk, <250 KB, credit plus honest
   alt, dHash on the final crop. Open the closest hero; distance 0 is a duplicate and crops measure up
   to 14. Prefer product-free, person-free images.
8. Body 600-900 words per locale, table-inclusive under 1,150. Pages 2, 4, 5, 6 and 8 arrive at
   1,900-5,200 words and must be cut to the floor, not trimmed: one idea per H2. Page 9 (419) must be
   rebuilt.
9. Mandatory intra-batch links: 1 -> 2, 3; 2 -> 3, 4; 3 -> 4, 5; 4 -> 5, 6; 5 -> 6, 7; 6 -> 7, 8;
   7 -> 8, 9; 8 -> 9, 10; 9 -> 10, 1; 10 -> 1, 2.

## Per page

### 1. High-energy bulking foods

- One day of real food at maintenance + 300 kcal, built from the archive's 15 foods, with cooked
  weights and a total. Delete the quercetin figure, bison omega, 70 °C, the Arizona study and the
  simultaneous fat-loss promise. Link `calculo-calorias-masa-muscular`, `como-ganar-peso`,
  `batidos-para-volumen-muscular`, `cafeina-suplemento`, `agua-hidratacion-deporte`, page 2, page 3.

### 2. Muscle definition

- What defining is: a deficit that keeps the bar heavy and the protein high. Fix the three macro rows'
  arithmetic and show the sum. Delete the carbohydrate-fire mechanics, the ephedra mention and the
  anti-protein note. Link `deficit-calorico-clave-para-perder-peso`, `elaborar-dieta`, `grasas`,
  `dietas-muy-bajas-en-carbohidratos-culturismo`, page 3, page 4.

### 3. Cutting diets

- The 12-week descending-carb template for an 80 kg reader: 2,460 then 1,980 kcal with the macros
  visible. Delete the TEF myth, the ketone toxicity, the moral language and the week overlap. Link
  `efecto-rebote-perder-peso`, `elaborar-dieta`, `calculo-calorias-masa-muscular`, page 2, page 4.

### 4. Fat burning

- Balance, patience and adherence. Keep strength before cardio, sleep, the log and the weekly rate.
  Delete the fat-burning window, the heart-rate zone, adrenal regeneration, the 200 kcal figure and
  sweat garments as a method. Link `deficit-calorico-clave-para-perder-peso`, `cardio-ayunas`,
  `cardio-liss-baja-intensidad-larga-duracion`, `efecto-rebote-perder-peso`, page 5, page 6.

### 5. Weight loss

- The deficit arithmetic and the habit list: 0.5-1 % of body weight per week, a floor of 1,200/1,400
  kcal, protein held. Delete the camp analogy, the smoking line, the milk and syrup claims, the biotype
  fatalism and the thermogenesis confusion. Link `deficit-calorico-clave-para-perder-peso`,
  `calculo-calorico-mantenimiento`, `quieres-perder-grasa-no-solo-perder-peso`,
  `como-ser-disciplinado-dieta`, page 6, page 7.

### 6. DASH diet

- The pattern, its food groups, sodium 1,500-2,300 mg and potassium 3,500-5,000 mg, published 1997, and
  the blood-pressure result with its population. No weight-loss guarantee. Delete the medication
  comparison, the creatine and whey blocks and the CTA. Link `como-limitar-el-sodio`,
  `deficit-calorico-clave-para-perder-peso`, `grasas`, `guia-definitiva-de-recomposicion-corporal`,
  page 7, page 8.

### 7. Low-fat diet

- 20-30 % of calories, 0.5-1 g/kg, never under 10 %, with grams in every menu. Delete the dizziness
  reassurance and the "eat all you want" line. Link `grasas`, `grasas-transaturadas`,
  `deficit-calorico-clave-para-perder-peso`, `mitos-dieta-saludable`, page 8, page 9.

### 8. Bodybuilder cutting diets

- The eight calorie steps with their macros, corrected, plus the explicit boundary: the two lowest are
  contest preparation under supervision, not a plan for a general reader. Delete the brands, the
  burner and the Sunday binge. Link `elaborar-dieta`, `calculo-calorias-masa-muscular`,
  `dieta-culturista-ocho-semanas`, `menu-saludable-con-carbohidratos-y-proteinas`, page 9, page 10.

### 9. Maximum definition diet

- The 1,900 kcal day at 80 kg with its macros shown, labelled advanced and temporary, with vegetables
  and fibre added. Delete the brands, the BCAA stack and the intensity contradiction. Link
  `dietas-muy-bajas-en-carbohidratos-culturismo`, `deficit-calorico-clave-para-perder-peso`,
  page 10, page 1.

### 10. Diet by goals

- Three-month blocks: loss, then maintenance. Real measures and a calorie total for each block. Delete
  "only grapefruit", "down to 40 kilos", the peanut line and the fruit restriction. Link
  `efecto-rebote-perder-peso`, `como-ser-disciplinado-dieta`, `elaborar-dieta`, page 1, page 2.

## Writer split

- **Writer A:** pages 1-5: `dieta-de-volumen-con-alimentos-para-maxima-energia`, `definicion-muscular`,
  `dietas-definicion-muscular`, `quemar-grasa`, `perder-peso`, plus five heroes.
- **Writer B:** pages 6-10: `dieta-dash-guia-completa`, `dieta-baja-en-grasas`,
  `ejemplos-de-dietas-de-definicion-muscular-para-culturistas`, `dieta-maxima-definicion-muscular`,
  `dieta-estacional`, plus five heroes.

## Hero shortlist

1. A bowl of oats with banana and walnuts on a wooden table, morning light.
2. Grilled chicken, rice and vegetables next to a kitchen scale.
3. Three identical lunch boxes with chicken, rice and broccoli.
4. Running shoes and a watch on a track at dawn, no people.
5. A kitchen scale with a plate, a notebook and a pencil beside it.
6. A shopping basket with greens, legumes, oats and skimmed dairy on a neutral surface.
7. A tablespoon of olive oil beside white fish and steamed vegetables.
8. Eight labelled lunch boxes in a row with rising portions.
9. A single portion of white fish with green vegetables, plain styling.
10. Four bowls of seasonal vegetables in a grid.

## Verification

```powershell
npm run check:copy   # expected 37,791
npm run build        # expected 1,498 pages
npm run check:i18n   # expected 23,312, 1,494 sitemap URLs
```

Parent checks beyond the gates: every internal link resolves, zero em dashes, no BOM, dHash over all
heroes, 140 page/width pairs with no clipped cell.

## Result (2026-11-24)

- 10 bilingual pairs, 20 files, 10 heroes. Library 731 → **741 / 792**. Nutrición **168/191**;
  **Dietas de volumen 13/13 — COMPLETO**; Dietas de definición 9/17.
- Gates: `check:copy` **37,791/37,791**, build **1,497 pages**, `check:i18n` **23,312/23,312**, sitemap
  **1,494 URLs**.
- Structural checks: 128 internal links across the ten pairs, **0 broken**; 0 files with problems in
  the parent verifier; **0 clipped cells over 420 page/width pairs** for the whole 30-pair run.
- **Corrections made:** the bulking page is one day at maintenance + 300 kcal, not a 15-food list with
  the quercetin myth; the three cutting macro rows now reconcile at 2,845/2,045/1,690 and the ephedra
  reference is gone; the 12-week template keeps its arithmetic (2,460 and 1,980) without the TEF myth,
  the "toxic ketones" or the week overlap; fat burning loses the 40-60 minute window, the 60-70 %
  zone, adrenal regeneration and sweat as a method; weight loss is the deficit held into a habit, with
  the camp analogy and the smoking line deleted; DASH carries sodium under 1,500 mg, the potassium
  pattern, 1997, no medication comparison and no CTA; low fat is 20-30 % of calories with grams in
  every menu and no dizziness reassurance; the eight calorie steps are documented, with the 1,434 step
  correctly placed just above the 1,400 floor and the lowest step below it, both labelled contest
  preparation; the maximum-definition day states its 1,900 kcal at 80 kg as aggressive and temporary;
  the seasonal page is three-month blocks without the grapefruit-only rule.
- **Fixed by the parent:** nothing content-side. The writers corrected their own alt text and the step
  floor before close; the parent committed that polish (`c1525d6`) after the gates re-ran green.
- **Writers:** A pages 1-5, B pages 6-10, disjoint files. Writer A flagged that the brief's "15 foods"
  does not survive as a countable claim and titled the page by the 3,100 kcal day instead.
- **Heroes:** ten files, 1280 px wide, 78-233 KB. Minimum distance 10, opened: a pull-up bar photo
  against an endomorph line drawing, no shared subject. Two alt texts were rewritten after opening the
  finals (the DASH basket is tomatoes, onion, garlic, almonds and chickpeas; the meal boxes are red
  rice, corn and lentils).
- Commits: pages `c6740b6`, `57568ae`, `738441d`, `ff89895`, `6d4b346`, `d5a9e73`, `fe7ce8a`,
  `d38bef6`, `a9b4966`, `0691734`; routes `b8e15e5`; polish `c1525d6`.
