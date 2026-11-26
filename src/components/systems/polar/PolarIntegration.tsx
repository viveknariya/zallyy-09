import { CheckCircle2, Terminal } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Install the SDK",
    code: "bun add @polar-sh/sdk",
  },
  {
    step: "02",
    title: "Create a Checkout Session",
    code: `import { Polar } from "@polar-sh/sdk";\nconst polar = new Polar({ accessToken: process.env.POLAR_ACCESS_TOKEN });`,
  },
];

/**
 * Polar SDK & Webhook Integration guide modeled after polar.sh/dashboard/.../onboarding/integrate.
 */
export function PolarIntegration() {
  return (
    <section className="flex-1 bg-background py-14 border-b border-border">
      <div className="mx-auto max-w-4xl px-6 space-y-10">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-muted px-3 py-1 text-xs font-medium text-foreground">
            <Terminal className="h-3.5 w-3.5" /> SDK Integration
          </span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
            Integrate Polar into your app
          </h1>
          <p className="mt-2 text-sm text-muted">
            Connect checkouts, customer portals, and usage-based billing in minutes.
          </p>
        </div>

        <div className="space-y-5">
          {steps.map((s) => (
            <div
              key={s.step}
              className="rounded-2xl border border-border bg-background p-6 space-y-3"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold text-foreground">
                  {s.step} · {s.title}
                </h2>
                <CheckCircle2 className="h-4 w-4 text-accent" />
              </div>
              <pre className="overflow-x-auto rounded-xl border border-border bg-surface p-4 font-mono text-xs text-foreground">
                {s.code}
              </pre>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
