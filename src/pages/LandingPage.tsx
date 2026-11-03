import { MotionConfig } from "framer-motion";
import { Header } from "@/components/onda/Header";
import { Hero } from "@/components/onda/Hero";
import { Numbers } from "@/components/onda/Numbers";
import { Comparison } from "@/components/onda/Comparison";
import { Clients } from "@/components/onda/Clients";
import { Faq } from "@/components/onda/Faq";
import { CtaBand, SiteFooter, StickyActions } from "@/components/onda/Closing";

const LandingPage = () => (
  <MotionConfig reducedMotion="user">
    <div className="min-h-screen overflow-x-clip bg-white font-sans text-deep">
      <Header />
      <main>
        <Hero />
        <Numbers />
        <Comparison />
        <Clients />
        <Faq />
        <CtaBand />
      </main>
      <SiteFooter />
      <StickyActions />
    </div>
  </MotionConfig>
);

export default LandingPage;
