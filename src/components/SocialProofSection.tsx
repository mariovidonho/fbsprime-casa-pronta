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
    content: "Após 3 negativas em bancos, a FBS Prime encontrou uma solução perfeita para meu perfil. Depois de muito tempo encontrei a solução que eu precisava.",
    rating: 5,
    location: "Várzea Paulista - SP"
  },
  {
    name: "Marina Santos",
    profession: "Enfermeira",
    content: "O processo foi muito mais rápido do que eu imaginava e o melhor, tudo muito bem esclarecido. Super recomendo a FBS Prime!",
    rating: 5,
    location: "Cabreúva - SP"
  }
];

const stats = [
  { number: "500+", label: "Famílias atendidas" },
  { number: "95%", label: "Taxa de aprovação" },
  { number: "5", label: "anos atendendo diversas famílias com diversas soluções" },
  { number: "100%", label: "Transparência garantida" }
];

export const SocialProofSection = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-28 h-28 geometric-element opacity-15"></div>
        <div className="absolute bottom-1/3 right-1/5 w-20 h-20 bg-accent/5 rounded-3xl transform -rotate-6"></div>
      </div>
      
      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-24 animate-fade-in">
          <h2 className="text-5xl lg:text-6xl font-bold text-primary mb-8 tracking-tight">
            Não acredita? <span className="text-accent">Veja você mesmo</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Conheça, uma pequena parte, de quem já encontrou uma solução para o seu bolso e para os seus sonhos!
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 animate-slide-up">
              <div className="relative">
                {/* Geometric background */}
                <div className="absolute -inset-4 bg-gradient-geometric rounded-3xl opacity-40"></div>
                <img
                  src={equipeImage}
                  alt="Equipe especializada FBS Prime"
                  className="relative w-full h-auto rounded-3xl shadow-strong"
                />
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-8 animate-fade-in">
              <div className="bg-gradient-primary text-white rounded-3xl p-8 inline-block">
                <h3 className="text-3xl font-bold">Família FBS Prime</h3>
              </div>
              
              <h3 className="text-4xl lg:text-5xl font-bold text-primary tracking-tight">
                A nossa maior conquista: Nossos clientes
              </h3>
              
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                Essas são pessoas como você, tem um sonho mas com as mesmas dúvidas, incertezas, restrições e até medos. Mas a pergunta que fazemos pra você é: Se essas pessoas, com tudo isso, conseguiram, por que você não?
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-accent text-accent-foreground px-6 py-3 rounded-2xl font-semibold text-lg">
                  ✓ Atendimento 100% Transparente
                </div>
                <div className="bg-primary text-primary-foreground px-6 py-3 rounded-2xl font-semibold text-lg">
                  ✓ Especialistas Certificados
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-10 mb-32">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-primary text-white rounded-3xl p-10 shadow-strong hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-5xl font-bold mb-3 tracking-tight">{stat.number}</div>
                <div className="text-xl opacity-90 font-light">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-10 shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up border border-primary/10 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-8">
                <Quote className="w-10 h-10 text-accent" />
              </div>
              
              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-8 text-lg font-light">
                "{testimonial.content}"
              </p>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Author */}
              <div className="border-t border-border pt-6">
                <div className="font-bold text-primary text-lg">{testimonial.name}</div>
                <div className="text-muted-foreground font-medium">{testimonial.profession}</div>
                <div className="text-accent font-semibold">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};