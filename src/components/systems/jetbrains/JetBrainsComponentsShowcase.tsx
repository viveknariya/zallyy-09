"use client";

import { useState } from "react";

const swatches = [
  { name: "Canvas Dark", hex: "#19191C", cls: "bg-background border border-border" },
  { name: "Surface", hex: "#27282C", cls: "bg-surface border border-border" },
  { name: "Card Elevated", hex: "#303136", cls: "bg-surface-muted border border-border" },
  { name: "Primary Blue", hex: "#167DFF", cls: "bg-accent" },
  { name: "Hover Blue", hex: "#087CFA", cls: "bg-accent-strong" },
  { name: "Violet Accent", hex: "#6B57FF", cls: "bg-accent-soft" },
];

/**
 * Interactive showcase of JetBrains dark tokens, pill buttons, tabs, and JetBrains Mono specimens.
 */
export function JetBrainsComponentsShowcase() {
  const [tab, setTab] = useState("tokens");

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 space-y-14">
      <div>
        <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent border border-accent/40">
          JetBrains Design System
        </span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground">
          JetBrains Component Library
        </h1>
        <p className="mt-2 text-base text-muted">
          Dark-first developer surfaces, electric blue pill CTAs, and JetBrains Mono typography.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-foreground">Color Tokens</h2>
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
        <h2 className="text-2xl font-bold text-foreground">Pill Buttons &amp; Badges</h2>
        <div className="mt-6 flex flex-wrap items-center gap-4 rounded-lg border border-border bg-surface-muted p-8">
          <button
            type="button"
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white hover:bg-accent-strong transition-colors cursor-pointer"
          >
            Primary Pill
          </button>
          <button
            type="button"
            className="rounded-full border border-border-strong px-6 py-2.5 text-sm font-semibold text-foreground hover:bg-white hover:text-black transition-colors cursor-pointer"
          >
            Outline Pill
          </button>
          <span className="rounded bg-[#EA3829] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            BEST OFFER
          </span>
          <span className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
            v2026.1
          </span>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-border bg-surface-muted p-6">
          <h2 className="text-lg font-bold text-foreground">Underline Tabs</h2>
          <div className="mt-4 flex gap-6 border-b border-border">
            {["tokens", "mono", "usage"].map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => setTab(id)}
                className={`pb-2.5 text-sm font-medium capitalize border-b-2 -mb-px cursor-pointer ${
                  tab === id
                    ? "border-accent text-accent"
                    : "border-transparent text-muted hover:text-foreground"
                }`}
              >
                {id}
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted">
            Selected tab: <code className="font-mono text-foreground">{tab}</code>
          </p>
        </div>

        <div className="rounded-lg border border-border bg-surface-muted p-6">
          <h2 className="text-lg font-bold text-foreground">JetBrains Mono Specimen</h2>
          <pre className="mt-4 overflow-x-auto rounded-md border border-border bg-background p-4 font-mono text-xs leading-relaxed text-foreground">
{`fun main() {
  val system = "jetbrains-design-system"
  println("Ready: $system")
}`}
          </pre>
        </div>
      </section>
    </div>
  );
}
