import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { LogoMarqueeAndSpeed } from "@/components/LogoMarqueeAndSpeed";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FaqSection } from "@/components/FaqSection";
import { CtaSection, FooterSection } from "@/components/CtaAndFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFEB] text-[#1A1A1A] overflow-x-clip">
      <Navbar />
      <main>
        <HeroSection />
        <LogoMarqueeAndSpeed />
        <HowItWorksSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <FooterSection />
    </div>
  );
}
