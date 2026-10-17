# GymLab Web — Agent Guide

Public website for **GymLab** (local-first training app; app repo: `ProyectoGymLab`, app lives in `gymlab-app/`). This repo holds the marketing landing + legal pages.

- Production: `https://gymlab.dev` (Cloudflare Pages)
- Language: site content in **Spanish** (neutral/professional); code, comments, docs in **English**

## Stack

- Astro + MDX, Tailwind CSS v4 (CSS-first, no JS config), TypeScript strict
- Fully static; no backend, no data capture, cookieless analytics only

## Commands

- `npm run dev` — dev server
- `npm run build` — production build → `dist/`
- `npm run preview` — preview the build

## Structure

- `src/pages/` — routes: `/`, `/privacidad`, `/terminos`
- `src/styles/global.css` — Tailwind entry + brand tokens (ported from the app)
- `public/` — fonts, logos, static assets
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

- Continuation plan: `PLAN.md` (remaining steps, blockers, resume instructions)
- Task history + evidence: `odd/tasks/web-landing-legales.md`
- Blocked items: Cloudflare deploy (needs domain + CF account), legal text (needs identity data).
