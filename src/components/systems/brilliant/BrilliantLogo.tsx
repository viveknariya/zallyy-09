import type { SVGProps } from "react";

/**
 * Geometric Brilliant diamond-keyhole brand mark observed across auth, onboarding, and blog screens.
 */
export function BrilliantMark({
  className = "h-7 w-7",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <rect
        x="18"
        y="2"
        width="22.6"
        height="22.6"
        rx="5"
        transform="rotate(45 18 2)"
        fill="#36C45A"
      />
      <rect
        x="12"
        y="12"
        width="12"
        height="12"
        rx="2.5"
        fill="#FFFFFF"
      />
      <rect x="15.5" y="16" width="5" height="8" rx="1" fill="#111111" />
    </svg>
  );
}

/**
 * Interactive balance-scale puzzle illustration matching brilliant.org Quiz & Poll screens.
 */
export function BalancePuzzleSvg({ className = "w-full max-w-md" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 220" fill="none" className={className} aria-label="Balance scales puzzle">
      {/* Scale 1: tilted slightly left */}
      <g transform="translate(0, 10)">
        <rect x="176" y="34" width="8" height="24" rx="2" fill="#737373" />
        <rect x="158" y="56" width="44" height="6" rx="3" fill="#525252" />
        <line x1="112" y1="36" x2="248" y2="28" stroke="#404040" strokeWidth="3.5" strokeLinecap="round" />
        <rect x="92" y="36" width="44" height="5" rx="2.5" fill="#9CA3AF" />
        <rect x="224" y="28" width="44" height="5" rx="2.5" fill="#9CA3AF" />
        <circle cx="114" cy="24" r="10" fill="#818CF8" stroke="#4F46E5" strokeWidth="1.5" />
        <rect x="228" y="13" width="14" height="14" rx="2" fill="#D9F99D" stroke="#65A30D" strokeWidth="1.5" />
        <polygon points="254,13 262,27 246,27" fill="#FB923C" stroke="#EA580C" strokeWidth="1.5" />
      </g>

      {/* Scale 2: tilted right */}
      <g transform="translate(0, 82)">
        <rect x="176" y="34" width="8" height="24" rx="2" fill="#737373" />
        <rect x="158" y="56" width="44" height="6" rx="3" fill="#525252" />
        <line x1="112" y1="28" x2="248" y2="38" stroke="#404040" strokeWidth="3.5" strokeLinecap="round" />
        <rect x="92" y="28" width="44" height="5" rx="2.5" fill="#9CA3AF" />
        <rect x="224" y="38" width="44" height="5" rx="2.5" fill="#9CA3AF" />
        <circle cx="106" cy="17" r="9" fill="#818CF8" stroke="#4F46E5" strokeWidth="1.5" />
        <polygon points="124,11 132,26 116,26" fill="#FB923C" stroke="#EA580C" strokeWidth="1.5" />
        <rect x="227" y="23" width="12" height="12" rx="1.5" fill="#D9F99D" stroke="#65A30D" strokeWidth="1.2" />
        <rect x="240" y="23" width="12" height="12" rx="1.5" fill="#D9F99D" stroke="#65A30D" strokeWidth="1.2" />
        <rect x="253" y="23" width="12" height="12" rx="1.5" fill="#D9F99D" stroke="#65A30D" strokeWidth="1.2" />
        <rect x="227" y="10" width="12" height="12" rx="1.5" fill="#D9F99D" stroke="#65A30D" strokeWidth="1.2" />
        <rect x="240" y="10" width="12" height="12" rx="1.5" fill="#D9F99D" stroke="#65A30D" strokeWidth="1.2" />
      </g>

      {/* Scale 3: unknown */}
      <g transform="translate(0, 154)">
        <rect x="176" y="32" width="8" height="22" rx="2" fill="#737373" />
        <rect x="158" y="52" width="44" height="6" rx="3" fill="#525252" />
        <line x1="112" y1="32" x2="248" y2="32" stroke="#404040" strokeWidth="3.5" strokeLinecap="round" />
        <rect x="92" y="32" width="44" height="5" rx="2.5" fill="#9CA3AF" />
        <rect x="224" y="32" width="44" height="5" rx="2.5" fill="#9CA3AF" />
        <circle cx="114" cy="20" r="10" fill="#818CF8" stroke="#4F46E5" strokeWidth="1.5" />
        <text x="180" y="22" textAnchor="middle" fontSize="16" fontWeight="700" fill="#111111">?</text>
        <rect x="226" y="18" width="12" height="12" rx="1.5" fill="#D9F99D" stroke="#65A30D" strokeWidth="1.2" />
        <rect x="240" y="18" width="12" height="12" rx="1.5" fill="#D9F99D" stroke="#65A30D" strokeWidth="1.2" />
        <rect x="254" y="18" width="12" height="12" rx="1.5" fill="#D9F99D" stroke="#65A30D" strokeWidth="1.2" />
      </g>
    </svg>
  );
}

/**
 * Undefined derivative |x| graph featured on Brilliant's 404 Page.
 */
export function UndefinedDerivativeSvg({ className = "w-72 h-48" }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 180" fill="none" className={className} aria-label="Graph of absolute value of x">
      {/* Y axis */}
      <line x1="140" y1="16" x2="140" y2="164" stroke="#D4D4D8" strokeWidth="2" />
      <polygon points="140,10 135,20 145,20" fill="#D4D4D8" />
      {/* X axis */}
      <line x1="20" y1="126" x2="260" y2="126" stroke="#D4D4D8" strokeWidth="2" />
      <polygon points="14,126 24,121 24,131" fill="#D4D4D8" />
      <polygon points="266,126 256,121 256,131" fill="#D4D4D8" />
      {/* |x| V-curve in mint/emerald */}
      <polyline
        points="48,34 140,126 232,34"
        stroke="#4ADE80"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="140" cy="126" r="4.5" fill="#FFFFFF" stroke="#16A34A" strokeWidth="2.5" />
    </svg>
  );
}
