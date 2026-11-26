import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JetBrainsComponentsShowcase } from "@/components/systems/jetbrains/JetBrainsComponentsShowcase";

export const metadata: Metadata = {
  title: "JetBrains Components & Tokens",
  description:
    "Interactive showcase of JetBrains dark tokens, pill buttons, underline tabs, and JetBrains Mono specimens.",
  alternates: { canonical: "/design-systems/jetbrains/components" },
};

export default function JetBrainsComponentsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "JetBrains", href: "/design-systems/jetbrains" },
          { label: "Components", href: "/design-systems/jetbrains/components" },
        ]}
      />
      <JetBrainsComponentsShowcase />
    </>
  );
}
