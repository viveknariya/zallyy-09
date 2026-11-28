import { Globe } from "lucide-react";
import Link from "next/link";
import { FreshaWordmark } from "./FreshaArt";

const FOOTER_GROUPS = [
  {
    title: "About Fresha",
    links: [
      { label: "Careers", href: "/design-systems/fresha/careers" },
      { label: "Customer Support", href: "/design-systems/fresha/help" },
      { label: "Knowledge Base Guide", href: "/design-systems/fresha/help/article" },
      { label: "Blog", href: "/design-systems/fresha/blog" },
      { label: "Featured Article", href: "/design-systems/fresha/blog/post" },
      { label: "Sitemap", href: "/design-systems/fresha/sitemap" },
    ],
  },
  {
    title: "For business",
    links: [
      { label: "For partners", href: "/design-systems/fresha/for-business" },
      { label: "Pricing", href: "/design-systems/fresha/pricing" },
      { label: "Discover Venues", href: "/design-systems/fresha/search" },
      { label: "Venue Profile", href: "/design-systems/fresha/venue" },
      { label: "Booking Checkout", href: "/design-systems/fresha/checkout" },
      { label: "Components UI Kit", href: "/design-systems/fresha/components" },
    ],
  },
  {
    title: "Account & Wallet",
    links: [
      { label: "Appointments", href: "/design-systems/fresha/appointments" },
      { label: "Wallet & Gift Cards", href: "/design-systems/fresha/wallet" },
      { label: "Order History", href: "/design-systems/fresha/orders" },
      { label: "Profile & Saved", href: "/design-systems/fresha/profile" },
      { label: "Settings", href: "/design-systems/fresha/settings" },
      { label: "Delete Account", href: "/design-systems/fresha/delete-account" },
    ],
  },
  {
    title: "Legal & Auth",
    links: [
      { label: "Privacy Policy", href: "/design-systems/fresha/privacy" },
      { label: "Terms of use", href: "/design-systems/fresha/terms" },
      { label: "Log in", href: "/design-systems/fresha/login" },
      { label: "Sign up", href: "/design-systems/fresha/signup" },
      { label: "Reset password", href: "/design-systems/fresha/reset-password" },
      { label: "404 Specimen", href: "/design-systems/fresha/not-found-preview" },
    ],
  },
];

/**
 * Two-band Fresha footer: mist-gray (#f2f2f2) 5-column upper links + crisp white bottom locale utility strip.
 */
export function FreshaFooter() {
  return (
    <footer className="mt-auto">
      <div className="bg-surface text-foreground">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-12">
            <div className="space-y-5">
              <Link href="/design-systems/fresha" className="inline-block text-foreground">
                <FreshaWordmark />
              </Link>
              <div>
                <Link
                  href="/design-systems/fresha/download-app"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-border-strong bg-background px-5 text-sm font-semibold text-foreground hover:bg-background/80 transition-colors"
                >
                  <span>Get the app</span>
                  <span className="text-xs text-muted">iOS · Android</span>
                </Link>
              </div>
              <Link
                href="/design-systems"
                className="inline-block text-xs font-medium text-muted hover:text-foreground underline underline-offset-4"
              >
                ← Back to Design Systems
              </Link>
            </div>

            {FOOTER_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="text-base font-semibold text-foreground">
                  {group.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.links.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-foreground/85 hover:text-foreground hover:underline underline-offset-4 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* White bottom locale strip */}
      <div className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 lg:px-8 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-flex items-center gap-2 font-medium text-accent">
            <Globe className="h-4 w-4" />
            English
          </span>
          <p className="text-xs text-muted">
            Fresha Design System — Scoped Next.js App Router UI Kit
          </p>
        </div>
      </div>
    </footer>
  );
}
