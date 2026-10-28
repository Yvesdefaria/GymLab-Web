# SEO structured data — ficha honesta + schema en calculadoras

## Objective

Make the JSON-LD the site ships match what the site actually is, and give the
three calculator pages structured data they currently lack.

## Problem

Audit of production (`https://gymlab.dev`) on 2026-10-28 found:

1. `src/components/StructuredData.astro` ships a `FAQPage` node. Google removed
   the FAQ rich result on 2026-05-07 and dropped the documentation in 2026-10.
   The node produces nothing.
2. The same file declares `operatingSystem: 'Android, iOS, Web'` while the hero
   says "Próximamente en Google Play / App Store". Android and iOS do not exist
   yet; only the web app at `app.gymlab.dev` does.
3. The landing has no `WebSite` and no `Organization` node, so nothing anchors
   the site as the official property.
4. `/es/calculadora-imc/`, `/es/calculadora-1rm/` and `/es/calcular-calorias/`
   (and their `/en/` twins) carry **zero** `application/ld+json`. Confirmed in
   production HTML: `ldCount: 0`. These are the pages that match concrete search
   intent and they have no entity at all.
5. `BaseLayout.astro` sets no `robots` meta, so Google's default
   `max-image-preview:standard` applies. `max-image-preview:large` is the only
   robots directive worth writing here; `index, follow` are the documented
   default and have no effect when listed explicitly.

## Why

- A false `operatingSystem` is a factual misstatement in the feed Google reads
  to build the app entity.
- The calculators are the pages with commercial/informational intent; without
  markup they cannot be eligible for any app or breadcrumb appearance.
- `max-image-preview:large` changes real SERP/Discover thumbnail behaviour for a
  site whose main assets are screenshots.

## Scope

In scope: `src/lib/schema.ts` (new), `src/components/StructuredData.astro`,
`src/pages/[lang]/index.astro`, the three `src/pages/[lang]/calculadora-*.astro`
/ `calcular-calorias.astro` pages, `src/layouts/BaseLayout.astro`.

Out of scope: new i18n copy, visual changes, sitemap `lastmod`, OG image
per-locale, Search Console setup, new content pages.

## Constraints

- TypeScript strict; `npm run build` must pass with no new warnings.
- No invented claims in markup: no `aggregateRating`, no `review`, no store
  links, no availability that does not exist.
- Breadcrumb root label is the brand ("GymLab"), so no new i18n keys are needed
  and `en`/`es` dictionaries stay untouched.
- `@graph` with `@id` references, absolute URLs from `https://gymlab.dev`.
- The `noindex` stubs in `src/pages/index.astro`, `privacidad.astro` and
  `terminos.astro` must not be touched.

## Tasks

- [x] T1 — `src/lib/schema.ts`: pure builders `organization`, `webSite`,
  `softwareApplication`, `webApplication`, `breadcrumbList`. No `faqPage`.
  `operatingSystem` becomes `'Web'`.
- [x] T2 — `src/components/StructuredData.astro`: render one `@graph` script
  from a `nodes` prop; keep `is:inline`.
- [x] T3 — Landing wiring: pass `organization` + `webSite` +
  `softwareApplication` from `src/pages/[lang]/index.astro`.
- [x] T4 — Calculator wiring: each of the three pages passes `webApplication` +
  `breadcrumbList` built from its own dictionary entry.
- [x] T5 — `BaseLayout.astro`: add
  `<meta name="robots" content="index, follow, max-image-preview:large" />`.
- [x] T6 — Verification: `npm run build`, `npm run check:i18n`, and a post-build
  parse of every emitted `application/ld+json` block.
- [x] T7 — `scripts/check-i18n.mjs`: the SEO gate hard-coded the retired
  contract (two blocks, mandatory `FAQPage`). Rewritten to assert one `@graph`,
  Organization/WebSite/SoftwareApplication by type, `operatingSystem === 'Web'`,
  and no `FAQPage`. Calculator pages gained five assertions each, including
  `url === canonical` and an `@id` resolution sweep.
- [x] T8 — Calculator graphs: the first cut referenced `#organization` and
  `#website` without defining them, leaving 6 dangling `@id` references. Each
  calculator now composes `organization` + `webSite` alongside its own nodes.

## Authorized scope

Routes and files as listed in Scope. No dependency changes.

## Acceptance criteria

- No `FAQPage` remains anywhere in `dist/`.
- No `Android`/`iOS` string inside any `operatingSystem` value.
- Every calculator page emits two valid JSON-LD nodes (`WebApplication`,
  `BreadcrumbList`) and parses cleanly.
- Landing emits `Organization`, `WebSite`, `SoftwareApplication` in one graph,
  with `WebSite.publisher` and `WebApplication.isPartOf` resolving by `@id`.
- Every emitted JSON-LD block is valid JSON after extraction from the built HTML.
- `npm run build` and `npm run check:i18n` pass.

## Routes chosen

| Task | Route | Trigger evidence |
| --- | --- | --- |
| T1–T5 | delegated writer | 6 non-trivial files → writer trigger |
| T6 | parent | bounded command batch |

## Delivery

Forecast ~140 authored lines (adds + deletes). Under the 400-line budget: single
work unit, one commit on `feat/seo-structured-data`. Push and merge remain owner
decisions.

## Progress

- 2026-10-28: audit completed against production; scope fixed; branch created.
- 2026-10-28: T1–T5 delegated to one writer. Writer reported `partial`: build
  green, `check:i18n` red because the gate encoded the retired contract.
- 2026-10-28: T7 + T8 corrected inline (bounded correction of a writer result:
  one non-trivial file plus three identical mechanical edits, under the writer
  trigger).

## Verification evidence

```
npm run build        → Complete! 15 page(s) built, no warnings
npm run check:i18n   → 308/308 i18n checks passed
post-build sweep     → invalid=0 dangling=0
```

Per-page emitted graph in `dist/`:

| Page | Nodes | operatingSystem | refs |
| --- | --- | --- | --- |
| `es/`, `en/` | Organization, WebSite, SoftwareApplication | Web | ok |
| 6 calculator pages | Organization, WebSite, WebApplication, BreadcrumbList | Web | ok |
| legal pages, stubs | none (unchanged) | — | ok |

`FAQPage` appears nowhere in `dist/`. Every `WebApplication.url` is byte-identical
to its page canonical.

## Next step

Owner decision: push and merge `feat/seo-structured-data`. Not done by the agent.
