"use client";

import { Plus, Search, X } from "lucide-react";
import { useState } from "react";

const miniDays = Array.from({ length: 31 }, (_, i) => i + 1);

const events = [
  {
    title: "Yoga",
    time: "8 – 9 AM",
    tone: "bg-emerald-950/70 border-l-emerald-400 text-emerald-100",
  },
  {
    title: "Product Design Review",
    time: "10 – 11 AM",
    tone: "bg-sky-950/70 border-l-sky-400 text-sky-100",
  },
  {
    title: "Lunch with Team",
    time: "12 – 1 PM",
    tone: "bg-amber-950/70 border-l-amber-400 text-amber-100",
  },
  {
    title: "Customer Sync",
    time: "3:30 – 4 PM",
    tone: "bg-rose-950/70 border-l-rose-400 text-rose-100",
  },
];

const shortcuts = [
  { label: "Command menu", keys: "⌘ K" },
  { label: "Share availability", keys: "S" },
  { label: "Quick meeting", keys: "F" },
  { label: "All shortcuts", keys: "?" },
];

/**
 * 3-column Cron calendar workspace with mini month picker, Week/Day toggle,
 * color-coded event blocks, right inspector, and Create Event modal.
 */
export function CronCalendarWorkspace() {
  const [selectedDay, setSelectedDay] = useState(25);
  const [view, setView] = useState<"Week" | "Day">("Week");
  const [createOpen, setCreateOpen] = useState(false);

  return (
    <section className="bg-background py-10 border-b border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-xl border border-border bg-surface grid grid-cols-1 lg:grid-cols-[220px_1fr_250px]">
          <aside className="border-b lg:border-b-0 lg:border-r border-border p-4 space-y-6">
            <div>
              <p className="text-xs font-semibold text-foreground mb-3">
                December 2026
              </p>
              <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-muted mb-1">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                  <span key={d}>{d}</span>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-xs">
                {miniDays.map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={`h-6 w-6 mx-auto rounded flex items-center justify-center cursor-pointer transition-colors ${
                      selectedDay === day
                        ? "bg-accent text-white font-semibold"
                        : "text-muted hover:bg-surface-muted hover:text-foreground"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-4 space-y-2">
              <p className="text-[11px] font-medium text-muted">Calendars</p>
              <div className="flex items-center gap-2 text-xs text-foreground">
                <span className="h-2.5 w-2.5 rounded-sm bg-sky-400" />
                <span>Work Calendar</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-foreground">
                <span className="h-2.5 w-2.5 rounded-sm bg-emerald-400" />
                <span>Personal</span>
              </div>
            </div>
          </aside>

          <div className="p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
              <h1 className="text-lg font-semibold text-foreground">
                December {selectedDay}, 2026
              </h1>
              <div className="flex items-center gap-2">
                <div className="inline-flex rounded-md border border-border bg-surface-muted p-0.5">
                  {(["Week", "Day"] as const).map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setView(v)}
                      className={`rounded px-3 py-1 text-xs font-medium cursor-pointer ${
                        view === v
                          ? "bg-background text-foreground"
                          : "text-muted hover:text-foreground"
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setCreateOpen(true)}
                  className="inline-flex items-center gap-1 rounded-md bg-accent px-3 py-1.5 text-xs font-semibold text-white hover:bg-accent-strong cursor-pointer"
                >
                  <Plus className="h-3.5 w-3.5" /> New Event
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <div className="h-px flex-1 bg-accent" />
                <span className="font-mono text-[10px] text-accent">NOW</span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {events.map((ev) => (
                  <div
                    key={ev.title}
                    className={`rounded-md border border-border border-l-2 p-3.5 ${ev.tone}`}
                  >
                    <p className="text-xs font-semibold">{ev.title}</p>
                    <p className="mt-1 font-mono text-[11px] opacity-80">
                      {ev.time} · {view}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="border-t lg:border-t-0 lg:border-l border-border p-4 space-y-5">
            <div className="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-xs text-muted">
              <Search className="h-3.5 w-3.5" />
              <span>Search events...</span>
            </div>

            <div className="rounded-md border border-border bg-surface-muted p-3 space-y-1">
              <p className="text-[11px] text-accent font-medium">
                Started 11 mins ago
              </p>
              <p className="text-xs font-semibold text-foreground">
                Design System Sync
              </p>
              <p className="font-mono text-[11px] text-muted">
                11:15 – 11:45 AM
              </p>
            </div>

            <div className="space-y-2.5 border-t border-border pt-4">
              <p className="text-[11px] font-medium text-muted">
                Useful shortcuts
              </p>
              {shortcuts.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center justify-between text-xs"
                >
                  <span className="text-muted">{s.label}</span>
                  <kbd className="rounded border border-border bg-surface-muted px-1.5 py-0.5 font-mono text-[10px] text-foreground">
                    {s.keys}
                  </kbd>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      {createOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
          <div className="w-full max-w-md rounded-xl border border-border bg-surface p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-foreground">
                Create Event
              </h2>
              <button
                type="button"
                onClick={() => setCreateOpen(false)}
                aria-label="Close event modal"
                className="p-1 text-muted hover:text-foreground cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <input
              defaultValue="Weekly Product Review"
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-accent focus:outline-none"
            />
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setCreateOpen(false)}
                className="rounded-md border border-border px-3.5 py-1.5 text-xs text-muted cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => setCreateOpen(false)}
                className="rounded-md bg-accent px-4 py-1.5 text-xs font-semibold text-white cursor-pointer"
              >
                Save Event
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
