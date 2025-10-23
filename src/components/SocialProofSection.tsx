import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

// Imagens dos clientes satisfeitos
const clientImages = [
  "/lovable-uploads/Imagem 23.jpeg",
  "/lovable-uploads/Imagem 28.jpeg",
  "/lovable-uploads/84a4e474-7af6-4ccd-86e8-d67e77d9256f.png",
  "/lovable-uploads/Imagem 26.jpeg",
  "/lovable-uploads/047dacc9-58aa-4d16-8b12-1be6ab64c306.png",
  "/lovable-uploads/Imagem 27.jpeg",
  "/lovable-uploads/Imagem 25.jpeg",
  "/lovable-uploads/5b47f8eb-064e-4857-af11-225347101468.png",
  "/lovable-uploads/c9043992-5704-4af6-b77c-6a1491b5be40.png",
  "/lovable-uploads/7eaf4824-b5ab-44d6-bc70-530dbd3fac30.png",
  "/lovable-uploads/e7f7e38a-0816-4a67-8186-87359dea0e10.png",
  "/lovable-uploads/c7cd2cd0-e8f7-4601-8388-9df82e50c742.png",
  "/lovable-uploads/9139b4e3-95f8-41e7-b576-323b501c1448.png",
  "/lovable-uploads/463af361-b738-43df-8cde-b594144be27e.png",
  "/lovable-uploads/bfd8a7ba-22f1-492d-aa38-7d83142acc5b.png",
  "/lovable-uploads/f15d34c7-0897-4b01-87c8-4d27c5780df0.png",
  "/lovable-uploads/Imagem 24.jpeg",
  "/lovable-uploads/3a81e8f7-f9ac-4099-a4b4-f27c9adce3c0.png",
  "/lovable-uploads/Imagem 29.jpeg",
];

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
    content: "Após 3 negativas em bancos, a FBS Prime encontrou uma solução perfeita para meu perfil, depois de muito tempo. Achei a saída para o que eu precisava.",
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
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % clientImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + clientImages.length) % clientImages.length);
  };

  // Autoplay - passa automaticamente a cada 3 segundos
  useEffect(() => {
    const autoplay = setInterval(nextSlide, 3000);
    return () => clearInterval(autoplay);
  }, []);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-28 h-28 geometric-element opacity-15"></div>
        <div className="absolute bottom-1/3 right-1/5 w-20 h-20 bg-accent/5 rounded-3xl transform -rotate-6"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 lg:mb-8 tracking-tight">
            Não acredita? <span className="text-accent">Veja você mesmo</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Conheça, uma pequena parte, de quem já encontrou uma solução para o seu sonho e para o seu bolso
          </p>
        </div>

        {/* Clients Carousel Section */}
        <div className="mb-16 lg:mb-32">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-5 animate-slide-up">
              <div className="relative">
                {/* Geometric background */}
                <div className="absolute -inset-2 lg:-inset-4 bg-gradient-geometric rounded-3xl opacity-40"></div>
                
                {/* Carousel */}
                <div className="relative overflow-hidden rounded-3xl shadow-strong">
                  <div 
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {clientImages.map((image, index) => (
                      <div key={index} className="flex-shrink-0 w-full">
                        <img
                          src={image}
                          alt={`Cliente satisfeito ${index + 1} - FBS Prime`}
                          className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Navigation buttons */}
                  <button
                    className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 shadow-lg z-10"
                    onClick={prevSlide}
                  >
                    <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                  </button>
                  <button
                    className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 shadow-lg z-10"
                    onClick={nextSlide}
                  >
                    <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-primary" />
                  </button>

                  {/* Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {clientImages.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                        }`}
                        onClick={() => setCurrentSlide(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-4 lg:space-y-8 animate-fade-in">
              <div className="bg-gradient-primary text-white rounded-2xl lg:rounded-3xl p-4 lg:p-8 inline-block">
                <h3 className="text-xl lg:text-3xl font-bold">Família FBS Prime</h3>
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary tracking-tight">
                A nossa maior conquista: Nossos clientes
              </h3>
              
              <p className="text-sm sm:text-base lg:text-xl text-muted-foreground leading-relaxed font-light">
                Essas são pessoas como você, tem um sonho mas com as mesmas dúvidas, incertezas, restrições e até medos. Mas a pergunta que fazemos pra você é: Se essas pessoas, com tudo isso, chegaram lá, por que você não?
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 lg:gap-4">
                <div className="bg-accent text-accent-foreground px-3 lg:px-6 py-2 lg:py-3 rounded-xl lg:rounded-2xl font-semibold text-xs sm:text-sm lg:text-lg text-center">
                  ✓ Clientes Reais Satisfeitos
                </div>
                <div className="bg-primary text-primary-foreground px-3 lg:px-6 py-2 lg:py-3 rounded-xl lg:rounded-2xl font-semibold text-xs sm:text-sm lg:text-lg text-center">
                  ✓ Sonhos Realizados
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-10 mb-16 lg:mb-32">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-primary text-white rounded-2xl lg:rounded-3xl p-4 lg:p-10 shadow-strong hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-1 lg:mb-3 tracking-tight">{stat.number}</div>
                <div className="text-xs sm:text-sm lg:text-xl opacity-90 font-light leading-tight">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-10 shadow-soft hover:shadow-medium transition-all duration-300 animate-slide-up border border-primary/10 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-4 lg:mb-8">
                <Quote className="w-6 h-6 lg:w-10 lg:h-10 text-accent" />
              </div>
              
              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-4 lg:mb-8 text-sm lg:text-lg font-light">
                "{testimonial.content}"
              </p>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-3 lg:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 lg:w-6 lg:h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Author */}
              <div className="border-t border-border pt-3 lg:pt-6">
                <div className="font-bold text-primary text-sm lg:text-lg">{testimonial.name}</div>
                <div className="text-muted-foreground font-medium text-xs lg:text-base">{testimonial.profession}</div>
                <div className="text-accent font-semibold text-xs lg:text-base">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
