import { Heart, Shield, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const objections = [
  {
    icon: Heart,
    title: "\"Não tenho entrada suficiente\"",
    solution: "Temos soluções com entradas reduzidas, começando com valores que você pode pagar. Nosso time encontra alternativas criativas para seu perfil."
  },
  {
    icon: Shield,
    title: "\"Tenho medo de não conseguir pagar\"",
    solution: "Fazemos um planejamento detalhado da sua capacidade financeira. Só aprovamos o que sabemos que você consegue pagar tranquilamente."
  },
  {
    icon: Users,
    title: "\"Minha renda é baixa demais\"",
    solution: "Atendemos diversos perfis de renda. Temos programas especiais e parcerias que podem viabilizar sua aprovação mesmo com renda menor."
  },
  {
    icon: Zap,
    title: "\"Já fui negado em outros lugares\"",
    solution: "Cada negativa é uma oportunidade de aprender. Analisamos seu perfil com novos olhos e encontramos caminhos que outros não viram."
  }
];

export const ObjectionsSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Seus receios são <span className="text-primary">nossos desafios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Sabemos que decidir pela casa própria pode gerar inseguranças. Por isso, 
            criamos soluções personalizadas para cada situação, mesmo as mais complexas.
          </p>
        </div>

        {/* Objections Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {objections.map((objection, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <objection.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-secondary mb-4">
                {objection.title}
              </h3>
              
              {/* Solution */}
              <p className="text-muted-foreground leading-relaxed">
                {objection.solution}
              </p>
            </div>
          ))}
        </div>

        {/* Motivation Section */}
        <div className="bg-primary text-primary-foreground rounded-3xl p-12 text-center animate-fade-in">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">
            Sua casa própria está mais próxima do que você imagina
          </h3>
          
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Não deixe que dúvidas ou medos te impeçam de realizar este sonho. 
            Nossa especialidade é transformar "impossível" em "aprovado". 
            <strong> Vamos conversar sobre sua situação específica?</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline-white" size="xl">
              💬 Conversar pelo WhatsApp
            </Button>
            <Button variant="cta" size="xl">
              📊 Fazer simulação gratuita
            </Button>
          </div>
          
          {/* Trust Elements */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-white/20">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Atendimento 100% Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              <span>Cuidado Personalizado</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              <span>Resposta Rápida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};