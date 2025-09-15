## EnergyWise Appliances (AU)
A simple three‑page static site that introduces appliance energy use and tips for Australian households.

### Generative AI assistance notes
- **Tools used**: Cursor with GPT‑5.
- **Where AI was used**:
  - Drafted page structure and semantic HTML for `index.html`, `televisions.html`, and `about.html`.
  - Authored baseline CSS and later updated the theme to a palette matching the lightning‑bolt logo (warm beige background, brown text, orange accent) in `css/styles.css`.
  - Wrote small JS utilities in `js/app.js` (dynamic year, nav highlighting, click‑to‑navigate behavior).
  - Suggested copy for explanatory text and tips; content is illustrative and non‑authoritative.
- **Human role**: Reviewed and edited all AI outputs, verified behaviour in the browser, and approved final wording, styles, and interactions.
- **Data and sources**: No proprietary or personal data provided to AI tools. Energy figures are illustrative only; users should consult the Australian Energy Rating Label for definitive numbers.
- **Attribution in UI**: A footer note on each page acknowledges the use of GenAI for code/content assistance.
- **Limitations**: AI‑generated text may be generic; technical and factual accuracy were checked, but readers should validate any figures before reuse.
- **Reproducibility (example prompts)**:
  - “Style the site using a beige/brown/orange theme that matches the included lightning‑bolt logo. Use CSS variables and apply them to header, nav, sections, and footer.”
  - “Add JS that highlights the active nav link based on the current page and sets the current year in the footer.”
