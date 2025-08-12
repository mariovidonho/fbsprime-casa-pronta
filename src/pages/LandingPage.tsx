import { useRef } from "react";
import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { ObjectionsSection } from "@/components/ObjectionsSection";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";

const LandingPage = () => {
  const formRef = useRef<HTMLElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen">
      <HeroSection onScrollToForm={scrollToForm} />
      <BenefitsSection />
      <ComparisonSection />
      <SocialProofSection />
      <ObjectionsSection />
      <section ref={formRef}>
        <LeadForm />
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;