import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { TildaAuthCard } from "@/components/systems/tilda/TildaAuthCard";
import { buildTildaMetadata } from "../_metadata";

export const metadata = buildTildaMetadata({
  title: "Tilda Reset Password Pattern",
  description:
    "Password recovery screen pattern modeled after tilda.cc/login/recover/.",
  path: "/design-systems/tilda/recover",
  noIndex: true,
});

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
        <TildaAuthCard mode="recover" />
      </div>
    </>
  );
}
