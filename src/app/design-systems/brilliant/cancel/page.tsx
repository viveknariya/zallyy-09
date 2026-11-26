import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BrilliantCancelTrial } from "@/components/systems/brilliant/BrilliantCancelTrial";

export const metadata: Metadata = {
  title: "Cancel Trial — Brilliant Design System",
  description:
    "Trial cancellation retention modal displaying remaining days, reminder notice, and Premium benefits summary.",
  alternates: { canonical: "/design-systems/brilliant/cancel" },
};

export default function BrilliantCancelPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Brilliant", href: "/design-systems/brilliant" },
          { label: "Cancel Trial", href: "/design-systems/brilliant/cancel" },
        ]}
      />
      <BrilliantCancelTrial />
    </>
  );
}
