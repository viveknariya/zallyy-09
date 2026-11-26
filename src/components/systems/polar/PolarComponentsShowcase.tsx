"use client";

import { useState } from "react";

const swatches = [
  { name: "Canvas", hex: "#FFFFFF", cls: "bg-background border border-border" },
  { name: "Sidebar Surface", hex: "#F7F7F8", cls: "bg-surface border border-border" },
  { name: "Muted Pill", hex: "#F4F4F5", cls: "bg-surface-muted border border-border" },
  { name: "Obsidian Ink", hex: "#09090B", cls: "bg-foreground" },
  { name: "Electric Blue", hex: "#0062FF", cls: "bg-accent" },
  { name: "Soft Blue", hex: "#DBEAFE", cls: "bg-accent-soft" },
];

/**
 * Interactive Polar tokens, pill buttons, rounded-2xl cards, and segmented controls showcase.
 */
export function PolarComponentsShowcase() {
  const [range, setRange] = useState("30d");

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 space-y-14">
      <div>
        <span className="inline-block rounded-full bg-surface-muted px-3 py-1 text-xs font-medium text-foreground">
          Polar Design System
        </span>
        <h1 className="mt-4 text-4xl font-medium tracking-tight text-foreground">
          Polar Component Library
        </h1>
        <p className="mt-2 text-base text-muted">
          Soft rounded-2xl surfaces, black pill CTAs, and crisp zinc hairlines.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold text-foreground">Color Tokens</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {swatches.map((s) => (
            <div key={s.name} className="space-y-2">
              <div className={`h-20 w-full rounded-2xl ${s.cls}`} />
              <p className="text-xs font-semibold text-foreground">{s.name}</p>
              <p className="font-mono text-xs text-muted">{s.hex}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground">Pill Buttons &amp; Segmented Controls</h2>
        <div className="mt-6 flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-background p-8">
          <button
            type="button"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background cursor-pointer"
          >
            Primary Pill
          </button>
          <button
            type="button"
            className="rounded-full bg-surface-muted px-5 py-2.5 text-sm font-medium text-foreground cursor-pointer"
          >
            Secondary Pill
          </button>
          <button
            type="button"
            className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground cursor-pointer"
          >
            Outline Pill
          </button>
          <div className="inline-flex rounded-full border border-border bg-surface p-0.5">
            {["12m", "30d", "Today"].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRange(r)}
                className={`rounded-full px-3 py-1 text-xs font-medium cursor-pointer ${
                  range === r
                    ? "bg-background text-foreground border border-border"
                    : "text-muted"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
