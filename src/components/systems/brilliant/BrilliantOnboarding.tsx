"use client";

import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BrilliantMark } from "./BrilliantLogo";

const RECOMMENDATIONS = [
  {
    id: "science",
    badge: "TOP PICK",
    kicker: "LEARNING PATH · 5 COURSES",
    title: "Science",
    description: "See the science in the world around you",
    accentBorder: "border-[#EABC37]",
    tint: "bg-[#FFFBEB]",
  },
  {
    id: "math",
    kicker: "LEARNING PATH · 7 COURSES",
    title: "Foundational Math",
    description: "Master problem solving essentials in math",
    accentBorder: "border-[#2563EB]",
    tint: "bg-[#EFF6FF]",
  },
  {
    id: "ai",
    kicker: "1 COURSE",
    title: "How AI Works",
    description: "Take a peek under the hood of generative AI and LLMs to understand how they work.",
    accentBorder: "border-[#6D28D9]",
    tint: "bg-[#F5F3FF]",
  },
  {
    id: "code",
    kicker: "1 COURSE",
    title: "Thinking in Code",
    description: "Build solid foundations for computational problem solving.",
    accentBorder: "border-accent",
    tint: "bg-accent-soft",
  },
];

const DAILY_GOALS = ["5 min/day", "10 min/day", "15 min/day", "20 min/day"];

/**
 * Brilliant Account Setup & Recommendation screen (/welcome/recommendations/) with speech bubble, TOP PICK path cards, and dark pill Continue CTA.
 */
export function BrilliantOnboarding() {
  const [selected, setSelected] = useState("science");
  const [dailyGoal, setDailyGoal] = useState("15 min/day");

  return (
    <div className="mx-auto max-w-4xl px-6 py-14 space-y-10">
      {/* Mascot speech bubble */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <BrilliantMark className="h-11 w-11 shrink-0" />
        <div className="rounded-2xl border-2 border-[#BEF264] bg-[#F7FEE7] px-6 py-3.5 text-sm font-semibold text-foreground">
          Here&apos;s what I recommend. Get started with one and switch any time.
        </div>
      </div>

      {/* Recommendation cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {RECOMMENDATIONS.map((item) => {
          const isSelected = selected === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelected(item.id)}
              className={`relative overflow-hidden rounded-2xl border-2 bg-background text-left transition-all cursor-pointer ${
                isSelected ? item.accentBorder : "border-border hover:border-foreground/30"
              }`}
            >
              <div className={`h-14 ${item.tint} px-5 flex items-center justify-between`}>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted">
                  {item.kicker}
                </span>
                {item.badge && (
                  <span className="rounded-md bg-[#FDE047] px-2 py-0.5 text-[10px] font-bold uppercase text-foreground">
                    {item.badge}
                  </span>
                )}
              </div>
              <div className="p-5 flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-base font-bold text-foreground">{item.title}</h2>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
                {isSelected && (
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Daily target */}
      <div className="rounded-2xl border border-border bg-surface p-6 text-center space-y-4">
        <p className="text-xs font-bold uppercase tracking-wider text-muted">
          Set your daily learning goal
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {DAILY_GOALS.map((goal) => (
            <button
              key={goal}
              type="button"
              onClick={() => setDailyGoal(goal)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                dailyGoal === goal
                  ? "bg-foreground text-background"
                  : "border border-border bg-background text-foreground hover:bg-surface-muted"
              }`}
            >
              {goal}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Link
          href="/design-systems/brilliant/home"
          className="inline-flex items-center gap-2 rounded-full bg-[#222222] px-10 py-3.5 text-sm font-semibold text-white hover:bg-black transition-colors"
        >
          <span>Continue</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
