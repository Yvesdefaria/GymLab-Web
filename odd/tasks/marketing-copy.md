# Marketing copy v2 — landing

- Feature: `marketing-copy`
- Status: done (neutral Spanish correction applied; RDD slice pending: medium, under budget)
- Branch: `main` (solo-project; work-unit pushes standing-authorized by the owner, announced per push)
- Delivery strategy: `exception-ok` — direct-to-main work-unit stream by owner decision; ~360 authored lines including docs, under the ~400-line advisory
- Route per task: T1–T6 inline (copy surface fully read; single creative file edit plus one-line string updates; no research needed)

## Objective

Rewrite the landing's marketing copy using the installed marketing skills (`product-marketing`, `copywriting`, `copy-editing`, `cro`), keeping repo-grounded claims and **neutral/professional Spanish**, leading with training outcomes instead of local-first infrastructure.

## Diagnosis (copywriting skill, Situation B — real voice present)

- The previous copy had a recognizable voice but used Rioplatense voseo, which violates the repo's language rule (`AGENTS.md`: neutral/professional Spanish).
- The message hierarchy led with implementation (hero kicker "Local-first", subhead "sin cuentas y sin nube", privacy strip). Local-first is a proof point, not the product.
- The hero ("Entrena mejor con datos") was generic; feature titles named capabilities instead of outcomes; CTAs only scrolled; meta and footer repeated the local-first framing.

## Decisions

- Lead with the core job: stop training from memory; plan, log every set, see progress.
- Demote local-first to one supporting privacy section plus FAQ answers; remove the term from user-facing copy.
- Keep factual claims only: 873 exercises with photos, 9 calculators, 68 templates, in-session timer, progress photos, steps/widgets, achievements, no account required, no third-party uploads. No pricing or launch-date claims (undecided).
- Pre-launch conversion action: email launch notice (`mailto:gymlab@gymlab.dev`); store badges stay as status signals.
- Page structure, section ids, and visual system unchanged; copy only.
- Voice: **neutral/professional Spanish (tú)** — no voseo or regionalisms; short declarative sentences; no hype words; no AI tells (contrast reveals, negation lists, em dashes in short copy).

## Tasks

- [x] T1 — Product marketing context: `.agents/product-marketing.md` v1, auto-drafted from repo evidence
- [x] T2 — Hero copy and CTAs (`src/pages/index.astro`)
- [x] T3 — Feature titles/texts, showcase captions, privacy strip, FAQ (`src/pages/index.astro`)
- [x] T4 — Meta defaults and footer tagline (`src/layouts/BaseLayout.astro`, `src/components/Footer.astro`)
- [x] T5 — Checks: `npm run build`, structural readback, AI-tell sweep; work-unit commit
- [x] T6 — Neutral Spanish pass (user correction): convert all copy to neutral tú and remove regionalisms (`index.astro`, `BaseLayout`, `Footer`, `LegalLayout`); codify the rule in `AGENTS.md`; bump context doc to v2

## Acceptance criteria

- No user-facing section leads with local-first; the term does not appear in copy.
- All copy uses neutral/professional Spanish; zero voseo or regionalisms in `src`.
- Every claim is grounded in existing product facts; no invented proof.
- Headline, subhead, and CTAs pass the AI-tell check.
- `npm run build` green; section ids and 5 FAQ items present in `dist`.

## Checks

- `npm run build`
- Structural readback over `dist/index.html` (hero, section ids, FAQ count, no "local-first")
- Voseo/regionalism grep over `src` (must be empty)
- Copy sweep against `copywriting` / `copy-editing` AI-tell references
- RDD: `gentle-ai review assess` on the work-unit commit (review mode is on, global)

## Evidence log

- 2026-10-18 — Installed marketing skills from `coreyhaines31/marketingskills` (55.4k★, MIT): `product-marketing`, `copywriting`, `copy-editing`, `cro`, `marketing-psychology` into `~/.agents/skills/` (skill CLI, OpenCode target). No marketing skills existed before.
- 2026-10-18 — Recon: read `index.astro`, `BaseLayout.astro`, `Header.astro`, `Footer.astro`, `odd/tasks/web-landing-legales.md`. Repo clean; `.atl/` untracked.
- 2026-10-18 — T1 done: `.agents/product-marketing.md` v1 auto-drafted from repo evidence; pricing and launch date marked undecided.
- 2026-10-18 — T2–T4 done (first pass, voseo): hero, 8 benefit-led feature titles/texts, showcase captions, privacy strip, 5 FAQs, meta defaults, footer tagline. Claims kept: 873 ejercicios, 9 calculadoras, 68 plantillas, timer, fotos de progreso, pasos/wearables, logros, sin cuenta, sin subida a terceros. No price or launch-date claims.
- 2026-10-18 — T5 checks: `npm run build` green (3 pages); `dist/index.html` contains all new strings, 5 `<details>`, ids `features`/`capturas`/`faq`, mailto CTA; meta without "local-first"; AI-tell sweep clean. Work-unit commit `c3bddb2`; docs commit `e861990`.
- 2026-10-18 — RDD assess on `c3bddb2` (base `fbaef58`, committed-only): risk `medium`, `review_due: false`, reason `under_budget`; untracked `.atl/` excluded as pre-existing.
- 2026-10-18 — **User correction**: the landing must use neutral/professional Spanish, not Rioplatense voseo (repo rule in `AGENTS.md`). Voice decision reopened; T6 added.
- 2026-10-18 — T6 done: neutral pass across `index.astro`, `BaseLayout`, `Footer` and `LegalLayout` ("Escríbenos"); `AGENTS.md` codifies "no voseo or regionalisms"; `.agents/product-marketing.md` bumped to v2 with neutral voice examples.
