"use client";

import { ChevronDown, Menu, Search, User, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FreshaWordmark } from "./FreshaArt";

const PRIMARY_LINKS = [
  { label: "Discover", href: "/design-systems/fresha/search" },
  { label: "Venue", href: "/design-systems/fresha/venue" },
  { label: "For business", href: "/design-systems/fresha/for-business" },
  { label: "Pricing", href: "/design-systems/fresha/pricing" },
  { label: "Components", href: "/design-systems/fresha/components" },
];

const MENU_DRAWER_LINKS = [
  { label: "Appointments", href: "/design-systems/fresha/appointments" },
  { label: "Wallet & Gift Cards", href: "/design-systems/fresha/wallet" },
  { label: "Order History", href: "/design-systems/fresha/orders" },
  { label: "Profile & Saved", href: "/design-systems/fresha/profile" },
  { label: "Settings", href: "/design-systems/fresha/settings" },
  { label: "Checkout Flow", href: "/design-systems/fresha/checkout" },
  { label: "Help Center", href: "/design-systems/fresha/help" },
  { label: "Blog", href: "/design-systems/fresha/blog" },
  { label: "Careers", href: "/design-systems/fresha/careers" },
  { label: "Download App", href: "/design-systems/fresha/download-app" },
  { label: "Sitemap & Cities", href: "/design-systems/fresha/sitemap" },
];

/**
 * Sticky Fresha masthead featuring wordmark, hairline outline pills, quick search pill, and customer menu drawer.
 */
export function FreshaNavbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-4 px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link
            href="/design-systems/fresha"
            className="text-foreground hover:opacity-80 transition-opacity shrink-0"
          >
            <FreshaWordmark />
          </Link>

          <nav className="hidden lg:flex items-center gap-5" aria-label="Fresha primary">
            {PRIMARY_LINKS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    active ? "text-accent font-semibold" : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Compact center search launcher on medium+ viewports */}
        <Link
          href="/design-systems/fresha/search"
          className="hidden md:flex lg:hidden xl:flex items-center gap-3 rounded-full border border-border bg-background px-4 py-2 text-xs text-muted hover:border-border-strong transition-colors"
        >
          <Search className="h-3.5 w-3.5 text-foreground" />
          <span className="font-medium text-foreground">All treatments</span>
          <span className="h-3.5 w-px bg-border" />
          <span>Current location</span>
          <span className="h-3.5 w-px bg-border" />
          <span>Any date</span>
        </Link>

        <div className="flex items-center gap-2.5 shrink-0">
          <Link
            href="/design-systems"
            className="hidden sm:inline-block px-2 py-1 text-xs font-medium text-muted hover:text-foreground"
          >
            All Systems
          </Link>
          <Link
            href="/design-systems/fresha/for-business"
            className="hidden sm:inline-flex h-10 items-center rounded-full border border-border-strong bg-background px-4 text-sm font-semibold text-foreground hover:bg-surface transition-colors"
          >
            For business
          </Link>
          <Link
            href="/design-systems/fresha/login"
            className="hidden sm:inline-flex h-10 items-center px-3 text-sm font-semibold text-foreground hover:text-accent transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/design-systems/fresha/profile"
            aria-label="Account profile"
            className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-accent-soft text-xs font-bold text-accent hover:border-border-strong transition-colors"
          >
            <User className="h-4 w-4" />
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Toggle Fresha menu"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-border-strong bg-background px-4 text-sm font-semibold text-foreground hover:bg-surface transition-colors cursor-pointer"
          >
            <span>Menu</span>
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Expandable route & account drawer */}
      {menuOpen && (
        <div className="border-t border-border bg-background px-6 py-6 shadow-lg">
          <div className="mx-auto max-w-[1440px] space-y-5">
            <div className="flex flex-wrap gap-2 lg:hidden">
              {PRIMARY_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground hover:bg-surface"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {MENU_DRAWER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground hover:border-foreground/30 hover:bg-surface transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
              <div className="flex items-center gap-2">
                <Link
                  href="/design-systems/fresha/login"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full border border-border-strong px-5 py-2 text-xs font-semibold text-foreground hover:bg-surface"
                >
                  Log in
                </Link>
                <Link
                  href="/design-systems/fresha/signup"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full bg-foreground px-5 py-2 text-xs font-semibold text-background hover:opacity-90"
                >
                  Sign up
                </Link>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted">
                <Link href="/design-systems/fresha/privacy" onClick={() => setMenuOpen(false)} className="hover:text-foreground">
                  Privacy
                </Link>
                <Link href="/design-systems/fresha/terms" onClick={() => setMenuOpen(false)} className="hover:text-foreground">
                  Terms
                </Link>
                <Link href="/design-systems" onClick={() => setMenuOpen(false)} className="inline-flex items-center gap-1 text-accent font-medium">
                  All Design Systems <ChevronDown className="h-3 w-3 -rotate-90" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
