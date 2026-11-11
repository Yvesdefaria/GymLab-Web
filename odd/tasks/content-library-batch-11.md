# Content library — batch 11

Started: 2026-11-11. Continues the library from 105/792 (`odd/tasks/content-pages.md`).

Objective: publish the next 10 bilingual guide pairs (20 files, 10 unique heroes) with the strongest
on-page SEO the contract allows, register the routes, keep every gate green, and land **one commit per
page** with its evidence recorded here.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Source archive: `C:\Users\Yves De Faria\Desktop\cambiatufisico.com\content\entrenamiento\musculacion\`

## Scope

| # | ES slug | EN slug | Archive source | Primary keyword | Commit |
| --- | --- | --- | --- | --- | --- |
| 1 | `elegir-gimnasio` | `choosing-a-gym` | `elegir-gimnasio.md` | cómo elegir un gimnasio | `8ed157f` |
| 2 | `metodo-bulgaro` | `bulgarian-method` | `metodo-bulgaro.md` | método búlgaro | `0faecc9` |
| 3 | `repeticion-maxima` | `calculate-one-rep-max` | `repeticion-maxima.md` | repetición máxima (RM) | `2705cea` |
| 4 | `tipos-somaticos-endomorfos-ectomorfos-y-mesomorfos` | `somatotypes` | `tipos-somaticos-endomorfos-ectomorfos-y-mesomorfos.md` | tipos somáticos | `4c508ca` |
| 5 | `tipos-de-fibras-musculares` | `muscle-fiber-types` | `tipos-de-fibras-musculares.md` | tipos de fibras musculares | `50707f7` |
| 6 | `desafio-100-flexiones` | `100-push-up-challenge` | `desafio-100-flexiones.md` | 100 flexiones seguidas | `8b4e93c` |
| 7 | `errores-entrenamiento` | `common-training-mistakes` | `errores-entrenamiento.md` | errores de entrenamiento | `2185f4d` |
| 8 | `tests-evaluar-estado-fisico` | `fitness-tests` | `tests-evaluar-estado-fisico.md` | tests para evaluar el estado físico | `bf494a3` |
| 9 | `entrenamiento-oxigenacion` | `muscle-oxygenation-training` | `entrenamiento-oxigenacion.md` | entrenamiento de oxigenación muscular | `fee2797` |
| 10 | `entrenamiento-balistico` | `ballistic-training` | `entrenamiento-balistico.md` | entrenamiento balístico | `6285c91` |

All ten belong to block `Entrenamiento` / section `Musculación` (`Training` / `Bodybuilding` in
English). No slug or route key collides with the 105 built pages.

## SEO brief per page

The copy rules live in the contract §6. This batch adds the specific intent, so the writers do not
improvise keywords:

1. **`elegir-gimnasio`** — intent: comparison and decision. H1 `Cómo elegir un gimnasio`. H2s group the
   13 source factors (precio y matrícula, horarios y cercanía, instalaciones y material, higiene y
   orden, ambiente y asesoramiento, otras actividades) plus the A/B/C scoring system as a text table
   and "Cómo puntuar tu gimnasio". Links: `tu-primer-dia-en-el-gimnasio-como-superarlo-y-querer-volver`,
   `cuanto-peso-cargar-en-el-gimnasio`, `rutinas-espalda`.
2. **`metodo-bulgaro`** — intent: what it is and how to apply it. H2s: qué es, origen, método
   tradicional, método de Abadjiev, cómo aplicarlo, para quién sirve. Links: `rutinas-espalda`,
   `volumen-de-entrenamiento`, `periodizacion-entrenamiento`.
3. **`repeticion-maxima`** — intent: calculation. H2s: qué es la RM, cómo calcularla paso a paso,
   calculadora de RM (link to `/es/calculadora-1rm/` and `/en/one-rep-max-calculator/`), ejemplo de
   5 repeticiones al 75 %, cuándo medirla, riesgos. A percentage table is allowed only if generated
   from the site's own Brzycki implementation in `src/lib/calculators.ts`; no second formula. Links:
   `repeticiones-entrenamiento`, `fallo-muscular`, `principio-adaptacion-sobrecarga-progresiva`.
4. **`tipos-somaticos-endomorfos-ectomorfos-y-mesomorfos`** — intent: identification and training by
   type. H2s: qué son, ectomorfo, mesomorfo, endomorfo, tipos combinados, cómo entrenar según tu tipo.
   Links: `volumen-de-entrenamiento`, `periodizacion-entrenamiento`, `calcular-calorias`,
   `calculadora-imc`.
5. **`tipos-de-fibras-musculares`** — intent: physiology applied to training. H2s: qué es una fibra,
   tensión muscular y unidades motoras, fibras tipo I, tipo IIa, tipo IIb, reclutamiento, cómo
   entrenar según la fibra. Links: `repeticiones-entrenamiento`, `fallo-muscular`,
   `volumen-de-entrenamiento`.
6. **`desafio-100-flexiones`** — intent: plan to follow. H2s: el plan de 6 semanas, semana 1 a 6, la
   prueba final, cómo progresar si no llegas, errores que te frenan. Weekly sets and reps as routine
   tables (3 columns). Links: `fallo-muscular`, `volumen-de-entrenamiento`,
   `tu-primer-dia-en-el-gimnasio-como-superarlo-y-querer-volver`.
7. **`errores-entrenamiento`** — intent: diagnose and fix. H2s by error family, then "otros errores
   frecuentes" and "cómo corregir tu entrenamiento". Links: `fallo-muscular`,
   `principio-adaptacion-sobrecarga-progresiva`, `tiempo-de-descanso-entre-series`,
   `semana-de-descarga`.
8. **`tests-evaluar-estado-fisico`** — intent: measure. H2s: qué mide un test, condiciones para que
   sea válido, tests de resistencia, tests de fuerza, flexibilidad y elasticidad, cómo registrar los
   resultados. Links: `calculadora-imc`, `calcular-calorias`, `entrenamiento-oxigenacion`.
9. **`entrenamiento-oxigenacion`** — thin source (257 words): build the complete guide from its facts
   (what it is, why a second consecutive day, 3–4 sets of 25–30 reps, exercises per muscle group) and
   link to the calculator/routine pages. H2s: qué es, por qué funciona, cómo es la sesión, ejercicios
   por grupo muscular, cuándo programarla, qué no es. Links: `regeneracion-muscular`,
   `fallo-muscular`, `entrenamiento-balistico`.
10. **`entrenamiento-balistico`** — intent: what it is and how to program it. H2s: qué es, ejemplos
    (flexiones pliométricas, sentadillas con salto), cuánto y cómo, precauciones. Links:
    `prueba-potencia-anaerobia`, `entrenamiento-oxigenacion`, `repeticiones-entrenamiento`.

Cross-links between the new pages: writer B may link backwards to pages 1–5; the parent adds 1–2
forward links in pages 1–5 before the per-page commits.

Every page: title 45–60 with the keyword first, description 150–160 with keyword and promise, H1 the
query phrase, keyword in the first lead sentence, 3–6 natural mentions, 2–4 internal links with
descriptive anchors, FAQ block only where the source supports the answers, zero invented facts.

## Route

- Delegated direct: two sequential writers, five page pairs each (10 non-trivial files per writer).
  Writers run `node scripts/check-copy.mjs` and vendor five heroes each.
- Writers may not touch `astro.config.mjs`, `scripts/check-i18n.mjs`, `odd/tasks/content-pages.md`,
  `PLAN.md` or run `npm run build`. Route registration and the gates stay with the parent.
- Inline: route registration, cross-links, per-page commits, final `npm run verify`, docs.

## Delivery — one commit per page

The owner asked for one commit per page and this file is the flow record.

| Commit | Contents | Message |
| --- | --- | --- |
| 1–10 | ES md + EN md + hero for one page | `feat(content): add <es-slug> guide pair` |
| 11 | 10 pairs in `ROUTE_PAIRS`, `PAGES`, `ROUTES` (`c67c753`) | `chore(content): register batch 11 routes` |
| 12 | `content-pages.md`, this file, session handoff, `PLAN.md` | `docs: record content library batch 11` |

Each content commit is a passive unit (markdown and an image). Route registration is the executable
change and its own commit, which keeps the native review candidate bounded; the 10-page batch as a
single candidate was already refused once with `lens_context_budget_exceeded` (batch 10).

Forecast: about 2,200 authored lines across the 10 pairs. Delivery is direct work-unit commits to
`main` under the owner's standing authorization (AGENTS.md); no PR chain applies.

## Tasks

- [x] 1. Writer A — pages 1–5 (ES + EN copy, 5 unique heroes), `check:copy` green. Evidence:
      5,610/5,610 copy checks; 36 internal links (18 ES, 18 EN) resolve; 0 em dashes, 0 `#` links,
      0 `.md` links. Heroes: CC BY 4.0 (x3), CC BY-SA 4.0, public domain; 44–264 KB; unique hashes
      against the 105 existing heroes.
- [x] 2. Writer B — pages 6–10 (ES + EN copy, 5 unique heroes), `check:copy` green. Evidence:
      5,865/5,865 copy checks; 32 internal links resolve; 0 em dashes, 0 `#` links, 0 `.md` links.
      Heroes: public domain (x2), CC BY 2.0, CC BY 3.0, CC0; 73–260 KB; unique hashes.
- [x] 3. Parent — cross-links from pages 1–5 to pages 6–10: `elegir-gimnasio` → `errores-entrenamiento`,
      `tipos-somaticos-…` → `tests-evaluar-estado-fisico`, `tipos-de-fibras-musculares` →
      `entrenamiento-balistico`, in both locales.
- [x] 4. Parent — register the 10 pairs in `ROUTE_PAIRS`, `PAGES` and `ROUTES` (`c67c753`).
- [x] 5. Parent — per-page commits 1–10: `8ed157f`, `0faecc9`, `2705cea`, `4c508ca`, `50707f7`,
      `8b4e93c`, `2185f4d`, `bf494a3`, `fee2797`, `6285c91`.
- [x] 6. Parent — `npm run verify`: `check:copy` 5,865/5,865, build 246 pages, `check:i18n`
      3,906/3,906.
- [x] 7. Parent — manual checks: 214 internal links across the 20 built pages resolve; 0 `.md` links;
      0 em dashes; 120 TOC anchors match their H2 ids; 36 routine table rows all 3 columns; sitemap
      242 URLs and 726 alternates.
- [ ] 8. Parent — record the pages in `content-pages.md`, session handoff and `PLAN.md`; commit and
      push.

## Acceptance criteria

- 10 ES + 10 EN files, one unique hero per page, no duplicate hero path.
- `check:copy` green with the new count; build includes 20 new pages; `check:i18n` green with its new
  assertion count; sitemap adds 20 URLs and 60 alternates.
- Every internal link resolves to a built page; every TOC anchor matches an H2 id.
- One commit per page with the ES file, the EN file, the hero and the evidence line below.

## Verification

```powershell
npm run check:copy
npm run build
npm run check:i18n
npm run verify
```

Observed on 2026-11-11:

| Check | Result |
| --- | --- |
| `npm run check:copy` | **5,865/5,865** |
| `npm run build` | **246 pages** (226 + 20) |
| `npm run check:i18n` | **3,906/3,906** |
| `dist/sitemap-0.xml` | **242 URLs**, 726 `hreflang` alternates |
| Internal links on the 20 built pages | **214**, all resolve |
| `.md` links · `#` links · em dashes | 0 · 0 · 0 |
| TOC anchors vs heading ids | **120/120** match |
| Routine table rows | 36, all 3 columns |
| Article counts | 115 ES, 115 EN, 115 hero directories |

Test-first exception: prose and images have no runnable deterministic RED; `check:copy`, the build,
`check:i18n` and the manual structural checks are the functional verification.

Correction to the archive: the push-up article printed a six-week total of 2,676 reps and 17,000
calories. The plan's own weekly tables sum to 2,034 across three sessions a week, and the calorie
figure has no source. Both files now say "more than 2,000 push-ups"; the calorie claim was dropped.

## Progress and evidence

| # | Page | Files | Hero | check:copy | Commit |
| --- | --- | --- | --- | --- | --- |
| 1 | `elegir-gimnasio` | ES + EN | 230 KB · CC BY 4.0 | pass | `8ed157f` |
| 2 | `metodo-bulgaro` | ES + EN | 264 KB · CC BY 4.0 | pass | `0faecc9` |
| 3 | `repeticion-maxima` | ES + EN | 147 KB · public domain | pass | `2705cea` |
| 4 | `tipos-somaticos-…` | ES + EN | 44 KB · CC BY-SA 4.0 | pass | `4c508ca` |
| 5 | `tipos-de-fibras-musculares` | ES + EN | 120 KB · CC BY 4.0 | pass | `50707f7` |
| 6 | `desafio-100-flexiones` | ES + EN | 261 KB · public domain | pass | `8b4e93c` |
| 7 | `errores-entrenamiento` | ES + EN | 186 KB · public domain | pass | `2185f4d` |
| 8 | `tests-evaluar-estado-fisico` | ES + EN | 255 KB · CC BY 2.0 | pass | `bf494a3` |
| 9 | `entrenamiento-oxigenacion` | ES + EN | 132 KB · CC BY 3.0 | pass | `fee2797` |
| 10 | `entrenamiento-balistico` | ES + EN | 73 KB · CC0 | pass | `6285c91` |

Decision: the English fibre article uses the US spelling `fiber` (45 occurrences) because the
assigned keyword and its slug are `muscle-fiber-types`; the rest of the library mixes British and
American spellings (`fibre` but `training-periodization`), so this is a keyword choice, not a defect.

## Native review assessment (2026-11-11)

RDD is `on` (global scope). Read-only `gentle-ai review assess` with the untracked mockups excluded
(`--untracked-scope=exclude`, inventory `sha256:5d53f361…252dab`):

| Range | Risk | Paths / lines | `review_due` | Reason |
| --- | --- | --- | --- | --- |
| `508bbe3..HEAD` (batch 11) | medium | 36 / 2,933 | false | `under_budget` |
| `6285c91..HEAD` (routes + docs) | medium | 6 / 417 | false | `under_budget` |
| `c67c753..HEAD` (docs) | passive | 4 / 371 | false | `passive` |

No native review was started for this batch: the provider reports the candidate under the slice
budget, so no consent envelope and no lineage. The batch 10 transaction `review-bf1585fd7f8b1c1f`
remains open and untouched; it is a different lineage.

## Notes for the next batch

- Batch 10 lesson: `ROUTES` in `scripts/check-i18n.mjs` is keyed; a colliding key overwrites the
  older pair and crashes the gate. All ten keys in this batch were checked free.
- Heroes are Wikimedia Commons files at `?width=1280`, under 500 KB, one unique path per ES article;
  the EN file reuses its ES twin's path.
