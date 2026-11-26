"use client";

import { ArrowRight, CheckCircle2, Circle, Lock, Trophy, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const DAYS = [
  { label: "Su", done: true },
  { label: "M", done: true },
  { label: "T", done: false },
  { label: "W", done: false },
  { label: "Th", done: false },
];

const ACTIVE_CARDS = [
  {
    id: "scientific-thinking",
    category: "SCIENCE",
    title: "Scientific Thinking",
    cta: "Connecting Gears",
    href: "/design-systems/brilliant/lesson",
    progress: "Level 1 · Lesson 2 of 24",
  },
  {
    id: "solving-equations",
    category: "FOUNDATIONAL MATH",
    title: "Solving Equations",
    cta: "Balance Puzzle 13",
    href: "/design-systems/brilliant/lesson",
    progress: "Level 1 · Practice 1 of 18",
  },
];

/**
 * Brilliant learner dashboard (/home/) with streak tracker, habit checklist, XP league lock, and gold-bordered Jump back in card.
 */
export function BrilliantHomeDashboard() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [checkedHabit, setCheckedHabit] = useState([true, false, false]);
  const current = ACTIVE_CARDS[selectedIdx];

  const toggleHabit = (idx: number) => {
    setCheckedHabit((prev) => prev.map((val, i) => (i === idx ? !val : val)));
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 items-start">
        {/* Left column: Streak + League */}
        <div className="md:col-span-5 space-y-5">
          <h1 className="text-xl font-bold text-foreground">Welcome, Liam</h1>

          <div className="overflow-hidden rounded-2xl border border-border bg-background">
            <div className="p-6 space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold text-foreground">2</span>
                  <Zap className="h-5 w-5 fill-[#FDE047] text-[#EAB308]" />
                </div>
                <span className="rounded-full bg-surface px-2.5 py-1 font-mono text-[11px] font-medium text-muted">
                  2 day streak
                </span>
              </div>

              <div className="flex items-center justify-between gap-2">
                {DAYS.map((d) => (
                  <div key={d.label} className="flex flex-col items-center gap-1.5">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                        d.done
                          ? "border-[#EAB308] bg-[#FEF9C3] text-foreground"
                          : "border-border bg-surface text-muted/40"
                      }`}
                    >
                      <Zap className="h-4 w-4 fill-current" />
                    </div>
                    <span className="text-xs font-semibold text-muted">{d.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-accent-soft px-6 py-4 space-y-2.5">
              <p className="text-[11px] font-bold uppercase tracking-wider text-foreground">
                Start a learning habit
              </p>
              {[
                "Start your first course",
                "Finish your first lesson",
                "Continue your streak tomorrow",
              ].map((label, idx) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => toggleHabit(idx)}
                  className="flex w-full items-center gap-2.5 text-left text-xs font-medium text-foreground/85 cursor-pointer"
                >
                  {checkedHabit[idx] ? (
                    <CheckCircle2 className="h-4 w-4 text-accent-strong shrink-0" />
                  ) : (
                    <Circle className="h-4 w-4 text-muted/60 shrink-0" />
                  )}
                  <span className={checkedHabit[idx] ? "line-through text-muted" : ""}>
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-border bg-background p-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FEF3C7] text-[#B45309] border border-[#FDE68A]">
              <Trophy className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-foreground">
                <Lock className="h-3.5 w-3.5 text-muted" />
                <span>Unlock Leagues</span>
              </div>
              <p className="mt-0.5 font-mono text-xs text-muted">45 of 175 XP</p>
              <div className="mt-2 h-1.5 w-full rounded-full bg-surface-muted overflow-hidden">
                <div className="h-full w-1/4 rounded-full bg-[#EABC37]" />
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Jump back in */}
        <div className="md:col-span-7 space-y-5">
          <h2 className="text-xl font-bold text-foreground">Jump back in</h2>

          <div className="rounded-3xl border-2 border-[#EABC37] bg-gradient-to-b from-[#FFFDF2] to-[#FEF9DC] p-8 text-center shadow-[0_5px_0_#EABC37]">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-amber-700">
              {current.category}
            </span>
            <h3 className="mt-2 text-2xl font-bold text-foreground">
              {current.title}
            </h3>
            <p className="mt-1 font-mono text-xs text-muted">{current.progress}</p>

            {/* Isometric gold steps graphic */}
            <div className="my-8 flex justify-center">
              <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-white/80 border border-amber-200">
                <svg viewBox="0 0 100 100" className="h-24 w-24" aria-hidden="true">
                  <polygon points="50,15 80,32 50,49 20,32" fill="#FDE047" stroke="#CA8A04" strokeWidth="2" />
                  <polygon points="20,32 50,49 50,70 20,53" fill="#EAB308" stroke="#CA8A04" strokeWidth="2" />
                  <polygon points="80,32 50,49 50,70 80,53" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" />
                  <circle cx="50" cy="24" r="10" fill="#36C45A" />
                </svg>
              </div>
            </div>

            <Link
              href={current.href}
              className="inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-bold text-foreground border border-border shadow-sm hover:bg-surface transition-colors"
            >
              <span>{current.cta}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex items-center justify-center gap-3">
            {ACTIVE_CARDS.map((card, idx) => (
              <button
                key={card.id}
                type="button"
                onClick={() => setSelectedIdx(idx)}
                className={`rounded-xl border-2 px-4 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                  selectedIdx === idx
                    ? "border-[#EABC37] bg-[#FFFBEB] text-foreground"
                    : "border-border bg-background text-muted hover:text-foreground"
                }`}
              >
                {card.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
