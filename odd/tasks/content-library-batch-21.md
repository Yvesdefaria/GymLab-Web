# Content library — batch 21

Started: 2026-11-15. Continues the library from 201/792 (`odd/tasks/content-pages.md`).

Objective: publish the nine Entrenamiento del Hombro rows plus the first Físicos de leyenda row as ten
bilingual pairs (20 files, 10 unique heroes), register the routes, keep every gate green, mark each row
in the checklist as it commits, and land one commit per page with its evidence here.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Source archive: `C:\Users\Yves De Faria\Desktop\cambiatufisico.com\content\entrenamiento\entrenamiento-del-hombro\`
  and `...\entrenamiento\fisicos-de-leyenda\rutina-de-femorales.md`

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `consejos-entrenar-deltoides-posterior` | `rear-delt-training` | `consejos-entrenar-deltoides-posterior.md` | 1,203 | deltoides posterior | `2627eb4` |
| 2 | `entrenamiento-trapecios` | `trapezius-training` | `entrenamiento-trapecios.md` | 585 | entrenamiento de trapecios | `cb95795` |
| 3 | `press-militar-contra-press-tras-nuca` | `military-press-vs-behind-neck-press` | `press-militar-contra-press-tras-nuca.md` | 620 | press militar o press tras nuca | `ddab839` |
| 4 | `anatomia-hombros` | `shoulder-anatomy` | `anatomia-hombros.md` | 573 | anatomía del hombro | `426075b` |
| 5 | `estiramiento-de-la-parte-posterior-de-los-hombros` | `shoulder-stretches` | `estiramiento-de-la-parte-posterior-de-los-hombros.md` | 488 | estiramientos de hombros | `d6f1d8b` |
| 6 | `rutina-para-trabajar-tus-hombros-de-forma-completa` | `complete-shoulder-workout` | `rutina-para-trabajar-tus-hombros-de-forma-completa.md` | 493 | rutina de hombros completa | `7f2c335` |
| 7 | `los-trucos-de-arnold-para-desarrollar-sus-hombros` | `arnold-shoulder-training` | `los-trucos-de-arnold-para-desarrollar-sus-hombros.md` | 694 | trucos de Arnold para hombros | `2b6da59` |
| 8 | `entrenar-los-trapecios-con-los-hombros-o-con-la-espalda` | `trap-training-placement` | `entrenar-los-trapecios-con-los-hombros-o-con-la-espalda.md` | 373 | trapecios con hombros o espalda | `fa889a6` |
| 9 | `remo-de-pie-agarre-amplitud` | `upright-row-grip-width` | `remo-de-pie-agarre-amplitud.md` | 451 | remo al mentón agarre | `f3e6232` |
| 10 | `rutina-de-femorales` | `jay-cutler-hamstring-routine` | `fisicos-de-leyenda/rutina-de-femorales.md` | 500 | rutina de femorales Jay Cutler | `21d56bb` |

Pages 1-9: `block: "Entrenamiento"` (EN `Training`), `section: "Entrenamiento del Hombro"` (EN
`Shoulder Training`). Page 10: `block: "Entrenamiento"` (EN `Training`), `section: "Físicos de Leyenda"`
(EN `Legendary Physiques`). All ten: `updated: "2026-11-15"`.

## House positions settled before writing (binding)

The archive contradicts the published library in two places. One position each, applied everywhere in
this batch.

### Remo al mentón (page 9, and page 1 must not prescribe it)

The published `ejercicios-de-gimnasio-mas-lesivos` flags the upright row as a risk when the bar is
pulled past 90 degrees with a narrow grip, and gives the fix: a grip at least shoulder-width, the bar
close to the body, the elbow never above shoulder height. That is the house line. The exercise is not
banned; pulling it high is what hurts. Page 9 owns it. Page 1 must stop prescribing 4×8-10 of it as a
rear-delt exercise, which it never was.

### Press tras nuca (page 3)

The archive argues the behind-neck press is *more effective* and that many bodybuilders do it without
consequence; the published `ejercicios-de-gimnasio-mas-lesivos` calls it antinatural and lists injuries,
and `jalones-tras-nuca` teaches the pulldown version only with strict form. The page ships as a
comparison, not a defence: the front military press is the default; the behind-neck version adds range
at the cost of forced external rotation plus horizontal abduction, and the risk grows with limited
shoulder mobility and with load. It is never a max-load lift and never taken to failure. The archive's
"more effective" claim is presented as its argument, not as fact.

## Global rules for this batch

1. Neutral Spanish with `tú`; zero vosotros, zero voseo, zero `usted`. Never the word `gym`.
2. **No ghostwritten first person.** Pages 1, 4, 7, 8 and 10 speak in the voice of an author or, worse,
   of Arnold Schwarzenegger or Jay Cutler. Every one is rewritten in third person or plain guide voice.
3. Zero external links: the `ugr.es` anatomy link, the `bodybuilding.com` image credits and the
   "Extraido de: Musclemag" line all go. Never reference `cambiatufisico.com` in the copy.
4. Zero inline images, zero archive anchors, zero "Highlights", zero "Nivel pro", zero newsletter CTA.
5. Zero em dashes. Titles 45-60 characters, descriptions 150-160, reciprocal `alternate`.
6. Tables: routine tables are markdown with exactly three columns (Exercise | Sets | Reps); anything
   else uses `<table class="text-table">`. Page 10 has raw HTML tables in the archive; convert them.
7. Body length 750-1,300 words per locale. Page 8 is the thinnest source: build it to about 750 with the
   region map and the placement argument, never with filler.
8. Heroes: one unique per page, Wikimedia Commons, `iiurlwidth=1280`, at least 1200 px on disk, under
   ~250 KB, credit in `heroCredit`, alt in each file's own locale.

## Editorial decisions per page

### 1. Consejos para entrenar el deltoides posterior

Scope: **rear delt only.** It is not a second general shoulder guide.

- Keep: why the rear delt lags (it is not trained by pressing; most pressing volume lands on front and
  side), the function stated correctly (horizontal abduction and extension of the humerus, plus its
  role in external rotation with the rotator cuff), the exercise menu (seated or standing dumbbell rear
  raise, cable rear raise, reverse pec deck, face pull) with the archive's numbers (4×10-12 for raises,
  3×12-15 for the machine), the alternating dumbbells and cables week to week, and the torso "almost
  parallel to the floor" position with the reason.
- Delete: the remo al mentón prescription, the whole "¿con hombro o con espalda?" section (page 8 owns
  it; link it in one sentence), the "Personalmente pienso" and "Mi entrenamiento" first person, the
  "Créditos: Bodybuilding.com" lines and the `cambiatufisico` mention.
- Add: the one thing that makes rear delts grow, which the archive buries: light load, high reps, full
  horizontal abduction and a pause; if the traps take over, the weight is too heavy.
- Links: `rutina-para-trabajar-tus-hombros-de-forma-completa`, `anatomia-hombros`,
  `entrenar-los-trapecios-con-los-hombros-o-con-la-espalda`, `ejercicios-maxima-congestion-muscular`.

### 2. Entrenamiento de los trapecios

Scope: **execution, rep ranges and safety.** The placement debate belongs to page 8.

- Keep: the three regions and what each does, the technique (shrug straight up, no rotation, pause at
  the top, controlled descent), the rep periods (beginners 2×20 light, then blocks of 4-6 reps for a few
  weeks, then 15-20, and an intermediate 8-10), advanced 4-6 plus two closing sets of 20, frequency once
  or twice a week.
- Keep the safety core: the traps move heavy loads, so a bad rep is a spine and neck problem before it
  is a trap problem; never jerk, never rotate the neck under load.
- Delete: the anecdote about the bodybuilder who tore his neck muscles and took a year to recover,
  stated as fact; the "if you have a short neck, forget the traps exist" rule and the hunchback framing;
  the Hammer Strength brand, Arnold's name, the Musclemag source line and the vosotros.
- Links: `anatomia-de-la-espalda`, `entrenar-los-trapecios-con-los-hombros-o-con-la-espalda`,
  `encogimientos` does not exist; use `remo-barra`, `peso-muerto-mejor-agarre`, `tecnica-ejecucion-ejercicios`.

### 3. Press militar contra press tras nuca

- Keep: the elbow-space argument (a front press keeps the elbows slightly forward, the behind-neck
  version sends them back and out), the range difference, the mobility requirement, and the archive's
  own verdict sentence that the front press with a moderately wide grip is the safer option.
- Rewrite the risk section from the house position above. Do not say the behind-neck press is "more
  effective"; say the archive argues it works the whole shoulder, especially the middle head, and that
  the longer range is exactly why it is harder to control.
- Add the practical rules: no max loads, no failure, stop if the shoulder pinches, and shoulder mobility
  decides whether it is available to you at all.
- Delete: the `ugr.es` external link, the typo chain (rotadores, espina cervical), and the "many
  bodybuilders do it without consequence" line as an argument.
- Links: `ejercicios-de-gimnasio-mas-lesivos`, `anatomia-hombros`, `tecnica-ejecucion-ejercicios`,
  `rutina-para-trabajar-tus-hombros-de-forma-completa`.

### 4. Anatomía del hombro

The archive has one H2 and repeated factual errors. Rebuild it as a clean anatomy page.

- Structure: bones (clavicle, scapula, humerus), the joint's freedom and its cost, the rotator cuff as
  the four muscles that centre the head (supraspinatus, infraspinatus, teres minor, subscapularis), the
  deltoid's three heads with their real actions, and how to emphasise each head.
- Correct, do not copy: the shoulder is not "a group of three muscles"; the rear delt performs
  horizontal abduction and extension, not "flexion with elevation"; a shrug elevates the scapula, not
  the clavicle; fix "dettl".
- Keep: the imbalance argument (more pressing than pulling, middle and rear heads behind) and the list
  of movements per head with the archive's exercises.
- Add the link to `anatomia-de-la-espalda` for the trapezius instead of repeating it.
- Links: `anatomia-de-la-espalda`, `rutina-para-trabajar-tus-hombros-de-forma-completa`,
  `consejos-entrenar-deltoides-posterior`, `press-militar-contra-press-tras-nuca`.

### 5. Estiramientos de hombros

- Keep: the three posterior-shoulder stretches (cross-body, bilateral, with support) and their holds
  (30-40 seconds in the main one, 15-20 in the bilateral), the anatomy premise stated correctly (the
  infraspinatus and the posterior capsule are what limit horizontal adduction), and the rule that a
  stretch is not a treatment.
- Delete: the unsourced "more than a third of sedentary adults" statistic, "hay que tonificarlo
  estirándolo" (stretching does not tone), the image glued inside an H3, the uncited "the joint would
  dislocate at the slightest movement" and "the infraspinatus is the most fragile".
- The archive's first H2 promises pain relief and delivers theory: retitle it and keep the theory short.
- This page promises relief in its slug, so it carries the house notice: `> **Aviso:**` / `> **Notice:**`
  saying it is general information and that pain with weakness, night pain or a loss of range needs a
  professional.
- Links: `calentamiento-y-estiramientos`, `estiramientos`, `dolor-cronico-y-fisioterapia-tratamientos-que-funcionan`,
  `anatomia-hombros`.

### 6. Rutina para trabajar tus hombros de forma completa

Scope: **exercise selection by head plus one template.** The intensity tricks belong to page 7.

- Keep the archive's table exactly (press de mancuernas 4×10, 10, 8, 6; elevación posterior en polea
  3×10; elevación frontal en polea a una mano 3×10; elevación lateral sentado 3×10; aperturas invertidas
  3×12, 12, 15), the note that warm-up sets are not included, and the 16-set total.
- Keep: the section order by head with the reason, and the sentence that the rear delt is usually the
  most lagging area.
- Add: what to do with the template (run it 6-8 weeks, progress the press, keep the raises light), and
  one line that volume beyond this is page 7's territory.
- Delete: the anatomy intro that duplicates page 4 (one sentence plus a link), the vosotros, the typos
  ("loa cabeza", "movimientos de presa"), the broken guillemets.
- Links: `anatomia-hombros`, `los-trucos-de-arnold-para-desarrollar-sus-hombros`,
  `consejos-entrenar-deltoides-posterior`, `principios-weider`.

### 7. Los trucos de Arnold para desarrollar sus hombros

Scope: **intensity techniques**, not a routine. Third person, never Arnold's voice.

- Keep the six techniques with their numbers where the archive gives them: high volume (up to 20 sets a
  session, framed as his extreme and caveated), morning lateral raises of 5 sets as an experiment, the
  rotation in the lateral raise (thumbs slightly down at the top, the "pouring water" cue), drop sets
  (15 to 12.5 to 10 to 7.5 to 5 kg, 3-5 sets that are really one), the military-press plus lateral-raise
  superset, and the isometric lateral holds.
- Keep the honest caveat: shoulder width is mostly bone structure; training adds the deltoid on top of
  it.
- Delete: "este es mi consejo", "Yo llevé este sistema hasta el límite", "Mi esposa", the exclamations
  and the vosotros. Do not present Larry Scott, Shawn Ray or any named bodybuilder as evidence.
- Add the limit line: 20 sets is a historical experiment, not a recommendation; the template in page 6
  is the default and these techniques are a temporary tool.
- Links: `rutina-para-trabajar-tus-hombros-de-forma-completa`, `principios-weider`,
  `ejercicios-maxima-congestion-muscular`, `series-descendentes`, `series-gigantes`.

### 8. Entrenar los trapecios con los hombros o con la espalda

Scope: **placement and the region map.** Lean and complete, not padded.

- Keep: the argument (traps get direct work after shoulders instead of as leftover volume on back day,
  because back day already loads them through rows and pulldowns), the three-region map with the
  exercise that hits each (upper: shrugs; middle: rows; lower: pulldowns and prone raises), and the
  conclusion that it matters less than total volume and progression.
- Rebuild the archive's broken table (empty first cells, footnote asterisks with no anchor) as a clean
  three-column `<table class="text-table">`.
- Delete: the first person "mi consejo es que lo hagáis con los hombros" → keep the recommendation but
  as the page's argument, with its reason; the vosotros.
- Links: `entrenamiento-trapecios`, `anatomia-de-la-espalda`, `rutinas-espalda`, `agarres-jalones-dorsales`,
  `dominadas`.

### 9. Amplitud de agarre en el remo al mentón

The slug says "remo de pie" and the page never names the exercise: the image alt does. Fix the naming
without changing the slug.

- Title and H1 name it: "Remo al mentón: la amplitud del agarre". Keep the slug.
- Keep: the muscles recruited (traps, lateral delt, upper back), the subacromial-space argument, the
  grip-width rule (wider reduces the risk and the wrist torque; the narrow grip is not wrong but is the
  higher-risk option), the bar-close-to-body cue and the elbow never above shoulder height.
- State the house position: it is not banned, pulling it high is what hurts; if the shoulder already
  complains, the shrug is the safer substitute.
- Delete: "suparaespinooso", "rotadores de la espalda" → rotadores del manguito, "Fijaros", the
  unquantified "unos cuantos centímetros" replaced by the shoulder-width landmark.
- Add a one-line note that this is training information, not a diagnosis.
- Links: `ejercicios-de-gimnasio-mas-lesivos`, `entrenamiento-trapecios`, `tipos-agarre`,
  `remo-barra`, `anatomia-hombros`.

### 10. Rutina de femorales de Jay Cutler

First page of Físicos de leyenda. Third person, reported routine, never Cutler's voice.

- Keep: his principles (control the eccentric, never use momentum, hamstrings lag for most lifters,
  separate hamstring work from squat day when volume allows), the routine (lying leg curl with a
  dumbbell 2-3×8-12; single-leg machine curl 2-3×10-12; stiff-leg dumbbell deadlift 5×12, 12, 8, 8, 8;
  2-3 warm-up sets), and the seven-day split exactly as listed.
- Convert the raw HTML tables to markdown three-column tables (Exercise | Sets | Reps), one footnote
  maximum as a blockquote, and close the page properly: the archive ends on "Se repite el ciclo *" with
  no footnote.
- Delete: "Mi esposa", "Concentraos", "No podréis", the mixed register and the typo "aislamiento. y".
- Add one line on why the stiff-leg deadlift is in the routine and how to keep the spine neutral, with a
  link to the published technique page.
- Links: `peso-muerto-piernas-rigidas-mancuernas`, `regeneracion-muscular`, `volumen-de-entrenamiento`,
  `entrenamiento-con-companero` if the sentence fits; `frecuencia-entrenar-cada-musculo`.

## Cross-links

Each page needs 2-4 sibling links, at least one inside this batch. Natural pairs: 4 ↔ 6 (anatomy and
routine), 1 ↔ 6 (rear delts and the template), 2 ↔ 8 (execution and placement), 3 ↔ 4 (presses and
anatomy), 5 ↔ 4 (stretches and anatomy), 7 ↔ 6 (techniques and template). Page 10 links to the
technique pages it names.

## Hero images

One unique hero per page, Wikimedia Commons only, CC0, public domain, CC BY or CC BY-SA, 1280 px wide
(`iiurlwidth=1280`), at least 1200 px on disk, under ~250 KB, credit in `heroCredit`, alt in each
file's locale. The library already uses 201 heroes, including a good share of gym photos; check for
duplicates before vendoring.

Suggested subjects: (1) seated dumbbell rear delt raise, (2) barbell shrug in a rack, (3) seated
overhead press with back support, (4) deltoid anatomy plate from Gray's Anatomy, (5) cross-body
shoulder stretch, (6) seated dumbbell lateral raise, (7) top-down close-up of a dumbbell lateral raise,
(8) prone Y raise on an incline bench, (9) top-down close-up of hands on a barbell, (10) lying leg curl
or a machine hamstring curl.

## Verification

```powershell
npm run check:copy   # 211 pages expected, 10,761 assertions
npm run build        # 438 pages expected
npm run check:i18n   # after the routes are registered, 434 sitemap URLs
```

Each writer runs `npm run check:copy` at the end of its own scope. The parent registers the routes,
runs `npm run verify`, checks link resolution, the 390 px render and the hero dHash, and commits per
page.

## Result (2026-11-15)

- 10 bilingual pairs, 20 files, 10 heroes. Library: 201 → **211 / 792**.
- Gates: `check:copy` **10,761/10,761** (211 files), build **438 pages**, `check:i18n`
  **6,882/6,882**, sitemap **434 URLs** with **1,302 alternates**.
- Route registration: `f5770e6` for batch 20, `1693e32` for this batch.
- Structural checks: 94 internal links across the 20 new files, **0 broken**; zero external links,
  zero `.md` links, zero `#` links, zero inline images, zero manual anchors, zero em dashes.
- Heroes: 1280 px wide, 64-238 KB, CC0 / public domain / CC BY(-SA). dHash over all 211 heroes gives
  210 distinct values; the only exact duplicate stays the pre-existing
  `remo-polea-sentado` / `superserie-de-espalda-para-terminar-tu-rutina`, and none of the ten new ones
  is within distance 6 of another hero. Writer B swapped one pick after the check put it at distance 4
  from `fallo-muscular`.
- 390 px render: all 20 pages clean, in both locales. Two separate table defects were fixed in
  `ArticleLayout` along the way (commit `9aa6efe`): the routine table's 58/21/21 geometry put
  "Repeticiones" out of its 73 px column and the page scrolled sideways by 8 px, and the fix needed
  the whole selector inside `:global()` because Astro scopes the trailing element and the markdown
  cells carry no scope attribute.
- Native assessment: `gentle-ai review assess` over `7d0ce0e..HEAD` (37 paths, 2,029 changed lines,
  untracked mockups excluded) reports risk **medium**, `review_due: false`,
  `review_due_reason: under_budget`. No review transaction was opened.

### Editorial resolutions worth keeping

1. **Remo al mentón is not banned.** The house line is: it is valid, pulling it above shoulder height
   with a narrow grip is what hurts. Page 9 owns it and names the exercise; page 1 stops prescribing it
   as a rear-delt movement, which it never was.
2. **Press tras nuca ships as a comparison.** The front press is the default; the behind-neck version
   buys range with forced external rotation plus horizontal abduction, and it is never a max-load lift.
   The archive's "more effective" claim is attributed, not asserted.
3. **No ghostwritten athletes.** The archive speaks as Arnold on page 7 and as Jay Cutler on page 10.
   Both are reported in third person.
4. **Two traps pages, not one.** Execution and periodisation on page 2; placement and the region map on
   page 8. They share a topic but not a sentence.
5. **Routine and tricks are different pages.** Page 6 owns selection plus one 16-set template; page 7
   owns intensity techniques and calls 20 sets a historical extreme, not a recommendation.

