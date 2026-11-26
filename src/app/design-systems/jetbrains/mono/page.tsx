import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "JetBrains Mono — Typeface Specimen",
  description:
    "Developer typeface showcase modeled after jetbrains.com/lp/mono/ featuring increased x-height, ligatures, and weight specimens.",
  alternates: { canonical: "/design-systems/jetbrains/mono" },
};

const metrics = [
  { value: "96", label: "code-specific ligatures" },
  { value: "147", label: "languages supported" },
  { value: "8", label: "weights with matching italics" },
];

export default function JetBrainsMonoPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "JetBrains", href: "/design-systems/jetbrains" },
          { label: "JetBrains Mono", href: "/design-systems/jetbrains/mono" },
        ]}
      />
      <section className="bg-background py-16 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 space-y-12">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-accent">
              Open Source Typeface
            </span>
            <h1 className="mt-5 font-mono text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              JetBrains Mono.
              <br />A typeface for developers_
            </h1>
            <p className="mt-4 text-base text-muted">
              Increased lowercase height, distinct 0 / O and 1 / l / I glyphs,
              and 96 code ligatures designed for long coding sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-lg border border-border bg-surface-muted p-6"
              >
                <p className="font-mono text-4xl font-bold text-foreground">
                  {m.value}
                </p>
                <p className="mt-2 text-sm text-muted">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-border bg-surface-muted p-8">
            <h2 className="font-mono text-xs uppercase tracking-wider text-muted">
              Ligature &amp; Glyph Specimen
            </h2>
            <p className="mt-4 font-mono text-2xl tracking-wide text-foreground sm:text-3xl">
              -&gt; =&gt; === !== &lt;= &gt;= :: 1lI 0O ;:
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
