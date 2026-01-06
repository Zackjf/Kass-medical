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
  title: "