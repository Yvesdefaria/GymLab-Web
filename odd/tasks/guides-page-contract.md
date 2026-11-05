# Guides page contract

Reference for building every page of the guides library from the archived content in
`C:\Users\Yves De Faria\Desktop\cambiatufisico.com`. The two pages built so far are the worked
examples this contract describes: `/es/rutinas-espalda/` + `/en/back-routines/` (eleven routine
tables) and `/es/ejercicios-espalda/` + `/en/back-exercises/` (ten exercises, no tables).

## 1. Files

| Path | Role |
| --- | --- |
| `src/content/articles/<lang>/<slug>.md` | One article per locale. The entry id is `<lang>/<slug>`. |
| `src/content.config.ts` | Frontmatter schema. A missing required field fails the build. |
| `src/pages/[lang]/[...slug].astro` | Route: `getStaticPaths` emits one path per entry. |
| `src/layouts/ArticleLayout.astro` | The page shell: ruled header, hero, sticky index, prose, CTA. |
| `public/content/<slug>/hero.jpg` | Vendored hero image. One folder per article. |
| `src/data/guides-nav.ts` | Menu data (6 blocks, 57 sections, counts). `GUIDES_ENABLED` stays `false` until the hub exists. |
| `odd/tasks/content-pages.md` | The 792-page checklist. Mark `ES` and `EN` per page. |

## 2. Frontmatter

```yaml
---
lang: es
title: "Rutinas de espalda: 11 planes para amplitud, densidad y fuerza"
description: "Once rutinas de espalda para amplitud, densidad, fuerza y definición, con series, repeticiones y los mejores ejercicios de espalda para cada objetivo."
h1: "Rutinas de espalda y consejos de entrenamiento"
block: "Entrenamiento"
section: "Entrenamiento de la Espalda"
hero: "/content/rutinas-espalda/hero.jpg"
heroAlt: "Soldado realizando un peso muerto en un gimnasio"
heroCredit: "Wikimedia Commons · U.S. Army / Spc. Micah Wilson · dominio público"
lead: "Las **rutinas de espalda** son, junto al día de piernas, los entrenamientos más exigentes. La espalda es un **grupo muscular** grande y necesita un trabajo planificado para movilizar y estimular todos sus músculos."
tags: ["Amplitud", "Densidad", "Fuerza", "Definición"]
meta: "Guía · 11 rutinas"
alternate: "/en/back-routines/"
updated: "2026-11-05"
---
```

| Field | Rule |
| --- | --- |
| `lang` | `es` or `en`. Drives the URL and the locale switch. |
| `title` | 45–60 chars. Primary keyword first, then a concrete promise. No `▷`, no `\|` suffixes from the archive. |
| `description` | 150–160 chars. Primary keyword + what the page delivers. No invented claims. |
| `h1` | The search phrase, in plain language. One per page. |
| `block` / `section` | From `paginas.csv`. Power the breadcrumb and the menu. |
| `hero` | Public path of the vendored image. Optional; omit the hero rather than use a placeholder. |
| `heroAlt` | What the image shows. Used as the base of the rendered `alt`. |
| `heroCredit` | **Required when `hero` exists.** Appends to the `alt`; the image has no visible caption. |
| `lead` | The first paragraph, moved out of the body. `**bold**` is the only markup rendered. |
| `tags` | 3–5 stencil chips. They describe the page's angles, not the product. |
| `meta` | Right side of the header rule: `Guía · N rutinas` (or `N ejercicios`, `N consejos`). |
| `alternate` | The same article in the other locale. Drives canonical and hreflang. |
| `updated` | ISO date. Quote it, or YAML parses it as a date object and the build fails. |

## 3. Page anatomy (visual order)

1. **Header rule**: `section` on the left in gold caps, `meta` on the right in muted caps.
2. **H1**: Oswald 600, `clamp(2.5rem, 5.6vw, 4.7rem)`, max `18ch`, balanced.
3. **Lead**: one paragraph, max `58ch`, muted, with bold key terms.
4. **Chips**: `tags`, 2px radius, gold border, uppercase.
5. **Hero**: 16:9, max height `32rem`, `object-fit: cover`. **No caption**; the credit lives in the alt.
6. **Grid** at ≥900px: a `240px` sticky index + the body (`max-width: 44rem`).
7. **Index**: `En esta guía` + the number of H2s; `01`–`NN` in gold, entries in uppercase.
8. **Body**: paragraphs `68ch`; H2 numbered automatically; H3 in Oswald; lists with gold markers; notes as blockquotes.
9. **End CTA**: one line + `Abrir la app` (primary) + `Volver al inicio` (ghost).

## 4. Tables

Every routine table is exactly three columns: **Exercise | Sets | Reps**.

- Markdown table with a header row and `| --- | --- | --- |`.
- Rendered `table-layout: fixed` with widths **58% / 21% / 21%**, so Sets and Reps land on the same x in every table.
- First column: Oswald 500, chalk. Sets and Reps: Oswald, tabular, right-aligned, gold.
- **Footnotes never go inside the table.** A single-cell row breaks the grid. Write them after the table as a blockquote: `> **\*** ...`, followed by a blank line.
- One footnote per table maximum; if a second exception appears, it belongs in the prose.
- No `rowspan`, no merged cells, no table inside a table.

## 5. Images

- **Licence**: public domain or CC0 first; CC BY only when the credit travels in the alt. Never hotlink:
  the CSP is `img-src 'self'`.
- **Vendor** the file under `public/content/<slug>/hero.jpg`; keep the original in the archive.
- **Alt** = `heroAlt` + `heroCredit`, composed by the layout. Screen readers get the description and
  the licence; sighted readers see no caption.
- **Credit format**: `Wikimedia Commons · <author> · <licence>`.
- **Pipeline (pending, Phase 5)**: `<Picture>` with AVIF/WebP at 480/768/1200 px, ≤150 KB at 1200 px.
  Until then, keep the JPEG under ~500 KB.
- **One image per article** for now. Inline images follow the same licence rule and keep their
  original position.

## 6. Copy for search

Rewrite the archive copy so it answers what people search, without changing a single fact.

- **Title**: `<primary keyword>: <number or benefit>`. Example: `Rutinas de espalda: 11 planes para
  amplitud, densidad y fuerza`.
- **H1**: the phrase people type. Example: `Rutinas de espalda y consejos de entrenamiento`.
- **Lead**: keyword in the first sentence, then the concrete promise.
- **H2**: each section answers a real query variant. The shapes that work:
  - how to choose / how to optimise
  - the most effective routine
  - by goal: volume, strength, definition, congestion
  - by level: beginners
  - by context: home with dumbbells, 15 minutes
  - by muscle region: upper/lower lats
  - advanced tips
- **Keyword use**: primary keyword in title, H1, lead and first H2; then 3–6 natural mentions in the
  body. No stuffing, no keyword lists.
- **Register**: neutral Spanish, `tú`. Never `vosotros` (`descansad`, `tenéis`, `descanséis`), never
  voseo (`Llevá`), never `el sitio indicado`. Fix the archive's typos (`Como` → `Cómo`, `simultaneo`
  → `simultáneo`, `porque a levantar pesado` → `porque vas a levantar pesado`).
- **Preserve**: the routines, sets, reps, exercises, order, warnings and disclaimers. The copy
  changes the wording, not the training advice.
- **Never invent**: results, testimonials, prices, ratings, studies, dates or medical claims.

### Copy gate (mandatory)

Run this on every page before marking `ES`/`EN` in `content-pages.md`:

1. Load the `copy-editing` skill (mode B: preserve the author's voice and argument).
2. Read `.agents/product-marketing.md` (brand voice, words to avoid, proof, no price claims).
3. Run the seven sweeps: clarity, voice/tone, so-what, prove-it, specificity, emotion, zero risk.
4. Run the AI-tell check: no contrast reveals, no negation lists, no redundant colon reveals, no
   stock phrases, at most 2 em dashes in the body.
5. Check neutral Spanish: 0 vosotros, 0 voseo, no regionalisms (`cortacésped` → `cortadora de césped`).
6. Run `npm run check:copy`; it enforces title 45–60, description 150–160, required frontmatter,
   the em-dash cap, the register rules and the hero credit.

`copywriting` is for new copy; the SEO rules live in this contract.

## 7. Bilingual

- Every article exists twice: `src/content/articles/es/<slug-es>.md` and
  `src/content/articles/en/<slug-en>.md`.
- Both frontmatters point at each other through `alternate`; canonical and hreflang are generated
  from it.
- Slugs may differ per locale: Spanish keeps the archive's `source`; English uses the English
  keyword (`/en/back-routines/`).
- The English file is a translation of the same article, not a different piece.
- The header language switch resolves through the `alternates` prop that `BaseLayout` passes to
  `Header`; `check:i18n` asserts the switch for every pair, so a link to `/en/<slug-es>/` fails the
  gate.

## 8. Navigation

- `GUIDES_ENABLED` stays `false` until `/es/guias/` and the section hubs exist; otherwise the menu
  ships 57 `#` links.
- The article needs at least: one link from its section hub, 2–3 sibling links, and one link to a
  calculator. Today it has none (in-degree 0).
- The breadcrumb (`block › section`) is text; it becomes a link when the hub ships.

## 9. SEO and structured data

- **Pending (Phase 1)**: `Article` + `BreadcrumbList` JSON-LD, author = Organization GymLab,
  `datePublished`/`dateModified`, `og:type=article`, per-article OG image (1200×630).
- Today the article ships **zero** JSON-LD and `og:type=website`.
- The sitemap pairs locales through `ROUTE_PAIRS` in `astro.config.mjs`. Add the pair there, and in
  `scripts/check-i18n.mjs` (`PAGES` and `ROUTES`), or the alternates and the switch check are wrong.

## 10. Verification before publishing a page

```powershell
npm run check:copy
npm run build
npm run check:i18n
# or: npm run verify
```

- Build: `22 pages` for the current site; +2 per article.
- Gates: **144/144 copy checks** and **434/434 i18n checks**. The copy gate enforces title/description
  length, frontmatter, register and AI tells. The i18n gate covers route existence, canonical,
  hreflang, redirects, sitemap alternates, the header language switch, landing SEO and the
  calculator/JSON-LD contract.
- Manual checks the gate does not cover yet:
  - Every TOC anchor jumps to its H2.
  - Every table has 3 columns and the same column geometry.
  - No `#` links and no `.md` links in the rendered body.
  - At 390px the table still reads (fixed widths wrap the first column).
- Then push. Workers Builds deploys on every push to `main`.

## 11. Checklist for a new page

1. Pick the row in `odd/tasks/content-pages.md`; read its `.md` and frontmatter in the archive. Load the
   `copy-editing` skill and read `.agents/product-marketing.md` before writing.
2. Write `title`, `description`, `h1`, `lead` with the primary keyword (sections 6).
3. Choose the hero: public domain/CC0, vendor it, write `heroAlt` and `heroCredit`.
4. Copy the body; remove the first paragraph (it becomes `lead`).
5. Rewrite the H2s to the query shapes; fix register and typos.
6. Move every table footnote out of the table as `> **\*** ...` + blank line.
7. Normalise tables to 3 columns.
8. Translate to English; set `alternate` in both files.
9. Add `tags`, `meta`, `block`, `section`, `updated`.
10. Add the pair to `ROUTE_PAIRS` (`astro.config.mjs`) and to `PAGES`/`ROUTES`
    (`scripts/check-i18n.mjs`).
11. Run `npm run check:copy`; build; run `npm run check:i18n`; open both locales, check the language
    switch and the tables at 390px.
12. Mark `ES`/`EN` in `content-pages.md`; commit the pair.

## 12. Known gaps (tracked in `PLAN.md` → phases)

- Phase 0: deploy the articles; the language switch is fixed and asserted by the gate.
- Phase 1: Article JSON-LD, `og:type`, dates, per-article OG.
- Phase 2: hub, internal links, `llms.txt`, redirect map from the old domain.
- Phase 3: one truthful CTA (web app vs stores), trust line.
- Phase 4: calculators to 800+ words; copy sweep for the rest of the archive.
- Phase 5: image pipeline, required licence fields, cache headers.
- Phase 6: 20-page pilots, measure on 2026-11-19, then scale.
