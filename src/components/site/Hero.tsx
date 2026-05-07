import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-logistics.jpg";

export const Hero = () => (
  <section id="home" className="relative isolate overflow-hidden bg-[#fdf6ec]">
    {/* Full-bleeds photographic hero — van anchored right */}
    <div className="pointer-events-none absolute inset-0">
      <img
        src={heroImg}
        alt="Logiflow delivery van being loaded with parcels at a warehouse dock"
        className="absolute inset-0 h-full w-full object-cover object-right"
        fetchPriority="high"
      />
      {/* Cream wash on the left so headline pops */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#fdf6ec] via-[#fdf6ec]/85 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-[#fdf6ec]/40" />
    </div>

    <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center px-6 pb-20 pt-16 lg:grid-cols-[1.05fr_1fr] lg:px-12 lg:pt-20">
      <div className="max-w-2xl animate-fade-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-navy shadow-soft backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
          Pan-India logistics aggregator
        </span>

        <h1 className="mt-7 font-display text-[2.5rem] font-extrabold leading-[1.02] tracking-[-0.035em] text-navy-deep sm:text-5xl lg:text-[4.25rem] xl:text-[4.75rem]">
          Smart Logistics.
          <br />
          <span className="text-gradient-teal">Seamless Deliveries</span>
          <br />
          Across India.
        </h1>

        <p className="mt-7 max-w-xl text-base leading-relaxed text-foreground/75 sm:text-lg">
          Logiflow Pvt. Ltd. connects businesses with multiple courier and cargo
          partners to ensure reliable, cost-effective, and timely deliveries —
          all from a single point of contact.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Button
            size="lg"
            className="h-14 rounded-xl bg-accent-gradient px-8 text-base font-semibold text-white shadow-glow transition hover:scale-[1.02] hover:opacity-95"
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Request a Call Back
            <ArrowRight className="ml-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-14 rounded-xl border-navy/20 bg-white px-8 text-base font-semibold text-navy hover:bg-navy hover:text-white"
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=916262762626",
                "_blank",
              )
            }
          >
            <MessageCircle /> Chat on WhatsApp
          </Button>
        </div>

        <p className="mt-6 text-sm font-medium text-foreground/60">
          Reliable pan-India logistics for B2B, e-commerce, and retail
          businesses.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm font-medium text-foreground/70">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-teal" /> Multi-courier routing
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-teal" /> Pan-India Coverage
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-teal" /> Since 1959 legacy
          </div>
        </div>
      </div>
    </div>
  </section>
);
