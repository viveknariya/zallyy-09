import Link from "next/link";

const footerGroups = [
  {
    title: "Workspace",
    links: [
      { href: "/design-systems/cron", label: "Calendar Grid" },
      { href: "/design-systems/cron/settings", label: "Calendar Settings" },
      { href: "/design-systems/cron/search", label: "Command Search" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/design-systems/cron/changelog", label: "Changelog" },
      { href: "/design-systems/cron/download", label: "Download App" },
      { href: "/design-systems/cron/components", label: "Component Library" },
      { href: "/design-systems", label: "All Design Systems" },
    ],
  },
];

/**
 * Compact dark footer for Cron starter routes.
 */
export function CronFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-surface py-12 text-muted">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-foreground">Cron Starter</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Next-generation keyboard-first calendar UI kit modeled after cron.com.
            </p>
          </div>
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row">
          <p>Built with Next.js App Router, Tailwind CSS, and Bun.</p>
          <p className="font-mono">Design inspiration: cron.com</p>
        </div>
      </div>
    </footer>
  );
}
