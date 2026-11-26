import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { TildaComponentsShowcase } from "@/components/systems/tilda/TildaComponentsShowcase";

export const metadata: Metadata = {
  title: "Tilda Components & Tokens",
  description:
    "Interactive showcase of Tilda UI primitives: buttons, bordered cards, underline tabs, badges, inputs, switches, alerts, and color tokens.",
  alternates: { canonical: "/design-systems/tilda/components" },
};

export default function TildaComponentsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Tilda", href: "/design-systems/tilda" },
          { label: "Components", href: "/design-systems/tilda/components" },
        ]}
      />
      <TildaComponentsShowcase />
    </>
  );
}
