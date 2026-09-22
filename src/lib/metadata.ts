import type { Metadata } from "next";
import { site } from "@/data/site";
export const siteUrl = "https://matthewsutiono.vercel.app/";
export const siteDescription = "Computer Science undergraduate at BINUS University specializing in Intelligent Systems, exploring software development, data, and applied AI.";
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const socialTitle = title === site.name ? title : `${title} — ${site.name}`;
  return {
    title, description, alternates: { canonical: path },
    openGraph: { title: socialTitle, description, url: path, siteName: site.name, type: "website", locale: "en_US", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Matthew Sutiono — Computer Science · Intelligent Systems. Software · Data · Applied AI." }] },
    twitter: { card: "summary_large_image", title: socialTitle, description, images: [{ url: "/opengraph-image", alt: "Matthew Sutiono — Computer Science · Intelligent Systems. Software · Data · Applied AI." }] },
  };
}
