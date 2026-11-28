"use client";

import { Calendar, Check, ChevronRight, CreditCard, Gift, Heart, Home, Briefcase, Plus, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FreshaEmptyOrb, VenueInteriorArtwork } from "./FreshaArt";
import { FRESHA_VENUES } from "./fresha-data";
import { FreshaVenueCard } from "./FreshaVenueCard";

const UPCOMING_APPOINTMENTS = [
  {
    id: "apt-1",
    venue: "Creation beauty & Nail lounge",
    date: "Fri, Dec 20, 2024 at 11:30",
    duration: "1 hour, 10 minutes duration",
    price: "$119",
    status: "Confirmed",
    variant: "lash" as const,
  },
  {
    id: "apt-2",
    venue: "Ananya Thai massage",
    date: "Sat, Jan 4, 2025 at 11:30",
    duration: "60 minutes duration",
    price: "$90",
    status: "Confirmed",
    variant: "massage" as const,
  },
  {
    id: "apt-3",
    venue: "Angela Chong-Montague (J. Roland Salon)",
    date: "Fri, Jan 10, 2025 at 13:00",
    duration: "45 minutes duration",
    price: "$125",
    status: "Confirmed",
    variant: "salon" as const,
  },
];

/**
 * Customer Appointments split-pane view matching fresha.com/appointments.
 */
export function FreshaAppointmentsView() {
  const [selectedId, setSelectedId] = useState(UPCOMING_APPOINTMENTS[0].id);
  const [calendarToast, setCalendarToast] = useState(false);

  const selected =
    UPCOMING_APPOINTMENTS.find((a) => a.id === selectedId) ?? UPCOMING_APPOINTMENTS[0];

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 space-y-8">
      <h1 className="text-3xl font-bold text-foreground">Appointments</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-foreground">Upcoming</h2>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
              {UPCOMING_APPOINTMENTS.length}
            </span>
          </div>

          <div className="space-y-3">
            {UPCOMING_APPOINTMENTS.map((apt) => {
              const active = apt.id === selectedId;
              return (
                <button
                  key={apt.id}
                  type="button"
                  onClick={() => {
                    setSelectedId(apt.id);
                    setCalendarToast(false);
                  }}
                  className={`flex w-full items-center gap-3.5 rounded-2xl border p-3 text-left transition-colors cursor-pointer ${
                    active
                      ? "border-accent bg-accent-soft/20"
                      : "border-border bg-background hover:bg-surface/40"
                  }`}
                >
                  <div className="h-16 w-20 shrink-0 overflow-hidden rounded-xl border border-border">
                    <VenueInteriorArtwork variant={apt.variant} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-foreground truncate">{apt.venue}</p>
                    <p className="text-xs text-muted">{apt.date}</p>
                    <p className="text-xs text-muted mt-0.5">{apt.price} · 1 item</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-7 rounded-2xl border border-border bg-background overflow-hidden shadow-sm">
          <div className="relative h-56 overflow-hidden">
            <VenueInteriorArtwork variant={selected.variant} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <h2 className="absolute bottom-5 left-6 right-6 text-2xl font-bold text-white">
              {selected.venue}
            </h2>
          </div>

          <div className="p-6 space-y-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
              <Check className="h-3.5 w-3.5" /> {selected.status}
            </span>

            <div>
              <p className="text-xl font-bold text-foreground">{selected.date}</p>
              <p className="text-xs text-muted mt-1">{selected.duration}</p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-4">
              <button
                type="button"
                onClick={() => setCalendarToast(true)}
                className="inline-flex items-center gap-3 text-left group cursor-pointer"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Calendar className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground group-hover:text-accent">
                    Add to calendar
                  </p>
                  <p className="text-xs text-muted">
                    {calendarToast ? "ICS reminder saved to device" : "Set yourself a reminder"}
                  </p>
                </div>
              </button>

              <Link
                href="/design-systems/fresha/checkout"
                className="rounded-full border border-border-strong px-4 py-2 text-xs font-semibold text-foreground hover:bg-surface"
              >
                Reschedule
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Customer Wallet & Balance view matching fresha.com/wallet with indigo-orchid balance card and gift redemption.
 */
export function FreshaWalletView() {
  const [balance, setBalance] = useState(0);
  const [redeemOpen, setRedeemOpen] = useState(false);
  const [giftCode, setGiftCode] = useState("FRESHA-GIFT-75");

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 space-y-8">
      <h1 className="text-3xl font-bold text-foreground">Wallet</h1>

      {/* Signature Indigo -> Orchid Gradient Card */}
      <div className="rounded-2xl bg-gradient-to-r from-[#5648f5] via-[#8b5cf6] to-[#e85cba] p-8 text-white shadow-md space-y-6">
        <div>
          <p className="text-4xl font-bold tracking-tight tabular-nums">
            ${balance.toFixed(2)}
          </p>
          <p className="mt-1 text-sm text-white/85">Wallet balance</p>
        </div>

        <button
          type="button"
          onClick={() => setRedeemOpen((v) => !v)}
          className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm hover:bg-white/20 transition-colors cursor-pointer"
        >
          <Gift className="h-3.5 w-3.5" />
          Add a gift card
        </button>

        {redeemOpen && (
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <input
              type="text"
              value={giftCode}
              onChange={(e) => setGiftCode(e.target.value)}
              aria-label="Gift card code"
              className="rounded-xl border border-white/40 bg-white/15 px-3.5 py-2 text-xs text-white placeholder:text-white/70 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => {
                setBalance((b) => b + 75);
                setRedeemOpen(false);
              }}
              className="rounded-full bg-white px-4 py-2 text-xs font-bold text-foreground cursor-pointer"
            >
              Redeem +$75
            </button>
          </div>
        )}
      </div>

      {/* Saved Cards Panel */}
      <div className="rounded-2xl border border-border bg-background p-6 space-y-4">
        <h2 className="text-lg font-bold text-foreground">Cards</h2>
        <Link
          href="/design-systems/fresha/checkout"
          className="flex items-center justify-between rounded-xl border border-border p-4 hover:bg-surface/40 transition-colors"
        >
          <span className="inline-flex items-center gap-3 text-sm font-medium text-foreground">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <CreditCard className="h-5 w-5" />
            </span>
            Add debit/credit card
          </span>
          <ChevronRight className="h-4 w-4 text-muted" />
        </Link>
      </div>
    </div>
  );
}

/**
 * Customer Order History view matching fresha.com/store-orders with empty-state specimen and sample history toggle.
 */
export function FreshaOrdersView() {
  const [showSampleOrders, setShowSampleOrders] = useState(false);

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-foreground">Product orders</h1>
        <button
          type="button"
          onClick={() => setShowSampleOrders((v) => !v)}
          className="rounded-full border border-border-strong px-4 py-1.5 text-xs font-semibold text-foreground hover:bg-surface cursor-pointer"
        >
          {showSampleOrders ? "Show empty state" : "Show sample orders"}
        </button>
      </div>

      {!showSampleOrders ? (
        <div className="py-24 text-center space-y-3 rounded-2xl border border-border bg-background">
          <FreshaEmptyOrb kind="orders" />
          <h2 className="text-lg font-bold text-foreground">No product orders</h2>
          <p className="text-sm text-muted">
            You haven&apos;t made any product orders yet.
          </p>
        </div>
      ) : (
        <div className="divide-y divide-border rounded-2xl border border-border bg-background">
          {[
            { id: "#ORD-4821", item: "Peptide Lash Conditioning Serum", studio: "Lash Lab Inc.", total: "$64.00", status: "Delivered" },
            { id: "#ORD-4709", item: "Matte Botanical Clay", studio: "Barber Society", total: "$32.00", status: "Picked up" },
          ].map((ord) => (
            <div key={ord.id} className="flex flex-wrap items-center justify-between gap-4 p-5">
              <div>
                <p className="text-sm font-bold text-foreground">{ord.item}</p>
                <p className="text-xs text-muted">
                  {ord.id} · {ord.studio}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                  {ord.status}
                </span>
                <span className="text-sm font-bold text-foreground tabular-nums">{ord.total}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Customer Profile, Saved Addresses, Favorites, and Consultation Forms view matching fresha.com/profile, /favorites, /consultation-forms.
 */
export function FreshaProfileView() {
  const [tab, setTab] = useState<"profile" | "favorites" | "forms">("profile");
  const [hasFavorites, setHasFavorites] = useState(true);

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-3xl font-bold text-foreground">Profile &amp; Saved</h1>
        <div className="flex flex-wrap gap-2">
          {[
            { id: "profile" as const, label: "Profile & Addresses" },
            { id: "favorites" as const, label: "Favorites" },
            { id: "forms" as const, label: "Consultation Forms" },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTab(item.id)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                tab === item.id
                  ? "bg-foreground text-background"
                  : "border border-border-strong bg-background text-foreground hover:bg-surface"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {tab === "profile" && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 items-start">
          <div className="md:col-span-5 rounded-2xl border border-border bg-background p-6 space-y-6">
            <div className="flex justify-end">
              <Link href="/design-systems/fresha/settings" className="text-xs font-semibold text-accent hover:underline">
                Edit
              </Link>
            </div>
            <div className="text-center space-y-3">
              <span className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-accent-soft text-3xl font-bold text-accent">
                EM
              </span>
              <p className="text-xl font-bold text-foreground">Ellie Marlin</p>
            </div>
            <dl className="space-y-4 border-t border-border pt-5 text-sm">
              <div>
                <dt className="text-xs font-semibold text-foreground">First name</dt>
                <dd className="text-muted">Ellie</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-foreground">Last name</dt>
                <dd className="text-muted">Marlin</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-foreground">Mobile number</dt>
                <dd className="text-muted">+1 415-209-6796</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold text-foreground">Email</dt>
                <dd className="text-muted">ellie.marlin@example.com</dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-7 rounded-2xl border border-border bg-background p-6 space-y-4">
            <h2 className="text-lg font-bold text-foreground">My addresses</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-4 rounded-xl border border-border p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-foreground">
                  <Home className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Home</p>
                  <p className="text-xs text-muted">2140 Fillmore St, San Francisco</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-xl border border-border p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-foreground">
                  <Briefcase className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Work</p>
                  <p className="text-xs text-muted">Add a work address</p>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-strong px-4 py-2 text-xs font-semibold text-foreground hover:bg-surface cursor-pointer"
            >
              <Plus className="h-3.5 w-3.5" /> Add
            </button>
          </div>
        </div>
      )}

      {tab === "favorites" && (
        <div className="space-y-6">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setHasFavorites((v) => !v)}
              className="rounded-full border border-border-strong px-4 py-1.5 text-xs font-semibold text-foreground cursor-pointer"
            >
              {hasFavorites ? "Preview empty favorites" : "Restore saved venues"}
            </button>
          </div>
          {hasFavorites ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FRESHA_VENUES.slice(0, 3).map((v) => (
                <FreshaVenueCard key={v.slug} venue={v} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-border py-20 text-center space-y-3">
              <FreshaEmptyOrb kind="favorites" />
              <h2 className="text-lg font-bold text-foreground">No favorites</h2>
              <p className="text-sm text-muted">
                Your favorites list is empty. Let&apos;s fill it up!
              </p>
              <Link
                href="/design-systems/fresha/search"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-border-strong px-5 text-xs font-semibold text-foreground hover:bg-surface"
              >
                <Heart className="h-3.5 w-3.5" /> Start searching
              </Link>
            </div>
          )}
        </div>
      )}

      {tab === "forms" && (
        <div className="rounded-2xl border border-border py-20 text-center space-y-3 bg-background">
          <FreshaEmptyOrb kind="forms" />
          <h2 className="text-lg font-bold text-foreground">No forms</h2>
          <p className="text-sm text-muted">
            You haven&apos;t been asked to complete any pre-visit consultation forms yet.
          </p>
        </div>
      )}
    </div>
  );
}

/**
 * Customer Settings view matching fresha.com/settings with social login connect pills and violet notification switches.
 */
export function FreshaSettingsView() {
  const [facebook, setFacebook] = useState(false);
  const [google, setGoogle] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(true);
  const [emailDeals, setEmailDeals] = useState(false);

  return (
    <div className="mx-auto max-w-2xl px-6 py-12 space-y-6">
      <h1 className="text-3xl font-bold text-foreground">Settings</h1>

      {/* Social Logins */}
      <section className="rounded-2xl border border-border bg-background p-6 space-y-5">
        <div>
          <h2 className="text-lg font-bold text-foreground">My social logins</h2>
          <p className="mt-1 text-xs text-muted">
            Link social profiles for easier access to your account.
          </p>
        </div>

        <div className="divide-y divide-border">
          {[
            { name: "Facebook", badge: "f", color: "text-blue-600", connected: facebook, toggle: () => setFacebook((v) => !v) },
            { name: "Google", badge: "G", color: "text-red-500", connected: google, toggle: () => setGoogle((v) => !v) },
          ].map((provider) => (
            <div key={provider.name} className="flex items-center justify-between py-4 first:pt-1 last:pb-1">
              <div className="flex items-center gap-3.5">
                <span className={`flex h-9 w-9 items-center justify-center rounded-lg border border-border font-bold ${provider.color}`}>
                  {provider.badge}
                </span>
                <span className="text-sm font-semibold text-foreground">{provider.name}</span>
              </div>
              <button
                type="button"
                onClick={provider.toggle}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                  provider.connected
                    ? "bg-accent-soft text-accent border border-accent/30"
                    : "border border-border-strong bg-background text-foreground hover:bg-surface"
                }`}
              >
                {provider.connected ? "Connected" : "Connect"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Notifications */}
      <section className="rounded-2xl border border-border bg-background p-6 space-y-5">
        <div>
          <h2 className="text-lg font-bold text-foreground">My notifications</h2>
          <p className="mt-1 text-xs text-muted">
            We will send you updates about your appointments, news and offers.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              title: "Text message appointment notifications",
              desc: "Receive texts based on your sender's settings",
              checked: smsAlerts,
              toggle: () => setSmsAlerts((v) => !v),
            },
            {
              title: "Email marketing notifications",
              desc: "Receive offers and news via email",
              checked: emailDeals,
              toggle: () => setEmailDeals((v) => !v),
            },
          ].map((item) => (
            <div key={item.title} className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                <p className="text-xs text-muted">{item.desc}</p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={item.checked}
                onClick={item.toggle}
                className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors cursor-pointer ${
                  item.checked ? "bg-accent" : "bg-surface-muted border border-border"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
                    item.checked ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Danger link */}
      <section className="rounded-2xl border border-border bg-background p-6 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-sm font-bold text-foreground">Delete account</h2>
          <p className="text-xs text-muted">
            Permanently close your profile and clear appointment data.
          </p>
        </div>
        <Link
          href="/design-systems/fresha/delete-account"
          className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold text-red-700 hover:bg-red-100"
        >
          <Trash2 className="h-3.5 w-3.5" /> Delete account
        </Link>
      </section>
    </div>
  );
}

/**
 * Stepped Delete Account confirmation flow matching fresha.com/profile/delete-account.
 */
export function FreshaDeleteAccountView() {
  const [ackAppointments, setAckAppointments] = useState(false);
  const [ackMarketplace, setAckMarketplace] = useState(false);
  const [stepDone, setStepDone] = useState(false);

  const canContinue = ackAppointments && ackMarketplace;

  return (
    <div className="bg-background min-h-[70vh]">
      {/* Stepped Violet Progress Bar */}
      <div className="grid grid-cols-3 gap-1.5 px-4 pt-3">
        <div className="h-1 rounded-full bg-accent" />
        <div className="h-1 rounded-full bg-accent" />
        <div className={`h-1 rounded-full ${stepDone ? "bg-accent" : "bg-surface-muted"}`} />
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/design-systems/fresha/settings"
          className="text-sm font-semibold text-foreground hover:text-accent"
        >
          ← Back
        </Link>
        <div className="flex items-center gap-2.5">
          <Link
            href="/design-systems/fresha/settings"
            className="rounded-xl border border-border-strong px-4 py-2 text-xs font-semibold text-foreground hover:bg-surface"
          >
            Close
          </Link>
          <button
            type="button"
            disabled={!canContinue}
            onClick={() => setStepDone(true)}
            className="rounded-xl bg-foreground px-5 py-2 text-xs font-semibold text-background disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
          >
            Continue →
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-xl px-6 py-12 space-y-6">
        <p className="text-xs font-medium text-muted">Delete my account</p>
        <h1 className="text-3xl font-bold text-foreground">
          {stepDone ? "Deletion request prepared" : "Delete your Fresha account"}
        </h1>
        <p className="text-sm text-muted">
          {stepDone
            ? "Your demo account deletion checklist has been validated. No real account was altered."
            : "This action will delete your account and you won't be able to retrieve it. Please confirm you understand by ticking the below statements."}
        </p>

        {!stepDone && (
          <div className="space-y-4 pt-2">
            {[
              {
                checked: ackAppointments,
                toggle: () => setAckAppointments((v) => !v),
                label: "I know I won't be able to access my appointments, gift cards or memberships.",
              },
              {
                checked: ackMarketplace,
                toggle: () => setAckMarketplace((v) => !v),
                label: "I know I will no longer be able to book appointments via the marketplace.",
              },
            ].map((item) => (
              <label key={item.label} className="flex items-start gap-3 cursor-pointer text-sm text-foreground">
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={item.toggle}
                  className="mt-1 h-4 w-4 rounded border-border accent-[#6950f3]"
                />
                <span>{item.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
