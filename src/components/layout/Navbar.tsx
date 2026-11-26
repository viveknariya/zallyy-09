"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/design-systems", label: "All Systems" },
  { href: "/design-systems/tilda/pricing", label: "Pricing" },
  { href: "/design-systems/tilda/projects", label: "Projects" },
  { href: "/design-systems/tilda/colors", label: "Colors" },
  { href: "/design-systems/tilda/help", label: "Help" },
  { href: "/design-systems/tilda/components", label: "Components" },
];

/**
 * Tilda.cc-inspired top navigation bar with uppercase tracked links and outlined Sign Up CTA.
 */
export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur border-b border-border">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/design-systems/tilda"
          className="font-display text-lg font-semibold tracking-tight text-foreground"
        >
          Tilda Starter
        </Link>

        <nav className="hidden md:flex items-center gap-7">
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
          <a
            href="https://github.com/viveknariya/zallyy-09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/80 hover:text-foreground transition-colors"
          >
            GitHub
          </a>
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
          className="md:hidden p-2 text-foreground cursor-pointer"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-5 flex flex-col gap-4">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-border flex items-center gap-3">
            <Button href="/design-systems/tilda/login" variant="ghost" size="sm">
              Log In
            </Button>
            <Button href="/design-systems/tilda/signup" variant="outline" size="sm">
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
