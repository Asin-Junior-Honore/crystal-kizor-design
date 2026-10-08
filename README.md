# Crystal Kizor — Personal Brand Landing Page

A single-page landing page for Crystal Kizor, architect, designer and entrepreneur building climate-responsive homes, cities and ideas across Africa.

**Live Site:** [crystal-kizor-design-asin.netlify.app](https://crystal-kizor-design-asin.netlify.app/)

**Source Code:** [github.com/Asin-Junior-Honore/crystal-kizor-design](https://github.com/Asin-Junior-Honore/crystal-kizor-design)

**Tech Stack:** Plain HTML, CSS and vanilla JavaScript. No framework a single-page landing doesn't need one, and this keeps it fast, simple and easy to maintain.

---

## Part 1 — My Thinking

Crystal Kizor operates across seven brands and initiatives. The core design challenge was making these feel like facets of one person, not a menu of unrelated businesses.

**Key decisions:**

1. **Two visitor paths from the hero.** Her LinkedIn positioning splits her audience clearly: people who want to build (clients) and people who want to learn (architects/designers). The hero and final CTA both route these two groups.

2. **Hierarchy over equality.** Studio COKA gets featured placement larger card, project image, dark treatment because it's the professional anchor and revenue path. TEA gets a full section because it's her thought-leadership engine. The remaining initiatives sit in a clean grid so the ecosystem is visible without overwhelming.

3. **Proof, not claims.** The credibility strip uses real numbers from her work: 100,000+ sqm, TEDx, 70% natural ventilation. The featured work section shows the actual design principles behind her projects.

4. **Warm, grounded aesthetic.** Sand, terracotta and forest green reference African earth and materials not generic tech-startup blue. Fraunces serif + Inter sans give it an editorial, architectural feel.

---

## Part 2 — AI Product Thinking

**Brand:** The Effective Architect (TEA)

**Tool:** _Passive Design Check_ an AI design-review assistant for architects working in hot climates.

**What it does:** A designer uploads a floor plan, section drawing, or written project brief. The tool analyses it against passive cooling principles orientation, cross-ventilation, shading, thermal mass, opening placement and returns specific, actionable feedback: what's working, what's missing, and what to test next.

**Who it's for:** Architects, students and built-environment professionals designing in tropical, hot-humid or hot-arid climates. Especially those without senior mentors or access to climate consultants.

**The problem it solves:** Climate-responsive design knowledge is scattered across courses, books and expensive consultants. A young architect in Enugu or Accra designing their first hot-climate home has no fast way to pressure-test their decisions before construction. Mistakes are expensive and permanent.

**How someone uses it:** They upload a plan or describe the project (location, orientation, room layout). Within seconds they get a structured report: ventilation score, shading gaps, suggested adjustments, and links to relevant TEA framework modules.

**AI model & tech:** GPT-4o or Claude Sonnet via API for reasoning over text and image inputs (both handle architectural drawings and spatial logic well). A retrieval layer using TEA's own framework content ensures feedback is grounded in Crystal's methodology not generic AI advice. Vector store (Pinecone or Supabase pgvector) for course material retrieval.

**First working version:** A simple web app file upload, textarea for context, API call to GPT-4o with a carefully engineered system prompt containing TEA's passive design principles, and a formatted output. Ship in a weekend. No auth, no payments. Just a "try it" tool.

**Limitations & safeguards:** AI can misread drawings always framed as "suggestions to consider," not professional advice. Clear disclaimer: not a substitute for a licensed architect. Upload privacy handled server-side with no training on user data. Rate limits to prevent abuse.

---

## Part 3 — Analytics & Improvement

I'd measure performance across three layers: acquisition (how people arrive), engagement (what they do), and conversion (whether they take the action I want them to take).

**What I'd track:**

- Traffic sources (organic, direct, LinkedIn, referral)
- Scroll depth and time on page are they actually reading?
- Click-through rate on the two primary CTAs ("Start a project" vs "Join the waitlist")
- Bounce rate per section where do people drop off?
- Device split desktop vs mobile behaviour
- Form submissions and where they come from

**Tools:** Google Analytics 4 for traffic and events. Microsoft Clarity for session recordings and heatmaps (free, and it shows how people actually use the page). Netlify Analytics if I want server-side data without cookie banners. Google Search Console for search performance.

**How I'd use the data:** Identify which sections hold attention and which lose it. If mobile users bounce at the hero, the layout is wrong. If people scroll to the CTA but don't click, the offer or copy is unclear. If traffic is high from LinkedIn but conversions are low, the audience isn't the right fit or the page isn't speaking to them. Every insight becomes a hypothesis, then an A/B test.

**The 5,000 visitors / 5 enquiries scenario:**

0.1% conversion is critically low industry baseline is 2–5%. I'd investigate in order:

1. **Traffic quality** — where are the 5,000 coming from? If mostly bounce traffic, the problem isn't the page.
2. **Funnel drop-off** — Clarity recordings to see where users leave. Are they reaching the CTA? Are they clicking and abandoning a form?
3. **Message-match** — does the page deliver what the traffic source promised?
4. **Form friction** — is the enquiry form too long, broken, or unclear?
5. **Mobile experience** — majority of traffic is likely mobile; test it first.

**What I'd do next:** Fix the biggest drop-off point first. Simplify the form. Add a secondary, lower-friction CTA. Then re-measure not guess.

---

## Project Structure

crystal-kizor-design/
├── index.html
├── style.css
├── main.js
└── README.md

## Running Locally

Open `index.html` directly in a browser. No build step, no dependencies.
