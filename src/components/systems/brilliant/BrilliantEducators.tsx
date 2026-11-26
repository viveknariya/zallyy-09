"use client";

import { ChevronDown, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const EDUCATOR_FAQS = [
  {
    q: "Who is eligible for free access?",
    a: "Elementary, middle, and high school teachers at accredited K-12 schools, principals, and non-profit STEM camp instructors serving students under 18.",
  },
  {
    q: "Is Brilliant aligned with state or national learning standards?",
    a: "Yes. Courses reinforce Common Core Math, NGSS Science practices, and AP Computer Science conceptual reasoning.",
  },
  {
    q: "Is there a limit to how many classes and students I can add?",
    a: "Educators can create unlimited classes and invite students via class invite link or roster sync.",
  },
  {
    q: "What about student privacy?",
    a: "Brilliant for Educators is designed in compliance with COPPA, FERPA, and GDPR, with zero student advertising or data resale.",
  },
];

const CLASSROOM_PROGRESS = [
  { course: "Joy of Problem Solving", time: "42 minutes", lessons: [true, true, true, false] },
  { course: "Science Essentials", time: "60 minutes", lessons: [true, true, true, true] },
  { course: "Scientific Thinking", time: "48 minutes", lessons: [true, true, false, false] },
  { course: "Geometry Fundamentals", time: "35 minutes", lessons: [true, false, false, false] },
];

/**
 * Brilliant for Educators product landing page (educator.brilliant.org) with cobalt blue accent headings, classroom progress matrix, privacy cards, and FAQ accordion.
 */
export function BrilliantEducators() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:grid-cols-12 items-center">
          <div className="md:col-span-6 space-y-5">
            <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl leading-tight">
              Brilliant for <span className="text-[#4F6EF7]">Educators</span>
            </h1>
            <p className="text-sm leading-relaxed text-muted max-w-md">
              Elevate learning in your classroom for free with thousands of
              interactive lessons perfect for individual enrichment, class
              warm-ups, and inspiring every student.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/design-systems/brilliant/signup"
                className="rounded-full bg-accent px-7 py-3 text-xs font-semibold text-white shadow-[0_3px_0_#1e9d3d] hover:bg-accent-strong"
              >
                Apply for access
              </Link>
              <Link
                href="/design-systems/brilliant/courses"
                className="rounded-full border border-border px-5 py-3 text-xs font-semibold text-foreground hover:bg-surface"
              >
                Preview courses
              </Link>
            </div>
          </div>

          <div className="md:col-span-6 flex justify-center">
            <div className="rounded-3xl border border-border bg-surface p-8">
              <svg viewBox="0 0 240 200" className="w-60 h-auto" aria-label="Pythagorean proof diagram">
                <rect x="35" y="95" width="45" height="45" fill="#F87171" stroke="#111111" strokeWidth="2" />
                <rect x="80" y="140" width="60" height="60" fill="#60A5FA" stroke="#111111" strokeWidth="2" />
                <polygon points="80,95 80,140 140,140" fill="#FFFFFF" stroke="#111111" strokeWidth="2" />
                <polygon points="80,95 140,140 185,80 125,35" fill="#FACC15" stroke="#111111" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Classroom Tools Preview */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl font-semibold">
            <span className="text-[#4F6EF7]">Classroom tools</span> for the Brilliant teacher
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 items-center">
          <div className="md:col-span-4 space-y-5">
            <div>
              <h3 className="text-sm font-bold text-foreground">Manage your classes</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                Create unlimited classes and easily add students by invite link or roster sync.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">Share inspiring content</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                Assign interactive courses and warm-up puzzles to spark STEM curiosity.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">Track student progress</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                See completion checkpoints and active problem-solving time at a glance.
              </p>
            </div>
          </div>

          <div className="md:col-span-8 overflow-x-auto rounded-2xl border-2 border-foreground/80 bg-background">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-border bg-surface text-[10px] font-bold uppercase tracking-wider text-muted">
                <tr>
                  <th className="px-4 py-3">Course</th>
                  <th className="px-4 py-3">Total Time Spent</th>
                  <th className="px-4 py-3 text-center">Checkpoints</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {CLASSROOM_PROGRESS.map((row) => (
                  <tr key={row.course}>
                    <td className="px-4 py-3 font-semibold text-foreground">{row.course}</td>
                    <td className="px-4 py-3 font-mono text-muted">{row.time}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-2">
                        {row.lessons.map((done, i) => (
                          <span
                            key={i}
                            className={`h-3.5 w-3.5 rounded-full border ${
                              done
                                ? "border-accent bg-accent"
                                : "border-border bg-surface"
                            }`}
                          />
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Data Privacy */}
      <section className="border-t border-b border-border bg-surface py-14">
        <div className="mx-auto max-w-5xl px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4F6EF7]">
            <ShieldCheck className="h-4 w-4" />
            Student Privacy First
          </div>
          <h2 className="font-serif text-3xl font-semibold text-foreground">
            <span className="text-[#4F6EF7]">Data privacy</span> is important to us
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 text-left text-xs leading-relaxed text-muted">
            <div className="rounded-2xl border border-border bg-background p-5">
              Designed in compliance with COPPA, FERPA, and GDPR across schools globally.
            </div>
            <div className="rounded-2xl border border-border bg-background p-5">
              Zero ads and zero resale of student personal information for marketing.
            </div>
            <div className="rounded-2xl border border-border bg-background p-5">
              District-ready data agreements and transparent privacy documentation.
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-3xl px-6 py-16 space-y-6">
        <div className="text-center space-y-2">
          <Sparkles className="mx-auto h-6 w-6 text-foreground" />
          <h2 className="font-serif text-3xl font-semibold text-foreground">FAQs</h2>
        </div>

        <div className="divide-y divide-border rounded-2xl border border-border bg-background">
          {EDUCATOR_FAQS.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={item.q} className="p-5">
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="flex w-full items-center justify-between gap-4 text-left text-sm font-bold text-foreground cursor-pointer"
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-3 text-xs leading-relaxed text-muted">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
