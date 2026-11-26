import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { TildaSetup } from "@/components/systems/tilda/TildaSetup";

export const metadata: Metadata = {
  title: "Tilda Account Setup & Onboarding",
  description:
    "Three-step workspace, subdomain, and template setup flow modeled after tilda.cc/identity.",
  alternates: { canonical: "/design-systems/tilda/setup" },
};

export default function TildaSetupPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Tilda", href: "/design-systems/tilda" },
          { label: "Account Setup", href: "/design-systems/tilda/setup" },
        ]}
      />
      <TildaSetup />
    </>
  );
}
