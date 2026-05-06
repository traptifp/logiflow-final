import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}

export const PageHero = ({ eyebrow, title, subtitle }: PageHeroProps) => (
  <section className="relative isolate overflow-hidden bg-hero-gradient pt-28 pb-24 text-white">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-teal-bright/15 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-teal/15 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
    </div>
    <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-12">
      <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal-bright">{eyebrow}</span>
      <h1 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.75rem]">
        {title}
      </h1>
      {subtitle && (
        <p className="mx-auto mt-6 max-w-2xl text-lg font-light text-white/80">{subtitle}</p>
      )}
    </div>
  </section>
);
