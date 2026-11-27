import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { TildaBlog } from "@/components/systems/tilda/TildaBlog";
import { buildTildaMetadata } from "../_metadata";

export const metadata = buildTildaMetadata({
  title: "Tilda Editorial Blog",
  description:
    "Editorial blog layout with monthly newsletter subscribe banner, category filter tabs, and article feed cards.",
  path: "/design-systems/tilda/blog",
});

export default function TildaBlogPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Tilda", href: "/design-systems/tilda" },
          { label: "Blog", href: "/design-systems/tilda/blog" },
        ]}
      />
      <TildaBlog />
    </>
  );
}
