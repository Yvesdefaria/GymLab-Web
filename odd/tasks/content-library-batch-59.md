# Content library — batch 59

Started: 2026-11-23. Continues the library from 581/792 (`odd/tasks/content-pages.md`).

Objective: the next ten Suplementos Dietéticos rows, from `/pros-y-contras-de-las-proteinas/` to
`/creatina-rinon/`, as ten bilingual pairs. Library 581 → 591.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Sources: `...\content\nutricion\suplementos-dieteticos\`
- Depends on batch 58 (`suplementos-proteina`, `suplementos-creatina`,
  `proteina-de-suero-elaboracion`, `errores-al-tomar-suplementos`, `comprar-proteinas`,
  `hmb-protector-de-masa-muscular`, `carnitina`, `bloquear-miostatina`).

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `pros-y-contras-de-las-proteinas` | `protein-pros-and-cons` | `pros-y-contras-de-las-proteinas.md` | 624 | pros y contras de las proteínas | |
| 2 | `mejor-proteina-nocturna` | `casein-protein` | `mejor-proteina-nocturna.md` | 1,144 | caseína | |
| 3 | `proteinas-de-liberacion-sostenida-mezclas-proteicas` | `sustained-release-protein` | `proteinas-de-liberacion-sostenida-mezclas-proteicas.md` | 1,501 | proteínas de liberación sostenida | |
| 4 | `proteina-de-soja-contra-proteina-de-leche` | `soy-vs-milk-protein` | `proteina-de-soja-contra-proteina-de-leche.md` | 618 | proteína de soja | |
| 5 | `suplementos-de-proteina-vegana` | `vegan-protein` | `suplementos-de-proteina-vegana.md` | 1,321 | proteína vegana | |
| 6 | `creatina-la-verdad` | `creatine-evidence` | `creatina-la-verdad.md` | 1,917 | creatina | |
| 7 | `creatina-calambres-musculares` | `creatine-and-cramps` | `creatina-calambres-musculares.md` | 330 | creatina y calambres | |
| 8 | `creatina-cafeina` | `creatine-and-caffeine` | `creatina-cafeina.md` | 735 | creatina y cafeína | |
| 9 | `alcohol-creatina` | `creatine-and-alcohol` | `alcohol-creatina.md` | 803 | creatina y alcohol | |
| 10 | `creatina-rinon` | `creatine-and-kidneys` | `creatina-rinon.md` | 236 | creatina y riñón | |

All: `block: "Entrenamiento"` (EN `Training`), `section: "Suplementos dietéticos"` (`Supplements`),
`updated: "2026-11-23"`.

## House rules for supplements (binding, YMYL)

1. **No purchase CTAs, affiliate links, shop names, brand names or "best" rankings.**
2. **No medical claims.** Kidney, liver, blood pressure and mental-health statements are limited to what
   trials in healthy adults support, with the qualifier kept.
3. **No invented doses.** Creatine 3-5 g/day (loading optional at 20 g/day split), protein 1.6-2.2 g/kg
   for lifters, pre-sleep protein 30-40 g. Anything else is described as unstudied.
4. **No percentages lifted from marketing.** Any figure needs a plain-language source or it goes.
5. **No athlete photos, no before/after imagery, no product labels with brands.**
6. **Say "no evidence" when there is none.** Prefer that over an invented mechanism.

## Conflicts the batch settles (binding)

1. **All ten archive files need a rebuild, not an edit.** Six carry a false or fabricated claim at the
   centre of their argument; the two thinnest are YMYL-adjacent and still must reach 600 words with real
   content, not padding.
2. **One protein, four speeds.** Page 1's spine: casein slow, whey fast, blends in between; the quality
   gap is small and the daily total decides. Fix the broken table and the clipped last row.
3. **Ammonia is not anabolic.** Page 1 says BCAAs raise ammonia "helping muscle formation". Ammonia is a
   fatigue-linked byproduct. Delete the mechanism.
4. **Casein is a milk protein, not the answer to milk intolerance.** Page 2 recommends casein to people
   who cannot drink milk. Lactose intolerance and milk-protein allergy are different; a casein
   supplement is milk protein. Fix it and drop the gendered calcium claim.
5. **Insulin does not boost muscle protein synthesis in adults.** Page 2 says amino acids are "assimilated
   much better" with insulin. Insulin is permissive. Fix it.
6. **Isolate is not proven superior to casein at matched protein.** Page 3 claims it, then ranks milk
   protein concentrate as "the superior supplement". Publish the absorption ladder and the matched-dose
   reality; no rankings, no external editorial link, no `.md` links.
7. **Soy works.** Page 4's verdict (milk > soy) rests on 2003-2005 data. At matched protein and leucine,
   hypertrophy is similar. Publish the kinetics (92 % vs 78 % postprandial utilization) as utilization,
   not as an anabolism verdict, and drop the bar-study protocol.
8. **All plant proteins contain all nine essential amino acids.** Page 5 says only soy does. False; the
   difference is limiting amounts and leucine density. Fix it, drop the "more digestible than animal
   protein" claim, the shop link and the athlete photos, and use 1.6-2.2 g/kg.
9. **Creatine's benefits are the ones with trials.** Page 6 adds a cell-volumisation mechanism as a
   second benefit. Keep strength, reps, lean mass, the safety record and the creatinine artefact; cut
   the IGF-1, GH and calcium claims, the quiz hook, the first person and the pharmacy links. 900-1,000
   words.
10. **Creatine does not prevent cramps.** Page 7 turns "no evidence it causes cramps" into "demonstrated
    prevention", using a 38-player trial and a dialysis cohort. Publish the honest version and the
    hydration/electrolyte context. 600+ words.
11. **Coffee and creatine coexist.** Page 8 turns a 1996 protocol into a blanket rule that high caffeine
    cancels creatine. The modern reading is no meaningful antagonism at habitual doses. Rebuild around
    coexistence, caffeine ≤3 mg/kg and sleep.
12. **There is no creatine-alcohol interaction to manage.** Page 9 says the benefits will not appear if
    you drink. False. Alcohol's cost is recovery, sleep and calories; creatine does not pay it. Add the
    low-risk guideline and the who-should-avoid note.
13. **Creatine raises serum creatinine without changing kidney function.** Page 10 says the opposite and
    tells the reader to argue with the doctor. Publish the artefact, cystatin C or a pause before testing,
    and disclose rather than argue. 600+ words.
14. **Every row states its dose.** Protein 1.6-2.2 g/kg and 25-40 g per meal; pre-sleep 30-40 g; creatine
    3-5 g/day. The archive gives some numbers; where it gives none, the dose is this batch's own
    recommendation and says so once.

## Global rules

1. Neutral Spanish with `tú`; zero vosotros, voseo or `usted`. Never the word `gym` in Spanish.
2. No first person, no newsletter or comment CTAs, no supplement promotions, no athlete photos, no
   medical or rehab claims, no injury promises, no "Conclusión" section, no marketing headings.
3. Zero external links, `.md` links, `#` anchors, inline images, `▷`/`✔`, escaped asterisks, emoji
   artifacts, empty headings, manual TOCs, embedded videos, duplicate images, headings with no body.
4. Links only to pages that exist (ES slugs): the ten batch pages, the batch 58 supplement pages
   (`errores-al-tomar-suplementos`, `carnitina`, `bloquear-miostatina`, `comprar-proteinas`,
   `hmb-protector-de-masa-muscular`, `suplementos-proteina`, `suplementos-creatina`,
   `proteina-de-suero-elaboracion`), `ganar-masa-muscular`, `como-ganar-peso`,
   `menos-grasa-mas-musculo`, `rutina-ganar-masa-muscular`, `volumen-de-entrenamiento`,
   `principio-adaptacion-sobrecarga-progresiva`, `fallo-muscular`, `tiempo-de-descanso-entre-series`,
   `cuanto-dormir-para-progresar-en-el-gimnasio`, `agujetas-causas-y-como-hacer-que-desaparezcan`,
   `regeneracion-muscular`, `sobreentrenamiento`, `recuperacion-activa-entrenamiento`,
   `como-entrenar-con-altas-temperaturas`, `pesas-salud-cardiovascular`,
   `guia-musculacion-principiantes`, `grandes-musculos-de-forma-natural`, `calcular-calorias`,
   `tecnica-ejecucion-ejercicios`.
5. Zero em dashes. Titles 45-60, descriptions 150-160, reciprocal `alternate`.
6. Tables: programme tables markdown, three columns; setup, comparison and decision tables as
   `<table class="text-table">` with three columns. No footnote inside a cell and no asterisk markers.
   The absorption ladder and the creatine dose table are text tables.
7. Heroes: one unique per page, free licence only (Wikimedia Commons first, Pexels second), 1280 px,
   >=1200 on disk, <250 KB, credit plus honest alt, dHash on the final crop. Distance 0 is a duplicate,
   crops have measured up to 14, and white Everkinetic line art hashes 2-9 against other line art:
   open the closest hero and compare by equipment. For supplement pages prefer product-free,
   person-free images: powder in a bowl, a shaker, capsules, milk or cheese for the protein pages.
8. Body 600-900 words per locale, table-inclusive under 1,150, except page 6 at 900-1,000. Pages 7 and
   10 are built from 330 and 236 archive words: rebuild with the study detail, the practical context and
   the safety section, never filler.
9. Mandatory intra-batch links: protein family 1 <-> 2 <-> 3 <-> 4 <-> 5 and all ->
   `suplementos-proteina`, `proteina-de-suero-elaboracion`, `comprar-proteinas`,
   `errores-al-tomar-suplementos`; creatine safety family 6 <-> 7 <-> 8 <-> 9 <-> 10 and all ->
   `suplementos-creatina`; 6 -> 7, 8, 9 and 10; 10 -> 6.

## Per page

### 1. Protein pros and cons

- Rebuild with headings: one protein sold at four speeds (casein, whey, blends, plant), the quality gap
  is small, the daily total decides. A comparison table with speed, leucine density, lactose and use.
- Delete the ammonia mechanism, the outdated "incomplete vegetable protein" framing, the clipped row
  and the truncated ending.
- Link `suplementos-proteina`, `proteina-de-suero-elaboracion`, `casein-protein` (page 2),
  `sustained-release-protein` (page 3), `soy-vs-milk-protein` (page 4), `vegan-protein` (page 5),
  `errores-al-tomar-suplementos`.

### 2. Casein

- Pre-sleep protein 30-40 g raises overnight MPS; cottage cheese does the same job. Casein is slow, whey
  is fast, and the schedule matters less than the total. 600-900 words.
- Fix the lactose confusion and the insulin claim; drop the "best nighttime protein" superlative and
  the gendered calcium line.
- Link `pros-y-contras-de-las-proteinas`, `sustained-release-protein`,
  `suplementos-proteina`, `proteina-de-suero-elaboracion`, `ganar-masa-muscular`,
  `cuanto-dormir-para-progresar-en-el-gimnasio`.

### 3. Sustained-release protein

- The absorption ladder as a table: hydrolysate, isolate, concentrate, casein, whole food. Blending is
  convenience, not physiology; two tubs or a meal reproduce it.
- Kill the isolate-versus-casein efficacy claim and the "milk protein concentrate is superior" ranking.
  No external links.
- Link `pros-y-contras-de-las-proteinas`, `casein-protein`, `suplementos-proteina`,
  `proteina-de-suero-elaboracion`, `comprar-proteinas`, `ganar-masa-muscular`.

### 4. Soy versus milk protein

- At matched protein and leucine, hypertrophy is similar. Soy is complete with lower leucine density;
  25-30 % more powder or a blend closes the gap. Keep the 92/78 % utilization as utilization, not as a
  verdict. No bar-study protocol.
- Link `vegan-protein`, `suplementos-proteina`, `pros-y-contras-de-las-proteinas`,
  `sustained-release-protein`, `errores-al-tomar-suplementos`, `ganar-masa-muscular`.

### 5. Vegan protein

- All plant proteins contain the nine essential amino acids in limiting amounts; the practical variables
  are leucine density and total grams. 1.6-2.2 g/kg, 25-40 g per meal, a blend or more powder.
- Kill "only soy is complete", "more digestible than animal protein", the metabolism and inflammation
  claims, the shop link and the athlete photos.
- Link `soy-vs-milk-protein`, `suplementos-proteina`, `pros-y-contras-de-las-proteinas`,
  `comprar-proteinas`, `errores-al-tomar-suplementos`, `menos-grasa-mas-musculo`.

### 6. Creatine: the evidence

- Monohydrate, 3-5 g/day, every day, no loading required, no cycling. Strength, reps, lean mass, safety
  in healthy adults, the creatinine artefact. A dose table and a short myth section (hair, kidney,
  water).
- Cut the quiz hook, the pharmacy links, the first person, the cell-volumisation benefit and every
  IGF-1/GH/calcium claim. 900-1,000 words.
- Link `suplementos-creatina`, `creatine-and-cramps`, `creatine-and-caffeine`,
  `creatine-and-alcohol`, `creatine-and-kidneys`, `errores-al-tomar-suplementos`,
  `ganar-masa-muscular`, `fallo-muscular`, `volumen-de-entrenamiento`.

### 7. Creatine and cramps

- The evidence: no increase in cramps; the 38-player trial and the dialysis cohort, described for what
  they are. Cramps are hydration, electrolytes and fatigue; creatine is neither villain nor cure.
- Rebuild to 600+ words with the practical hydration section and the who-should-avoid note.
- Link `creatine-evidence` (page 6), `suplementos-creatina`, `creatine-and-kidneys`,
  `como-entrenar-con-altas-temperaturas`, `agujetas-causas-y-como-hacer-que-desaparezcan`,
  `regeneracion-muscular`.

### 8. Creatine and caffeine

- Coffee and creatine coexist; no meaningful antagonism at habitual doses. Caffeine ≤3 mg/kg, avoid late
  in the day, protect sleep. The 1996 and 2002 protocols are history, not a rule.
- Link `creatine-evidence`, `suplementos-creatina`, `creatine-and-alcohol`,
  `tiempo-de-descanso-entre-series`, `cuanto-dormir-para-progresar-en-el-gimnasio`,
  `errores-al-tomar-suplementos`.

### 9. Creatine and alcohol

- No interaction trials; the honest answer is that there is nothing to manage. Alcohol's bill is
  recovery, sleep and calories. Low-risk guideline, who should avoid, and the practical rule: do not
  train drunk, do not drink to recover.
- Rebuild with citations in plain language and no absolutes.
- Link `creatine-evidence`, `suplementos-creatina`, `creatine-and-caffeine`,
  `cuanto-dormir-para-progresar-en-el-gimnasio`, `regeneracion-muscular`,
  `recuperacion-activa-entrenamiento`.

### 10. Creatine and the kidney

- Creatine raises serum creatinine without changing kidney function; the eGFR can look worse. Check
  cystatin C or pause seven days before a test, and disclose the supplement to the doctor instead of
  arguing. Who should avoid: pre-existing kidney disease, pregnancy, minors, nephrotoxic medication.
- Rebuild to 600+ words; delete the polemic and the false "no effect on creatinine" line.
- Link `creatine-evidence`, `suplementos-creatina`, `creatine-and-cramps`,
  `pesas-salud-cardiovascular`, `errores-al-tomar-suplementos`, `ganar-masa-muscular`.

## Writer split

- **Writer A:** pages 1-5: `pros-y-contras-de-las-proteinas`, `mejor-proteina-nocturna`,
  `proteinas-de-liberacion-sostenida-mezclas-proteicas`, `proteina-de-soja-contra-proteina-de-leche`,
  `suplementos-de-proteina-vegana`, plus five heroes.
- **Writer B:** pages 6-10: `creatina-la-verdad`, `creatina-calambres-musculares`, `creatina-cafeina`,
  `alcohol-creatina`, `creatina-rinon`, plus five heroes.
- Neither writer touches `astro.config.mjs`, `scripts/check-i18n.mjs`, `guides-nav.ts`,
  `content-pages.md` or this document.

## Hero shortlist

1. Unlabelled protein powders.
2. Cottage cheese or a casein shake.
3. Powder in a bowl with a scoop.
4. Soybeans and milk.
5. Plant protein powder.
6. Creatine monohydrate powder.
7. Water and electrolytes.
8. Coffee and a shaker.
9. Beer and a gym bag (product-free).
10. A blood test tube or laboratory.

## Verification

## Result (2026-11-23)

- 10 bilingual pairs, 20 files, 10 heroes. Library: 581 → **591 / 792**. Nutrición **18/191**;
  Suplementos Dietéticos 18/35.
- Gates: `check:copy` **30,141/30,141**, build **1,198 pages**, `check:i18n` **18,662/18,662**, sitemap
  **1,194 URLs** with 3,582 alternates.
- Structural checks: 132 internal links, **0 broken**; zero em dashes; no BOM; no clipped cells across
  140 page/width pairs.
- **Corrections made:** one protein at four speeds; casein is a milk protein and the lactose confusion
  dies; the absorption ladder with no rankings; soy works at matched protein and leucine; all plant
  proteins contain the nine EAAs; creatine keeps the evidence and loses the rituals; cramps are
  hydration and fatigue; coffee and creatine coexist; alcohol has no creatine interaction to manage;
  the kidney page explains the creatinine artefact and says disclose, not argue.
- **Fixed by the parent:** the published `ganar-masa-muscular` and `build-muscle` still claimed creatine
  stimulates growth hormone and that creatine plus whey beats either alone; the sentence now matches the
  evidence (`9e210b5`). The carnitine and myostatin pages were polished in `a6dc8eb`.
- **Writers:** A pages 1-5, B pages 6-10, disjoint files. B rebuilt page 6 after finding it shared whole
  blocks with the published creatine hub.
- **Heroes:** eight Wikimedia files and two CC0/CC-BY images. The creatine evidence page uses a molecule
  render because Commons has only three creatine photos and the unbranded one is already the hub hero.
- Commits: pages `09cbb23`, `8999fc5`, `992c3d6`, `02d4e9c`, `70ecdcb`, `c6c9413`, `bbfc255`, `34434ad`,
  `319fca7`, `25f8f52`; routes `ada040b`.
