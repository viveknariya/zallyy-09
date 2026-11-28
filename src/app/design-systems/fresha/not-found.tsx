import Link from "next/link";

export default function FreshaNotFoundPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center justify-center px-6 py-28 text-center">
      <div className="relative flex items-center justify-center py-8">
        <span
          aria-hidden="true"
          className="select-none text-[140px] sm:text-[180px] font-bold leading-none tracking-tight text-border"
        >
          404
        </span>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Page not found.
          </h1>
          <Link
            href="/design-systems/fresha"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-[#14151a] px-6 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
