import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { TildaLegal } from "@/components/systems/tilda/TildaLegal";
import { buildTildaMetadata } from "../_metadata";

export const metadata = buildTildaMetadata({
  title: "Tilda Terms & Conditions",
  description:
    "Editorial Terms of Service Agreement layout modeled after tilda.cc/terms.",
  path: "/design-systems/tilda/terms",
});

const termsSections = [
  {
    id: "agreement",
    title: "1. Agreement & Scope",
    body: [
      "By creating a workspace or publishing a site, you agree to abide by the platform guidelines and applicable copyright laws.",
    ],
  },
  {
    id: "intellectual-property",
    title: "2. Intellectual Property",
    body: [
      "You retain full ownership of all content, photography, and custom code published on your projects.",
    ],
  },
  {
    id: "export",
    title: "3. Code Export & Billing",
    body: [
      "Paid subscriptions renew automatically according to the selected annual or monthly billing cycle and may be cancelled prior to renewal.",
    ],
  },
];

export default function TildaTermsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Tilda", href: "/design-systems/tilda" },
          { label: "Terms & Conditions", href: "/design-systems/tilda/terms" },
        ]}
      />
      <TildaLegal
        eyebrow="Tilda Publishing"
        title="Terms of Service Agreement"
        intro={[
          "Thank you for using Tilda. Our mission is to provide clear and accessible tools so anyone can publish high-contrast editorial projects online.",
        ]}
        contactEmail="team@tilda.cc"
        sections={termsSections}
      />
    </>
  );
}
