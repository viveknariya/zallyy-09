import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { TildaProjects } from "@/components/systems/tilda/TildaProjects";

export const metadata: Metadata = {
  title: "Tilda Projects & CRM Leads",
  description:
    "Workspace projects grid and recent CRM leads table modeled after tilda.cc/projects.",
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
      <TildaProjects />
    </>
  );
}
