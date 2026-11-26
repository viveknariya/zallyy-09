"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

interface AuthCardProps {
  mode: "login" | "signup" | "recover";
}

const config = {
  login: {
    title: "Log in to your account",
    subtitle: "Welcome back. Enter your credentials to continue.",
    cta: "Log In",
    footerText: "Don’t have an account?",
    footerLinkLabel: "Sign up",
    footerHref: "/signup",
  },
  signup: {
    title: "Create your account",
    subtitle: "Start building with the Tilda Starter template in seconds.",
    cta: "Create Account",
    footerText: "Already have an account?",
    footerLinkLabel: "Log in",
    footerHref: "/login",
  },
  recover: {
    title: "Reset your password",
    subtitle: "Enter your email and we’ll send you a recovery link.",
    cta: "Send Reset Link",
    footerText: "Remembered your password?",
    footerLinkLabel: "Back to Log In",
    footerHref: "/login",
  },
};

/**
 * Centered authentication card shared across /login, /signup, and /recover.
 */
export function AuthCard({ mode }: AuthCardProps) {
  const [submitted, setSubmitted] = useState(false);
  const copy = config[mode];

  return (
    <div className="mx-auto w-full max-w-md px-6 py-16">
      <Card variant="bordered">
        <h1 className="font-display text-2xl font-medium text-foreground">
          {copy.title}
        </h1>
        <p className="mt-2 text-sm text-muted">{copy.subtitle}</p>

        {submitted ? (
          <div className="mt-6 border border-accent bg-accent-soft/20 p-4 text-sm text-foreground">
            Starter form submitted! Wire this handler to your auth provider
            (e.g., NextAuth, Better Auth, or Supabase).
          </div>
        ) : (
          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            {mode === "signup" && (
              <Input
                id="name"
                label="Full Name"
                type="text"
                placeholder="Alex Rivera"
                required
              />
            )}
            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="you@example.com"
              required
            />
            {mode !== "recover" && (
              <Input
                id="password"
                label="Password"
                type="password"
                placeholder="••••••••"
                required
              />
            )}

            {mode === "login" && (
              <div className="flex justify-end">
                <Link
                  href="/recover"
                  className="text-xs text-muted hover:text-foreground underline"
                >
                  Forgot password?
                </Link>
              </div>
            )}

            <Button type="submit" variant="accent" className="w-full mt-2">
              {copy.cta}
            </Button>
          </form>
        )}

        <p className="mt-6 border-t border-border pt-4 text-center text-xs text-muted">
          {copy.footerText}{" "}
          <Link
            href={copy.footerHref}
            className="font-semibold text-foreground underline"
          >
            {copy.footerLinkLabel}
          </Link>
        </p>
      </Card>
    </div>
  );
}
