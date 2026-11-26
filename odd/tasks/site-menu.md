# Site menu: activate the guides cascade for the whole content library

## Objective

Turn the existing guides cascade (built in `1fc5163`, frozen behind
`GUIDES_ENABLED = false`) into the real site menu: every published article reachable
from the header, in both locales, with counts and links derived from the content
collection so future pages appear without editing the menu.

## Problem and why

The site publishes 787 articles per locale (1,574 content pages). The header links
only landing anchors, and the guides menu is disabled because its data
(`src/data/guides-nav.ts`) is a hardcoded archive snapshot: 57 `#` hrefs and counts
from `paginas.csv`. The articles exist, are in the sitemap, and have no navigation
entry point. A menu that lists all pages is the missing hub for the whole library.

## Scope

In scope:

- Rewrite `src/data/guides-nav.ts` as taxonomy only (blocks + sections, stable ids).
- New `src/lib/guides-nav.ts`: derives counts, links and article lists from
  `getCollection('articles')` at build time; throws if an article's section does not
  map to the taxonomy (no silent omissions).
- New bilingual hub: `/[lang]/guias/` (ES) and `/en/guides/` (EN), listing every
  block, section and article, with anchor ids the menu links to.
- Enable the cascade in `Header.astro` with real hrefs and computed totals.
- i18n route `guides` so canonical, hreflang, the language switch and the sitemap pair
  resolve through the existing `ROUTES` table.
- Gate/config: one sitemap pair, two `PAGES` entries and one `ROUTES` entry.

Out of scope (explicitly, to keep the change reviewable):

- Section hub pages with unique copy. The hub is one page per locale; section links
  are anchors. Thin per-section pages can come later with real copy.
- Article breadcrumb links to the hub. Follow-up once the hub proves useful.
- Legal pages and calculators in the cascade. The menu is the content library; legal
  stays in the footer and calculators keep their header anchor.
- Redirects for the old domain, `llms.txt`, article JSON-LD.

## Constraints

- Site copy in neutral professional Spanish, no voseo; code and comments in English.
- One hub page per locale, not 47 section hubs: 94 generated pages with templated
  descriptions would be thin content and 94 extra gate entries.
- Article URLs are `/{lang}/{slug}/`; the hub links must carry the trailing slash.
- No `#` placeholder hrefs ship. The only `#` left is none.
- No new dependency.
- Do not touch article frontmatter; name drift is handled by a small alias map.
- Work-unit commits on `main` (repo convention). No push without the owner.

## Data decisions

Section ids (stable, locale-neutral):

- entrenamiento: `musculacion`, `ejercicio-cardiovascular`,
  `prevencion-y-recuperacion`, `fisicos-de-leyenda`, `entrenamiento`,
  `entrenamiento-del-pecho`, `entrenamiento-de-la-espalda`,
  `entrenamiento-del-hombro`, `entrenamiento-de-los-biceps`,
  `entrenamiento-del-triceps`, `entrenamiento-de-las-piernas`
- por-musculo: `rutinas-de-pecho`, `rutinas-de-espalda`, `rutinas-de-biceps`,
  `rutinas-de-triceps`, `rutinas-de-pierna`, `pecho`, `espalda`, `hombro`,
  `triceps`, `abdomen`, `pierna`
- rutinas: `rutinas-de-volumen`, `rutinas-de-definicion`, `rutinas-de-fuerza`,
  `rutinas-full-body`, `rutinas-para-principiantes`, `rutinas-de-deportes`
- ejercicios: `ejercicios`, `ejercicios-de-pecho`, `ejercicios-de-espalda`,
  `ejercicios-de-biceps-y-antebrazo`, `ejercicios-de-triceps`,
  `ejercicios-de-hombro`, `ejercicios-de-cuadriceps`,
  `ejercicios-de-femoral-y-gluteos`, `ejercicios-de-gemelo`,
  `ejercicios-de-pierna`, `ejercicios-de-trapecios`, `ejercicios-basicos`
- nutricion: `nutricion-aplicada`, `alimentos-funcionales`, `dietas-y-planes`,
  `dietas-de-volumen`, `dietas-de-definicion`, `suplementos-dieteticos`
- mujer-fitness: `fitness-y-bienestar`

Block anchors are the block ids (`entrenamiento`, `por-musculo`, ...). Section
anchors are `s-<section-id>` so a section id can never collide with a block id
(`Entrenamiento`, `Ejercicios`).

Alias map (normalized published `section` -> section id), from the live data:

- es: `prevencion y recuperacion de lesiones` -> `prevencion-y-recuperacion`
- es: `rutinas en principiantes` -> `rutinas-para-principiantes`
- en: `volume routines` -> `rutinas-de-volumen`
- en: `shoulder` -> `hombro`
- en: `legendary physiques` -> `fisicos-de-leyenda`

Everything else matches after case/accent normalization. The builder asserts the
listed total equals the article count for the locale.

## Tasks

- [x] T1 — Taxonomy + builder. Rewrite `src/data/guides-nav.ts` (ids, es/en labels,
  no counts/hrefs) and add `src/lib/guides-nav.ts` with `getGuideNav(lang)`, aliases,
  normalization, sorting and the totals assertion. Keep `GUIDES_ENABLED` in the data
  file. Route: delegated direct (writer).
- [x] T2 — Hub. Add `src/pages/[lang]/guias.astro` (ES only via `getStaticPaths`) and
  `src/pages/en/guides.astro` wrapper. Copy in `src/i18n/es.ts` + `src/i18n/en.ts`;
  route in `src/i18n/index.ts` (`guides: { es: '/guias', en: '/guides' }`). Lists
  every block, section and article; TOC anchors. Route: delegated direct (writer).
- [x] T3 — Menu. `src/components/Header.astro` consumes `getGuideNav(lang)`; the
  block rows stay switcher buttons and the "View all" link points at `#<block-id>`;
  section links point at `#s-<section-id>` of the hub; the foot total is computed;
  every section shows (the 8-section slice is gone) and `GUIDES_ENABLED` is `true`.
  Route: delegated direct (writer).
- [x] T4 — Gate/config. Add `['/guias', '/guides']` to `ROUTE_PAIRS`
  (`astro.config.mjs`); add the two hub pages to `PAGES` and the `guides` route to
  `ROUTES` in `scripts/check-i18n.mjs`. Route: delegated direct (writer).
- [x] T5 — Verify. `check:copy` 40137/40137 (writer); parent reran `build` after the
  block-button correction: 1592 pages, exit 0, and `check:i18n` 24769/24769. Structural
  readback on `dist`: 787 list links per hub, 47 section anchors, 6 block anchors, one
  `h1`, zero `href="#"`, every internal href resolves; each locale header carries 47
  section links and 6 block links. Visual QA at 390px and the desktop panel scroll is
  still pending. Route: parent.
- [x] T6 — Work-unit commits. One feature commit for the coherent behavior. Route:
  parent.

## Acceptance criteria

- The header shows "Guías" / "Guides" on every page and opens the cascade.
- The cascade lists 6 blocks and every non-empty section with its real count; every
  link resolves to an existing built page plus an existing anchor.
- Each hub lists all 787 articles for its locale, grouped by block and section.
- `GUIDES_ENABLED` is `true`; no `#` placeholder remains.
- A future article in an existing section appears automatically in the menu and hub.
  A new section without a taxonomy entry fails the build with a message naming the
  article and the section.
- Gates green: `check:copy`, `build`, `check:i18n`.

## Checks

```powershell
npm run check:copy
npm run build
npm run check:i18n
```

## Delivery

One coherent feature, about 450 authored lines. `ask-on-risk` strategy; no PR is
planned, commits land on `main` per repo convention. Push and deploy stay with the
owner.

## Progress and evidence

- 2026-11-26 — Feature opened. Verified the mockups (`odd/mockups/menu-*.html`), the
  frozen cascade (`1fc5163`), the 787+787 articles, the collapsed `block` frontmatter
  (3 values) and the 47-section taxonomy with 5 name aliases.
- 2026-11-26 — T1 done. Taxonomy is ids and labels only (6 blocks, 47 sections, no
  counts or hrefs); `getGuideNav` mapped 787 ES and 787 EN articles with 0 unmapped
  sections, and the totals assertion (sum = filtered collection count) passed.
- 2026-11-26 — T2 done. `dist/es/guias/index.html` and `dist/en/guides/index.html`
  each carry 787 article links, 47 section anchors, 6 block anchors and one `h1`;
  canonical is `/es/guias/` and `/en/guides/`, with reciprocal hreflang.
- 2026-11-26 — T3 done. `GUIDES_ENABLED = true`; each locale's header emits 47
  section links and 6 block links, the foot total reads 787, and 0 menu targets are
  unresolved against the hub anchors. No `href="#"` remains in either hub.
- 2026-11-26 — T4 done. `ROUTE_PAIRS`, `PAGES` and `ROUTES` updated; gates:
  `check:copy` 40137/40137, `build` 1592 pages, `check:i18n` 24769/24769.
- 2026-11-26 — Parent review corrected one writer deviation: the cascade block rows
  were rendered as `<a>`; they are switcher buttons again, and the "View all" link is
  the only block-level navigation. Rebuilt after the fix: 1592 pages, gate
  24769/24769. Structural readback confirms 787 article links per hub and 47 header
  section links with matching anchors. Visual QA (390px, desktop panel scroll) remains
  for the owner.
- 2026-11-26 — The cascade was replaced by the global Explorar menu and the search
  index; see `odd/tasks/header-search.md`.
