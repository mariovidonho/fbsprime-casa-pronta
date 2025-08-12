import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Home, MapPin, DollarSign, Calendar } from "lucide-react";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  valorImovel: string;
  valorEntrada: string;
  valorMensal: string;
  localizacao: string;
}

export const LeadForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    valorImovel: "",
    valorEntrada: "",
    valorMensal: "",
    localizacao: ""
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Simulação enviada com sucesso!",
        description: "Nossa equipe entrará em contato em até 24 horas para apresentar sua proposta personalizada.",
      });
      
      // Reset form
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        valorImovel: "",
        valorEntrada: "",
        valorMensal: "",
        localizacao: ""
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar simulação",
        description: "Tente novamente ou entre em contato conosco pelo WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="simulacao" className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Simule <span className="text-primary-light">Gratuitamente</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Preencha os dados abaixo e receba uma proposta personalizada 
              em até 24 horas, sem compromisso!
            </p>
          </div>

          {/* Form Card */}
          <Card className="shadow-strong animate-slide-up">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl text-secondary">Sua Casa Própria Está Aqui</CardTitle>
              <CardDescription className="text-lg">
                Preencha as informações para receber uma simulação personalizada
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Data */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome" className="text-base font-semibold">Nome Completo *</Label>
                    <Input
                      id="nome"
                      type="text"
                      placeholder="Digite seu nome completo"
                      value={formData.nome}
                      onChange={(e) => handleInputChange("nome", e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="telefone" className="text-base font-semibold">WhatsApp *</Label>
                    <Input
                      id="telefone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      value={formData.telefone}
                      onChange={(e) => handleInputChange("telefone", e.target.value)}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-semibold">E-mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    className="h-12"
                  />
                </div>

                {/* Property Data */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Informações do Imóvel
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="valorImovel" className="text-base font-semibold">Valor do Imóvel *</Label>
                      <Input
                        id="valorImovel"
                        type="text"
                        placeholder="R$ 300.000,00"
                        value={formData.valorImovel}
                        onChange={(e) => handleInputChange("valorImovel", e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="valorEntrada" className="text-base font-semibold">Valor Disponível para Entrada</Label>
                      <Input
                        id="valorEntrada"
                        type="text"
                        placeholder="R$ 30.000,00"
                        value={formData.valorEntrada}
                        onChange={(e) => handleInputChange("valorEntrada", e.target.value)}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="space-y-2">
                      <Label htmlFor="valorMensal" className="text-base font-semibold">Quanto pode pagar por mês? *</Label>
                      <Input
                        id="valorMensal"
                        type="text"
                        placeholder="R$ 1.500,00"
                        value={formData.valorMensal}
                        onChange={(e) => handleInputChange("valorMensal", e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="localizacao" className="text-base font-semibold flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Localização Desejada
                      </Label>
                      <Input
                        id="localizacao"
                        type="text"
                        placeholder="Jundiaí, Várzea Paulista, etc."
                        value={formData.localizacao}
                        onChange={(e) => handleInputChange("localizacao", e.target.value)}
                        className="h-12"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button
                    type="submit"
                    size="xl"
                    variant="cta"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <Calendar className="w-5 h-5 mr-2 animate-spin" />
                        Enviando simulação...
                      </>
                    ) : (
                      <>
                        🎯 Quero minha simulação agora
                      </>
                    )}
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center mt-4">
                    Ao enviar, você concorda em receber contato da FBS Prime. 
                    Não fazemos spam e seus dados estão seguros conosco.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
          
          {/* Trust indicators below form */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center text-white">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🔒</span>
              </div>
              <p className="font-semibold">Dados Protegidos</p>
              <p className="text-sm opacity-80">SSL e LGPD</p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">⚡</span>
              </div>
              <p className="font-semibold">Resposta Rápida</p>
              <p className="text-sm opacity-80">Até 24 horas</p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🎯</span>
              </div>
              <p className="font-semibold">100% Personalizado</p>
              <p className="text-sm opacity-80">Solução sob medida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};