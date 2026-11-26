"use client";

import { Check, Lock, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

const TOKEN_SWATCHES = [
  { name: "Canvas White", hex: "#FFFFFF", cls: "bg-background border border-border" },
  { name: "Card Tray", hex: "#F7F7F7", cls: "bg-surface border border-border" },
  { name: "Ink Black", hex: "#111111", cls: "bg-foreground" },
  { name: "Brilliant Green", hex: "#2AB54B", cls: "bg-accent" },
  { name: "Midnight Navy", hex: "#0F1736", cls: "bg-[#0F1736]" },
  { name: "Streak Gold", hex: "#FDE047", cls: "bg-[#FDE047] border border-[#EAB308]" },
];

/**
 * Interactive Brilliant component library, tokens, serif/sans specimens, tactile pills, and quiz cards.
 */
export function BrilliantComponentsShowcase() {
  const [selectedChoice, setSelectedChoice] = useState("a");
  const [alertsOn, setAlertsOn] = useState(true);
  const [tab, setTab] = useState("Math");

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 space-y-14">
      <div className="space-y-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-strong">
          <Sparkles className="h-3.5 w-3.5" />
          Brilliant Design System
        </span>
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Interactive STEM UI Kit
        </h1>
        <p className="max-w-2xl text-base text-muted">
          Editorial Newsreader serif headlines paired with crisp sans-serif UI,
          vibrant green action pills, midnight blueprint navy proof bands, and
          tactile quiz option cards.
        </p>
      </div>

      {/* Color Swatches */}
      <section>
        <h2 className="text-xl font-bold text-foreground">Color Tokens</h2>
        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {TOKEN_SWATCHES.map((s) => (
            <div key={s.name} className="space-y-2">
              <div className={`h-20 w-full rounded-2xl ${s.cls}`} />
              <p className="text-xs font-semibold text-foreground">{s.name}</p>
              <p className="font-mono text-xs text-muted">{s.hex}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section className="rounded-2xl border border-border bg-surface p-8 space-y-6">
        <h2 className="text-xl font-bold text-foreground">Typography Pairing</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-background p-5 space-y-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
              font-serif (Editorial)
            </span>
            <p className="font-serif text-3xl font-semibold leading-tight text-foreground">
              Learn by doing
            </p>
            <p className="text-xs text-muted">
              Hero titles, proof bands, paywalls, and About/Careers headings.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-background p-5 space-y-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
              font-sans (Product UI)
            </span>
            <p className="text-xl font-bold text-foreground">
              Jump back in · Scientific Thinking
            </p>
            <p className="text-xs text-muted">
              Navigation, course cards, quiz options, and settings forms.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-background p-5 space-y-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
              font-mono (XP &amp; Formulas)
            </span>
            <p className="font-mono text-xl font-medium text-foreground">
              0 of 175 XP · y&apos;(0)
            </p>
            <p className="text-xs text-muted">
              Counters, durations, hex codes, and code snippets.
            </p>
          </div>
        </div>
      </section>

      {/* Buttons, Badges & Controls */}
      <section className="space-y-5">
        <h2 className="text-xl font-bold text-foreground">
          Pill CTAs, Gamified Badges &amp; Controls
        </h2>
        <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-background p-8">
          <button
            type="button"
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white shadow-[0_3px_0_#1e9d3d] hover:bg-accent-strong cursor-pointer"
          >
            Get started
          </button>
          <button
            type="button"
            className="rounded-full bg-[#222222] px-6 py-2.5 text-sm font-semibold text-white hover:bg-black cursor-pointer"
          >
            Continue
          </button>
          <button
            type="button"
            className="rounded-full border border-accent px-5 py-2 text-xs font-semibold text-accent-strong hover:bg-accent-soft cursor-pointer"
          >
            Gift Premium
          </button>
          <button
            type="button"
            className="rounded-full border border-border bg-background px-5 py-2 text-xs font-semibold text-foreground hover:bg-surface cursor-pointer"
          >
            Log in
          </button>
          <span className="inline-flex items-center gap-1 rounded-full bg-[#FDE047] px-3 py-1 text-xs font-bold text-foreground">
            2 <Zap className="h-3.5 w-3.5 fill-foreground" />
          </span>
          <span className="rounded-md bg-[#FDE047] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-foreground">
            TOP PICK
          </span>
          <span className="rounded-md bg-[#6D28D9] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
            + FOR YOU
          </span>
          <button
            type="button"
            onClick={() => setAlertsOn((v) => !v)}
            role="switch"
            aria-checked={alertsOn}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
              alertsOn ? "bg-accent" : "bg-surface-muted border border-border"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                alertsOn ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </section>

      {/* Interactive Quiz Choice & Tabs */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-background p-6 space-y-4">
          <h3 className="text-base font-bold text-foreground">Quiz Answer Cards</h3>
          {[
            { id: "a", text: "The left-hand side" },
            { id: "b", text: "The right-hand side" },
          ].map((opt) => {
            const active = selectedChoice === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedChoice(opt.id)}
                className={`relative flex w-full items-center justify-between rounded-xl border-2 px-4 py-3.5 text-left text-sm font-medium transition-colors cursor-pointer ${
                  active
                    ? "border-accent bg-accent-soft/70 text-accent-strong"
                    : "border-border bg-background text-foreground hover:bg-surface"
                }`}
              >
                <span>{opt.text}</span>
                {active && (
                  <span className="flex h-5 w-5 items-center justify-center rounded bg-accent text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="rounded-2xl border-2 border-[#EABC37] bg-[#FFFBEB] p-6 flex flex-col justify-between space-y-5">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                SCIENCE · ACTIVE LESSON
              </span>
              <h3 className="mt-1 text-lg font-bold text-foreground">
                Scientific Thinking
              </h3>
              <p className="mt-1 text-xs text-muted">
                Connecting Gears · 15 min daily streak goal
              </p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-foreground border border-amber-300">
              <Lock className="h-3 w-3 text-amber-600" />
              Level 1
            </span>
          </div>

          <div className="flex items-center gap-2">
            {["Math", "CS", "Data"].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                  tab === t
                    ? "bg-foreground text-background"
                    : "bg-white text-muted border border-border"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
