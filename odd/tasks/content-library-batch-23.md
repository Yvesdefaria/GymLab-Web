# Content library — batch 23

Started: 2026-11-16. Continues the library from 221/792 (`odd/tasks/content-pages.md`).

Objective: close Físicos de leyenda with `/serie-dorian-yates/` and open the legs cluster with nine
pairs (20 files, 10 unique heroes), register the routes, keep every gate green, mark each row in the
checklist as it commits, and land one commit per page with its evidence here.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Source archive: `C:\Users\Yves De Faria\Desktop\cambiatufisico.com\content\entrenamiento\` (`fisicos-de-leyenda\` and `entrenamiento-de-las-piernas\`)

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `serie-dorian-yates` | `dorian-yates-series` | `fisicos-de-leyenda/serie-dorian-yates.md` | 631 | Dorian Yates serie | `cce451c` |
| 2 | `sentadilla-con-caja-alturas` | `box-squat-heights` | `piernas/sentadilla-con-caja-alturas.md` | 737 | sentadilla con caja | `e275207` |
| 3 | `beneficios-hip-thrust` | `hip-thrust-benefits` | `piernas/beneficios-hip-thrust.md` | 919 | hip thrust beneficios | `73779ed` |
| 4 | `entrenamiento-del-femoral-o-tendon-de-la-corva` | `hamstring-training-guide` | `piernas/entrenamiento-del-femoral-o-tendon-de-la-corva.md` | 1,824 | entrenamiento femoral | `8fd6a16` |
| 5 | `anatomia-del-cuadriceps` | `quadriceps-anatomy` | `piernas/anatomia-del-cuadriceps.md` | 623 | anatomía cuádriceps | `76a9a4b` |
| 6 | `entrenamiento-del-cuadriceps-mitos` | `quadriceps-training-myths` | `piernas/entrenamiento-del-cuadriceps-mitos.md` | 512 | mitos cuádriceps | `2ee3117` |
| 7 | `mejores-ejercicios-cuadriceps` | `best-quadriceps-exercises` | `piernas/mejores-ejercicios-cuadriceps.md` | 1,787 | mejores ejercicios cuádriceps | `1ba61e1` |
| 8 | `como-calentar-para-tu-entrenamiento-de-gluteos` | `glute-workout-warm-up` | `piernas/como-calentar-para-tu-entrenamiento-de-gluteos.md` | 298 | calentar glúteos | `c09988e` |
| 9 | `anatomia-femorales` | `hamstring-anatomy` | `piernas/anatomia-femorales.md` | 789 | anatomía femorales | `7760dc0` |
| 10 | `prensa-posicion-pies` | `leg-press-foot-position` | `piernas/prensa-posicion-pies.md` | 464 | prensa posición pies | `fad0054` |

Page 1: `section: "Físicos de Leyenda"` (EN `Legendary Physiques`). Pages 2-10:
`section: "Entrenamiento de las Piernas"` (EN `Leg Training`). All ten: `block: "Entrenamiento"`
(EN `Training`), `updated: "2026-11-16"`.

## The one conflict this batch settles (binding)

Three archive pages (5, 9, 10) prescribe rotating the feet or changing the stance to emphasise a
specific head of the quadriceps or hamstrings. A fourth (page 6) says that isolation is practically
impossible because the heads share the patellar tendon. **Page 6 wins**, because it is the better
argument and the one that matches what the library already publishes in
`rango-completo-de-movimiento-rom` and `sentadilla-sin-lesiones`.

The house line, applied in all of them:

- Stance width and foot position **change emphasis slightly and change which muscles share the work**
  (a wide stance brings in the adductors; feet high on the press loads the hamstrings and glutes).
- They **do not isolate a head** of the quadriceps, because the four heads converge on one tendon.
- For the hamstrings the real lever is the opposite: knee flexion versus hip extension, because two of
  the three muscles cross the hip.
- Page 6 becomes the canonical page for this rule; pages 5, 9 and 10 link it and say it in one line
  before they explain the cue.

Second settled point: **depth**. Page 2 makes "2 cm below parallel" the default and treats deeper as
optional; `sentadilla-sin-lesiones` settles at parallel and `rango-completo-de-movimiento-rom` allows a
shorter range as a tool. The box squat page presents the three box heights as tools and says the
value of the box is the dead stop and the repeatable depth, not the extra centimetres.

Third: **volume**. Page 1 is a historical profile of one set to failure; `volumen-de-entrenamiento`
publishes 9-20 sets per session for large groups. Page 1 is framed as his method, never as a template,
and links both the volume page and `mike-mentzer-heavy-duty`.

## Global rules for this batch

1. Neutral Spanish with `tú`; zero vosotros, zero voseo, zero `usted`. Never the word `gym`.
2. No first person. The Dorian Yates page is 60 % a quote in his voice; convert it to reported speech.
3. Zero external links: the `bodybuilding.com` shop credits on pages 4 and 7, the `mejorcadadia.mx`
   blockquote on page 3 and the `muscleandfitness.com` link on page 7 all die.
4. Zero inline images, zero archive anchors, zero "Highlights", zero newsletter CTA, no `2024` dates.
5. Zero em dashes. Titles 45-60 characters, descriptions 150-160, reciprocal `alternate`.
6. Tables: routine tables markdown with three columns; everything else `<table class="text-table">`,
   three columns maximum.
7. Anatomy pages: correct names (medial and lateral vastus, not "interno" and "externo"), and no
   invented statistics. A wrong claim is fixed or removed, never softened.
8. Heroes: one unique per page, Wikimedia Commons, `iiurlwidth=1280`, at least 1200 px on disk, under
   ~250 KB, credit in `heroCredit`, alt in each file's own locale. Gray's Anatomy plates are public
   domain and fit the three anatomy pages.

## Editorial decisions per page

### 1. La serie de Dorian Yates

- Keep: the method (one all-out set per exercise, four exercises, everything to failure), the example
  session as reported data (Smith press 15, 12, 8-10 reps at 55, 110 and 154 kg; seated dumbbell
  lateral raise 12 and 8-10 at 22 and 32 kg per dumbbell; one-arm cable lateral 20 and 8-10 at 16 and
  32; dumbbell shrug 12 and 10-12 at 62 and 86), nine work sets in total, and the idea that the last
  set has to be the one that counts.
- Report the quote; do not reproduce it as his voice. Keep the nail analogy only if it survives as
  reported speech.
- Delete the closing line calling him one of the most injured bodybuilders: it is unsourced and ironic
  in context.
- House frame: this is a historical method. One set to failure is not the library's default, and the
  page links `volumen-de-entrenamiento` and `mike-mentzer-heavy-duty` so both sides are visible.
- Links: `ganadores-mr-olympia`, `mike-mentzer-heavy-duty`, `fallo-muscular`,
  `entrenamiento-alta-intensidad`, `volumen-de-entrenamiento`.

### 2. Sentadilla con caja: cuestión de altura

- Keep the three heights as tools: 2 cm below parallel (the archive's default), 5 cm below, 10 cm
  below; the dead stop (no inertia, no bounce, no stretch reflex), and less load than the free squat.
- **Add the setup the page never gives**, because it is the library's only box-squat page: bar on the
  upper back, feet slightly wider than the hips, sit back to the box, pause without relaxing, drive up
  without rocking.
- Reframe the default: the box buys a repeatable depth and a dead stop; how deep is set by control and
  by a pain-free range, and the page says so and links `sentadilla-sin-lesiones` and
  `rango-completo-de-movimiento-rom`.
- Delete: "os matará", "entrarán en coma", the "99 % of bodybuilders" statistic, "la fuerza mejora
  tras cuatro sesiones", "creo que todos deben usar la caja más baja", the glued image and the
  vosotros.
- Structure: five or six H2s instead of one with four pseudo-sections.

### 3. Beneficios del hip thrust

- Keep: what it is, the benefits with the mechanism (hip extension at a short muscle length, glute
  emphasis), the two ways to fit it into a week (added to leg day, or an extra glute day after back),
  the technique cues and the caution that it complements and does not replace the squat.
- Fix the claims: "more effective than the squat" becomes "loads the glute more than the squat through
  most of the range"; "corrects posture" is dropped; the psoas is a hip **flexor**, not an extensor;
  "the benefits are undeniable" goes.
- The archive gives no sets, reps or frequency: say so plainly and do not invent a prescription. Link
  `volumen-de-entrenamiento` for the dosing logic.
- Delete the `mejorcadadia.mx` blockquote (it is a third-party promo with a 2024 date) and the
  "en cambiatufisico te proponemos" line.
- Links: `rutina-de-femorales`, `peso-muerto-piernas-rigidas-barra`, `sentadilla-sin-lesiones`,
  `volumen-de-entrenamiento`, `como-calentar-para-tu-entrenamiento-de-gluteos`.

### 4. Entrenamiento del femoral

- Keep: the three routines exactly as listed (A: lying curl 4×8-10 plus stiff-leg deadlift 4×8-10;
  B: stiff-leg deadlift 4, seated curl 3, standing curl 4; C: seated curl 3, lying curl 3, good
  morning 4), the curl taxonomy (lying, seated, standing, single-leg), the unilateral eccentric trick
  ("up with two, down with one"), the one-second pause at the bottom, the roller three centimetres
  above the heels, the heel-at-waist stretch between sets, the 6-10 rep rationale for hamstrings, and
  the ordering advice (hamstrings before quads, or separate days).
- Delete the first half that re-establishes the flexion-plus-hip-extension principle: `rutina-de-femorales`
  already publishes it. One sentence and a link.
- Delete: "desde mi experiencia como entrenador personal", `mism@`, the `bodybuilding.com` shop credit,
  the broken ending about a tour of the gym, and the typos.
- "Los dos ejercicios son virtualmente intercambiables" stays only as "entrenan el mismo patrón con
  otra palanca", linking both published pages.
- Links: `rutina-de-femorales`, `peso-muerto-piernas-rigidas-barra`,
  `peso-muerto-piernas-rigidas-mancuernas`, `buenos-dias-barra-de-pie`, `anatomia-femorales`,
  `estiramientos`.

### 5. Anatomía del cuádriceps

- Keep: the four heads with their origins and insertions, the rectus femoris crossing the hip, and
  their actions.
- Fix: "la mitad de la masa muscular del cuerpo" is false; "los cuatro músculos más grandes y potentes"
  is an overclaim; use medial and lateral vastus, not interno and externo.
- The emphasis half is reframed under the house line above and links page 6. Drop the flat isolation
  claims and "una alternativa segura para quienes tienen dolor de rodilla".
- Links: `entrenamiento-del-cuadriceps-mitos`, `mejores-ejercicios-cuadriceps`,
  `sentadilla-sin-lesiones`, `anatomia-femorales`.

### 6. Mitos en el entrenamiento del cuádriceps

The strongest file in the batch and the canonical page for the rule. Keep its structure.

- Keep the three arguments: you cannot isolate a head because the four bellies share the patellar
  tendon; rotating the feet and the knees in or out is exaggerated as a targeting tool; the belt helps
  but does not protect the spine, and partial squats are a tool to accustom the nervous system to load,
  always pointed at the full range.
- Add one short paragraph on what does change: stance width and hip position change which muscles share
  the work, not which head of the quad fires.
- Fix "hiperexageradas" (not a word), the stray space before a comma and "el entreno".
- Links: `anatomia-del-cuadriceps`, `prensa-posicion-pies`, `rango-completo-de-movimiento-rom`,
  `cinturon-entrenamiento`, `sentadilla-sin-lesiones`.

### 7. Mejores ejercicios de cuádriceps

- Keep the catalogue: the squat, the leg press, the leg extension, the hack squat, the Smith machine
  and the sissy squat, with the machine taxonomy and the cues that still hold (stance, controlled
  descent, heels on two or three centimetres of blocks when ankle mobility limits the position).
- **Rewrite the knee cue.** "Las rodillas siempre por detrás de la punta de los pies" is outdated and
  contradicts how the library teaches the squat: the knee travels forward, it tracks over the foot and
  it never collapses inward. Link `sentadilla-sin-lesiones` for depth.
- Delete: "destructor de rodillas", "destructor de meniscos y ligamentos", "totalmente seguro para la
  espalda", "terminantemente prohibido", the Egyptian and Roman origin claim, the claim about women and
  leg machines, the Tom Platz external link and the `bodybuilding.com` shop credit.
- Links: `sentadilla-sin-lesiones`, `entrenamiento-del-cuadriceps-mitos`, `prensa-posicion-pies`,
  `anatomia-del-cuadriceps`, `tecnica-ejecucion-ejercicios`.

### 8. Cómo calentar para tu entrenamiento de glúteos

298 words and one H2, with an image used as a heading. Rebuild it.

- Keep: 20-30 light reps with no rest between exercises, one or two rounds, then at least one light
  specific set; skip the circuit when the legs are already warm from another session.
- **Fix the circuit.** The archive lists a bodyweight squat, a stiff-leg deadlift and a standing calf
  raise. A calf raise does not load the hip: replace it with a glute bridge and say why in one line.
- Delete: the image-as-heading, "no te hagas mayor problema", "lsquiotibiales" and the machine-calf
  heading.
- Keep it short and honest: this is a warm-up routine, not a training plan. Around 600 words.
- Links: `calentamiento-y-estiramientos`, `beneficios-hip-thrust`, `rutina-de-femorales`,
  `entrenamiento-del-femoral-o-tendon-de-la-corva`.

### 9. Anatomía de los femorales

- Keep: the three muscles (biceps femoris, semitendinosus, semimembranosus) with their origins and
  insertions, the dual-joint function and the two stimulus routes (knee flexion versus hip extension),
  and the honest framing that you cannot isolate one of them but you can shift emphasis.
- Fix the register break (`usted` in one line, `tú` in the next), "pastero-medial", and the toe
  rotation cue: put it under the house line and link page 6.
- Links: `entrenamiento-del-femoral-o-tendon-de-la-corva`, `prensa-posicion-pies`,
  `entrenamiento-del-cuadriceps-mitos`, `rutina-de-femorales`.

### 10. Posición de los pies en la prensa

- Keep the table with the four positions (normal, high, low, wide, narrow) and the page's own honest
  caveat, which is the best part: the change shifts emphasis slightly and is not enough to isolate a
  muscle, and the vertical changes matter more than the lateral ones.
- Delete the sentence that repeats itself ("posición normal ejerce el efecto opuesto…"), fix the
  "semi membranoso" split and the muscle count that does not add up (say "varios" or list them
  correctly).
- Add one line linking page 6 so the two pages cannot contradict each other.
- Links: `entrenamiento-del-cuadriceps-mitos`, `anatomia-del-cuadriceps`,
  `mejores-ejercicios-cuadriceps`, `sentadilla-sin-lesiones`.

## Cross-links

Each page needs 2-4 sibling links, at least one inside this batch. Page 6 is the hub for the emphasis
rule and should be linked by 5, 9 and 10. The two anatomy pages link each other. Page 1 links the
Olympia hub.

## Hero images

One unique hero per page, Wikimedia Commons only, CC0, public domain, CC BY or CC BY-SA, 1280 px wide
(`iiurlwidth=1280`), at least 1200 px on disk, under ~250 KB, credit in `heroCredit`, alt in each
file's locale. The 221 existing heroes already include gym photos, Gray's plates for the back and
InjuryMap illustrations; check for duplicates before vendoring.

Suggested subjects: (1) a loaded Smith machine or a blood-and-guts style gym; (2) a barbell box squat
onto a plyo box; (3) a barbell hip thrust on a bench; (4) a lying leg curl machine; (5) Gray's plate
of the anterior thigh; (6) a lifting belt close-up; (7) a 45-degree leg press; (8) a resistance-band
lateral walk or a glute bridge; (9) Gray's plate of the posterior thigh; (10) feet high on a leg press
platform.

## Verification

```powershell
npm run check:copy   # 231 pages expected, 11,781 assertions
npm run build        # 478 pages expected
npm run check:i18n   # after the routes are registered, 474 sitemap URLs
```

Each writer runs `npm run check:copy` at the end of its own scope. The parent registers the routes,
runs `npm run verify`, checks link resolution and the 390 px render, runs the hero dHash and commits
per page.

## Result (2026-11-16)

- 10 bilingual pairs, 20 files, 10 heroes. Library: 221 → **231 / 792**.
- Gates: `check:copy` **11,781/11,781** (231 files), build **478 pages**, `check:i18n`
  **7,502/7,502**, sitemap **474 URLs** with **1,422 alternates**.
- Route registration: commit `ed321f0`.
- Structural checks: 96 internal links across the new files, **0 broken**; zero external links,
  zero `.md` links, zero `#` links, zero inline images, zero manual anchors, zero em dashes.
- 390 px render: all 20 pages clean, no page-level overflow and no clipped table cell.
- Heroes: 1200-1280 px wide, 34-232 KB. dHash over all 231 heroes gives 230 distinct values; only the
  pre-existing `remo-polea-sentado` pair is identical.
- Native assessment: `gentle-ai review assess` over `dc580ed..HEAD` (36 paths, 1,948 changed lines,
  untracked mockups excluded) reports risk **medium**, `review_due: false`,
  `review_due_reason: under_budget`. No review transaction was opened.

### Two heroes replaced by the parent

1. **The glute warm-up page shipped with a duplicate hero.** Writer B used the Commons squat photo that
   is already the hero of `rutina-espalda-amplitud-densidad` (dHash 0), and the first replacement tried
   (`Woman doing squat workout…`, a sibling file from the same shoot) turned out to be the hero of
   `pesas-salud-cardiovascular`, also at distance 0. The page now uses `Barbell pad (cropped).jpg`
   (RickyBennison, CC0), unique at distance 22 from anything else, with the alt and credit updated in
   both locales.
2. **The quadriceps anatomy plate was cropped by the layout.** The original engraving is portrait
   (1200×1707), so the 16:9 hero band showed only muscle texture with no title and no labels. The file
   is now cropped to 1200×675 including the plate title and the upper labels.

### Correction to the record

The brief said two of the three hamstrings cross the hip. All three arise on the ischial tuberosity and
cross it; only the short head of the biceps femoris stops at the knee. Writer B corrected it in the
page and it is recorded here.

