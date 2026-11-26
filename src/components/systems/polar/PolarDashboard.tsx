"use client";

import { BarChart3, Home, Package, Plus, Settings, Users, Wallet, X } from "lucide-react";
import { useState } from "react";

const ranges = ["All Time", "12m", "3m", "30d", "Today"];

const sidebarItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Package, label: "Products", active: false },
  { icon: Users, label: "Customers", active: false },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: Wallet, label: "Finance", active: false },
  { icon: Settings, label: "Settings", active: false },
];

/**
 * Polar dashboard workspace modeled after polar.sh/dashboard/* with sidebar,
 * test-mode banner, KPI cards, time-range pill switcher, and Create Dashboard modal.
 */
export function PolarDashboard() {
  const [range, setRange] = useState("Today");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="bg-surface py-10 border-b border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-2xl border border-border bg-background grid grid-cols-1 md:grid-cols-[220px_1fr]">
          <aside className="border-b md:border-b-0 md:border-r border-border bg-surface p-4 flex flex-col justify-between">
            <div className="space-y-1">
              <div className="mb-3 rounded-lg border border-border bg-background px-3 py-2 text-xs text-muted">
                Search...
              </div>
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm ${
                      item.active
                        ? "bg-background font-medium text-foreground border border-border"
                        : "text-muted"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-6 pt-4 border-t border-border text-xs text-muted">
              Polar Workspace
            </div>
          </aside>

          <div className="p-6 md:p-8 space-y-6">
            <div className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">
                  You are currently in test mode
                </p>
                <p className="text-xs text-muted">
                  Test your checkout flow with 100% discount codes before going live.
                </p>
              </div>
              <button
                type="button"
                className="shrink-0 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background cursor-pointer"
              >
                Go Live
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-xl font-semibold text-foreground">Overview</h2>
              <div className="flex flex-wrap items-center gap-2">
                <div className="inline-flex rounded-full border border-border bg-surface p-0.5">
                  {ranges.map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRange(r)}
                      className={`rounded-full px-3 py-1 text-xs font-medium cursor-pointer transition-colors ${
                        range === r
                          ? "bg-background text-foreground border border-border"
                          : "text-muted hover:text-foreground"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center gap-1 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-medium text-foreground hover:bg-surface cursor-pointer"
                >
                  <Plus className="h-3.5 w-3.5" /> Create Dashboard
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-border p-6">
              <p className="text-sm text-muted">Revenue ({range})</p>
              <p className="mt-2 text-4xl font-medium tracking-tight text-foreground">
                $12,480
              </p>
              <div className="mt-6 h-24 w-full border-b-2 border-accent bg-gradient-to-t from-accent/10 to-transparent" />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border p-6">
                <p className="text-sm text-muted">Monthly Recurring Revenue</p>
                <p className="mt-2 text-3xl font-medium text-foreground">$4,920</p>
              </div>
              <div className="rounded-2xl border border-border p-6">
                <p className="text-sm text-muted">Active Subscriptions</p>
                <p className="mt-2 text-3xl font-medium text-foreground">148</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6">
          <div className="w-full max-w-lg rounded-2xl border border-border bg-background p-6 space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">
                Create Dashboard
              </h3>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                aria-label="Close modal"
                className="p-1 text-muted hover:text-foreground cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div>
              <label
                htmlFor="polar-dash-name"
                className="block text-xs font-medium text-foreground mb-1.5"
              >
                Name
              </label>
              <input
                id="polar-dash-name"
                defaultValue="Revenue & Churn"
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:border-foreground focus:outline-none"
              />
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="rounded-full border border-border px-4 py-2 text-xs font-medium text-foreground cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background cursor-pointer"
              >
                Create Dashboard
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
