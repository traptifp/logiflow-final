import rider from "@/assets/rider.jpg";
import { ShoppingBag, Factory, Store, Truck, Rocket } from "lucide-react";

const items = [
  { icon: ShoppingBag, label: "E-commerce Sellers", desc: "Marketplace & D2C brands shipping daily orders." },
  { icon: Factory, label: "Manufacturers", desc: "Bulk dispatch and inter-state movement." },
  { icon: Truck, label: "Wholesalers & Distributors", desc: "Reliable distribution to retailers & dealers." },
  { icon: Store, label: "Retail Businesses", desc: "Store-to-store and store-to-home logistics." },
  { icon: Rocket, label: "SMEs & Startups", desc: "Flexible logistics that scale with you." },
];

export const Industries = () => (
  <section id="industries" className="bg-soft-gradient py-12 md:py-24">
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <div className="grid items-stretch gap-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col justify-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">Industries we serve</span>
          <h2 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]">
            Industries <span className="text-gradient-teal">We Support</span>
          </h2>
          <p className="mt-5 max-w-md text-base text-muted-foreground">
            We work with businesses across multiple sectors — whatever you ship, wherever you ship,
            Logiflow has a partner network for it.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-accent-gradient/20 blur-2xl" />
          <div className="relative h-full overflow-hidden rounded-3xl shadow-lift">
            <img src={rider} alt="Logiflow delivery rider on an Indian street at sunrise" loading="lazy" width={1280} height={960} className="h-full min-h-[320px] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {items.map(({ icon: Icon, label, desc }) => (
          <div key={label} className="group rounded-2xl border border-border/60 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-lift">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-soft text-teal transition group-hover:bg-accent-gradient group-hover:text-white">
              <Icon className="h-5 w-5" strokeWidth={2} />
            </div>
            <h3 className="mt-4 text-base font-bold text-navy">{label}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
