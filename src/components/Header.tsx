"use client";

import React, { useEffect, useState } from "react";
import { AsteriskIcon } from "./icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a href="#top" className="flex items-center gap-2 group">
        <AsteriskIcon className="w-5 h-5 text-primary transition-transform duration-500 group-hover:rotate-180" />
        <span className="font-mono text-sm font-bold tracking-wider">
          mayo{" "}
          <span className="text-primary cursor-blink">_</span>
        </span>
      </a>

      {/* Navigation */}
      <nav className="hidden sm:flex items-center gap-1 border border-border rounded-full px-2 py-1.5 bg-background/60 backdrop-blur-sm">
        {["WORK", "ABOUT", "CONTACT"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-mono text-[11px] uppercase tracking-[0.25em] px-4 py-1.5 rounded-full transition-colors duration-200 hover:bg-foreground hover:text-background"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Invisible spacer to keep layout balanced */}
      <div className="w-10 h-10 pointer-events-none" />
    </header>
  );
}
