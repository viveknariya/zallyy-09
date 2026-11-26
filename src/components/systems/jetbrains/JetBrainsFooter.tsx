import Link from "next/link";

const footerColumns = [
  {
    title: "Products",
    links: [
      { href: "/design-systems/jetbrains", label: "Overview" },
      { href: "/design-systems/jetbrains/tools", label: "All Developer Tools" },
      { href: "/design-systems/jetbrains/pricing", label: "Store & Pricing" },
      { href: "/design-systems/jetbrains/mono", label: "JetBrains Mono" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/design-systems/jetbrains/news", label: "Newsroom" },
      { href: "/design-systems/jetbrains/support", label: "Product Support" },
      { href: "/design-systems/jetbrains/contacts", label: "Contacts" },
      { href: "/design-systems/jetbrains/components", label: "Component Library" },
      { href: "/design-systems", label: "All Design Systems" },
    ],
  },
];

/**
 * Multi-column dark footer modeled after jetbrains.com.
 */
export function JetBrainsFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-background py-14 text-muted">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="text-base font-semibold text-foreground">
              JetBrains Starter
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Dark-first developer design system modeled after jetbrains.com.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
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

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row">
          <p>Built with Next.js App Router, Tailwind CSS, and Bun.</p>
          <p className="font-mono">Design inspiration: jetbrains.com</p>
        </div>
      </div>
    </footer>
  );
}
