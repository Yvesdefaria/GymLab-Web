# Content library — batch 76

Started: 2026-11-25. Continues the library from 751/792 after batch 75
(`odd/tasks/content-pages.md`).

Objective: `salvado-de-avena-perder-peso` to `sulforafano`, as ten bilingual pairs.
Library 751 → 761. This batch closes Alimentos funcionales at 12/12.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Sources: `...\content\nutricion\alimentos-funcionales\`
- Depends on batch 75.

## Tasks

- [x] T1 Scope, conflicts and house rules written (this document).
- [x] T2 Writer A: pages 1-5, ES + EN + heroes.
- [x] T3 Writer B: pages 6-10, ES + EN + heroes.
- [x] T4 Routes registered in `astro.config.mjs` and `scripts/check-i18n.mjs`.
- [x] T5 Parent gates, link check, render pass, dHash pass, per-page commits, checklist and handoff.

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `salvado-de-avena-perder-peso` | `oat-bran-for-weight-loss` | `salvado-de-avena-perder-peso.md` | 625 | salvado de avena | |
| 2 | `boniato-carbohidrato-perfecto` | `sweet-potato` | `boniato-carbohidrato-perfecto.md` | 1,020 | boniato | |
| 3 | `crema-de-cacahuete` | `peanut-butter` | `crema-de-cacahuete.md` | 1,742 | crema de cacahuete | |
| 4 | `aguacate-en-dieta-fitness-por-que-se-ha-ganado-su-sitio` | `avocado-in-your-diet` | `aguacate-en-dieta-fitness-por-que-se-ha-ganado-su-sitio.md` | 1,620 | aguacate | |
| 5 | `sepia-excelente-fuente-de-proteinas-para-el-culturista` | `cuttlefish` | `sepia-excelente-fuente-de-proteinas-para-el-culturista.md` | 1,118 | sepia proteínas | |
| 6 | `avena` | `oats` | `avena.md` | 1,198 | avena | |
| 7 | `pan-y-musculos` | `bread-and-muscle` | `pan-y-musculos.md` | 646 | pan y músculos | |
| 8 | `huevos-un-poderoso-alimento-para-tu-dieta` | `eggs` | `huevos-un-poderoso-alimento-para-tu-dieta.md` | 1,905 | huevos | |
| 9 | `sardina-dieta-fitness` | `sardines` | `sardina-dieta-fitness.md` | 1,064 | sardinas | |
| 10 | `sulforafano` | `sulforaphane` | `sulforafano.md` | 685 | sulforafano | |

All: `block: "Entrenamiento"` (`Training`), `section: "Alimentos funcionales"` (`Functional foods`),
`updated: "2026-11-25"`.

## Expected gates

- `check:copy`: 38,301 + 510 = **38,811**
- build: 1,517 + 20 = **1,537 pages**
- `check:i18n`: 23,622 + 310 = **23,932**, sitemap **1,534 URLs**

## Preservation policy (owner decision, 2026-11-25)

**Keep the archive's information wherever it survives as fact.** Correct the number, name the evidence
and change the angle; do not amputate the topic. Only these go outright: promotional or affiliate
links, newsletter CTAs, product or brand endorsements, and any claim that can harm a reader (a cancer
cure, a supplement protocol, "stop your medication").

When a section cannot stand as written, replace it with the nearest true version and say in one
sentence what changed and why. These ten pages are food pages: the food, the cooking and the shopping
advice stay; the medical promises go.

## House rules (binding, YMYL)

1. **No purchase CTAs, affiliate links, shop names, brand names or product comparisons.** A named
   supermarket, cereal or supplement disappears; the food stays.
2. **Food composition, not medicine.** Every per-100 g figure comes from a composition table and the
   source is named once (USDA FoodData Central or BEDCA). No "prevents cancer", no "protects from
   diabetes", no "cleans".
3. **Cooked and raw weights never mix.** Say which one the table uses.
4. **No supplement protocol.** A supplement dose appears only as arithmetic the reader can check
   against food.
5. **No antioxidant or detox framing.** Explain the mechanism and its real size.

## Conflicts the batch settles (binding)

1. **Oat bran is a beta-glucan concentrate.** Keep the fibre and calorie arithmetic and the kitchen
   uses. About 3 g of beta-glucan a day lowers LDL, and 40 g of dry oat bran carries roughly 6 g of
   fibre, so the dose is reachable with one or two servings. Correct "cascarilla" (the hull is removed;
   bran is the outer layer), drop the "swells 20-30 times" claim and the diabetes and colon-cancer
   prevention. It is not a sponge that cleans the intestine.
2. **Sweet potato is a potassium and beta-carotene carbohydrate.** Keep the nutrition table, the
   skin-on advice, the cooking methods and the purchase tips. Correct the glycemic story: baked is not
   low, boiled is lower, and 70 is a high index, not a low one. Fix the glycogen ratio to the 1:3 that
   the bread page already uses, and drop the obesity, diabetes and cancer prevention claims.
3. **Peanut butter is a fat paste with incidental protein.** Keep the label lesson, the 100 % peanut
   rule and the 15-20 g portion. 600 kcal per 100 g and about 25 g of protein are right. Drop the
   "50 g tablespoon", the television and influencer references, the regional "mantequilla de maní"
   alongside the header term, and the joke about bodies. Keep the satiety versus binge section.
4. **Avocado is a swap, not an add.** Keep almost the whole page: portions, micronutrients, the
   cardiovascular meta-analysis, the quick ideas, the precautions. Correct a whole medium avocado to
   about 320 kcal and 100 g to roughly half a small one. Drop the "insulin spikes sabotage performance"
   mechanism and the SEO artefacts.
5. **Cuttlefish is lean seafood and the archive's mineral table is wrong by orders of magnitude.**
   Rebuild it from a composition table with correct units: iodine in micrograms, zinc in milligrams,
   selenium in micrograms. The archive prints 64 mg of iodine and 346 mg of zinc, which are toxic as
   written. Keep the cooking section, the comparison with chicken corrected, and the salt and
   cholesterol notes. Drop the thyroid "fat burning", the tincture for depression and the outdated
   "not for high cholesterol" line. Link the shellfish and fish pages instead of repeating mercury.
6. **Oats are the beta-glucan staple, and the recipe section is the value.** Keep the recipes, the
   powder section and the per-100 g table. Correct: nine essential amino acids, not six of eight; oats
   are lysine-limited; the fibre is mostly soluble beta-glucan, not insoluble; thiamine is in
   milligrams; the shake totals must add up. Drop "to cure and to prevent" and the caffeine warning
   without a source.
7. **Bread is a carb portion judged by fibre per slice and by its topping.** Keep the per-slice table
   and the glycogen explainer. Replace the "6-11 servings" line, which is the retired 1992 pyramid,
   with current guidance; fix "fat < 0"; drop the Arnold "white death" lore and the speculative
   light-bread-makes-you-eat-sweets claim. Keep the diet-bread trap, linked to the light-products page.
8. **The whole egg carries the yolk, and the cholesterol story is the page.** Keep the composition, the
   AHA 2000 and JAMA 1999 history and the UConn feeding study, deduplicated and read as history.
   Add the 186 mg of cholesterol that the section was missing. Nine amino acids. Drop the supermarket
   name, the dead link and the duplicated paragraphs. Dietary cholesterol raises LDL modestly and
   variably; anyone with a lipid disorder asks their doctor. Whites already have their own page: link
   it and do not repeat it.
9. **Canned sardines are the cheapest omega-3 and calcium in the cupboard.** Keep the can numbers, the
   fresh comparison, the bones and calcium, the preparation and the salt note. Drop the B12 superlative,
   the cancer prevention, the invented vitamin D and muscle-fibre link and the CoQ10 study without a
   source. The mercury rule lives in the fish guide: link it.
10. **Broccoli chemistry, not a cancer remedy.** Keep the glucoraphanin-to-sulforaphane story, the
    chopping and cooking detail and the vegetable-intake advice. Correct the history ("Johns Hopkins",
    Baltimore), the chemistry (glucoraphanin is the glucosinolate; sulforaphane is the isothiocyanate),
    and the units. The cell and animal findings are presented as such. Drop the supplement dose, the
    "kills cancer cells" framing and the detox line, and add the real note that antioxidant loading can
    blunt training adaptation.

## Global rules

1. Neutral Spanish with `tú`; zero vosotros, voseo or `usted`. Never the word `gym` in Spanish.
2. No first person, no newsletter CTAs, no athlete photos, no medical claims, no "Conclusión" section,
   no marketing headings, no "Nivel pro", no manual TOC.
3. Zero external links, `.md` links, `#` anchors, inline images, `▷`/`✔`, escaped asterisks, emoji
   artifacts, empty headings, duplicate images, headings with no body.
4. Links only to pages that exist. Whitelist: the ten batch pages, any slug ticked under Nutrición in
   `odd/tasks/content-pages.md`, and these when useful: `frutos-secos`, `grasas`, `carbohidratos`,
   `perder-peso`, `deficit-calorico-clave-para-perder-peso`, `necesitas-desintoxicarte`,
   `comida-pre-entrenamiento`, `comida-post-entrenamiento`, `como-limitar-el-sodio`,
   `guia-definitiva-sobre-el-consumo-de-pescado`, `marisco-minerales-proteinas`,
   `alimentos-con-vitamina-d`, `proteina-de-clara-de-huevo-aliada-para-mas-fuerza-y-menos-grasa`,
   `guia-productos-light`, `exceso-de-carbohidratos-se-convierte-en-grasa`, `radicales-libres`,
   `antioxidantes-sinteticos-veneno-alimentos`, `verdura-masa-muscular`, `cenar-verdura`,
   `dieta-dash-guia-completa`, `tortas-de-arroz`, `requieren-los-deportistas-mas-proteinas`. Verify
   each slug on disk; if one does not exist, do not use it.
5. Zero em dashes. Titles 45-60, descriptions 150-160, reciprocal `alternate`.
6. Tables: composition, comparison and label tables use `<table class="text-table">` with three cells
   per row. Say cooked or raw in the header.
7. Heroes: one unique per page, free licence only, 1280 px, >=1200 on disk, <250 KB, credit plus honest
   alt, dHash on the final crop. Open the closest hero; distance 0 is a duplicate and crops measure up
   to 14. Prefer product-free, person-free photographs of the actual food.
8. Body 600-900 words per locale, table-inclusive under 1,150. Page 1 (600) and page 10 (657) need
   building; pages 3 (1,742), 4 (1,620) and 8 (1,905) cut depth, not topics.
9. Mandatory intra-batch links: 1 -> 2, 3; 2 -> 3, 4; 3 -> 4, 5; 4 -> 5, 6; 5 -> 6, 7; 6 -> 7, 8;
   7 -> 8, 9; 8 -> 9, 10; 9 -> 10, 1; 10 -> 1, 2.

## Per page

### 1. Oat bran for weight loss

- Beta-glucan dose, fibre and calorie arithmetic, kitchen uses, the honest weight-loss frame (fibre
  helps adherence, it does not burn fat). Link `perder-peso`, `deficit-calorico-clave-para-perder-peso`,
  `necesitas-desintoxicarte`, `carbohidratos`, page 2, page 3.

### 2. Sweet potato

- Varieties, nutrition table, skin, cooking methods and purchase, with the glycemic correction. Link
  `carbohidratos`, `comida-pre-entrenamiento`, `como-limitar-el-sodio`, page 3, page 4.

### 3. Peanut butter

- The label lesson, the 20 g portion, the debate, the satiety versus binge section. Link `frutos-secos`,
  `grasas`, `tortas-de-arroz`, page 4, page 5.

### 4. Avocado in your diet

- Portions and swaps, micronutrients, cardiovascular evidence, quick ideas, precautions. Link `grasas`,
  `dieta-baja-en-grasas`, `deficit-calorico-clave-para-perder-peso`, `frutos-secos`, page 5, page 6.

### 5. Cuttlefish

- Correct composition table, cooking, salt and cholesterol notes. Link `marisco-minerales-proteinas`,
  `guia-definitiva-sobre-el-consumo-de-pescado`, page 6, page 7.

### 6. Oats

- Composition, beta-glucan, powder versus flakes, the recipes with totals that add up. Link
  `comida-pre-entrenamiento`, `comida-post-entrenamiento`, `carbohidratos`, page 7, page 8.

### 7. Bread and muscle

- The per-slice table, fibre per slice, the topping, the diet-bread trap, the glycogen note. Link
  `carbohidratos`, `exceso-de-carbohidratos-se-convierte-en-grasa`, `guia-productos-light`, page 8,
  page 9.

### 8. Eggs

- Whole egg composition with the 186 mg, yolk versus white, the cholesterol history, safety,
  shopping. Link `proteina-de-clara-de-huevo-aliada-para-mas-fuerza-y-menos-grasa`,
  `dieta-dash-guia-completa`, `requieren-los-deportistas-mas-proteinas`, page 9, page 10.

### 9. Sardines

- Canned versus fresh numbers, bones and calcium, omega-3, salt, preparation. Link
  `guia-definitiva-sobre-el-consumo-de-pescado`, `alimentos-con-vitamina-d`,
  `marisco-minerales-proteinas`, page 10, page 1.

### 10. Sulforaphane

- Glucoraphanin, myrosinase, chopping and resting, boiling versus steaming, what the evidence covers,
  the antioxidant-blunting caveat. Link `radicales-libres`,
  `antioxidantes-sinteticos-veneno-alimentos`, `verdura-masa-muscular`, `cenar-verdura`, page 1,
  page 2.

## Writer split

- **Writer A:** pages 1-5: `salvado-de-avena-perder-peso`, `boniato-carbohidrato-perfecto`,
  `crema-de-cacahuete`, `aguacate-en-dieta-fitness-por-que-se-ha-ganado-su-sitio`,
  `sepia-excelente-fuente-de-proteinas-para-el-culturista`, plus five heroes.
- **Writer B:** pages 6-10: `avena`, `pan-y-musculos`, `huevos-un-poderoso-alimento-para-tu-dieta`,
  `sardina-dieta-fitness`, `sulforafano`, plus five heroes.

## Hero shortlist

1. Dry oat bran in a bowl with a tablespoon on dark wood.
2. Baked sweet potatoes split open, skin on, no toppings.
3. Open jar of natural peanut butter with a spoon and a few peanuts.
4. Halved avocado with the pit, cut face up, on a board.
5. Whole raw cuttlefish on ice at a market stall.
6. Rolled oats in a glass jar with a wooden scoop.
7. Sliced whole-grain loaf on a board, crust visible.
8. Brown eggs in a bowl, one cracked open showing the yolk.
9. Fresh sardines on ice at a fish counter.
10. Broccoli florets on a board, one cut to show the stem.

## Verification

```powershell
npm run check:copy   # expected 38,811
npm run build        # expected 1,537 pages
npm run check:i18n   # expected 23,932, 1,534 sitemap URLs
```

Parent checks beyond the gates: every internal link resolves, zero em dashes, no BOM, dHash over all
heroes, 140 page/width pairs with no clipped cell.

## Result (2026-11-25)

- 10 bilingual pairs, 20 files, 10 heroes. Library 751 → **761 / 792**. Nutrición **188/191**;
  **Alimentos funcionales 12/12 — COMPLETO**.
- Gates ran once for batches 75 and 76 together: `check:copy` **38,811/38,811**, build **1,537 pages**,
  `check:i18n` **23,932/23,932**, sitemap **1,534 URLs**.
- Structural checks: **113 internal links** across the ten pairs, **0 broken**; 0 files with problems.
- **What the batch kept and what it corrected:** oat bran keeps its fibre arithmetic and kitchen uses,
  with the 3 g beta-glucan dose that actually lowers LDL and the "sponge" and cancer claims gone; sweet
  potato keeps the table, the skin and the cooking, with the glycemic index reclassified and the disease
  prevention removed; peanut butter keeps the label lesson and the 20 g portion, with the tablespoon
  hyperbole and the television references gone; avocado keeps nearly the whole page, with a whole fruit
  corrected to about 320 kcal and the "insulin spike" mechanism removed; cuttlefish keeps the cooking
  section and gains a correct composition table (zinc 3.46 mg and selenium 89.6 µg from USDA, iodine
  64 µg from BEDCA), because the archive printed 346 mg of zinc and 64 mg of iodine; oats keep the recipes
  and the powder section with nine essential amino acids, soluble beta-glucan and thiamine in mg; bread
  keeps the per-slice table with the retired 1992 pyramid replaced and "fat < 0" fixed; eggs keep the
  cholesterol history and gain the missing 186 mg per egg; sardines keep the can numbers and the calcium,
  with the B12 superlative and the cancer claims gone; sulforaphane keeps the broccoli chemistry with the
  glucoraphanin/myrosinase sequence and the supplement dose removed.
- **Writers:** A pages 1-5, B pages 6-10, disjoint files.
- **Heroes:** ten files. Wikimedia has no oat-bran photograph; the page uses dry oat flakes and the alt
  says flakes. Minimum dHash 14 against an unrelated calf-raise photo, opened.
- Commits: pages `7b2c012`, `5b72909`, `6628f0d`, `df41ef8`, `cf8940b`, `05029dc`, `37737fd`, `264d281`,
  `af28905`, `c6dbfa6`; routes `8175ea2`.
