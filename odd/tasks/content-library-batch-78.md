# Content library — batch 78

Started: 2026-11-25. Continues the library from 771/792 after batch 77
(`odd/tasks/content-pages.md`).

Objective: `cuerpo-completo` to `ejercicio-pechos-firmes`, as ten bilingual pairs. Library 771 → 781.
The last ten rows of the Mujer Fitness block that are not a fifth batch.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Sources: `...\content\mujer-fitness\fitness-y-bienestar-para-mujeres\`
- Depends on batch 77.

## Tasks

- [x] T1 Scope, conflicts and house rules written (this document).
- [x] T2 Writer A: pages 1-5, ES + EN + heroes.
- [x] T3 Writer B: pages 6-10, ES + EN + heroes.
- [x] T4 Routes registered in `astro.config.mjs` and `scripts/check-i18n.mjs`.
- [x] T5 Parent gates, link check, render pass, dHash pass, per-page commits, checklist and handoff.

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `cuerpo-completo` | `full-body-womens-workout` | `cuerpo-completo.md` | 311 | rutina cuerpo completo mujer | |
| 2 | `como-redondear-tus-gluteos` | `round-glutes` | `como-redondear-tus-gluteos.md` | 803 | glúteos redondos | |
| 3 | `ejercicios-gluteos-mujeres` | `glute-exercises-for-women` | `ejercicios-gluteos-mujeres.md` | 2,691 | ejercicios de glúteos | |
| 4 | `rutina-gluteos-duros-tonificados` | `glute-routine` | `rutina-gluteos-duros-tonificados.md` | 333 | rutina de glúteos | |
| 5 | `entrenamiento-de-piernas-mujer` | `womens-leg-training` | `entrenamiento-de-piernas-mujer.md` | 796 | entrenamiento de piernas mujer | |
| 6 | `entrenamiento-pesas-circuito` | `circuit-training` | `entrenamiento-pesas-circuito.md` | 704 | entrenamiento en circuito | |
| 7 | `rutina-de-media-hora` | `30-minute-workout` | `rutina-de-media-hora.md` | 291 | rutina de 30 minutos | |
| 8 | `rutina-dividida` | `3-day-split-for-women` | `rutina-dividida.md` | 462 | rutina dividida | |
| 9 | `ejercicios-mujer` | `exercises-for-women` | `ejercicios-mujer.md` | 603 | ejercicios para mujer | |
| 10 | `ejercicio-pechos-firmes` | `firm-breasts-exercise` | `ejercicio-pechos-firmes.md` | 1,358 | pechos firmes ejercicio | |

All: `block: "Entrenamiento"` (`Training`), `section: "Fitness y bienestar"` (`Fitness and wellbeing`),
`updated: "2026-11-25"`.

## Expected gates

- `check:copy`: 39,321 + 510 = **39,831**
- build: 1,557 + 20 = **1,577 pages**
- `check:i18n`: 24,242 + 310 = **24,552**, sitemap **1,574 URLs**

## Preservation policy (owner decision, 2026-11-25)

**Keep the archive's information wherever it survives as fact.** Correct the number, name the evidence
and change the angle; do not amputate the topic. Only these go outright: promotional or affiliate
links, newsletter CTAs, product or brand endorsements, and any claim that can harm a reader (spot
reduction as a promise, a fabricated mechanism for lifting a breast, a medical clearance the page
cannot give).

When a section cannot stand as written, replace it with the nearest true version and say in one
sentence what changed and why.

## House rules (binding)

1. **No "tonificar".** Muscle does not tone. Write strength, muscle mass or fat loss. Six of these ten
   sources use the word in the title or the body.
2. **No spot reduction and no shape promise.** "Glúteos redondos", "pechos firmes", "eliminar grasa
   localizada": the exercise prescription stays, the promise does not. Shape is frame, muscle mass and
   fat, in that order.
3. **No medical clearance.** A page cannot tell a reader with back problems that a leg press is safe.
4. **Every routine gets a warm-up, a load rule and a progression rule.** Nine of the ten sources have
   none. The rewrite adds them: one warm-up block, an effort target (RIR) or a load instruction, and
   what to change next week.
5. **No sexist framing.** No "para mujer" as a reason to lift lighter, no male-gaze asides, no
   beach-body pressure, no body-baring imagery.
6. **No fabricated studies.** If a figure has no source, describe the direction instead.

## Conflicts the batch settles (binding)

1. **Full body is a three-day order for someone returning.** Keep the 13 exercises, the 3 x 7 to 12
   structure and the alternating days. Fix "48 de recuperación" to 48 hours, drop "Efectividad 100 %",
   and add warm-up, rest intervals, a load target and progression. The abdomen filler at 20 reps goes
   or becomes a loaded movement.
2. **Glute size comes from load progression, not from more reps.** Keep the three muscles and the
   exercise selection. Replace the ankle-weight advice (5-10 kg at the ankle is poorly tolerated) with
   the progression to hip thrust, RDL and split squat. Delete the posture analogy that "lifts" the
   glute and the "redondez y firmeza" promise: shape is genetics, mass and fat.
3. **The glute exercise library gets sets, reps and cues.** Keep the ten exercises, the eight errors and
   the benefits with their real size. Fix "los músculos más grandes del cuerpo" (the gluteus maximus is
   the largest single muscle) and delete "glúteos apagados", the plantar fasciitis and ankle sprain
   causation, "quema calorías incluso en reposo" without a magnitude, and the guarantee of preventing
   low back pain. Kickbacks do not isolate the glute and do not "define" it.
4. **The two-day glute template is rebuilt around hip thrust and RDL.** Keep the two lower days and the
   machine list. Fix "ligamento de la corva" (hamstring tendon), the abductors assigned to the gluteus
   maximus (they are medius, minimus and TFL), and the garbled "flexión de tronco frontal". Add the
   warm-up and the load rule. Delete the "reduce fats and carbs at night" diet rule and the three-month
   guarantee.
5. **The machine leg session is a station-by-station guide.** Keep the six exercises, the sets and the
   order. Delete the medical clearance for the leg press, the "best isolation movement" as fact, and the
   4 x 15 at one minute for a novice without a load note. Add warm-up and progression.
6. **A circuit is a format with a cost.** Keep the distribution, the 12-20 reps, the 2-4 rounds and the
   eight-station example. Delete the "recommended for women who want to tone" line, the EPOC claim
   without a magnitude, the 30-45 minutes of cardio that contradicts the 60-minute ceiling, and the
   behind-the-neck pulldown link. Add warm-up and load.
7. **Thirty minutes is five compound pairs and a fixed warm-up.** Keep the three-day frequency and the
   one-month rotation. Delete "tonificar" from the title and H1, the 10-15 minutes of cardio as a
   warm-up, and the single set to failure on every movement with no load and no rest. The "series"
   column disappears.
8. **Week one of a three-day split, with a load reset.** Keep the schedule and the exercise selection.
   Delete 24 sets per muscle in week one, the "increase the weight to reach failure" instruction
   without a load rule, and the three consecutive days followed by two off that contradict the recovery
   the page preaches.
9. **Exercise selection by goal, not by sex.** Keep the exercise list and rebuild it as a beginner
   sequence. Delete the 50 % loads, "no buscamos desarrollo muscular", the claim that a triceps head can
   be excluded, the invented "separation" of the chest, the press to the neck (dangerous), the duplicate
   squats and the leg raises filed under glutes.
10. **Chest training builds the pectoral; it does not lift the breast.** Keep the debunk of two-minute
    miracle routines and the 6-8 week adaptation frame. Delete the fascial mechanism, the "breast fat
    can be reduced with cardio", the creams for stretch marks and the implant aside. The breast is fat
    and gland on Cooper's ligaments; training the pectoral underneath changes posture and thickness, not
    the ligament.

## Global rules

1. Neutral Spanish with `tú`; zero vosotros, voseo or `usted`. Never the word `gym` in Spanish.
2. No first person, no newsletter CTAs, no athlete photos, no medical claims, no "Conclusión" section,
   no marketing headings, no manual TOC.
3. Zero external links, `.md` links, `#` anchors, inline images, `▷`/`✔`, escaped asterisks, emoji
   artifacts, empty headings, duplicate images, headings with no body.
4. Links only to pages that exist. Whitelist: the ten batch pages, batch 79's six
   (`retencion-de-liquidos-en-mujeres`, `tipos-de-genetica-mujer`, `tacones-celulitis-y-otros-problemas`,
   `fitness-mujeres-principiantes`, `chicas-fitness`,
   `eliminar-grasa-localizada-de-los-gluteos`), any slug ticked in `odd/tasks/content-pages.md`, and
   these when useful: `rutinas-cuerpo-completo`, `rutina-full-body-dias-pesados`,
   `rutina-gimnasio-para-mujer`, `rutina-piernas-mujeres`, `rutinas-para-mujer`,
   `entrenamiento-para-mujer-fitness`, `anatomia-de-la-cadera-gluteos`, `extension-de-cadera-gluteos`,
   `beneficios-hip-thrust`, `hip-thrust-guia-completa`, `hip-thrust-en-maquina`, `peso-muerto-rumano`,
   `sentadilla-bulgara`, `puentes-gluteo-2`, `como-calentar-para-tu-entrenamiento-de-gluteos`,
   `abductores-maquina-2`, `aductores-en-maquina`, `extensiones-cuadriceps-maquina`,
   `sentadilla-hack-2`, `femoral-maquina-tumbado-2`, `prensa-inclinada`,
   `tiempo-de-descanso-entre-series`, `triseries`, `rutina-con-superseries-musculos-antagonistas`,
   `entrenamiento-ahorrar-tiempo`, `guia-musculacion-principiantes`, `rutinas-pesas-principiantes`,
   `rutina-principiantes-cinco-semanas`, `principio-adaptacion-sobrecarga-progresiva`,
   `consejos-para-crear-tu-rutina-dividida`, `distribucion-rutina-entrenamiento`,
   `rutinas-torso-pierna`, `pesas-y-la-mujer`, `anatomia-del-pecho`, `ejercicios-pecho`, `evita-estrias`,
   `como-combinar-cardio-y-pesas-para-mujeres`. Verify each slug on disk.
5. Zero em dashes. Titles 45-60, descriptions 150-160, reciprocal `alternate`.
6. Tables: routine tables are markdown with exactly three columns (Exercise | Sets | Reps). Comparison
   and decision tables use `<table class="text-table">` with three cells per row.
7. Heroes: one unique per page, free licence only, 1280 px, >=1200 on disk, <250 KB, credit plus honest
   alt, dHash on the final crop. Open the closest hero; distance 0 is a duplicate and crops measure up
   to 14. No person on a scale, no before/after, no body-baring image. Recent batches used rice plates,
   lunch boxes, crispbread, fish, diaries, legumes, guacamole, oat bran, sweet potato, peanut butter,
   avocado, cuttlefish, oats, bread, eggs, sardines, broccoli, a dress form, notebooks and dumbbell
   racks.
8. Body 600-900 words per locale, table-inclusive under 1,150. Page 3 arrives at 2,691 words and page 10
   at 1,358: one idea per H2, cut depth. Pages 1 (311), 4 (333) and 7 (291) must be built.
9. Mandatory intra-batch links: 1 -> 2, 3; 2 -> 3, 4; 3 -> 4, 5; 4 -> 5, 6; 5 -> 6, 7; 6 -> 7, 8;
   7 -> 8, 9; 8 -> 9, 10; 9 -> 10, 1; 10 -> 1, 2.

## Per page

### 1. Full-body women's workout

- Three days, alternating, 13 exercises in the archive order, 3 x 7-12, 48 hours between sessions,
  warm-up and progression. Link `rutinas-cuerpo-completo`, `rutina-full-body-dias-pesados`,
  `rutina-gimnasio-para-mujer`, page 2, page 3.

### 2. Round glutes

- Load progression: bodyweight, then hip thrust, RDL, split squat; the three muscles; shape is genetics,
  mass and fat. Link `anatomia-de-la-cadera-gluteos`, `extension-de-cadera-gluteos`,
  `como-calentar-para-tu-entrenamiento-de-gluteos`, page 3, page 4.

### 3. Glute exercises for women

- The ten-exercise library with sets, reps and one cue each; the eight errors; the honest limits. Link
  `hip-thrust-guia-completa`, `hip-thrust-en-maquina`, `peso-muerto-rumano`, `sentadilla-bulgara`,
  page 4, page 5.

### 4. Glute routine

- Two lower days rebuilt around hip thrust and RDL, warm-up, load and progression; the machine list
  corrected. Link `rutina-piernas-mujeres`, `abductores-maquina-2`, `aductores-en-maquina`,
  `rutina-de-especializacion-para-las-piernas`, page 5, page 6.

### 5. Women's leg training

- Six machines, station by station, with setup, the error each invites and the load rule. Link
  `extensiones-cuadriceps-maquina`, `sentadilla-hack-2`, `femoral-maquina-tumbado-2`, `prensa-inclinada`,
  page 6, page 7.

### 6. Circuit training

- When a circuit fits and what it costs in strength; the eight-station example, 12-20 reps, 2-4 rounds,
  warm-up and load. Link `tiempo-de-descanso-entre-series`, `triseries`,
  `rutina-con-superseries-musculos-antagonistas`, `entrenamiento-ahorrar-tiempo`,
  `como-combinar-cardio-y-pesas-para-mujeres`, page 7, page 8.

### 7. 30-minute workout

- Five compound pairs, fixed warm-up, one progression rule, three days. Link `entrenamiento-ahorrar-tiempo`,
  `triseries`, `tiempo-de-descanso-entre-series`, page 8, page 9.

### 8. Three-day split for women

- Week one of the split, the schedule, the descending reps with a load reset, recovery. Link
  `consejos-para-crear-tu-rutina-dividida`, `distribucion-rutina-entrenamiento`, `rutinas-torso-pierna`,
  `rutina-de-entrenamiento-primer-mes-en-el-gimnasio`, page 9, page 10.

### 9. Exercises for women

- The same lifts, sequenced for a beginner by goal. Link `pesas-y-la-mujer`,
  `entrenamiento-para-mujer-fitness`, `rutinas-para-mujer`, `anatomia-del-pecho`, `ejercicios-pecho`,
  page 10, page 1.

### 10. Firm breasts exercise

- What chest training does: pectoral thickness, push strength, posture; what decides shape: fat,
  Cooper's ligaments, genetics. Keep the debunk of miracle routines. Link `anatomia-del-pecho`,
  `ejercicios-pecho`, `evita-estrias`, `consejos-ganar-musculo-pectoral`, page 1, page 2.

## Writer split

- **Writer A:** pages 1-5: `cuerpo-completo`, `como-redondear-tus-gluteos`,
  `ejercicios-gluteos-mujeres`, `rutina-gluteos-duros-tonificados`, `entrenamiento-de-piernas-mujer`,
  plus five heroes.
- **Writer B:** pages 6-10: `entrenamiento-pesas-circuito`, `rutina-de-media-hora`, `rutina-dividida`,
  `ejercicios-mujer`, `ejercicio-pechos-firmes`, plus five heroes.

## Hero shortlist

1. Dumbbell rack beside an empty flat bench, morning light.
2. Ankle strap on a low pulley with chalk dust on the floor.
3. Barbell hip thrust set up on a bench with a pad, no person.
4. Leg press plate stack with a paper log and pencil on the seat.
5. Empty hack squat machine with plates stacked on the floor.
6. Five machines along an aisle, towel left on the first seat.
7. Wall clock above a squat rack, gym bag on the floor.
8. Printed training sheet clipped to a clipboard on a bench.
9. Cable crossover with two handles hanging still.
10. Flat bench with two light dumbbells and a folded towel, no person.

## Verification

```powershell
npm run check:copy   # expected 39,831
npm run build        # expected 1,577 pages
npm run check:i18n   # expected 24,552, 1,574 sitemap URLs
```

Parent checks beyond the gates: every internal link resolves, zero em dashes, no BOM, dHash over all
heroes, 140 page/width pairs with no clipped cell.

## Result (2026-11-25)

- 10 bilingual pairs, 20 files, 10 heroes. Library 771 → **781 / 792**. Mujer Fitness **17/23**.
- Gates ran once for batches 78 and 79 together, after both closed: `check:copy`
  **40,137/40,137**, build **1,589 pages**, `check:i18n` **24,738/24,738**, sitemap **1,586 URLs**.
  The batch-78 forecast was 39,831 / 1,577 / 24,552 / 1,574.
- Structural checks: **120 internal links** across the ten pairs, **0 broken**; 0 files with problems;
  **0 clipped cells over 224 page/width pairs** for the 16 pairs of batches 78-79.
- **What the batch kept and what it corrected:** the full-body routine keeps its 13 exercises and gains
  a warm-up, rest intervals and progression; the glute pages keep the exercise selection and the
  three muscles while "redondear" and "firmeza" stop being promises, the ankle-weight advice becomes a
  barbell progression, and the "ligamento de la corva" and the abductors-as-maximus errors are fixed;
  the glute library keeps its ten exercises, eight errors and benefits with sets and reps added and the
  plantar fasciitis causation removed; the machine leg session keeps its six movements with setup and
  the error each machine invites; the circuit keeps its eight stations and gains the honest cost in
  strength, without the EPOC claim or the extra 30-45 minutes of cardio; the 30-minute session becomes
  five compound pairs with a fixed warm-up; the three-day split keeps its schedule with the load reset
  the descending reps needed; the exercise list is resequenced by goal instead of by sex, without the
  neck press, the 50 % loads or the duplicate squats; and the chest page keeps the debunk of miracle
  routines while dropping the fascial mechanism, the creams and the implant aside.
- **Fixed by the parent:** nothing content-side. Writer A corrected two brief slugs that were wrong on
  disk (`hip-thrust-guia-completa-de-entrenamiento`, `rutina-de-especializacion-para-las-piernas`);
  writer B corrected `evitar-estrias`.
- **Writers:** A pages 1-5, B pages 6-10, disjoint files, four writers alive with batch 79.
- **Heroes:** ten files. Two are 3:2 (1280x851/853) and render through `object-fit: cover`; the render
  pass found no clipped cell and no layout break. Nearest dHash 12 (opened, a line-art drawing).
- Commits: pages `79cd21d`, `6751bd8`, `ef6e1c7`, `fd3e1ae`, `e0b2822`, `5351ff9`, `1a8fcea`, `24679f9`,
  `fd7e873`, `cbf8458`; routes shared with batch 79 in `f6ae8ae`.
