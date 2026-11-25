# Content library — batch 75

Started: 2026-11-25. Continues the library from 741/792 after batch 74
(`odd/tasks/content-pages.md`).

Objective: `dietas-culturistas-segun-objetivos` to `pan-de-wasa`, as ten bilingual pairs.
Library 741 → 751. This batch closes Dietas de definición and opens Alimentos funcionales.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Sources: `...\content\nutricion\dietas-de-definicion-muscular\` (pages 1-8) and
  `...\content\nutricion\alimentos-funcionales\` (pages 9-10)
- Depends on batches 60-74.

## Tasks

- [x] T1 Scope, conflicts and house rules written (this document).
- [x] T2 Writer A: pages 1-5, ES + EN + heroes.
- [x] T3 Writer B: pages 6-10, ES + EN + heroes.
- [x] T4 Routes registered in `astro.config.mjs` and `scripts/check-i18n.mjs`.
- [x] T5 Parent gates, link check, render pass, dHash pass, per-page commits, checklist and handoff.

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `dietas-culturistas-segun-objetivos-volumen-definicion-y-mantenimiento` | `bodybuilding-diet-by-goal` | `dietas-culturistas-segun-objetivos-volumen-definicion-y-mantenimiento.md` | 1,550 | dieta culturista | |
| 2 | `dieta-definicion-culturista` | `contest-cutting-diet` | `dieta-definicion-culturista.md` | 485 | dieta de definición culturista | |
| 3 | `dieta-disociada` | `food-combining-diet` | `dieta-disociada.md` | 1,115 | dieta disociada | |
| 4 | `dieta-sencilla-para-vida-fitness` | `simple-fitness-diet` | `dieta-sencilla-para-vida-fitness.md` | 879 | dieta fitness | |
| 5 | `definicion-muscular-dieta` | `definition-diet-without-counting` | `definicion-muscular-dieta.md` | 1,246 | dieta de definición muscular | |
| 6 | `dieta-eliminar-exceso-grasa` | `fat-loss-diet` | `dieta-eliminar-exceso-grasa.md` | 580 | dieta para eliminar grasa | |
| 7 | `dieta-culturismo-profesional` | `pro-bodybuilding-diet` | `dieta-culturismo-profesional.md` | 1,929 | dieta de culturismo | |
| 8 | `dieta-sana-sin-errores-controlando-el-indice-glucemico` | `glycemic-index-diet` | `dieta-sana-sin-errores-controlando-el-indice-glucemico.md` | 1,685 | índice glucémico | |
| 9 | `guacamole-como-comerlo-sin-engordar` | `guacamole-calories` | `guacamole-como-comerlo-sin-engordar.md` | 1,962 | guacamole calorías | |
| 10 | `pan-de-wasa` | `crispbread` | `pan-de-wasa.md` | 201 | pan de wasa | |

Pages 1-8: `block: "Entrenamiento"` (`Training`), `section: "Dietas de definición"` (`Cutting diets`).
Pages 9-10: `block: "Entrenamiento"`, `section: "Alimentos funcionales"` (`Functional foods`).
All: `updated: "2026-11-25"`.

## Expected gates

- `check:copy`: 37,791 + 510 = **38,301**
- build: 1,497 + 20 = **1,517 pages**
- `check:i18n`: 23,312 + 310 = **23,622**, sitemap **1,514 URLs**

## Preservation policy (owner decision, 2026-11-25)

**Keep the archive's information wherever it survives as fact.** Correct the number, name the evidence
and change the angle; do not amputate the topic. Only these go outright: promotional or affiliate
links, newsletter CTAs, product or brand endorsements, doses or protocols for a controlled substance,
water-cut instructions, and any claim that can harm a reader (a crash-diet floor, a cancer cure).

When a section cannot stand as written, replace it with the nearest true version and say in one
sentence what changed and why. The page should carry more of the original, not less.

## House rules (binding, YMYL)

1. **No purchase CTAs, affiliate links, shop names, brand names or "best" rankings.** Product
   substitutes (sachets, aerosol oils, branded cereals) become generic food.
2. **No plan below 1,400 kcal/day for a man or 1,200 for a woman presented as a recommendation.** If
   the archive's menu lands below, show the arithmetic and raise it to the floor.
3. **No water-cut protocol.** The last week is described as what competitors do and why it is
   dangerous; it is never a list of steps to follow.
4. **No medical claims.** Cancer, diabetes, cholesterol and blood pressure stay as associations with
   the evidence named.
5. **Stage leanness is documented, not recommended.** 2-3 % body fat is a stage state, not a goal.
6. **No athlete photos, no before/after imagery.**

## Conflicts the batch settles (binding)

1. **One food list, four calorie levels.** The phase logic is the page's value: volume 2,500-3,500,
   definition 1,800-2,200, maintenance 2,250-2,800, recomposition 2,600-3,200 for a 70 kg reference.
   Correct the 1,000 kcal/hour figure (that is elite endurance; moderate lifting costs roughly
   200-350 kcal/h), remove the four or five meal-replacement sachets a day, keep the protein range at
   1.6-2.2 g/kg, and replace the fixed 3 L and the blanket −10 % for women with thirst and bodyweight.
2. **The last week of a contest is documented practice, not a recipe.** Keep the carb depletion and
   load, the meal list and the 0.5 kg/week rule. Describe the water manipulation and why it is
   dangerous: dehydration, electrolyte loss, kidney strain, and no evidence that distilled water does
   anything. Keep the 150 g carbohydrate floor as what competitors do, with the individual variation.
   The page must not read as instructions.
3. **The dissociated diet refutes itself, and that is the page.** Keep its own food classification and
   its own list of harms, which names amenorrhoea, hair loss and depression. Explain why the pH and
   putrefaction premise is false, why the 3 kg in a week is water and glycogen, and what survives:
   vegetables and portion awareness. Link the canonical digestion page instead of re-arguing it.
4. **The simple fitness diet is five meals with protein each time.** Keep the five-group template but
   fix it: water is not a food group, and micronutrients are missing. Protein 1.6-2.2 g/kg, not 2 for
   everyone. Water by thirst, and the low-carb note stays as an option, not a rule.
5. **Portion-based carb cycling survives; "no counting" does not.** Keep the three low days, one high
   day and the four-week block with the 0.5-1 kg/week. Reframe: portions are a form of counting.
   200 g of protein at 80 kg is 2.5 g/kg, so present it as the top of the range. Vegetables are
   low-calorie, not free. Delete the DOMS-to-protein line and the processed wheat cream.
6. **The fat-loss day keeps its food and gains its arithmetic.** The archive day reads about
   1,300-1,400 kcal. Show the sum, raise it to the 1,400 floor with 100-150 kcal of oats or oil, and
   drop the "100 %" promise and the legume, pea, beet and corn ban, which is why the day is both
   poor in fibre and too low. Two tablespoons of oil and "no added fat" cannot stand together.
7. **A pro diary is a historical document.** Keep the three phase tables, the cardio progression and
   the 17-week frame. Label 2-3 % body fat as stage leanness: essential fat is about 5 % in men and
   12 % in women, and the state is not sustainable. Keep 384 g of protein as what the diary shows,
   then give the useful range. Fix "Donan Yates". No steroid or diuretic content.
8. **The glycemic index page needs indexes.** The archive has none. Add a real table (lentils around
   30, white bread around 75, boiled versus baked potato) and correct five false facts: sheep milk has
   about the same lactose as cow milk, dried figs are high, alcohol lowers rather than raises glucose,
   butter is not a trans fat, and bread is not forbidden at any meal. Keep the cooking and menu
   sections.
9. **Guacamole is a fat-dense condiment that makes vegetables easier to eat.** Keep the recipe, the
   jar comparison and the 40-50 g portion. Drop the unsourced "10-15 % avocado" and "90 %" figures and
   present label reading instead. Remove the newsletter CTA and the claim about low-fat diets and
   hormones. Keep the carotenoid absorption note with its real size.
10. **Crispbread, not a brand.** Keep the page and the history: rye flour, diastase, salt, Sweden,
    early 20th century. One slice is 30-50 kcal depending on size, so the archive's 80 kcal per
    undefined "serving" is corrected. It is a vehicle for protein and vegetables, not a satiating meal
    and not a buying guide. No brand recommendation, no product comparison.

## Global rules

1. Neutral Spanish with `tú`; zero vosotros, voseo or `usted`. Never the word `gym` in Spanish.
2. No first person, no newsletter CTAs, no supplement promotions, no athlete photos, no medical or rehab
   claims, no "Conclusión" section, no marketing headings, no "Nivel pro", no manual TOC.
3. Zero external links, `.md` links, `#` anchors, inline images, `▷`/`✔`, escaped asterisks, emoji
   artifacts, empty headings, duplicate images, headings with no body.
4. Links only to pages that exist. Whitelist: the ten batch pages, any slug ticked in
   `odd/tasks/content-pages.md`, and these when useful: `definicion-muscular`,
   `dietas-definicion-muscular`, `dieta-de-volumen-con-alimentos-para-maxima-energia`,
   `comidas-perfectas-culturistas`, `carga-descarga-carbohidratos`, `ciclado-carbohidratos`,
   `dieta-maxima-definicion-muscular`, `combinar-proteinas-carbohidratos`,
   `engordan-los-hidratos-en-las-cenas`, `como-identificar-y-evitar-una-dieta-milagro`,
   `dieta-baja-en-grasas`, `dietas-muy-bajas-en-carbohidratos-culturismo`, `tortas-de-arroz`,
   `carbohidratos`, `grasas`, `frutos-secos`, `mitos-dieta-saludable`, `dieta-dash-guia-completa`,
   `deficit-calorico-clave-para-perder-peso`, `elaborar-dieta`, `errores-a-evitar-en-la-dieta`,
   `dieta-culturista-ocho-semanas`. Verify each slug on disk; if one does not exist, do not use it.
5. Zero em dashes. Titles 45-60, descriptions 150-160, reciprocal `alternate`.
6. Tables: comparison, phase and menu tables use `<table class="text-table">` with three cells per row.
7. Heroes: one unique per page, free licence only, 1280 px, >=1200 on disk, <250 KB, credit plus honest
   alt, dHash on the final crop. Open the closest hero; distance 0 is a duplicate and crops measure up
   to 14. No athlete photo, no person on a scale.
8. Body 600-900 words per locale, table-inclusive under 1,150. Page 7 arrives at 1,985 words and page 9
   at 2,009: keep one idea per H2 and cut depth, not topics. Page 10 (208) must be built.
9. Mandatory intra-batch links: 1 -> 2, 3; 2 -> 3, 4; 3 -> 4, 5; 4 -> 5, 6; 5 -> 6, 7; 6 -> 7, 8;
   7 -> 8, 9; 8 -> 9, 10; 9 -> 10, 1; 10 -> 1, 2.

## Per page

### 1. Bodybuilding diet by goal

- The four phases with their calorie bands and the shared food list; the adjustment section. Correct the
  energy-cost figure, the sachets and the women's blanket discount. Link `definicion-muscular`,
  `dietas-definicion-muscular`, `dieta-de-volumen-con-alimentos-para-maxima-energia`,
  `comidas-perfectas-culturistas`, page 2, page 3.

### 2. Contest cutting diet

- The last week as documented practice: depletion and load, the meals, 0.5 kg/week, and the water
  manipulation described with its risks. No step list. Link `carga-descarga-carbohidratos`,
  `dieta-maxima-definicion-muscular`, `definicion-muscular`, page 3, page 4.

### 3. Food combining diet

- The diet's own rules and its own harms as the evidence against it; the water-and-glycogen
  explanation; what survives. Link `combinar-proteinas-carbohidratos`,
  `engordan-los-hidratos-en-las-cenas`, `como-identificar-y-evitar-una-dieta-milagro`, page 4, page 5.

### 4. Simple fitness diet

- Five meals, protein each time, no forbidden groups; the corrected five groups; the low-carb option
  as an option. Link `elaborar-dieta`, `dietas-definicion-muscular`, `comidas-perfectas-culturistas`,
  `errores-a-evitar-en-la-dieta`, page 5, page 6.

### 5. Definition diet without counting

- The carb-cycling week and the four-week block; portions as counting; the protein range; vegetables as
  low-calorie. Drop the DOMS line and the processed cream. Link `ciclado-carbohidratos`,
  `definicion-muscular`, `tortas-de-arroz`, `dietas-definicion-muscular`, page 6, page 7.

### 6. Fat-loss diet

- The day's food with its arithmetic and the floor explained; the legume ban corrected. Link
  `dieta-baja-en-grasas`, `dietas-muy-bajas-en-carbohidratos-culturismo`,
  `dieta-maxima-definicion-muscular`, page 7, page 8.

### 7. Pro bodybuilding diet

- The three phase tables and the cardio progression as a diary; stage leanness marked; the protein
  figure explained. Link `dieta-culturista-ocho-semanas`, `carga-descarga-carbohidratos`,
  `dieta-maxima-definicion-muscular`, `dieta-muscular-dorian-yates`, page 8, page 9.

### 8. Glycemic index diet

- The real GI table, the five corrections, the cooking and menu sections. Link
  `combinar-proteinas-carbohidratos`, `engordan-los-hidratos-en-las-cenas`, `mitos-dieta-saludable`,
  `tortas-de-arroz`, `dieta-dash-guia-completa`, page 9, page 10.

### 9. Guacamole calories

- The recipe, the label comparison and the portion; carotenoids with their real size. No CTA, no
  hormone claim. Link `grasas`, `dieta-baja-en-grasas`, `tortas-de-arroz`, `frutos-secos`, page 10,
  page 1.

### 10. Crispbread

- What it is, the history, the per-slice calories, how to use it, what it is not. Link `tortas-de-arroz`,
  `carbohidratos`, `mitos-dieta-saludable`, page 1, page 2.

## Writer split

- **Writer A:** pages 1-5: `dietas-culturistas-segun-objetivos-volumen-definicion-y-mantenimiento`,
  `dieta-definicion-culturista`, `dieta-disociada`, `dieta-sencilla-para-vida-fitness`,
  `definicion-muscular-dieta`, plus five heroes.
- **Writer B:** pages 6-10: `dieta-eliminar-exceso-grasa`, `dieta-culturismo-profesional`,
  `dieta-sana-sin-errores-controlando-el-indice-glucemico`, `guacamole-como-comerlo-sin-engordar`,
  `pan-de-wasa`, plus five heroes.

## Hero shortlist

1. Three identical plates with visibly different rice portions.
2. A wall calendar with the final four weeks circled and a glass of water beside it.
3. Two bowls side by side, one rice and one chicken, with an empty gap between them.
4. A lunchbox with a turkey sandwich, yogurt and a pear on a kitchen counter.
5. A stack of rye crispbread next to a chicken breast and a bowl of oats.
6. Grilled white fish with green salad and lemon on a white plate.
7. An open paper training diary with dated meal lines and a pencil.
8. A bowl of lentils with tomato and olive oil beside a slice of rye bread.
9. A molcajete of guacamole with tomato, onion and coriander, beside carrot sticks.
10. A stack of round rye crispbread on a wooden board with a bowl of cottage cheese.

## Verification

```powershell
npm run check:copy   # expected 38,301
npm run build        # expected 1,517 pages
npm run check:i18n   # expected 23,622, 1,514 sitemap URLs
```

Parent checks beyond the gates: every internal link resolves, zero em dashes, no BOM, dHash over all
heroes, 140 page/width pairs with no clipped cell.

## Result (2026-11-25)

- 10 bilingual pairs, 20 files, 10 heroes. Library 741 → **751 / 792**. Nutrición **178/191**;
  **Dietas de definición 17/17 — COMPLETO**; Alimentos funcionales 2/12.
- Gates ran once for batches 75 and 76 together: `check:copy` **38,811/38,811**, build **1,537 pages**,
  `check:i18n` **23,932/23,932**, sitemap **1,534 URLs**. The batch-75 forecast was 38,301 / 1,517 /
  23,622 / 1,514.
- Structural checks: **113 internal links** across the ten pairs, **0 broken**; 0 files with problems.
- **What the batch kept and what it corrected:** the four phase bands of the bodybuilding diet with the
  energy-cost figure corrected (1,000 kcal/h is elite endurance, not lifting) and the sachets dropped; the
  final contest week kept as documented practice, with the water manipulation described by its risks
  instead of as instructions; the dissociated diet kept as its own audit, including its listed harms; the
  five-meal template with water restored to thirst and protein to 1.6-2.2 g/kg; the carb-cycling week kept
  with "no counting" reframed as portion counting; the fat-loss menu kept with its sum shown and raised to
  the 1,400 floor, and the legume ban refuted; the pro diary kept as a historical document with stage
  leanness labelled; the glycemic index added where the archive had none, with the sheep-milk, dried-fig,
  alcohol and butter facts corrected; guacamole kept with its label lesson and without the CTA; crispbread
  published generically, with the Swedish rye history and 30-50 kcal per slice.
- **Writers:** A pages 1-5, B pages 6-10, disjoint files.
- **Heroes:** ten files. The oat-bran photograph does not exist on Commons; the page uses dry oat flakes
  with an alt that says so. Minimum dHash 14 against an unrelated calf-raise photo, opened.
- Commits: pages `8537d6a`, `675a6e3`, `e66ba58`, `00d09a8`, `861ea7b`, `b7bc9e9`, `4fb9bdf`,
  `334a49b`, `5b5e2b1`, `8442e5b`; routes shared with batch 76 in `8175ea2`.
