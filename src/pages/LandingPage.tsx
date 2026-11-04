import { useState } from "react";
import { MotionConfig } from "framer-motion";
import { Header } from "@/components/onda/Header";
import { Hero } from "@/components/onda/Hero";
import { Simulador } from "@/components/onda/Simulador";
import { Numbers } from "@/components/onda/Numbers";
import { Comparison } from "@/components/onda/Comparison";
import { Clients } from "@/components/onda/Clients";
import { Faq } from "@/components/onda/Faq";
import { CtaBand, SiteFooter, StickyActions } from "@/components/onda/Closing";
import type { CaminhoId } from "@/components/onda/caminhos";

const LandingPage = () => {
  const [caminho, setCaminho] = useState<CaminhoId>("entrada");

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-clip bg-white font-sans text-deep">
        <Header />
        <main>
          <Hero caminho={caminho} onCaminho={setCaminho} />
          <Simulador caminho={caminho} />
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
};

export default LandingPage;
