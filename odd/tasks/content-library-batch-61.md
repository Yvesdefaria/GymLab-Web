# Content library — batch 61

Started: 2026-11-24. Continues the library from 601/792 (`odd/tasks/content-pages.md`).

Objective: the last seven Suplementos Dietéticos rows and the first three Nutrición Aplicada rows, as
ten bilingual pairs. Library 601 → 611. Suplementos closes at **35/35**.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Sources: `...\content\nutricion\suplementos-dieteticos\` and `...\content\nutricion\nutricion-aplicada\`
- Depends on batches 58, 59 and 60.

## Tasks

- [x] T1 Scope, conflicts and house rules written (this document).
- [x] T2 Writer A: pages 1-5, ES + EN + heroes.
- [x] T3 Writer B: pages 6-10, ES + EN + heroes.
- [x] T4 Routes registered in `astro.config.mjs` and `scripts/check-i18n.mjs`.
- [x] T5 Parent gates, link check, render pass, dHash pass, per-page commits, checklist and handoff.

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `esteroides` | `steroids` | `esteroides.md` | 6,911 | esteroides anabólicos | |
| 2 | `bloqueadores-de-carbohidratos` | `carb-blockers` | `bloqueadores-de-carbohidratos.md` | 1,073 | bloqueadores de carbohidratos | |
| 3 | `gaba-neotropico-para-la-calma-y-relajacion` | `gaba-supplement` | `gaba-neotropico-para-la-calma-y-relajacion.md` | 587 | GABA | |
| 4 | `vitargo` | `vitargo` | `vitargo.md` | 767 | carbohidratos intraentrenamiento | |
| 5 | `ganadores-de-peso-mass-gainers` | `mass-gainers` | `ganadores-de-peso-mass-gainers.md` | 1,048 | ganadores de peso | |
| 6 | `cafeina-suplemento` | `caffeine-supplement` | `cafeina-suplemento.md` | 2,107 | cafeína como suplemento | |
| 7 | `aminoacidos` | `amino-acids` | `aminoacidos.md` | 2,456 | aminoácidos | |
| 8 | `almuerzos-saludables-altos-en-proteinas` | `high-protein-lunches` | `almuerzos-saludables-altos-en-proteinas.md` | 823 | almuerzos altos en proteínas | |
| 9 | `combinar-proteinas-carbohidratos` | `protein-and-carbs-together` | `combinar-proteinas-carbohidratos.md` | 960 | proteínas y carbohidratos | |
| 10 | `cenar-verdura` | `vegetables-or-fruit-for-dinner` | `cenar-verdura.md` | 520 | verdura para cenar | |

Pages 1-7: `block: "Entrenamiento"` (`Training`), `section: "Suplementos dietéticos"` (`Supplements`).
Pages 8-10: `block: "Entrenamiento"` (`Training`), `section: "Nutrición aplicada"` (`Applied nutrition`).
All: `updated: "2026-11-24"`.

## House rules (binding, YMYL)

1. **No purchase CTAs, affiliate links, shop names, brand names or "best" rankings.**
2. **No medical claims.** Sleep, immunity, fat loss, insulin and joint statements stay inside what trials
   in healthy adults support, with the qualifier kept.
3. **No invented doses.** Caffeine 3-6 mg/kg, creatine 3-5 g/day, protein 1.6-2.2 g/kg, carbohydrate
   3-5 g/kg for lifters and 30-60 g/h in long sessions. Anything else is described as unstudied.
4. **No percentages lifted from marketing.** Any figure needs a plain-language source or it goes.
5. **No athlete photos, no before/after imagery, no product labels with brands.**
6. **No protocol, sourcing or dosing detail for controlled substances.** Page 1 is a health-risk page.
7. **Say "no evidence" when there is none.**

## Conflicts the batch settles (binding)

1. **The steroids page is a risk page, not a manual.** Delete the entire parenteral section (gauge, needle
   length, sites, rotation, oil filling), every cycle and dose figure, the PCT drugs (tamoxifen, hCG,
   clomiphene, finasteride), the prices, the sourcing and the brand names. Keep: what AAS do, the 600
   mg/week trial (+5.5 kg and ~40% strength over 10 weeks), the adverse-event survey, gynaecomastia,
   withdrawal, the missing long-term data, and the plain statement that the archive's dosing is
   locker-room folklore. Resolve the tendon contradiction by saying the evidence is mixed, not by
   picking a side. No "double your muscle in half the time", no AIDS or depression treatment claims.
2. **Carb blockers are a failed product class.** The only positive bean-extract trial ran alongside a
   high-fibre, low-fat diet with 100-200 g of complex carbohydrate: the pill was the passenger. Delete
   the nopal recommendation for diabetes. Gymnema has animal data only, the 400-600 mg dose has no human
   trial, and chromium does not work. The verdict is money wasted, without a smug tone.
3. **The GABA page is an advertisement.** Rebuild as sleep-supplement evidence: oral GABA crosses the
   blood-brain barrier poorly, the sleep trials are small and mixed, and relaxation is not a deficiency.
   Delete the insomnia-cure claims, the affiliate link, the shop framing and "te contamos". Send readers
   to sleep hygiene and the sleep guide.
4. **Vitargo is waxy maize starch.** The archive's five percentages come from an undisclosed product
   graph. Under 60-75 minutes water is enough; carbohydrate earns its place in long sessions at 30-60
   g/h, and food does it cheaper. Name the commercial product once to identify the category, never as an
   endorsement. Delete the elite/Olympic halo and the 78% protein-sparing claim.
5. **Mass gainers are food in a bag.** Kreider is the whole story: same muscle at 28 days, about 700 g of
   extra fat. The archive reverses Rozenek (the control group gained the lean mass). Delete the +500%
   insulin/testosterone line, the IGF-1 claim and the "anabolic response" framing. 2,500 kcal is one
   example, not a rule; oats, milk and protein powder reproduce the product for less.
6. **Caffeine works, the ritual does not.** 3-6 mg/kg (about 210-420 mg at 70-85 kg), 30-60 minutes
   before, half-life 4-6 hours, nothing within 8-10 hours of bed. The archive's "10 mg" is missing the
   per-kilo denominator, the 800 mg figure is a study dose and not a recommendation, and the lethal
   arithmetic (192 mg/kg) stays. Delete the fibrocystic-breast claim and the creatine antagonism, which
   contradicts the published creatine and caffeine page. WADA removed caffeine from the prohibited list
   in 2004 and keeps monitoring it.
7. **Amino acids: nine essential, not eight.** Fix the count. Free amino acids are an expensive way to
   eat the same nitrogen: at 1.6-2.2 g/kg, food or whey covers it; when intake is low, EAAs beat BCAAs.
   Delete the growth-hormone and antidepressant claims and the "one in two US deaths" line. Peptide
   absorption is qualified, not magic.
8. **Lunch is batch-cooking logistics.** Drop the 4-6 meals rule to "protein spread across the day"; the
   archive's mercury reassurance contradicts the FDA limit two lines later, so publish the real rule
   (two to three servings a week of low-mercury fish, avoid shark, swordfish and king mackerel). Keep
   the cooking temperatures and the 100 g turkey = 30 g protein example. Zero vosotros.
9. **Protein and carbohydrate do not compete.** Digestion overlaps; carbohydrate does not ferment into
   alcohol in the stomach, and pepsin needs acid, not alkaline. The 80/85% nitrogen-retention figure is
   one small old trial, not a rule. There is no white-meat-with-carbs prohibition. What survives: total
   calories, protein spread, fibre.
10. **Vegetables win at dinner on volume, not on the clock.** Fruit at night does not become fat; energy
    balance decides. The GI is a tool, not a morality test. Keep "do not fry everything" and "both are
    healthy". Built from 520 words, so reach 600 with the plate model and a real dinner example.

## Global rules

1. Neutral Spanish with `tú`; zero vosotros, voseo or `usted`. Never the word `gym` in Spanish.
2. No first person, no newsletter or comment CTAs, no supplement promotions, no athlete photos, no
   medical or rehab claims, no injury promises, no "Conclusión" section, no marketing headings.
3. Zero external links, `.md` links, `#` anchors, inline images, `▷`/`✔`, escaped asterisks, emoji
   artifacts, empty headings, manual TOCs, embedded videos, duplicate images, headings with no body.
4. Links only to pages that exist (ES slugs): the ten batch pages and the batch 60 pages
   (`aceite-de-cbd-beneficios-para-el-deportista`, `como-empezar-a-tomar-suplementos-deportivos`,
   `como-mejorar-tus-fisico-con-estos-batidos`, `suplementos-dieteticos`,
   `los-dos-mejores-suplementos-para-ganar-masa-muscular`, `suplementos-glutamina`,
   `tribulus-terrestris`, `aminoacidos-bcaas`, `reemplazo-comidas`, `glucosamina`), the 18 published
   supplement pages (`errores-al-tomar-suplementos`, `carnitina`, `bloquear-miostatina`,
   `comprar-proteinas`, `hmb-protector-de-masa-muscular`, `suplementos-proteina`,
   `suplementos-creatina`, `proteina-de-suero-elaboracion`, `pros-y-contras-de-las-proteinas`,
   `mejor-proteina-nocturna`, `proteinas-de-liberacion-sostenida-mezclas-proteicas`,
   `proteina-de-soja-contra-proteina-de-leche`, `suplementos-de-proteina-vegana`,
   `creatina-la-verdad`, `creatina-calambres-musculares`, `creatina-cafeina`, `alcohol-creatina`,
   `creatina-rinon`), `ganar-masa-muscular`, `como-ganar-peso`, `menos-grasa-mas-musculo`,
   `rutina-ganar-masa-muscular`, `rutina-volumen-ectomorfos`, `estancamiento-muscular`,
   `programa-hormona-crecimiento`, `grandes-musculos-de-forma-natural`, `culturismo-mas-que-musculo`,
   `mentiras-del-culturismo-que-os-impediran-progresar`,
   `cuanto-dormir-para-progresar-en-el-gimnasio`, `calcular-frecuencia-cardiaca-maxima`,
   `como-entrenar-con-altas-temperaturas`, `entrenamiento-perder-grasa`, `cardio-ayunas`,
   `como-orientar-tu-rutina-de-pesas-para-perder-grasa`, `calcular-calorias`,
   `potencia-tu-sistema-immunologico-con-el-entrenamiento`.
5. Zero em dashes. Titles 45-60, descriptions 150-160, reciprocal `alternate`.
6. Tables: programme tables markdown, three columns; comparison and decision tables as
   `<table class="text-table">` with three columns. The caffeine dose table, the gainer comparison and
   the fish guide are text tables.
7. Heroes: one unique per page, free licence only (Wikimedia Commons first, Pexels second), 1280 px,
   >=1200 on disk, <250 KB, credit plus honest alt, dHash on the final crop. Distance 0 is a duplicate,
   crops have measured up to 14, and white Everkinetic line art hashes 2-9 against other line art:
   open the closest hero and compare by equipment. Prefer product-free, person-free images.
8. Body 600-900 words per locale, table-inclusive under 1,150. Page 1 can reach 1,000. Page 3 (587
   words) and page 10 (520) must reach 600 with real content.
9. Mandatory intra-batch links: 1 -> 5, 6, 7; 2 -> 5, 7, 17; 3 -> 6, 3-sleep guide; 4 -> 6, 10;
   5 -> 6, 7, 9; 6 -> 4, 5, 7, 17; 7 -> 2, 5, 8; 8 -> 9, 10, 5; 9 -> 8, 10, 5; 10 -> 8, 9, 5. All ten
   link `errores-al-tomar-suplementos`.

## Per page

### 1. Steroids

- Risk page. Sections: what they are and what they do, the one controlled trial worth citing, the
  adverse-event survey, the withdrawal problem, the long-term evidence gap, who should never consider
  them, and where to get help.
- Delete every protocol element: injection technique, cycles, doses, PCT drugs, prices, sourcing, brands,
  athlete photos. No "how to". The page must not be usable as an instruction manual.
- Link `los-dos-mejores-suplementos-para-ganar-masa-muscular` (batch 60 page 5),
  `cafeina-suplemento` (page 6), `aminoacidos` (page 7), `grandes-musculos-de-forma-natural`,
  `errores-al-tomar-suplementos`, `ganar-masa-muscular`.

### 2. Carb blockers

- The failed-product page: nopal, bean extract, gymnema, chromium, with the one positive trial and its
  diet confound. Verdict: no reliable fat loss, money wasted.
- Delete the diabetes recommendation and the supplement-shop framing. 600-900 words.
- Link `ganadores-de-peso-mass-gainers` (page 5), `aminoacidos` (page 7), `carnitina`,
  `menos-grasa-mas-musculo`, `errores-al-tomar-suplementos`.

### 3. GABA

- Sleep-supplement evidence, built from 587 words: what GABA is, why oral intake barely reaches the
  brain, the small mixed trials, what actually improves sleep (schedule, light, caffeine cut-off,
  7-9 hours), and the sedation/interaction caution.
- Delete the insomnia cure, the affiliate link, the shop framing and "te contamos".
- Link `cafeina-suplemento` (page 6), `cuanto-dormir-para-progresar-en-el-gimnasio`,
  `errores-al-tomar-suplementos`, `recuperacion-activa-entrenamiento`.

### 4. Vitargo

- Intra-workout carbohydrate: water under 60-75 minutes, 30-60 g/h of carbohydrate for long or hot
  sessions, food equivalents, and the waxy-maize claim without the product graph. The commercial name
  appears once, as the archive's term.
- Delete the five percentages, the elite halo, the 78% protein-sparing claim and the "2x" framing.
- Link `cafeina-suplemento` (page 6), `cenar-verdura` (page 10), `como-entrenar-con-altas-temperaturas`,
  `entrenamiento-perder-grasa`, `errores-al-tomar-suplementos`.

### 5. Mass gainers

- Liquid calories: Kreider's 28-day result (same muscle, ~700 g extra fat), the reversed Rozenek, the
  2,500 kcal example, and the cheaper home mix. Gainers are food in a bag.
- Delete the insulin/testosterone percentage, IGF-1, "favour the anabolic response" and the 700 g of
  muscle claim.
- Link `cafeina-suplemento` (page 6), `aminoacidos` (page 7), `como-ganar-peso`, `ganar-masa-muscular`,
  `rutina-volumen-ectomorfos`, `errores-al-tomar-suplementos`.

### 6. Caffeine supplement

- Dose table: 3-6 mg/kg, 30-60 minutes before, 210-420 mg for 70-85 kg, half-life 4-6 hours, nothing
  8-10 hours before bed. Habitual use and tolerance; the cheapest upgrade is sleep.
- Delete "10 mg", the 800 mg study as a recommendation, the fibrocystic-breast claim and the creatine
  antagonism (contradicts the published page). Keep the lethal arithmetic and the anti-doping history.
- Link `vitargo` (page 4), `ganadores-de-peso-mass-gainers` (page 5), `aminoacidos` (page 7),
  `creatina-cafeina`, `como-entrenar-con-altas-temperaturas`,
  `cuanto-dormir-para-progresar-en-el-gimnasio`, `calcular-frecuencia-cardiaca-maxima`.

### 7. Amino acids

- The map: nine essential amino acids, twenty proteinogenic, EAAs versus BCAAs versus whole protein.
  At 1.6-2.2 g/kg food covers it; free amino acids are an expensive way to eat nitrogen.
- Delete the GH and antidepressant claims, the "one in two US deaths" line, the 8-essential count and
  the magic peptide framing. Keep the peptide qualification.
- Link `bloqueadores-de-carbohidratos` (page 2), `ganadores-de-peso-mass-gainers` (page 5),
  `almuerzos-saludables-altos-en-proteinas` (page 8), `suplementos-proteina`,
  `aminoacidos-bcaas` (batch 60), `errores-al-tomar-suplementos`.

### 8. High-protein lunches

- Batch-cooking logistics: a shopping list, a 100 g turkey = 30 g protein example, the real fish rule
  (two to three servings a week, low-mercury species, avoid shark, swordfish and king mackerel), safe
  cooking temperatures and storage. Protein spread across the day, not a 4-6 meal law.
- Delete the mercury reassurance, the nitrate alarm, every vosotros form and the bodybuilder framing.
- Link `combinar-proteinas-carbohidratos` (page 9), `cenar-verdura` (page 10),
  `ganadores-de-peso-mass-gainers` (page 5), `pros-y-contras-de-las-proteinas`,
  `como-ganar-peso`, `errores-al-tomar-suplementos`.

### 9. Protein and carbs together

- Digestion does not compete. Delete "carbs ferment into alcohol", "pepsin needs alkaline", the
  white-meat rule and the 80/85% nitrogen-retention rule as a law. What survives: total calories,
  protein spread, fibre. 600-900 words.
- Link `almuerzos-saludables-altos-en-proteinas` (page 8), `cenar-verdura` (page 10),
  `ganadores-de-peso-mass-gainers` (page 5), `menos-grasa-mas-musculo`,
  `pros-y-contras-de-las-proteinas`, `errores-al-tomar-suplementos`.

### 10. Vegetables or fruit for dinner

- Volume eating: vegetables fill the plate for very few calories; fruit at night does not become fat;
  energy balance decides. The GI is a tool. Do not fry everything. Both are healthy.
- Built from 520 words: add the plate model and one real dinner example, no filler.
- Link `almuerzos-saludables-altos-en-proteinas` (page 8), `combinar-proteinas-carbohidratos` (page 9),
  `ganadores-de-peso-mass-gainers` (page 5), `menos-grasa-mas-musculo`,
  `como-orientar-tu-rutina-de-pesas-para-perder-grasa`, `errores-al-tomar-suplementos`.

## Writer split

- **Writer A:** pages 1-5: `esteroides`, `bloqueadores-de-carbohidratos`,
  `gaba-neotropico-para-la-calma-y-relajacion`, `vitargo`, `ganadores-de-peso-mass-gainers`, plus five
  heroes.
- **Writer B:** pages 6-10: `cafeina-suplemento`, `aminoacidos`,
  `almuerzos-saludables-altos-en-proteinas`, `combinar-proteinas-carbohidratos`, `cenar-verdura`, plus
  five heroes.
- Neither writer touches `astro.config.mjs`, `scripts/check-i18n.mjs`, `guides-nav.ts`,
  `content-pages.md` or this document.

## Hero shortlist

1. Sharps container or a blood-pressure cuff (no person, no product).
2. White beans or a nopal cactus.
3. Polysomnography trace or a GABA molecule.
4. Cycling bottles or starch granules.
5. Oats and milk powder on a scale.
6. Coffee beans on a scale or an espresso cup.
7. A peptide chain or eggs, fish and dairy.
8. Meal-prep boxes or sliced turkey.
9. Chicken, rice and vegetables on a plate.
10. Roasted vegetable tray or a salad bowl.

## Verification

```powershell
npm run check:copy   # expected 31,161
npm run build        # expected 1,238 pages
npm run check:i18n   # expected 19,282, 1,234 sitemap URLs
```

Parent checks beyond the gates: every internal link resolves, zero em dashes, no BOM, dHash over all
heroes, 140 page/width pairs with no clipped cell.

## Result (2026-11-24)

- 10 bilingual pairs, 20 files, 10 heroes. Library 601 → **611 / 792**. Nutrición **38/191**;
  Suplementos Dietéticos **35/35 — COMPLETO**.
- Gates: `check:copy` **31,161/31,161**, build **1,238 pages**, `check:i18n` **19,282/19,282**, sitemap
  **1,234 URLs** with 3,702 alternates.
- Structural checks: 118 internal links, **0 broken**; zero em dashes; no BOM; 140 page/width pairs with
  **0 clipped cells**.
- **Corrections made:** the steroids page is a risk page with no protocol, dose, PCT, price or sourcing
  detail; carb blockers are a failed class and the bean trial's diet confound is stated; GABA becomes
  sleep evidence instead of an affiliate ad; Vitargo loses the product graph and keeps intra-workout
  carbohydrate; mass gainers keep Kreider and the reversed Rozenek; caffeine gets 3-6 mg/kg with the
  400 mg daily ceiling at higher body weights; amino acids get nine essential and no GH claims; lunches
  get the real mercury rule; protein and carbs stop competing; dinner vegetables win on volume.
- **Fixed by the parent:** nothing content-side; both writers landed clean on the first pass. The parent
  ran the build, i18n, render and dHash passes.
- **Writers:** A pages 1-5, B pages 6-10, disjoint files.
- **Heroes:** ten Wikimedia files, all 1280x720 and 87-227 KB. The minimum distance is 14 on a bright
  food flat lay against a gym photo; every nearest neighbour was opened and none is a crop.
- Commits: pages `abb8f32`, `f071f50`, `35c421a`, `52725fc`, `cef221e`, `f193e4f`, `1e4439f`, `b800cef`,
  `4b03c22`, `cdc8e47`; routes `90263de`.
