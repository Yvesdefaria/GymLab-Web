# Showcase — capturas reales de la app (home, sesión, stats)

- Feature: web-showcase
- Estado: done (2026-10-22), desplegado y verificado en producción
- Repos: `WebGymLab` (script y assets) + `ProyectoGymLab/gymlab-app` (un cambio de UI del que depende el encuadre)

## Objetivo

Que la sección «Capturas» de la landing muestre tres pantallas reales de la app —home, sesión activa con el
timer de descanso y estadísticas— **en inglés y con datos**, no estados vacíos ni mockups.

## Decisiones

| Decisión | Motivo |
|---|---|
| **Solo inglés en `/es/` y `/en/`** | La app arranca en inglés por defecto, así que las capturas muestran lo que ve un usuario nuevo. Se evaluó un set por idioma y el dueño lo descartó (2026-10-22) |
| **Datos generados e importados por la UI** | `scripts/tools/generateFakeData.cjs` produce un backup determinista; el script lo importa desde Ajustes. Nada inventado en HTML |
| **Nombres con sufijo de idioma** (`<name>-en-<width>.webp`) | Explícito: evita servir el set equivocado si algún día se agrega el español |
| **Barra de acciones oculta durante el descanso** | Sin eso, la barra fija tapa la tarjeta del ejercicio y no hay scroll que lo resuelva (faltan 51 px a 375×812). Cambio de producto en la app, no del screenshot |

## Pipeline

```powershell
# 1) datos (repo de la app)
cd "C:\Users\Yves De Faria\Desktop\ProyectoGymLab\gymlab-app"
node scripts/tools/generateFakeData.cjs        # -> fake-data.json (backup, gitignoreado)

# 2) captura (levantar el dev server con el helper e2e)
python tests/e2e/scripts/with_server.py "C:\Users\Yves De Faria\Desktop\WebGymLab\scripts\capture-showcase.py" --port 5180

# 3) derivados WebP
cd "C:\Users\Yves De Faria\Desktop\WebGymLab"
python scripts/optimize-screens.py              # LANG = "en"
```

- `capture-showcase.py` es el script dedicado; `capture-screens.py` (el genérico) quedó intacto.
- El script elige idioma en el wizard, salta el onboarding (`I already train here`), importa el backup,
  verifica que los datos entraron (53 entrenos, racha 17 d, volumen semanal 16.4k) y dispara el descanso
  marcando una serie antes de capturar.
- Fuentes en `assets/screens/` (no se publican), derivados en `public/screens/` a 375w y 750w.

## Evidencia (2026-10-22)

- `npm run build` → 9 páginas; `npm run check:i18n` → 82/82.
- Producción: `/es/` y `/en/` referencian las tres imágenes nuevas y ninguna vieja; los tres WebP servidos
  son **SHA-256 idénticos** a los locales; las rutas viejas (`rutinas-*`, `ejercicios-*`) dan 404.
- La captura de sesión muestra `REST · 58S` completo, sin la barra de acciones encima.

## Limitaciones y deuda

- El encuadre de la sesión **depende** del cambio de la app (barra oculta en descanso). Si se revierte, la
  captura vuelve a tener la tarjeta tapada; no hay offset que lo arregle.
- Tres e2e del repo de la app afirman la barra durante la sesión y quedaron anotados como deuda en
  `gymlab-app/PLAN.md` → «Mejoras identificadas» (`test_f105`, `test_f93_t22_quick`, `test_f123_selector_alfa`).
- El set `-es` se genera pero no se publica; queda como fuente de referencia.
