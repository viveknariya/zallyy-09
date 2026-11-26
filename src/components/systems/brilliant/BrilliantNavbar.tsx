"use client";

import { BookOpen, Home, Menu, Puzzle, Shapes, Sparkles, X, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrilliantMark } from "./BrilliantLogo";

const NAV_ITEMS = [
  { label: "Home", href: "/design-systems/brilliant/home", icon: Home },
  { label: "Courses", href: "/design-systems/brilliant/courses", icon: BookOpen },
  { label: "Lesson", href: "/design-systems/brilliant/lesson", icon: Puzzle },
  { label: "Educators", href: "/design-systems/brilliant/educators", icon: Sparkles },
  { label: "Components", href: "/design-systems/brilliant/components", icon: Shapes },
];

/**
 * Brilliant top navigation bar featuring active bottom-border tabs, Gift Premium green pill, and streak lightning badge.
 */
export function BrilliantNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-7">
          <Link
            href="/design-systems/brilliant"
            className="flex items-center gap-2 text-lg font-bold tracking-tight text-foreground"
          >
            <BrilliantMark className="h-6 w-6" />
            <span>Brilliant</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6" aria-label="Brilliant primary">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex h-16 items-center gap-1.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-foreground font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-foreground"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/design-systems"
            className="text-xs font-medium text-muted hover:text-foreground px-2 py-1"
          >
            All Systems
          </Link>
          <Link
            href="/design-systems/brilliant/subscribe"
            className="rounded-full border border-accent px-4 py-1.5 text-xs font-semibold text-accent-strong hover:bg-accent-soft transition-colors"
          >
            Gift Premium
          </Link>
          <Link
            href="/design-systems/brilliant/home"
            className="inline-flex items-center gap-1 rounded-full bg-[#FDE047] px-3 py-1.5 text-xs font-bold text-foreground"
            title="Daily learning streak"
          >
            <span>2</span>
            <Zap className="h-3.5 w-3.5 fill-foreground text-foreground" />
          </Link>
          <Link
            href="/design-systems/brilliant/login"
            className="rounded-full border border-border px-4 py-1.5 text-xs font-semibold text-foreground hover:bg-surface transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/design-systems/brilliant/signup"
            className="rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-white hover:bg-accent-strong transition-colors"
          >
            Sign up
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground cursor-pointer"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-surface"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/design-systems/brilliant/subscribe"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-accent-strong hover:bg-accent-soft"
            >
              Premium &amp; Pricing
            </Link>
            <Link
              href="/design-systems/brilliant/settings"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted hover:bg-surface"
            >
              Settings
            </Link>
            <Link
              href="/design-systems"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted hover:bg-surface"
            >
              All Design Systems
            </Link>
          </nav>
          <div className="flex items-center gap-2 pt-2 border-t border-border">
            <Link
              href="/design-systems/brilliant/login"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-full border border-border py-2 text-center text-xs font-semibold text-foreground"
            >
              Log in
            </Link>
            <Link
              href="/design-systems/brilliant/signup"
              onClick={() => setOpen(false)}
              className="flex-1 rounded-full bg-accent py-2 text-center text-xs font-semibold text-white"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
