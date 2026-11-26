import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { TildaContacts } from "@/components/systems/tilda/TildaContacts";

export const metadata: Metadata = {
  title: "Tilda CRM Contacts",
  description:
    "CRM contacts table with stage tabs, live search, and crisp 2px framed Contact Card modal.",
  alternates: { canonical: "/design-systems/tilda/contacts" },
};

export default function TildaContactsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Tilda", href: "/design-systems/tilda" },
          { label: "Contacts", href: "/design-systems/tilda/contacts" },
        ]}
      />
      <TildaContacts />
    </>
  );
}
