"use client";

import {
  ArrowRight,
  Award,
  BarChart3,
  Check,
  Code2,
  Compass,
  Cpu,
  FlaskConical,
  Sigma,
  Star,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BRILLIANT_COURSES, SUBJECT_CATEGORIES } from "./brilliant-data";

const GUIDED_PATHS = [
  {
    id: "math",
    label: "Math",
    courses: [
      "Solving Equations",
      "Visual Algebra",
      "Real-World Algebra",
      "Graphs and Functions",
      "Geometry and Trigonometry",
      "Vectors and Linear Algebra",
      "Calculus",
    ],
    formula: "f(x) = a(x - h)² + k",
    caption: "Quadratic functions",
  },
  {
    id: "cs",
    label: "CS & Programming",
    courses: [
      "Thinking in Code",
      "Programming with Variables",
      "Programming with Python",
      "Computer Science Fundamentals",
      "How AI Works",
      "Introduction to Neural Networks",
    ],
    formula: "for step in range(4): move_forward()",
    caption: "Algorithmic loops",
  },
  {
    id: "data",
    label: "Data Analysis",
    courses: [
      "Exploring Data Visually",
      "Introduction to Probability",
      "Predicting with Probability",
      "Regression and Classification",
    ],
    formula: "P(A | B) = P(B | A) · P(A) / P(B)",
    caption: "Bayesian inference",
  },
  {
    id: "science",
    label: "Science",
    courses: [
      "Scientific Thinking",
      "Circuits",
      "Quantum Mechanics",
      "Quantum Computing",
    ],
    formula: "τ = r × F · sin(θ)",
    caption: "Torque & gears",
  },
];

const SUBJECT_ICONS = {
  math: Sigma,
  cs: Code2,
  data: BarChart3,
  science: FlaskConical,
  logic: Cpu,
};

/**
 * Brilliant marketing landing page matching brilliant.org with serif display hero, midnight blueprint navy proof bands, and interactive guided paths.
 */
export function BrilliantLanding() {
  const [activePath, setActivePath] = useState("math");
  const currentPath =
    GUIDED_PATHS.find((p) => p.id === activePath) ?? GUIDED_PATHS[0];

  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-medium text-muted">
            <Compass className="h-3.5 w-3.5 text-accent-strong" />
            <span>Interactive Math, Data, CS &amp; Science</span>
          </div>

          <h1 className="mt-6 font-serif text-5xl font-semibold tracking-tight text-foreground sm:text-7xl leading-[1.05]">
            Learn <span className="italic font-normal">by</span> doing
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Interactive problem solving that&apos;s effective and fun. Get smarter
            in 15 minutes a day.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/design-systems/brilliant/onboarding"
              className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_0_#1e9d3d] hover:bg-accent-strong transition-colors"
            >
              Get started
            </Link>
            <Link
              href="/design-systems/brilliant/lesson"
              className="rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-surface transition-colors"
            >
              Try a puzzle
            </Link>
          </div>
        </div>

        {/* Subject strip */}
        <div className="mx-auto mt-14 max-w-5xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-3 border-t border-border pt-6">
            {SUBJECT_CATEGORIES.map((cat) => {
              const Icon = SUBJECT_ICONS[cat.id];
              return (
                <Link
                  key={cat.id}
                  href="/design-systems/brilliant/courses"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground hover:border-foreground/40 hover:bg-surface transition-colors"
                >
                  <Icon className="h-3.5 w-3.5 text-[#6D28D9]" />
                  <span>{cat.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Midnight Blueprint Navy Proof Band */}
      <section className="bg-[#0F1736] py-14 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-serif text-2xl font-medium sm:text-3xl">
            Join over 10 million learners worldwide
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 items-center text-sm text-slate-300">
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-1 text-[#FDE047]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#FDE047]" />
                ))}
              </div>
              <span className="text-xs text-slate-300">
                Over 50,000 5-star app reviews
              </span>
            </div>
            <div className="space-y-1 font-serif text-lg text-white">
              <p>The New York Times</p>
              <p className="italic text-slate-300 text-base">The Atlantic</p>
            </div>
            <div className="flex items-center justify-center gap-6 text-xs font-semibold text-slate-200">
              <span className="inline-flex items-center gap-1.5">
                <Award className="h-4 w-4 text-[#FDE047]" />
                Editor&apos;s Choice
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Award className="h-4 w-4 text-accent" />
                Best App
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Feature Showcases */}
      <section className="mx-auto max-w-6xl px-6 py-20 space-y-20">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-surface p-8">
            <svg viewBox="0 0 280 200" className="w-full h-auto" aria-label="Polar coordinate unit circle">
              <circle cx="90" cy="150" r="110" fill="none" stroke="#E5E5E5" strokeWidth="1.5" />
              <circle cx="90" cy="150" r="75" fill="none" stroke="#E5E5E5" strokeWidth="1.5" />
              <path d="M90 150 L150 150 A60 60 0 0 0 132 108 Z" fill="#FDE047" opacity="0.65" />
              <line x1="90" y1="150" x2="185" y2="55" stroke="#111111" strokeWidth="3" />
              <line x1="185" y1="55" x2="185" y2="150" stroke="#111111" strokeWidth="2" strokeDasharray="5 5" />
              <circle cx="185" cy="55" r="10" fill="#2563EB" />
              <text x="132" y="92" fontSize="14" fontStyle="italic" fill="#111111">r</text>
              <text x="195" y="108" fontSize="14" fontStyle="italic" fill="#111111">y</text>
              <text x="122" y="142" fontSize="11" fontWeight="600" fill="#111111">45°</text>
            </svg>
          </div>
          <div className="space-y-4">
            <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              Concepts that click
            </h2>
            <p className="text-base leading-relaxed text-muted">
              Interactive lessons make even complex ideas easy to grasp. Instant,
              custom feedback accelerates your understanding.
            </p>
            <Link
              href="/design-systems/brilliant/lesson"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-strong hover:underline"
            >
              Open interactive lesson <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1 space-y-4">
            <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              Stay motivated
            </h2>
            <p className="text-base leading-relaxed text-muted">
              Finish every day smarter with engaging lessons, weekly lightning
              streaks, and daily encouragement.
            </p>
            <Link
              href="/design-systems/brilliant/home"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-strong hover:underline"
            >
              Inspect learner dashboard <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="order-1 md:order-2 rounded-3xl border border-border bg-[#FAFDF4] p-8 flex items-center justify-center gap-5">
            {["T", "W", "Th"].map((day, idx) => (
              <div key={day} className="flex flex-col items-center gap-2">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full border-2 ${
                    idx < 2
                      ? "border-[#BEF264] bg-[#D9F99D] text-foreground"
                      : "border-border bg-white text-muted"
                  }`}
                >
                  <Zap className="h-7 w-7 fill-current" />
                </div>
                <span className="text-xs font-bold text-muted">{day}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guided Paths Interactive Tabbed Explorer */}
      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              Guided paths for every journey
            </h2>
            <div className="mt-6 inline-flex flex-wrap justify-center gap-2 rounded-full border border-border bg-background p-1.5">
              {GUIDED_PATHS.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setActivePath(p.id)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                    activePath === p.id
                      ? "bg-foreground text-background"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 rounded-3xl border border-border bg-background p-8 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted">
                {currentPath.label} Courses
              </h3>
              <ul className="mt-4 space-y-2.5">
                {currentPath.courses.map((course) => (
                  <li key={course} className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-soft text-accent-strong">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/design-systems/brilliant/courses"
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-accent-strong hover:underline"
              >
                Explore all {BRILLIANT_COURSES.length} interactive courses <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-8 text-center space-y-4">
              <div className="mx-auto flex h-36 max-w-xs items-center justify-center rounded-xl border border-border bg-background px-4">
                <code className="font-mono text-sm font-medium text-foreground">
                  {currentPath.formula}
                </code>
              </div>
              <span className="inline-block rounded-full bg-[#DBEAFE] px-3.5 py-1 text-xs font-semibold text-[#1D4ED8]">
                {currentPath.caption}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Start Your Journey Navy CTA */}
      <section className="bg-[#0F1736] py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-6 space-y-5">
          <h2 className="font-serif text-4xl font-semibold sm:text-5xl">
            Start your journey
          </h2>
          <p className="text-sm text-slate-300">
            Join over 10 million people learning interactively.
          </p>
          <div className="pt-2">
            <Link
              href="/design-systems/brilliant/subscribe"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_0_#1e9d3d] hover:bg-accent-strong transition-colors"
            >
              Get started <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
