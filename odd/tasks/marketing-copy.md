# Marketing copy v2 — landing

- Feature: `marketing-copy`
- Status: in progress
- Branch: `main` (solo-project; work-unit pushes standing-authorized by the owner, announced per push)
- Delivery strategy: `exception-ok` — direct-to-main work-unit stream by owner decision; forecast ~180 authored lines (docs included), under the ~400-line advisory
- Route per task: T1–T5 inline (copy surface fully read; single creative file edit plus two one-line string updates; no research needed)

## Objective

Rewrite the landing's marketing copy using the installed marketing skills (`product-marketing`, `copywriting`, `copy-editing`, `cro`), keeping the established voseo voice and repo-grounded claims, leading with training outcomes instead of local-first infrastructure.

## Diagnosis (copywriting skill, Situation B — real voice present)

- The current copy has a recognizable voice (voseo, plain register, strong lines like "Tu espejo con memoria" and "Tu gimnasio no siempre tiene señal — la app, sí").
- The message hierarchy leads with implementation (hero kicker "Local-first", subhead "sin cuentas y sin nube", privacy strip). Local-first is a proof point, not the product.
- The hero ("Entrena mejor con datos") is generic; feature titles name capabilities instead of outcomes; CTAs only scroll; meta and footer repeat the local-first framing.

## Decisions

- Lead with the core job: stop training from memory; plan, log every set, see progress.
- Demote local-first to one supporting privacy section plus FAQ answers; remove the term from user-facing copy.
- Keep factual claims only: 873 exercises with photos, 9 calculators, 68 templates, in-session timer, progress photos, steps/widgets, achievements, no account required, no third-party uploads. No pricing or launch-date claims (undecided).
- Pre-launch conversion action: email launch notice (`mailto:gymlab@gymlab.dev`); store badges stay as status signals.
- Page structure, section ids, and visual system unchanged; copy only.
- Voice: voseo (Rioplatense), short declarative sentences, no hype words, no AI tells (contrast reveals, negation lists, em dashes in short copy).

## Tasks

- [x] T1 — Product marketing context: `.agents/product-marketing.md` v1, auto-drafted from repo evidence
- [x] T2 — Hero copy and CTAs (`src/pages/index.astro`)
- [x] T3 — Feature titles/texts, showcase captions, privacy strip, FAQ (`src/pages/index.astro`)
- [x] T4 — Meta defaults and footer tagline (`src/layouts/BaseLayout.astro`, `src/components/Footer.astro`)
- [x] T5 — Checks: `npm run build`, structural readback, AI-tell sweep; work-unit commit

## Acceptance criteria

- No user-facing section leads with local-first; the term does not appear in copy.
- Every claim is grounded in existing product facts; no invented proof.
- Headline, subhead, and CTAs pass the AI-tell check.
- voseo consistent across page, meta, and footer.
- `npm run build` green; section ids and 5 FAQ items present in `dist`.

## Checks

- `npm run build`
- Structural readback over `dist/index.html` (hero, section ids, FAQ count, no "local-first")
- Copy sweep against `copywriting` / `copy-editing` AI-tell references
- RDD: `gentle-ai review assess` on the work-unit commit (review mode is on, global)

## Evidence log

- 2026-10-18 — Installed marketing skills from `coreyhaines31/marketingskills` (55.4k★, MIT): `product-marketing`, `copywriting`, `copy-editing`, `cro`, `marketing-psychology` into `~/.agents/skills/` (skill CLI, OpenCode target). No marketing skills existed before.
- 2026-10-18 — Recon: read `index.astro`, `BaseLayout.astro`, `Header.astro`, `Footer.astro`, `odd/tasks/web-landing-legales.md`. Repo clean; `.atl/` untracked.
- 2026-10-18 — T1 done: `.agents/product-marketing.md` v1 auto-drafted from repo evidence; pricing and launch date marked undecided.
- 2026-10-18 — T2–T4 done: hero ("Dejá de entrenar de memoria"), 8 benefit-led feature titles/texts, showcase captions, privacy strip, 5 FAQs, meta defaults, footer tagline. Claims kept: 873 ejercicios, 9 calculadoras, 68 plantillas, timer, fotos de progreso, pasos/wearables, logros, sin cuenta, sin subida a terceros. No price or launch-date claims.
- 2026-10-18 — T5 checks: `npm run build` green (3 pages); `dist/index.html` contains all new strings, 5 `<details>`, ids `features`/`capturas`/`faq`, mailto CTA; meta without "local-first"; AI-tell sweep clean (no banned patterns in `src`).
