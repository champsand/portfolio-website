import type { CurrentEntry, SiteIdentity, SkillGroup } from "@/types/portfolio";

export const site: SiteIdentity = {
  name: "Matthew Sutiono",
  initials: "MS",
  location: "Jakarta, Indonesia",
  email: "matthewsutiono@gmail.com",
  education: { university: "BINUS University", degree: "Bachelor of Computer Science", specialization: "Intelligent Systems", period: "2024 – Present", gpa: "3.91 / 4.00" },
  socials: [
    { label: "GitHub", href: "https://github.com/champsand" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/matt06/" },
    { label: "Instagram", href: "https://www.instagram.com/matt.stno/" },
  ],
  cv: { route: "/cv", pdf: "/cv/Matthew-Sutiono-CV.pdf" },
};

export const github = site.socials.find((link) => link.label === "GitHub")!;

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "CS / Intelligent Systems · Jakarta",
  firstName: "Matthew",
  lastName: "Sutiono",
  description: "I make progress by keeping at it.",
  supportingCopy: "I'm a Computer Science undergraduate specializing in Intelligent Systems. Real projects teach me what theory leaves open: how data, AI, and code become useful products, and how people make them better.",
  index: "01",
  concepts: ["Ideas", "Data", "Code", "People"],
  scrollLabel: "Scroll to explore",
};

export const currently: CurrentEntry[] = [
  { number: "01", title: "Studying", detail: "Computer Science · Intelligent Systems" },
  { number: "02", title: "Exploring", detail: "Deep Learning · Data · Applied AI" },
  { number: "03", title: "Growing", detail: "Communication · Leadership · Product Thinking" },
  { number: "04", title: "Looking for", detail: "Internships where I can learn, contribute, and work closely with people" },
];

export const projectsIntro = { opening: "Ideas become decisions", closing: "when I try to build them." };
export const aboutHeading = { opening: "I like a clear plan, and room to", emphasis: "rethink it." };
export const about = [
  "Watching Iron Man as a kid left me wondering how technology could extend what ordinary people can do. Studying Computer Science hasn't always been easy, but I want to understand the technology changing our lives. I chose Intelligent Systems to understand AI beyond just using it.",
  "I learn through projects and conversation. A working implementation exposes edge cases that a neat explanation can miss; talking an idea through helps me see where my understanding stops. I use AI as a tool, while learning enough to question its output and make my own decisions.",
  "In group projects, I often take the lead because I enjoy turning deadlines into a plan, dividing work early, and listening to everyone's ideas. I also try to protect my attention: I usually leave my phone outside my room, so getting started depends less on willpower.",
  "My range is growing. Now I want to give that range more depth.",
];

export const skills: SkillGroup[] = [
  { name: "Software", items: ["Python", "TypeScript", "JavaScript", "C", "C++", "Node.js", "Express", "React", "Next.js", "HTML", "CSS", "Git", "GitHub"] },
  { name: "Data & AI", items: ["Pandas", "NumPy", "Scikit-learn", "Machine Learning", "NLP", "Computer Vision", "LLM / AI APIs"] },
  { name: "Databases", items: ["SQL", "MySQL", "PostgreSQL", "Prisma"] },
];
export const currentlyLearning = "Python is the language I return to most. I'm comfortable with databases and backend work, and I'm going deeper into data and machine learning.";
export const contact = { heading: "Good ideas get better when they're shared.", description: "I'd like to hear what you're working on, talk through a product or technology question, or exchange perspectives. I'm also open to internships where I can contribute and learn alongside a team." };
