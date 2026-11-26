"use client";

import { ChevronDown, List } from "lucide-react";
import { useEffect, useState } from "react";

export interface BlogTocItem {
  id: string;
  title: string;
  number: number;
}

interface BlogTocProps {
  items: BlogTocItem[];
  title?: string;
}

/**
 * Sticky editorial table of contents styled per Tilda Sidebar and Select rules.
 */
export function BlogToc({ items, title = "On This Page" }: BlogTocProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          visible.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-96px 0px -55% 0px",
        threshold: [0, 0.25, 0.75],
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const handleScrollTo = (id: string) => {
    setMobileOpen(false);
    setActiveId(id);
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: "smooth" });
  };

  if (!items.length) return null;

  const activeItem = items.find((item) => item.id === activeId) ?? items[0];

  return (
    <>
      {/* Mobile collapsible TOC */}
      <div className="lg:hidden sticky top-16 z-30 border-b border-border bg-background py-3">
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          className="flex w-full items-center justify-between border border-border bg-background px-4 py-3 text-left text-sm text-foreground focus:border-foreground focus:outline-none cursor-pointer"
        >
          <span className="flex items-center gap-2.5 truncate">
            <List className="h-4 w-4 shrink-0 text-muted" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
              {title}:
            </span>
            <span className="truncate font-medium text-foreground">
              {activeItem?.title}
            </span>
          </span>
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-muted transition-transform ${
              mobileOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {mobileOpen && (
          <nav
            aria-label="Mobile table of contents"
            className="mt-1 border-2 border-foreground bg-background divide-y divide-border"
          >
            {items.map((item, idx) => {
              const isActive = activeId === item.id;
              const num = String(item.number ?? idx + 1).padStart(2, "0");
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleScrollTo(item.id)}
                  className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors cursor-pointer ${
                    isActive
                      ? "bg-surface font-semibold text-foreground border-l-2 border-accent-strong"
                      : "text-muted hover:bg-surface-muted hover:text-foreground"
                  }`}
                >
                  <span className="font-mono text-xs text-muted">{num}</span>
                  <span className="truncate">{item.title}</span>
                </button>
              );
            })}
          </nav>
        )}
      </div>

      {/* Desktop sticky sidebar */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-24 border border-border bg-background p-6">
          <div className="mb-4 flex items-center gap-2 border-b border-border pb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
            <List className="h-3.5 w-3.5" />
            <span>{title}</span>
          </div>

          <nav aria-label="Table of contents" className="space-y-1">
            {items.map((item, idx) => {
              const isActive = activeId === item.id;
              const num = String(item.number ?? idx + 1).padStart(2, "0");
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleScrollTo(item.id)}
                  className={`flex w-full items-start gap-3 px-3 py-2 text-left text-sm transition-colors cursor-pointer ${
                    isActive
                      ? "border-l-2 border-accent-strong bg-surface font-semibold text-foreground"
                      : "border-l-2 border-transparent text-muted hover:bg-surface/60 hover:text-foreground"
                  }`}
                >
                  <span className="font-mono text-xs pt-0.5 text-muted">
                    {num}
                  </span>
                  <span className="leading-snug">{item.title}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
