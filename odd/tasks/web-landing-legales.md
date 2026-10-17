# Web landing + legal pages for GymLab

- Feature: `web-landing-legales`
- Status: in progress
- Branch: `main` (initial bootstrap); feature branches from T3 onward
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

- [ ] T1 — Bootstrap: clone repo, AGENTS.md, ODD task doc, toolchain check
- [ ] T2 — Scaffold: Astro + MDX + Tailwind v4 + sitemap; `npm run build` green
- [ ] T3 — Brand foundation: port @theme tokens, self-host fonts (Oswald/Barlow woff2), logos, brand favicon
- [ ] T4 — Layout: base layout, nav, footer, panel/grain primitives
- [ ] T5 — Landing sections: hero, features (8), showcase, local-first strip → `/privacidad`, FAQ
- [ ] T6 — Screenshots: capture real app screenshots (Playwright + demo data)
- [ ] T7 — Legal pages structure: `/privacidad`, `/terminos` (heading skeleton; content in phase 3)
- [ ] T8 — SEO: per-page meta/OG, sitemap, robots
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
