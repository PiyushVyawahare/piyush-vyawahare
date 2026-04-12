# Piyush Vyawahare — Portfolio

Personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 3. Build for production

```bash
npm run build
```

## Updating Content

All content is centralized in **`src/data/index.ts`** — edit this file to update:

- Personal info (name, bio, email, links)
- Stats (years, coverage, etc.)
- Skills
- Work experience
- Projects
- Education
- Certifications

No need to touch any component files for content updates.

## Adding Resume PDF

Place your resume PDF at:

```
public/Piyush_Vyawahare_Resume.pdf
```

The "Download Resume" button in the Hero section links to this file.

## Deploying to Vercel

### Option 1 — Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2 — GitHub + Vercel Dashboard

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your GitHub repo
4. Vercel auto-detects Next.js — click Deploy
5. Your site is live at `https://your-project.vercel.app`

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles + font imports
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── EducationCerts.tsx
│   └── Contact.tsx
└── data/
    └── index.ts          # All portfolio content lives here
```
