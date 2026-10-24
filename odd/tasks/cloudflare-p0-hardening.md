# Cloudflare P0/P1/P2 hardening — ejecución sin acción manual

- Feature: cloudflare-p0-hardening
- Branch: `main` (repo `WebGymLab`), cambios de app en `ProyectoGymLab` (`gymlab-app`)
- Runner: `npm run build` + `npm run check:i18n`
- Referencias: `PLAN.md` § T16 · `ProyectoGymLab/odd/tasks/cloudflare-endurecimiento.md` (audit 2026-10-22)

## Specs

- **S1** — Ejecutar todo lo que no requiera acción manual del owner, en el orden de prioridad de T16 (P0 → P1 → P2).
- **S2** — Marcar en `WebGymLab/PLAN.md` cada ítem terminado, con evidencia de verificación.
- **S3** — Todo ítem que exija dashboard, teléfono, registrador o consola externa queda **sin marcar** y se reporta como acción del usuario.
- **S4** — Sin regresiones: el sitio sigue resolviendo, `npm run build` verde, `npm run check:i18n` verde, y el comportamiento existente (redirects, rutas, legal) se preserva.
- **S5** — Nada destructivo: no se borran certificados, ni registros DNS activos, ni reglas existentes. Todo cambio es reversible.
- **S6** — Verificación empírica por cambio (readback de la API, DNS-over-HTTPS, `curl -I`, probe de la regla WAF).

## Tasks

| ID | Tarea | Specs | Ruta | Estado |
|---|---|---|---|---|
| T1 | TLS mínimo 1.2 + HSTS en la zona | S1 S5 S6 | inline (API) | **done** — verificado (TLS 1.0 rechazado, HSTS en apex/www/app) |
| T2 | DMARC + CAA en DNS | S1 S5 S6 | inline (API) | **done** — verificado por DoH |
| T3 | WAF custom + rate limiting | S1 S5 S6 | inline (API) | **done** — probes 403, páginas 200 |
| T4 | `security.txt`, `_headers`, `/favicon.ico` | S1 S4 | inline (código) + push | **done** — `b61a333`, verificado en producción |
| T5 | Beacon de Web Analytics en la app | S1 S4 | inline (código) + push | **blocked** — el repo de la app exige push manual + la política de privacidad no declara esa recolección |
| T6 | Cache Rules para assets estáticos | S1 S5 | inline (API) | **done** — `_astro/*` immutable + Cache Rule en `app/assets/*` |
| T7 | Diagnóstico del TTFB de desktop | S1 | inline (read-only) | **done** — no se reproduce en el edge (~340 ms) |
| T8 | Actualizar `PLAN.md` con lo cerrado | S2 S3 | inline (doc) | **done** |
| T9 | `early_hints: on` | S1 | inline (API) | **done** — estaba `off` |

## Log

**L1** (2026-10-24, pedido del usuario, verbatim):

> ok, vamos a hacer todo lo que tu puedas hacer, ya que por los momentos no puedo hacer nada manualmente, vamos a ir marcando en plan.md lo que se vaya terminando

**L2** (2026-10-24) — Contexto: `WebGymLab/AGENTS.md` declara los pushes work-unit a `main` como
standing-authorized por el owner (se anuncian). Por eso T4 pudo llegar a producción sin intervención.
El repo de la app (`ProyectoGymLab`) hace lo contrario: `Commit sin push — el usuario revisa y hace push
manualmente`, y además exige brainstorming + aprobación previa. Por eso T5 queda bloqueado.

**L3** (2026-10-24) — Evidencia por tarea:

- T1: `min_tls_version: "1.2"`; `curl --tlsv1.0` falla el handshake, `--tlsv1.2` responde. HSTS
  `max-age=15552000; includeSubDomains` en `gymlab.dev` y `app.gymlab.dev`.
- T2: `_dmarc.gymlab.dev` TXT y 4 CAA publicados (DoH 1.1.1.1 + Google). Cloudflare agrega sus propias CAs
  de Universal SSL a la respuesta.
- T3: `fb75b51f…` (custom) y `f0f12176…` (rate limit, 100 req/10 s, mitigación 10 s — topes del Free).
  `/.env`, `/.git/config`, `/wp-admin/install.php`, `/config.json`, `/xmlrpc.php` → 403; rutas reales → 200.
- T4: `b61a333`. En producción: `/_astro/*.css` con `max-age=31536000, immutable`, headers de seguridad
  presentes, `/.well-known/security.txt` 200, `/favicon.ico` 200.
- T6: Cache Rule `7a0b5c31…`; `app.gymlab.dev/assets/index-fU4FLZ6n.js` → `CF-Cache-Status: HIT`,
  `public, max-age=31536000, immutable`.
- T7: `curl` desde España: `/` 302 en 345 ms, `/es/` 200 en 337 ms, assets ~334 ms (incluye DNS + TLS).
  `edgeTimeToFirstByteMs` sigue sin permiso de columna (scope OAuth), así que la comparación es de borde
  medido, no de dataset.
- T9: `early_hints: on` confirmado por readback.

**L4** (2026-10-24, cierre de sesión) — RDD está on (global) y el rango `55d2092..1a94d1c` se evaluó
`high_risk` (5 archivos, 189 líneas). Se abrió la transacción `review-bb1b28cdd5e6324c`; **el consentimiento
quedó sin responder** (prompt interrumpido), así que no se creó registro de revisión y no se ejecutó ningún
lens. Estado para la próxima sesión: recuperar la transacción con `gentle-ai review status` y resolver
granted/declined antes de trabajo nuevo. Owner actions pendientes: 2FA, DNSSEC (DS en DonDominio),
renovación automática, Play Console. Próximo paso de medición: repetir la SQL API para cache hit ratio y
404 después del WAF.
