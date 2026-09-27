"use client";

import dynamic from "next/dynamic";
import { Component, useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "motion/react";
import Container from "@/components/layout/Container";
import HeroFallback from "./HeroFallback";

const HeroSceneCanvas = dynamic(() => import("./HeroSceneCanvas"), { ssr: false });
class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? null : this.props.children; }
}

export default function HeroExperience({ eyebrow, name, statement, index, scroll }: Record<"eyebrow" | "name" | "statement" | "index" | "scroll", ReactNode>) {
  const section = useRef<HTMLElement>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const reduced = useReducedMotion();
  const inView = useInView(section);
  const [visible, setVisible] = useState(true);
  const [compact, setCompact] = useState(true);
  const [ready, setReady] = useState(false);
  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end start"] });
  const eyebrowY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const indexY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const statementOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.1]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0]);
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.12]);
  useEffect(() => {
    const media = window.matchMedia("(max-width: 900px)");
    const updateSize = () => setCompact(media.matches);
    const updateVisibility = () => setVisible(!document.hidden);
    updateSize();
    updateVisibility();
    media.addEventListener("change", updateSize);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      media.removeEventListener("change", updateSize);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);
  return (
    <section ref={section} aria-labelledby="hero-heading" className="hero-section"
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse" || reduced) return;
        const rect = event.currentTarget.getBoundingClientRect();
        pointer.current.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
        pointer.current.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      }}
      onPointerLeave={() => { pointer.current.x = 0; pointer.current.y = 0; }}>
      <Container className="hero-grid">
        <div className="hero-copy">
          <motion.div style={{ y: reduced ? 0 : eyebrowY }}>{eyebrow}</motion.div>
          <motion.div style={{ y: reduced ? 0 : nameY }}>{name}</motion.div>
          <motion.div style={{ opacity: reduced ? 1 : statementOpacity }}>{statement}</motion.div>
          <motion.div style={{ y: reduced ? 0 : indexY }}>{index}</motion.div>
        </div>
        <motion.div aria-hidden="true" className="hero-visual" style={{ opacity: reduced ? 1 : sceneOpacity }}>
          <div className="hero-sculpture" data-ready={ready}>
            <HeroFallback />
            <SceneBoundary><HeroSceneCanvas progress={scrollYProgress} pointer={pointer} reduced={!!reduced} active={inView && visible} compact={compact} onReady={setReady} /></SceneBoundary>
          </div>
        </motion.div>
        <motion.div className="hero-scroll-wrap" style={{ opacity: reduced ? 1 : scrollOpacity }}>{scroll}</motion.div>
      </Container>
    </section>
  );
}

