"use client";

import { ArrowRight, BookOpen, Check, Compass, Lock, Play, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BRILLIANT_COURSES, type BrilliantCourse } from "./brilliant-data";

const CATEGORIES = [
  "All",
  "Foundational Math",
  "Programming & CS",
  "Data Analysis",
  "Science",
  "Logical Reasoning",
];

const ACCENT_MAP: Record<BrilliantCourse["accent"], string> = {
  blue: "bg-[#EEF2FF] text-[#3730A3] border-[#C7D2FE]",
  violet: "bg-[#F5F3FF] text-[#5B21B6] border-[#DDD6FE]",
  amber: "bg-[#FFFBEB] text-[#B45309] border-[#FDE68A]",
  green: "bg-[#ECFDF5] text-[#047857] border-[#A7F3D0]",
};

/**
 * Brilliant Learning Paths catalog (/courses/) paired with an interactive Course Level Roadmap inspector.
 */
export function BrilliantCoursesCatalog() {
  const [category, setCategory] = useState("All");
  const [activeCourse, setActiveCourse] = useState<BrilliantCourse>(
    BRILLIANT_COURSES[4]
  );

  const visibleCourses =
    category === "All"
      ? BRILLIANT_COURSES
      : BRILLIANT_COURSES.filter((c) => c.category === category);

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 space-y-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Learning Paths
          </h1>
          <p className="mt-1 text-sm text-muted">
            Step-by-step paths to mastery across math, computer science, data, and science.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                category === cat
                  ? "bg-foreground text-background"
                  : "border border-border bg-background text-muted hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Course Cards Tray */}
      <section className="rounded-3xl bg-surface p-6 md:p-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visibleCourses.map((course) => {
            const isSelected = activeCourse.id === course.id;
            return (
              <button
                key={course.id}
                type="button"
                onClick={() => setActiveCourse(course)}
                className={`relative flex flex-col justify-between rounded-2xl border-2 bg-background p-5 text-left transition-all cursor-pointer ${
                  isSelected
                    ? "border-foreground shadow-sm"
                    : "border-border hover:border-foreground/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border ${ACCENT_MAP[course.accent]}`}
                    >
                      <Compass className="h-5 w-5" />
                    </span>
                    {course.badge && (
                      <span
                        className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                          course.badge === "NEW"
                            ? "bg-accent text-white"
                            : course.badge === "IN PROGRESS"
                            ? "bg-accent-soft text-accent-strong"
                            : "bg-[#DBEAFE] text-[#1D4ED8]"
                        }`}
                      >
                        {course.badge}
                      </span>
                    )}
                  </div>
                  <h2 className="mt-4 text-sm font-bold text-foreground">
                    {course.title}
                  </h2>
                  <p className="mt-1 text-xs leading-relaxed text-muted line-clamp-2">
                    {course.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border flex items-center justify-between font-mono text-[11px] text-muted">
                  <span>{course.lessons} Lessons</span>
                  <span>{course.practice} Practice</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Course Roadmap Panel (from brilliant.org/courses/<slug>) */}
      <section className="grid grid-cols-1 gap-8 md:grid-cols-12 items-start">
        <div className="md:col-span-4 rounded-2xl border border-border bg-background p-6 space-y-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1 text-[11px] font-semibold text-muted">
            <BookOpen className="h-3.5 w-3.5" />
            {activeCourse.category}
          </span>
          <h2 className="text-2xl font-bold text-foreground">
            {activeCourse.title}
          </h2>
          <p className="text-sm leading-relaxed text-muted">
            {activeCourse.description}
          </p>
          <div className="flex items-center gap-4 text-xs font-medium text-muted pt-1">
            <span>{activeCourse.lessons} Lessons</span>
            <span>·</span>
            <span>{activeCourse.practice} Practice</span>
          </div>
          <Link
            href="/design-systems/brilliant/lesson"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_3px_0_#1e9d3d] hover:bg-accent-strong transition-colors"
          >
            <Play className="h-4 w-4 fill-white" />
            Start active lesson
          </Link>
        </div>

        <div className="md:col-span-8 rounded-2xl border border-border bg-surface/50 p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-muted">
              Course Level Roadmap
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-[#FFF7ED] border border-[#FED7AA] px-3 py-1 text-[11px] font-bold text-[#C2410C]">
              <Sparkles className="h-3 w-3" /> Level 1 Active
            </span>
          </div>

          <div className="space-y-4">
            {activeCourse.roadmap.map((node, idx) => (
              <div
                key={node.title}
                className={`flex items-center gap-4 ${
                  idx % 2 === 1 ? "md:pl-12" : ""
                }`}
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 font-bold ${
                    node.status === "completed"
                      ? "border-accent bg-accent-soft text-accent-strong"
                      : node.status === "active"
                      ? "border-[#EA580C] bg-[#FFEDD5] text-[#C2410C]"
                      : "border-border bg-background text-muted"
                  }`}
                >
                  {node.status === "completed" ? (
                    <Check className="h-5 w-5" />
                  ) : node.status === "active" ? (
                    <Play className="h-4 w-4 fill-current" />
                  ) : (
                    <Lock className="h-4 w-4" />
                  )}
                </div>

                <div className="flex-1 rounded-xl border border-border bg-background px-4 py-3 flex items-center justify-between gap-3">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted">
                      Level {node.level} · {node.kind}
                    </span>
                    <p className="text-sm font-semibold text-foreground">
                      {node.title}
                    </p>
                  </div>
                  {node.status !== "locked" && (
                    <Link
                      href="/design-systems/brilliant/lesson"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-accent-strong hover:underline"
                    >
                      Open <ArrowRight className="h-3 w-3" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
