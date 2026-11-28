import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FreshaVenueProfile } from "@/components/systems/fresha/FreshaVenueProfile";

export const metadata: Metadata = {
  title: "Lash Lab Inc. Venue Profile — Fresha Design System",
  description:
    "Salon storefront specimen with 2+1 photo mosaic, categorized service menu, sticky summary sidebar, reviews, opening times, and nearby venues.",
  alternates: { canonical: "/design-systems/fresha/venue" },
};

export default function FreshaVenuePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Fresha", href: "/design-systems/fresha" },
          { label: "Venue Profile", href: "/design-systems/fresha/venue" },
        ]}
      />
      <FreshaVenueProfile />
    </>
  );
}
