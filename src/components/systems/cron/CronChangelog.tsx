const entries = [
  {
    date: "Oct 30, 2026",
    title: "Multi-timezone scheduling & instant availability links",
    summary:
      "Share clean time-slot snippets directly from the right-hand inspector with keyboard shortcut S.",
  },
  {
    date: "Oct 12, 2026",
    title: "Command Menu (⌘K) & Quick Meeting Lookup",
    summary:
      "Jump to any date, join upcoming video calls, or create calendar blocks without leaving the keyboard.",
  },
];

/**
 * Minimalist editorial Cron Changelog feed modeled after cron.com/changelog.
 */
export function CronChangelog() {
  return (
    <section className="flex-1 bg-background py-16 border-b border-border">
      <div className="mx-auto max-w-3xl px-6 space-y-10">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Cron Changelog
          </h1>
          <p className="mt-2 text-sm text-muted">
            Behind the Grid — Updates and improvements to Cron.
          </p>
          <div className="mt-3 flex gap-4 text-xs font-medium text-accent">
            <span>Get started</span>
            <span>·</span>
            <span>Explore docs</span>
          </div>
        </div>

        <div className="space-y-8 border-t border-border pt-8">
          {entries.map((entry) => (
            <article key={entry.title} className="space-y-3">
              <p className="font-mono text-xs text-muted">{entry.date}</p>
              <h2 className="text-xl font-semibold text-foreground">
                {entry.title}
              </h2>
              <p className="text-sm leading-relaxed text-muted">
                {entry.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
