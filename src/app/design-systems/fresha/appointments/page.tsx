import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { FreshaAppointmentsView } from "@/components/systems/fresha/FreshaAccountPortal";

export const metadata: Metadata = {
  title: "Appointments — Fresha Design System",
  description:
    "Upcoming and past appointment split view with violet active selection ring, Confirmed badge, Add to calendar reminder, and reschedule CTA.",
  alternates: { canonical: "/design-systems/fresha/appointments" },
};

export default function FreshaAppointmentsPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Design Systems", href: "/design-systems" },
          { label: "Fresha", href: "/design-systems/fresha" },
          { label: "Appointments", href: "/design-systems/fresha/appointments" },
        ]}
      />
      <FreshaAppointmentsView />
    </>
  );
}
