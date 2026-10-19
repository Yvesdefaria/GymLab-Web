# GymLab Web — Continuation Plan

Handoff document to continue this project in a new session. Canonical project rules live in
`AGENTS.md`; full task history and evidence live in `odd/tasks/web-landing-legales.md`
(also mirrored in Engram: project `webgymlab`, topic `odd/web-landing-legales/tasks`).

## Where we are (2026-10-17)

- Repo: `Yvesdefaria/GymLab-Web` (public) → local `WebGymLab`. All work is pushed to `main`.
- Stack: Astro + MDX + Tailwind v4 (CSS-first), TypeScript strict, fully static. Site language: Spanish.
- Landing (hero, 8 features, showcase with real screenshots, local-first strip, FAQ) + legal
  skeletons (`/privacidad`, `/terminos`) are live in code. `npm run build` green (3 pages).
- Brand system ported from the app (`gymlab-app/src/index.css`): dark gold tokens, Oswald/Barlow
  self-hosted, panel/grain primitives. Real app screenshots in `public/screens/`.
- Done: T1 bootstrap · T2 scaffold · T3 brand · T4 layout · T5 sections · T6 screenshots · T7 legal skeleton.

## Remaining work

### T8 — SEO & performance polish — DONE (2026-10-19)

- [x] Per-page meta: title/description for `/`, `/privacidad`, `/terminos`.
- [x] Canonical URLs + Open Graph/Twitter tags in `BaseLayout`; composed 1200×630 OG image (`public/og/gymlab-og.jpg`).
- [x] `public/robots.txt` (allow all + sitemap reference `https://gymlab.dev/sitemap-index.xml`).
- [x] Screenshots optimized: responsive WebP (`375w`/`750w`) via `scripts/optimize-screens.py`; sources moved to `assets/screens/` (not shipped).
- [x] Re-verified: build green; sitemap 3 URLs; Lighthouse ≥95 on the production preview (performance 96 / accessibility 100 / best-practices 100 / SEO 100).

### T9 — Deploy to Cloudflare — DONE (2026-10-19)

- [x] Domain `gymlab.dev` registered at DonDominio (19/10/2026–19/10/2027); NS moved to Cloudflare (`noel`/`sharon`); parking records removed.
- [x] Workers project `gymlab-web` connected to the repo (build `npm run build`, deploy `npx wrangler deploy`, `wrangler.jsonc` serves `dist` as static assets).
- [x] Custom domains `gymlab.dev` + `www.gymlab.dev` with HTTPS; site live at https://gymlab.dev.
- [x] Smoke check: 3 pages + robots + sitemap + OG + WebP assets 200; canonical/OG point to the apex; Lighthouse 95/100/100/100 (performance/a11y/best-practices/SEO).
- [ ] T9b — Web Analytics beacon (token pending) + Email Routing for `gymlab@gymlab.dev` (destination pending) + "Always Use HTTPS" toggle + optional www→apex redirect + switch DonDominio renewal to automatic.

### T12 — App web en `app.gymlab.dev` (planned, not started)

- Objective: serve the GymLab app (repo `ProyectoGymLab`, `gymlab-app/`) as a static SPA at `app.gymlab.dev` with HTTPS.
- Approach: second Worker `gymlab-app` connected to `Yvesdefaria/GymLab`, root directory `gymlab-app`, build `npm run build`, deploy `npx wrangler deploy`; `wrangler.jsonc` with `assets.directory = "./dist"` + `not_found_handling = "single-page-application"` (React Router deep links); custom domain `app.gymlab.dev`.
- Fit: 2,021 files / 101 MB, largest 0.88 MB — within Workers Free (20k files, 25 MiB/file).
- Blocker: the app repo is 59 commits ahead of `origin/main` with uncommitted android/CHANGELOG changes. Decide: (A) push the app repo → auto-deploy, or (B) local `wrangler` deploy with login/token.
- Caveats: mobile-first UI on desktop; native-only plugins (health, local notifications, filesystem, camera) degrade on web; review Sentry/PostHog consent; optional `noindex`; PWA service worker already has preload recovery.

### T10 — Phase 3: legal drafting — DONE (2026-10-19)

- [x] Ported the app's current legal text into `/privacidad` (11 sections) and `/terminos` (8 sections + contact).
- [x] Contact unified to `gymlab@gymlab.dev`; the iOS/App Store framing is already current in the app text.
- [x] "Última actualización: 5 de septiembre de 2026" added; "Versión en preparación" notice removed from `LegalLayout`.
- [x] Reviewed against the app's current states (AdMob/IAP future, Sentry/PostHog opt-in, permissions, 14+).
- Note: the titular remains unnamed as in the app text; add name/NIF/domicile if a named responsible is required.

### Follow-ups in the app repo (`ProyectoGymLab`) — separate commits there

- [ ] App meta/OG still points to `https://gymlab.app/` (owned by a third party) → switch to `https://gymlab.dev/`.
- [ ] App `favicon.svg` is still the Vite default → replace with a branded icon.
- [ ] Replace placeholder email `gymlab@app.gymlab.dev`.
- [ ] After the web is live: retire the GitHub Pages privacy workflow, and point the store listing (when it exists) to `https://gymlab.dev/privacidad`.

## How to resume

1. Read `AGENTS.md` (rules/commands), this file, and `odd/tasks/web-landing-legales.md`.
2. Optional memory context: Engram project `webgymlab` (topic `odd/web-landing-legales/tasks`).
3. `npm install` (if `node_modules` is missing) → `npm run dev` to preview.
4. Pick the first unchecked item above; follow repo conventions (work-unit commits, pushes to `main` announced, no AI attribution).

## Useful commands

- Dev: `npm run dev` · Build: `npm run build` · Preview: `npm run preview`
- Re-capture app screenshots (run from the app repo):
  `cd ProyectoGymLab/gymlab-app`
  `python tests/e2e/scripts/with_server.py "<path-to-WebGymLab>\scripts\capture-screens.py" --port 5180`
  (add `$env:GYMLAB_RECON='1'` for a broad sweep into `%TEMP%/gymlab-recon`)

## Backlog (not scheduled)

- Waitlist/email capture (deferred by decision — requires backend + privacy updates).
- Palettes/day-night on the web (explicitly out of scope: the marketing site uses gold × night only).
- Store listing assets: reuse the vertical screenshots from `public/screens/`.
