import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PricingSection } from "@/components/sections/PricingSection";

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}
