import { Layers } from "lucide-react";
import warehouseOps from "@/assets/warehouse-ops.jpg";

export const WhatIs = () => (
  <section id="about" className="relative bg-white py-12 md:py-24">
    <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-12">
      <div className="relative">
        <div className="absolute -left-6 -top-6 h-32 w-32 rounded-3xl bg-accent-gradient/20 blur-2xl" />
        <div className="relative overflow-hidden rounded-3xl shadow-lift">
          <img src={warehouseOps} alt="Workers sorting parcels on conveyor at Logiflow warehouse" loading="lazy" width={1280} height={960} className="h-[520px] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-navy/30 via-transparent to-transparent" />
        </div>
        <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-white p-5 shadow-lift md:block">
          <div className="text-3xl font-extrabold text-navy">Since 1956</div>
          <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">family legacy</div>
        </div>
      </div>
      <div>
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-teal">What is Logiflow</span>
        <h2 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]">
          A Smarter Way to <span className="text-gradient-teal">Move Parcels</span> Across India
        </h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Logiflow Pvt. Ltd. is a <span className="font-semibold text-foreground">logistics aggregator</span> that connects
            businesses with multiple courier and cargo partners through a single coordination system.
          </p>
          <p>
            Instead of managing multiple courier companies individually, we assign each shipment to the
            <span className="font-semibold text-foreground"> best available option based on speed, cost, and serviceability</span>
            — ensuring smooth and reliable delivery operations.
          </p>
        </div>
        <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-teal/20 bg-teal/5 px-5 py-2.5 text-sm font-medium text-teal">
          <Layers className="h-4 w-4" />
          One team. Every courier. Pan-India coverage.
        </div>
      </div>
    </div>
  </section>
);
