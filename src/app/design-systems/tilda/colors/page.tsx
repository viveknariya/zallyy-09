import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Tilda Colors & Gradients",
  description:
    "Curated color palettes and CSS gradients inspired by Tilda.cc.",
  alternates: { canonical: "/design-systems/tilda/colors" },
};

const gradients = [
  {
    name: "Tilda Coral Sunset",
    css: "linear-gradient(135deg, #FA8A64 0%, #FB5E1D 100%)",
    stops: "#FA8A64 → #FB5E1D",
  },
  {
    name: "Warm Peach Editorial",
    css: "linear-gradient(135deg, #F5B39C 0%, #EA977D 100%)",
    stops: "#F5B39C → #EA977D",
  },
  {
    name: "Lavender Mist",
    css: "linear-gradient(135deg, #DBCFEE 0%, #949BE1 100%)",
    stops: "#DBCFEE → #949BE1",
  },
  {
    name: "Sky & Mint",
    css: "linear-gradient(135deg, #5DA6E9 0%, #6EE14D 100%)",
    stops: "#5DA6E9 → #6EE14D",
  },
];

export default function TildaColorsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Tilda", href: "/design-systems/tilda" },
          { label: "Colors", href: "/design-systems/tilda/colors" },
        ]}
      />
      <div className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="font-display text-4xl font-light text-foreground">
            Colors & Gradients
          </h1>
          <p className="mt-3 text-base text-muted">
            Curated palettes and gradients inspired by Tilda.cc.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {gradients.map((g) => (
              <Card key={g.name} variant="subtle" className="p-0 overflow-hidden">
                <div className="h-40 w-full" style={{ background: g.css }} />
                <div className="p-5">
                  <h2 className="font-display text-base font-medium text-foreground">
                    {g.name}
                  </h2>
                  <p className="mt-1 font-mono text-xs text-muted">{g.stops}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
