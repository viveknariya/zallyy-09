import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FreshaWalletView } from "@/components/systems/fresha/FreshaAccountPortal";

export const metadata: Metadata = {
  title: "Wallet & Gift Cards — Fresha Design System",
  description:
    "Customer wallet balance gradient card, live gift card code redemption, and saved debit/credit payment methods.",
  alternates: { canonical: "/design-systems/fresha/wallet" },
};

export default function FreshaWalletPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Fresha", href: "/design-systems/fresha" },
          { label: "Wallet", href: "/design-systems/fresha/wallet" },
        ]}
      />
      <FreshaWalletView />
    </>
  );
}
