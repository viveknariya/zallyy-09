import type { ReactNode } from "react";

type CardVariant = "bordered" | "subtle" | "surface";

interface CardProps {
  variant?: CardVariant;
  className?: string;
  children: ReactNode;
}

const variantClasses: Record<CardVariant, string> = {
  bordered: "bg-background border-2 border-foreground",
  subtle: "bg-background border border-border",
  surface: "bg-surface border border-border",
};

/**
 * Minimalist card container reflecting Tilda.cc's crisp geometric framing.
 */
export function Card({
  variant = "subtle",
  className = "",
  children,
}: CardProps) {
  return (
    <div className={`p-8 transition-colors ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}
