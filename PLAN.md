# GymLab Web — Continuation Plan

Handoff document to continue this project in a new session. Canonical project rules live in
`AGENTS.md`. Closed work and the measurement baselines are archived in `COMPLETED.md`; task-by-task
evidence lives in `odd/tasks/*.md` and in Engram (project `webgymlab`).

Last updated: 2026-10-29.

## Where we are

- Repo `Yvesdefaria/GymLab-Web` → local `WebGymLab`. Stack: Astro + MDX + Tailwind v4 (CSS-first),
  TypeScript strict, fully static. Languages `es` (default) and `en-GB`, both under a locale prefix.
- Production is **live** at `https://gymlab.dev`, served by the Worker `gymlab-web` with static assets.
  It is not Cloudflare Pages. Deploy with `npx wrangler deploy`.
- `npm run build` green (**16 pages**) and `npm run check:i18n` green (**254 assertions**).
- The sitemap publishes **12 URLs**; `app.gymlab.dev` is `noindex` with a real `robots.txt`.
- The landing, the three calculators, the 404 and the legal pages all ship in both locales.
- Measurement and the SQL recipe: see "Reading analytics" below and `COMPLETED.md` Appendix B.

## Finished, pending merge and deploy

None of this is in production. The branches are local and unpushed; `main` has none of it.

| Repo | Branch | Commit | What |
| --- | --- | --- | --- |
| `WebGymLab` | `feat/seo-structured-data` | `e7c2cbf` | One self-contained JSON-LD `@graph` per page; `FAQPage` (retired by Google 2026-05) removed; `operatingSystem` corrected to `Web`; calculators gained `WebApplication` + `BreadcrumbList`; SEO half of `check-i18n` rewritten |
| `WebGymLab` | `feat/404-y-favicon` | `9543602` | `404.astro` + `not_found_handling: "404-page"`; `favicon.svg`; `favicon.ico` regenerated; `site.webmanifest`; `noindex` prop on `BaseLayout` |
| `WebGymLab` | `feat/404-y-favicon` | `1583fdd` | `brand/logo_marca.svg` (emblem cropped) and the header/footer marks sized by height |
| `ProyectoGymLab` | `fix/pwa-auto-update` | `ae3bf1ca` | Service-worker update polling + `/assets/*` excluded from the rate limit; test-animations out of the precache |

**Already live and not tracked by any branch:** the zone rate-limit rule now reads
`not starts_with(http.request.uri.path, "/assets/")` (ruleset version 2). The 216-entry precache could
not install while that rule counted chunk downloads. Verified: 140 requests to `/assets/*` return 200;
120 requests to `/` still get blocked after ~100.

Before deploying the 404, remember that `not_found_handling` only takes effect through
`npx wrangler deploy`, not through a static upload.

## Owner actions (not delegable)

- [ ] **2FA on the Cloudflare account.** Verified still off on 2026-10-28. The account has a single
      user holding Super Administrator - All Privileges, so one password is the whole domain.
- [ ] **Automatic renewal at DonDominio** — the only open item left from T9.
- [ ] **DNSSEC** — load the DS record at DonDominio.
- [ ] **Play Console declarations** (Health apps + Data safety), tied to the app beacon below.

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
      impressions, not intuition. The DNS verification TXT is already on the apex
      (`google-site-verification=4FZDknwez…`), so verification is not the blocker; submitting the
      sitemap is.
- [ ] Remaining polish nobody has scheduled: `lastmod` in the sitemap, `twitter:image:alt`,
      `og:image:type`, `og:locale:alternate`, and a per-locale OG image. All low impact, all cheap.

### T16 — Cloudflare, open items

- [ ] **Web Analytics beacon on `app.gymlab.dev`** — **blocked by decision, not technique**: it is a new
      collection that the privacy policy and Play Data Safety do not declare yet, and the app repo
      requires an approved manual push. The three steps go together.
- [ ] **Re-measure with the SQL API**: cache hit ratio and 404 volume after the WAF, plus the effect of
      the new `/assets/*` rate-limit exclusion. The 6,551 404s (39%) in `COMPLETED.md` Appendix B predate
      the WAF, so the next reading should drop hard.
- [ ] **LCP**: re-check the hero `preload` and the five `woff2` now that `early_hints` is on. Baseline
      3.31 s with 12 of 28 samples above 2.5 s.
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
