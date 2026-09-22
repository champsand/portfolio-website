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
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#journey" },
  { label: "Beyond Code", href: "#beyond-code" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Computer Science · Intelligent Systems",
  heading: "I like learning by building things.",
  description: "I'm Matthew, a Computer Science undergraduate at BINUS University specializing in Intelligent Systems. I enjoy exploring software, data, applied AI, and turning things I learn into something people can actually use.",
  metadata: "Jakarta, Indonesia · Computer Science · Intelligent Systems",
};

export const currently: CurrentEntry[] = [
  { number: "01", title: "Studying Computer Science", detail: "BINUS University · Intelligent Systems" },
  { number: "02", title: "Building & experimenting", detail: "Software · Data · Applied AI" },
  { number: "03", title: "Learning", detail: "Backend development · APIs · Software engineering" },
  { number: "04", title: "Looking for", detail: "Opportunities to learn, build, and collaborate" },
];

export const about = [
  "I've been curious about computers and technology for as long as I can remember. Studying Computer Science gave me a way to turn that curiosity into something more practical, learning how ideas become software, how data can be used to solve problems, and how technology can help people.",
  "Most of what I've learned has come from building projects with other people. I've explored full-stack development, machine learning, NLP, and computer vision, while also learning that good technology isn't only about making something work, it is about understanding the problem, the people using it, and the decisions behind it.",
  "I'm still learning, and that's part of what I enjoy most.",
];

export const skills: SkillGroup[] = [
  { name: "Software", items: ["Python", "JavaScript", "C", "C++", "React", "Next.js", "HTML", "CSS", "Git", "GitHub"] },
  { name: "Data & AI", items: ["Pandas", "NumPy", "Machine Learning", "NLP", "Computer Vision", "LLM / AI APIs"] },
  { name: "Databases", items: ["SQL", "MySQL", "PostgreSQL"] },
];
export const currentlyLearning = "Backend engineering, APIs, system design, and software development practices.";
export const contact = { heading: "Let's build something.", description: "I'm always interested in learning something new, collaborating with others, and turning ideas into useful things." };
