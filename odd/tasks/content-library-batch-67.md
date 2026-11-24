# Content library — batch 67

Started: 2026-11-24. Continues the library from 661/792 after batch 66
(`odd/tasks/content-pages.md`).

Objective: `sushi-alimento-saludable-alto-en-proteinas` to `carga-descarga-carbohidratos`, as ten
bilingual pairs. Library 661 → 671.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Sources: `...\content\nutricion\nutricion-aplicada\`
- Depends on batches 60-66.

## Tasks

- [x] T1 Scope, conflicts and house rules written (this document).
- [x] T2 Writer A: pages 1-5, ES + EN + heroes.
- [x] T3 Writer B: pages 6-10, ES + EN + heroes.
- [x] T4 Routes registered in `astro.config.mjs` and `scripts/check-i18n.mjs`.
- [x] T5 Parent gates, link check, render pass, dHash pass, per-page commits, checklist and handoff.

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `sushi-alimento-saludable-alto-en-proteinas` | `sushi-and-protein` | `sushi-alimento-saludable-alto-en-proteinas.md` | 480 | sushi y proteínas | |
| 2 | `comer-carne-positivo-por-esteroides` | `clenbuterol-in-meat` | `comer-carne-positivo-por-esteroides.md` | 471 | clembuterol en la carne | |
| 3 | `dietas-muy-bajas-en-carbohidratos-culturismo` | `low-carb-diets-for-bodybuilding` | `dietas-muy-bajas-en-carbohidratos-culturismo.md` | 1,251 | dietas bajas en carbohidratos | |
| 4 | `mejores-embutidos-para-la-dieta` | `cold-cuts-on-a-diet` | `mejores-embutidos-para-la-dieta.md` | 2,116 | embutidos en la dieta | |
| 5 | `proteinas` | `protein-guide` | `proteinas.md` | 2,120 | proteínas | |
| 6 | `caseina-suero-leche` | `casein-and-whey` | `caseina-suero-leche.md` | 754 | caseína y suero | |
| 7 | `consumo-excesivo-de-proteinas` | `too-much-protein` | `consumo-excesivo-de-proteinas.md` | 528 | exceso de proteínas | |
| 8 | `ciclado-carbohidratos` | `carb-cycling` | `ciclado-carbohidratos.md` | 3,722 | ciclado de carbohidratos | |
| 9 | `exceso-de-carbohidratos-se-convierte-en-grasa` | `carbs-into-fat` | `exceso-de-carbohidratos-se-convierte-en-grasa.md` | 1,052 | carbohidratos en grasa | |
| 10 | `carga-descarga-carbohidratos` | `carb-loading-and-depletion` | `carga-descarga-carbohidratos.md` | 1,486 | carga y descarga de carbohidratos | |

All: `block: "Entrenamiento"` (`Training`), `section: "Nutrición aplicada"` (`Applied nutrition`),
`updated: "2026-11-24"`.

## House rules (binding, YMYL)

1. **No purchase CTAs, affiliate links, shop names, brand names or "best" rankings.**
2. **No medical claims.** Kidney, liver, hormones, cholesterol, cancer and skin statements stay inside
   what trials in healthy adults support, with the qualifier kept.
3. **No invented numbers.** Protein 1.6-2.2 g/kg (ceiling about 2.4), 25-40 g per meal, carbohydrate
   3-5 g/kg for lifters, sodium under 2 g/day, 300-600 mg sodium/h in long hot sessions, 2.7 g of water
   per gram of glycogen. Anything else is described as unstudied.
4. **No steroid, clenbuterol or diuretic protocol, no injection schedule, no sourcing.** Page 2 is a
   contamination and doping-risk page; page 10 is a risk page.
5. **No water or sodium manipulation, no depletion protocol as advice.**
6. **No athlete photos, no before/after imagery.**

## Conflicts the batch settles (binding)

1. **Sushi is a rice vehicle with a protein garnish.** Count the rice: 2-3 nigiri carry 40-60 g of rice
   and refined carbohydrate with sugar and vinegar; the fish adds 10-15 g of protein. Delete "perfect
   bodybuilding food", "rice is a complex carbohydrate", the gari-digestion claim and the -20 °C home
   freezer claim (home freezers are about -18 °C). Keep the parasite caution and add pregnancy and
   immunosuppression.
2. **Clenbuterol in meat is a supply-chain and testing page.** Delete the injection schedule and the
   Primobolan brand. Keep what the residues are, the cardiovascular effects, no safe level, the WADA
   prohibition, supplement contamination and the "most positives are voluntary" nuance. Never a how-to.
3. **Low-carb is not evil; it is a poor fit for high-volume strength work.** Ketones are fuel, not waste.
   Delete "disorder", "blocks fat metabolism", bone loss, mitochondrial loss and the eating-disorder
   claim. Keep qualified notes on saturated fat, metabolism and libido. Practical: 100-150 g of
   carbohydrate around training for lifters; keto possible but adherence decides.
4. **Cured meat is salt and fat with a real cancer signal.** Processed meat is IARC Group 1; use it as a
   condiment, not a protein source. Delete the affiliate link, "no impediment", "less fat than fresh",
   the 50 % protein figure (that is energy share, not weight) and the calorie ranking. 30-35 g of protein
   per 100 g and 250-450 kcal per 100 g are the honest numbers.
5. **The protein hub is the home page for the topic.** 1.6-2.2 g/kg, ceiling about 2.4, 4 kcal/g, a table
   with protein per 100 g and calories. Delete the rat PEP table, the Gaine percentages, "more protein
   raises testosterone", myostatin and the PT voice. Kidney safety only for healthy adults; excess is
   stored as fat qualified.
6. **Casein and whey differ in speed, not in magic.** Milk is 80/20; whey peaks around 90 minutes,
   casein around 7 hours. Delete the cortisol claim, "milk makes children taller/IGF-1", the "whey
   causes insulin resistance" confusion and the casein IGF-1 line. Speed matters at the edges of the day.
7. **The real cost of excess protein is displacement, fibre and money, not renal failure.** Kidney damage
   is not demonstrated in healthy adults. Delete the acid-load bone and muscle claims, "acid prevents
   fat burning" and the organ-damage bullet list. Keep the calcium refutation, the 2.4 g/kg/10-day bone
   result and the food-quality point; who should ask a doctor (kidney disease).
8. **Carb cycling is calorie cycling with a calendar.** The weekly deficit decides; protein 1.6-2.2 g/kg;
   3-5 meals. Delete the 3.3 g/kg protein, the 6-7 meals for "absorption", the exogenous-insulin framing,
   "premature death", the brands and the notes "n del t". 50 % carbs post-workout qualified; somatotypes
   qualified.
9. **Carbs become fat mainly through surplus and appetite, not one insulin spike.** De novo lipogenesis
   is modest. Delete the 110 g glycogen figure, "insulin = fat storage", "high GI damages the body", the
   faster-adipocyte claim and the body-shaming line. Keep low GI as a tool.
10. **Loading and depletion is a stage trick with real risk.** Describe what competitors do, why water and
    sodium manipulation can cause cardiovascular and renal harm, glycogen holds about 2.7 g of water per
    gram, and 6 g/kg is a load. No dehydration steps, no sodium cut, no "best condition of your life".
    If a reader could copy a protocol, rewrite it.

## Global rules

1. Neutral Spanish with `tú`; zero vosotros, voseo or `usted`. Never the word `gym` in Spanish.
2. No first person, no newsletter CTAs, no supplement promotions, no athlete photos, no medical or rehab
   claims, no "Conclusión" section, no marketing headings.
3. Zero external links, `.md` links, `#` anchors, inline images, `▷`/`✔`, escaped asterisks, emoji
   artifacts, empty headings, manual TOCs, embedded videos, duplicate images, headings with no body.
4. Links only to existing pages: the ten batch pages, batches 60-66, the 18 supplement pages,
   `ganar-masa-muscular`, `como-ganar-peso`, `menos-grasa-mas-musculo`,
   `definicion-muscular-seis-dias`, `carbohidratos`, `engordan-los-hidratos-en-las-cenas`,
   `comida-post-entrenamiento`, `comida-pre-entrenamiento`, `comida-segun-hora-entrenar`,
   `utilizar-la-ventana-anabolica`, `cerezas-post-entrenamiento`,
   `insulina-y-culturismo-aliada-ganar-masa-muscular`, `calculo-calorias-masa-muscular`,
   `calculo-calorico-mantenimiento`, `deficit-calorico-clave-para-perder-peso`,
   `dieta-ideal-para-adelgazar-perder-peso`, `elaborar-dieta`,
   `nutricion-culturista-reglas-basicas`, `guia-basica-de-nutricion-culturista`,
   `requieren-los-deportistas-mas-proteinas`, `pros-y-contras-de-las-proteinas`,
   `proteinas-de-liberacion-sostenida-mezclas-proteicas`, `proteina-de-suero-elaboracion`,
   `mejor-proteina-nocturna`, `proteina-de-soja-contra-proteina-de-leche`,
   `suplementos-de-proteina-vegana`, `proteina-de-clara-de-huevo-aliada-para-mas-fuerza-y-menos-grasa`,
   `creatina-rinon`, `creatina-la-verdad`, `esteroides`, `tribulus-terrestris`,
   `carne-culturismo`, `legumbres-beneficiosas-dieta`, `remediar-intolerancia-lactosa`,
   `ayuno-intermitente`, `vino-es-realmente-saludable`, `suplementos-dieteticos`,
   `suplementacion-deportiva-alcanzar-objetivos`, `errores-al-tomar-suplementos`,
   `como-ser-disciplinado-dieta`, `comida-trampa`, `guia-definitiva-de-recomposicion-corporal`.
5. Zero em dashes. Titles 45-60, descriptions 150-160, reciprocal `alternate`.
6. Tables: comparison and decision tables as `<table class="text-table">` with three columns. The protein
   sources, the cured-meat numbers and the carb-cycling week are text tables.
7. Heroes: one unique per page, free licence only, 1280 px, >=1200 on disk, <250 KB, credit plus honest
   alt, dHash on the final crop. Open the closest hero; distance 0 is a duplicate and crops measure up
   to 14. Prefer product-free, person-free images, no drug imagery.
8. Body 600-900 words per locale, table-inclusive under 1,150. Pages 1 (480), 2 (471) and 7 (528) need
   rebuilding; page 5 may reach 1,000.
9. Mandatory intra-batch links: 1 -> 3, 5; 2 -> 14 (embutidos, published batch page), 15; 3 -> 5, 8;
   4 -> 8, 15; 5 -> 6, 7; 6 -> 5, 17; 7 -> 5, 6; 8 -> 9, 10; 9 -> 8, 10; 10 -> 8, 9. All ten link
   `errores-al-tomar-suplementos`. Use the ES slugs as they appear in the scope table.

## Per page

### 1. Sushi and protein

- Count the rice and the fish: 2-3 nigiri carry 40-60 g of rice, 10-15 g of protein; a roll adds sugar
  and vinegar. Practical order: sashimi or extra fish, rice counted, soy sauce measured.
- Delete "perfect bodybuilding food", "complex carbohydrate", gari digestion and -20 °C. Keep parasite,
  pregnancy and immunosuppression cautions. From 480 words reach 600.
- Link `dietas-muy-bajas-en-carbohidratos-culturismo` (page 3), `proteinas` (page 5),
  `carbohidratos`, `comida-post-entrenamiento`, `errores-al-tomar-suplementos`.

### 2. Clenbuterol in meat

- Risk page: residues in meat and liver, doping positives, cardiovascular effects, no safe level, WADA
  prohibition, supplement contamination, supply chain and testing. Delete the injection schedule and
  the brand. No how-to.
- Link `mejores-embutidos-para-la-dieta` (page 4), `proteinas` (page 5), `esteroides`,
  `carne-culturismo`, `errores-al-tomar-suplementos`.

### 3. Low-carb diets for bodybuilding

- Low-carb is a tool with a cost for high-volume strength work. Ketones are fuel. Practical range
  100-150 g around training; keto possible, adherence decides. From 1,251 words.
- Delete "disorder", "blocks fat metabolism", bone loss, mitochondrial loss and the eating-disorder
  claim. Qualify saturated fat, metabolism and libido.
- Link `proteinas` (page 5), `ciclado-carbohidratos` (page 8), `carbohidratos`,
  `ayuno-intermitente`, `errores-al-tomar-suplementos`.

### 4. Cold cuts on a diet

- Processed meat is IARC Group 1: a condiment, not a protein source. 30-35 g protein and 250-450 kcal per
  100 g; salt matters. Label reading per 100 g.
- Delete the affiliate, "no impediment", "less fat than fresh", the 50 % protein figure and the ranking.
- Link `ciclado-carbohidratos` (page 8), `proteinas` (page 5), `carne-culturismo`,
  `guia-basica-de-nutricion-culturista`, `errores-al-tomar-suplementos`.

### 5. Protein guide

- Hub: 1.6-2.2 g/kg, ceiling about 2.4, 4 kcal/g, sources per 100 g and calories, timing and spread.
  Kidney safety only for healthy adults.
- Delete the rat PEP table, the Gaine percentages, "more protein raises testosterone", myostatin and the
  PT voice.
- Link `caseina-suero-leche` (page 6), `consumo-excesivo-de-proteinas` (page 7),
  `requieren-los-deportistas-mas-proteinas`, `pros-y-contras-de-las-proteinas`,
  `suplementos-proteina`, `errores-al-tomar-suplementos`.

### 6. Casein and whey

- Milk is 80/20; whey peaks about 90 minutes, casein about 7 hours; speed matters at the edges of the
  day. Total protein still decides.
- Delete cortisol, "milk makes children taller/IGF-1", "whey causes insulin resistance" and the casein
  IGF-1 line.
- Link `proteinas` (page 5), `consumo-excesivo-de-proteinas` (page 7), `mejor-proteina-nocturna`,
  `proteina-de-suero-elaboracion`, `remediar-intolerancia-lactosa`, `errores-al-tomar-suplementos`.

### 7. Too much protein

- The real cost: displacement, fibre and money. Kidney damage is not demonstrated in healthy adults;
  kidney disease must ask a doctor. From 528 words.
- Delete the acid-load bone and muscle claims, "acid prevents fat burning" and the organ-damage bullets.
- Link `proteinas` (page 5), `caseina-suero-leche` (page 6),
  `requieren-los-deportistas-mas-proteinas`, `creatina-rinon`, `errores-al-tomar-suplementos`.

### 8. Carb cycling

- Calorie cycling with a calendar: high/low days, weekly average, protein 1.6-2.2 g/kg, 3-5 meals. A
  worked week with numbers.
- Delete 3.3 g/kg, 6-7 meals, the insulin framing, "premature death", brands and the "n del t" notes.
- Link `exceso-de-carbohidratos-se-convierte-en-grasa` (page 9),
  `carga-descarga-carbohidratos` (page 10), `carbohidratos`,
  `calculo-calorias-masa-muscular`, `errores-al-tomar-suplementos`.

### 9. Carbs into fat

- De novo lipogenesis is modest; surplus and appetite do the work. Insulin is not a fat-storage switch.
  Low GI is a tool, not a moral test.
- Delete the 110 g glycogen figure, "insulin = fat", "high GI damages the body", the faster-adipocyte
  claim and the body-shaming line.
- Link `ciclado-carbohidratos` (page 8), `carga-descarga-carbohidratos` (page 10),
  `carbohidratos`, `engordan-los-hidratos-en-las-cenas`,
  `insulina-y-culturismo-aliada-ganar-masa-muscular`, `errores-al-tomar-suplementos`.

### 10. Carb loading and depletion

- Risk page: what competitors attempt, glycogen holds about 2.7 g of water per gram, 6 g/kg is a load,
  and water/sodium manipulation can cause cardiovascular and renal harm. No protocol; training taper
  and a plan you can repeat instead.
- Delete the depletion steps, the water cut, "best condition of your life" and the superlatives.
- Link `ciclado-carbohidratos` (page 8), `exceso-de-carbohidratos-se-convierte-en-grasa` (page 9),
  `definicion-muscular-seis-dias`, `toque-final-competir`, `carbohidratos`,
  `errores-al-tomar-suplementos`.

## Writer split

- **Writer A:** pages 1-5: `sushi-alimento-saludable-alto-en-proteinas`,
  `comer-carne-positivo-por-esteroides`, `dietas-muy-bajas-en-carbohidratos-culturismo`,
  `mejores-embutidos-para-la-dieta`, `proteinas`, plus five heroes.
- **Writer B:** pages 6-10: `caseina-suero-leche`, `consumo-excesivo-de-proteinas`,
  `ciclado-carbohidratos`, `exceso-de-carbohidratos-se-convierte-en-grasa`,
  `carga-descarga-carbohidratos`, plus five heroes.

## Hero shortlist

1. Nigiri on slate, no brands, or nori sheets.
2. Packaged chicken in a chiller, no brands, or empty sample tubes. Never the drug.
3. Eggs, avocado and olive oil, or an empty pasta bowl.
4. Sliced cured ham on wood, no brands, or a generic charcuterie spread.
5. Eggs and fish on a board, or dry legumes in bowls.
6. Curd in a dark bowl, or milk poured into a glass.
7. A water glass on a plain table, or a plain plate with cutlery.
8. Three bowls of rice, small/medium/large.
9. A bowl of cooked white rice, or oats in a jar.
10. A plain pasta bowl, or a kitchen scale and a cup.

## Verification

```powershell
npm run check:copy   # expected 34,221
npm run build        # expected 1,358 pages
npm run check:i18n   # expected 21,142, 1,354 sitemap URLs
```

Parent checks beyond the gates: every internal link resolves, zero em dashes, no BOM, dHash over all
heroes, 140 page/width pairs with no clipped cell.

## Result (2026-11-24)

- 10 bilingual pairs, 20 files, 10 heroes. Library 661 → **671 / 792**. Nutrición **98/191**.
- Gates: `check:copy` **34,221/34,221**, build **1,358 pages**, `check:i18n` **21,142/21,142**, sitemap
  **1,354 URLs** with 4,062 alternates.
- Structural checks: 114 internal links, **0 broken**; zero em dashes; no BOM; 140 page/width pairs with
  **0 clipped cells**.
- **Corrections made:** sushi is a rice vehicle; clenbuterol in meat is a contamination and doping-risk
  page with no protocol; low-carb is a tool, not a disorder; cured meat is a condiment under IARC Group
  1; the protein hub carries 1.6-2.2 g/kg and real sources; casein and whey differ in speed; excess
  protein costs money and fibre, not kidneys; carb cycling is calorie cycling; de novo lipogenesis is
  modest; loading and depletion is published as risk.
- **Fixed by the parent:** nothing content-side. Writers corrected their own short descriptions before
  close.
- **Writers:** A pages 1-5, B pages 6-10, disjoint files.
- **Heroes:** ten files, all 1280x720. The minimum distance is 14 on a water glass against a lat
  pulldown; every nearest neighbour was opened and none is a crop.
- Commits: pages `7e1c637`, `54a39c9`, `4115646`, `0ecd480`, `d38cdb3`, `769c768`, `8bb452a`, `78c3dfd`,
  `249b237`, `5b58848`.
