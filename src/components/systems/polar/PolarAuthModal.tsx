"use client";

import { useState } from "react";

/**
 * Polar dark obsidian OAuth + email sign-in card modeled after polar.sh/ login modal.
 */
export function PolarAuthModal() {
  const [sent, setSent] = useState(false);

  return (
    <section className="flex-1 bg-[#0A0A0B] py-20 px-6 text-white">
      <div className="mx-auto max-w-md rounded-2xl border border-[#27272A] bg-[#111113] p-8 space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-xs text-[#71717A]">Sign in</span>
          <span className="h-2 w-2 rounded-full bg-[#0062FF]" />
        </div>

        <h1 className="text-2xl font-semibold tracking-tight">Sign in</h1>

        <div className="space-y-2.5">
          <button
            type="button"
            className="w-full rounded-full bg-white py-2.5 text-sm font-medium text-black hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            Sign in with GitHub
          </button>
          <button
            type="button"
            className="w-full rounded-full border border-[#27272A] bg-[#18181B] py-2.5 text-sm font-medium text-white hover:bg-[#27272A] transition-colors cursor-pointer"
          >
            Sign in with Google
          </button>
        </div>

        <div className="flex items-center gap-3 text-xs text-[#71717A]">
          <span className="h-px flex-1 bg-[#27272A]" />
          <span>or</span>
          <span className="h-px flex-1 bg-[#27272A]" />
        </div>

        {sent ? (
          <div className="rounded-xl border border-[#27272A] bg-[#18181B] p-4 text-xs text-[#A1A1AA]">
            Magic link sent! Connect this form to your auth provider.
          </div>
        ) : (
          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-xl border border-[#27272A] bg-[#18181B] px-4 py-2.5 text-sm text-white placeholder:text-[#71717A] focus:border-white focus:outline-none"
            />
            <button
              type="submit"
              className="w-full rounded-full border border-[#27272A] bg-[#18181B] py-2.5 text-sm font-medium text-white hover:bg-[#27272A] transition-colors cursor-pointer"
            >
              Sign in with email
            </button>
          </form>
        )}

        <p className="text-center text-[11px] leading-relaxed text-[#71717A]">
          By using Polar, you agree to our Terms of Service &amp; Privacy Policy.
        </p>
      </div>
    </section>
  );
}
