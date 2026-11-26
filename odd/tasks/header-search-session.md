# Header search — session handoff (2026-11-26)

## Outcome

The site header is now a global bar — brand, `Explorar`, search, language and CTA —
and the header no longer carries landing anchors. The guides cascade was replaced by a
two-column site menu, and a real search covers the 787 guides per locale, 47 sections,
6 blocks and the static pages. It is committed, pushed and live.

Live verification (2026-11-26):

- `https://gymlab.dev/es/` returns 200 with `data-explore-trigger` and the search field.
- `https://gymlab.dev/en/` returns 200 with the same header.
- `https://gymlab.dev/search/es.json` returns 200 with **787 guides, 53 sections, 7 pages**.
- The sitemap excludes `/search/` and lists **1,588 URLs**.

## Commits

| Commit | What |
| --- | --- |
| `d7169fb` | `feat(nav)`: global header, Explorar panel, search endpoint/component/lib, gate assertions; removes the cascade and `GUIDES_ENABLED` |
| `e0d538e` | `fix(search)`: anchor the results panel to the field |
| `0abc466` | `fix(search)`: align the results panel to the field's outer edge, not the inner input |
| `918f06f` | `fix(search)`: attach the panel to the field's bottom, not the header border |
| `2025695` | `fix(search)`: square the panel's top corners |
| `8becb46` | `fix(search)`: restore the panel columns after the first Escape |
| `87a7ecb` | `chore(repo)`: track the remaining local mockups and reference images |

## What changed

- **Header** (`src/components/Header.astro`): brand | `Explorar` | search (desktop) |
  ES/EN | CTA. Mobile keeps the mark, wordmark (from 360px up), `Explorar`, the language
  codes and a short `La app` CTA. The wordmark yields only below 330px. The landing
  sections are no longer linked from the header; they are reached by scrolling.
- **Explorar panel**: `Biblioteca` (6 blocks with live counts, link to the hub) and
  `Páginas` (3 calculators, privacy, terms, contact). No landing anchors, no cascade.
- **Search** (`src/components/Search.astro`, `src/lib/search.ts`): bar field on desktop,
  field inside the panel on mobile. Lazy fetch of `/search/{lang}.json`, 120ms debounce,
  accent-folded scoring (title exact/startsWith/includes/meta), limits 6/4/3, grouped
  results, highlight, Arrow/Enter/Escape, `/` shortcut, click-outside. The results panel
  is flush under the field: left edge at the field's outer edge, top at the field's bottom,
  square top corners, width shrinking from 540px when the viewport would clip it.
- **Index** (`src/pages/search/[lang].json.ts`): 787 guide entries + 53 section entries
  (6 blocks + 47 sections) + 7 pages per locale. ES 109 KB, EN 95 KB raw; fetched on first
  focus and shared by both fields.
- **Removed**: the two-level guides cascade, its CSS/script and `GUIDES_ENABLED`. The hub
  (`/es/guias/`, `/en/guides/`) and `src/lib/guides-nav.ts` stay.
- **Docs**: `DESIGN.md` navigation section, `odd/tasks/header-search.md` (feature
  evidence), `odd/tasks/site-menu.md` (cascade replaced note).

## Decisions that must hold

- The bar navigates the site; landing anchors never enter the global menu or the header.
- One bilingual hub with block/section anchors, not 47 per-section hubs; per-section hubs
  would need unique copy and are a separate SEO decision.
- The search is title/section/page only, not article body text. Pagefind is the upgrade
  path if full-text is wanted.
- The results panel belongs to the field: outer left edge, bottom edge, square top.
- No new dependency was added.

## Verification

Source gates after the final build:

- `npm run check:copy`: 40,137/40,137.
- `npm run build`: 1,592 pages.
- `npm run check:i18n`: 26,373/26,373.

Runtime suite (Chrome via CDP, 55/55):

- Results left/top meet the field; 10 hits for `espalda`; groups `Guías|Secciones` and
  `Guides|Sections`; combobox + `aria-expanded`; ArrowDown active/selected; Escape; `/`.
- Explorar: 6 blocks summing 787, 6 page rows; opens/closes with Escape.
- Sticky header: results stay attached after a 600px scroll.
- Mobile 390: panel search replaces the columns; Escape restores them, then closes.
- 360/320 bars fit; 320 hides the wordmark only. No horizontal overflow.
- Indexes: 787/53/7 per locale; every href and anchor resolves; sitemap excludes `/search`.
- Hub: 47 section anchors + 6 block anchors.

## Gotchas worth keeping

- `calcPath` returns a bare route (`/calculadora-1rm`) without locale or trailing slash;
  any public href built from it must go through `localePath`.
- Astro scoped CSS never reaches DOM nodes created by a client script; the result rules
  use `:global()` hanging off the scoped root.
- Astro inlines small module scripts; after changing search JS a normal browser may serve
  the old HTML, so hard-refresh or restart the preview.
- Chrome `--window-size` below ~500px renders a wider page and crops the screenshot; use
  CDP `Emulation.setDeviceMetricsOverride` to test 320/360/390 for real.
- The results panel must use the field wrapper rect, not the inner input rect (the input
  starts after the magnifier and padding).
- The first Escape in the mobile panel dismisses results and restores the columns; the
  second closes the panel.
- The search JSON is served by the Worker as a static asset; the CSP allows `connect-src
  'self'`. The sitemap filter excludes it.

## Open work

- **Owner visual QA on a real device**: the panel and results at 390/768/1280. Everything
  else is machine-verified.
- Optional search upgrades: Pagefind for body full-text; an explicit cache header for
  `/search/*.json`; synonyms/typo tolerance.
- Optional IA: per-section hubs with unique copy; article breadcrumbs linking to the hub.
- The six root JPGs and the mockups were committed on request; they are not part of the
  deployed site. Move or remove them if they were scratch.

## How to resume

```powershell
npm install          # only if node_modules is missing
npm run dev          # or npm run build && npm run preview
```

- Landing: `http://localhost:4321/es/` and `/en/`.
- Search: type `espalda` in the bar, or open `Explorar` on mobile.
- Mockups: `odd/mockups/header-search.html` (A–D), now tracked.
- Feature evidence: `odd/tasks/header-search.md`.
- Gates: `npm run verify` = `check:copy` + `build` + `check:i18n`.
- Deploy: push to `main` (Workers Builds) or `npx wrangler deploy`.

## Relevant files

- `src/components/Header.astro` — bar, Explorar panel, toggle script.
- `src/components/Search.astro` — field, results, keyboard, placement.
- `src/lib/search.ts` — pure ranking.
- `src/pages/search/[lang].json.ts` — index endpoint.
- `src/lib/guides-nav.ts` — 6 blocks / 47 sections / 787 articles per locale.
- `src/data/guides-nav.ts` — taxonomy only; no flag.
- `src/styles/global.css` — header base; `.site-header__nav` removed.
- `src/i18n/es.ts`, `src/i18n/en.ts` — `search` block and `header.ctaShort`.
- `scripts/check-i18n.mjs` — index and header assertions.
- `DESIGN.md` — navigation section.
