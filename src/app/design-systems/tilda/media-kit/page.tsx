import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { TildaMediaKit } from "@/components/systems/tilda/TildaMediaKit";

export const metadata: Metadata = {
  title: "Tilda Media Kit",
  description:
    "Brand media kit with anchor navigation, logo specimens, typography rules, color tokens, and press contacts.",
  alternates: { canonical: "/design-systems/tilda/media-kit" },
};

export default function TildaMediaKitPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Tilda", href: "/design-systems/tilda" },
          { label: "Media Kit", href: "/design-systems/tilda/media-kit" },
        ]}
      />
      <TildaMediaKit />
    </>
  );
}
