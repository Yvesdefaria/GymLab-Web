# Content library — batch 60

Started: 2026-11-24. Continues the library from 591/792 (`odd/tasks/content-pages.md`).

Objective: the first ten unchecked Suplementos Dietéticos rows, from
`/aceite-de-cbd-beneficios-para-el-deportista/` to `/glucosamina/`, as ten bilingual pairs. Library
591 → 601.

The previous handoff listed batch 60 as starting at `/aminoacidos-bcaas/`, but the per-page checklist is
authoritative and it opens with seven unchecked rows before that one. This batch takes the checklist
order so no earlier row is skipped.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Sources: `...\content\nutricion\suplementos-dieteticos\`
- Depends on batch 59 (`suplementos-proteina`, `suplementos-creatina`, `creatina-la-verdad`,
  `creatina-rinon`, `errores-al-tomar-suplementos`, `comprar-proteinas`).

## Tasks

- [x] T1 Scope, conflicts and house rules written (this document).
- [x] T2 Writer A: pages 1-5, ES + EN + heroes.
- [x] T3 Writer B: pages 6-10, ES + EN + heroes.
- [x] T4 Routes registered in `astro.config.mjs` and `scripts/check-i18n.mjs`.
- [x] T5 Parent gates, link check, render pass, dHash pass, per-page commits, checklist and handoff.

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `aceite-de-cbd-beneficios-para-el-deportista` | `cbd-oil-for-athletes` | `aceite-de-cbd-beneficios-para-el-deportista.md` | 818 | aceite de CBD | |
| 2 | `como-empezar-a-tomar-suplementos-deportivos` | `how-to-start-taking-supplements` | `como-empezar-a-tomar-suplementos-deportivos.md` | 1,015 | suplementos deportivos | |
| 3 | `como-mejorar-tus-fisico-con-estos-batidos` | `pre-and-post-workout-shakes` | `como-mejorar-tus-fisico-con-estos-batidos.md` | 861 | batidos pre y post entrenamiento | |
| 4 | `suplementos-dieteticos` | `best-supplements-for-the-gym` | `suplementos-dieteticos.md` | 1,393 | suplementos dietéticos | |
| 5 | `los-dos-mejores-suplementos-para-ganar-masa-muscular` | `best-supplements-for-muscle-growth` | `los-dos-mejores-suplementos-para-ganar-masa-muscular.md` | 943 | suplementos para ganar masa muscular | |
| 6 | `suplementos-glutamina` | `glutamine-supplement` | `suplementos-glutamina.md` | 2,328 | glutamina | |
| 7 | `tribulus-terrestris` | `tribulus-terrestris` | `tribulus-terrestris.md` | 1,035 | tribulus terrestris | |
| 8 | `aminoacidos-bcaas` | `bcaa-supplements` | `aminoacidos-bcaas.md` | 1,809 | BCAA | |
| 9 | `reemplazo-comidas` | `meal-replacement-shakes` | `reemplazo-comidas.md` | 418 | reemplazos de comidas | |
| 10 | `glucosamina` | `glucosamine-for-joints` | `glucosamina.md` | 1,122 | glucosamina | |

All: `block: "Entrenamiento"` (EN `Training`), `section: "Suplementos dietéticos"` (`Supplements`),
`updated: "2026-11-24"`.

## House rules for supplements (binding, YMYL)

1. **No purchase CTAs, affiliate links, shop names, brand names or "best" rankings.** Page 5 is the only
   page allowed a superlative, and only with the evidence: "los dos que sobreviven al escrutinio".
2. **No medical claims.** Anxiety, sleep, pain, immunity, joint and kidney statements stay inside what
   trials in healthy adults support, with the qualifier kept. Page 1 and page 10 are the strictest.
3. **No invented doses.** Creatine 3-5 g/day (loading optional at 20 g/day split), protein 1.6-2.2 g/kg
   and 25-40 g per meal, beta-alanine 3.2-6.4 g/day, caffeine up to 3 mg/kg, glucosamine sulfate 1.5
   g/day, vitamin D only with a measured deficiency. Anything else is described as unstudied.
4. **No percentages lifted from marketing.** Any figure needs a plain-language source or it goes.
5. **No athlete photos, no before/after imagery, no product labels with brands.**
6. **Say "no evidence" when there is none.** Prefer that over an invented mechanism.
7. **No dosing, sourcing or "how to use" detail for controlled substances.** Batch 61 carries the
   steroids page under the same rule.

## Conflicts the batch settles (binding)

1. **CBD is a label problem, not a benefits list.** The archive claims "no produce impactos secundarios
   perjudiciales" and an adaptogen mechanism. Delete both. WADA removed CBD (not THC) from its
   prohibited list in 2018; that is not a safety clearance. Product reality: mg per drop varies, a
   full-spectrum oil can carry enough THC to fail a test, and only a batch-specific third-party
   certificate of analysis answers the question. Evidence is modest for epilepsy with prescription
   forms and thin or inconsistent for anxiety, sleep and pain in healthy people. No muscle or recovery
   benefit.
2. **Beginners need a decision tree, not a stack.** The archive has no dose anywhere and sells a
   fat-burner that "transforms fat into energy", which is false. The page's spine: four questions
   (protein and calories, sleep, programming, a diagnosed deficiency) before any purchase. Only three
   candidates survive: creatine monohydrate, protein powder as convenient food, vitamin D with a
   measured deficiency. Glutamine as an endurance aid dies here and on page 6.
3. **A shake is food plus two optional molecules.** Kill the invented "four components", the 30-minute
   window as a deadline, the gymnema-insulin claim, glutamine bicarbonate, "casein beats whey for size"
   and every `vosotros` form. Total protein 1.6-2.2 g/kg and total carbohydrate decide; a shake is
   convenience. Beta-alanine 3.2-6.4 g/day for four weeks, caffeine up to 3 mg/kg, or nothing else.
4. **The supplement hub teaches label literacy.** Delete "no suponen ningún riesgo para la salud". The
   asset is a repeatable buyer's test: form and dose per serving, proprietary blends, third-party
   certification (Informed Sport, NSF Certified for Sport), batch certificate, interactions, expiry.
   "Only sold online" is suspicion of the seller, not of the channel.
5. **Two supplements survive, and the arithmetic is the point.** Protein and creatine monohydrate.
   Delete "post-workout is more important than the daily total", the 2-months-on/1-month-off cycle,
   "creatine needs insulin" and the unnamed Australian university. Creatine 3-5 g/day, every day, no
   cycling.
6. **Glutamine is the "don't buy it" page.** Conditionally essential in burns, ICU and surgery; in
   healthy lifters synthesis covers demand and supplementation does not raise muscle protein synthesis
   or performance. The archive's GH pulse, 11% synthesis and 40-50 mg/kg dose are acute, sedentary or
   invented; delete the dose and the fasting ritual. Keep the clinical use under supervision and the
   honest verdict. 700-900 words.
7. **Tribulus is anti-hype and the WADA line is wrong.** WADA does not publish a "dangerous" list and
   tribulus is not prohibited. Trials at 450 mg/day for five weeks and 750 mg/day for eight weeks found
   no testosterone or strength change in trained men; a few small older studies were not replicated.
   Keep the ad quote as the foil. No long-term safety data; interactions and the groups that should ask
   a doctor.
8. **BCAAs are a subset of EAAs.** Roughly a third of muscle protein's amino acids are branched-chain;
   that is not "a third of protein". At 1.6-2.2 g/kg, extra BCAAs add nothing; when protein is low, whey
   or EAAs beat BCAAs. The +1.5% lean-mass study was an altitude trial with a small sample; the +90% GH
   study was acute in triathletes and does not mean hypertrophy. Delete the fat-loss and brain claims.
9. **A meal replacement is convenience food with a label.** Delete the invented 50/40/10 split and the
   "no health problems" line. Teach label math: protein 20-30 g per serving, fibre 5 g or more, sugar
   under 10 g, calories consistent with the goal. Useful when a meal is impossible, not a weight-loss
   method. The 418-word source must reach 600 with label math and real context, never filler.
10. **Glucosamine is modest at best.** Glucosamine sulfate 1.5 g/day (3 x 500 mg), with or without
    chondroitin 1.2 g/day; small to moderate pain benefit in knee osteoarthritis, structure modification
    unclear, and no evidence for prevention or tendon repair in healthy lifters. Delete the
    arthritis-treatment framing. Link the tendinopathy pages for loading, which is what actually works.

## Global rules

1. Neutral Spanish with `tú`; zero vosotros, voseo or `usted`. Never the word `gym` in Spanish.
2. No first person, no newsletter or comment CTAs, no supplement promotions, no athlete photos, no
   medical or rehab claims, no injury promises, no "Conclusión" section, no marketing headings, no
   "milagro" framing.
3. Zero external links, `.md` links, `#` anchors, inline images, `▷`/`✔`, escaped asterisks, emoji
   artifacts, empty headings, manual TOCs, embedded videos, duplicate images, headings with no body.
4. Links only to pages that exist (ES slugs): the ten batch pages, the 18 published supplement pages
   (`errores-al-tomar-suplementos`, `carnitina`, `bloquear-miostatina`, `comprar-proteinas`,
   `hmb-protector-de-masa-muscular`, `suplementos-proteina`, `suplementos-creatina`,
   `proteina-de-suero-elaboracion`, `pros-y-contras-de-las-proteinas`, `mejor-proteina-nocturna`,
   `proteinas-de-liberacion-sostenida-mezclas-proteicas`, `proteina-de-soja-contra-proteina-de-leche`,
   `suplementos-de-proteina-vegana`, `creatina-la-verdad`, `creatina-calambres-musculares`,
   `creatina-cafeina`, `alcohol-creatina`, `creatina-rinon`), `ganar-masa-muscular`, `como-ganar-peso`,
   `menos-grasa-mas-musculo`, `rutina-ganar-masa-muscular`, `volumen-de-entrenamiento`,
   `principio-adaptacion-sobrecarga-progresiva`, `fallo-muscular`, `tiempo-de-descanso-entre-series`,
   `cuanto-dormir-para-progresar-en-el-gimnasio`, `agujetas-causas-y-como-hacer-que-desaparezcan`,
   `regeneracion-muscular`, `sobreentrenamiento`, `recuperacion-activa-entrenamiento`,
   `potencia-tu-sistema-immunologico-con-el-entrenamiento`, `fatiga-del-sistema-nervioso-central-snc`,
   `tendinitis-rotuliana`, `tendinitis-tendon-aquiles`, `epicondilitis`,
   `dolor-cronico-y-fisioterapia-tratamientos-que-funcionan`, `sindrome-tunel-carpiano`,
   `pesas-salud-cardiovascular`, `guia-musculacion-principiantes`, `calcular-calorias`.
5. Zero em dashes. Titles 45-60, descriptions 150-160, reciprocal `alternate`.
6. Tables: programme tables markdown, three columns; setup, comparison and decision tables as
   `<table class="text-table">` with three columns. No footnote inside a cell and no asterisk markers.
   The label checklist, the dose table and the four-questions table are text tables.
7. Heroes: one unique per page, free licence only (Wikimedia Commons first, Pexels second), 1280 px,
   >=1200 on disk, <250 KB, credit plus honest alt, dHash on the final crop. Distance 0 is a duplicate,
   crops have measured up to 14, and white Everkinetic line art hashes 2-9 against other line art:
   open the closest hero and compare by equipment. For supplement pages prefer product-free,
   person-free images: hemp, powder, capsules, a label macro, a molecular structure, a kitchen scale.
8. Body 600-900 words per locale, table-inclusive under 1,150. Page 4 up to 1,000; page 6 at 700-900;
   page 9 built from 418 words must reach 600 with real content.
9. Mandatory intra-batch links: 1 <-> 2, 1 -> 4; 2 -> 4, 5, 8; 3 -> 5, 8, 9; 4 -> 1, 2, 3, 5, 6, 7, 8,
   9, 10; 5 <-> 6, 5 -> 7, 8; 6 -> 8, 2; 7 -> 5, 6; 8 -> 3, 5, 6; 9 -> 3, 4, 5; 10 -> 2, 4. All ten
   link `errores-al-tomar-suplementos`.

## Per page

### 1. CBD oil for athletes

- Rebuild around three real questions: what the product is (one cannabinoid of many, THC trace), what
  the evidence supports (prescription forms for epilepsy; thin for anxiety, sleep and pain; nothing for
  muscle or recovery) and what the label hides (mg per drop, carrier oil, full spectrum versus isolate,
  third-party certificate).
- Correct WADA: CBD was removed from the prohibited list in 2018; other cannabinoids and THC remain
  prohibited in competition, and a full-spectrum oil is the risk.
- Delete the affiliate link, the adaptogen/homeostasis mechanism, the blanket "no harmful effects", the
  antiemetic claim and the "narcotic influence" line.
- Link `suplementos-dieteticos` (page 4), `como-empezar-a-tomar-suplementos-deportivos` (page 2),
  `errores-al-tomar-suplementos`.

### 2. How to start taking sports supplements

- Spine: four questions before any purchase (protein and calories, sleep 7-9 h, programmed training, a
  diagnosed deficiency). Then the short list: creatine monohydrate 3-5 g/day, protein powder as food
  convenience, vitamin D only with a measured deficiency.
- Delete the fat-burner "turns fat into energy" mechanism, glutamine as an endurance aid, the shop
  link, "keep reading" and the first person plural.
- Link `suplementos-dieteticos`, `suplementos-creatina`, `suplementos-proteina`,
  `suplementos-glutamina` (page 6), `aminoacidos-bcaas` (page 8), `errores-al-tomar-suplementos`,
  `ganar-masa-muscular`.

### 3. Pre and post workout shakes

- The honest structure: total protein 1.6-2.2 g/kg and 25-40 g per meal; carbohydrate 3-5 g/kg for
  lifters; a shake is one convenient meal. Beta-alanine 3.2-6.4 g/day for four weeks and caffeine up to
  3 mg/kg are the only two additives with a case; both are optional.
- Kill the four-component taxonomy, the 30-minute deadline, gymnema, glutamine bicarbonate, BCAA as
  obligatory, "casein beats whey for size" and every vosotros form.
- Link `suplementos-proteina`, `los-dos-mejores-suplementos-para-ganar-masa-muscular` (page 5),
  `aminoacidos-bcaas` (page 8), `reemplazo-comidas` (page 9), `creatina-cafeina`,
  `errores-al-tomar-suplementos`.

### 4. Best supplements for the gym

- Rebuild as the hub: a buyer's checklist (form and dose per serving, proprietary blends, third-party
  certification, batch certificate, interactions, expiry), then the short evidence list.
- Delete "no risk for health". Qualify the "only online is suspicious" line: it is about the seller and
  the certificate, not the channel.
- Link every batch page plus `suplementos-proteina`, `suplementos-creatina`, `creatina-la-verdad`,
  `errores-al-tomar-suplementos`, `comprar-proteinas`.

### 5. Two best supplements for muscle

- Protein and creatine monohydrate, with arithmetic: 80 kg x 1.8 = 144 g/day, four meals of 36 g;
  creatine 3-5 g/day every day, loading optional, no cycling.
- Kill "post-workout matters more than the daily total", the 2-on/1-off cycle and "creatine needs
  insulin". The 30 g post-workout figure stays as one example, not a rule.
- Link `suplementos-creatina`, `creatina-la-verdad`, `pros-y-contras-de-las-proteinas`,
  `suplementos-proteina`, `suplementos-glutamina` (page 6), `tribulus-terrestris` (page 7),
  `aminoacidos-bcaas` (page 8), `ganar-masa-muscular`.

### 6. Glutamine

- The honest page: conditionally essential in catabolic illness; in healthy trained adults synthesis
  covers demand. Glutamine does not increase muscle protein synthesis, strength or lean mass in the
  trials that matter.
- Explain why the cited results do not transfer: acute infusion, sedentary subjects, a GH pulse that
  does not build muscle, synthesis percentages measured in illness.
- Delete the 40-50 mg/kg dose, the fasting ritual and the "buy kilos" line. Keep the clinical use
  under supervision and the practical verdict: money better spent on food.
- Link `aminoacidos-bcaas` (page 8), `como-empezar-a-tomar-suplementos-deportivos` (page 2),
  `errores-al-tomar-suplementos`, `sobreentrenamiento`, `regeneracion-muscular`.

### 7. Tribulus terrestris

- Anti-hype page. Keep the ad quote ("+40% testosterone") as the foil. The two controlled trials at
  450 mg/day and 750 mg/day found no change in testosterone or strength in trained men.
- Correct WADA: no "dangerous substances" list, tribulus is not prohibited, and it is not a steroid
  precursor.
- Safety: limited long-term data, interactions, and the groups that must ask a doctor. No purchase
  angle.
- Link `los-dos-mejores-suplementos-para-ganar-masa-muscular` (page 5), `suplementos-glutamina`
  (page 6), `errores-al-tomar-suplementos`, `creatina-la-verdad`.

### 8. BCAA

- Spine: BCAAs are three of the nine essential amino acids; muscle protein is roughly a third
  branched-chain, not "a third of protein". At 1.6-2.2 g/kg the marginal leucine is zero; when protein
  is low, whey or EAAs beat BCAAs.
- Dismantle the +1.5% lean-mass altitude study and the GH +90% acute study. Delete fat loss, "brain
  stimulant" and the 50 mg/kg safety blanket. If used at all, 5-10 g, with the honest note that food
  does the same job.
- Link `suplementos-proteina`, `proteina-de-suero-elaboracion`, `pros-y-contras-de-las-proteinas`,
  `proteinas-de-liberacion-sostenida-mezclas-proteicas`, `como-mejorar-tus-fisico-con-estos-batidos`
  (page 3), `los-dos-mejores-suplementos-para-ganar-masa-muscular` (page 5), `suplementos-glutamina`
  (page 6).

### 9. Meal replacements

- Label math page: per serving and per 100 g, protein 20-30 g, fibre 5 g or more, sugar under 10 g,
  calories that fit the goal. When a replacement is useful (a meal is impossible) and when it is not
  (as a weight-loss method).
- Delete the 50/40/10 prescription, the "usted" voice and the "no health problems" line. Qualify the
  cost comparison: per meal, not per pack.
- Link `como-mejorar-tus-fisico-con-estos-batidos` (page 3), `suplementos-dieteticos` (page 4),
  `los-dos-mejores-suplementos-para-ganar-masa-muscular` (page 5), `como-ganar-peso`,
  `menos-grasa-mas-musculo`, `calcular-calorias`.

### 10. Glucosamine

- Glucosamine sulfate 1.5 g/day; chondroitin 1.2 g/day optional. Small to moderate pain benefit in
  knee osteoarthritis; structure modification unclear; no evidence for prevention or tendon repair in
  healthy lifters.
- Delete the arthritis-treatment framing. Say plainly that loading beats any capsule for tendinopathy
  and link the three tendinopathy pages plus the physiotherapy page.
- Link `como-empezar-a-tomar-suplementos-deportivos` (page 2), `suplementos-dieteticos` (page 4),
  `tendinitis-rotuliana`, `tendinitis-tendon-aquiles`, `epicondilitis`,
  `dolor-cronico-y-fisioterapia-tratamientos-que-funcionan`, `errores-al-tomar-suplementos`.

## Writer split

- **Writer A:** pages 1-5: `aceite-de-cbd-beneficios-para-el-deportista`,
  `como-empezar-a-tomar-suplementos-deportivos`, `como-mejorar-tus-fisico-con-estos-batidos`,
  `suplementos-dieteticos`, `los-dos-mejores-suplementos-para-ganar-masa-muscular`, plus five heroes.
- **Writer B:** pages 6-10: `suplementos-glutamina`, `tribulus-terrestris`, `aminoacidos-bcaas`,
  `reemplazo-comidas`, `glucosamina`, plus five heroes.
- Neither writer touches `astro.config.mjs`, `scripts/check-i18n.mjs`, `guides-nav.ts`,
  `content-pages.md` or this document.

## Hero shortlist

1. Hemp field or hemp leaves (no product, no brand).
2. Kitchen scale with rice, chicken or oats.
3. Oats, banana and milk on a counter.
4. Supplement label macro or laboratory vials.
5. Unbranded creatine or protein powder on a spoon.
6. Glutamine or glutamate molecular structure.
7. *Tribulus terrestris* flower or fruit.
8. Leucine, isoleucine and valine structures side by side.
9. Oats or a porridge bowl as a meal-replacement stand-in.
10. Glucosamine molecule or a knee cartilage diagram.

## Verification

```powershell
npm run check:copy   # expected 30,651
npm run build        # expected 1,218 pages
npm run check:i18n   # expected 18,972, 1,214 sitemap URLs
```

Parent checks beyond the gates: every internal link resolves, zero em dashes, no BOM, dHash over all
heroes, 140 page/width pairs with no clipped cell.

## Result (2026-11-24)

- 10 bilingual pairs, 20 files, 10 heroes. Library 591 → **601 / 792**. Nutrición **28/191**;
  Suplementos Dietéticos **28/35**.
- Gates: `check:copy` **30,651/30,651**, build **1,218 pages**, `check:i18n` **18,972/18,972**, sitemap
  **1,214 URLs** with 3,642 alternates.
- Structural checks: 150 internal links, **0 broken**; zero em dashes; no BOM; 140 page/width pairs with
  **0 clipped cells**.
- **Corrections made:** CBD is a label and THC-trace problem, not a recovery aid; beginners get four
  questions before a purchase; a shake is food plus two optional molecules; the hub teaches label
  literacy and third-party certificates; only protein and creatine monohydrate survive, with the dose
  arithmetic; glutamine is the honest "do not buy it" page; tribulus is anti-hype and WADA has no
  "dangerous" list; BCAAs are a subset of EAAs and add nothing at 1.6-2.2 g/kg; a meal replacement is
  convenience food with a label; glucosamine is modest at best and does not repair tendons.
- **Fixed by the parent:** the two `reemplazo-comidas` locales linked the calorie calculator, which the
  article-only link check flags; both now link `ganar-masa-muscular` / `build-muscle`. A short
  "powder, bottle or bar" section and a "how to read the label" section were added to
  `reemplazo-comidas` and `glucosamina` so the prose floor holds in both locales.
- **Writers:** A pages 1-5, B pages 6-10, disjoint files. Both ran the copy gate; the parent ran the
  build, i18n, render and dHash passes.
- **Heroes:** nine Wikimedia files and one composited triptych of the three BCAA structures. All
  1280x720, 51-229 KB. The only low dHash is the BCAA triptych at 13 against a full-colour photo,
  checked by eye: white background, unrelated subject.
- Commits: pages `c680c65`, `a0ef9bb`, `e2861ee`, `92bd04a`, `70b51b5`, `36590e7`, `042d706`, `90414ce`,
  `36b9473`, `90caae9`; routes `1c819a1`.
