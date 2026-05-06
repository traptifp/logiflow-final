import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import { Phone, Mail, MapPin, Globe, CheckCircle2 } from "lucide-react";

const next = [
  { n: "01", t: "We review your requirement", d: "Our team reads your shipment context within hours." },
  { n: "02", t: "We connect with you directly", d: "A team member calls or messages on your preferred channel." },
  { n: "03", t: "We suggest routing options", d: "Best partners selected based on cost, speed and serviceability." },
  { n: "04", t: "Shipment onboarding begins", d: "Pickup is scheduled and operations go live." },
];

const why = [
  "Reduce logistics costs through multi-courier optimization",
  "Improve delivery speed and reliability",
  "Manage high-volume shipments efficiently",
  "Simplify multi-partner logistics coordination",
  "Scale shipping operations across India",
];

const Contact = () => (
  <main className="min-h-screen bg-background">
    <Navbar />
    <PageHero
      eyebrow="Contact Us"
      title={<>Let's Discuss Your <span className="text-gradient-teal">Logistics Requirements</span></>}
      subtitle="Get in touch with Logiflow Pvt. Ltd. to streamline your shipping operations through a reliable multi-courier logistics network across India."
    />

    {/* Quick contact strip */}
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl gap-5 px-6 md:grid-cols-3 lg:px-12">
        {[
          { icon: Phone, label: "Call us", value: "+91-62627-62626", href: "tel:+916262762626" },
          { icon: Mail, label: "Email", value: "info@logiflow.co.in", href: "mailto:info@logiflow.co.in" },
          { icon: MapPin, label: "Office", value: "Plot No. 2, Transport Nagar, Jaipur – 302004", href: "https://maps.google.com/?q=Transport+Nagar+Jaipur" },
        ].map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.icon === MapPin ? "_blank" : undefined}
            rel="noreferrer"
            className="group flex items-start gap-4 rounded-2xl border border-border/60 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-teal/30 hover:shadow-lift"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-gradient text-white shadow-glow">
              <c.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-teal">{c.label}</p>
              <p className="mt-1 text-[15px] font-semibold text-navy group-hover:text-teal">{c.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>

    {/* Form */}
    <section className="bg-soft-gradient py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr] lg:px-12">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">Get in touch</span>
          <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
            Share your details — <span className="text-gradient-teal">we'll take it from here</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Our team typically responds within 24 hours for all business inquiries. Prefer to talk directly? Use the call or WhatsApp options on the form.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-[15px] text-navy/85">
              <Globe className="h-5 w-5 text-teal" /> www.logiflow.co.in
            </div>
            <div className="flex items-center gap-3 text-[15px] text-navy/85">
              <Phone className="h-5 w-5 text-teal" /> +91-62627-62626
            </div>
            <div className="flex items-center gap-3 text-[15px] text-navy/85">
              <Mail className="h-5 w-5 text-teal" /> info@logiflow.co.in
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>

    {/* What happens next */}
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">What happens next</span>
          <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
            From request to <span className="text-gradient-teal">first shipment</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {next.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border/60 bg-white p-7 shadow-soft">
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
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">Why businesses contact us</span>
        <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-navy sm:text-4xl">
          Why businesses <span className="text-gradient-teal">reach out to Logiflow</span>
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {why.map((w) => (
            <li key={w} className="flex items-start gap-3 rounded-2xl border border-border/60 bg-white p-5 text-[15px] text-navy/85 shadow-soft">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" /> {w}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Our team typically responds within 24 hours for all business inquiries.
        </p>
      </div>
    </section>

    <Footer />
  </main>
);

export default Contact;
