import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JetBrainsProductGrid } from "@/components/systems/jetbrains/JetBrainsProductGrid";

export const metadata: Metadata = {
  title: "JetBrains Product Support Pattern",
  description: "Developer product support hub inspired by jetbrains.com/support/.",
  alternates: { canonical: "/design-systems/jetbrains/support" },
};

export default function JetBrainsSupportPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "JetBrains", href: "/design-systems/jetbrains" },
          { label: "Support", href: "/design-systems/jetbrains/support" },
        ]}
      />
      <div className="bg-surface py-14 border-b border-border">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl font-bold text-foreground">Product Support</h1>
          <p className="mt-3 max-w-2xl text-base text-muted">
            Select a product below for documentation, community discussions, and technical support.
          </p>
        </div>
      </div>
      <JetBrainsProductGrid />
    </>
  );
}
