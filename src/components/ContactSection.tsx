"use client";

import React, { useState } from "react";
import {
  AsteriskIcon,
  MessageCircleIcon,
  CopyIcon,
  ArrowUpRightIcon,
} from "./icons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("eqox_");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-secondary/50 grid-paper overflow-hidden"
    >
      {/* Top gradient transition */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-background to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Label */}
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-3 reveal">
          {"/// CONTACT"}
        </p>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[0.9] tracking-tight mb-12 reveal">
          Got an <span className="font-display text-primary">idea</span>?
          <br />
          <span className="text-stroke">Let&apos;s talk</span>
        </h2>

        {/* Discord card */}
        <div className="reveal relative bg-card border-2 border-foreground shadow-hard p-6 sm:p-8 max-w-3xl">
          {/* Floating asterisk */}
          <div className="absolute -top-4 -right-4 z-10">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center spin-slow">
              <AsteriskIcon className="w-4 h-4 text-primary-foreground" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            {/* Left: Discord info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center">
                <MessageCircleIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  DISCORD
                </p>
                <p className="text-xl font-bold">eqox_</p>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleCopy}
                className="magnetic inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] px-5 py-2.5 border-2 border-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
              >
                <CopyIcon className="w-4 h-4" />
                {copied ? "COPIED!" : "COPY"}
              </button>
              <a
                href="https://discord.com/users/1055829238768472114"
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono text-[11px] uppercase tracking-[0.25em] px-5 py-2.5 border-2 border-primary rounded-full transition-all duration-300 hover:bg-primary/80"
              >
                OPEN PROFILE
                <ArrowUpRightIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
