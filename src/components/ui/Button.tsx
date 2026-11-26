import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "accent" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps & {
  href: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-foreground text-background border border-foreground hover:bg-neutral-800",
  outline:
    "bg-transparent text-foreground border border-foreground hover:bg-foreground hover:text-background",
  accent:
    "bg-accent text-foreground border border-accent hover:bg-accent-strong hover:text-white hover:border-accent-strong",
  ghost:
    "bg-transparent text-foreground border border-transparent hover:bg-surface",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[11px] tracking-[0.14em] uppercase font-semibold",
  md: "px-6 py-3 text-xs tracking-[0.12em] uppercase font-semibold",
  lg: "px-8 py-4 text-sm tracking-[0.1em] uppercase font-semibold",
};

/**
 * Tilda-inspired sharp-edged button and link primitive.
 */
export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 transition-colors duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ("href" in props && props.href !== undefined) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
