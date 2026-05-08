import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { WhatIs } from "@/components/site/WhatIs";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Industries } from "@/components/site/Industries";
import { Founders } from "@/components/site/Founders";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

const Index = () => (
  <main className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <TrustStrip />
    <WhatIs />
    <Services />
    <Industries />
    <WhyUs />
    <HowItWorks />
    <Founders />
    <FinalCta />
    <Footer />
  </main>
);

export default Index;
