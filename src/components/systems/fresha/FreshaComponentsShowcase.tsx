"use client";

import { Check, Heart, Search, Sparkles, Star } from "lucide-react";
import { useState } from "react";
import { FreshaEmptyOrb, FreshaQrTile, VenueInteriorArtwork } from "./FreshaArt";

const FRESHA_TOKENS = [
  { name: "Canvas White", hex: "#FFFFFF", cls: "bg-background border border-border" },
  { name: "Mist Gray", hex: "#F2F2F2", cls: "bg-surface border border-border" },
  { name: "Near Black Ink", hex: "#0D0D0D", cls: "bg-foreground" },
  { name: "Locale & Action Violet", hex: "#6950F3", cls: "bg-accent" },
  { name: "Proof Rose → Violet", hex: "#EF6997 → #B84CDC", cls: "bg-gradient-to-r from-[#ef6997] via-[#e85cba] to-[#b84cdc]" },
  { name: "Business Acid Lime", hex: "#C5FF00", cls: "bg-[#c5ff00] border border-border" },
];

/**
 * Interactive Fresha UI Kit specimen page showcasing tokens, Inter/Roobert scale,
 * search capsule, 3:2 photo cards, gradient wallet card, booking slots, and empty states.
 */
export function FreshaComponentsShowcase() {
  const [alertsOn, setAlertsOn] = useState(true);
  const [activeSlot, setActiveSlot] = useState("10:15 AM");
  const [liked, setLiked] = useState(true);
  const [cityTab, setCityTab] = useState("United States");

  return (
    <div className="mx-auto max-w-6xl px-6 py-16 space-y-14">
      <div className="space-y-3">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3.5 py-1 text-xs font-semibold text-accent">
          <Sparkles className="h-3.5 w-3.5" />
          Fresha Design System
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Beauty &amp; Wellness Marketplace UI Kit
        </h1>
        <p className="max-w-2xl text-base text-muted">
          Bright white marketplace canvas, bold grotesk sentence-case hierarchy, translucent capsule controls, #6950F3 accent utilities, mist-gray review surfaces, and radiant proof gradients.
        </p>
      </div>

      {/* Color Tokens */}
      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-foreground">Color Tokens</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {FRESHA_TOKENS.map((t) => (
            <div key={t.name} className="space-y-2">
              <div className={`h-20 w-full rounded-2xl ${t.cls}`} />
              <p className="text-xs font-semibold text-foreground">{t.name}</p>
              <p className="font-mono text-[11px] text-muted">{t.hex}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Typography Specimens */}
      <section className="rounded-2xl bg-surface p-8 space-y-6">
        <h2 className="text-2xl font-bold text-foreground">Typography Scale</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-background p-6 border border-border space-y-2">
            <span className="font-mono text-[11px] text-muted">Display 64/68</span>
            <p className="text-3xl font-bold tracking-tight text-foreground">
              Book local services
            </p>
            <p className="text-xs text-muted">
              Sentence-case bold grotesk with tight -0.02em tracking.
            </p>
          </div>
          <div className="rounded-2xl bg-background p-6 border border-border space-y-2">
            <span className="font-mono text-[11px] text-muted">Proof Figure 96/112</span>
            <p className="bg-gradient-to-r from-[#ef6997] via-[#e85cba] to-[#b84cdc] bg-clip-text text-4xl font-bold text-transparent">
              1 billion+
            </p>
            <p className="text-xs text-muted">
              Reserved exclusively for the centerpiece proof statistic.
            </p>
          </div>
          <div className="rounded-2xl bg-background p-6 border border-border space-y-2">
            <span className="font-mono text-[11px] text-muted">Control &amp; Rating</span>
            <p className="flex items-center gap-1.5 text-base font-semibold text-foreground tabular-nums">
              4.9 <Star className="h-4 w-4 fill-[#ffc00a] text-[#ffc00a]" /> (393)
            </p>
            <p className="text-xs text-muted">
              Tabular numerals paired with #FFC00A gold rating stars.
            </p>
          </div>
        </div>
      </section>

      {/* Capsule Controls & Interactive Form Pieces */}
      <section className="space-y-5">
        <h2 className="text-2xl font-bold text-foreground">
          Action Pills, Search Capsule &amp; Controls
        </h2>
        <div className="rounded-2xl border border-border bg-background p-8 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="inline-flex h-12 items-center rounded-full bg-foreground px-6 text-sm font-semibold text-background cursor-pointer"
            >
              Search
            </button>
            <button
              type="button"
              className="inline-flex h-12 items-center rounded-xl bg-accent px-6 text-sm font-semibold text-white hover:bg-accent-strong cursor-pointer"
            >
              Sign up for free
            </button>
            <button
              type="button"
              className="inline-flex h-12 items-center rounded-full border border-border-strong bg-background px-5 text-sm font-semibold text-foreground hover:bg-surface cursor-pointer"
            >
              For business
            </button>
            <span className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
              <Check className="h-3.5 w-3.5" /> Confirmed
            </span>
            <button
              type="button"
              role="switch"
              aria-checked={alertsOn}
              onClick={() => setAlertsOn((v) => !v)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer ${
                alertsOn ? "bg-accent" : "bg-surface-muted border border-border"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                  alertsOn ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between rounded-full border border-border bg-background px-5 py-3 shadow-sm max-w-xl">
            <span className="inline-flex items-center gap-2.5 text-sm font-medium text-foreground">
              <Search className="h-4 w-4 text-muted" />
              All treatments and venues
            </span>
            <span className="rounded-full bg-foreground px-4 py-1.5 text-xs font-semibold text-background">
              Search
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {["United States", "Australia", "United Kingdom", "Canada"].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCityTab(c)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold cursor-pointer ${
                  cityTab === c
                    ? "bg-foreground text-background"
                    : "shadow-[inset_0_0_0_1px_#e5e5e5] text-foreground hover:bg-surface"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Cards Grid */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* 3:2 Venue Photo Listing */}
        <div className="rounded-2xl border border-border bg-background p-5 space-y-3">
          <div className="relative aspect-[3/2] overflow-hidden rounded-xl">
            <VenueInteriorArtwork variant="lash" />
            <span className="absolute left-3 top-3 rounded-full bg-white/80 backdrop-blur px-2.5 py-0.5 text-xs font-semibold text-foreground">
              Featured
            </span>
            <button
              type="button"
              onClick={() => setLiked((v) => !v)}
              aria-label="Toggle favorite"
              className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#131313]/35 text-white cursor-pointer"
            >
              <Heart className={`h-4 w-4 ${liked ? "fill-[#ef6997] text-[#ef6997]" : ""}`} />
            </button>
          </div>
          <div className="flex items-baseline justify-between">
            <p className="text-base font-semibold">Lash Lab Inc.</p>
            <span className="text-xs font-semibold">4.9 ★ (393)</span>
          </div>
          <p className="text-xs text-muted">Cow Hollow, San Francisco</p>
        </div>

        {/* Gradient Wallet & Booking Slots */}
        <div className="space-y-4">
          <div className="rounded-2xl bg-gradient-to-r from-[#5648f5] via-[#8b5cf6] to-[#e85cba] p-6 text-white">
            <p className="text-3xl font-bold tabular-nums">$75.00</p>
            <p className="text-xs text-white/85 mt-1">Wallet balance</p>
          </div>

          <div className="rounded-2xl border border-border bg-background p-5 space-y-3">
            <p className="text-xs font-bold text-foreground">Quick time slots</p>
            <div className="flex flex-wrap gap-2">
              {["09:00 AM", "10:15 AM", "11:30 AM"].map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setActiveSlot(slot)}
                  className={`rounded-lg border px-3 py-1.5 text-xs font-semibold cursor-pointer ${
                    activeSlot === slot
                      ? "border-accent bg-accent-soft text-accent"
                      : "border-border text-foreground hover:bg-surface"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Empty Orb + QR Tile */}
        <div className="rounded-2xl border border-border bg-background p-6 flex flex-col items-center justify-between text-center gap-4">
          <FreshaEmptyOrb kind="orders" />
          <div>
            <p className="text-sm font-bold text-foreground">No product orders</p>
            <p className="text-xs text-muted mt-1">Empty-state visual grammar</p>
          </div>
          <FreshaQrTile size="sm" />
        </div>
      </section>
    </div>
  );
}
