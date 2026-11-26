import Link from "next/link";
import { UndefinedDerivativeSvg } from "@/components/systems/brilliant/BrilliantLogo";

export default function BrilliantNotFoundPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 space-y-8">
      <div className="border-b border-border pb-4">
        <h1 className="text-2xl font-bold text-foreground">404 – Page not found</h1>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <p className="text-sm text-muted">
          Much like <span className="font-mono italic text-foreground">y&apos;(0)</span> in the
          function below, this page is undefined!
        </p>
        <Link
          href="/design-systems/brilliant"
          className="inline-flex items-center justify-center rounded-lg bg-surface px-6 py-2 text-xs font-bold text-foreground hover:bg-surface-muted transition-colors"
        >
          Go home
        </Link>
      </div>

      <div className="flex justify-center py-8">
        <UndefinedDerivativeSvg />
      </div>
    </div>
  );
}
