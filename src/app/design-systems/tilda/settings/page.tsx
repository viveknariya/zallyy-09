import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

export const metadata: Metadata = {
  title: "Tilda Site Settings Pattern",
  description:
    "Clean bordered settings form pattern modeled after Tilda.cc project settings.",
  alternates: { canonical: "/design-systems/tilda/settings" },
};

export default function TildaSettingsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Tilda", href: "/design-systems/tilda" },
          { label: "Settings", href: "/design-systems/tilda/settings" },
        ]}
      />
      <div className="flex-1 bg-surface py-12">
        <div className="mx-auto max-w-3xl px-6 space-y-8">
          <div>
            <h1 className="font-display text-3xl font-normal text-foreground">
              Site Settings
            </h1>
            <p className="mt-1 text-sm text-muted">
              Configure your project domain, metadata, and publishing options.
            </p>
          </div>

          <Card variant="bordered">
            <h2 className="font-display text-xl font-medium text-foreground">
              General
            </h2>
            <div className="mt-6 space-y-5">
              <Input
                id="site-title"
                label="Site Title"
                defaultValue="Tilda Starter Project"
              />
              <Input
                id="custom-domain"
                label="Custom Domain"
                defaultValue="studio.example.com"
                hint="Point an A record to your deployment IP to connect."
              />
              <div className="pt-2">
                <Button variant="accent">Save Changes</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
