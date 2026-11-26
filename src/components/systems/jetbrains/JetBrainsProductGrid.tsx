import Link from "next/link";

const products = [
  {
    code: "IJ",
    name: "IntelliJ IDEA",
    category: "IDE",
    description: "The leading Java and Kotlin IDE for enterprise development.",
    gradient: "linear-gradient(135deg, #FE2857 0%, #087CFA 100%)",
  },
  {
    code: "WS",
    name: "WebStorm",
    category: "IDE",
    description: "The smartest JavaScript and TypeScript IDE.",
    gradient: "linear-gradient(135deg, #00CDD7 0%, #087CFA 100%)",
  },
  {
    code: "PC",
    name: "PyCharm",
    category: "IDE",
    description: "The Python IDE for data science and web development.",
    gradient: "linear-gradient(135deg, #21D789 0%, #FCF84A 100%)",
  },
  {
    code: "DG",
    name: "DataGrip",
    category: "Database",
    description: "Many databases, one tool for SQL and schema exploration.",
    gradient: "linear-gradient(135deg, #21D789 0%, #6B57FF 100%)",
  },
  {
    code: "RD",
    name: "Rider",
    category: ".NET",
    description: "Fast and powerful cross-platform .NET & game dev IDE.",
    gradient: "linear-gradient(135deg, #FF318C 0%, #FC801D 100%)",
  },
  {
    code: "GO",
    name: "GoLand",
    category: "IDE",
    description: "An ergonomic IDE built specifically for Go developers.",
    gradient: "linear-gradient(135deg, #087CFA 0%, #B74AF7 100%)",
  },
];

/**
 * JetBrains product/support card grid modeled after jetbrains.com/support/ and jetbrains.com/all/.
 */
export function JetBrainsProductGrid() {
  return (
    <section className="bg-background py-16 border-b border-border">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Integrated Development Environments
            </h2>
            <p className="mt-2 text-sm text-muted">
              Elevated <code className="font-mono text-xs">#303136</code> cards with signature multi-stop IDE icon badges.
            </p>
          </div>
          <Link
            href="/design-systems/jetbrains/pricing"
            className="text-sm font-medium text-accent hover:underline"
          >
            Compare plans →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((item) => (
            <div
              key={item.code}
              className="rounded-lg border border-border bg-surface-muted p-6 hover:border-border-strong transition-colors"
            >
              <div className="flex items-center justify-between">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-md text-sm font-bold text-white"
                  style={{ background: item.gradient }}
                >
                  {item.code}
                </div>
                <span className="rounded-full bg-surface px-3 py-1 font-mono text-[11px] text-muted border border-border">
                  {item.category}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">
                {item.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
