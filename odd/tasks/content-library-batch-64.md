# Content library — batch 64

Started: 2026-11-24. Continues the library from 631/792 after batch 63
(`odd/tasks/content-pages.md`).

Objective: `dieta-antiinflamatoria-claves-y-beneficios` to `toque-final-competir`, as ten bilingual
pairs. Library 631 → 641.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Sources: `...\content\nutricion\nutricion-aplicada\`
- Depends on batches 60-63.

## Tasks

- [x] T1 Scope, conflicts and house rules written (this document).
- [x] T2 Writer A: pages 1-5, ES + EN + heroes.
- [x] T3 Writer B: pages 6-10, ES + EN + heroes.
- [x] T4 Routes registered in `astro.config.mjs` and `scripts/check-i18n.mjs`.
- [x] T5 Parent gates, link check, render pass, dHash pass, per-page commits, checklist and handoff.

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `dieta-antiinflamatoria-claves-y-beneficios` | `anti-inflammatory-diet` | `dieta-antiinflamatoria-claves-y-beneficios.md` | 911 | dieta antiinflamatoria | |
| 2 | `proteina-de-clara-de-huevo-aliada-para-mas-fuerza-y-menos-grasa` | `egg-white-protein` | `proteina-de-clara-de-huevo-aliada-para-mas-fuerza-y-menos-grasa.md` | 1,235 | clara de huevo | |
| 3 | `que-comer-para-ganar-masa-muscular` | `what-to-eat-to-build-muscle` | `que-comer-para-ganar-masa-muscular.md` | 1,435 | qué comer para ganar masa muscular | |
| 4 | `agua-hidratacion-deporte` | `hydration-for-training` | `agua-hidratacion-deporte.md` | 2,765 | hidratación en el deporte | |
| 5 | `requieren-los-deportistas-mas-proteinas` | `do-athletes-need-more-protein` | `requieren-los-deportistas-mas-proteinas.md` | 1,093 | proteínas para deportistas | |
| 6 | `calculo-calorico-mantenimiento` | `maintenance-calories` | `calculo-calorico-mantenimiento.md` | 728 | calorías de mantenimiento | |
| 7 | `elaborar-dieta` | `how-to-build-a-diet` | `elaborar-dieta.md` | 1,388 | cómo elaborar una dieta | |
| 8 | `carne-culturismo` | `meat-and-bodybuilding` | `carne-culturismo.md` | 2,379 | carne y culturismo | |
| 9 | `construir-masa-muscular-limpia` | `lean-muscle-gain` | `construir-masa-muscular-limpia.md` | 1,001 | masa muscular limpia | |
| 10 | `toque-final-competir` | `pre-competition-week` | `toque-final-competir.md` | 2,057 | peak week | |

All: `block: "Entrenamiento"` (`Training`), `section: "Nutrición aplicada"` (`Applied nutrition`),
`updated: "2026-11-24"`.

## House rules (binding, YMYL)

1. **No purchase CTAs, affiliate links, shop names, brand names or "best" rankings.**
2. **No medical claims.** Inflammation, diabetes, heart disease, arthritis, cancer, ageing, lactose and
   kidney statements stay inside what trials in healthy adults support, with the qualifier kept.
3. **No invented numbers or units.** Protein 1.6-2.2 g/kg, fat 0.8-1 g/kg, carbohydrate 3-5 g/kg for
   lifters, water 2-3 L baseline plus sweat, deficit 300-500 kcal, surplus 200-300 kcal.
4. **No water/sodium manipulation protocol, no diuretics, no dehydration, no "make weight" tricks.**
   Page 10 is a risk page.
5. **No athlete photos, no before/after imagery, no named bodybuilders as proof.**

## Conflicts the batch settles (binding)

1. **"Anti-inflammatory diet" has no single definition.** The page audits the label: Mediterranean-style
   patterns, fibre, vegetables, fruit, omega-3 and less ultra-processed food show association. Delete
   the diabetes, heart, arthritis, autoimmune, cancer, neurodegenerative, IBS, Crohn, anxiety, depression
   and anti-ageing promises, and the course/shop links. Modest language throughout.
2. **Egg white is cheap complete protein, not a fat burner.** It is ovalbumin-rich, lactose-free and
   fat-free; the raw-avidin/biotin trap is the only real caution. Delete "la albúmina" as the protein
   name, the joint/bone recovery claim, the affiliate link, the "must be heated" blanket (pasteurised
   whites are safe, cooking mainly improves digestibility) and the fat-loss implication.
3. **Variety beats the superfood list.** Convert the nine foods into a per-100 g table with protein,
   calories and a practical portion. Delete vitamin D "grows type II fibres", the +20 % phytoecdysteroid
   claim, zinc as a testosterone lever and the "soy equals casein" absolutism; qualify CoQ10 and CLA.
4. **Hydration is thirst, urine colour and body-weight change.** 2-3 L of fluid a day as a baseline plus
   sweat losses; a sports drink matters past 60-90 minutes; more than 5-6 L is a risk, not a target.
   Delete the water-cures-overweight block, "coffee dehydrates" as a blanket, "milk burns fat", the
   every-15-minutes schedule, the brand names and the "tremors" level.
5. **Protein needs are 1.6-2.2 g/kg for lifters and 1.2-1.6 for endurance.** 25-40 g per feeding, 3-5
   feedings. Delete "irreversible destruction" (it is oxidation), the 1.8 g/kg "new mass" claim and the
   old 1.6-1.7 ceiling; keep the nitrogen-balance explanation.
6. **Maintenance calories are an estimate calibrated on the scale.** Mifflin-St Jeor, activity factors,
   a two-week weight trend. The archive says "Harris-Benedict" and prints "1,78 cm": fix the formula
   name and the unit. No calculator link (the article-only link check).
7. **Build a diet from floors, not percentages.** Protein and fat floors in g/kg, carbohydrate fills the
   calorie target; percentages are a check. Delete the 2.5 g/kg universal protein, the 21-day rule, the
   fixed triads (40/50/10 at 3,600 kcal gives 450 g of protein) and fix the malformed tables.
8. **Meat is a convenient protein, iron and B12 package.** Delete the meat-testosterone-muscle chain,
   fibre binding steroids, sterols blocking the receptor, pesticide oestrogens, "vegetarians look less
   muscular", the 400-500 g/day protein figure and the Nutripoints diet. Compare per 100 g and keep the
   processed-meat limit.
9. **A clean bulk is a rate, not food purity.** 0.25-0.5 % of body weight per week, surplus 200-300 kcal,
   protein 1.6-2.2 g/kg. Delete "foods that never become fat", MCT oil, fascial stretching and the
   supplement powder line; fix the protein units.
10. **Peak week is risk, not a trick.** Page 10 must explain what competitors do, why water and sodium
    manipulation carries cardiovascular and renal risk with weak evidence, the 4-7 % body-fat health
    floor, and when to stop. No litres, no distilled water, no sodium cut, no carb percentages as
    instructions, no diuretics. If a reader could copy a protocol, the page is wrong.

## Global rules

1. Neutral Spanish with `tú`; zero vosotros, voseo or `usted`. Never the word `gym` in Spanish.
2. No first person, no newsletter or comment CTAs, no supplement promotions, no athlete photos, no
   medical or rehab claims, no "Conclusión" section, no marketing headings.
3. Zero external links, `.md` links, `#` anchors, inline images, `▷`/`✔`, escaped asterisks, emoji
   artifacts, empty headings, manual TOCs, embedded videos, duplicate images, headings with no body.
4. Links only to pages that exist (ES slugs): the ten batch pages, the batch 60-63 pages, the 18
   published supplement pages, `ganar-masa-muscular`, `como-ganar-peso`, `menos-grasa-mas-musculo`,
   `definicion-muscular-seis-dias`, `rutinas-de-definicion`, `rutinas-de-volumen`,
   `entrenamiento-perder-grasa`, `rutina-quema-grasa-sin-hacer-aerobicos`,
   `como-orientar-tu-rutina-de-pesas-para-perder-grasa`,
   `perder-grasa-abdominal-con-abdominales`, `cardio-ayunas`,
   `tablas-de-entrenamiento-de-volumen-masa-muscular`, `volumen-muscular-estancamiento`,
   `motivos-por-los-que-tus-musculos-no-crecen`,
   `como-ser-constante-en-el-entrenamiento`, `elegir-gimnasio`,
   `tu-primer-dia-en-el-gimnasio-como-superarlo-y-querer-volver`, `guia-musculacion-principiantes`,
   `cuanto-dormir-para-progresar-en-el-gimnasio`, `agujetas-causas-y-como-hacer-que-desaparezcan`,
   `regeneracion-muscular`, `sobreentrenamiento`, `recuperacion-activa-entrenamiento`,
   `pros-y-contras-de-las-proteinas`, `proteinas-de-liberacion-sostenida-mezclas-proteicas`,
   `proteina-de-suero-elaboracion`, `mejor-proteina-nocturna`,
   `proteina-de-soja-contra-proteina-de-leche`, `suplementos-de-proteina-vegana`,
   `creatina-la-verdad`, `pesas-salud-cardiovascular`, `calcular-calorias`.
5. Zero em dashes. Titles 45-60, descriptions 150-160, reciprocal `alternate`.
6. Tables: comparison and decision tables as `<table class="text-table">` with three columns. The
   per-100 g food table, the hydration guide and the maintenance ranges are text tables.
7. Heroes: one unique per page, free licence only (Wikimedia Commons first, Pexels second), 1280 px,
   >=1200 on disk, <250 KB, credit plus honest alt, dHash on the final crop. Distance 0 is a duplicate,
   crops have measured up to 14, and white line art hashes 2-9 against other line art: open the closest
   hero and compare by subject. Prefer product-free, person-free images.
8. Body 600-900 words per locale, table-inclusive under 1,150. Page 10 may reach 1,000.
9. Mandatory intra-batch links: 1 -> 3, 4, 8; 2 -> 3, 5, 9; 3 -> 2, 5, 7; 4 -> 1, 7, 10;
   5 -> 2, 3, 7; 6 -> 7, 9, 3; 7 -> 5, 6, 9; 8 -> 1, 3, 9; 9 -> 3, 7, 8; 10 -> 4, 7, 9. All ten link
   `errores-al-tomar-suplementos`.

## Per page

### 1. Anti-inflammatory diet

- Audit the label: what the pattern includes, which associations are real (Mediterranean-style, fibre,
  vegetables, fruit, omega-3, less ultra-processed food) and what is marketing. No cure list.
- Delete the disease promises, the IBS/Crohn, anxiety/depression and anti-ageing lines, and the course
  and shop links. 700-900 words, modest tone.
- Link `que-comer-para-ganar-masa-muscular` (page 3), `agua-hidratacion-deporte` (page 4),
  `carne-culturismo` (page 8), `sistema-inmune-con-vitaminas`, `cenar-verdura`,
  `errores-al-tomar-suplementos`.

### 2. Egg white protein

- Cheap complete protein, ovalbumin-rich, lactose-free and fat-free. 4-6 whites = 120-180 ml = 25-30 g
  of powder. Raw avidin binds biotin: cook the whites. Pasteurised whites are safe; cooking mainly
  improves digestibility.
- Delete the "albúmina" naming, the joint/bone recovery claim, the affiliate link and the fat-loss
  implication.
- Link `que-comer-para-ganar-masa-muscular` (page 3), `requieren-los-deportistas-mas-proteinas`
  (page 5), `construir-masa-muscular-limpia` (page 9), `pros-y-contras-de-las-proteinas`,
  `suplementos-proteina`, `errores-al-tomar-suplementos`.

### 3. What to eat to build muscle

- Per-100 g table with protein, calories and a practical portion; variety beats the superfood. Daily
  protein 1.6-2.2 g/kg and 25-40 g per meal.
- Delete vitamin D "grows type II fibres", the +20 % phytoecdysteroids, zinc as a testosterone lever and
  the soy-equals-casein absolutism; qualify CoQ10 and CLA.
- Link `proteina-de-clara-de-huevo-aliada-para-mas-fuerza-y-menos-grasa` (page 2),
  `requieren-los-deportistas-mas-proteinas` (page 5), `elaborar-dieta` (page 7),
  `ganar-masa-muscular`, `carbohidratos`, `errores-al-tomar-suplementos`.

### 4. Hydration for training

- Thirst, urine colour and pre/post body weight; 2-3 L baseline plus sweat; a sports drink past 60-90
  minutes; more than 5-6 L is a risk. Practical guide by session length and heat.
- Delete the water-cures-overweight block, the blanket "coffee dehydrates", "milk burns fat", the
  every-15-minutes schedule, the brand names and the "tremors" level.
- Link `dieta-antiinflamatoria-claves-y-beneficios` (page 1), `elaborar-dieta` (page 7),
  `toque-final-competir` (page 10), `creatina-calambres-musculares`,
  `como-entrenar-con-altas-temperaturas`, `errores-al-tomar-suplementos`.

### 5. Do athletes need more protein

- Yes: 1.6-2.2 g/kg for lifters, 1.2-1.6 for endurance, 25-40 g per feeding, 3-5 feedings. Explain
  nitrogen balance and oxidation without the "destruction" alarm.
- Delete "irreversible destruction", the 1.8 g/kg "new mass" claim, the old 1.6-1.7 ceiling, the guru
  ad hominem and the internal promo.
- Link `proteina-de-clara-de-huevo-aliada-para-mas-fuerza-y-menos-grasa` (page 2),
  `que-comer-para-ganar-masa-muscular` (page 3), `elaborar-dieta` (page 7),
  `pros-y-contras-de-las-proteinas`, `aminoacidos-bcaas`, `errores-al-tomar-suplementos`.

### 6. Maintenance calories

- Mifflin-St Jeor, activity factors, the two-week weight trend. Worked example with correct units.
- Delete "Harris-Benedict" as the formula and fix "1,78 cm". No calculator link.
- Link `elaborar-dieta` (page 7), `construir-masa-muscular-limpia` (page 9),
  `que-comer-para-ganar-masa-muscular` (page 3), `quieres-perder-grasa-no-solo-perder-peso`,
  `menos-grasa-mas-musculo`, `errores-al-tomar-suplementos`.

### 7. How to build a diet

- Step by step: calories, protein floor, fat floor, carbohydrate fills the rest, fibre 25-35 g, meal
  structure, weekly check. Percentages as a check, not a plan. Fix the malformed tables.
- Delete the 2.5 g/kg universal protein, the 21-day rule and the fixed triads (40/50/10 at 3,600 kcal is
  450 g of protein).
- Link `requieren-los-deportistas-mas-proteinas` (page 5), `calculo-calorico-mantenimiento` (page 6),
  `construir-masa-muscular-limpia` (page 9), `carbohidratos`,
  `combinar-proteinas-carbohidratos`, `errores-al-tomar-suplementos`.

### 8. Meat and bodybuilding

- Meat as a convenient protein, iron and B12 package. Per-100 g comparison, saturated fat, cooking
  methods and the processed-meat limit. No hormonal chain.
- Delete meat-testosterone-muscle, fibre binding steroids, sterols blocking the receptor, pesticide
  oestrogens, "vegetarians look less muscular", the 400-500 g/day figure and Nutripoints.
- Link `dieta-antiinflamatoria-claves-y-beneficios` (page 1),
  `que-comer-para-ganar-masa-muscular` (page 3), `construir-masa-muscular-limpia` (page 9),
  `proteina-de-soja-contra-proteina-de-leche`, `pesas-salud-cardiovascular`,
  `errores-al-tomar-suplementos`.

### 9. Lean muscle gain

- Rate 0.25-0.5 % of body weight per week, surplus 200-300 kcal, protein 1.6-2.2 g/kg. Two bowls
  compared on a scale; weekly trend. Fix the protein units.
- Delete "foods that never become fat", MCT oil, fascial stretching, the supplement powder line and
  "define in a week".
- Link `que-comer-para-ganar-masa-muscular` (page 3), `elaborar-dieta` (page 7),
  `carne-culturismo` (page 8), `ganar-masa-muscular`,
  `tablas-de-entrenamiento-de-volumen-masa-muscular`, `errores-al-tomar-suplementos`.

### 10. Pre-competition week

- Risk page: what competitors attempt, why water and sodium manipulation carries cardiovascular and
  renal risk with weak evidence, the 4-7 % body-fat floor, the signs to stop, and medical supervision.
  No protocol. If a reader could copy it, rewrite it.
- Delete every litre, distilled water, sodium cut, carb percentage, no-legs rule and diuretic reference.
- Link `agua-hidratacion-deporte` (page 4), `elaborar-dieta` (page 7),
  `construir-masa-muscular-limpia` (page 9), `definicion-muscular-seis-dias`,
  `menos-grasa-mas-musculo`, `pesas-salud-cardiovascular`, `errores-al-tomar-suplementos`.

## Writer split

- **Writer A:** pages 1-5: `dieta-antiinflamatoria-claves-y-beneficios`,
  `proteina-de-clara-de-huevo-aliada-para-mas-fuerza-y-menos-grasa`,
  `que-comer-para-ganar-masa-muscular`, `agua-hidratacion-deporte`,
  `requieren-los-deportistas-mas-proteinas`, plus five heroes.
- **Writer B:** pages 6-10: `calculo-calorico-mantenimiento`, `elaborar-dieta`,
  `carne-culturismo`, `construir-masa-muscular-limpia`, `toque-final-competir`, plus five heroes.
- Neither writer touches `astro.config.mjs`, `scripts/check-i18n.mjs`, `guides-nav.ts`,
  `content-pages.md` or this document.

## Hero shortlist

1. Sardines, walnuts, blueberries and olive oil on slate, or turmeric and ginger.
2. Egg whites in a bowl with a whisk and shells.
3. A flat lay of oats, lentils, sardines and spinach, or Greek yogurt with oats.
4. A glass of water with condensation, or a bottle and towel on a bench.
5. Three plates with different portions on a scale.
6. A kitchen scale and a notebook with columns.
7. Four bowls: rice, meat, oil and fruit.
8. A raw steak beside lentils, or a butcher's cut on paper.
9. Two bowls on a scale, rice and chicken versus oats and a shake.
10. An empty lit stage, or a calendar with the last ten days marked.

## Verification

```powershell
npm run check:copy   # expected 32,691
npm run build        # expected 1,298 pages
npm run check:i18n   # expected 20,212, 1,294 sitemap URLs
```

Parent checks beyond the gates: every internal link resolves, zero em dashes, no BOM, dHash over all
heroes, 140 page/width pairs with no clipped cell.

## Result (2026-11-24)

- 10 bilingual pairs, 20 files, 10 heroes. Library 631 → **641 / 792**. Nutrición **68/191**.
- Gates: `check:copy` **32,691/32,691**, build **1,298 pages**, `check:i18n` **20,212/20,212**, sitemap
  **1,294 URLs** with 3,882 alternates.
- Structural checks: 124 internal links, **0 broken**; zero em dashes; no BOM; 140 page/width pairs with
  **0 clipped cells**.
- **Corrections made:** the anti-inflammatory label is audited instead of promising cures; egg white is
  cheap complete protein with the avidin caution; the food list becomes a per-100 g table; hydration is
  thirst, urine colour and body-weight change; protein needs are 1.6-2.2 g/kg; maintenance names
  Mifflin-St Jeor and fixes the unit error; the diet is built from protein and fat floors; meat is a
  protein, iron and B12 package; a clean bulk is a rate; peak week is published as risk, not protocol.
- **Fixed by the parent:** nothing content-side. Writer B corrected the `lean-muscle-gain` description
  from 147 to the 150-160 range before the batch closed.
- **Writers:** A pages 1-5, B pages 6-10, disjoint files.
- **Heroes:** ten Wikimedia files, all 1280x720. The minimum distance is 14 on a period stage drawing
  against a gym rack; every nearest neighbour was opened and none is a crop.
- Commits: pages `7e9e81a`, `0b0855b`, `9a5ad8b`, `b7305df`, `e981c93`, `8f4a1e1`, `ff103dd`, `cfa5584`,
  `55a3c39`, `3587a17`.
