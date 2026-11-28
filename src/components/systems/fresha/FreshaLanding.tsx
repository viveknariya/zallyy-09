"use client";

import {
  ArrowRight,
  Calendar,
  ChevronRight,
  Clock,
  MapPin,
  QrCode,
  Search,
  Star,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FreshaCalendarScene,
  FreshaQrTile,
  VenueInteriorArtwork,
} from "./FreshaArt";
import {
  BROWSE_CITIES,
  FRESHA_REVIEWS,
  FRESHA_VENUES,
} from "./fresha-data";
import { FreshaVenueCard } from "./FreshaVenueCard";

/**
 * Consumer marketplace landing hub featuring luminous lavender/pink field, interactive search capsule,
 * 4-up venue rails, reviews, gradient proof metric, acid-lime business split, and city directory.
 */
export function FreshaLanding() {
  const router = useRouter();
  const [treatment, setTreatment] = useState("All treatments and venues");
  const [location, setLocation] = useState("San Francisco");
  const [dateLabel, setDateLabel] = useState("Any date");
  const [countryTab, setCountryTab] = useState<string>("United States");

  const recommended = FRESHA_VENUES.filter((v) => v.rail === "recommended");
  const newlyAdded = FRESHA_VENUES.filter((v) => v.rail === "new");
  const trending = FRESHA_VENUES.filter((v) => v.rail === "trending");

  const countries = Object.keys(BROWSE_CITIES);
  const cityColumns = BROWSE_CITIES[countryTab] ?? BROWSE_CITIES["United States"];

  return (
    <div className="bg-background text-foreground">
      {/* 1. Opening stage with signature lavender + pink atmospheric light field */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-[12%] h-[680px] w-[720px] rounded-full bg-[#d5d3ff]/90 blur-[90px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-36 right-[-8%] h-[620px] w-[820px] rounded-full bg-[#f9b6f8]/65 blur-[95px]"
        />

        <div className="relative mx-auto max-w-[1136px] px-6 pt-16 pb-16 sm:pt-24 sm:pb-20 text-center">
          <h1 className="mx-auto max-w-[920px] text-4xl font-bold tracking-[-0.025em] text-foreground sm:text-[64px] sm:leading-[68px]">
            Book local beauty and wellness services
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-lg leading-7 text-foreground/85 sm:text-[22px] sm:leading-7">
            Discover top-rated salons, barbers, medspas, and wellness studios nearby
          </p>

          {/* Search capsule inside 6px translucent glass rim */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              router.push("/design-systems/fresha/search");
            }}
            className="mx-auto mt-12 max-w-[1136px] rounded-[100px] p-1.5 bg-white/45 backdrop-blur-md shadow-[inset_0_0_0_6px_rgba(156,156,156,0.08)] border border-white/60"
          >
            <div className="flex flex-col md:flex-row md:items-center rounded-[100px] bg-background p-2 md:h-16 md:p-0 md:pl-5 md:pr-2">
              <label className="flex flex-1 items-center gap-3.5 px-3 py-2.5 md:py-0 text-left cursor-text">
                <Search className="h-5 w-5 shrink-0 text-muted" />
                <input
                  type="text"
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  aria-label="Treatment or venue"
                  className="w-full bg-transparent text-base font-medium text-foreground focus:outline-none"
                />
              </label>

              <span className="hidden md:block h-6 w-px bg-border" />

              <label className="flex flex-1 items-center gap-3.5 px-4 py-2.5 md:py-0 text-left cursor-text">
                <MapPin className="h-5 w-5 shrink-0 text-muted" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  aria-label="Location"
                  className="w-full bg-transparent text-base font-medium text-foreground focus:outline-none"
                />
              </label>

              <span className="hidden md:block h-6 w-px bg-border" />

              <label className="flex flex-1 items-center gap-3.5 px-4 py-2.5 md:py-0 text-left cursor-pointer">
                <Calendar className="h-5 w-5 shrink-0 text-muted" />
                <select
                  value={dateLabel}
                  onChange={(e) => setDateLabel(e.target.value)}
                  aria-label="Appointment date"
                  className="w-full bg-transparent text-base font-medium text-foreground focus:outline-none cursor-pointer"
                >
                  <option>Any date</option>
                  <option>Today</option>
                  <option>Tomorrow</option>
                  <option>This weekend</option>
                </select>
              </label>

              <span className="hidden lg:block h-6 w-px bg-border" />

              <div className="hidden lg:flex flex-1 items-center gap-3.5 px-4 text-left text-base font-medium text-foreground">
                <Clock className="h-5 w-5 shrink-0 text-muted" />
                <span>Any time</span>
              </div>

              <button
                type="submit"
                className="mt-2 md:mt-0 inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-foreground px-7 text-base font-semibold text-background hover:opacity-90 transition-opacity cursor-pointer"
              >
                Search
              </button>
            </div>
          </form>

          <p className="mt-10 text-lg sm:text-[22px] leading-none text-foreground">
            <span className="font-semibold tabular-nums">403,411</span>{" "}
            <span className="font-normal text-foreground/85">appointments booked today</span>
          </p>

          <div className="mt-10">
            <Link
              href="/design-systems/fresha/download-app"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-border-strong bg-background px-5 text-base font-semibold text-foreground hover:bg-surface transition-colors"
            >
              <span>Get the app</span>
              <QrCode className="h-4 w-4 text-foreground" />
            </Link>
          </div>
        </div>

        {/* 2. First browse rail sits inside the dissipating atmospheric tail */}
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-8 pb-14">
          <div className="flex items-center justify-between">
            <h2 className="text-[28px] font-semibold tracking-[-0.015em] text-foreground">
              Recommended
            </h2>
            <Link
              href="/design-systems/fresha/search"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-strong bg-background text-foreground hover:bg-surface transition-colors"
              aria-label="Browse all recommended venues"
            >
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {recommended.map((venue) => (
              <FreshaVenueCard key={venue.slug} venue={venue} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. New & Trending rails on pure white */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-8 py-10 space-y-14">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-[28px] font-semibold tracking-[-0.015em] text-foreground">
              New to Fresha
            </h2>
            <Link
              href="/design-systems/fresha/search"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-strong bg-background text-foreground hover:bg-surface transition-colors"
              aria-label="See more new venues"
            >
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {newlyAdded.map((venue) => (
              <FreshaVenueCard key={venue.slug} venue={venue} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-[28px] font-semibold tracking-[-0.015em] text-foreground">
              Trending
            </h2>
            <Link
              href="/design-systems/fresha/search"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-strong bg-background text-foreground hover:bg-surface transition-colors"
              aria-label="See more trending venues"
            >
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trending.map((venue) => (
              <FreshaVenueCard key={venue.slug} venue={venue} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Inset Download the Fresha app split + staggered handheld views */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-24 py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-foreground">
              Available on iOS &amp; Android
            </p>
            <h2 className="mt-8 text-4xl font-bold tracking-[-0.025em] text-foreground sm:text-[64px] sm:leading-[68px]">
              Download the Fresha app
            </h2>
            <p className="mt-6 max-w-md text-xl leading-8 text-foreground/85 sm:text-2xl sm:leading-8">
              Book unforgettable beauty and wellness experiences with the mobile app
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <FreshaQrTile />
              <Link
                href="/design-systems/fresha/download-app"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-border-strong bg-background px-6 text-base font-semibold text-foreground hover:bg-surface transition-colors"
              >
                Explore mobile apps <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Staggered straight-on handheld app views */}
          <div className="flex items-start justify-center gap-5">
            <div className="w-[240px] rounded-[28px] border-2 border-foreground bg-background p-3 shadow-lg">
              <div className="aspect-[3/2] overflow-hidden rounded-2xl">
                <VenueInteriorArtwork variant="studio" />
              </div>
              <div className="mt-3 space-y-2 px-1 pb-2">
                <p className="text-sm font-bold text-foreground">Trendy Studio</p>
                <p className="flex items-center gap-1 text-xs font-semibold">
                  5.0 <Star className="h-3 w-3 fill-[#ffc00a] text-[#ffc00a]" /> (1,743)
                </p>
                <p className="text-[11px] text-muted">Open now · 10am – 8pm</p>
                <div className="pt-2 flex items-center justify-between border-t border-border">
                  <span className="text-[11px] text-muted">273 services</span>
                  <span className="rounded-full bg-foreground px-3 py-1 text-[11px] font-semibold text-background">
                    Book now
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-12 hidden sm:block w-[210px] rounded-[28px] border-2 border-foreground bg-background p-3 shadow-md">
              <div className="rounded-xl bg-[#EDF3F0] p-3 text-center">
                <span className="inline-block rounded-full bg-foreground px-2.5 py-0.5 text-[11px] font-bold text-white">
                  London · 42 nearby
                </span>
                <div className="mt-3 grid grid-cols-2 gap-1.5">
                  <span className="rounded-lg bg-white py-2 text-[10px] font-semibold">4.9 ★</span>
                  <span className="rounded-lg bg-[#6950f3] py-2 text-[10px] font-semibold text-white">5.0 ★</span>
                </div>
              </div>
              <div className="mt-3 space-y-1.5 px-1 pb-2">
                <div className="aspect-[3/2] overflow-hidden rounded-xl">
                  <VenueInteriorArtwork variant="barber" />
                </div>
                <p className="text-xs font-semibold text-foreground">The Barbershop</p>
                <p className="text-[11px] text-muted">Soho · Instant booking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Reviews mist-gray rail */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-8 py-12">
        <h2 className="text-[28px] font-semibold tracking-[-0.015em] text-foreground">
          Reviews
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FRESHA_REVIEWS.map((rev) => (
            <article
              key={rev.id}
              className="flex min-h-[320px] flex-col justify-between rounded-2xl bg-surface p-8"
            >
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="h-4 w-4 fill-[#ffc00a] text-[#ffc00a]"
                    />
                  ))}
                </div>
                <h3 className="mt-5 text-[19px] font-semibold leading-6 text-foreground">
                  {rev.title}
                </h3>
                <p className="mt-3 text-base leading-[22px] text-foreground/85">
                  {rev.quote}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-background text-xs font-bold text-foreground border border-border">
                  {rev.initials}
                </span>
                <div>
                  <p className="text-base font-medium text-foreground">{rev.author}</p>
                  <p className="text-sm text-muted">{rev.city}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 6. One big gradient proof figure, three quiet ones */}
      <section className="mx-auto max-w-[980px] px-6 py-24 text-center">
        <h2 className="text-3xl font-bold tracking-[-0.02em] text-foreground sm:text-[40px] sm:leading-[1.1]">
          The top-rated destination for beauty and wellness
        </h2>
        <p className="mt-3 text-lg font-medium text-foreground/80 sm:text-2xl">
          One solution, one software. Trusted by the best in the beauty and wellness industry
        </p>

        <div className="mt-16">
          <p className="bg-gradient-to-r from-[#ef6997] via-[#e85cba] to-[#b84cdc] bg-clip-text text-6xl font-bold tracking-[-0.03em] text-transparent sm:text-[96px] sm:leading-[112px]">
            1 billion+
          </p>
          <p className="mt-1 text-xl font-medium text-foreground sm:text-2xl">
            Appointments booked on Fresha
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <p className="text-3xl font-bold text-foreground sm:text-[40px]">120,000+</p>
            <p className="mt-2 text-lg font-medium text-foreground/80">partner businesses</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-foreground sm:text-[40px]">120+ countries</p>
            <p className="mt-2 text-lg font-medium text-foreground/80">using Fresha</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-foreground sm:text-[40px]">450,000+</p>
            <p className="mt-2 text-lg font-medium text-foreground/80">stylists and professionals</p>
          </div>
        </div>
      </section>

      {/* 7. Fresha for Business wide feature with signature acid-lime radial bloom */}
      <section className="relative overflow-hidden border-t border-b border-border bg-background py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 left-[55%] h-[500px] w-[720px] -translate-x-1/2 rounded-full bg-[#c5ff00]/80 blur-[90px]"
        />
        <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-4xl font-bold tracking-[-0.025em] text-foreground sm:text-[64px] sm:leading-[68px]">
              Fresha for Business
            </h2>
            <p className="text-xl leading-8 text-foreground/85 sm:text-2xl sm:leading-8">
              Supercharge your business for free with the world&apos;s top booking platform for salons and spas.
            </p>
            <div>
              <Link
                href="/design-systems/fresha/for-business"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-base font-semibold text-background hover:opacity-90 transition-opacity"
              >
                Find out more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="pt-8 space-y-1.5">
              <p className="text-xl font-semibold text-foreground">Excellent 5/5</p>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-5 w-5 fill-[#ffc00a] text-[#ffc00a]"
                  />
                ))}
              </div>
              <p className="text-sm text-muted">Over 1,250 verified partner reviews</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <FreshaCalendarScene />
          </div>
        </div>
      </section>

      {/* 8. Browse by City segmented directory */}
      <section className="mx-auto max-w-[1440px] px-6 lg:px-8 py-20">
        <h2 className="text-[28px] font-semibold tracking-[-0.015em] text-foreground">
          Browse by City
        </h2>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {countries.map((country) => {
            const active = country === countryTab;
            return (
              <button
                key={country}
                type="button"
                onClick={() => setCountryTab(country)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                  active
                    ? "bg-foreground text-background"
                    : "bg-background text-foreground shadow-[inset_0_0_0_1px_#e5e5e5] hover:bg-surface"
                }`}
              >
                {country}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {cityColumns.map((col) => (
            <div key={col.city}>
              <h3 className="text-base font-semibold text-foreground">{col.city}</h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((label) => (
                  <li key={label}>
                    <Link
                      href="/design-systems/fresha/search"
                      className="text-sm text-muted hover:text-foreground hover:underline underline-offset-4 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {["Hair Salons", "Nail Salons", "Barbershops", "Beauty Salons", "Spas", "Massage", "Eyebrows & Lashes"].map((chip) => (
            <Link
              key={chip}
              href="/design-systems/fresha/search"
              className="inline-flex h-9 items-center rounded-full border border-border-strong bg-background px-4 text-sm font-medium text-foreground hover:bg-surface transition-colors"
            >
              {chip}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
