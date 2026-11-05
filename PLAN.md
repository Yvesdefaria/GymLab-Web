# GymLab Web — Continuation Plan

Handoff document to continue this project in a new session. Canonical project rules live in
`AGENTS.md`. Closed work and the measurement baselines are archived in `COMPLETED.md`; task-by-task
evidence lives in `odd/tasks/*.md` and in Engram (project `webgymlab`).

Last updated: 2026-11-04.

## Where we are

- Repo `Yvesdefaria/GymLab-Web` → local `WebGymLab`. Stack: Astro + MDX + Tailwind v4 (CSS-first),
  TypeScript strict, fully static. Languages `es` (default) and `en-GB`, both under a locale prefix.
- Production is **live** at `https://gymlab.dev`, served by the Worker `gymlab-web` with static assets.
  It is not Cloudflare Pages. Deploy with `npx wrangler deploy`.
- `npm run build` green (**16 pages**) and `npm run check:i18n` green (**314 assertions**).
- The sitemap publishes **12 URLs**; `app.gymlab.dev` is `noindex` with a real `robots.txt`.
- The landing, the three calculators, the 404 and the legal pages all ship in both locales.
- Measurement and the SQL recipe: see "Reading analytics" below and `COMPLETED.md` Appendix B.

## Deployed on 2026-10-29

`main` is at `10df7a4` and Workers Builds deployed it on the push. The 404, the favicon, the brand
mark and the JSON-LD graph are live. Full detail in `COMPLETED.md` → T17.

Verified against production, not the build:

```
/pagina-que-no-existe/   404 · 7076 bytes · text/html   (was: 404 · 0 bytes · no content-type)
/favicon.svg             200 · image/svg+xml
/favicon.ico             200 · image/vnd.microsoft.icon
/site.webmanifest        200 · application/manifest+json
/brand/logo_marca.svg    200 · image/svg+xml
/es/calculadora-imc/     @graph with WebApplication + BreadcrumbList
```

The zone rate-limit rule also changed and is live: it now reads
`not starts_with(http.request.uri.path, "/assets/")` (ruleset version 2). The 216-entry service-worker
precache could not install while chunk downloads counted against 100 requests per 10 s of the Free
plan. Verified: 140 requests to `/assets/*` return 200; 120 requests to `/` still get blocked after
~100.

Two more zone changes happened the same day, both evidence-driven (see `COMPLETED.md` → Appendix C):

- `early_hints` was turned **off**. On, it produced 832 weighted `504` responses in six days
  (re-measured 2026-11-04; the original note said 671), all from
  `requestSource = "earlyHintsCache"`, against zero before.
- The social card gained `twitter:image:alt`, `og:image:type` and `og:locale:alternate` (`99f1ed2`).

## Review 2026-11-04 — traffic, SEO and security audit

Independent audit against the live zone (`64ab68…1063` / `bc4d1b…b05b`), the public HTML,
`sitemap-0.xml`, response headers and the deployed bundle. Raw dumps live in the sibling
`ProyectoGymLab/reports/` folder: `cloudflare-gymlab-2026-11-04.md` and
`auditoria-gymlab-2026-11-04.md`.

### Headline numbers (30 days)

Re-measured on 2026-11-04 against the live zone with the Cloudflare SQL API
(`events.httpRequests`, `2026-10-05T00:00Z` → `2026-11-04T00:00Z`):

| Metric | Value | Note |
| --- | --- | --- |
| Total requests (weighted) | 52,514 | 37,788 observed rows |
| `app.gymlab.dev` | 15,908 (30.3%) | the app itself, not a preview |
| Indexable URLs in sitemap | 12 | matches the T15 baseline |
| Web Analytics (RUM) | unusable here | the beacon is never injected on Worker responses; see below |
| Verified bots | 3,110 | AI Search 1,770 · Crawler 600 · AI Crawler 590 (audit, not re-measured) |
| Top content path after `/` | `/wp-admin/install.php` | 1,341 requests — scanning noise |

### Human traffic: what is measurable and what is not (verified 2026-11-04)

**Web Analytics (RUM) cannot measure this site.** Cloudflare's own FAQ says RUM *"cannot collect
metrics from Worker subrequests"*, and both `gymlab.dev` and `app.gymlab.dev` are served by Workers.
Confirmed in the served HTML: no `cloudflareinsights`, `data-cf-beacon` or `/cdn-cgi/rum` reference,
even though the Web Analytics site is configured with `auto_install: true`. The 30 "pageviews" the
RUM dataset reports are therefore not a human signal — they arrive from US, Taiwan, China, Belarus,
Russia, Korea, Canada and Uruguay, including a `browser: Unknown` row, which is a headless-client
pattern, not an audience.

**Cloudflare has no "real human" metric.** Per
[About Cloudflare Analytics](https://developers.cloudflare.com/analytics/faq/about-analytics/):
*"Once Cloudflare identifies a unique IP address for a request, we identify such request as a visit"*,
and a bot, plugin or API consuming partial content *"counts as a unique visitor"*. The Free-plan
`Analytics → Traffic → Web Traffic` panel exposes **Unique Visitors**, and the doc warns those
metrics *"include legitimate user requests as well as crawlers and threats"*.

**The only signal an HTML-only scraper cannot fake is rendering.** A client that renders the page
also fetches the CSS bundle and the fonts:

| Signal (30 days) | Weighted |
| --- | --- |
| HTML document loads (`/es/`, `/en/`, calculators) | 1,647 |
| CSS bundle loads | 210 |
| Font loads (`woff2`) | 882 |

So **87% of the page traffic never rendered**, and part of the remaining 210 has impossible UAs
(`Chrome/125` paired with `Edge/12.246`, `Chrome/134.0.0.0 Safari/537.3`, `HeadlessChrome/155`).
Plausible real browsers: **between ~30 and ~130 in 30 days**. That is the honest range; anything
more precise is invented.

**The right method from here:** read **Unique Visitors** in `Analytics → Traffic` (edge, server-side,
unblockable, 24 h delay on Free) and separate bots with `botScore` / Security Analytics — never with
a JS beacon. The SQL API does not expose `uniques`; only the GraphQL API
(`httpRequests1dGroups.uniq.uniques`) and the dashboard do.

### Confirmations of open items

- **T16 WAF works, with corrected numbers.** Daily `gymlab.dev` 404s: 188 / 969 / 5,309 / 645 /
  1,329 (19–23 Oct) → 60 / 594 / 374 / 804 / 2 / 98 / 167 / 395 / 2 / 161 / 129 (24 Oct–3 Nov),
  while 403s rose to 84–1,269/day. The direction holds; the audit's "1,056–2,432" and "2–359"
  ranges do not.
- **T16 `early_hints` revert holds.** Every 504 in the window is `requestSource = earlyHintsCache`,
  24–29 Oct (**832 weighted** on re-measurement; the earlier note said 671 — different window and
  sampling); zero after 29 Oct.
- **T15 sitemap baseline.** 12 URLs, 6 pages × 2 locales, correct `hreflang`.
- **`botScore` still 403.** Confirms the scope block in "Reading analytics".
- **No secrets in the app bundle.** `/assets/index-C7OKhvMt.js` (92 KB) has no `service_role`,
  JWT, `sk-`, `AIza`, private key or AWS key.

### Corrections to the audit (verified 2026-11-04)

Three claims did not survive re-verification against the live zone and the repo:

1. **`app.gymlab.dev` is not a preview/dev surface — it is the product.** `gymlab-app/wrangler.jsonc`
   declares it as the Worker's custom domain (`"name": "gymlab-app"`) and serves the built SPA from
   `./dist`. It must stay public: putting Cloudflare Access there locks every user out of the app.
   The audit's "if it is preview/dev" was an unverified hypothesis. **Drop the Access item.**
2. **`www` already answers `301` → `https://gymlab.dev/`.** Verified live. No action needed.
3. **The CSP is not missing.** `gymlab.dev` sends `content-security-policy-report-only` with
   `default-src 'self'`. It is report-only, not enforcing — a different (smaller) problem.
   `app.gymlab.dev` is the host that lacks `X-Frame-Options` and `Permissions-Policy`.

### New findings (not in T15/T16)

1. **Soft-404 on `app.gymlab.dev` — confirmed, and it is a code bug.** `not_found_handling:
   "single-page-application"` in `gymlab-app/wrangler.jsonc` makes every unknown path return `200`
   + `index.html` (3,999 B). Verified live: `/pinfo.php`, `/beta/phpinfo.php` and
   `/backend/web/phpinfo.php` all answer `200 text/html`. Volume: **1,168 weighted requests/30 d**
   on scanner-shaped paths (`.php`, `.env`, `.git`, `.bak`) got a `200` on that host, and the same
   paths on `:80`, `:8080`, `:8443` and `:8880` also return `200`.
   **Fix:** return `404` when the path looks like a file (has an extension), keep the SPA fallback
   for real client routes. A blanket `404` breaks the router.
2. **The app host carries real traffic, not only scanners.** Real browser UAs (Chrome on macOS,
   Windows, Android and iPhone Safari), Applebot, HeadlessChrome and agents all appear in the same
   window. So 15,908 requests is a product being used plus scanners the soft-404 rewards — not
   "33% of noise".
3. **EN slug regression — fixed 2026-11-05.** The English calculators now publish
   `/en/bmi-calculator/`, `/en/one-rep-max-calculator/` and `/en/calorie-calculator/`; the old
   Spanish-slug URLs `301` to them. Evidence in `odd/tasks/en-calculator-slugs.md`.
4. **Calculator pages are thin.** Re-measured: 203 words (`calculadora-imc`), 226 (`1rm`),
   241 (`calorias`). Below what ranks against 1,000+ word competitors.
5. **6 of 9 app calculators are unpublished.** Only BMI, 1RM and TDEE exist on the web.
6. **WAF probe coverage gap.** The custom rule blocks only `/.env`, `/.git/`, `/wp-*`,
   `xmlrpc.php`, `wlwmanifest.xml` and `/config.json`. The account-level **Cloudflare Managed Free
   Ruleset v84** is active (2026-11-03) and catches many probes, but not all: `/pinfo.php` still
   answers `200`. `phpinfo`, `/actuator`, `/server-status`, `/cgi-bin`, `/.aws`, `/.ssh`,
   `/vendor/` and `/storage/` are still worth adding to the custom rule.
7. **No `llms.txt`.** Verified `404`. AI Search already crawls 1,770 requests/30 d.
8. **`/signup`, `/login`, `/signin` and `/register` return `403` on the app host** with
   `securityAction = block`, and no custom rule matches them — the managed ruleset does. Harmless
   today because accounts are not shipped, but a landmine for F133 (accounts + sync).

### Blocking audit (2026-11-04)

Every block active on the zone, what it actually stopped in 30 days, and whether it can hit a real
user. State after reverting the Bot Fight Mode experiment:

| Block | Config | Volume | Hits | Real-traffic risk |
| --- | --- | --- | --- | --- |
| Custom WAF rule | `/.env`, `/.git/`, `/wp-*`, `xmlrpc.php`, `wlwmanifest.xml`, `/config.json` | ~2,500 | scanner paths only | none observed |
| Cloudflare Managed Free Ruleset v84 | account level, 30+ CVE rules + Validate Headers | ~2,600 (403) | exploits, `/signup` `/login` `/signin` `/register`, `/` | none today; **breaks F133 logins** |
| Rate limit v2 | 100 req/10 s per IP, 10 s block, excludes `/assets/` | ~400 (429) | `opencode` tooling, `/Jenkinsfile`, scanners | low; CGNAT caveat |
| Security level `medium` + browser check | challenges, not blocks | — | — | low |
| DDoS L7 · Normalization · Response Firewall | managed, automatic | — | — | none |
| IP Access rules · Page Rules · Lockdowns | 0 | — | — | none |

Blocks on legitimate pages in the window: **38 on `/es/`** (2.3% of 1,647 HTML loads), all from the
same `Chrome/131` UA that probes `/.env.uat` and `/build/.env`; **zero** on `/en/`, the calculators
and the legal pages; and — after 2026-10-29 10:06 UTC — **zero** on `/assets/*`, `/sw.js` or
`/manifest.webmanifest`. The 106 asset `429`s on 29 Oct all landed at 09:00 UTC, before the rate
limit v2 deploy, so the `/assets/` exclusion works.

**Reverted:** Bot Fight Mode (`fight_mode` + `enable_js`) and the `managed_challenge` rule for the
spoofed iOS 13.2.3 UA. Bot Fight Mode cannot be excepted by WAF rules on Free, and it injects
JavaScript Detections into every HTML response — on a site that ships no JS of its own. Verified
after the revert: no `challenge-platform` in the served HTML, the spoofed UA back to `200`, and the
custom ruleset back to its single original rule.

### Actions this review adds

- [x] Fix the `app.gymlab.dev` soft-404 with a file-extension rule; keep the SPA fallback.
      **Shipped 2026-11-04** in `gymlab-app` (`4e5f5c55`, deployed as Worker version `383f72c2`).
      Production verified: `/pinfo.php`, `/beta/phpinfo.php`, `/backend/web/phpinfo.php`,
      `/backup.bak` → 404; `/`, `/entrenar`, `/entrenamiento/active`, `/sw.js`,
      `/manifest.webmanifest` and real `/assets/` chunks → 200.
- [ ] Extend the custom WAF rule with `phpinfo`, `/actuator`, `/server-status`, `/cgi-bin`,
      `/.aws`, `/.ssh`, `/vendor/`, `/storage/`.
- [x] **Bot Fight Mode evaluated and reverted** (2026-11-04). Turning it on (`fight_mode` +
      `enable_js`) injected JavaScript Detections into every HTML response and cannot be excepted by
      WAF rules on Free; the spoofed-UA `managed_challenge` rule that came with it was also removed.
      The site is back to zero client JS and the fake iPhone UA back to `200`.
- [ ] Add `X-Frame-Options` and `Permissions-Policy` to `app.gymlab.dev`.
- [ ] Promote the CSP from report-only to enforcing once the reports are clean. If Bot Fight Mode is
      ever re-enabled, allow `/cdn-cgi/challenge-platform/` (or use nonces) first: JavaScript
      Detections is injected there and an enforcing `script-src 'self'` would block it.
- [x] Localise the EN calculator slugs and 301 the current ones. **Shipped 2026-11-05**; gate
      **317/317**. Evidence in `odd/tasks/en-calculator-slugs.md`.
- [ ] Grow the three calculator pages to 800+ words before building new ones.
- [ ] Publish `llms.txt`.
- [ ] 20-exercise pilot before the full 873-page catalogue (thin-content risk).
- [ ] Revisit the `/signup` 403 before F133 ships accounts.

### Strategic read

The bottleneck is not security or performance: it is 12 indexable URLs against 873 exercises,
68 routines and 9 calculators. The pSEO catalogue stays a product decision (see Backlog), but the
sequence is now explicit: fix measurement, ship the 20-exercise pilot, measure, then scale.

## Pending in the app repo

**Nothing.** On 2026-11-04 the owner authorized the pushes: `main` went `bdad47f7` → `7e575b8f`
(58 commits, including the PWA auto-update merge) and then `7e575b8f` → `4e5f5c55` (F139.18 plus the
`app.gymlab.dev` soft-404 fix). Local and `origin/main` are in sync, and the soft-404 fix is deployed
as Worker version `383f72c2`.

## Owner actions (not delegable)

- [ ] **2FA on the Cloudflare account.** Verified still off on 2026-10-28. The account has a single
      user holding Super Administrator - All Privileges, so one password is the whole domain.
- [ ] **Automatic renewal at DonDominio** — the only open item left from T9.
- [ ] **DNSSEC** — load the DS record at DonDominio.
- [ ] **DMARC: `p=none` → `p=quarantine`.** The record exists and is valid, so mail is not being
      rejected; it just enforces nothing, which is what Cloudflare flags as "DMARC policy is
      insecure". Read a few days of reports in `gymlab@gymlab.dev` first, then tighten. Doing it blind
      can drop legitimate mail from any sender that is not aligned.
- [ ] **Play Console declarations** (Health apps + Data safety), tied to the app beacon below.

### Search Console — get the site indexed

**State:** the Domain property is **already verified by DNS**. The `google-site-verification=4FZDknwez…`
TXT sits on the apex, so it covers `gymlab.dev`, `www.gymlab.dev` and `app.gymlab.dev`. What is *not*
confirmed is the sitemap submission — and nothing gets indexed until Google crawls.

This is the bottleneck for every SEO change shipped on 2026-10-29: 12 URLs, the calculator schema and
the landing graph are invisible until they are crawled.

- [x] **Submit `https://gymlab.dev/sitemap-index.xml`** under *Sitemaps* — **done 2026-10-30**, status
      *Correcto*. It publishes 12 URLs (6 pages × 2 locales) with `hreflang` alternates.
      Gotcha that cost a round trip: the field takes a **full URL on a Domain property** and **a bare
      path on a URL-prefix property**. Typing the wrong one for the selected property returns
      "not a valid path".
- [ ] **Request indexing** in *URL Inspection* for the four that matter most, one at a time (the daily
      quota is small): `/es/`, `/en/`, `/es/calculadora-imc/`, `/es/calcular-calorias/`.
- [ ] **Check coverage after 48–72 h**: 12 discovered, and the only exclusions should be the `noindex`
      redirect stubs plus `app.gymlab.dev`.
- [ ] **Confirm the enhancements appear**: `SoftwareApplication` on the landing and `BreadcrumbList` on
      the calculators show up under *Enhancements* once crawled.
- [ ] **First useful Performance read ~2026-11-19.** Anything optimised before that date is a guess.


## Pending native review

`PLAN.md` previously recorded transaction `review-bb1b28cdd5e6324c` (2026-10-24) with its consent
prompt left unanswered, so no review record exists. Resolve it before new work, or disable the switch
explicitly with `gentle-ai review mode disable` if reviews are not wanted. A decline does not disable
RDD: it applies to that candidate only.

## Open work

### T15 — SEO, open items

- [ ] **Routine pages** from the app seed — **blocked by decision**: which routines to publish and the
      shape of the seed.
- [ ] **Search Console reading at 4 weeks** — first useful read ~**2026-11-19**. Prioritise by real
      impressions, not intuition. Verification is done; submitting the sitemap is the open step and
      lives under *Search Console* in owner actions above.
- [x] **Social card completed** (2026-10-29, `99f1ed2`): `twitter:image:alt`, `og:image:type` and
      `og:locale:alternate`, plus three gate assertions per landing.
- **Deliberately not done, with reasons:**
      - `lastmod` in the sitemap: the only value available is the build date, which moves on
        docs-only commits. A `lastmod` that is not the content's real change date teaches Google to
        distrust the field, which is the opposite of what it is for.
      - A per-locale OG image: there is one card for both locales; `og:locale:alternate` declares the
        other audience without inventing a second design. Worth doing only when someone can compose
        an English card that matches the Spanish one.

### T16 — Cloudflare, open items

- [ ] **Web Analytics beacon on `app.gymlab.dev`** — **blocked by decision, not technique**: it is a new
      collection that the privacy policy and Play Data Safety do not declare yet, and the app repo
      requires an approved manual push. The three steps go together.
- [ ] **Re-measure with the SQL API**: cache hit ratio and 404 volume after the WAF, plus the effect of
      the new `/assets/*` rate-limit exclusion. The 6,551 404s (39%) in `COMPLETED.md` Appendix B predate
      the WAF, so the next reading should drop hard.
- [x] **`early_hints` reverted to `off`** (2026-10-29). Turning it on in T16b produced **832**
      weighted `504` responses in six days (24–29 Oct, re-measured; the earlier note said 671), every one
      with `requestSource = "earlyHintsCache"`, against **zero** in the baseline window. The prefetch
      fails consistently and warms almost nothing at this traffic level. Evidence in `COMPLETED.md`
      → Appendix C.
- [ ] **LCP**: re-check the hero `preload` and the five `woff2`. The 3.31 s baseline (12 of 28 samples
      above 2.5 s) was measured **with** `early_hints` on, so it is not a clean baseline either way.
      Needs a fresh reading after the revert.
- [ ] **Zero external referrers**: nobody arrives from search or social. Crosses with T15.
      **Unverifiable with the current token**: `clientRefererHost` returns `403` (see the blockers
      table). Needs a wider analytics scope before this claim can be confirmed or denied.

## Reading analytics

`GET /accounts/{account_tag}/analytics/sql?query=…`, ClickHouse-like dialect.

- The time range must be in the SQL (`timestamp >= '…' AND timestamp < '…'`), and `LIMIT` is required
  with `ORDER BY`.
- `events.httpRequests` filters by `zoneTag`; `events.rumPageloadEvents` and `events.rumWebvitalsEvents`
  need **both** `accountTag` and `siteTag` (with `siteTag` alone they return `422`).
- No `quantile()`/`APPROX_QUANTILE()`, and no `MIN()` over sampled datasets: use `avg()` and `countIf()`.
  91 datasets exist (`/analytics/sql/introspection`).
- `botScore` on `httpRequests` returns `403` (missing scope).

### MCP blockers and how to unblock them

| Block | Evidence | Way out |
| --- | --- | --- |
| Token management (`/user/tokens`) | `403 · 9109 · "No OAuth scope covers this endpoint"` | Connect with an **API token** (Bearer) holding *API Tokens Read* |
| Billing/subscriptions | `403 · 10000 Authentication error` | API token with *Billing Read* |
| `botScore` in analytics | `403 · "not permitted to access column"` | Re-authorise with a wider scope, or infer from `userAgent` + `ja4` |
| `clientRefererHost` in analytics | `403 · "not permitted to access column on events.httpRequests: clientRefererHost"` | Wider analytics scope; blocks verifying the "zero external referrers" claim |
| R2 | `403 · 10042 · "Please enable R2 through the Cloudflare Dashboard"` | Enable R2 in the dashboard (asks for a payment method), only if the app needs storage |
| Free plan | `custom_certificate_quota: 0`, `page_rule_quota: 3` | Plan ceiling, not a permission problem |
| `?codemode=false` | — | **Do not use it**: expands ~3,780 tools (~244k tokens) |

## How to resume

1. Read `AGENTS.md`, this file and `COMPLETED.md`; then `odd/tasks/` for the task at hand.
2. Optional memory context: Engram project `webgymlab`.
3. `npm install` if `node_modules` is missing → `npm run dev` to preview.
4. Pick the first unchecked item above; follow repo conventions (work-unit commits, no AI attribution).
5. Verify with `npm run build` **then** `npm run check:i18n`.

## Useful commands

- Dev `npm run dev` · Build `npm run build` · Preview `npm run preview` · Deploy `npx wrangler deploy`
- Bilingual gate `npm run check:i18n` — run after a build: route set, canonical/hreflang agreement,
  no Spanish leftovers under `/en/`, redirect rules, sitemap alternates, JSON-LD shape.
- Re-capture app screenshots (from the app repo):
  `cd ProyectoGymLab/gymlab-app` then
  `python tests/e2e/scripts/with_server.py "<path-to-WebGymLab>\scripts\capture-screens.py" --port 5180`
  (add `$env:GYMLAB_RECON='1'` for a broad sweep into `%TEMP%/gymlab-recon`).

## Backlog (not scheduled)

- Waitlist/email capture (deferred by decision — needs a backend and privacy updates).
- Palettes/day-night on the web (explicitly out of scope: gold × night only).
- Store listing assets: reuse the vertical screenshots from `public/screens/`.
- Informational guides for real long-tail queries (routine for beginners, sets per muscle, how to
  progress when stuck) and one page per exercise from the 873-item catalogue. Both are product
  decisions before they are content decisions.
