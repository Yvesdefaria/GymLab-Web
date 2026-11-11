# Content library — batch 12

Started: 2026-11-11. Continues the library from 115/792 (`odd/tasks/content-pages.md`).

Objective: publish the next 10 bilingual guide pairs (20 files, 10 unique heroes), register the
routes, keep every gate green, mark each page done in the checklist as it commits, and land one commit
per page with its evidence here.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Source archive: `C:\Users\Yves De Faria\Desktop\cambiatufisico.com\content\entrenamiento\musculacion\`

## Scope

| # | ES slug | EN slug | Archive source | Primary keyword | Commit |
| --- | --- | --- | --- | --- | --- |
| 1 | `mitos-estupidos-debes-entrenar-cada-musculo-solo-una-vez-por-semana` | `training-frequency-myth` | `mitos-estupidos-…md` | frecuencia de entrenamiento | `8d4b84f` |
| 2 | `dias-entrenamiento-pesado` | `heavy-training-days` | `dias-entrenamiento-pesado.md` | días de entrenamiento pesado | `964fe79` |
| 3 | `consejos-para-crear-tu-rutina-dividida` | `split-routine-tips` | `consejos-para-crear-tu-rutina-dividida.md` | rutina dividida | `670de48` |
| 4 | `fibras-musculares-ejercicios` | `exercises-that-recruit-muscle-fibers` | `fibras-musculares-ejercicios.md` | ejercicios para estimular fibras | `9aaee48` |
| 5 | `repeticion-maxima-rutinas-volumen` | `one-rep-max-volume-training` | `repeticion-maxima-rutinas-volumen.md` | repetición máxima en volumen | `990ebb8` |
| 6 | `tecnica-ejecucion-ejercicios` | `exercise-technique` | `tecnica-ejecucion-ejercicios.md` | técnica de ejecución | `d636681` |
| 7 | `contracciones-musculares-excentrica-concentrica-isometricas` | `muscle-contractions` | `contracciones-musculares-…md` | contracciones musculares | `997a706` |
| 8 | `grandes-musculos-de-forma-natural` | `natural-muscle-growth` | `grandes-musculos-de-forma-natural.md` | músculos grandes de forma natural | `aa960cd` |
| 9 | `entrena-con-musica-para-ser-mas-fuerte-en-el-gimnasio` | `training-with-music` | `entrena-con-musica-…md` | música para entrenar | `dff0602` |
| 10 | `normas-para-hacer-del-gimnasio-un-lugar-mejor-y-sentirte-agusto` | `gym-etiquette` | `normas-para-hacer-del-gimnasio-…md` | normas del gimnasio | `d87104f` |

All ten belong to block `Entrenamiento` / section `Musculación` (`Training` / `Bodybuilding` in
English). No slug or route key collides with the 115 built pages.

## SEO brief per page

The copy rules live in the contract §6. Per-page intent, so the writers do not improvise keywords:

1. **`mitos-estupidos-…`** — intent: myth vs evidence, by Christian Thibaudeau. H1 ES "¿Debes entrenar
   cada músculo una vez por semana?"; H1 EN "Should you train each muscle once a week?". H2s: de dónde
   viene el miedo al sobreentrenamiento; qué es realmente el sobreentrenamiento; fatiga acumulada no
   es sobreentrenamiento; por qué el músculo se recupera rápido; cómo entrenar con más frecuencia sin
   saturar el sistema nervioso; cuándo aplicar la alta frecuencia. Keep the quote's argument and the
   Thibaudeau attribution. Links: `fallo-muscular`, `volumen-de-entrenamiento`,
   `principio-adaptacion-sobrecarga-progresiva`, `semana-de-descarga`.
2. **`dias-entrenamiento-pesado`** — intent: how to program heavy days. H2s: qué es un día pesado;
   hacer pesas, no solo levantarlas; el poder de los grandes kilajes; cómo incorporar los días
   pesados; recuperación y errores. Links: `principio-adaptacion-sobrecarga-progresiva`,
   `periodizacion-entrenamiento`, `semana-de-descarga`.
3. **`consejos-para-crear-tu-rutina-dividida`** — intent: build a split routine. H2s: qué es una
   rutina dividida; adáptate a tu frecuencia; define tus intenciones; corrige tus fallos; extiende tu
   rutina; añade variedad; conclusión. The source's one table follows the contract. Links:
   `rutinas-espalda`, `volumen-de-entrenamiento`, `periodizacion-entrenamiento`.
4. **`fibras-musculares-ejercicios`** — intent: exercise selection by muscle. H2s: cómo se estimulan
   las fibras; pectorales; dorsales; deltoides lateral; deltoides posterior; gemelos; femorales;
   cuádriceps; abdominales; conclusiones. Cross-link to `tipos-de-fibras-musculares`. Links:
   `tipos-de-fibras-musculares`, `repeticiones-entrenamiento`, `fallo-muscular`.
5. **`repeticion-maxima-rutinas-volumen`** — intent: loads without a 1RM test. H2s: qué es la RM y
   para qué sirve; por qué el porcentaje de RM falla en volumen; cómo elegir la carga sin 1RM; cuándo
   sí sirve la RM; cómo progresar por sensaciones. Cross-link to `repeticion-maxima` and the
   calculator. Links: `repeticion-maxima`, `repeticiones-entrenamiento`, `fallo-muscular`.
6. **`tecnica-ejecucion-ejercicios`** — intent: execution cues. H2s: por qué importa la técnica;
   prioriza los multiarticulares; velocidad y fase excéntrica; no bloquees la articulación; series
   adecuadas por grupo muscular; cómo aplicar la técnica. Facts: 10–16 sets for large groups and 6–12
   for small ones; eccentric slower than concentric; no joint lockout. Links: `fallo-muscular`,
   `volumen-de-entrenamiento`, `repeticiones-entrenamiento`.
7. **`contracciones-musculares-…`** — intent: the three contraction types. H2s: qué es una
   contracción muscular; excéntrica; concéntrica; isométrica; por qué importa la fase excéntrica;
   excéntrica y agujetas. Links: `tecnica-ejecucion-ejercicios`, `fallo-muscular`,
   `repeticiones-entrenamiento`.
8. **`grandes-musculos-de-forma-natural`** — intent: natural muscle growth. H2s: ¿se pueden tener
   músculos grandes sin dopaje?; por qué se atribuye todo al dopaje; qué separa un físico grande de
   uno natural; cómo ganar volumen de forma natural; cuánto tarda. Neutral register: drop the source's
   crude expressions, keep its argument and its mention of supplements (creatine, protein, amino
   acids) without inventing citations. Links: `volumen-de-entrenamiento`, `periodizacion-entrenamiento`,
   `calcular-calorias`.
9. **`entrena-con-musica-…`** — intent: music as a training aid. H2s: qué aporta la música; cómo
   elegir la música adecuada; llevar tu propia música al gimnasio; cómo potencia el entrenamiento;
   consejo práctico. Links: `errores-entrenamiento`, `tu-primer-dia-en-el-gimnasio-como-superarlo-y-querer-volver`,
   `tiempo-de-descanso-entre-series`.
10. **`normas-para-hacer-del-gimnasio-…`** — intent: gym etiquette. H2s: por qué importan las normas;
    deja cada cosa en su sitio; no molestes durante los ejercicios; comparte máquina; respeta el
    tiempo del cardio; la primera hora de la mañana; la zona de estiramientos; el vestuario; prueba
    nuevos gimnasios. Cross-link `elegir-gimnasio`. Links: `elegir-gimnasio`, `rutinas-espalda`,
    `tu-primer-dia-en-el-gimnasio-como-superarlo-y-querer-volver`.

Every page: title 45–60 with the keyword first, description 150–160 with keyword and promise, H1 the
query phrase, keyword in the first lead sentence, 3–6 natural mentions, 2–4 internal links with
descriptive anchors, zero invented facts.

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
| 11 | 10 pairs in `ROUTE_PAIRS`, `PAGES`, `ROUTES` (`82639eb`) | `chore(content): register batch 12 routes` |
| 12 | this file, session handoff, `PLAN.md` | `docs: record content library batch 12` |

Each content commit is a passive unit. Route registration is the executable change and its own
commit, which keeps the native review candidate bounded.

Forecast: about 1,700 authored lines across the 10 pairs. Delivery is direct work-unit commits to
`main` under the owner's standing authorization (AGENTS.md); no PR chain applies.

## Checklist rule

Every page commit marks its `ES` and `EN` rows in `odd/tasks/content-pages.md` (and the copy-pass log)
before the commit, so the checklist never lags the work.

## Tasks

- [x] 1. Writer A — pages 1–5 (ES + EN copy, 5 unique heroes), `check:copy` green. Evidence:
      6,120/6,120 copy checks; 34 internal links (17 ES, 17 EN) resolve; 0 em dashes. Heroes:
      public domain (x3), CC BY 2.0, CC BY-SA 3.0; 116–267 KB; unique hashes. Follow-up: the
      biceps and triceps paragraphs from the archive were added as H2 sections in both locales.
- [x] 2. Writer B — pages 6–10 (ES + EN copy, 5 unique heroes), `check:copy` green. Evidence:
      6,375/6,375 copy checks; 32 internal links (16 ES, 16 EN) resolve; 0 em dashes. Heroes:
      CC BY 2.0 (x3), CC BY-SA 3.0, CC BY-SA 4.0; 137–165 KB; unique hashes.
- [x] 3. Parent — cross-links: `mitos-…` → `dias-entrenamiento-pesado`, `consejos-…` →
      `tecnica-ejecucion-ejercicios`, `fibras-musculares-ejercicios` → `contracciones-musculares-…`,
      plus the writers' links to `tipos-de-fibras-musculares`, `repeticion-maxima` and
      `elegir-gimnasio`, in both locales.
- [x] 4. Parent — register the 10 pairs in `ROUTE_PAIRS`, `PAGES` and `ROUTES` (`82639eb`).
- [x] 5. Parent — per-page commits 1–10, each with its two checklist rows and copy-log row:
      `8d4b84f`, `964fe79`, `670de48`, `9aaee48`, `990ebb8`, `d636681`, `997a706`, `aa960cd`,
      `dff0602`, `d87104f`.
- [x] 6. Parent — `npm run verify`: `check:copy` 6,375/6,375, build 266 pages, `check:i18n`
      4,216/4,216.
- [x] 7. Parent — manual checks: 212 internal links across the 20 built pages resolve; 0 `.md` links;
      0 em dashes; 132 TOC anchors match their H2 ids; no routine table rows; 2 text tables (the
      split-routine table in both locales); sitemap 262 URLs and 786 alternates.
- [x] 8. Parent — record the pages in the session handoff and `PLAN.md`; commit `40ffe18` and push
      (`bfb5315..40ffe18`), then verify production: **262 sitemap URLs** and `/en/gym-etiquette/`
      present.

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

Observed on 2026-11-11:

| Check | Result |
| --- | --- |
| `npm run check:copy` | **6,375/6,375** |
| `npm run build` | **266 pages** (246 + 20) |
| `npm run check:i18n` | **4,216/4,216** |
| `dist/sitemap-0.xml` | **262 URLs**, 786 `hreflang` alternates |
| Internal links on the 20 built pages | **212**, all resolve |
| `.md` links · `#` links · em dashes | 0 · 0 · 0 |
| TOC anchors vs heading ids | **132/132** match |
| Article counts | 125 ES, 125 EN, 125 hero directories |
| Production after the push | **262 sitemap URLs**, batch 12 routes present |

Test-first exception: prose and images have no runnable deterministic RED; `check:copy`, the build,
`check:i18n` and the manual structural checks are the functional verification.

Archive correction: the contractions article labels its "Excéntrica" and "Concéntrica" headings in the
opposite order to the definitions underneath. The page keeps every definition and names each H2 after
the contraction it actually describes.

## Progress and evidence

| # | Page | Files | Hero | check:copy | Commit |
| --- | --- | --- | --- | --- | --- |
| 1 | `mitos-estupidos-…` | ES + EN | 206 KB · public domain | pass | `8d4b84f` |
| 2 | `dias-entrenamiento-pesado` | ES + EN | 116 KB · public domain | pass | `964fe79` |
| 3 | `consejos-para-crear-tu-rutina-dividida` | ES + EN | 267 KB · CC BY 2.0 | pass | `670de48` |
| 4 | `fibras-musculares-ejercicios` | ES + EN | 152 KB · CC BY-SA 3.0 | pass | `9aaee48` |
| 5 | `repeticion-maxima-rutinas-volumen` | ES + EN | 177 KB · public domain | pass | `990ebb8` |
| 6 | `tecnica-ejecucion-ejercicios` | ES + EN | 153 KB · CC BY 2.0 | pass | `d636681` |
| 7 | `contracciones-musculares-…` | ES + EN | 147 KB · CC BY-SA 3.0 | pass | `997a706` |
| 8 | `grandes-musculos-de-forma-natural` | ES + EN | 155 KB · CC BY-SA 4.0 | pass | `aa960cd` |
| 9 | `entrena-con-musica-…` | ES + EN | 137 KB · CC BY 2.0 | pass | `dff0602` |
| 10 | `normas-para-hacer-del-gimnasio-…` | ES + EN | 165 KB · CC BY 2.0 | pass | `d87104f` |

## Native review assessment (2026-11-11)

RDD is `on` (global scope). Read-only `gentle-ai review assess` with the untracked mockups excluded
(`--untracked-scope=exclude`, inventory `sha256:5d53f361…252dab`):

| Range | Risk | Paths / lines | `review_due` | Reason |
| --- | --- | --- | --- | --- |
| `bfb5315..HEAD` (batch 12) | medium | 36 / 1,815 | false | `under_budget` |
| `d87104f..HEAD` (routes + docs) | medium | 6 / 375 | false | `under_budget` |
| `82639eb..HEAD` (docs) | passive | 4 / 308 | false | `passive` |

No native review was started: the provider reports the candidate under the slice budget, so no consent
envelope and no lineage. The batch 10 transaction `review-bf1585fd7f8b1c1f` remains open and
untouched; it is a different lineage.

## Notes for the next batch

- Batch 11 lessons: routine table cells 2–3 are `nowrap` at 21%; a cell holding a list must use
  `table.text-table`. `ROUTES` in `scripts/check-i18n.mjs` is keyed and a collision overwrites.
- Heroes are Wikimedia Commons files at `?width=1280`, under 500 KB, one unique path per ES article;
  the EN file reuses its ES twin's path.
