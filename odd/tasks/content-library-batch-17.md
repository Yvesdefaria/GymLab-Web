# Content library — batch 17

Started: 2026-11-14. Continues the library from 165/792 (`odd/tasks/content-pages.md`).

Objective: publish the next 10 bilingual guide pairs (20 files, 10 unique heroes), register the
routes, keep every gate green, mark each page done in the checklist as it commits, and land one commit
per page with its evidence here.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Source archive: `C:\Users\Yves De Faria\Desktop\cambiatufisico.com\content\entrenamiento\entrenamiento\`

## Scope

| # | ES slug | EN slug | Archive source | Words | Primary keyword | Commit |
| --- | --- | --- | --- | ---: | --- | --- |
| 1 | `series-gigantes` | `giant-sets` | `series-gigantes.md` | 504 | series gigantes | |
| 2 | `memoria-muscular-que-es-como-funciona` | `muscle-memory` | `memoria-muscular-que-es-como-funciona.md` | 1,607 | memoria muscular | |
| 3 | `aeke-s1-pro-entrenamiento-domestico-con-ia` | `aeke-s1-pro-ai-home-gym` | `aeke-s1-pro-entrenamiento-domestico-con-ia.md` | 1,283 | gimnasio doméstico con IA | |
| 4 | `mejores-ejercicios-en-maquina-de-musculacion` | `best-machine-exercises` | `mejores-ejercicios-en-maquina-de-musculacion.md` | 1,100 | ejercicios en máquina | |
| 5 | `entrenamiento-funcional` | `functional-training` | `entrenamiento-funcional.md` | 1,631 | entrenamiento funcional | |
| 6 | `calentamiento-y-estiramientos` | `gym-warm-up` | `calentamiento-y-estiramientos.md` | 1,212 | cómo calentar en el gimnasio | |
| 7 | `como-aplicar-los-beneficios-del-yoga-al-culturismo` | `yoga-for-bodybuilding` | `como-aplicar-los-beneficios-del-yoga-al-culturismo.md` | 1,124 | yoga y culturismo | |
| 8 | `superseries` | `supersets` | `superseries.md` | 1,208 | superseries | |
| 9 | `principios-weider` | `weider-principles` | `principios-weider.md` | 2,510 | principios Weider | |
| 10 | `repeticiones-forzadas` | `forced-reps` | `repeticiones-forzadas.md` | 463 | repeticiones forzadas | |

All ten belong to block `Entrenamiento` / section `Entrenamiento` (`Training` / `Training` in
English). No slug or route key collides with the 165 built pages; every internal link target below
already exists as a published page.

## Editorial decisions

The archive predates the contract. These resolutions are mandatory so the ten pages do not contradict
each other or themselves.

1. **Static stretching:** `calentamiento-y-estiramientos` contradicts itself (stretch the target
   muscles at line 74, never before training at lines 98 and 101). `yoga-for-bodybuilding` repeats the
   softer version. Both pages ship the same answer: dynamic warm-up and ramp-up sets before training;
   static stretching after the session or on rest days, and long static holds before training can
   briefly reduce force. No `NUNCA` in caps.
2. **Supersets:** the archive defines a superset as "2 series de dos ejercicios distintos seguidas"
   (`superseries.md:30`), which is one set too many. The page defines it correctly: one set of
   exercise A immediately followed by one set of exercise B, then the rest interval. The rest of the
   archive's types and examples are kept.
3. **Giant sets:** the archive gives two different rest prescriptions (3–8 min between blocks with
   ≤30 s inside, and 4–10 min with 30–60 s). Do not invent one. State the short rest inside the block
   (about 30–60 s) and 3–10 minutes between blocks depending on load.
4. **Forced reps:** keep the "last set or two only" rule and the overtraining and joint warning. Drop
   the promise of a video that the archive does not embed. The Weider page restates the same
   technique: both pages carry the same rule.
5. **Weider:** keep the principle list, the overtraining warnings and the level ordering. Drop the
   claim that lactate "inflates the cells" (outdated physiology) and any "las pruebas demuestran"
   without a named source; write those sentences without the unsupported mechanism.
6. **Muscle memory:** the archive claims "hipertrofia acelerada durante el desentrenamiento", which
   contradicts itself: nobody hypertrophies while detraining. Keep myonuclei and the nervous system as
   the two mechanisms the archive describes, and drop that sentence.
7. **AEKE S1 Pro:** the archive is a commercial advertorial with UTM links, unverifiable funding
   numbers, a 39-versus-40-day date error, a wrong pound-to-kilogram conversion and a "lifetime
   access" promise. The page ships as a neutral overview: every hardware spec is attributed to the
   manufacturer ("según el fabricante"), with zero outbound commercial links, zero funding or price
   figures and zero lifetime-access promise. If the owner prefers to drop the row, that is one row
   and one pair to remove; the decision is recorded here.
8. **Machine exercises:** keep the ten exercises, fix the gender error and the heading levels, and
   drop the pandemic-era commentary and the 100x100fitness link. The joint-stress caveat stays.
9. **Functional training:** keep both tables (routine by level and pros/cons) inside the 3-column
   rule and drop the commercial course link. Do not sell it as easy while keeping the "high learning
   curve" caveat: present the learning curve as the cost of the method.
10. **Yoga:** "la comunidad científica" without a study becomes the plain caution from decision 1.
    Keep the benefits the archive describes, without calorie or anxiety figures.

## SEO brief per page

Copy rules live in the contract §6. Per-page intent so the writers do not improvise keywords:

1. **`series-gigantes`** — intent: what a giant set is and how to program it. H1 ES "Series gigantes:
   qué son y cómo aplicarlas"; H1 EN "Giant sets: what they are and how to use them". H2s: qué son y
   en qué se diferencian de las superseries; serie gigante de hombros; serie gigante de abdominales;
   cuánto descansar entre series gigantes; cuántas hacer por entrenamiento; cómo hacerlas en un
   gimnasio lleno. Keep the three example blocks. Links: `superserie-de-espalda-para-terminar-tu-rutina`,
   `entrenamiento-alta-intensidad`, `tiempo-de-descanso-entre-series`.
2. **`memoria-muscular-que-es-como-funciona`** — intent: what muscle memory is and how to return after
   a break. H1 ES "Memoria muscular: qué es y cómo recuperar tu nivel"; H1 EN "Muscle memory: what it
   is and how to get your level back". H2s: qué es y por qué no empiezas de cero; mionúcleos y sistema
   nervioso; cuánto dura; cómo volver sin lesionarte; errores al retomar; si funciona igual para perder
   grasa; preguntas frecuentes. Keep the tendinitis and sarcopenia cautions. Links:
   `regeneracion-muscular`, `frecuencia-entrenar-cada-musculo`, `semana-de-descarga`,
   `ganar-masa-muscular`.
3. **`aeke-s1-pro-entrenamiento-domestico-con-ia`** — intent: what an AI home gym offers, using the
   S1 Pro as the example. H1 ES "Gimnasio doméstico con IA: qué ofrece el AEKE S1 Pro"; H1 EN "Home
   gym with AI: what the AEKE S1 Pro offers". H2s: qué es; qué cambia un gimnasio doméstico con IA;
   cómo personaliza el entrenamiento; espacio y ruido; seguridad al entrenar solo; qué incluye el
   acceso sin suscripción. Attribute every spec. Links:
   `entrenamiento-personalizado-en-casa-ventajas-reales`, `mejor-equipamiento-para-entrenar-en-casa`,
   `instrumentos-del-gimnasio`.
4. **`mejores-ejercicios-en-maquina-de-musculacion`** — intent: the best machine exercises. H1 ES "Los
   10 mejores ejercicios en máquina de musculación"; H1 EN "The 10 best machine exercises for building
   muscle". H2s: ¿son las máquinas solo para principiantes?; ventajas de los ejercicios guiados; los 10
   ejercicios, uno a uno; entrenar alrededor de una lesión; técnicas avanzadas en máquina; cómo
   combinar máquina y peso libre. Keep every exercise and the shoulder warning. Links:
   `instrumentos-del-gimnasio`, `ejercicios-en-polea-ventajas`, `guia-musculacion-principiantes`,
   `ejercicios-multiarticulares-y-ejercicios-de-aislamiento`.
5. **`entrenamiento-funcional`** — intent: pros, cons and exercises. H1 ES "Entrenamiento funcional:
   beneficios, límites y ejercicios"; H1 EN "Functional training: benefits, limits and exercises".
   H2s: qué es; beneficios; contras y límites; ejercicios básicos; rutina por nivel; preguntas
   frecuentes. Both archive tables survive as text tables of at most three columns. Links:
   `ejercicios-con-bandas-de-resistencia-tubulares`, `entrenamiento-balistico`, `cross-training`,
   `ejercicios-sobre-balon`.
6. **`calentamiento-y-estiramientos`** — intent: how to warm up at the gym. H1 ES "Cómo calentar en el
   gimnasio: calentamiento y estiramientos"; H1 EN "How to warm up at the gym: warm-up and stretching".
   H2s: por qué calentar; calentamiento general; series de aproximación con press de banca;
   estiramientos antes o después; calentamiento en tres fases; errores al calentar. Add the missing
   stretching section the archive promises. Links: `estiramientos`,
   `circuito-de-estiramientos-para-musculacion`, `prueba-flexibilidad`, `tecnica-ejecucion-ejercicios`.
7. **`como-aplicar-los-beneficios-del-yoga-al-culturismo`** — intent: yoga inside a bodybuilding plan.
   H1 ES "Yoga y culturismo: cómo aplicarlo a tu entrenamiento"; H1 EN "Yoga and bodybuilding: how to
   apply it to your training". H2s: ¿se pueden combinar?; estiramientos y yoga: en qué se diferencian;
   beneficios para el culturista; yoga en días de descanso; ¿estirar antes te quita fuerza?; cómo
   empezar sin ser flexible. Links: `estiramientos`, `rango-completo-de-movimiento-rom`,
   `prueba-flexibilidad`, `regeneracion-muscular`.
8. **`superseries`** — intent: what supersets are, types and how to use them. H1 ES "Superseries: qué
   son, tipos y cómo aplicarlas"; H1 EN "Supersets: what they are, types and how to use them". H2s:
   qué es una superserie; tipos y cuándo usar cada uno; pre-fatiga y post-fatiga; antagonistas;
   ventajas y límites; cuánto descansar. Keep the "not for beginners" line and merge the duplicated
   benefits sections. Links: `superserie-de-espalda-para-terminar-tu-rutina`,
   `entrenamiento-alta-intensidad`, `congestion-muscular`, `tiempo-de-descanso-entre-series`.
9. **`principios-weider`** — intent: the Weider principles and how to apply them. H1 ES "Principios
   Weider: qué son y cómo aplicarlos"; H1 EN "Weider principles: what they are and how to apply them".
   H2s: qué son; principios para principiantes; intermedios; avanzados; los más exigentes; cómo
   aplicarlos sin sobreentrenarte. Keep every principle and the level grouping. Links:
   `entrenamiento-piramidal`, `principio-adaptacion-sobrecarga-progresiva`, `fallo-muscular`,
   `entrenamiento-alta-intensidad`.
10. **`repeticiones-forzadas`** — intent: what forced reps are and how to do them safely. The archive
    is 463 words with two H2s: expand only with what the related built pages already state (failure,
    supersets, rest), never with new claims. H1 ES "Repeticiones forzadas: qué son y cómo hacerlas
    bien"; H1 EN "Forced reps: what they are and how to do them safely". H2s: qué son; cómo hacerlas
    con un compañero; sin compañero; cuándo usarlas y cuándo evitarlas; riesgos; en qué se diferencian
    de las descendentes y el descanso-pausa. Links: `fallo-muscular`, `entrenamiento-alta-intensidad`,
    `entrenamiento-con-companero`, `congestion-muscular`.

Every page: title 45–60 with the keyword first, description 150–160 with keyword and promise, H1 the
query phrase, keyword in the first lead sentence, 3–6 natural mentions, 2–4 internal links with
descriptive anchors, zero invented facts, `updated: "2026-11-14"`. The parent adds the cross-links
among the ten new pages after both writers return.

## Route

- Delegated direct: two sequential writers, five page pairs each (10 non-trivial files per writer).
  Writers run `node scripts/check-copy.mjs` and vendor five heroes each.
- Writers may not touch `astro.config.mjs`, `scripts/check-i18n.mjs`, `odd/tasks/content-pages.md`,
  `PLAN.md` or run `npm run build`. Route registration, the checklist and the gates stay with the
  parent.
- Inline: route registration, cross-links, per-page commits, the two duplicate-hero replacements,
  final `npm run verify`, docs.

## Delivery — one commit per page

| Commit | Contents | Message |
| --- | --- | --- |
| 1–10 | ES md + EN md + hero + its two checklist rows marked | `feat(content): add <es-slug> guide pair` |
| 11 | 10 pairs in `ROUTE_PAIRS`, `PAGES`, `ROUTES` | `chore(content): register batch 17 routes` |
| 12 | this file, session handoff, `PLAN.md` | `docs: record content library batch 17` |

Each content commit is a passive unit. Route registration is the executable change and its own
commit, which keeps the native review candidate bounded.

Forecast: about 1,700 authored lines for the ten pairs plus their heroes. Delivery is direct work-unit
commits to `main` under the owner's standing authorization (AGENTS.md); no PR chain applies.

## Checklist rule

Every page commit marks its `ES` and `EN` rows in `odd/tasks/content-pages.md` (and the copy-pass log)
before the commit, so the checklist never lags the work.

## Tasks

- [x] 1. Writer A — pages 1–5 (ES + EN copy, 5 heroes), `check:copy` green. Evidence: 8,670/8,670
      (baseline 8,415 + 5 × 51); heroes 155–330 KB, byte-unique and dHash ≥18 against the 165
      existing files; 36 internal links resolve; 0 em dashes in the ten files.
- [x] 2. Writer B — pages 6–10 (ES + EN copy, 5 heroes), `check:copy` green. Evidence: 8,925/8,925
      (8,670 + 5 × 51); heroes 107–285 KB; 40 internal links.
- [x] 3. Parent — verify hero uniqueness by SHA-256 and by source. Found and replaced four duplicates:
      `superseries` (same photo as `8-repeticiones-entrenando`), the byte-identical triple
      (`escoger-actividad-en-tu-vuelta-al-gimnasio`, `jalones-frontales-brazos-rectos`) and
      `sentadilla-sin-lesiones` (same photo as `rutina-espalda-amplitud-densidad`). After the fix, no
      pair of the 175 heroes scores dHash 0.
- [x] 4. Parent — cross-links among the ten new pages, in both locales: 16 per locale, one per target,
      no duplicate of a pre-existing link.
- [x] 5. Parent — register the 10 pairs in `ROUTE_PAIRS`, `PAGES` and `ROUTES` (`aa4ef35`).
- [x] 6. Parent — per-page commits 1–10, each with its two checklist rows and copy-log row:
      `c15c777`, `b72a26f`, `b9ce05b`, `23263c5`, `49a0855`, `a62e485`, `8aacab2`, `79d23b6`,
      `fb44ae0`, `840556d`.
- [x] 7. Parent — duplicate-hero replacement on the three legacy pages (`a5a77f1`); the `superseries`
      hero change rode with its own page commit.
- [x] 8. Parent — `npm run verify`: `check:copy` 8,925/8,925, build 366 pages, `check:i18n`
      5,766/5,766. Manual: 448 internal links resolve; 122 TOC anchors match; 0 `.md` links, 0 empty
      `#` links, 0 em dashes in the 20 sources; sitemap 362 URLs and 1,086 alternates.
- [ ] 9. Parent — record the pages in the session handoff and `PLAN.md`; commit, push, verify
       production.

## Acceptance criteria

- 10 ES + 10 EN files, one unique hero per page, no duplicate hero path.
- `check:copy` green with the new count; build includes 20 new pages; `check:i18n` green; sitemap adds
  20 URLs and 60 alternates.
- Every internal link resolves; every TOC anchor matches an H2 id; no table overflows at 390 px.
- One commit per page with the ES file, the EN file, the hero and the two marked checklist rows.
- No page contradicts another on static stretching, supersets or forced reps.

## Verification

```powershell
npm run check:copy
npm run build
npm run check:i18n
npm run verify
```

Test-first exception: prose and images have no runnable deterministic RED; `check:copy`, the build,
`check:i18n` and the manual structural checks are the functional verification.

## Notes

- Wikimedia Commons rate-limits the Action API; leave 4–10 s between calls.
- `check:copy` compares hero paths, not bytes: hash every new hero and compare the Commons source
  file, because a different crop of the same photo has already slipped through twice.
- Known approximations are acceptable when the `alt` describes what is actually shown.
- Archive typos to fix, not transcribe: "Habrás oido", "despúes", "esta caliente", "crecimiento
  constate", "una de las consecuencia", "los aburridas", "Vigila como", "mirá".
- The AEKE archive converts 0.31 m² to 3.2 sq ft; the accurate figure is 3.34. The page keeps the
  manufacturer's number and is not corrected, because it is attributed.

## Progress and evidence

| # | Page | Files | Hero | check:copy | Commit |
| --- | --- | --- | --- | ---: | --- |
| 1 | `series-gigantes` | ES + EN | 330 KB · CC BY 2.0 | 8,466 | `c15c777` |
| 2 | `memoria-muscular-que-es-como-funciona` | ES + EN | 226 KB · CC BY 2.0 | 8,517 | `b72a26f` |
| 3 | `aeke-s1-pro-entrenamiento-domestico-con-ia` | ES + EN | 155 KB · CC BY 2.0 | 8,568 | `b9ce05b` |
| 4 | `mejores-ejercicios-en-maquina-de-musculacion` | ES + EN | 235 KB · CC BY 2.0 | 8,619 | `23263c5` |
| 5 | `entrenamiento-funcional` | ES + EN | 206 KB · public domain | 8,670 | `49a0855` |
| 6 | `calentamiento-y-estiramientos` | ES + EN | 285 KB · CC BY 2.0 | 8,721 | `a62e485` |
| 7 | `como-aplicar-los-beneficios-del-yoga-al-culturismo` | ES + EN | 253 KB · CC BY-SA 4.0 | 8,772 | `8aacab2` |
| 8 | `superseries` | ES + EN | 376 KB · public domain | 8,823 | `79d23b6` |
| 9 | `principios-weider` | ES + EN | 272 KB · public domain | 8,874 | `fb44ae0` |
| 10 | `repeticiones-forzadas` | ES + EN | 252 KB · public domain | 8,925 | `840556d` |

## Verification observed on 2026-11-14

| Check | Result |
| --- | --- |
| `npm run check:copy` | **8,925/8,925** |
| `npm run build` | **366 pages** (346 + 20) |
| `npm run check:i18n` | **5,766/5,766** |
| `dist/sitemap-0.xml` | **362 URLs**, 1,086 `hreflang` alternates |
| Internal links on the 20 built pages | **448**, all resolve |
| `.md` links · empty `#` links · em dashes in sources | 0 · 0 · 0 |
| TOC anchors vs heading ids | **122/122** match |
| Tables | 10 `<table>` elements: 2 routine in giant sets, 2 text in functional, 1 text in supersets, per locale |
| Hero duplicates (dHash ≤ 10 across 175) | 4 pairs before the fix, 0 at distance 0 after it; 4 suspected pre-existing pairs at distance 1–9 documented in `PLAN.md` |
| Article counts | 175 ES, 175 EN, 175 hero directories |

## Native review assessment (2026-11-14)

RDD is `on` (global scope). Read-only `gentle-ai review assess` with the untracked mockups excluded
(`--untracked-scope exclude`, inventory `sha256:d3c062bf…fb22525e`):

| Range | Risk | Paths / lines | `review_due` | Reason |
| --- | --- | ---: | --- | --- |
| `04821a5..HEAD` (batches 16 and 17 content, routes, docs) | medium | 75 / 4,608 | false | `under_budget` |

No native review was started: the provider reports the candidate under the slice budget, so no consent
envelope and no lineage.

## Notes for the next batch

- Next 10 starts at `/repeticiones-parciales/`.
- The library still has three suspected duplicate heroes from earlier batches (same author, dHash
  1–5). Confirm by source before publishing new photos from that author.
- Wikimedia Commons rejects thumbnail widths that are not on its allowed list; `iiurlwidth` returns the
  nearest allowed size.
- The AEKE page keeps the manufacturer's 0.31 m² = 3.2 sq ft figure, which is inaccurate (3.34). It is
  attributed, not asserted.
