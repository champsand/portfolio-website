"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Github from "@/components/ui/GithubIcon";
import { github, navigation, site } from "@/data/site";
import Container from "./Container";
import ExternalLink from "@/components/ui/ExternalLink";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/95 backdrop-blur-md"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggleRef.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}>
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <Link href="/" aria-label="Matthew Sutiono, home" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
            <span className="inline-flex items-baseline font-mono text-base font-semibold tracking-[-0.08em]"> {site.initials}<span className="text-accent">.</span></span>
            <span className="text-sm font-medium tracking-tight">{site.name}</span>
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
            {navigation.map((link) => <Link key={link.href} href={`/${link.href}`} className="nav-link">{link.label}</Link>)}
            <Link href={site.cv.route} className="inline-flex h-10 items-center gap-2 rounded-sm border border-line px-4 text-sm text-secondary hover:border-secondary hover:text-foreground">View CV <ArrowUpRight size={14} aria-hidden="true" /></Link>
            <ExternalLink href={github.href} aria-label="Matthew Sutiono on GitHub (opens in a new tab)" className="icon-link"><Github size={19} aria-hidden="true" /></ExternalLink>
          </nav>
          <button ref={toggleRef} type="button" className="icon-link lg:hidden" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
        <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!open} className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-line pb-6 pt-3 lg:hidden">
          {navigation.map((link) => <Link key={link.href} href={`/${link.href}`} className="nav-link flex min-h-12 items-center" onClick={() => setOpen(false)}>{link.label}</Link>)}
          <div className="mt-3 flex items-center justify-between border-t border-line pt-4">
            <Link href={site.cv.route} className="text-link" onClick={() => setOpen(false)}>View CV <ArrowUpRight size={14} aria-hidden="true" /></Link>
            <ExternalLink href={github.href} className="icon-link" aria-label="Matthew Sutiono on GitHub (opens in a new tab)" onClick={() => setOpen(false)}><Github size={20} aria-hidden="true" /></ExternalLink>
          </div>
        </nav>
      </Container>
    </header>
  );
}
