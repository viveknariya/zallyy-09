import Link from "next/link";

export default function PolarNotFound() {
  return (
    <section className="flex-1 flex items-center justify-center bg-background px-6 py-24 text-center">
      <div className="max-w-md space-y-4">
        <span className="inline-block rounded-full bg-surface-muted px-3 py-1 font-mono text-xs text-muted">
          404
        </span>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Page not found
        </h1>
        <p className="text-sm text-muted">
          The requested Polar route could not be found.
        </p>
        <div className="pt-2">
          <Link
            href="/design-systems/polar"
            className="inline-flex rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background"
          >
            Back to Polar
          </Link>
        </div>
      </div>
    </section>
  );
}
