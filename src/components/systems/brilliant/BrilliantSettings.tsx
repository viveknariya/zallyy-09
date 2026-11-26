"use client";

import { AlertTriangle, Check, Download, HelpCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type SettingsTab = "subscription" | "notifications" | "export";

const SIDEBAR_TABS: { id: SettingsTab; label: string }[] = [
  { id: "subscription", label: "Subscription" },
  { id: "notifications", label: "Email & notifications" },
  { id: "export", label: "Export & delete data" },
];

/**
 * Brilliant Settings & Delete Account workspace (/settings/subscription/, /profile/all-notification-preferences/, /account/settings/data-portal/).
 */
export function BrilliantSettings() {
  const [tab, setTab] = useState<SettingsTab>("subscription");
  const [streakEmail, setStreakEmail] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(true);
  const [soundEffects, setSoundEffects] = useState(false);
  const [exported, setExported] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleted, setDeleted] = useState(false);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        {/* Main content */}
        <div className="md:col-span-8 space-y-8">
          {tab === "subscription" && (
            <div className="space-y-8">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Premium</h1>
                <h2 className="mt-4 text-sm font-bold text-foreground">
                  Premium Benefits
                </h2>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  As a Premium member, you have access to an expanding library of
                  70+ interactive math, science, and tech courses.
                </p>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {["How AI Works", "Thinking in Code", "Intro to Probability"].map(
                    (title) => (
                      <Link
                        key={title}
                        href="/design-systems/brilliant/courses"
                        className="rounded-2xl border border-border bg-background p-4 text-center hover:border-foreground/40 transition-colors"
                      >
                        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent-strong">
                          <Sparkles className="h-5 w-5" />
                        </div>
                        <p className="mt-3 text-xs font-semibold text-foreground">
                          {title}
                        </p>
                      </Link>
                    )
                  )}
                </div>

                <div className="mt-5">
                  <Link
                    href="/design-systems/brilliant/courses"
                    className="inline-block rounded-full border border-border px-5 py-2 text-xs font-semibold text-foreground hover:bg-surface"
                  >
                    Explore Brilliant Library
                  </Link>
                </div>
              </div>

              <div className="border-t border-border pt-6 space-y-3">
                <p className="text-sm font-bold text-foreground">
                  Current Plan: Premium
                </p>
                <p className="text-xs text-muted">
                  Started On: November 19 · Valid Until: November 26
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <Link
                    href="/design-systems/brilliant/checkout"
                    className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground hover:bg-surface"
                  >
                    Update payment information
                  </Link>
                  <Link
                    href="/design-systems/brilliant/cancel"
                    className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted hover:text-foreground"
                  >
                    Cancel trial
                  </Link>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="text-base font-bold text-foreground">Help</h3>
                <div className="mt-3 flex items-center justify-between gap-4 rounded-2xl border border-border bg-background p-5">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-muted" />
                    <p className="text-xs text-muted">
                      Have a question? We&apos;re here to help!
                    </p>
                  </div>
                  <Link
                    href="/design-systems/brilliant/help"
                    className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground hover:bg-surface"
                  >
                    Browse help pages
                  </Link>
                </div>
              </div>
            </div>
          )}

          {tab === "notifications" && (
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-foreground">
                Email &amp; notification preferences
              </h1>
              <div className="divide-y divide-border rounded-2xl border border-border bg-background">
                {[
                  {
                    label: "Daily streak reminders",
                    desc: "Gentle nudge if you haven't solved a problem yet today.",
                    value: streakEmail,
                    toggle: () => setStreakEmail((v) => !v),
                  },
                  {
                    label: "Weekly progress digest",
                    desc: "Summary of XP earned and new courses added.",
                    value: weeklyDigest,
                    toggle: () => setWeeklyDigest((v) => !v),
                  },
                  {
                    label: "Interactive sound effects",
                    desc: "Play crisp chimes when answering puzzles.",
                    value: soundEffects,
                    toggle: () => setSoundEffects((v) => !v),
                  },
                ].map((pref) => (
                  <div
                    key={pref.label}
                    className="flex items-center justify-between gap-4 p-5"
                  >
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {pref.label}
                      </p>
                      <p className="text-xs text-muted">{pref.desc}</p>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={pref.value}
                      onClick={pref.toggle}
                      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors cursor-pointer ${
                        pref.value ? "bg-accent" : "bg-surface-muted border border-border"
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                          pref.value ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "export" && (
            <div className="space-y-8">
              <div className="space-y-3 border-b border-border pb-6">
                <h1 className="text-2xl font-bold text-foreground">
                  Export your data
                </h1>
                <p className="text-xs text-muted">
                  Start exporting your data regarding your usage of Brilliant.
                </p>
                <button
                  type="button"
                  onClick={() => setExported(true)}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-xs font-semibold text-foreground hover:bg-surface cursor-pointer"
                >
                  {exported ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-accent-strong" />
                      Export archive prepared
                    </>
                  ) : (
                    <>
                      <Download className="h-3.5 w-3.5" />
                      Start exporting your data
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-3">
                <h2 className="text-xl font-bold text-foreground">
                  Delete your account and data
                </h2>
                <p className="text-xs text-muted">
                  You have an active Premium subscription. If you deactivate or
                  delete your account, we will automatically cancel your subscription.
                </p>

                {deleted ? (
                  <div className="rounded-xl border border-border bg-surface p-4 text-xs text-foreground">
                    Account deletion scheduled for confirmation.{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setDeleted(false);
                        setConfirmDelete(false);
                      }}
                      className="font-semibold underline ml-2 cursor-pointer"
                    >
                      Undo demo state
                    </button>
                  </div>
                ) : confirmDelete ? (
                  <div className="rounded-2xl border border-red-300 bg-red-50 p-5 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-red-700">
                      <AlertTriangle className="h-4 w-4" />
                      Confirm permanent account deletion
                    </div>
                    <p className="text-xs text-red-700/80">
                      This permanently removes all streak history, XP, and course progress.
                    </p>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setDeleted(true)}
                        className="rounded-full bg-red-600 px-4 py-2 text-xs font-semibold text-white hover:bg-red-700 cursor-pointer"
                      >
                        Delete permanently
                      </button>
                      <button
                        type="button"
                        onClick={() => setConfirmDelete(false)}
                        className="rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setConfirmDelete(true)}
                    className="rounded-full border border-red-500 px-5 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 cursor-pointer"
                  >
                    Continue?
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right Settings Navigation Rail */}
        <aside className="md:col-span-4">
          <nav
            aria-label="Settings sections"
            className="border-t border-b border-border py-2 space-y-1"
          >
            {SIDEBAR_TABS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className={`block w-full rounded-lg px-3 py-2 text-left text-xs transition-colors cursor-pointer ${
                  tab === item.id
                    ? "font-bold text-foreground bg-surface"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>
      </div>
    </div>
  );
}
