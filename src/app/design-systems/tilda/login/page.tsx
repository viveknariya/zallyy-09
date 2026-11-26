import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { TildaAuthCard } from "@/components/systems/tilda/TildaAuthCard";

export const metadata: Metadata = {
  title: "Tilda Log In Pattern",
  description: "Minimalist login screen pattern modeled after tilda.cc/login/.",
  alternates: { canonical: "/design-systems/tilda/login" },
};

export default function TildaLoginPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Tilda", href: "/design-systems/tilda" },
          { label: "Log In", href: "/design-systems/tilda/login" },
        ]}
      />
      <div className="flex-1 bg-surface">
        <TildaAuthCard mode="login" />
      </div>
    </>
  );
}
