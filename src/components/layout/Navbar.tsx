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
    <header className="sticky top-0 z-50 border-b border-line bg-background"
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
        <div className="flex h-18 items-center justify-between gap-6">
          <Link href="/" aria-label={`${site.name}, home`} className="inline-flex min-h-11 min-w-11 shrink-0 items-center font-display text-2xl font-semibold tracking-[-0.06em]" onClick={() => setOpen(false)}>
            <span aria-hidden="true">{site.initials}<span className="text-accent">&deg;</span></span>
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
            {navigation.map((link) => <Link key={link.href} href={`/${link.href}`} className="nav-link">{link.label}</Link>)}
            <div className="ml-2 flex items-center gap-4 border-l border-line pl-6">
              <Link href={site.cv.route} className="nav-link gap-2">CV <ArrowUpRight size={14} aria-hidden="true" /></Link>
              <ExternalLink href={github.href} aria-label="Matthew Sutiono on GitHub (opens in a new tab)" className="icon-link"><Github size={19} aria-hidden="true" /></ExternalLink>
            </div>
          </nav>
          <button ref={toggleRef} type="button" className="icon-link lg:hidden" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
        <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!open} className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line pb-6 pt-3 lg:hidden">
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
