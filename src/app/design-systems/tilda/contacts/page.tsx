import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { TildaContacts } from "@/components/systems/tilda/TildaContacts";
import { buildTildaMetadata } from "../_metadata";

export const metadata = buildTildaMetadata({
  title: "Tilda CRM Contacts",
  description:
    "CRM contacts table with stage tabs, live search, and crisp 2px framed Contact Card modal.",
  path: "/design-systems/tilda/contacts",
});

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
