const causes = [
  {
    number: "01",
    title: "Wrong currency",
    body: "Buyers see a converted price estimate, not the AED or SAR they'll actually pay.",
  },
  {
    number: "02",
    title: "Payment methods that don't fit",
    body: "The same global method list, in the same order, in every country.",
  },
  {
    number: "03",
    title: "No COD verification",
    body: "Fake and mistyped cash-on-delivery orders make it all the way to fulfilment.",
  },
];

export default function ProblemSection() {
  return (
    <section className="container py-10 md:py-14">
      <div className="rounded-3xl border border-gray-500/20 bg-slate-50/70 px-6 py-6 md:px-12 md:py-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            The checkout problem
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
            Your ads are working.
            <br />
            <span className="text-blue-400">Your checkout isn't.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Traffic lands, people browse, carts fill up — and most of that gets
            lost in the last 90 seconds. Not because the product or the offer is
            wrong, but because the checkout wasn't built for a Gulf buyer.
          </p>
        </div>

        {/* Problem cards */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {causes.map((c) => (
            <div
              key={c.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-sm font-semibold text-emerald-700">
                  {c.number}
                </span>

                <div className="h-2 w-2 rounded-full bg-emerald-500 opacity-60 transition-opacity group-hover:opacity-100" />
              </div>

              <h3 className="mt-6 text-lg font-semibold tracking-tight text-slate-950">
                {c.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
