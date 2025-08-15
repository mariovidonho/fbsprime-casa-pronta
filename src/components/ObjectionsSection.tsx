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
      
      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-8 tracking-tight">
            <span className="text-accent">Sem pegadinhas.</span> Entendemos sua dor.
          </h2>
          <p className="text-2xl text-muted-foreground max-w-5xl mx-auto font-light leading-relaxed">
            Sabemos que decidir pela casa própria pode gerar inseguranças. Por isso, 
            criamos soluções personalizadas para cada situação, mesmo as mais complexas.
          </p>
        </div>

        {/* Objections Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          {objections.map((objection, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-10 shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up border border-primary/10 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mb-8">
                <objection.icon className="w-10 h-10 text-white" />
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-primary mb-6 tracking-tight">
                {objection.title}
              </h3>
              
              {/* Solution */}
              <p className="text-muted-foreground leading-relaxed text-lg font-light">
                {objection.solution}
              </p>
            </div>
          ))}
        </div>

        {/* Motivation Section */}
        <div className="bg-gradient-primary text-white rounded-3xl p-16 text-center animate-fade-in relative overflow-hidden">
          {/* Geometric accent */}
          <div className="absolute top-8 left-8 w-24 h-24 border border-white/20 rounded-2xl transform -rotate-12 opacity-40"></div>
          <div className="absolute bottom-8 right-8 w-32 h-32 border border-white/15 rounded-3xl transform rotate-6 opacity-30"></div>
          
          <h3 className="text-4xl lg:text-5xl font-bold mb-8 tracking-tight">
            Sua casa própria está mais próxima do que você imagina
          </h3>
          
          <p className="text-2xl opacity-90 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Não deixe que dúvidas ou medos te impeçam de realizar este sonho. 
            Nossa especialidade é transformar "impossível" em "aprovado". 
            <strong className="font-semibold"> Vamos conversar sobre sua situação específica?</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button variant="cta" size="xl" className="shadow-xl">
              📊 Receber minha oportunidade
            </Button>
          </div>
          
          {/* Trust Elements */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/20">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6" />
              <span className="text-lg font-medium">Atendimento 100% Seguro</span>
            </div>
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6" />
              <span className="text-lg font-medium">Cuidado Personalizado</span>
            </div>
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6" />
              <span className="text-lg font-medium">Resposta Rápida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};