# Matthew Sutiono - Portfolio

Personal portfolio website for **Matthew Sutiono**, a Computer Science undergraduate at BINUS University specializing in Intelligent Systems.

The site showcases selected projects, technical experience, academic activities, certifications, and my learning journey across software development, data, and applied AI.

## Live Website

Deployment in progress.

Once deployed, the live Vercel URL will be added here.

## About

I am a Computer Science undergraduate at BINUS University specializing in Intelligent Systems.

I enjoy learning through building projects and exploring how software, data, and AI can be used to solve practical problems. My experience includes full-stack development, machine learning, natural language processing, computer vision, research, and collaborative technical projects.

This portfolio was built to document both the final outcomes and the thinking behind the projects I have worked on.

## Featured Projects

### Habit Flow

A full-stack habit tracking application designed around sustainable weekly progress rather than perfect daily streaks.

The application allows users to create habits, define weekly goals, complete check-ins, record reflections, and receive AI-generated weekly insights.

**Technologies**

- Next.js
- React
- TypeScript
- Tailwind CSS
- Node.js
- Express
- PostgreSQL
- Prisma
- JWT
- Gemini API

**Role:** Software Engineering Project Lead  
**Team:** 5 members

---

### Toxic Comment Detector

A machine learning web application for classifying text as toxic or non-toxic.

The system uses TF-IDF text representation and Logistic Regression, with predictions exposed through a FastAPI backend and displayed through a lightweight web interface.

**Technologies**

- Python
- Scikit-learn
- TF-IDF
- Logistic Regression
- FastAPI
- HTML
- CSS
- JavaScript
- Vercel
- Railway

**Role:** Machine Learning / NLP Project Lead  
**Team:** 3 members

---

### Tomato Leaf Disease Detection

A computer vision project for classifying tomato leaves into:

- Healthy
- Early Blight
- Late Blight

My main contribution focused on input validation, edge-case testing, and evaluating how the application behaves when users upload non-leaf or unexpected images.

The project explores classical computer vision techniques including HOG, ORB, Bag-of-Visual-Words, and ensemble classification.

**Role:** Computer Vision Project Contributor  
**Team:** 7 members

## Portfolio Features

The website includes:

- Responsive personal homepage
- Selected project showcase
- Detailed project case studies
- Technical skills overview
- Education and experience timeline
- Beyond Code / community activities
- Certifications
- CV preview and PDF access
- Custom 404 page
- Responsive navigation
- Open Graph social preview
- Sitemap
- Robots configuration
- SEO metadata
- Mobile and desktop layouts

## Tech Stack

### Framework

- Next.js 16
- React 19
- TypeScript

### Styling

- Tailwind CSS 4

### UI

- Lucide React

### Development

- ESLint
- Git
- GitHub

### Deployment

- Vercel

## Project Structure

```text
portfolio-website/
├── public/
│   ├── cv/
│   ├── images/
│   └── media/
│
├── src/
│   ├── app/
│   │   ├── cv/
│   │   ├── projects/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   │
│   ├── components/
│   │   ├── home/
│   │   ├── layout/
│   │   ├── projects/
│   │   └── ui/
│   │
│   ├── data/
│   │   └── case-studies/
│   │
│   ├── lib/
│   └── types/
│
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

## Running Locally

Clone the repository:

```bash
git clone https://github.com/champsand/portfolio-website.git
```

Navigate into the project:

```bash
cd portfolio-website
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run lint
```

Runs ESLint.

```bash
npm run typecheck
```

Generates Next.js route types and runs TypeScript type checking.

```bash
npm run build
```

Creates an optimized production build.

```bash
npm start
```

Runs the production build locally.

## Design

The portfolio uses a dark editorial-style interface with a minimal visual system.

Core colors:

```text
Background      #0B0D10
Surface         #12161C
Primary Text    #F5F5F5
Secondary Text  #A1A1AA
Accent          #A866E6
```

The design focuses on:

- readable typography
- restrained use of color
- clear information hierarchy
- responsive layouts
- accessible navigation
- project storytelling over decorative effects

## CV

The website includes a dedicated CV page with:

- a privacy-conscious preview
- open PDF option
- downloadable PDF
- responsive presentation

The preview intentionally hides the phone number while the original CV PDF remains available through the CV page.

## Performance

Public media is intentionally optimized for web delivery.

The Habit Flow demo video is compressed and shortened for portfolio use, while project screenshots are optimized for responsive display using Next.js image handling.

## Accessibility

The site includes:

- semantic HTML structure
- keyboard-friendly navigation
- visible focus states
- descriptive image alt text
- accessible external links
- responsive navigation
- reduced-motion-friendly styling
- custom 404 navigation

## Author

**Matthew Sutiono**

Computer Science Undergraduate  
Intelligent Systems — BINUS University  
Jakarta, Indonesia

- GitHub: https://github.com/champsand
- LinkedIn: https://www.linkedin.com/in/matt06/
- Email: matthewsutiono@gmail.com

## License

This repository contains my personal portfolio website and project content.

The source code may be referenced for learning purposes, but personal content, project descriptions, images, CV materials, and branding should not be reused as another person's portfolio.
