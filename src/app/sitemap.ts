import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteUrl } from "@/lib/metadata";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", ...projects.flatMap((project) => project.caseStudyHref ? [project.caseStudyHref] : []), "/cv"]
    .map((path) => ({ url: new URL(path, siteUrl).href }));
}

