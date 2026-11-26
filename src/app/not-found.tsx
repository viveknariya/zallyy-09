import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex items-center justify-center bg-background px-6 py-24 text-center">
        <div className="max-w-md">
          <p className="font-display text-7xl font-light text-accent-strong">404</p>
          <h1 className="mt-4 font-display text-3xl font-normal text-foreground">
            Page not found
          </h1>
          <p className="mt-3 text-sm text-muted">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="mt-8">
            <Button href="/" variant="outline">
              Back to Home
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
