# Content library — session handoff

Last updated: 2026-11-07. Read this first next session.

- Per-page record: `odd/tasks/content-pages.md`
- Page contract and copy gate: `odd/tasks/guides-page-contract.md`
- Repo rules: `AGENTS.md`
- Engram project: `webgymlab`

## State

- **76 / 792 bilingual pages** (ES 76, EN 76).
- Blocks: Entrenamiento **37**, Por Músculo **5**, Ejercicios **34**.
- **76 unique heroes, 0 duplicates.**
- **Batch 7 is live (pushed 2026-11-07, `e445b4c` + `402e75c`).** Production has **168 pages** and
  **164 sitemap URLs**.
- The live `/es/rutinas-espalda/` has the new copy, the credit in the alt and the correct
  language switch.

## Gates

```powershell
npm run check:copy   # 3,876/3,876
npm run build        # 168 pages
npm run check:i18n   # 2,697/2,697
npm run verify       # all three, in that order
npm run dev          # http://localhost:4321
```

Start the dev server with `npm run dev` for local review. The 168-page build and the 20 new URLs are
also live in production.

## What is built

- **Entrenamiento de la Espalda (9):** rutinas, anatomía, elegir dominadas, mancuernas, consejos,
  espalda baja, agarres, cómo ampliar dorsales, mejores jalones para la parte inferior.
- **Ejercicios de Espalda (34):** the exercise hub plus the pull-up, lat-pulldown, row, deadlift,
  good-morning, pullover and back-extension families, including the Smith machine row.
- **Por Músculo / Rutinas de Espalda (5):** amplitud/densidad, 15 minutos, dorsales grandes, the
  advanced pull-up programme and the back superset finisher.
- **Musculación (18):** the first eight plus online trainer, home training, maximum pump, gym
  exercises, muscle-growth reasons, resistance bands, consistency, progressive overload, workout
  split and the beginner guide.
- **Recovery and planning (10):** back-pain exercises (YMYL), stretching, stretching circuit, muscle
  failure, periodization, exercise and immune system, deload week, sleep, training planning and
  muscle recovery.

## Next 10

1. Start with the first unchecked row:
   `/tu-primer-dia-en-el-gimnasio-como-superarlo-y-querer-volver/`.
2. Continue with the next `Musculación` rows; keep the same copy, unique-hero and gate flow.
3. The scaling architecture is deferred to PLAN Phase 7; do not implement it during content batches.

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
- Batches 5-7 heroes: Wikimedia Commons (CC0, CC BY, CC BY-SA, public domain), one per page;
  credits in the `alt`.
- The image pipeline (`<Picture>`, AVIF/WebP, srcset) is still pending.

## Pending decisions

- **Batch 7 pushed 2026-11-07.** Future batches deploy through Workers Builds; run `npm run verify`
  first and review the batch before pushing.
- **Scaling architecture (deferred):** route-manifest unification and guides-nav generation; see
  `odd/tasks/architecture-scaling.md` and `PLAN.md` Phase 7. Do not implement during the content
  batches.
- Phase 1: `Article` + `BreadcrumbList` JSON-LD, `og:type=article`, dates, per-article OG image.
- Phase 2: guides hub, real menu hrefs, internal links from the landing and hubs.
- Phase 6: read Search Console on 2026-11-19 before scaling beyond the 76-page pilot.
- Engram memory id 53 covers through batch 7; the scaling architecture is PLAN Phase 7.

## Session close (2026-11-07)

- Batches 5, 6 and 7 are live: 76/792 pages, 76 unique heroes, 168 pages and 164 sitemap URLs.
- Batch 7 shipped the YMYL back-pain page (medical disclaimer in both locales) and the
  `.text-table` fix for the situations table.
- The scaling architecture is deferred to `odd/tasks/architecture-scaling.md` and `PLAN.md` Phase 7.
- Next session starts at `/tu-primer-dia-en-el-gimnasio-como-superarlo-y-querer-volver/`.
- Engram memory #53 is updated with this state.
