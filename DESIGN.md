---
name: "Chenggang Zhang Research Atlas"
description: "An evidence-first mobility research atlas built from warm drawing sheets, deep-green structure, and journal figures."
colors:
  drawing-sheet: "#f4f1e8"
  paper: "#fffdf8"
  sage-sheet: "#e9f0ea"
  sage-field: "#dce8df"
  ink: "#14211e"
  ink-secondary: "#4e5e59"
  ink-soft: "#71807b"
  rule: "#d5ddd7"
  rule-strong: "#b6c6bd"
  research-green: "#0d5945"
  dossier-green: "#073b2e"
  figure-navy: "#1c3a50"
  restrained-copper: "#a5653c"
typography:
  display:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(2.7rem, 5vw, 5.4rem)"
    fontWeight: 500
    lineHeight: 0.96
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(2.1rem, 3.5vw, 3.45rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.22
  body:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "0.76rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  figure: "7px"
  panel: "12px"
  large: "18px"
  pill: "999px"
spacing:
  xxs: "7px"
  xs: "12px"
  sm: "18px"
  md: "24px"
  lg: "32px"
  xl: "52px"
  section: "82px"
components:
  button-primary:
    backgroundColor: "{colors.research-green}"
    textColor: "{colors.paper}"
    rounded: "{rounded.figure}"
    padding: "10px 18px"
    height: "46px"
  button-primary-hover:
    backgroundColor: "{colors.dossier-green}"
    textColor: "{colors.paper}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.dossier-green}"
    rounded: "{rounded.figure}"
    padding: "10px 18px"
    height: "46px"
  evidence-tag:
    backgroundColor: "{colors.sage-field}"
    textColor: "{colors.dossier-green}"
    rounded: "{rounded.pill}"
    padding: "3px 9px"
    height: "28px"
  project-panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "28px"
---

# Design System: Chenggang Zhang Research Atlas

## Overview

**Creative North Star: "The Engineering Plate Compendium"**

This is an evidence-first mobility research atlas: warm ivory drawing sheets and disciplined deep-green structure carry publication figures, quantitative results, and precise academic metadata. It feels like a bound set of journal plates and engineering dossier pages, not a generic academic CV and not a neon automotive-technology showcase.

The system is restrained and tactile. Source Serif 4 gives research theses, titles, and figures editorial authority; Source Sans 3 handles metadata and operational reading. Thin rules, ordered records, sparse copper markers, and real technical imagery establish credibility before decoration.

**Key Characteristics:**

- Warm drawing-sheet grounds with deep-green structural anchors.
- Journal figures and complete evidence are primary visual material.
- Serif argument paired with sans-serif metadata.
- Precise one-pixel rules, measured density, and restrained copper notation.
- Two approved expressions: an evidence split and an engineering dossier rail.

## Colors

The palette reads as paper, ink, institutional green, and a small amount of copper annotation.

### Primary

- **Research Green:** The principal action, link, active, and evidence color.
- **Dossier Green:** The deepest structural color for headings, the contact close, and the Concept C identity rail.

### Secondary

- **Restrained Copper:** A scarce notation color for dates, indices, active navigation rules, and warm status emphasis.
- **Figure Navy:** A cool technical accent reserved for venues, roles, and figure-adjacent metadata.

### Neutral

- **Drawing Sheet:** The warm page ground beneath the entire atlas.
- **Paper:** The elevated reading surface for navigation, figures, and cards.
- **Sage Sheet / Sage Field:** Quiet evidence grouping, metric bands, and pale structural fills.
- **Ink / Ink Secondary / Ink Soft:** Primary copy, explanatory copy, and low-priority labels.
- **Rule / Rule Strong:** Fine separators and stronger framing lines; structure comes from rules before containers.

### Named Rules

**The Copper Annotation Rule.** Copper marks sequence, time, and status; it never becomes a large background or competing brand color.

**The No-Neon Rule.** Color remains mineral, botanical, and printable. Do not introduce luminous cyan, electric blue, glowing gradients, or automotive-dashboard effects.

## Typography

**Display Font:** Source Serif 4 (with Georgia fallback)  
**Body Font:** Source Sans 3 (with system sans-serif fallback)  
**Label Font:** Source Sans 3

**Character:** The serif carries thesis, authorship, and evidence titles with journal-like authority. The sans-serif keeps affiliations, metadata, navigation, and long supporting copy direct and internationally legible.

### Hierarchy

- **Display** (500, fluid 2.7-5.4rem, 0.96): The first-view research thesis; Concept C caps the upper range at 5rem.
- **Headline** (500, fluid 2.1-3.45rem, 1.02): Major section openings.
- **Title** (600, about 1.35-1.72rem, 1.22): Publication, project, institution, and experience titles.
- **Body** (400, 17px, 1.65): Long-form explanatory content; the lead is constrained to 72ch and evidence descriptions to 78ch.
- **Label** (650-700, about 0.7-0.78rem, 0.06-0.08em): Uppercase dates, indices, metric labels, and dossier metadata.

### Named Rules

**The Argument-and-Metadata Rule.** Use serif type for claims, names, titles, and values; use sans-serif for navigation, annotations, provenance, and explanation.

## Layout

The default desktop expression is a two-column evidence split inside a maximum 1280px content width: a portrait-and-identity column of at least 255px and a broad thesis column, separated by a 52px gutter. The first viewport joins portrait, identity, thesis, three focus lanes, and three metrics. After it, the visual reading order is Publications, Projects, News, Experience, Education, Research Toolkit, Awards and Service, then Contact, regardless of the source order used for no-script robustness.

Concept C is available through `?layout=c`. It expands to a 1380px canvas with a 330px deep-green identity rail and 44px content gutter. The rail is sticky below the 72px navigation, while the evidence column scrolls as an asymmetric engineering dossier. Publications tighten their index and figure columns; projects become single-column horizontal records; education, awards, and certificates also simplify to fit the dossier measure.

At 1100px, the standard identity column narrows to 240px and Concept C to 270px. Focus lanes stack, metrics become a two-by-two plate, award columns stack, and Concept C publications move figure and content below the index. At 900px, the navigation becomes a controlled dropdown, both desktop layouts become a single flow, and identity becomes a broad metadata-first band with a 190px portrait. At 600px, the page gutter becomes 14px per side, the default identity band uses a 112px portrait, and Concept C places a 96px portrait at the right of the deep-green metadata band. Publications, certificates, metrics, news, experience, and contact reduce to one column. The supported range is 360-1440px with no horizontal overflow.

Section spacing is generous (82px on desktop, 54px on small screens); component spacing is primarily 12, 18, 24, 28, and 32px. Rules align sections into a continuous atlas rather than a stack of unrelated cards.

## Elevation & Depth

The system is flat by default. Depth is expressed through paper tones, one-pixel rules, figure framing, and the sticky dossier rail. A single soft green-black shadow appears only on the open mobile navigation and hovered project panels (`0 18px 52px rgba(17, 47, 38, 0.08)`); buttons and evidence figures use a two- or three-pixel upward state instead of ambient elevation.

### Shadow Vocabulary

- **Soft Dossier Lift:** A diffuse low-contrast shadow for the open mobile menu and project hover only.

### Named Rules

**The Flat Evidence Rule.** Evidence is flat at rest; elevation appears only in response to interaction or temporary navigation state.

## Shapes

Forms are mostly rectangular and sheet-like. Figure frames, buttons, and certificate tiles use a modest 7px corner; project and education panels use 12px; 18px is retained as a large-system option but is not a dominant silhouette. Metadata tags alone use the full pill radius. Borders are one pixel, never ornamental double strokes; the portrait is frameless so the image reads cleanly against the dossier field.

## Components

### Buttons

- **Shape:** Compact rectangular control with gently eased corners, a one-pixel green border, and at least 46px height.
- **Primary:** Research-green fill with paper-white text and 10px by 18px padding; hover deepens to dossier green and rises 2px.
- **Secondary:** Transparent paper with dossier-green text; the Concept C rail may use copper fill for the email action.
- **Focus:** A 3px translucent copper outline offset by 4px. All linked text and controls keep visible keyboard focus.

### Chips

- **Style:** Pale sage fill, dossier-green text, one-pixel strong rule, 28px minimum height, and a full pill silhouette.
- **State:** Publication status may shift to a warm paper-and-copper treatment. Chips are metadata, not interactive filters.

### Cards / Containers

- **Publication Record:** An ordered three-part plate—copper index, framed journal figure, then complete title/authors/venue/status/DOI metadata. All seven records remain fully expanded.
- **Project Panel:** A 12px paper panel with project label, full evidence, status badge, and quantitative metric cells. The four projects are two-up by default and one-up in Concept C and below 900px.
- **Education Panel:** Two equal evidence panels by default; one column in Concept C and below 900px. Institution marks are contained in small white ruled squares.
- **Certificate Tile:** A static 4:3 paper frame with object-contained certificate imagery; no carousel, drag surface, or automatic movement.

### Navigation

The 72px sticky paper bar uses sans-serif labels and a copper two-pixel active rule. Below 900px, a 46px menu control opens a paper dropdown of 48px-tall links; outside click, link activation, Escape, and a return of focus close the menu. Section observation updates the active rule when supported.

### Identity Rail / Metadata Band

Concept C’s signature component is the deep-green desktop dossier rail: portrait, identity, direct actions, and factual metadata remain visible while evidence scrolls. Below 900px it becomes an in-flow identity band; below 600px the portrait shifts to the right so identity metadata is read first.

### Certificate Disclosure

Without JavaScript, every certificate remains visible and directly linked. With JavaScript, the first eight are shown as a curated static set and the remaining certificates are exposed by a single `aria-expanded` “Show all” control, which also supports collapsing to the curated set. Never convert certificates into motion, pagination, or inaccessible cropping.

## Do's and Don'ts

### Do:

- **Do** lead with research identity, thesis, three focus lanes, and four factual metrics.
- **Do** keep all seven publications, four projects, three research experiences, two schools, every award and service item, and real contact link intact.
- **Do** use real journal figures, logos, portrait, and certificate previews as evidence-bearing material.
- **Do** preserve the focus-to-proof-to-experience-to-contact story and the metadata-first mobile band.
- **Do** preserve skip navigation, semantic landmarks, descriptive alternative text, 44px-or-larger touch targets, visible focus, Escape handling, and reduced-motion support.

### Don't:

- **Don't** add “CV,” “Resume,” download prompts, Google Scholar, LinkedIn, invented metrics, invented claims, or placeholder links.
- **Don't** hide, paginate, summarize away, or title-only any of the seven publications or four projects.
- **Don't** turn the certificate wall into a carousel; it is a static gallery with an accessible show-all disclosure.
- **Don't** introduce neon technology styling, decorative gradients, glassmorphism, persistent motion, generic dashboard chrome, or a conventional academic-CV template.
- **Don't** let the alternate dossier layout become a separate content truth; both modes render the same verified evidence.
