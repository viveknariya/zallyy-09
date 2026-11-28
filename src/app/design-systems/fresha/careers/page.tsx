import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FreshaCareersView } from "@/components/systems/fresha/FreshaEditorial";

export const metadata: Metadata = {
  title: "Careers & Open Roles — Fresha Design System",
  description:
    "Open engineering, product design, and commercial roles grouped by city with country and department filters.",
  alternates: { canonical: "/design-systems/fresha/careers" },
};

export default function FreshaCareersPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Fresha", href: "/design-systems/fresha" },
          { label: "Careers", href: "/design-systems/fresha/careers" },
        ]}
      />
      <FreshaCareersView />
    </>
  );
}
