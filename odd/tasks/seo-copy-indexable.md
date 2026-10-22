# T15 — SEO del copy y superficie indexable

Source: `PLAN.md` §T15. Audit performed 2026-10-22; this document tracks the execution.

## Objective

Make the landing match the searches of its category and open an indexable surface for the long
tail the app already owns (9 calculators, 873 exercises).

## Problem (from the audit)

- The category term lives in `<title>` but not in any `H2`; the `H1` is the brand line.
- The meta description omits `gratis`, `sin conexión` and `gimnasio`.
- The indexable surface is 3 URLs; the niche volume is long tail.
- `app.gymlab.dev` is indexable and its `/robots.txt` serves the SPA HTML, so it competes with the
  landing without contributing content.

## Scope

In scope: landing copy, structured data, the post-build gate, the three calculator pages, routine
pages, and the app-repo `noindex`/`robots.txt` fix.

Out of scope: rewriting the `H1` or the site voice, keyword stuffing, buying links, inventing
search volumes. Brand constraint (owner decision): the `H1` stays; the category term enters an
`H2`/subtitle.

## Constraints

- Site copy: Spanish, neutral/professional. Code/comments: English.
- Any pricing claim must trace to the legal text. `gratis` is supported by
  `src/i18n/legal/es.ts` §compras: «GymLab se distribuye gratuitamente».
- Structured data must not invent `aggregateRating` or store URLs: there are no ratings and no
  store listings yet.
- No measured search volumes exist until Search Console accumulates 2–4 weeks (T15.5). Any FAE
  question added before that is an intent hypothesis, not measured data.

## Tasks

### T15.1 — Quick wins on the landing — DONE (2026-10-22)

- [x] `description` (es/en) with `gratis`/`free`, `sin conexión`/`offline`, `gimnasio`/`gym`;
      150–160 characters.
- [x] One `H2` carrying `app de entrenamiento` / `training app` without rewriting the voice.
- [x] Two new FAQ entries: cost and account requirement.
- [x] `SoftwareApplication` + `FAQPage` JSON-LD, per locale, landing only.
- [x] Extend `npm run check:i18n` with deterministic SEO assertions.
- [x] Verify: `alt` attributes already descriptive — recorded below, no work fabricated.

Acceptance: `npm run build` green, `npm run check:i18n` green with the new assertions, JSON-LD
parses as valid JSON, FAQPage entity count equals the FAQ item count.

### T15.1b — Sitemap annotation parity — DONE (2026-10-22)

The sitemap published `es-ES`/`en-GB` and no `x-default`, while `BaseLayout` publishes
`es`/`en`/`x-default`. Two different annotation sets instead of one reinforced set, and the gate
only asserted that *some* alternates existed — which is why 110 green checks missed it.

- [x] `locales: { es: 'es', en: 'en' }` in `astro.config.mjs`.
- [x] `x-default` appended in `serialize` (the integration emits one alternate per locale and never
      `x-default`; `serialize` runs after the i18n links are attached, and `links` is `{ url, lang }`).
- [x] `/sitemap.xml` 301 → `/sitemap-index.xml` in `public/_redirects`.
- [x] Gate assertion: per page, the markup annotations and the sitemap entry must be the same
      `code=href` set, sorted.

**RED** (new assertions against the pre-change `dist/`): 116/123, **7 failed** — one per page plus
the redirect, each showing `markup [en=… es=… x-default=…] vs sitemap [en-GB=… es-ES=…]`.
**GREEN**: build 9 pages; **123/123 passed**. `dist/sitemap-0.xml` now carries `es`, `en` and
`x-default` on all six entries.

Deliberately not done: `lastmod`. `@astrojs/sitemap` would stamp every URL with the build time on
every deploy — a freshness signal that says content changed when it did not, which Google learns to
ignore. A truthful `lastmod` needs per-page source provenance, not build time.

### T15.2 — Three calculator pages

Decisions (owner, 2026-10-22): the pages **calculate for real**, the visual work is deferred to a
later pass that must stay inside the existing aesthetic, and this first pass reuses only the current
primitives. Slugs are identical in both locales: canonical, alternate and sitemap pairing are keyed
on the path, so locale-specific slugs would need a slug map in three places. Revisit if English
long-tail becomes a priority.

The math is **ported, not reimplemented**: `src/lib/calculators.ts` cites its sources in the app repo
(`src/domain/prs.ts` for Brzycki, `src/domain/calculators/oneRepMax.ts` for Epley, `imc.ts`,
`tdee.ts`). Rounding is part of that contract — a visitor and a user must see the same number.

- [x] **T15.2a — 1RM page** (`/es/calculadora-1rm/`, `/en/calculadora-1rm/`).
- [ ] **T15.2b — BMI page** (`/es/calculadora-imc/`).
- [ ] **T15.2c — Calorie page** (`/es/calcular-calorias/`).

#### T15.2a evidence

- Server renders the seed result (80 kg × 5) so the page answers before JS runs: `93,5 / 90 / -3,5`.
- Browser check (Playwright, Chromium, both locales, 0 page errors): seed `93,5 / 90 / -3,5`;
  100 kg × 3 → `110 / 105,9 / -4,1`; 0 reps → all dashes plus the validation message; 40 reps →
  Epley `233,5`, Brzycki dash, the "formula is not valid" note.
- `npm run build` → 11 pages. `npm run check:i18n` → **158/158** (new routes inherit canonical,
  alternate and sitemap parity; a calculator block asserts description length, the page's own term,
  a single `H1` and the app CTA).

### T15.3 — Routine pages from the app seed

Template generated from the app's routine seed. Blocked on: the seed's shape and which routines are
worth publishing.

### T15.4 — `noindex` + real `robots.txt` on `app.gymlab.dev`

Lives in `ProyectoGymLab`. Cross-repo work, separate commits there.

### T15.5 — Search Console review at 4 weeks

Read impressions/clicks, then prioritise by real data. Earliest useful read: 2026-11-19.

## Delivery strategy

Repo convention (`AGENTS.md`): work-unit commits pushed directly to `main`, announced per push;
PRs and merges stay owner decisions. PR slicing is therefore not applicable; the work units below
are already the reviewable slices if the owner ever wants PRs.

Line forecast at creation: T15.1 ≈ 120 · T15.2 ≈ 450 · T15.3 ≈ 200 · T15.4 ≈ 10 · T15.5 = 0.
Cumulative ≈ 780 authored changed lines, so the feature is delivered in slices, one work unit per
task, never as a single branch-wide commit.

## Test-first policy

No test runner in this repo. The deterministic gate is `npm run check:i18n`, which runs after
`npm run build`. For T15.1 the RED/GREEN equivalent is: add the assertions first, observe them fail
against the current build, then change the copy and observe them pass. Evidence recorded below.

## Progress and evidence

| Task | Route | Trigger evidence | Status |
|---|---|---|---|
| T15.1 | delegated writer | 2 non-trivial files (`StructuredData.astro`, `check-i18n.mjs`) + 4 copy edits | done |
| T15.1b | inline | config + gate, no open design after reading the package internals | done |
| T15.2a | inline | pattern-setting work: every decision was the brief itself | done |
| T15.2 | pending | — | not started |
| T15.3 | pending | — | not started |
| T15.4 | separate repo | — | not started |
| T15.5 | pending | — | not started |

### T15.1 evidence

**RED** (assertions first, against the pre-change build): `npm run build` → 9 pages;
`npm run check:i18n` → **84/102 passed, 18 failed** — description length 146 in both locales, the
six missing keyword checks, the four missing FAQ questions, and `has 2 json-ld blocks — got 0` plus
the two missing graph types in both locales.

**GREEN**: `npm run build` → 9 pages, `Complete!`; `npm run check:i18n` → **110/110 passed**.

Output read directly from `dist/`, not from the writer's report:

| | `/es/` | `/en/` |
|---|---|---|
| `description` length | 154 | 151 |
| `H2#features-title` | `La app de entrenamiento, de la rutina al gráfico` | `The training app, from routine to graph` |
| JSON-LD blocks | 2, both inside `<head>` | 2, both inside `<head>` |
| `FAQPage.mainEntity` | 7 questions, matches the 7 rendered `<summary>` | 7 questions |
| `aggregateRating` | absent | absent |
| legal pages JSON-LD | 0 | 0 |

`offers: { price: '0', priceCurrency: 'EUR' }` traces to the legal text (`se distribuye
gratuitamente`). No `downloadUrl`, no store URL, no rating: none of those exist yet.

- `alt` audit: `grep <img|alt=` over `src/**/*.astro` returns 4 sites — hero decorative image
  (`aria-hidden`, `alt=""` correct), header and footer logo (`alt=""` with `aria-label` on the
  link), showcase (`alt` from the dictionary, three descriptive strings). Already correct.
- Not done on purpose: `<title>` unchanged (already carries the head term, audit marked it ✅);
  hero image filename still generic; `max-image-preview:large` not added.

**RDD assessment** (`gentle-ai review assess --base-ref 0830ae7 --committed-only`): risk `medium`
(`executable_change`: `scripts/check-i18n.mjs`), 7 paths, 302 changed lines, `review_due: false`,
`review_due_reason: under_budget`. The slice boundary stays at `0830ae7` until a later work unit
reaches the delivery budget.
