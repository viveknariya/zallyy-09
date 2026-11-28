import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FreshaProfileView } from "@/components/systems/fresha/FreshaAccountPortal";

export const metadata: Metadata = {
  title: "Profile, Addresses & Favorites — Fresha Design System",
  description:
    "Customer profile card with EM monogram avatar, Home/Work addresses, saved favorites grid, and consultation forms state.",
  alternates: { canonical: "/design-systems/fresha/profile" },
};

export default function FreshaProfilePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Fresha", href: "/design-systems/fresha" },
          { label: "Profile", href: "/design-systems/fresha/profile" },
        ]}
      />
      <FreshaProfileView />
    </>
  );
}
