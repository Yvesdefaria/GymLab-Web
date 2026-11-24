# Content library — batch 72

Started: 2026-11-24. Continues the library from 711/792 after batch 71
(`odd/tasks/content-pages.md`).

Objective: `marisco-minerales-proteinas` to `dieta-de-hipertrofia-muscular`, as ten bilingual pairs.
Library 711 → 721. This batch closes Nutrición Aplicada's food rows and opens Dietas de volumen.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Sources: `...\content\nutricion\nutricion-aplicada\` (pages 1-8) and
  `...\content\nutricion\dietas-de-volumen-muscular\` (pages 9-10)
- Depends on batches 60-71.

## Tasks

- [x] T1 Scope, conflicts and house rules written (this document).
- [x] T2 Writer A: pages 1-5, ES + EN + heroes.
- [x] T3 Writer B: pages 6-10, ES + EN + heroes.
- [x] T4 Routes registered in `astro.config.mjs` and `scripts/check-i18n.mjs`.
- [x] T5 Parent gates, link check, render pass, dHash pass, per-page commits, checklist and handoff.

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `marisco-minerales-proteinas` | `shellfish-nutrition` | `marisco-minerales-proteinas.md` | 656 | marisco | |
| 2 | `problema-raciones-de-comida` | `portion-sizes` | `problema-raciones-de-comida.md` | 958 | tamaño de las raciones | |
| 3 | `como-identificar-y-evitar-una-dieta-milagro` | `fad-diets` | `como-identificar-y-evitar-una-dieta-milagro.md` | 561 | dieta milagro | |
| 4 | `sustituir-batidos-por-comida-natural` | `shakes-vs-whole-foods` | `sustituir-batidos-por-comida-natural.md` | 340 | batidos proteicos | |
| 5 | `frutos-secos` | `nuts-nutrition` | `frutos-secos.md` | 540 | frutos secos | |
| 6 | `combinaciones-de-alimentos-saludables-y-no-saludables` | `food-combinations` | `combinaciones-de-alimentos-saludables-y-no-saludables.md` | 717 | combinaciones de alimentos | |
| 7 | `alubias-excelente-alimento-para-tus-musculos` | `beans-for-muscle` | `alubias-excelente-alimento-para-tus-musculos.md` | 529 | alubias | |
| 8 | `comer-carne-roja` | `red-meat` | `comer-carne-roja.md` | 1,428 | carne roja | |
| 9 | `programa-de-entrenamiento-para-aumentar-testosterona` | `testosterone-training` | `programa-de-entrenamiento-para-aumentar-testosterona.md` | 2,802 | entrenamiento y testosterona | |
| 10 | `dieta-de-hipertrofia-muscular` | `muscle-hypertrophy-diet` | `dieta-de-hipertrofia-muscular.md` | 1,538 | dieta de hipertrofia | |

Pages 1-8: `block: "Entrenamiento"` (`Training`), `section: "Nutrición aplicada"`
(`Applied nutrition`). Pages 9-10: `block: "Entrenamiento"` (`Training`),
`section: "Dietas de volumen"` (`Bulking diets`). All: `updated: "2026-11-24"`.

## House rules (binding, YMYL)

1. **No purchase CTAs, affiliate links, shop names, brand names or "best" rankings.**
2. **No medical claims.** Shellfish, red meat and cancer risk stay inside what cohort studies show,
   with the qualifier kept. No supplement is recommended.
3. **No invented doses or protocols.** Protein 1.6-2.2 g/kg; the hypertrophy surplus is 350-500 kcal
   and 0.25-0.5 kg/week; no supplement dose appears except in arithmetic the reader can check.
4. **No diagnosis or treatment.** Gout and hypertension are conditions the reader takes to a doctor;
   the page explains the purine and sodium limits, never a treatment plan.
5. **No "cure", "detox" or "hormone optimisation" framing.** No testosterone number is promised.
6. **No athlete photos, no before/after imagery.**

## Conflicts the batch settles (binding)

1. **Shellfish is low-fat protein plus zinc and iodine, with two limits.** Keep the per-100 g protein
   and the portion (125-150 g raw, 2-3 servings a week). Delete crab vitamin C, lobster calcium and
   the osteoporosis claim, B12 "protects against colon cancer", tryptophan for insomnia, tyrosine for
   "mental capacity", and the cardiovascular and cancer prevention claims. Add the salt and purine
   limits (gout, hypertension). Do not repeat the fish mercury rule: link it.
2. **Portion creep is real; the fix is calibration, not willpower.** Keep the 1989-96 +1/3 finding and
   the restaurant cut at 2-4 portions. Present the muffin and bagel figures as the NHLBI teaching
   example, not as a trial. Delete the direct osteoporosis and hypertension consequences: name weight
   and sodium. Add hand, plate and glass anchors.
3. **A fad diet has five red flags.** Keep the checklist: excludes a food group, fixates on one food,
   very low calorie, discourages exercise, promises fast loss. Soften "si y solo si" to direction
   rather than rate. Keep the weight-loss supplement warning (stimulants, hypertension) with no
   product and no dose.
4. **Shakes are a tool, not a base.** Three swaps (breakfast, lunch, dinner) and the cases where a
   shake still wins: time, appetite, travel. Keep the yolk: deleting it discards vitamin D, choline
   and half the protein. Say "dietista-nutricionista" for the professional. No purchase CTA.
5. **Nuts are the densest whole food in the cupboard.** One table per 100 g, split into nuts and dried
   fruit, with the chestnut marked dried. Delete "second richest protein food", the isoflavone cancer
   and osteoporosis claims and the wrong lysine/methionine line: nuts are low in lysine, methionine is
   usually adequate. Fix "not recommended while cutting": a weighed 20-30 g portion fits.
6. **Food combining is audited rule by rule.** Keep two mechanisms: vitamin C with plant iron, and
   large fatty meals slowing gastric emptying. Delete fermentation and putrefaction in the stomach,
   the milk film around meat, sugar waiting in the stomach, protein-mixing hindrance and the reversed
   iron/calcium line. Link the canonical page and do not re-argue it.
7. **Beans are cheap protein and fibre with an honest limit.** Keep the per-cup table; fix the
   "habas" section, which is red kidney beans, not broad beans. Delete folate for muscle development,
   magnesium for reaching failure, the anthocyanin cancer claim and "don't eat beans post-workout".
   Keep fibre, gas and the incomplete amino-acid profile.
8. **Red meat: buy by cut, and separate fresh from processed.** Replace the cut table (filet mignon is
   one of the leanest cuts, not 592 kcal). Delete carnitine "supplying BCAAs", CLA as an antioxidant,
   zinc as an antioxidant and the alanine paragraph. Keep creatine and the 22 g protein per 100 g.
   IARC Group 2A is red meat; Group 1 is processed meat.
9. **The testosterone page is a strength block, not hormone therapy.** Publish the 6-week low-rep,
   long-rest, twice-a-week split and the food plan. Delete "máquina anabólica", "nivel óptimo",
   "impacto drástico", the fabricated dietary-cholesterol study, the 2:1 carb:protein ratio and the
   unsourced 10-15 % and T:cortisol figures. State that training produces small, transient hormonal
   changes that do not determine growth. Reconcile with the published `grasa-y-testosterona` page.
   No TRT dose, no cycle, no sourcing.
10. **Hypertrophy is a small surplus held for months.** 350-500 kcal, 0.25-0.5 kg/week, protein
    1.6-2.2 g/kg, 8-12 reps at 60-80 % 1RM, 3-4 sessions a week. Delete "halve everything for women",
    the 900 g of lean tissue per week and the meal-timing absolutes. Say cooked or dry for every
    cereal and rice figure. Drop "5 almonds" precision.

## Global rules

1. Neutral Spanish with `tú`; zero vosotros, voseo or `usted`. Never the word `gym` in Spanish.
2. No first person, no newsletter CTAs, no supplement promotions, no athlete photos, no medical or rehab
   claims, no "Conclusión" section, no marketing headings.
3. Zero external links, `.md` links, `#` anchors, inline images, `▷`/`✔`, escaped asterisks, emoji
   artifacts, empty headings, manual TOCs, duplicate images, headings with no body.
4. Links only to pages that exist: the ten batch pages, any slug ticked under Nutrición in
   `odd/tasks/content-pages.md`, and these cross-block pages when useful: `ganar-masa-muscular`,
   `rutina-volumen-muscular-intermedios`, `como-empezar-a-entrenar-en-el-gimnasio`,
   `cuanto-dormir-para-progresar-en-el-gimnasio`, `sobreentrenamiento`. Never invent a slug.
5. Zero em dashes. Titles 45-60, descriptions 150-160, reciprocal `alternate`.
6. Tables: comparison and decision tables as `<table class="text-table">` with three columns. The
   calorie table, the cut table and the per-cup bean table are text tables.
7. Heroes: one unique per page, free licence only, 1280 px, >=1200 on disk, <250 KB, credit plus honest
   alt, dHash on the final crop. Open the closest hero; distance 0 is a duplicate and crops measure up
   to 14. Prefer product-free, person-free images.
8. Body 600-900 words per locale, table-inclusive under 1,150. Pages 4 (340), 7 (529), 3 (561), 5 (540)
   and 1 (656) need building up; page 9 stays under 1,000.
9. Mandatory intra-batch links: 1 -> 2, 5; 2 -> 1, 3; 3 -> 2, 4; 4 -> 5, 7; 5 -> 1, 6; 6 -> 4, 7;
   7 -> 2, 5; 8 -> 3, 6; 9 -> 10, 8; 10 -> 9, 4.

## Per page

### 1. Shellfish

- Protein per 100 g, zinc, iodine, B12, low fat; two limits: salt and purines (gout, hypertension);
  125-150 g raw, 2-3 servings a week. Delete the vitamin C, calcium, insomnia, "mental capacity" and
  cancer claims. Link `guia-definitiva-sobre-el-consumo-de-pescado`, `sushi-alimento-saludable-alto-en-proteinas`,
  page 2, page 5.
- English target: shellfish as low-fat protein, with the sodium and purine limits.

### 2. Portion sizes

- The +1/3 portion growth 1989-96; the restaurant cut at 2-4 portions; hand, plate and glass anchors;
  portions drive weight through energy, not directly through disease. Delete the diagnosis links and
  label the muffin and bagel numbers as teaching examples. Link `la-mejor-forma-de-controlar-lo-que-comes`,
  `calculo-calorico-mantenimiento`, `comer-deprisa-engorda`, page 1, page 3.

### 3. Fad diets

- Five red flags; the direction of weight loss is energy balance, the rate is water, glycogen and
  adherence; the supplement warning (stimulants, hypertension). Delete the duplicated verb and the
  absolute "si y solo si". Link `deficit-calorico-clave-para-perder-peso`, `mitos-dieta-saludable`,
  `necesitas-desintoxicarte`, `mejores-diureticos-naturales`, page 2, page 4.

### 4. Shakes versus food

- Three swaps with a real plate each: breakfast, lunch, dinner. Keep the yolk. Shakes still win for
  time, appetite and travel. No brand, no price, no "NUNCA" absolutism. Link `reemplazo-comidas`,
  `batidos-para-volumen-muscular`, `suplementos-proteina`, page 5, page 7.

### 5. Nuts

- One per-100 g table split into nuts and dried fruit; fat is ~50 % of weight; weighed 20-30 g portion;
  useful in a surplus, workable in a deficit. Delete the protein ranking and the isoflavone claims.
  Fix lysine/methionine. Link `grasas`, `calculo-calorico-mantenimiento`, `guia-productos-light`,
  page 1, page 6.

### 6. Food combinations

- Audit five rules and keep two: vitamin C with plant iron, and large fatty meals slowing gastric
  emptying. Delete fermentation, the milk film, protein mixing and the reversed iron/calcium line.
  Link `combinar-proteinas-carbohidratos`, `remediar-intolerancia-lactosa`, page 4, page 7.

### 7. Beans

- Per-cup table for black beans, pinto, chickpeas, red kidney beans and black-eyed peas; fix the
  "habas" label. Fibre and gas are the real limit; the protein is incomplete but useful in a mixed
  diet. Delete folate/magnesium mechanisms and the post-workout ban. Link `legumbres-beneficiosas-dieta`,
  `lenteja-dieta`, page 2, page 5.

### 8. Red meat

- Cut by cut: fat varies about fourfold. 100 g lean beef is ~22 g protein; creatine is real. Separate
  fresh red meat (IARC 2A) from processed meat (Group 1) and from cooking-method HCAs. Delete the
  carnitine, CLA, zinc and alanine mechanisms. Link `carne-culturismo`,
  `evita-los-agentes-cancerigenos-de-la-carne`, `mejores-embutidos-para-la-dieta`, page 3, page 6.

### 9. Testosterone and training

- The 6-week block: low reps, long rests, each muscle twice a week, 45 kcal/kg and 1.6-2.2 g protein/kg
  with the arithmetic shown. Training causes small, transient hormonal changes; it does not optimise
  testosterone. Delete the cholesterol study and the 2:1 ratio. No TRT, no cycle. Link
  `grasa-y-testosterona`, `tribulus-terrestris`, `esteroides`, `cuanto-dormir-para-progresar-en-el-gimnasio`,
  `sobreentrenamiento`, page 10.

### 10. Hypertrophy diet

- One full day of meals on a 350-500 kcal surplus, cooked weights stated, 0.25-0.5 kg/week, protein
  1.6-2.2 g/kg, 8-12 reps at 60-80 % 1RM. Delete "halve everything for women" and the timing absolutes.
  Link `calculo-calorias-masa-muscular`, `que-comer-para-ganar-masa-muscular`,
  `construir-masa-muscular-limpia`, `utilizar-la-ventana-anabolica`, page 9.

## Writer split

- **Writer A:** pages 1-5: `marisco-minerales-proteinas`, `problema-raciones-de-comida`,
  `como-identificar-y-evitar-una-dieta-milagro`, `sustituir-batidos-por-comida-natural`, `frutos-secos`,
  plus five heroes.
- **Writer B:** pages 6-10: `combinaciones-de-alimentos-saludables-y-no-saludables`,
  `alubias-excelente-alimento-para-tus-musculos`, `comer-carne-roja`,
  `programa-de-entrenamiento-para-aumentar-testosterona`, `dieta-de-hipertrofia-muscular`, plus five
  heroes.

## Hero shortlist

1. Clams and mussels on crushed ice at a fish counter.
2. The same meal plated small and large on a plain table.
3. A single cabbage on a kitchen scale.
4. A folded omelette with salad on a wooden table.
5. Four small bowls of unsalted almonds, walnuts, pistachios and hazelnuts in shell.
6. Rice, lemon-dressed steak and a glass of water on one plate.
7. Five small bowls of cooked beans of different colours in a row.
8. Five raw beef cuts on butcher paper.
9. A loaded barbell on a rack in an empty gym, morning light.
10. A day of meals plated on a table seen from above.

## Verification

```powershell
npm run check:copy   # expected 36,771
npm run build        # expected 1,458 pages
npm run check:i18n   # expected 22,692, 1,454 sitemap URLs
```

Parent checks beyond the gates: every internal link resolves, zero em dashes, no BOM, dHash over all
heroes, 140 page/width pairs with no clipped cell.

## Result (2026-11-24)

- 10 bilingual pairs, 20 files, 10 heroes. Library 711 → **721 / 792**. Nutrición **148/191**;
  Nutrición Aplicada 98/111; Dietas de volumen 2/13.
- Gates: `check:copy` **36,771/36,771**, build **1,458 pages**, `check:i18n` **22,692/22,692**.
  Sitemap measured **1,455 URLs** because one batch 73 page was already on disk; the batch-72 clean
  count is 1,454.
- Structural checks: 106 internal links, **0 broken**; 0 files with problems in the parent verifier,
  which covers word floor, title, description, alternate, BOM, em dash, register and hero size.
- **Corrections made:** shellfish is protein, zinc and iodine with salt and purine limits, not a
  vitamin C or calcium food; portion creep is real with hand and plate anchors, and the muffin numbers
  are the NHLBI teaching example; five red flags for a fad diet; shakes are a tool and the yolk stays;
  nuts split into nuts and dried fruit with the lysine line fixed; food combining audited and only two
  rules survive; the "habas" section is red kidney beans; the red-meat cut table rebuilt because filet
  mignon is the leanest cut; the testosterone page is a six-week strength block with no hormone
  promise and reconciles with `grasa-y-testosterona`; the hypertrophy day is a 350-500 kcal surplus at
  0.25-0.5 kg/week.
- **Fixed by the parent:** the two intra-batch links writer A had substituted because the targets were
  mid-write (`shakes` → `beans`, `nuts` → `food-combinations`) were restored in both locales. Page 9's
  H1 stays "Entrenamiento y testosterona: programa de seis semanas": the search phrase survives in the
  title and the lead, and the H1 no longer promises a hormone gain.
- **Writers:** A pages 1-5, B pages 6-10, disjoint files.
- **Heroes:** ten files, all 1280x720, 82-222 KB. The minimum distance is 12 (fad diets against a
  bench-press photo, opened and unrelated); five obvious candidates were rejected as existing heroes at
  distance 0-7.
- Commits: pages `24ddba2`, `0681480`, `49035e9`, `a0f6325`, `83c6bb9`, `8eff0ef`, `5a1078c`,
  `c09b9c0`, `36b1270`, `68b6b9f`; routes `b1676d2`.
