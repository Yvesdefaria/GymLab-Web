# Content library — batch 69

Started: 2026-11-24. Continues the library from 681/792 (`odd/tasks/content-pages.md`).

Objective: `mejores-diureticos-naturales` to `evita-los-agentes-cancerigenos-de-la-carne`, as ten
bilingual pairs. Library 681 → 691.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Sources: `...\content\nutricion\nutricion-aplicada\`
- Depends on batches 60-68.

## Tasks

- [x] T1 Scope, conflicts and house rules written (this document).
- [x] T2 Writer A: pages 1-5, ES + EN + heroes.
- [x] T3 Writer B: pages 6-10, ES + EN + heroes.
- [x] T4 Routes registered in `astro.config.mjs` and `scripts/check-i18n.mjs`.
- [x] T5 Parent gates, link check, render pass, dHash pass, per-page commits, checklist and handoff.

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `mejores-diureticos-naturales` | `natural-diuretics` | `mejores-diureticos-naturales.md` | 1,056 | diuréticos naturales | |
| 2 | `protegete-con-el-acido-fitico` | `phytic-acid` | `protegete-con-el-acido-fitico.md` | 537 | ácido fítico | |
| 3 | `menu-saludable-con-carbohidratos-y-proteinas` | `healthy-menu-carbs-protein` | `menu-saludable-con-carbohidratos-y-proteinas.md` | 840 | menú saludable | |
| 4 | `dieta-vegetariana-para-adelgazar-sin-pasar-hambre` | `vegetarian-diet-for-weight-loss` | `dieta-vegetariana-para-adelgazar-sin-pasar-hambre.md` | 1,290 | dieta vegetariana para adelgazar | |
| 5 | `comer-limpio` | `clean-eating` | `comer-limpio.md` | 1,014 | comer limpio | |
| 6 | `diferencias-entre-verduras-y-hortalizas` | `vegetables-vs-greens` | `diferencias-entre-verduras-y-hortalizas.md` | 1,104 | verduras y hortalizas | |
| 7 | `deporte-cafe-de-especialidad` | `specialty-coffee-and-exercise` | `deporte-cafe-de-especialidad.md` | 503 | café y deporte | |
| 8 | `la-mejor-forma-de-controlar-lo-que-comes` | `how-to-track-what-you-eat` | `la-mejor-forma-de-controlar-lo-que-comes.md` | 1,046 | controlar lo que comes | |
| 9 | `radicales-libres` | `free-radicals` | `radicales-libres.md` | 1,781 | radicales libres | |
| 10 | `evita-los-agentes-cancerigenos-de-la-carne` | `meat-carcinogens` | `evita-los-agentes-cancerigenos-de-la-carne.md` | 1,143 | carcinógenos en la carne | |

All: `block: "Entrenamiento"` (`Training`), `section: "Nutrición aplicada"` (`Applied nutrition`),
`updated: "2026-11-24"`.

## House rules (binding, YMYL)

1. **No purchase CTAs, affiliate links, shop names, brand names or "best" rankings.**
2. **No medical claims.** Kidney, liver, cancer, blood pressure and hydration statements stay inside
   what trials in healthy adults support, with the qualifier kept.
3. **No diuretic or water-cut protocol.** Page 1 explains water-weight shifts, it does not sell a cut.
4. **No megadoses.** Antioxidant and vitamin supplements are not a protocol; high doses can blunt
   training adaptations.
5. **No "cancer-proof" food.** Risk is a cooking-method and processed-meat question, not an amulet.
6. **No "clean eating" moralizing.** Food is not clean or dirty; adherence is the skill.

## Conflicts the batch settles (binding)

1. **The honest "natural diuretic" page is about water weight.** Glycogen, sodium and the menstrual
   cycle move 1-2 kg overnight; no food drains fat. Delete kidney stimulation, "no side effects",
   detox, the kidney-stone advice, the cranberry cure (qualify to recurrence) and the caffeine
   diuretic claim (qualify with tolerance).
2. **Phytic acid is an antinutrient and a substrate.** It binds minerals and feeds colonic bacteria;
   soaking, sprouting and fermentation are the levers. Delete the invented body reserve, the cancer,
   heart and diabetes prevention claims and "heat destroys almost all".
3. **The three-course menu is rebuilt with weighed oil and real macros.** The archive's calories omit
   4 tablespoons of oil (360-480 kcal). Delete "sugar is good for the brain", the brand ham, the
   tetra-brik and every vosotros form.
4. **Vegetarian fat loss is a protein and B12 problem.** Protein 1.6-2.2 g/kg, B12, iron, omega-3 and
   vitamin D; fix the energy-density inversion (vegetables are less dense, not more); delete the
   5-meals-metabolism line and the affiliate links.
5. **"Clean eating" is a discipline story in a nutrition costume.** Keep what it gets right: cooking,
   protein, fibre, a stocked kitchen. Delete "the only way", meals burning fat, "carbs to metabolize
   protein", cutting carbs entirely, the cancer/hydration claims, the 2-3 L law, the quiz and the
   affiliate.
6. **Vegetables versus hortalizas is an administrative distinction.** The CAE taxonomy is not
   nutritional; 400 g a day is the number that matters. Delete "hortalizas include legumes" (false),
   the vinegar disinfection and every commercial CTA.
7. **Specialty coffee is caffeine with a story.** 3-6 mg/kg, 60 minutes before, sleep as the bill.
   Delete the analgesic/anti-inflammatory claim, "more natural properties", the testimonial and the
   affiliate. The published caffeine page owns the topic; this page owns the coffee-vehicle arithmetic.
8. **Tracking fails on portion error, not arithmetic.** Atwater factors are the easy 10 %; the ±20-30 %
   portion estimate is the rest. Delete "never fails", the app promo, the anti-professional line and
   the wink.
9. **Free radicals are signalling molecules.** The body makes and uses oxidants; antioxidant trials
   failed. Delete the ALA, grape-seed and vitamin C megadose block, "protects against all cancers",
   the selenium cancer claim and the implausible vitamin E table.
10. **Meat carcinogens are a cooking-method problem.** HCA/PAH form in the crust; processed meat is a
    separate IARC Group 1 item. Delete the 1-in-10,000 figure, "cherries eliminate HCA", casein
    binding, the beer line, the brand roll-call and "you will be preserved from cancer".

## Global rules

1. Neutral Spanish with `tú`; zero vosotros, voseo or `usted`. Never the word `gym` in Spanish.
2. No first person, no newsletter CTAs, no supplement promotions, no athlete photos, no medical or rehab
   claims, no "Conclusión" section, no marketing headings.
3. Zero external links, `.md` links, `#` anchors, inline images, `▷`/`✔`, escaped asterisks, emoji
   artifacts, empty headings, manual TOCs, embedded videos, duplicate images, headings with no body.
4. Links only to existing pages: the ten batch pages, batches 60-68, the 18 supplement pages,
   `agua-hidratacion-deporte`, `como-limitar-el-sodio`, `necesitas-desintoxicarte`,
   `carbohidratos`, `cenar-verdura`, `verdura-masa-muscular`, `legumbres-beneficiosas-dieta`,
   `lenteja-dieta`, `comidas-perfectas-culturistas`, `cocinar-pollo-jugoso`,
   `ganar-musculo-vegetarianos`, `suplementos-de-proteina-vegana`,
   `construir-masa-muscular-limpia`, `cafeina-suplemento`, `creatina-cafeina`,
   `comida-pre-entrenamiento`, `calculo-calorico-mantenimiento`, `calculo-calorias-masa-muscular`,
   `deficit-calorico-clave-para-perder-peso`, `elaborar-dieta`, `errores-a-evitar-en-la-dieta`,
   `guia-basica-de-nutricion-culturista`, `vitaminas-minerales-para-el-gimnasio`,
   `sistema-inmune-con-vitaminas`, `carne-culturismo`, `mejores-embutidos-para-la-dieta`,
   `grasas-transaturadas`, `guia-productos-light`, `reemplazo-comidas`,
   `dieta-ideal-para-adelgazar-perder-peso`, `vino-es-realmente-saludable`,
   `errores-al-tomar-suplementos`, `pros-y-contras-de-las-proteinas`.
5. Zero em dashes. Titles 45-60, descriptions 150-160, reciprocal `alternate`.
6. Tables: comparison and decision tables as `<table class="text-table">` with three columns. The water
   shifts, the phytate table and the menu macros are text tables.
7. Heroes: one unique per page, free licence only, 1280 px, >=1200 on disk, <250 KB, credit plus honest
   alt, dHash on the final crop. Open the closest hero; distance 0 is a duplicate and crops measure up
   to 14. Prefer product-free, person-free images.
8. Body 600-900 words per locale, table-inclusive under 1,150. Pages 2 (537) and 7 (503) need
   rebuilding; page 9 may reach 1,000.
9. Mandatory intra-batch links: 1 -> 2, 3; 2 -> 4, 9; 3 -> 4, 5; 4 -> 5, 9; 5 -> 8, 10;
   6 -> 3, 5; 7 -> 8, 10; 8 -> 5, 9; 9 -> 2, 10; 10 -> 3, 9. All ten link
   `errores-al-tomar-suplementos`.

## Per page

### 1. Natural diuretics

- Water weight, not fat: glycogen holds water, sodium shifts, the cycle shifts; 1-2 kg overnight is
  normal. Practical: consistent sodium, carbohydrate and weigh-in timing.
- Delete kidney stimulation, "no side effects", detox, kidney-stone advice, the cranberry cure and the
  caffeine diuretic claim as absolutes.
- Link `phytic-acid` (page 2), `healthy-menu-carbs-protein` (page 3), `agua-hidratacion-deporte`,
  `como-limitar-el-sodio`, `necesitas-desintoxicarte`, `errores-al-tomar-suplementos`.

### 2. Phytic acid

- Antinutrient and substrate: binds minerals, feeds bacteria; soaking, sprouting and fermentation.
  From 537 words, a two-sided page.
- Delete the invented body reserve, the cancer, heart and diabetes claims and "heat destroys all".
- Link `vegetarian-diet-for-weight-loss` (page 4), `free-radicals` (page 9),
  `legumbres-beneficiosas-dieta`, `lenteja-dieta`, `vitaminas-minerales-para-el-gimnasio`,
  `errores-al-tomar-suplementos`.

### 3. Healthy menu with carbs and protein

- Rebuild the three courses with weighed oil, per-serving macros and honest calories. Delete "sugar is
  good for the brain", the brand ham, the tetra-brik and every vosotros form.
- Link `vegetarian-diet-for-weight-loss` (page 4), `clean-eating` (page 5),
  `comidas-perfectas-culturistas`, `cocinar-pollo-jugoso`, `elaborar-dieta`,
  `errores-al-tomar-suplementos`.

### 4. Vegetarian diet for weight loss

- Protein 1.6-2.2 g/kg, B12, iron, omega-3 and vitamin D; fix the energy-density inversion; a
  300-500 kcal deficit. Delete the 5-meals-metabolism line and the affiliate links.
- Link `clean-eating` (page 5), `free-radicals` (page 9), `ganar-musculo-vegetarianos`,
  `suplementos-de-proteina-vegana`, `dieta-ideal-para-adelgazar-perder-peso`,
  `errores-al-tomar-suplementos`.

### 5. Clean eating

- Keep the kitchen, protein, fibre and cooking; drop the morality. Adherence and 80/20. Delete "the
  only way", meals burning fat, "carbs to metabolize protein", cutting carbs, cancer/hydration claims,
  the 2-3 L law, the quiz and the affiliate.
- Link `how-to-track-what-you-eat` (page 8), `meat-carcinogens` (page 10),
  `errores-a-evitar-en-la-dieta`, `como-ser-disciplinado-dieta`, `guia-productos-light`,
  `errores-al-tomar-suplementos`.

### 6. Vegetables versus hortalizas

- The CAE taxonomy is administrative; 400 g a day is the number that matters. Cooking and storage.
  Delete "hortalizas include legumes", the vinegar disinfection and all commercial CTAs.
- Link `healthy-menu-carbs-protein` (page 3), `clean-eating` (page 5), `cenar-verdura`,
  `verdura-masa-muscular`, `guia-basica-de-nutricion-culturista`, `errores-al-tomar-suplementos`.

### 7. Specialty coffee and exercise

- 3-6 mg/kg, 60 minutes before, sleep as the bill. The coffee vehicle, the dose arithmetic and the
  ceiling. Delete analgesic/anti-inflammatory claims, "more natural properties", the testimonial and
  the affiliate.
- Link `how-to-track-what-you-eat` (page 8), `meat-carcinogens` (page 10), `cafeina-suplemento`,
  `creatina-cafeina`, `comida-pre-entrenamiento`, `errores-al-tomar-suplementos`.

### 8. How to track what you eat

- Portion error is ±20-30 %; Atwater factors are the easy part. Practical: a scale for a week, then
  estimates; label rounding; alcohol. Delete "never fails", the app promo, the anti-professional line
  and the wink.
- Link `clean-eating` (page 5), `free-radicals` (page 9), `calculo-calorico-mantenimiento`,
  `calculo-calorias-masa-muscular`, `deficit-calorico-clave-para-perder-peso`,
  `errores-al-tomar-suplementos`.

### 9. Free radicals

- ROS are signalling molecules; the body makes and uses them; antioxidant trials failed. Food first.
  Delete the ALA, grape-seed and vitamin C megadose block, "protects against all cancers", the
  selenium claim and the implausible vitamin E table.
- Link `phytic-acid` (page 2), `meat-carcinogens` (page 10),
  `vitaminas-minerales-para-el-gimnasio`, `sistema-inmune-con-vitaminas`,
  `dieta-antiinflamatoria-claves-y-beneficios`, `errores-al-tomar-suplementos`.

### 10. Meat carcinogens

- HCA/PAH form in the crust; temperature, char and processed meat are the levers. Processed meat is
  IARC Group 1, fresh chicken is not. Delete the 1-in-10,000 figure, the cherry and casein claims, the
  beer line, the brand roll-call and "preserved from cancer".
- Link `healthy-menu-carbs-protein` (page 3), `free-radicals` (page 9), `carne-culturismo`,
  `cocinar-pollo-jugoso`, `mejores-embutidos-para-la-dieta`, `errores-al-tomar-suplementos`.

## Writer split

- **Writer A:** pages 1-5: `mejores-diureticos-naturales`, `protegete-con-el-acido-fitico`,
  `menu-saludable-con-carbohidratos-y-proteinas`,
  `dieta-vegetariana-para-adelgazar-sin-pasar-hambre`, `comer-limpio`, plus five heroes.
- **Writer B:** pages 6-10: `diferencias-entre-verduras-y-hortalizas`, `deporte-cafe-de-especialidad`,
  `la-mejor-forma-de-controlar-lo-que-comes`, `radicales-libres`,
  `evita-los-agentes-cancerigenos-de-la-carne`, plus five heroes.

## Hero shortlist

1. A scale and a glass of water, neutral.
2. Dried beans and lentils in bowls, or sesame seeds.
3. Rice with peppers in a pan, or a fruit salad bowl.
4. A lentil-and-vegetable bowl, or a tofu block.
5. Chopped vegetables on a board, or a stocked fridge.
6. Market crates of vegetables, or a leaf/root diagram.
7. An espresso in a plain cup, or roasted beans.
8. A nutrition label close-up, or a kitchen scale.
9. Berries in a bowl. No pills.
10. Grilled chicken with char marks on a board.

## Verification

```powershell
npm run check:copy   # expected 35,241
npm run build        # expected 1,398 pages
npm run check:i18n   # expected 21,762, 1,394 sitemap URLs
```

Parent checks beyond the gates: every internal link resolves, zero em dashes, no BOM, dHash over all
heroes, 140 page/width pairs with no clipped cell.

## Result (2026-11-24)

- 10 bilingual pairs, 20 files, 10 heroes. Library 681 → **691 / 792**. Nutrición **118/191**.
- Gates: `check:copy` **35,241/35,241**, build **1,398 pages**, `check:i18n` **21,762/21,762**, sitemap
  **1,394 URLs** with 4,182 alternates.
- Structural checks: 120 internal links, **0 broken**; zero em dashes; no BOM; 140 page/width pairs with
  **0 clipped cells**.
- **Corrections made:** diuretics become a water-weight page; phytic acid is two-sided; the menu is
  rebuilt with weighed oil; vegetarian fat loss is a protein and B12 problem; "clean eating" is
  discipline, not morality; the CAE taxonomy is administrative; coffee gets 3-6 mg/kg; tracking fails on
  portion error; ROS are signalling molecules; meat carcinogens are a cooking-method problem.
- **Fixed by the parent:** nothing content-side; the writers fixed their own descriptions before close.
- **Writers:** A pages 1-5, B pages 6-10, disjoint files.
- **Heroes:** ten files, all 1280x720. The minimum distance is 10 on a paella against a bento box;
  every nearest neighbour was opened and none is a crop.
- Commits: pages `0b3b129`, `8715002`, `156bddf`, `130b17c`, `9d001c7`, `3647ffc`, `5e742ed`, `e8a0fee`,
  `82106e5`, `520765e`.
