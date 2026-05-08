import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { PageCta } from "@/components/site/PageCta";
import { Network, Layers, Target, Workflow, ShieldCheck, Compass, Users, Building2 } from "lucide-react";

const modelPoints = [
  { icon: Network, t: "Multi-carrier matching", d: "Shipments are matched with suitable courier partners based on requirements." },
  { icon: Compass, t: "Smart routing", d: "Decisions made on serviceability, speed, and cost efficiency." },
  { icon: Users, t: "Single coordination point", d: "One team handles every partner — businesses skip vendor juggling." },
  { icon: Workflow, t: "Structured dispatch", d: "Operations run through documented dispatch and tracking workflows." },
];

const strengths = [
  "Consistent pickup coordination",
  "Reliable shipment routing across partners",
  "Reduced delivery delays through partner selection",
  "Structured handling of high-frequency shipments",
  "Coordination across B2B and e-commerce flows",
];

const philosophy = [
  { t: "Flexibility", d: "Over single-carrier limitation" },
  { t: "Partner-based", d: "Execution over fixed systems" },
  { t: "Operational clarity", d: "Over unnecessary complexity" },
  { t: "Coordination", d: "Over fragmentation" },
];

const Section = ({ id, eyebrow, title, children, soft = false }: { id?: string; eyebrow: string; title: React.ReactNode; children: React.ReactNode; soft?: boolean }) => (
  <section id={id} className={`${soft ? "bg-soft-gradient" : "bg-white"} py-24`}>
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <div className="max-w-3xl">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">{eyebrow}</span>
        <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">{title}</h2>
      </div>
      <div className="mt-12">{children}</div>
    </div>
  </section>
);

const About = () => (
  <main className="min-h-screen bg-background">
    <Navbar />
    <PageHero
      eyebrow="About Logiflow"
      title={<>Built on Logistics Experience.<br /><span className="text-gradient-teal">Structured for Scale.</span></>}
      subtitle="Logiflow Pvt. Ltd. is a logistics aggregator built on industry experience and operational discipline, connecting businesses with a network of courier and cargo partners across India."
    />

    <Section eyebrow="Who We Are" title="A coordination layer between businesses and logistics partners">
      <div className="grid gap-6 lg:grid-cols-2">
        <p className="text-base leading-relaxed text-muted-foreground">
          Logiflow Pvt. Ltd. is a logistics aggregator operating through a curated network of courier and cargo partners across India. Instead of functioning as a single courier company, we act as a coordination layer between businesses and multiple logistics providers.
        </p>
        <p className="text-base leading-relaxed text-muted-foreground">
          This allows shipment routing based on availability, cost, and delivery efficiency. Our focus is on structured execution, consistent coordination, and reducing operational complexity for businesses managing regular shipments.
        </p>
      </div>
    </Section>

    <Section eyebrow="Operating Model" title={<>How Our <span className="text-gradient-teal">Model Works</span></>} soft>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {modelPoints.map((p) => (
          <div key={p.t} className="rounded-2xl border border-border/60 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-teal/30 hover:shadow-lift">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent-gradient text-white shadow-glow">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-bold tracking-tight text-navy">{p.t}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{p.d}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section eyebrow="Operational Strength" title="Execution discipline over scale branding">
      <div className="rounded-3xl border border-border/60 bg-white p-10 shadow-soft">
        <ul className="grid gap-4 sm:grid-cols-2">
          {strengths.map((s) => (
            <li key={s} className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
              <span className="text-[15px] text-navy/85">{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>

    <Section eyebrow="Leadership" title={<>Built on <span className="text-gradient-teal">Experience</span>. Driven by Execution.</>} soft>
      <div className="grid gap-6 md:grid-cols-2">
        {[
          { name: "Puneet Bagga", role: "Logistics Expert", points: ["25+ years of logistics industry experience", "Family business legacy since 1956", "Strong operational and network expertise"] },
          { name: "Rohit Chadha", role: "Operations & Technology Lead", points: ["Background in weighing bridges operations", "Experience in team management and coordination", "Focused on operational efficiency"] },
        ].map((l) => (
          <div key={l.name} className="rounded-2xl border border-border/60 bg-white p-8 shadow-soft">
            <div className="flex items-center gap-4">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-hero-gradient text-white">
                <Building2 className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-display text-xl font-extrabold tracking-tight text-navy">{l.name}</h3>
                <p className="text-sm font-medium text-teal">{l.role}</p>
              </div>
            </div>
            <ul className="mt-6 space-y-2.5">
              {l.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2 text-[15px] text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>

    <Section eyebrow="Philosophy" title="How we approach logistics">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {philosophy.map((p) => (
          <div key={p.t} className="rounded-2xl border border-border/60 bg-white p-7 shadow-soft">
            <Layers className="h-6 w-6 text-teal" />
            <h3 className="mt-4 font-display text-lg font-extrabold tracking-tight text-navy">{p.t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
          </div>
        ))}
      </div>
    </Section>

    <section className="bg-soft-gradient py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">Our Mission</span>
        <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
          To <span className="text-gradient-teal">streamline logistics execution</span> in India by enabling structured coordination between businesses and multiple courier networks.
        </h2>
        <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-teal/30 bg-white px-5 py-2 text-sm font-semibold text-teal">
          <Target className="h-4 w-4" /> Reliable. Structured. Scalable.
        </div>
      </div>
    </section>

    <PageCta
      title="Let's Build Reliable Logistics Systems"
      text="Work with Logiflow Pvt. Ltd. to simplify logistics coordination and improve delivery efficiency across your operations."
    />
    <Footer />
  </main>
);

export default About;
