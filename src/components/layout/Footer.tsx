import Link from "next/link";

const footerGroups = [
  {
    title: "Product",
    links: [
      { href: "/design-systems/tilda", label: "Overview" },
      { href: "/design-systems/tilda/pricing", label: "Pricing" },
      { href: "/design-systems/tilda/projects", label: "Projects" },
      { href: "/design-systems/tilda/colors", label: "Colors & Gradients" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/design-systems/tilda/help", label: "Help Center" },
      { href: "/design-systems/tilda/components", label: "Component Library" },
      { href: "/design-systems/tilda/settings", label: "Settings" },
      { href: "/design-systems", label: "All Design Systems" },
    ],
  },
  {
    title: "Account",
    links: [
      { href: "/design-systems/tilda/login", label: "Log In" },
      { href: "/design-systems/tilda/signup", label: "Sign Up" },
      { href: "/design-systems/tilda/recover", label: "Reset Password" },
    ],
  },
];

/**
 * Editorial multi-column footer for the Tilda starter template.
 */
export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <p className="font-display text-lg font-semibold text-foreground">
              Tilda Starter
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              A clean Next.js App Router starter template built from Tilda.cc
              design references.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
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

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>Built with Next.js App Router, Tailwind CSS, and Bun.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/viveknariya/zallyy-09"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground hover:text-accent-strong transition-colors"
            >
              GitHub Repository
            </a>
            <p>Design inspiration: tilda.cc</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
