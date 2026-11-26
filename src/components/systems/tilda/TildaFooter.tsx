import Link from "next/link";
import { TildaMark } from "./TildaLogo";

const footerGroups = [
  {
    title: "Product",
    links: [
      { href: "/design-systems/tilda", label: "Overview" },
      { href: "/design-systems/tilda/pricing", label: "Pricing & Compare" },
      { href: "/design-systems/tilda/dashboard", label: "Analytics Dashboard" },
      { href: "/design-systems/tilda/projects", label: "Projects" },
      { href: "/design-systems/tilda/contacts", label: "CRM Contacts" },
      { href: "/design-systems/tilda/colors", label: "Colors & Gradients" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/design-systems/tilda/blog", label: "Blog" },
      { href: "/design-systems/tilda/help", label: "Help & Tickets" },
      { href: "/design-systems/tilda/media-kit", label: "Media Kit" },
      { href: "/design-systems/tilda/components", label: "Component Library" },
      { href: "/design-systems/tilda/settings", label: "Site Settings" },
      { href: "/design-systems", label: "All Design Systems" },
    ],
  },
  {
    title: "Account & Legal",
    links: [
      { href: "/design-systems/tilda/account", label: "Profile & Referrals" },
      { href: "/design-systems/tilda/setup", label: "Account Setup" },
      { href: "/design-systems/tilda/login", label: "Log In" },
      { href: "/design-systems/tilda/signup", label: "Sign Up" },
      { href: "/design-systems/tilda/recover", label: "Reset Password" },
      { href: "/design-systems/tilda/privacy", label: "Privacy Policy" },
      { href: "/design-systems/tilda/terms", label: "Terms & Conditions" },
    ],
  },
];

/**
 * Editorial multi-column footer on #F7F7F7 surface for all Tilda routes.
 */
export function TildaFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <Link
              href="/design-systems/tilda"
              className="inline-flex items-center gap-2.5 font-display text-lg font-semibold text-foreground"
            >
              <TildaMark className="h-6 w-6" />
              <span>Tilda Publishing</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Editorial minimalism UI system with sharp 0px framing, warm coral
              accents, and Jost display typography.
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
          <p>Design inspiration: tilda.cc</p>
        </div>
      </div>
    </footer>
  );
}
