"use client";

import { ArrowRight, Check, Lightbulb, RotateCcw, X, Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { QUIZ_QUESTIONS } from "./brilliant-data";
import { BalancePuzzleSvg } from "./BrilliantLogo";

/**
 * Brilliant interactive Quiz & Poll workspace with progress bar, balance-scale / gears puzzle, and green checkmark feedback.
 */
export function BrilliantInteractiveLesson() {
  const [questionIdx, setQuestionIdx] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>("left");
  const [checked, setChecked] = useState(true);
  const [showExplanation, setShowExplanation] = useState(false);

  const q = QUIZ_QUESTIONS[questionIdx];
  const isCorrect = selectedId === q.correctId;
  const progressPct = Math.round(((questionIdx + (checked ? 1 : 0.4)) / QUIZ_QUESTIONS.length) * 100);

  const handleSelect = (id: string) => {
    setSelectedId(id);
    setChecked(false);
    setShowExplanation(false);
  };

  const handleNext = () => {
    if (questionIdx + 1 < QUIZ_QUESTIONS.length) {
      setQuestionIdx((i) => i + 1);
      setSelectedId(null);
      setChecked(false);
      setShowExplanation(false);
    } else {
      setQuestionIdx(0);
      setSelectedId(null);
      setChecked(false);
      setShowExplanation(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      {/* Lesson Top Bar */}
      <div className="flex items-center justify-between gap-6 border-b border-border pb-4">
        <Link
          href="/design-systems/brilliant/courses"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted hover:bg-surface hover:text-foreground"
          aria-label="Exit lesson"
        >
          <X className="h-4 w-4" />
        </Link>

        <div className="flex-1 max-w-md">
          <div className="h-2.5 w-full rounded-full bg-surface-muted overflow-hidden">
            <div
              className="h-full rounded-full bg-accent transition-all duration-300"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>

        <div className="inline-flex items-center gap-1 text-xs font-bold text-foreground">
          <span>{checked && isCorrect ? "2" : "1"}</span>
          <Zap className="h-4 w-4 fill-[#BEF264] text-[#65A30D]" />
        </div>
      </div>

      {/* Puzzle Canvas */}
      <div className="py-10 flex flex-col items-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted">
          {q.course} · {q.chapter}
        </span>

        <div className="mt-6 flex min-h-56 w-full max-w-lg items-center justify-center rounded-2xl border border-border bg-background p-6">
          {q.visualType === "balance" ? (
            <BalancePuzzleSvg />
          ) : (
            <div className="flex items-center justify-center gap-4 py-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-dashed border-[#2563EB] bg-[#EFF6FF] font-mono text-xs font-bold text-[#1D4ED8]">
                A (12t) ↻
              </div>
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-dashed border-[#EA580C] bg-[#FFF7ED] font-mono text-xs font-bold text-[#C2410C]">
                B (24t) ↺
              </div>
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-dashed border-accent bg-accent-soft font-mono text-xs font-bold text-accent-strong">
                C (12t) ?
              </div>
            </div>
          )}
        </div>

        {/* Question + Answer Cards */}
        <div className="mt-8 w-full max-w-lg rounded-2xl border border-border bg-surface/60 p-6 space-y-4">
          <div>
            <h1 className="text-lg font-bold text-foreground">{q.prompt}</h1>
            <p className="mt-1 text-xs leading-relaxed text-muted">{q.subprompt}</p>
          </div>

          <div className="space-y-2.5">
            {q.options.map((opt) => {
              const isSelected = selectedId === opt.id;
              const showRight = checked && isSelected && isCorrect;
              const showWrong = checked && isSelected && !isCorrect;

              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelect(opt.id)}
                  className={`relative flex w-full items-center justify-between rounded-xl border-2 px-4 py-3.5 text-left transition-colors cursor-pointer ${
                    showRight
                      ? "border-accent bg-accent-soft/80 text-accent-strong"
                      : showWrong
                      ? "border-red-500 bg-red-50 text-red-700"
                      : isSelected
                      ? "border-foreground bg-background text-foreground"
                      : "border-border bg-background text-foreground hover:bg-surface"
                  }`}
                >
                  <div>
                    <p className="text-sm font-semibold">{opt.label}</p>
                    <p className="text-xs opacity-75">{opt.detail}</p>
                  </div>
                  {showRight && (
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-accent text-white shrink-0">
                      <Check className="h-4 w-4" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div className="rounded-xl border border-border bg-background p-4 text-xs leading-relaxed text-foreground">
              <p className="font-bold mb-1">Why this works</p>
              <p className="text-muted">{q.explanation}</p>
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <button
              type="button"
              onClick={() => setShowExplanation((v) => !v)}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground hover:bg-surface cursor-pointer"
            >
              <Lightbulb className="h-3.5 w-3.5 text-[#EAB308]" />
              {showExplanation ? "Hide explanation" : "Show explanation"}
            </button>

            <div className="flex items-center gap-2">
              {!checked ? (
                <button
                  type="button"
                  disabled={!selectedId}
                  onClick={() => setChecked(true)}
                  className="rounded-full bg-accent px-6 py-2.5 text-xs font-semibold text-white shadow-[0_3px_0_#1e9d3d] hover:bg-accent-strong disabled:opacity-40 cursor-pointer"
                >
                  Check
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#222222] px-6 py-2.5 text-xs font-semibold text-white hover:bg-black cursor-pointer"
                >
                  {questionIdx + 1 < QUIZ_QUESTIONS.length ? (
                    <>
                      <span>Continue</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </>
                  ) : (
                    <>
                      <RotateCcw className="h-3.5 w-3.5" />
                      <span>Next puzzle</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
