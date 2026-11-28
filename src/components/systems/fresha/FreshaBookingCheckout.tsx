"use client";

import { ArrowLeft, Calendar, Check, CheckCircle2, CreditCard, Gift, Layers, Plus, Star, Store } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { FreshaEmptyOrb, FreshaWordmark, VenueInteriorArtwork } from "./FreshaArt";
import { VENUE_SERVICES } from "./fresha-data";

type CheckoutMode = "appointment" | "gift-card" | "membership";

const DATES = [
  { num: 4, day: "Wed", full: false },
  { num: 5, day: "Thu", full: false },
  { num: 6, day: "Fri", full: true },
  { num: 7, day: "Sat", full: false },
  { num: 8, day: "Sun", full: false },
  { num: 9, day: "Mon", full: false },
];

const TIME_SLOTS = ["09:00 AM", "10:15 AM", "11:30 AM", "01:00 PM", "02:30 PM", "04:15 PM"];
const GIFT_AMOUNTS = [40, 75, 125, 150, 250];
const MEMBERSHIPS = [
  {
    id: "block-12",
    badge: "6 month membership",
    title: "Prepaid 12 hr block",
    meta: "Unlimited sessions · 7 services",
    price: 1200,
  },
  {
    id: "fans-vol",
    badge: "Recurring membership",
    title: "Fills with Fans – Volume",
    meta: "4 sessions every month · 7 services",
    price: 270,
  },
  {
    id: "singles-nat",
    badge: "Recurring membership",
    title: "Fills with Singles – Natural",
    meta: "4 sessions every month · 7 services",
    price: 220,
  },
];

/**
 * Interactive Fresha Checkout wizard covering Appointment Booking (Services > Time > Confirm),
 * Gift Cards amount selection, and Paid Membership Plans.
 */
export function FreshaBookingCheckout() {
  const [mode, setMode] = useState<CheckoutMode>("appointment");
  const [step, setStep] = useState<1 | 2 | 3>(2);
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>(["lash-lift", "mini-fill"]);
  const [selectedDay, setSelectedDay] = useState(4);
  const [selectedTime, setSelectedTime] = useState("10:15 AM");
  const [paymentMethod, setPaymentMethod] = useState<"venue" | "card">("venue");
  const [notes, setNotes] = useState("");
  const [giftAmount, setGiftAmount] = useState(125);
  const [membershipId, setMembershipId] = useState(MEMBERSHIPS[0].id);
  const [confirmed, setConfirmed] = useState(false);

  const selectedServices = VENUE_SERVICES.filter((s) => selectedServiceIds.includes(s.id));
  const appointmentTotal = selectedServices.reduce((acc, s) => acc + s.priceNumeric, 0);
  const selectedMembership = MEMBERSHIPS.find((m) => m.id === membershipId) ?? MEMBERSHIPS[0];
  const dayInfo = DATES.find((d) => d.num === selectedDay) ?? DATES[0];

  const activeTotal =
    mode === "appointment"
      ? appointmentTotal
      : mode === "gift-card"
        ? giftAmount
        : selectedMembership.price;

  if (confirmed) {
    return (
      <div className="mx-auto max-w-xl px-6 py-16 text-center space-y-6">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-accent">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h1 className="text-3xl font-bold text-foreground">
          {mode === "appointment"
            ? "Appointment confirmed!"
            : mode === "gift-card"
              ? "Gift card ready to send!"
              : "Membership activated!"}
        </h1>
        <p className="text-sm text-muted">
          {mode === "appointment"
            ? `Lash Lab Inc. · ${dayInfo.day}, Dec ${dayInfo.num} at ${selectedTime}. Total $${activeTotal}.`
            : mode === "gift-card"
              ? `$${giftAmount} digital gift card generated for Lash Lab Inc.`
              : `${selectedMembership.title} ($${selectedMembership.price}) is now active in your wallet.`}
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link
            href="/design-systems/fresha/appointments"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background"
          >
            View appointments
          </Link>
          <button
            type="button"
            onClick={() => {
              setConfirmed(false);
              setStep(1);
            }}
            className="rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-foreground hover:bg-surface cursor-pointer"
          >
            Book another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 space-y-8">
      {/* Mode Switcher Tabs (Appointment / Gift Card / Paid Plans) */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
        <Link
          href="/design-systems/fresha/venue"
          className="inline-flex items-center gap-2 text-xs font-semibold text-foreground hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Lash Lab Inc.
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: "appointment" as const, label: "Appointment Checkout", icon: Calendar },
            { id: "gift-card" as const, label: "Gift Cards", icon: Gift },
            { id: "membership" as const, label: "Paid Plans", icon: Layers },
          ].map((item) => {
            const Icon = item.icon;
            const active = mode === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setMode(item.id)}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                  active
                    ? "bg-foreground text-background"
                    : "border border-border-strong bg-background text-foreground hover:bg-surface"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
        {/* Left Main Wizard Column */}
        <div className="lg:col-span-8 space-y-6">
          {mode === "appointment" && (
            <>
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                {[
                  { s: 1 as const, label: "Services" },
                  { s: 2 as const, label: "Time" },
                  { s: 3 as const, label: "Confirm" },
                ].map((item, idx) => (
                  <span key={item.s} className="inline-flex items-center gap-2">
                    {idx > 0 && <span>›</span>}
                    <button
                      type="button"
                      onClick={() => setStep(item.s)}
                      className={`cursor-pointer ${
                        step === item.s ? "font-bold text-foreground" : "hover:text-foreground"
                      }`}
                    >
                      {item.label}
                    </button>
                  </span>
                ))}
              </div>

              {step === 1 && (
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold text-foreground">Select services</h1>
                  <div className="space-y-3">
                    {VENUE_SERVICES.slice(0, 5).map((srv) => {
                      const active = selectedServiceIds.includes(srv.id);
                      return (
                        <button
                          key={srv.id}
                          type="button"
                          onClick={() =>
                            setSelectedServiceIds((prev) =>
                              prev.includes(srv.id)
                                ? prev.filter((id) => id !== srv.id)
                                : [...prev, srv.id]
                            )
                          }
                          className={`flex w-full items-center justify-between rounded-xl border p-4 text-left transition-colors cursor-pointer ${
                            active
                              ? "border-accent bg-accent-soft/20"
                              : "border-border bg-background hover:bg-surface/40"
                          }`}
                        >
                          <div>
                            <p className="text-sm font-semibold text-foreground">{srv.name}</p>
                            <p className="text-xs text-muted">{srv.duration}</p>
                            <p className="mt-1 text-sm font-semibold text-foreground">{srv.price}</p>
                          </div>
                          <span
                            className={`flex h-8 w-8 items-center justify-center rounded-full border ${
                              active
                                ? "border-accent bg-accent text-white"
                                : "border-border bg-background text-foreground"
                            }`}
                          >
                            {active ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h1 className="text-3xl font-bold text-foreground">Select time</h1>
                  <p className="text-sm font-semibold text-foreground">December</p>

                  {/* Circular Day Picker */}
                  <div className="flex flex-wrap gap-3">
                    {DATES.map((d) => {
                      const active = selectedDay === d.num;
                      return (
                        <button
                          key={d.num}
                          type="button"
                          onClick={() => setSelectedDay(d.num)}
                          className="flex flex-col items-center gap-1.5 cursor-pointer"
                        >
                          <span
                            className={`flex h-12 w-12 items-center justify-center rounded-full border text-sm font-bold transition-colors ${
                              active
                                ? "border-accent bg-accent text-white"
                                : "border-border bg-background text-foreground hover:border-foreground"
                            }`}
                          >
                            {d.num}
                          </span>
                          <span className="text-xs text-muted">{d.day}</span>
                        </button>
                      );
                    })}
                  </div>

                  {dayInfo.full ? (
                    <div className="rounded-2xl border border-border bg-background py-14 px-6 text-center space-y-3">
                      <FreshaEmptyOrb kind="calendar" />
                      <h2 className="text-lg font-bold text-foreground">
                        Fully booked on this date
                      </h2>
                      <p className="text-xs text-muted">Available from Saturday, Dec 7</p>
                      <button
                        type="button"
                        onClick={() => setSelectedDay(7)}
                        className="mt-2 inline-flex h-10 items-center rounded-full border border-border-strong px-5 text-xs font-semibold text-foreground hover:bg-surface cursor-pointer"
                      >
                        Go to next available date
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2.5">
                      {TIME_SLOTS.map((slot) => {
                        const active = selectedTime === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            className={`flex w-full items-center justify-between rounded-xl border px-4 py-3.5 text-sm font-medium transition-colors cursor-pointer ${
                              active
                                ? "border-accent bg-accent-soft/25 font-semibold text-foreground"
                                : "border-border bg-background hover:bg-surface/40"
                            }`}
                          >
                            <span>{slot}</span>
                            {active && <Check className="h-4 w-4 text-accent" />}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h1 className="text-3xl font-bold text-foreground">Review and confirm</h1>

                  <div className="space-y-3">
                    <h2 className="text-sm font-semibold text-foreground">Payment method</h2>
                    {[
                      { id: "venue" as const, label: "Pay at venue", icon: Store },
                      { id: "card" as const, label: "Saved Visa •••• 4242", icon: CreditCard },
                    ].map((pm) => {
                      const Icon = pm.icon;
                      const active = paymentMethod === pm.id;
                      return (
                        <button
                          key={pm.id}
                          type="button"
                          onClick={() => setPaymentMethod(pm.id)}
                          className={`flex w-full items-center justify-between rounded-xl border px-4 py-3.5 text-sm font-medium cursor-pointer ${
                            active
                              ? "border-foreground bg-surface/50"
                              : "border-border bg-background hover:bg-surface/30"
                          }`}
                        >
                          <span className="inline-flex items-center gap-3">
                            <Icon className="h-4 w-4 text-foreground" />
                            {pm.label}
                          </span>
                          {active && <Check className="h-4 w-4 text-accent" />}
                        </button>
                      );
                    })}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="booking-notes"
                      className="block text-sm font-semibold text-foreground"
                    >
                      Booking notes
                    </label>
                    <textarea
                      id="booking-notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Include comments or requests about your booking"
                      className="w-full rounded-xl border border-border bg-background p-4 text-sm text-foreground focus:border-foreground focus:outline-none"
                    />
                  </div>
                </div>
              )}
            </>
          )}

          {mode === "gift-card" && (
            <div className="space-y-5">
              <p className="text-xs text-muted">Step 1 of 3</p>
              <h1 className="text-3xl font-bold text-foreground">Choose amount</h1>
              <div className="space-y-3 rounded-2xl border border-border p-4">
                {GIFT_AMOUNTS.map((amt) => {
                  const active = giftAmount === amt;
                  return (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setGiftAmount(amt)}
                      className={`flex w-full items-center justify-between rounded-xl border px-4 py-3.5 text-sm font-semibold transition-colors cursor-pointer ${
                        active
                          ? "border-accent bg-accent-soft/25 text-accent"
                          : "border-border bg-background text-foreground hover:bg-surface/40"
                      }`}
                    >
                      <span>${amt}</span>
                      {active && <Check className="h-4 w-4" />}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {mode === "membership" && (
            <div className="space-y-5">
              <p className="text-xs text-muted">Step 1 of 3</p>
              <h1 className="text-3xl font-bold text-foreground">Select a membership</h1>
              <div className="space-y-3 rounded-2xl border border-border p-4">
                {MEMBERSHIPS.map((plan) => {
                  const active = membershipId === plan.id;
                  return (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setMembershipId(plan.id)}
                      className={`w-full rounded-xl p-6 text-left text-white transition-all cursor-pointer bg-gradient-to-r from-[#1d4ed8] via-[#2563eb] to-[#3b82f6] ${
                        active ? "ring-4 ring-[#6950f3]/35" : "opacity-90 hover:opacity-100"
                      }`}
                    >
                      <p className="text-xs font-medium text-white/85">{plan.badge}</p>
                      <div className="mt-2 flex items-baseline justify-between gap-4">
                        <h2 className="text-xl font-bold">{plan.title}</h2>
                        <span className="text-lg font-bold">${plan.price.toLocaleString()}</span>
                      </div>
                      <p className="mt-4 text-xs text-white/90">{plan.meta}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right Sticky Booking Summary Card */}
        <aside className="lg:col-span-4 rounded-2xl border border-border bg-background p-6 space-y-5 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-border">
              <VenueInteriorArtwork variant="lash" />
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">Lash Lab Inc.</p>
              <p className="flex items-center gap-1 text-xs font-semibold">
                4.9 <Star className="h-3.5 w-3.5 fill-[#ffc00a] text-[#ffc00a]" /> (393)
              </p>
              <p className="text-xs text-muted">Cow Hollow, San Francisco</p>
            </div>
          </div>

          <div className="border-t border-border pt-4 space-y-2 text-xs">
            {mode === "appointment" ? (
              <>
                <p className="text-muted">
                  {dayInfo.day}, Dec {dayInfo.num} · {selectedTime}
                </p>
                {selectedServices.map((s) => (
                  <div key={s.id} className="flex justify-between font-medium text-foreground">
                    <span>{s.name}</span>
                    <span>{s.price}</span>
                  </div>
                ))}
              </>
            ) : mode === "gift-card" ? (
              <div className="flex justify-between font-medium text-foreground">
                <span>Digital Gift Card</span>
                <span>${giftAmount}</span>
              </div>
            ) : (
              <div className="flex justify-between font-medium text-foreground">
                <span>{selectedMembership.title}</span>
                <span>${selectedMembership.price}</span>
              </div>
            )}
          </div>

          <div className="border-t border-border pt-4 space-y-1">
            <div className="flex items-center justify-between text-base font-bold text-foreground">
              <span>Total</span>
              <span>${activeTotal.toLocaleString()}</span>
            </div>
            {mode === "appointment" && paymentMethod === "venue" && (
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-emerald-600">Pay now</span>
                <span className="font-semibold text-emerald-600">$0</span>
              </div>
            )}
          </div>

          {mode === "appointment" && step < 3 ? (
            <button
              type="button"
              onClick={() => setStep((s) => (s < 3 ? ((s + 1) as 1 | 2 | 3) : 3))}
              className="flex h-12 w-full items-center justify-center rounded-xl bg-foreground text-sm font-semibold text-background hover:opacity-90 transition-opacity cursor-pointer"
            >
              Continue
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setConfirmed(true)}
              className="flex h-12 w-full items-center justify-center rounded-xl bg-foreground text-sm font-semibold text-background hover:opacity-90 transition-opacity cursor-pointer"
            >
              Confirm
            </button>
          )}

          <div className="pt-2 text-center text-[11px] text-muted space-y-1">
            <p>Lash Lab Inc. securely accepts online bookings with</p>
            <div className="flex justify-center">
              <FreshaWordmark className="text-sm text-foreground/70" />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
