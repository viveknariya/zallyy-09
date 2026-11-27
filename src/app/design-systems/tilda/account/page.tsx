import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { TildaAccount } from "@/components/systems/tilda/TildaAccount";
import { buildTildaMetadata } from "../_metadata";

export const metadata = buildTildaMetadata({
  title: "Tilda Profile & Referral Program",
  description:
    "Profile form, subscription status, and 3-step numbered referral program cards modeled after tilda.cc/identity.",
  path: "/design-systems/tilda/account",
});

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
