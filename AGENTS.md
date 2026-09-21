# AGENTS.md

## What this is

- Two resume pages in HTML: `developer.html` (Software Dev) and `eletromechanics.html` (Electromechanical Technician).
- Pure HTML/CSS/vanilla JS. No build system, no tests, no lint, no `package.json`. No runtime setup.

## Architecture: shared assets, duplicated content

- Styling lives **once** in the shared `styles.css`; behavior lives **once** in the shared `app.js`. Both HTML files link/load the same assets — any design/JS change is automatically applied to both (no CSS/JS mirroring needed).
- The HTML files still duplicate the **content**: bilingual text and structure must be kept in sync across `developer.html` and `eletromechanics.html` where applicable.
- The resumes are **NOT single-file**: `styles.css` and `app.js` must travel with each `.html`.

## Bilingual content (PT default / EN toggle)

- `setLang()` lives in `app.js`; each `<html>` carries `data-en-title` for the English `<title>` (PT title comes from the `<title>` tag itself).
- Rich text blocks: paired `.pt-content` and `.en-content` elements. Every `.en-content` must start with inline `style="display:none"`. Keep `<strong>` markup identical across the pair.
- Simple strings: `data-pt` / `data-en` attributes. `setLang()` only swaps `data-*` text on elements with **no child elements** — never nest HTML inside a `data-pt`/`data-en` element, or the toggle silently breaks. Use `.pt-content`/`.en-content` instead.
- New text must be added to both languages and, where the section exists in both, to both files.

## Content conventions

- Bold recruiter keywords with `<strong>` in both languages.
- Email must stay HTML-encoded (`&#64;`) to avoid obfuscation by proxies (Cloudflare) when hosted.
- Fonts: Google Fonts (EB Garamond + DM Mono) for headings/UI; body text is Arial/Helvetica for PDF legibility — keep it that way.

## Print modes

- Two PDF exports, both toggled by JS before `window.print()`: normal and compact (`body.print-compact`). All print styling lives in `@media print` blocks in `styles.css`; compact overrides keyed on `body.print-compact`, normal on `body:not(.print-compact)`.

## Verification

- No automated checks. Verify by opening the file in Chrome (see README): toggle PT/EN, click both PDF buttons, and confirm normal mode fits one page.

## Language

- README and commit messages are in Portuguese; resume default language is pt-BR.