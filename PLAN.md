# GymLab Web — Continuation Plan

Handoff document to continue this project in a new session. Canonical project rules live in
`AGENTS.md`; full task history and evidence live in `odd/tasks/web-landing-legales.md`
(also mirrored in Engram: project `webgymlab`, topic `odd/web-landing-legales/tasks`).

## Where we are (2026-10-21)

- Repo: `Yvesdefaria/GymLab-Web` (public) → local `WebGymLab`. All work is pushed to `main`.
- Stack: Astro + MDX + Tailwind v4 (CSS-first), TypeScript strict, fully static. Site languages:
  `es` (default) and `en-GB`, both under a locale prefix.
- Landing (hero, 8 features, showcase with real screenshots, local-first strip, FAQ) + the full
  privacy policy and terms are live in both languages: `/es/…` and `/en/…` are canonical, `/`
  302s to `/es/`, and the legacy `/privacidad` + `/terminos` 301 to their Spanish pages.
  `npm run build` green (9 pages) and `npm run check:i18n` green (82 checks).
- Brand system ported from the app (`gymlab-app/src/index.css`): dark gold tokens, Oswald/Barlow
  self-hosted, panel/grain primitives. Real app screenshots in `public/screens/`.
- Done: T1 bootstrap · T2 scaffold · T3 brand · T4 layout · T5 sections · T6 screenshots · T7 legal skeleton · T13 bilingual site.
- The app is live at `https://app.gymlab.dev` (Worker `gymlab-app`, auto-deployed from `ProyectoGymLab` on every push), so the landing CTA now lands on a real app. See T12.

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
- [ ] T9b — Web Analytics beacon (token pending) + "Always Use HTTPS" toggle + optional www→apex redirect + switch DonDominio renewal to automatic.
- [x] Email Routing for `gymlab@gymlab.dev` (2026-10-21) — **Cloudflare Email Routing (free, no paid mailbox)**: destination verified, MX/SPF/DKIM live and verified from 1.1.1.1 + 8.8.8.8, real delivery test OK. Receive-only; replies go out from the personal Gmail. The `Emails received` counter is an aggregate metric and lags behind actual delivery — the delivery test is the acceptance evidence.

### T13 — Bilingual site ES/EN — DONE (2026-10-21)

- [x] Locale routes `/es/…` and `/en/…` for the landing, the privacy policy and the terms; `/` 302s to `/es/`.
- [x] `src/i18n/` dictionaries (`es`, `en` in en-GB) with the English typed against the Spanish shape;
      legal documents kept as structured sections so both languages render from the same layout.
- [x] Language selector in the header (Spain + UK flags, both visible, `aria-current`), always visible
      and ≥ 44 px touch target on mobile. English copy written fresh, not literalism.
- [x] Primary CTA `Prueba la app` / `Try the app` → `https://app.gymlab.dev` in the header and the hero.
      Live and resolving since T12 shipped (2026-10-22).
- [x] Legacy `/privacidad` and `/terminos` 301 to the Spanish pages (`public/_redirects` plus dev-only
      fallback stubs) — Play Console and the Health Connect rationale keep working.
- [x] Reciprocal `hreflang` (es/en/x-default), `og:locale`, canonical and alternates normalised to the
      same trailing-slash form; the sitemap emits both locales with alternates and excludes the stubs.
- [x] `scripts/check-i18n.mjs` (`npm run check:i18n`): 82 post-build assertions, green. `npm run build`
      builds 9 pages green. 375 px overflow measured, not eyeballed (`scrollWidth 360 ≤ 375`).
- [x] The English legal pages carry a courtesy-translation clause ("the Spanish version prevails"),
      approved by the owner (2026-10-22). The Spanish legal prose moved verbatim (0 paragraphs reworded).
- [x] Showcase screenshots are **English-only in both locales** (owner decision, 2026-10-22): the app
      ships English by default, so they show a first launch. A per-language set was considered and rejected.

### T12 — App web en `app.gymlab.dev` — DONE (2026-10-22)

- Served by the Worker `gymlab-app`, connected to `Yvesdefaria/GymLab` (root `gymlab-app`, build `npm run build`, deploy `npx wrangler deploy`): **every push to `main` deploys**.
- `wrangler.jsonc` declares `assets.directory = "./dist"`, `not_found_handling = "single-page-application"` and `routes: [{ pattern: "app.gymlab.dev", custom_domain: true }]` — the deploy created the DNS record and the certificate; no dashboard step for the domain.
- `wrangler` is pinned as a devDependency: Workers Builds uses the Wrangler version declared in `package.json`, so without it the deploy step depended on whatever `npx` fetched that day.
- Build **#a88ef28b** green (1m 21s, Node 24.21.0, 1,994 assets uploaded).
- Verified live: `/`, `/rutinas` and `/entrenamiento/active` return 200 with the SPA shell; `sw.js`, `manifest.webmanifest`, hashed bundles, fonts and exercise images return 200; canonical and OG now point at `https://app.gymlab.dev`; a CDP boot renders the home with **0 console errors and 0 failed requests**.
- Fixed on the way: `SITE_URL` (`useSeo.ts`) and `index.html` published `https://gymlab.app` — a third-party domain — as canonical.
- Known and accepted: `/test-animations` is publicly reachable; it is the e2e fixture for `test_f43.py` (4 KB, no data, no secrets).
- Follow-up: hashed assets are served with `cache-control: max-age=0, must-revalidate`; a `_headers` file could give `/assets/*` and `/fonts/*` long-lived immutable caching. The service worker already precaches, so the cost is first load and updates.
- Not done: `noindex` (the app is indexable), and the native-only plugins still degrade on web.

### T10 — Phase 3: legal drafting — DONE (2026-10-19)

- [x] Ported the app's current legal text into `/privacidad` (11 sections) and `/terminos` (8 sections + contact).
- [x] Contact unified to `gymlab@gymlab.dev`; the iOS/App Store framing is already current in the app text.
- [x] "Última actualización: 5 de septiembre de 2026" added; "Versión en preparación" notice removed from `LegalLayout`.
- [x] Reviewed against the app's current states (AdMob/IAP future, Sentry/PostHog opt-in, permissions, 14+).
- Note: the titular remains unnamed as in the app text; add name/NIF/domicile if a named responsible is required.
- [x] **2026-10-21 — Health Connect disclosure (Play requirement)**: `/privacidad` gains section 6 «Salud y actividad física (Health Connect y HealthKit)» (12 sections) and section 7 «Permisos» drops the inaccurate Motion & Fitness/Location claim; `/terminos` §3 also corrected. Deployed (`329ecb3`): production shows «Health Connect» + 21-oct date, and the app's rationale WebView loads the same version (CDP-verified from emulator-5554).

### Follow-ups in the app repo (`ProyectoGymLab`) — separate commits there

- [x] App meta/OG pointed to `https://gymlab.app/` (a third party) → now `https://app.gymlab.dev` in `SITE_URL` (`useSeo.ts`) and `index.html` (canonical + OG), fixed with the app deploy (2026-10-22).
- [ ] App `favicon.svg` is still the Vite default → replace with a branded icon.
- [x] Replace placeholder email `gymlab@app.gymlab.dev` → `gymlab@gymlab.dev` in `src/config/contact.ts` (2026-10-21). Mailbox still pending (T9b).
- [x] Point the store listing (when it exists) to `https://gymlab.dev/privacidad` → app `privacy_policy_url` now points there (2026-10-21, emulator-verified). This is also the URL the Play listing must use.
- [ ] After the web is live: retire the GitHub Pages privacy workflow.

## How to resume

1. Read `AGENTS.md` (rules/commands), this file, and `odd/tasks/web-landing-legales.md`.
2. Optional memory context: Engram project `webgymlab` (topic `odd/web-landing-legales/tasks`).
3. `npm install` (if `node_modules` is missing) → `npm run dev` to preview.
4. Pick the first unchecked item above; follow repo conventions (work-unit commits, pushes to `main` announced, no AI attribution).

## Useful commands

- Dev: `npm run dev` · Build: `npm run build` · Preview: `npm run preview`
- Bilingual gate (after a build): `npm run check:i18n` — route set, canonical/hreflang agreement,
  no Spanish leftovers under `/en/`, redirect rules and sitemap alternates.
- Re-capture app screenshots (run from the app repo):
  `cd ProyectoGymLab/gymlab-app`
  `python tests/e2e/scripts/with_server.py "<path-to-WebGymLab>\scripts\capture-screens.py" --port 5180`
  (add `$env:GYMLAB_RECON='1'` for a broad sweep into `%TEMP%/gymlab-recon`)

## Backlog (not scheduled)

- Waitlist/email capture (deferred by decision — requires backend + privacy updates).
- Palettes/day-night on the web (explicitly out of scope: the marketing site uses gold × night only).
- Store listing assets: reuse the vertical screenshots from `public/screens/`.
