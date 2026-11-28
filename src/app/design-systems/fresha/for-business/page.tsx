import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FreshaForBusinessView } from "@/components/systems/fresha/FreshaBusinessPricing";

export const metadata: Metadata = {
  title: "Fresha for Business — Partner Platform & Scheduling",
  description:
    "B2B salon and spa management showcase featuring dark hero calendar staging, 6-card capability grid, contactless payment terminal, and partner reviews.",
  alternates: { canonical: "/design-systems/fresha/for-business" },
};

export default function FreshaForBusinessPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Fresha", href: "/design-systems/fresha" },
          { label: "For Business", href: "/design-systems/fresha/for-business" },
        ]}
      />
      <FreshaForBusinessView />
    </>
  );
}
