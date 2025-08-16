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
    <section className="py-32 bg-gradient-section relative overflow-hidden">
      {/* Geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/5 w-32 h-32 geometric-element opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/6 geometric-triangle geometric-triangle-primary opacity-25"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 lg:mb-8 tracking-tight">
            <span className="text-accent">Sem pegadinhas.</span> Entendemos sua dor.
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-5xl mx-auto font-light leading-relaxed">
            Sabemos que decidir pela casa própria pode gerar inseguranças. Por isso, 
            criamos soluções personalizadas para cada situação, mesmo as mais complexas.
          </p>
        </div>

        {/* Objections Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-24">
          {objections.map((objection, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 lg:p-10 shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up border border-primary/10 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 lg:mb-8">
                <objection.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              
              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-primary mb-4 lg:mb-6 tracking-tight">
                {objection.title}
              </h3>
              
              {/* Solution */}
              <p className="text-muted-foreground leading-relaxed text-base lg:text-lg font-light">
                {objection.solution}
              </p>
            </div>
          ))}
        </div>

        {/* Motivation Section */}
        <div className="bg-gradient-primary text-white rounded-3xl p-8 lg:p-16 text-center animate-fade-in relative overflow-hidden">
          {/* Geometric accent */}
          <div className="absolute top-4 left-4 lg:top-8 lg:left-8 w-16 h-16 lg:w-24 lg:h-24 border border-white/20 rounded-2xl transform -rotate-12 opacity-40"></div>
          <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 w-20 h-20 lg:w-32 lg:h-32 border border-white/15 rounded-3xl transform rotate-6 opacity-30"></div>
          
          <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 lg:mb-8 tracking-tight">
            Sua casa própria está mais próxima do que você imagina
          </h3>
          
          <p className="text-lg sm:text-xl lg:text-2xl opacity-90 mb-8 lg:mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Não deixe que dúvidas ou medos te impeçam de realizar este sonho. 
            Nossa especialidade é transformar "impossível" em "aprovado". 
            <strong className="font-semibold"> Vamos conversar sobre sua situação específica?</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center mb-12 lg:mb-16">
            <Button variant="cta" size="xl" className="shadow-xl w-full sm:w-auto">
              📊 Receber minha oportunidade
            </Button>
          </div>
          
          {/* Trust Elements */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 lg:gap-8 pt-6 lg:pt-8 border-t border-white/20">
            <div className="flex items-center gap-3 justify-center">
              <Shield className="w-5 h-5 lg:w-6 lg:h-6" />
              <span className="text-base lg:text-lg font-medium">Atendimento 100% Seguro</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Heart className="w-5 h-5 lg:w-6 lg:h-6" />
              <span className="text-base lg:text-lg font-medium">Cuidado Personalizado</span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Zap className="w-5 h-5 lg:w-6 lg:h-6" />
              <span className="text-base lg:text-lg font-medium">Resposta Rápida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};