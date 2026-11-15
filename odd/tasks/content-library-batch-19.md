# Content library — batch 19

Started: 2026-11-15. Continues the library from 183/792 (`odd/tasks/content-pages.md`).

Objective: publish the next 10 bilingual guide pairs (20 files, 10 unique heroes), register the
routes, keep every gate green, mark each page done in the checklist as it commits, and land one
commit per page with its evidence here.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Source archive: `C:\Users\Yves De Faria\Desktop\cambiatufisico.com\content\entrenamiento\`

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `ejercicios-de-alta-intensidad` | `high-intensity-exercises` | `entrenamiento/ejercicios-de-alta-intensidad.md` | 2,169 | ejercicios de alta intensidad | `e9d5b89` |
| 2 | `principio-de-contraccion-maxima` | `peak-contraction-principle` | `entrenamiento/principio-de-contraccion-maxima.md` | 1,264 | contracción máxima | `672b933` |
| 3 | `cuando-ir-al-traumatologo-experiencia-personal` | `when-to-see-a-sports-doctor` | `entrenamiento/cuando-ir-al-traumatologo-experiencia-personal.md` | 1,255 | cuándo ir al traumatólogo | `415dbaa` |
| 4 | `como-mantener-y-mejorar-tu-forma-fisica-durante-el-verano` | `maintain-fitness-in-summer` | `entrenamiento/como-mantener-y-mejorar-tu-forma-fisica-durante-el-verano.md` | 1,144 | forma física en verano | `63b3cdb` |
| 5 | `ejercicios-de-gimnasio-mas-lesivos` | `most-injurious-gym-exercises` | `prevencion-y-recuperacion-de-lesiones/ejercicios-de-gimnasio-mas-lesivos.md` | 802 | ejercicios peligrosos | `857485f` |
| 6 | `lesiones-comunes-en-el-gimnasio-prevencion` | `common-gym-injuries` | `prevencion-y-recuperacion-de-lesiones/lesiones-comunes-en-el-gimnasio-prevencion.md` | 1,696 | lesiones en el gimnasio | `771248a` |
| 7 | `la-postura-correcta-un-factor-importante-en-nuestro-deporte` | `correct-posture-for-training` | `prevencion-y-recuperacion-de-lesiones/la-postura-correcta-un-factor-importante-en-nuestro-deporte.md` | 941 | postura correcta | `cddead5` |
| 8 | `dolor-cronico-y-fisioterapia-tratamientos-que-funcionan` | `chronic-pain-physiotherapy` | `prevencion-y-recuperacion-de-lesiones/dolor-cronico-y-fisioterapia-tratamientos-que-funcionan.md` | 1,725 | fisioterapia para dolor crónico | `7cd3627` |
| 9 | `agujetas-causas-y-como-hacer-que-desaparezcan` | `delayed-onset-muscle-soreness` | `prevencion-y-recuperacion-de-lesiones/agujetas-causas-y-como-hacer-que-desaparezcan.md` | 1,511 | agujetas | `b8507d2` |
| 10 | `sobreentrenamiento` | `overtraining` | `prevencion-y-recuperacion-de-lesiones/sobreentrenamiento.md` | 1,495 | sobreentrenamiento | `082e1db` |

Pages 1-4: `block: "Entrenamiento"` / `section: "Entrenamiento"` (EN: `Training` / `Training`).
Pages 5-10: block `Entrenamiento` (EN `Training`), section `Prevención y Recuperación de Lesiones`
(EN `Injury Prevention`). No slug or route key collides with the 183 built pages or the 183 EN slugs.

## Global rules for this batch

1. Neutral Spanish with `tú`; zero vosotros, zero voseo, no regionalisms. Never the word `gym`.
2. **No external links.** The archive is full of promos; every one is removed, not reformatted.
   This covers clinic links, supplement and dysphagia links, the Synergym `gym cerca de mi` link,
   the fisioactualidad link and the Wikipedia link. Published pages carry zero external links.
3. **No inline images.** Hero only. Do not port the archive's `<img>` tags or the `postura-perfecta.gif`.
4. **No newsletter or social CTA.** The end CTA belongs to the layout (`Abrir la app`).
5. **No archive TOC anchors** (`<a id="...">`), no `## Índice de contenidos`, no `Highlights`
   section duplicating the body, no `Nivel pro` labels. Layout builds the index from the H2s.
6. **No promotion of products, supplements, clinics or professionals.** Where the archive's advice
   depends on a professional, say "un fisioterapeuta o un traumatólogo", never a named one.
7. Keep the archive's training advice, numbers and warnings. Fix the wording, not the prescription.
8. Zero em dashes (hard maximum is 2; the house style is 0). No contrast reveals, no negation lists.
9. Tables: routine tables stay 3 columns (Exercise | Sets | Reps). Any comparison or checklist table
   is raw `<table class="text-table">`, as in `bicicleta-estatica-vs-cinta-de-correr.md`.
10. Every page gets `updated: "2026-11-15"`.

## Editorial decisions (mandatory per page)

### 1. Ejercicios de alta intensidad para finalizar el entrenamiento

Seven finishers, one per muscle group. Convert the whole archive from vosotros to tú.

- Keep the intro's argument: the start of the session builds the result, the finisher exhausts the
  remaining fibres; isolation and machines are the usual choice because the muscles are tired.
- Keep all seven blocks with their placement, movement and sets: chest cable crossover superset with
  cross-bench pullover (3 sets, 2 min rest, 6-8 and 10-15 reps); T-bar row tri-set with three grips
  (4 sets, 10-12 reps, 2 min after the tri-set); seated lateral raise 100 reps in blocks of 10 with
  5 s rest (50 without a partner); standing barbell curl triple drop (-35 %, then -30 %, start at
  6-8 reps, 3 sets); bench dips drop with plates (8-10 to failure, remove one plate per failure,
  2 more sets); leg extension superset with sissy squat; back extension (4 sets of 15, add a plate
  above 15 reps, drop it at failure).
- **The archive fixes no sets or reps for the leg-extension / sissy-squat superset.** Do not invent
  them and do not leave a hole: say plainly that the original gives the pairing without a prescription
  and that the page keeps the rest of the page's scheme (3 rounds, 2 min rest), with the extension
  short of failure and the sissy squat as the finisher.
- Add one warning paragraph: these are advanced finishers, not a beginner's routine; one exercise per
  muscle group, never all seven in the same session.
- Links: `entrenamiento-alta-intensidad`, `series-descendentes`, `superseries`, `triseries`,
  `repeticiones-forzadas`, `fallo-muscular`, `ejercicios-maxima-congestion-muscular`,
  `pullover-mancuerna`, `remo-barra-t`. Only these published slugs.

### 2. Principio de contracción máxima

- **Delete the whole supplement / dysphagia promotional block** (the two taliment.com links and the
  paragraph recommending dietary supplements). It is an ad, not content.
- Keep: definition (maximum voluntary contraction held 2-3 s at the point of full contraction), the
  three phases of a repetition and what each contributes, why the hold raises average intramuscular
  tension, benefits, applications (curls, leg extensions, pec deck, pulldowns, pullovers, ab work),
  the working exercise list with the muscle in brackets, the four key points, the beginner warning and
  the overtraining warning.
- Phrase the mechanism as the principle's rationale, not as a cited study: the hold keeps tension high
  for longer and a maximal static contraction can produce more force than a submaximal concentric one.
- The "prueba 30 días y evalúa" line stays as practical advice, not as a measured result.
- Links: `principios-weider`, `entrenamiento-alta-intensidad`, `fallo-muscular`, `sobreentrenamiento`.
- The archive note that the technique suits isolation work better than compounds is the page's spine.

### 3. Cuándo ir al traumatólogo y no autodiagnosticarte (mi experiencia)

YMYL. First person is allowed because the title promises the author's experience; keep the story
(back pain that turned out to be a CAM-type femoroacetabular impingement, arthroscopy, strength work
afterwards) and keep it clearly framed as one case.

- **Delete the clinic recommendation and its link** (`artrosasun.com`, "el mejor traumatólogo de
  Bilbao"). Delete the Wikipedia FAI link. Keep the clinical terms, explain them in one clause.
- **Delete the 3-7-21 rule.** It is an invented numeric protocol presented as guidance. Replace it
  with plain conditions: pain that does not improve in one or two weeks, pain that limits walking or
  sleeping, or episodes that keep coming back all justify an appointment.
- Keep and mark as urgent: night pain, limping, loss of strength, numbness.
- Keep the decision table as `<table class="text-table">` with three columns (symptom, context,
  action), fixing the "Traumatología" typo.
- Keep the four FAQs, the conservative-first ladder, the glute and core routine (2-3 days a week,
  warm-up, strength, cool-down as listed) and the return-to-training signals.
- Add the house disclaimer as a blockquote near the top, in the same shape as
  `ejercicios-dolor-de-espalda.md`: educational information, not a substitute for a professional
  assessment.
- Links: `ejercicios-dolor-de-espalda`, `espalda-baja-fuerte`, `regeneracion-muscular`,
  `como-ser-constante-en-el-entrenamiento`.

### 4. Cómo mantener y mejorar tu forma física durante el verano

Light lifestyle page. Decision: it is about keeping the routine through holidays, **not** a heat
protocol; `como-entrenar-con-altas-temperaturas` already covers heat illness. The summer-safety
section stays short and links that page for the full protocol.

- **Delete the Synergym promo** and the "necesito un gym cerca de mí" framing. Replace every `gym`
  with `gimnasio`.
- Remove the author's first-person asides ("yo sigo entrenando en verano", "para mí es una
  necesidad"). This page is a guide, not a diary.
- Keep: vary the routine, water sports and beach versions of common sports, walking, the option of
  keeping the gym (mobility, technique, core, less volume), heat basics (schedules, technical light
  clothing, hydration before/during/after, sun protection), summer eating (fruit, vegetables, complete
  salads, protein, cold soups, electrolytes), rest and sleep, and the September return.
- No calorie or fat-loss promises. No "lucir resultados" claims.
- Links: `como-entrenar-con-altas-temperaturas`, `entrenamiento-cardiovascular-en-tu-programa-de-fitness`,
  `estiramientos`, `cuanto-dormir-para-progresar-en-el-gimnasio`, `como-ser-constante-en-el-entrenamiento`.

### 5. Ejercicios peligrosos que debemos limitar en el gimnasio

Five exercises: press tras nuca, jalones tras nuca, remo al mentón, peso muerto con piernas rígidas,
prensa horizontal. The archive is absolute in places; the page must not contradict pages already
published, and it must not ban exercises the site teaches.

- **Behind-neck pulldown**: `/es/jalones-tras-nuca/` is published and teaches it with strict form.
  Resolve explicitly: the risk is the combination of abduction and forced external rotation, and it
  grows when shoulder flexibility is limited. The front version is the default; if you still do the
  behind-neck version, do it exactly as that page describes, never as a max-load exercise. Link it.
- **Stiff-leg deadlift**: `/es/peso-muerto-piernas-rigidas-barra/` and
  `/es/peso-muerto-piernas-rigidas-mancuernas/` are published. Keep the archive's warning but frame
  the cause correctly: the risk is a rounded spine under load, not the exercise name. A neutral
  spine, a controlled hinge and a moderate load are the condition; if you cannot hold the spine, use
  the Romanian deadlift. Link both pages.
- **Press tras nuca / remo al mentón**: keep the archive's reasoning (extreme external rotation and
  horizontal abduction; supraespinatus compression above 90 degrees) and its alternatives (dumbbell
  or military press, lateral raises). Soften absolute verbs: `puede` instead of `provoca`.
- **Prensa horizontal**: keep the disc-pressure and pelvis argument, and say the fix is depth and
  pelvic position, not removing the machine. Link `sentadilla-sin-lesiones`.
- No medical disclaimer on this page; it is risk framing, not treatment advice.
- Links: `jalones-tras-nuca`, `peso-muerto-piernas-rigidas-barra`,
  `peso-muerto-piernas-rigidas-mancuernas`, `sentadilla-sin-lesiones`,
  `tecnica-ejecucion-ejercicios`, `principios-weider`.

### 6. Lesiones comunes en el gimnasio: prevención y recuperación

The archive text is recent but carries a newsletter CTA, an external link, duplicate `Highlights`,
manual anchors and `Nivel pro` labels. All of that goes.

- Keep: the disclaimer blockquote, load tolerance as the mechanism, the three injury sites (shoulder,
  lumbar spine, knee) with their causes and fixes, relative rest instead of absolute rest, the
  progressive return, the FAQ.
- Soften the numbers: no "90 % de las lesiones". Say "la mayoría" and keep the three mechanisms
  (too much volume too soon, poor technique sustained, poor recovery).
- Keep the two protocol notes (isometric analgesia first, then controlled eccentric work; heavy slow
  resistance for patellar tendinopathy at 70-85 % with 3-4 s each phase, 3 times a week) as
  blockquotes without the `Nivel pro` label.
- Ice: say the current evidence does not support systematic ice for recovery, without promising harm.
- Pain rule: keep the 0-3 / 4+ traffic light and the 24 h check, attributed to common practice.
- Links: `agujetas-causas-y-como-hacer-que-desaparezcan`, `dolor-cronico-y-fisioterapia-tratamientos-que-funcionan`,
  `cuando-ir-al-traumatologo-experiencia-personal`, `volumen-de-entrenamiento`,
  `cuanto-peso-cargar-en-el-gimnasio`, `principio-adaptacion-sobrecarga-progresiva`, `fallo-muscular`.

### 7. La postura correcta, un factor importante en nuestro deporte

Old archive page, vosotros everywhere, hard line breaks and several typos (`reposapies`, `linea`,
`desquilibrada`, `Cuidad`, `Mantened`, `Poneos`). Full rewrite to tú, same content.

- Keep the opening argument (a developed back on a collapsed posture looks wrong; alignment changes
  both image and health) but drop the Arnold / Quasimodo name-calling for one plain sentence.
- Keep the 11 general guidelines with their measurements (5-7 cm ruler across the chest, 4 cm at the
  door frame, chin about 10 cm from the clavicle), the sitting rules and the five exercises.
- Map the five exercises to published pages where they exist: `hiperextensiones-espalda`, `dominadas`.
  For shrugs, hanging leg raises and rear delt raises without a published page, name the exercise in
  prose without a link.
- Keep the closing: correcting posture changes both health and the impression you give.
- Links: `anatomia-de-la-espalda`, `espalda-baja-fuerte`, `hiperextensiones-espalda`, `dominadas`.

### 8. Fisioterapia y dolor crónico: tratamientos que funcionan

YMYL. The archive is recent but has a clinic link, a newsletter CTA, duplicate `Highlights`, manual
anchors and `Nivel pro` labels. All of that goes.

- Keep: the disclaimer, chronic pain is not a life sentence, central sensitisation explained plainly
  (the alarm that stays too sensitive), manual therapy as a window and not a cure, therapeutic
  exercise as the core, stress and sleep as amplifiers, pain education, the two common mistakes
  (absolute rest, passive patches), the progress signals, the FAQ.
- Soften: "matemáticamente probable" becomes "es habitual"; "se ha demostrado" becomes "la evidencia
  actual apunta a"; keep alodinia and hiperalgesia but gloss each in a clause.
- Keep the 3-4/10 during-rehab pain tolerance and the 24 h rule.
- Links: `lesiones-comunes-en-el-gimnasio-prevencion`, `agujetas-causas-y-como-hacer-que-desaparezcan`,
  `cuanto-dormir-para-progresar-en-el-gimnasio`, `como-ser-constante-en-el-entrenamiento`,
  `regeneracion-muscular`, `semana-de-descarga`.

### 9. Agujetas: causas y cómo hacer que desaparezcan

Biggest rewrite in the batch. The archive spends half the page on three historical theories.

- Cut the three-theory history to one short section: lactic acid is not the cause and the cristal
  theory is a locker-room legend; the accepted explanation is microdamage to the sarcomeres plus a
  local inflammatory response; soreness appears with unaccustomed work, especially eccentric, peaks
  between 24 and 72 hours and lasts one to five days.
- **Delete the 38-54 °C cell-death paragraph** and the Dvries spasm theory. Delete the
  "Basado en un texto de Prowellness.es" line.
- **Resolve the contradiction with the published page.** The archive says soreness proves the session
  worked; `/es/dolor-crecimiento-muscular/` says it does not. The published page wins: soreness means
  novelty, not effectiveness. Say so and link it.
- Keep: what soreness is, why it appears, that it cannot be fully avoided, that gradual progression
  reduces it, the treatment section (analgesics for strong pain, massage, cold, active recovery), the
  bicarbonate and sugar myth, the strategy list, and training through soreness with a light session
  away from the peak day.
- Keep the practical note that the peak is at 48-72 h for beginners, so wait before adding load.
- Add one short note that the page is general information, not a treatment plan.
- Links: `dolor-crecimiento-muscular`, `regeneracion-muscular`, `estiramientos`,
  `calentamiento-y-estiramientos`, `principio-adaptacion-sobrecarga-progresiva`,
  `sobreentrenamiento`.

### 10. Sobreentrenamiento: cómo evitarlo para progresar más

- Keep: the definition, the warning that it is less common than gym lore claims, the effects by
  system (nervous, hormonal, immune, metabolic), weights versus cardio, detection, the questionnaire,
  and the four prevention blocks (volume, nutrition, rest, periodisation).
- Add one sentence distinguishing overreaching (functional, recovers in days) from overtraining
  (persists for weeks), so the page does not sell a rare syndrome as routine.
- Soften the hormone claims: "la literatura describe" instead of "se ha demostrado"; keep testosterone,
  cortisol and the catabolic combination. Drop tiroxina.
- Keep the questionnaire's >3 and >5 thresholds but call it a self-check, not a diagnosis.
- Keep the example with 5 reps at 100 kg and the training log as the detection tool.
- Links: `semana-de-descarga`, `periodizacion-entrenamiento`,
  `cuanto-dormir-para-progresar-en-el-gimnasio`, `volumen-de-entrenamiento`,
  `agujetas-causas-y-como-hacer-que-desaparezcan`, `fallo-muscular`,
  `como-se-adapta-el-cuerpo-al-entrenamiento-con-pesas`.

## Hero images

One unique hero per page, Wikimedia Commons only, licence CC0, public domain, CC BY or CC BY-SA.

Working recipe (verified on 2026-11-15):

```powershell
$u = "https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6" +
     "&gsrsearch=filetype:bitmap%20<terms>&gsrlimit=10&prop=imageinfo" +
     "&iiprop=url|extmetadata|size&iiurlwidth=1280&format=json"
$r = Invoke-RestMethod -Uri $u -Headers @{ "User-Agent" = "GymLabWeb/1.0" }
# per page: title, original width/height, extmetadata.LicenseShortName, extmetadata.Artist,
# imageinfo[0].thumburl (1280 px wide)
Invoke-WebRequest -Uri $thumb -OutFile "public/content/<es-slug>/hero.jpg" -Headers @{ "User-Agent" = "GymLabWeb/1.0" }
```

- Check the downloaded file is **at least 1200 px wide** with `System.Drawing.Image::FromFile`. A
  640×384 source passes every gate and looks broken on the page; this has already happened once.
- Target 1,000-1,400 px wide and under ~200 KB. `optimize-screens.py` is not for heroes; if a file
  lands over 400 KB, re-download at `iiurlwidth=1280`.
- `heroCredit` format: `Wikimedia Commons · <author> · <licence>` with the author's plain name (strip
  HTML from `extmetadata.Artist`). `heroAlt` describes what is actually in the photo and is written in
  the page's locale; the English file gets an English alt, not the Spanish one.
- Record the Commons file title in this document's scope table commit column or in the evidence
  section, so a later duplicate check can start from the title.
- Suggested subjects, to keep the ten heroes and the 183 existing ones apart: (1) cable crossover or
  cable machine, (2) biceps curl with a barbell, (3) hip or physiotherapy assessment, (4) outdoor
  summer activity, non-gym, (5) barbell behind the neck or shoulder press, (6) gym floor or first-aid
  style, (7) person sitting at a desk or standing posture, (8) physiotherapy table or hands-on
  treatment, (9) recovery, stretching or foam roller, (10) exhausted athlete or empty gym.

## Verification

```powershell
npm run check:copy   # source gate: 193 pages, frontmatter, lengths, register, unique heroes
npm run build        # 402 pages expected
npm run check:i18n   # after build, 398 sitemap URLs expected once routes are registered
```

Each writer runs `npm run check:copy` at the end of its own scope. The parent registers the routes,
runs `npm run verify`, checks link resolution, TOC anchors and table geometry, and commits per page.

## Result (2026-11-15)

- 10 bilingual pairs, 20 files, 10 heroes. Library: 183 → **193 / 792**.
- Gates: `check:copy` **9,843/9,843** (193 files), build **402 pages**, `check:i18n` **6,324/6,324**,
  sitemap **398 URLs** with **1,194 alternates**.
- Route registration: `astro.config.mjs` `ROUTE_PAIRS`, `check-i18n.mjs` `PAGES` and `ROUTES`;
  commit `90288dd`.
- Structural checks: 117 internal links across the new files, **0 broken**; zero external links,
  zero `.md` links, zero `#` links, zero inline images, zero manual anchors, zero em dashes.
- Heroes: all 1280 px wide, 151-288 KB, CC0 / public domain / CC BY 2.0 with the credit in
  `heroCredit`. dHash of all 193 heroes gives 192 distinct values: the single distance-0 pair is the
  pre-existing `remo-polea-sentado` / `superserie-de-espalda-para-terminar-tu-rutina`, already in the
  `PLAN.md` follow-up. The ten new heroes are clean at distance ≤ 6 against the whole library.
- Parent cross-link pass: five same-batch links added where the pair had none (`alta-intensidad` and
  `verano` to `sobreentrenamiento`, `traumatologo` to `dolor-cronico`, `lesivos` and `postura` to
  `lesiones-comunes`).

### Editorial resolutions worth keeping

1. **Soreness is not proof of a good session.** The archive said it was; the published
   `dolor-crecimiento-muscular` page says the opposite. The published page won and the new page links it.
2. **Behind-neck pulldown and stiff-leg deadlift are not banned.** Both exist as published exercise
   pages. The new page keeps the archive's risk analysis and moves the cause to forced external
   rotation, limited shoulder flexibility and a rounded spine under load.
3. **The "regla 3-7-21" was deleted.** It is an invented numeric protocol presented as medical
   guidance. Replaced by plain conditions, with the red flags kept.
4. **Every promo left the copy**: clinic links, supplement and dysphagia links, the Synergym
   `gym cerca de mí` passage, the fisioactualidad link, the Wikipedia link and both newsletters.
5. **The leg-extension / sissy-squat superset says the archive has no prescription** instead of
   inventing sets and reps; it reuses the page's own 3 rounds and 2 minutes.

### Native assessment

`gentle-ai review assess` over `6293327..HEAD` (36 paths, 2,377 changed lines, untracked mockups
declared as excluded): risk **medium**, reason `executable_change` on `astro.config.mjs`,
`review_due: false`, `review_due_reason: under_budget`. No native review transaction was opened.


