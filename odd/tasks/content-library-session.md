# Content library — session handoff

Last updated: 2026-11-06. Read this first next session.

- Per-page record: `odd/tasks/content-pages.md`
- Page contract and copy gate: `odd/tasks/guides-page-contract.md`
- Repo rules: `AGENTS.md`
- Engram project: `webgymlab`

## State

- **56 / 792 bilingual pages** (ES 56, EN 56).
- Blocks: Entrenamiento **17**, Por Músculo **5**, Ejercicios **34**.
- **56 unique heroes, 0 duplicates.**
- **Batch 5 is local (not pushed).** The previous 46 pages are live (`a048f02`; 108 pages and
  **104 sitemap URLs**). The local build has **128 pages** and **124 sitemap URLs**.
- The live `/es/rutinas-espalda/` has the new copy, the credit in the alt and the correct
  language switch.

## Gates

```powershell
npm run check:copy   # 2,856/2,856
npm run build        # 128 pages
npm run check:i18n   # 2,077/2,077
npm run verify       # all three, in that order
npm run dev          # http://localhost:4321
```

Start the dev server with `npm run dev` before reviewing. The 128-page build and the 20 new URLs
are local until the owner reviews and decides to push.

## What is built

- **Entrenamiento de la Espalda (9):** rutinas, anatomía, elegir dominadas, mancuernas, consejos,
  espalda baja, agarres, cómo ampliar dorsales, mejores jalones para la parte inferior.
- **Ejercicios de Espalda (34):** the exercise hub plus the pull-up, lat-pulldown, row, deadlift,
  good-morning, pullover and back-extension families, including the Smith machine row.
- **Por Músculo / Rutinas de Espalda (5):** amplitud/densidad, 15 minutos, dorsales grandes, the
  advanced pull-up programme and the back superset finisher.
- **Musculación (8):** plantilla, prueba de flexibilidad, sentadilla, errores para ganar músculo,
  frecuencia, mentiras del culturismo, ganar masa muscular and cross training.

## Next 10

1. `/ejercicios-dolor-de-espalda/` — YMYL; add a medical disclaimer and do a careful pass before
   batching it.
2. Continue with the next unchecked `Musculación` rows, starting with
   `/beneficios-de-contratar-un-entrenador-personal-online/`.
3. Reach 10 pages with the same copy, unique-hero and gate flow.

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
- Batch 5 heroes: Wikimedia Commons (CC0, CC BY, CC BY-SA, public domain), one per page; credits in
  the `alt`.
- The image pipeline (`<Picture>`, AVIF/WebP, srcset) is still pending.

## Pending decisions

- **Batch 5 is local.** Review the 20 URLs; push only on the owner's decision. A push deploys through
  Workers Builds; run `npm run verify` first.
- The previous 46 pages are already live.
- Phase 1: `Article` + `BreadcrumbList` JSON-LD, `og:type=article`, dates, per-article OG image.
- Phase 2: guides hub, real menu hrefs, internal links from the landing and hubs.
- Phase 6: read Search Console on 2026-11-19 before scaling beyond the 56-page pilot.
- Engram memory id 53 / session summary id 54 cover the 46-page push; batch 5 is recorded in this
  handoff and the checklist.
