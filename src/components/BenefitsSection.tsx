import { CheckCircle, DollarSign, Clock, Shield } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Entradas Reduzidas",
    description: "Valores de entrada que facilitam seu início para conquistar a casa própria"
  },
  {
    icon: CheckCircle,
    title: "Propostas que cabem no bolso",
    description: "Condições especiais com parcelas ajustadas à sua realidade financeira"
  },
  {
    icon: Clock,
    title: "Equipe dedicada",
    description: "Você contará com um consultor focado em achar a melhor solução e tirar todas as suas dúvidas, do inicio até na compra da sua casa!"
  },
  {
    icon: Shield,
    title: "Segurança e Transparência",
    description: "Total transparência no processo, com segurança jurídica garantida"
  }
];

export const BenefitsSection = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-24 h-24 geometric-element opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-primary/5 rounded-2xl transform -rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-8 tracking-tight">
            Por que escolher a FBS Prime?
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Oferecemos as melhores condições do mercado com atendimento humanizado 
            e soluções personalizadas para cada perfil
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2 animate-slide-up border border-primary/5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <benefit.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground text-lg font-light leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-primary rounded-3xl p-16 text-white relative overflow-hidden">
            {/* Geometric accent */}
            <div className="absolute top-8 right-8 w-32 h-32 border border-white/20 rounded-2xl transform rotate-12 opacity-50"></div>
            
            <h3 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Pronto para dar o próximo passo?
            </h3>
            <p className="text-2xl mb-12 opacity-90 font-light max-w-3xl mx-auto leading-relaxed">
              Nossa equipe está esperando para criar a solução perfeita para você
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold text-lg border border-white/30">
                ⚡ Resposta em até 24h
              </div>
              <div className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold text-lg border border-white/30">
                🎯 100% Personalizado
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};