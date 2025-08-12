import { CheckCircle, DollarSign, Clock, Shield } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Entradas Reduzidas",
    description: "Valores de entrada que facilitam seu início para conquistar a casa própria"
  },
  {
    icon: CheckCircle,
    title: "Parcelas que Cabem no Bolso",
    description: "Condições especiais com parcelas ajustadas à sua realidade financeira"
  },
  {
    icon: Clock,
    title: "Aprovação Rápida",
    description: "Processo ágil e descomplicado, sem a burocracia dos bancos tradicionais"
  },
  {
    icon: Shield,
    title: "Segurança e Transparência",
    description: "Total transparência no processo, com segurança jurídica garantida"
  }
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Por que escolher a <span className="text-primary">FBS Prime?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos as melhores condições do mercado com atendimento humanizado 
            e soluções personalizadas para cada perfil
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-secondary mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-section rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-secondary mb-4">
              Pronto para dar o próximo passo?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Nossa equipe está esperando para criar a solução perfeita para você
            </p>
            <div className="flex justify-center gap-4">
              <div className="bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold">
                ⚡ Resposta em até 24h
              </div>
              <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold">
                🎯 100% Personalizado
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};