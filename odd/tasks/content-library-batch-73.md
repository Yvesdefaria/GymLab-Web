# Content library — batch 73

Started: 2026-11-24. Continues the library from 721/792 after batch 72
(`odd/tasks/content-pages.md`).

Objective: `rutina-y-dieta-de-nick-olsen` to `dieta-ganar-musculo-limpio`, as ten bilingual pairs.
Library 721 → 731. All ten are Dietas de volumen rows.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Sources: `...\content\nutricion\dietas-de-volumen-muscular\`
- Depends on batch 72.

## Tasks

- [x] T1 Scope, conflicts and house rules written (this document).
- [x] T2 Writer A: pages 1-5, ES + EN + heroes.
- [x] T3 Writer B: pages 6-10, ES + EN + heroes.
- [x] T4 Routes registered in `astro.config.mjs` and `scripts/check-i18n.mjs`.
- [x] T5 Parent gates, link check, render pass, dHash pass, per-page commits, checklist and handoff.

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `rutina-y-dieta-de-nick-olsen` | `nick-olsen-routine-diet` | `rutina-y-dieta-de-nick-olsen.md` | 852 | Nick Olsen | |
| 2 | `ganar-musculo-ectomorfos` | `ectomorph-muscle-gain` | `ganar-musculo-ectomorfos.md` | 1,221 | ganar músculo ectomorfo | |
| 3 | `dietas-ganar-masa-muscular` | `diets-to-build-muscle` | `dietas-ganar-masa-muscular.md` | 980 | dietas para ganar masa muscular | |
| 4 | `dieta-volumen-muscular-3000-calorias` | `3000-calorie-bulking-diet` | `dieta-volumen-muscular-3000-calorias.md` | 495 | dieta de 3000 calorías | |
| 5 | `dieta-volumen-phil-heath` | `phil-heath-diet` | `dieta-volumen-phil-heath.md` | 651 | dieta de Phil Heath | |
| 6 | `dieta-lee-haney` | `lee-haney-diet` | `dieta-lee-haney.md` | 338 | dieta de Lee Haney | |
| 7 | `dieta-muscular-dorian-yates` | `dorian-yates-diet` | `dieta-muscular-dorian-yates.md` | 709 | dieta de Dorian Yates | |
| 8 | `dieta-herculea` | `herculean-diet` | `dieta-herculea.md` | 1,873 | dieta hercúlea | |
| 9 | `dieta-hiperproteica-ganar-musculo` | `high-protein-diet-for-muscle` | `dieta-hiperproteica-ganar-musculo.md` | 852 | dieta hiperproteica | |
| 10 | `dieta-ganar-musculo-limpio` | `clean-bulk-diet` | `dieta-ganar-musculo-limpio.md` | 1,955 | ganar músculo limpio | |

All: `block: "Entrenamiento"` (`Training`), `section: "Dietas de volumen"` (`Bulking diets`),
`updated: "2026-11-24"`.

## House rules (binding, YMYL)

1. **No purchase CTAs, affiliate links, shop names, brand names or "best" rankings.** No supplement
   brand survives, including inside a named athlete's menu.
2. **No megadose presented as a template.** Anything above 3 g protein/kg is written as a documented
   extreme with its cost, never as advice.
3. **No invented mechanisms.** No "fast metabolism", no meal frequency "educating" metabolism, no
   myostatin or cortisol chain, no detox.
4. **No medical or cancer claims.** Mediterranean diet evidence is stated with its population; no
   "reduces colon and prostate cancer".
5. **No athlete biography passed as fact.** A claim about a pro's career is attributed as claimed.
6. **No athlete photos, no before/after imagery.**

## Conflicts the batch settles (binding)

1. **Nick Olsen's week is a sample, not a prescription.** Keep the six days, the one-minute rests and
   the FST-7 finisher. Delete the brand carbohydrate drink, fix "super-habit" to superávit and
   "spinacas", and state that the menu has no bodyweight or calorie total, so it cannot be scaled.
   Attribute the career claims.
2. **Ectomorph is a label, not a diagnosis.** The real problem is eating enough: calorie density,
   four to six occasions, liquid calories, a weekly weigh-in. Delete "ultra-fast metabolism",
   "limited absorption", the nine-meal timetable as fact, the percentage block that does not sum, the
   fats-lower-combustion line and "food eaten at once is wasted". Fix vosotros.
3. **20/55/25 is a starting template, turned into one day.** Delete the 2 g/kg floor, the three-hour
   catabolism rule, "detoxify" and "tone". Check the day against grams per kilo.
4. **3,000 kcal is a number with arithmetic.** The day is 2,990 against 2,983 stated, so it works: keep
   one option per slot and the 164/444/62 split. Delete every brand and the menu-as-all-options
   reading. State the bodyweight the total assumes.
5. **Phil Heath's IFBB day is a teardown.** 9,394 kcal and 910 g of protein at about 100 kg is roughly
   9 g/kg, a megadose. Keep the meal timing and the eight-meal structure; reject the dose and link the
   excess-protein page. Delete the brands and update the palmarés: seven Mr. Olympia titles,
   2011-2017.
6. **Lee Haney's five-meal day, with the math corrected.** Breakfast is 880 kcal, not 800, and the
   canned tuna is not zero. The "same diet minus dairy, red meat and oils" contest claim is not
   credible and is written as unsourced. Keep the athlete link.
7. **Dorian Yates: seven meals, three hours apart, and a rate cap.** 3,500 kcal, 0.5-1 kg a month, and
   the protein dose flagged: 2.5 g/kg in the plan against the article's own 1.8-2. Delete the universal
   "one kilo of muscle a month" law, fix "anónimos", and give the carbohydrate drink a real figure.
8. **The Herculean diet is a Mediterranean template at 3,100 kcal.** Keep the 211/319/107 day and the
   five-to-six meals. Delete the colon and prostate cancer claims, the daily wine, the allicin
   metabolism and the mouse extrapolation. Fix the rounding and the mercury omission: link the fish
   guide.
9. **Protein by clock, six moments, one day.** 2,900 kcal and about 280 g of protein for an 80 kg
   lifter is 3.5 g/kg: write it as the top of a range with its cost. Delete whey raising testosterone,
   omega-3 "retaining glutamine", the cortisol "attack" and the Greek myth. Fix "60 g de calorías"
   (carbohydrates), "nicelar" and the vosotros.
10. **A clean-gain day that adds up.** 3,136 kcal, 224 g protein, 383 g carbs and 79 g fat for 80 kg is
    2.8 g/kg: say so, and reconcile it with the "a little over 2 g/kg" sentence. Fix the inverted
    myostatin, the invented cortisol chain, the duplicated rest-day cell and "own risk". Link the
    published `construir-masa-muscular-limpia` page and do not re-argue it.

## Global rules

1. Neutral Spanish with `tú`; zero vosotros, voseo or `usted`. Never the word `gym` in Spanish.
2. No first person, no newsletter CTAs, no supplement promotions, no athlete photos, no medical or rehab
   claims, no "Conclusión" section, no marketing headings.
3. Zero external links, `.md` links, `#` anchors, inline images, `▷`/`✔`, escaped asterisks, emoji
   artifacts, empty headings, manual TOCs, duplicate images, headings with no body.
4. Links only to pages that exist: the ten batch pages, any slug ticked under Nutrición in
   `odd/tasks/content-pages.md`, and these cross-block pages when useful: `rutinas-de-volumen`,
   `tipos-somaticos-endomorfos-ectomorfos-y-mesomorfos`, `rutina-volumen-ectomorfos`,
   `programa-entrenamiento-brazos-lee-haney`, `serie-dorian-yates`,
   `entrenamiento-abdominal-por-dorian-yates`, `rutina-y-dieta-de-jeff-seid`,
   `simeon-panda-rutina-de-entrenamiento-y-dieta`, `ronnie-coleman-rutina-y-dieta-tributo`. Never
   invent a slug.
5. Zero em dashes. Titles 45-60, descriptions 150-160, reciprocal `alternate`.
6. Tables: comparison and decision tables as `<table class="text-table">` with three columns. The macro
   split, the 3,000 kcal day, the eight-meal Heath table and the Herculean day are text tables.
7. Heroes: one unique per page, free licence only, 1280 px, >=1200 on disk, <250 KB, credit plus honest
   alt, dHash on the final crop. Open the closest hero; distance 0 is a duplicate and crops measure up
   to 14. Prefer product-free, person-free images.
8. Body 600-900 words per locale, table-inclusive under 1,150. Pages 6 (293) and 4 (453) must be
   rebuilt; page 8 (1,836) and page 10 (1,917) cut to the floor. Never print a brand.
9. Mandatory intra-batch links: 1 -> 2, 3; 2 -> 3, 4; 3 -> 4, 5; 4 -> 5, 6; 5 -> 6, 7; 6 -> 7, 8;
   7 -> 8, 9; 8 -> 9, 10; 9 -> 10, 1; 10 -> 1, 2.

## Per page

### 1. Nick Olsen routine and diet

- Six training days, one-minute rests, FST-7 finisher, high-rep calves and abs; the off-season menu as
  a sample with no bodyweight, so it is described, not scaled. Delete the brand carb drink. Link
  `rutinas-de-volumen`, `rutina-y-dieta-de-jeff-seid`, page 2, page 3.

### 2. Ectomorph muscle gain

- Eat enough: calorie density, four to six occasions, liquid calories, weekly weigh-in, surplus of
  300-500 kcal. Somatotype as a label. Delete the metabolism and absorption claims and the nine-meal
  timetable. Link `tipos-somaticos-endomorfos-ectomorfos-y-mesomorfos`, `rutina-volumen-ectomorfos`,
  `como-ganar-peso`, `calculo-calorias-masa-muscular`, page 3, page 4.

### 3. Diets to build muscle

- One day on a 20/55/25 template, checked against grams per kilo, with the surplus stated. Delete the
  2 g/kg floor, the three-hour catabolism rule and the detox line. Link `ganar-masa-muscular`,
  `calculo-calorias-masa-muscular`, `que-comer-para-ganar-masa-muscular`, page 4, page 5.

### 4. 3,000-calorie bulking diet

- The day: 164 g protein, 444 g carbs, 62 g fat, 2,990 kcal against 2,983 stated, one option per slot.
  Delete every brand. State the bodyweight it assumes. Link `calculo-calorias-masa-muscular`,
  `menu-saludable-con-carbohidratos-y-proteinas`, `dieta-culturista-ocho-semanas`, page 5, page 6.

### 5. Phil Heath diet

- The eight-meal day as a teardown: 9,394 kcal and 910 g of protein is about 9 g/kg. Keep the timing,
  reject the dose, link the excess-protein page. Seven Mr. Olympia titles, 2011-2017. Delete the brands
  and the diet cola. Link `consumo-excesivo-de-proteinas`,
  `ronnie-coleman-rutina-y-dieta-tributo`, page 6, page 7.

### 6. Lee Haney diet

- The five-meal off-season day with corrected arithmetic: 880 kcal at breakfast, tuna counted, about
  3,460 for the day. The contest version is unsourced and written as such. Link
  `programa-entrenamiento-brazos-lee-haney`, `dieta-culturista-ocho-semanas`, page 7, page 8.

### 7. Dorian Yates diet

- Seven meals every three hours, 3,500 kcal, 0.5-1 kg a month, protein flagged at 2.5 g/kg against the
  article's own 1.8-2. Delete the "one kilo a month" law and fix "anónimos". Link `serie-dorian-yates`,
  `entrenamiento-abdominal-por-dorian-yates`, `calculo-calorias-masa-muscular`, page 8, page 9.

### 8. Herculean diet

- The 3,100 kcal Mediterranean day: 211 g protein, 319 g carbs, 107 g fat, six meals, olive oil and
  fish. Delete the cancer claims, the daily wine, the allicin metabolism and the mouse extrapolation.
  Link `dieta-antiinflamatoria-claves-y-beneficios`, `guia-definitiva-sobre-el-consumo-de-pescado`,
  `grasas`, page 9, page 10.

### 9. High-protein diet for muscle

- Six protein moments across one 2,900 kcal day, with grams per kilo computed. Delete the hormone
  claims and the Greek myth. Fix the carbohydrate typo and the register. Link
  `comida-pre-entrenamiento`, `comida-post-entrenamiento`, `mejor-proteina-nocturna`, page 10, page 1.

### 10. Clean bulk diet

- The 3,136 kcal day for an 80 kg lifter: 224 g protein is 2.8 g/kg, so the page says it. Fix the
  myostatin inversion, the cortisol chain, the duplicated cell and the risk line. Link
  `construir-masa-muscular-limpia`, `consumo-excesivo-de-proteinas`, page 1, page 2.

## Writer split

- **Writer A:** pages 1-5: `rutina-y-dieta-de-nick-olsen`, `ganar-musculo-ectomorfos`,
  `dietas-ganar-masa-muscular`, `dieta-volumen-muscular-3000-calorias`, `dieta-volumen-phil-heath`,
  plus five heroes.
- **Writer B:** pages 6-10: `dieta-lee-haney`, `dieta-muscular-dorian-yates`, `dieta-herculea`,
  `dieta-hiperproteica-ganar-musculo`, `dieta-ganar-musculo-limpio`, plus five heroes.

## Hero shortlist

1. Cable-crossover station with a towel and bottle on the floor.
2. Oat bowl with whole milk, nuts and banana on a kitchen scale.
3. Overhead flat-lay of a day's meals on a wooden table.
4. Plate of rice, chicken and green beans on a digital scale.
5. A long counter of identical meal containers, no people.
6. Rice, chicken breast and spinach on a plain plate.
7. Grilled beef, potato and broccoli in a takeaway container.
8. Olive oil poured over salmon, tomatoes and bread.
9. Six small bowls of protein sources in a row on a counter.
10. Seven labelled meal containers on a kitchen counter.

## Verification

```powershell
npm run check:copy   # expected 37,281
npm run build        # expected 1,478 pages
npm run check:i18n   # expected 23,002, 1,474 sitemap URLs
```

Parent checks beyond the gates: every internal link resolves, zero em dashes, no BOM, dHash over all
heroes, 140 page/width pairs with no clipped cell.

## Result (2026-11-24)

- 10 bilingual pairs, 20 files, 10 heroes. Library 721 → **731 / 792**. Nutrición **158/191**;
  Dietas de volumen **12/13**.
- Gates: `check:copy` **37,281/37,281**, build **1,477 pages**, `check:i18n` **23,002/23,002**, sitemap
  **1,474 URLs**.
- Structural checks: 96 internal links, **0 broken**; 0 files with problems after one parent fix.
- **Corrections made:** Nick Olsen's week is a sample with the brand drink removed; the ectomorph page
  is calorie density and four to six occasions, not a fast metabolism; the muscle-building diet is a
  20/55/25 day checked against grams per kilo; the 3,000 kcal day reconciles at 2,990 against 2,983
  with one option per slot; Phil Heath's 9,394 kcal and 910 g of protein are a teardown at about
  9 g/kg, not a template; Lee Haney's breakfast is 880 kcal and the tuna is counted; Dorian Yates
  keeps seven meals and a 0.5-1 kg monthly cap with the protein dose flagged; the Herculean diet is a
  3,100 kcal Mediterranean day without the cancer claims or the wine; protein by clock is six moments
  in one 2,900 kcal day; the clean-gain day states 2.8 g/kg and fixes the inverted myostatin.
- **Fixed by the parent:** the English Lee Haney page closed at 597 words, three under the floor; it
  gained the 1.9 g/kg arithmetic at 95 kg in both locales (prose 553/556, table-inclusive 627/625).
  That sentence is also the honest close the page was missing.
- **Writers:** A pages 1-5, B pages 6-10, disjoint files. Writer A's link pass resolved all ten
  intra-batch links because writer B's pages had landed.
- **Heroes:** ten files, all 1280x720, 91-220 KB. Minimum distance 15; no new pair at 6 or less. Two
  first choices were rejected as existing heroes at distance 0 and 1 (the KeepActive functional trainer
  is the Simeon Panda hero; the Foghorn cable room is `rutina-de-tiron-empujon`).
- **Page-count note:** the real formula is pages = articles × 2 + 15 and sitemap = articles × 2 + 12.
  The older ×2+16 figure counted `404.html`. At 731 articles: 1,477 pages and 1,474 URLs.
- Commits: pages `2abc6e4`, `3a371a0`, `10ba89e`, `754fb2c`, `bcdd585`, `7a0d711`, `70c7dc6`,
  `34a7ac4`, `509016c`, `e5f9c8f`; routes `13105cc`.
