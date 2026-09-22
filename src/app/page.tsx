import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Currently from "@/components/home/Currently";
import About from "@/components/home/About";
import Projects from "@/components/home/Projects";
import Skills from "@/components/home/Skills";
import Journey from "@/components/home/Journey";
import BeyondCode from "@/components/home/BeyondCode";
import Certifications from "@/components/home/Certifications";
import Contact from "@/components/home/Contact";
import { pageMetadata, siteDescription } from "@/lib/metadata";

export const metadata = { ...pageMetadata("Matthew Sutiono", siteDescription, "/"), title: { absolute: "Matthew Sutiono" } };

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Currently />
        <About />
        <Projects />
        <Skills />
        <Journey />
        <BeyondCode />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
