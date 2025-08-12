import { Star, Quote } from "lucide-react";
import equipeImage from "@/assets/equipe-fbs.jpg";

const testimonials = [
  {
    name: "Ana Paula Silva",
    profession: "Professora",
    content: "Consegui minha casa própria com apenas 10% de entrada. O atendimento da FBS Prime foi excepcional, me explicaram tudo com clareza e paciência.",
    rating: 5,
    location: "Jundiaí - SP"
  },
  {
    name: "Carlos Roberto",
    profession: "Empresário",
    content: "Após 3 negativas em bancos, a FBS Prime encontrou uma solução perfeita para meu perfil. Hoje estou realizando o sonho da casa própria!",
    rating: 5,
    location: "Várzea Paulista - SP"
  },
  {
    name: "Marina Santos",
    profession: "Enfermeira",
    content: "O processo foi muito mais rápido que eu imaginava. Em 30 dias estava com as chaves na mão. Super recomendo a FBS Prime!",
    rating: 5,
    location: "Cabreúva - SP"
  }
];

const stats = [
  { number: "500+", label: "Famílias atendidas" },
  { number: "95%", label: "Taxa de aprovação" },
  { number: "30", label: "Dias médios para aprovação" },
  { number: "100%", label: "Transparência garantida" }
];

export const SocialProofSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Histórias de <span className="text-primary">Sucesso</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conheça nossa equipe e veja o que nossos clientes falam sobre nosso atendimento
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <img
                src={equipeImage}
                alt="Equipe especializada FBS Prime"
                className="w-full h-auto rounded-3xl shadow-medium"
              />
            </div>
            
            <div className="space-y-6 animate-fade-in">
              <div className="bg-primary text-primary-foreground rounded-2xl p-6 inline-block">
                <h3 className="text-2xl font-bold">Equipe FBS Prime</h3>
              </div>
              
              <h3 className="text-3xl font-bold text-secondary">
                Especialistas em soluções financeiras personalizadas
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa equipe é formada por profissionais experientes e certificados, 
                dedicados a encontrar a melhor solução para cada cliente. Tratamos 
                cada pessoa como única, não como mais um número.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold">
                  ✓ Atendimento 100% Transparente
                </div>
                <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-semibold">
                  ✓ Especialistas Certificados
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-primary text-white rounded-2xl p-8 shadow-medium">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-primary" />
              </div>
              
              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="font-bold text-secondary">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.profession}</div>
                <div className="text-sm text-primary">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};