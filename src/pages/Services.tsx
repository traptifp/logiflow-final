import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { PageCta } from "@/components/site/PageCta";
import { Truck, Route, Package, ShoppingCart, Warehouse, Calendar, CheckCircle2 } from "lucide-react";

const services = [
  { icon: Truck, t: "Pan India Shipping", d: "Pickup and delivery coverage across all major cities and remote locations in India." },
  { icon: Route, t: "Multi-Courier Routing", d: "Shipments assigned to courier partners based on speed, cost and serviceability." },
  { icon: Package, t: "Flexible Shipment Handling", d: "From 100 grams to 100 kgs — small parcels to bulk cargo movement." },
  { icon: ShoppingCart, t: "B2B | B2C | E-commerce Logistics", d: "Execution support for sellers, manufacturers, distributors and retail." },
  { icon: Warehouse, t: "Appointment Deliveries", d: "Structured deliveries to Amazon, Flipkart, Meesho, Blinkit, Instamart and more." },
  { icon: Calendar, t: "Daily Dispatch Operations", d: "Scheduled pickup and dispatch for high-frequency shipment businesses." },
];

const steps = [
  { n: "01", t: "Requirement Intake", d: "Shipment details are collected from the business." },
  { n: "02", t: "Partner Allocation", d: "Courier partner selected based on serviceability, cost and timeline." },
  { n: "03", t: "Pickup Coordination", d: "Shipment is picked up and processed through the assigned partner." },
  { n: "04", t: "Delivery Completion", d: "Final delivery is completed with tracking support throughout." },
];

const reasons = [
  "No dependency on a single courier network",
  "Flexible delivery routing per shipment",
  "Cost-optimized partner selection",
  "Wider coverage across India",
  "Reduced operational delays and bottlenecks",
];

const audience = ["E-commerce sellers", "Manufacturers", "Wholesale distributors", "Retail businesses", "SMEs & startups"];

const Services = () => (
  <main className="min-h-screen bg-background">
    <Navbar />
    <PageHero
      eyebrow="Our Services"
      title={<>Multi-Courier Logistics, <span className="text-gradient-teal">Optimized for Speed & Cost</span></>}
      subtitle="Logiflow Pvt. Ltd. operates as a logistics aggregator, connecting businesses with multiple courier and cargo partners to execute reliable, cost-efficient, pan-India deliveries."
    />

    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">Overview</span>
          <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
            Logistics Execution Through a <span className="text-gradient-teal">Multi-Partner Network</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Logiflow does not function as a single courier provider. We operate as a coordination system between businesses and multiple logistics partners, enabling shipment routing based on serviceability, delivery speed, and cost efficiency. This ensures better flexibility and consistent execution across different shipment types.
          </p>
        </div>
      </div>
    </section>

    <section className="bg-soft-gradient py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">Core Services</span>
          <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
            Services we <span className="text-gradient-teal">execute daily</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.t} className="rounded-2xl border border-border/60 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-teal/30 hover:shadow-lift">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent-gradient text-white shadow-glow">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight text-navy">{s.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">Execution Model</span>
          <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
            How logistics is <span className="text-gradient-teal">executed</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-border/60 bg-white p-7 shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent-gradient text-white shadow-glow">
                <span className="font-display text-base font-extrabold">{s.n}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold tracking-tight text-navy">{s.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-soft-gradient py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-12">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">Why this works</span>
          <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-navy sm:text-4xl">
            Why businesses use an <span className="text-gradient-teal">aggregator model</span>
          </h2>
          <ul className="mt-7 space-y-3">
            {reasons.map((r) => (
              <li key={r} className="flex items-start gap-3 text-[15px] text-navy/85">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" /> {r}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-border/60 bg-white p-8 shadow-soft">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">Who we support</span>
          <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-navy">Built for businesses that ship regularly</h3>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {audience.map((a) => (
              <span key={a} className="rounded-full border border-teal/25 bg-teal-soft px-4 py-2 text-sm font-semibold text-navy">{a}</span>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-soft-gradient p-6">
            <h4 className="font-display text-lg font-extrabold text-navy">Operational Commitment</h4>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
              We focus on structured logistics execution through partner coordination, ensuring consistent pickup, routing, and delivery performance across India.
            </p>
          </div>
        </div>
      </div>
    </section>

    <PageCta
      title="Streamline Your Logistics Operations"
      text="Work with Logiflow Pvt. Ltd. to simplify shipment management through a multi-courier logistics system designed for scale and efficiency."
      primaryLabel="Get Started"
    />
    <Footer />
  </main>
);

export default Services;
