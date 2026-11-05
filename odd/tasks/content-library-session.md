# Content library — session handoff

Last updated: 2026-11-05. Read this first next session.

- Per-page record: `odd/tasks/content-pages.md`
- Page contract and copy gate: `odd/tasks/guides-page-contract.md`
- Repo rules: `AGENTS.md`
- Engram project: `webgymlab`

## State

- **46 / 792 bilingual pages** (ES 46, EN 46).
- Blocks: Entrenamiento **9**, Por Músculo **4**, Ejercicios **33**.
- **46 unique heroes, 0 duplicates.**
- **Pushed 2026-11-05** (`0b3c6b4..a048f02`). Production is live with **108 pages** and
  **104 sitemap URLs**.
- The live `/es/rutinas-espalda/` now has the new copy, the credit in the alt and the correct
  language switch.

## Gates

```powershell
npm run check:copy   # 2,346/2,346
npm run build        # 108 pages
npm run check:i18n   # 1,767/1,767
npm run verify       # all three, in that order
npm run dev          # http://localhost:4321
```

The dev/preview server was stopped by the 2026-11-05 restart. Start it with `npm run dev` before
reviewing.

## What is built

- **Entrenamiento de la Espalda (9):** rutinas, anatomía, elegir dominadas, mancuernas, consejos,
  espalda baja, agarres, cómo ampliar dorsales, mejores jalones para la parte inferior.
- **Ejercicios de Espalda (33):** the exercise hub plus the pull-up, lat-pulldown, row, deadlift,
  good-morning, pullover and back-extension families.
- **Por Músculo / Rutinas de Espalda (4):** amplitud/densidad, 15 minutos, dorsales grandes and the
  advanced pull-up programme.

## Next 10

1. `/remo-multipower/` — the last unchecked page in `Ejercicios de Espalda`.
2. `/superserie-de-espalda-para-terminar-tu-rutina/` — the last back-cluster page.
3. Then continue with the first unchecked row in `content-pages.md` (currently the `Musculación`
   block) until the batch reaches 10.

Do not batch `/ejercicios-dolor-de-espalda/` without a medical disclaimer and a YMYL pass.

## Page contract (short)

1. Load the `copy-editing` skill and read `.agents/product-marketing.md`.
2. Run the seven sweeps and the AI-tell check. Neutral Spanish, `tú`; zero vosotros/voseo; zero em
   dashes.
3. `title` 45–60 chars, `description` 150–160, all required frontmatter, reciprocal `alternate`.
4. One **unique** hero per page. Never reuse a path; `check:copy` fails on a duplicate.
5. Two files: `src/content/articles/es/<slug>.md` and `en/<en-slug>.md`.
6. Add the pair to `astro.config.mjs` (`ROUTE_PAIRS`) and `scripts/check-i18n.mjs` (`PAGES` and
   `ROUTES`).
7. Run `npm run verify` and record the page in `content-pages.md` (row + copy-pass log).

## Images

- Free licences only: public domain, CC0, CC BY, CC BY-SA. Vendor under
  `public/content/<slug>/hero.jpg`; no hotlinks.
- Credit goes in `heroCredit` and is appended to the `alt`; there is no visible caption.
- Known approximations: the three good-morning pages use a Smith squat, a seated row and a deadlift;
  the one-arm lat pulldown uses a lat pulldown photo because no free one-arm pulldown photo exists.
  The `alt` describes what is actually shown.
- The image pipeline (`<Picture>`, AVIF/WebP, srcset) is still pending.

## Pending decisions

- **Push done 2026-11-05.** Future pushes deploy through Workers Builds; run `npm run verify` before
  each one.
- Phase 1: `Article` + `BreadcrumbList` JSON-LD, `og:type=article`, dates, per-article OG image.
- Phase 2: guides hub, real menu hrefs, internal links from the landing and hubs.
- Phase 6: read Search Console on 2026-11-19 before scaling beyond the 46-page pilot.
- Engram mirror saved 2026-11-05 (memory id 53, session summary id 54; project `webgymlab`).
