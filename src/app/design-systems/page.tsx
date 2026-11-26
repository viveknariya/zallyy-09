import type { Metadata } from "next";
import { DirectorySystemCard } from "@/components/directory/DirectoryCards";
import {
  DirectoryFooter,
  DirectoryHeader,
} from "@/components/directory/DirectoryShell";
import { DIRECTORY_SYSTEMS } from "@/components/directory/directory-data";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "All Design Systems",
  description:
    "Explore all website design systems, UI component libraries, color palettes, and Next.js starter templates.",
  alternates: { canonical: "/design-systems" },
  openGraph: {
    title: "All Design Systems",
    description:
      "Explore all website design systems, UI component libraries, and Next.js starter templates.",
    url: "/design-systems",
  },
};

export default function DesignSystemsIndexPage() {
  return (
    <div className="min-h-full flex flex-col bg-background">
      <DirectoryHeader />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
        ]}
      />

      <main className="flex-1 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div>
            <Badge tone="accent">Systems</Badge>
            <h1 className="mt-4 font-display text-4xl font-light text-foreground">
              Design Systems Directory
            </h1>
            <p className="mt-3 max-w-2xl text-base text-muted">
              Every design system is self-contained under its own SEO-friendly
              route with scoped tokens, reusable components, and demo pages.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DIRECTORY_SYSTEMS.map((sys) => (
              <DirectorySystemCard key={sys.slug} system={sys} mode="catalog" />
            ))}
          </div>
        </div>
      </main>

      <DirectoryFooter variant="surface" />
    </div>
  );
}
