# Content library — batch 71

Started: 2026-11-24. Continues the library from 701/792 after batch 70
(`odd/tasks/content-pages.md`).

Objective: `alimentos-con-vitamina-d` to `guia-definitiva-sobre-el-consumo-de-pescado`, as ten bilingual
pairs. Library 701 → 711.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Sources: `...\content\nutricion\nutricion-aplicada\`
- Depends on batches 60-70.

## Tasks

- [x] T1 Scope, conflicts and house rules written (this document).
- [x] T2 Writer A: pages 1-5, ES + EN + heroes.
- [x] T3 Writer B: pages 6-10, ES + EN + heroes.
- [x] T4 Routes registered in `astro.config.mjs` and `scripts/check-i18n.mjs`.
- [x] T5 Parent gates, link check, render pass, dHash pass, per-page commits, checklist and handoff.

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `alimentos-con-vitamina-d` | `vitamin-d-foods` | `alimentos-con-vitamina-d.md` | 384 | alimentos con vitamina D | |
| 2 | `vitamina-b6-piridoxina` | `vitamin-b6` | `vitamina-b6-piridoxina.md` | 188 | vitamina B6 | |
| 3 | `vitamina-b3-niacina` | `vitamin-b3` | `vitamina-b3-niacina.md` | 285 | vitamina B3 | |
| 4 | `guia-basica-belleza-masculina` | `mens-grooming-basics` | `guia-basica-belleza-masculina.md` | 716 | cuidado de la piel masculino | |
| 5 | `nunca-es-tarde-para-empezar-a-hacer-ejercicio` | `never-too-late-to-exercise` | `nunca-es-tarde-para-empezar-a-hacer-ejercicio.md` | 865 | empezar a entrenar a los 70 | |
| 6 | `el-complejo-de-adonis-un-problema-de-nuestro-tiempo` | `adonis-complex` | `el-complejo-de-adonis-un-problema-de-nuestro-tiempo.md` | 1,096 | complejo de Adonis | |
| 7 | `ginecomastia-lo-que-debes-saber` | `gynecomastia` | `ginecomastia-lo-que-debes-saber.md` | 587 | ginecomastia | |
| 8 | `mitos-dieta-saludable` | `healthy-diet-myths` | `mitos-dieta-saludable.md` | 2,765 | mitos de la dieta | |
| 9 | `la-piramide-alimentaria-falla` | `food-pyramid` | `la-piramide-alimentaria-falla.md` | 2,270 | pirámide alimentaria | |
| 10 | `guia-definitiva-sobre-el-consumo-de-pescado` | `fish-consumption-guide` | `guia-definitiva-sobre-el-consumo-de-pescado.md` | 2,756 | consumo de pescado | |

All: `block: "Entrenamiento"` (`Training`), `section: "Nutrición aplicada"` (`Applied nutrition`),
`updated: "2026-11-24"`.

## House rules (binding, YMYL)

1. **No purchase CTAs, affiliate links, shop names, brand names or "best" rankings.**
2. **No medical claims.** Vitamins, skin, body image, breast tissue and cancer statements stay inside
   what trials in healthy adults support, with the qualifier kept.
3. **No invented doses.** Vitamin D 600 IU/day (800 IU after 70), UL 4,000 IU; B6 RDA 1.3-1.7 mg, UL
   100 mg; B3 16 mg men / 14 mg women, UL 35 mg; fish 2-3 servings a week of low-mercury species.
4. **No diagnosis or treatment.** Gynaecomastia and body-image pages triage to a doctor or psychologist;
   they never prescribe.
5. **No "cure" framing for skin, ageing or body image.**
6. **No athlete photos, no before/after imagery.**

## Conflicts the batch settles (binding)

1. **Vitamin D: food, sun and a blood test.** 600 IU/day (800 after 70), UL 4,000 IU, oily fish and
   fortified foods. Delete "reduces cancer, depression, muscle size", the 400-1,000 IU prescription
   without a UL and the 5-million skin-cancer figure.
2. **B6: the vitamin almost everyone exceeds.** RDA 1.3-1.7 mg, UL 100 mg, neuropathy above it; protein
   cofactor, deficiency rare. Delete the universal 2 mg line. Build structure from 188 words.
3. **B3: food niacin and pharmacological nicotinic acid are two orders of magnitude apart.** 16/14 mg,
   UL 35 mg; gram doses are a prescription drug with liver risk. Fix the pellagra century. Build
   structure from 285 words.
4. **Skin care is sunscreen, cleansing and shaving, not folklore.** Delete "pores open and close",
   vinegar pH cures, "shaving removes the toughest layers", the insult and the brands. No product
   promises. Nutrition is tangential: hydration and protein, nothing more.
5. **Starting at 70 is supervised strength work.** VO2max falls 8-10 % per decade, strength training
   works even in the 86-96 group, screening and progression first. Delete "a 70-year-old matches a
   30-year-old", the marathon anecdote as proof and the 9-patient detail. Fix the vosotros forms.
6. **Adonis complex: name muscle dysmorphia and give help pathways.** Delete the identifiable case,
   the wrong organisation name, the unsourced 10 % and the "train hard" ending. No stigma.
7. **Gynaecomastia is glandular; fat is pseudogynaecomastia.** No HCG or antiestrogen protocol, no
   diagnosis; male breast cancer warning; see a doctor. Delete the definition as fat, the drug
   endorsement and "if you do it, take precautions".
8. **Ten myths, ten numbers.** Cut the 2,835-word archive to ten; delete the fabricated meat-eater
   comparison, the alcohol-free-beer benefit, the 3 % figure, the skim-milk "truth" and the first-person
   "no study found"; fix the usted mix. Keep the sweetener ADI, raw eggs/avidin, carotenoids and whole
   grains.
9. **The 1992 pyramid is superseded.** The plate model replaced it; the core critique (no guidance
   inside categories) stands. Delete the daily-wine line, the 5-7 meals metabolism claim, the missing
   /kg unit and the unnamed study; fix the register.
10. **Fish: 2-3 servings a week, 100-150 g, species by species.** Low-mercury first; avoid shark,
    swordfish and king mackerel; pregnancy 2-3 low-mercury servings. Delete +30 % life expectancy, the
    deficiency-obesity claim, "inhibit abnormal cells", the blue/semi-fat double listing and the typos.

## Global rules

1. Neutral Spanish with `tú`; zero vosotros, voseo or `usted`. Never the word `gym` in Spanish.
2. No first person, no newsletter CTAs, no supplement promotions, no athlete photos, no medical or rehab
   claims, no "Conclusión" section, no marketing headings.
3. Zero external links, `.md` links, `#` anchors, inline images, `▷`/`✔`, escaped asterisks, emoji
   artifacts, empty headings, manual TOCs, embedded videos, duplicate images, headings with no body.
4. Links only to existing pages: the ten batch pages, batches 60-70, the 18 supplement pages,
   `vitaminas-minerales-para-el-gimnasio`, `sistema-inmune-con-vitaminas`,
   `suplementacion-deportiva-alcanzar-objetivos`, `suplementos-dieteticos`,
   `como-empezar-a-tomar-suplementos-deportivos`, `errores-al-tomar-suplementos`,
   `ganar-musculo-vegetarianos`, `proteinas`, `requieren-los-deportistas-mas-proteinas`,
   `que-comer-para-ganar-masa-muscular`, `legumbres-beneficiosas-dieta`, `grasas`,
   `grasas-transaturadas`, `guia-productos-light`, `necesitas-desintoxicarte`,
   `vino-es-realmente-saludable`, `esteroides`, `evitar-estrias`, `culturismo-mas-que-musculo`,
   `culturismo-la-cura-para-el-envejecimiento`, `rutina-pesas-tras-inactividad`,
   `pesas-salud-cardiovascular`, `almuerzos-saludables-altos-en-proteinas`,
   `dieta-antiinflamatoria-claves-y-beneficios`, `sushi-alimento-saludable-alto-en-proteinas`,
   `ayuno-intermitente`, `enfermedades-exceso-grasa`, `menos-grasa-mas-musculo`,
   `comida-post-entrenamiento`, `agua-hidratacion-deporte`, `como-llevar-un-estilo-de-vida-fitness`.
5. Zero em dashes. Titles 45-60, descriptions 150-160, reciprocal `alternate`.
6. Tables: comparison and decision tables as `<table class="text-table">` with three columns. The IU
   table, the B6/B3 reference table, the mercury table and the myth numbers are text tables.
7. Heroes: one unique per page, free licence only, 1280 px, >=1200 on disk, <250 KB, credit plus honest
   alt, dHash on the final crop. Open the closest hero; distance 0 is a duplicate and crops measure up
   to 14. Prefer product-free, person-free images.
8. Body 600-900 words per locale, table-inclusive under 1,150. Pages 1 (384), 2 (188) and 3 (285) need
   rebuilding; page 8 may reach 1,000.
9. Mandatory intra-batch links: 1 -> 2, 3; 2 -> 3, 4; 3 -> 1, 8; 4 -> 5, 7; 5 -> 4, 6;
   6 -> 5, 7; 7 -> 4, 6; 8 -> 9, 10; 9 -> 8, 10; 10 -> 8, 9. All ten link
   `errores-al-tomar-suplementos`.

## Per page

### 1. Vitamin D foods

- IU per food (cod liver oil, salmon, mackerel, tuna, sardines, fortified), sun, test. 600 IU/day,
  800 after 70, UL 4,000. Delete the cancer, depression and muscle claims and the prescription without
  a UL.
- Link `vitamin-b6` (page 2), `vitamin-b3` (page 3), `vitaminas-minerales-para-el-gimnasio`,
  `sistema-inmune-con-vitaminas`, `como-empezar-a-tomar-suplementos-deportivos`,
  `errores-al-tomar-suplementos`.

### 2. Vitamin B6

- RDA 1.3-1.7 mg, UL 100 mg, neuropathy above it; protein cofactor, deficiency rare. Build structure
  from 188 words. Delete the universal 2 mg.
- Link `vitamin-b3` (page 3), `mens-grooming-basics` (page 4), `vitaminas-minerales-para-el-gimnasio`,
  `proteinas`, `errores-al-tomar-suplementos`.

### 3. Vitamin B3

- 16/14 mg NE, UL 35 mg; food niacin versus pharmacological nicotinic acid (liver risk, prescription).
  Fix the pellagra century. Build structure from 285 words.
- Link `vitamin-d-foods` (page 1), `healthy-diet-myths` (page 8), `vitaminas-minerales-para-el-gimnasio`,
  `guia-productos-light`, `errores-al-tomar-suplementos`.

### 4. Men's grooming basics

- Sunscreen, cleansing, shaving, sweat, sleep. Delete pore folklore, vinegar cures, the insult and the
  brands. Nutrition tangential.
- Link `never-too-late-to-exercise` (page 5), `gynecomastia` (page 7), `evitar-estrias`,
  `esteroides`, `errores-al-tomar-suplementos`.

### 5. Never too late to exercise

- Strength work at 70+ with screening, progression and supervision; VO2max decline and the 86-96 trial.
  Delete the 70=30 equivalence, the anecdote as proof and the 9-patient detail. Fix vosotros.
- Link `mens-grooming-basics` (page 4), `adonis-complex` (page 6),
  `culturismo-la-cura-para-el-envejecimiento`, `rutina-pesas-tras-inactividad`,
  `pesas-salud-cardiovascular`, `errores-al-tomar-suplementos`.

### 6. Adonis complex

- Muscle dysmorphia: signs, who it affects, what helps, when to ask. Name vigorexia. Delete the
  identifiable case, the wrong organisation name, the unsourced 10 % and the "train hard" ending.
- Link `never-too-late-to-exercise` (page 5), `gynecomastia` (page 7), `culturismo-mas-que-musculo`,
  `esteroides`, `errores-al-tomar-suplementos`.

### 7. Gynecomastia

- Gland versus fat (pseudogynecomastia); no diagnosis; male breast cancer warning; see a doctor. Delete
  the HCG/antiestrogen protocol, the definition as fat, the drug endorsement and "take precautions".
- Link `mens-grooming-basics` (page 4), `adonis-complex` (page 6), `esteroides`,
  `evitar-estrias`, `errores-al-tomar-suplementos`.

### 8. Healthy diet myths

- Ten myths, ten numbers. Delete the fabricated meat-eater comparison, the alcohol-free-beer benefit,
  the 3 % figure, the skim-milk "truth" and the first-person line; fix the usted mix. Keep the
  sweetener ADI, raw eggs/avidin, carotenoids and whole grains.
- Link `food-pyramid` (page 9), `fish-consumption-guide` (page 10), `guia-productos-light`,
  `necesitas-desintoxicarte`, `grasas-transaturadas`, `vino-es-realmente-saludable`,
  `errores-al-tomar-suplementos`.

### 9. Food pyramid

- The 1992 pyramid is superseded by the plate model; the critique of "no guidance inside categories"
  stands. Delete the daily-wine line, the 5-7 meals metabolism claim, the missing /kg unit and the
  unnamed study; fix the register.
- Link `healthy-diet-myths` (page 8), `fish-consumption-guide` (page 10), `proteinas`,
  `grasas`, `guia-productos-light`, `errores-al-tomar-suplementos`.

### 10. Fish consumption guide

- 2-3 servings a week, 100-150 g, low-mercury species, avoid shark/swordfish/king mackerel; pregnancy
  2-3 low-mercury servings; omega-3. Delete +30 % life expectancy, the deficiency-obesity claim,
  "inhibit abnormal cells", the double listing and the typos.
- Link `healthy-diet-myths` (page 8), `food-pyramid` (page 9),
  `almuerzos-saludables-altos-en-proteinas`, `dieta-antiinflamatoria-claves-y-beneficios`,
  `sushi-alimento-saludable-alto-en-proteinas`, `grasas`, `errores-al-tomar-suplementos`.

## Writer split

- **Writer A:** pages 1-5: `alimentos-con-vitamina-d`, `vitamina-b6-piridoxina`,
  `vitamina-b3-niacina`, `guia-basica-belleza-masculina`,
  `nunca-es-tarde-para-empezar-a-hacer-ejercicio`, plus five heroes.
- **Writer B:** pages 6-10: `el-complejo-de-adonis-un-problema-de-nuestro-tiempo`,
  `ginecomastia-lo-que-debes-saber`, `mitos-dieta-saludable`, `la-piramide-alimentaria-falla`,
  `guia-definitiva-sobre-el-consumo-de-pescado`, plus five heroes.

## Hero shortlist

1. Open sardine tin on a plate, or a spoon of cod-liver oil.
2. Chicken, banana and potato on a board, or pistachios.
3. Whole-grain bread, or peanuts in shell.
4. Safety razor, brush and towel.
5. A dumbbell rack at a senior centre, or walking group backs.
6. An empty gym mirror. No person in distress.
7. A stethoscope on a desk, or a torso anatomy diagram.
8. A supermarket label close-up, or an egg carton.
9. The USDA 1992 pyramid graphic (public domain), or a plate model.
10. A fish market on ice, or grilled sardines.

## Verification

```powershell
npm run check:copy   # expected 36,261
npm run build        # expected 1,438 pages
npm run check:i18n   # expected 22,382, 1,434 sitemap URLs
```

Parent checks beyond the gates: every internal link resolves, zero em dashes, no BOM, dHash over all
heroes, 140 page/width pairs with no clipped cell.

## Result (2026-11-24)

- 10 bilingual pairs, 20 files, 10 heroes. Library 701 → **711 / 792**. Nutrición **138/191**;
  Nutrición Aplicada 90/111.
- Gates: `check:copy` **36,261/36,261**, build **1,438 pages**, `check:i18n` **22,382/22,382**, sitemap
  **1,434 URLs** with 4,302 alternates.
- Structural checks: 120 internal links, **0 broken**; zero em dashes; no BOM; 420 page/width pairs across
  batches 69-71 with **0 clipped cells**.
- **Corrections made:** vitamin D gets IU, sun and the 4,000 IU ceiling; B6 gets its 100 mg UL; B3
  separates food niacin from pharmacological nicotinic acid; skin care is sunscreen and shaving, not
  folklore; starting at 70 is supervised strength work; the Adonis page names muscle dysmorphia and
  gives help pathways; gynaecomastia is glandular and triages to a doctor; ten myths with numbers; the
  1992 pyramid is superseded by the plate model; fish gets the mercury rule and species table.
- **Fixed by the parent:** nothing content-side; the writers fixed their own descriptions before close.
- **Writers:** A pages 1-5, B pages 6-10, disjoint files.
- **Heroes:** ten files, all 1280x720. The minimum distance is 14 on the USDA pyramid against a lunge
  photo; every nearest neighbour was opened and none is a crop.
- Commits: pages `ab24147`, `9b55c4e`, `9786e4e`, `e4825ce`, `20947b8`, `750d3e9`, `6b25a58`, `614518b`,
  `8e7cba9`, `b497221`.
