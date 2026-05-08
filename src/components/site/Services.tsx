import {
  MapPin,
  Network,
  Package,
  Building2,
  ShoppingCart,
  CalendarClock,
  ArrowUpRight,
} from "lucide-react";

const small = [
  {
    icon: Package,
    title: "Flexible Parcel Handling",
    desc: "From 100 grams to 100+ kilograms — handled safely.",
  },
  {
    icon: Building2,
    title: "B2B · B2C · E-commerce",
    desc: "End-to-end support for every business model.",
  },
  {
    icon: ShoppingCart,
    title: "Marketplace Deliveries",
    desc: "Amazon, Flipkart, Meesho, Blinkit & more.",
  },
  {
    icon: CalendarClock,
    title: "Daily Dispatch Cycles",
    desc: "Structured pickups for consistent flow.",
  },
];

export const Services = () => (
  <section id="services" className="bg-soft-gradient py-12 md:py-20">
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">
            Services
          </span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]">
            Our Core{" "}
            <span className="text-gradient-teal">Logistics Solutions</span>
          </h2>
        </div>
        <p className="max-w-md text-base text-muted-foreground">
          From last-mile e-commerce to bulk B2B cargo, one trusted team handles
          everything your business ships.
        </p>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:grid-rows-2">
        {/* Hero feature block */}
        <div className="group relative overflow-hidden rounded-3xl bg-cta-gradient p-5 md:p-10 text-white shadow-lift lg:col-span-2 lg:row-span-2">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal-bright/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-12 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />
          <div className="relative flex h-full flex-col justify-between gap-10">
            <div>
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-teal-bright backdrop-blur">
                <MapPin className="h-7 w-7" strokeWidth={2} />
              </div>
              <h3 className="mt-6 font-display text-2xl font-extrabold leading-[1.05] tracking-tight sm:text-4xl">
                Pan-India Coverage
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-white/75">
                We deliver shipments across India — from metros to remote towns
                and tier-3 pin codes — through one coordinated network.
              </p>
            </div>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                <div>
                  <div className="font-display text-lg md:text-xl font-black text-white">
                    Anywhere-to-Anywhere 
                  </div>
                  <div className="text-xs uppercase tracking-widest text-white/55">
                    Shipping Across India
                  </div>
                </div>
                <div>
                  <div className="font-display text-lg  md:text-xl font-black text-white">
                    Multi-Courier 
                  </div>
                  <div className="text-xs uppercase tracking-widest text-white/55">
                    Aggregator Network
                  </div>
                </div>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold backdrop-blur transition hover:bg-white/20"
              >
                Talk to us <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Secondary feature */}
        <div className="group relative overflow-hidden rounded-3xl border border-teal/15 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-lift lg:col-span-1">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient text-white shadow-glow">
            <Network className="h-6 w-6" strokeWidth={2} />
          </div>
          <h3 className="mt-5 text-xl font-bold tracking-tight text-navy">
            Multi-Courier Routing
          </h3>
          <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
            Each shipment is routed to the best courier based on speed, cost and
            serviceability.
          </p>
        </div>

        {/* Smaller cards row */}
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-1 lg:grid-cols-1">
          {small.slice(0, 2).map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group flex items-start gap-4 rounded-2xl border border-border/60 bg-white p-5 shadow-soft transition hover:border-teal/30 hover:shadow-lift"
            >
              <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-soft text-teal transition group-hover:bg-accent-gradient group-hover:text-white">
                <Icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-[15px] font-bold tracking-tight text-navy">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-snug text-muted-foreground">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trailing row of remaining smaller cards */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {small.slice(2).map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-teal/30 hover:shadow-lift"
          >
            <div className="flex items-center gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-soft text-teal transition group-hover:bg-accent-gradient group-hover:text-white">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-bold tracking-tight text-navy">
                {title}
              </h3>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
