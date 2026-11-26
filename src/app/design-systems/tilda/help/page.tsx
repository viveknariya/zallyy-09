import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { TildaHelp } from "@/components/systems/tilda/TildaHelp";

export const metadata: Metadata = {
  title: "Tilda Help, FAQ & Support Tickets",
  description:
    "Support center with FAQ search, knowledge base cards, accordion, and New Ticket form modeled after help.tilda.cc.",
  alternates: { canonical: "/design-systems/tilda/help" },
};

export default function TildaHelpPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Tilda", href: "/design-systems/tilda" },
          { label: "Help", href: "/design-systems/tilda/help" },
        ]}
      />
      <TildaHelp />
    </>
  );
}
