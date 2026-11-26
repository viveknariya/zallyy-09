import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { BrilliantHomeDashboard } from "@/components/systems/brilliant/BrilliantHomeDashboard";

export const metadata: Metadata = {
  title: "Learner Home — Brilliant Design System",
  description:
    "Daily streak tracker, learning habit checklist, XP league progress, and active course resume card.",
  alternates: { canonical: "/design-systems/brilliant/home" },
};

export default function BrilliantHomePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Brilliant", href: "/design-systems/brilliant" },
          { label: "Learner Home", href: "/design-systems/brilliant/home" },
        ]}
      />
      <BrilliantHomeDashboard />
    </>
  );
}
