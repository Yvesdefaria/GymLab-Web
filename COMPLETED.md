# GymLab Web — Completed Work (Archive)

> Only work that is **100% closed**: merged, deployed where it applies, every checkbox ticked.
> Anything with an open item, an unpushed branch or a pending review stays in `PLAN.md`.
> Last updated: 2026-10-29 · Build: 16 pages · `check:i18n`: 308 assertions · Site live since 2026-10-19, last deployed 2026-10-29
>
> Task-by-task detail lives in `odd/tasks/*.md`; the same history is mirrored in Engram
> (project `webgymlab`). This file is the index, not the source of truth for evidence.

## Index

| Task | Title | Closed | Key deliverable |
| --- | --- | --- | --- |
| T1–T7 | Bootstrap, scaffold, brand, layout, sections, screenshots, legal skeleton | 2026-10-19 | Landing + legal pages on the ported brand system |
| T8 | SEO & performance polish | 2026-10-19 | Per-page meta, canonical, OG/Twitter, robots, sitemap, WebP screens |
| T9 | Deploy to Cloudflare | 2026-10-19 | `gymlab.dev` + `www` live on HTTPS, Worker `gymlab-web` |
| T10 | Phase 3: legal drafting | 2026-10-19 | 11 privacy sections, 8 terms sections, unified contact |
| T12 | App web at `app.gymlab.dev` | 2026-10-22 | Worker `gymlab-app`, deploy on every push, SPA shell verified |
| T13 | Bilingual site ES/EN | 2026-10-21 | `/es/…` + `/en/…`, typed dictionaries, hreflang, gate |
| T14 | Showcase captures | 2026-10-22 | Three real captures at 375w/750w, English in both locales |
| T15a | SEO copy: quick wins, sitemap, calculators, `noindex` | 2026-10-23 | 12 sitemap URLs and three working calculator pages |
| T16a | Cloudflare P0: WAF, rate limit, TLS, HSTS, DMARC, CAA, `security.txt` | 2026-10-24 | Hardening applied and verified in production |
| T16b | Cloudflare P1/P2: RUM, `early_hints`, favicon 404, cache rules | 2026-10-24 | Measurement base and the fixes it justified |
| T17 | Structured data, 404, favicon and brand mark | 2026-10-29 | Honest `@graph` per page, a 404 that renders, a legible icon |

---

## T8 — SEO & performance polish

- Per-page `title`/`description` for `/`, `/privacidad`, `/terminos`.
- Canonical + Open Graph/Twitter in `BaseLayout`; composed 1200×630 `public/og/gymlab-og.jpg`.
- `public/robots.txt` allows everything and points at `https://gymlab.dev/sitemap-index.xml`.
- Screenshots served as responsive WebP (375w/750w) produced by `scripts/optimize-screens.py`;
  sources kept in `assets/screens/` and never shipped.
- Lighthouse on the production preview: performance 96 / accessibility 100 / best-practices 100 / SEO 100.

## T9 — Deploy to Cloudflare

- Domain `gymlab.dev` at DonDominio (19/10/2026–19/10/2027); NS moved to Cloudflare
  (`noel`/`sharon`); parking records removed.
- Worker `gymlab-web` builds with `npm run build` and deploys with `npx wrangler deploy`;
  `wrangler.jsonc` serves `dist` as static assets.
- Custom domains `gymlab.dev` and `www.gymlab.dev` with HTTPS; smoke check passed for pages,
  robots, sitemap, OG and WebP assets.
- Email Routing for `gymlab@gymlab.dev`: destination verified, MX/SPF/DKIM live and verified
  from `1.1.1.1` and `8.8.8.8`, real delivery test OK. Receive-only.
  The `Emails received` counter lags behind delivery: the delivery test is the evidence.
- **What stays open** (tracked in `PLAN.md`): automatic renewal at DonDominio.

## T10 — Phase 3: legal drafting

- App's legal text ported into `/privacidad` (11 sections) and `/terminos` (8 + contact).
- Contact unified to `gymlab@gymlab.dev`; "Última actualización: 5 de septiembre de 2026".
- Reviewed against the app's states (AdMob/IAP future, Sentry/PostHog opt-in, permissions, 14+).
- 2026-10-21: Health Connect disclosure added (Play requirement) — `/privacidad` §6 and §7, `/terminos` §3.
  Deployed as `329ecb3`; production and the app's rationale WebView both show the new version.
- The titular is still unnamed, as in the app text. Add name/NIF/domicile only if a named
  responsible becomes a requirement.

## T12 — App web at `app.gymlab.dev`

- Worker `gymlab-app`, root `gymlab-app`, `npm run build`, `npx wrangler deploy`: every push to
  `main` deploys. `wrangler` is pinned as a devDependency so Workers Builds uses the declared version.
- `wrangler.jsonc`: `assets.directory = "./dist"`, `not_found_handling = "single-page-application"`,
  `routes: [{ pattern: "app.gymlab.dev", custom_domain: true }]`.
- Build `#a88ef28b` green (1m 21s, Node 24.21.0, 1,994 assets).
- Verified live: `/`, `/rutinas`, `/entrenamiento/active` return 200 with the SPA shell; `sw.js`,
  `manifest.webmanifest`, hashed bundles, fonts and exercise images 200; CDP boot with 0 console
  errors and 0 failed requests.
- Fixed on the way: `SITE_URL` (`useSeo.ts`) and `index.html` published `https://gymlab.app` — a
  third-party domain — as canonical.
- Both follow-ups originally listed here are now closed: `public/_headers` gives `/assets/*` and
  `/fonts/*` long-lived immutable caching, and the app is `noindex` with a real `robots.txt`.
- Known and accepted: `/test-animations` is publicly reachable; it is the e2e fixture for
  `test_f43.py` (4 KB, no data, no secrets). It is excluded from the service worker precache.

## T13 — Bilingual site ES/EN

- Locale routes for landing, privacy and terms; `/` 302s to `/es/`.
- `src/i18n/` dictionaries, English typed against the Spanish shape; legal docs kept as structured
  sections so both languages render from one layout.
- Language selector with Spain + UK flags, `aria-current`, always visible and ≥44 px on mobile.
- Primary CTA `Prueba la app` / `Try the app` → `https://app.gymlab.dev`, live since T12.
- Legacy `/privacidad` and `/terminos` 301 to the Spanish pages.
- Reciprocal `hreflang` (es/en/x-default), `og:locale`, canonical and alternates normalised to the
  trailing-slash form; sitemap emits both locales and excludes the stubs.
- English legal pages carry the courtesy-translation clause approved 2026-10-22. Spanish prose moved
  verbatim (0 paragraphs reworded).
- Showcase screenshots are English-only in both locales (owner decision): the app ships English by
  default, so they show a first launch. A per-language set was considered and rejected.

## T14 — Showcase captures

- Dedicated pipeline `scripts/capture-showcase.py`, separate from the generic capture: pick language,
  skip onboarding, import the generated backup through Ajustes, assert the data landed, start the rest
  timer and shoot.
- `scripts/optimize-screens.py` emits the language-suffixed set at 375w/750w; stale derivatives removed.
- Three captures with real data (53 workouts, 17-day streak, 16.4k weekly volume).
- The session frame required an app change: the fixed action bar hides while the rest timer runs.
- Verified in production: both locales reference the new files, served WebP are SHA-256 identical to
  the local ones, and the old paths return 404.

## T15a — SEO copy, sitemap, calculators

- Quick wins: `description` gained «gratis» and «sin conexión»; an H2 carries «app de entrenamiento»;
  two FAQ entries added. `alt` texts audited — they were already descriptive. Commit `78dc522`.
- Sitemap `hreflang` matched to the HTML (`es`/`en`/`x-default`); `/sitemap.xml` 301s to
  `/sitemap-index.xml`. Commit `5da5662`.
- Three calculator pages per locale (`calculadora-1rm`, `calculadora-imc`, `calcular-calorias`), real
  formulas, `#calculadoras` section on the landing, cross-links. Commits `1b96140`, `2db5bde`, `df2a77d`.
- App `noindex` + real `robots.txt` so traffic enters through the landing: `d735a532` and `297c12cc`
  in `ProyectoGymLab`, verified in production.
- Result: the sitemap publishes 12 URLs and `app.gymlab.dev` is no longer indexable. Both structural
  problems from the audit are closed.
- **Brand constraint that stays in force**: the H1 is not rewritten. The category term enters through
  an H2 or subtitle; the site's voice is not keyword-stuffed.

## T16a — Cloudflare P0: security and abuse

- **Rate limiting + WAF custom** (2026-10-24): `http_request_firewall_custom` blocks `/.env`, `/.git/`,
  `/wp-*`, `xmlrpc.php`, `wlwmanifest.xml`, `/config.json`; `http_ratelimit` at 100 req/10 s per IP +
  colo with a 10 s block (Free plan ceilings). Verified: the probe paths return 403, the four content
  pages return 200.
- **TLS 1.0 → 1.2** and **HSTS** `max-age=15552000; includeSubDomains` on apex, www and app.
  Verified: TLS 1.0 handshake fails, TLS 1.2 answers.
- **DMARC + CAA**: `_dmarc` TXT `v=DMARC1; p=none; rua=mailto:gymlab@gymlab.dev`; CAA `issue` for
  `pki.goog`, `letsencrypt.org`, `sectigo.com` plus `iodef`, verified over public DoH. Cloudflare also
  publishes its Universal SSL CAs, so the effective set is wider than the hand-loaded one.
- **`security.txt` + landing headers**: `public/.well-known/security.txt`, `public/_headers` (nosniff,
  Referrer-Policy, X-Frame-Options, Permissions-Policy, CSP report-only). Verified after deploy.

## T16b — Cloudflare P1/P2

- **RUM/Web Analytics is installed** since zone creation (`siteTag 59ae492f…`, ruleset `enabled: true`,
  `lite: true`). The earlier audit claimed there was none. `lite: true` is the cookie-less mode and is
  kept deliberately, matching "cookieless analytics only" in `AGENTS.md`.
- **The MCP does expose analytics.** `/zones/:id/analytics/dashboard` and `/analytics/colos` are sunset
  (`404 · 1015`), but the **Analytics SQL API** works. Recipe kept in `PLAN.md`.
- **TTFB measured, not reproduced**: a fresh client (Spain) gets ~340 ms from the edge including
  DNS + TLS on `/`, `/es/`, `/en/` and assets. The 1.24 s from RUM is 21 client samples, not origin
  latency. No action taken.
- **`early_hints: on`** (was `off`).
- **`/favicon.ico` no longer 404s** — generated at 16/32/48 from `icon-192.png`, verified 200 in production.
- **Cache rules**: `public/_headers` serves `/_astro/*` with `max-age=31536000, immutable` (verified on
  the real CSS), and a zone Cache Rule applies the same to `app.gymlab.dev/assets/*`
  (`CF-Cache-Status: HIT`, `immutable`).

---

## T17 — Structured data, 404, favicon and brand mark

Merged to `main` (`f89b637`, merging `feat/seo-structured-data` and `feat/404-y-favicon`), plus
`10df7a4` for the robots dedup, and deployed by Workers Builds on the same push.

- **JSON-LD**: one self-contained `@graph` per page. The landing carries `Organization`, `WebSite`
  and `SoftwareApplication`; the six calculator pages carry `Organization`, `WebSite`,
  `WebApplication` and `BreadcrumbList`. `FAQPage` removed — Google retired that rich result on
  2026-05-07 and dropped the documentation in 2026-10. `operatingSystem` is now `Web`, the only
  platform that actually ships.
- **404**: there was no `404.astro` and no `404.html`, so every unmatched path returned HTTP 404
  with a **0-byte body and no `Content-Type`**. `not_found_handling: "404-page"` in `wrangler.jsonc`
  is what makes Workers serve the page — creating the page alone would not have helped. Verified in
  production: `404 · 7076 bytes · text/html`, in the site's own design.
- **One robots directive per page**: the merge left two metas on the 404
  (`index, follow, max-image-preview:large` plus `noindex`). Google applies the most restrictive, so
  the result was correct by accident; `10df7a4` made it explicit.
- **Favicon**: `BaseLayout` overrode the implicit `/favicon.ico` with `icon-192.png`, which is the
  wordmark and is illegible at 16 px; the existing `.ico` had the same artwork. New `favicon.svg`
  cropped to the dense core of the emblem, `favicon.ico` regenerated at 16/32/48 from it, and
  `site.webmanifest` added over the existing 192/512/maskable icons.
- **Brand mark**: `brand/logo_marca.svg` crops the 600×600 canvas to the emblem (2.93:1). The header
  mark went from a drawn 14.1 × 4.8 px to 35.2 × 12; the footer to 29.3 × 10. Both are sized by
  height so the real aspect is respected instead of forcing a square with dead space.
- **Zone rule, live before the deploy**: the rate limit now excludes `/assets/*`
  (`not starts_with(http.request.uri.path, "/assets/")`). A 216-entry service-worker precache could
  not install while chunk downloads counted against 100 requests per 10 s. Verified: 140 requests to
  `/assets/*` return 200, 120 requests to `/` still get blocked after ~100.
- **Gate**: `check:i18n` now has **308 assertions** and covers the `@graph` shape,
  `operatingSystem === 'Web'`, `url === canonical`, the absence of `FAQPage`, and that no `@id`
  reference dangles on a calculator page.

## Appendix A — SEO audit of the copy (2026-10-23)

Verdict: the copy made **partial** match with category searches. The category term was in the title
but not in the H1, and there was no indexable surface for long-tail queries.

| Element | Text indexed then | Search terms |
| --- | --- | --- |
| `<title>` | `GymLab — App de entrenamiento y progreso` | ✅ «app de entrenamiento» (head term) |
| `description` | «Planifica tu rutina, registra cada serie… 873 ejercicios y 9 calculadoras…» | ✅ rutina, ejercicios, calculadoras · ❌ «gratis», «sin conexión», «gimnasio» |
| **H1** | `Deja de entrenar de memoria` | ❌ zero search terms |
| H2 | «De la rutina al gráfico» · «Así se ve mientras entrenas» · «Tus datos viven en tu teléfono» | ⚠️ partial |
| FAQ | «¿Funciona sin conexión?», «¿Sirve si estoy empezando?» | ✅ matches real long-tail questions |

Structural problem: the sitemap had **3 URLs** while the niche volume lives in the long tail — the app
has **9 calculators and 873 exercises with no web page exposing them**, and `app.gymlab.dev` was
indexable and competing with the landing. Both were closed by T15a.

Volumes are still unknown: real numbers have to come from Search Console (property verified
2026-10-22) or Keyword Planner. Any figure before that would be invented.

## Appendix B — Traffic baseline (19–23 Oct, 5 days with data)

Measured with the Cloudflare Analytics SQL API. This is the **before** snapshot for the WAF and the
new `/assets/*` rate-limit exclusion; it should not be compared naively with later readings.

| Metric | Value |
| --- | --- |
| Total HTTP requests | **16,627** |
| **Real pageviews (RUM)** | **57** (0 flagged as bot) |
| `200` / `404` | 7,902 / **6,551 (39%)** |
| Other statuses | 301 944 · 304 491 · 302 371 · 307 132 · 403 115 · 204 85 |
| By host | gymlab.dev 7,536 · app 4,788 · www 1,641 · `:443` 492 · `:8443` 439 · `:8080` 438 |
| Countries (RUM) | US 48 · CA 4 · IN 2 · BR 1 · SG 1 · KR 1 |
| Referrers | 56 direct · 1 from `app.gymlab.dev` (**zero search/organic**) |
| Devices / browsers | desktop 37 · mobile 20 / Chrome 29 · MobileSafari 11 · ChromeMobile 9 · Edge 5 |
| Paths (RUM) | `/` 43 · `/es/` 14 |
| Average LCP | **3.31 s** (12 of 28 samples above 2.5 s) |
| Average TTFB | **991 ms** (desktop 1.24 s · mobile 0.24 s) |

Top 404s, all exploit scanning: `/wp-admin/install.php` 77 · `/.env` 57 · `/favicon.ico` 39 ·
`/.git/config` 36 · `/.env.dist` 32 · `/application/.env` 28 · `/xmlrpc.php` 27 · `/.env.local` 26 ·
`/2019/wp-includes/wlwmanifest.xml` 26 · `/config.json` 24.
