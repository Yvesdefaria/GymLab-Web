# Content library — batch 10

Started: 2026-11-08. Continues the library from 95/792 (`odd/tasks/content-pages.md`).

Objective: publish the next 10 bilingual guide pairs (20 files, 10 unique heroes), register the
routes, and keep every gate green.

- Contract: `odd/tasks/guides-page-contract.md`
- Session handoff: `odd/tasks/content-library-session.md`
- Source archive: `C:\Users\Yves De Faria\Desktop\cambiatufisico.com\content\entrenamiento\musculacion\`

## Scope

| # | ES slug | EN slug | Archive source |
| --- | --- | --- | --- |
| 1 | `entrenamiento-piramidal` | `pyramid-training` | `entrenamiento-piramidal.md` |
| 2 | `volumen-de-entrenamiento` | `training-volume` | `volumen-de-entrenamiento.md` |
| 3 | `congestion-muscular` | `muscle-pump` | `congestion-muscular.md` |
| 4 | `elaboracion-de-rutinas-puntos-debiles` | `routine-weak-points` | `elaboracion-de-rutinas-puntos-debiles.md` |
| 5 | `levantar-aumentar-peso` | `lift-more-weight-5-percent` | `levantar-aumentar-peso.md` |
| 6 | `escoger-actividad-en-tu-vuelta-al-gimnasio` | `back-to-the-gym-choosing-activity` | `escoger-actividad-en-tu-vuelta-al-gimnasio.md` |
| 7 | `ejercicios-sobre-balon` | `stability-ball-exercises` | `ejercicios-sobre-balon.md` |
| 8 | `los-peligros-de-entrenar-como-un-preplaya` | `unbalanced-training-dangers` | `los-peligros-de-entrenar-como-un-preplaya.md` |
| 9 | `tiempos-entrenamiento` | `rep-tempo` | `tiempos-entrenamiento.md` |
| 10 | `8-repeticiones-entrenando` | `eight-reps-debate` | `8-repeticiones-entrenando.md` |

All ten belong to block `Entrenamiento` / section `Musculación` (`Training` / `Bodybuilding` in
English).

## Route

- Inline: baseline gate (`npm run check:copy`), route registration, final `npm run verify`, commit.
- Delegated direct: two sequential writers, five page pairs each (10+ non-trivial files per writer).
  Writers may not touch `astro.config.mjs`, `scripts/check-i18n.mjs`, `odd/tasks/content-pages.md`
  or run `npm run build`; route registration stays with the parent.

## Tasks

- [x] 1. Writer A — pages 1 to 5 (ES + EN copy, 5 unique heroes), `check:copy` green.
- [x] 2. Writer B — pages 6 to 10 (ES + EN copy, 5 unique heroes), `check:copy` green.
- [x] 3. Parent — register the 10 pairs in `ROUTE_PAIRS`, `PAGES` and `ROUTES`.
- [x] 4. Parent — `npm run verify`: `check:copy` 5,355/5,355, build 226 pages, `check:i18n`
      3,596/3,596.
- [x] 5. Parent — record the pages in `content-pages.md` and the session handoff; commit and push.

## Verification

Observed on 2026-11-08:

| Check | Result |
| --- | --- |
| `npm run check:copy` | **5,355/5,355** |
| `npm run build` | **226 pages** |
| `npm run check:i18n` | **3,596/3,596** |
| `dist/sitemap-0.xml` | **222 URLs**, 666 `hreflang` alternates |
| Internal links in the 20 files | 78, all resolve to a built page |
| `.md` / `#` links, em dashes | 0 / 0 / 0 across the 20 files |
| TOC anchors vs H2 ids | match on the 5 pages sampled |
| Article counts | 105 ES, 105 EN, 105 hero directories |

## Evidence

Baseline before the batch: `check:copy` **4,845/4,845**, build **206 pages**, `check:i18n`
**3,286/3,286**, `git status` clean apart from untracked `odd/mockups/`.

## Notes for the next batch

- Two writers were run sequentially, five pairs each. Both ran `node scripts/check-copy.mjs` and
  reported the gate line; the parent ran `npm run verify` once at the end.
- `ROUTES` in `scripts/check-i18n.mjs` is keyed: a new key that collides with an existing one
  overwrites it and crashes the gate on the older pair. `musclePump` was already taken by
  `/ejercicios-maxima-congestion-muscular`, so the new pump guide uses `musclePumpGuide`.
- Heroes are Wikimedia Commons files at `?width=1280`, under 500 KB, one unique path per ES article;
  the EN file reuses its ES twin's path.

## Native review (2026-11-08/09)

RDD is `on` (global scope). Consent was granted by the owner for both attempts below.

| Attempt | Scope | Result |
| --- | --- | --- |
| Whole batch | base `6547621`, 36 files, 2,131 lines | `lens_context_budget_exceeded` — terminal, **no authority created**, retry of the same candidate cannot succeed |
| Route registration | base `1c601a15…b0643`, 6 files, 279 lines | START created lineage `review-bf1585fd7f8b1c1f`, risk `medium`, lens `review-reliability`, correction budget 140 |

The second transaction never closed: the reviewer task was interrupted before producing a capture,
so there is no verdict and no receipt. State stays `reviewing`; nothing was mutated and no authority
was burned. `review status` reports zero lineages in the repair inventory, so there is nothing to
abandon or repair.

Consequence for the record: **the 20 article files are not natively reviewed**. They are covered by
the deterministic gates (`check:copy` 5,355, build 226 pages, `check:i18n` 3,596), by the
internal-link resolution check (78 links, all resolve), by the TOC-anchor check and by the manual
table/hero review. The executable risk in this batch — the route tables — was the candidate the
second transaction froze.

Resume path: query the bound `review status` for lineage `review-bf1585fd7f8b1c1f` with its
repository context and follow the returned transition, or leave the transaction open. Delivery is
governed by ordinary repository policy, not by this review.
