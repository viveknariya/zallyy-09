"use client";

import { useState } from "react";

const swatches = [
  { name: "Canvas Dark", hex: "#18181A", cls: "bg-background border border-border" },
  { name: "Surface", hex: "#1E1E21", cls: "bg-surface border border-border" },
  { name: "Surface Muted", hex: "#26262A", cls: "bg-surface-muted border border-border" },
  { name: "Foreground", hex: "#F4F4F5", cls: "bg-foreground" },
  { name: "Cron Vermilion", hex: "#FF5416", cls: "bg-accent" },
  { name: "Vermilion Hover", hex: "#E0440C", cls: "bg-accent-strong" },
];

/**
 * Interactive Cron tokens, vermilion pill CTAs, keycap badges, and calendar event blocks.
 */
export function CronComponentsShowcase() {
  const [view, setView] = useState("Week");

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 space-y-14">
      <div>
        <span className="inline-block rounded-md bg-accent/15 px-3 py-1 font-mono text-xs font-medium text-accent border border-accent/40">
          Cron Design System
        </span>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground">
          Cron Component Library
        </h1>
        <p className="mt-2 text-base text-muted">
          Neutral dark grid surfaces, vermilion #FF5416 focal accents, and keyboard-first controls.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold text-foreground">Color Tokens</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {swatches.map((s) => (
            <div key={s.name} className="space-y-2">
              <div className={`h-20 w-full rounded-lg ${s.cls}`} />
              <p className="text-xs font-semibold text-foreground">{s.name}</p>
              <p className="font-mono text-xs text-muted">{s.hex}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-foreground">
          Pill CTAs, Keycaps &amp; Segmented Switcher
        </h2>
        <div className="mt-6 flex flex-wrap items-center gap-4 rounded-xl border border-border bg-surface p-8">
          <button
            type="button"
            className="rounded-full bg-accent px-5 py-2 text-xs font-semibold text-white hover:bg-accent-strong cursor-pointer"
          >
            Download for macOS
          </button>
          <button
            type="button"
            className="rounded-full border border-accent px-5 py-2 text-xs font-semibold text-accent hover:bg-accent/10 cursor-pointer"
          >
            Outline Vermilion
          </button>
          <kbd className="rounded border border-border bg-surface-muted px-2 py-1 font-mono text-xs text-foreground">
            ⌘ K
          </kbd>
          <div className="inline-flex rounded-md border border-border bg-surface-muted p-0.5">
            {["Week", "Day"].map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setView(v)}
                className={`rounded px-3 py-1 text-xs font-medium cursor-pointer ${
                  view === v ? "bg-background text-foreground" : "text-muted"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
