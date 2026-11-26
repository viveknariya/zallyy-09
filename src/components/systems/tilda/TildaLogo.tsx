/**
 * Minimalist geometric Tilda circle-T mark and 404 wavy-line emblem.
 */
export function TildaMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="20" cy="20" r="18.5" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 16.5C13.5 13.8 16.2 13.8 18.8 15.2C21.4 16.6 24.4 16.6 26.8 14.2"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M20 15.8V29"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Minimalist 404 emblem modeled after tilda.cc's error page.
 */
export function TildaNotFoundMark() {
  return (
    <svg
      viewBox="0 0 120 72"
      fill="none"
      aria-hidden="true"
      className="mx-auto h-20 w-32 text-foreground"
    >
      <circle cx="44" cy="36" r="24" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M34 31C36.2 27.5 39.8 27.5 43.2 29.4C46.6 31.3 50.4 31.3 53.6 28.2"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M44 30V48"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {[36, 44, 52, 60].map((y) => (
        <path
          key={y}
          d={`M62 ${y} C66 ${y - 3}, 70 ${y + 3}, 74 ${y} C78 ${y - 3}, 82 ${y + 3}, 86 ${y} C90 ${y - 3}, 94 ${y + 3}, 98 ${y}`}
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
}
