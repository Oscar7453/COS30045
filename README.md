# EnergyWise Appliances (AU)

A simple three-page static site that introduces appliance energy use and tips for Australian households.

---

## Data Story

### Audience
The primary audience includes **Australian households**, **energy-conscious consumers**, and **policy stakeholders** interested in reducing power bills and environmental impact.  
They are not technical experts, so clarity, simplicity, and visual cues are important.

### Audience Interests
- **Consumers** want to know which appliances (especially televisions) are most common, how much energy they use, and how to choose energy-efficient models.  
- **Policy and regulatory stakeholders** are interested in the distribution of technologies, star ratings, and the relationship between screen size and power use.  
- **Retailers and marketers** may want insights into brand presence and consumer trends.

### Visualisation Goals
- Show which TV technologies and screen sizes dominate the Australian market.  
- Highlight the relationship between **screen size and energy use**, and between **screen size and star ratings**.  
- Identify brands with the largest number of models.  
- Communicate findings through clear **bar charts, histograms, box plots, and scatter plots** with annotations.  

The story flow:
1. Start with **availability** (technologies, sizes, brands).  
2. Move to **efficiency** (power use by technology, star ratings).  
3. Conclude with **practical tips** for choosing efficient appliances.  

---

## About the Data

### Data Source
- Data was drawn from the **Australian Energy Rating Label registry** and adapted into a simplified dataset for visualisation.  
- Some illustrative figures were drafted with AI assistance for demonstration purposes.

### Data Processing
- Brand names were cleaned (e.g., merging "Samsung Electronic" and "Samsung").  
- Screen sizes converted from cm → inches.  
- Filtering applied to restrict dataset to appliances **sold in Australia**.  
- Grouping and counting used to calculate frequencies (brands, models, technologies).  

### Privacy
- No personal or sensitive data is included.  
- Dataset is limited to **publicly available appliance attributes**.

### Accuracy and Limitations
- Energy figures are **illustrative** and may not reflect exact market conditions.  
- Results show **patterns and relationships**, not authoritative measurements.  
- Users should always refer to the official **Australian Energy Rating Label** for up-to-date and verified data.

### Ethics
- Analysis is designed for **educational purposes** and to promote **sustainable energy use**.  
- Care was taken not to misrepresent data or suggest endorsements by any brand or regulatory body.  
- Visualisations are explanatory, not prescriptive.

---

## AI Declaration

### Tools Used
- **Cursor with GPT-5**

### Where AI Was Used
- Drafted the page structure and semantic HTML (`index.html`, `televisions.html`, `about.html`).  
- Authored baseline CSS and updated theme with a palette (beige background, brown text, orange accent).  
- Wrote small JS utilities (`js/app.js`) for dynamic footer year, nav highlighting, and click-to-navigate.  
- Suggested copy for explanatory text and consumer tips.  
- Drafted this README structure and Data Story narrative.

### Human Role
- Reviewed and edited all AI outputs.  
- Verified behaviour in the browser.  
- Approved final wording, styling, and interactions.  
- Checked all factual claims and energy figures manually.

### Data and Sources
- No proprietary or personal data was provided to AI tools.  
- Energy figures used in examples are illustrative only.

### Attribution in UI
- Each page footer contains a note acknowledging GenAI assistance.

### Limitations
- AI-generated text may be **generic** and requires human refinement.  
- Technical and factual accuracy were verified, but users should validate figures before reuse.

### Reproducibility
Example prompts used:
- *“Style the site using a beige/brown/orange theme that matches the included lightning-bolt logo. Use CSS variables and apply them to header, nav, sections, and footer.”*  
- *“Add JS that highlights the active nav link based on the current page and sets the current year in the footer.”*

---
