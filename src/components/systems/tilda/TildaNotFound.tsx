import { Button } from "@/components/ui/Button";
import { TildaNotFoundMark } from "./TildaLogo";

/**
 * Minimalist 404 screen modeled directly after tilda.cc's error page.
 */
export function TildaNotFound() {
  return (
    <div className="flex-1 flex items-center justify-center bg-background px-6 py-24 text-center">
      <div className="max-w-md space-y-6">
        <TildaNotFoundMark />
        <div className="space-y-2">
          <h1 className="font-display text-2xl font-normal text-foreground">
            Error 404: Page not found
          </h1>
          <p className="text-sm text-muted">
            The page you requested does not exist or has been moved.
          </p>
        </div>
        <div className="pt-2">
          <Button href="/design-systems/tilda" variant="outline">
            Back to Tilda Hub
          </Button>
        </div>
      </div>
    </div>
  );
}
