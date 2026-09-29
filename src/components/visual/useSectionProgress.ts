"use client";

import { useEffect, useRef } from "react";
import { useScroll } from "motion/react";
import { sections, type VisualState } from "./visualStates";

export type ScrollSample = {
  from: VisualState; to: VisualState; mix: number; sectionProgress: number; globalProgress: number;
  scroll: number; width: number; height: number;
  hero: { x: number; y: number; height: number; bottom: number };
  contact: { x: number; y: number; height: number };
};

export function useSectionProgress(onChange: (sample: ScrollSample) => void) {
  const sample = useRef<ScrollSample>({ from:"hero", to:"hero", mix:0, sectionProgress:0, globalProgress:0, scroll:0, width:1, height:1, hero:{x:0,y:0,height:0,bottom:0}, contact:{x:0,y:0,height:0} });
  const { scrollY } = useScroll();
  useEffect(() => {
    const elements = sections.flatMap(section => {
      const element = document.getElementById(section.id);
      return element ? [{ ...section, element, top:0 }] : [];
    });
    let maxScroll = 1;
    let contactFadeStart = 0;
    let contactFadeEnd = 1;
    const update = (scroll: number) => {
      const value = sample.current;
      value.scroll = scroll;
      value.globalProgress = Math.min(1, scroll / maxScroll);
      let index = 0;
      while (index < elements.length - 1 && scroll >= elements[index + 1].top) index++;
      const current = elements[index];
      const next = elements[index + 1] ?? current;
      if (!current) return;
      const progress = Math.max(0, Math.min(1, (scroll - current.top) / Math.max(1, next.top - current.top)));
      value.from = current.state;
      value.to = next.state;
      value.sectionProgress = progress;
      // Hold a composition, then morph across the last 55% of its measured interval.
      const hold = current.state === "contact" ? .7 : current.state === "credentials" ? .15 : .4;
      const transition = Math.max(0, (progress - hold) / (1 - hold));
      value.mix = transition * transition * (3 - 2 * transition);
      if (current.state === "contact" || current.state === "footer") {
        // A compact ending may share a viewport with Contact. Reaching the page
        // end alone must not ghost the sculpture while the reader is still here.
        const closing = Math.max(0, Math.min(1, (scroll - contactFadeStart) / Math.max(1, contactFadeEnd - contactFadeStart)));
        value.from = "contact";
        value.to = "footer";
        value.mix = closing * closing * (3 - 2 * closing);
      }
      onChange(value);
    };
    const measure = () => {
      const value = sample.current;
      value.width = window.innerWidth;
      value.height = window.innerHeight;
      maxScroll = Math.max(1, document.documentElement.scrollHeight - value.height);
      elements.forEach((entry, i) => {
        const top = entry.element.getBoundingClientRect().top + window.scrollY;
        entry.top = i === 0 ? 0 : entry.state === "footer" ? maxScroll : Math.min(maxScroll - (entry.state === "contact" ? value.height * .3 : 0), Math.max(0, top - value.height * (entry.state === "contact" || entry.state === "credentials" ? .65 : .25)));
      });
      // Short closing sections can share a viewport. Keep anchors ordered even after
      // content edits, reserving a scroll interval for every preceding composition.
      for (let i = elements.length - 2; i > 0; i--) {
        elements[i].top = Math.max(0, Math.min(elements[i].top, elements[i+1].top - Math.min(120,value.height*.12)));
      }
      const hero = document.querySelector(".hero-sculpture")?.getBoundingClientRect();
      const heroSection = document.getElementById("hero")?.getBoundingClientRect();
      if (hero) value.hero = { x:hero.left + hero.width / 2, y:hero.top + window.scrollY + hero.height / 2, height:hero.height, bottom:(heroSection?.bottom ?? hero.bottom) + window.scrollY };
      const contact = document.querySelector(".contact-composition")?.getBoundingClientRect();
      const heading = document.getElementById("contact-heading")?.getBoundingClientRect();
      const actions = document.querySelector(".contact-actions")?.getBoundingClientRect();
      if (contact && actions) {
        // Content-relative thresholds need no spacer or arbitrary page pixels.
        // On tall screens the complete fade may lie beyond available scrolling.
        contactFadeStart = actions.bottom + window.scrollY - value.height * .95;
        contactFadeEnd = Math.max(maxScroll, actions.bottom + window.scrollY - value.height * .15);
      }
      if (contact && heading) value.contact = { x:contact.left + contact.width * .76, y:heading.top + window.scrollY + heading.height / 2, height:heading.height * 1.6 };
      update(window.scrollY);
    };
    const observer = new ResizeObserver(measure);
    elements.forEach(({element}) => observer.observe(element));
    observer.observe(document.body);
    measure();
    const unsubscribe = scrollY.on("change", update);
    window.addEventListener("resize", measure);
    return () => { observer.disconnect(); unsubscribe(); window.removeEventListener("resize", measure); };
  }, [onChange, scrollY]);
  return sample;
}
