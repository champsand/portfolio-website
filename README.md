# Matthew Sutiono — personal portfolio

Phase 5 of a six-phase portfolio: a complete editorial, dark homepage, three project case studies, a CV viewer, and production metadata. The portfolio presents Matthew as a BINUS Computer Science undergraduate specializing in Intelligent Systems. Approved stories and layouts are preserved. Deployment remains Phase 6.

Implemented case studies:

- `/projects/habit-flow` — product thinking and rewarding reflection.
- `/projects/hate-speech-detection` — contextual classification and separate abusive-language evidence.
- `/projects/tomato-leaf-detection` — input validation and behavior outside the expected input domain.

The homepage is `/`; `/cv` displays the existing PDF with optional Open PDF and Download PDF actions. Unknown routes show the custom 404 page.

## Stack

Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, ESLint, and lucide-react. Geist and Geist Mono use `next/font/google`; fonts are fetched at build time and self-hosted by Next.js. No backend, database, authentication, or UI component framework.

## Run locally

Requires Node.js 20.9 or newer and npm.

```sh
npm install
npm run dev
```

Open http://localhost:3000. Edit a source file and the development server updates the page.

## Commands

```sh
npm run dev        # development server
npm run lint       # ESLint, including Next.js and TypeScript rules
npm run typecheck  # generate route types and check TypeScript
npm run build      # production build
npm start          # serve the production build
```

## How the code is organized

- `src/app/`: App Router entry points. `page.tsx` composes the homepage; `layout.tsx` loads fonts and metadata; `globals.css` defines the dark palette, reusable styles, focus states, and spacing.
- `src/components/layout/`: shared Container, Navbar, and Footer. Container allows 1180px of content inside desktop padding.
- `src/components/home/`: one readable component per implemented homepage section.
- `src/components/ui/`: small shared heading and safe external-link components.
- `src/data/`: plain typed content for identity, links, projects, journey, skills, activities, and certifications. Future project cards and case studies should use the same project records. Journey project entries derive from those records to avoid conflicting roles and dates.
- `src/types/portfolio.ts`: simple interfaces describing those records.
- `public/`: real project screenshots, the unchanged CV PDF, and the processed Habit Flow demo and poster.
- `source-assets/`: ignored local source/reference material. Never link the large raw video from the website.
- `docs/PORTFOLIO_SPEC.md`: permanent source of truth, including the complete original brief, exact copy, facts, limitations, and future-phase requirements.
- `docs/ASSETS.md`: asset paths, inventory, and intended usage.

Components remain Server Components except Navbar, which needs state for the mobile dropdown. The menu supports keyboard activation, Escape, closing after a selection, and closing when focus leaves the header. The page includes a skip link, visible focus styles, semantic sections, and one h1.

## Design system

Background `#0B0D10`, elevated surface `#12161C`, text `#F5F5F5`, secondary text `#A1A1AA`, accent `#38BDF8`, and 9% white borders. Tailwind theme tokens expose these colors. Body copy uses Geist; labels and metadata use Geist Mono. The layout uses 24px mobile padding and up to 48px desktop padding, with generous section spacing. No animation is included in Phase 1.

## Intentionally deferred

Navbar links use homepage-qualified anchors so they work from nested routes. All project cards link to completed case studies. Navbar and Contact View CV links lead to `/cv`, never directly download the PDF. External project links open in new tabs; Habit Flow has no live-deployment link. Deployment and domain configuration remain deferred. No animation library is needed.

## Phase 2 layout and data

`Projects.tsx` gives Habit Flow a larger feature and places the other two projects beneath it. `ProjectCard.tsx` reads shared records, including separate homepage tags and descriptive alt text, without discarding the fuller case-study facts. Images use lazy loading, responsive `sizes`, a stable 16:9 frame, and `object-contain` to preserve the full screenshots.

Skills uses text groups; Journey derives project roles and descriptions from project data; Beyond Code emphasizes the teaching reflection without photos; Certifications uses compact rows. Contact and Footer reuse the site links. New sections remain Server Components. CSS link hover transitions respect reduced-motion preferences. Projects stack on phones, secondary projects become two columns on tablets, and the featured split appears at desktop widths.

The existing CV is served unchanged. The raw Habit Flow recording is local editing material only; the public demo is a separate short encode.

## Phase 3 case-study architecture

`src/app/projects/habit-flow/page.tsx` composes the nine numbered sections and exports route-specific metadata. It reads project identity, role, team, stack, screenshot path, and links from `src/data/projects.ts`. The optional `caseStudyHref` field enables a homepage CTA only when a route is ready; grouped technology data also lives in the shared project record.

`src/data/case-studies/habit-flow.ts` holds the longer narrative, contribution details, user flow, and next steps in a straightforward typed object. `src/components/projects/` contains reusable ProjectHero, ProjectMeta, ProjectImage, ProjectSection, ProjectLinks, and ProjectNavigation components. ProjectSection accepts normal React children for a diagram or comparison; it is not a generic page-builder schema. HabitFlowArchitecture is a project-specific HTML/CSS diagram with a text explanation.

The page remains a Server Component. It reuses the existing Navbar, Footer, Container, link styling, and focus states. Body paragraphs stay within a readable column; metadata, diagrams, and comparisons stack on narrow screens. The raw video remains ignored and is never referenced by application code.

## Phase 4 case studies

`src/data/case-studies/hate-speech.ts` and `tomato-leaf.ts` contain typed narratives. Shared identity, links, screenshots, and documented metrics remain in `src/data/projects.ts`. Each route composes its own nine sections using the Phase 3 components; there is no generic page builder.

`HateSpeechAnalysis` presents a branching model/lexicon analysis. `TomatoValidation` shows rejection before feature extraction and disease classification. Both are responsive HTML/React diagrams with text explanations, not generated images. `StoryDetails` shares contribution and limitation layouts; `ModelMetrics` uses a caption and scoped table headers for restrained comparisons.

`ProjectNavigation` derives previous/next links from published projects in shared data order: Habit Flow → Hate Speech → Tomato Leaf, without wrapping. Back to Selected Work and external project links remain available. The metadata grid accommodates the Hate Speech record without inventing a team size.

## Phase 5 features

- **CV:** centered, clickable first-page preview rendered from the original PDF at 240 DPI with only the phone digits hidden by a solid sidebar-colored mask. The 1985 × 2808 lossless WebP (362,768 bytes) uses Next Image without lossy recompression. Open PDF, Download PDF, and the accessible preview link use the unchanged original PDF; no embedded browser PDF controls or client PDF library.
- **Demo:** `public/media/habit-flow-demo.mp4` is a silent 26-second excerpt from source time 01:38–02:04, showing weekly progress and a daily check-in. H.264, yuv420p, 24 fps, 1280 × 630, faststart, 407,347 bytes. Browser chrome is cropped out; no upscaling. The native player has controls, playsInline, metadata-only preload, a real poster, and nearby descriptive text. No autoplay or looping.
- **SEO:** `src/lib/metadata.ts` shares the production base `https://matthewsutiono.com`, route canonicals, descriptions, and social cards. Root title template produces clean, non-duplicated titles. Five public page URLs appear in `/sitemap.xml`; `/robots.txt` permits crawling.
- **Identity:** `src/app/icon.svg` and the matching multi-size `favicon.ico` use the MS mark. `opengraph-image.tsx` generates a static 1200 × 630 dark social image, also used by Twitter summary_large_image cards. No Twitter account is invented.
- **404:** shared navigation, footer, skip link, and a Back Home action.

Only Navbar is a Client Component. No new application dependencies or motion were added. Existing motion-safe color transitions and focus styling remain in place. Lint and TypeScript exclude ignored local source/inspection artifacts.

The source recording, inspection frames, local FFmpeg tooling, and restart backup remain under ignored `source-assets/`. Browser artifacts remain under ignored `output/playwright/` and `.playwright-cli/`. They are not deployment assets.

Manual content review: the supplied CV still names “Toxic Comment Detector.” It was deliberately not rewritten; website project stories use the approved facts. The CV preview preserves the PDF content except for the hidden phone digits; its content is not extracted into HTML or metadata.

See `docs/VALIDATION.md` for fresh Phase 5 checks and browser limitations. No deployment or DNS changes have been made.
