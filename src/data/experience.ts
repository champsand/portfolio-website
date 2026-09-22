import { projects } from "@/data/projects";
import type { Activity, JourneyEntry } from "@/types/portfolio";

export const journey: JourneyEntry[] = [
  ...projects.map((project) => ({
    period: String(project.year),
    organization: project.title,
    role: project.role,
    projectSlug: project.slug,
    description: project.journeyDescription,
  })),
  {
    period: "May 2024 – July 2024",
    organization: "DJI Indonesia · Erajaya Group",
    role: "Brand Marketing Assistant",
    description: "Managed DJI Indonesia's Instagram presence and supported product workshops and new-product launch events, gaining experience in communication, event coordination, and audience feedback.",
  },
];

export const activities: Activity[] = [
  {
    title: "Community Math Teaching",
    metadata: "Community Teaching Program · 2026",
    description: "Worked in a seven-member team to teach mathematics to approximately 30 fourth-grade students across five weekly sessions.",
    topics: ["Two-digit multiplication", "Division", "Reading line charts", "Reading tables", "Creating tables from data"],
    learning: "Helping someone understand something requires more than knowing the answer. Preparing the right materials, adapting explanations, being patient, and building a positive connection with students were just as important.",
  },
  {
    title: "BINUS S-Class",
    metadata: "Selected Student · BINUS University",
    description: "Selected among the top 10% of students based on academic performance and participates in additional academic sessions, guest talks, and guided technology activities.",
  },
  {
    title: "Bina Nusantara Computer Club (BNCC)",
    metadata: "Member · 2025 – Present",
    role: "Member",
    period: "2025 – Present",
    description: "A technology-focused community where I participate in gatherings, talks, and knowledge-sharing activities.",
  },
];
