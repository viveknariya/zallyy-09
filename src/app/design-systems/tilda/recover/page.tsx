import type { Metadata } from "next";
import { AuthCard } from "@/components/sections/AuthCard";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tilda Reset Password Pattern",
  description:
    "Password recovery screen pattern modeled after tilda.cc/login/recover/.",
  alternates: { canonical: "/design-systems/tilda/recover" },
};

export default function TildaRecoverPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Tilda", href: "/design-systems/tilda" },
          { label: "Reset Password", href: "/design-systems/tilda/recover" },
        ]}
      />
      <div className="flex-1 bg-surface">
        <AuthCard mode="recover" />
      </div>
    </>
  );
}
