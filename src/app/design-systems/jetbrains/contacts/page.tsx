import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JetBrainsContacts } from "@/components/systems/jetbrains/JetBrainsContacts";

export const metadata: Metadata = {
  title: "JetBrains Contacts & Offices Pattern",
  description:
    "Global offices and enterprise sales contact layout modeled after jetbrains.com/company/contacts/.",
  alternates: { canonical: "/design-systems/jetbrains/contacts" },
};

export default function JetBrainsContactsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "JetBrains", href: "/design-systems/jetbrains" },
          { label: "Contacts", href: "/design-systems/jetbrains/contacts" },
        ]}
      />
      <JetBrainsContacts />
    </>
  );
}
