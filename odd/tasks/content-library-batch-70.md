# Content library — batch 70

Started: 2026-11-24. Continues the library from 691/792 after batch 69
(`odd/tasks/content-pages.md`).

Objective: `tortas-de-arroz` to `alimentos-congelados-son-beneficiosos`, as ten bilingual pairs.
Library 691 → 701.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Sources: `...\content\nutricion\nutricion-aplicada\`
- Depends on batches 60-69.

## Tasks

- [x] T1 Scope, conflicts and house rules written (this document).
- [x] T2 Writer A: pages 1-5, ES + EN + heroes.
- [x] T3 Writer B: pages 6-10, ES + EN + heroes.
- [x] T4 Routes registered in `astro.config.mjs` and `scripts/check-i18n.mjs`.
- [x] T5 Parent gates, link check, render pass, dHash pass, per-page commits, checklist and handoff.

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `tortas-de-arroz` | `rice-cakes` | `tortas-de-arroz.md` | 428 | tortitas de arroz | |
| 2 | `alimentos-transgenicos` | `gmo-foods` | `alimentos-transgenicos.md` | 3,657 | alimentos transgénicos | |
| 3 | `comer-deprisa-engorda` | `eating-fast-and-weight` | `comer-deprisa-engorda.md` | 542 | comer deprisa | |
| 4 | `alcohol-el-enemigo-a-evitar` | `alcohol-and-training` | `alcohol-el-enemigo-a-evitar.md` | 3,440 | alcohol y entrenamiento | |
| 5 | `sexo-rendimiento-deportivo` | `sex-and-athletic-performance` | `sexo-rendimiento-deportivo.md` | 1,116 | sexo y rendimiento | |
| 6 | `dividir-comidas-dieta` | `how-to-split-meals` | `dividir-comidas-dieta.md` | 985 | dividir las comidas | |
| 7 | `cuanta-energia-calorias-necesita-nuestro-cuerpo` | `daily-energy-needs` | `cuanta-energia-calorias-necesita-nuestro-cuerpo.md` | 969 | calorías diarias | |
| 8 | `fruta-cortada-propiedades` | `cut-fruit-nutrients` | `fruta-cortada-propiedades.md` | 534 | fruta cortada | |
| 9 | `antioxidantes-sinteticos-veneno-alimentos` | `synthetic-antioxidants` | `antioxidantes-sinteticos-veneno-alimentos.md` | 498 | antioxidantes sintéticos | |
| 10 | `alimentos-congelados-son-beneficiosos` | `frozen-foods` | `alimentos-congelados-son-beneficiosos.md` | 789 | alimentos congelados | |

All: `block: "Entrenamiento"` (`Training`), `section: "Nutrición aplicada"` (`Applied nutrition`),
`updated: "2026-11-24"`.

## House rules (binding, YMYL)

1. **No purchase CTAs, affiliate links, shop names, brand names or "best" rankings.**
2. **No medical claims.** Cancer, liver, fertility, sleep and body-weight statements stay inside what
   trials in healthy adults support, with the qualifier kept.
3. **No invented numbers.** Food energy 4/4/9/7 kcal per g (protein/carb/fat/alcohol), protein
   1.6-2.2 g/kg and 25-40 g per meal, ADI as the reference for additives, 7-10 % for the thermic effect.
4. **No megadose, no detox, no sobering trick, no "GMO poison" framing.**
5. **No athlete photos, no before/after imagery.**

## Conflicts the batch settles (binding)

1. **Rice cakes are 30 kcal of air with a high GI.** They fit before or during training, not as a meal;
   satiety is near zero and the topping decides. The archive's nutrition panel is a chocolate-coated
   product, not plain cakes. Delete "a bomb for the arteries", the GI 110 as fact and the competitor
   attribution.
2. **GMOs: evidence and label, trait by trait.** Bt specificity (receptors in Lepidoptera), herbicide
   tolerance and residues against the ADI, EU labelling, consensus bodies. Delete the 44-brand blacklist,
   the 200x residue claim, the 37 dead, the +50 % allergies, the "one mutation" fantasy and the company
   names. Keep the Bt safety line with its receptor qualifier.
3. **Eating fast: the 20-minute satiety window is real, the weight effect is modest.** Protein, fibre
   and volume do more. Delete the medieval-doctrine framing and the causal leap from hormones to weight.
4. **Alcohol: 7 kcal/g, fragmented sleep, lower post-session protein synthesis.** Count units, no
   sobering tricks. Delete the 5,000 mg vitamin E tip (five times the UL), the liver-water line, the
   beer-silicic-aluminium claim, lecithin for cirrhosis, the 0.1 % "legally drunk" line, the billion
   mistranslations and the 20-martini arithmetic. Do not duplicate the wine or creatine pages.
5. **Sex before competition: no measurable effect on strength, aerobic capacity or VO2max.** The risk is
   the night around it (alcohol, sleep loss). Delete the testosterone-muscle promise, the 24-hour pain
   transmitter, the toy claim and the unnamed experts.
6. **Meal splitting: total intake, 25-40 g of protein per meal and schedule fit.** Delete nocturnal
   storage, "breakfast must be the biggest", "vegetables have no calories", 0.5 g/kg per snack, the
   20-minute window and the fixed six meals.
7. **Energy needs: BMR, thermic effect and activity, with NEAT as the wild card.** The published page
   already has Mifflin-St Jeor, so this one is "why your calculator fails" (adaptation, logging error,
   NEAT), not a second formula. Delete "increase your metabolism" and the broken relative links; fix the
   vosotros form.
8. **Cut fruit loses some vitamin C, not its identity.** Six days at 5 °C: vitamin C down 5-25 % by
   fruit, carotenoids down 10-25 %. Delete the cancer claims, the bromelain joint claim, the CEBAS typo
   and qualify "more vitamin C than oranges".
9. **Additives: the E number is a safety list, not a poison list.** ADI, EFSA re-evaluation, BHA in IARC
   2B at high doses in rodents, natural antioxidants are E numbers too. Delete "poison", the fabricated
   5 %, the x10 claim and the arbitrary innocuous/dangerous table.
10. **Frozen food is a cold-chain story.** Blanching inactivates enzymes; frozen spinach can beat
    store-held fresh for beta-carotene; canned food has no preservatives, only heat. Delete the retired
    "American Dietetic Association" as a pesticide source and the 3-day threshold as a law.

## Global rules

1. Neutral Spanish with `tú`; zero vosotros, voseo or `usted`. Never the word `gym` in Spanish.
2. No first person, no newsletter CTAs, no supplement promotions, no athlete photos, no medical or rehab
   claims, no "Conclusión" section, no marketing headings.
3. Zero external links, `.md` links, `#` anchors, inline images, `▷`/`✔`, escaped asterisks, emoji
   artifacts, empty headings, manual TOCs, embedded videos, duplicate images, headings with no body.
4. Links only to existing pages: the ten batch pages, batches 60-69, the 18 supplement pages,
   `carbohidratos`, `guia-productos-light`, `cenar-verdura`, `comida-pre-entrenamiento`,
   `comida-post-entrenamiento`, `comida-segun-hora-entrenar`, `utilizar-la-ventana-anabolica`,
   `elaborar-dieta`, `calculo-calorico-mantenimiento`, `calculo-calorias-masa-muscular`,
   `deficit-calorico-clave-para-perder-peso`, `engordan-los-hidratos-en-las-cenas`,
   `ayuno-intermitente`, `alcohol-creatina`, `vino-es-realmente-saludable`,
   `cuanto-dormir-para-progresar-en-el-gimnasio`, `regeneracion-muscular`,
   `recuperacion-activa-entrenamiento`, `grasa-y-testosterona`, `esteroides`,
   `necesitas-desintoxicarte`, `sistema-inmune-con-vitaminas`, `vitaminas-minerales-para-el-gimnasio`,
   `dieta-antiinflamatoria-claves-y-beneficios`, `grasas-transaturadas`, `carne-culturismo`,
   `cocinar-pollo-jugoso`, `mejores-embutidos-para-la-dieta`, `prepara-tu-cocina-para-una-dieta-anabolica`,
   `almuerzos-saludables-altos-en-proteinas`, `cerezas-post-entrenamiento`,
   `verdura-masa-muscular`, `legumbres-beneficiosas-dieta`, `proteinas`,
   `errores-al-tomar-suplementos`, `errores-a-evitar-en-la-dieta`, `como-ser-disciplinado-dieta`.
5. Zero em dashes. Titles 45-60, descriptions 150-160, reciprocal `alternate`.
6. Tables: comparison and decision tables as `<table class="text-table">` with three columns. The rice
   cake numbers, the alcohol units, the energy components and the additive table are text tables.
7. Heroes: one unique per page, free licence only, 1280 px, >=1200 on disk, <250 KB, credit plus honest
   alt, dHash on the final crop. Open the closest hero; distance 0 is a duplicate and crops measure up
   to 14. Prefer product-free, person-free images.
8. Body 600-900 words per locale, table-inclusive under 1,150. Pages 1 (428), 3 (542), 8 (534) and 9
   (498) need rebuilding; page 4 may reach 1,000.
9. Mandatory intra-batch links: 1 -> 2, 3; 2 -> 3, 4; 3 -> 4, 5; 4 -> 5, 10; 5 -> 4, 6;
   6 -> 7, 8; 7 -> 6, 10; 8 -> 6, 9; 9 -> 8, 10; 10 -> 1, 9. All ten link
   `errores-al-tomar-suplementos`.

## Per page

### 1. Rice cakes

- 30 kcal of air with a high GI; pre/intra-training carb, not a meal; satiety near zero, the topping
  decides. Correct the panel: the archive's numbers are a chocolate-coated product. Delete "bomb for the
  arteries" and the competitor attribution.
- Link `gmo-foods` (page 2), `eating-fast-and-weight` (page 3), `carbohidratos`,
  `comida-pre-entrenamiento`, `guia-productos-light`, `errores-al-tomar-suplementos`.

### 2. GMO foods

- Evidence and label, trait by trait: Bt specificity, herbicide tolerance and residues against the ADI,
  EU labelling, consensus bodies. Delete the 44-brand list, the 200x residue, the 37 dead, the +50 %
  allergies, the mutation fantasy and the company names.
- Link `eating-fast-and-weight` (page 3), `alcohol-and-training` (page 4),
  `guia-productos-light`, `necesitas-desintoxicarte`, `sistema-inmune-con-vitaminas`,
  `errores-al-tomar-suplementos`.

### 3. Eating fast and weight

- The 20-minute satiety window is real; protein, fibre and volume do more. Practical levers: fork down,
  water, no screens, a smaller plate. Delete the medieval framing and the causal leap.
- Link `alcohol-and-training` (page 4), `sex-and-athletic-performance` (page 5),
  `como-ser-disciplinado-dieta`, `comida-segun-hora-entrenar`, `errores-a-evitar-en-la-dieta`,
  `errores-al-tomar-suplementos`.

### 4. Alcohol and training

- 7 kcal/g, fragmented sleep, lower post-session protein synthesis; units, no sobering tricks. Delete
  the 5,000 mg vitamin E tip, liver water, beer-silicic-aluminium, lecithin, 0.1 % drunk, the billion
  errors and the martini arithmetic. Do not duplicate the wine or creatine pages.
- Link `sex-and-athletic-performance` (page 5), `frozen-foods` (page 10), `alcohol-creatina`,
  `vino-es-realmente-saludable`, `cuanto-dormir-para-progresar-en-el-gimnasio`,
  `errores-al-tomar-suplementos`.

### 5. Sex and athletic performance

- No measurable effect on strength, aerobic capacity or VO2max; the risk is the night around it.
- Delete the testosterone-muscle promise, the 24-hour pain transmitter, the toy claim and the unnamed
  experts.
- Link `alcohol-and-training` (page 4), `how-to-split-meals` (page 6), `grasa-y-testosterona`,
  `cuanto-dormir-para-progresar-en-el-gimnasio`, `recuperacion-activa-entrenamiento`,
  `errores-al-tomar-suplementos`.

### 6. How to split meals

- Total intake, 25-40 g of protein per meal and schedule fit; 3-5 meals, not a law. Delete nocturnal
  storage, "breakfast must be the biggest", "vegetables have no calories", 0.5 g/kg per snack and the
  20-minute window. Fix the vosotros form.
- Link `daily-energy-needs` (page 7), `cut-fruit-nutrients` (page 8), `elaborar-dieta`,
  `comida-segun-hora-entrenar`, `engordan-los-hidratos-en-las-cenas`, `ayuno-intermitente`,
  `errores-al-tomar-suplementos`.

### 7. Daily energy needs

- BMR, thermic effect 7-10 % and activity, with NEAT as the wild card. "Why your calculator fails":
  adaptation, logging error, NEAT. Do not duplicate the Mifflin formula.
- Delete "increase your metabolism" and the broken relative links; fix the vosotros form.
- Link `how-to-split-meals` (page 6), `frozen-foods` (page 10), `calculo-calorico-mantenimiento`,
  `calculo-calorias-masa-muscular`, `deficit-calorico-clave-para-perder-peso`, `elaborar-dieta`,
  `errores-al-tomar-suplementos`.

### 8. Cut fruit nutrients

- Six days at 5 °C: vitamin C down 5-25 % by fruit, carotenoids down 10-25 %; appearance changes before
  nutrition. Storage and containers. Delete the cancer claims, the bromelain joint claim and the CEBAS
  typo; qualify "more vitamin C than oranges".
- Link `how-to-split-meals` (page 6), `synthetic-antioxidants` (page 9), `cenar-verdura`,
  `cerezas-post-entrenamiento`, `vitaminas-minerales-para-el-gimnasio`,
  `errores-al-tomar-suplementos`.

### 9. Synthetic antioxidants

- The E number is a safety list, not a poison list: ADI, EFSA re-evaluation, BHA in IARC 2B at high
  doses in rodents, natural antioxidants are E numbers too. Delete "poison", the fabricated 5 %, the
  x10 claim and the arbitrary table.
- Link `cut-fruit-nutrients` (page 8), `frozen-foods` (page 10), `guia-productos-light`,
  `necesitas-desintoxicarte`, `dieta-antiinflamatoria-claves-y-beneficios`,
  `errores-al-tomar-suplementos`.

### 10. Frozen foods

- Cold chain and blanching; frozen spinach can beat store-held fresh for beta-carotene; canned food has
  no preservatives. What to check on the label. Delete the retired American Dietetic Association as a
  pesticide source and the 3-day law.
- Link `rice-cakes` (page 1), `synthetic-antioxidants` (page 9),
  `prepara-tu-cocina-para-una-dieta-anabolica`, `cocinar-pollo-jugoso`,
  `almuerzos-saludables-altos-en-proteinas`, `errores-al-tomar-suplementos`.

## Writer split

- **Writer A:** pages 1-5: `tortas-de-arroz`, `alimentos-transgenicos`, `comer-deprisa-engorda`,
  `alcohol-el-enemigo-a-evitar`, `sexo-rendimiento-deportivo`, plus five heroes.
- **Writer B:** pages 6-10: `dividir-comidas-dieta`,
  `cuanta-energia-calorias-necesita-nuestro-cuerpo`, `fruta-cortada-propiedades`,
  `antioxidantes-sinteticos-veneno-alimentos`, `alimentos-congelados-son-beneficiosos`, plus five
  heroes.

## Hero shortlist

1. Plain rice cakes on slate, no packaging.
2. Maize kernels macro, or a seedling and a pipette.
3. A fork resting on an empty plate with a clock.
4. An unlabelled wine glass on dark wood, or empty glasses.
5. An empty athletics track at dawn.
6. Three meal-prep containers, no hands.
7. A kitchen scale and a notebook.
8. Cut watermelon and kiwi on a board.
9. A label close-up with E-numbers, brand masked.
10. Frozen peas macro with frost.

## Verification

```powershell
npm run check:copy   # expected 35,751
npm run build        # expected 1,418 pages
npm run check:i18n   # expected 22,072, 1,414 sitemap URLs
```

Parent checks beyond the gates: every internal link resolves, zero em dashes, no BOM, dHash over all
heroes, 140 page/width pairs with no clipped cell.

## Result (2026-11-24)

- 10 bilingual pairs, 20 files, 10 heroes. Library 691 → **701 / 792**. Nutrición **128/191**.
- Gates: `check:copy` **35,751/35,751**, build **1,418 pages**, `check:i18n` **22,072/22,072**, sitemap
  **1,414 URLs** with 4,242 alternates.
- Structural checks: 130 internal links, **0 broken**; zero em dashes; no BOM; 140 page/width pairs with
  **0 clipped cells**.
- **Corrections made:** rice cakes are 30 kcal of air; GMOs are evidence and label, trait by trait, with
  no brand blacklist; eating fast has a real 20-minute window but a modest weight effect; alcohol is
  7 kcal/g, sleep and protein synthesis, with no sobering tricks; sex has no measurable performance
  effect; meal splitting is total plus 25-40 g per meal; energy needs is "why your calculator fails";
  cut fruit loses some vitamin C, not its identity; additives are a safety list, not a poison list;
  frozen food is a cold-chain story.
- **Fixed by the parent:** nothing content-side; the writers fixed their own descriptions before close.
- **Writers:** A pages 1-5, B pages 6-10, disjoint files.
- **Heroes:** ten files, all 1280x720. The minimum distance is 8 on a meal-prep tray and an additive
  bottle against unrelated images; every nearest neighbour was opened.
- Commits: pages `4c6da44`, `744fe9a`, `84e5691`, `6848f62`, `e3206f6`, `06df168`, `0b5cece`, `1b0865f`,
  `72db73b`, `6ccc643`.
