"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useReducedMotionPreference } from "@/lib/useReducedMotionPreference";
import Container from "@/components/layout/Container";
import HeroFallback from "./HeroFallback";

export default function HeroExperience({ eyebrow, name, statement, index, scroll }: Record<"eyebrow" | "name" | "statement" | "index" | "scroll", ReactNode>) {
  const section = useRef<HTMLElement>(null);
  const reduced = useReducedMotionPreference();
  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end start"] });
  const eyebrowY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const indexY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const statementOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.1]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0]);
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.12]);
  return (
    <section id="hero" ref={section} aria-labelledby="hero-heading" className="hero-section">
      <Container className="hero-grid">
        <div className="hero-copy">
          <motion.div style={{ y: reduced ? 0 : eyebrowY }}>{eyebrow}</motion.div>
          <motion.div style={{ y: reduced ? 0 : nameY }}>{name}</motion.div>
          <motion.div style={{ opacity: reduced ? 1 : statementOpacity }}>{statement}</motion.div>
          <motion.div style={{ y: reduced ? 0 : indexY }}>{index}</motion.div>
        </div>
        <motion.div aria-hidden="true" className="hero-visual" style={{ opacity: reduced ? 1 : sceneOpacity }}>
          <div className="hero-sculpture">
            <HeroFallback />
          </div>
        </motion.div>
        <motion.div className="hero-scroll-wrap" style={{ opacity: reduced ? 1 : scrollOpacity }}>{scroll}</motion.div>
      </Container>
    </section>
  );
}

