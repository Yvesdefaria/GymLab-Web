# Scaling architecture — deferred audit

Last updated: 2026-11-06.
Status: **deferred**. Start this phase only after the current content batch. It does not change the
page chrome or the article contract.

Source: read-only audit of the layouts, components and route registration at 66/792 pages.

## Verdict

Header and Footer are already components and are mounted once:

- `src/components/Header.astro` and `src/components/Footer.astro`.
- Only `src/layouts/BaseLayout.astro` imports them (lines 3–4) and renders them (94 and 98). No page
  imports or duplicates the site chrome.
- `BaseLayout` owns `<head>`, meta, canonical/hreflang, Header, `<main>` and Footer.
- `ArticleLayout` wraps `BaseLayout` and owns the editorial article chrome; the single dynamic route
  `src/pages/[lang]/[...slug].astro` renders every article from the content collection.
- `LegalLayout` wraps `BaseLayout`; the landing is `BaseLayout` plus section components; the 404 uses
  `BaseLayout`; the English calculators reuse the `[lang]` implementation.
- The `/`, `/privacidad` and `/terminos` stubs are intentional redirects without a layout.

Changing Header or Footer is a one-file change, not a 1,000-page change. Do **not** merge
`BaseLayout`, `ArticleLayout`, Header and Footer into a universal page component. The current
composition is the boundary: layouts by page type, explicit props, content in Markdown.

## Problems to solve, in order

### 1. Bilingual route registry duplication (highest ROI)

The same article pair is represented three times:

- `astro.config.mjs` → `ROUTE_PAIRS`, used by the sitemap serializer.
- `scripts/check-i18n.mjs` → `PAGES` and `ROUTES`, used by the gate.
- The content frontmatter `alternate` field, which `ArticleLayout` already uses for canonical and
  hreflang.

At 66 pairs the lists are manageable; at 792 they are 792 entries plus 1,584 page entries plus 792
route objects. The gate catches drift, but every new pair costs three manual edits.

Acceptance criteria:

- Adding one article pair requires no manual edit to `ROUTE_PAIRS`, `PAGES` or `ROUTES`.
- The sitemap and the gate consume one generated manifest, or derive the pairs from the built HTML.
- A missing or non-reciprocal `alternate` still fails the gate.
- The gate remains deterministic and runs after `npm run build`.

### 2. Guides navigation data

`src/data/guides-nav.ts` is a manual tree: 6 blocks, 57 sections, counts from the 792-article archive
and `href: '#'`. `GUIDES_ENABLED` is `false`. The Header consumes the data correctly, but if the menu
were enabled today it would claim 792 published guides when only 66 exist and link to `#`.

Acceptance criteria:

- Counts and links are generated or validated against the published pages.
- Every section href resolves to a real hub; no `#` reaches production.
- `GUIDES_ENABLED` flips only after `/es/guias/` and the section hubs exist.
- The gate fails on a count or href that does not match the built site.

### 3. Calculator chrome (optional, 3 pages)

`src/pages/[lang]/calculadora-1rm.astro`, `calculadora-imc.astro` and `calcular-calorias.astro` carry
inline markup, CSS and scripts. The math is already shared in `src/lib/calculators.ts`, and the
English pages are thin wrappers. This is the only non-componentized page area, but it is three pages,
not the 792-page library.

If the calculators change, extract a shared calculator chrome/layout and shared styles; keep each
calculator's math and copy separate. Do not build a generic page component to unify them.

## Coupling rules to keep

- Header receives `alternates` from `BaseLayout`; `ArticleLayout` passes the pair from the
  frontmatter. This is explicit coupling and the gate validates it. Keep it explicit.
- `BaseLayout` computes canonical and hreflang in one place; do not duplicate those tags in pages.
- Content stays Markdown with the frontmatter schema; do not move article copy into Astro components.
- The landing sections remain independent components; do not turn them into a config-driven page
  builder.

## Evidence

- `src/layouts/BaseLayout.astro:3-4, 94, 98`.
- `src/layouts/ArticleLayout.astro:6, 57-61`.
- `src/layouts/LegalLayout.astro:2, 38`.
- `src/pages/[lang]/[...slug].astro:7-24`.
- `src/pages/[lang]/index.astro:4-36`.
- `src/pages/404.astro:6-40`.
- `src/pages/en/one-rep-max-calculator.astro:4`.
- `astro.config.mjs` `ROUTE_PAIRS`; `scripts/check-i18n.mjs` `PAGES` and `ROUTES`.
- `src/data/guides-nav.ts:23-25` and the block/section entries.

## Verification for the phase

- `npm run verify` green.
- One new pair added with no manual route-list edit; the sitemap, hreflang and gate all pass.
- The guides menu disabled until the hubs exist; when enabled, every href resolves and the counts
  match the built pages.
- No regression in canonical, hreflang or the visible language switch.
