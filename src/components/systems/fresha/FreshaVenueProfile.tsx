"use client";

import { Check, Clock, Heart, MapPin, Share2, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FreshaMapCanvas, VenueInteriorArtwork } from "./FreshaArt";
import { FRESHA_VENUES, VENUE_SERVICES } from "./fresha-data";
import { FreshaVenueCard } from "./FreshaVenueCard";

const SERVICE_CATEGORIES = [
  "Premium Lash Services",
  "Maintenance Appointments",
  "Tints",
  "Foreign Fills",
  "Membership Fills",
];

const VENUE_REVIEWS = [
  { initials: "J", name: "Jovon L.", date: "Wed, Nov 27", comment: "Great service, my lash specialist always nails the natural curl effortlessly." },
  { initials: "W", name: "Wendover B.", date: "Tue, Nov 19", comment: "Excellent work and spotless studio. Checking in took ten seconds." },
  { initials: "A", name: "Alyssa Z.", date: "Fri, Nov 15", comment: "Provided thoughtful consultation before my appointment. Feel so polished!" },
  { initials: "R", name: "Rena G.", date: "Thu, Oct 31", comment: "Best lash studio in Cow Hollow. Zero irritation and lasted four weeks." },
];

/**
 * Venue storefront page matching fresha.com/a/... with photo mosaic, categorized service menu, sticky booking card, and map.
 */
export function FreshaVenueProfile() {
  const [selectedCat, setSelectedCat] = useState(SERVICE_CATEGORIES[0]);
  const [selectedIds, setSelectedIds] = useState<string[]>(["lash-lift"]);
  const [liked, setLiked] = useState(false);

  const venue = FRESHA_VENUES[0];
  const visibleServices = VENUE_SERVICES.filter((s) => s.category === selectedCat);

  const toggleService = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedItems = VENUE_SERVICES.filter((s) => selectedIds.includes(s.id));
  const totalAmount = selectedItems.reduce((sum, item) => sum + item.priceNumeric, 0);

  return (
    <div className="mx-auto max-w-[1440px] px-6 lg:px-8 py-10 space-y-14">
      {/* Header & Mosaic */}
      <section className="space-y-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs text-muted">
              Eyebrows &amp; Lashes · San Francisco · Pacific Heights ·{" "}
              <span className="font-semibold text-foreground">{venue.name}</span>
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {venue.name}
            </h1>
            <p className="mt-2 flex flex-wrap items-center gap-2 text-sm text-foreground">
              <span className="inline-flex items-center gap-1 font-semibold">
                {venue.rating}
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[#ffc00a] text-[#ffc00a]" />
                ))}
                <span className="font-normal text-accent">({venue.reviewsCount})</span>
              </span>
              <span className="text-muted">·</span>
              <span className="text-muted">Open 10:30 AM – 7:30 PM</span>
              <span className="text-muted">·</span>
              <span className="text-muted">{venue.location}</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Share venue"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong bg-background hover:bg-surface cursor-pointer"
            >
              <Share2 className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setLiked((v) => !v)}
              aria-label="Favorite venue"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong bg-background hover:bg-surface cursor-pointer"
            >
              <Heart className={`h-4 w-4 ${liked ? "fill-[#ef6997] text-[#ef6997]" : ""}`} />
            </button>
          </div>
        </div>

        {/* 2+1 Photo Mosaic */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="lg:col-span-8 aspect-[16/9] overflow-hidden rounded-2xl border border-border">
            <VenueInteriorArtwork variant="lash" />
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="aspect-[3/2] lg:aspect-[16/9] overflow-hidden rounded-2xl border border-border">
              <VenueInteriorArtwork variant="studio" />
            </div>
            <div className="relative aspect-[3/2] lg:aspect-[16/9] overflow-hidden rounded-2xl border border-border">
              <VenueInteriorArtwork variant="spa" />
              <span className="absolute bottom-3 right-3 rounded-full bg-background/90 px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-sm border border-border">
                See all images
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content + Sticky Sidebar */}
      <section className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
        <div className="lg:col-span-8 space-y-12">
          {/* Services Menu */}
          <div className="space-y-6">
            <h2 className="text-[28px] font-bold tracking-tight text-foreground">
              Services
            </h2>

            <div className="flex flex-wrap items-center gap-2">
              {SERVICE_CATEGORIES.map((cat) => {
                const active = selectedCat === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCat(cat)}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                      active
                        ? "bg-foreground text-background"
                        : "border border-border bg-background text-foreground hover:bg-surface"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <div className="space-y-3">
              {visibleServices.map((item) => {
                const chosen = selectedIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    className={`flex items-center justify-between gap-4 rounded-xl border p-4 transition-colors ${
                      chosen ? "border-accent bg-accent-soft/20" : "border-border bg-background hover:border-border-strong"
                    }`}
                  >
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-foreground">{item.name}</h3>
                      <p className="text-xs text-muted">{item.duration}</p>
                      <p className="text-xs text-muted line-clamp-2 max-w-xl">{item.description}</p>
                      <p className="pt-1 text-sm font-semibold text-foreground">{item.price}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleService(item.id)}
                      className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-colors cursor-pointer ${
                        chosen
                          ? "bg-accent text-white"
                          : "border border-border-strong bg-background text-foreground hover:bg-surface"
                      }`}
                    >
                      {chosen ? (
                        <span className="inline-flex items-center gap-1">
                          <Check className="h-3.5 w-3.5" /> Added
                        </span>
                      ) : (
                        "Book"
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Reviews */}
          <div className="space-y-5 border-t border-border pt-10">
            <h2 className="text-[28px] font-bold tracking-tight text-foreground">
              Reviews
            </h2>
            <div className="flex items-center gap-2 text-sm font-semibold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[#ffc00a] text-[#ffc00a]" />
              ))}
              <span>4.9</span>
              <span className="text-accent font-normal">(393)</span>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {VENUE_REVIEWS.map((r) => (
                <div key={r.name} className="space-y-2 rounded-xl border border-border p-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-sm font-bold text-accent">
                      {r.initials}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{r.name}</p>
                      <p className="text-xs text-muted">{r.date}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/85">{r.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* About & Hours */}
          <div className="space-y-6 border-t border-border pt-10">
            <h2 className="text-[28px] font-bold tracking-tight text-foreground">About</h2>
            <p className="text-sm leading-relaxed text-foreground/85">
              Lash Lab Inc. is a flagship eyelash design &amp; lift studio located on Union Street in Cow Hollow, San Francisco. Every appointment begins with custom eye-shape mapping and ultra-light silk or cashmere fibers tailored to protect natural lash health.
            </p>
            <div className="h-64">
              <FreshaMapCanvas venues={[venue]} activeSlug={venue.slug} />
            </div>

            <div className="grid grid-cols-1 gap-8 pt-2 sm:grid-cols-2">
              <div className="space-y-2.5 text-sm">
                <h3 className="font-semibold text-foreground">Opening times</h3>
                {[
                  ["Monday", "10:30 AM – 7:30 PM"],
                  ["Tuesday", "10:30 AM – 7:30 PM"],
                  ["Wednesday", "10:30 AM – 7:30 PM"],
                  ["Thursday", "10:30 AM – 7:30 PM"],
                  ["Friday", "10:30 AM – 7:30 PM"],
                  ["Saturday", "10:30 AM – 7:30 PM"],
                ].map(([day, hrs]) => (
                  <div key={day} className="flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-2 text-foreground">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      {day}
                    </span>
                    <span className="text-muted tabular-nums">{hrs}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2.5 text-sm">
                <h3 className="font-semibold text-foreground">Additional information</h3>
                <p className="flex items-center gap-2 text-xs text-muted">
                  <Check className="h-4 w-4 text-foreground" /> Instant confirmation
                </p>
                <p className="flex items-center gap-2 text-xs text-muted">
                  <Check className="h-4 w-4 text-foreground" /> Pay seamlessly by app or in studio
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Sidebar Card */}
        <aside className="lg:col-span-4 lg:sticky lg:top-24 rounded-2xl border border-border bg-background p-6 space-y-5 shadow-sm">
          <div>
            <h2 className="text-xl font-bold text-foreground">{venue.name}</h2>
            <p className="mt-1 flex items-center gap-1 text-sm font-semibold">
              {venue.rating}
              <Star className="h-4 w-4 fill-[#ffc00a] text-[#ffc00a]" />
              <span className="font-normal text-accent">({venue.reviewsCount})</span>
            </p>
            <span className="mt-2 inline-block rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
              Deals
            </span>
          </div>

          <div className="space-y-2 border-t border-border pt-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Selected ({selectedItems.length})
            </p>
            {selectedItems.length === 0 ? (
              <p className="text-xs text-muted">Pick a service from the menu to book.</p>
            ) : (
              <ul className="space-y-1.5 text-xs">
                {selectedItems.map((s) => (
                  <li key={s.id} className="flex justify-between gap-2">
                    <span className="font-medium text-foreground">{s.name}</span>
                    <span className="font-semibold text-foreground">{s.price}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex items-center justify-between pt-2 text-sm font-bold text-foreground">
              <span>Estimated total</span>
              <span>${totalAmount}</span>
            </div>
          </div>

          <Link
            href="/design-systems/fresha/checkout"
            className="flex h-12 w-full items-center justify-center rounded-xl bg-foreground text-sm font-semibold text-background hover:opacity-90 transition-opacity"
          >
            Book now
          </Link>

          <div className="space-y-2.5 border-t border-border pt-4 text-xs text-muted">
            <p className="flex items-center gap-2 text-foreground">
              <Clock className="h-4 w-4 text-muted shrink-0" />
              Open today · {venue.hours}
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-muted shrink-0 mt-0.5" />
              <span>{venue.address}</span>
            </p>
          </div>

          <div className="space-y-3 border-t border-border pt-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-foreground">Memberships</p>
                <p className="text-xs text-muted">Buy a bundle of appointments</p>
              </div>
              <Link
                href="/design-systems/fresha/checkout"
                className="rounded-full border border-border-strong px-3.5 py-1 text-xs font-semibold text-foreground hover:bg-surface"
              >
                Buy
              </Link>
            </div>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-foreground">Gift Cards</p>
                <p className="text-xs text-muted">Treat yourself or a friend</p>
              </div>
              <Link
                href="/design-systems/fresha/checkout"
                className="rounded-full border border-border-strong px-3.5 py-1 text-xs font-semibold text-foreground hover:bg-surface"
              >
                Buy
              </Link>
            </div>
          </div>
        </aside>
      </section>

      {/* Venues nearby */}
      <section className="border-t border-border pt-12">
        <h2 className="text-[28px] font-bold tracking-tight text-foreground">
          Venues nearby
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FRESHA_VENUES.slice(8, 12).map((v) => (
            <FreshaVenueCard key={v.slug} venue={v} />
          ))}
        </div>
      </section>
    </div>
  );
}
