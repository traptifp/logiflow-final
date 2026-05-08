import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Send } from "lucide-react";
import toast from "react-hot-toast";

const inputCls =
  "mt-2 h-12 w-full rounded-xl border border-border bg-white px-4 text-[15px] text-navy placeholder:text-muted-foreground/80 transition focus:border-teal focus:outline-none focus:ring-4 focus:ring-teal/15";
const labelCls =
  "text-[11px] font-bold uppercase tracking-[0.18em] text-navy/70";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    shipmentType: "",
    message: "",
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
        // "http://localhost:5000/api/send",
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
          company: "",
          shipmentType: "",
          message: "",
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
      <form
        className="relative rounded-3xl border border-white/10 bg-white p-8 text-navy shadow-lift sm:p-10"
        onSubmit={handleSubmit}
      >
        <div className="pointer-events-none absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br from-teal-bright/40 via-transparent to-teal/30 opacity-60 blur-xl" />
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-teal" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-teal">
            Avg. response · under 24 hrs
          </span>
        </div>
        <h3 className="mt-3 font-display text-[1.7rem] font-extrabold leading-tight tracking-tight text-navy">
          Get a Tailored Quote
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Share your details and our team will connect with you to understand
          your logistics requirements.
        </p>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelCls} htmlFor="name">
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              required
              maxLength={100}
              className={inputCls}
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label className={labelCls} htmlFor="phone">
              Phone *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              maxLength={20}
              className={inputCls}
              placeholder="+91 90000 00000"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div>
            <label className={labelCls} htmlFor="email">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              maxLength={255}
              className={inputCls}
              placeholder="you@company.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label className={labelCls} htmlFor="company">
              Company
            </label>
            <input
              id="company"
              name="company"
              maxLength={150}
              className={inputCls}
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              placeholder="Company name"
            />
          </div>
          <div className="sm:col-span-2">
            <label className={labelCls} htmlFor="shipment_type">
              Shipment Type
            </label>
            <select
              id="shipment_type"
              name="shipment_type"
              className={inputCls}
              defaultValue=""
              value={formData.shipmentType}
              onChange={(e) =>
                setFormData({ ...formData, shipmentType: e.target.value })
              }
            >
              <option value="">Select shipment type</option>
              <option value="B2B">B2B</option>
              <option value="B2C">B2C</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Bulk">Bulk</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className={labelCls} htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              maxLength={2000}
              rows={4}
              className="mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] text-navy placeholder:text-muted-foreground/80 transition focus:border-teal focus:outline-none focus:ring-4 focus:ring-teal/15"
              placeholder="Tell us about your shipping needs (optional)"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>
        </div>

        <Button
          type="submit"
          size="lg"
          className="group relative mt-6 h-14 w-full overflow-hidden rounded-xl bg-accent-gradient text-base font-semibold text-white shadow-glow transition hover:scale-[1.01] hover:opacity-95"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </span>
          Submit Request
        </Button>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <Button
            asChild
            type="button"
            variant="outline"
            size="lg"
            className="h-12 rounded-xl border-border"
          >
            <a href="tel:+916262762626">
              <Phone className="h-4 w-4" /> Call us now
            </a>
          </Button>
          <Button
            asChild
            type="button"
            variant="outline"
            size="lg"
            className="h-12 rounded-xl border-border"
          >
            <a
              href="https://wa.me/916262762626"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </Button>
        </div>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          🔒 We respect your privacy. No spam, ever.
        </p>
      </form>
    </>
  );
};
