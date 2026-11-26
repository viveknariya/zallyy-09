import type { Metadata } from "next";
import { AuthCard } from "@/components/sections/AuthCard";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tilda Sign Up Pattern",
  description:
    "Minimalist registration screen pattern modeled after tilda.cc/registration/.",
  alternates: { canonical: "/design-systems/tilda/signup" },
};

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
        <AuthCard mode="signup" />
      </div>
    </>
  );
}
