---
name: NCAS Career Portfolio
description: Warm editorial presentation of Aaron Cao's aerospace data career preparation.
colors:
  ink: "#000000"
  paper: "#fdfcfc"
  taupe: "#f5f3f1"
  stone: "#ebe8e4"
  graphite: "#44403b"
  warm-gray: "#6f665b"
  action-hover: "#39352f"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(42px, 4.5vw, 64px)"
    fontWeight: 300
    lineHeight: 1.08
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(32px, 3.2vw, 44px)"
    fontWeight: 300
    lineHeight: 1.12
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "28px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 500
rounded:
  sheet: "3px"
  symbol: "16px"
  panel: "20px"
  hero-panel: "24px"
  pill: "9999px"
spacing:
  gutter: "clamp(24px, 4.45vw, 64px)"
  section-top: "94px"
  section-bottom: "88px"
  section-tablet: "74px"
  section-mobile: "58px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "13px 22px"
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
  button-small:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "10px 17px"
  diagram-panel:
    backgroundColor: "{colors.taupe}"
    rounded: "{rounded.panel}"
    padding: "32px 28px 55px"
  resume-sheet:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.sheet}"
    padding: "36px 40px"
---

# Design System: NCAS Career Portfolio

## Overview

**Creative North Star: "Warm cream editorial"**

The shipped portfolio uses eggshell paper, light Inter headings, generous whitespace, and quiet taupe framing. Open evidence rows and restrained geometric diagrams give the supplied work room to lead. Black pill actions and fine dividers preserve the reference's editorial character.

This describes the React, TypeScript, Vite, and plain CSS implementation in `src/App.tsx` and `src/styles.css`. Editable facts live in `src/content/portfolio.ts`; Aaron's factual review remains pending. `AGENTS.md`, the NCAS guide, and `PRODUCT.md` retain authority over content and submission requirements. No public deployment is implied.

**Key Characteristics:**

- Light headings and warm neutral reading surfaces.
- Open evidence rows with explicit career connections.
- Original conceptual diagrams, clearly labeled.
- Visible draft status and shared website/PDF content.

## Colors

The palette is monochrome for controls, with warm neutral surfaces and subdued color inside conceptual graphics. The frontmatter records reusable colors; CSS remains the implementation source.

### Primary

- **Ink:** headings, filled actions, keyboard outlines, and active navigation.
- **Action hover:** softens the filled button during hover.

### Neutral

- **Paper:** page, sticky header, and mobile navigation canvas.
- **Taupe:** hero, project workflow, and pathway panels.
- **Stone:** quiet section and row dividers.
- **Graphite:** body copy.
- **Warm gray:** secondary hero heading and restrained annotations.
- **White:** resume sheet and reversed button labels.

Muted olive, peach, lavender, and sand appear inside the original diagrams. They indicate conceptual stages; labels carry the meaning. These are illustration details rather than interface accents.

**The Evidence Rule.** Label conceptual graphics as conceptual; never present them as measured project results or supplied satellite imagery.

## Typography

Self-hosted Inter serves every role, with UI sans-serif/system fallbacks. There is no shipped Waldenburg, Geist Mono, or distinct metadata font. Light display text contrasts with regular prose and medium labels.

- **Display:** frontmatter scale; a muted second phrase creates hierarchy. At widths through 1100px it is 52px; through 760px it uses `clamp(42px, 7.8vw, 56px)` with 1.1 line height.
- **Headline:** section heading scale from frontmatter. Project titles are 28px/1.2, 25px on tablet, and 26px on mobile.
- **Reading:** hero 16px/1.7 and summary 17px/1.9; mobile 15px for both. Project prose is 14px/1.85, reducing to 13px on mobile. The summary body spans at most 72ch; project prose at most 70ch.
- **Compact evidence:** skill names 15px; skill prose and pathway table 13px, reducing to 12px and 11px respectively on mobile. References have 14px titles and 11px URLs/organization labels.
- **Metadata:** typically 10-12px; tablet diagram notes reach 9px. Superscript citations are 10px. These are the actual compact values, not a universal minimum for new prose.
- **Resume:** 11px/1.5 screen body, 10px on mobile; name 27px (25px mobile), uppercase group labels 10px, and date/note metadata 9px. The dedicated resume view uses 12px body on desktop.

Do not force text into a fixed-height reading panel. Preserve normal browser zoom and natural wrapping.

## Layout

The centered container is at most 1408px, including fluid gutters from frontmatter. Desktop hero columns use a 1.13:1 ratio and 7% gap. Summary, resume, and references use 1:1.65 columns with 9% gaps; project rows use 1:1.17 with 6% gaps. Skills have three evidence columns. Sections use the documented top/bottom spacing and stone separators.

At 1100px, gaps and panel padding tighten and the header print action disappears. At 760px, the menu becomes expandable, reading sections and projects become single-column, project art loses sticky positioning, and the pathway diagram/timeline become vertical. The pathway table retains three columns with wrapping. Hero actions wrap naturally at narrow widths, including 360px. Mobile gutters remain at least 24px.

Page order is introduction, summary, skills, projects, resume, pathway, references, footer. All evidence remains in ordinary page flow.

**Print:** A4 with 14mm margins, white paper, compact spacing, and 10pt base text. Main print heading is 31pt, section headings 23pt, project prose 9pt, and compact evidence mostly 8pt. Navigation and document controls disappear; diagrams, captions, resume introduction, career connections, visible URLs, and draft disclosures remain. The resume section starts and ends with page breaks; the shared sheet uses 10pt body and no frame/shadow. Project stories may flow, while diagrams, table rows, timeline, and individual references avoid internal splits. SVG colors are preserved. Current exports are seven portfolio pages and one dedicated resume page; pagination may change after factual edits. The reference heading currently precedes its list across a page boundary, an accepted nonblocking layout detail.

## Elevation & Depth

The page is flat: dividers and taupe surfaces establish grouping. The resume alone has a faint paper shadow (`0 10px 28px -18px #82766b40`) and thin warm border; print removes both. The hero diagram rests at a slight rotation and arrives over 0.85s. Buttons shift upward 1px on hover with 0.2s transitions. Reduced-motion preference disables animation, transitions, smooth scrolling, and diagram rotation.

## Shapes

Pill actions and the program badge soften otherwise square editorial structure. Workflow/pathway panels use the panel radius; the hero uses its larger radius; diagram symbols use the symbol radius. The resume has barely rounded paper corners. Fine 1px row rules are decorative separators, while keyboard focus uses an ink outline (2px with 5px offset).

## Components

- **Actions:** filled pill, 48px minimum height; compact header variant 44px. Secondary actions are underlined text links with arrows and 44px minimum height. Hover darkens/lifts the filled action and nudges text-link arrows. No form fields are implemented.
- **Navigation:** sticky paper header, lowercase text wordmark, 13px section links, active location underline, and darker hover. Mobile uses a labeled Menu/Close button with `aria-expanded`, two-column links, close on selection, and Escape returning focus to the toggle. Anchor offsets account for the header. A keyboard skip link targets the main content.
- **Program badge:** small outlined pill, text label, and muted decorative status dot; it is not an interactive filter.
- **Evidence rows:** skills pair competence, supplied evidence, and career relevance. Project stories pair conceptual art with separate applied-work and alignment blocks. Desktop project art sticks beneath the header.
- **Conceptual graphics:** original SVG/HTML tile/workflow diagrams with readable labels and accessible descriptions. No raster asset or image-generation dependency is required. No NASA logo is used.
- **Resume:** shared HTML component in the portfolio and `?view=resume`, plus a generated draft PDF download. Pending contact information and internship outcomes remain explicitly disclosed; no fabricated contact block fills the space.
- **Document controls:** the header's Save portfolio button and the footer's Print / save PDF button invoke browser printing. The footer control remains available at every screen width and hides in print. The dedicated resume view has its own print action.
- **Citations:** numbered superscript links lead to the reference list. Reference titles and visible URLs link to sources; the return control focuses and scrolls to the first citation for that reference. Focus is visible. Return controls hide in print, while substantive reference information remains.
- **Draft states:** hero footer, resume, and final footer disclose draft content/review status. The footer states that this is a personal portfolio without NASA endorsement. Keep those states until factual approval.

## Do's and Don'ts

### Do:

- Do preserve warm paper, light headings, and open evidence rows.
- Do keep career connections, citations, and draft disclosures visible.
- Do retain all substantive website content in the portfolio PDF.
- Do use supplied facts and label conceptual graphics explicitly.

### Don't:

- Don't add NASA meatball or worm logos or imply NASA endorsement.
- Don't replace evidence with decorative space imagery or fabricated metrics.
- Don't hide required content behind tabs, carousels, or collapsed panels.
- Don't introduce commercial calls to action into the portfolio.
