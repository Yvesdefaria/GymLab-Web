# Content library — batch 13

Started: 2026-11-12. Continues the library from 125/792 (`odd/tasks/content-pages.md`).

Objective: publish the next 10 bilingual guide pairs (20 files, 10 unique heroes), register the
routes, keep every gate green, mark each page done in the checklist as it commits, and land one commit
per page with its evidence here.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Source archive: `C:\Users\Yves De Faria\Desktop\cambiatufisico.com\content\entrenamiento\`

## Scope

| # | ES slug | EN slug | Archive source | Primary keyword | Commit |
| --- | --- | --- | --- | --- | --- |
| 1 | `como-entrenar-con-altas-temperaturas` | `training-in-hot-weather` | `musculacion/como-entrenar-con-altas-temperaturas.md` | entrenar con altas temperaturas | `991c76c` |
| 2 | `multipower-para-superar-puntos-de-estancamiento` | `smith-machine-sticking-points` | `musculacion/multipower-para-superar-puntos-de-estancamiento.md` | multipower puntos de estancamiento | `7bb0e05` |
| 3 | `rango-completo-de-movimiento-rom` | `range-of-motion-training` | `musculacion/rango-completo-de-movimiento-rom.md` | rango completo de movimiento | `a4c7a4f` |
| 4 | `dolor-crecimiento-muscular` | `muscle-soreness-and-growth` | `musculacion/dolor-crecimiento-muscular.md` | dolor muscular y crecimiento | `ea384e8` |
| 5 | `como-respirar-mientras-entrenamos` | `breathing-while-lifting` | `musculacion/como-respirar-mientras-entrenamos.md` | respirar mientras entrenas | `31164d6` |
| 6 | `menos-grasa-mas-musculo` | `lose-fat-gain-muscle` | `musculacion/menos-grasa-mas-musculo.md` | perder grasa y ganar músculo | `002501f` |
| 7 | `entrenamiento-con-companero` | `training-partner-benefits` | `musculacion/entrenamiento-con-companero.md` | entrenar con un compañero | `662184d` |
| 8 | `guia-de-entrenamiento-hitt` | `hiit-training-guide` | `ejercicio-cardiovascular/guia-de-entrenamiento-hitt.md` | entrenamiento HIIT | `c7130ba` |
| 9 | `rutina-entrenamiento-natacion` | `swimming-workout-routine` | `ejercicio-cardiovascular/rutina-entrenamiento-natacion.md` | rutina de natación | `b63ce87` |
| 10 | `como-disfrutar-del-running-y-conseguir-acabar-cualquier-carrera-popular` | `enjoy-running-popular-races` | `ejercicio-cardiovascular/como-disfrutar-del-running-y-conseguir-acabar-cualquier-carrera-popular.md` | disfrutar del running | `3aae5c7` |

Pages 1-7 belong to block `Entrenamiento` / section `Musculación` (`Training` / `Bodybuilding` in
English). Pages 8-10 belong to block `Entrenamiento` / section `Ejercicio Cardiovascular`
(`Training` / `Cardio` in English, matching `src/data/guides-nav.ts`). No slug or route key collides
with the 125 built pages.

## SEO brief per page

The copy rules live in the contract §6. Per-page intent, so the writers do not improvise keywords:

1. **`como-entrenar-con-altas-temperaturas`** — intent: train safely when the heat rises. H1 ES
   "Cómo entrenar con altas temperaturas"; H1 EN "How to train in hot weather". H2s: quién corre más
   riesgo (calambres, agotamiento, golpe de calor); cómo mantenerte fresco; previsión del tiempo; ropa
   y humedad; hidratación y signos de deshidratación; comidas ligeras; seguridad. Keep every symptom
   and warning from the archive. Links: `errores-entrenamiento`, `tiempo-de-descanso-entre-series`,
   `entrenamiento-oxigenacion`.
2. **`multipower-para-superar-puntos-de-estancamiento`** — intent: use the Smith machine to break
   plateaus. H1 ES "Multipower para superar puntos de estancamiento"; H1 EN "Smith machine training
   to break through plateaus". H2s: press de banca; sentadilla; peso muerto; cuándo usar el multipower
   y cómo progresar. Preserve the exercise order, cues and warnings. Links: `estancamiento-muscular`,
   `repeticiones-entrenamiento`, `tecnica-ejecucion-ejercicios`.
3. **`rango-completo-de-movimiento-rom`** — intent: when full range of motion helps and when it does
   not. H1 ES "Rango completo de movimiento (ROM): cuándo utilizarlo"; H1 EN "Range of motion: when to
   use a full ROM". H2s: qué es el rango de movimiento; el rango adecuado por ejercicio; reglas del
   ROM; cuándo acortarlo y por qué. Keep the archive's rules and exceptions. Links:
   `tecnica-ejecucion-ejercicios`, `repeticiones-entrenamiento`, `estiramientos`.
4. **`dolor-crecimiento-muscular`** — intent: soreness is not a growth signal. H1 ES "Dolor muscular no
   implica crecimiento muscular"; H1 EN "Muscle soreness does not mean muscle growth". H2s: qué es el
   dolor muscular; por qué no mide el estímulo; qué indica realmente el progreso; cómo entrenar sin
   buscar agujetas. Keep the archive's argument, drop nothing. Links: `fallo-muscular`,
   `regeneracion-muscular`, `volumen-de-entrenamiento`.
5. **`como-respirar-mientras-entrenamos`** — intent: breathing pattern during a lift. H1 ES "Cómo
   respirar durante los ejercicios de gimnasio"; H1 EN "How to breathe while lifting weights". H2s:
   cómo inspirar y espirar; la respiración en cada fase; ejemplo práctico con una serie; errores
   comunes; cuándo no aguantar la respiración. Preserve the practical examples. Links:
   `tecnica-ejecucion-ejercicios`, `fallo-muscular`, `tiempo-de-descanso-entre-series`.
6. **`menos-grasa-mas-musculo`** — intent: body recomposition, in order. H1 ES "Cómo ganar músculo y
   perder grasa al mismo tiempo"; H1 EN "How to lose fat and gain muscle at the same time". H2s: el
   entrenamiento como primer paso; el descanso; la nutrición; cómo minimizar la grasa corporal;
   expectativas realistas y errores. Keep every number and meal rule from the archive without
   inventing studies. Links: `ganar-masa-muscular`, `calcular-calorias`, `semana-de-descarga`.
7. **`entrenamiento-con-companero`** — intent: why and how to train with a partner. H1 ES "Entrenamiento
   con un compañero: ventajas y cómo aprovecharlo"; H1 EN "Training with a partner: benefits and how
   to make it work". H2s: motivación; entrenamiento más entretenido; ayuda para mover más peso; ayuda
   al coger el peso; compartir experiencias y conocimiento; cómo elegir compañero. Links:
   `rutinas-espalda`, `tu-primer-dia-en-el-gimnasio-como-superarlo-y-querer-volver`,
   `normas-para-hacer-del-gimnasio-un-lugar-mejor-y-sentirte-agusto`.
8. **`guia-de-entrenamiento-hitt`** — intent: what HIIT is, what it is not, and how to program it. H1 ES
   "Guía de entrenamiento HIIT: qué es y cómo programarlo"; H1 EN "HIIT training guide: what it is and
   how to program it". H2s: qué es el HIIT y qué no lo es; beneficios reales; variables clave (ratio
   trabajo-descanso, intensidad); rutinas de ejemplo por nivel; el método Tabata; errores típicos;
   preguntas frecuentes. The archive has a duplicated FAQ heading; keep one. Preserve the six routines'
   intervals and the Tabata correction. Links: `entrenamiento-balistico`, `fallo-muscular`,
   `semana-de-descarga`.
9. **`rutina-entrenamiento-natacion`** — intent: a three-day swimming plan plus its nutrition. H1 ES
   "Rutina de natación de 3 días a la semana"; H1 EN "Three-day swimming workout routine". H2s: plan de
   tres días (crol; espalda y mariposa; braza y estilos); la dieta de la rutina; antes, durante y
   después de la sesión; suplementación; cómo optimizar el entrenamiento. Preserve the distances,
   series and styles. Links: `planificacion-del-entrenamiento`, `calcular-calorias`,
   `semana-de-descarga`.
10. **`como-disfrutar-del-running-y-conseguir-acabar-cualquier-carrera-popular`** — intent: finish a
    popular race without hating running. H1 ES "Cómo disfrutar del running y acabar cualquier carrera
    popular"; H1 EN "How to enjoy running and finish any popular race". H2s: cuánto entrenar; duración
    de las sesiones; ritmo adecuado; fuerza y tren superior; abdominales; ropa para el frío; qué mirar
    en el equipamiento; plan práctico. Preserve the weekly structure and paces. Links:
    `planificacion-del-entrenamiento`, `estiramientos`, `prueba-potencia-anaerobia`.

Every page: title 45–60 with the keyword first, description 150–160 with keyword and promise, H1 the
query phrase, keyword in the first lead sentence, 3–6 natural mentions, 2–4 internal links with
descriptive anchors, zero invented facts. The parent adds the cross-links among the ten new pages
after both writers return.

## Route

- Delegated direct: two sequential writers, five page pairs each (10 non-trivial files per writer).
  Writers run `node scripts/check-copy.mjs` and vendor five heroes each.
- Writers may not touch `astro.config.mjs`, `scripts/check-i18n.mjs`, `odd/tasks/content-pages.md`,
  `PLAN.md` or run `npm run build`. Route registration, the checklist and the gates stay with the
  parent.
- Inline: route registration, cross-links, per-page commits, final `npm run verify`, docs.

## Delivery — one commit per page

| Commit | Contents | Message |
| --- | --- | --- |
| 1–10 | ES md + EN md + hero + its two checklist rows marked | `feat(content): add <es-slug> guide pair` |
| 11 | 10 pairs in `ROUTE_PAIRS`, `PAGES`, `ROUTES` | `chore(content): register batch 13 routes` |
| 12 | this file, session handoff, `PLAN.md` | `docs: record content library batch 13` |

Each content commit is a passive unit. Route registration is the executable change and its own
commit, which keeps the native review candidate bounded.

Forecast: about 1,700 authored lines across the 10 pairs. Delivery is direct work-unit commits to
`main` under the owner's standing authorization (AGENTS.md); no PR chain applies.

## Checklist rule

Every page commit marks its `ES` and `EN` rows in `odd/tasks/content-pages.md` (and the copy-pass log)
before the commit, so the checklist never lags the work.

## Tasks

- [x] 1. Writer A — pages 1–5 (ES + EN copy, 5 unique heroes), `check:copy` green. Evidence:
      6,630/6,630 (baseline 6,375 + 255); heroes 98–285 KB, five unique hashes, all 1280×720 JPEG.
- [x] 2. Writer B — pages 6–10 (ES + EN copy, 5 unique heroes), `check:copy` green. Evidence:
      6,885/6,885; heroes 162–389 KB, five unique hashes, all 1280×853/875 JPEG.
- [x] 3. Parent — cross-links among the ten new pages, in both locales: heat ↔ breathing,
      breathing → HIIT, Smith machine ↔ ROM, partner → Smith machine, recomp → HIIT and swimming,
      HIIT → swimming and running, swimming → HIIT and recomp, running → HIIT.
- [x] 4. Parent — register the 10 pairs in `ROUTE_PAIRS`, `PAGES` and `ROUTES` (`41c0b83`).
- [x] 5. Parent — per-page commits 1–10, each with its two checklist rows and copy-log row:
      `991c76c`, `7bb0e05`, `a4c7a4f`, `ea384e8`, `31164d6`, `002501f`, `662184d`, `c7130ba`,
      `b63ce87`, `3aae5c7`.
- [x] 6. Parent — `npm run verify`: `check:copy` 6,885/6,885, build 286 pages, `check:i18n`
      4,526/4,526.
- [x] 7. Parent — manual checks: 86 internal links across the 20 built pages resolve; 110 TOC anchors
      match their heading ids; 0 `.md` links, 0 `#` links, 0 em dashes; 3 routine tables (swimming,
      three columns and footnotes outside); sitemap 282 URLs and 846 alternates.
- [ ] 8. Parent — record the pages in the session handoff and `PLAN.md`; commit and push; verify
      production.

## Acceptance criteria

- 10 ES + 10 EN files, one unique hero per page, no duplicate hero path.
- `check:copy` green with the new count; build includes 20 new pages; `check:i18n` green; sitemap adds
  20 URLs and 60 alternates.
- Every internal link resolves; every TOC anchor matches an H2 id; no table overflows at 390 px.
- One commit per page with the ES file, the EN file, the hero and the two marked checklist rows.

## Verification

```powershell
npm run check:copy
npm run build
npm run check:i18n
npm run verify
```

Test-first exception: prose and images have no runnable deterministic RED; `check:copy`, the build,
`check:i18n` and the manual structural checks are the functional verification.

Observed on 2026-11-12:

| Check | Result |
| --- | --- |
| `npm run check:copy` | **6,885/6,885** |
| `npm run build` | **286 pages** (266 + 20) |
| `npm run check:i18n` | **4,526/4,526** |
| `dist/sitemap-0.xml` | **282 URLs**, 846 `hreflang` alternates |
| Internal links on the 20 built pages | **86**, all resolve |
| `.md` links · `#` links · em dashes | 0 · 0 · 0 |
| TOC anchors vs heading ids | **110/110** match |
| Article counts | 135 ES, 135 EN, 135 hero directories |
| Routine tables | 3 (swimming), three columns, footnotes after the table |
| New hero hashes | 10 unique, 98–389 KB, all JPEG |

## Notes for the next batch

- The HIIT archive table had six columns; the text-table CSS only defines three (24/32/44), so the six
  routines ship as H3 blocks with Effort / Rest / Rounds / Total bullets. No interval was lost.
- Swimming archive conflict: day 3 lists four sets in the Sets column but its detail says two series.
  The page keeps four sets and drops the contradictory phrase.
- The archive's swimming day 3 kick row named a butterfly kick for a breaststroke set; the page uses
  breaststroke kick.
- Pre-existing hero defect found: `ejercicios-en-polea-ventajas`, `escoger-actividad-en-tu-vuelta-al-gimnasio`
  and `jalones-frontales-brazos-rectos` share a byte-identical `hero.jpg`. `check:copy` only compares
  paths. Replace two of them in a later batch.
- Wikimedia Commons rate-limits the Action API; leave 4–10 s between calls.

## Native review assessment (2026-11-12)

RDD is `on` (global scope). Read-only `gentle-ai review assess` with the untracked mockups excluded
(`--untracked-scope exclude`, inventory `sha256:d9f5a489…321b1f7`):

| Range | Risk | Paths / lines | `review_due` | Reason |
| --- | --- | --- | --- | --- |
| `3da6079..HEAD` (batch 13 content + routes) | medium | 33 / 1,985 | false | `under_budget` |

No native review was started: the provider reports the candidate under the slice budget, so no consent
envelope and no lineage. The batch 10 transaction `review-bf1585fd7f8b1c1f` remains open and
untouched; it is a different lineage.

## Progress and evidence

| # | Page | Files | Hero | check:copy | Commit |
| --- | --- | --- | --- | --- | --- |
| 1 | `como-entrenar-con-altas-temperaturas` | ES + EN | 98 KB · public domain | pass | `991c76c` |
| 2 | `multipower-para-superar-puntos-de-estancamiento` | ES + EN | 180 KB · CC0 | pass | `7bb0e05` |
| 3 | `rango-completo-de-movimiento-rom` | ES + EN | 124 KB · CC BY-SA 4.0 | pass | `a4c7a4f` |
| 4 | `dolor-crecimiento-muscular` | ES + EN | 285 KB · CC BY 2.0 | pass | `ea384e8` |
| 5 | `como-respirar-mientras-entrenamos` | ES + EN | 115 KB · public domain | pass | `31164d6` |
| 6 | `menos-grasa-mas-musculo` | ES + EN | 175 KB · public domain | pass | `002501f` |
| 7 | `entrenamiento-con-companero` | ES + EN | 162 KB · public domain | pass | `662184d` |
| 8 | `guia-de-entrenamiento-hitt` | ES + EN | 178 KB · public domain | pass | `c7130ba` |
| 9 | `rutina-entrenamiento-natacion` | ES + EN | 217 KB · public domain | pass | `b63ce87` |
| 10 | `como-disfrutar-del-running-…` | ES + EN | 389 KB · CC0 | pass | `3aae5c7` |
