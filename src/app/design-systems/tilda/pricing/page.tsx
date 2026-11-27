import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { TildaPricing } from "@/components/systems/tilda/TildaPricing";
import { buildTildaMetadata } from "../_metadata";

export const metadata = buildTildaMetadata({
  title: "Tilda Pricing & Compare Plans",
  description:
    "Three-tier pricing layout with annual/monthly underline tabs, bordered cards, and Compare Plans matrix modeled after tilda.cc/pricing.",
  path: "/design-systems/tilda/pricing",
});

export default function TildaPricingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Tilda", href: "/design-systems/tilda" },
          { label: "Pricing", href: "/design-systems/tilda/pricing" },
        ]}
      />
      <TildaPricing showComparison headingLevel="h1" />
    </>
  );
}
