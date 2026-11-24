# Content library — batch 65

Started: 2026-11-24. Continues the library from 641/792 after batches 63 and 64
(`odd/tasks/content-pages.md`).

Objective: `nutricion-culturista-reglas-basicas` to `cerezas-post-entrenamiento`, as ten bilingual
pairs. Library 641 → 651.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Sources: `...\content\nutricion\nutricion-aplicada\`
- Depends on batches 60-64.

## Tasks

- [x] T1 Scope, conflicts and house rules written (this document).
- [x] T2 Writer A: pages 1-5, ES + EN + heroes.
- [x] T3 Writer B: pages 6-10, ES + EN + heroes.
- [x] T4 Routes registered in `astro.config.mjs` and `scripts/check-i18n.mjs`.
- [x] T5 Parent gates, link check, render pass, dHash pass, per-page commits, checklist and handoff.

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `nutricion-culturista-reglas-basicas` | `bodybuilding-nutrition-basics` | `nutricion-culturista-reglas-basicas.md` | 1,680 | nutrición para culturismo | |
| 2 | `comida-segun-hora-entrenar` | `meal-timing-around-training` | `comida-segun-hora-entrenar.md` | 936 | comida según hora de entrenar | |
| 3 | `comida-pre-entrenamiento` | `pre-workout-meal` | `comida-pre-entrenamiento.md` | 625 | comida antes de entrenar | |
| 4 | `comida-post-entrenamiento` | `post-workout-meal` | `comida-post-entrenamiento.md` | 707 | comida después de entrenar | |
| 5 | `como-ser-disciplinado-dieta` | `diet-discipline` | `como-ser-disciplinado-dieta.md` | 1,356 | disciplina en la dieta | |
| 6 | `comida-trampa` | `cheat-meals` | `comida-trampa.md` | 924 | comida trampa | |
| 7 | `guia-basica-de-nutricion-culturista` | `bodybuilding-nutrition-guide` | `guia-basica-de-nutricion-culturista.md` | 1,905 | nutrición culturista | |
| 8 | `ganar-musculo-vegetarianos` | `vegetarian-muscle-gain` | `ganar-musculo-vegetarianos.md` | 1,803 | ganar músculo vegetariano | |
| 9 | `remediar-intolerancia-lactosa` | `lactose-intolerance-and-training` | `remediar-intolerancia-lactosa.md` | 865 | intolerancia a la lactosa | |
| 10 | `cerezas-post-entrenamiento` | `cherries-after-training` | `cerezas-post-entrenamiento.md` | 517 | cerezas post entrenamiento | |

All: `block: "Entrenamiento"` (`Training`), `section: "Nutrición aplicada"` (`Applied nutrition`),
`updated: "2026-11-24"`.

## House rules (binding, YMYL)

1. **No purchase CTAs, affiliate links, shop names, brand names or "best" rankings.**
2. **No medical claims.** Hormones, thyroid, leptin, diabetes, arthritis, gout, lactose and anaemia
   statements stay inside what trials in healthy adults support, with the qualifier kept.
3. **No invented numbers.** Protein 1.6-2.2 g/kg and 25-40 g per meal, fat 0.8-1 g/kg, carbohydrate
   3-5 g/kg for lifters, fibre 25-35 g/day, water 2-3 L baseline plus sweat losses. Anything else is
   described as unstudied.
4. **No "cheat day" binges, no metabolic-reset claims, no antioxidant loading, no 4 L water law.**
5. **No athlete photos, no before/after imagery, no named bodybuilders as proof.**

## Conflicts the batch settles (binding)

1. **Macros are grams, not percentages.** Protein 1.6-2.2 g/kg, fat 0.8-1 g/kg, carbohydrate fills the
   rest. Delete the 2.5 g/kg protein, the `weight x 4.5 x 10` formula, the three macro-percentage
   triads and the one-third saturated fat line.
2. **Meal frequency is 3-5, not a law.** What matters is the daily total and the protein spread. Delete
   the six-meal rule and the 4 L water law.
3. **The post-workout ratio is not 2:1 or 3:1.** 20-40 g of protein plus enough carbohydrate to refill
   the session is the practical rule; the total day decides. Delete both ratios.
4. **No fat ban after training.** The archive forbids fat and then recommends nuts and whole milk in the
   same page. Fat does not block absorption in a mixed meal.
5. **Fruit after training is fine.** Delete the fructose claim. Fruit is a carbohydrate source.
6. **A cheat meal is a budget line.** One planned higher-calorie meal inside the weekly total, not a
   metabolic reset, not a binge day. Delete the leptin, thyroid and IGF mechanism, the named
   bodybuilders, the "scientific proof" and the unnamed 95 % study.
7. **Antioxidant tablets are not a recovery tool.** High doses can blunt training adaptations. Delete
   the pre-workout tablet and the "more volume, more antioxidants" line.
8. **Breakfast is optional; the total is not.** Delete the mandatory "big breakfast" and the 4 L water.
9. **Dairy is a dose limit, not a poison.** Lactose intolerance is a dose-dependent digestion problem,
   not an allergy or a diagnosis to make at home. Delete the brand plug, "milk is for children" and the
   calcium-burns-fat claim. Build a swap table for protein and calcium.
10. **Cherries are fruit with a small soreness signal.** One 14-person eccentric trial; ½-1 cup is a
    portion, not a treatment. Delete arthritis, gout, the PCR external link and the glycogen claim.

## Global rules

1. Neutral Spanish with `tú`; zero vosotros, voseo or `usted`. Never the word `gym` in Spanish.
2. No first person, no newsletter or comment CTAs, no supplement promotions, no athlete photos, no
   medical or rehab claims, no "Conclusión" section, no marketing headings.
3. Zero external links, `.md` links, `#` anchors, inline images, `▷`/`✔`, escaped asterisks, emoji
   artifacts, empty headings, manual TOCs, embedded videos, duplicate images, headings with no body.
4. Links only to pages that exist (ES slugs): the ten batch pages, the batch 60-63 pages, the 18
   published supplement pages, `ganar-masa-muscular`, `como-ganar-peso`, `menos-grasa-mas-musculo`,
   `entrenamiento-perder-grasa`, `rutina-quema-grasa-sin-hacer-aerobicos`,
   `como-orientar-tu-rutina-de-pesas-para-perder-grasa`,
   `perder-grasa-abdominal-con-abdominales`, `cardio-ayunas`,
   `como-ser-constante-en-el-entrenamiento`, `elegir-gimnasio`,
   `tu-primer-dia-en-el-gimnasio-como-superarlo-y-querer-volver`,
   `rutina-de-entrenamiento-primer-mes-en-el-gimnasio`, `rutina-pesas-tras-inactividad`,
   `rutina-de-cuerpo-completo-para-recuperar-la-forma`, `guia-musculacion-principiantes`,
   `cuanto-dormir-para-progresar-en-el-gimnasio`, `agujetas-causas-y-como-hacer-que-desaparezcan`,
   `regeneracion-muscular`, `sobreentrenamiento`, `recuperacion-activa-entrenamiento`,
   `pros-y-contras-de-las-proteinas`, `proteinas-de-liberacion-sostenida-mezclas-proteicas`,
   `proteina-de-suero-elaboracion`, `mejor-proteina-nocturna`,
   `proteina-de-soja-contra-proteina-de-leche`, `suplementos-de-proteina-vegana`,
   `creatina-la-verdad`, `pesas-salud-cardiovascular`, `calcular-calorias`.
5. Zero em dashes. Titles 45-60, descriptions 150-160, reciprocal `alternate`.
6. Tables: comparison and decision tables as `<table class="text-table">` with three columns. The meal
   slots, the macro grams, the swap table and the water guide are text tables.
7. Heroes: one unique per page, free licence only (Wikimedia Commons first, Pexels second), 1280 px,
   >=1200 on disk, <250 KB, credit plus honest alt, dHash on the final crop. Distance 0 is a duplicate,
   crops have measured up to 14, and white line art hashes 2-9 against other line art: open the closest
   hero and compare by subject. Prefer product-free, person-free images.
8. Body 600-900 words per locale, table-inclusive under 1,150. Pages 3, 4 and 10 come from 625, 707 and
   517 words and must reach 600 with real content.
9. Mandatory intra-batch links: 1 -> 2, 5, 7; 2 -> 1, 3, 4; 3 -> 1, 2, 4; 4 -> 1, 2, 3; 5 -> 1, 6, 7;
   6 -> 1, 5, 7; 7 -> 1, 2, 8; 8 -> 1, 3, 7; 9 -> 1, 4, 7; 10 -> 1, 4, 5. All ten link
   `errores-al-tomar-suplementos`.

## Per page

### 1. Bodybuilding nutrition: basic rules

- Arithmetic first: protein 1.6-2.2 g/kg in grams, fat 0.8-1 g/kg, carbohydrate fills the rest, weekly
  weight trend decides. Three to five meals is enough.
- Delete 4 L water, 2.5 g/kg protein, the `x4.5x10` formula, the macro-percentage triads and the
  one-third saturated fat line.
- Link `comida-segun-hora-entrenar` (page 2), `como-ser-disciplinado-dieta` (page 5),
  `guia-basica-de-nutricion-culturista` (page 7), `carbohidratos`, `como-ganar-peso`,
  `errores-al-tomar-suplementos`.

### 2. Meal timing around training

- Build the day backwards from the session: one rule per slot, the size and fibre of the last meal
  change, the daily totals do not. Practical examples for morning, midday and evening sessions.
- Delete the antioxidant tablet, the named expert, the 1 g/kg pre-carb overkill and the fruit/fructose
  claim.
- Link `nutricion-culturista-reglas-basicas` (page 1), `comida-pre-entrenamiento` (page 3),
  `comida-post-entrenamiento` (page 4), `carbohidratos`, `ayuno-intermitente`,
  `errores-al-tomar-suplementos`.

### 3. Pre-workout meal

- 1-3 hours before: 20-40 g of carbohydrate and 20-30 g of protein, low fat and low fibre when the meal
  is close. Fibre slows gastric emptying, it does not speed digestion.
- Delete "burns more calories", "more pump" and the inverted fibre claim. Qualify fasted training.
- Link `nutricion-culturista-reglas-basicas` (page 1), `comida-segun-hora-entrenar` (page 2),
  `comida-post-entrenamiento` (page 4), `carbohidratos`,
  `como-mejorar-tus-fisico-con-estos-batidos`, `errores-al-tomar-suplementos`.

### 4. Post-workout meal

- 20-40 g of protein plus carbohydrate; the window lasts hours, so eat when it fits. The 549 kcal block
  does not add up: recalculate or remove it. No fat ban. Hydrate by thirst and sweat, not every ten
  minutes.
- Delete the 30-minute golden hour as a deadline and the every-10-minutes rule.
- Link `nutricion-culturista-reglas-basicas` (page 1), `comida-segun-hora-entrenar` (page 2),
  `comida-pre-entrenamiento` (page 3), `carbohidratos`, `mejor-proteina-nocturna`,
  `errores-al-tomar-suplementos`.

### 5. Diet discipline

- Logistics: list, prep, environment, weekly review. Discipline is a stocked fridge and a written list,
  not willpower. Realistic 80/20 framing without moralizing.
- Delete "80 % of the equation", the 4 L water, "if it has no label do not eat it", the supplement CTAs
  and every usted form.
- Link `nutricion-culturista-reglas-basicas` (page 1), `comida-trampa` (page 6),
  `guia-basica-de-nutricion-culturista` (page 7), `como-ser-constante-en-el-entrenamiento`,
  `errores-al-tomar-suplementos`.

### 6. Cheat meals

- One planned higher-calorie meal inside the weekly budget. The weekly total decides; one meal cannot
  outrun six days. Social and psychological role, without a binge.
- Delete the leptin, thyroid and IGF mechanism, the named bodybuilders, "scientific proof", the unnamed
  95 % study and the cheat-day framing.
- Link `nutricion-culturista-reglas-basicas` (page 1), `como-ser-disciplinado-dieta` (page 5),
  `guia-basica-de-nutricion-culturista` (page 7), `quieres-perder-grasa-no-solo-perder-peso`,
  `errores-al-tomar-suplementos`.

### 7. Basic bodybuilding nutrition guide

- Overview: calories, protein, carbohydrate and glycogen, fat, meal size, hydration, supplements. Link
  the batch pages instead of repeating them.
- Delete "fat generates fat", the 15 % fat cap, the soda line, the antioxidant loading and "train first
  thing in the morning". Fix the archive typos.
- Link `nutricion-culturista-reglas-basicas` (page 1), `comida-segun-hora-entrenar` (page 2),
  `ganar-musculo-vegetarianos` (page 8), `carbohidratos`,
  `insulina-y-culturismo-aliada-ganar-masa-muscular`, `errores-al-tomar-suplementos`.

### 8. Vegetarian muscle gain

- 1.6-2.2 g/kg from varied plant sources; calories and fibre volume are the real constraints. Cover
  B12, iron, zinc, omega-3 and vitamin D as a plan, not a diagnosis. No celebrities.
- Delete the medical-claim list, the 20,000-million-tonne figure, the gym brands, "no vegetarian
  bodybuilder" and the self-contradicting "meat protein is required".
- Link `nutricion-culturista-reglas-basicas` (page 1), `comida-pre-entrenamiento` (page 3),
  `guia-basica-de-nutricion-culturista` (page 7), `suplementos-de-proteina-vegana`,
  `proteina-de-soja-contra-proteina-de-leche`, `errores-al-tomar-suplementos`.

### 9. Lactose intolerance and training

- Lactose is a dose limit, not an allergy. Lactase, lactose-free dairy, hard cheese and yogurt, and a
  swap table for protein and calcium. See a doctor when symptoms are severe.
- Delete the brand plug, "milk is for children", "calcium burns fat" and "boost your tolerance".
- Link `nutricion-culturista-reglas-basicas` (page 1), `comida-post-entrenamiento` (page 4),
  `guia-basica-de-nutricion-culturista` (page 7), `mejor-proteina-nocturna`,
  `suplementos-de-proteina-vegana`, `errores-al-tomar-suplementos`.

### 10. Cherries after training

- Fruit with a small soreness signal: one 14-person eccentric trial, ½-1 cup. It is a carbohydrate
  source that fits the day, not recovery medicine.
- Delete arthritis, gout, the PCR external link and the glycogen claim.
- Link `nutricion-culturista-reglas-basicas` (page 1), `comida-post-entrenamiento` (page 4),
  `como-ser-disciplinado-dieta` (page 5), `carbohidratos`,
  `como-mejorar-tus-fisico-con-estos-batidos`, `errores-al-tomar-suplementos`.

## Writer split

- **Writer A:** pages 1-5: `nutricion-culturista-reglas-basicas`,
  `comida-segun-hora-entrenar`, `comida-pre-entrenamiento`, `comida-post-entrenamiento`,
  `como-ser-disciplinado-dieta`, plus five heroes.
- **Writer B:** pages 6-10: `comida-trampa`, `guia-basica-de-nutricion-culturista`,
  `ganar-musculo-vegetarianos`, `remediar-intolerancia-lactosa`, `cerezas-post-entrenamiento`, plus
  five heroes.
- Neither writer touches `astro.config.mjs`, `scripts/check-i18n.mjs`, `guides-nav.ts`,
  `content-pages.md` or this document.

## Hero shortlist

1. Kitchen scale with a notebook, or oats, rice and potato flat lay.
2. Wall clock beside a bowl of oats, or a dark kitchen with a kettle.
3. Toast with egg, no branding, or oats and banana on a counter.
4. Rice and chicken plate, or a shaker and banana on a bench.
5. Meal-prep containers in the fridge, or a handwritten grocery list.
6. A single burger beside a food scale, or a week planner with one meal circled.
7. A pot of rice or pasta, or pasta with olive oil from above.
8. Lentils and rice bowl, or tofu with chickpeas.
9. A glass of milk with the label turned away, or yogurt and hard cheese.
10. A bowl of cherries, or a glass of cherry juice.

## Verification

```powershell
npm run check:copy   # expected 33,201
npm run build        # expected 1,318 pages
npm run check:i18n   # expected 20,522, 1,314 sitemap URLs
```

Parent checks beyond the gates: every internal link resolves, zero em dashes, no BOM, dHash over all
heroes, 140 page/width pairs with no clipped cell.

## Result (2026-11-24)

- 10 bilingual pairs, 20 files, 10 heroes. Library 641 → **651 / 792**. Nutrición **78/191**;
  Nutrición Aplicada 30/111.
- Gates: `check:copy` **33,201/33,201**, build **1,318 pages**, `check:i18n` **20,522/20,522**, sitemap
  **1,314 URLs** with 3,942 alternates.
- Structural checks: 114 internal links, **0 broken**; zero em dashes; no BOM; 140 page/width pairs with
  **0 clipped cells**.
- **Corrections made:** macros are grams, not percentages; meal frequency is 3-5; no 2:1 or 3:1
  post-workout ratio; no fat ban after training; fruit is fine; a cheat meal is a budget line, not a
  metabolic reset; antioxidant loading is out; breakfast is optional; dairy is a dose limit; cherries
  are fruit with a small soreness signal.
- **Fixed by the parent:** nothing content-side; the parent ran the build, i18n, render and dHash passes
  and all links resolved. Writer A corrected a 166-character description before close.
- **Writers:** A pages 1-5, B pages 6-10, disjoint files.
- **Heroes:** ten Wikimedia files, all 1280x720. The minimum distance is 12 on a pasta plate against an
  anatomy line plate; every nearest neighbour was opened and none is a crop.
- Commits: pages `20adac1`, `aacf4dc`, `71afa90`, `2d0d75f`, `11e5c8c`, `e075f87`, `8d1fa40`, `d07c54a`,
  `4c4a5ea`, `09bf428`.
