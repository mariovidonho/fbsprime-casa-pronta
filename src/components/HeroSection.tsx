import { Button } from "@/components/ui/button";
import familiaImage from "@/assets/familia-casa-propria.jpg";

interface HeroSectionProps {
  onScrollToForm: () => void;
}

export const HeroSection = ({ onScrollToForm }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Selo de destaque */}
            <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-2">
              <span className="text-white font-semibold">
                ✨ Atendimento Exclusivo para Jundiaí e Região
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              Realize o sonho da sua{" "}
              <span className="text-yellow-300">casa própria</span>{" "}
              com entradas reduzidas
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              Chega de esperar! Temos condições exclusivas para você conquistar sua casa 
              sem pesar no orçamento. <strong>Parcelas que cabem no seu bolso.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="xl"
                variant="cta"
                onClick={onScrollToForm}
              >
                🏠 Quero minha simulação grátis agora
              </Button>
              
              <Button
                size="xl"
                variant="outline-white"
              >
                📞 Falar com especialista
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white/30 border-2 border-white"></div>
                ))}
              </div>
              <div className="text-white">
                <p className="font-semibold">+500 famílias realizaram o sonho</p>
                <p className="text-sm opacity-90">da casa própria conosco</p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="lg:order-last animate-slide-up">
            <div className="relative">
              <img
                src={familiaImage}
                alt="Família feliz em frente à sua casa própria"
                className="w-full h-auto rounded-3xl shadow-strong animate-float"
              />
              
              {/* Floating card */}
              <div className="absolute -bottom-6 left-2 bg-white rounded-2xl p-6 shadow-strong max-w-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-secondary">Aprovação Garantida</p>
                    <p className="text-sm text-muted-foreground">Sem burocracia excessiva</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};