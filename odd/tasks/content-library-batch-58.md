# Content library — batch 58

Started: 2026-11-23. Continues the library from 571/792 (`odd/tasks/content-pages.md`).

Objective: the last two Ejercicios de Trapecios rows plus the first eight Suplementos Dietéticos rows,
from `/encogimientos-trapecio-polea/` to `/proteina-de-suero-elaboracion/`, as ten bilingual pairs.
Library 571 → 581. Ejercicios closes at 196/196.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Sources: `...\content\ejercicios\ejercicios-de-trapecios\` and
  `...\content\nutricion\suplementos-dieteticos\`
- Depends on batch 57 (`encogimientos-mancuernas`, `encogimientos-barra`,
  `encogimientos-tras-nuca-barra`) and the published `ejercicios-trapecios`, `entrenamiento-trapecios`.

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `encogimientos-trapecio-polea` | `cable-shrug` | `ejercicios-de-trapecios/encogimientos-trapecio-polea.md` | 193 | encogimientos en polea para trapecios | |
| 2 | `encogimientos-multipower` | `smith-machine-shrug` | `ejercicios-de-trapecios/encogimientos-multipower.md` | 210 | encogimientos en multipower | |
| 3 | `errores-al-tomar-suplementos` | `supplement-mistakes` | `suplementos-dieteticos/errores-al-tomar-suplementos.md` | 1,491 | errores al tomar suplementos | |
| 4 | `carnitina` | `carnitine` | `.../carnitina.md` | 1,158 | carnitina | |
| 5 | `bloquear-miostatina` | `myostatin-inhibition` | `.../bloquear-miostatina.md` | 1,288 | bloquear la miostatina | |
| 6 | `comprar-proteinas` | `protein-powder-guide` | `.../comprar-proteinas.md` | 793 | comprar proteínas | |
| 7 | `hmb-protector-de-masa-muscular` | `hmb-supplement` | `.../hmb-protector-de-masa-muscular.md` | 1,656 | HMB | |
| 8 | `suplementos-proteina` | `protein-supplements` | `.../suplementos-proteina.md` | 2,133 | suplementos de proteína | |
| 9 | `suplementos-creatina` | `creatine-supplement` | `.../suplementos-creatina.md` | 3,178 | creatina | |
| 10 | `proteina-de-suero-elaboracion` | `whey-protein-production` | `.../proteina-de-suero-elaboracion.md` | 376 | proteína de suero | |

Pages 1-2: `section: "Ejercicios de trapecios"` (`Trap exercises`). Pages 3-10:
`section: "Suplementos dietéticos"` (`Supplements`). All: `block: "Entrenamiento"` (EN `Training`) per
the site taxonomy, `updated: "2026-11-23"`.

## House rules for supplements (binding, YMYL)

These pages explain what a supplement is, what the evidence supports, what it does not and who should
not take it. They are not buying guides.

1. **No purchase CTAs, affiliate links, shop names, brand names or "best supplement" rankings.**
2. **No medical claims.** No prevention, treatment or cure. Kidney, liver and blood-pressure statements
   are limited to what trials in healthy adults support, with the qualifier kept.
3. **No invented doses.** Use the trial doses: creatine 3-5 g/day (loading optional at 20 g/day split),
   protein 1.6-2.2 g/kg/day for lifters, HMB 3 g/day. Anything else is described as unstudied.
4. **No percentages lifted from marketing.** Any figure needs a plain-language source or it goes.
5. **No athlete photos and no before/after imagery.**
6. **Say "no evidence" when there is none.** The house prefers that over an invented mechanism.

## Conflicts the batch settles (binding)

1. **The supplement hub must not sell.** Page 3 argues against buying and then links two shops. Cut the
   links, the newsletter CTA and the "nivel pro" framing; keep the four errors, the doses and the
   "buy nothing" conclusion.
2. **The anabolic window is not back.** Page 6 revives it while page 3 demolishes it. Daily total and
   distribution decide; the post-workout shake is convenience. All protein pages repeat this one rule.
3. **Protein floor is 1.6-2.2 g/kg.** Page 6 says 0.8-1 and up to 2.5; page 8 says 1.4-2.5. Fix both to
   the house range and drop the 2.5 ceiling. Endurance can sit at 1.2-1.6.
4. **Carbohydrates are not required for protein to be used.** Pages 6 and 8 claim protein is burned or
   wasted without carbs. False. Carbs are fuel and glycogen, not a protein shuttle.
5. **Carnitine does not burn fat, and it is not "useless for everything".** Page 4 overcorrects. Publish
   the fat-loss verdict with the evidence, add the TMAO precursor note and the gastrointestinal side
   effects, and drop the mockery and the institutional name-dropping.
6. **You cannot buy a myostatin blocker.** Page 5 prints a dosing table for an unstudied compound two
   lines after admitting there are no human trials. Delete the table. Publish the real story: the drug
   pipeline, the mouse data, and the only consumer lever, training.
7. **HMB is a third-line supplement for people who cannot train or eat enough.** Page 7 invents a split
   and a pre-workout window and labels them "the literature". Publish the 3 g/day trial dose, the
   untrained and immobilisation context, and the null result in trained people with adequate protein.
   The verdict is the thesis, not the epilogue.
8. **Creatine is monohydrate, 3-5 g/day, every day, no loading required, no cycling, no transporter.**
   Page 9 keeps the rituals: 1:6 creatine-to-carb ratio, 200-250 ml per 2.5 g, avoid coffee, dextrose
   plus ALA. Cut them all. Loading is optional, not necessary.
9. **The renal paragraph names the wrong substance.** Page 9 says "less than 30 grams a day of protein"
   where it means creatine. Fix it. Creatine raises serum creatinine without changing kidney function;
   disclose it before a blood test.
10. **No IGF-1, GH or calcium-release claims for creatine.** Page 9 and the published
    `ganar-masa-muscular` claim it. The batch page states the evidence-backed effects only; the parent
    patches the published sentence.
11. **Whey is a cheese by-product, not improved milk powder.** Page 10 opens with the wrong definition
    and then describes the right process. Fix the definition, keep the filtration ladder (concentrate
    80 %, isolate 90 %+, hydrolysate) and the lactose note.
12. **The protein hub is a types table.** Page 8 becomes the hub: concentrate, isolate, hydrolysate,
    casein, soy, egg, with protein per 100 g, leucine density, lactose and use case. No rankings.
13. **The cable and Smith shrugs are elevation, not "posterior trapezius".** Both pages carry the wrong
    fibre. The upper fibres elevate; retraction belongs to rows. Fix the target, keep the cable's flat
    resistance curve and the machine's fixed path, and do not repeat the dose tables already published
    in `ejercicios-trapecios`.
14. **The Smith shrug's unrack needs a safety cue.** Hooks on until the last moment, stops set, bar path
    against the thighs, pause at the top. The machine makes a short cheated rep easy; the pause is the
    exercise.
15. **Every row states its dose.** Shrugs 3-4 x 8-12 with a 1 s pause (90 s), cable shrug 3 x 12-15;
    supplements per the trial doses above. The archive gives some numbers; where it gives none, the dose
    is this batch's own recommendation and says so once.

## Global rules

1. Neutral Spanish with `tú`; zero vosotros, voseo or `usted`. Never the word `gym` in Spanish.
2. No first person, no newsletter or comment CTAs, no supplements promotions, no athlete photos, no
   medical or rehab claims, no injury promises, no "Conclusión" section, no marketing headings.
3. Zero external links, `.md` links, `#` anchors, inline images, `▷`/`✔`, escaped asterisks, emoji
   artifacts, empty headings, manual TOCs, embedded videos, duplicate images, headings with no body.
4. Links only to pages that exist (ES slugs): the ten batch pages, the batch 57 shrugs
   (`encogimientos-mancuernas`, `encogimientos-barra`, `encogimientos-tras-nuca-barra`),
   `ejercicios-trapecios`, `entrenamiento-trapecios`,
   `entrenar-los-trapecios-con-los-hombros-o-con-la-espalda`, `encogimiento-lateral-mancuerna-de-pie`,
   `remo-al-menton`, `face-pull`, `rutinas-hombros`, `press-militar-barra-de-pie`,
   `ganar-masa-muscular`, `como-ganar-peso`, `menos-grasa-mas-musculo`,
   `rutina-ganar-masa-muscular`, `volumen-de-entrenamiento`,
   `principio-adaptacion-sobrecarga-progresiva`, `fallo-muscular`, `tiempo-de-descanso-entre-series`,
   `cuanto-dormir-para-progresar-en-el-gimnasio`, `regeneracion-muscular`,
   `como-entrenar-con-altas-temperaturas`, `pesas-salud-cardiovascular`,
   `rutina-con-multipower`, `multipower-para-superar-puntos-de-estancamiento`,
   `tecnica-ejecucion-ejercicios`, `calcular-calorias`.
5. Zero em dashes. Titles 45-60, descriptions 150-160, reciprocal `alternate`.
6. Tables: programme tables markdown, three columns; setup, comparison and decision tables as
   `<table class="text-table">` with three columns. No footnote inside a cell and no asterisk markers.
   The protein types table, the creatine dose table and the supplement-evidence table are text tables.
7. Heroes: one unique per page, free licence only (Wikimedia Commons first, Pexels second), 1280 px,
   >=1200 on disk, <250 KB, credit plus honest alt, dHash on the final crop. Distance 0 is a duplicate,
   crops have measured up to 14, and white Everkinetic line art hashes 2-9 against other line art:
   open the closest hero and compare by equipment. For supplement pages prefer product-free, person-free
   images: a shaker on a counter, powder in a bowl, a label close-up without brands.
8. Body 600-900 words per locale, table-inclusive under 1,150. Page 8 and page 9 may reach 1,000.
   Pages 1, 2 and 10 are built from 193-376 archive words: setup, errors and dose, never filler.
9. Mandatory intra-batch links: 1 <-> 2 and both -> `ejercicios-trapecios`, `entrenamiento-trapecios`
   and the batch 57 shrugs; protein family 6 <-> 8 <-> 10 and all -> `errores-al-tomar-suplementos`;
   creatine 9 <-> `errores-al-tomar-suplementos`; 3 -> every supplement page in the batch;
   4, 5 and 7 -> 3 and to their closest family page.

## Per page

### 1. Cable shrug

- Low or mid pulley, straight bar or handles, stand tall, shoulders up toward the ears, 1 s pause,
  control down. 3 x 12-15, 60-90 s. The flat resistance curve keeps tension at the bottom, where a
  dumbbell unloads.
- Fix the "posterior trapezius" target. Own the cable height, the single-arm version and the
  behind-the-body path. Do not repeat the hub's dose table; link it.
- Link `encogimientos-multipower`, `encogimientos-mancuernas`, `ejercicios-trapecios`,
  `entrenamiento-trapecios`, `entrenar-los-trapecios-con-los-hombros-o-con-la-espalda`, `face-pull`.

### 2. Smith machine shrug

- Bar at knee height, hooks on until the last moment, stops set, grip just outside the thighs, shoulders
  up, 1 s pause, control down. 3-4 x 8-12, 90 s.
- Fix the fibre label and the missing unrack cue. Own the trade: the fixed path removes balance and
  makes a short cheated rep easy; the pause is the exercise.
- Link `encogimientos-trapecio-polea`, `encogimientos-barra`, `ejercicios-trapecios`,
  `entrenamiento-trapecios`, `rutina-con-multipower`,
  `multipower-para-superar-puntos-de-estancamiento`.

### 3. Supplement mistakes (hub)

- Four errors: the anabolic window, whey as a superior builder, BCAAs with adequate protein, and
  loading/cycling creatine. Then what is left: monohydrate, protein if the total is short, and food.
- Cut the shop links, the CTA and the snark. Keep the evidence-based doses and add the "buy nothing"
  conclusion.
- Link every supplement page in the batch, `ganar-masa-muscular`, `como-ganar-peso`,
  `menos-grasa-mas-musculo`, `volumen-de-entrenamiento`.

### 4. Carnitine

- What it is (a transporter for fatty acids into mitochondria), why the story is plausible, and the
  evidence: no fat-loss effect in the trials. Dose 1 g/70 kg if someone insists, with the
  gastrointestinal side effects. Add the TMAO precursor note.
- Kill the "useless for everything" absolute, the institutional name-dropping and the mockery.
- Link `errores-al-tomar-suplementos`, `menos-grasa-mas-musculo`, `como-ganar-peso`,
  `calcular-calorias`, `volumen-de-entrenamiento`.

### 5. Myostatin inhibition

- The real story: myostatin restrains growth, the mouse knockouts, the drug pipeline (antibodies,
  follistatin, propeptide), and no consumer product. Training and not being inactive are the only
  levers a reader owns.
- Delete the dosing table and the vosotros. Keep the honest sentence that no human trial exists.
- Link `errores-al-tomar-suplementos`, `ganar-masa-muscular`, `volumen-de-entrenamiento`,
  `principio-adaptacion-sobrecarga-progresiva`, `estancamiento-muscular`.

### 6. Protein powder guide (comprar proteínas)

- Read the label: protein per 100 g, protein per scoop, leucine per serving, lactose, price per 25 g of
  protein. No ranking, no shop, no year in the title.
- Fix the anabolic-window revival and the carb requirement; keep the g/kg numbers aligned with page 8.
- Link `suplementos-proteina`, `proteina-de-suero-elaboracion`, `errores-al-tomar-suplementos`,
  `ganar-masa-muscular`, `como-ganar-peso`, `menos-grasa-mas-musculo`.

### 7. HMB

- 3 g/day is the trial dose. The data lives in untrained people, immobilisation and bed rest; in trained
  people with adequate protein the effect is indistinguishable from zero.
- Delete the split, the 30-60 min window and the invented percentages. The verdict is the thesis.
- Link `errores-al-tomar-suplementos`, `suplementos-creatina`, `ganar-masa-muscular`,
  `regeneracion-muscular`, `volumen-de-entrenamiento`.

### 8. Protein supplements (hub)

- The types table: concentrate, isolate, hydrolysate, casein, soy, egg, with protein per 100 g, leucine,
  lactose and use case. Daily total 1.6-2.2 g/kg, 25-40 g per meal, distribution over the day.
- Fix the 0.8-1 and 2.5 figures, the carb requirement and the "solid food harms recovery" line. No shop
  CTA. Keep colostrum's honest "inconclusive".
- Link `proteina-de-suero-elaboracion`, `comprar-proteinas`, `errores-al-tomar-suplementos`,
  `suplementos-creatina`, `ganar-masa-muscular`, `como-ganar-peso`, `menos-grasa-mas-musculo`.

### 9. Creatine

- Monohydrate, 3-5 g/day, every day, no loading required, no cycling, no transporter, no timing rule.
  Loading optional at 20 g/day split for 5 days. A dose table and a short safety section.
- Fix the renal paragraph, cut the 1:6 ratio, the water-per-gram rule, the coffee prohibition, the
  dextrose/ALA protocol, the IGF-1 claims and the shopping section. No brand folklore.
- Link `errores-al-tomar-suplementos`, `ganar-masa-muscular`, `fallo-muscular`,
  `volumen-de-entrenamiento`, `tiempo-de-descanso-entre-series`,
  `principio-adaptacion-sobrecarga-progresiva`, `pesas-salud-cardiovascular`.

### 10. Whey protein production

- What it is: the liquid by-product of cheese and casein production, filtered and dried. The ladder:
  concentrate 80 %, isolate 90 %+, hydrolysate pre-digested. Sweetener and flavour at the end.
- Fix the "improved milk powder" definition, drop the vosotros and the swipe at trainers, add the
  lactose and allergy note. 600-750 words with a process table.
- Link `suplementos-proteina`, `comprar-proteinas`, `errores-al-tomar-suplementos`,
  `ganar-masa-muscular`, `como-ganar-peso`.

## Writer split

- **Writer A:** pages 1-5: `encogimientos-trapecio-polea`, `encogimientos-multipower`,
  `errores-al-tomar-suplementos`, `carnitina`, `bloquear-miostatina`, plus five heroes.
- **Writer B:** pages 6-10: `comprar-proteinas`, `hmb-protector-de-masa-muscular`,
  `suplementos-proteina`, `suplementos-creatina`, `proteina-de-suero-elaboracion`, plus five heroes.
- Neither writer touches `astro.config.mjs`, `scripts/check-i18n.mjs`, `guides-nav.ts`,
  `content-pages.md`, `ganar-masa-muscular.md` or this document. The parent patches the published
  creatine/GH sentence.

## Hero shortlist

1. Cable station shrug.
2. Smith machine shrug.
3. Supplement hub: a shaker and a scoop, no brands.
4. Carnitine: powder or capsules, no labels.
5. Myostatin: laboratory or DNA image.
6. Protein powder: a tub without brand, or powder in a bowl.
7. HMB: capsules or powder, no labels.
8. Protein types: several unlabelled powders.
9. Creatine: monohydrate powder.
10. Whey production: cheese or filtration imagery.

## Verification

## Result (2026-11-23)

- 10 bilingual pairs, 20 files, 10 heroes. Library: 571 → **581 / 792**. Ejercicios **196/196 —
  COMPLETO**; Suplementos Dietéticos 8/35.
- Gates: `check:copy` **29,631/29,631**, build **1,178 pages**, `check:i18n` **18,352/18,352**, sitemap
  **1,174 URLs** with 3,522 alternates.
- Structural checks: 126 internal links, **0 broken**; zero em dashes; no BOM; no clipped cells across
  140 page/width pairs.
- **Corrections made:** the cable and Smith shrugs are elevation, not "posterior trapezius", with the
  cable's flat curve and the machine's unrack cue; the supplement hub loses the shop links and the CTA
  and keeps the four errors; carnitine softens its absolute and adds TMAO; myostatin loses the dosing
  table and explains why no consumer blocker exists; the protein guide reads labels and computes cost
  per 25 g; HMB keeps one dose and a context table; the protein hub gains the types table and the
  1.6-2.2 g/kg range; creatine is monohydrate, 3-5 g/day, no rituals, with the renal paragraph fixed;
  whey is a cheese by-product with the filtration ladder.
- **Fixed by the parent:** the carnitine pages linked the calorie calculator, which the article-only
  link check flags. The link was removed and the guide link kept. The behind-the-back shrug wording was
  polished in a follow-up commit.
- **Writers:** A pages 1-5, B pages 6-10, disjoint files. B rejected two heroes that collided with
  published ones and used the InjuryMap trapezius plate for the behind-the-back page.
- **Heroes:** eight Wikimedia files and two Pexels. The creatine hero is a white powder on a white tub,
  the weakest of the batch, chosen because labelled alternatives showed brands.
- Commits: pages `341d3f7`, `f16bea6`, `b0d6c58`, `bfc4532`, `ffec5a6`, `f9bda3a`, `1b11b09`, `b610aa1`,
  `72198cd`, `e7eab24`; polish `285fee5`; routes `e295408`.
