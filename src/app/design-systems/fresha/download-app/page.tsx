import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FreshaDownloadAppView } from "@/components/systems/fresha/FreshaBusinessPricing";

export const metadata: Metadata = {
  title: "Download Mobile Apps — Fresha Design System",
  description:
    "Side-by-side customer booking app and partner business app promotion cards with QR scan tiles and mobile previews.",
  alternates: { canonical: "/design-systems/fresha/download-app" },
};

export default function FreshaDownloadAppPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Fresha", href: "/design-systems/fresha" },
          { label: "Download App", href: "/design-systems/fresha/download-app" },
        ]}
      />
      <FreshaDownloadAppView />
    </>
  );
}
