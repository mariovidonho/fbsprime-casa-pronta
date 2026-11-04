export type CaminhoId = "entrada" | "planejar" | "agora" | "garantia";

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
    produto: "Financiamento com entrada facilitada",
    texto:
      "Financiamento com entrada facilitada. Projetamos o crédito nos bancos parceiros e buscamos o caminho com a menor entrada possível para a sua renda.",
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
    produto: "Carta de crédito contemplada",
    texto:
      "Carta de crédito contemplada: o crédito já está liberado, sem depender de sorteio ou lance. Você negocia o imóvel como compra à vista.",
    entrada: "Conforme a carta escolhida",
    quando: "Imediato",
  },
  {
    id: "garantia",
    situacao: "Já tenho um bem",
    titulo: "Quero usar meu imóvel ou carro",
    produto: "Crédito com garantia",
    texto:
      "Crédito com garantia: use um bem que você já tem para conseguir taxas menores e prazos maiores, para comprar, reformar ou reorganizar as dívidas.",
    entrada: "Não se aplica",
    quando: "Após análise da garantia",
  },
];
