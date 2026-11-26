const payouts = [
  { id: "po_9821", date: "Nov 24, 2026", amount: "$3,420.00", status: "Paid" },
  { id: "po_9784", date: "Nov 10, 2026", amount: "$2,890.00", status: "Paid" },
  { id: "po_9710", date: "Oct 27, 2026", amount: "$2,150.00", status: "Paid" },
];

/**
 * Polar Finance & Wallet balance view modeled after polar.sh/dashboard/.../finance/income.
 */
export function PolarFinance() {
  return (
    <section className="bg-background py-14 border-b border-border">
      <div className="mx-auto max-w-6xl px-6 space-y-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              Finance &amp; Payouts
            </h1>
            <p className="mt-1.5 text-sm text-muted">
              Track net balances, Merchant of Record tax handling, and payout history.
            </p>
          </div>
          <button
            type="button"
            className="rounded-full bg-foreground px-5 py-2.5 text-xs font-medium text-background cursor-pointer"
          >
            Withdraw Balance
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-border p-6">
            <p className="text-xs text-muted">Available Balance</p>
            <p className="mt-2 text-3xl font-medium text-foreground">$4,120.50</p>
          </div>
          <div className="rounded-2xl border border-border p-6">
            <p className="text-xs text-muted">Pending Payout</p>
            <p className="mt-2 text-3xl font-medium text-foreground">$840.00</p>
          </div>
          <div className="rounded-2xl border border-border p-6">
            <p className="text-xs text-muted">Lifetime Net Revenue</p>
            <p className="mt-2 text-3xl font-medium text-foreground">$28,940.00</p>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border bg-background">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border bg-surface text-xs font-medium text-muted">
              <tr>
                <th className="px-6 py-3.5">Payout ID</th>
                <th className="px-6 py-3.5">Date</th>
                <th className="px-6 py-3.5">Amount</th>
                <th className="px-6 py-3.5">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {payouts.map((p) => (
                <tr key={p.id} className="hover:bg-surface/60">
                  <td className="px-6 py-4 font-mono text-xs text-muted">{p.id}</td>
                  <td className="px-6 py-4 text-foreground">{p.date}</td>
                  <td className="px-6 py-4 font-medium text-foreground">{p.amount}</td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-surface-muted px-2.5 py-1 text-xs font-medium text-foreground">
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
