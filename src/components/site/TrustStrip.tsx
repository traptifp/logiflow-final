import libas from "@/assets/partners/libas.png";
import mollyMoo from "@/assets/partners/molly-moo.png";
import drPets from "@/assets/partners/dr-pets.jpeg";
import outbloom from "@/assets/partners/outbloom.jpeg";
import sFactor from "@/assets/partners/s-factor.png";
import cbh from "@/assets/partners/cbh.jpeg";

const partners = [
  { src: libas, alt: "Libas" },
  { src: mollyMoo, alt: "Molly Moo" },
  { src: drPets, alt: "Dr. Pets" },
  { src: outbloom, alt: "Outbloom Clinics" },
  { src: sFactor, alt: "S Factor" },
  { src: cbh, alt: "CBH Enterprises" },
];

export const TrustStrip = () => (
  <section className="border-y border-border bg-white py-12 md:py-16">
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <div className="text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">Trusted partners</span>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Trusted by Growing Businesses Across India
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
          Supporting sellers, manufacturers, and distributors with reliable and scalable logistics operations.
        </p>
      </div>
      <div className="mt-14 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
        {partners.map((p) => (
          <div key={p.alt} className="flex h-16 items-center justify-center px-2">
            <img
              src={p.src}
              alt={`${p.alt} — Logiflow client`}
              loading="lazy"
              className="h-12 w-auto max-w-[130px] object-contain object-center transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);
