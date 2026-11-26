import type { Metadata } from "next";
import { ProjectsDashboard } from "@/components/sections/ProjectsDashboard";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = {
  title: "Tilda Projects & CRM Table Pattern",
  description:
    "Starter workspace projects grid and CRM leads table inspired by tilda.cc/projects and crm.tilda.cc.",
  alternates: { canonical: "/design-systems/tilda/projects" },
};

export default function TildaProjectsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Tilda", href: "/design-systems/tilda" },
          { label: "Projects", href: "/design-systems/tilda/projects" },
        ]}
      />
      <div className="flex-1 bg-surface">
        <ProjectsDashboard />
      </div>
    </>
  );
}
