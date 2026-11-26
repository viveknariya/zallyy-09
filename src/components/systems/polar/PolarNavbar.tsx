"use client";

import { ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/design-systems", label: "All Systems" },
  { href: "/design-systems/polar/dashboard", label: "Dashboard" },
  { href: "/design-systems/polar/finance", label: "Finance" },
  { href: "/design-systems/polar/onboarding", label: "Onboarding" },
  { href: "/design-systems/polar/components", label: "Components" },
];

/**
 * Polar.sh top navigation bar with concentric mark, subtle links, and black pill CTA.
 */
export function PolarNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/design-systems/polar"
          className="inline-flex items-center gap-2.5 text-foreground"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-foreground">
            <span className="h-3 w-3 rounded-full border-2 border-foreground" />
          </span>
          <span className="text-sm font-semibold tracking-tight">Polar Starter</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/design-systems/polar/login"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/design-systems/polar/dashboard"
            className="inline-flex items-center gap-1 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background hover:bg-neutral-800 transition-colors"
          >
            Get Started <ChevronRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle Polar navigation"
          className="md:hidden p-2 text-foreground cursor-pointer"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-3">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
