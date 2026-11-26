import Link from "next/link";

const footerGroups = [
  {
    title: "Platform",
    links: [
      { href: "/design-systems/polar", label: "Overview" },
      { href: "/design-systems/polar/dashboard", label: "Dashboard" },
      { href: "/design-systems/polar/finance", label: "Finance & Payouts" },
      { href: "/design-systems/polar/integrate", label: "SDK Integration" },
      { href: "/design-systems/polar/settings", label: "Settings" },
    ],
  },
  {
    title: "Flows & Legal",
    links: [
      { href: "/design-systems/polar/onboarding", label: "Onboarding" },
      { href: "/design-systems/polar/login", label: "Sign In" },
      { href: "/design-systems/polar/signup", label: "Sign Up" },
      { href: "/design-systems/polar/privacy", label: "Privacy Policy" },
      { href: "/design-systems/polar/terms", label: "Terms" },
      { href: "/design-systems/polar/components", label: "Component Library" },
      { href: "/design-systems", label: "All Design Systems" },
    ],
  },
];

/**
 * Clean light-surface footer for Polar starter routes.
 */
export function PolarFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-surface py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-foreground">Polar Starter</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Monetization &amp; SaaS billing UI kit modeled after polar.sh.
            </p>
          </div>
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-semibold text-foreground">
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
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row">
          <p>Built with Next.js App Router, Tailwind CSS, and Bun.</p>
          <p>Design inspiration: polar.sh</p>
        </div>
      </div>
    </footer>
  );
}
