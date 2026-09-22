import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
export default function NotFound() {
  return <>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <Navbar />
    <main id="main-content" tabIndex={-1}>
      <Container className="flex min-h-[65svh] flex-col items-start justify-center py-20">
        <p className="eyebrow text-accent">404</p>
        <h1 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.04em] md:text-6xl">This page wandered off.</h1>
        <p className="mt-6 max-w-lg text-lg leading-8 text-secondary">The page you&apos;re looking for doesn&apos;t exist or may have moved.</p>
        <Link href="/" className="button-primary mt-8">Back Home</Link>
      </Container>
    </main>
    <Footer />
  </>;
}

