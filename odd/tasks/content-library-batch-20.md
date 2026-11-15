# Content library — batch 20

Started: 2026-11-15. Continues the library from 193/792 (`odd/tasks/content-pages.md`).

Objective: publish the last eight page pairs of the Prevención y Recuperación de Lesiones block
(16 files, 8 unique heroes), merge the two remaining rows into already-published pages, register the
routes, keep every gate green, mark each row in the checklist as it commits, and land one commit per
page with its evidence here.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Source archive: `C:\Users\Yves De Faria\Desktop\cambiatufisico.com\content\entrenamiento\prevencion-y-recuperacion-de-lesiones\`
- Batch 19 record (the immediately previous batch): `odd/tasks/content-library-batch-19.md`

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `recuperacion-activa-entrenamiento` | `active-recovery` | `recuperacion-activa-entrenamiento.md` | 1,174 | recuperación activa | `76e550d` |
| 2 | `fatiga-del-sistema-nervioso-central-snc` | `central-nervous-system-fatigue` | `fatiga-del-sistema-nervioso-central-snc.md` | 1,964 | fatiga del sistema nervioso central | `980eed6` |
| 3 | `epicondilitis` | `tennis-elbow` | `epicondilitis.md` | 1,085 | epicondilitis | `dfa320f` |
| 4 | `sindrome-tunel-carpiano` | `carpal-tunnel-syndrome` | `sindrome-tunel-carpiano.md` | 917 | síndrome del túnel carpiano | `e4459bb` |
| 5 | `tendinitis-tendon-aquiles` | `achilles-tendinopathy` | `tendinitis-tendon-aquiles.md` | 418 | tendinitis del tendón de Aquiles | `4f8af70` |
| 6 | `fascitis-plantar-causas-y-tratamiento` | `plantar-fasciitis` | `fascitis-plantar-causas-y-tratamiento.md` | 595 | fascitis plantar | `f698299` |
| 7 | `entrenamiento-problemas-espalda` | `training-with-back-pain` | `entrenamiento-problemas-espalda.md` | 1,410 | entrenamiento con problemas de espalda | `cd02fb9` |
| 8 | `tendinitis-rotuliana` | `patellar-tendinopathy` | `tendinitis-rotuliana.md` | 1,479 | tendinitis rotuliana | `eb04662` |

All eight: `block: "Entrenamiento"` (EN `Training`), `section: "Prevención y Recuperación de Lesiones"`
(EN `Injury Prevention`), `updated: "2026-11-15"`.

## Fusions (owner decision, 2026-11-15)

Two rows do not become pages. Both are near-total duplicates of published pages, so their unique
material is merged instead. The rows are marked FUSIONADA in `content-pages.md` by the parent.

| Row | Merged into | What moves |
| --- | --- | --- |
| `recuperacion-para-mas-musculo-rendimiento` | `src/content/articles/es/regeneracion-muscular.md` + `en/muscle-recovery.md` | The morning-metrics journal only |
| `ejecucion-estricta-y-concentracion-evitar-lesiones` | `src/content/articles/es/tecnica-ejecucion-ejercicios.md` + `en/exercise-technique.md` | The setup ritual and the concentration rule |

Everything else in those two archive files is either already published or is supplement advertising
(ZMA, BCAA, carnitine, vitamin E, a product catalogue) and does not ship.

## House position on pain, ice and rest (binding for all eight pages)

The archive prescribes ice and rest freely. The published
`lesiones-comunes-en-el-gimnasio-prevencion` says the opposite in two places. One position, applied
everywhere in this batch:

1. **Load is the treatment.** The protocol with support is progressive loading, and its numbers already
   live in `lesiones-comunes-en-el-gimnasio-prevencion` (heavy slow resistance, 70-85 % of 1RM, 3-4 s
   each phase, three times a week, after an isometric phase). These pages link it and never restate
   those numbers.
2. **Ice is comfort, not cure.** It relieves pain in the first 48-72 hours of a flare and after a hard
   session. It does not repair tissue and it is never the treatment. Never promise that ice "reduces
   inflammation and speeds recovery".
3. **Relative rest, never absolute rest.** Modify the load, the range and the exercise selection. Do
   not tell anyone to stop training until the pain is gone; that deconditions the tendon and the
   muscle.
4. **No diagnosis.** A page describes a clinical picture and says when to consult. It never labels the
   reader with a condition.
5. **Injections and surgery are medical decisions.** The archive's numbers (one to three cortisone
   injections, 44 % after plantar surgery, 10 % of patellar cases) stay, attributed to the source, and
   the page says the decision belongs to the professional.
6. **Every page in this batch carries the house disclaimer** near the top, in the
   `ejercicios-dolor-de-espalda` shape: `> **Aviso:** …` in Spanish, `> **Notice:** …` in English.

## Global rules for this batch

1. Neutral Spanish with `tú`; zero vosotros, zero voseo, no regionalisms, no `usted`. Never the word `gym`.
2. Zero external links; every archive URL dies with the page. Internal links must use the published
   ES/EN slugs of the matching locale.
3. Zero inline images, zero archive anchors (`<a id>`), zero `## Índice de contenidos`, zero
   `Highlights` section, zero `Nivel pro` labels, zero newsletter CTA.
4. No supplement, brand, clinic or product promotion, and no dose protocols.
5. Zero em dashes in the body.
6. Tables: only raw `<table class="text-table">`, three columns maximum, never a routine table.
7. Body length: 800-1,300 words per locale where the archive supports it. Never pad; pages 5 and 6 are
   short sources and must stay inside what they actually say.
8. Titles 45-60 characters, descriptions 150-160, reciprocal `alternate`.

## Editorial decisions per page

### 1. Recuperación activa en el entrenamiento

The angle that is not covered anywhere: **what you do between sets**. Do not re-tell the cool-down,
the diet, the ice baths or the sleep; three published pages own those.

- Keep: active recovery between sets means light movement at 30-40 % of VO2max instead of standing
  still; the study as the archive describes it (15 trained men, six sets of squats at 85 % of 10RM,
  four minutes of rest, retest at 65 % of 10RM, the active group completed about 20 % more reps);
  lactate clears with a half-life of 15-25 minutes; heavy days tolerate three to five minutes of rest
  and bodybuilding work about one; the post-session block of 10-15 minutes at 30-40 % of VO2max; the
  light session between training days as 10-15 reps for 3-6 sets with under a minute of rest.
- Delete: the unreferenced "cuts the white-cell drop by up to 30 %" claim, the
  "Extraido de un texto original de Gabriel J. Wilson" credit, and the "resentimiento muscular tardío"
  typo.
- The acute burn is lactate and hydrogen ions; soreness is not. Say it once and link `agujetas`.
- Structure: the archive only has H3s; build five or six real H2s.
- Links: `tiempo-de-descanso-entre-series`, `entrenamiento-oxigenacion`, `regeneracion-muscular`,
  `agujetas-causas-y-como-hacer-que-desaparezcan`, `sobreentrenamiento`.

### 2. Fatiga del sistema nervioso central

The archive is the most promotional file in the batch and carries a deload protocol that conflicts
with a published page. Strip it and rebuild.

- Keep: what central fatigue is and what it is not (not "the muscle is tired"; the drop is in force
  production, coordination and motivation), the signs (maximal strength falling for days, slower bar
  speed, worse coordination, irritability, poor sleep, losing interest in training), the causes (heavy
  work near failure, high volume of high-threshold work, short sleep, life stress), what helps (7-8
  hours of sleep, fewer total sets, moderate loads, no failure work for a while, low-intensity aerobic
  work), and the monitoring (resting heart rate and HRV as references, not diagnoses; two weeks of
  falling numbers in the log is the flag).
- Delete the deload prescription entirely: halving sets and cutting 10-20 % conflicts with
  `semana-de-descarga`, which owns its own numbers. Say "la descarga tiene su propio protocolo" and
  link it.
- Delete: creatine, whey and caffeine as prescriptions; the eleven manual anchors; the self-referencing
  index; the Highlights section; the three `Nivel pro` labels; the newsletter CTA.
- Rewrite the register: no "freír", no "suicidio metabólico", no "ataque a tu propio sistema", no
  Magic: The Gathering analogy, no "biohacking".
- YMYL: add that symptoms which do not improve in weeks, or arrive with other neurological signs, need
  a doctor.
- Links: `sobreentrenamiento`, `semana-de-descarga`, `cuanto-dormir-para-progresar-en-el-gimnasio`,
  `fallo-muscular`, `periodizacion-entrenamiento`, `como-ser-constante-en-el-entrenamiento`.

### 3. Epicondilitis

- Keep: lateral elbow pain at the common extensor origin, the clinical picture (pain serving a jug,
  gripping, lifting with the palm down, pain that wakes you), the load ladder (relative rest from the
  aggravating grip, isometrics first, then eccentric forearm work at 2 sets of 20-30, the grip ball
  capped at 20 reps, the stretch held 4-6 seconds for 4-6 reps each direction), the counterforce strap
  as a load modifier rather than a treatment, ice for 15-20 minutes as symptom relief only, and the
  medical options (friction massage by a professional 3-5 minutes, one to three cortisone injections
  with the caveat that they relieve and do not repair, surgery as the last resort).
- Delete: the dead "Vídeos útiles" section, the "bombona de gas" and "empleadas del hogar" props, the
  claim that a brace has no therapeutic effect at all, and the diagnostic triad presented as a
  diagnosis.
- Fix the typos (`duante`, `epincodilitis`, "los dedos pulgar o índice").
- Links: `lesiones-comunes-en-el-gimnasio-prevencion`, `dolor-cronico-y-fisioterapia-tratamientos-que-funcionan`,
  `cuando-ir-al-traumatologo-experiencia-personal`, `entrenamiento-del-agarre`,
  `tecnica-ejecucion-ejercicios`.

### 4. Síndrome del túnel carpiano

Full rewrite, not a translation: the archive speaks in `usted`, has no H2s, puts an image inside a
heading and has broken sentences.

- Keep: eight carpal bones and a median nerve compressed at the wrist; the symptoms (numbness and pins
  and needles in thumb, index and middle, night pain, dropping objects, weakness of the thenar muscles
  late); risk factors (repeated wrist flexion and grip, vibration, pregnancy and fluid retention,
  diabetes, thyroid problems, age 40-60); the honest line that the exact origin is not settled; the
  mobility routine with its numbers (median nerve glide 10-15 seconds five times, intrinsic stretch
  15 seconds three times, flexor stretch 20-30 seconds three times, tendon glides with 15-second holds
  ten times, thumb to fingertips two or three times, putty for 3-5 minutes).
- Add the two conservative first steps the archive buries: a night splint and a workstation that keeps
  the wrist neutral. Surgery only after conservative treatment fails, as a medical decision.
- Delete the scare phrasing about permanent complications; replace with "if numbness or weakness
  settle in, the assessment is urgent".
- Links: `entrenamiento-del-agarre`, `lesiones-comunes-en-el-gimnasio-prevencion`,
  `dolor-cronico-y-fisioterapia-tratamientos-que-funcionan`,
  `cuando-ir-al-traumatologo-experiencia-personal`, `tecnica-ejecucion-ejercicios`.

### 5. Tendinitis del tendón de Aquiles

418 words cannot fill a page by themselves. The page stays inside what the archive says and adds the
clinical picture a lifter needs, deferring every protocol to the published page.

- Keep: how it appears (repeated overload, a sudden jump in running or jumping volume, weak calves,
  stiff or worn shoes), how it feels (morning stiffness, pain 2-6 cm above the heel, pain on
  push-off, a thickened tendon), what to do (reduce the load, avoid complete rest, calf and heel-raise
  work, gradual return), how to prevent it (warm-up, progressive volume, calf strength).
- Correct the archive: anti-inflammatories relieve the symptom and do not repair the tendon.
- Defer: the loading protocol lives in `lesiones-comunes-en-el-gimnasio-prevencion`; link it instead of
  inventing sets. Crutches only in severe cases, as a medical decision.
- Links: `lesiones-comunes-en-el-gimnasio-prevencion`, `estiramientos`, `calentamiento-y-estiramientos`,
  `sentadilla-sin-lesiones`, `cuando-ir-al-traumatologo-experiencia-personal`.

### 6. Fascitis plantar

- Keep: what it is (plantar fascia, heel pain on the first steps of the day), the causes (load,
  tight calves, footwear, weight, long hours standing), the two-to-three-month resolution window, ice
  for 10-15 minutes three or four times a day at least an hour apart as symptom relief, the calf
  stretch ten seconds ten times per side, the fascia stretch ten seconds twenty times, heels no higher
  than 2.5 cm, insoles, the 44 % figure after surgery attributed to the American Academy of
  Orthopaedic Surgeons, and the referral.
- Delete: vosotros; "Tomad un analgésico" as an instruction (replace with "si el dolor no te deja
  caminar, consúltalo antes de automedicarte"); the stigmatising "si somos mujeres, obesos"; the typos
  (`prescribimos`, `respeto del otro`, `aerobías`).
- Add the house position on load and relative rest.
- Links: `lesiones-comunes-en-el-gimnasio-prevencion`, `estiramientos`,
  `calentamiento-y-estiramientos`, `entrenamiento-cardiovascular-en-tu-programa-de-fitness`,
  `cuando-ir-al-traumatologo-experiencia-personal`.

### 7. Entrenamiento con problemas de espalda

The angle: **hyperlordosis and hyperkyphosis**, with postural hygiene and exercise selection per
deformity. It is not another "why your back hurts" page.

- Keep the spine recap to two sentences and a link to `anatomia-de-la-espalda`; the archive's anatomy
  block duplicates a published page.
- Keep hyperlordosis: what it is, postural hygiene, and the training criterion (glute and core work,
  hip-flexor work, avoid loading the lumbar spine in extension, and the archive's warning about the
  hip-flexor machine crunch).
- Keep hyperkyphosis: what it is, postural hygiene, and the training criterion (upper back and rear
  delts, rows, thoracic extension, controlled pressing volume).
- Delete: "la escoliosis afecta a un 70/80 % de la población" (false and alarming), the
  "PRÓXIMAMENTE ESCOLIOSIS Y HERNIA DISCAL" placeholder, and the intro's promise of four conditions.
- Frame exercise selection with its mechanical reason, never as medical authority.
- YMYL: diagnosed scoliosis, hernia, or pain with neurological signs needs a professional, not this
  page.
- Links: `anatomia-de-la-espalda`, `ejercicios-dolor-de-espalda`, `espalda-baja-fuerte`,
  `hiperextensiones-espalda`, `remo-barra`, `cuando-ir-al-traumatologo-experiencia-personal`.

### 8. Tendinitis rotuliana

- Keep: the patellar tendon (3-5 cm long, about 2 cm wide), the load story (jumping, deep knee flexion,
  a sudden jump in volume), peak load past 60 degrees of knee flexion, the clinical picture (anterior
  knee pain, pain on squatting and stairs, point tenderness), the strap as a load modifier, the return
  ramp with about a month of caution, the 10 % surgery figure, and imaging as a medical decision.
- Delete: the "totalmente indicado" list (laser, ultrasound, electrotherapy, Cyriax massage,
  cryotherapy as treatments). Passive modalities relieve at best; the treatment with support is
  loading, and the protocol is in `lesiones-comunes-en-el-gimnasio-prevencion`.
- Fix the internal contradiction: tendinopathy is a load and degeneration problem, not classic
  inflammation, so swelling is not a typical sign. Remove it from the symptom list and say why.
- Remove the first person ("me centraré", "como mencioné antes") and the triple repetition of the
  causes.
- Ice: 20 minutes after sessions, for symptom relief only.
- Links: `lesiones-comunes-en-el-gimnasio-prevencion`, `sentadilla-sin-lesiones`, `estiramientos`,
  `calentamiento-y-estiramientos`, `cuando-ir-al-traumatologo-experiencia-personal`.

## Cross-links

Each page needs 2-4 sibling links, at least one of them inside this batch. Natural pairs:
1 ↔ 2 (recovery and central fatigue), 3 ↔ 4 (elbow and wrist), 5 ↔ 6 (Achilles and plantar), 7 ↔ 8
(back and knee), plus 1 → 8 and 2 → 7 if the sentence fits.

## Hero images

One unique hero per page, Wikimedia Commons only, CC0, public domain, CC BY or CC BY-SA, 1280 px wide
(`iiurlwidth=1280`), at least 1200 px on disk, under ~250 KB, credit in `heroCredit`
(`Wikimedia Commons · <author> · <licence>`), alt in each file's own locale.

Suggested subjects, so they do not collide with the 193 existing heroes: (1) athlete resting between
sets or on a stationary bike, (2) tired athlete sitting on a gym floor, (3) physiotherapist working on
a forearm, (4) hands typing with a wrist splint or a wrist test, (5) clinician palpating an Achilles
tendon, (6) foot rolling on a ball or an insole, (7) physiotherapist assessing a standing spine,
(8) knee strap on a standing athlete.

## Verification

```powershell
npm run check:copy   # 201 pages expected, 10,251 assertions
npm run build        # 418 pages expected
npm run check:i18n   # after the routes are registered, 414 sitemap URLs
```

Each writer runs `npm run check:copy` at the end of its own scope. The parent edits the two fusion
targets, registers the routes, runs `npm run verify`, checks link resolution and the 390 px render,
and commits per page.

## Result (2026-11-15)

- 8 bilingual pairs, 16 files, 8 heroes, plus the two fusions. Library: 193 → **201 / 792**.
- Gates: `check:copy` **10,251/10,251** (201 files), build **418 pages**, `check:i18n`
  **6,572/6,572**, sitemap **414 URLs** with **1,242 alternates**.
- Route registration: `astro.config.mjs` `ROUTE_PAIRS`, `check-i18n.mjs` `PAGES` and `ROUTES`;
  commit `f5770e6`.
- Structural checks: 116 internal links across the 16 new files and the two fused pages, **0 broken**;
  zero external links, zero `.md` links, zero `#` links, zero inline images, zero manual anchors,
  zero em dashes.
- 390 px render: all 16 pages with no horizontal overflow, heroes at 350×197, TOC anchors resolving.
- Heroes: 1280 px wide, 146-240 KB, CC0 / public domain / CC BY(-SA). dHash over all 201 heroes gives
  200 distinct values; the only exact duplicate is the pre-existing
  `remo-polea-sentado` / `superserie-de-espalda-para-terminar-tu-rutina`. One false positive at
  distance 5 (`fascitis-plantar` vs `jalones-agarre-cerrado`) was checked by eye: a light foot
  illustration against a dark gym photo, not a duplicate.
- Native assessment: pending, run by the parent after the docs commit.

### Known limitation

The three InjuryMap-style illustrations and the spine diagram carry labels baked into the image: the
plantar fascia figure is labelled in Spanish and the spine figure in English, so each appears with a
foreign-language label on the other locale. The `heroAlt` describes what is shown and does not claim
the label's language. Crop the labels or take unlabelled versions when the Phase 5 image pipeline
lands.

