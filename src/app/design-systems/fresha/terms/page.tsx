import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FreshaLegalView } from "@/components/systems/fresha/FreshaEditorial";

export const metadata: Metadata = {
  title: "Terms of Use & Legal Overview — Fresha Design System",
  description:
    "Terms of use and legal overview portal featuring underline tabs, anchor TOC, and structured policy cards.",
  alternates: { canonical: "/design-systems/fresha/terms" },
};

export default function FreshaTermsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Fresha", href: "/design-systems/fresha" },
          { label: "Terms & Conditions", href: "/design-systems/fresha/terms" },
        ]}
      />
      <FreshaLegalView initialSection="terms" />
    </>
  );
}
