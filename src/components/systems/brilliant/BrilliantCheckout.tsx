"use client";

import { Bell, Check, CreditCard, KeyRound, Lock, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BrilliantMark } from "./BrilliantLogo";

const TRIAL_STEPS = [
  { day: "TODAY", label: "Get full access to Brilliant", color: "bg-accent text-white" },
  { day: "DAY 5", label: "You'll get a trial end reminder", color: "bg-accent text-white" },
  { day: "DAY 7", label: "Your account is charged, cancel anytime before", color: "bg-[#FDE047] text-foreground" },
];

/**
 * Brilliant Checkout screen (/checkout/) with Midnight Navy 7-day trial timeline and Premium activation confirmation.
 */
export function BrilliantCheckout() {
  const [country, setCountry] = useState("United States");
  const [cardLast4, setCardLast4] = useState("4242 4242 4242 4242");
  const [activated, setActivated] = useState(false);

  if (activated) {
    return (
      <div className="mx-auto max-w-xl px-6 py-16">
        <div className="rounded-3xl border border-border bg-background p-10 text-center shadow-sm space-y-5">
          <div className="mx-auto flex items-center justify-center gap-2">
            <span className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs font-bold text-accent-strong">
              +45 XP
            </span>
            <BrilliantMark className="h-10 w-10" />
            <span className="rounded-full bg-[#FEF9C3] px-3 py-1 text-xs font-bold text-foreground">
              Correct!
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Welcome to Premium, Liam!
          </h1>
          <p className="text-sm text-muted">
            You&apos;ve activated a 7-day Brilliant Premium trial for{" "}
            <strong className="text-foreground">learner@example.com</strong>.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/design-systems/brilliant/home"
              className="rounded-full bg-[#222222] px-8 py-3 text-sm font-semibold text-white hover:bg-black"
            >
              Continue
            </Link>
            <Link
              href="/design-systems/brilliant/cancel"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-surface"
            >
              Manage trial
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0F1736] py-14 text-white">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 md:grid-cols-12 items-center">
        {/* Left: Trial Timeline */}
        <div className="md:col-span-5 space-y-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#FDE047]">
            <KeyRound className="h-7 w-7" />
          </div>
          <h1 className="font-serif text-4xl font-semibold leading-tight">
            How your free trial works
          </h1>

          <div className="space-y-5 border-l-2 border-accent/60 pl-5">
            {TRIAL_STEPS.map((step) => (
              <div key={step.day} className="space-y-1.5">
                <span
                  className={`inline-flex items-center gap-1 rounded-md px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${step.color}`}
                >
                  {step.day === "DAY 5" ? <Bell className="h-3 w-3" /> : <Sparkles className="h-3 w-3" />}
                  {step.day}
                </span>
                <p className="text-sm text-slate-200">{step.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Payment Card */}
        <div className="md:col-span-7">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setActivated(true);
            }}
            className="rounded-3xl bg-background p-8 text-foreground shadow-xl space-y-5"
          >
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div>
                <p className="text-base font-bold">Total due today</p>
                <p className="text-xs text-muted">7-day free trial · $119.88/yr after</p>
              </div>
              <span className="text-2xl font-bold">$0.00</span>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-bold text-foreground">Payment method</p>
              <button
                type="button"
                onClick={() => setActivated(true)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FFC439] py-3 text-sm font-bold text-[#003087] hover:brightness-95 cursor-pointer"
              >
                Express Checkout
              </button>

              <div className="relative py-2 text-center text-[11px] font-semibold uppercase text-muted">
                <span className="bg-background px-2">OR</span>
              </div>

              <div className="space-y-3">
                <div className="relative">
                  <CreditCard className="absolute left-3.5 top-3.5 h-4 w-4 text-muted" />
                  <input
                    type="text"
                    aria-label="Card number"
                    value={cardLast4}
                    onChange={(e) => setCardLast4(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background py-3 pl-10 pr-4 font-mono text-sm text-foreground focus:border-foreground focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    aria-label="Expiration date"
                    defaultValue="09 / 29"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 font-mono text-sm text-foreground focus:border-foreground focus:outline-none"
                  />
                  <input
                    type="text"
                    aria-label="Security code"
                    defaultValue="842"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 font-mono text-sm text-foreground focus:border-foreground focus:outline-none"
                  />
                </div>
                <select
                  aria-label="Country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-foreground focus:outline-none"
                >
                  <option>United States</option>
                  <option>Finland</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3.5 text-sm font-semibold text-white shadow-[0_3px_0_#1e9d3d] hover:bg-accent-strong cursor-pointer"
            >
              <Lock className="h-4 w-4" />
              <span>Subscribe now</span>
            </button>

            <p className="text-[11px] leading-relaxed text-muted text-center">
              <Check className="inline h-3 w-3 text-accent-strong mr-1" />
              Cancel anytime from Account Settings before Day 7.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
