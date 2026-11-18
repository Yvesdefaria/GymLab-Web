# Content library — batch 42

Started: 2026-11-18. Continues the library from 411/792 (`odd/tasks/content-pages.md`).

Objective: the first ten Ejercicios de Tríceps rows, from `/jalones-barra-recta/` to
`/press-banca-agarre-cerrado-en-multipower/`, as ten bilingual pairs. Library 411 → 421.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Sources: `...\content\ejercicios\ejercicios-de-triceps\`

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `jalones-barra-recta` | `cable-triceps-pushdown` | `jalones-barra-recta.md` | 393 | jalones de tríceps en polea | |
| 2 | `patadas-triceps-polea` | `cable-triceps-kickback` | `patadas-triceps-polea.md` | 429 | patadas de tríceps en polea | |
| 3 | `patadas-con-mancuerna` | `dumbbell-triceps-kickback` | `patadas-con-mancuerna.md` | 329 | patadas de tríceps con mancuerna | |
| 4 | `press-banca-agarre-cerrado` | `close-grip-bench-press` | `press-banca-agarre-cerrado.md` | 246 | press de banca agarre cerrado | |
| 5 | `extensiones-triceps-en-polea-baja` | `low-pulley-triceps-extension` | `extensiones-triceps-en-polea-baja.md` | 393 | extensiones de tríceps en polea baja | |
| 6 | `fondos` | `triceps-dips` | `fondos.md` | 298 | fondos en paralelas tríceps | |
| 7 | `press-frances` | `lying-triceps-extension` | `press-frances.md` | 886 | press francés | |
| 8 | `extensiones-mancuerna-tumbado` | `lying-dumbbell-triceps-extension` | `extensiones-mancuerna-tumbado.md` | 1,054 | extensiones de tríceps tumbado con mancuernas | |
| 9 | `jalones-polea-agarre-inverso` | `reverse-grip-triceps-pushdown` | `jalones-polea-agarre-inverso.md` | 202 | jalones en polea agarre inverso | |
| 10 | `press-banca-agarre-cerrado-en-multipower` | `smith-machine-close-grip-bench` | `press-banca-agarre-cerrado-en-multipower.md` | 1,005 | press de banca agarre cerrado en multipower | |

All ten: `block: "Entrenamiento"` (EN `Training`), `section: "Ejercicios de Tríceps"` (EN `Triceps
exercises`), `updated: "2026-11-18"`.

## Conflicts the batch settles (binding)

1. **The three heads are not selectable.** Eight of the ten sources assign a head to a grip, a bar or
   a bench angle. One of them states the correct rule: the triceps has one distal tendon and the heads
   share it. Grip and angle change leverage, stretch and which part of the range is hardest, never
   which head contracts. Every page states this once, in its own words, and drops the selection claim.
2. **Stopping at forearms parallel amputates the exercise.** Page 1 tells the reader to stop when the
   forearms are horizontal; full elbow extension is the movement. Keep the reason (load too heavy,
   elbows drift), fix the cue.
3. **A kickback is elbow extension, not shoulder extension.** Page 2 raises the elbows and unloads the
   triceps. Both kickback pages fix the upper arm parallel to the torso and say plainly that the top of
   the range is the emptiest point, because gravity peaks at 90 degrees of flexion.
4. **The V-bar and the straight bar do not pick a head.** Page 1 and page 9 sell that split. Both keep
   their equipment cues and drop the head mapping.
5. **The close grip is slightly narrower than the shoulders.** Page 4 contradicts itself inside two
   paragraphs (narrower than shoulders, then shoulder width). Page 10 keeps the one cue worth
   protecting: *slightly* narrower. The width shifts load between chest and elbow extensors; it does
   not choose a head, and "cabeza externa" dies.
6. **Elbows to the ceiling is shoulder hyperextension.** Page 5 stacks the humerus behind the torso.
   The long head works because the shoulder is flexed, so the elbow stays slightly in front of the
   body line and the hands travel behind the head.
7. **Smith machine is not rehabilitation.** Page 10 claims it is optimal for recovery. A fixed path
   removes the stabiliser work that protects the shoulder; the page says what the machine does and
   does not do. Locking the elbows at the top is fine and no page tells the reader otherwise.
8. **Dips placement, settled once.** Page 6 calls dips the ideal first exercise; the published hub says
   the opposite. The page keeps one rule: dips open the session when strength is the goal, because
   the exercise is limited by the triceps rather than by a pre-fatigued chest.
9. **Sets and reps exist in two sources only.** Page 10 gives 2-3 sessions a week, 4-5x8-12 for
   hypertrophy, 4-6x4-6 for strength and 70-85 % of the 1RM; page 8 gives 3-4x10-12. Every other page
   gets one scheme labelled as this page's recommendation (3-4 x 8-12, 60-90 s rest, add load when the
   last set is clean) so the guide is usable and honest about what the archive never said.
10. **Five equipment pairs must not read as twins.** Pages 1 and 9, 2 and 3, 4 and 10, 7 and 8 are the
    same movement on different equipment. Each page owns its equipment cue and links its sibling in one
    line: "la variante con mancuernas está en …". No page repeats the other's cue sheet.
11. **The bodybuilding.com shop, the 1RM calculator CTA and the athlete photos die.** No external links,
    no supplement shops, no before/after photos.
12. **Register.** Page 2 is written entirely in voseo imperatives; page 7 mixes usted and vosotros in
    the same article; pages 4 and 9 slip into vosotros. All ten are neutral `tú` with no first person.

## Global rules

1. Neutral Spanish with `tú`; zero vosotros, voseo or `usted`. Never the word `gym` in Spanish.
2. No first person, no newsletter or comment CTAs, no supplements, no athlete photos, no before/after.
3. Zero external links, `.md` links, `#` anchors, inline images, `▷`/`✔`, escaped asterisks, empty
   headings, manual TOCs, embedded videos.
4. Links only to pages that exist (ES slugs): the ten batch pages, `ejercicios-triceps` (hub),
   `rutinas-triceps`, `cabeza-larga-del-triceps`, `anatomia-triceps`, `fondos-pecho-triceps`,
   `mejorar-fuerza-press-de-banca`, `press-de-banca-mas-efectivo-con-mancuernas-o-con-barra`,
   `rutinas-triceps`, `repeticiones-parciales`, `repeticiones-negativas`, `fallo-muscular`,
   `tecnica-ejecucion-ejercicios`, `rango-completo-de-movimiento-rom`, `volumen-de-entrenamiento`,
   `tiempo-de-descanso-entre-series`, `principio-adaptacion-sobrecarga-progresiva`,
   `ejercicios-espalda`, `rutinas-pecho`, `anatomia-del-pecho`, `rutina-de-volumen-para-triceps-como-herraduras`.
5. Zero em dashes. Titles 45-60, descriptions 150-160, reciprocal `alternate`.
6. Tables: programme tables markdown, three columns; schedules and anything with a long header are
   `<table class="text-table">`. No footnote inside a cell and no asterisk markers.
7. Heroes: one unique per page, Wikimedia Commons, 1280 px, ≥1200 on disk, <250 KB, credit + honest
   alt, dHash on the final crop. Distance 0 is a duplicate, crops have measured up to 13, so open the
   closest hero and compare before vendoring.
8. Body 600-900 words on every page.

## Per page

### 1. Cable triceps pushdown

- Keep the isolation rule (one joint), the elbow pin, the tension-through-the-range check and the
  straight-bar versus V-bar equipment cues. Fix the depth to full extension. State that the bar does
  not pick a head. Add the recommendation for sets, reps and rest. Link page 9 as the grip variant.
- Link `ejercicios-triceps`, `rutinas-triceps`, `anatomia-triceps`, `cabeza-larga-del-triceps`,
  `tiempo-de-descanso-entre-series`, `volumen-de-entrenamiento`.

### 2. Cable triceps kickback

- Keep the low pulley, the bracing hand, the chest-up position, the 1-2 s hold at full extension, the
  fixed elbow and the "last exercise of the session" placement. Fix the raised elbow. Say the top of
  the range is the emptiest. Keep the sample session numbers. Link page 3 as the dumbbell variant.
- Link `ejercicios-triceps`, `rutinas-triceps`, `repeticiones-parciales`, `fallo-muscular`,
  `tecnica-ejecucion-ejercicios`, `volumen-de-entrenamiento`.

### 3. Dumbbell triceps kickback

- Keep the setup (hand inside the bench, arm under the shoulder, hips flexed), the neutral grip, the
  fixed upper arm and the breathing cue. Fix the gravity-peak explanation and the "squeeze at the top"
  myth. Link page 2 as the cable variant.
- Link `ejercicios-triceps`, `rutinas-triceps`, `cabeza-larga-del-triceps`,
  `rango-completo-de-movimiento-rom`, `tecnica-ejecucion-ejercicios`.

### 4. Close-grip bench press

- Keep the honest objective (load the elbow extensors with a compound), the "first in the session"
  placement, the flat bench, the bar to the lower chest, the elbows close and the no-backward-drive
  cue. Fix the grip contradiction to "slightly narrower than the shoulders" and drop "external head".
  Add the scapular retraction and the load recommendation. Link page 10 as the Smith variant.
- Link `ejercicios-triceps`, `mejorar-fuerza-press-de-banca`,
  `press-de-banca-mas-efectivo-con-mancuernas-o-con-barra`, `anatomia-triceps`,
  `rutina-de-volumen-para-triceps-como-herraduras`.

### 5. Low-pulley triceps extension

- Keep the rope, the back-to-the-machine setup, the neutral grip, the elbows pointing up and the
  spread at the top. Fix the hyperextension: elbows slightly in front, hands behind the head. Drop
  "less injurious than free weights" as a blanket claim. Link page 7 and page 8 as the lying versions.
- Link `ejercicios-triceps`, `cabeza-larga-del-triceps`, `anatomia-triceps`,
  `rango-completo-de-movimiento-rom`, `rutinas-triceps`.

### 6. Triceps dips

- Keep the upright torso, the crossed knees, the no-wider-than-shoulders grip, the slow descent, the
  90-degree depth, the belt and the assisted machine. Explain that elbow travel and shoulder extension
  decide the triceps share, not the torso angle alone. Settle the first-exercise rule. Drop the head
  assignment.
- Link `ejercicios-triceps`, `fondos-pecho-triceps`, `rutinas-triceps`, `cabeza-larga-del-triceps`,
  `tecnica-ejecucion-ejercicios`.

### 7. Lying triceps extension (EZ bar)

- Keep the lying setup, the bar over the chest, the narrow grip, the elbows closed, the lowering to the
  forehead or just behind it, the stretch cue and the "movement only at the elbow". Resolve the page's
  own contradiction: state once that heads cannot be isolated, then explain what the bench angle
  changes (stretch and leverage). Keep the correct long-head note: it attaches to the scapula, so the
  overhead position stretches it. Link page 8 as the dumbbell version.
- Link `ejercicios-triceps`, `cabeza-larga-del-triceps`, `anatomia-triceps`,
  `repeticiones-parciales`, `rutinas-triceps`.

### 8. Lying dumbbell triceps extension

- Keep the two-dumbbell setup, the neutral grip, the lowering to ear level, the 1 s pause, the elbow
  control, the feet planted and the tempo. Keep 3-4x10-12 as the archive's own numbers. Fix the
  supination/pronation head mapping and the "do not lock the elbows" line. Link page 7 as the EZ-bar
  version.
- Link `ejercicios-triceps`, `anatomia-triceps`, `cabeza-larga-del-triceps`,
  `rango-completo-de-movimiento-rom`, `rutinas-triceps`.

### 9. Reverse-grip pushdown

- Keep the grip change and the wrist-comfort angle; state what actually changes (wrist position
  tolerance, forearm work) and what does not (the head). Fix the anatomy sentence. Keep the advice to
  use both grips. Link page 1 as the overhand version.
- Link `ejercicios-triceps`, `rutinas-triceps`, `anatomia-triceps`, `tecnica-ejecucion-ejercicios`,
  `volumen-de-entrenamiento`.

### 10. Smith machine close-grip bench

- Keep the bench height, the feet, the brace, the slightly narrower grip, the wrist alignment, the
  lower-chest path, the elbows close and the 2-3 sessions, 4-5x8-12, 4-6x4-6 and 70-85 %. Drop the
  rehabilitation claim and the "isolation" wording. Keep the comparison with the free bar and explain
  what the fixed path removes. Link page 4 as the free-bar version.
- Link `ejercicios-triceps`, `press-banca-agarre-cerrado`, `mejorar-fuerza-press-de-banca`,
  `anatomia-triceps`, `rutina-de-volumen-para-triceps-como-herraduras`.

## Writer split

- **Writer A:** pages 1-5: `jalones-barra-recta`, `patadas-triceps-polea`, `patadas-con-mancuerna`,
  `press-banca-agarre-cerrado`, `extensiones-triceps-en-polea-baja`, plus five heroes.
- **Writer B:** pages 6-10: `fondos`, `press-frances`, `extensiones-mancuerna-tumbado`,
  `jalones-polea-agarre-inverso`, `press-banca-agarre-cerrado-en-multipower`, plus five heroes.
- Neither writer touches `astro.config.mjs`, `scripts/check-i18n.mjs`, `content-pages.md` or this
  document.

## Hero shortlist

1. Cable pushdown station, side view.
2. Cable kickback with a single handle.
3. Dumbbell kickback on a bench.
4. Close-grip bench press with a spotter.
5. Low pulley with a rope.
6. Parallel bars in a gym.
7. EZ bar on a bench.
8. Dumbbell held over a bench.
9. Single-hand cable handle.
10. Smith machine bench station.

## Verification

```powershell
npm run check:copy   # 421 pages expected
npm run build        # 858 pages expected
npm run check:i18n   # 854 sitemap URLs
```

## Result (2026-11-18)

- 10 bilingual pairs, 20 files, 10 heroes. Library: 411 → **421 / 792**. Ejercicios **44/196**;
  Tríceps 10/17.
- Gates: `check:copy` **21,471/21,471**, build **858 pages**, `check:i18n` **13,392/13,392**, sitemap
  **854 URLs** with 2,562 alternates.
- Structural checks: 106 internal links, **0 broken**; every table three columns; zero em dashes; no
  BOM; zero clipped cells across 140 page/width pairs. 421 heroes: the only dHash pairs under distance
  7 are the three pre-existing ones.
- **Corrections made:** the head-selection folklore died across all ten pages; the pushdown now runs to
  full extension; the kickback keeps the upper arm parallel and admits the top of the range is the
  emptiest point; the close grip is slightly narrower than the shoulders; the overhead extension keeps
  the elbow in front of the torso line; the Smith page dropped its rehabilitation claim; dips stop at
  90 degrees with a neutral shoulder.
- **Note:** Writer A caught that `ejercicios-triceps` (the hub) is not published yet and dropped it from
  the link lists instead of shipping five dead links. The hub lands in batch 43.
- **Known approximation:** the only free Smith machine photo was already the hero of
  `multipower-para-superar-puntos-de-estancamiento`, so the Smith page uses a free-bar bench press and
  its alt says so.
