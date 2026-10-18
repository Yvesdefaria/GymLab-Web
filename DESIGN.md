---
name: GymLab Marketing Site
description: "A gym floor drawn in gold: hairlines on near-black, Oswald at architectural scale, enamel plates, one authored motion."
colors:
  warm-brass: "#d9b384"
  pale-brass: "#fdddb4"
  deep-brass: "#b99050"
  faint-brass-line: "#d9b38429"
  strong-brass-rule: "#d9b38457"
  floor-black: "#121214"
  plate-charcoal: "#242422"
  chalk-white: "#f8fafc"
  dust-taupe: "#a39b8c"
  smoke-umber: "#3a352b"
  well-black: "#0b0b0c"
typography:
  display:
    fontFamily: "Oswald, sans-serif"
    fontSize: "clamp(2.4rem, 8.9vw, 7.375rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "0.005em"
  headline:
    fontFamily: "Oswald, sans-serif"
    fontSize: "clamp(2.2rem, 4.6vw, 4.4rem)"
    fontWeight: 600
    lineHeight: 0.96
    letterSpacing: "0.005em"
  title:
    fontFamily: "Oswald, sans-serif"
    fontSize: "clamp(1.3rem, 2.1vw, 1.8rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "0.01em"
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "0.64rem"
    fontWeight: 600
    letterSpacing: "0.22em"
  label-small:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "0.56rem"
    fontWeight: 600
    letterSpacing: "0.16em"
  button:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.15em"
  stat:
    fontFamily: "Oswald, sans-serif"
    fontSize: "clamp(2.25rem, 4vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "0.01em"
    fontFeature: "tnum"
rounded:
  square: "0"
  stencil: "2px"
  plate: "1rem"
  circle: "50%"
spacing:
  gutter: "clamp(1.25rem, 4vw, 3.5rem)"
  section: "clamp(4.5rem, 8vw, 8rem)"
  cell: "clamp(1.4rem, 2.5vw, 2.4rem)"
  control: "0.85rem 1.35rem"
  row: "0.95rem 0"
components:
  button-primary:
    backgroundColor: "{colors.warm-brass}"
    textColor: "{colors.floor-black}"
    typography: "{typography.button}"
    rounded: "{rounded.stencil}"
    padding: "{spacing.control}"
    height: "3.2rem"
  button-ghost:
    backgroundColor: "{colors.floor-black}"
    textColor: "{colors.chalk-white}"
    typography: "{typography.button}"
    rounded: "{rounded.stencil}"
    padding: "{spacing.control}"
    height: "3.2rem"
  button-ghost-hover:
    textColor: "{colors.pale-brass}"
  button-ink:
    backgroundColor: "{colors.floor-black}"
    textColor: "{colors.pale-brass}"
    typography: "{typography.button}"
    rounded: "{rounded.stencil}"
    padding: "{spacing.control}"
    height: "3.2rem"
  button-ink-hover:
    backgroundColor: "{colors.plate-charcoal}"
  status-chip:
    textColor: "{colors.pale-brass}"
    typography: "{typography.label-small}"
    rounded: "{rounded.stencil}"
    padding: "0.45rem 0.6rem"
  section-label:
    textColor: "{colors.warm-brass}"
    typography: "{typography.label}"
    padding: "0 0 0.55rem"
  section-rule:
    backgroundColor: "{colors.strong-brass-rule}"
    height: "1px"
    width: "100%"
  section-heading:
    textColor: "{colors.chalk-white}"
    typography: "{typography.headline}"
    width: "18ch"
  plate-enamel:
    backgroundColor: "{colors.plate-charcoal}"
    textColor: "{colors.chalk-white}"
    rounded: "{rounded.plate}"
    padding: "1.25rem"
  station-cell:
    backgroundColor: "{colors.floor-black}"
    textColor: "{colors.chalk-white}"
    padding: "{spacing.cell}"
    height: "clamp(17rem, 24vw, 23rem)"
  station-row:
    textColor: "{colors.chalk-white}"
    rounded: "{rounded.square}"
    padding: "{spacing.row}"
    width: "100%"
  faq-item-summary:
    textColor: "{colors.chalk-white}"
    typography: "{typography.title}"
    padding: "1.35rem 0"
    width: "100%"
  faq-item-summary-hover:
    textColor: "{colors.pale-brass}"
  nav-link:
    textColor: "{colors.dust-taupe}"
    typography: "{typography.label}"
  nav-link-hover:
    textColor: "{colors.warm-brass}"
---

# Design System: GymLab Marketing Site

## Overview

**Creative North Star: "The Gym Floor Drawn in Gold"**

GymLab's site is a gym floor seen in plan and in person. A near-black field is ruled with gold hairlines the way a floor plan is ruled, labels are stencilled where equipment would sit, and one edge of the floor is lit. The visitor walks it once: the promise stands at the floor edge, four training stations climb a rail on the right, and the proof is mounted on the back wall. It refuses the centered hero-over-a-stack-of-cards composition that every training app ships.

Density is architectural rather than cozy. Oswald carries the voice at monumental scale, Barlow carries the explanation, and gold is spent like a budget — hairlines, numerals, stencil labels, one action per view. Surfaces read as enamel: flat, hairline-bordered plates with a faint wash at the top, never glassy. Depth is drawn before it is shadowed, so the page stays something you could walk.

The world is ported from the app, not borrowed from a template: the same gold-on-night palette, the same self-hosted faces, the same film grain and light shaft, the same evidence — real screenshots in black wells with gold corner brackets. Motion is rationed to a single assembly at the top of the page; everything after it holds still until the visitor touches it.

**Key Characteristics:**
- Near-black field with gold hairline floor markings and a film grain veil at 5% opacity
- Monumental Oswald display type anchored to the bottom edge of the first viewport
- A four-station rail (01–04) occupying the right 250px of the hero
- Enamel surfaces: flat, hairline-bordered, gold-washed at the top edge, square-cornered as cells
- Stencil labelling everywhere: uppercase, letter-spaced, small, never a sentence
- Real app screenshots mounted in black wells with gold corner brackets
- One authored motion moment — headline mask-rise plus rail hairline draw — reduced-motion safe

## Colors

The palette is a single hue, gold, stepped three ways and mixed into a near-black field; everything warm on screen is one of those golds thinned into the background.

### Primary
- **Warm Brass** (`colors.warm-brass`): The system's accent and the only saturated color on the site. It draws section rules, stencil labels, station numerals, stat figures, the link underline, the focus ring, the caret and the text selection. When a gold gradient is needed — the primary button, the "GYMLAB" floor mark — it is the middle stop.
- **Pale Brass** (`colors.pale-brass`): The lit end of the gold family. It appears on small things that must survive on a dark background: chip text, tag text, the hover state of ghost buttons and links, legal headings, the ink button's label on the gold band.
- **Deep Brass** (`colors.deep-brass`): The shadow end of the gold family, used only as the terminal stop of gradients so large gold fills have volume. It never appears alone as a flat fill.
- **Faint Brass Line** (`colors.faint-brass-line`): Warm Brass at 16%, the floor's faint marking. Separates rows inside lists, cards, bands and diagrams — the line you read when you scan, not when you look.
- **Strong Brass Rule** (`colors.strong-brass-rule`): Warm Brass at 34%, the floor's structural marking. Underlines every section frame, outlines every ghost control and chip, and terminates the station rail, the hero frame and the footer.

### Neutral
- **Floor Black** (`colors.floor-black`): The field itself. Body background, hero background, footer background, the fill of every ghost/inverted control, and every veil that dims the photography.
- **Plate Charcoal** (`colors.plate-charcoal`): The raised enamel surface. Enamel plates, diagram device bodies and diagram screens sit on it; gradients fade from it into the field so plates appear milled rather than pasted.
- **Chalk White** (`colors.chalk-white`): Primary text on the field — headings, station names, FAQ questions, button labels on dark fills.
- **Dust Taupe** (`colors.dust-taupe`): Explanation text. Paragraphs, captions, navigation links at rest, meta labels, footer lines; it is the color of everything the visitor reads after they have decided to read.
- **Smoke Umber** (`colors.smoke-umber`): Chrome only. Scrollbar track separation and the hairline under the solid header. Never used as text or as a section rule.
- **Well Black** (`colors.well-black`): The mounting recess behind product screenshots. Darker than the field on purpose, so the phone screens look installed in the wall rather than floated on it.

### Named Rules

**The One Hue Rule.** There is one hue, gold, and it is never repainted: every tint, veil, glow and hairline is Warm Brass or Pale Brass mixed into the field. A second accent is a system break, not a variation.

**The Gold Budget Rule.** Gold paints hairlines, numerals, labels and exactly one call to action per view. The only large gold fill in the system is the closing band's end wall.

**The Hairline Rank Rule.** Importance is read through line strength — a faint line separates rows, a strong rule separates sections. Never express rank by raising a surface.

## Typography

**Display Font:** Oswald (with sans-serif)
**Body Font:** Barlow (with system-ui, sans-serif)
**Label Font:** Barlow — there is no third face; labels are the body face tracked wide and set in caps.

**Character:** Oswald is a condensed, sign-painter's grotesque that reads like paint on a gym wall; Barlow is a low-contrast body face that stays quiet underneath it. The pairing is signage first, explanation second, and never the reverse.

### Hierarchy
- **Display**: The promise and nothing else. It appears once per page, sized to fill the floor edge at any viewport, set with leading tight enough that two lines read as one block.
- **Headline**: Section openers under the frame rule. Each band trims the token's scale to its own width — the privacy heading runs `clamp(2.4rem, 5vw, 4.5rem)`, the FAQ heading `clamp(2.2rem, 4.2vw, 3.8rem)`, the closing band `clamp(2.8rem, 6vw, 5.8rem)` at weight 700 — and all of them keep a short measure (12–18ch) so headings break into two or three heavy lines.
- **Title**: The internal voice of a component: station names, FAQ queries, footer taglines. Station titles cap at 22ch; FAQ queries stay on one or two lines.
- **Body**: Explanation and captions. Paragraphs run to 34–46ch inside cells and up to 65ch in FAQ answers; the hero subhead is deliberately narrow so it reads as a caption to the headline above it.
- **Label**: Uppercase, tracked, and short. Section labels sit on the rule in Warm Brass; metadata counters, rail headings and footer meta sit beside them in Dust Taupe or Chalk White at the same scale.
- **Stat**: Oswald numerals for anything a lifter would compare — proof figures, station numerals, set tables, the "GYMLAB" floor mark. Tabular figures keep columns honest; the same numerals recur as faded stencils on the station rail and board.

### Named Rules

**The Two Faces Rule.** Oswald speaks in headings, station names and numerals; Barlow sets every paragraph, label, chip and button. Never set a sentence in Oswald; never set a headline in Barlow.

**The Stencil Caps Rule.** Every label is uppercase, tracked and two to four words long. Caps carry signposts, never sentences.

**The Tabular Figure Rule.** Numerals that sit in a column or get compared are set in Oswald with tabular figures, whatever size they render at.

## Layout

The site is one frame on an open floor. Every section is a full-bleed band; its content lives in a single centered frame capped at 1328px and inset by the shared gutter, so nothing invents a private container. Bands are separated by 1px rules rather than gaps, and floor sections carry the same vertical band padding at every breakpoint.

The hero is a two-column grid — copy at 1fr, station rail at 250px — with a minimum height of one viewport, 9rem of top padding for the transparent header, and the copy aligned to the bottom of the grid rather than centered. The station board below it is a 12-column grid whose cells span 5 columns, except stations 01, 04, 05 and 08 which span 7, and whose hairlines are drawn by the board's top and left borders plus each cell's right and bottom borders: the grid is one line drawing, not a set of cards. Splits elsewhere stay asymmetric on purpose — privacy 1.15fr/0.85fr, FAQ 0.72fr/1.28fr, footer 1.1fr/0.9fr — and the three screenshots are staged 1.06fr/0.96fr/1.02fr with staggered top offsets so the phones step across the floor instead of lining up.

Vertical rhythm comes from the band padding, the plate padding inside cells, and the control padding on buttons; horizontal rhythm comes from one gutter and from gaps that scale with the viewport. Responsive behavior is a walk, not a resize: at 1180px the rail folds underneath the copy, becomes a horizontal rule, and its station list goes 2-up (4-up between 720px and 1179px); below 768px every split collapses to one column, the proof band becomes 2×2, cells go full width, and the hero's actions stretch edge to edge below 480px. The header swaps to its solid variant on legal pages and reveals its section links at 768px; the landing keeps the overlay variant with a transparent background over the atmosphere. Smooth scrolling is declared globally, section anchors carry a 2rem scroll margin, and the scrollbar is drawn 10px wide with a gold-mixed thumb on the floor black track.

### Named Rules

**The One Frame Rule.** Every section shares the single 1328px frame and the shared gutter. No section introduces its own container width.

**The Floor-Edge Rule.** The promise is anchored to the bottom edge of the first viewport with the rail climbing the right side. A vertically centered hero is not a GymLab hero.

**The Walked-Once Rule.** Sections are single-pass bands divided by hairlines — no nested cards, no panel inside panel, no sub-grid that repeats the board.

## Elevation & Depth

The system is flat by default and draws depth with lines. Station cells, the proof band, the privacy diagram and the closing band have no shadow at all: they are separated from the field by 1px rules, a top-down gold or charcoal wash, and the strength of the line. Shadow survives in exactly two jobs plus one micro-detail: lifting gold, and mounting photographs on the wall. A single enamel plate carries the system's one resting drop shadow, and it is used for reading content rather than for decoration. The ported plate family also defines lifted variants — a gold ring, a deeper drop, a 2px hover translation — that the current pages do not use; new landing work should stay with the flat hairline cell.

### Shadow Vocabulary
- **Plate rest** (`inset 0 1px 0 rgba(255,255,255,0.04), 0 14px 32px -20px rgb(0 0 0 / 0.6)`): the enamel plate holding reading content, paired with its 1px gold border.
- **Primary under-glow** (`0 14px 34px -22px color-mix(in srgb, var(--color-accent) 80%, transparent)`): sits under the gold primary button so the floor appears lit by it. The only colored shadow in the system.
- **Photograph mount** (`0 40px 64px -34px rgb(0 0 0 / 0.9)`): dropped by the screenshot wells to press the proof into the wall.
- **Status ring** (`inset 0 0 0 2px var(--color-bg), inset 0 0 0 3px var(--color-accent)`): the inset double ring that marks today in the streak diagram — the only inset ring, and the only shadow drawn inside a component.

### Named Rules

**The Hairline-First Rule.** A boundary is drawn as a 1px rule before any shadow is considered; if a line can separate two surfaces, no shadow is allowed.

**The Shadow With A Job Rule.** Shadows exist to lift gold or to mount photographs. Layout never floats, and decoration is never the reason for a shadow.

## Shapes

Rectangles with rules on them. Controls, chips, cells and rows are cut square or at a 2px stencil radius, which is the system's way of saying "cut from metal" rather than "drawn on screen". Enamel plates and the diagram's device silhouettes round at 1rem; the only true circles are drawn inside diagrams — the privacy ring and its dot, the compare seam's handle — plus the pill speaker bar and the 999px legacy chip which the landing does not use. Borders are always 1px, never 2px, and the focus ring is the only 2px outline in the system. The recurring mounted gesture is the corner bracket: 14px gold arms drawn 9px outside each screenshot well at 35% opacity. The gold closing band inverts the language — its top seam and inner rules are drawn in Floor Black at 22–38% instead of gold, so the rules still read on a light field.

### Named Rules

**The Stencil Corner Rule.** Controls, chips, cells and rows are cut square or at 2px. Pills and capsule controls never appear on these pages.

**The Circle Belongs To The Diagram Rule.** The only curves are drawn inside diagrams and device silhouettes. No button, chip, plate, cell or nav item is rounded past its stencil corner.

## Components

Every component is a plate, a rule or a label; the vocabulary is deliberately small, and each piece is expected to work on the floor without decoration.

### Buttons
- **Shape:** cut at a 2px stencil radius (2px), minimum 3.2rem tall, 1px transparent border so every variant shares one box.
- **Primary:** a 135° Warm Brass gradient from Pale Brass through Warm Brass into Deep Brass, Floor Black label in tracked caps, control padding with 0.75rem of internal gap. It carries the system's gold under-glow and is the only element on the floor allowed to.
- **Hover / Focus:** hover brightens the fill and lifts the control 1px on the floor easing; focus-visible draws a 2px Warm Brass outline 3px outside, keyboard-only. Both transitions collapse under reduced motion.
- **Ghost / Secondary:** 1px Strong Brass Rule on a 42% Floor Black scrim with Chalk White label; hover swaps the border to Warm Brass and the label to Pale Brass. The header uses the small variant: 2.45rem tall, tighter padding and tracking.
- **Ink:** reserved for the gold closing band — Floor Black fill with a Pale Brass label, hovering to Plate Charcoal so it stays legible on the invert.
- **Tertiary, text link:** a Warm Brass label in tracked caps with a 1px Strong Brass Rule underline that sits below the text; hover brightens the label to Pale Brass and firms the underline to solid gold.

### Chips and Stencil Labels
- **Style:** rectangular tags at a 2px stencil radius, outlined by the strong rule with a translucent floor scrim behind them, Pale Brass caps inside. They read as stencilled metal tags, not as pills: the closed-set store badges, the calculator names inside a station cell, and the pinned labels on the privacy diagram.
- **State:** not interactive, so no hover or focus treatment — a chip never becomes a button. Rhythm inside a chip set comes from the third chip in a row flipping to Warm Brass text and a 50% gold border, which keeps a cluster of six or nine tags from reading as a wall.
- **Contrast rule:** chips that sit on the photography use the darkest scrim; chips on the flat field can drop it and stay legible.

### Plates and Containers
- **Corner Style:** 1rem radius, the only generous corner in the system.
- **Background:** Plate Charcoal with a 4% white wash at the top, fading into the flat charcoal, so the plate reads as milled stock under a light.
- **Shadow Strategy:** the plate rest shadow from Elevation & Depth, always with the 1px Warm Brass border at 20%.
- **Internal Padding:** 1.25rem for reading content.
- **Where it appears:** the legal notice plate carries it. The landing deliberately uses the flat sibling — square-cornered station cells with hairline borders and a gold wash — so persuasive surfaces stay plan-like and only documents sit on a raised plate.
- **Nesting:** never place a plate inside a plate, and never inside a station cell.

### Station Cells and Board
- **Board:** a 12-column grid where cells span 5 or 7 columns and every cell is square-cornered and hairline-bordered; the board's own top and left rules plus each cell's right and bottom rules draw the whole grid as one plan.
- **Cell interior:** number in faded Warm Brass beside an Oswald title, then explanation text capped at 46ch, then the mechanism pinned to the bottom of the cell with `margin-top: auto` so mechanisms align across a row regardless of copy length.
- **Alternation:** two independent rhythms — a gold-washed background on cells 01, 04, 06 and 08, a wider 7-column span on 01, 04, 05 and 08 — so the board never reads as a uniform grid.
- **Padding and height:** the cell padding token, with a minimum height of `clamp(17rem, 24vw, 23rem)` that collapses to content height below 768px.

### Station Miniatures
- **What they are:** eight line-drawn mechanisms — week bars, a set table, volume bars, calculator tags, a catalog grid, compare frames, a step chart with a widget, a streak grid. Hairlines plus gold fills at 20%, with the active element at 62–66%.
- **How they are built:** plain elements with inline `--h` custom properties for bar heights, borders instead of strokes, and a dashed or repeating-linear-gradient rule where a grid line is needed. There are no icons, no illustrations, no raster assets and no chart library inside a cell.
- **Accessibility:** every miniature is `aria-hidden` and illustrative; the meaning lives in the copy, not the drawing.

### Station Rail (signature)
- **Structure:** a 250px right column in the hero, 1px Strong Brass Rule drawn down its left edge, a head row that pairs the "Estaciones" label with a "01—04" counter above a faint line, four numbered rows, and a foot line that prints the product facts. The rail climbs the full height of the copy block and stops above the bottom edge.
- **Rows:** a 2.5rem numeral column in Warm Brass at 58% — a stencil faded by traffic — next to an uppercase Oswald station name in Chalk White, separated row to row by a 9% gold hairline, with the last row's border removed.
- **Responsive:** under 1180px the rail detaches, rotates its hairline into a horizontal rule, and its rows become a 2-up list (4-up from 720px) with smaller numerals and no bottom margin.

### FAQ Items
- **Structure:** native `details`/`summary` rows, hairline-separated, all five closed on arrival. The query is Oswald at the title scale, padded 1.35rem vertically, with a 1.4rem mark drawn from two 1px Warm Brass lines pinned to the right edge.
- **States:** hover turns the query Pale Brass; opening rotates the mark's vertical line to horizontal over 0.35s and washes the row with 3% gold. No borders appear or vanish on open — the hairline grid stays constant.
- **Answer:** Barlow at 0.96rem, Dust Taupe, capped at 65ch with extra right padding so the text column does not sit under the mark.

### Navigation
- **Style:** two variants of one bar. The landing uses the overlay variant — absolutely positioned, transparent, closed by a 10% gold hairline with a Floor Black gradient fading downward, sitting on the hero atmosphere. Legal pages use the solid variant: sticky, 88% Floor Black with a 14px backdrop blur and a Smoke Umber hairline.
- **Content:** a 26px gold brand mark beside the Oswald wordmark, then Barlow caps links in Dust Taupe, then one small ghost call to action carrying the launch-notice ask.
- **States:** links brighten to Warm Brass on hover, keeping their tracked caps; the call to action behaves as the small ghost button.
- **Mobile treatment:** below 768px the section links are hidden rather than collapsed into a hamburger — there is no menu — the header height drops from 5.25rem to 4.75rem, the wordmark shrinks, and the remaining caption-sized CTA tightens its padding. The bar always carries exactly one action.

### Hero Assembly (signature)
- **Layers:** a photograph of a real gym floor at 46% opacity, desaturated and slightly contrasted; a four-layer veil of floor black gradients on top of it; an inline SVG floor plan of 1px gold strokes at 5–26% opacity with tick marks along the floor line and a hatch of gauge marks on the right edge; a blurred light shaft at 22px crossing the frame; and the film grain veil that covers the whole site.
- **Motion:** the one authored moment. Each headline line rises out of a clip-path mask over 1.05s on the floor easing, the second line 0.12s behind the first and set in Warm Brass; the rail hairline draws downward over 1.2s; the subhead, actions and store chips arrive 0.42s, 0.54s and 0.66s in with an 0.8s fade-rise.
- **Degradation:** every animated element is declared visible at rest and the animation runs `both`, so a static render, a crawler or a reader shows the finished frame — the motion only plays forward once and never hides content. Under reduced motion every animation and transition is switched off.
- **Copy block:** the promise is capped at 62rem with its subhead capped at 34rem, and both sit on the floor edge rather than in the middle of the frame.

### Legal Prose
- **Style:** documents keep the chrome but drop the composition. Headings are Oswald in Pale Brass at 1.2rem with 2.5rem of space above them; paragraphs are Barlow at 0.95rem in Dust Taupe with 1.65 leading and a 65ch measure; the notice plate sits above the text, and the frame narrows to a reading width instead of the landing frame.

### Named Rules

**The Label-On-The-Rule Rule.** A section label sits on the section's hairline, never as an eyebrow stacked above the heading, and a metadata counter shares that rule at the far right. The rule and its label always move together.

**The One Authored Moment Rule.** The hero assembly is the only choreography in the system. Everything below it changes only in response to hover, focus or open state — no scroll reveals, no counters, no parallax.

**The Drawn Mechanism Rule.** Depth, data and detail are drawn with hairlines and gold fills. No icons, illustration, stock imagery or chart library stands in for a mechanism, and no raster asset appears inside a station cell.

## Do's and Don'ts

### Do:
- **Do** separate surfaces with 1px hairlines before reaching for a shadow — a faint brass line between rows, a strong brass rule between sections.
- **Do** keep one primary action per view and give it the Warm Brass gradient; secondary actions are ghost buttons with a strong brass border.
- **Do** set labels in uppercase Barlow with generous tracking and keep them to two to four words.
- **Do** leave station cells square-cornered and let the board's hairline grid be the framing.
- **Do** reserve the closing band as the only large gold fill on a page, and invert everything inside it to Floor Black.
- **Do** mount real app screenshots in Well Black wells with 14px gold corner brackets — the proof is the product.
- **Do** declare every animated element visible at rest so the hero assembly degrades to a static frame.
- **Do** keep numerals in Oswald with tabular figures wherever they stack or get compared.

### Don't:
- **Don't** add a second hue. Every tint on the floor is Warm Brass or Pale Brass mixed into the field.
- **Don't** round a control past its 2px stencil corner or introduce pill-shaped buttons, chips or nav items.
- **Don't** center the hero copy vertically inside the atmosphere, and don't stack it over a row of cards.
- **Don't** add motion beyond the hero assembly — no scroll reveals, parallax layers, animated counters or marquees.
- **Don't** set body copy in Oswald, or a headline in Barlow.
- **Don't** float a cell or a plate to show importance; raise the hairline strength instead.
- **Don't** nest plates, or wrap the station board in additional cards.
- **Don't** replace a drawn mechanism with an icon, an illustration or a stock photo.
- **Don't** ship a day/night toggle or palette switcher — the web is the gold × night combination only, at every breakpoint.
