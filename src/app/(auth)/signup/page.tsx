import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AuthCard } from "@/components/sections/AuthCard";

export default function SignUpPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-surface">
        <AuthCard mode="signup" />
      </main>
      <Footer />
    </>
  );
}
