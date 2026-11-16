# Content library — batch 26

Started: 2026-11-16. Continues the library from 251/792 (`odd/tasks/content-pages.md`).

Objective: the last two biceps rows, the three triceps rows and the first five abdomen rows as ten
bilingual pairs (20 files, 10 heroes), routes registered, gates green, one commit per page with its
evidence here.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Source archive: `C:\Users\Yves De Faria\Desktop\cambiatufisico.com\content\` (`entrenamiento\entrenamiento-de-los-biceps\`, `entrenamiento\entrenamiento-del-triceps\`, `por-musculo\abdomen\`)

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `consigue-grandes-brazos` | `build-big-arms` | `biceps/consigue-grandes-brazos.md` | 950 | brazos grandes | |
| 2 | `aumentar-biceps` | `grow-biceps` | `biceps/aumentar-biceps.md` | 819 | aumentar bíceps | |
| 3 | `rutinas-triceps` | `triceps-routines` | `triceps/rutinas-triceps.md` | 2,368 | rutinas de tríceps | |
| 4 | `cabeza-larga-del-triceps` | `triceps-long-head` | `triceps/cabeza-larga-del-triceps.md` | 225 | cabeza larga del tríceps | |
| 5 | `anatomia-triceps` | `triceps-anatomy` | `triceps/anatomia-triceps.md` | 505 | anatomía del tríceps | |
| 6 | `entrenamiento-abdominal-por-dorian-yates` | `dorian-yates-abs` | `abdomen/entrenamiento-abdominal-por-dorian-yates.md` | 847 | abdominales Dorian Yates | |
| 7 | `encogimientos-sobre-balon-ejercicio` | `swiss-ball-crunches` | `abdomen/encogimientos-sobre-balon-ejercicio.md` | 378 | encogimientos en balón | |
| 8 | `giros-en-disco` | `plate-twists` | `abdomen/giros-en-disco.md` | 472 | giros en disco | |
| 9 | `rutinas-ejercicios-abdominales` | `ab-workout-routines` | `abdomen/rutinas-ejercicios-abdominales.md` | 1,763 | rutinas de abdominales | |
| 10 | `abdominales-isometricos` | `isometric-abs` | `abdomen/abdominales-isometricos.md` | 392 | abdominales isométricos | |

Pages 1-2: `section: "Entrenamiento de los Bíceps"` (EN `Biceps Training`). Pages 3-5:
`section: "Entrenamiento del Tríceps"` (EN `Triceps Training`). Pages 6-10: `section: "Abdomen"`
(EN `Abs`). All ten: `block: "Entrenamiento"` (EN `Training`), `updated: "2026-11-16"`.

## Conflicts the batch settles (binding)

1. **The rectus abdominis is one muscle.** `ejercicios-de-abdominales` already publishes that the
   division is connective tissue, not two muscles. Page 9's ordering doctrine ("if you fatigue the upper
   abs first, they limit the lower abs") is built on separable upper/lower rectus and cannot ship as
   written. Rebuild it around what is true: the rectus flexes the trunk, the hip flexors raise the legs,
   and the order changes which part is fresh, not which muscle is trained.
2. **Skull crushers.** Page 3 calls the French press risky and then prescribes it in four routines on the
   same page. House line: elbow extension with the elbows pinned and a controlled range is not risky by
   itself; the risk is a heavy load, flared elbows and a range the elbow does not tolerate. Keep the
   exercise with the caveat.
3. **The brachialis.** Page 1 says the brachialis, not the biceps, is the main elbow flexor. That is
   false. House line: the biceps is the prime flexor with the palm up; a neutral grip shifts work to the
   brachialis and the brachioradialis. The page keeps the neutral-grip work and drops the premise.
4. **The wrist cue.** Page 1 recommends a pinky-up tilt; the published
   `posicion-de-muneca-en-el-curl-de-biceps` recommends a neutral wrist. Neutral stays the rule; the
   tilt is described as a small variant, not as a correction.
5. **The biceps peak is genetic** (settled in batch 25). No page here sells shape.
6. **Spinal rotation.** Page 8's premise ("the spine is not designed to rotate") is false: the thoracic
   spine rotates about 35-45 degrees and the lumbar about 5-15. Keep the risk argument where it is real
   (loaded seated rotation with a fixed pelvis and a long lever) and drop the certainty about hernias.

## Global rules for this batch

1. Neutral Spanish with `tú`; zero vosotros, zero voseo, zero `usted`. Never the word `gym`.
2. No first person. Page 6 has three voices (Yates quoted, the author, "mi rutina") and page 8 says
   "el aparatillo diabólico" / "me ha costado encontrar un vídeo"; all become guide voice.
3. Zero external links: the `bodybuilding.com` shop credit on page 7 and the Wikipedia hernia link on
   page 8 die.
4. Zero inline images, zero duplicated captions, zero `▷` or `✔✔` in titles, zero escaped asterisks,
   zero empty trailing headings.
5. Zero em dashes. Titles 45-60 characters, descriptions 150-160, reciprocal `alternate`.
6. Tables: routine tables markdown with three columns; everything else `<table class="text-table">`.
   One footnote maximum, as a blockquote after the table.
7. Anatomy pages correct the archive. A wrong claim is fixed or removed, never softened.
8. Heroes: one unique per page, Wikimedia Commons, `iiurlwidth=1280`, at least 1200 px on disk, under
   ~250 KB, credit in `heroCredit`, alt in each file's locale. 251 heroes already exist; check the dHash
   before vendoring.

## Editorial decisions per page

### 1. Consigue grandes brazos

- Keep: the two-hand cable curl protocol (lowest pin, one handle per hand, underhand grip, elbows pinned
  to the torso, 10 reps, under 60 seconds of rest, 6-10 total sets), the optional two or three sets of
  concentration curls to finish, the wide-grip straight-bar curl for the inner head, and the
  incline-bench curl for the long head.
- Fix the premise: the biceps is the main flexor with the palm up, and pulling with a neutral grip is
  what puts the brachialis and the brachioradialis to work. Do not claim the brachialis is the main
  flexor, and do not promise that dropping preacher curls changes your arms in a few weeks.
- The pinky-up tilt is one small variant; the neutral wrist stays the rule (link page 5 of batch 25).
- Delete the first person ("lo llamo el curl en polea a dos manos"), the "no prediquéis" heading and the
  vosotros.
- Links: `posicion-de-muneca-en-el-curl-de-biceps`, `anatomia-biceps-antebrazo`, `biceps-grandes`,
  `rutinas-biceps`.

### 2. Aumentar tus bíceps

The archive is generic tips plus a program it never delivers. Build the page around the two things it
actually owns.

- Keep: the simple progression rule (beat last session by half a kilo or a few reps, then move on), the
  tempo (3-0-3 or 4-0-4, no pause at the top or the bottom, keep the bar moving), squeezing the handle,
  and the load benchmarks the archive reports (a barbell curl around 50 kg for a few sets, dumbbells
  around 22.7 kg without swing).
- Delete: the hypoxia claim ("no oxygen creates a peak in anabolic hormones") and everything built on
  it; the promised step-by-step program (it does not exist); "solo eres tan fuerte como tu eslabón más
  débil"; the gym-heads-turning line; the Nazi simile; "flacos", "pistolas", "levantamientos de mentón";
  the first person.
- Reconcile with the range-of-motion page: a pause at the top and a stretch at the bottom are tools, not
  mistakes; this page's "keep moving" rule applies to the rep tempo, not to the range.
- Target 650-800 words.
- Links: `biceps-grandes`, `rutinas-biceps`, `rango-completo-de-movimiento-rom`, `volumen-de-entrenamiento`.

### 3. Rutinas de tríceps

The catalogue. Keep every table and fix the frame.

- Keep all ten routines with their exact sets, reps and rest, the default 60-90 seconds, the 8-10 rep
  failure target, the two-second squeeze at lockout, the 25-30 cm narrow grip, the two days of recovery
  before the next chest or shoulder session, and the elbows-pinned cue.
- Fix the skull-crusher contradiction (see the house line). Keep the exercise with the caveat.
- Delete: the two empty trailing headings, the five routines' escaped asterisks, the `▷` and the 2025 in
  the title, the closing cheerleading CTA, and the vosotros.
- Move the elbow-pain section out from under "cuándo entrenar" and give it its own heading.
- Add the frame the catalogue lacks: pick one routine, run it six to eight weeks, and do not stack two.
- Links: `anatomia-triceps`, `cabeza-larga-del-triceps`, `rutinas-biceps` (the sibling catalogue),
  `fallo-muscular`, `volumen-de-entrenamiento`.

### 4. Cabeza larga del tríceps

225 words, no prescriptions and a sentence duplicated verbatim from the anatomy page. Build it around the
one comparison it owns and borrow the numbers from the sibling catalogue (they are the same archive).

- Structure: the long head crosses the shoulder, so it works with the arm overhead; the pushdown, with
  the elbow at the side, emphasises the lateral head; the A/B comparison of both, and when to use each.
- Keep: the elbow position as the variable, the stretch at the bottom of the overhead extension, and the
  archive's long-head routine from page 3 (4 × 12, 12, 10, 10 and the 45-degree variant 4 × 10, 10, 8, 8)
  as the practical block, cited as this page's routine.
- Delete the duplicated sentence, since the anatomy page keeps it.
- Links: `anatomia-triceps`, `rutinas-triceps`, `rango-completo-de-movimiento-rom`, `fallo-muscular`.

### 5. Anatomía del tríceps

One heading and three H3s; build real structure and fix the grip contradiction.

- Keep: the three heads, their origins, their shared insertion on the ulna, and what each does at the
  shoulder and the elbow.
- Fix: the medial head arises posteromedially, not "laterally"; the "reverse grip for the medial head"
  and "supine grip for the lateral head" pair is the same grip twice, so say what is true (a reverse grip
  shifts work to the medial head and the anconeus, and a rope pushdown lets the hands rotate); and drop
  the absolute "the medial head is the first to contract whatever the load".
- Add the table the block needs: which exercise position hits which head (elbows at the side for the
  lateral head, overhead for the long head, reverse grip and rope for the medial head), which is the
  comparison page 4 owns, so keep prose short and let the table carry it.
- Links: `rutinas-triceps`, `cabeza-larga-del-triceps`, `anatomia-biceps-antebrazo`,
  `entrenamiento-del-agarre`.

### 6. Entrenamiento abdominal de Dorian Yates

One athlete's routine, reported as his.

- Keep: the argument that the abs are a muscle and train like one, the routine exactly (Roman-chair trunk
  raises 4-5 sets, floor crunches 4-5, inverse crunches 4-5, all to failure around 20 reps, slow with a
  hard squeeze, three times a week at the end of the session), the one heavy free-weight basic per
  session, and the training-philosophy framing.
- Fix: visibility comes from body fat, not from loaded abs; the page says it in its own next section, so
  make it consistent. State the routine as Yates's stance, not as physiology, and instead of quoting
  "aerobics do nothing for the abs", say what is true (direct abdominal work does not strip fat).
- Delete: the Temple Gym plugs and the "proud owner" captions, the duplicated paragraph, the ambiguous
  "mi rutina", the vosotros and the first person.
- Links: `rutinas-ejercicios-abdominales`, `abdominales-isometricos`, `perder-grasa-abdominal-con-abdominales`
  (if published) or `volumen-de-entrenamiento`, `ganadores-mr-olympia`.

### 7. Encogimientos sobre balón

- Keep the full exercise technique: sit on the ball and roll forward until the glutes clear the edge,
  feet flat at shoulder width, hips supported, hands behind the head without pulling, shoulder blades off
  the ball, lower back pressed into it, one-second hold, an exaggerated stretch at the bottom, no
  bouncing, and the oblique variant driving shoulder to opposite knee.
- Fix: an unstable surface does not automatically mean more work; it means less force can be applied, so
  the ball is a range and comfort tool, not a difficulty badge. Say it that way.
- Delete the `bodybuilding.com` shop credit at the end, the caption-as-body-copy and the vosotros.
- The archive gives no sets or reps: say so and link `volumen-de-entrenamiento`.
- Links: `rutinas-ejercicios-abdominales`, `abdominales-isometricos`, `volumen-de-entrenamiento`,
  `rango-completo-de-movimiento-rom`.

### 8. Giros en disco

The block's only contraindication page. Keep it, fix the mechanism.

- Keep: the exercise description (seated or standing trunk rotation holding a plate or a bar), where it
  is still seen, and the recommendation to drop it in favour of controlled anti-rotation work.
- Fix the premise: the spine rotates, and the thoracic segment does most of it; the problem is a loaded
  seated rotation with a fixed pelvis and a long lever, repeated, in a segment that is not built for that
  range under load. Drop the "the spine is not designed to rotate" line and the certainty about hernias.
- Add the alternative: Pallof press, side plank and dead-bug style anti-rotation work, with links.
- Delete: the Wikipedia link, the two dangling "see the video" promises, the first person and the
  "diabolic little machine" colour.
- Links: `abdominales-isometricos`, `rutinas-ejercicios-abdominales`, `ejercicios-dolor-de-espalda`,
  `plancha-lateral-tecnica-y-beneficios` (if published) or `rutinas-ejercicios-abdominales`.

### 9. Rutinas de ejercicios abdominales

The catalogue of the block, and the page with the false doctrine. Rebuild the doctrine, keep one
catalogue.

- Keep: what the abs do, the three keys, the four routines with their numbers (beginner 3 × 15-20;
  intermediate 2 days a week, 12-16 sets of 3-4 exercises at 20-25 reps; advanced 3 × 25 with 60 seconds
  and at most three days a week for about six weeks, one-second hold; high intensity 2-3 days a week with
  the tri-set at 20 reps each and 60-90 seconds between tri-sets), and the exercise selection.
- **Rebuild the ordering doctrine** on the house line: the rectus is one muscle, the division is
  connective tissue, hip-flexion work and trunk-flexion work are the two families, and the order changes
  what is fresh first. No "upper abs first so they don't limit the lower abs".
- Delete: the four anchors, the two empty trailing headings, the marketing captions, the "one layer of
  diet" slip, the `▷✔✔` title, the broken link label, and the "reduces injuries" promise.
- Add the frame: this page is the catalogue; the other routine pages in the block are variants, and it
  says which one to pick and for how long.
- Links: `entrenamiento-abdominal-por-dorian-yates`, `abdominales-isometricos`, `giros-en-disco`,
  `volumen-de-entrenamiento`, `fallo-muscular`.

### 10. Abdominales isométricos

The category page, not another plank tutorial.

- Keep: what an isometric is, why anti-movement work matters, the hold lengths (20 seconds for beginners
  to two minutes for advanced), relaxing the shoulders during the hold, the progressions (weighted
  planks), and the point that isometrics do not replace dynamic work.
- Fix the hypertension line: an isometric hold produces a systemic pressor response (blood pressure
  rises during the hold), it does not "accumulate pressure in the muscle", and it is a reason to get
  medical advice rather than a blanket ban. Drop "the only contraindication".
- Downgrade the clinical claim: planks can be useful in supervised programmes for some people with back
  pain, and a page is not a prescription.
- Invert the relationship with the plank family: this page defines the category, summarises the plank,
  the side plank and the weighted variants, and links them, instead of re-teaching the front plank.
- Links: `rutinas-ejercicios-abdominales`, `giros-en-disco`, `ejercicios-dolor-de-espalda`,
  `plancha-lateral-tecnica-y-beneficios` (if published) or `rutinas-ejercicios-abdominales`.

## Cross-links

Each page needs 2-4 sibling links, at least one inside this batch. Page 3 is the hub of the triceps block
and page 9 of the abdomen block.

## Hero images

One unique hero per page, Wikimedia Commons only, CC0, public domain, CC BY or CC BY-SA, 1280 px wide
(`iiurlwidth=1280`), at least 1200 px on disk, under ~250 KB, credit in `heroCredit`, alt in each
file's locale. 251 heroes already exist, including several Gray's and Wellcome plates; check the dHash
before vendoring.

Suggested subjects: (1) a two-hand cable curl; (2) a standing barbell curl at the top; (3) a rope
pushdown; (4) an overhead dumbbell extension; (5) a triceps plate from Gray's; (6) a Roman chair; (7) a
Swiss-ball crunch; (8) a seated Russian twist with a plate; (9) a decline-bench sit-up; (10) a front
plank.

## Verification

```powershell
npm run check:copy   # 261 pages expected, 13,311 assertions
npm run build        # 538 pages expected
npm run check:i18n   # after the routes are registered, 534 sitemap URLs
```

Each writer runs `npm run check:copy` at the end of its own scope. The parent registers the routes,
runs `npm run verify`, checks link resolution and the 390 px render, runs the hero dHash and commits
per page.

## Result (2026-11-16)

- 10 bilingual pairs, 20 files, 10 heroes. Library: 251 → **261 / 792**. The biceps block is closed
  (7/7), the triceps block is closed (3/3) and the abdomen block has its first five pages.
- Gates: `check:copy` **13,311/13,311** (261 pairs), build **538 pages**, `check:i18n`
  **8,432/8,432**, sitemap **534 URLs** with **1,602 alternates**.
- Route registration: commit `8ad74c0`.
- Structural checks: 80 internal links across the new files, **0 broken**; zero external links,
  zero `.md` links, zero `#` links, zero inline images, zero manual anchors, zero em dashes.
- Heroes: 1280 px wide (one square plate at 1280×1280), 99-241 KB. dHash over all 261 heroes gives 260
  distinct values; only the pre-existing `remo-polea-sentado` pair is identical.
- 390 px render: all 20 pages clean on the first pass.

### Corrections to the record

1. The rectus abdominis is one muscle; the ordering doctrine in page 9 was rebuilt on that.
2. Skull crushers stay with a caveat instead of being called risky and then prescribed.
3. The brachialis is not the main elbow flexor; the neutral grip is what shifts work to it.
4. The spine does rotate; the risk in page 8 is load, lever and repetition with a fixed pelvis.
5. Isometric holds raise blood pressure systemically and transiently; that is a reason to ask a doctor,
   not a blanket ban.
6. Two brief links (`perder-grasa-abdominal-con-abdominales`, `plancha-lateral-tecnica-y-beneficios`) do
   not exist yet, so page 6 and page 10 point at `volumen-de-entrenamiento` and
   `rutinas-ejercicios-abdominales` instead. Fix them when those rows ship.

