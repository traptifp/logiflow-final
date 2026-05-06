import logo from "@/assets/logiflow-logo.png";
import { MapPin, Mail, Phone, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Contact", to: "/contact" },
];

export const Footer = () => (
  <footer className="bg-navy-deep py-16 text-white/70">
    <div className="mx-auto grid container gap-10 px-6 md:grid-cols-4 lg:px-12">
      <div className="md:col-span-2">
        <img src={logo} alt="Logiflow Pvt. Ltd." className="h-16 w-auto" />
        <p className="mt-5 ml-14 max-w-md text-sm leading-relaxed text-white/65">
          Logiflow Pvt. Ltd. is a logistics aggregator connecting Indian businesses with multiple
          courier and cargo partners — with a single point of contact and dedicated support.
        </p>
      </div>
      <div>
        <h4 className="text-sm font-bold uppercase tracking-widest text-white">Quick Links</h4>
        <ul className="mt-4 space-y-2.5 text-sm">
          {quickLinks.map((l) => (
            <li key={l.label}><Link to={l.to} className="hover:text-teal-bright">{l.label}</Link></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-bold uppercase tracking-widest text-white">Get in Touch</h4>
        <ul className="mt-4 space-y-3 text-sm">
          <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-bright" /><span>Plot No. 2, Next to SBI Bank,<br />Transport Nagar, Jaipur – 302004</span></li>
          <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal-bright" /><a href="tel:+916262762626" className="hover:text-white">+91-62627-62626</a></li>
          <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-teal-bright" /><a href="mailto:info@logiflow.co.in" className="hover:text-white">info@logiflow.co.in</a></li>
          <li className="flex gap-3"><Globe className="mt-0.5 h-4 w-4 shrink-0 text-teal-bright" /><a href="https://www.logiflow.co.in" className="hover:text-white">www.logiflow.co.in</a></li>
        </ul>
      </div>
    </div>
    <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-6 pt-8 text-xs text-white/40 lg:px-12">
      © 2026 Logiflow Pvt. Ltd. All rights reserved.
    </div>
  </footer>
);
