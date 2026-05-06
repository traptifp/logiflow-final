import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Phone, MessageCircle, Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  email: z.string().trim().email("Invalid email").max(255).optional().or(z.literal("")),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  shipment_type: z.enum(["B2B", "B2C", "E-commerce", "Bulk"]).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

const inputCls =
  "mt-2 h-12 w-full rounded-xl border border-border bg-white px-4 text-[15px] text-navy placeholder:text-muted-foreground/80 transition focus:border-teal focus:outline-none focus:ring-4 focus:ring-teal/15";
const labelCls = "text-[11px] font-bold uppercase tracking-[0.18em] text-navy/70";

export const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || ""),
      shipment_type: String(fd.get("shipment_type") || ""),
      message: String(fd.get("message") || ""),
    };
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      toast({ title: "Please check your details", description: parsed.error.issues[0].message, variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("contact_submissions").insert({
      name: parsed.data.name,
      phone: parsed.data.phone,
      email: parsed.data.email || null,
      company: parsed.data.company || null,
      shipment_type: parsed.data.shipment_type || null,
      message: parsed.data.message || null,
    });
    setLoading(false);
    if (error) {
      toast({ title: "Submission failed", description: "Please try again or call us directly.", variant: "destructive" });
      return;
    }
    toast({ title: "Request received", description: "Our team will reach out within 24 hours." });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={onSubmit} className="relative rounded-3xl border border-white/10 bg-white p-8 text-navy shadow-lift sm:p-10">
      <div className="pointer-events-none absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br from-teal-bright/40 via-transparent to-teal/30 opacity-60 blur-xl" />
      <div className="flex items-center gap-2">
        <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-teal" />
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal">Avg. response · under 24 hrs</span>
      </div>
      <h3 className="mt-3 font-display text-[1.7rem] font-extrabold leading-tight tracking-tight text-navy">Request a Callback</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">
        Share your details and our team will connect with you to understand your logistics requirements.
      </p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="name">Full Name *</label>
          <input id="name" name="name" required maxLength={100} className={inputCls} placeholder="Your name" />
        </div>
        <div>
          <label className={labelCls} htmlFor="phone">Phone *</label>
          <input id="phone" name="phone" type="tel" required maxLength={20} className={inputCls} placeholder="+91 90000 00000" />
        </div>
        <div>
          <label className={labelCls} htmlFor="email">Email</label>
          <input id="email" name="email" type="email" maxLength={255} className={inputCls} placeholder="you@company.com" />
        </div>
        <div>
          <label className={labelCls} htmlFor="company">Company</label>
          <input id="company" name="company" maxLength={150} className={inputCls} placeholder="Company name" />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="shipment_type">Shipment Type</label>
          <select id="shipment_type" name="shipment_type" className={inputCls} defaultValue="">
            <option value="">Select shipment type</option>
            <option value="B2B">B2B</option>
            <option value="B2C">B2C</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Bulk">Bulk</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor="message">Message</label>
          <textarea id="message" name="message" maxLength={2000} rows={4}
            className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] text-navy placeholder:text-muted-foreground/80 transition focus:border-teal focus:outline-none focus:ring-4 focus:ring-teal/15"
            placeholder="Tell us about your shipping needs (optional)" />
        </div>
      </div>

      <Button type="submit" disabled={loading} size="lg" className="group relative mt-6 h-14 w-full overflow-hidden rounded-xl bg-accent-gradient text-base font-semibold text-white shadow-glow transition hover:scale-[1.01] hover:opacity-95">
        <span className="relative z-10 flex items-center gap-2">
          {loading ? "Sending…" : "Submit Request"} <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </span>
      </Button>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <Button asChild type="button" variant="outline" size="lg" className="h-12 rounded-xl border-border">
          <a href="tel:+916262762626"><Phone className="h-4 w-4" /> Call us now</a>
        </Button>
        <Button asChild type="button" variant="outline" size="lg" className="h-12 rounded-xl border-border">
          <a href="https://wa.me/916262762626" target="_blank" rel="noreferrer">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </Button>
      </div>

      <p className="mt-4 text-center text-xs text-muted-foreground">🔒 We respect your privacy. No spam, ever.</p>
    </form>
  );
};
