# Content library — batch 52

Started: 2026-11-22. Continues the library from 511/792 (`odd/tasks/content-pages.md`).

Objective: the next ten Ejercicios de Cuádriceps rows, from `/sentadilla-barra-piernas-abiertas/` to
`/prensa-horizontal/`, as ten bilingual pairs. Library 511 → 521.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Sources: `...\content\ejercicios\ejercicios-de-cuadriceps\`
- Depends on batch 51 (`sentadilla-barra`, `aductores-polea`, `peso-muerto-sumo` is older).

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `sentadilla-barra-piernas-abiertas` | `sumo-barbell-squat` | `sentadilla-barra-piernas-abiertas.md` | 359 | sentadilla sumo con barra | |
| 2 | `sentadilla-frontal-barra` | `front-squat` | `sentadilla-frontal-barra.md` | 466 | sentadilla frontal con barra | |
| 3 | `sentadilla-hack-2` | `hack-squat` | `sentadilla-hack-2.md` | 226 | sentadilla hack | |
| 4 | `sentadilla-multipower` | `smith-machine-squat` | `sentadilla-multipower.md` | 366 | sentadilla en multipower | |
| 5 | `zancadas-laterales-barra` | `barbell-lateral-lunge` | `zancadas-laterales-barra.md` | 362 | zancadas laterales | |
| 6 | `zancadas-hacia-atras-mancuernas` | `dumbbell-reverse-lunge` | `zancadas-hacia-atras-mancuernas.md` | 515 | zancadas hacia atrás | |
| 7 | `zancadas-mancuernas` | `dumbbell-lunge` | `zancadas-mancuernas.md` | 635 | zancadas con mancuernas | |
| 8 | `extensiones-cuadriceps-maquina` | `leg-extension` | `extensiones-cuadriceps-maquina.md` | 199 | extensiones de cuádriceps | |
| 9 | `prensa-inclinada` | `incline-leg-press` | `prensa-inclinada.md` | 289 | prensa inclinada | |
| 10 | `prensa-horizontal` | `horizontal-leg-press` | `prensa-horizontal.md` | 283 | prensa horizontal | |

All: `block: "Entrenamiento"` (EN `Training`), `section: "Ejercicios de cuádriceps"` (`Quad exercises`),
`updated: "2026-11-22"`.

## Conflicts the batch settles (binding)

1. **The sumo squat is the frontal-plane squat.** Page 1 lists only quads, glutes and hamstrings and
   never names the adductors, which are the reason for the width. Publish hip-width-plus, toe-out, and
   the adductor share. It must not repeat the general squat page: page 9 of batch 51 owns stance,
   bracing and depth; this page owns the sumo variation.
2. **"Knees never past the big toe" is false as a rule.** Page 1 states it. Anterior knee travel is
   normal and restricting it shifts load to the hip and the lumbar spine; `mejores-ejercicios-cuadriceps`
   already says the knee travels forward and that this is necessary. Kill the rule.
3. **The front squat does not select the vastus lateralis.** Page 2 claims an "outer quad sweep" and a
   "clear winner". The front rack moves load from hip to knee and forces an upright torso; the quads
   work harder as a group, no head in particular. `entrenamiento-del-cuadriceps-mitos` already denies
   head isolation, so leaving this in creates a self-contradiction.
4. **Three machines share the name "hack".** Page 3 does not say which one it is. Disambiguate in one
   paragraph: linear 45° machine, lever machine, barbell behind the legs. The page owns the 45° machine
   and links `sentadilla-hack-inversa` and the barbell version.
5. **The hack squat has no bounce.** Page 3 prescribes a fast turnaround. On a guided machine the rebound
   is the trap; control the descent and reverse without bouncing, with a pause if the bottom is the
   weak point. The house tempo is 2-3 s down.
6. **The Smith squat's foot position is a comfort adjustment, not a muscle switch.** Page 4 prescribes
   feet 15-25 cm forward to emphasise glutes. With a fixed vertical bar the Smith squat is
   quad-dominant; pushing the feet forward turns it into a hinge and loads the low back. Publish feet
   slightly forward only as far as the neutral spine allows.
7. **Page 4 is written in usted.** Rewrite in `tú` like the rest of the library.
8. **The lateral lunge's body is bodyweight while its title says barbell.** Page 5 describes hands on
   hips and mentions the bar as a future option. Publish the lateral lunge and its barbell-loaded
   version explicitly, with the bar on the back and the same step. Fix "do not lift the feet": a
   lateral lunge requires the stepping foot to travel; plant it flat and do not drag.
9. **The rear leg is a kickstand.** Page 6 says the rear leg carries most of the weight and contradicts
   itself two lines later. The front leg carries the load. Matters because loading the rear leg turns
   the exercise into a stretch and makes the front knee wobble.
10. **The forward lunge's 90° rule is not a safety limit.** Page 7 prescribes 90° and forbids passing
    90° in the same page. Descend until the pelvis stops being stable, which for most people is at or
    slightly below 90°; the limit is control, not the angle.
11. **Three unsupported promises die on page 7.** Back pain, toning, fat burning. Also the page calls a
    dumbbell exercise "sin equipamiento alguno" and ends on a truncated "Zancadas con barra" heading
    with no body. Cut the section or write it.
12. **The leg extension does not make the knee risk-free.** Page 8 promises no overload on other joints.
    The machine takes load off the spine, not off the knee: open-chain extension concentrates
    patellofemoral stress, most near terminal extension. Publish the real use, the range and the dose.
13. **The leg press injury mechanism is the pelvis rolling off the seat.** Pages 9 and 10 describe setup
    but never name the failure mode. Depth ends where the lumbar starts to peel off the pad.
14. **Low feet bias the quads; narrow feet do not.** Page 10 says "low and close". Published
    `prensa-posicion-pies` says lateral changes mostly affect comfort and adductor share. Publish low
    feet for quads and keep width as comfort.
15. **The 45° and the horizontal sled are different machines.** Page 9 and page 10 overlap. Page 9 owns
    the 45° sled and its three decisions (foot height, range, stop); page 10 owns the horizontal sled as
    the back-friendly and beginner tool with a fixed push line. Cross-link, do not repeat.
16. **Every row states its dose.** Defaults: 3-5 x 5-8 for loaded squats (2-3 min), 3 x 8-12 for
    machine squats and presses (90-120 s), 3 x 8-10 per leg for lunges (90 s), 2-3 x 12-15 for the
    extension (60-90 s). The archive gives no numbers at all; every dose is this batch's own
    recommendation and says so once.

## Global rules

1. Neutral Spanish with `tú`; zero vosotros, voseo or `usted`. Never the word `gym` in Spanish.
2. No first person, no newsletter or comment CTAs, no supplements, no athlete photos, no medical or
   rehab claims, no injury promises, no "Conclusión" section, no marketing headings.
3. Zero external links, `.md` links, `#` anchors, inline images, `▷`/`✔`, escaped asterisks, emoji
   artifacts, empty headings, manual TOCs, embedded videos, ALL-CAPS labels.
4. Links only to pages that exist (ES slugs): the ten batch pages, the batch 51 pages
   (`ejercicios-basicos`, `masa-muscular-peso-muerto`, `press-con-impulso-power-jerk`,
   `cargadas-en-dos-tiempos`, `cargada-clean`, `arrancada`, `power-cleans`,
   `sentadillas-mancuerna-estilo-sumo`, `sentadilla-barra`, `aductores-polea`), `ejercicios-pierna`,
   `rutinas-pierna`, `rutinas-cuadriceps-objetivos`, `mejores-ejercicios-cuadriceps`,
   `entrenamiento-del-cuadriceps-mitos`, `anatomia-del-cuadriceps`, `anatomia-femorales`,
   `anatomia-de-la-cadera-gluteos`, `sentadilla-sin-lesiones`, `sentadilla-mirada-al-frente`,
   `sentadilla-prensa`, `sentadilla-hack-inversa`, `sentadilla-con-caja-alturas`, `prensa-posicion-pies`,
   `zancadas-estaticas-zancadas-caminando-cual-es-mas-efectiva`, `peso-muerto-sumo`,
   `como-proteger-tus-rodillas-en-el-entrenamiento-de-cuadriceps`, `tecnica-ejecucion-ejercicios`,
   `rango-completo-de-movimiento-rom`, `fallo-muscular`, `volumen-de-entrenamiento`,
   `tiempo-de-descanso-entre-series`, `principio-adaptacion-sobrecarga-progresiva`,
   `rutina-de-piernas-con-dia-ligero-y-dia-pesado`, `rutinas-de-fuerza`, `rutina-con-multipower`,
   `abductores-maquina-2`.
5. Zero em dashes. Titles 45-60, descriptions 150-160, reciprocal `alternate`.
6. Tables: programme tables markdown, three columns; setup, comparison and decision tables as
   `<table class="text-table">` with three columns. No footnote inside a cell and no asterisk markers.
   The hack-machine disambiguation and the press-family comparison are text tables.
7. Heroes: one unique per page, free licence only (Wikimedia Commons first, Pexels second), 1280 px,
   >=1200 on disk, <250 KB, credit plus honest alt, dHash on the final crop. Distance 0 is a duplicate,
   crops have measured up to 14, and white Everkinetic line art hashes 3-9 against other line art:
   open the closest hero and compare by equipment.
8. Body 600-900 words per locale, table-inclusive under 1,150. Pages 3 and 8 are built from 226 and 199
   archive words: setup, errors, range and dose, never filler.
9. Mandatory intra-batch links: squat family 1 <-> 2 <-> 3 <-> 4, each to `sentadilla-barra`,
   `sentadilla-sin-lesiones` and `mejores-ejercicios-cuadriceps`; lunge family 5 <-> 6 <-> 7 and all
   three -> `zancadas-estaticas-zancadas-caminando-cual-es-mas-efectiva`; press family 9 <-> 10 and both
   -> `prensa-posicion-pies` and `sentadilla-prensa`; 8 -> 9 and 8 -> 10 (knee-only versus knee and
   hip); 3 -> `sentadilla-hack-inversa`; 4 -> `rutina-con-multipower`.

## Per page

### 1. Sumo barbell squat

- Stance wider than the shoulders, toes out 15-30°, knees track over the toes, torso as upright as the
  stance allows, depth to thigh parallel or as far as the pelvis holds. 3-5 x 5-8, 2-3 min.
- Own the frontal plane and the adductor share; link `peso-muerto-sumo` once to separate the two sumo
  lifts. Kill "knees never past the toes" and the inner-thigh wording.
- Link `sentadilla-barra`, `sentadilla-sin-lesiones`, `mejores-ejercicios-cuadriceps`,
  `aductores-polea`, `peso-muerto-sumo`, `anatomia-de-la-cadera-gluteos`, `rutinas-pierna`.

### 2. Front squat

- Bar on the front delts, elbows high, grip relaxed, torso upright, depth as deep as the rack holds.
  3-4 x 5-8, 2-3 min. The rack is the limiter before the legs are.
- Kill the vastus lateralis and "outer sweep" claims; correct version: more knee-flexion moment, more
  upright torso, quads as a group. Keep the wrist-stiffness note as a constraint, not a diagnosis.
- Link `sentadilla-barra`, `sentadilla-barra-piernas-abiertas`, `entrenamiento-del-cuadriceps-mitos`,
  `anatomia-del-cuadriceps`, `sentadilla-sin-lesiones`, `rutinas-cuadriceps-objetivos`.

### 3. Hack squat machine

- The 45° linear machine: back and shoulders against the pads, feet mid-platform, knees track, descend
  under control, reverse without bouncing, stand without locking hard. 3 x 8-12, 90-120 s.
- Disambiguate the three hacks, link `sentadilla-hack-inversa` and the barbell version from batch 53.
  Foot position: mid-platform default; higher shifts toward hip, lower toward knee.
- Link `sentadilla-barra`, `sentadilla-hack-inversa`, `sentadilla-prensa`, `prensa-posicion-pies`,
  `mejores-ejercicios-cuadriceps`, `tecnica-ejecucion-ejercicios`.

### 4. Smith machine squat

- Bar on the traps, feet slightly forward of the bar only as far as the spine stays neutral, descend
  under control, drive through the whole foot. 3-4 x 8-12, 90-120 s. Safeties at the bottom position.
- Own the trade: the fixed path removes balance and the stabilisers; it teaches the pattern and cannot
  replace the free squat. Kill the glute-by-foot-position claim.
- Link `sentadilla-barra`, `rutina-con-multipower`,
  `multipower-para-superar-puntos-de-estancamiento`, `sentadilla-sin-lesiones`, `rutinas-pierna`,
  `mejores-ejercicios-cuadriceps`.

### 5. Barbell lateral lunge

- Step out wide, plant the stepping foot flat, sit back into it, trailing leg extended, torso slightly
  forward, push back to centre. Bodyweight as the base; barbell on the back as the loaded version.
  3 x 8-10 per side, 90 s.
- Fix "do not lift the feet" and the inner-thigh wording. Own the adductors under a long lever, not
  shaping.
- Link `zancadas-hacia-atras-mancuernas`, `zancadas-mancuernas`,
  `zancadas-estaticas-zancadas-caminando-cual-es-mas-efectiva`, `aductores-polea`,
  `abductores-maquina-2`, `ejercicios-pierna`.

### 6. Dumbbell reverse lunge

- Step back, front shin near vertical, front knee about 90°, rear knee about 90°, torso upright, push
  through the front foot. 3 x 8-10 per side, 90 s. Front leg carries the load; the rear leg balances.
- Fix the rear-leg claim and the first-person plural. Keep the depth rule (stop before the torso tips).
- Link `zancadas-mancuernas`, `zancadas-laterales-barra`,
  `zancadas-estaticas-zancadas-caminando-cual-es-mas-efectiva`, `sentadilla-barra`,
  `mejores-ejercicios-cuadriceps`, `rutinas-pierna`.

### 7. Dumbbell lunge

- Step forward, front thigh toward parallel, front knee tracks over the foot, torso upright, push back
  through the front foot. 3 x 8-10 per side, 90 s. The real advantage: load without a rack and without
  spinal compression.
- Kill back-pain, toning and fat-burning claims; remove the "no equipment" line and either write the
  barbell section or cut it. Replace the 90° ceiling with the control criterion.
- Link `zancadas-hacia-atras-mancuernas`, `zancadas-laterales-barra`,
  `zancadas-estaticas-zancadas-caminando-cual-es-mas-efectiva`, `ejercicios-pierna`,
  `rutinas-pesas-casa`, `mejores-ejercicios-cuadriceps`.

### 8. Leg extension

- Seat at the popliteal crease, lumbar on the backrest, roller on the ankle, knees at 90° to start,
  extend without snapping, controlled return. 2-3 x 12-15, 60-90 s.
- Kill "sin ningún riesgo": the machine unloads the spine, not the knee; open-chain extension
  concentrates patellofemoral stress, most near terminal extension. Own its role: the only common quad
  movement with no hip involvement, so the rectus femoris works short.
- Link `prensa-inclinada`, `prensa-horizontal`, `sentadilla-barra`, `anatomia-del-cuadriceps`,
  `mejores-ejercicios-cuadriceps`, `como-proteger-tus-rodillas-en-el-entrenamiento-de-cuadriceps`.

### 9. Incline leg press

- The 45° sled: three decisions (foot height, range, stop point). Feet mid-platform by default, higher
  for more hip, lower for more knee. Depth ends where the lumbar starts to peel off the pad. 3-4 x 8-12,
  90-120 s.
- Name the pelvis-rolling failure mode; drop "glutes by depth" wording and the first-person plural.
- Link `prensa-horizontal`, `prensa-posicion-pies`, `sentadilla-prensa`, `prensa-inclinada-a-una-pierna`
  (batch 53, may not exist yet: omit the link if the file is absent), `mejores-ejercicios-cuadriceps`,
  `rutinas-pierna`.

### 10. Horizontal leg press

- The horizontal sled: fixed push line, torso angle fixed, hands on the handles, feet mid-platform, no
  lockout. 3 x 10-12, 90 s. Low feet bias the quads; width is comfort and adductor share.
- Own its real property: gravity is off the spine, which makes it a back-friendly and beginner tool,
  not a max-strength lift. Kill the "close feet" claim and the absolute injury line.
- Link `prensa-inclinada`, `prensa-posicion-pies`, `sentadilla-prensa`, `ejercicios-pierna`,
  `mejores-ejercicios-cuadriceps`, `principio-adaptacion-sobrecarga-progresiva`.

## Writer split

- **Writer A:** pages 1-5: `sentadilla-barra-piernas-abiertas`, `sentadilla-frontal-barra`,
  `sentadilla-hack-2`, `sentadilla-multipower`, `zancadas-laterales-barra`, plus five heroes.
- **Writer B:** pages 6-10: `zancadas-hacia-atras-mancuernas`, `zancadas-mancuernas`,
  `extensiones-cuadriceps-maquina`, `prensa-inclinada`, `prensa-horizontal`, plus five heroes.
- Neither writer touches `astro.config.mjs`, `scripts/check-i18n.mjs`, `guides-nav.ts`,
  `content-pages.md` or this document.

## Hero shortlist

1. Sumo barbell squat.
2. Front squat rack.
3. Hack squat machine.
4. Smith machine squat.
5. Lateral lunge.
6. Reverse lunge with dumbbells.
7. Dumbbell lunge.
8. Leg extension machine.
9. 45° leg press.
10. Horizontal leg press.

## Verification

## Result (2026-11-22)

- 10 bilingual pairs, 20 files, 10 heroes. Library: 511 → **521 / 792**. Ejercicios **144/196**;
  Cuádriceps **14/23**.
- Gates: `check:copy` **26,571/26,571**, build **1,058 pages**, `check:i18n` **16,492/16,492**, sitemap
  **1,054 URLs** with 3,162 alternates.
- Structural checks: 138 internal links, **0 broken**; zero em dashes; no BOM; no clipped cells across
  140 page/width pairs after two transient dev-server failures were re-run.
- **Corrections made:** the sumo squat owns the frontal plane and the adductors and drops the
  knees-past-the-toes rule; the front squat loses the vastus lateralis claim; the hack page disambiguates
  the three machines and forbids the rebound; the Smith squat treats foot position as comfort and drops
  the usted; the lateral lunge publishes its barbell version and fixes the "do not move the feet" line;
  the reverse lunge gives the load to the front leg; the forward lunge replaces the 90° ceiling with the
  control criterion and loses the pain, toning and fat-burning claims; the leg extension admits the
  patellofemoral stress and owns its knee-only role; the 45° sled owns its three decisions and the pelvis
  roll; the horizontal sled owns the back-friendly argument and separates low feet from narrow feet.
- **Fixed by the parent:** the English `horizontal-leg-press` description ran 148 characters; it now
  reads 159. The rest of the gate failures were the known EN "extended" false positive in the verify
  script, not copy defects.
- **Writers:** A pages 1-5, B pages 6-10, disjoint files. A found both Everkinetic frames it wanted
  already used (front squat bottom is the clean hero, hack machine is the inverse-hack hero) and
  switched to a cropped standing frame and a Commons photo.
- **Heroes:** two Everkinetic illustrations, two Commons photos and one Pexels photo. The low pairs at 5
  (leg extension versus a cable hip extension) and 10 (kneeling dumbbell lunge versus a sumo squat) were
  opened: different equipment and body position.
- Commits: pages `d3a44e7`, `bd24d15`, `95eda53`, `6c3f71f`, `98bbef7`, `36196f1`, `8381c50`, `5d74947`,
  `b0ffd6f`, `19c387a`; routes `da198b0`.
