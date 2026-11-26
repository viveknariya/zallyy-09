import Link from "next/link";

const footerGroups = [
  {
    title: "Product",
    links: [
      { href: "/", label: "Overview" },
      { href: "/pricing", label: "Pricing" },
      { href: "/projects", label: "Projects" },
      { href: "/colors", label: "Colors & Gradients" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/help", label: "Help Center" },
      { href: "/design-system", label: "Component Library" },
      { href: "/settings", label: "Settings" },
    ],
  },
  {
    title: "Account",
    links: [
      { href: "/login", label: "Log In" },
      { href: "/signup", label: "Sign Up" },
      { href: "/recover", label: "Reset Password" },
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
          <p>Design reference: tilda.cc via Refero</p>
        </div>
      </div>
    </footer>
  );
}
