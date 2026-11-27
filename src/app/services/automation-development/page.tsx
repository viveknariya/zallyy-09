import type { Metadata } from "next";
import { ServiceDetailPage } from "@/components/agency/ServiceDetailPage";
import { AGENCY_SERVICES } from "@/lib/agency-data";
import { buildPageMetadata } from "@/lib/seo";

const service = AGENCY_SERVICES.find((s) => s.slug === "automation-development")!;

export const metadata: Metadata = buildPageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.href,
});

export default function AutomationDevelopmentPage() {
  return <ServiceDetailPage service={service} />;
}
