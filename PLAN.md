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

- `early_hints` was turned **off**. On, it produced 671 `504` responses in five days, all from
  `requestSource = "earlyHintsCache"`, against zero before.
- The social card gained `twitter:image:alt`, `og:image:type` and `og:locale:alternate` (`99f1ed2`).

## Review 2026-11-04 — traffic, SEO and security audit

Independent audit against the live zone (`64ab68…1063` / `bc4d1b…b05b`), the public HTML,
`sitemap-0.xml`, response headers and the deployed bundle. Raw dumps live in the sibling
`ProyectoGymLab/reports/` folder: `cloudflare-gymlab-2026-11-04.md` and
`auditoria-gymlab-2026-11-04.md`.

### Headline numbers (30 days)

| Metric | Value | Note |
| --- | --- | --- |
| Total requests (weighted) | 53,581 | 38,765 observed rows |
| Indexable URLs in sitemap | 12 | matches the T15 baseline |
| Real pageviews (RUM) | 30 | 22 `gymlab.dev` + 8 `app.gymlab.dev` |
| Verified bots | 3,110 | AI Search 1,770 · Crawler 600 · AI Crawler 590 |
| 403 + 404 | 38% | pre-WAF 404 peak was 2,432/day |
| Top content path after `/` | `/wp-admin/install.php` | 1,341 requests — scanning noise |

### Confirmations of open items

- **T16 WAF works.** 404s fell from 1,056–2,432/day (19–23 Oct) to 2–359/day from 24 Oct, while
  403s rose to 197–1,239/day. The "next reading should drop hard" prediction holds.
- **T16 `early_hints` revert holds.** Every 504 is `requestSource = earlyHintsCache`, 24–29 Oct;
  zero since 29 Oct.
- **T15 sitemap baseline.** 12 URLs, 6 pages × 2 locales, correct `hreflang`.
- **`botScore` still 403.** Confirms the scope block in "Reading analytics".
- **No secrets in the app bundle.** `/assets/index-C7OKhvMt.js` (92 KB) has no `service_role`,
  JWT, `sk-`, `AIza`, private key or AWS key.

### New findings (not in T15/T16)

1. **Soft-404 on `app.gymlab.dev`.** Unknown paths return `200` with `index.html` (3,999 B):
   `/pinfo.php`, `/beta/phpinfo.php`, `/backend/web/phpinfo.php`. No data leak, but it tells
   scanners the path exists, can index junk if `noindex` is ever dropped, and hides real 404s.
   Fix: return 404 from the asset route for unknown paths.
2. **`app.gymlab.dev` is 33% of all traffic** (12,830 of 38,765 requests). If that host is a
   preview/dev surface, put it behind Access or a WAF rule before anything else.
3. **EN slug regression.** `/en/calculadora-imc/`, `/en/calcular-calorias/` and
   `/en/calculadora-1rm/` keep Spanish slugs on the English locale; the keyword is lost in the URL.
4. **Calculator pages are thin.** 197 words (`calculadora-imc`), 228 (`1rm`), 239 (`calorias`).
   Below what ranks against 1,000+ word competitors.
5. **6 of 9 app calculators are unpublished.** Only BMI, 1RM and TDEE exist on the web.
6. **WAF coverage gap.** The custom rule does not cover `phpinfo`, `/actuator`, `/server-status`,
   `/cgi-bin`, `/.aws`, `/.ssh`, `/vendor/`, `/storage/`.
7. **No `llms.txt`.** AI Search already crawls 1,770 requests/30 d.
8. **`www` answers 200 instead of 301.** The canonical covers it; a 301 is cheaper for crawl budget.
9. **Missing `Content-Security-Policy`** on the marketing site; `app.gymlab.dev` lacks
   `Permissions-Policy` and `X-Frame-Options`.

### Actions this review adds

- [ ] Fix the `app.gymlab.dev` soft-404.
- [ ] Decide whether `app.gymlab.dev` stays public; if not, Access + WAF.
- [ ] Extend the WAF probe rule with the paths listed above.
- [ ] 301 `www` → apex.
- [ ] Localise the EN calculator slugs and 301 the current ones.
- [ ] Grow the three calculator pages to 800+ words before building new ones.
- [ ] Publish `llms.txt`.
- [ ] 20-exercise pilot before the full 873-page catalogue (thin-content risk).

### Strategic read

The bottleneck is not security or performance: it is 12 indexable URLs against 873 exercises,
68 routines and 9 calculators. The pSEO catalogue stays a product decision (see Backlog), but the
sequence is now explicit: fix measurement, ship the 20-exercise pilot, measure, then scale.

## Pending in the app repo

The PWA fix is **merged into the app's `main` locally** (`08b769c8`), verified, and **not pushed**.
The app repo's `AGENTS.md` requires the owner to push by hand.

```
cd ProyectoGymLab/gymlab-app
git log --oneline origin/main..main     # 29 commits, only the merge is ours
git push
```

Merged clean: the dry run reported no conflicts, `npx vitest run tests/unit/lib/serviceWorker.test.ts`
passes 12/12 and `npm run build` is green (3498 modules). `test-animations` is out of the precache
(217 entries).

The zone half is already live, so a device with a stuck worker can complete its install on the next
navigation. The polling starts working for users only after this push deploys.

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
- [x] **`early_hints` reverted to `off`** (2026-10-29). Turning it on in T16b produced **671** `504`
      responses in five days, every one with `requestSource = "earlyHintsCache"`, against **zero** in
      the baseline window. The prefetch fails consistently and warms almost nothing at this traffic
      level. Evidence in `COMPLETED.md` → Appendix C.
- [ ] **LCP**: re-check the hero `preload` and the five `woff2`. The 3.31 s baseline (12 of 28 samples
      above 2.5 s) was measured **with** `early_hints` on, so it is not a clean baseline either way.
      Needs a fresh reading after the revert.
- [ ] **Zero external referrers**: nobody arrives from search or social. Crosses with T15.

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
