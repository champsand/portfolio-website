"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** One entry sequence; content stays visible without JavaScript. */
export default function DiagramReveal({ children, className }: { children: ReactNode; className: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    element.dataset.reveal = "pending";
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      element.dataset.reveal = "entered";
      observer.disconnect();
    }, { threshold: 0.2 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={className}>{children}</div>;
}
