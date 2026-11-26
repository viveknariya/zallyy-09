import { ArrowUpRight } from "lucide-react";

const newsItems = [
  {
    tag: "Release",
    date: "Nov 2026",
    title: "IntelliJ IDEA 2026.1: Faster Indexing & AI Assistant",
    summary:
      "Major performance gains for multi-module monorepos, inline code completion, and built-in profiler upgrades.",
  },
  {
    tag: "Typeface",
    date: "Oct 2026",
    title: "JetBrains Mono v2.3 with Expanded Code Ligatures",
    summary:
      "Increased x-height, 96 code-specific ligatures, and support for 147 languages—free and open source.",
  },
  {
    tag: "Community",
    date: "Sep 2026",
    title: "Kotlin Multiplatform Production Survey Results",
    summary:
      "How engineering teams share business logic across Android, iOS, web, and server targets.",
  },
];

/**
 * Newsroom & Updates grid modeled after jetbrains.com/company/news/.
 */
export function JetBrainsNewsGrid() {
  return (
    <section className="bg-background py-16 border-b border-border">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Newsroom &amp; Updates
        </h1>
        <p className="mt-3 max-w-2xl text-base text-muted">
          Product releases, engineering stories, and community announcements.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {newsItems.map((item) => (
            <article
              key={item.title}
              className="flex flex-col justify-between rounded-lg border border-border bg-surface-muted p-6 hover:border-border-strong transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs">
                  <span className="rounded-full border border-border bg-surface px-3 py-1 font-mono text-accent">
                    {item.tag}
                  </span>
                  <span className="font-mono text-muted">{item.date}</span>
                </div>
                <h2 className="mt-5 text-lg font-bold text-foreground leading-snug">
                  {item.title}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {item.summary}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border inline-flex items-center gap-1 text-sm font-medium text-accent">
                Read announcement <ArrowUpRight className="h-4 w-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
