# Content library — batch 30

Started: 2026-11-16. Continues the library from 291/792 (`odd/tasks/content-pages.md`).

Objective: the last four abdomen rows, the five shoulder rows and the first biceps-routine row as ten
bilingual pairs (20 files, 10 heroes). Abdomen closes at 39/39 and the shoulder block closes at 5/5.
Library 291 → 301.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Sources: `C:\Users\Yves De Faria\Desktop\cambiatufisico.com\content\por-musculo\{abdomen,hombro,rutinas-de-biceps}\`

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `encogimientos-invertidos` | `reverse-crunches` | `abdomen/encogimientos-invertidos.md` | 194 | encogimientos invertidos | |
| 2 | `encogimientos-uve` | `v-crunches` | `abdomen/encogimientos-uve.md` | 202 | encogimientos en V | |
| 3 | `plancha-lateral-tecnica-y-beneficios` | `side-plank` | `abdomen/plancha-lateral-tecnica-y-beneficios.md` | 1,801 | plancha lateral | |
| 4 | `plancha-abdominal-ejercicio-de-core` | `front-plank` | `abdomen/plancha-abdominal-ejercicio-de-core.md` | 475 | plancha abdominal | |
| 5 | `rutina-hombros-pesos-libres` | `free-weight-shoulder-routines` | `hombro/rutina-hombros-pesos-libres.md` | 598 | rutina de hombros con pesos libres | |
| 6 | `rutina-de-especializacion-de-hombros` | `shoulder-specialization-routine` | `hombro/rutina-de-especializacion-de-hombros.md` | 638 | especialización de hombros | |
| 7 | `rutinas-hombros` | `shoulder-routines` | `hombro/rutinas-hombros.md` | 2,200 | rutinas de hombros | |
| 8 | `rutina-de-hombro-para-deltoides-frontales-retrasados` | `front-delts-shoulder-routine` | `hombro/rutina-de-hombro-para-deltoides-frontales-retrasados.md` | 437 | deltoides frontales retrasados | |
| 9 | `face-pull` | `face-pull` | `hombro/face-pull.md` | 743 | face pull | |
| 10 | `rutina-de-especializacion-de-brazos-con-series-antagonistas` | `antagonist-arm-specialization` | `rutinas-de-biceps/rutina-de-especializacion-de-brazos-con-series-antagonistas.md` | 917 | series antagonistas | |

Pages 1-4: `section: "Abdomen"` (EN `Abs`). Pages 5-9: `section: "Hombro"` (EN `Shoulder`). Page 10:
`section: "Rutinas de Bíceps"` (EN `Biceps routines`). All ten: `block: "Entrenamiento"` (EN
`Training`), `updated: "2026-11-16"`.

## Conflicts the batch settles (binding)

1. **"Lower abs" is not a muscle** (settled in batch 26). Pages 1 and 2 repeat it. The hip flexors
   raise the legs, the rectus flexes the trunk and tilts the pelvis.
2. **Plank frequency.** Page 4 says you can plank "with as much frequency as you like". False and it
   contradicts page 3 and the published isometric page: two to four sessions a week, with rest.
3. **No unverified studies or precision.** Page 4 cites "a recent study" claiming the plank is three
   times as effective when you hollow the abs. Drop the study and the number; keep the cue. Page 3
   says the knee version "reduces the load by half": drop the number.
4. **The three plank pages must not duplicate each other.** Page 4 owns the front plank technique,
   page 3 the side plank, and `plancha-con-peso` (batch 29) the loaded version;
   `abdominales-isometricos` owns the category. Cross-link, do not re-teach.
5. **Shoulder block ownership.** `rutinas-hombros` (page 7) is the block hub and the catalogue. It
   must not repeat `anatomia-hombros`, `rutina-para-trabajar-tus-hombros-de-forma-completa` or
   `consejos-entrenar-deltoides-posterior`: it indexes the routines and says which one to pick. Drop
   the "2025" from its archive title.
6. **Face pull safety.** Page 9 says never to do any exercise that pulls a band towards the face.
   Soften: check the anchor and the band's condition; a band that slips is the risk, not the movement.
   Drop the "(Ref: bodybuilding.com)" line, the "or don't do it" scolding and the "eyes of others"
   joke.
7. **No links to unpublished exercise pages.** The archive's routine pages link to dozens of exercise
   pages that do not exist here. Name the exercise in the table or the prose; link only published
   pages.
8. **Pre-exhaustion and antagonist supersets are tools, not magic.** Pages 6 and 10 frame them
   correctly; keep the framing and drop the promises.

## Global rules for this batch

1. Neutral Spanish with `tú`; zero vosotros, zero voseo, zero `usted`. Never the word `gym`.
2. No first person and no newsletter or subscription CTAs. Page 3 ends with one; page 6 and 9 carry
   "me ha dado buenos resultados" / "déjame decirte".
3. Zero external links, `.md` links, `#` anchors, inline images, `▷`/`✔✔`, escaped asterisks, empty
   headings, and zero bodybuilding.com credits.
4. Links only to pages that exist. Siblings available: the whole abdomen block (batches 27-29
   included), `anatomia-hombros`, `rutina-para-trabajar-tus-hombros-de-forma-completa`,
   `consejos-entrenar-deltoides-posterior`, `entrenamiento-trapecios`,
   `entrenar-los-trapecios-con-los-hombros-o-con-la-espalda`, `press-militar-contra-press-tras-nuca`,
   `los-trucos-de-arnold-para-desarrollar-sus-hombros`, `rutinas-biceps`, `rutinas-triceps`,
   `superseries`, `series-alternativas`, `prefatiga`, `fallo-muscular`, `volumen-de-entrenamiento`,
   `series-descendentes`, `tiempo-de-descanso-entre-series`, `rango-completo-de-movimiento-rom`,
   `tecnica-ejecucion-ejercicios`, `ejercicios-dolor-de-espalda`.
5. Zero em dashes. Titles 45-60 characters, descriptions 150-160, reciprocal `alternate`.
6. Tables: routine tables as markdown with three columns; everything else
   `<table class="text-table">` with three columns. One footnote maximum, as a blockquote.
7. Heroes: one unique per page, Wikimedia Commons, 1280 px, at least 1200 px on disk, under ~250 KB,
   credit in `heroCredit`, honest alt, dHash check before vendoring. 291 heroes exist and the obvious
   photos are spent: expect to fall back to equipment or anatomy with a truthful alt.
8. Body length: 600-900 words, except page 3 (1,000-1,400, it is the block's technique page) and
   page 7 (1,200-1,600, it is the hub). Pages 1-2 and 8 are thin and must be built on technique,
   errors and progression, not padding.

## Editorial decisions per page

### 1. Encogimientos invertidos

- Keep: supine with the arms at the sides and the palms down, feet off the floor and together, thighs
  perpendicular, curl the pelvis up, knees towards the chest, the knee angle fixed for the whole set,
  exhale at the top, ankle weights or a longer hip lever as progression.
- Fix: "abdomen inferior" (conflict 1) and the breath-hold at the start; the exhale goes at the top.
- Add: the pelvis curls, so the lower back comes off the floor briefly and that is the point; the
  errors (swinging the legs, pushing with the arms, dropping the pelvis without curling) and the
  regression to a knee tuck.
- Links: `encogimientos-invertidos-banco-inclinado`, `elevaciones-piernas-banco-plano`,
  `ejercicios-de-abdominales`, `rutinas-ejercicios-abdominales`.

### 2. Encogimientos en V

- Keep: supine, legs straight and together in the air, arms straight over the torso, chin off the
  chest, reach for the feet, one-second hold, exhale at the top, then finish with floor crunches to
  failure.
- Fix: the upper/lower split (one rectus; what the legs do is hip flexion held by the hip flexors).
- Add: the difference from the basic crunch is the raised legs, which shorten the hip flexors and
  make the trunk flexion harder; the errors (momentum, bending the knees, yanking the neck).
- Links: `encogimientos-abdominales-suelo`, `encogimientos-invertidos`, `ejercicios-de-abdominales`,
  `rutinas-ejercicios-abdominales`.

### 3. Plancha lateral

The block's technique page and the longest source. Rewrite it in guide voice, keep the structure.

- Keep: anti-lateral-flexion category, the muscles (obliques, gluteus medius, quadratus lumborum;
  deltoid and lats as support), the setup (elbow under the shoulder, feet stacked, glutes and abs
  tight, line from head to heels), the three cues (push the floor away, squeeze the glutes, stay
  between two glass walls), the errors (hips dropping, elbow away from the shoulder, shoulder at the
  ear, torso rolled forward), the warning signs, the alternatives (suitcase carry, wall side plank,
  knee side plank, Pallof press), the progressions (knee, standard, star, load overhead), the
  programming (15-45 seconds, 3-4 sets, 2-4 sessions a week, micro-pauses for strength) and the
  FAQ.
- Delete: the first person, the newsletter CTA, the "no es solo X, es Y" reveals, "sin destrozarte el
  hombro", the invented "half the load" and the "three times as effective" study.
- Program the page around 40-45 seconds as the pass mark for the next variant, as the archive says.
- Links: `abdominales-isometricos`, `plancha-con-peso`, `press-pallof`, `rutinas-ejercicios-abdominales`.

### 4. Plancha abdominal (front plank)

- Keep: prone on the forearms and toes, body in one line, static hold from 15 seconds up, elbows under
  the shoulders, neck relaxed, mat under the forearms, fists if the wrists complain, do not hold the
  breath (small exhales), hollow the abs and tuck the pelvis, the variants (weighted, side).
- Fix: the frequency claim (conflict 2), the study (conflict 3), "puedes pinzar los discos" softens to
  a warning about an arched lower back under load, and the "friendly competition" anecdote goes.
- Position it as the front-plank technique page; link the loaded version and the category page.
- Links: `abdominales-isometricos`, `plancha-con-peso`, `plancha-lateral-tecnica-y-beneficios`,
  `rutinas-ejercicios-abdominales`.

### 5. Rutinas de hombros con pesos libres

- Keep all six routines with their exercises, sets and reps, the 2 minutes between exercises and 1
  between sets, failure only on the last set of each exercise, and the optional trap work (3 x 8-12).
- Convert the exercise lists into three-column tables; name exercises without linking unpublished
  pages (conflict 7).
- Delete the plural first person ("en cambiatufisico.com preferimos") and the closing cheer.
- Add the frame: pick one routine, run it six to eight weeks, and the dumbbell-only one for home.
- Links: `rutinas-hombros`, `rutina-de-especializacion-de-hombros`,
  `rutina-para-trabajar-tus-hombros-de-forma-completa`, `anatomia-hombros`.

### 6. Rutina de especialización de hombros

- Keep: four weeks, two shoulder sessions a week, pre-exhaustion, the three weekly distributions, both
  tables exactly (mass day and pre-exhaustion day), and the warning not to stay on it longer than
  four weeks.
- Fix: vosotros and first person; the two asterisk footnotes become prose (one blockquote maximum).
- Add: the recovery rule (do not run it with another pressing-heavy block) and what to do after the
  four weeks.
- Links: `rutinas-hombros`, `prefatiga`, `rutina-hombros-pesos-libres`, `volumen-de-entrenamiento`.

### 7. Rutinas de hombros (hub)

- Read the archive and rebuild it as the block's hub: what the block covers, how to choose a routine,
  the anatomy in one paragraph (link `anatomia-hombros`), and the index of routines with one line
  each, linking the five pages of the block.
- Keep every routine table the archive carries, with its numbers.
- Delete the "2025" from the title, the duplicated anatomy, the "os" and the internal links to
  unpublished exercise pages.
- Links: the four sibling pages of this block, `anatomia-hombros`,
  `consejos-entrenar-deltoides-posterior`, `entrenamiento-trapecios`.

### 8. Deltoides frontales retrasados

- Keep: the argument (barbell presses put more direct work on the front delt than dumbbells because
  the bar path is in front of the body), the incline-bench front raise as the key exercise with its
  full technique, and the four-exercise routine with its sets and reps.
- Delete: vosotros, "sé creativo para sorprender el músculo", the closing guilt line.
- Add: the caveat that front delts usually get plenty of work from pressing, so this is for a real
  lag, not a default; and the shoulder-balance rule (the routine already ends with rear delts).
- Links: `rutinas-hombros`, `consejos-entrenar-deltoides-posterior`,
  `rutina-para-trabajar-tus-hombros-de-forma-completa`, `press-militar-contra-press-tras-nuca`.

### 9. Face pull

- Keep: the target (rear delts, traps, upper back), the set-up (pronated grip, high pulley, 20-degree
  lean standing, seated low-pulley variant), the pull to the face with external rotation, the
  bodybuilder double-biceps finish, the light start (2 x 20), the errors (pulling to the chin, elbows
  down, palms not in, too much weight) and the medical caution.
- Fix the band claim (conflict 6). Delete the "(Ref: bodybuilding.com)", "déjame decirte", "o no lo
  hagas", the "eyes of others" joke and the "revisa estos videos" promise.
- Add: why it matters next to all the pressing, the tempo, and how to load it (reps before weight).
- Links: `consejos-entrenar-deltoides-posterior`, `rutinas-hombros`, `anatomia-hombros`,
  `entrenamiento-trapecios`.

### 10. Especialización de brazos con series antagonistas

- Keep the programme exactly as the archive sets it: the split, the sessions, the antagonist
  pairings, the sets, reps and rests.
- Frame it: pairing biceps and triceps saves time and keeps the joint warm; it is not magic for
  growth. Link `superseries` and `series-alternativas` so the reader knows the family.
- Delete first person, vosotros and any promise of centimetres in weeks.
- Links: `superseries`, `series-alternativas`, `rutinas-biceps`, `rutinas-triceps`.

## Cross-links

Each page needs 2-4 sibling links and at least one inside this batch. The two plank pages and the
category page form a triangle; the five shoulder pages form a chain with the hub in the middle.

## Verification

```powershell
npm run check:copy   # 301 pages expected
npm run build        # 618 pages expected
npm run check:i18n   # after the routes are registered, 614 sitemap URLs
```

## Result (2026-11-16)

- 10 bilingual pairs, 20 files, 10 heroes. Library: 291 → **301 / 792**. Abdomen closed at
  **39/39** and Hombro at **5/5**. Rutinas de Bíceps opened with one row.
- Gates at commit time: `check:copy` **15,351/15,351**, build **618 pages**. `check:i18n` runs in the
  combined pass with batches 31 and 32, whose routes are registered together.
- Structural checks: every internal link resolves; zero external links, `.md` links, `#` links and
  inline images in the 20 files.
- Commits: ten page commits, from `bdbc2b1` to `a9813b3`.
- **Corrections made:** the newsletter CTA and the "three times as effective" study died with the
  plank pages; the front plank now says two to four sessions a week; the shoulder hub dropped "2025"
  and the "sign of a big strong man" opening; the face pull dropped the bodybuilding.com ref and the
  "eyes of others" joke; the two unfilled archive table cells are prose, not invented numbers.
- **Known approximations:** the side-plank hero is a square lululemon yoga photo (the layout crops it),
  the face-pull hero is an anatomy plate labelled in English, and page 10's hero is a different pose
  from the same shoot as `/cabeza-larga-del-triceps/` (dHash 7, not a duplicate).
