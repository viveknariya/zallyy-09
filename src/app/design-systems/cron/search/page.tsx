import { Search } from "lucide-react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "Cron Command Search Pattern",
  description: "Keyboard-first search & empty state pattern modeled after calendar.cron.com/search.",
  alternates: { canonical: "/design-systems/cron/search" },
};

export default function CronSearchPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Cron", href: "/design-systems/cron" },
          { label: "Search", href: "/design-systems/cron/search" },
        ]}
      />
      <section className="flex-1 bg-background py-16">
        <div className="mx-auto max-w-2xl px-6 space-y-6">
          <div className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3">
            <Search className="h-4 w-4 text-muted" />
            <input
              placeholder="Search events, people, or calendars..."
              className="w-full bg-transparent text-sm text-foreground placeholder:text-muted focus:outline-none"
            />
            <kbd className="rounded border border-border bg-surface-muted px-2 py-0.5 font-mono text-[11px] text-muted">
              ESC
            </kbd>
          </div>
          <div className="rounded-lg border border-border bg-surface p-8 text-center text-sm text-muted">
            Type to search across all connected calendars and events.
          </div>
        </div>
      </section>
    </>
  );
}
