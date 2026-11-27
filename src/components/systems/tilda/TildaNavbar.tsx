"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { TildaMark } from "./TildaLogo";

const navLinks = [
  { href: "/design-systems", label: "All Systems" },
  { href: "/design-systems/tilda/pricing", label: "Pricing" },
  { href: "/design-systems/tilda/dashboard", label: "Dashboard" },
  { href: "/design-systems/tilda/blog", label: "Blog" },
  { href: "/design-systems/tilda/help", label: "Help" },
  { href: "/design-systems/tilda/components", label: "Components" },
];

/**
 * Tilda.cc-inspired top navigation bar with circle-T mark, tracked uppercase links, and outlined Sign Up CTA.
 */
export function TildaNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/design-systems/tilda"
          className="inline-flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight text-foreground"
        >
          <TildaMark className="h-7 w-7" />
          <span>Tilda Publishing</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7" aria-label="Tilda navigation">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/design-systems/tilda/login"
            className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground hover:text-accent-strong transition-colors"
          >
            Log In
          </Link>
          <Button href="/design-systems/tilda/signup" variant="outline" size="sm">
            Sign Up
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="tilda-mobile-menu"
          className="md:hidden -mr-3 flex h-12 w-12 items-center justify-center text-foreground cursor-pointer"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          id="tilda-mobile-menu"
          className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-1"
        >
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center text-xs font-semibold uppercase tracking-[0.14em] text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 pt-3 border-t border-border flex items-center gap-3">
            <Button href="/design-systems/tilda/login" variant="ghost" size="md">
              Log In
            </Button>
            <Button href="/design-systems/tilda/signup" variant="outline" size="md">
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
