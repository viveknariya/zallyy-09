"use client";

import { Calendar, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/design-systems", label: "All Systems" },
  { href: "/design-systems/cron", label: "Calendar" },
  { href: "/design-systems/cron/settings", label: "Settings" },
  { href: "/design-systems/cron/changelog", label: "Changelog" },
  { href: "/design-systems/cron/download", label: "Download" },
  { href: "/design-systems/cron/components", label: "Components" },
];

/**
 * Cron.com dark navigation bar with vermilion accent CTA and keyboard hint.
 */
export function CronNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link
          href="/design-systems/cron"
          className="inline-flex items-center gap-2.5 text-foreground"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-white">
            <Calendar className="h-4 w-4" />
          </span>
          <span className="text-sm font-semibold tracking-tight">Cron Starter</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-medium text-muted hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <kbd className="rounded border border-border bg-surface-muted px-2 py-1 font-mono text-[11px] text-muted">
            ⌘ K
          </kbd>
          <Link
            href="/design-systems/cron/download"
            className="rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-white hover:bg-accent-strong transition-colors"
          >
            Download
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle Cron navigation"
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
