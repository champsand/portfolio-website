import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { siteUrl, siteDescription } from "@/lib/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: site.name, template: `%s — ${site.name}` },
  description: siteDescription,
  keywords: ["Matthew Sutiono", "Computer Science", "Intelligent Systems", "Software Development", "Machine Learning", "NLP", "Computer Vision", "BINUS University"],
  openGraph: { siteName: site.name, title: site.name, description: siteDescription, type: "website", locale: "en_US" },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body id="top" className="min-h-full">{children}</body>
    </html>
  );
}
