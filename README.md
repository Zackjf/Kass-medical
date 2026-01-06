# Medical Biller & Healthcare VA Portfolio

A modern, professional portfolio website built with Astro and Tailwind CSS for medical billers/coders and healthcare virtual assistants.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
/
├── public/
│   ├── favicon.svg       # Site favicon
│   ├── og.png            # Open Graph image (replace with actual)
│   └── resume.pdf        # Your resume PDF (replace with actual)
├── src/
│   ├── components/
│   │   ├── layout/       # BaseLayout, SeoHead
│   │   ├── sections/     # Hero, Services, Experience, etc.
│   │   └── ui/           # Button, Card, Tag components
│   ├── config/
│   │   └── site.ts       # Site configuration (edit this first!)
│   ├── content/
│   │   ├── experience/   # Work experience markdown files
│   │   ├── case-studies/ # Portfolio case studies
│   │   └── certifications/ # Credentials and education
│   ├── pages/
│   │   ├── index.astro   # Home page
│   │   └── privacy.astro # Privacy policy
│   └── styles/
│       └── global.css    # Global styles and Tailwind
└── package.json
```

## ✏️ How to Edit Content

### 1. Site Configuration (`src/config/site.ts`)

Update your personal information:

```typescript
export const site = {
  name: "Your Name",
  title: "Your Name | Medical Biller & Coder...",
  email: "your@email.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  bookingLink: "https://calendly.com/yourlink",
  // ... more settings
};
```

### 2. Experience (`src/content/experience/`)

Add/edit markdown files for each role:

```yaml
---
company: "Company Name"
role: "Your Role"
startDate: "2023-01"
endDate: "2024-12"  # Omit for current role
tools:
  - "Tool 1"
  - "Tool 2"
highlights:
  - "Achievement 1"
  - "Achievement 2"
order: 1  # Lower = appears first
---
```

### 3. Case Studies (`src/content/case-studies/`)

Add portfolio items:

```yaml
---
title: "Project Title"
problem: "What was the issue?"
actions:
  - "What you did"
results:
  - "What improved"
tools:
  - "Tools used"
order: 1
---
```

### 4. Certifications (`src/content/certifications/`)

Add your credentials:

```yaml
---
name: "Certification Name"
issuer: "Issuing Organization"
year: "2023"
link: "https://verify.link"  # Optional
order: 1
---
```

## 🎨 Customization

### Colors

Edit `tailwind.config.mjs` to change the color scheme:

```javascript
colors: {
  primary: {
    // Healthcare blue
    500: '#0ea5e9',
    // ...
  },
  accent: {
    // Trust green
    500: '#10b981',
    // ...
  },
}
```

### Fonts

The site uses:
- **Bricolage Grotesque** for headings
- **Plus Jakarta Sans** for body text

Change fonts in `src/styles/global.css` and `tailwind.config.mjs`.

## 📝 Contact Form

The contact form uses [Formspree](https://formspree.io/). To enable:

1. Create a free Formspree account
2. Create a new form
3. Replace `YOUR_FORM_ID` in `src/components/sections/Contact.astro`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 🚀 Deployment

### Netlify

1. Push to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Vercel

1. Push to GitHub
2. Import project in Vercel
3. Framework preset: Astro
4. Deploy!

## 📋 Checklist Before Launch

- [ ] Update `src/config/site.ts` with your info
- [ ] Add your experience in `src/content/experience/`
- [ ] Add case studies in `src/content/case-studies/`
- [ ] Add certifications in `src/content/certifications/`
- [ ] Replace `public/resume.pdf` with your actual resume
- [ ] Replace `public/og.png` with your OG image (1200x630)
- [ ] Update Formspree form ID in Contact section
- [ ] Update `site` URL in `astro.config.mjs`
- [ ] Test on mobile devices

## 📄 License

MIT License - Feel free to use and modify for your own portfolio!
