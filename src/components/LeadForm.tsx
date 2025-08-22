import React, { useState } from 'react';
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
  [formularioEnviado, setFormularioEnviado] = useState(false);
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

    // Send form data to webhook
    try {
      const response = await fetch("https://hook.us2.make.com/6ajtjv40petejbmlxoedaludgbv027p5", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: "Landing Page FBS Prime"
        }),
      });
      setFormularioEnviado(true);
      if (response.ok) {
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
      } else {
        throw new Error("Erro no envio");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
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
    <section id="simulacao" className="py-32 bg-primary text-white relative overflow-hidden">
      {/* Geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/5 w-32 h-32 border border-white/10 rounded-3xl transform rotate-12 opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/5 rounded-2xl transform -rotate-6"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 lg:mb-8 tracking-tight">
              Simule <span className="text-accent">Gratuitamente</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto font-light leading-relaxed">
              Preencha os dados abaixo e receba uma proposta personalizada 
              em até 24 horas, sem compromisso!
            </p>
          </div>

          {/* Form Card */}
          <Card className="shadow-strong animate-slide-up border border-white/20 bg-white/95 backdrop-blur-sm">
            <CardHeader className="text-center pb-8 lg:pb-10">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-4 lg:mb-6">
                <Home className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl lg:text-4xl text-primary tracking-tight">Sua Casa Própria Está Aqui</CardTitle>
              <CardDescription className="text-lg lg:text-xl font-light">
                Preencha as informações para receber uma simulação personalizada
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                return (
  <>
    {formularioEnviado ? (
      // Se 'formularioEnviado' for TRUE, mostre esta mensagem
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Obrigado!</h2>
        <p>Seu cadastro foi concluído com sucesso. Em breve entraremos em contato.</p>
      </div>
    ) : (
      // Se for FALSO, mostre o formulário original
      <form onSubmit={handleSubmit} className="space-y-6">
        {/*
          Aqui está o código do seu formulário original,
          sem as tags de abertura e fechamento <form>
        */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="nome" className="text-base font-semibold">Nome Completo</label>
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
            <label htmlFor="telefone" className="text-base font-semibold">Telefone</label>
            <Input
              id="telefone"
              type="tel"
              placeholder="99999-9999"
              value={formData.telefone}
              onChange={(e) => handleInputChange("telefone", e.target.value)}
              required
              className="h-12"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-base font-semibold">E-mail</label>
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
        <div className="space-y-2">
          <label htmlFor="valorImovel" className="text-base font-semibold">Valor do Imóvel</label>
          <Input
            id="valorImovel"
            type="text"
            placeholder="R$ 300,000,00"
            value={formData.valorImovel}
            onChange={(e) => handleInputChange("valorImovel", e.target.value)}
            required
            className="h-12"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="valorEntrada" className="text-base font-semibold">Valor Disponível para Entrada</label>
          <Input
            id="valorEntrada"
            type="text"
            placeholder="R$ 30.000,00"
            value={formData.valorEntrada}
            onChange={(e) => handleInputChange("valorEntrada", e.target.value)}
            required
            className="h-12"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="valorMensal" className="text-base font-semibold">Quanto pode pagar por mês?</label>
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
          <label htmlFor="localizacao" className="text-base font-semibold">Localização Desejada</label>
          <Input
            id="localizacao"
            type="text"
            placeholder="Jundiaí, Várzea Paulista, etc."
            value={formData.localizacao}
            onChange={(e) => handleInputChange("localizacao", e.target.value)}
            className="h-12"
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit" variant="cta" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "Enviando simulação..." : "Quero minha solução agora!"}
          </Button>
        </div>
      </form>
    )}
  </>
);
