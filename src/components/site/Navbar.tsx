import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/logiflow-logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Contact", to: "/contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 left-0 right-0 z-50 border-b border-border/60 bg-white/85 backdrop-blur-xl">
      <nav className="mx-auto flex container items-center justify-between px-6 py-3 lg:px-12">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logiflow Pvt. Ltd." className="h-16 w-auto" />
        </Link>
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-[15px] font-medium transition hover:text-navy ${isActive ? "text-navy" : "text-foreground/75"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="tel:+916262762626" className="hidden items-center gap-2 text-sm font-semibold text-navy md:inline-flex">
            <Phone className="h-4 w-4 text-teal" /> +91-62627-62626
          </a>
          <Button asChild className="bg-accent-gradient font-semibold text-white shadow-glow hover:opacity-95">
            <Link to="/contact">Request a Callback</Link>
          </Button>
          <button
            className="text-navy lg:hidden"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-border/60 bg-white px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-[15px] font-medium ${isActive ? "bg-soft-gradient text-navy" : "text-foreground/80"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
