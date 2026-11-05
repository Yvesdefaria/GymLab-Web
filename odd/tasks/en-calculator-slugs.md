# EN calculator slugs

## Objective

Give the three English calculator pages English URLs before Google indexes them:

| Calculator | ES (unchanged) | EN (new) |
| --- | --- | --- |
| 1RM | `/es/calculadora-1rm/` | `/en/one-rep-max-calculator/` |
| BMI | `/es/calculadora-imc/` | `/en/bmi-calculator/` |
| Calories | `/es/calcular-calorias/` | `/en/calorie-calculator/` |

The old EN URLs keep working through `301` redirects.

## Problem

The site serves one `[lang]/<spanish-slug>.astro` page per calculator, so both locales share the
Spanish slug. The English URL loses its keyword, and `localeSwitchPath` in `src/i18n/index.ts`
assumes both locales share the slug when it builds the canonical and the `hreflang` alternates.

## Why now

Search Console started indexing on 2026-10-30. Changing a URL after Google indexes it costs crawl
budget and dilutes the signals the page just earned. Doing it before the first crawl is free.

## Scope

- `src/i18n/index.ts`: route table keyed by route id, with a per-locale slug; `localeSwitchPath`
  becomes route-aware; `CALC_PATHS` becomes `CALC_ROUTE_IDS` + `calcPath(lang, index)`.
- `src/pages/[lang]/calculadora-1rm.astro`, `calculadora-imc.astro`, `calcular-calorias.astro`:
  emit only the `es` path and consume the new route helpers.
- `src/pages/en/one-rep-max-calculator.astro`, `bmi-calculator.astro`, `calorie-calculator.astro`:
  thin wrappers that render the same page component for `en`.
- `src/components/sections/Calculators.astro`: per-locale links.
- `public/_redirects`: three `301` rules from the old EN URLs.
- `scripts/check-i18n.mjs`: per-locale route table, route-aware alternates, new redirect and link
  assertions.

Out of scope: privacy/terms slugs (unchanged in both locales), calculator copy, and the word-count
work.

## Acceptance

- `npm run build` green; `npm run check:i18n` green with the new routes.
- `/es/calculadora-imc/` keeps its canonical; `/en/bmi-calculator/` is canonical for EN.
- Every page's `hreflang` points at the equivalent route, not at the same slug in the other locale.
- Sitemap publishes the three new EN URLs and none of the old ones.
- `_redirects` sends `/en/calculadora-imc/`, `/en/calculadora-1rm/` and `/en/calcular-calorias/`
  to the new URLs with `301`.

## Checks

`npm run build` then `npm run check:i18n`. The gate is the contract: 12 pages, canonical/hreflang
agreement, redirects, sitemap alternates and JSON-LD shape.

## Evidence (2026-11-05)

- `npm run build`: 16 pages, green. New routes: `/en/bmi-calculator/`,
  `/en/one-rep-max-calculator/`, `/en/calorie-calculator/`. The old `/en/calculadora-*` routes are
  no longer generated.
- `npm run check:i18n`: **317/317** checks passed.
- `/en/bmi-calculator/` canonical is itself and its alternates point at `/es/calculadora-imc/` for
  `es` and `x-default`; `/es/calculadora-imc/` keeps its own canonical.
- `dist/_redirects` carries the three `301` rules; `dist/sitemap-0.xml` publishes 12 URLs, with the
  English calculators on their new slugs and none of the old ones.
- Implementation note: the English pages are thin wrappers that import the `[lang]` page component,
  so both locales keep one body. `localeSwitchPath` now resolves the pathname through `ROUTES`
  before switching locale; `CALC_PATHS` became `CALC_ROUTE_IDS` + `calcPath(lang, id)`.
