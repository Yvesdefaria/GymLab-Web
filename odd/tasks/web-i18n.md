# Web i18n — Spanish + English with locale routes

- Feature: web-i18n
- Status: done (2026-10-21) — WU1, WU2 and WU3 closed; two owner decisions open
- Branch: main (solo-project; work-unit pushes standing-authorized, announced per push)
- Delivery strategy: exception-ok — direct-to-main work units while the branch stays under ~400 authored lines per review slice

## Objective

Serve the whole marketing site in Spanish and English, with `/es/…` and `/en/…` as the
canonical routes, a language selector in the header (Spain + UK flags), reciprocal
`hreflang`, and a primary call to action that opens the web app at `https://app.gymlab.dev`.

## Decisions taken (owner-authorized, 2026-10-21)

- Locale prefixes are mandatory for both languages: `/es/` and `/en/` are canonical; there is no
  unprefixed canonical content.
- Spanish stays the default and the reference version. English is `en-GB` (UK flag).
- The web app CTA targets `https://app.gymlab.dev` **even though the subdomain does not resolve
  yet**. A dead link is explicitly accepted for now; the app deploy is a later, separate step
  (T12) and must not be started here.
- Legacy URLs `/privacidad` and `/terminos` must keep working with a real 301 to `/es/…`:
  Play Console and the app's Health Connect rationale already point at
  `https://gymlab.dev/privacidad`. Breaking it breaks a verified compliance requirement.
- `/` resolves to `/es/` with a 302.
- The canonical URL form is the trailing-slash one (`/es/privacidad/`), enforced with
  `trailingSlash: 'always'`. Canonical, alternates, internal links and the 301 targets all use it,
  so a page never advertises two different forms of itself.
- Spanish copy is already approved. It is moved, never rewritten. English is a new, natural
  translation — not a literal one.

## Route map

| URL | Content |
|---|---|
| `/` | redirect → `/es/` |
| `/es/`, `/en/` | landing |
| `/es/privacidad`, `/en/privacidad` | privacy policy |
| `/es/terminos`, `/en/terminos` | terms |
| `/privacidad` | 301 → `/es/privacidad` |
| `/terminos` | 301 → `/es/terminos` |

Production redirects live in `public/_redirects` (Cloudflare Workers static assets parses it from
the assets directory). Because `_redirects` is not applied by `astro dev`, each redirected path
also keeps a tiny static fallback page (meta refresh + JS + canonical link) so local navigation
behaves the same.

## Module API

```
src/i18n/index.ts
  LOCALES = ['es', 'en'] as const
  type Lang = 'es' | 'en'
  DEFAULT_LANG = 'es'
  getLang(pathname: string): Lang              // '/en/…' → 'en', everything else → 'es'
  useTranslations(lang: Lang): Dict            // the whole dictionary for that language
  localePath(lang: Lang, path: string): string // '/es' + path, normalised
  localeSwitchPath(pathname: string, target: Lang): string // same page in the other language
  type Dict = typeof es                        // en.ts is annotated with it → missing keys fail the build
```

```
src/i18n/es.ts        // UI, landing, chrome, meta — Spanish (moved verbatim)
src/i18n/en.ts        // same shape, en-GB
src/i18n/legal/es.ts  // privacy + terms documents, Spanish
src/i18n/legal/en.ts  // privacy + terms documents, en-GB
```

Components resolve the language from `Astro.url` (`getLang(Astro.url.pathname)`) instead of
receiving it through props: `Header`, `Footer` and every section are rendered by `BaseLayout`
and by the pages, and prop plumbing across that tree buys nothing on a static site.

Legal documents are structured data, not raw HTML: a list of `{ id, title, paragraphs[] }`
sections, so the same layout renders both languages. Inline emphasis is expressed with a small
`**bold**` convention resolved by the layout, or dropped when it does not survive translation.

## Copy rules

- Spanish: unchanged from today's approved copy (neutral, tuteo, no voseo, no regionalisms).
- English: `en-GB`, natural gym English, same brevity and rhythm as the Spanish. No literal
  calques, no marketing filler, no em-dash-heavy cadence.
- Numbers, product facts and claims stay identical in both languages: 873 exercises, 9
  calculators, 68 templates, offline, local-first.
- All `aria-label`, `alt` and meta titles/descriptions are translated too.

## CTA

- Header: the primary slot becomes `Prueba la app` / `Try the app` → `https://app.gymlab.dev`.
- Hero: primary `Prueba la app` / `Try the app`; the existing ghost secondary stays
  (`Ver funciones` / `See the features`) pointing at the in-page anchor.
- The waitlist mailto (`Avísame cuando salga` / `Let me know when it ships`) keeps living in the
  closing band, which is its natural home.

## Language selector

Two flag links (Spain, United Kingdom) in the header, always visible, both flags shown, current
language marked with `aria-current` and a visible active state. Flags are inline SVG (no asset
dependency, no extra request), `aria-hidden`, paired with the visible `ES` / `EN` text so the
control never depends on flag recognition. Touch target ≥ 44 px on mobile.

## SEO

- `<html lang>`, `og:locale` (`es_ES` / `en_GB`), canonical per URL.
- Reciprocal `<link rel="alternate" hreflang="es|en|x-default">` on every page; `x-default`
  points at the Spanish URL.
- `@astrojs/sitemap` emits alternates for both locales.
- English legal pages carry a courtesy-translation note stating the Spanish version prevails
  (**owner to confirm the wording**).

## Tasks

### T1 — i18n plumbing, chrome and landing (ES + EN)

- [x] `src/i18n/` module + full Spanish dictionary extracted from today's components
- [x] English landing dictionary (en-GB), faithful to the approved Spanish
- [x] `src/pages/[lang]/index.astro` with `getStaticPaths` for both locales
- [x] `Header`, `Footer`, all seven landing sections consume the dictionary
- [x] Language selector + app CTA as specified
- [x] `public/_redirects` + `src/pages/index.astro` fallback
- [x] `npm run build` green; both landings render with no Spanish leftovers in `/en/`

### T2 — legal pages (ES + EN) and legacy URLs

- [x] `src/pages/[lang]/privacidad.astro` and `[lang]/terminos.astro`
- [x] Legal documents as structured data in both languages
- [x] `/privacidad` and `/terminos` 301 + dev fallbacks
- [x] `LegalLayout` reads its chrome from the dictionary (Legal, last updated, disclaimer)

### T3 — SEO, verification and docs

- [x] hreflang alternates + canonical + `og:locale` verified on all 4 pages × 2 languages
- [x] sitemap contains both locales with alternates
- [x] `scripts/check-i18n.mjs` — deterministic post-build check: route set exists, every page
      declares reciprocal alternates, no `/en/` page contains a known Spanish sentinel
- [x] `PLAN.md`, this document and Engram updated

## Verification

- `npm run build` (the only runnable deterministic gate in this repo; there is no test runner,
  so the test-first policy is applied as a post-build structural check instead of RED/GREEN)
- `node scripts/check-i18n.mjs` after the build
- Manual pass in `npm run dev` at 375 px and 1280 px: selector stays visible and tappable,
  no layout shift, CTA reaches `https://app.gymlab.dev` (expected to fail DNS for now).

## Evidence (2026-10-21)

- `npm run build`: 9 pages green (`/`, `/es/`, `/en/`, stub `/privacidad`, stub `/terminos`,
  `/es/privacidad/`, `/en/privacidad/`, `/es/terminos/`, `/en/terminos/`).
- `npm run check:i18n`: **82/82** assertions — existence, `<html lang>`, canonical, three reciprocal
  alternates, `og:locale`, no Spanish sentinel under `/en/`, noindex stubs, the three `_redirects`
  rules, sitemap with alternates and without stubs.
- Spanish preservation: privacy (12 sections / 31 paragraphs / 2 list items) and terms (9 sections /
  18 paragraphs) render identically to `HEAD`; 0 paragraphs reworded. Only the representation
  changed (`**bold**`, `{{contact}}`).
- Narrow viewport measured, not eyeballed: true 375 px viewport (`innerWidth 375`, `scrollWidth 360`)
  shows no overflow; the only element past the edge is the decorative `floor-hero__beam`.
- Language switch verified `/es/` ↔ `/en/`; the Union Jack is drawn with the counterchanged saltire
  (the first pass had a symmetric saltire, which is not the UK flag).
- CTA `https://app.gymlab.dev` present in the header and the hero of both landings; the host is
  still `ENOTFOUND` by design.

## Open items for the owner

- Legal English is a courtesy translation: confirm the "Spanish version prevails" note.
- `app.gymlab.dev` does not resolve yet by design; the CTA is knowingly dead until T12.
