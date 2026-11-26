import type { ReactNode } from "react";

type BadgeTone = "neutral" | "accent" | "dark";

interface BadgeProps {
  tone?: BadgeTone;
  children: ReactNode;
  className?: string;
}

const toneClasses: Record<BadgeTone, string> = {
  neutral: "bg-surface-muted text-foreground border border-border",
  accent: "bg-accent-soft/40 text-foreground border border-accent",
  dark: "bg-foreground text-background border border-foreground",
};

/**
 * Compact label badge for categories, statuses, and plans.
 */
export function Badge({
  tone = "neutral",
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
