import type { FreshaVenue } from "./fresha-data";

/**
 * Fresha geometric lowercase wordmark with optional signature violet sphere badge.
 */
export function FreshaWordmark({
  showDot = false,
  className = "text-[22px]",
}: {
  showDot?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 font-bold tracking-[-0.04em] leading-none ${className}`}>
      {showDot && (
        <span
          aria-hidden="true"
          className="inline-block h-5 w-5 rounded-full bg-gradient-to-br from-[#9e8cff] via-[#6950f3] to-[#4329c7]"
        />
      )}
      <span>fresha</span>
    </span>
  );
}

/**
 * Pastel gradient spherical icon matching Fresha's empty states and order placeholders.
 */
export function FreshaEmptyOrb({
  kind = "orders",
}: {
  kind?: "orders" | "favorites" | "forms" | "calendar" | "search";
}) {
  return (
    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#eeebff] via-[#d5d3ff] to-[#e85cba]/40 shadow-inner">
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#6950f3]" fill="none" stroke="currentColor" strokeWidth="1.8">
        {kind === "favorites" && (
          <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" fill="currentColor" fillOpacity="0.22" />
        )}
        {kind === "orders" && (
          <>
            <rect x="6" y="7" width="12" height="13" rx="3" fill="currentColor" fillOpacity="0.18" />
            <path d="M9 7V6a3 3 0 0 1 6 0v1" />
          </>
        )}
        {kind === "forms" && (
          <>
            <rect x="6" y="4" width="12" height="16" rx="2.5" fill="currentColor" fillOpacity="0.18" />
            <path d="M9 9h6M9 13h6M9 17h3" />
          </>
        )}
        {kind === "calendar" && (
          <>
            <rect x="4" y="5" width="16" height="15" rx="3" fill="currentColor" fillOpacity="0.18" />
            <path d="M8 3v4M16 3v4M4 10h16" />
          </>
        )}
        {kind === "search" && (
          <>
            <circle cx="11" cy="11" r="6" fill="currentColor" fillOpacity="0.18" />
            <path d="M15.5 15.5L20 20" strokeLinecap="round" />
          </>
        )}
      </svg>
    </div>
  );
}

/**
 * Framed QR code tile matching the Download the Fresha app section.
 */
export function FreshaQrTile({ size = "md" }: { size?: "sm" | "md" }) {
  const dim = size === "sm" ? "h-28 w-28 p-3.5" : "h-[148px] w-[148px] p-5";
  return (
    <div
      className={`inline-flex items-center justify-center rounded-2xl border border-border bg-background ${dim}`}
      aria-label="Scan QR code to get the mobile app"
    >
      <svg viewBox="0 0 36 36" className="h-full w-full text-foreground" fill="currentColor">
        <path d="M2 2h10v10H2V2zm2 2v6h6V4H4zm2 2h2v2H6V6z" />
        <path d="M24 2h10v10H24V2zm2 2v6h6V4h-6zm2 2h2v2h-2V6z" />
        <path d="M2 24h10v10H2V24zm2 2v6h6v-6H4zm2 2h2v2H6v-2z" />
        <rect x="14" y="2" width="2" height="4" />
        <rect x="18" y="4" width="4" height="2" />
        <rect x="14" y="8" width="4" height="2" />
        <rect x="20" y="8" width="2" height="4" />
        <rect x="2" y="14" width="4" height="2" />
        <rect x="8" y="14" width="6" height="2" />
        <rect x="16" y="12" width="2" height="6" />
        <rect x="20" y="14" width="4" height="2" />
        <rect x="26" y="14" width="4" height="2" />
        <rect x="32" y="14" width="2" height="6" />
        <rect x="4" y="18" width="6" height="2" />
        <rect x="12" y="18" width="2" height="4" />
        <rect x="16" y="20" width="6" height="2" />
        <rect x="24" y="18" width="4" height="4" />
        <rect x="30" y="22" width="4" height="2" />
        <rect x="14" y="24" width="2" height="4" />
        <rect x="18" y="24" width="4" height="4" />
        <rect x="24" y="26" width="2" height="4" />
        <rect x="28" y="26" width="6" height="2" />
        <rect x="14" y="30" width="4" height="4" />
        <rect x="20" y="32" width="4" height="2" />
        <rect x="28" y="30" width="6" height="4" />
      </svg>
    </div>
  );
}

/**
 * Atmospheric architectural 3:2 interior artwork representing real salons, barbershops, and spas.
 */
export function VenueInteriorArtwork({
  variant,
  className = "h-full w-full",
}: {
  variant: FreshaVenue["artworkVariant"];
  className?: string;
}) {
  const palettes: Record<
    FreshaVenue["artworkVariant"],
    { wall: string; accent: string; wood: string; light: string }
  > = {
    lash: { wall: "#ECE7E1", accent: "#C9B9A6", wood: "#3A2E28", light: "#FFF7EB" },
    barber: { wall: "#2B2D31", accent: "#B8844E", wood: "#1A1B1E", light: "#F5DEB3" },
    spa: { wall: "#E4ECE8", accent: "#9AB5A8", wood: "#6E5644", light: "#FAFDFB" },
    studio: { wall: "#F2EFEA", accent: "#6950F3", wood: "#2E2E34", light: "#FFFFFF" },
    salon: { wall: "#EFE9E6", accent: "#D5B6AE", wood: "#4C3B34", light: "#FFF8F5" },
    massage: { wall: "#E7E2DC", accent: "#B79E85", wood: "#524136", light: "#FFF4E0" },
  };
  const p = palettes[variant];

  return (
    <svg viewBox="0 0 360 240" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id={`wall-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={p.light} />
          <stop offset="100%" stopColor={p.wall} />
        </linearGradient>
        <radialGradient id={`lamp-${variant}`} cx="50%" cy="25%" r="55%">
          <stop offset="0%" stopColor={p.light} stopOpacity="0.8" />
          <stop offset="100%" stopColor={p.wall} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="360" height="240" fill={`url(#wall-${variant})`} />
      <rect width="360" height="240" fill={`url(#lamp-${variant})`} />
      {/* Floor */}
      <rect x="0" y="175" width="360" height="65" fill={p.accent} fillOpacity="0.35" />
      {/* Architectural arches / mirrors */}
      <rect x="46" y="34" width="74" height="122" rx="37" fill="#FFFFFF" fillOpacity="0.65" stroke={p.wood} strokeOpacity="0.22" strokeWidth="2" />
      <rect x="143" y="34" width="74" height="122" rx="37" fill="#FFFFFF" fillOpacity="0.72" stroke={p.wood} strokeOpacity="0.22" strokeWidth="2" />
      <rect x="240" y="34" width="74" height="122" rx="37" fill="#FFFFFF" fillOpacity="0.6" stroke={p.wood} strokeOpacity="0.22" strokeWidth="2" />
      {/* Pendant lights */}
      <line x1="83" y1="0" x2="83" y2="28" stroke={p.wood} strokeOpacity="0.4" strokeWidth="1.5" />
      <circle cx="83" cy="30" r="6" fill={p.light} stroke={p.wood} strokeOpacity="0.3" />
      <line x1="180" y1="0" x2="180" y2="26" stroke={p.wood} strokeOpacity="0.4" strokeWidth="1.5" />
      <circle cx="180" cy="28" r="7" fill={p.light} stroke={p.wood} strokeOpacity="0.3" />
      <line x1="277" y1="0" x2="277" y2="28" stroke={p.wood} strokeOpacity="0.4" strokeWidth="1.5" />
      <circle cx="277" cy="30" r="6" fill={p.light} stroke={p.wood} strokeOpacity="0.3" />
      {/* Workstations / treatment chairs */}
      <rect x="58" y="142" width="50" height="42" rx="10" fill={p.wood} fillOpacity="0.88" />
      <rect x="152" y="138" width="56" height="46" rx="12" fill={p.wood} fillOpacity="0.92" />
      <rect x="252" y="142" width="50" height="42" rx="10" fill={p.wood} fillOpacity="0.85" />
      {/* Counter & ceramic vessel */}
      <rect x="18" y="164" width="324" height="14" rx="4" fill={p.wood} fillOpacity="0.16" />
      <circle cx="318" cy="154" r="9" fill={p.accent} />
      <path d="M318 145c-4-9 1-18 6-22M318 145c3-8 10-14 14-15" stroke="#4D7C5D" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Straight-on scheduling calendar UI preview matching Fresha for Business & Pricing hero screens.
 */
export function FreshaCalendarScene({ compact = false }: { compact?: boolean }) {
  const columns = [
    {
      name: "Mary",
      badgeBg: "bg-[#FCE7F3] text-[#9D174D]",
      blocks: [
        { time: "9:00 – 10:00", client: "Brenda Massey", service: "Blow Dry", tone: "bg-[#D8F3DC] border-l-[#2D6A4F]" },
        { time: "11:00 – 12:00", client: "Beverly Brown", service: "Hair Colouring", tone: "bg-[#FDE2E4] border-l-[#C9184A]" },
        { time: "2:00 – 3:00", client: "Mary Lee Fisher", service: "Hair Colouring", tone: "bg-[#E0F2FE] border-l-[#0284C7]" },
      ],
    },
    {
      name: "John",
      badgeBg: "bg-[#E0E7FF] text-[#3730A3]",
      blocks: [
        { time: "9:00 – 10:00", client: "Zachary Kelley", service: "Beard Grooming", tone: "bg-[#E0E7FF] border-l-[#4F46E5]" },
        { time: "11:30 – 12:30", client: "Kevin Adams", service: "Hair & Beard Cut", tone: "bg-[#FEF3C7] border-l-[#D97706]" },
      ],
    },
    {
      name: "Miranda",
      badgeBg: "bg-[#FEF3C7] text-[#92400E]",
      blocks: [
        { time: "9:45 – 11:00", client: "Diane Campos", service: "Balinese Massage", tone: "bg-[#CCFBF1] border-l-[#0D9488]" },
        { time: "1:00 – 2:00", client: "Matilda Evans", service: "Blow Dry", tone: "bg-[#EDE9FE] border-l-[#6950F3]" },
      ],
    },
  ];

  return (
    <div className="relative rounded-2xl border-2 border-[#0d0d0d] bg-background shadow-xl overflow-hidden text-foreground">
      {/* Mini app chrome */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5 bg-background">
        <div className="flex items-center gap-3">
          <FreshaWordmark showDot className="text-sm" />
          <span className="hidden sm:inline-flex rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium text-muted">
            Beauty Shop &amp; SPA
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] font-medium">
            Today
          </span>
          <span className="rounded-full bg-[#0d0d0d] px-2.5 py-0.5 text-[11px] font-semibold text-white">
            Add new
          </span>
        </div>
      </div>

      {/* Staff row */}
      <div className={`grid ${compact ? "grid-cols-2" : "grid-cols-3"} border-b border-border bg-surface/40`}>
        {(compact ? columns.slice(0, 2) : columns).map((col) => (
          <div key={col.name} className="flex flex-col items-center gap-1 py-2.5 border-r last:border-r-0 border-border">
            <span className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold ${col.badgeBg}`}>
              {col.name[0]}
            </span>
            <span className="text-[11px] font-semibold">{col.name}</span>
          </div>
        ))}
      </div>

      {/* Appointment grid */}
      <div className={`grid ${compact ? "grid-cols-2" : "grid-cols-3"} gap-2 p-3 bg-background`}>
        {(compact ? columns.slice(0, 2) : columns).map((col) => (
          <div key={col.name} className="space-y-2">
            {col.blocks.map((blk) => (
              <div
                key={blk.client}
                className={`rounded-lg border-l-[3px] px-2.5 py-2 text-[11px] ${blk.tone}`}
              >
                <p className="font-medium text-muted text-[10px]">{blk.time}</p>
                <p className="font-semibold text-foreground truncate">{blk.client}</p>
                <p className="text-muted truncate">{blk.service}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Interactive vector city map canvas matching Fresha's search & venue location view.
 */
export function FreshaMapCanvas({
  activeSlug,
  onSelectSlug,
  venues,
}: {
  activeSlug?: string;
  onSelectSlug?: (slug: string) => void;
  venues: FreshaVenue[];
}) {
  const pins = [
    { x: "26%", y: "42%" },
    { x: "54%", y: "34%" },
    { x: "68%", y: "58%" },
    { x: "38%", y: "66%" },
    { x: "76%", y: "28%" },
  ];

  return (
    <div className="relative h-full min-h-[360px] w-full overflow-hidden rounded-2xl border border-border bg-[#E4F0E8]">
      {/* Stylized vector roads & blocks */}
      <svg viewBox="0 0 600 440" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect width="600" height="440" fill="#EDF3F0" />
        <path d="M0 0h600v82C460 95 260 65 0 96V0z" fill="#A6DCF0" />
        <rect x="65" y="135" width="95" height="65" rx="6" fill="#CBE4D0" />
        <rect x="330" y="250" width="110" height="75" rx="6" fill="#CBE4D0" />
        <g stroke="#FFFFFF" strokeWidth="6" fill="none">
          <path d="M0 140h600" />
          <path d="M0 230h600" />
          <path d="M0 320h600" />
          <path d="M120 75v365" />
          <path d="M240 68v372" />
          <path d="M360 72v368" />
          <path d="M480 65v375" />
        </g>
        <path d="M20 390L560 95" stroke="#D7E2EB" strokeWidth="10" fill="none" />
      </svg>

      {/* Interactive score pins */}
      {venues.slice(0, 5).map((v, i) => {
        const pos = pins[i % pins.length];
        const isActive = activeSlug === v.slug;
        return (
          <button
            key={v.slug}
            type="button"
            onClick={() => onSelectSlug?.(v.slug)}
            style={{ left: pos.x, top: pos.y }}
            className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full px-3 py-1 text-xs font-bold shadow-md transition-transform hover:scale-105 cursor-pointer ${
              isActive
                ? "bg-[#6950f3] text-white ring-4 ring-[#6950f3]/25"
                : "bg-[#0d0d0d] text-white"
            }`}
          >
            {v.rating}
          </button>
        );
      })}

      {/* Map zoom controls */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-1.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-background border border-border text-sm font-bold shadow-sm">
          +
        </span>
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-background border border-border text-sm font-bold shadow-sm">
          −
        </span>
      </div>
    </div>
  );
}
