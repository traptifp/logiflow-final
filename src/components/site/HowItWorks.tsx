const steps = [
  { n: "01", t: "Share shipment details", d: "Tell us your pickup location, destination, and parcel requirements." },
  { n: "02", t: "Courier assignment", d: "We select the best courier partner based on speed, cost and serviceability." },
  { n: "03", t: "Pickup & delivery execution", d: "We manage the entire delivery journey end-to-end until it's delivered." },
];

export const HowItWorks = () => (
  <section id="how" className="bg-white py-12 md:py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">How it works</span>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]">
          Simple, Fast & <span className="text-gradient-teal">Hassle-Free</span> Process
        </h2>
        <p className="mt-4 max-w-xl text-base text-muted-foreground">
          Three steps from a quick conversation to a delivered shipment.
        </p>
      </div>

      <div className="relative mt-10 md:mt-20">
        <div className="grid gap-4 md:gap-8 lg:grid-cols-3 lg:gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="relative h-full rounded-2xl border border-border/60 bg-white p-5 md:p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-teal/30 hover:shadow-lift">
                <div className="flex items-center gap-4">
                  <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-accent-gradient text-white shadow-glow">
                    <span className="font-display text-base font-extrabold">{s.n}</span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-teal/40 to-transparent" />
                </div>
                <h3 className="mt-6 text-xl font-bold leading-tight tracking-tight text-navy">{s.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-teal/25 bg-white text-teal shadow-soft lg:flex"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
