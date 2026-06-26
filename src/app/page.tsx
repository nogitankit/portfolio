"use client";

import React, { useEffect, useRef } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MarqueeSection from "@/components/MarqueeSection";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // === Custom cursor ===
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
    };
    window.addEventListener("mousemove", onMouseMove);

    // === Scroll reveal (IntersectionObserver) ===
    const revealElements = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    revealElements.forEach((el) => revealObserver.observe(el));

    // === Magnetic button effect ===
    const magneticEls = document.querySelectorAll(".magnetic");
    const magneticHandlers = new Map<Element, (e: MouseEvent) => void>();

    magneticEls.forEach((el) => {
      const handler = (e: MouseEvent) => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) * 0.15;
        const dy = (e.clientY - cy) * 0.15;
        (el as HTMLElement).style.setProperty("--mx", `${dx}px`);
        (el as HTMLElement).style.setProperty("--my", `${dy}px`);
      };
      (el as HTMLElement).addEventListener("mousemove", handler);
      (el as HTMLElement).addEventListener("mouseleave", () => {
        (el as HTMLElement).style.setProperty("--mx", "0px");
        (el as HTMLElement).style.setProperty("--my", "0px");
      });
      magneticHandlers.set(el, handler);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      revealObserver.disconnect();
      magneticEls.forEach((el) => {
        const handler = magneticHandlers.get(el);
        if (handler) {
          (el as HTMLElement).removeEventListener("mousemove", handler);
        }
      });
    };
  }, []);

  return (
    <>
      {/* Custom cursor dot */}
      <div ref={cursorRef} id="cursor-dot" className="hidden lg:block" />

      <Header />
      <main className="flex-1">
        <HeroSection />
        <MarqueeSection />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
