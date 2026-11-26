import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AuthCard } from "@/components/sections/AuthCard";

export default function RecoverPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-surface">
        <AuthCard mode="recover" />
      </main>
      <Footer />
    </>
  );
}
