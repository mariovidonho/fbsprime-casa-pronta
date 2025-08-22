import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "./ui/use-toast";

type FormData = {
  nome: string;
  email: string;
  telefone: string;
  valorImovel: string;
  valorEntrada: string;
  valorMensal: string;
  localizacao: string;
};

export const LeadForm = () => {
  const [toast] = useToast();
  const [formularioEnviado, setFormularioEnviado] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    valorImovel: "",
    valorEntrada: "",
    valorMensal: "",
    localizacao: "",
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://hook.us2.make.com/6ajtjv40petejbm1xoedaludgbv027p5", {
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

    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      toast({
        title: "Erro no envio",
        description: "Não foi possível enviar o formulário. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card w-full lg:w-1/2 bg-gray-900 border-2 rounded-xl border-gray-700 p-8 shadow-2xl">
      <div className="card-header space-y-4 text-center mb-6">
        <h2 className="text-2xl lg:text-3xl font-bold">
          Preencha as informações para receber uma simulação personalizada
        </h2>
      </div>

      {formularioEnviado ? (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h2>Obrigado!</h2>
          <p>Seu cadastro foi concluído com sucesso. Em breve entraremos em contato.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
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
    </div>
  );
};
