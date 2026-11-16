# Content library — batch 25

Started: 2026-11-16. Continues the library from 241/792 (`odd/tasks/content-pages.md`).

Objective: close the chest block (five rows left) and open the biceps block (five of seven), ten bilingual
pairs (20 files, 10 heroes), routes registered, gates green, one commit per page with its evidence here.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Source archive: `C:\Users\Yves De Faria\Desktop\cambiatufisico.com\content\entrenamiento\` (`entrenamiento-del-pecho\` and `entrenamiento-de-los-biceps\`)

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `anatomia-del-pecho` | `chest-anatomy` | `pecho/anatomia-del-pecho.md` | 574 | anatomía del pecho | |
| 2 | `ejercicios-inclinados-para-pecho` | `incline-chest-exercises` | `pecho/ejercicios-inclinados-para-pecho.md` | 353 | press inclinado | |
| 3 | `consejos-ganar-musculo-pectoral` | `build-pectoral-muscle` | `pecho/consejos-ganar-musculo-pectoral.md` | 3,272 | ganar músculo pectoral | |
| 4 | `maquinas-pesos-libres-al-entrenar-el-pecho` | `machines-vs-free-weights-chest` | `pecho/maquinas-pesos-libres-al-entrenar-el-pecho.md` | 770 | máquinas o pesos libres | |
| 5 | `mancuernas-entrenando-pecho` | `dumbbells-for-chest` | `pecho/mancuernas-entrenando-pecho.md` | 767 | entrenar pecho con mancuernas | |
| 6 | `flexion-brazos-compartida` | `partner-biceps-curl` | `biceps/flexion-brazos-compartida.md` | 567 | flexión de brazos compartida | |
| 7 | `rutinas-biceps` | `biceps-routines` | `biceps/rutinas-biceps.md` | 858 | rutinas de bíceps | |
| 8 | `biceps-grandes` | `bigger-biceps` | `biceps/biceps-grandes.md` | 2,249 | bíceps más grandes | |
| 9 | `anatomia-biceps-antebrazo` | `biceps-forearm-anatomy` | `biceps/anatomia-biceps-antebrazo.md` | 852 | anatomía del bíceps | |
| 10 | `posicion-de-muneca-en-el-curl-de-biceps` | `wrist-position-biceps-curl` | `biceps/posicion-de-muneca-en-el-curl-de-biceps.md` | 336 | posición de muñeca curl | |

Pages 1-5: `section: "Entrenamiento del Pecho"` (EN `Chest Training`). Pages 6-10:
`section: "Entrenamiento de los Bíceps"` (EN `Biceps Training`). All ten: `block: "Entrenamiento"`
(EN `Training`), `updated: "2026-11-16"`.

## Conflicts the batch settles (binding)

1. **Incline angle.** The archive gives three answers: 30-45°, 30° maximum, and 10-20° with plates under
   a flat bench. House line: the clavicular head takes the work up to roughly **30 degrees**; above that
   the front deltoid takes an increasing share. Page 2 owns the number and the plate trick; page 1 says
   "hasta unos 30 grados" and links it.
2. **Shoulder position on the bench.** Page 1 suggests letting the shoulders come off the bench; page 3
   insists on keeping them back. House line: for any press, the shoulder blades are retracted and the
   shoulders stay on the bench. Protracted-shoulder work belongs to push-up-plus style drills, never to a
   loaded bench press.
3. **Hands together.** Page 4 says the contraction is greatest when the dumbbells touch; the published
   `press-de-banca-mas-efectivo-con-mancuernas-o-con-barra` lists banging them together as an error.
   House line: in a flye the hands may finish close with soft elbows; in a press, touching the dumbbells
   adds adduction, breaks tension and is not the goal.
4. **The biceps "pico".** Page 9 says the peak is genetic and no exercise changes it; page 7 still ships
   a "Pico" routine. The genetics rule wins: page 7 keeps the closed-grip work but renames it "trabajo de
   la cabeza larga" and says the shape will not change.
5. **Frequency.** Page 3 says "unless you use steroids you cannot train chest more than once every four
   days"; page 8 mandates 48 hours of rest; page 7's catalogue implies near-daily rotation. House line:
   about 48 hours between sessions for the same muscle, and the volume page owns the reasoning.

## Global rules for this batch

1. Neutral Spanish with `tú`; zero vosotros, zero voseo, zero `usted`. Never the word `gym`.
2. No first person: pages 2, 4, 5 and 8 are written in the author's voice, sometimes as a coaching diary.
3. Zero external links, zero inline images, zero duplicated image captions, zero `(Ref: …)` lines, zero
   newsletter CTA.
4. Zero em dashes. Titles 45-60 characters, no `▷`, no `|`. Descriptions 150-160.
5. Tables: routine tables markdown with three columns; everything else `<table class="text-table">`.
   One footnote maximum, as a blockquote after the table.
6. Anatomy pages correct the archive's errors; a wrong claim is fixed or removed, never softened.
7. Heroes: one unique per page, Wikimedia Commons, `iiurlwidth=1280`, at least 1200 px on disk, under
   ~250 KB, credit in `heroCredit`, alt in each file's locale. 241 heroes already exist, including Gray's
   and Wellcome plates; check the dHash before vendoring.

## Editorial decisions per page

### 1. Anatomía del pecho

- Structure: real H2s instead of one heading and four H3s. The pectoralis major with its clavicular and
  sternal heads, the pectoralis minor (originates ribs 3-5, inserts on the coracoid, and it **does**
  move the scapula), the serratus, and the region → angle/grip map.
- Fix: the pec minor attachment and function, the "recent physiological studies" with no source, and the
  shoulders-off-the-bench suggestion (see the house line above).
- Keep: the map itself (incline for the upper chest, decline and low cable for the lower, wide grip for
  the outer, narrow for the inner), with the honest caveat that the heads share one tendon and you
  emphasise, you do not isolate.
- Links: `ejercicios-inclinados-para-pecho`, `consejos-ganar-musculo-pectoral`,
  `maquinas-pesos-libres-al-entrenar-el-pecho`, `entrenamiento-del-cuadriceps-mitos` (the emphasis rule).

### 2. Ejercicios inclinados para el pecho

353 words with one H2 is a section, not a page. Build it around the one thing it owns.

- Keep: the 30° ceiling and why (above it the deltoid takes over), the 10-20° plate trick under a flat
  bench, the bar path just below the clavicle with the forearms vertical, and the advice to drop flat
  and decline work until the upper chest catches up.
- Add: how to set the bench and check the angle, the difference between a bar and dumbbells at that
  angle, and what to do with the rest of the session.
- Delete: the three duplicated image captions, the bodybuilder name-dropping as evidence, the
  "Multipower as preferred implement" endorsement, the vosotros and the first person.
- Links: `anatomia-del-pecho`, `press-de-banca-mas-efectivo-con-mancuernas-o-con-barra`,
  `consejos-ganar-musculo-pectoral`, `rango-completo-de-movimiento-rom`.

### 3. Cómo ganar músculo pectoral

3,272 words and 17 flat H2s, half of which the library already publishes elsewhere. Cut it to its
residue and keep the error list.

- Keep: lifting too heavy too soon, working the chest instead of the deltoids, the mind-muscle
  connection, taking flyes seriously, the stretch, pyramid up versus down, not repeating the same
  session, frequency, set and rep ranges, and alternating basics with isolation.
- Keep the arch coaching **with the caveat**: a slight arch with the glutes down is a normal bench
  position; lifting the hips off the bench is not.
- Delete: "a menos que uséis esteroides…", "presidiarios", the fascia-stronger-than-steel claim, the
  forum hearsay about shoulder pain, the joke about impressing a 15-year-old, the "no cedáis a la
  tentación de una repetición máxima" block (link `repeticion-maxima`), the tempo and range sections
  (link `rango-completo-de-movimiento-rom` and `tecnica-ejecucion-ejercicios`), the brand names, and the
  internal CTA praising a routine.
- Target 1,200-1,400 words. It is a list of corrections, not a treatise.
- Links: `volumen-de-entrenamiento`, `fallo-muscular`, `repeticion-maxima`,
  `rango-completo-de-movimiento-rom`, `tecnica-ejecucion-ejercicios`, `anatomia-del-pecho`.

### 4. Máquinas o pesos libres al entrenar el pecho

- Keep the argument and its structure: a free-weight press first, then a machine; never two free-weight
  presses in one session; dumbbells over a bar when training alone; plate-loaded over selectorized;
  flyes with soft elbows and a controlled finish.
- Keep the pec-deck warning as an opinion with its reason: the machine fixes the arms in external
  rotation and internal rotation at the same time, which loads the front of the shoulder; if it pinches,
  the cable or the dumbbell does the same job.
- Fix: "más seguras" as a bare claim (dumbbells can be dropped, which is a real difference, and the page
  says exactly that), the garbled closing sentence about rear delts, and the duplicated captions.
- Delete: the first person, the vosotros, and the brand names (Hammer Strength, Multipower) as
  endorsements; describe the machine type instead.
- Links: `anatomia-del-pecho`, `press-de-banca-mas-efectivo-con-mancuernas-o-con-barra`,
  `mejores-ejercicios-en-maquina-de-musculacion`, `mancuernas-entrenando-pecho`.

### 5. Entrenar el pecho con mancuernas

The archive's unique asset is a real 12-week progression log. Build the page around it.

- Keep: the progression log with its numbers (decline press 43 × 11 to 59 × 7, incline 38 × 10 to 50 × 8,
  flat 45 × 10 to 59 × 6), the 12-week block structure centred on the decline press, one exercise per
  region plus one fly, flyes on cable or machine, the rest intervals (2-3 minutes after presses, 1-2
  after flyes) and the full-range constant-cadence rule.
- Fix: "es obvio que estimula más fibras" (report it as the reason the log exists, not as a finding), the
  death anecdote, "las mancuernas no provocan presión en el hombro" (they reduce the fixed bar path, not
  the load), and the garbled pressure sentences.
- Delete the first person and the "puedo corroborarlo" anecdotes.
- Links: `press-de-banca-mas-efectivo-con-mancuernas-o-con-barra`, `anatomia-del-pecho`,
  `volumen-de-entrenamiento`, `levantar-aumentar-peso`.

### 6. Flexión de brazos compartida

- Keep the method exactly: medium load, strict reps, the partner takes the bar the moment you finish,
  your rest is their set, and the ascending or descending ladder (1, 2, 3… or from 10 down), with the
  arithmetic (ten sets of the descending ladder is 55 reps).
- Frame it correctly: it is a density and work-capacity drill built on the Weider overload principle,
  not a new principle; link `principios-weider` instead of renaming it.
- Delete the vosotros, the "un tuya, mía" nickname, the "es motivante superar a vuestro compañero"
  first-person plural and the typo "uno de los primero ejercicios".
- Links: `principios-weider`, `rutinas-biceps`, `entrenamiento-con-companero`, `fallo-muscular`.

### 7. Rutinas de bíceps

Ten routines with their numbers. Keep the tables and give the page the frame it lacks.

- Keep each routine's sets, reps and rest exactly as listed (tamaño 4+4+3+3 at 6/8/10/12; principiantes
  3 × 10, 12, 12; casa 4 sets with Curl 21; 15 minutos 3 × 6, 10, 15 with under 30 seconds; cabeza larga
  4+4+4+3 closed grip; cabeza corta 4+3+3+3 open grip; gigante 4 exercises × 4 sets of 10 with 3 minutes;
  fuerza 4 × 4, 4, 6, 8 with 2-3 minutes; definición 5 sets × 10-20 with 30-45 seconds; congestión
  3 × 10, 10, 30, 30), and the default 60-90 seconds of rest.
- Rename the "Pico" routine: it is long-head work with a closed grip, and the peak is genetic (link page 9).
- Add the frame: pick one routine, run it 6-8 weeks, leave 48 hours between biceps sessions, and do not
  stack two of these in the same week.
- Delete: the two empty H2s at the end, the escaped asterisks in headings, "si eres seguidor de
  cambiatufisico.com", the wrong link on the short-head row, the broken target, "damos por echo" and the
  vosotros in the footnote.
- Links: `biceps-grandes`, `anatomia-biceps-antebrazo`, `principios-weider`, `volumen-de-entrenamiento`,
  `rango-completo-de-movimiento-rom`.

### 8. Bíceps más grandes

- Fix the frame: the title promises six phases and the body has five, and the intro starts at "la
  segunda". Rebuild the intro and ship five phases (or six if the archive's fifth splits cleanly — do not
  invent a sixth).
- Keep: the sequencing logic (a strength movement at 6-8, a mass movement at 8-10, a shaping movement at
  10-12), the 48-hour rule, the sessions of two to four movements, the warm-up sets, and the final table
  (one strength, one mass, one shape).
- **Do not re-define the techniques.** Drop sets, cheat reps, forced reps and partials each have a page;
  link them and keep one line of why they belong at the end of the session.
- Fix the two contradictions: on the Scott bench the long head is *shortened* and the short head takes
  more, and supination means the palms turn **up**, not in.
- Delete: the "entorno anabólico por testosterona y hormona del crecimiento" claim, the vosotros and the
  duplicated image captions.
- Links: `series-descendentes`, `repeticiones-con-trampa`, `repeticiones-forzadas`,
  `repeticiones-parciales`, `fallo-muscular`, `rutinas-biceps`.

### 9. Anatomía del bíceps y el antebrazo

- Keep: the biceps with its two heads and their actions (flexion, supination, shoulder flexion), the
  brachialis, the brachioradialis, the forearm flexors and extensors, and the grip map (narrow for the
  long head, wide for the short head, hammer for the brachialis and brachioradialis, reverse curls for
  the brachioradialis and extensors).
- Keep the anti-myth stance, which is the page's best asset: the peak is genetic, insertion and shape do
  not change, and Larry Scott is the exception that proves it.
- Fix: "braquial anterior" (brachialis), the brachialis/brachioradialis conflation in the brachioradialis
  section, the loose insertion sentence, the unbalanced guillemets in the heading and the overwrought
  intro.
- Links: `rutinas-biceps`, `entrenamiento-del-agarre`, `posicion-de-muneca-en-el-curl-de-biceps`,
  `biceps-grandes`.

### 10. Posición de la muñeca en el curl de bíceps

336 words, two sub-case headings. Give it a skeleton and keep its table.

- Structure: what the wrist does, the three positions (neutral, flexed, extended), when to use each, and
  the recommendation.
- Keep: neutral for every bar curl, block the wrist when the load goes up, experiment with flexed and
  extended deliberately and not because the load forces it; the flexed wrist does not change the biceps
  contraction but tires the forearm sooner; the extended wrist puts stress on the wrist joint.
- Delete the vosotros and state the recommendation as the page's, not as "creemos".
- Links: `anatomia-biceps-antebrazo`, `entrenamiento-del-agarre`, `rutinas-biceps`,
  `tecnica-ejecucion-ejercicios`.

## Cross-links

Each page needs 2-4 sibling links, at least one inside this batch. Page 1 is the hub of the chest block
and page 9 of the biceps block.

## Hero images

One unique hero per page, Wikimedia Commons only, CC0, public domain, CC BY or CC BY-SA, 1280 px wide
(`iiurlwidth=1280`), at least 1200 px on disk, under ~250 KB, credit in `heroCredit`, alt in each
file's locale. The library already has a Wellcome thigh plate, a Braus calf plate and a quadriceps
engraving, so check the dHash on the two anatomy pages.

Suggested subjects: (1) a pectoral plate from Gray's; (2) an incline dumbbell press; (3) a dumbbell fly
on a flat bench; (4) a pec deck machine, empty; (5) a dumbbell rack; (6) a standing barbell curl; (7) a
preacher-curl bench with an EZ bar; (8) a concentration curl; (9) a biceps plate from Gray's; (10) hands
gripping a bar, close-up.

## Verification

```powershell
npm run check:copy   # 251 pages expected, 12,801 assertions
npm run build        # 518 pages expected
npm run check:i18n   # after the routes are registered, 514 sitemap URLs
```

Each writer runs `npm run check:copy` at the end of its own scope. The parent registers the routes,
runs `npm run verify`, checks link resolution and the 390 px render, runs the hero dHash and commits
per page.

## Result (2026-11-16)

- 10 bilingual pairs, 20 files, 10 heroes. Library: 241 → **251 / 792**. The chest block is closed
  (6/6) and the biceps block has five of its seven pages.
- Gates: `check:copy` **12,801/12,801** (251 files), build **518 pages**, `check:i18n`
  **8,122/8,122**, sitemap **514 URLs** with **1,542 alternates**.
- Route registration: commit `bef44e4`.
- Structural checks: 98 internal links across the new files, **0 broken**; zero external links,
  zero `.md` links, zero `#` links, zero inline images, zero em dashes.
- Heroes: 1200-1280 px wide, 115-240 KB. dHash over all 251 heroes gives 250 distinct values; only the
  pre-existing `remo-polea-sentado` pair is identical.
- 390 px render: all 20 pages clean on the first pass, with no clipped cell and no page overflow.

### Corrections to the record

1. Incline angle settled at about 30 degrees as the ceiling; the archive offered 30-45, a 30 maximum
   and 10-20 with plates.
2. Shoulder blades stay retracted and on the bench for every press; the archive suggested letting them
   come off.
3. The biceps peak is genetic. The "Pico" routine is renamed closed-grip long-head work.
4. Page 3 cut from 3,272 to about 1,300 words by removing what five published pages already own.
5. "Salvo que uses esteroides no puedes entrenar pecho más de una vez cada cuatro días" does not ship;
   the 48-hour rule from the volume page stands.

