import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
}

/**
 * Clean underlined/bordered form input matching Tilda.cc auth and settings forms.
 */
export function Input({
  label,
  hint,
  id,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={id}
          className="text-xs font-semibold uppercase tracking-[0.1em] text-foreground"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-foreground focus:outline-none transition-colors ${className}`}
        {...props}
      />
      {hint && <span className="text-xs text-muted">{hint}</span>}
    </div>
  );
}
