"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { LogoMarqueeAndSpeed } from "@/components/LogoMarqueeAndSpeed";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import CtaAndFooter from "@/components/CtaAndFooter";

export default function Home() {
  const [activeProduct, setActiveProduct] = useState<"dictation" | "notetaker">(
    "dictation"
  );

  return (
    <div className="min-h-screen bg-[#FFFFEB] text-[#1A1A1A] selection:bg-[#EBDCFF] selection:text-[#1A1A1A]">
      <Navbar
        activeProduct={activeProduct}
        setActiveProduct={setActiveProduct}
      />
      <main>
        <HeroSection activeProduct={activeProduct} />
        <LogoMarqueeAndSpeed />
        <HowItWorksSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaAndFooter />
      </main>
    </div>
  );
}
