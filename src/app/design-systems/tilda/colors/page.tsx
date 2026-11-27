import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { TildaColors } from "@/components/systems/tilda/TildaColors";
import { buildTildaMetadata } from "../_metadata";

export const metadata = buildTildaMetadata({
  title: "Tilda Colors & Gradients",
  description:
    "Curated color palettes and CSS gradients inspired by tilda.cc/colors.",
  path: "/design-systems/tilda/colors",
});

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
      <TildaColors />
    </>
  );
}
