"use client";

import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Info } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Tabs } from "@/components/ui/Tabs";
import { TildaWorkspaceBar } from "./TildaWorkspaceBar";

const viewTabs = [
  { id: "website", label: "Website Statistics" },
  { id: "store", label: "Online Store" },
];

const ranges = [
  { id: "7d", label: "7d", sessions: "1,284", desktop: "68%", mobile: "32%", leads: "42", conversion: "3.2%", bars: [18, 26, 22, 34, 41, 38, 49] },
  { id: "30d", label: "30d", sessions: "5,940", desktop: "71%", mobile: "29%", leads: "186", conversion: "3.1%", bars: [24, 30, 28, 45, 52, 48, 64] },
  { id: "1y", label: "1y", sessions: "64,820", desktop: "64%", mobile: "36%", leads: "2,140", conversion: "3.3%", bars: [35, 42, 39, 58, 70, 66, 82] },
  { id: "all", label: "All", sessions: "148,310", desktop: "62%", mobile: "38%", leads: "4,910", conversion: "3.3%", bars: [45, 51, 60, 68, 74, 80, 92] },
];

const months = [
  {
    name: "Sep 2026",
    days: [31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4],
    leadingOutside: 1,
    trailingOutside: 4,
  },
  {
    name: "Oct 2026",
    days: [28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1],
    leadingOutside: 3,
    trailingOutside: 1,
  },
];

/**
 * Analytics & CRM statistics dashboard modeled after stats.tilda.cc and crm.tilda.cc/stats.
 */
export function TildaDashboard() {
  const [activeTab, setActiveTab] = useState("website");
  const [range, setRange] = useState("30d");
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedEndDay, setSelectedEndDay] = useState(20);

  const activeRange = ranges.find((r) => r.id === range) ?? ranges[1];

  return (
    <div className="flex-1 bg-background">
      <TildaWorkspaceBar active="dashboard" />

      <div className="mx-auto max-w-6xl px-6 py-10 space-y-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between border-b border-border pb-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
              Dashboard → Editorial Studio → Website Statistics
            </p>
            <h1 className="mt-2 font-display text-3xl font-normal text-foreground">
              Analytics &amp; Lead Metrics
            </h1>
          </div>
          <span className="font-mono text-sm text-foreground underline decoration-accent decoration-2 underline-offset-4">
            studio.tilda.ws
          </span>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <Tabs items={viewTabs} activeId={activeTab} onChange={setActiveTab} />

          <div className="relative flex flex-wrap items-center gap-3">
            <div className="inline-flex border border-border bg-background divide-x divide-border">
              {ranges.map((item) => {
                const isSelected = item.id === range;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRange(item.id)}
                    className={`px-4 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                      isSelected
                        ? "bg-accent text-foreground"
                        : "bg-background text-foreground hover:bg-surface-muted"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setCalendarOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 border border-border bg-background px-4 py-2 text-xs font-mono text-foreground hover:border-foreground transition-colors cursor-pointer"
            >
              <CalendarIcon className="h-3.5 w-3.5 text-muted" />
              <span>20.09.2026 – {String(selectedEndDay).padStart(2, "0")}.10.2026</span>
            </button>

            {calendarOpen && (
              <div className="absolute right-0 top-12 z-30 w-full min-w-[320px] sm:w-[540px] border-2 border-foreground bg-background p-5">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <button
                    type="button"
                    aria-label="Previous month"
                    className="flex h-7 w-7 items-center justify-center border border-border text-foreground hover:border-foreground cursor-pointer"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                    Select Date Range
                  </span>
                  <button
                    type="button"
                    aria-label="Next month"
                    className="flex h-7 w-7 items-center justify-center border border-border text-foreground hover:border-foreground cursor-pointer"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {months.map((month, mIdx) => (
                    <div key={month.name}>
                      <p className="text-center font-display text-sm font-medium text-foreground">
                        {month.name}
                      </p>
                      <div className="mt-2 grid grid-cols-7 text-center text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
                        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
                          <span key={d} className="py-1">
                            {d}
                          </span>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 gap-y-1 text-center text-xs">
                        {month.days.map((day, idx) => {
                          const isOutside =
                            idx < month.leadingOutside ||
                            idx >= month.days.length - month.trailingOutside;
                          const isStart = mIdx === 0 && !isOutside && day === 20;
                          const isEnd = mIdx === 1 && !isOutside && day === selectedEndDay;
                          const inRange =
                            !isOutside &&
                            ((mIdx === 0 && day > 20) ||
                              (mIdx === 1 && day < selectedEndDay));

                          return (
                            <button
                              key={`${month.name}-${idx}`}
                              type="button"
                              disabled={isOutside}
                              onClick={() => {
                                if (mIdx === 1 && !isOutside) {
                                  setSelectedEndDay(day);
                                }
                              }}
                              className={`mx-auto flex h-7 w-7 items-center justify-center transition-colors ${
                                isOutside
                                  ? "text-muted/30"
                                  : isStart || isEnd
                                    ? "rounded-full bg-accent font-semibold text-foreground cursor-pointer"
                                    : inRange
                                      ? "bg-accent-soft/30 text-foreground cursor-pointer"
                                      : "text-foreground hover:bg-surface-muted cursor-pointer"
                              }`}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 4 Metric KPI Boxes */}
        <div>
          <h2 className="font-display text-xl font-normal text-foreground">
            {activeTab === "website" ? "Site Metrics" : "Store Metrics"}
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card variant="subtle" className="p-6">
              <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                <span>{activeTab === "website" ? "Sessions" : "Orders"}</span>
                <Info className="h-3.5 w-3.5" />
              </div>
              <p className="mt-4 font-display text-3xl font-normal text-foreground">
                {activeTab === "website" ? activeRange.sessions : "312"}
              </p>
            </Card>

            <Card variant="subtle" className="p-6">
              <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                <span>Device Type</span>
                <Info className="h-3.5 w-3.5" />
              </div>
              <div className="mt-4 space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-muted">Desktop</span>
                  <span className="font-mono font-semibold text-foreground">
                    {activeRange.desktop}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted">Mobile</span>
                  <span className="font-mono font-semibold text-foreground">
                    {activeRange.mobile}
                  </span>
                </div>
              </div>
            </Card>

            <Card variant="subtle" className="p-6">
              <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                <span>{activeTab === "website" ? "Leads" : "Revenue"}</span>
                <Info className="h-3.5 w-3.5" />
              </div>
              <p className="mt-4 font-display text-3xl font-normal text-foreground">
                {activeTab === "website" ? activeRange.leads : "$14,820"}
              </p>
            </Card>

            <Card variant="subtle" className="p-6">
              <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                <span>Conversion</span>
                <Info className="h-3.5 w-3.5" />
              </div>
              <p className="mt-4 font-display text-3xl font-normal text-foreground">
                {activeRange.conversion}
              </p>
            </Card>
          </div>
        </div>

        {/* Crisp Bar Chart */}
        <Card variant="subtle" className="p-6">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <h2 className="font-display text-xl font-normal text-foreground">
              {activeTab === "website" ? "Sessions Over Time" : "Orders Over Time"}
            </h2>
            <span className="inline-flex items-center gap-2 text-xs text-muted">
              <span className="h-2.5 w-2.5 bg-accent" />
              <span>{activeRange.label} window</span>
            </span>
          </div>

          <div className="mt-6 grid grid-cols-7 items-end gap-3 h-48 border-b border-l border-border px-4 pt-6">
            {activeRange.bars.map((val, idx) => (
              <div key={idx} className="flex h-full flex-col items-center justify-end gap-2">
                <div
                  className="w-full max-w-[44px] bg-accent transition-all duration-200 hover:bg-accent-strong"
                  style={{ height: `${val}%` }}
                />
                <span className="pb-1 font-mono text-[10px] text-muted">
                  D{idx + 1}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
