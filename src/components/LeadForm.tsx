import React, { useState } from 'react';

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

  const showToast = (title: string, description: string, type: 'success' | 'error') => {
    // Implementação básica de toast ou você pode usar uma biblioteca
    alert(`${title}: ${description}`);
  };

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

      if (response.ok) {
        setFormularioEnviado(true);
      } else {
        throw new Error('Erro na resposta do servidor');
      }

    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      showToast(
        "Erro no envio",
        "Não foi possível enviar o formulário. Tente novamente.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full lg:w-1/2 bg-gray-900 border-2 rounded-xl border-gray-700 p-8 shadow-2xl">
      <div className="space-y-4 text-center mb-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-white">
          Preencha as informações para receber uma simulação personalizada
        </h2>
      </div>

      {formularioEnviado ? (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <h2 className="text-white text-2xl mb-4">Obrigado!</h2>
          <p className="text-gray-300">Seu cadastro foi concluído com sucesso. Em breve entraremos em contato.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="nome" className="text-base font-semibold text-white">Nome Completo</label>
              <input
                id="nome"
                type="text"
                placeholder="Digite seu nome completo"
                value={formData.nome}
                onChange={(e) => handleInputChange("nome", e.target.value)}
                required
                className="w-full h-12 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="telefone" className="text-base font-semibold text-white">Telefone</label>
              <input
                id="telefone"
                type="tel"
                placeholder="99999-9999"
                value={formData.telefone}
                onChange={(e) => handleInputChange("telefone", e.target.value)}
                required
                className="w-full h-12 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-base font-semibold text-white">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
              className="w-full h-12 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="valorImovel" className="text-base font-semibold text-white">Valor do Imóvel</label>
            <input
              id="valorImovel"
              type="text"
              placeholder="R$ 300,000,00"
              value={formData.valorImovel}
              onChange={(e) => handleInputChange("valorImovel", e.target.value)}
              required
              className="w-full h-12 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="valorEntrada" className="text-base font-semibold text-white">Valor Disponível para Entrada</label>
            <input
              id="valorEntrada"
              type="text"
              placeholder="R$ 30.000,00"
              value={formData.valorEntrada}
              onChange={(e) => handleInputChange("valorEntrada", e.target.value)}
              required
              className="w-full h-12 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="valorMensal" className="text-base font-semibold text-white">Quanto pode pagar por mês?</label>
            <input
              id="valorMensal"
              type="text"
              placeholder="R$ 1.500,00"
              value={formData.valorMensal}
              onChange={(e) => handleInputChange("valorMensal", e.target.value)}
              required
              className="w-full h-12 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="localizacao" className="text-base font-semibold text-white">Localização Desejada</label>
            <input
              id="localizacao"
              type="text"
              placeholder="Jundiaí, Várzea Paulista, etc."
              value={formData.localizacao}
              onChange={(e) => handleInputChange("localizacao", e.target.value)}
              className="w-full h-12 px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex justify-end">
            <button 
              type="submit" 
              disabled={isSubmitting} 
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-semibold rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              {isSubmitting ? "Enviando simulação..." : "Quero minha solução agora!"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
