"use client";

import { SlidersHorizontal, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FreshaEmptyOrb, FreshaMapCanvas, VenueInteriorArtwork } from "./FreshaArt";
import { FRESHA_VENUES } from "./fresha-data";

const FILTER_CATEGORIES = [
  "All",
  "Eyebrows & Lashes",
  "Barbershop",
  "Beauty Salon",
  "Massage",
  "Hair Salon",
  "Aesthetics",
];

/**
 * Interactive Discover & Search split-pane catalog matching fresha.com/search with time slots and vector map pins.
 */
export function FreshaSearchCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeSlug, setActiveSlug] = useState(FRESHA_VENUES[0].slug);
  const [showEmptyDemo, setShowEmptyDemo] = useState(false);

  const filtered = showEmptyDemo
    ? []
    : selectedCategory === "All"
      ? FRESHA_VENUES
      : FRESHA_VENUES.filter((v) => v.category === selectedCategory);

  return (
    <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-8">
      {/* Top Filter Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5">
        <div className="flex flex-wrap items-center gap-2">
          {FILTER_CATEGORIES.map((cat) => {
            const active = selectedCategory === cat && !showEmptyDemo;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setShowEmptyDemo(false);
                  setSelectedCategory(cat);
                }}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                  active
                    ? "bg-foreground text-background"
                    : "border border-border-strong bg-background text-foreground hover:bg-surface"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setShowEmptyDemo((v) => !v)}
            className="inline-flex h-9 items-center gap-2 rounded-full border border-border-strong bg-background px-4 text-xs font-semibold text-foreground hover:bg-surface transition-colors cursor-pointer"
          >
            <SlidersHorizontal className="h-3.5 w-3.5" />
            {showEmptyDemo ? "Restore results" : "Preview empty state"}
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Results Column */}
        <div className="lg:col-span-5 space-y-6">
          <p className="text-sm font-medium text-muted">
            {filtered.length} {filtered.length === 1 ? "venue" : "venues"} within map area
          </p>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-border bg-background px-6 py-20 text-center space-y-3">
              <FreshaEmptyOrb kind="search" />
              <h1 className="text-xl font-bold text-foreground">No results to display</h1>
              <p className="text-sm text-muted">
                Try adjusting your search area or clearing active filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setShowEmptyDemo(false);
                  setSelectedCategory("All");
                }}
                className="mt-2 inline-flex h-10 items-center rounded-full bg-foreground px-5 text-xs font-semibold text-background cursor-pointer"
              >
                Reset map area
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {filtered.map((venue) => {
                const isSelected = activeSlug === venue.slug;
                return (
                  <article
                    key={venue.slug}
                    onMouseEnter={() => setActiveSlug(venue.slug)}
                    className={`rounded-2xl border p-4 transition-colors ${
                      isSelected ? "border-accent bg-accent-soft/20" : "border-border bg-background"
                    }`}
                  >
                    <Link href="/design-systems/fresha/venue" className="block">
                      <div className="aspect-[3/2] w-full overflow-hidden rounded-xl">
                        <VenueInteriorArtwork variant={venue.artworkVariant} />
                      </div>
                      <div className="mt-3 flex items-baseline justify-between gap-2">
                        <h2 className="text-base font-semibold text-foreground">
                          {venue.name}
                        </h2>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold tabular-nums">
                          {venue.rating}
                          <Star className="h-3.5 w-3.5 fill-[#ffc00a] text-[#ffc00a]" />
                          <span className="font-normal text-muted">({venue.reviewsCount})</span>
                        </span>
                      </div>
                      <p className="text-sm text-muted">{venue.location}</p>
                    </Link>

                    <div className="mt-4 border-t border-border pt-3">
                      <div className="flex items-baseline justify-between gap-2 text-sm">
                        <div>
                          <p className="font-medium text-foreground">{venue.headlineService.name}</p>
                          <p className="text-xs text-muted">{venue.headlineService.duration}</p>
                        </div>
                        <span className="font-semibold text-foreground">{venue.headlineService.price}</span>
                      </div>

                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        {venue.slots.map((slot) => (
                          <Link
                            key={slot}
                            href="/design-systems/fresha/checkout"
                            className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-semibold text-accent hover:border-accent hover:bg-accent-soft/40 transition-colors"
                          >
                            {slot}
                          </Link>
                        ))}
                        <Link
                          href="/design-systems/fresha/venue"
                          className="ml-auto text-xs font-semibold text-accent hover:underline"
                        >
                          See more
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Interactive Map Column */}
        <div className="lg:col-span-7 lg:sticky lg:top-24 lg:h-[640px]">
          <FreshaMapCanvas
            venues={FRESHA_VENUES}
            activeSlug={activeSlug}
            onSelectSlug={(slug) => setActiveSlug(slug)}
          />
        </div>
      </div>
    </div>
  );
}
