# Content library — batch 54

Started: 2026-11-23. Continues the library from 531/792 (`odd/tasks/content-pages.md`).

Objective: the last five Ejercicios de Pierna rows plus the first five Ejercicios de Gemelo rows, from
`/hip-thrust-guia-completa-de-entrenamiento/` to `/elevacion-gemelos-barra/`, as ten bilingual pairs.
Library 531 → 541. Pierna closes at 6/6.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Sources: `...\content\ejercicios\{ejercicios-de-pierna,ejercicios-de-gemelo}\`

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `hip-thrust-guia-completa-de-entrenamiento` | `barbell-hip-thrust` | `ejercicios-de-pierna/hip-thrust-guia-completa-de-entrenamiento.md` | 1,339 | hip thrust con barra | |
| 2 | `hip-thrust-en-maquina` | `hip-thrust-machine` | `ejercicios-de-pierna/hip-thrust-en-maquina.md` | 1,465 | hip thrust en máquina | |
| 3 | `sentadilla-bulgara` | `bulgarian-split-squat` | `ejercicios-de-pierna/sentadilla-bulgara.md` | 1,033 | sentadilla búlgara | |
| 4 | `sentadilla-zercher` | `zercher-squat` | `ejercicios-de-pierna/sentadilla-zercher.md` | 542 | sentadilla Zercher | |
| 5 | `sentadilla-con-mancuernas` | `dumbbell-squat` | `ejercicios-de-pierna/sentadilla-con-mancuernas.md` | 203 | sentadilla con mancuernas | |
| 6 | `gemelo-prensa` | `calf-press` | `ejercicios-de-gemelo/gemelo-prensa.md` | 171 | gemelo en prensa | |
| 7 | `elevacion-gemelo-una-pierna` | `single-leg-calf-raise` | `ejercicios-de-gemelo/elevacion-gemelo-una-pierna.md` | 360 | elevación de gemelo a una pierna | |
| 8 | `elevacion-gemelo-maquina-sentado` | `seated-calf-raise-machine` | `ejercicios-de-gemelo/elevacion-gemelo-maquina-sentado.md` | 137 | elevación de gemelo sentado | |
| 9 | `elevacion-gemelos-maquina-hack` | `hack-squat-calf-raise` | `ejercicios-de-gemelo/elevacion-gemelos-maquina-hack.md` | 163 | elevación de gemelos en hack | |
| 10 | `elevacion-gemelos-barra` | `barbell-calf-raise` | `ejercicios-de-gemelo/elevacion-gemelos-barra.md` | 570 | elevación de gemelos con barra | |

Pages 1-5: `section: "Ejercicios de pierna"` (`Leg exercises`). Pages 6-10:
`section: "Ejercicios de gemelo"` (`Calf exercises`). All: `block: "Entrenamiento"` (EN `Training`),
`updated: "2026-11-23"`.

## Conflicts the batch settles (binding)

1. **The barbell hip thrust page is not a benefits page.** Page 1 overlaps `beneficios-hip-thrust`, which
   already owns the benefits and the short-position argument. This page owns barbell execution (setup,
   pad, range, errors, programming) and carries the critical thesis the archive states at the end: the
   hip thrust is over-prescribed and does not replace the hinge and the squat. No injury-prevention or
   rehab claims.
2. **The gluteus medius and minimus are abductors, not hip extensors.** Page 1 lists them as movers.
   `anatomia-de-la-cadera-gluteos` already says otherwise.
3. **One head cue.** Page 1 forbids looking at the ceiling, then forbids looking forward, then prescribes
   looking forward. Publish a neutral neck and one line.
4. **The machine page's belt landmark is wrong.** Page 2 mixes the iliac crest and the ASIS, and the
   FAQ tells tall lifters to lower the pad to the crest, which is above and behind the ASIS. The pad sits
   on the hip crease, below the ASIS. That placement decides whether the load reaches the hip or crushes
   the abdomen, which is the page's own failure mode.
5. **The machine page is the strongest source and the most personal.** Keep its femur-length setup,
   foot-position logic and templates; remove the six first-person passages and the two empty video
   headings.
6. **The Bulgarian's knee rule conflicts with a published page.** Page 3 says the front knee must not
   pass the toes; `sentadilla-sin-lesiones` repeats it. In a split squat the front knee must travel
   forward over the foot, and restricting it shifts load to the hip without sparing the knee. Publish
   the correct cue (knee tracks over the foot, does not collapse inward) and fix the single sentence in
   `sentadilla-sin-lesiones` in the same batch, documented as a parent fix.
7. **The Bulgarian is a strength lift, not a balance drill.** Page 3 suggests unstable surfaces under the
   front foot. Drop it. Elevating the rear foot removes the balance cost of a lunge while keeping the
   single-leg load.
8. **The Zercher's rehab claim is dangerous.** Page 4 recommends the Zercher for medial epicondylitis and
   wrist sprain, while the bar loads the common flexor-pronator origin, the exact tissue of golfer's
   elbow. Delete the claim; if the elbow hurts, use a front rack or straps.
9. **The Zercher does not have "minimal spinal compression".** It is an axial load with a longer moment
   arm and higher trunk demand. And it does not work hamstrings and glutes harder than the front squat;
   the anterior position makes the torso more upright, which shortens the hip moment arm. Its real
   argument is the loading pattern and the upper-back demand.
10. **The dumbbell squat is a goblet squat.** Page 5 never names the goblet hold, which is the version
    worth teaching. Rebuild the 203 words as the goblet squat: hold at the chest, elbows in, upright
    torso, heels down, 3 x 8-12. It must not repeat the routine row in `rutinas-pesas-casa`; link it.
11. **Heel lift is an ankle limitation, not a depth error.** Page 5 turns limited dorsiflexion into a
    prohibition on depth. The fix is a heel wedge, a wider stance or ankle work, not a shallower squat.
12. **The straight-knee rule governs the calf pages.** The gastrocnemius crosses the knee, so standing,
    press, hack and single-leg raises keep the knee extended and the soleus work is seated. Every page
    states it once and links the opposite group. Page 10's invented "soleus in the eccentric,
    gastrocnemius in the concentric" dies.
13. **The calf press foot placement contradicts itself.** Page 6 puts the forefoot on the edge and then
    says both feet are firmly on the platform. Publish the real setup: balls of the feet on the platform
    edge, heels free, safety stops set, knees extended.
14. **The single-leg page contradicts its own left and right.** Page 7 puts the dumbbell in the right
    hand, hooks the right leg behind and raises the left heel, then says to repeat on the right leg.
    Publish one unambiguous sequence: load on the working side, same-side hand, other hand for support.
15. **The seated machine's knee claim is false.** Page 8 says the soleus stabilises the knee, six lines
    before saying it does not cross the knee. Publish the truth: knee flexion slackens the
    gastrocnemius, which is why the seated machine is the only comfortable way to load the soleus.
16. **The hack calf raise must set the stops before releasing the catch.** Page 9 releases the catch
    first. With straight knees there is no reserve; set the stops, then release.
17. **One dose per calf exercise, matching the routine already published.** Page 10 says 3 x 10-12 while
    `rutina-de-gemelos-sin-maquinas` prescribes 4 x 15-20. Publish 3 x 15-20 with a 1-2 s pause and a
    heavy option of 6-10 at the end, and link the routine instead of competing with it. All five calf
    pages use the same default.
18. **Every row states its dose.** Hip thrust 3-4 x 8-12 (90-120 s) or the machine templates; Bulgarian
    and Zercher 3 x 6-10 (2 min); goblet 3 x 8-12 (90 s); calves 3 x 15-20 (60 s). The archive gives
    some numbers; where it gives none, the dose is this batch's own recommendation and says so once.

## Global rules

1. Neutral Spanish with `tú`; zero vosotros, voseo or `usted`. Never the word `gym` in Spanish.
2. No first person, no newsletter or comment CTAs, no supplements, no athlete photos, no medical or
   rehab claims, no injury promises, no "Conclusión" section, no marketing headings, no emoji.
3. Zero external links, `.md` links, `#` anchors, inline images, `▷`/`✔`, escaped asterisks, emoji
   artifacts, empty headings, manual TOCs, embedded videos, empty video headings, image-as-heading.
4. Links only to pages that exist (ES slugs): the ten batch pages, `beneficios-hip-thrust`,
   `puentes-gluteo-2`, `extension-de-cadera-gluteos`,
   `como-calentar-para-tu-entrenamiento-de-gluteos`, `anatomia-de-la-cadera-gluteos`,
   `sentadilla-barra`, `sentadilla-frontal-barra`, `sentadilla-sin-lesiones`, `sentadilla-hack-2`,
   `sentadilla-con-el-peso-corporal`, `sentadillas-mancuerna-estilo-sumo`,
   `sentadillas-con-mancuerna-por-encima-de-la-cabeza`, `sentadilla-prensa`, `prensa-posicion-pies`,
   `sentadilla-con-caja-alturas`, `anatomia-gemelo-soleo`,
   `grandes-gemelos-elevaciones-de-pie-o-sentado`, `como-ganar-volumen-en-los-gemelos`,
   `rutina-de-gemelos-sin-maquinas`, `rutinas-de-gemelos-para-pantorrillas-esteticas-tonificadas`,
   `entrenamiento-de-gemelos-diferente`, `anatomia-y-entrenamiento-del-tibial-anterior`,
   `ejercicios-pierna`, `rutinas-pierna`, `rutinas-pesas-casa`,
   `tecnica-ejecucion-ejercicios`, `rango-completo-de-movimiento-rom`, `principio-adaptacion-sobrecarga-progresiva`,
   `fallo-muscular`, `volumen-de-entrenamiento`, `tiempo-de-descanso-entre-series`,
   `zancadas-mancuernas`, `zancadas-hacia-atras-mancuernas`, `zancadas-laterales-barra`.
5. Zero em dashes. Titles 45-60, descriptions 150-160, reciprocal `alternate`.
6. Tables: programme tables markdown, three columns; setup, comparison and decision tables as
   `<table class="text-table">` with three columns. No footnote inside a cell and no asterisk markers.
   The machine setup-by-height table and the calf knee-axis table are text tables.
7. Heroes: one unique per page, free licence only (Wikimedia Commons first, Pexels second), 1280 px,
   >=1200 on disk, <250 KB, credit plus honest alt, dHash on the final crop. Distance 0 is a duplicate,
   crops have measured up to 14, and white Everkinetic line art hashes 3-9 against other line art:
   open the closest hero and compare by equipment.
8. Body 600-900 words per locale, table-inclusive under 1,150, except the two hip thrust pages at
   800-1,000. Pages 5, 6, 8 and 9 are built from 137-203 archive words: rebuild with setup, errors,
   range and dose, never filler.
9. Mandatory intra-batch links: 1 <-> 2 in the first paragraph and both -> `beneficios-hip-thrust`,
   `puentes-gluteo-2` and `extension-de-cadera-gluteos`; squat trio 3 <-> 4 <-> 5 and all ->
   `sentadilla-barra`, `ejercicios-pierna`; calf group 6 <-> 7 <-> 9 <-> 10 (straight knee) and
   8 <-> 10 (bent knee), every page -> `anatomia-gemelo-soleo` and
   `grandes-gemelos-elevaciones-de-pie-o-sentado`; 9 -> `sentadilla-hack-2`; 6 -> `prensa-posicion-pies`.

## Per page

### 1. Barbell hip thrust

- Bench at mid-back, bar over the hip crease with a pad, feet about shoulder width with the shins
  vertical at the top, chin tucked, ribs down, drive the hips to a straight line, 1 s squeeze, lower
  with control. 3-4 x 8-12, 90-120 s.
- Own execution and the critique: it loads the glute in its short position with little axial
  compression, which is why it complements but does not replace the hinge and the squat. Kill the
  injury and rehab promises, the med/min extensor error and the triple head cue.
- Link `hip-thrust-en-maquina`, `beneficios-hip-thrust`, `puentes-gluteo-2`,
  `extension-de-cadera-gluteos`, `anatomia-de-la-cadera-gluteos`, `sentadilla-barra`,
  `rutinas-pierna`.

### 2. Hip thrust machine

- Setup by femur length: pad on the hip crease below the ASIS, backrest so the knees reach about 90
  degrees at the top, feet under the knees, one warm-up set unloaded. Tempo 3-1-1. Week 0: 3 x 10-12 at
  RPE 5-6; add 5-10 kg when 3 x 12 are clean.
- Keep the machine's honest advantages: fixed path, measurable load, easy setup. Fix the belt landmark,
  drop the six personal passages and the empty video headings. 800-1,000 words.
- Link `hip-thrust-guia-completa-de-entrenamiento`, `beneficios-hip-thrust`, `puentes-gluteo-2`,
  `extension-de-cadera-gluteos`, `anatomia-de-la-cadera-gluteos`, `rutinas-pierna`,
  `principio-adaptacion-sobrecarga-progresiva`.

### 3. Bulgarian split squat

- Rear foot on a bench, front foot far enough that the front shin is near vertical at the bottom, front
  knee travels over the foot and does not collapse inward, torso slight forward lean, descend to the
  front thigh parallel, drive through the whole foot. 3 x 6-10 per leg, 2 min.
- Fix the knee rule (and patch `sentadilla-sin-lesiones`), drop the unstable surface, the medical
  self-disclosure and the metatarsal claim. Own the elevated-rear-foot argument: single-leg load without
  the balance cost of a lunge.
- Link `sentadilla-zercher`, `sentadilla-con-mancuernas`, `sentadilla-barra`,
  `sentadilla-sin-lesiones`, `zancadas-mancuernas`, `ejercicios-pierna`, `rutinas-pierna`.

### 4. Zercher squat

- Bar in the elbow crook with a pad or towel, elbows in and up, chest up, descend between the knees,
  stand. Start light: 10 kg per side is a reasonable first load, not a percentage of the deadlift.
  3 x 6-10, 2 min.
- Delete the medial epicondylitis and wrist-sprain recommendation, the "minimal spinal compression"
  claim and the hamstring/glute superiority. Own the real argument: anterior load, upright torso, upper
  back and trunk working hard.
- Link `sentadilla-frontal-barra`, `sentadilla-barra`, `sentadilla-bulgara`,
  `sentadilla-sin-lesiones`, `ejercicios-pierna`, `rutinas-pierna`.

### 5. Goblet squat (dumbbell squat)

- Hold one dumbbell at the chest with both hands, elbows in, feet shoulder width, heels down, descend
  until the thighs approach parallel, one-count pause, stand. 3 x 8-12, 90 s.
- Name the goblet hold and rebuild the page around it. Fix the heel-lift mechanism: limited
  dorsiflexion is the limiter; use a heel wedge, a wider stance or ankle work, not a shallower squat.
  Convert the usted and complete the page.
- Link `sentadillas-mancuerna-estilo-sumo`, `sentadillas-con-mancuerna-por-encima-de-la-cabeza`,
  `sentadilla-con-el-peso-corporal`, `sentadilla-barra`, `rutinas-pesas-casa`, `ejercicios-pierna`.

### 6. Calf press

- Balls of the feet on the platform edge with the heels free, knees extended but not locked, safety
  stops set, press to full plantarflexion, 1-count pause, control the return. 3 x 15-20, 60 s.
- Fix the contradictory foot placement, name the stops, and own the straight-knee rule. Drop the
  "functionally different" toe-direction claim.
- Link `elevacion-gemelos-maquina-hack`, `elevacion-gemelos-barra`, `elevacion-gemelo-una-pierna`,
  `elevacion-gemelo-maquina-sentado`, `anatomia-gemelo-soleo`,
  `grandes-gemelos-elevaciones-de-pie-o-sentado`, `prensa-posicion-pies`.

### 7. Single-leg calf raise

- One hand on support, working-side hand holding the dumbbell, ball of the working foot on a step,
  heel drops below, rise to full plantarflexion, pause, slow return. 3 x 15-20 per leg, 60 s.
- Fix the left/right contradiction so the sequence is unambiguous. Own unilateral work: half the load,
  exposes side-to-side gaps, balance is the first limiter.
- Link `elevacion-gemelos-barra`, `gemelo-prensa`, `elevacion-gemelo-maquina-sentado`,
  `anatomia-gemelo-soleo`, `grandes-gemelos-elevaciones-de-pie-o-sentado`,
  `rutina-de-gemelos-sin-maquinas`.

### 8. Seated calf raise machine

- Seat so the knees are bent about 90 degrees, pads on the lower thighs, balls of the feet on the
  platform, heels drop, rise, 1-2 s pause, control. 3 x 15-20, 60 s.
- Own the soleus page: knee flexion slackens the gastrocnemius, which is the whole reason the machine
  exists. Kill the knee-stability claim, the clickbait and the vosotros.
- Link `anatomia-gemelo-soleo`, `grandes-gemelos-elevaciones-de-pie-o-sentado`,
  `elevacion-gemelos-barra`, `gemelo-prensa`, `elevacion-gemelo-una-pierna`,
  `como-ganar-volumen-en-los-gemelos`.

### 9. Hack squat calf raise

- Feet with the balls on the platform edge, knees extended, set the safety stops before releasing the
  catch, press to full plantarflexion, 2-count pause, control. 3 x 15-20, 60 s.
- Fix the stop order, expand the "why this machine" argument (torso supported, knee straight, use the
  machine you already have) and complete the page.
- Link `sentadilla-hack-2`, `gemelo-prensa`, `elevacion-gemelos-barra`,
  `elevacion-gemelo-maquina-sentado`, `anatomia-gemelo-soleo`,
  `grandes-gemelos-elevaciones-de-pie-o-sentado`.

### 10. Barbell calf raise

- Standing with the bar on the traps, balls of the feet on a block, knees extended, heels drop, rise,
  1 s pause. Seated version with the bar on the thighs on a bench. 3 x 15-20, 60 s; a 6-10 heavy block
  at the end is optional.
- Kill the invented phase split (soleus eccentric, gastrocnemius concentric) and the "both versions
  work both muscles" line. Reconcile the dose with `rutina-de-gemelos-sin-maquinas` instead of
  competing.
- Link `rutina-de-gemelos-sin-maquinas`, `elevacion-gemelo-maquina-sentado`,
  `elevacion-gemelos-barra` (self if useful; otherwise omit), `gemelo-prensa`,
  `anatomia-gemelo-soleo`, `rutinas-pesas-casa`.

## Writer split

- **Writer A:** pages 1-5: `hip-thrust-guia-completa-de-entrenamiento`, `hip-thrust-en-maquina`,
  `sentadilla-bulgara`, `sentadilla-zercher`, `sentadilla-con-mancuernas`, plus five heroes.
- **Writer B:** pages 6-10: `gemelo-prensa`, `elevacion-gemelo-una-pierna`,
  `elevacion-gemelo-maquina-sentado`, `elevacion-gemelos-maquina-hack`, `elevacion-gemelos-barra`,
  plus five heroes.
- Neither writer touches `astro.config.mjs`, `scripts/check-i18n.mjs`, `guides-nav.ts`,
  `content-pages.md`, `sentadilla-sin-lesiones.md` or this document. The parent patches the published
  knee sentence.

## Hero shortlist

1. Barbell hip thrust on a bench.
2. Hip thrust machine.
3. Bulgarian split squat.
4. Zercher squat.
5. Goblet squat.
6. Calf press.
7. Single-leg calf raise.
8. Seated calf raise machine.
9. Hack squat calf raise.
10. Barbell calf raise.

## Verification

## Result (2026-11-23)

- 10 bilingual pairs, 20 files, 10 heroes. Library: 531 → **541 / 792**. Ejercicios **164/196**;
  Pierna **6/6 — COMPLETO**; Gemelo 5/9.
- Gates: `check:copy` **27,591/27,591**, build **1,098 pages**, `check:i18n` **17,112/17,112**, sitemap
  **1,094 URLs** with 3,282 alternates.
- Structural checks: 156 internal links, **0 broken**; zero em dashes; no BOM; no clipped cells across
  140 page/width pairs.
- **Corrections made:** the barbell hip thrust owns execution and the critique that it complements but
  does not replace the hinge and the squat; the machine page puts the pad on the hip crease below the
  ASIS and keys setup on femur profile; the Bulgarian keeps the front knee travelling over the foot and
  sets the rear foot on the instep; the Zercher loses the medial-epicondylitis recommendation, the
  "minimal compression" claim and the glute/hamstring superiority; the dumbbell squat is rebuilt as the
  goblet squat and treats heel lift as an ankle limitation; the calf pages share one knee-axis rule and
  one dose (3 x 15-20), the press fixes its foot placement and names the stops, the single-leg page has
  one unambiguous sequence, the seated machine owns the soleus, the hack page sets the stops before
  releasing the catch, and the bar page loses the invented concentrics/eccentrics split.
- **Fixed by the parent:** the published `sentadilla-sin-lesiones` still said the knees must not pass
  the toes. The sentence now reads "let the knees travel over the toes if the ankle allows; they must
  not collapse inward" in both locales, so the Bulgarian page and the safety page agree. Commit
  `cb3cae6`.
- **Writers:** A pages 1-5, B pages 6-10, disjoint files. Both fixed description lengths before closing.
- **Heroes:** three Everkinetic illustrations, four Commons photos and two Pexels photos. Known
  approximations: the goblet uses a kettlebell front squat and the hack calf raise a standing calf
  raise close-up; alts are literal.
- Commits: pages `86c5871`, `618ae9f`, `4a84292`, `bb9f6ec`, `3a9dd05`, `e26f4c8`, `8850f7c`, `4dc8333`,
  `c1191a5`, `fb10cf1`; routes `13dc892`; knee cue `cb3cae6`.
