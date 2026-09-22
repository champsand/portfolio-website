export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteIdentity {
  name: string;
  initials: string;
  location: string;
  email: string;
  education: { university: string; degree: string; specialization: string; period: string; gpa: string };
  socials: SocialLink[];
  cv: { route: string; pdf: string };
}

export interface Project {
  slug: string;
  caseStudyHref?: string;
  technologyGroups?: SkillGroup[];
  title: string;
  year: number;
  category: string;
  role: string;
  teamSize?: number;
  description: string;
  github: string;
  liveUrl?: string;
  repositoryUrl?: string;
  image: string;
  imageAlt: string;
  homepageTags: string[];
  journeyDescription: string;
  technologies: string[];
  contributions: string[];
  challenge: string;
  approach: string;
  learning: string;
  limitations: string[];
  metrics?: { label: string; value: string }[];
}

export interface JourneyEntry {
  period: string;
  organization: string;
  role: string;
  description?: string;
  projectSlug?: string;
}

export interface SkillGroup { name: string; items: string[] }
export interface Activity {
  title: string;
  metadata: string;
  role?: string;
  period?: string;
  description: string;
  learning?: string;
  topics?: string[];
}
export interface Certification { issuer: string; title: string; year: number; credentialUrl?: string; credentialId?: string }
export interface CurrentEntry { number: string; title: string; detail: string }
