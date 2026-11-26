"use client";

import { useState } from "react";

/**
 * Polar Organization & Billing Settings form modeled after polar.sh/dashboard/.../settings.
 */
export function PolarSettings() {
  const [saved, setSaved] = useState(false);

  return (
    <section className="flex-1 bg-surface py-14 border-b border-border">
      <div className="mx-auto max-w-3xl px-6 space-y-8">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Organization Settings
          </h1>
          <p className="mt-1.5 text-sm text-muted">
            Manage billing details, payout preferences, and webhook endpoints.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSaved(true);
          }}
          className="rounded-2xl border border-border bg-background p-8 space-y-6"
        >
          <div>
            <label
              htmlFor="polar-org-name"
              className="block text-xs font-medium text-foreground mb-1.5"
            >
              Organization Name
            </label>
            <input
              id="polar-org-name"
              defaultValue="Acme AI"
              className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:border-foreground focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="polar-billing-email"
              className="block text-xs font-medium text-foreground mb-1.5"
            >
              Billing Email
            </label>
            <input
              id="polar-billing-email"
              type="email"
              defaultValue="billing@acme.example"
              className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground focus:border-foreground focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            {saved ? (
              <span className="text-xs font-medium text-accent">
                Settings saved
              </span>
            ) : (
              <span className="text-xs text-muted">
                Changes apply immediately to new invoices.
              </span>
            )}
            <button
              type="submit"
              className="rounded-full bg-foreground px-5 py-2 text-xs font-medium text-background cursor-pointer"
            >
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
