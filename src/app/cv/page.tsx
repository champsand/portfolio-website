import { ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import ExternalLink from "@/components/ui/ExternalLink";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("CV", "View Matthew Sutiono's CV — Computer Science undergraduate at BINUS University specializing in Intelligent Systems.", "/cv");
export default function CVPage() {
  return <>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <Navbar />
    <main id="main-content" tabIndex={-1}>
      <Container className="py-16 md:py-24">
        <p className="eyebrow text-accent">CV</p>
        <h1 className="mt-5 text-5xl font-medium leading-tight tracking-[-0.055em] md:text-7xl">{site.name}</h1>
        <p className="mt-6 max-w-[660px] text-lg leading-8 text-secondary">Computer Science undergraduate specializing in Intelligent Systems, with interests in software development, data, and applied AI.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <ExternalLink href={site.cv.pdf} className="button-primary">Open PDF<ArrowUpRight size={17} aria-hidden="true" /></ExternalLink>
          <a href={site.cv.pdf} download="Matthew-Sutiono-CV.pdf" className="button-secondary">Download PDF<Download size={17} aria-hidden="true" /></a>
        </div>
        <section aria-labelledby="cv-viewer-heading" className="mt-12 md:mt-16">
          <h2 id="cv-viewer-heading" className="sr-only">CV preview</h2>
          <figure className="mx-auto max-w-[900px]">
            <ExternalLink href={site.cv.pdf} aria-label="Open Matthew Sutiono's CV as PDF (opens in a new tab)" className="block rounded-sm border border-line bg-surface p-2 sm:p-3">
              {/* Preserve the compact lossless render so document text is not recompressed. */}
              <Image src="/images/cv/matthew-sutiono-cv-preview.webp" width={1985} height={2808}
                alt="First-page preview of Matthew Sutiono's CV."
                unoptimized className="h-auto w-full" />
            </ExternalLink>
            <figcaption className="mt-4 text-center text-xs leading-6 text-secondary">Preview of the CV. Open the PDF for full resolution.</figcaption>
          </figure>
        </section>
      </Container>
    </main>
    <Footer />
  </>;
}
