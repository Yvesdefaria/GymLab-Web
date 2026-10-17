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
- [ ] T8 — SEO: per-page meta/OG, sitemap, robots (+ optimize screenshots: webp/responsive)
- [ ] T9 — Deploy: Cloudflare Pages + Web Analytics + custom domain (blocked: user phase 0 — buy `gymlab.dev` + free CF account)
- [ ] T10 — Phase 3: legal drafting with real identity data (blocked: user data)

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
