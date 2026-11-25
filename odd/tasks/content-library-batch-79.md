# Content library — batch 79

Started: 2026-11-25. Continues the library from 781/792 after batch 78
(`odd/tasks/content-pages.md`).

Objective: `retencion-de-liquidos-en-mujeres` to `eliminar-grasa-localizada-de-los-gluteos`, as six
bilingual pairs. Library 781 → **787**, the publishable total. This batch closes Mujer Fitness and the
whole content library; the only rows left unchecked are the five settled Entrenamiento ones.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Sources: `...\content\mujer-fitness\fitness-y-bienestar-para-mujeres\`
- Depends on batch 78.

## Tasks

- [x] T1 Scope, conflicts and house rules written (this document).
- [x] T2 Writer A: pages 1-3, ES + EN + heroes.
- [x] T3 Writer B: pages 4-6, ES + EN + heroes.
- [x] T4 Routes registered in `astro.config.mjs` and `scripts/check-i18n.mjs`.
- [x] T5 Parent gates, link check, render pass, dHash pass, per-page commits, checklist and handoff.

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `retencion-de-liquidos-en-mujeres` | `water-retention` | `retencion-de-liquidos-en-mujeres.md` | 1,501 | retención de líquidos | |
| 2 | `tipos-de-genetica-mujer` | `female-body-types` | `tipos-de-genetica-mujer.md` | 965 | tipos de cuerpo mujer | |
| 3 | `tacones-celulitis-y-otros-problemas` | `high-heels` | `tacones-celulitis-y-otros-problemas.md` | 1,002 | tacones y salud | |
| 4 | `fitness-mujeres-principiantes` | `beginner-women-fitness` | `fitness-mujeres-principiantes.md` | 736 | fitness para principiantes | |
| 5 | `chicas-fitness` | `womens-fitness-culture` | `chicas-fitness.md` | 1,581 | chicas fitness | |
| 6 | `eliminar-grasa-localizada-de-los-gluteos` | `glute-spot-reduction` | `eliminar-grasa-localizada-de-los-gluteos.md` | 499 | grasa localizada glúteos | |

All: `block: "Entrenamiento"` (`Training`), `section: "Fitness y bienestar"` (`Fitness and wellbeing`),
`updated: "2026-11-25"`.

## Expected gates

- `check:copy`: 39,831 + 306 = **40,137** for the finished library
- build: 1,577 + 12 = **1,589 pages**
- `check:i18n`: 24,552 + 186 = **24,738**, sitemap **1,586 URLs**

## Preservation policy (owner decision, 2026-11-25)

**Keep the archive's information wherever it survives as fact.** Correct the number, name the evidence
and change the angle; do not amputate the topic. Only these go outright: promotional or affiliate
links, newsletter CTAs, product or brand endorsements, diuretic protocols, and any claim that can harm
a reader (a cream that removes cellulite, a gland that decides your body shape, a food that "drains").

## House rules (binding)

1. **No diuretic protocol and no "drain" framing.** Herbs, teas and waters do not remove fluid. Name the
   ones the archive lists and say what they are: diuretics that also lose potassium.
2. **Swelling that is persistent, one-sided, painful or with breathlessness is a doctor's question.**
   The page explains the difference and stops there.
3. **No invented classifications.** The glandular somatotypes do not exist. The page can describe what
   people believe and what is true, not publish a system.
4. **No cellulite cure.** No cream, massage or device removes it.
5. **No "tonificar", no spot reduction, no body-baring imagery, no before/after.**
6. **Every routine keeps its prescription and gains a warm-up, a load rule and a progression rule.**

## Conflicts the batch settles (binding)

1. **Water retention is gravity, sodium and hours on your feet, until it is not.** Keep the causes the
   archive names (kidney, liver, heart, cortisone, cycle) and turn them into the triage they deserve.
   Correct the "75 % of body weight" threshold: adult body water is about 60 %. Keep the compression
   idea and fix the unit: compression is graded in mmHg, not "dim". Delete the herbal diuretic list as a
   remedy, the "toxins", the lymphatic massage, the vascular creams and the anti-ageing claim. What works
   is movement, elevation, less sodium and properly fitted compression.
2. **Body shape is frame plus fat distribution, and both are inherited.** The four glandular types
   (adrenal, gonadal, thyroid, lymphatic) are an invented classification; keep them as what the archive
   claims and refute each one, including the pituitary section labelled "thyroid" and the lymphoedema
   presented as a body type. What changes is total fat and muscle. No "teddy bear" or "childlike" body
   descriptions.
3. **Heels change mechanics; they do not cause cellulite.** Keep the condition list: hallux valgus,
   sesamoiditis, hammer toes, Morton's neuroma, Achilles tendinopathy, ankle instability, knee and spine
   load. The 800,000 operations and the 90 % figure have no source and go; any pressure figure needs a
   named study or is described as a direction. Drop the named-celebrity passage and the moralising.
   What helps: rotate heel heights, train ankle mobility and calf strength.
4. **The first two months are attendance and a handful of learned lifts.** Keep the myth list and the
   two levels. Delete the "localised work" and "problem areas" framing, "no surgery needed", the
   unverifiable champion credential, "abolish junk food", the male-gaze aside and the beach-body line.
   Two full-body sessions you repeat beat a split you skip.
5. **A five-day split is a recovery and logistics decision.** Keep the five-day routine tables and the
   nutrition habits. Add what the sample diet lacks: calories and protein grams, because as written it
   under-feeds five lifting days. Delete the influencer list, "rentable", "empoderamiento", the
   "reference model" framing and the misspelled name.
6. **Fat leaves where the deficit decides, not where the muscle burns.** Keep the two studies and their
   conditions, and say plainly that the article's own admission is the answer: local release is small.
   Keep the glute training for muscle, strength and shape; the stepper is a contraction drill. Delete
   "the most suitable machine", the swimming and rowing exclusion and "prevents localised fat
   hypertrophy".

## Global rules

1. Neutral Spanish with `tú`; zero vosotros, voseo or `usted`. Never the word `gym` in Spanish.
2. No first person, no newsletter CTAs, no athlete photos, no medical claims, no "Conclusión" section,
   no marketing headings, no manual TOC.
3. Zero external links, `.md` links, `#` anchors, inline images, `▷`/`✔`, escaped asterisks, emoji
   artifacts, empty headings, duplicate images, headings with no body.
4. Links only to pages that exist. Whitelist: the six batch pages, batch 78's ten
   (`cuerpo-completo`, `como-redondear-tus-gluteos`, `ejercicios-gluteos-mujeres`,
   `rutina-gluteos-duros-tonificados`, `entrenamiento-de-piernas-mujer`, `entrenamiento-pesas-circuito`,
   `rutina-de-media-hora`, `rutina-dividida`, `ejercicios-mujer`, `ejercicio-pechos-firmes`), any slug
   ticked in `odd/tasks/content-pages.md`, and these when useful: `agua-hidratacion-deporte`,
   `dieta-dash-guia-completa`, `entrenamiento-de-fuerza-y-ciclo-menstrual`,
   `como-combinar-cardio-y-pesas-para-mujeres`, `pesas-y-la-mujer`, `dietas-para-mujer`,
   `rutinas-para-mujer`, `entrenamiento-para-mujer-fitness`, `perder-grasa-abdominal-con-abdominales`,
   `anatomia-de-la-cadera-gluteos`, `beneficios-hip-thrust`, `extension-de-cadera-gluteos`,
   `como-calentar-para-tu-entrenamiento-de-gluteos`, `dieta-eliminar-exceso-grasa`,
   `guia-musculacion-principiantes`, `rutina-principiantes-cinco-semanas`,
   `como-llevar-un-estilo-de-vida-fitness`, `la-postura-correcta-un-factor-importante-en-nuestro-deporte`,
   `espalda-baja-fuerte`, `como-proteger-tus-rodillas-en-el-entrenamiento-de-cuadriceps`. Verify each
   slug on disk.
5. Zero em dashes. Titles 45-60, descriptions 150-160, reciprocal `alternate`.
6. Tables: routine tables are markdown with exactly three columns (Exercise | Sets | Reps). Comparison,
   symptom and decision tables use `<table class="text-table">` with three cells per row. Decision
   tables in the routine grid clip: if the table is not Exercise | Sets | Reps, it is a text table.
7. Heroes: one unique per page, free licence only, 1280 px, >=1200 on disk, <250 KB, credit plus honest
   alt, dHash on the final crop. Open the closest hero. No person on a scale, no before/after, no
   body-baring image, no bare midriff. Recent batches used rice plates, lunch boxes, crispbread, fish,
   diaries, legumes, guacamole, oat bran, sweet potato, peanut butter, avocado, cuttlefish, oats, bread,
   eggs, sardines, broccoli, a dress form, notebooks and dumbbell racks.
8. Body 600-900 words per locale, table-inclusive under 1,150. Page 1 arrives at 1,501 words and page 5
   at 1,581: one idea per H2. Page 6 (499) must be built.
9. Mandatory intra-batch links: 1 -> 2, 3; 2 -> 3, 4; 3 -> 4, 5; 4 -> 5, 6; 5 -> 6, 1; 6 -> 1, 2.

## Per page

### 1. Water retention

- Transient puffiness versus oedema; gravity, sodium and standing; the medical triage; what actually
  helps. Link `agua-hidratacion-deporte`, `dieta-dash-guia-completa`,
  `entrenamiento-de-fuerza-y-ciclo-menstrual`, `como-combinar-cardio-y-pesas-para-mujeres`, page 2,
  page 3.

### 2. Female body types

- The four claimed types as claims, refuted; frame, fat distribution and what changes. Link
  `pesas-y-la-mujer`, `entrenamiento-de-fuerza-y-ciclo-menstrual`, `dietas-para-mujer`, page 3, page 4.

### 3. High heels

- Ankle angle, forefoot load, Achilles and calf length; the condition list; rotation and mobility. Link
  `la-postura-correcta-un-factor-importante-en-nuestro-deporte`, `espalda-baja-fuerte`,
  `como-proteger-tus-rodillas-en-el-entrenamiento-de-cuadriceps`, page 4, page 5.

### 4. Beginner women's fitness

- Attendance and a handful of lifts; the myth list; two full-body sessions. Link
  `guia-musculacion-principiantes`, `rutinas-pesas-principiantes`, `rutina-principiantes-cinco-semanas`,
  `entrenamiento-para-mujer-fitness`, page 5, page 6.

### 5. Women's fitness culture

- The five-day split as a calendar and recovery decision; the routine tables; the diet with calories and
  protein. Link `rutinas-para-mujer`, `entrenamiento-para-mujer-fitness`,
  `como-llevar-un-estilo-de-vida-fitness`, `dietas-para-mujer`, page 6, page 1.

### 6. Glute spot reduction

- Blood flow is not local fat loss; the two studies with their conditions; glute training for muscle and
  shape; the stepper as a drill. Link `perder-grasa-abdominal-con-abdominales`,
  `anatomia-de-la-cadera-gluteos`, `beneficios-hip-thrust`,
  `como-calentar-para-tu-entrenamiento-de-gluteos`, `dieta-eliminar-exceso-grasa`, page 1, page 2.

## Writer split

- **Writer A:** pages 1-3: `retencion-de-liquidos-en-mujeres`, `tipos-de-genetica-mujer`,
  `tacones-celulitis-y-otros-problemas`, plus three heroes.
- **Writer B:** pages 4-6: `fitness-mujeres-principiantes`, `chicas-fitness`,
  `eliminar-grasa-localizada-de-los-gluteos`, plus three heroes.

## Hero shortlist

1. A bare ankle and calf resting on a low footstool, side light, no face.
2. A wooden tailor's dress form with a measuring tape at waist and hips.
3. A flat shoe and a high-heeled shoe side by side, no visible brand.
4. A loaded barbell on a rack with a paper logbook and a pen on a bench.
5. An open weekly planner with five training days marked, on a gym bench.
6. An empty gym stairwell shot from the bottom step upward.

## Verification

```powershell
npm run check:copy   # expected 40,137 for the finished library
npm run build        # expected 1,589 pages
npm run check:i18n   # expected 24,738, 1,586 sitemap URLs
```

Parent checks beyond the gates: every internal link resolves, zero em dashes, no BOM, dHash over all
heroes, 140 page/width pairs with no clipped cell.

## Result (2026-11-25)

- 6 bilingual pairs, 12 files, 6 heroes. Library 781 → **787 / 792**, the publishable total.
  **Mujer Fitness 23/23 — COMPLETO.** The library is finished: the only unchecked rows are the five
  settled Entrenamiento ones.
- Gates: `check:copy` **40,137/40,137**, build **1,589 pages**, `check:i18n` **24,738/24,738**, sitemap
  **1,586 URLs**.
- Structural checks: **72 internal links** across the six pairs, **0 broken**; 0 files with problems;
  **0 clipped cells over 224 page/width pairs** for the 16 pairs of batches 78-79.
- **What the batch kept and what it corrected:** water retention keeps the causes the archive names and
  turns them into triage, corrects "75 % of body weight" to about 60 %, names the herbs as diuretics
  with potassium loss instead of a remedy, and fixes "70 dim" to 15-30 mmHg with professional fitting;
  the body-types page keeps the four claimed glandular types as claims and refutes them, with frame and
  fat distribution as the honest story; the heels page keeps the whole mechanical condition list and
  drops the unsourced 800,000 operations, the 90 % figure, the celebrity passage and the cellulite
  causation; the beginner page keeps the myth list and gains attendance as the real variable; the
  five-day split keeps its routine tables and its sample diet now carries 2,200-2,400 kcal and
  110-130 g of protein, because as written it under-fed five lifting days; the spot-reduction page keeps
  both cited studies and states plainly that local release is small.
- **Fixed by the parent:** nothing content-side. Two click flows corrected by the writers against disk
  (`hip-thrust-guia-completa-de-entrenamiento`, `evitar-estrias`).
- **Writers:** A pages 1-3, B pages 4-6, disjoint files.
- **Heroes:** six files, 126-149 KB. A dress form appears for the first time in the library, checked
  against every `heroAlt`.
- Commits: pages `e69a553`, `e330183`, `bb67782`, `859166f`, `f5130eb`, `0ddee4c`; routes `f6ae8ae`.
