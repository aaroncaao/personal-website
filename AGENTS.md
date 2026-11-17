# Repository Guidelines

## Purpose & Current Scope

Build a personal career portfolio for NASA Community College Aerospace Scholars (NCAS), demonstrating career direction, academic preparation, and readiness for NASA/aerospace opportunities. Choose one NASA or aerospace career area and organize the entire portfolio around it.

**Implementation is authorized.** Use React, TypeScript, Vite, and plain CSS. Preserve the warm editorial style in `DESIGN.md`. Deliver local preview, production assets, and PDF exports; public deployment remains outside the current scope.

Application code is in `src/`, editable portfolio content in `src/content/portfolio.ts`, and static assets in `public/`. Browser tests are in `tests/`; PDF generation is in `scripts/`. `NCAS_Career_Portfolio_HANDOFF.md` provides draft content. Aaron will review factual wording separately; never invent metrics or contact details.

## Development Commands

- `npm ci`: install locked dependencies.
- `npm run dev`: launch local development.
- `npm run build`: type-check and build `dist/`.
- `npm run preview`: serve the production build.
- `npm run export:pdf`: export portfolio and one-page résumé PDFs from the production build to `output/`, `public/`, and `dist/`. Run after building or changing content.
- `npm run test:browser`: verify navigation, accessibility, responsive layouts, citations, and document controls. Install Chromium with `npx playwright install chromium` first.

Use two-space indentation, PascalCase React components, and descriptive TypeScript data properties. Keep content separate from presentation and avoid backend dependencies.

## Authoritative Requirements

Use `NCAS-Student-Challenge-Participant-Guide-7_1793026646.pdf`: file pages 1–3 correspond to printed pages 17–19. Content requirements are on p. 17, submission rules on p. 18, and the rubric on p. 19. Distinguish these requirements from proposed implementation choices below.

## Required Portfolio Content

- **Executive summary:** At most 250 words covering career goals, academic preparation, and alignment with NASA's workforce.
- **Technical skills:** Include 3–10 technical/professional competencies developed through coursework, training, or related experience. Connect them directly to NASA/aerospace careers.
- **Experiences and projects:** Include up to three experiences. For each, describe applied skills in no more than four sentences and explain alignment with NASA, NASA goals, or technology industry needs in no more than four additional sentences.
- **Résumé:** At most one page, aligned with NASA/aerospace workforce expectations.
- **NASA career pathway alignment:** Connect coursework, skills, and career pathways throughout the portfolio; a standalone career-interest statement is insufficient.
- **Citations:** Include in-text citations (superscripts allowed) and a reference list at the bottom of the portfolio page.

## Scoring & Acceptance Targets

Each criterion is scored 0–5 points with a 1X weight: 15 possible points across the three criteria. The rubric supplies assessment questions, without separate performance-level descriptors. Do not invent score thresholds or guarantees.

| Criterion | Evidence the portfolio should make clear |
| --- | --- |
| Career Exploration & NASA Workforce Awareness | Specific career interests; NASA missions/workforce roles; required education, training, and experience; use of NCAS resources such as career pages, O*NET, and subject-matter experts; connections to workforce needs. |
| Academic & Skill Alignment | Technical and professional skills; alignment with specific NASA roles, mission areas, or aerospace pathways; evidence from coursework, projects, certifications, or applied experience; academic preparation; future skill development and opportunities. |
| Professional Communication & Portfolio Readiness | Clear career goals; organized written and visual materials; readability and professional presentation; structured writing, reflection, and visual mapping; readiness for professional use. |

Prioritize concrete evidence and career connections before decorative features.

## Submission Requirements

- Due **November 30, 2026**; confirm submission time and delivery location from the course instructions rather than guessing.
- Submit the website as the primary deliverable **and a PDF exported directly from the website with exactly the same content**.
- Use English throughout.
- Submission filenames must include the participant's full name and “NCAS Student Challenge”; optional identifiers may be added. The guide's example, `JohnDoe_NCASCareerPortfolio`, differs from that wording; confirm the expected naming convention before submission.
- Do not use NASA meatball or worm logos in submission items. The NCAS logo is permitted.
- Any website platform/style is allowed if all required elements and formatting rules are met. The sample portfolio and NASA Resume Tips brochure are optional resources.

## Proposed Website Scope

Use a simple portfolio page with clear navigation to the summary, skills, experiences/projects, résumé, career pathway, and references. A separate pathway section may reinforce connections already present elsewhere. Provide readable desktop/mobile layouts, accessible headings and keyboard navigation, and a print layout that preserves every section for PDF export. Ensure the résumé itself remains one page.

Defer blogs, authentication, databases, analytics, elaborate animation, and contact forms unless requested. Keep the selected React/Vite implementation maintainable; keep README commands consistent with package scripts.

## Inputs & Completion Checklist

Obtain the participant's full name, goals, target roles, academic history, 3–10 skills with evidence, up to three experiences, résumé, and sources. Confirm visual preferences and hosting choice. Never fabricate achievements, certifications, SME interactions, or career evidence; track missing inputs explicitly.

Before delivery, check every rubric criterion, all word/sentence/page limits, citations, grammar, links, responsive behavior, keyboard access, and logo restrictions. Compare the exported PDF against the website for identical content and unclipped text. Verify reviewer access to the final site and résumé.

Keep secrets and private local configuration out of version control. Use focused changes, imperative commit subjects, and pull requests describing validation with screenshots for visual changes.
