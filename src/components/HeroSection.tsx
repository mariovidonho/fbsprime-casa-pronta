import { Button } from "@/components/ui/button";
import familiaImage from "@/assets/familia-casa-propria.jpg";

interface HeroSectionProps {
  onScrollToForm: () => void;
}

export const HeroSection = ({ onScrollToForm }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center overflow-hidden">
      {/* Modern geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 geometric-element opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 geometric-element opacity-20"></div>
        <div className="absolute top-1/2 right-1/3 geometric-triangle geometric-triangle-primary opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-accent/10 rounded-lg transform rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-8 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <div className="lg:col-span-7 space-y-10 animate-fade-in py-20">
            {/* Selo de destaque */}
            <div className="inline-block bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-4">
              <span className="text-white font-medium text-lg">
                ✨ Atendimento Exclusivo para Jundiaí e Região
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
              Realize o sonho da sua{" "}
              <span className="text-accent">casa própria</span>{" "}
              com entradas reduzidas
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl font-light">
              Chega de esperar! Temos condições exclusivas para você conquistar sua casa 
              sem pesar no orçamento. <strong className="font-semibold">Parcelas que cabem no seu bolso.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button
                size="xl"
                variant="cta"
                onClick={onScrollToForm}
                className="shadow-xl hover:shadow-2xl"
              >
                🏠 Receber minha oportunidade
              </Button>
              
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center gap-8 pt-12">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-white/20 border-3 border-white backdrop-blur-sm"></div>
                ))}
              </div>
              <div className="text-white">
                <p className="font-semibold text-lg">+500 famílias realizaram o sonho</p>
                <p className="text-base opacity-90 font-light">da casa própria conosco</p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="lg:col-span-5 lg:order-last animate-slide-up">
            <div className="relative lg:ml-8">
              {/* Geometric background */}
              <div className="absolute -inset-8 bg-gradient-geometric rounded-3xl opacity-60"></div>
              
              <img
                src={familiaImage}
                alt="Família feliz em frente à sua casa própria"
                className="relative w-full h-auto rounded-2xl shadow-strong animate-float"
              />
              
              {/* Floating card */}
              <div className="absolute -bottom-8 -left-4 bg-white rounded-3xl p-8 shadow-strong max-w-sm border border-primary/10">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-primary text-lg">Processo humanizado</p>
                    <p className="text-muted-foreground font-medium">Sem burocracia excessiva</p>
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