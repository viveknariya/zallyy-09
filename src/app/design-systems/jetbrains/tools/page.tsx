import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JetBrainsProductGrid } from "@/components/systems/jetbrains/JetBrainsProductGrid";

export const metadata: Metadata = {
  title: "JetBrains Developer Tools Pattern",
  description: "IDE & developer tools catalog grid inspired by jetbrains.com/all/.",
  alternates: { canonical: "/design-systems/jetbrains/tools" },
};

export default function JetBrainsToolsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "JetBrains", href: "/design-systems/jetbrains" },
          { label: "Developer Tools", href: "/design-systems/jetbrains/tools" },
        ]}
      />
      <JetBrainsProductGrid />
    </>
  );
}
