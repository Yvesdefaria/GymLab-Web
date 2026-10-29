# GymLab Web — Agent Guide

Public website for **GymLab** (local-first training app; app repo: `ProyectoGymLab`, app lives in `gymlab-app/`). This repo holds the marketing landing, the three calculators and the legal pages.

- Production: `https://gymlab.dev`, served by the **Worker `gymlab-web`** with static assets declared in `wrangler.jsonc`. It is **not** Cloudflare Pages: the account's Pages project list is empty.
- Deploy: `npx wrangler deploy`. Any change to `wrangler.jsonc` — `not_found_handling`, for example — only reaches production through it.
- Language: site content in **Spanish, neutral/professional — no voseo or regionalisms**; code, comments, docs in **English**

## Stack

- Astro + MDX, Tailwind CSS v4 (CSS-first, no JS config), TypeScript strict
- Fully static; no backend, no data capture, cookieless analytics only

## Commands

- `npm run dev` — dev server
- `npm run build` — production build → `dist/`
- `npm run preview` — preview the build
- `npm run check:i18n` — post-build gate, 254 assertions: routes, canonical/hreflang agreement, redirects, sitemap alternates and the JSON-LD shape. Run it **after** `npm run build`.

## Structure

- `src/pages/[lang]/` — localized routes: landing, `privacidad`, `terminos`, `calculadora-1rm`, `calculadora-imc`, `calcular-calorias`
- `src/pages/` — `404.astro` (served through `not_found_handling`) and the redirect stubs for `/`, `/privacidad`, `/terminos`
- `src/lib/schema.ts` — JSON-LD builders; `src/components/StructuredData.astro` renders one `@graph` per page
- `src/styles/global.css` — Tailwind entry + brand tokens (ported from the app)
- `public/` — fonts, `favicon.svg`, `site.webmanifest`, static assets. `public/brand/logo_marca.svg` is the emblem cropped to its content: use it for small marks, never the 600×600 source.
- `odd/tasks/` — ODD feature docs

## Brand system (source of truth: app `gymlab-app/src/index.css` @theme)

- Dark gold: accent `#d9b384`, accent-soft `#fdddb4`, cta-deep `#b99050`; bg `#121214`; bg-elevated `#242422`; fg `#f8fafc`; border `#3a352b`; muted `#a39b8c`
- Fonts: Oswald (display), Barlow (body) — self-hosted woff2, no Google Fonts
- No palette switcher or day/night toggle on the web (default gold × night look only)

## Conventions

- Conventional Commits; no AI attribution in commits; work-unit commits
- Work-unit pushes to `main` are standing-authorized by the repo owner (announced per push); force-push, PRs, and merges remain owner decisions
- Feature plan + evidence: `odd/tasks/web-landing-legales.md`
- Engram: project `webgymlab`

## Roadmap

- Open work, owner actions and resume instructions: `PLAN.md`
- Closed work and measurement baselines: `COMPLETED.md`
- Task history + evidence: `odd/tasks/*.md`
- No deploy blockers remain. The live owner actions are 2FA on the Cloudflare account, DonDominio
  auto-renewal and the DNSSEC DS record; see `PLAN.md`.
