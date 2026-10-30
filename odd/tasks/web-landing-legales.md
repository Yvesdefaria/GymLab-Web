# Web landing + legal pages for GymLab

- Feature: `web-landing-legales`
- Status: in progress
- Branch: `main` (solo-project; work-unit pushes standing-authorized by the owner, announced per push)
- Delivery strategy: `ask-on-risk` (forecast ~350–550 authored lines; chain strategy confirmed with the user before exceeding ~400)
- Route per task: T1–T2 inline (mechanical bootstrap, contents pre-resolved from recon); later tasks routed per evidence

## Objective

Public Spanish website for GymLab: marketing landing + `/privacidad` + `/terminos`, reusing the app's brand system, deployed to Cloudflare Pages at `https://gymlab.dev`.

## Context

- App repo: `ProyectoGymLab` (Vite + React + TS + Dexie, local-first; PWA + Capacitor; stores planned, no listings yet).
- Brand source of truth: `gymlab-app/src/index.css` (@theme tokens: gold `#d9b384` on `#121214`, Oswald/Barlow self-hosted, panels/grain system).
- Existing legal: privacy HTML published via GitHub Pages from the app repo (to retire at launch); Terms only in-app; placeholder email replaced by `gymlab@gymlab.dev`.
- Grilling decisions (2026-10-17): Astro + MDX + Tailwind v4; Spanish only; no data capture; cookieless analytics (Cloudflare Web Analytics); badges "coming soon" as CTA.

## Out of scope

- App repo changes (canonical `gymlab.app` meta tags, Vite-default favicon, placeholder email) — follow-ups tracked there.
- Legal drafting content + identity data — phase 3, blocked on user data.
- Waitlist/backend — deferred by decision.

## Tasks

- [x] T1 — Bootstrap: clone repo, AGENTS.md, ODD task doc, toolchain check (`7187dcc`)
- [x] T2 — Scaffold: Astro + MDX + Tailwind v4 + sitemap; `npm run build` green (`9da9180`)
- [x] T3 — Brand foundation: port @theme tokens, self-host fonts (Oswald/Barlow woff2), logos, brand favicon (`aeb59c0`)
- [x] T4 — Layout: base layout, nav, footer, panel/grain primitives (`3fd745d`)
- [x] T5 — Landing sections: hero, features (8), showcase, local-first strip → `/privacidad`, FAQ (`82eb765`)
- [x] T6 — Screenshots: capture real app screenshots (Playwright + demo data) (`f561fd4`)
- [x] T7 — Legal pages structure: `/privacidad`, `/terminos` (heading skeleton; content in phase 3) (`f7c917e`)
- [x] T8 — SEO: per-page meta/OG, sitemap, robots (+ responsive WebP screenshots) — 2026-10-19
- [x] T9 — Deploy: Cloudflare Workers static assets + custom domains + HTTPS; Lighthouse 95/100/100/100 — 2026-10-19
- [ ] T9b — Web Analytics beacon (pending token) + Email Routing for gymlab@gymlab.dev (pending destination email)
- [x] T10 — Phase 3: legal drafting from the app text (privacy 11 + terms 8 + contact) — 2026-10-19
- [x] T11 — Marketing copy v2: outcome-first rewrite, local-first demoted → `odd/tasks/marketing-copy.md`

## Acceptance criteria

- Lighthouse ≥95 (performance / SEO / best practices) on the landing.
- No cookies, no data capture; cookieless analytics only.
- Stable legal URLs: `/privacidad`, `/terminos` (canonical for store listings).
- Visual identity matches app tokens (dark gold, Oswald/Barlow).

## Checks (per task)

- T2+: `npm run build` green + preview smoke.
- T5: responsive check + accessibility pass.
- T8: sitemap/OG validated.

## Evidence log

- 2026-10-17 — Recon of app repo (theme tokens, legal artifacts, assets, distribution). Engram: `webgymlab` project, obs "Recon GymLab…".
- 2026-10-17 — Grilling closed; full design accepted by user (domain `gymlab.dev`, canonical legal on web, CTA "coming soon", screenshot capture in-house). Engram: obs "Web GymLab: diseño cerrado…".
- 2026-10-17 — Repo `Yvesdefaria/GymLab-Web` cloned (public, `main`, initial README-only commit `488263e`).
- 2026-10-17 — T1 done: docs commit `7187dcc` (AGENTS.md + this plan). Toolchain verified: git 2.47, Node v25.0.0, npm 11.6.2, gh authed as `Yvesdefaria`.
- 2026-10-17 — T2 done: scaffold commit `9da9180` (Astro + MDX + sitemap + Tailwind v4; 214 packages installed). Check: `npm run build` green — 1 page + `sitemap-index.xml` emitted to `dist/`.
- 2026-10-17 — Fase 1 pushed to `origin/main`: `488263e..f9dd63a`.
- 2026-10-17 — T3 done: commit `aeb59c0` — 16 color tokens + 2 font vars ported verbatim from the app's `@theme` (gold × night only), 7 self-hosted woff2 faces copied, logos/icons in `public/brand/`, branded favicon wired to `icon-192.png`. Check: `npm run build` green; `dist/fonts` + `dist/brand` emitted.
- 2026-10-17 — T3 pushed to `origin/main`: `f9dd63a..6d53ee3`.
- 2026-10-17 — T4 done: commit `3fd745d` — `BaseLayout` (imports `global.css`), sticky `Header`, `Footer`, index placeholder using primitives; `global.css` extended with the app's surface system (`gold-gradient`/`gold-text`/`gold-border-glow`, `panel`/`panel-light`/`panel-floating`/`panel-hero`/`panel-elevated`, `kicker`, `stat-value`, `chip`, `hero-atmosphere`) + body radial tints + grain. App-only pieces intentionally skipped (charts, routine cards, scroll hijack). Gold logo variant generated from `logo_simbolo.svg` (paths untouched, fill → brand gold, inline width stripped). Learned: first T4 build emitted no CSS — `BaseLayout` was missing the `global.css` import; fixed and re-verified (18.9 KB bundle, stylesheet linked from HTML).
- 2026-10-17 — Push policy granted by owner (option b): work-unit pushes to `main` are standing-authorized, announced per push; recorded in AGENTS.md (`79ac4c8`). Delivery: direct-to-main stream — no PR layer by owner decision, so work-unit commits are the slices (the ~400-line chain gate is moot without PRs).
- 2026-10-17 — Push `6d53ee3..82eb765` (T4 + push policy + T5).
- 2026-10-17 — T5 done: `82eb765` — hero with photo atmosphere (`home-hero.jpg` copied from the app), 8 numbered feature panels, showcase with placeholders (real captures in T6), local-first strip → `/privacidad`, native FAQ (`<details>`). Spanish copy with no price/date claims. Check: build green; ids `#features`/`#capturas`/`#faq`, 4 `<details>`, hero img in `dist`; utilities (`text-on-gold`, `scroll-mt-24`, `aspect-ratio`) present.
- 2026-10-17 — T6 done: `f561fd4` — `scripts/capture-screens.py` (Python Playwright, viewport 375×812 @DPR2, run under the app's `tests/e2e/scripts/with_server.py`; skips first-run onboarding via "Ya entreno aquí", dismisses per-page on-ramp cards, captures the live workout via the home routine card). 6 shots in `public/screens/`; showcase now uses `entrenamiento` (session + timer), `rutinas` (68 templates), `ejercicios` (873 catalog). Check: build green, screens in `dist`, HTML references the 3 images. Follow-up in T8: optimize screenshots (webp/responsive).
- 2026-10-17 — T7 done: `f7c917e` — `LegalLayout` (draft notice panel + `legal-prose` typography added to `global.css`), `/privacidad` (11 sections mirroring the app's privacy structure) and `/terminos` (8 sections from the app's `legal.ts`) as skeletons; footer links now resolve. Check: build green (3 pages), sitemap lists all 3 URLs, section counts 11/8.
- Phase 3 notes (legal drafting): the existing `legal/privacidad.html` text is solid and reusable — it covers AdMob/IAP (future states), Sentry/PostHog (consent toggle), device permissions (activity, location), age 14+, "not a medical device". Open points for drafting: legal identity (owner name/NIF + jurisdiction), replace placeholder email with `gymlab@gymlab.dev`, align Android-only framing with the planned iOS/App Store release.
- 2026-10-17 — `PLAN.md` created at repo root: continuation handoff with all remaining steps (T8/T9/T10 + app-repo follow-ups, blockers, resume instructions). Session closed by owner request.
- 2026-10-19 — T8 done: canonical + OG/Twitter/theme-color in `BaseLayout` (per-page title/description already passed by `LegalLayout`); `public/robots.txt`; composed 1200×630 OG image (`scripts/make-og.py`, provenance embedded); screenshots moved to `assets/screens/` (sources, not shipped) with responsive WebP derivatives via `scripts/optimize-screens.py` (375w/750w; 596→8–43 KB each) and `srcset`/`sizes` in `Showcase`; capture script now writes sources to `assets/screens`. Checks: build green; dist canonical/OG on all 3 pages; robots + sitemap 3 URLs; no PNG references; Lighthouse on the production preview (`:4322`) = performance 96 / accessibility 100 / best-practices 100 / SEO 100 (an earlier 57 was measured against a dev server with Vite HMR and discarded); raster provenance scan 0 missing.
- 2026-10-19 — T9 done (deploy): `gymlab.dev` registered at DonDominio (19/10/2026–19/10/2027, manual renewal), NS moved to Cloudflare (`noel`/`sharon`), DonDominio parking records removed; Workers project `gymlab-web` connected to the repo (build `npm run build`, deploy `npx wrangler deploy`, `wrangler.jsonc` serves `dist` as static assets); custom domains `gymlab.dev` + `www.gymlab.dev` with HTTPS; live at https://gymlab.dev. Lighthouse on production = performance 95 / accessibility 100 / best-practices 100 / SEO 100; hero optimized to WebP (42.7 KB) + landing-only preload to reach the target; canonical/OG/robots/sitemap/WebP verified 200. Pending: Web Analytics beacon token, Email Routing (MX/SPF) for `gymlab@gymlab.dev`, "Always Use HTTPS" toggle, optional www→apex redirect, renewal switch to automatic.
- 2026-10-19 — T10 done: ported the app's current legal text (i18n) into `/privacidad` (11 sections) and `/terminos` (8 + contact); contact unified to `gymlab@gymlab.dev`; "Última actualización: 5 de septiembre de 2026"; removed the "Versión en preparación" notice; added legal list/link/emphasis styles. The titular remains unnamed as in the app text; add name/NIF/domicile later if a named responsible is required. Check: build green; 11/9 `h2`; email/date/local-first present; old notice gone.
- 2026-10-21 — Play Store policy pass: `/privacidad` gains section 6 «Salud y actividad física (Health Connect y HealthKit)» (12 sections) disclosing the only health data the app reads (daily steps), on-device processing, no sharing/ads, revocation, and the Android background read for the widget; section 7 «Permisos» and `/terminos` §3 drop the inaccurate Motion & Fitness/Location claim (the app uses Health Connect/HealthKit, local notifications and camera/gallery only). `updated` → 21 de octubre de 2026. Check: `npm run build` green (3 pages), 12/8 `h2` in `dist`. Pending: deploy — the live page is still the 5-sep version, so the app must not be submitted to review before this ships.
- 2026-10-21 — Deployed (`fd733aa..329ecb3`, Workers git integration). Production verified on `https://gymlab.dev/privacidad/`: shows «Health Connect» and «21 de octubre de 2026» (cache-busted poll, ~36 s after push). The app's Health Connect rationale WebView (emulator-5554, CDP) reloads and renders the same content — the exact surface Play review opens now serves the published policy.
- 2026-10-21 — Email Routing live for `gymlab@gymlab.dev` (free plan, no paid mailbox): domain onboarded (3 MX + DKIM, SPF added by hand as the DonDominio SPF had been removed during onboarding), destination verified, routing rule created, and a real message was received at the destination. The account-level `Emails received` counter still showed 0 after delivery — it is an aggregate metric with lag, not the delivery truth; the received message is the acceptance evidence. Receive-only: replies go out from the personal Gmail.
- 2026-10-30 — Privacy policy 29/10 deployed: ES/EN updated to pseudonymous usage data, telemetry off by default, date 29 October 2026. `npm run check:i18n` 314/314 and `npm run build` green. Pushed `d726c8b..4cd45bb`; Cloudflare Workers Builds redeployed. Production verified `/es/privacidad/` and `/en/privacidad/` with the new date and copy.
- 2026-10-30 — Fase 126 precision: ES/EN now name Sentry and PostHog as data processors hosted in the EU (`ingest.de.sentry.io`, `eu.i.posthog.com`) and state retention (Sentry errors up to 30 days; PostHog events up to 1 year). The analytics copy no longer claims the payload excludes all personal data; it names the excluded fields (name, email, weight, workouts). `check:i18n` 314/314 and build green; pushed `7842a6f..05eb0f6`, Workers Builds succeeded and production verified with the new copy.
