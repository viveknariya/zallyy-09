"use client";

import { ArrowLeft, ArrowRight, Eye, EyeOff, Globe, HelpCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type AuthMode = "login" | "signup" | "reset";

/**
 * Split-screen Fresha authentication card matching Log In (/auth), Sign Up (/user-flow), and Reset Password.
 */
export function FreshaAuthCard({ mode }: { mode: AuthMode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="grid min-h-[calc(100vh-140px)] grid-cols-1 lg:grid-cols-2 bg-background">
      {/* Left Form Pane */}
      <div className="flex flex-col justify-between px-6 py-8 sm:px-14">
        <div>
          <Link
            href="/design-systems/fresha"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-surface text-foreground transition-colors"
            aria-label="Back to Fresha home"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </div>

        <div className="mx-auto w-full max-w-md space-y-6 py-10">
          {mode === "signup" && (
            <>
              <h1 className="text-center text-3xl font-bold text-foreground">
                Sign up/log in
              </h1>
              <div className="space-y-3">
                <Link
                  href="/design-systems/fresha/login"
                  className="flex items-center justify-between rounded-xl border border-border bg-background p-5 hover:border-foreground/40 hover:bg-surface/40 transition-colors"
                >
                  <div>
                    <p className="text-base font-bold text-foreground">Fresha for customers</p>
                    <p className="text-xs text-muted mt-0.5">Book salons and spas near you</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-foreground" />
                </Link>
                <Link
                  href="/design-systems/fresha/for-business"
                  className="flex items-center justify-between rounded-xl border border-border bg-background p-5 hover:border-foreground/40 hover:bg-surface/40 transition-colors"
                >
                  <div>
                    <p className="text-base font-bold text-foreground">Fresha for professionals</p>
                    <p className="text-xs text-muted mt-0.5">Manage and grow your business</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-foreground" />
                </Link>
              </div>
            </>
          )}

          {mode === "login" && (
            <>
              <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-foreground">
                  Fresha for customers
                </h1>
                <p className="text-sm text-muted">
                  Create an account or log in to book and manage your appointments.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => setSubmitted(true)}
                  className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-border bg-background text-sm font-semibold text-foreground hover:bg-surface transition-colors cursor-pointer"
                >
                  <span className="font-bold text-blue-600">f</span>
                  Continue with Facebook
                </button>
                <button
                  type="button"
                  onClick={() => setSubmitted(true)}
                  className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-border bg-background text-sm font-semibold text-foreground hover:bg-surface transition-colors cursor-pointer"
                >
                  <span className="font-bold text-red-500">G</span>
                  Continue with Google
                </button>
              </div>

              <div className="relative flex items-center py-1">
                <div className="flex-1 border-t border-border" />
                <span className="px-3 text-[11px] font-semibold uppercase text-muted">OR</span>
                <div className="flex-1 border-t border-border" />
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-3"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground focus:border-foreground focus:outline-none"
                />
                <button
                  type="submit"
                  className="h-12 w-full rounded-xl bg-foreground text-sm font-semibold text-background hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Continue
                </button>
              </form>

              {submitted && (
                <p className="rounded-xl bg-accent-soft px-4 py-3 text-xs font-medium text-accent text-center">
                  Sign-in verification link prepared. Continue to{" "}
                  <Link href="/design-systems/fresha/appointments" className="underline font-bold">
                    your appointments
                  </Link>
                  .
                </p>
              )}

              <div className="text-center space-y-1 text-xs pt-2">
                <p className="font-bold text-foreground">Have a business account?</p>
                <Link href="/design-systems/fresha/for-business" className="text-accent hover:underline font-medium">
                  Sign in as a professional
                </Link>
                <div className="pt-2">
                  <Link href="/design-systems/fresha/reset-password" className="text-muted hover:text-foreground underline">
                    Forgot or reset password?
                  </Link>
                </div>
              </div>
            </>
          )}

          {mode === "reset" && (
            <>
              <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-foreground">Change password</h1>
                <p className="text-sm text-muted">
                  Please enter a new password below for <span className="font-medium text-foreground">ellie.marlin@example.com</span>
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="new-pass" className="block text-xs font-semibold text-foreground mb-1.5">
                    Password *
                  </label>
                  <div className="relative">
                    <input
                      id="new-pass"
                      type={showPass ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter new password"
                      className="h-12 w-full rounded-xl border border-border bg-background pl-4 pr-11 text-sm text-foreground focus:border-foreground focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass((v) => !v)}
                      aria-label={showPass ? "Hide password" : "Show password"}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground cursor-pointer"
                    >
                      {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className="h-12 w-full rounded-xl bg-foreground text-sm font-semibold text-background hover:opacity-90 cursor-pointer"
                >
                  Update password
                </button>
              </form>

              {submitted && (
                <p className="rounded-xl bg-accent-soft px-4 py-3 text-xs font-medium text-accent text-center">
                  Password updated!{" "}
                  <Link href="/design-systems/fresha/login" className="underline font-bold">
                    Return to Log In
                  </Link>
                </p>
              )}
            </>
          )}
        </div>

        <div className="flex items-center justify-center gap-6 text-xs font-medium text-accent">
          <span className="inline-flex items-center gap-1.5">
            <Globe className="h-3.5 w-3.5" /> English
          </span>
          <Link href="/design-systems/fresha/help" className="inline-flex items-center gap-1.5 hover:underline">
            <HelpCircle className="h-3.5 w-3.5" /> Support
          </Link>
        </div>
      </div>

      {/* Right Atmospheric Visual Pane */}
      <div className="hidden lg:flex relative overflow-hidden bg-gradient-to-br from-[#F4EDE6] via-[#E5D5C5] to-[#D4B8A8] items-center justify-center p-12">
        <div className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-[#f9b6f8]/40 blur-[80px]" />
        <div className="pointer-events-none absolute -bottom-24 left-12 h-80 w-80 rounded-full bg-[#d5d3ff]/60 blur-[80px]" />
        <div className="relative max-w-sm rounded-3xl border border-white/60 bg-background/85 p-8 backdrop-blur-md shadow-xl space-y-4">
          <span className="inline-block rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
            120,000+ studios worldwide
          </span>
          <h2 className="text-2xl font-bold text-foreground leading-snug">
            Seamless booking for every neighborhood salon &amp; spa.
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Reserve appointments in seconds, manage gift cards in your wallet, and get instant reminders.
          </p>
        </div>
      </div>
    </div>
  );
}
