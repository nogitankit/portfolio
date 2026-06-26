import React from "react";
import { AsteriskIcon } from "./icons";

const MARQUEE_ITEMS = [
  "NEXT.JS",
  "REACT",
  "NODE.JS",
  "EXPRESS",
  "POSTGRESQL",
  "FULL STACK",
  "DOCKER",
  "REST API",
  "TAILWIND CSS",
  "C++",
];

export default function MarqueeSection() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section className="relative border-y-2 border-foreground bg-background py-5 overflow-hidden">
      <div className="marquee flex whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="font-display text-3xl sm:text-4xl tracking-tight mx-3.5">
              {item}
            </span>
            <AsteriskIcon className="w-6 h-6 text-primary spin-slow shrink-0 mx-3.5" />
          </span>
        ))}
      </div>
    </section>
  );
}
