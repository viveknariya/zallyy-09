"use client";

import { ArrowRight, Check, Gift, KeyRound, Minus, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const COMPARISON_ROWS = [
  { label: "Intro Lessons", free: true, premium: true },
  { label: "Full Courses", free: false, premium: true },
  { label: "Guided Learning Paths", free: false, premium: true },
  { label: "Advanced Lessons", free: false, premium: true },
  { label: "Expanded Practice", free: false, premium: true },
];

/**
 * Brilliant Paywall & Subscription page (/subscribe/) with Midnight Navy hero, Annual/Monthly selector cards, comparison matrix, and Gift/Group plans.
 */
export function BrilliantPricing() {
  const [billing, setBilling] = useState<"annual" | "monthly">("annual");

  return (
    <div className="bg-background text-foreground">
      {/* Midnight Navy Paywall Hero */}
      <section className="bg-[#0F1736] py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-[#FDE047]">
            <KeyRound className="h-8 w-8" />
          </div>
          <h1 className="mt-5 font-serif text-4xl font-semibold sm:text-5xl">
            Unlock the full Brilliant experience
          </h1>
          <p className="mt-3 text-sm text-slate-300">
            Premium gives you full access to every course — and more.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-lg mx-auto">
            <button
              type="button"
              onClick={() => setBilling("annual")}
              className={`relative rounded-2xl border-2 p-6 text-center transition-all cursor-pointer ${
                billing === "annual"
                  ? "border-[#EABC37] bg-white text-foreground"
                  : "border-slate-600 bg-slate-800/70 text-slate-200"
              }`}
            >
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#FDE047] px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-foreground">
                Most Popular
              </span>
              <p className="text-sm font-bold">Annual</p>
              <p className="mt-2 text-2xl font-bold">
                $9.99<span className="text-xs font-normal opacity-75">/month*</span>
              </p>
            </button>

            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`rounded-2xl border-2 p-6 text-center transition-all cursor-pointer ${
                billing === "monthly"
                  ? "border-[#EABC37] bg-white text-foreground"
                  : "border-slate-600 bg-slate-800/70 text-slate-200"
              }`}
            >
              <p className="text-sm font-bold">Monthly</p>
              <p className="mt-2 text-2xl font-bold">
                $17.99<span className="text-xs font-normal opacity-75">/month</span>
              </p>
            </button>
          </div>

          <div className="mt-6">
            <Link
              href={`/design-systems/brilliant/checkout?plan=${billing}`}
              className="inline-flex items-center justify-center rounded-full bg-accent px-12 py-3.5 text-sm font-semibold text-white shadow-[0_4px_0_#1e9d3d] hover:bg-accent-strong transition-colors"
            >
              Subscribe now
            </Link>
            <p className="mt-3 text-[11px] text-slate-400">
              *Billed as one payment. Renews automatically, cancel anytime from settings.
            </p>
          </div>
        </div>
      </section>

      {/* Free vs Premium Comparison */}
      <section className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-foreground">
          No commitment, cancel anytime
        </h2>
        <p className="mt-1 text-sm text-muted">Unlock it all with Premium</p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-background text-left">
          <div className="grid grid-cols-12 border-b border-border bg-surface px-6 py-3 text-xs font-bold uppercase tracking-wider text-muted">
            <div className="col-span-6">Benefits</div>
            <div className="col-span-3 text-center">Free</div>
            <div className="col-span-3 text-center text-amber-700">Premium</div>
          </div>
          {COMPARISON_ROWS.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-12 items-center border-b border-border last:border-none px-6 py-3.5 text-sm"
            >
              <div className="col-span-6 font-medium text-foreground">{row.label}</div>
              <div className="col-span-3 flex justify-center">
                {row.free ? (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FEF3C7] text-amber-700">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                ) : (
                  <Minus className="h-4 w-4 text-muted/50" />
                )}
              </div>
              <div className="col-span-3 flex justify-center bg-[#FFFBEB] py-1 rounded">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FDE047] text-foreground">
                  <Check className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Share the Gift of Premium */}
      <section className="border-t border-border bg-surface py-14">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-2xl font-bold text-foreground">
            Share the gift of Premium
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
                  <Gift className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-foreground">Gift plan</h3>
                  <p className="text-xs text-muted">
                    Give a subscription to Brilliant Premium.
                  </p>
                </div>
              </div>
              <Link
                href="/design-systems/brilliant/checkout"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-border py-2.5 text-xs font-semibold text-foreground hover:bg-surface"
              >
                Gift Premium <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#3730A3]">
                  <Users className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-bold text-foreground">Group plan</h3>
                  <p className="text-xs text-muted">
                    Save 40%+ for your family, team, or classroom.
                  </p>
                </div>
              </div>
              <Link
                href="/design-systems/brilliant/educators"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-border py-2.5 text-xs font-semibold text-foreground hover:bg-surface"
              >
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
