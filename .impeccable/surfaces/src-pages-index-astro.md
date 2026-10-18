---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Surface brief — landing (`src/pages/index.astro`)

Mode: Persuade. Scope: the public landing only; legal pages keep the shared chrome readable.

## Audience and job

Spanish-speaking lifters (beginner–intermediate) deciding whether GymLab deserves attention before launch. Job: understand the product's mechanism in seconds and ask for the launch notice.

## Action, proof, constraints

Primary action: email launch notice (`mailto:gymlab@gymlab.dev`). Proof: the real session record, the three real app screenshots, and the numbers 873 / 9 / 68. No price, date, rating, or testimonial claims.

Brand fixed: gold `#d9b384` on `#121214`, Oswald display + Barlow body (self-hosted), existing panel/grain language. Copy fixed (neutral Spanish). Screenshots fixed. Static Astro + Tailwind v4; no new dependencies. Preserve ids `features`, `capturas`, `faq` and five FAQ items.

## Chosen direction

Piso de gimnasio: the page is the gym floor. Full-bleed dark atmosphere, monumental Oswald headline anchored to the lower edge, a vertical station rail (01–04) on the right, floor-plan hairlines, stencil labels. Memorable moment: the headline sits at the floor edge while the station rail climbs the right side.

## Unresolved decisions

None blocking. Footer redesign is in scope; legal pages keep the default header variant.

## Direction contract

THESIS: The landing is a gym floor walked once: the promise sits at the floor edge while training stations climb a rail; it refuses the centered hero-over-cards stack.

OWN-WORLD: Near-black `#121214` field with gold hairlines and stencil labels; full-bleed light-shaft atmosphere and film grain; Oswald at architectural scale; panels read as enamel training stations, not SaaS cards.

STORY: The visitor sees a serious training floor, reads the promise at the floor edge, understands plan → log → progress from the station rail and the real session proof, and asks for the launch notice.

FIRST VIEWPORT: At 1440×900: transparent header over the atmosphere; headline "Deja de entrenar de memoria" at ~118px anchored bottom-left, subhead and two actions below it; the four-station rail occupies the right 250px; store badges sit as stencil chips under the actions.

FORM: piso de gimnasio — an architectural, full-bleed composition inside the fixed brand world (structure 7 of 7 on the grounded list). seed:0ceeb32d36009018

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
