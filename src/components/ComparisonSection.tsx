import { X, Check } from "lucide-react";

const comparisons = [
  {
    feature: "Processo de Aprovação",
    traditional: "Burocrático e demorado",
    fbsPrime: "Rápido e descomplicado"
  },
  {
    feature: "Atendimento",
    traditional: "Impessoal e padronizado",
    fbsPrime: "Humanizado e personalizado"
  },
  {
    feature: "Flexibilidade",
    traditional: "Condições rígidas",
    fbsPrime: "Soluções sob medida"
  },
  {
    feature: "Entrada",
    traditional: "Valores altos obrigatórios",
    fbsPrime: "Entradas reduzidas"
  },
  {
    feature: "Transparência",
    traditional: "Taxas e custos ocultos",
    fbsPrime: "Total transparência"
  }
];

export const ComparisonSection = () => {
  return (
    <section className="py-32 bg-gradient-section relative overflow-hidden">
      {/* Geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 geometric-triangle geometric-triangle-primary opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-accent/10 rounded-xl transform rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-8 tracking-tight">
            Mercado Tradicional <span className="text-destructive">vs</span> FBS Prime
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Veja a diferença no atendimento e nas condições que oferecemos
          </p>
        </div>
        
        {/* Comparison Table */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-strong overflow-hidden border border-primary/10">
            {/* Header */}
            <div className="grid grid-cols-3 bg-gradient-primary text-white">
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold">Aspecto</h3>
              </div>
              <div className="p-8 text-center border-l border-white/20">
                <h3 className="text-xl font-bold">Mercado Tradicional</h3>
              </div>
              <div className="p-8 text-center border-l border-white/20">
                <h3 className="text-xl font-bold">FBS Prime</h3>
              </div>
            </div>
            
            {/* Comparison Rows */}
            {comparisons.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 ${
                  index % 2 === 0 ? "bg-white" : "bg-muted/10"
                } animate-slide-up hover:bg-accent/5 transition-colors`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Feature */}
                <div className="p-8 font-bold text-primary text-lg">
                  {item.feature}
                </div>
                
                {/* Traditional */}
                <div className="p-8 border-l border-border">
                  <div className="flex items-center gap-4">
                    <X className="w-6 h-6 text-destructive flex-shrink-0" />
                    <span className="text-muted-foreground text-lg font-medium">{item.traditional}</span>
                  </div>
                </div>
                
                {/* FBS Prime */}
                <div className="p-8 border-l border-border">
                  <div className="flex items-center gap-4">
                    <Check className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="text-primary font-semibold text-lg">{item.fbsPrime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-primary text-white rounded-3xl p-12 shadow-strong relative overflow-hidden">
              {/* Geometric accent */}
              <div className="absolute top-6 right-6 w-24 h-24 border border-white/20 rounded-2xl transform rotate-12 opacity-40"></div>
              
              <h3 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
                A diferença está no cuidado com cada cliente
              </h3>
              <p className="text-xl opacity-90 font-light max-w-3xl mx-auto leading-relaxed">
                Enquanto bancos te tratam como número, nós tratamos você como família
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};