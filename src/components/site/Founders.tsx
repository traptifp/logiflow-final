import { Linkedin } from "lucide-react";
import founder1 from "@/assets/founder.jpeg";
import founder2 from "@/assets/IMG-20260508-WA0000.jpeg";

const founders = [
  {
    name: "Puneet Bagga",
    role: "Co-founder & Director",
    bio: "25+ years of logistics experience with a family business legacy since 1956. Deep operational expertise across cargo and distribution networks, with a strong focus on execution and reliability.",
    img: founder1,
  },
  {
    name: "Rohit Chadha",
    role: "Co-founder & Director",
    bio: "Background in weighing bridges operations. Strong expertise in operations and team coordination, with a relentless focus on process efficiency and system improvement.",
    img: founder2,
  },
];

export const Founders = () => (
  <section id="founders" className="bg-white py-28">
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <div className="max-w-2xl">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">Leadership</span>
        <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]">
          Built on Experience. <span className="text-gradient-teal">Driven by Execution.</span>
        </h2>
        <p className="mt-4 max-w-xl text-base text-muted-foreground">
          A leadership team with decades in logistics, distribution and operations — committed to making your shipping simpler.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {founders.map((f) => (
          <div key={f.name} className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-border/60 bg-soft-gradient p-6 transition hover:-translate-y-1 hover:shadow-lift sm:flex-row sm:items-start sm:p-8">
            <div className="absolute inset-x-0 top-0 h-1 bg-accent-gradient opacity-0 transition group-hover:opacity-100" />
             <div className="relative w-32 shrink-0 overflow-hidden rounded-2xl shadow-soft sm:w-36 h-48">
              <img src={f.img} alt={`${f.name}, ${f.role} of Logiflow`} loading="lazy" className="h-full w-full" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy">{f.name}</h3>
              <p className="text-sm font-semibold uppercase tracking-wider text-teal">{f.role}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{f.bio}</p>
              <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-teal">
                <Linkedin className="h-4 w-4" /> Connect on LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
