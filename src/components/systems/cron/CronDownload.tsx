import { Calendar } from "lucide-react";

/**
 * Centered Cron download view modeled after cron.com/download/macos.
 */
export function CronDownload() {
  return (
    <section className="flex-1 bg-background py-24 px-6">
      <div className="mx-auto max-w-md text-center space-y-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-muted border border-border text-accent">
          <Calendar className="h-8 w-8" />
        </div>

        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Download Cron
        </h1>

        <div className="flex flex-col items-center gap-3 pt-2">
          <button
            type="button"
            className="w-full max-w-xs rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-strong transition-colors cursor-pointer"
          >
            Download Cron for macOS
          </button>
          <button
            type="button"
            className="w-full max-w-xs rounded-full border border-accent px-6 py-3 text-sm font-semibold text-accent hover:bg-accent/10 transition-colors cursor-pointer"
          >
            Download Intel version
          </button>
        </div>

        <div className="pt-4 space-y-2 text-xs font-medium text-accent">
          <p>Get Cron for iOS</p>
          <p>Get Cron for Windows</p>
        </div>
      </div>
    </section>
  );
}
