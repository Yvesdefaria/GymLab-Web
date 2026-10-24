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
| T1 | TLS mínimo 1.2 + HSTS en la zona | S1 S5 S6 | inline (API) | pending |
| T2 | DMARC + CAA en DNS | S1 S5 S6 | inline (API) | pending |
| T3 | WAF custom + rate limiting | S1 S5 S6 | inline (API) | pending |
| T4 | `security.txt`, `_headers`, `/favicon.ico` | S1 S4 | inline (código) + push | pending |
| T5 | Beacon de Web Analytics en la app | S1 S4 | inline (código) + push | pending |
| T6 | Cache Rules para assets estáticos | S1 S5 | inline (API) | pending |
| T7 | Diagnóstico del TTFB de desktop | S1 | inline (read-only) | pending |
| T8 | Actualizar `PLAN.md` con lo cerrado | S2 S3 | inline (doc) | pending |

## Log

**L1** (2026-10-24, pedido del usuario, verbatim):

> ok, vamos a hacer todo lo que tu puedas hacer, ya que por los momentos no puedo hacer nada manualmente, vamos a ir marcando en plan.md lo que se vaya terminando

**L2** (2026-10-24) — Contexto: `WebGymLab/AGENTS.md` declara los pushes work-unit a `main` como
standing-authorized por el owner (se anuncian). Por eso T4/T5 pueden llegar a producción sin intervención.
