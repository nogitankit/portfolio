import React from "react";
import { AsteriskIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="relative border-t-2 border-foreground bg-background">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          © 2026 <strong className="text-foreground">mayo_</strong> · built from scratch
        </p>
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em]">
          <AsteriskIcon className="w-3.5 h-3.5 text-primary spin-slow" />
          <span className="text-muted-foreground">system online</span>
        </div>
      </div>
    </footer>
  );
}
