import { projects } from "@/data/projects";
import type { Activity, JourneyEntry } from "@/types/portfolio";

export const journey: JourneyEntry[] = [
  {
    period: "Sep 2026 – Present",
    organization: "Student Advisory and Support Center, BINUS",
    role: "Academic Mentor — Special Learning Needs",
    description: "Selected through academic screening, assessment, and interview, with a mentoring-program scholarship. I mentor Algorithm Design and Analysis using examples, pseudocode, and C compiler practice, adapting the pace and materials to the learner.",
  },
  ...projects.map((project) => ({
    period: String(project.year),
    organization: project.title,
    role: project.role,
    projectSlug: project.slug,
    description: project.journeyDescription,
  })),
  {
    period: "2025 – Present",
    organization: "BINUS S-Class",
    role: "Selected Student · Top 10% academically",
    description: "Being selected puts me alongside peers whose study habits I can learn from. I value the chance to see how they approach difficult material and improve my own routine.",
  },
  {
    period: "May 2024 – July 2024",
    organization: "DJI Indonesia · Erajaya Group",
    role: "Brand Marketing Assistant",
    description: "Managing Instagram and supporting workshops and launches showed me how quickly audience interests can shift. I began thinking more about timing, communication, and the team behind a product, alongside its features.",
  },
];

export const activities: Activity[] = [
  {
    title: "Community Math Teaching",
    metadata: "Community Teaching Program · 2026",
    description: "I joined a seven-member team teaching math to about 30 fourth-grade students over five weekly sessions. I enjoyed finding ways to make the material approachable enough for them to try.",
    topics: ["Two-digit multiplication", "Division", "Reading line charts", "Reading tables", "Creating tables from data"],
    learning: "Knowing the answer was only half the work. The harder part was helping students feel ready to engage with it. I had to adjust explanations, be patient, and find examples that gave them a reason to try.",
  },
  {
    title: "Bina Nusantara Computer Club (BNCC)",
    metadata: "Member · 2025 – Present",
    role: "Member",
    period: "2025 – Present",
    description: "I mainly use BNCC to stay connected to campus technology news, talks, and internship opportunities. It gives me a wider view of what's happening beyond my classes.",
  },
];
