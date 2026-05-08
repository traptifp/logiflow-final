import { UserCheck, Network, IndianRupee, Clock, MapPin, Headphones, Award } from "lucide-react";
import trucks from "@/assets/trucks.jpg";

const reasons = [
  { icon: UserCheck, title: "Single point of contact", desc: "One team, one number — for every shipment, every day." },
  { icon: Network, title: "Multiple courier partners", desc: "Tap into India's largest courier and cargo network through us." },
  { icon: IndianRupee, title: "Cost-efficient delivery", desc: "Smart courier selection brings down your shipping spend." },
  { icon: Clock, title: "Fast & reliable turnaround", desc: "Predictable pickups and quicker last-mile delivery." },
  { icon: MapPin, title: "Nationwide network", desc: "Strong reach across metros, tier-2/3 cities and remote pin codes." },
  { icon: Headphones, title: "Dedicated business support", desc: "Real humans handling your shipments — not chatbots." },
  { icon: Award, title: "High-priority shipment expertise", desc: "Decades of experience handling time-critical cargo." },
];

export const WhyUs = () => (
  <section id="why" className="relative isolate overflow-hidden bg-[hsl(var(--navy-deep))] py-12 md:py-24 text-white">
    <img
      src={trucks}
      alt="Fleet of cargo trucks at an Indian logistics hub at dusk"
      loading="lazy"
      width={1600}
      height={900}
      className="absolute inset-0 h-full w-full object-cover opacity-[0.05] blur-md"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220_60%_7%)]/99 via-[hsl(218_60%_10%)]/98 to-[hsl(220_60%_7%)]/99" />
    <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-teal/15 blur-[120px]" />
    <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-teal-bright/10 blur-[120px]" />

    <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal-bright">Why Logiflow</span>
        <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-[3.25rem]">
          Why Businesses <span className="text-gradient-teal">Choose Logiflow</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/65">
          Decades of operational depth, a strong courier network, and a team that takes shipping off your plate.
        </p>
      </div>

      <div className="mt-20 grid gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-8">
        {reasons.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group flex gap-5 rounded-2xl border border-white/[0.05] bg-white/[0.015] p-6 transition duration-300 hover:-translate-y-0.5 hover:border-teal/30 hover:bg-white/[0.035]">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal-bright ring-1 ring-teal/20 transition group-hover:bg-teal/20">
              <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-[17px] font-bold leading-snug tracking-tight">{title}</h3>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/65">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
