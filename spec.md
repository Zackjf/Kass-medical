## Spec: Astro Portfolio/Resume Site — Medical Biller/Coder + Virtual Assistant (Manila)

### 1) Goals

* Present a credible, modern one-page (or small multi-page) resume/portfolio for a **Medical Biller/Coder + Virtual Assistant** based in **Manila, Philippines**.
* Convert visitors into leads via **Contact**, **Book a call**, or **Download resume**.
* Make it easy for US-based clinics/practices to quickly verify: skills, tools, compliance awareness, availability, and experience.

### 2) Target Audience

* US healthcare providers (private practices, billing companies, RCM teams), clinic managers, recruiters.
* Small business owners needing a VA with healthcare admin experience.

### 3) Success Metrics

* Contact form submissions / email clicks.
* Resume downloads.
* Booking link clicks (Calendly or similar).
* Time on page + scroll depth (optional via analytics).

---

## 4) Information Architecture

### Option A: Single-page (recommended)

Sections (anchor nav):

1. Hero / Value Prop
2. Highlights (quick stats)
3. Services
4. Skills & Tools
5. Experience
6. Certifications & Education
7. Portfolio / Case Snapshots
8. Testimonials (optional)
9. FAQ (compliance + work setup)
10. Contact / Booking

### Option B: Small multi-page

* `/` Home (hero, highlights, services, CTA)
* `/resume` Experience, certs, downloadable PDF
* `/portfolio` Case snapshots / process
* `/contact` Form + scheduling + social links

---

## 5) Content Requirements (Copy + Data)

### Core identity block

* Full name
* Title: “Medical Biller & Coder | Healthcare Virtual Assistant”
* Location: Manila, PH (include time zone: **PHT / UTC+8**)
* Availability (e.g., “US business hours / Night shift OK”)
* Contact: email, phone/WhatsApp (optional), LinkedIn
* CTA buttons: **Download Resume (PDF)**, **Book a Call**, **Email Me**

### Services (examples)

* Medical billing support: charge entry, claims submission, follow-ups
* Denial management and appeals support
* Payment posting (ERA/EOB), account reconciliation
* Eligibility/benefits verification, prior auth support (if applicable)
* Coding support (CPT/ICD-10/HCPCS) *only if truthful/within scope*
* Patient statements, patient calls (if offered)
* VA tasks: inbox management, scheduling, documentation, reports

### Skills & tools (categorized)

* **RCM workflow:** eligibility → charge entry → claim submission → follow-up → posting → AR/denials
* **Coding:** ICD-10-CM, CPT, HCPCS (only what applies)
* **Clearinghouses / payer portals**
* **EHR/PM systems:** (list actual systems the person knows)
* **Productivity:** Excel/Google Sheets, Slack, Teams, Zoom, ClickUp/Trello
* **Compliance:** HIPAA awareness, PH data privacy awareness; secure handling practices

### Experience template (each role)

* Company/practice type, dates, location (remote)
* 3–6 bullet achievements with measurable outcomes if possible:

  * AR reduction %, denial rate improvement, avg days in AR
  * claim volume/week, call volume/day, turnaround time
* Tools used in that role

### Portfolio / Case Snapshots (privacy-safe)

Short “before/after” stories **without PHI**:

* “Denials workflow cleanup”
* “Eligibility verification checklist”
* “Payment posting accuracy improvement”
* “AR worklist prioritization method”
  Each snapshot includes: problem → action → result → tools.

### FAQ (high trust)

* “Do you sign a BAA / NDA?” (answer: willing to sign; you handle data securely)
* “What hours can you work?” (US Eastern/Central/Pacific options)
* “How do you handle PHI?” (no local storage, password manager, secure VPN, etc. — keep accurate)
* “Internet/power backup?” (describe setup)
* “Preferred engagement?” (hourly/part-time/full-time)

---

## 6) Design + UX

### Look & feel

* Clean, healthcare-adjacent (whites, soft neutrals, single accent color).
* Professional headshot area (optional).
* Clear typography; accessible contrast.

### Key UI elements

* Sticky top nav with anchors.
* “Hire Me / Book Call” persistent CTA (desktop) and bottom CTA bar (mobile).
* Resume PDF download prominent but not spammy.
* Scannable cards: services, tools, case snapshots.

### Accessibility

* WCAG-minded color contrast.
* Keyboard navigable menus.
* Alt text for images.
* Prefer semantic HTML.

---

## 7) Technical Requirements (Astro)

### Stack

* **Astro** (latest stable), static output.
* Styling: Tailwind (optional) or vanilla CSS modules.
* Icons: `lucide` or `astro-icon`.
* Forms:

  * Simple: Netlify Forms / Formspree
  * Advanced: serverless endpoint (only if needed)
* Analytics (optional): Plausible or Google Analytics.

### Content management

Two modes:

1. **No CMS:** content in Markdown/MDX or JSON/YAML in `src/content/`
2. **Light CMS:** Decap (Netlify CMS) if the user wants easy editing

Use Astro Content Collections for:

* `experience`
* `case-studies`
* `certifications`
* `testimonials` (optional)

### Routing

* `/` home
* `/resume` (optional)
* `/portfolio` (optional)
* `/contact` (optional)
* `/privacy` (recommended if collecting form info)

### SEO

* OpenGraph + Twitter cards
* JSON-LD for Person (name, jobTitle, location, email)
* Descriptive titles per page
* Sitemap + robots.txt
* Canonical URL

### Performance

* Image optimization via `astro:assets`
* Lazy-load non-critical images
* Minimal JS; keep it mostly static
* Lighthouse target: 90+ performance/accessibility/best practices/SEO

### Security + compliance notes

* No PHI on site.
* Contact form: only collect name/email/message; avoid medical details.
* Add note: “Please do not submit sensitive medical information.”

---

## 8) Pages/Sections: Detailed Requirements

### Hero

* Headline: “Medical Biller & Coder + Healthcare VA (Manila)”
* Subheadline: 1–2 lines with specialties (e.g., insurance verification, claims, AR follow-up)
* 2–3 quick trust chips:

  * “US time zones OK”
  * “HIPAA-aware workflows”
  * “X years RCM experience”
* CTAs: Book / Email / Download resume

### Highlights

3–5 metric cards:

* Years experience
* Claim volume supported
* Tools count
* Avg response time
* Availability

### Services

* Cards with short outcomes (“Reduce AR”, “Clean claim submissions”, etc.)

### Skills & Tools

* Tabbed or grouped lists: RCM / Coding / Admin / Tools

### Experience

* Timeline layout
* Each role expands (accordion) on mobile

### Certifications & Education

* Credential, issuer, year (only real ones)
* If “in progress,” label clearly

### Case Snapshots

* 3–6 cards
* Each links to a detail page if multi-page

### Contact

* Form + direct email
* Calendly embed or external link
* Response expectation (e.g., “Replies within 24 hours”)

---

## 9) Data Model (example fields)

### Experience (collection)

* `company`
* `role`
* `startDate`, `endDate` (or `present`)
* `location` (Remote)
* `summary`
* `bullets[]`
* `tools[]`

### Case Study (collection)

* `title`
* `problem`
* `actions[]`
* `results[]`
* `tools[]`
* `disclaimer` (“All details anonymized; no PHI.”)

### Certifications (collection)

* `name`
* `issuer`
* `year`
* `link` (optional)

---

## 10) Deliverables

* Astro project repo with:

  * Responsive pages + reusable components
  * Content collections + sample content
  * Resume PDF placed in `/public/resume.pdf`
  * SEO meta components
  * Contact form integration configured
* Deployment-ready config:

  * Netlify / Vercel
* Basic README:

  * How to edit content
  * How to deploy
  * How to replace resume + images

---

## 11) Suggested Content Checklist (what you/they must provide)

* Name + preferred title
* Short professional summary (2–3 lines)
* Work history with dates + tools used
* Skill list + software list
* Certifications (if any)
* Preferred hours + rate range (optional)
* Resume PDF
* Headshot (optional)
* Contact email + booking link

Awesome — here’s a **ready-to-paste site copy** plus an **Astro folder/component structure** (with sample files) tailored for a **Medical Biller/Coder + Healthcare VA from Manila**.

---

## 1) Ready-to-paste site copy (single-page)

> Replace anything in **[brackets]** with your details.

### Site title + meta

* **Site title:** `[Full Name] | Medical Biller & Coder + Healthcare VA (Manila)`
* **Meta description:** Medical billing & coding support + healthcare virtual assistance from Manila. Claims, eligibility, AR follow-up, denial management, and admin support—available for US time zones.
* **OG title:** Hire `[Full Name]` — Medical Biller/Coder + Healthcare VA
* **OG description:** Reliable remote support for US clinics: claims, denials, payment posting, eligibility, and admin workflows.

### Nav labels (anchors)

* Home
* Services
* Skills & Tools
* Experience
* Case Snapshots
* Certifications
* FAQ
* Contact

### Hero

**Headline options (pick one):**

1. Medical Biller & Coder + Healthcare Virtual Assistant (Manila)
2. Revenue Cycle Support That Keeps Claims Moving
3. Remote RCM + Admin Support for US Clinics

**Subheadline:**
I help clinics and billing teams stay on top of **eligibility, claims, AR follow-up, denials, and payment posting**—plus dependable VA support. Based in **Manila (PHT / UTC+8)** and available for **US time zones**.

**Trust chips (choose 3–5):**

* US time zones OK (EST/CST/PST)
* HIPAA-aware workflows
* Fast response (within [X] hours)
* Detail-oriented claim prep & follow-up
* Reliable remote setup (backup internet/power)

**Primary CTAs:**

* **Download Resume (PDF)**
* **Book a Call**
* **Email Me**

### Highlights (quick stats)

* **[X]+ years** in medical billing / RCM support
* **[X]+ claims/week** supported (average)
* **[X]%+ accuracy** focus on charge entry & posting
* Tools: **[EHR/PM], [Clearinghouse], Excel/Sheets, payer portals**
* Available: **[Full-time / Part-time]**, **[Shift details]**

### Services

**Section intro:**
Support that’s structured, documented, and built for clean handoffs.

**Service cards (use what applies):**

* **Eligibility & Benefits Verification**
  Verify coverage, capture benefits, document limitations, and flag auth requirements.
* **Charge Entry & Claim Submission**
  Clean data entry, claim scrubbing basics, and timely submissions through clearinghouse/payer portals.
* **AR Follow-up & Denial Management**
  Work queues, research denials, resubmit/correct, and track outcomes with notes.
* **Payment Posting (ERA/EOB)**
  Post payments, adjust correctly, reconcile balances, and identify underpayments.
* **Appeals Support (non-clinical)**
  Compile documentation, draft appeal templates, and follow up on status (no PHI on personal systems).
* **Healthcare VA Support**
  Scheduling, inbox management, spreadsheets, call handling scripts, task tracking, and reports.

### Skills & Tools

**RCM / Billing**

* Claim lifecycle: eligibility → charge entry → submission → follow-up → posting → patient balance support
* Denial categories: eligibility, coding edits, timely filing, missing info, bundling/modifiers (only list what you truly handle)
* Payer portals: status checks, claim corrections, attachments, messages

**Coding (only include what’s true)**

* ICD-10-CM, CPT, HCPCS fundamentals
* Coding support: validation, documentation checks, edit resolution (non-provider role)

**Tools**

* EHR/PM: **[PracticeFusion / Kareo / AdvancedMD / Athena / eCW / other]**
* Clearinghouse: **[Change Healthcare / Availity / Office Ally / other]**
* Productivity: Excel/Google Sheets, Google Workspace/Microsoft 365
* Comms: Slack, Teams, Zoom
* Tracking: Trello/ClickUp/Asana

**Work style**

* Clear notes + daily updates
* Organized worklists and trackers
* SOP-first approach (repeatable processes)

### Experience (template + sample wording)

**[Role] — [Company/Clinic Type] (Remote)**
**[Month Year] – [Month Year/Present]**

* Managed **[X]** claims/week across **[specialty]**; ensured clean submissions and follow-ups.
* Reduced **unworked AR** by **[X]%** by prioritizing by payer, aging, and denial type.
* Posted **ERA/EOB** payments and reconciled balances; flagged underpayments and trends.
* Verified eligibility and documented benefits for **[X]** patients/day during peak periods.
* Tools: **[EHR/PM]**, **[clearinghouse]**, payer portals, **Excel/Sheets**

(Add 1–3 roles.)

### Case Snapshots (privacy-safe mini portfolio)

> Keep these anonymized—no clinic names, no dates that identify, no PHI.

1. **Denials Worklist Cleanup**

   * Problem: Denials were mixed with pending/unclear statuses, slowing follow-up
   * Action: Built a tracker by payer + denial category + next action date
   * Result: Improved follow-up consistency and reduced “no-touch” AR

2. **Eligibility Verification Checklist**

   * Problem: Missing benefit details caused avoidable denials
   * Action: Standardized a checklist (deductible, copay, auth, OON, limitations)
   * Result: Fewer eligibility-related rejections and clearer front-desk handoffs

3. **Payment Posting Accuracy Improvement**

   * Problem: Inconsistent adjustments and remark code notes
   * Action: Created posting rules + required notes fields for common scenarios
   * Result: Faster reconciliation and easier denial/underpayment review later

### Certifications & Education

* **[Certification]** — [Issuer], [Year]
* **[Training/Course]** — [Provider], [Year]
* **[Degree]** — [School], [Year]

### FAQ (high trust)

**Do you sign an NDA/BAA?**
Yes. I’m comfortable signing NDAs/BAAs and following client security requirements.

**What hours do you work?**
I’m based in Manila (PHT / UTC+8) and can align with **[EST/CST/PST]** hours, including night shift.

**How do you handle sensitive information?**
I follow secure practices (strong passwords, least-privilege access, and client-approved tools). Please don’t send medical details through the website form.

**What’s your remote setup?**
Reliable PC, headset, stable internet, and **[backup internet/power]** for continuity.

**What engagement do you prefer?**
Open to **hourly / part-time / full-time**. I work best with clear SOPs, access to tools, and weekly priorities.

### Contact

**Headline:** Let’s talk about your billing/admin workload
**Body:** Tell me what you need help with (claim volume, payers, tools, hours). I’ll reply within **[X]** hours.

* Email: **[email]**
* WhatsApp (optional): **[number]**
* LinkedIn: **[link]**
* Booking: **[Calendly link]**

**Form note (required):**
Please **do not** include sensitive medical information in this message.

---

## 2) Astro folder structure + components

### Directory tree (recommended)

```txt
/
├─ public/
│  ├─ resume.pdf
│  ├─ og.png
│  └─ favicon.svg
├─ src/
│  ├─ content/
│  │  ├─ experience/
│  │  │  ├─ clinic-a.md
│  │  │  └─ billing-co.md
│  │  ├─ case-studies/
│  │  │  ├─ denials-worklist.md
│  │  │  └─ eligibility-checklist.md
│  │  └─ certifications/
│  │     └─ certs.md
│  ├─ components/
│  │  ├─ layout/
│  │  │  ├─ BaseLayout.astro
│  │  │  └─ SeoHead.astro
│  │  ├─ ui/
│  │  │  ├─ Button.astro
│  │  │  ├─ Card.astro
│  │  │  ├─ Section.astro
│  │  │  └─ Tag.astro
│  │  ├─ sections/
│  │  │  ├─ Hero.astro
│  │  │  ├─ Highlights.astro
│  │  │  ├─ Services.astro
│  │  │  ├─ SkillsTools.astro
│  │  │  ├─ ExperienceList.astro
│  │  │  ├─ CaseSnapshots.astro
│  │  │  ├─ Certifications.astro
│  │  │  ├─ FAQ.astro
│  │  │  └─ Contact.astro
│  │  └─ Nav.astro
│  ├─ pages/
│  │  ├─ index.astro
│  │  └─ privacy.astro
│  ├─ styles/
│  │  └─ global.css
│  ├─ config/
│  │  └─ site.ts
│  └─ content.config.ts
├─ astro.config.mjs
└─ package.json
```

### `src/config/site.ts` (single source of truth)

```ts
export const site = {
  name: "[Full Name]",
  title: "[Full Name] | Medical Biller & Coder + Healthcare VA (Manila)",
  description:
    "Medical billing & coding support + healthcare virtual assistance from Manila. Claims, eligibility, AR follow-up, denial management, and admin support—available for US time zones.",
  location: "Manila, Philippines (PHT / UTC+8)",
  email: "you@example.com",
  linkedin: "https://www.linkedin.com/in/your-handle/",
  bookingLink: "https://calendly.com/your-link",
  resumeUrl: "/resume.pdf",
};
```

### Content collections (`src/content.config.ts`)

```ts
import { defineCollection, z } from "astro:content";

const experience = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    startDate: z.string(), // "2023-01"
    endDate: z.string().optional(), // omit if present
    location: z.string().default("Remote"),
    tools: z.array(z.string()).default([]),
    highlights: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

const caseStudies = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    problem: z.string(),
    actions: z.array(z.string()),
    results: z.array(z.string()),
    tools: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

const certifications = defineCollection({
  type: "content",
  schema: z.object({
    items: z.array(
      z.object({
        name: z.string(),
        issuer: z.string(),
        year: z.string(),
        link: z.string().url().optional(),
      })
    ),
  }),
});

export const collections = {
  experience,
  "case-studies": caseStudies,
  certifications,
};
```

### Sample content: Experience (`src/content/experience/clinic-a.md`)

```md
---
company: "US Multi-Specialty Clinic"
role: "Medical Biller / AR Follow-up (Remote)"
startDate: "2023-06"
endDate: "2025-01"
location: "Remote"
tools:
  - "Athena (PM/EHR)"
  - "Availity"
  - "Payer Portals"
  - "Excel"
highlights:
  - "Worked claim follow-ups and documented actions consistently"
  - "Supported ERA/EOB posting and reconciliation"
  - "Eligibility verification and benefits documentation"
order: 1
---

Focused on clean claim workflows, follow-up notes, and timely resubmissions. All examples anonymized; no PHI stored locally.
```

### Sample content: Case snapshot (`src/content/case-studies/denials-worklist.md`)

```md
---
title: "Denials Worklist Cleanup"
problem: "Denials were mixed with pending statuses, slowing follow-up and increasing no-touch AR."
actions:
  - "Built a tracker by payer, denial category, and next action date"
  - "Standardized status notes for handoffs"
  - "Created a weekly review list for aging items"
results:
  - "Improved follow-up consistency"
  - "Reduced time spent re-researching the same claim"
tools:
  - "Excel/Google Sheets"
  - "Payer portals"
order: 1
---
```

### `src/pages/index.astro` (wires sections together)

```astro
---
import BaseLayout from "../components/layout/BaseLayout.astro";
import Nav from "../components/Nav.astro";

import Hero from "../components/sections/Hero.astro";
import Highlights from "../components/sections/Highlights.astro";
import Services from "../components/sections/Services.astro";
import SkillsTools from "../components/sections/SkillsTools.astro";
import ExperienceList from "../components/sections/ExperienceList.astro";
import CaseSnapshots from "../components/sections/CaseSnapshots.astro";
import Certifications from "../components/sections/Certifications.astro";
import FAQ from "../components/sections/FAQ.astro";
import Contact from "../components/sections/Contact.astro";
---

<BaseLayout>
  <Nav />
  <main>
    <Hero />
    <Highlights />
    <Services />
    <SkillsTools />
    <ExperienceList />
    <CaseSnapshots />
    <Certifications />
    <FAQ />
    <Contact />
  </main>
</BaseLayout>
```

### `src/components/layout/BaseLayout.astro`

```astro
---
import SeoHead from "./SeoHead.astro";
import "../../styles/global.css";
---

<html lang="en">
  <head>
    <SeoHead />
  </head>
  <body>
    <slot />
    <footer class="container footer">
      <small>© {new Date().getFullYear()} • Built with Astro</small>
    </footer>
  </body>
</html>

<style>
  .container { max-width: 980px; margin: 0 auto; padding: 0 16px; }
  .footer { padding: 40px 0; opacity: 0.7; }
</style>
```

### `src/components/layout/SeoHead.astro`

```astro
---
import { site } from "../../config/site";
const title = site.title;
const description = site.description;
---

<title>{title}</title>
<meta name="description" content={description} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:type" content="website" />
<meta property="og:image" content="/og.png" />
<meta name="twitter:card" content="summary_large_image" />
<link rel="icon" href="/favicon.svg" />
```

### `src/components/Nav.astro`

```astro
---
import { site } from "../config/site";
const links = [
  ["Services", "#services"],
  ["Skills & Tools", "#skills"],
  ["Experience", "#experience"],
  ["Case Snapshots", "#cases"],
  ["Certifications", "#certifications"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];
---

<header class="nav">
  <div class="container nav-inner">
    <a class="brand" href="#top">{site.name}</a>

    <nav class="links">
      {links.map(([label, href]) => (
        <a href={href}>{label}</a>
      ))}
    </nav>

    <div class="cta">
      <a class="btn" href={site.resumeUrl} target="_blank" rel="noopener">Download Resume</a>
    </div>
  </div>
</header>

<style>
  .nav { position: sticky; top: 0; backdrop-filter: blur(8px); border-bottom: 1px solid rgba(0,0,0,.08); }
  .nav-inner { display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; }
  .brand { font-weight: 700; text-decoration: none; }
  .links a { margin: 0 8px; text-decoration: none; opacity: .85; }
  .btn { padding: 8px 12px; border: 1px solid rgba(0,0,0,.15); border-radius: 10px; text-decoration: none; }
  @media (max-width: 820px) { .links { display: none; } }
</style>
```

### Example section: `src/components/sections/Hero.astro`

```astro
---
import { site } from "../../config/site";
---

<section id="top" class="container hero">
  <p class="eyebrow">{site.location}</p>
  <h1>Medical Biller & Coder + Healthcare Virtual Assistant</h1>
  <p class="sub">
    I support US clinics with eligibility, claims, AR follow-up, denials, payment posting, and organized admin help.
    Available for US time zones.
  </p>

  <div class="chips">
    <span class="chip">US time zones OK</span>
    <span class="chip">HIPAA-aware workflows</span>
    <span class="chip">Detail-first, documented updates</span>
  </div>

  <div class="actions">
    <a class="btn primary" href={site.bookingLink} target="_blank" rel="noopener">Book a Call</a>
    <a class="btn" href={`mailto:${site.email}`}>Email Me</a>
    <a class="btn" href={site.resumeUrl} target="_blank" rel="noopener">Download Resume</a>
  </div>
</section>

<style>
  .hero { padding: 64px 16px 32px; }
  .eyebrow { opacity: .7; margin: 0 0 8px; }
  .sub { max-width: 60ch; opacity: .85; }
  .chips { display:flex; gap: 8px; flex-wrap: wrap; margin: 16px 0 0; }
  .chip { border: 1px solid rgba(0,0,0,.12); padding: 6px 10px; border-radius: 999px; font-size: 14px; opacity: .9; }
  .actions { display:flex; gap: 10px; flex-wrap: wrap; margin: 22px 0 0; }
  .btn { padding: 10px 14px; border-radius: 12px; border: 1px solid rgba(0,0,0,.15); text-decoration:none; }
  .primary { font-weight: 700; }
</style>
```

### Experience section reading content collection (`src/components/sections/ExperienceList.astro`)

```astro
---
import { getCollection } from "astro:content";
const items = (await getCollection("experience")).sort((a, b) => a.data.order - b.data.order);
---

<section id="experience" class="container section">
  <h2>Experience</h2>

  <div class="stack">
    {items.map((item) => (
      <article class="card">
        <header class="card-head">
          <div>
            <h3>{item.data.role}</h3>
            <p class="meta">
              {item.data.company} • {item.data.location} • {item.data.startDate} – {item.data.endDate ?? "Present"}
            </p>
          </div>
        </header>

        <ul>
          {item.data.highlights.map((h) => <li>{h}</li>)}
        </ul>

        {item.data.tools.length > 0 && (
          <p class="tools"><strong>Tools:</strong> {item.data.tools.join(", ")}</p>
        )}
      </article>
    ))}
  </div>
</section>

<style>
  .section { padding: 48px 16px; }
  .stack { display: grid; gap: 14px; }
  .card { border: 1px solid rgba(0,0,0,.12); border-radius: 16px; padding: 16px; }
  .meta { opacity: .7; margin: 6px 0 0; }
  .tools { opacity: .8; margin: 10px 0 0; }
</style>
```

### Contact section (simple HTML form) (`src/components/sections/Contact.astro`)

```astro
---
import { site } from "../../config/site";
---

<section id="contact" class="container section">
  <h2>Contact</h2>
  <p>Tell me what you need help with (claim volume, payers, tools, hours). I’ll reply within 24 hours.</p>

  <div class="grid">
    <div class="card">
      <p><strong>Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a></p>
      <p><strong>LinkedIn:</strong> <a href={site.linkedin} target="_blank" rel="noopener">Profile</a></p>
      <p><strong>Booking:</strong> <a href={site.bookingLink} target="_blank" rel="noopener">Schedule a call</a></p>
      <p class="note"><strong>Note:</strong> Please do not include sensitive medical information in the message.</p>
    </div>

    <form class="card" method="post" action="https://formspree.io/f/YOUR_ID">
      <label>
        Name
        <input name="name" required />
      </label>
      <label>
        Email
        <input name="email" type="email" required />
      </label>
      <label>
        Message
        <textarea name="message" rows="6" required></textarea>
      </label>
      <button class="btn primary" type="submit">Send</button>
    </form>
  </div>
</section>

<style>
  .section { padding: 48px 16px; }
  .grid { display: grid; gap: 14px; grid-template-columns: 1fr 1fr; }
  .card { border: 1px solid rgba(0,0,0,.12); border-radius: 16px; padding: 16px; }
  label { display: grid; gap: 6px; margin: 10px 0; }
  input, textarea { width: 100%; padding: 10px; border-radius: 12px; border: 1px solid rgba(0,0,0,.15); }
  .btn { padding: 10px 14px; border-radius: 12px; border: 1px solid rgba(0,0,0,.15); }
  .primary { font-weight: 700; }
  .note { opacity: .75; margin-top: 12px; }
  @media (max-width: 820px) { .grid { grid-template-columns: 1fr; } }
</style>
```

### Minimal global styles (`src/styles/global.css`)

```css
:root { color-scheme: light; }
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; line-height: 1.5; }
a { color: inherit; }
h1, h2, h3 { line-height: 1.15; margin: 0 0 10px; }
p { margin: 0 0 10px; }
```

### Privacy page (`src/pages/privacy.astro`)

```astro
---
import BaseLayout from "../components/layout/BaseLayout.astro";
---

<BaseLayout>
  <main class="container" style="padding: 48px 16px;">
    <h1>Privacy</h1>
    <p>This website is for professional contact only. Please do not submit sensitive medical information through the contact form.</p>
    <p>If you contact me, I’ll use your information only to respond to your inquiry.</p>
  </main>
</BaseLayout>
```

---

## 3) What I need from you to “finalize” the copy (no back-and-forth required)

If you paste these details, I can instantly rewrite the whole site copy with your real info:

* Name + preferred job title line
* Years of experience
* Top 3 tools (EHR/PM + clearinghouse + spreadsheets)
* 2–3 strongest services (e.g., AR follow-up, payment posting, eligibility)
* Work hours (which US time zone you match)
* Resume link details (or you’ll upload the PDF later)
* 2 experience roles + 2 achievements each (even rough)

If you want, I can also adapt this to a **2-page setup** (`/` + `/resume`) and add a clean **print-friendly resume page** that mirrors the PDF.



