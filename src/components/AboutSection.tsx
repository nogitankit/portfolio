import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 grid-paper">
      {/* Top border line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-border" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left column */}
        <div className="reveal">
          {/* Label */}
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary mb-3">
            {"/// ABOUT"}
          </p>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold leading-[0.95] tracking-tight mb-10">
            Hello, I&apos;m <span className="font-display text-primary">Ankit</span>
            <span className="text-primary">.</span>
          </h2>

          {/* Metadata rows */}
          <div className="space-y-0 border-t border-border">
            {[
              { label: "LANG", value: "HI · EN" },
              { label: "STACK", value: "NEXT · REACT · SQL" },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between py-4 border-b border-border font-mono text-[11px] uppercase tracking-[0.25em]"
              >
                <span className="text-muted-foreground">{row.label}</span>
                <span className="text-foreground font-medium">{row.value}</span>
              </div>
            ))}
            <div className="flex items-center justify-between py-4 border-b border-border font-mono text-[11px] uppercase tracking-[0.25em]">
              <span className="text-muted-foreground">STATUS</span>
              <span className="flex items-center gap-1.5 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-green-600 dark:text-green-400">
                  AVAILABLE
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="reveal flex flex-col justify-center">
          <p className="text-lg leading-relaxed mb-4">
            I am a full-stack developer obsessed with building complex{" "}
            <strong>digital ecosystems.</strong> I don&apos;t just build apps—I
            design infrastructures that feel real.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Powered by <strong>Node.js</strong>, <strong>Next.js</strong>,{" "}
            <strong>PostgreSQL </strong>integrating advanced external APIs and
            deploying automated, self-hosted environments via
            <strong> Docker</strong>.
          </p>
          <p className="font-mono text-sm text-muted-foreground">
            🚀 If you can imagine it as a system, I can build it.
          </p>
        </div>
      </div>
    </section>
  );
}
