import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { TildaAuthCard } from "@/components/systems/tilda/TildaAuthCard";
import { buildTildaMetadata } from "../_metadata";

export const metadata = buildTildaMetadata({
  title: "Tilda Sign Up Pattern",
  description:
    "Minimalist registration screen pattern modeled after tilda.cc/registration/.",
  path: "/design-systems/tilda/signup",
  noIndex: true,
});

export default function TildaSignUpPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Tilda", href: "/design-systems/tilda" },
          { label: "Sign Up", href: "/design-systems/tilda/signup" },
        ]}
      />
      <div className="flex-1 bg-surface">
        <TildaAuthCard mode="signup" />
      </div>
    </>
  );
}
