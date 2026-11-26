import { Building2, Mail, MapPin } from "lucide-react";

const offices = [
  {
    region: "Headquarters",
    city: "Amsterdam, Netherlands",
    address: "Gelrestraat 16, 1079 MZ Amsterdam",
    email: "sales@jetbrains.example",
  },
  {
    region: "North America",
    city: "Boston, MA",
    address: "50 Milk Street, Floor 16, Boston, MA",
    email: "us-sales@jetbrains.example",
  },
  {
    region: "APAC",
    city: "Singapore",
    address: "10 Marina Boulevard, Marina Bay Financial Centre",
    email: "apac-sales@jetbrains.example",
  },
];

/**
 * Contacts & global offices grid modeled after jetbrains.com/company/contacts/.
 */
export function JetBrainsContacts() {
  return (
    <section className="bg-background py-16 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 space-y-12">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Contacts &amp; International Sales
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted">
            Reach our regional offices or enterprise licensing specialists.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {offices.map((office) => (
            <div
              key={office.city}
              className="rounded-lg border border-border bg-surface-muted p-6 space-y-4"
            >
              <span className="inline-block rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-accent">
                {office.region}
              </span>
              <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
                <Building2 className="h-4 w-4 text-accent" />
                {office.city}
              </h2>
              <p className="flex items-start gap-2 text-sm text-muted">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-muted" />
                <span>{office.address}</span>
              </p>
              <p className="flex items-center gap-2 font-mono text-xs text-foreground">
                <Mail className="h-3.5 w-3.5 text-accent" />
                {office.email}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
