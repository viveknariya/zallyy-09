"use client";

import { Calendar, Globe, User } from "lucide-react";
import { useState } from "react";

const tabs = [
  { id: "calendars", label: "Calendars", icon: Calendar },
  { id: "integrations", label: "Conferencing", icon: Globe },
  { id: "profile", label: "Profile", icon: User },
];

/**
 * 2-column Cron Settings panel modeled after calendar.cron.com/settings/calendars.
 */
export function CronSettingsModal() {
  const [active, setActive] = useState("calendars");

  return (
    <section className="flex-1 bg-background py-14 border-b border-border">
      <div className="mx-auto max-w-4xl px-6">
        <div className="overflow-hidden rounded-xl border border-border bg-surface grid grid-cols-1 md:grid-cols-[200px_1fr]">
          <aside className="border-b md:border-b-0 md:border-r border-border p-4 space-y-1">
            <p className="px-2.5 pb-2 text-sm font-semibold text-foreground">
              Settings
            </p>
            {tabs.map((t) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActive(t.id)}
                  className={`flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-xs font-medium cursor-pointer transition-colors ${
                    active === t.id
                      ? "bg-surface-muted text-foreground"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 text-accent" />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </aside>

          <div className="p-6 md:p-8 space-y-6">
            <div>
              <h1 className="text-base font-semibold text-foreground capitalize">
                Default {active}
              </h1>
              <p className="mt-1 text-xs text-muted">
                Events and availabilities will be created on this calendar by default.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-background p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">
                  Google Calendar
                </p>
                <p className="font-mono text-xs text-muted">
                  alex@cron.example
                </p>
              </div>
              <button
                type="button"
                className="rounded-md border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground hover:border-border-strong cursor-pointer"
              >
                Connected
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
