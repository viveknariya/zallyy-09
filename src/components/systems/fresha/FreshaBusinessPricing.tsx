"use client";

import {
  BarChart3,
  Briefcase,
  Calendar,
  Check,
  CreditCard,
  Megaphone,
  Package,
  Scissors,
  Sparkles,
  Star,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FreshaCalendarScene, FreshaQrTile, VenueInteriorArtwork } from "./FreshaArt";
import {
  BUSINESS_TYPES,
  OPTIONAL_PAID_FEATURES,
  PRICING_FREE_PERKS,
} from "./fresha-data";

const BUSINESS_PILLARS = [
  {
    icon: Calendar,
    title: "Appointment scheduling",
    desc: "Sleek, user-friendly calendar compatible across mobile, tablet, and desktop for effortless staff bookings.",
  },
  {
    icon: CreditCard,
    title: "Payment processing",
    desc: "Securely process client payments via pay by link, saved card, Tap to Pay, and countertop card terminals.",
  },
  {
    icon: Briefcase,
    title: "Point of sale (POS)",
    desc: "Manage retail checkout, barcode scanning, tips, split payments, and receipts without switching tools.",
  },
  {
    icon: Megaphone,
    title: "Marketing promotions",
    desc: "Boost repeat bookings with targeted blast campaigns, birthday specials, and automated reminders.",
  },
  {
    icon: Package,
    title: "Product inventory and store",
    desc: "Track backbar stock levels, automate supplier orders, and sell retail products directly online.",
  },
  {
    icon: BarChart3,
    title: "Reporting and analytics",
    desc: "Monitor live revenue cohorts, staff utilization, and client retention in clear financial dashboards.",
  },
];

/**
 * Shared business-type icon selector grid used on both /for-business and /pricing.
 */
function BusinessTypesGrid() {
  const [selected, setSelected] = useState("Hair Salon");

  return (
    <section className="mx-auto max-w-5xl px-6 py-16 text-center space-y-8">
      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
        Pick a business type to get started for free
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
        {BUSINESS_TYPES.map((bt) => {
          const active = selected === bt;
          return (
            <button
              key={bt}
              type="button"
              onClick={() => setSelected(bt)}
              className={`flex flex-col items-center justify-center gap-2.5 rounded-xl border p-4 text-center transition-colors cursor-pointer ${
                active
                  ? "border-accent bg-accent-soft/30 text-accent"
                  : "border-border bg-background text-foreground hover:bg-surface"
              }`}
            >
              <Scissors className="h-5 w-5" />
              <span className="text-xs font-medium leading-tight">{bt}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

/**
 * Shared dual dark/yellow app showcase pair used on /for-business, /pricing, and /download-app.
 */
function DualAppPromoSection({ withQr = false }: { withQr?: boolean }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
          Download the app
        </h2>
        <p className="text-sm text-muted">
          Manage your appointments or book beauty and wellness treatments on iOS &amp; Android
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Customer card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#eeebff] via-[#b8a9ff] to-[#6950f3] p-8 sm:p-10 text-foreground flex flex-col justify-between min-h-[380px]">
          <div className="space-y-3">
            <p className="text-xs font-semibold">Available on iOS · Android</p>
            <h3 className="text-3xl font-bold leading-tight">
              Booking app for customers
            </h3>
            <p className="text-sm text-foreground/85 max-w-sm">
              Discover top-rated salons and spas near you with instant confirmation.
            </p>
          </div>
          <div className="mt-8 flex items-end justify-between gap-4">
            <div className="w-48 rounded-2xl border border-foreground/20 bg-background p-2.5 shadow-md">
              <div className="aspect-[3/2] overflow-hidden rounded-xl">
                <VenueInteriorArtwork variant="studio" />
              </div>
              <p className="mt-2 text-xs font-bold">Trendy Studio</p>
              <p className="text-[11px] text-muted">5.0 ★ (1,743)</p>
            </div>
            {withQr && <FreshaQrTile size="sm" />}
          </div>
        </div>

        {/* Professional card */}
        <div className="relative overflow-hidden rounded-3xl bg-[#14151a] p-8 sm:p-10 text-white flex flex-col justify-between min-h-[380px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -bottom-12 h-72 w-72 rounded-full bg-[#c5ff00]/35 blur-[70px]"
          />
          <div className="relative space-y-3">
            <p className="text-xs font-semibold text-zinc-300">Available on iOS · Android</p>
            <h3 className="text-3xl font-bold leading-tight">
              Business app for professionals
            </h3>
            <p className="text-sm text-zinc-300 max-w-sm">
              Run your calendar, client records, and point-of-sale from anywhere.
            </p>
          </div>
          <div className="relative mt-8 flex items-end justify-between gap-4">
            <div className="w-56">
              <FreshaCalendarScene compact />
            </div>
            {withQr && <FreshaQrTile size="sm" />}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * B2B Partner landing page matching fresha.com/for-business.
 */
export function FreshaForBusinessView() {
  return (
    <div className="bg-background text-foreground">
      {/* Dark Partner Hero */}
      <section className="relative overflow-hidden bg-[#14151a] pt-16 pb-20 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-[#6950f3]/30 blur-[120px]"
        />
        <div className="relative mx-auto max-w-6xl px-6 text-center space-y-6">
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            The #1 Software for Salons and Spas
          </h1>
          <p className="mx-auto max-w-xl text-base text-zinc-300">
            Simple, flexible and powerful booking software for your business. And it&apos;s subscription-free!
          </p>
          <div>
            <Link
              href="/design-systems/fresha/signup"
              className="inline-flex h-12 items-center rounded-xl bg-accent px-6 text-sm font-semibold text-white hover:bg-accent-strong transition-colors"
            >
              Join for free
            </Link>
          </div>
          <div className="mx-auto max-w-4xl pt-6 text-left">
            <FreshaCalendarScene />
          </div>
        </div>
      </section>

      {/* Proof & Testimonial Strip */}
      <section className="mx-auto max-w-5xl px-6 py-16 space-y-12">
        <div className="rounded-2xl border border-border bg-surface/50 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="shrink-0 space-y-1">
            <span className="inline-block rounded-lg bg-[#0ea5e9] px-3 py-1 text-xs font-bold text-white">
              BEST VALUE
            </span>
            <div className="flex gap-0.5 pt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-[#ffc00a] text-[#ffc00a]" />
              ))}
            </div>
            <p className="text-xs font-semibold">5/5 Partner Score</p>
          </div>
          <blockquote className="text-sm leading-relaxed text-foreground/85 space-y-2">
            <p>
              &ldquo;I work with booth renters at my top-rated salon in Manhattan. Clients love the seamless online booking, automated reminders, and clean POS checkout.&rdquo;
            </p>
            <footer className="text-xs font-semibold text-foreground">
              Pamela B., Salon owner, NYC
            </footer>
          </blockquote>
        </div>

        <div className="grid grid-cols-1 gap-8 border-t border-b border-border py-10 md:grid-cols-12 items-center">
          <div className="md:col-span-5 space-y-2">
            <h2 className="text-2xl font-bold text-foreground">
              The top-rated destination for beauty and wellness
            </h2>
            <p className="text-xs text-muted">
              One solution, one software. Trusted globally by independent professionals.
            </p>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 gap-6 sm:grid-cols-2">
            <div>
              <p className="text-2xl font-bold">120,000+</p>
              <p className="text-xs text-muted">partner businesses</p>
            </div>
            <div>
              <p className="text-2xl font-bold">450,000+</p>
              <p className="text-xs text-muted">stylists and professionals</p>
            </div>
            <div>
              <p className="text-2xl font-bold">1 billion+</p>
              <p className="text-xs text-muted">appointments booked</p>
            </div>
            <div>
              <p className="text-2xl font-bold">120+ countries</p>
              <p className="text-xs text-muted">with platform availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Card Solution Grid */}
      <section className="mx-auto max-w-6xl px-6 py-8 space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-foreground">
            A full solution to manage and grow your business
          </h2>
          <p className="mx-auto max-w-xl text-sm text-muted">
            Packed with tools to boost sales, coordinate your calendar, and retain clients effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BUSINESS_PILLARS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-2xl bg-surface p-7 space-y-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-800">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                <p className="text-xs leading-relaxed text-muted">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Payment Processing Split */}
      <section className="mx-auto max-w-5xl px-6 py-16 grid grid-cols-1 gap-10 md:grid-cols-2 items-center">
        <div className="space-y-4">
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
            Payment Processing
          </span>
          <h2 className="text-3xl font-bold text-foreground">
            Reduce costs with low payment processing rates
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Process client payments via pay by link, saved card, and countertop card terminals with upfront no-show protection and fast daily payouts.
          </p>
          <ul className="space-y-2 text-xs text-foreground">
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> Low processing fee of 2.29% + $0.20</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> Instant Tap to Pay on mobile</li>
            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> Seamless countertop card terminals</li>
          </ul>
        </div>
        <div className="rounded-3xl bg-[#14151a] p-8 text-white space-y-4 shadow-lg">
          <p className="text-xs text-zinc-400">Fresha Terminal · Ready</p>
          <p className="text-3xl font-bold tabular-nums">$125.00</p>
          <div className="rounded-xl bg-white/10 p-4 text-xs text-zinc-200 flex items-center justify-between">
            <span>Tap, insert, or swipe card</span>
            <Sparkles className="h-4 w-4 text-[#c5ff00]" />
          </div>
        </div>
      </section>

      {/* Dark Partner Quote */}
      <section className="mx-auto max-w-3xl px-6 py-10 text-center space-y-6">
        <h2 className="text-2xl font-bold text-foreground">See what our partners say</h2>
        <div className="rounded-3xl bg-[#14151a] px-8 py-12 text-white space-y-4">
          <p className="text-base leading-relaxed text-zinc-200">
            &ldquo;By far the best booking experience I&apos;ve had in 20 years. The no-show policy and automated text reminders have ensured we haven&apos;t had a single missed slot in over a year.&rdquo;
          </p>
          <p className="text-sm font-semibold">Ursula, Bond Salon</p>
          <div className="flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="inline-flex h-6 w-6 items-center justify-center rounded bg-emerald-500 text-xs font-bold">
                ★
              </span>
            ))}
          </div>
        </div>
        <Link
          href="/design-systems/fresha/pricing"
          className="inline-flex h-11 items-center rounded-full border border-border-strong px-6 text-sm font-semibold text-foreground hover:bg-surface"
        >
          See pricing
        </Link>
      </section>

      <BusinessTypesGrid />
      <DualAppPromoSection />
    </div>
  );
}

/**
 * Subscription-free Pricing & Optional Paid Features page matching fresha.com/pricing.
 */
export function FreshaPricingView() {
  return (
    <div className="bg-background text-foreground">
      {/* Split Pricing Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16 grid grid-cols-1 gap-10 lg:grid-cols-12 items-center">
        <div className="lg:col-span-5 space-y-5">
          <p className="text-sm font-semibold text-emerald-600">Pricing</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-[42px] sm:leading-[1.12]">
            The only free software for beauty and wellness professionals
          </h1>
          <p className="text-base text-muted leading-relaxed">
            Join the top beauty and wellness platform — completely subscription-free! Stop paying fixed monthly seat fees.
          </p>
          <div>
            <Link
              href="/design-systems/fresha/signup"
              className="inline-flex h-12 items-center rounded-xl bg-accent px-6 text-sm font-semibold text-white hover:bg-accent-strong transition-colors"
            >
              Sign up for free
            </Link>
          </div>
        </div>
        <div className="lg:col-span-7">
          <FreshaCalendarScene />
        </div>
      </section>

      {/* Free for all perks */}
      <section className="mx-auto max-w-5xl px-6 py-14 space-y-10 border-t border-border">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-foreground">
            Free for all, <span className="text-emerald-600">no monthly fee</span>
          </h2>
          <p className="text-sm text-muted">
            Unlimited usage with zero base subscription fees for salons, barbershops, and spas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {PRICING_FREE_PERKS.map((perk) => (
            <div key={perk.title} className="flex items-start gap-3">
              <Check className="h-5 w-5 shrink-0 text-foreground mt-0.5" />
              <div>
                <p className="text-sm font-bold text-foreground">{perk.title}</p>
                <p className="mt-1 text-xs text-muted">{perk.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Optional Paid Features Table */}
      <section className="mx-auto max-w-5xl px-6 py-14 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-foreground">Optional paid features</h2>
          <p className="text-sm text-muted">
            Only pay for what you use. Cancel optional add-ons anytime without commitment.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-background divide-y divide-border">
          {OPTIONAL_PAID_FEATURES.map((section) => (
            <div key={section.group} className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-3 bg-surface/40 px-6 py-6 text-sm font-bold text-foreground">
                {section.group}
              </div>
              <div className="md:col-span-9 divide-y divide-border">
                {section.rows.map((row) => (
                  <div
                    key={row.name}
                    className="grid grid-cols-1 gap-4 px-6 py-6 sm:grid-cols-12 sm:items-center"
                  >
                    <div className="sm:col-span-7 space-y-1.5">
                      {row.badge && (
                        <span
                          className={`inline-flex h-6 w-6 items-center justify-center rounded-md text-[10px] font-bold ${row.badge.color}`}
                        >
                          {row.badge.label}
                        </span>
                      )}
                      <p className="text-sm font-bold text-foreground">{row.name}</p>
                      <p className="text-xs leading-relaxed text-muted">{row.desc}</p>
                    </div>
                    <div className="sm:col-span-5 text-sm font-semibold text-accent">
                      {row.rate}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <BusinessTypesGrid />
      <DualAppPromoSection />
    </div>
  );
}

/**
 * Mobile apps showcase matching fresha.com/download-app.
 */
export function FreshaDownloadAppView() {
  return (
    <div className="bg-background text-foreground py-12">
      <div className="mx-auto max-w-3xl px-6 text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Download our mobile apps
        </h1>
        <p className="text-base text-muted">
          Book unforgettable beauty and wellness experiences with our customer app, or run your business with our 100% subscription-free partner platform.
        </p>
      </div>
      <DualAppPromoSection withQr />
    </div>
  );
}
