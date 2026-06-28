"use client";
import { Terminal } from "@/components/ui/terminal";
import { AsciiArt } from "@/components/ui/ascii-art";
import SideRays from "@/components/ui/side-rays";
import React from "react";
import { AsteriskIcon, ArrowUpRightIcon, GithubIcon, PingDot, LinkedinIcon, MailIcon } from "./icons";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-8 overflow-hidden grid-paper"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-32 w-[500px] h-[500px] rounded-full bg-primary/15 blur-[140px] blob-drift opacity-60" />
        <div className="absolute -bottom-12 -left-20 w-[450px] h-[450px] rounded-full bg-accent/15 blur-[140px] blob-drift-slow opacity-60" />

        {/* SideRays background effect */}
        <div className="absolute inset-0 w-full h-full opacity-35">
          <SideRays
            speed={2.6}
            rayColor1="#ff4800"
            rayColor2="#afb766"
            intensity={2.2}
            spread={2}
            origin="top-left"
            tilt={39}
            saturation={1.5}
            blend={0.75}
            falloff={1.6}
            opacity={1.0}
          />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Avatar Card */}
        <div className="relative reveal">
          {/* Card */}
          <div className="relative bg-card border-2 border-foreground shadow-hard p-5 max-w-md hover-lift">
            {/* Floating asterisk */}
            <div className="absolute -top-3 -right-3 z-10">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center spin-slow">
                <AsteriskIcon className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
            {/* Card header */}
            <div className="flex items-center justify-between mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              <span>ID · 2026</span>
              <span className="flex items-center gap-1.5">
                <span>
                  <PingDot />
                </span>
                <span className="text-accent font-medium">ONLINE</span>
              </span>
            </div>

            {/* Avatar image */}
            <AsciiArt
              src="/assets/okay.png"
              resolution={75}
              charset="standard"
              color="#f97316"
              inverted
              animated={false}
              className="
              mx-auto aspect-square w-full max-w-sm bg-neutral-950 -rotate-3
              animate-float 
              "
            />

            {/* Metadata grid */}
            <div className="mt-5 grid grid-cols-2 gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.25em]">
              <div>
                <span className="text-muted-foreground">NAME</span>
                <p className="font-bold text-foreground mt-0.5">ANKIT SHARMA</p>
              </div>
              <div>
                <span className="text-muted-foreground">ROLE</span>
                <p className="font-bold text-foreground mt-0.5">FULL STACK</p>
              </div>
              <div className="mt-2">
                <span className="text-muted-foreground">FOCUS</span>
                <p className="font-bold text-foreground mt-0.5">WEB APPS</p>
              </div>
              <div className="mt-2">
                <span className="text-muted-foreground">YEARS</span>
                <p className="font-bold text-primary mt-0.5">UNDERGRAD</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Hero Text */}
        <div className="reveal">
          {/* Label */}
          <p className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            <span className="w-24 h-px bg-white/30" />
            PORTFOLIO · VOL. 01
          </p>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-7xl font-bold leading-[0.95] tracking-tight mb-10">
            Builder
            <br />
            <span className="font-display text-primary text-5xl sm:text-7xl ">
              of
            </span>{" "}
            <span className="text-stroke">systems</span>
            <span className="text-primary">.</span>
          </h1>

          {/* Description */}
          <p className="text-lg leading-relaxed text-foreground/50 mb-10 max-w-xl">
            Hello <span className="wave">👋</span> i&apos;m{" "}
            <strong className="text-foreground">Ankit</strong>. I build
            end-to-end applications and robust backend architectures.{" "}
            <strong className="text-foreground">I engineer</strong> — end-to-end
            web applications from secure authentication and relational databases
            to automated, self-hosted infrastructure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="magnetic inline-flex items-center gap-2 bg-foreground text-background font-mono text-[11px] uppercase tracking-[0.25em] px-6 py-3 border-2 border-foreground transition-all duration-300 hover:bg-primary hover:border-primary hover:text-primary-foreground"
            >
              VIEW WORK
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/nogitankit"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic inline-flex items-center gap-2 bg-transparent text-foreground font-mono text-[11px] uppercase tracking-[0.25em] px-6 py-3 border-2 border-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              <GithubIcon className="w-4 h-4" />
              GITHUB
            </a>
            <a
              href="https://linkedin.com/in/notankitsharma"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic inline-flex items-center justify-center w-11 h-11 rounded-full border-2 border-foreground bg-transparent text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="mailto:mail@m4yo.dev"
              className="magnetic inline-flex items-center justify-center w-11 h-11 rounded-full border-2 border-foreground bg-transparent text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
              aria-label="Email"
            >
              <MailIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
