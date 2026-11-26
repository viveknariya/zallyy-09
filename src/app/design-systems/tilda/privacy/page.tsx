import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { TildaLegal } from "@/components/systems/tilda/TildaLegal";

export const metadata: Metadata = {
  title: "Tilda Privacy Policy",
  description:
    "Clean editorial Privacy Policy document layout modeled after tilda.cc/privacy.",
  alternates: { canonical: "/design-systems/tilda/privacy" },
};

const privacySections = [
  {
    id: "collection",
    title: "1. Data We Collect",
    body: [
      "We collect account registration details, project metadata, and publishing logs necessary to operate your websites securely.",
    ],
  },
  {
    id: "usage",
    title: "2. How Data Is Used",
    body: [
      "Information is used strictly to provision custom domains, deliver CRM form notifications, and maintain service reliability.",
    ],
  },
  {
    id: "retention",
    title: "3. Retention & Controls",
    body: [
      "Project owners can export leads or delete workspace data at any time from Site Settings.",
    ],
  },
];

export default function TildaPrivacyPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Tilda", href: "/design-systems/tilda" },
          { label: "Privacy Policy", href: "/design-systems/tilda/privacy" },
        ]}
      />
      <TildaLegal
        eyebrow="Tilda Publishing"
        title="Privacy Policy"
        intro={[
          "Thank you for choosing Tilda. This Privacy Policy explains how personal user data is collected, stored, and protected across our platform.",
        ]}
        contactEmail="legal@tilda.cc"
        sections={privacySections}
      />
    </>
  );
}
