# Content library — batch 66

Started: 2026-11-24. Continues the library from 651/792 (`odd/tasks/content-pages.md`).

Objective: `verdura-masa-muscular` to `prepara-tu-cocina-para-una-dieta-anabolica`, as ten bilingual
pairs. Library 651 → 661.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Sources: `...\content\nutricion\nutricion-aplicada\`
- Depends on batches 60-65.

## Tasks

- [x] T1 Scope, conflicts and house rules written (this document).
- [x] T2 Writer A: pages 1-5, ES + EN + heroes.
- [x] T3 Writer B: pages 6-10, ES + EN + heroes.
- [x] T4 Routes registered in `astro.config.mjs` and `scripts/check-i18n.mjs`.
- [x] T5 Parent gates, link check, render pass, dHash pass, per-page commits, checklist and handoff.

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `verdura-masa-muscular` | `vegetables-for-muscle` | `verdura-masa-muscular.md` | 1,163 | verdura para masa muscular | |
| 2 | `errores-a-evitar-en-la-dieta` | `diet-mistakes-to-avoid` | `errores-a-evitar-en-la-dieta.md` | 1,624 | errores en la dieta | |
| 3 | `dieta-culturista-ocho-semanas` | `eight-week-bodybuilding-diet` | `dieta-culturista-ocho-semanas.md` | 2,095 | dieta culturista | |
| 4 | `vitaminas-minerales-para-el-gimnasio` | `vitamins-and-minerals-for-the-gym` | `vitaminas-minerales-para-el-gimnasio.md` | 2,918 | vitaminas y minerales | |
| 5 | `como-limitar-el-sodio` | `how-to-limit-sodium` | `como-limitar-el-sodio.md` | 1,375 | limitar el sodio | |
| 6 | `bebida-isotonica-casera` | `homemade-sports-drink` | `bebida-isotonica-casera.md` | 473 | bebida isotónica casera | |
| 7 | `batidos-para-volumen-muscular` | `muscle-gain-shakes` | `batidos-para-volumen-muscular.md` | 341 | batidos para volumen | |
| 8 | `comidas-perfectas-culturistas` | `bodybuilding-meals` | `comidas-perfectas-culturistas.md` | 875 | comidas para culturistas | |
| 9 | `nutricion-para-estar-en-forma` | `nutrition-to-get-in-shape` | `nutricion-para-estar-en-forma.md` | 720 | nutrición para estar en forma | |
| 10 | `prepara-tu-cocina-para-una-dieta-anabolica` | `anabolic-diet-kitchen` | `prepara-tu-cocina-para-una-dieta-anabolica.md` | 786 | preparar la cocina | |

All: `block: "Entrenamiento"` (`Training`), `section: "Nutrición aplicada"` (`Applied nutrition`),
`updated: "2026-11-24"`.

## House rules (binding, YMYL)

1. **No purchase CTAs, affiliate links, shop names, brand names or "best" rankings.**
2. **No medical claims.** Vitamins, sodium, hormones, kidneys, skin and ageing statements stay inside
   what trials in healthy adults support, with the qualifier kept.
3. **No invented numbers.** Protein 1.6-2.2 g/kg and 25-40 g per meal, fibre 25-35 g/day, vegetables
   300-400 g/day, sodium under 2 g/day for adults (5 g of salt), 300-600 mg of sodium per hour in long
   hot sessions, carbohydrate 30-60 g/h past 75 minutes, surplus 200-300 kcal. Anything else is
   described as unstudied.
4. **No water or sodium manipulation, no distilled water, no sauna cut, no diuretics.** Page 5 is a
   food page, not a peak-week protocol.
5. **No megadoses.** Vitamins and minerals cover the reference intake; supplement only a documented
   deficiency.
6. **No athlete photos, no before/after imagery.**

## Conflicts the batch settles (binding)

1. **Vegetables are a satiety tool, not a hormone lever.** 300-400 g a day plus fruit, fibre 25-35 g.
   Delete the oestrogen/testosterone claim, "your muscles may refuse to grow" and the 750 g rule as a
   prescription; the deficit portion is an example.
2. **Ten habits, not ten rules.** Noise: "Atkins only dehydrates", "dietary fat becomes body fat", the
   multivitamin as obligatory and "BIA scales are useless". Keep: adherence beats optimisation, the
   3-hour rule is optional, dextrose after training is fine, the scale is one signal.
3. **Eight weeks of habits.** Calories and protein are the only levers; 1.6-2.2 g/kg, a 300-500 kcal
   deficit, 0.5-1 % of body weight per week, real tables. Delete "the best diet of 2026", the 5-7 hour
   spacing claim and the Doritos brand.
4. **Micronutrients: food first, supplement the gap.** Reference intakes, vitamin D in winter, iron only
   with a measured deficiency. Delete 500 mg of vitamin C a day, 135 mg of zinc, ZMA for testosterone,
   the chromosome/radiation claim and the 25 % cancer figure. Keep the beta-carotene caution in smokers.
5. **Sodium is not the enemy; processed food is the lever.** Under 2 g of sodium a day for adults,
   more in long hot sessions, and the potassium substitute is potassium chloride, not "clorato". Delete
   the 5-10 L distilled-water protocol, the sauna cut, the "improve your physique in 24 hours" line and
   the external link. Hyponatremia stays as a caution.
6. **A homemade isotonic is water, a little sugar and a pinch of salt.** Under 60-90 minutes water is
   enough; past that, 30-60 g of carbohydrate and 300-600 mg of sodium per hour. Recipe: 1 L of water,
   20-30 g of sugar, a quarter teaspoon of salt, lemon. Delete the tablespoon-of-salt recipe (about 7 g
   of sodium), the guarana and the every-15-minutes rule.
7. **A muscle-gain shake is liquid food, not a stack.** 300-600 kcal with 30-40 g of protein, oats, milk
   and a banana; the surplus is 200-300 kcal. Delete "2 kg of muscle a month", 30 g of BCAAs, 5 g of
   glutamine, 75-100 g of post-workout carbohydrate and the McDonald's line.
8. **Six plates with numbers, not "perfect meals".** Macros per plate and portions that scale with the
   goal. Delete "fatty meat spares glycogen and protein", insulin as an "ideal hormonal environment",
   the one-hour cottage-cheese claim and the self-promotion.
9. **Getting in shape is balance first.** Five rules: calories, protein, fibre, adherence, sleep. Delete
   saturated fat as "disease and ageing", skipping meals as "nonsense" and the replacement-sachet promo.
10. **The kitchen is the default plate.** Protein, vegetables and a starch within reach; about 24 items,
    no gadgets. Delete "8 g of omega-3 in 100 g of nuts" (false), allicin against cancer, oats
    "speeding up metabolism", the "23 elements" clickbait and "the fryer makes healthy food".

## Global rules

1. Neutral Spanish with `tú`; zero vosotros, voseo or `usted`. Never the word `gym` in Spanish.
2. No first person, no newsletter CTAs, no supplement promotions, no athlete photos, no medical or rehab
   claims, no "Conclusión" section, no marketing headings.
3. Zero external links, `.md` links, `#` anchors, inline images, `▷`/`✔`, escaped asterisks, emoji
   artifacts, empty headings, manual TOCs, embedded videos, duplicate images, headings with no body.
4. Links only to existing pages: the ten batch pages, batches 60-65, the 18 supplement pages,
   `ganar-masa-muscular`, `como-ganar-peso`, `menos-grasa-mas-musculo`,
   `definicion-muscular-seis-dias`, `toque-final-competir`, `agua-hidratacion-deporte`,
   `como-entrenar-con-altas-temperaturas`, `carbohidratos`, `cenar-verdura`,
   `legumbres-beneficiosas-dieta`, `lenteja-dieta` (still unpublished, do not link),
   `elaborar-dieta`, `calculo-calorias-masa-muscular`, `calculo-calorico-mantenimiento`,
   `deficit-calorico-clave-para-perder-peso`, `nutricion-culturista-reglas-basicas`,
   `guia-basica-de-nutricion-culturista`, `comida-pre-entrenamiento`, `comida-post-entrenamiento`,
   `comida-segun-hora-entrenar`, `comida-trampa`, `reemplazo-comidas`,
   `como-mejorar-tus-fisico-con-estos-batidos`, `ganadores-de-peso-mass-gainers`,
   `cocinar-pollo-jugoso`, `almuerzos-saludables-altos-en-proteinas`,
   `combinar-proteinas-carbohidratos`, `suplementos-dieteticos`,
   `suplementacion-deportiva-alcanzar-objetivos`, `errores-al-tomar-suplementos`,
   `sistema-inmune-con-vitaminas`, `vitargo`, `cafeina-suplemento`, `creatina-la-verdad`,
   `mentiras-del-culturismo-que-os-impediran-progresar`, `errores-entrenamiento`,
   `lo-que-no-hay-que-hacer-para-ganar-musculo`, `como-ser-disciplinado-dieta`,
   `como-llevar-un-estilo-de-vida-fitness`, `construir-masa-muscular-limpia`,
   `que-comer-para-ganar-masa-muscular`, `comidas-perfectas-culturistas` (batch page 8).
5. Zero em dashes. Titles 45-60, descriptions 150-160, reciprocal `alternate`.
6. Tables: comparison and decision tables as `<table class="text-table">` with three columns. The
   vegetable floor, the micronutrient reference, the sodium guide and the shake recipes are text tables.
7. Heroes: one unique per page, free licence only, 1280 px, >=1200 on disk, <250 KB, credit plus honest
   alt, dHash on the final crop. Open the closest hero; distance 0 is a duplicate and crops measure up
   to 14. Prefer product-free, person-free images.
8. Body 600-900 words per locale, table-inclusive under 1,150. Pages 6 (473), 7 (341) and 9 (720) need
   rebuilding; page 4 may reach 1,000.
9. Mandatory intra-batch links: 1 -> 2, 8, 10; 2 -> 3, 9; 3 -> 4, 5; 4 -> 6; 5 -> 6; 6 -> 5;
   7 -> 8, 9; 8 -> 10; 9 -> 2, 3; 10 -> 1, 8. All ten link `errores-al-tomar-suplementos`.

## Per page

### 1. Vegetables for muscle

- 300-400 g of vegetables a day plus fruit, fibre 25-35 g; satiety at fixed calories, micronutrients and
  volume. No hormonal claim.
- Delete the oestrogen/testosterone line, "your muscles may refuse to grow" and the 750 g rule as a law.
- Link `errores-a-evitar-en-la-dieta` (page 2), `comidas-perfectas-culturistas` (page 8),
  `prepara-tu-cocina-para-una-dieta-anabolica` (page 10), `cenar-verdura`,
  `legumbres-beneficiosas-dieta`, `errores-al-tomar-suplementos`.

### 2. Diet mistakes

- Ten habits: adherence, protein, fibre, ultra-processed calories, the scale as one signal, optional
  meal frequency. Keep the dextrose post-workout note.
- Delete "Atkins only dehydrates", "dietary fat becomes body fat", the obligatory multivitamin and "BIA
  scales are useless".
- Link `dieta-culturista-ocho-semanas` (page 3), `nutricion-para-estar-en-forma` (page 9),
  `como-ser-disciplinado-dieta`, `mentiras-del-culturismo-que-os-impediran-progresar`,
  `errores-al-tomar-suplementos`.

### 3. Eight-week bodybuilding diet

- Eight weeks of habits: 1.6-2.2 g/kg, 300-500 kcal deficit, 0.5-1 % per week, real tables and a weekly
  check. Delete "the best diet of 2026", the 5-7 hour spacing claim and the Doritos brand.
- Link `vitaminas-minerales-para-el-gimnasio` (page 4), `como-limitar-el-sodio` (page 5),
  `elaborar-dieta`, `calculo-calorico-mantenimiento`, `deficit-calorico-clave-para-perder-peso`,
  `errores-al-tomar-suplementos`.

### 4. Vitamins and minerals for the gym

- Reference intakes, food first, vitamin D in winter, iron only with a measured deficiency. A table with
  the common gaps and the food source.
- Delete 500 mg of vitamin C, 135 mg of zinc, ZMA for testosterone, the chromosome/radiation claim and
  the 25 % cancer figure. Keep the beta-carotene caution in smokers.
- Link `bebida-isotonica-casera` (page 6), `sistema-inmune-con-vitaminas`,
  `suplementacion-deportiva-alcanzar-objetivos`, `suplementos-dieteticos`,
  `errores-al-tomar-suplementos`.

### 5. How to limit sodium

- Under 2 g of sodium a day for adults; the lever is processed food, not a water cut. More sodium in
  long hot sessions. The substitute is potassium chloride. Hyponatremia caution.
- Delete the 5-10 L distilled-water protocol, the sauna cut, "improve your physique in 24 hours", the
  "clorato" error and the external link.
- Link `bebida-isotonica-casera` (page 6), `agua-hidratacion-deporte`,
  `como-entrenar-con-altas-temperaturas`, `toque-final-competir`, `errores-al-tomar-suplementos`.

### 6. Homemade sports drink

- Water under 60-90 minutes. Past that: 30-60 g of carbohydrate and 300-600 mg of sodium per hour.
  Recipe with 1 L of water, 20-30 g of sugar, a quarter teaspoon of salt and lemon.
- Delete the tablespoon-of-salt recipe, the guarana and the every-15-minutes rule.
- Link `como-limitar-el-sodio` (page 5), `agua-hidratacion-deporte`, `vitargo`,
  `como-entrenar-con-altas-temperaturas`, `errores-al-tomar-suplementos`.

### 7. Muscle-gain shakes

- Liquid food: 300-600 kcal, 30-40 g of protein, oats, milk and a banana; the surplus is 200-300 kcal.
  Delete "2 kg of muscle a month", 30 g of BCAAs, 5 g of glutamine, 75-100 g of post-workout carbs and
  the McDonald's line.
- Link `comidas-perfectas-culturistas` (page 8), `nutricion-para-estar-en-forma` (page 9),
  `como-mejorar-tus-fisico-con-estos-batidos`, `ganadores-de-peso-mass-gainers`,
  `construir-masa-muscular-limpia`, `errores-al-tomar-suplementos`.

### 8. Bodybuilding meals

- Six plates with macros and portions that scale with the goal. Delete "fatty meat spares glycogen and
  protein", the insulin "ideal hormonal environment", the one-hour cottage-cheese claim and the
  self-promotion.
- Link `prepara-tu-cocina-para-una-dieta-anabolica` (page 10),
  `que-comer-para-ganar-masa-muscular`, `comida-pre-entrenamiento`, `comida-post-entrenamiento`,
  `cocinar-pollo-jugoso`, `errores-al-tomar-suplementos`.

### 9. Nutrition to get in shape

- Balance first: calories, protein 1.6-2.2 g/kg, fibre, adherence, sleep. Five rules, not a new diet.
- Delete saturated fat as "disease and ageing", skipping meals as "nonsense" and the replacement-sachet
  promo.
- Link `errores-a-evitar-en-la-dieta` (page 2), `dieta-culturista-ocho-semanas` (page 3),
  `como-llevar-un-estilo-de-vida-fitness`, `nutricion-culturista-reglas-basicas`,
  `errores-al-tomar-suplementos`.

### 10. Anabolic diet kitchen

- The default plate: protein, vegetables and a starch within reach; about 24 items and no gadgets. A
  shopping list and a fridge map.
- Delete "8 g of omega-3 in 100 g of nuts", allicin against cancer, oats "speeding up metabolism", the
  "23 elements" clickbait and "the fryer makes healthy food".
- Link `verdura-masa-muscular` (page 1), `comidas-perfectas-culturistas` (page 8),
  `elaborar-dieta`, `cocinar-pollo-jugoso`, `almuerzos-saludables-altos-en-proteinas`,
  `errores-al-tomar-suplementos`.

## Writer split

- **Writer A:** pages 1-5: `verdura-masa-muscular`, `errores-a-evitar-en-la-dieta`,
  `dieta-culturista-ocho-semanas`, `vitaminas-minerales-para-el-gimnasio`, `como-limitar-el-sodio`,
  plus five heroes.
- **Writer B:** pages 6-10: `bebida-isotonica-casera`, `batidos-para-volumen-muscular`,
  `comidas-perfectas-culturistas`, `nutricion-para-estar-en-forma`,
  `prepara-tu-cocina-para-una-dieta-anabolica`, plus five heroes.

## Hero shortlist

1. Chopped vegetables on a board or a market stall.
2. A messy table against a simple plate, or meal-prep containers.
3. A weekly planner or a palm-sized portion.
4. A spread of fruit and vegetables, or supplement jars (unbranded).
5. A salt shaker or processed versus fresh food.
6. A bottle with lemon and a pinch of salt.
7. A shaker with milk and oats, or a blender from above.
8. Chicken with sweet potato, or eggs with oats.
9. A kitchen scale or a mixed plate.
10. A stocked fridge or pantry jars.

## Verification

```powershell
npm run check:copy   # expected 33,711
npm run build        # expected 1,338 pages
npm run check:i18n   # expected 20,832, 1,334 sitemap URLs
```

Parent checks beyond the gates: every internal link resolves, zero em dashes, no BOM, dHash over all
heroes, 140 page/width pairs with no clipped cell.

## Result (2026-11-24)

- 10 bilingual pairs, 20 files, 10 heroes. Library 651 → **661 / 792**. Nutrición **88/191**.
- Gates: `check:copy` **33,711/33,711**, build **1,338 pages**, `check:i18n` **20,832/20,832**, sitemap
  **1,334 URLs** with 4,002 alternates.
- Structural checks: 120 internal links, **0 broken**; zero em dashes; no BOM; 140 page/width pairs with
  **0 clipped cells**.
- **Corrections made:** vegetables are a satiety tool; ten diet habits; eight weeks of calories and
  protein; micronutrients food-first with documented gaps; sodium as a processed-food lever, not a water
  cut; the homemade isotonic is water, sugar and a pinch of salt; the shake is liquid food; six plates
  with macros; balance first; the kitchen as the default plate.
- **Fixed by the parent:** nothing content-side; the writers fixed their own descriptions before close.
- **Writers:** A pages 1-5, B pages 6-10, disjoint files.
- **Heroes:** ten files, all 1280x720. The minimum distance is 11 on a chicken-and-rice plate against a
  portrait; every nearest neighbour was opened and none is a crop.
- Commits: pages `eadf01b`, `64fdfdb`, `d4779ce`, `27cf3e5`, `fb3ebd5`, `e227cb8`, `9db07b6`, `3b44ebf`,
  `959e387`, `af53bfc`.
