"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/design-systems", label: "All Systems" },
  { href: "/design-systems/jetbrains/tools", label: "Tools" },
  { href: "/design-systems/jetbrains/pricing", label: "Pricing" },
  { href: "/design-systems/jetbrains/mono", label: "Mono" },
  { href: "/design-systems/jetbrains/news", label: "News" },
  { href: "/design-systems/jetbrains/support", label: "Support" },
  { href: "/design-systems/jetbrains/contacts", label: "Contacts" },
  { href: "/design-systems/jetbrains/components", label: "Components" },
];

/**
 * JetBrains.com dark top navigation bar with square brand mark and pill CTA.
 */
export function JetBrainsNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/design-systems/jetbrains"
          className="inline-flex items-center gap-3 text-foreground"
        >
          <span className="flex h-9 w-9 flex-col justify-between bg-black p-1.5 text-[7px] font-bold leading-none tracking-wider text-white">
            <span>JET</span>
            <span>BRAINS</span>
            <span className="h-0.5 w-3 bg-white" />
          </span>
          <span className="text-sm font-semibold tracking-tight">
            JetBrains Starter
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
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

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/design-systems/jetbrains/pricing"
            className="rounded-full bg-accent px-5 py-2 text-xs font-semibold text-white hover:bg-accent-strong transition-colors"
          >
            Download
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle JetBrains navigation"
          className="md:hidden p-2 text-foreground cursor-pointer"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-surface px-6 py-4 flex flex-col gap-3">
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
