# Content library — batch 68

Started: 2026-11-24. Continues the library from 671/792 after batch 67
(`odd/tasks/content-pages.md`).

Objective: `mezcla-de-carbohidratos-post-entrenamiento` to `evitar-estrias`, as ten bilingual pairs.
Library 671 → 681.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Sources: `...\content\nutricion\nutricion-aplicada\`
- Depends on batches 60-67.

## Tasks

- [x] T1 Scope, conflicts and house rules written (this document).
- [x] T2 Writer A: pages 1-5, ES + EN + heroes.
- [x] T3 Writer B: pages 6-10, ES + EN + heroes.
- [x] T4 Routes registered in `astro.config.mjs` and `scripts/check-i18n.mjs`.
- [x] T5 Parent gates, link check, render pass, dHash pass, per-page commits, checklist and handoff.

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `mezcla-de-carbohidratos-post-entrenamiento` | `post-workout-carb-mix` | `mezcla-de-carbohidratos-post-entrenamiento.md` | 528 | mezcla de carbohidratos | |
| 2 | `enfermedades-exceso-grasa` | `diseases-from-excess-fat` | `enfermedades-exceso-grasa.md` | 894 | enfermedades por exceso de grasa | |
| 3 | `grasa-y-testosterona` | `fat-and-testosterone` | `grasa-y-testosterona.md` | 1,621 | grasa y testosterona | |
| 4 | `grasas-transaturadas` | `trans-fats` | `grasas-transaturadas.md` | 1,402 | grasas trans | |
| 5 | `grasas` | `dietary-fats` | `grasas.md` | 1,967 | grasas en la dieta | |
| 6 | `lenteja-dieta` | `lentils-in-your-diet` | `lenteja-dieta.md` | 1,056 | lentejas en la dieta | |
| 7 | `guia-productos-light` | `light-products-guide` | `guia-productos-light.md` | 1,187 | productos light | |
| 8 | `necesitas-desintoxicarte` | `do-you-need-a-detox` | `necesitas-desintoxicarte.md` | 1,420 | desintoxicar el cuerpo | |
| 9 | `pizza-saludable` | `healthy-pizza` | `pizza-saludable.md` | 956 | pizza saludable | |
| 10 | `evitar-estrias` | `prevent-stretch-marks` | `evitar-estrias.md` | 372 | evitar estrías | |

All: `block: "Entrenamiento"` (`Training`), `section: "Nutrición aplicada"` (`Applied nutrition`),
`updated: "2026-11-24"`.

## House rules (binding, YMYL)

1. **No purchase CTAs, affiliate links, shop names, brand names or "best" rankings.**
2. **No medical claims.** Cardiovascular, metabolic, hormonal, liver, kidney and skin statements stay
   inside what trials in healthy adults support, with the qualifier kept.
3. **No invented numbers.** Protein 1.6-2.2 g/kg, carbohydrate 3-5 g/kg for lifters, 20-40 g protein and
   40-70 g carbohydrate post-session, saturated fat under 10 % of calories, industrial trans fat as close
   to zero as possible, total fat 20-35 % of calories. Anything else is described as unstudied.
4. **No detox products, no "light means healthy", no stretch-mark cure creams.**
5. **No athlete photos, no before/after imagery.**

## Conflicts the batch settles (binding)

1. **Glucose and fructose use different transporters; the effect only matters at high loads.** Total
   daily carbohydrate decides. Align the post-session numbers with the published page: 20-40 g of
   protein and 40-70 g of carbohydrate, window of hours. Delete the universal 40 g + 60-100 g rule and
   the unexplained 2:1:1. Fix the broken table.
2. **Excess fat is associated with cardiometabolic disease, not a diagnosis.** Risk context and when to
   see a doctor. Delete the 200 mg/dl definition and the 250/300 M forecast. Central obesity is not
   "the most serious"; fibre adsorption is minor. Fix the typos.
3. **Fat and testosterone: very low fat intakes can lower testosterone modestly in some trials; energy
   status and genetics dominate.** No food is hormone therapy. Delete "more cholesterol equals more
   testosterone", the one-man anecdote, the DiPasquale authority, the linseed-oil marketing, "fat burns
   fat" and "keto imitates steroids". Qualify the 15 % floor and the 27-men study.
4. **Industrial trans fats are the one fat class with clear dose-dependent harm.** The action is reading
   ingredient lists, not fearing every refined oil. Delete "diabolical", solvents and bleach, "refined
   oils are toxic", "the main cause of the heart-disease explosion", the cancer/ED overreach, the
   one-study muscle claim, the "Ninguno" table contradiction and the congress bill.
5. **The fats guide teaches both denominators.** Fat type drives cardiovascular risk; total calories
   drive weight. One consistent set: saturated under 10 % of calories, industrial trans near zero, total
   fat 20-35 %. Delete the 10 %-of-fats versus 5 %-of-calories contradiction, the outdated trans-label
   claim, the avocado-per-fruit figure, spot reduction and the arbitrary ¼ cup / 10 olives. Explain the
   lipid panel in plain language.
6. **Lentils are a cheap protein and fibre package.** "As good as meat" only inside a mixed meal and per
   calorie. 60-80 g dry, about 2.5x cooked; they are a folate source; low GI is not a treatment; vitamin C
   helps non-heme iron; rinse canned. Delete the "not so much folate" line and fix the typos.
7. **"Light" is a labelling claim, not a health property.** EU light means about 30 % less of the
   referenced nutrient. Read per 100 g and watch sugar/sodium swaps. Sweeteners are approved but not
   risk-free; aspartame is IARC 2B. Delete the cardiovascular-prevention claim and the diabetes benefit.
8. **The liver and kidneys already detoxify.** No juice, food or fast adds a cleaning step. Fibre,
   plants, less alcohol and enough protein are what help. Delete the disease-origin claims, the symptom
   list as diagnosis, and the onion, garlic, lemon, cranberry, papaya and milk-thistle miracles. Keep the
   immune dip after intense training qualified.
9. **Pizza fits when the base is thin, cheese measured and the protein lean.** It is calorie-dense, so
   portion is the game. Delete the cancer-protection claims, the brand attacks and "one pizza ruins a
   week". Keep lycopene and olive oil with a caveat; cured meats in moderation.
10. **Stretch marks are common and largely genetic; no cream prevents them.** Early red marks may respond
    modestly to retinoids or laser; white marks are scars. Delete the vitamin A/E cream recommendation
    and the unattributed "experts". Hydration and protein qualified; see a dermatologist.

## Global rules

1. Neutral Spanish with `tú`; zero vosotros, voseo or `usted`. Never the word `gym` in Spanish.
2. No first person, no newsletter CTAs, no supplement promotions, no athlete photos, no medical or rehab
   claims, no "Conclusión" section, no marketing headings.
3. Zero external links, `.md` links, `#` anchors, inline images, `▷`/`✔`, escaped asterisks, emoji
   artifacts, empty headings, manual TOCs, embedded videos, duplicate images, headings with no body.
4. Links only to existing pages: the ten batch pages, batches 60-67, the 18 supplement pages,
   `carbohidratos`, `comida-post-entrenamiento`, `utilizar-la-ventana-anabolica`,
   `comida-pre-entrenamiento`, `cerezas-post-entrenamiento`,
   `insulina-y-culturismo-aliada-ganar-masa-muscular`, `engordan-los-hidratos-en-las-cenas`,
   `deficit-calorico-clave-para-perder-peso`, `quieres-perder-grasa-no-solo-perder-peso`,
   `dieta-ideal-para-adelgazar-perder-peso`, `menos-grasa-mas-musculo`,
   `calculo-calorico-mantenimiento`, `calculo-calorias-masa-muscular`, `elaborar-dieta`,
   `ganar-masa-muscular`, `como-ganar-peso`, `carne-culturismo`,
   `legumbres-beneficiosas-dieta`, `combinar-proteinas-carbohidratos`, `ganar-musculo-vegetarianos`,
   `que-comer-para-ganar-masa-muscular`, `comida-trampa`, `guia-definitiva-de-recomposicion-corporal`,
   `sistema-inmune-con-vitaminas`, `agua-hidratacion-deporte`, `ayuno-intermitente`,
   `vino-es-realmente-saludable`, `efecto-rebote-perder-peso`, `esteroides`, `tribulus-terrestris`,
   `suplementos-dieteticos`, `errores-al-tomar-suplementos`, `pros-y-contras-de-las-proteinas`,
   `almuerzos-saludables-altos-en-proteinas`, `mejor-proteina-nocturna`,
   `guia-basica-de-nutricion-culturista`, `nutricion-culturista-reglas-basicas`.
5. Zero em dashes. Titles 45-60, descriptions 150-160, reciprocal `alternate`.
6. Tables: comparison and decision tables as `<table class="text-table">` with three columns. The carb
   blend, the lipid panel, the light-label comparison and the pizza macros are text tables.
7. Heroes: one unique per page, free licence only, 1280 px, >=1200 on disk, <250 KB, credit plus honest
   alt, dHash on the final crop. Open the closest hero; distance 0 is a duplicate and crops measure up
   to 14. Prefer product-free, person-free images.
8. Body 600-900 words per locale, table-inclusive under 1,150. Page 10 (372 words) must reach 600; page 5
   may reach 1,000.
9. Mandatory intra-batch links: 1 -> 4, 5; 2 -> 3, 5; 3 -> 4, 5; 4 -> 5, 7; 5 -> 3, 4; 6 -> 2, 5;
   7 -> 5, 9; 8 -> 2, 7; 9 -> 7, 10; 10 -> 2, 5. All ten link `errores-al-tomar-suplementos`.

## Per page

### 1. Post-workout carb mix

- Glucose and fructose have separate transporters, useful only at high loads; total carbohydrate decides.
  20-40 g protein and 40-70 g carbohydrate; window of hours. From 528 words, fix the broken table.
- Delete the universal 40 g + 60-100 g rule and the unexplained 2:1:1.
- Link `grasas-transaturadas` (page 4), `grasas` (page 5), `comida-post-entrenamiento`,
  `carbohidratos`, `errores-al-tomar-suplementos`.

### 2. Diseases from excess fat

- Association, not diagnosis: cardiovascular, metabolic, liver; risk context and when to see a doctor.
  Delete the 200 mg/dl definition and the 250/300 M forecast; fix the typos.
- Link `grasa-y-testosterona` (page 3), `grasas` (page 5),
  `deficit-calorico-clave-para-perder-peso`, `menos-grasa-mas-musculo`, `pesas-salud-cardiovascular`,
  `errores-al-tomar-suplementos`.

### 3. Fat and testosterone

- Very low fat can lower testosterone modestly; energy status and genetics dominate; no food is hormone
  therapy. Delete "more cholesterol equals more testosterone", the anecdote, the authority, "fat burns
  fat" and "keto imitates steroids".
- Link `grasas-transaturadas` (page 4), `grasas` (page 5), `ganar-masa-muscular`,
  `esteroides`, `tribulus-terrestris`, `errores-al-tomar-suplementos`.

### 4. Trans fats

- Industrial trans are the one class with clear dose-dependent harm; read ingredient lists. Delete
  "diabolical", solvents, "refined oils are toxic", "the main cause", the cancer/ED overreach and the
  0.5 g label rule as a law.
- Link `grasas` (page 5), `guia-productos-light` (page 7), `carne-culturismo`,
  `dieta-antiinflamatoria-claves-y-beneficios`, `errores-al-tomar-suplementos`.

### 5. Dietary fats

- Both denominators: fat type drives cardiovascular risk, total calories drive weight. Saturated under
  10 % of calories, industrial trans near zero, total fat 20-35 %. Plain-language lipid panel.
- Delete the 10 %-of-fats versus 5 %-of-calories contradiction, the outdated trans-label claim, the
  avocado-per-fruit figure, spot reduction and the arbitrary portions.
- Link `grasa-y-testosterona` (page 3), `grasas-transaturadas` (page 4),
  `dieta-antiinflamatoria-claves-y-beneficios`, `carne-culturismo`, `ganar-musculo-vegetarianos`,
  `errores-al-tomar-suplementos`.

### 6. Lentils in your diet

- Cheap protein and fibre: 60-80 g dry, about 2.5x cooked; folate; low GI as a tool; vitamin C for
  non-heme iron; rinse canned. "As good as meat" only in a mixed meal and per calorie.
- Delete the "not so much folate" line; fix the typos.
- Link `enfermedades-exceso-grasa` (page 2), `grasas` (page 5),
  `legumbres-beneficiosas-dieta`, `combinar-proteinas-carbohidratos`,
  `ganar-musculo-vegetarianos`, `errores-al-tomar-suplementos`.

### 7. Light products guide

- "Light" is a label (about 30 % less of the referenced nutrient), not a health property. Compare per
  100 g, watch sugar/sodium swaps, sweeteners approved but not risk-free (aspartame IARC 2B).
- Delete the cardiovascular-prevention claim and the diabetes benefit.
- Link `trans-fats` (page 4), `healthy-pizza` (page 9),
  `guia-definitiva-de-recomposicion-corporal`, `deficit-calorico-clave-para-perder-peso`,
  `elaborar-dieta`, `errores-al-tomar-suplementos`.

### 8. Do you need a detox

- The liver and kidneys detoxify; no juice, food or fast adds a step. Fibre, plants, less alcohol and
  enough protein. Keep the immune dip after intense training qualified.
- Delete the disease-origin claims, the symptom list as diagnosis and the onion, garlic, lemon,
  cranberry, papaya and milk-thistle miracles.
- Link `enfermedades-exceso-grasa` (page 2), `guia-productos-light` (page 7),
  `sistema-inmune-con-vitaminas`, `agua-hidratacion-deporte`, `ayuno-intermitente`,
  `errores-al-tomar-suplementos`.

### 9. Healthy pizza

- Thin base, measured cheese, lean protein; calorie-dense, portion is the game. Lycopene and olive oil
  with a caveat; cured meats in moderation.
- Delete the cancer-protection claims, the brand attacks and "one pizza ruins a week".
- Link `guia-productos-light` (page 7), `evitar-estrias` (page 10), `comida-trampa`,
  `que-comer-para-ganar-masa-muscular`, `deficit-calorico-clave-para-perder-peso`,
  `errores-al-tomar-suplementos`.

### 10. Prevent stretch marks

- Common and largely genetic; no cream prevents them. Early red marks may respond modestly to retinoids
  or laser; white marks are scars. Hydration and protein qualified; see a dermatologist. From 372 words
  reach 600.
- Delete the vitamin A/E cream recommendation and the unattributed "experts".
- Link `enfermedades-exceso-grasa` (page 2), `grasas` (page 5), `efecto-rebote-perder-peso`,
  `esteroides`, `errores-al-tomar-suplementos`.

## Writer split

- **Writer A:** pages 1-5: `mezcla-de-carbohidratos-post-entrenamiento`, `enfermedades-exceso-grasa`,
  `grasa-y-testosterona`, `grasas-transaturadas`, `grasas`, plus five heroes.
- **Writer B:** pages 6-10: `lenteja-dieta`, `guia-productos-light`, `necesitas-desintoxicarte`,
  `pizza-saludable`, `evitar-estrias`, plus five heroes.

## Hero shortlist

1. Bread, boiled potato and juice on a table, or white bread close-up.
2. A waist tape without a body, or lipid tubes.
3. Olive oil, nuts, avocado and salmon.
4. Margarine versus butter with labels visible, or an ingredient-label macro.
5. Olive oil, nuts, avocado and oily fish, or butter and coconut oil.
6. Dry lentils in a bowl, or lentil stew with rice.
7. Plain yogurt with fruit, or a measuring spoon of sugar.
8. Water poured over broccoli and lemon, or a liver/kidney illustration.
9. Homemade vegetable pizza on wood, or a dough ball and flour.
10. Skin texture close-up, no body, or a towel and aloe leaf.

## Verification

```powershell
npm run check:copy   # expected 34,731
npm run build        # expected 1,378 pages
npm run check:i18n   # expected 21,452, 1,374 sitemap URLs
```

Parent checks beyond the gates: every internal link resolves, zero em dashes, no BOM, dHash over all
heroes, 140 page/width pairs with no clipped cell.

## Result (2026-11-24)

- 10 bilingual pairs, 20 files, 10 heroes. Library 671 → **681 / 792**. Nutrición **108/191**;
  Nutrición Aplicada 60/111.
- Gates: `check:copy` **34,731/34,731**, build **1,378 pages**, `check:i18n` **21,452/21,452**, sitemap
  **1,374 URLs** with 4,122 alternates.
- Structural checks: 114 internal links, **0 broken**; zero em dashes; no BOM; 420 page/width pairs across
  batches 66-68 with **0 clipped cells**.
- **Corrections made:** the post-workout mix is a carb load, not a magic ratio; excess fat is an
  association, not a diagnosis; fat and testosterone is a modest association, not hormone therapy;
  industrial trans fats are the one class with clear harm; the fats guide uses both denominators; lentils
  are cheap protein and fibre; "light" is a label; the liver and kidneys detoxify; pizza fits by portion;
  stretch marks are largely genetic and no cream prevents them.
- **Fixed by the parent:** nothing content-side; the writers fixed their own descriptions before close.
- **Writers:** A pages 1-5, B pages 6-10, disjoint files.
- **Heroes:** ten files, all 1280x720. The minimum distance is 8 on a yogurt bowl against a clipboard;
  every nearest neighbour was opened and none is a crop. The trans-fat hero is a US nutrition label in
  English, described honestly in the alt.
- Commits: pages `d458d41`, `c3474ea`, `c56eba5`, `815fde5`, `0c440b8`, `7c6f151`, `28c7e49`, `42b475c`,
  `df68915`, `39f7425`.
