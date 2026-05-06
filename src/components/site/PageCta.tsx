import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";

interface PageCtaProps {
  eyebrow?: string;
  title: string;
  text: string;
  primaryLabel?: string;
}

export const PageCta = ({ eyebrow = "Get Started", title, text, primaryLabel = "Contact Us" }: PageCtaProps) => (
  <section className="relative isolate overflow-hidden bg-cta-gradient py-24 text-white">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-20 left-1/4 h-80 w-80 rounded-full bg-teal-bright/20 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-teal/20 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
    </div>
    <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-12">
      <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal-bright">{eyebrow}</span>
      <h2 className="mt-4 font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-6 max-w-2xl text-lg font-light text-white/80">{text}</p>
      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <Button asChild size="lg" className="h-14 rounded-xl bg-white px-8 text-base font-semibold text-navy hover:bg-white/90">
          <Link to="/contact">{primaryLabel} <ArrowRight /></Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="h-14 rounded-xl border-white/25 bg-white/5 px-8 text-base font-medium text-white backdrop-blur hover:bg-white/15 hover:text-white">
          <a href="https://wa.me/916262762626" target="_blank" rel="noreferrer">
            <MessageCircle /> WhatsApp us
          </a>
        </Button>
      </div>
    </div>
  </section>
);
