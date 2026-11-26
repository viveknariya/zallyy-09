import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function TildaSystemLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div data-design-system="tilda" className="min-h-full flex flex-col flex-1">
      <Navbar />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}
