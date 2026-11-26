"use client";

import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BrilliantMark } from "./BrilliantLogo";

interface BrilliantAuthCardProps {
  mode: "login" | "signup" | "reset";
}

const MODE_COPY = {
  login: {
    title: "Log in",
    cta: "Log in",
    successTitle: "Signed in as Liam",
    successNote: "Redirect ready to your learner dashboard.",
    nextHref: "/design-systems/brilliant/home",
    nextLabel: "Go to Home",
  },
  signup: {
    title: "Create a free account",
    cta: "Sign up",
    successTitle: "Account created!",
    successNote: "Let's personalize your learning path.",
    nextHref: "/design-systems/brilliant/onboarding",
    nextLabel: "Choose learning path",
  },
  reset: {
    title: "Reset your password",
    cta: "Send reset link",
    successTitle: "Check your inbox",
    successNote: "We sent password reset instructions to your email address.",
    nextHref: "/design-systems/brilliant/login",
    nextLabel: "Back to Log in",
  },
} as const;

/**
 * Centered Brilliant auth card handling Log In, Sign Up, and Reset Password uniformly.
 */
export function BrilliantAuthCard({ mode }: BrilliantAuthCardProps) {
  const [email, setEmail] = useState("learner@example.com");
  const [password, setPassword] = useState("••••••••••••");
  const [submitted, setSubmitted] = useState(false);

  const copy = MODE_COPY[mode];

  return (
    <div className="bg-surface/80 py-14 px-6">
      <div className="mx-auto max-w-md rounded-3xl border border-border bg-background p-8 sm:p-10 shadow-sm text-center space-y-6">
        <div className="flex justify-center">
          <BrilliantMark className="h-12 w-12" />
        </div>

        <h1 className="text-2xl font-bold text-foreground">{copy.title}</h1>

        {submitted ? (
          <div className="space-y-4 py-4">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent-strong">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <p className="text-base font-bold text-foreground">{copy.successTitle}</p>
            <p className="text-xs text-muted">{copy.successNote}</p>
            <Link
              href={copy.nextHref}
              className="inline-flex w-full items-center justify-center rounded-full bg-[#222222] py-3 text-sm font-semibold text-white hover:bg-black"
            >
              {copy.nextLabel}
            </Link>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-3 text-left"
          >
            {mode !== "reset" && (
              <>
                <div className="grid grid-cols-2 gap-2.5 pb-2">
                  <button
                    type="button"
                    onClick={() => setSubmitted(true)}
                    className="rounded-xl border border-border bg-background py-2.5 text-xs font-semibold text-foreground hover:bg-surface cursor-pointer"
                  >
                    Continue with Google
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubmitted(true)}
                    className="rounded-xl border border-border bg-background py-2.5 text-xs font-semibold text-foreground hover:bg-surface cursor-pointer"
                  >
                    Continue with Apple
                  </button>
                </div>
                <div className="relative py-1 text-center text-[11px] text-muted">
                  <span className="bg-background px-2">or with email</span>
                </div>
              </>
            )}

            <div>
              <label className="sr-only" htmlFor={`auth-email-${mode}`}>
                Email address
              </label>
              <input
                id={`auth-email-${mode}`}
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-foreground focus:outline-none"
              />
            </div>

            {mode !== "reset" && (
              <div>
                <label className="sr-only" htmlFor={`auth-password-${mode}`}>
                  Password
                </label>
                <input
                  id={`auth-password-${mode}`}
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-foreground focus:outline-none"
                />
              </div>
            )}

            <button
              type="submit"
              className={`mt-2 w-full rounded-full py-3.5 text-sm font-semibold text-white cursor-pointer transition-colors ${
                mode === "signup"
                  ? "bg-accent shadow-[0_3px_0_#1e9d3d] hover:bg-accent-strong"
                  : "bg-[#222222] hover:bg-black"
              }`}
            >
              {copy.cta}
            </button>

            <div className="flex items-center justify-between pt-3 text-xs text-muted">
              <Link
                href="/design-systems/brilliant/reset-password"
                className="text-[#2563EB] underline underline-offset-2"
              >
                Reset password
              </Link>
              {mode === "login" ? (
                <span>
                  New user?{" "}
                  <Link
                    href="/design-systems/brilliant/signup"
                    className="text-[#2563EB] underline underline-offset-2"
                  >
                    Sign up
                  </Link>
                </span>
              ) : (
                <span>
                  Already a member?{" "}
                  <Link
                    href="/design-systems/brilliant/login"
                    className="text-[#2563EB] underline underline-offset-2"
                  >
                    Log in
                  </Link>
                </span>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
