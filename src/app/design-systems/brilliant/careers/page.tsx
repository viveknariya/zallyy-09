import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BrilliantCareersView } from "@/components/systems/brilliant/BrilliantEditorial";

export const metadata: Metadata = {
  title: "Careers at Brilliant — Design System",
  description:
    "Culture principles and open engineering, curriculum, and design roles at Brilliant.",
  alternates: { canonical: "/design-systems/brilliant/careers" },
};

export default function BrilliantCareersPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Brilliant", href: "/design-systems/brilliant" },
          { label: "Careers", href: "/design-systems/brilliant/careers" },
        ]}
      />
      <BrilliantCareersView />
    </>
  );
}
