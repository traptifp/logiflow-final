import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { PageCta } from "@/components/site/PageCta";
import { ShoppingCart, Factory, Boxes, Store, Rocket, CheckCircle2 } from "lucide-react";

const industries = [
  { icon: ShoppingCart, t: "E-commerce Sellers", d: "Reliable shipping for online businesses handling daily orders, returns, and bulk dispatches." },
  { icon: Factory, t: "Manufacturers", d: "Efficient logistics for raw materials, finished goods, and inter-city distribution." },
  { icon: Boxes, t: "Wholesalers & Distributors", d: "High-volume shipment handling with optimized routing across multiple regions." },
  { icon: Store, t: "Retail Businesses", d: "Store-to-store and warehouse-to-store logistics with timely delivery coordination." },
  { icon: Rocket, t: "SMEs & Startups", d: "Scalable logistics solutions designed for growing businesses with evolving needs." },
];

const support = [
  "Match courier partners based on industry needs",
  "Optimize cost vs delivery speed per shipment",
  "Support both low-volume and high-frequency operations",
  "Provide flexible routing across India",
];

const why = [
  "Different shipment volumes require different handling",
  "Delivery urgency varies by business type",
  "Warehouse integration needs vary across platforms",
  "Cost optimization depends on shipment patterns",
];

const Industries = () => (
  <main className="min-h-screen bg-background">
    <Navbar />
    <PageHero
      eyebrow="Industries We Serve"
      title={<>Logistics Solutions Built for <span className="text-gradient-teal">Every Business Type</span></>}
      subtitle="Logiflow Pvt. Ltd. supports a wide range of industries with scalable, multi-courier logistics solutions designed for consistent and efficient delivery across India."
    />

    <section className="bg-white py-12 md:py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">Overview</span>
        <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
          Industry-Focused <span className="text-gradient-teal">Logistics Execution</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          Different businesses require different logistics workflows. Logiflow connects each industry with the right courier and cargo partners through a flexible aggregation model — ensuring shipments are handled based on urgency, volume, and delivery requirements.
        </p>
      </div>
    </section>

    <section className="bg-soft-gradient py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">Sectors</span>
          <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
            Industries we <span className="text-gradient-teal">support</span>
          </h2>
        </div>
        <div className="mt-6 md:mt-12 grid gap-3 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((i) => (
            <div key={i.t} className="rounded-2xl border border-border/60 bg-white p-5 md:p-7 shadow-soft transition hover:-translate-y-1 hover:border-teal/30 hover:shadow-lift">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent-gradient text-white shadow-glow">
                <i.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight text-navy">{i.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{i.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white py-12 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-12">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">How we support</span>
          <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-navy sm:text-4xl">
            Adapted logistics for <span className="text-gradient-teal">every operation</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            Logiflow does not follow a fixed shipping model for all businesses. Instead, we adapt to each operation:
          </p>
          <ul className="mt-6 space-y-3">
            {support.map((s) => (
              <li key={s} className="flex items-start gap-3 text-[15px] text-navy/85">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" /> {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-border/60 bg-soft-gradient p-5 md:p-8 shadow-soft">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">Why it matters</span>
          <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-navy">
            Why industry alignment improves delivery efficiency
          </h3>
          <ul className="mt-6 space-y-3">
            {why.map((w) => (
              <li key={w} className="flex items-start gap-3 text-[15px] text-navy/85">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" /> {w}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-medium text-teal">
            Our aggregator model ensures each industry gets a tailored logistics flow.
          </p>
        </div>
      </div>
    </section>

    <PageCta
      title="Get Logistics Built for Your Industry"
      text="Work with Logiflow Pvt. Ltd. to streamline your shipping operations with industry-aligned logistics execution across India."
    />
    <Footer />
  </main>
);

export default Industries;
