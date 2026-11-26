"use client";

import { ArrowLeft, Check, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

/**
 * Brilliant Cancel Trial retention card (/payment_processor/cancel_trial/) and completion state.
 */
export function BrilliantCancelTrial() {
  const [cancelled, setCancelled] = useState(false);

  if (cancelled) {
    return (
      <div className="mx-auto max-w-lg px-6 py-16">
        <div className="rounded-3xl border border-border bg-background p-8 text-center space-y-5">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-surface text-foreground">
            <Check className="h-6 w-6" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">
            Your trial has been cancelled
          </h1>
          <p className="text-sm text-muted">
            You will not be billed when your trial window ends. You can still
            explore free introductory lessons anytime.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              href="/design-systems/brilliant/home"
              className="rounded-full bg-[#222222] px-6 py-2.5 text-xs font-semibold text-white hover:bg-black"
            >
              Return to Home
            </Link>
            <button
              type="button"
              onClick={() => setCancelled(false)}
              className="rounded-full border border-border px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-surface cursor-pointer"
            >
              Reset demo
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface/60 py-14 px-6">
      <div className="mx-auto grid max-w-4xl grid-cols-1 overflow-hidden rounded-3xl border border-border bg-background shadow-sm md:grid-cols-12">
        <div className="md:col-span-8 p-8 md:p-10 space-y-6">
          <Link
            href="/design-systems/brilliant/settings"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back
          </Link>

          <div>
            <h1 className="text-2xl font-bold text-foreground">
              You still have 5 days left of your trial
            </h1>
            <p className="mt-1.5 text-sm text-muted">
              Once you cancel your trial, you will not be able to restart it.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-5">
            <div className="space-y-1.5">
              <p className="text-sm font-bold text-foreground">
                Worried about being charged by surprise?
              </p>
              <p className="text-xs leading-relaxed text-muted">
                We&apos;ll send you a reminder email 2 days before your trial ends.
                You can always reach our team anytime.
              </p>
            </div>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FEF3C7] text-amber-700">
              <Mail className="h-5 w-5" />
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-5 pt-2">
            <button
              type="button"
              onClick={() => setCancelled(true)}
              className="rounded-xl bg-[#111111] px-6 py-3 text-xs font-semibold text-white hover:bg-black cursor-pointer"
            >
              Continue cancellation
            </button>
            <Link
              href="/design-systems/brilliant/home"
              className="text-xs font-semibold text-foreground underline underline-offset-4 hover:text-accent-strong"
            >
              Never mind, continue my trial
            </Link>
          </div>
        </div>

        <aside className="md:col-span-4 border-t md:border-t-0 md:border-l border-border bg-surface p-8 space-y-4">
          <h2 className="text-sm font-bold text-foreground">What&apos;s in Premium?</h2>
          <ul className="space-y-3 text-xs text-muted">
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FDE047] text-foreground">
                <Check className="h-2.5 w-2.5" />
              </span>
              <span>Entire course library of 65+ interactive courses</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FDE047] text-foreground">
                <Check className="h-2.5 w-2.5" />
              </span>
              <span>Hundreds of bonus puzzles to sharpen your mind</span>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
