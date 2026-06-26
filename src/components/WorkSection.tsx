"use client";

import React from "react";
import { ArrowUpRightIcon, BotIcon, GlobeIcon, CpuIcon, WalletIcon, ServerIcon } from "./icons";

const CATEGORIES = [
  {
    label: "FinTech & APIs",
    sub: "NEXT.JS · PLAID API",
    color: "blue" as const,
  },
  {
    label: "Full-Stack Portals",
    sub: "NODE.JS · POSTGRES",
    color: "green" as const,
  },
  {
    label: "AI Applications",
    sub: "REACT · GEMINI API",
    color: "orange" as const,
  },
];
const PROJECTS = [
  {
    number: "01",
    title: "KoshFlow",
    type: "FINTECH PLATFORM · OPEN BANKING",
    year: "2026",
    description:
      "A full-stack digital banking platform that aggregates financial accounts through the Plaid API. Enables secure bank linking, centralized balance monitoring, and real-time multi-institution transaction tracking.",
    tags: ["Next.js", "TypeScript", "Supabase", "Plaid API"],
    icon: "wallet" as const,
  },
  {
    number: "02",
    title: "Hostel Havoc",
    type: "FULL-STACK PORTAL · WORKFLOWS",
    year: "2026",
    description:
      "A digital complaint management portal engineered to handle scalable relational workflows. Features secure JWT/bcrypt authentication and a fully containerized architecture for managing administrative resolution states.",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    icon: "server" as const,
  },
  {
    number: "03",
    title: "ChefAI",
    type: "AI APPLICATION · LLM INTEGRATION",
    year: "2025",
    description:
      "A smart recipe generator that utilizes LLMs to process user ingredients. Implements asynchronous API handling to manage inference latency smoothly and features automated deployment with full custom domain DNS/SSL configurations.",
    tags: ["React.js", "Gemini API", "Cloudflare", "Asynchronous API"],
    icon: "cpu" as const,
  },
];

const IconMap = {
  bot: BotIcon,
  globe: GlobeIcon,
  cpu: CpuIcon,
  wallet: WalletIcon,
  server: ServerIcon,
};

export default function WorkSection() {
  return (
    <section id="work" className="relative px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-3 reveal">
          {"/// SELECTED WORK"}
        </p>

        {/* Heading row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 gap-4 reveal">
          <h2 className="text-4xl sm:text-5xl font-bold leading-[0.95] tracking-tight">
            Things I{" "}
            <span className="font-display text-primary">built.</span>
          </h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            [ 03 PROJECTS ]
          </span>
        </div>

        {/* Category cards */}
        <div className="hl-cards sm:!flex-row sm:!grid sm:!grid-cols-3 mb-12 reveal">
          {CATEGORIES.map((cat) => (
            <div key={cat.label} className={`hl-card ${cat.color}`}>
              <span className="tip">{cat.label}</span>
              <span className="second-text">{cat.sub}</span>
            </div>
          ))}
        </div>

        {/* Project list */}
        <div className="flex flex-col gap-6">
          {PROJECTS.map((project) => {
            const Icon = IconMap[project.icon];
            return (
              <article
                key={project.number}
                className="reveal group relative bg-card border-2 border-foreground shadow-hard hover-lift p-6 sm:p-8"
              >
                <div className="flex items-start gap-6">
                  {/* Number */}
                  <span className="font-display text-5xl sm:text-7xl text-primary leading-none hidden sm:block">
                    {project.number}
                  </span>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-3 mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold">
                        {project.title}
                      </h3>
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                        — {project.type}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground mb-3 max-w-2xl">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] uppercase tracking-wider px-3 py-1 border border-border rounded-full text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Year + Arrow */}
                  <div className="flex flex-col items-end gap-4 shrink-0">
                    <span className="font-mono text-sm font-bold">
                      {project.year}
                    </span>
                    <div className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground group-hover:rotate-45">
                      <ArrowUpRightIcon className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
