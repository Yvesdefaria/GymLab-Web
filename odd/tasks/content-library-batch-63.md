# Content library — batch 63

Started: 2026-11-24. Continues the library from 621/792 (`odd/tasks/content-pages.md`).

Objective: the next ten Nutrición Aplicada rows, from `/efecto-rebote-perder-peso/` to
`/nutricion-en-el-deporte-rendimiento-optimo/`, as ten bilingual pairs. Library 621 → 631.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Sources: `...\content\nutricion\nutricion-aplicada\`
- Depends on batches 60, 61 and 62.

## Tasks

- [x] T1 Scope, conflicts and house rules written (this document).
- [x] T2 Writer A: pages 1-5, ES + EN + heroes.
- [x] T3 Writer B: pages 6-10, ES + EN + heroes.
- [x] T4 Routes registered in `astro.config.mjs` and `scripts/check-i18n.mjs`.
- [x] T5 Parent gates, link check, render pass, dHash pass, per-page commits, checklist and handoff.

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `efecto-rebote-perder-peso` | `weight-rebound-after-dieting` | `efecto-rebote-perder-peso.md` | 890 | efecto rebote | |
| 2 | `anabolismo-muscular` | `muscle-anabolism` | `anabolismo-muscular.md` | 295 | anabolismo muscular | |
| 3 | `utilizar-la-ventana-anabolica` | `anabolic-window` | `utilizar-la-ventana-anabolica.md` | 813 | ventana anabólica | |
| 4 | `dieta-ideal-para-adelgazar-perder-peso` | `ideal-diet-for-weight-loss` | `dieta-ideal-para-adelgazar-perder-peso.md` | 1,744 | dieta para adelgazar | |
| 5 | `deficit-calorico-clave-para-perder-peso` | `calorie-deficit-for-weight-loss` | `deficit-calorico-clave-para-perder-peso.md` | 1,242 | déficit calórico | |
| 6 | `legumbres-beneficiosas-dieta` | `legumes-in-your-diet` | `legumbres-beneficiosas-dieta.md` | 1,851 | legumbres | |
| 7 | `calculo-calorias-masa-muscular` | `calories-for-muscle-gain` | `calculo-calorias-masa-muscular.md` | 935 | calorías para ganar masa muscular | |
| 8 | `cocinar-pollo-jugoso` | `juicy-chicken` | `cocinar-pollo-jugoso.md` | 1,096 | cocinar pollo jugoso | |
| 9 | `como-llevar-un-estilo-de-vida-fitness` | `fitness-lifestyle` | `como-llevar-un-estilo-de-vida-fitness.md` | 865 | estilo de vida fitness | |
| 10 | `nutricion-en-el-deporte-rendimiento-optimo` | `sports-nutrition-for-performance` | `nutricion-en-el-deporte-rendimiento-optimo.md` | 1,311 | nutrición deportiva | |

All: `block: "Entrenamiento"` (`Training`), `section: "Nutrición aplicada"` (`Applied nutrition`),
`updated: "2026-11-24"`.

## House rules (binding, YMYL)

1. **No purchase CTAs, affiliate links, shop names, brand names or "best" rankings.**
2. **No medical claims.** Weight, metabolism, cancer, diabetes, hormones and digestion statements stay
   inside what trials in healthy adults support, with the qualifier kept.
3. **No invented numbers.** Protein 1.6-2.2 g/kg and 25-40 g per meal, fibre 25-35 g/day, deficit
   300-500 kcal, surplus 200-300 kcal, carbohydrate 3-5 g/kg for lifters, rate of loss 0.5-1 % of body
   weight per week. Anything else is described as unstudied.
4. **No "broken metabolism", "starvation mode", "genetic memory" or detox.** Adaptive thermogenesis
   exists, is small and partly transient; say that.
5. **No crash diets, no "guaranteed" results, no blame framing.**
6. **No athlete photos, no before/after imagery.**

## Conflicts the batch settles (binding)

1. **The rebound is mostly arithmetic and adherence.** Most regain is eating more than the new
   maintenance without noticing it. Adaptive thermogenesis is real, small and partly transient; the
   archive's "genetic memory" and "the body refuses to lose weight" go. Keep the practical tools: weekly
   average weight, protein 1.6-2.2 g/kg, resistance training, sleep 7-9 h, a 300-500 kcal deficit and a
   planned refeed described honestly.
2. **Anabolism is a daily net balance, not a switch.** Muscle grows from sessions plus meals over weeks.
   Delete "ANABOLISMO = CRECIMIENTO" and the steroid framing. Build the 295-word source to 600 with the
   net balance, the roles of leucine/EAA, insulin as permissive and energy availability.
3. **The anabolic window lasts hours, not 30 minutes.** Total protein 1.6-2.2 g/kg and about 0.4 g/kg
   per meal decide; 25-40 g per meal is the practical target. The pre/post timing matters when the
   previous meal was far away. Delete the 15-30 minute urgency, the "80 % better before" claim and the
   3.5x absorption figure.
4. **There is no single ideal diet.** Publish a plate template with a protein anchor, vegetables, a
   carbohydrate portion and a fat portion, plus real numbers (deficit 300-500, protein 1.6-2.2, fibre
   25-35). Delete "guaranteed success", the shouting "VE AL GIMNASIO", the sexual-benefit line, the
   academy and brand links, and the beer-and-burger day as a rule; it can be one planned meal.
5. **The deficit is the mechanism and a dose.** Name the formula correctly: Mifflin-St Jeor, not
   "Harris-Benedict revisada". Keep the worked example and the 300-500 kcal / 10-25 % ranges. Qualify
   "the only path" as "the mechanism behind every diet that works", add satiety (protein, fibre, volume),
   the rate of loss and diet breaks. Delete "devouring muscle".
6. **Legumes are cheap protein and fibre, not a superfood.** 100 g dry gives about 20 g of protein and
   a lot of fibre; combine with a cereal for the amino acid profile. The archive's "B12 in soy" is false
   and dangerous: delete it. Delete "the only vegetable with high biological value" and the diabetes,
   hypertension and anaemia claims; qualify the gas and phytoestrogen lines.
7. **The surplus is small and adjusted by the scale.** 200-300 kcal above maintenance, 0.25-0.5 % of body
   weight per week, protein 1.6-2.2, carbs 3-5 and fat 0.8-1 g/kg. Delete the pounds-based opaque
   formulas, the fixed 60/25/15 split and the 4,500 kcal ectomorph figure. Qualify "eat more to burn
   more".
8. **Chicken is a food-safety and technique page.** 74 °C internal, a brine of one teaspoon of salt per
   cup of water, fridge three days, freezer three months, cool within two hours. Delete the selenium and
   cancer claim, the zinc and "anabolic hormones" line, and the organic/antibiotics contradiction.
9. **A fitness lifestyle is repeatable logistics.** Sessions, steps, sleep, meal prep and a weekly review
   beat motivation. Delete "there are no impossible things, only incapable people", the "supplements are
   almost essential" line and every vosotros form. Build from 865 words without blame.
10. **Sports nutrition is fuel, not a personality.** 2-3 hours before a meal, carbohydrate for sessions
    over 75 minutes, water under that, protein 1.6-2.2 g/kg, hydration and a short supplement list.
    Delete the fabricated first-person biography (eight "he experimentado"), the master's CTA and the
    BCAA recommendation, which contradicts the published BCAA page.

## Global rules

1. Neutral Spanish with `tú`; zero vosotros, voseo or `usted`. Never the word `gym` in Spanish.
2. No first person, no newsletter or comment CTAs, no supplement promotions, no athlete photos, no
   medical or rehab claims, no "Conclusión" section, no marketing headings.
3. Zero external links, `.md` links, `#` anchors, inline images, `▷`/`✔`, escaped asterisks, emoji
   artifacts, empty headings, manual TOCs, embedded videos, duplicate images, headings with no body.
4. Links only to pages that exist (ES slugs): the ten batch pages, the batch 60-62 pages
   (`aceite-de-cbd-beneficios-para-el-deportista`, `como-empezar-a-tomar-suplementos-deportivos`,
   `como-mejorar-tus-fisico-con-estos-batidos`, `suplementos-dieteticos`,
   `los-dos-mejores-suplementos-para-ganar-masa-muscular`, `suplementos-glutamina`,
   `tribulus-terrestris`, `aminoacidos-bcaas`, `reemplazo-comidas`, `glucosamina`, `esteroides`,
   `bloqueadores-de-carbohidratos`, `gaba-neotropico-para-la-calma-y-relajacion`, `vitargo`,
   `ganadores-de-peso-mass-gainers`, `cafeina-suplemento`, `aminoacidos`,
   `almuerzos-saludables-altos-en-proteinas`, `combinar-proteinas-carbohidratos`, `cenar-verdura`,
   `carbohidratos`, `guia-definitiva-de-recomposicion-corporal`,
   `culturismo-la-cura-para-el-envejecimiento`, `suplementacion-deportiva-alcanzar-objetivos`,
   `engordan-los-hidratos-en-las-cenas`, `sistema-inmune-con-vitaminas`,
   `quieres-perder-grasa-no-solo-perder-peso`, `ayuno-intermitente`,
   `insulina-y-culturismo-aliada-ganar-masa-muscular`, `vino-es-realmente-saludable`), the 18 published
   supplement pages, `ganar-masa-muscular`, `como-ganar-peso`, `menos-grasa-mas-musculo`,
   `entrenamiento-perder-grasa`, `rutina-quema-grasa-sin-hacer-aerobicos`,
   `como-orientar-tu-rutina-de-pesas-para-perder-grasa`,
   `perder-grasa-abdominal-con-abdominales`, `cardio-ayunas`,
   `como-ser-constante-en-el-entrenamiento`, `elegir-gimnasio`,
   `tu-primer-dia-en-el-gimnasio-como-superarlo-y-querer-volver`,
   `rutina-de-entrenamiento-primer-mes-en-el-gimnasio`, `rutina-pesas-tras-inactividad`,
   `rutina-de-cuerpo-completo-para-recuperar-la-forma`, `guia-musculacion-principiantes`,
   `cuanto-dormir-para-progresar-en-el-gimnasio`, `agujetas-causas-y-como-hacer-que-desaparezcan`,
   `regeneracion-muscular`, `sobreentrenamiento`, `recuperacion-activa-entrenamiento`,
   `pros-y-contras-de-las-proteinas`, `proteinas-de-liberacion-sostenida-mezclas-proteicas`,
   `proteina-de-suero-elaboracion`, `mejor-proteina-nocturna`,
   `proteina-de-soja-contra-proteina-de-leche`, `suplementos-de-proteina-vegana`,
   `creatina-la-verdad`, `pesas-salud-cardiovascular`, `calcular-calorias`.
5. Zero em dashes. Titles 45-60, descriptions 150-160, reciprocal `alternate`.
6. Tables: comparison and decision tables as `<table class="text-table">` with three columns. The plate
   template, the calorie ranges and the chicken temperatures are text tables.
7. Heroes: one unique per page, free licence only (Wikimedia Commons first, Pexels second), 1280 px,
   >=1200 on disk, <250 KB, credit plus honest alt, dHash on the final crop. Distance 0 is a duplicate,
   crops have measured up to 14, and white line art hashes 2-9 against other line art: open the closest
   hero and compare by subject. Prefer product-free, person-free images.
8. Body 600-900 words per locale, table-inclusive under 1,150. Page 2 (295 words) and page 9 (865) need
   rebuilding; page 4 may reach 1,000.
9. Mandatory intra-batch links: 1 -> 4, 5, 7; 2 -> 3, 7, 10; 3 -> 2, 7, 10; 4 -> 1, 5, 6, 8, 9;
   5 -> 1, 4, 7; 6 -> 4, 7, 8; 7 -> 1, 2, 5; 8 -> 4, 6, 9; 9 -> 1, 4, 10; 10 -> 2, 3, 5. All ten link
   `errores-al-tomar-suplementos`.

## Per page

### 1. Weight rebound

- Rebuild around the arithmetic: maintenance falls with body weight, adherence decays, and the surplus
  is easy to miss. Adaptive thermogenesis is small and partly transient. Practical tools: weekly average,
  protein 1.6-2.2 g/kg, resistance training, sleep, a 300-500 kcal deficit and a planned refeed.
- Delete "genetic memory", "starvation mode", "the body refuses" and the unsourced "many studies".
- Link `dieta-ideal-para-adelgazar-perder-peso` (page 4), `deficit-calorico-clave-para-perder-peso`
  (page 5), `calculo-calorias-masa-muscular` (page 7), `quieres-perder-grasa-no-solo-perder-peso`,
  `menos-grasa-mas-musculo`, `errores-al-tomar-suplementos`.

### 2. Muscle anabolism

- Daily net protein balance: synthesis versus breakdown, sessions plus meals over weeks. Leucine and EAAs
  trigger, insulin is permissive, energy availability decides. 1.6-2.2 g/kg and 25-40 g per meal.
- Delete "ANABOLISMO = CRECIMIENTO" and the steroid framing. Build from 295 words to 600 with the net
  balance and the practical levers.
- Link `utilizar-la-ventana-anabolica` (page 3), `calculo-calorias-masa-muscular` (page 7),
  `nutricion-en-el-deporte-rendimiento-optimo` (page 10), `ganar-masa-muscular`,
  `aminoacidos-bcaas`, `errores-al-tomar-suplementos`.

### 3. The anabolic window

- The window lasts hours. Total protein and per-meal protein decide; 0.4 g/kg per meal, 25-40 g. Pre and
  post matter when the previous meal was far away. Give the practical timing, not a deadline.
- Delete the 15-30 minute urgency, the 80 % pre claim and the 3.5x absorption figure.
- Link `anabolismo-muscular` (page 2), `calculo-calorias-masa-muscular` (page 7),
  `nutricion-en-el-deporte-rendimiento-optimo` (page 10), `carbohidratos`,
  `proteinas-de-liberacion-sostenida-mezclas-proteicas`, `errores-al-tomar-suplementos`.

### 4. Ideal diet for weight loss

- Plate template with a protein anchor, vegetables, a carbohydrate portion and a fat portion, plus real
  numbers: deficit 300-500 kcal, protein 1.6-2.2 g/kg, fibre 25-35 g. Adherence is the variable.
- Delete "guaranteed success", "VE AL GIMNASIO", the sexual-benefit line, the academy and brand links,
  and the beer-and-burger day as a rule.
- Link `efecto-rebote-perder-peso` (page 1), `deficit-calorico-clave-para-perder-peso` (page 5),
  `legumbres-beneficiosas-dieta` (page 6), `cocinar-pollo-jugoso` (page 8),
  `como-llevar-un-estilo-de-vida-fitness` (page 9), `carbohidratos`,
  `almuerzos-saludables-altos-en-proteinas`, `errores-al-tomar-suplementos`.

### 5. Calorie deficit

- The deficit is the mechanism behind every diet that works. Mifflin-St Jeor, activity factors, 10-25 %,
  300-500 kcal, rate 0.5-1 % of body weight per week, satiety and diet breaks. Keep the worked example.
- Name the formula correctly and delete "devouring muscle" and "the only path" as an absolute.
- Link `efecto-rebote-perder-peso` (page 1), `dieta-ideal-para-adelgazar-perder-peso` (page 4),
  `calculo-calorias-masa-muscular` (page 7), `quieres-perder-grasa-no-solo-perder-peso`,
  `menos-grasa-mas-musculo`, `errores-al-tomar-suplementos`.

### 6. Legumes

- 100 g dry gives about 20 g of protein and a lot of fibre; combine with a cereal. Cheap, filling and
  practical. Portion, soaking, cooking and gas adaptation.
- Delete the B12-in-soy claim (false and dangerous), "the only vegetable with high biological value",
  and the diabetes, hypertension and anaemia claims.
- Link `dieta-ideal-para-adelgazar-perder-peso` (page 4), `calculo-calorias-masa-muscular` (page 7),
  `cocinar-pollo-jugoso` (page 8), `carbohidratos`, `proteina-de-soja-contra-proteina-de-leche`,
  `suplementos-de-proteina-vegana`, `errores-al-tomar-suplementos`.

### 7. Calories for muscle gain

- Surplus 200-300 kcal, 0.25-0.5 % of body weight per week, protein 1.6-2.2, carbs 3-5, fat 0.8-1 g/kg.
  Worked example and the scale check every two weeks.
- Delete the pounds-based opaque formulas, the fixed 60/25/15 split and the 4,500 kcal ectomorph figure.
- Link `efecto-rebote-perder-peso` (page 1), `anabolismo-muscular` (page 2),
  `deficit-calorico-clave-para-perder-peso` (page 5), `ganar-masa-muscular`, `como-ganar-peso`,
  `errores-al-tomar-suplementos`.

### 8. Juicy chicken

- Food safety and technique: 74 °C internal, one teaspoon of salt per cup of brine, fridge three days,
  freezer three months, cool within two hours. 200 g of breast is about 48 g of protein.
- Delete selenium and cancer, zinc and "anabolic hormones", and the organic/antibiotics contradiction.
- Link `dieta-ideal-para-adelgazar-perder-peso` (page 4), `legumbres-beneficiosas-dieta` (page 6),
  `como-llevar-un-estilo-de-vida-fitness` (page 9),
  `almuerzos-saludables-altos-en-proteinas`, `cenar-verdura`, `errores-al-tomar-suplementos`.

### 9. Fitness lifestyle

- Logistics: sessions, steps, sleep 7-9 h, meal prep, weekly review. Habits over motivation, no blame.
- Delete "there are no impossible things, only incapable people", "supplements are almost essential" and
  every vosotros form.
- Link `efecto-rebote-perder-peso` (page 1), `dieta-ideal-para-adelgazar-perder-peso` (page 4),
  `nutricion-en-el-deporte-rendimiento-optimo` (page 10),
  `como-ser-constante-en-el-entrenamiento`, `elegir-gimnasio`,
  `tu-primer-dia-en-el-gimnasio-como-superarlo-y-querer-volver`,
  `errores-al-tomar-suplementos`.

### 10. Sports nutrition for performance

- Fuel: 2-3 hours before a meal, carbohydrate for sessions over 75 minutes, water under that, protein
  1.6-2.2 g/kg, hydration, short supplement list. Practical plan around a session.
- Delete the fabricated first-person biography, the master's CTA and the BCAA recommendation.
- Link `anabolismo-muscular` (page 2), `utilizar-la-ventana-anabolica` (page 3),
  `deficit-calorico-clave-para-perder-peso` (page 5), `carbohidratos`, `cafeina-suplemento`,
  `creatina-la-verdad`, `errores-al-tomar-suplementos`.

## Writer split

- **Writer A:** pages 1-5: `efecto-rebote-perder-peso`, `anabolismo-muscular`,
  `utilizar-la-ventana-anabolica`, `dieta-ideal-para-adelgazar-perder-peso`,
  `deficit-calorico-clave-para-perder-peso`, plus five heroes.
- **Writer B:** pages 6-10: `legumbres-beneficiosas-dieta`, `calculo-calorias-masa-muscular`,
  `cocinar-pollo-jugoso`, `como-llevar-un-estilo-de-vida-fitness`,
  `nutricion-en-el-deporte-rendimiento-optimo`, plus five heroes.
- Neither writer touches `astro.config.mjs`, `scripts/check-i18n.mjs`, `guides-nav.ts`,
  `content-pages.md` or this document.

## Hero shortlist

1. Bathroom scale on tiles or an open fridge with containers.
2. Bread dough rising or wooden building blocks.
3. Shaker on a bench or a kitchen clock beside a lunch box.
4. Balanced plate from above or a market basket.
5. Kitchen scale with oats or a tape measure and a notebook.
6. Cooked lentils in a bowl or dry chickpeas on a board.
7. A notebook with numbers and a pen, or a kitchen scale with rice.
8. Raw chicken breast on a board or a golden breast in a pan.
9. Stacked meal-prep containers or a gym bag by the door.
10. Water bottle with condensation or a plate of pasta before training.

## Verification

```powershell
npm run check:copy   # expected 32,181
npm run build        # expected 1,278 pages
npm run check:i18n   # expected 19,902, 1,274 sitemap URLs
```

Parent checks beyond the gates: every internal link resolves, zero em dashes, no BOM, dHash over all
heroes, 140 page/width pairs with no clipped cell.

## Result (2026-11-24)

- 10 bilingual pairs, 20 files, 10 heroes. Library 621 → **631 / 792**. Nutrición **58/191**.
- Gates: `check:copy` **32,181/32,181**, build **1,278 pages**, `check:i18n` **19,902/19,902**, sitemap
  **1,274 URLs** with 3,822 alternates.
- Structural checks: 64 internal links, **0 broken**; zero em dashes; no BOM; 140 page/width pairs with
  **0 clipped cells**.
- **Corrections made:** the rebound is arithmetic and adherence, not "genetic memory"; anabolism is a
  daily net balance, not a switch; the anabolic window lasts hours and the daily protein decides;
  the ideal diet becomes a plate template with real numbers; the deficit is a dose, with Mifflin-St
  Jeor named correctly and satiety plus diet breaks added.
- **Fixed by the parent:** nothing content-side; the parent ran the build, i18n, render and dHash passes
  and all links resolved.
- **Writers:** A pages 1-5, B pages 6-10, disjoint files.
- **Heroes:** ten Wikimedia files, all 1280x720. The minimum distance is 14 on an oats bowl against a
  gym photo; every nearest neighbour was opened and none is a crop.
- Commits: pages `50ef94e`, `6e6bec4`, `3dffc37`, `e032973`, `501cfe7`, `b5a5926`, `551560f`, `8740cac`,
  `1a44934`, `3ea1e0c`.
