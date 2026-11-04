export type CaminhoId = "entrada" | "planejar" | "agora";

export type Caminho = {
  id: CaminhoId;
  situacao: string;
  titulo: string;
  produto: string;
  texto: string;
  entrada: string;
  quando: string;
};

export const CAMINHOS: Caminho[] = [
  {
    id: "entrada",
    situacao: "Tenho pouca entrada",
    titulo: "Quero sair do aluguel",
    produto: "Parcelamento com entrada facilitada",
    texto:
      "Parcelamento com entrada facilitada. Projetamos o crédito nas instituições financeiras parceiras e buscamos o melhor caminho com a menor entrada possível para a sua renda.",
    entrada: "Reduzida, conforme perfil",
    quando: "Após aprovação do banco",
  },
  {
    id: "planejar",
    situacao: "Posso esperar um pouco",
    titulo: "Quero planejar sem juros",
    produto: "Consórcio imobiliário",
    texto:
      "Consórcio imobiliário: parcelas planejadas, sem juros de financiamento. Ideal para quem quer comprar nos próximos anos pagando menos no total.",
    entrada: "Sem entrada obrigatória",
    quando: "Na contemplação",
  },
  {
    id: "agora",
    situacao: "Preciso comprar já",
    titulo: "Achei o imóvel e tenho pressa",
    produto: "Planos personalizados",
    texto:
      "Planos personalizados para clientes que têm urgência em comprar seu imóvel com as menores taxas do mercado.",
    entrada: "Conforme o seu plano",
    quando: "Imediato",
  },
];
