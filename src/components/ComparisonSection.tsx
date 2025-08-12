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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Mercado Tradicional <span className="text-destructive">vs</span> <span className="text-primary">FBS Prime</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja a diferença no atendimento e nas condições que oferecemos
          </p>
        </div>
        
        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-3xl shadow-medium overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 bg-gradient-primary text-white">
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold">Aspecto</h3>
              </div>
              <div className="p-6 text-center border-l border-white/20">
                <h3 className="text-lg font-bold">Mercado Tradicional</h3>
              </div>
              <div className="p-6 text-center border-l border-white/20">
                <h3 className="text-lg font-bold">FBS Prime</h3>
              </div>
            </div>
            
            {/* Comparison Rows */}
            {comparisons.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 ${
                  index % 2 === 0 ? "bg-background" : "bg-muted/20"
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Feature */}
                <div className="p-6 font-semibold text-secondary">
                  {item.feature}
                </div>
                
                {/* Traditional */}
                <div className="p-6 border-l border-border">
                  <div className="flex items-center gap-3">
                    <X className="w-5 h-5 text-destructive flex-shrink-0" />
                    <span className="text-muted-foreground">{item.traditional}</span>
                  </div>
                </div>
                
                {/* FBS Prime */}
                <div className="p-6 border-l border-border">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-secondary font-medium">{item.fbsPrime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="bg-accent text-accent-foreground rounded-2xl p-8 shadow-medium">
              <h3 className="text-2xl font-bold mb-4">
                A diferença está no cuidado com cada cliente
              </h3>
              <p className="text-lg opacity-90">
                Enquanto bancos te tratam como número, nós tratamos você como família
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};