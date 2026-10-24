# GymLab Web — Continuation Plan

Handoff document to continue this project in a new session. Canonical project rules live in
`AGENTS.md`; full task history and evidence live in `odd/tasks/web-landing-legales.md`
(also mirrored in Engram: project `webgymlab`, topic `odd/web-landing-legales/tasks`).

## Where we are (2026-10-22)

- Repo: `Yvesdefaria/GymLab-Web` (public) → local `WebGymLab`. All work is pushed to `main`.
- Stack: Astro + MDX + Tailwind v4 (CSS-first), TypeScript strict, fully static. Site languages:
  `es` (default) and `en-GB`, both under a locale prefix.
- Landing (hero, 8 features, showcase with real screenshots, local-first strip, FAQ) + the full
  privacy policy and terms are live in both languages: `/es/…` and `/en/…` are canonical, `/`
  302s to `/es/`, and the legacy `/privacidad` + `/terminos` 301 to their Spanish pages.
  `npm run build` green (9 pages) and `npm run check:i18n` green (82 checks).
- Showcase: three real captures (home, live session with the rest timer, stats), **English in both
  locales by decision**, generated from imported demo data. See `odd/tasks/web-showcase-capturas.md`.
- Brand system ported from the app (`gymlab-app/src/index.css`): dark gold tokens, Oswald/Barlow
  self-hosted, panel/grain primitives. Real app screenshots in `public/screens/`.
- Done: T1 bootstrap · T2 scaffold · T3 brand · T4 layout · T5 sections · T6 screenshots · T7 legal skeleton · T13 bilingual site · T14 showcase captures.
- The app is live at `https://app.gymlab.dev` (Worker `gymlab-app`, auto-deployed from `ProyectoGymLab` on every push), so the landing CTA now lands on a real app. See T12.
- 2026-10-24: primera **medición real de tráfico y performance** de la zona (T16). Corrige dos supuestos
  del audit previo: hay RUM instalado y el MCP sí expone analytics (SQL API).
- 2026-10-24: **hardening P0/P2 aplicado y verificado en producción** (TLS 1.2, HSTS, DMARC, CAA, WAF custom,
  rate limiting, headers, `security.txt`, `favicon.ico`, cache inmutable). Detalle y evidencia en T16.

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
- [ ] T9b — Web Analytics beacon (token pending) + **switch DonDominio renewal to automatic**. `Always Use HTTPS` and the `www→apex` redirect are done and verified (2026-10-22). The rest of the Cloudflare hardening (HSTS, minimum TLS, DMARC, CAA, DNSSEC, `security.txt`, landing security headers) is tracked in `ProyectoGymLab/odd/tasks/cloudflare-endurecimiento.md` (phase 131).
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

### T14 — Showcase captures: home, session and stats — DONE (2026-10-22)

- [x] Dedicated pipeline (`scripts/capture-showcase.py`), separate from the generic capture: pick the
      language, skip onboarding, import the generated backup through Ajustes, assert the data landed,
      start the rest timer and shoot.
- [x] `scripts/optimize-screens.py` emits the language-suffixed set at 375w/750w; stale derivatives removed.
- [x] Three captures in English with real data (53 workouts, 17-day streak, 16.4k weekly volume); the same
      set ships in both locales by decision.
- [x] The session frame required an app change: the fixed action bar hides while the rest timer runs.
- [x] Verified in production: `/es/` and `/en/` reference the new files, the served WebP are SHA-256
      identical to the local ones, and the old paths return 404.
- Commands, limitations and cross-repo debt: `odd/tasks/web-showcase-capturas.md`.

### T15 — SEO del copy y superficie indexable — QUICK WINS, CALCULADORAS Y NOINDEX HECHOS (2026-10-23)

**Veredicto**: el copy hace **match parcial** con las búsquedas de la categoría. El término de categoría está
en el título, pero no en el H1, y no existe superficie indexable para la cola larga.

| Elemento | Texto indexado hoy | Términos de búsqueda |
|---|---|---|
| `<title>` | `GymLab — App de entrenamiento y progreso` | ✅ «app de entrenamiento» (head term) |
| `description` | «Planifica tu rutina, registra cada serie… 873 ejercicios y 9 calculadoras…» | ✅ rutina, ejercicios, calculadoras · ❌ «gratis», «sin conexión», «gimnasio» |
| **H1** | `Deja de entrenar de memoria` | ❌ cero términos de búsqueda |
| H2 | «De la rutina al gráfico» · «Así se ve mientras entrenas» · «Tus datos viven en tu teléfono» | ⚠️ parcial |
| FAQ | «¿Funciona sin conexión?», «¿Sirve si estoy empezando?» | ✅ matchea preguntas reales de cola larga |

**Problema de fondo**: el sitemap tiene **3 URLs** (landing, privacidad, términos). El volumen del nicho vive
en cola larga —calculadoras, rutinas, ejercicios— y la app tiene **9 calculadoras y 873 ejercicios sin una sola
página web que los exponga**. Además `app.gymlab.dev` es indexable (su `index.html` dice `index, follow`) y su
`/robots.txt` devuelve el HTML del SPA, así que compite con la landing sin aportar contenido.

**Sin datos todavía**: los volúmenes reales salen de **Search Console** (propiedad verificada el 2026-10-22) en
2–4 semanas, o de Keyword Planner. Cualquier cifra anterior sería inventada.

**Estado 2026-10-23**: el sitemap publica **12 URLs** (6 páginas × 2 locales) y `app.gymlab.dev` ya no es
indexable, así que los dos problemas de fondo del audit están cerrados.

**Plan**

- [x] **Quick wins**: description con «gratis» y «sin conexión»; un H2 con «app de entrenamiento»; dos
      preguntas nuevas en el FAQ; schema `SoftwareApplication` + `FAQPage`; gate con 20 aserciones SEO. Los
      `alt` ya eran descriptivos: auditados, sin trabajo inventado. Commit `78dc522`.
- [x] **Sitemap**: `hreflang` del XML igualado al del HTML (`es`/`en`/`x-default`, sin `es-ES`/`en-GB`) y
      `/sitemap.xml` → 301 a `/sitemap-index.xml`. Commit `5da5662`.
- [x] **Tres páginas de calculadora** (`/es/calculadora-1rm`, `/es/calculadora-imc`, `/es/calcular-calorias`,
      más las pares en `/en/`): calculan de verdad con las fórmulas de la app, con sección `#calculadoras` en
      la landing y enlaces cruzados. Commits `1b96140`, `2db5bde`, `df2a77d`.
- [x] **`noindex` + `robots.txt` real en la app** para que el tráfico entre por la landing: `d735a532` y
      `297c12cc` en `ProyectoGymLab`, verificado en producción (`text/plain` real y `noindex, nofollow`).
- [ ] **Páginas de rutinas** con plantilla desde el seed de la app — bloqueado por decisión: qué rutinas
      publicar y la forma del seed.
- [ ] **Revisar Search Console a las 4 semanas** y priorizar por impresiones reales, no por intuición —
      primera lectura útil ~2026-11-19.

**Restricción de marca**: el H1 se mantiene; el término de categoría entra en un H2/subtítulo. No se reescribe
la voz del sitio para meter keywords.

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

### T16 — Cloudflare: medición real y plan por prioridad (2026-10-24)

Medido con el MCP `cloudflare-api` (OAuth, cuenta `64ab6824…`, rol Super Administrator, zona `gymlab.dev`).
Complementa `ProyectoGymLab/odd/tasks/cloudflare-endurecimiento.md` (hallazgos 1–12, 2026-10-22): ese audit
**no tenía datos de tráfico**; acá están.

**Dos correcciones a ese audit:**

1. **Sí hay RUM/Web Analytics instalado** (auto-install desde la creación de la zona, `siteTag 59ae492f…`,
   ruleset `enabled: true`, `lite: true`). El audit decía que no había en ningún host.
2. **El MCP sí permite analytics**: `/zones/:id/analytics/dashboard` y `/analytics/colos` están sunset
   (`404 · 1015`), pero la **Analytics SQL API** funciona. No hace falta GraphQL.

#### Cómo se consulta (para no volver a descubrirlo)

- `GET /accounts/{account_tag}/analytics/sql?query=…` — dialecto tipo ClickHouse.
- Exige rango de tiempo **en el SQL** (`timestamp >= '…' AND timestamp < '…'`) y `LIMIT` si hay `ORDER BY`.
- `events.httpRequests` se filtra con `zoneTag`; `events.rumPageloadEvents` y `events.rumWebvitalsEvents`
  exigen `accountTag` **y** `siteTag` (con solo `siteTag` devuelve `422`).
- No soporta `quantile()` ni `APPROX_QUANTILE()` ni `MIN()` sobre datasets muestreados → usar `avg()` y
  `countIf()`. Hay 91 datasets en el catálogo (`/analytics/sql/introspection`).
- `botScore` en `httpRequests` devuelve `403` (falta scope); `/_heartbeat`, `/live`, `/ready` devuelven `400`
  porque no son rutas de la API.

#### Línea base (19–23 oct, 5 días con datos)

| Métrica | Valor |
|---|---|
| Requests HTTP totales | **16.627** |
| **Pageviews reales (RUM)** | **57** (0 marcados como bot) |
| `200` / `404` | 7.902 / **6.551 (39%)** |
| Otros estados | 301 944 · 304 491 · 302 371 · 307 132 · 403 115 · 204 85 |
| Por host | gymlab.dev 7.536 · app 4.788 · www 1.641 · `:443` 492 · `:8443` 439 · `:8080` 438 |
| Países (RUM) | US 48 · CA 4 · IN 2 · BR 1 · SG 1 · KR 1 |
| Referrers | 56 directos · 1 desde `app.gymlab.dev` (**cero búsqueda/orgánico**) |
| Devices / browsers | desktop 37 · mobile 20 / Chrome 29 · MobileSafari 11 · ChromeMobile 9 · Edge 5 |
| Paths (RUM) | `/` 43 · `/es/` 14 |
| LCP promedio | **3,31 s** (12 de 28 muestras > 2,5 s) |
| TTFB promedio | **991 ms** (desktop 1,24 s · mobile 0,24 s) |

Top 404 (todo escaneo de exploits): `/wp-admin/install.php` 77 · `/.env` 57 · `/favicon.ico` 39 ·
`/.git/config` 36 · `/.env.dist` 32 · `/application/.env` 28 · `/xmlrpc.php` 27 · `/.env.local` 26 ·
`/2019/wp-includes/wlwmanifest.xml` 26 · `/config.json` 24.

#### P0 — Seguridad y abuso (esta semana)

- [x] **Rate limiting + WAF custom** — **HECHO 2026-10-24**. Dos rulesets nuevos:
      `http_request_firewall_custom` (bloquea `/.env`, `/.git/`, `/wp-*`, `xmlrpc.php`, `wlwmanifest.xml`,
      `/config.json`) y `http_ratelimit` (100 req/10 s por IP + colo, bloqueo 10 s — topes del plan Free).
      Verificado: `/.env`, `/.git/config`, `/wp-admin/install.php`, `/config.json`, `/xmlrpc.php` → **403**;
      `/es/`, `/en/`, `/privacidad/`, `/terminos/` → **200**.
- [ ] **2FA en la cuenta** — **pendiente, acción del usuario**: requiere dashboard + teléfono.
- [x] **TLS mínimo 1.0 → 1.2** y **HSTS** — **HECHO**. `min_tls_version: "1.2"` y HSTS
      `max-age=15552000; includeSubDomains` servido en apex, www y app. Verificado: TLS 1.0 rechazado
      (handshake falla), TLS 1.2 responde.
- [x] **DMARC + CAA** — **HECHO**. `_dmarc` TXT `v=DMARC1; p=none; rua=mailto:gymlab@gymlab.dev` y CAA
      `issue` para `pki.goog`, `letsencrypt.org`, `sectigo.com` + `iodef`, verificado por DoH público.
      Cloudflare publica además las CAs de su Universal SSL (comodoca, digicert, ssl.com): el conjunto
      efectivo es más amplio que el cargado a mano.
- [x] **`security.txt` + headers de la landing** — **HECHO**. `public/.well-known/security.txt`,
      `public/_headers` (nosniff, Referrer-Policy, X-Frame-Options, Permissions-Policy, CSP report-only) y
      `public/favicon.ico`. Verificado en producción después del deploy.

#### P1 — Medición que falta

- [ ] **Beacon de Web Analytics en `app.gymlab.dev`** — **bloqueado por decisión, no por técnica**: (1) el
      repo de la app exige `Commit sin push` y aprobación previa; (2) sería una recolección nueva que la
      política de privacidad y el Data Safety de Play todavía no declaran. Los tres pasos van juntos.
- [x] **Flag `lite: true` del ruleset RUM** — **revisado, se mantiene**: es el modo sin cookies, coherente
      con «cookieless analytics only» de `AGENTS.md`. Cambiarlo ampliaría la recolección sin tocar la política.
- [x] **T9b — beacon de la landing** — **resuelto**: el site existe (`siteTag 59ae492f…`), está en
      auto-install y ya recolecta (57 pageviews y 28 muestras de Web Vitals entre el 19 y el 23 de octubre).

#### P2 — Performance medida

- [x] **TTFB de desktop** — **medido, no se reproduce**: desde un cliente nuevo (España) el edge responde
      ~340 ms incluyendo DNS + TLS en `/`, `/es/`, `/en/` y assets. El 1,24 s de RUM son 21 muestras de
      cliente, no latencia de origen. Sin acción.
- [x] **`early_hints: on`** — **HECHO** (estaba `off`). El `preload` del hero y la revisión de los 5 `woff2`
      quedan como optimización de LCP pendiente de volver a medir.
- [x] **`/favicon.ico` devuelve 404** — **HECHO**: `public/favicon.ico` (16/32/48, generado del
      `icon-192.png`). Verificado 200 en producción.
- [x] **Cache Rules** — **HECHO**: `public/_headers` sirve `/_astro/*` con `max-age=31536000, immutable`
      (verificado sobre el CSS real) y una Cache Rule de zona aplica lo mismo a `app.gymlab.dev/assets/*`
      (`CF-Cache-Status: HIT`, `immutable`).

#### P3 — Adquisición (no es infra)

- [ ] **Cero referrers externos**: nadie llega desde buscadores ni redes. Se cruza con T15 — Search Console a
      las 4 semanas (primera lectura útil ~2026-11-19) y las páginas de rutinas/calculadoras.

#### Bloqueos del MCP y cómo se desbloquean

| Bloqueo | Evidencia | Salida |
|---|---|---|
| Gestión de tokens (`/user/tokens`) | `403 · 9109 · "No OAuth scope covers this endpoint"` | Conectar con **API token** (Bearer) con *API Tokens Read*; el OAuth no cubre tokens |
| Billing/subscriptions | `403 · 10000 Authentication error` | API token con *Billing Read* |
| `botScore` en analytics | `403 · "not permitted to access column"` | Re-autorizar con scope más amplio, o inferir con `userAgent` + `ja4` |
| R2 | `403 · 10042 · "Please enable R2 through the Cloudflare Dashboard"` | Habilitar R2 en el dashboard (pide método de pago) — solo si la app necesita storage |
| Plan Free | `custom_certificate_quota: 0`, `page_rule_quota: 3` | Techo de plan, no de permisos |
| `?codemode=false` | — | **No usarlo**: expande ~3.780 tools (~244k tokens). El code mode ya está activo |

#### Estado de la revisión nativa (2026-10-24)

RDD está **on** (decidido a nivel global) y `review assess --base-ref 55d2092 --committed-only` marcó el
rango como `high_risk` (5 archivos, 189 líneas). Se abrió la transacción `review-bb1b28cdd5e6324c` y **el
consentimiento quedó sin responder** (el prompt se interrumpió): no hay registro de revisión creado.

Al retomar:

1. `gentle-ai review status --cwd <repo> --contract gentle-ai.review-integration/v2 --agent opencode`
   para recuperar la transacción, y resolver el consentimiento pendiente (granted / declined) antes de
   empezar trabajo nuevo. Un decline no desactiva RDD: es solo para ese candidato.
2. Si no querés revisiones, la salida explícita es `gentle-ai review mode disable`.

#### Próxima sesión — orden sugerido

1. Resolver la revisión pendiente de arriba.
2. Confirmar en Workers Builds que el deploy del commit de docs (`1a94d1c`) quedó verde.
3. **Acciones del owner** (no delegables): 2FA en Cloudflare · DNSSEC (cargar el DS en DonDominio) ·
   renovación automática en DonDominio · declaraciones de Play Console (Health apps + Data safety).
4. **P1 con decisión pendiente**: beacon en `app.gymlab.dev` — requiere actualizar política de privacidad y
   Data Safety, y el push manual que exige el repo de la app.
5. **Re-medir con la SQL API**: cache hit ratio y 404 después del WAF. La línea base de 6.551 404 (39%) es
   anterior al bloqueo, así que la próxima lectura debería caer fuerte. Mismo criterio para el TTFB.
6. **LCP**: `preload` del hero y revisión de los 5 `woff2`, ahora que `early_hints` está en `on`.

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
