import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { TildaAuthCard } from "@/components/systems/tilda/TildaAuthCard";
import { buildTildaMetadata } from "../_metadata";

export const metadata = buildTildaMetadata({
  title: "Tilda Log In Pattern",
  description: "Minimalist login screen pattern modeled after tilda.cc/login/.",
  path: "/design-systems/tilda/login",
  noIndex: true,
});

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
