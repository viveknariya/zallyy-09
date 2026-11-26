import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { TildaMark } from "./TildaLogo";

const jumpLinks = [
  { id: "logo", label: "Logo" },
  { id: "spelling", label: "Spelling" },
  { id: "typeface", label: "Typeface" },
  { id: "colors", label: "Colors" },
  { id: "contacts", label: "Contacts" },
];

const brandColors = [
  { name: "Tilda Coral", hex: "#FA8A64", cls: "bg-accent" },
  { name: "Coral Strong", hex: "#FB5E1D", cls: "bg-accent-strong" },
  { name: "Ink Black", hex: "#111111", cls: "bg-foreground" },
  { name: "Editorial Gray", hex: "#F7F7F7", cls: "bg-surface border border-border" },
];

/**
 * Editorial Brand Media Kit page modeled directly after tilda.cc/mediakit.
 */
export function TildaMediaKit() {
  return (
    <div className="flex-1 bg-background py-16">
      <div className="mx-auto max-w-4xl px-6 space-y-16">
        {/* Title & Quick-Jump Box */}
        <div className="text-center">
          <h1 className="font-display text-4xl font-light tracking-tight text-foreground sm:text-5xl">
            Media Kit
          </h1>
          <p className="mt-3 text-base text-muted">
            Please use these assets when writing about Tilda in the media
          </p>

          <div className="mt-10 border border-border bg-background p-8 text-left">
            <div className="flex flex-wrap gap-x-6 gap-y-3 font-display text-xl font-light">
              {jumpLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-foreground underline underline-offset-4 hover:text-accent-strong transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Logo */}
        <section id="logo" className="space-y-6 border-t border-border pt-12">
          <Badge tone="neutral">01 · Logo</Badge>
          <h2 className="font-display text-3xl font-light text-foreground">Logo</h2>
          <p className="text-sm leading-relaxed text-muted">
            The Tilda mark pairs a geometric circle with a tilde-inspired crossbar.
            Always maintain clear space equal to half the mark&apos;s radius.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Card variant="subtle" className="flex flex-col items-center justify-center py-12">
              <TildaMark className="h-16 w-16 text-foreground" />
              <span className="mt-4 font-mono text-xs text-muted">On Light (#FFFFFF)</span>
            </Card>
            <Card variant="bordered" className="flex flex-col items-center justify-center bg-foreground py-12 text-background">
              <TildaMark className="h-16 w-16 text-background" />
              <span className="mt-4 font-mono text-xs text-background/70">On Dark (#111111)</span>
            </Card>
          </div>
        </section>

        {/* Spelling */}
        <section id="spelling" className="space-y-4 border-t border-border pt-12">
          <Badge tone="neutral">02 · Spelling</Badge>
          <h2 className="font-display text-3xl font-light text-foreground">Spelling</h2>
          <p className="text-sm leading-relaxed text-muted">
            Write <strong className="font-semibold text-foreground">Tilda</strong> or{" "}
            <strong className="font-semibold text-foreground">Tilda Publishing</strong>{" "}
            in title case. Avoid all-caps in body copy.
          </p>
        </section>

        {/* Typeface */}
        <section id="typeface" className="space-y-4 border-t border-border pt-12">
          <Badge tone="neutral">03 · Typeface</Badge>
          <h2 className="font-display text-3xl font-light text-foreground">Typeface</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Card variant="subtle">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                Display Heading
              </p>
              <p className="mt-3 font-display text-3xl font-light text-foreground">
                Jost / Futura PT
              </p>
              <p className="mt-2 font-mono text-xs text-muted">font-display</p>
            </Card>
            <Card variant="subtle">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted">
                Body &amp; UI
              </p>
              <p className="mt-3 font-sans text-2xl font-normal text-foreground">
                Plus Jakarta Sans
              </p>
              <p className="mt-2 font-mono text-xs text-muted">font-sans</p>
            </Card>
          </div>
        </section>

        {/* Colors */}
        <section id="colors" className="space-y-6 border-t border-border pt-12">
          <Badge tone="neutral">04 · Colors</Badge>
          <h2 className="font-display text-3xl font-light text-foreground">Colors</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {brandColors.map((c) => (
              <div key={c.name} className="space-y-2">
                <div className={`h-24 w-full ${c.cls}`} />
                <p className="text-xs font-semibold text-foreground">{c.name}</p>
                <p className="font-mono text-xs text-muted">{c.hex}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Press Contacts */}
        <section id="contacts" className="space-y-4 border-t border-border pt-12">
          <Badge tone="accent">05 · Contacts</Badge>
          <h2 className="font-display text-3xl font-light text-foreground">
            Press Contacts
          </h2>
          <p className="text-sm text-muted">
            For media inquiries and interviews, contact{" "}
            <span className="font-mono text-foreground underline decoration-accent underline-offset-4">
              press@tilda.cc
            </span>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
