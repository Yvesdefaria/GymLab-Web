# Header search: global bar with Explorar and a real search index

## Objective

Replace the current header (landing anchors + guides cascade) with the approved D
design: a global bar — brand, **Explorar**, search, language, CTA — where the menu
holds only site navigation (library and pages), and search finds articles, sections
and pages in the current locale. The landing keeps no section strip: the anchors are
not in the header at all.

## Why

The header mixed two jobs: navigating the landing (`Funciones`, `Capturas`) and
navigating the site (guides, legal). On any article those landing anchors send the
reader back to the home instead of helping them. The owner approved separating them:
the bar navigates the site; page sections are reached by scrolling the landing. The
search is the missing entry point for 787 guides per locale.

## Decisions

- **No landing strip.** The approved mockup D included an "En esta página" strip; the
  owner removed it. Do not port `.section-nav`.
- **Global menu:** `Explorar` panel with two columns, `Biblioteca` (6 blocks with
  counts plus "Ver todas las guías") and `Páginas` (calculators, privacy, terms,
  contact). No landing anchors, no search field inside the panel on desktop.
- **Search:** bar field on desktop; inside the Explorar panel on mobile. Same index
  and same result list.
- **Index:** build-time JSON per locale at `/search/es.json` and `/search/en.json`,
  derived from `getGuideNav(lang)` plus the static pages. No dependency, no backend.
  Lazy fetch on first focus or input. Entries: `{ title, meta, href, group }` with
  `group` one of `guide`, `section`, `page`.
- **Matching:** accent/case-folded substring; title exact > startsWith > includes >
  meta includes. Limits per group: 6 guides, 4 sections, 3 pages. Query shorter than
  2 characters shows nothing.
- **Result links:** articles `/{lang}/{slug}/`; sections and blocks
  `/{lang}/{guides}/#s-<id>` and `#<block-id>`; pages through `ROUTES`.
- **Cascade removed:** the two-level guides menu, its CSS, its script and
  `GUIDES_ENABLED` are deleted. The hub and `src/lib/guides-nav.ts` stay.
- **No new dependency.** The client bundle imports a small pure module.

## Scope

In:

- `src/components/Header.astro` — global bar, Explorar panel, trigger behaviour.
- `src/components/Search.astro` — field, results, keyboard, lazy index, two variants.
- `src/lib/search.ts` — normalize, score, group.
- `src/pages/search/[lang].json.ts` — the index endpoint.
- `src/data/guides-nav.ts` — remove `GUIDES_ENABLED`.
- `src/i18n/es.ts`, `src/i18n/en.ts` — `search` block and panel labels.
- `src/styles/global.css` — remove the dead `.site-header__nav` rules.
- `scripts/check-i18n.mjs` — index assertions and header hooks.
- `odd/tasks/site-menu.md` — note that the cascade was replaced.

Out:

- Full-text search of article bodies (Pagefind later if needed).
- Section hub pages with unique copy.
- Article breadcrumb links.
- Landing section anchors anywhere in the header.

## Tasks

- [x] T1 — Index endpoint. Generate `/search/{es,en}.json` from `getGuideNav`, the
  static pages and the hub. Assert the groups and links in the gate.
- [x] T2 — Search library. `normalize`, `searchEntries(entries, query, lang)` with the
  scoring and per-group limits.
- [x] T3 — Search component. Two variants (`bar`, `panel`), lazy fetch, debounce,
  grouped results, highlight, Arrow/Enter/Escape, `/` shortcut, click-outside,
  empty state. The panel variant hides the columns while it has a query.
- [x] T4 — Header. Global bar, Explorar panel, trigger toggle, mobile layout. Remove
  the cascade, its CSS/script and the `GUIDES_ENABLED` flag. Remove the landing links.
- [x] T5 — Copy and CSS. `search` labels in both dictionaries; dead nav rules removed.
- [x] T6 — Verify. Gates: `check:copy` 40137/40137, `build` 1592 pages,
  `check:i18n` 26373/26373. CDP at 390/360/320: `scrollWidth === innerWidth` and the
  CTA inside the frame; at 800/1280 the results panel stays inside the viewport. Owner
  visual QA of the panel and the search is still pending.

## Acceptance

- Every page shows: brand · Explorar · search (desktop) · language · CTA.
- Explorar opens a panel with Biblioteca (6 blocks and real counts) and Páginas; no
  landing anchors anywhere.
- Typing "espalda" returns guides, sections and pages; Enter opens the active result;
  Escape closes; `/` focuses the field on desktop.
- Mobile: one trigger; the panel contains the search at the top and the two columns
  below; typing replaces the columns with results.
- `/search/es.json` and `/search/en.json` build, and every href resolves.
- Gates green.

## Checks

```powershell
npm run check:copy
npm run build
npm run check:i18n
```

## Reference

- Approved mockup: `odd/mockups/header-search-d.html` (port everything except the
  `.section-nav` strip).
- Mockup CSS: `odd/mockups/header-search.css`.
- Content source: 787 articles per locale, 6 blocks, 47 sections.

## Delivery

One feature commit on `main` after the owner reviews. Push and deploy stay with the
owner. About 600 authored lines, with the cascade removal offsetting part of it.

## Progress and evidence

- 2026-11-26 — T1 done. `dist/search/es.json` and `dist/search/en.json` build with 787
  guide, 53 section (6 blocks + 47 sections) and 7 page entries each; every
  non-anchor href resolves to a built file in `check:i18n`. Page hrefs wrap `calcPath`
  in `localePath` because the bare route has no locale or trailing slash.
- 2026-11-26 — T2 done. `src/lib/search.ts` scores title exact 5, startsWith 4,
  includes 3 and meta includes 1, then caps guides 6, sections 4, pages 3, dropping
  empty groups; the ranking ships minified in the page bundle.
- 2026-11-26 — T3 done. `Search.astro` renders both variants and one inlined module
  script initializes each `[data-search]` once; the bar is hidden below 768px and the
  panel variant at 768px and above. Result titles are built with DOM APIs and `<mark>`
  only, never `innerHTML`.
- 2026-11-26 — T4 done. The landing header carries `data-explore-trigger` and
  `data-search="bar"`, zero `/es/#` or `/en/#` anchors, and no `.section-nav`; the
  panel lists 6 block rows with counts, "Ver todas las guías", 6 page rows and the
  computed footer `787 guías · 47 secciones`. The cascade, its CSS/script and
  `GUIDES_ENABLED` are gone. On mobile the wordmark stays at 360–767 (short CTA and
  language codes free the space) and yields only below 330px.
- 2026-11-26 — T5 done. `search` labels exist in both dictionaries (EN satisfies
  `Dict`); the dead `.site-header__nav` display, media rule and reduced-motion
  selector are removed while `.site-header__link` stays for the trigger.
- 2026-11-26 — Gates: `check:copy` 40137/40137, `build` 1592 pages, `check:i18n`
  26373/26373. Headless checks at 390, 360 and 1280: no horizontal overflow, one
  `/search/es.json` fetch shared by both fields, `/` focus, Arrow key, Escape,
  grouped limits 6/4/3, highlight and panel column swap all behave. The owner's
  visual QA is still pending.
- 2026-11-26 — Parent review: restored the wordmark at 360–767 (short CTA `La app`
  and language codes free the space), hid it only below 330; changed the tablet
  results panel from an absolute 540px box to a fixed panel aligned to the frame
  (it overflowed at 768–900); Escape now closes results before the panel; Enter opens
  the first result when none is active. CDP measurements at 390/360/320:
  `scrollWidth === innerWidth`, CTA inside the frame; at 800/1280 the results panel
  stays inside the viewport.
- 2026-11-26 — Results follow-up: the bar panel starts 6px under the field's bottom
  edge (not the header border) and shares the field's outer left edge; its width
  shrinks from 540px when the viewport would clip it. Verified at 1280/800/768:
  field/panel left equal (317/317, 265/265, 248/248) and panel top = field bottom + 6.
- 2026-11-26 — Escape inside the mobile panel hides the results and restores the two
  columns on the first press; the second press closes the panel. Pre-push runtime QA:
  55/55 checks (alignment, groups, combobox, keyboard, sticky header, EN locale,
  mobile panel, 320/360 bars, index counts, href/anchor resolution, sitemap). Source
  gates: `check:copy` 40137/40137, `build` 1592 pages, `check:i18n` 26373/26373.