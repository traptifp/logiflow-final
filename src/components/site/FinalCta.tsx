import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export const FinalCta = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    const toastId = toast.loading("Sending inquiry Please wait...");

    try {
      const response = await fetch(
        "https://logiflow-website-backend.vercel.app/api/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      console.log(data);
      if (data.status) {
        toast.success("Your request has been sent successfully!", {
          id: toastId,
        });

        setFormData({
          name: "",
          phone: "",
          email: "",
        });
      } else {
        toast.error(data.message || "Failed to send inquiry", {
          id: toastId,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", { id: toastId });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <section
        id="contact"
        className="relative isolate overflow-hidden bg-cta-gradient py-12 md:py-24 text-white"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-teal-bright/20 blur-3xl animate-pulse-glow" />
          <div
            className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-teal/20 blur-3xl animate-pulse-glow"
            style={{ animationDelay: "2s" }}
          />
        </div>
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.2fr_1fr] lg:px-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal-bright">
              Get Started
            </span>
            <h2 className="mt-2 md:mt-4 font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              Let's Simplify Your{" "}
              <span className="text-gradient-teal">Logistics</span>
            </h2>
            <p className="mt-4 md:mt-6 max-w-xl text-lg font-light text-white/80">
              Focus on growing your business while Logiflow manages your
              shipping with speed, reliability and efficiency.
            </p>
            <div className="mt-6 md:mt-9 flex flex-wrap gap-4">
              {/* <Button
                size="lg"
                className="h-14 rounded-xl bg-white px-8 text-base font-semibold text-navy hover:bg-white/90"
              >
                Request a Call Back <ArrowRight />
              </Button> */}
              <Button
                size="lg"
                variant="outline"
                className="h-14 rounded-xl border-white/25 bg-white/5 px-8 text-base font-medium text-white backdrop-blur hover:bg-white/15 hover:text-white"
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send?phone=916262762626",
                    "_blank",
                  )
                }
              >
                <MessageCircle /> WhatsApp us
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/60">
              Our team will contact you shortly to understand your requirements.
            </p>
          </div>
          <form
            className="relative rounded-3xl border border-white/10 bg-white p-5 text-navy shadow-lift sm:p-9"
            onSubmit={handleSubmit}
          >
            <div className="pointer-events-none absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br from-teal-bright/40 via-transparent to-teal/30 opacity-60 blur-xl" />
            <div className="flex items-center gap-2">
              <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-teal" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal">
                Avg. response · under 2 hrs
              </span>
            </div>
            <h3 className="mt-3 font-display text-[1.7rem] font-extrabold leading-tight tracking-tight text-navy">
              Request a Callback
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Two fields. Real human callback — no chatbots.
            </p>
            <div className="mt-7 space-y-4">
              <div>
                <label
                  className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy/70"
                  htmlFor="name"
                >
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  required
                  maxLength={100}
                  className="mt-2 h-12 w-full rounded-xl border border-border bg-white px-4 text-[15px] text-navy placeholder:text-muted-foreground/80 transition focus:border-teal focus:outline-none focus:ring-4 focus:ring-teal/15"
                  placeholder="Your name"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy/70"
                  htmlFor="phone"
                >
                  Phone *
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  required
                  maxLength={15}
                  className="mt-2 h-12 w-full rounded-xl border border-border bg-white px-4 text-[15px] text-navy placeholder:text-muted-foreground/80 transition focus:border-teal focus:outline-none focus:ring-4 focus:ring-teal/15"
                  placeholder="+91 90000 00000"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy/70"
                  htmlFor="email"
                >
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  required
                  maxLength={100}
                  className="mt-2 h-12 w-full rounded-xl border border-border bg-white px-4 text-[15px] text-navy placeholder:text-muted-foreground/80 transition focus:border-teal focus:outline-none focus:ring-4 focus:ring-teal/15"
                  placeholder="your.email@example.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="group relative mt-3 h-14 w-full overflow-hidden rounded-xl bg-accent-gradient text-base font-semibold text-white shadow-glow transition hover:scale-[1.01] hover:opacity-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Request a Call Back{" "}
                  <Phone className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                🔒 We respect your privacy. No spam, ever.
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
