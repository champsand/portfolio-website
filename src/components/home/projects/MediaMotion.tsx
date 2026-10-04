"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useReducedMotionPreference } from "@/lib/useReducedMotionPreference";

export default function MediaMotion({ children }: { children: ReactNode }) {
  const target = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotionPreference();
  const { scrollYProgress } = useScroll({ target, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, .65, 1], [20, 0, -12]);
  const scale = useTransform(scrollYProgress, [0, .6], [.96, 1]);
  const rotate = useTransform(scrollYProgress, [0, .6], [-1, 0]);
  return <div ref={target}><motion.div className="product-motion" style={reduced ? undefined : { y, scale, rotate }}>{children}</motion.div></div>;
}
