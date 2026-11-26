import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { TildaAccount } from "@/components/systems/tilda/TildaAccount";

export const metadata: Metadata = {
  title: "Tilda Profile & Referral Program",
  description:
    "Profile form, subscription status, and 3-step numbered referral program cards modeled after tilda.cc/identity.",
  alternates: { canonical: "/design-systems/tilda/account" },
};

export default function TildaAccountPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Tilda", href: "/design-systems/tilda" },
          { label: "Account", href: "/design-systems/tilda/account" },
        ]}
      />
      <TildaAccount />
    </>
  );
}
