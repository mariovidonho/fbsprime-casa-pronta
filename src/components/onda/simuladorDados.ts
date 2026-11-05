/**
 * DADOS DO SIMULADOR — atualize aqui.
 *
 * Taxas mínimas de balcão (ao ano + TR) para financiamento imobiliário (SBPE),
 * sem relacionamento e sem FGTS. Conferir mensalmente nos sites dos bancos
 * ou na tabela de taxas por instituição do Banco Central.
 */
export const TAXAS_ATUALIZADAS_EM = "novembro de 2026";
export const TAXAS_FONTE = "anúncios dos bancos e levantamentos de mercado";

export const BANCOS = [
  { nome: "Caixa", taxaAnual: 10.26 },
  { nome: "Banco do Brasil", taxaAnual: 11.6 },
  { nome: "Santander", taxaAnual: 12.49 },
  { nome: "Itaú", taxaAnual: 12.95 },
  { nome: "Bradesco", taxaAnual: 15.0 },
];

/** Regras de referência usadas pelos bancos na análise. */
export const ENTRADA_MINIMA = 0.2; // 20% do valor do imóvel
export const COMPROMETIMENTO_MAXIMO = 0.3; // parcela até 30% da renda

/**
 * PROPOSTAS REAIS fechadas pela FBS (enviadas pela FBS em 05/11/2026), sem dados do cliente.
 * O simulador mostra a proposta com valor de imóvel mais próximo do que o visitante escolheu.
 */
export type CasoFBS = {
  valorImovel: number;
  entrada: number;
  parcela: number;
};

export const CASOS_FBS: CasoFBS[] = [
  { valorImovel: 400000, entrada: 17000, parcela: 1118 },
  { valorImovel: 650000, entrada: 28000, parcela: 1900 },
  { valorImovel: 400000, entrada: 10860, parcela: 1540 },
  { valorImovel: 500000, entrada: 19000, parcela: 1609 },
  { valorImovel: 430000, entrada: 10200, parcela: 1664 },
];

/** Comparação da proposta FBS com a entrada mínima exigida pelos bancos (ENTRADA_MINIMA). */
export const compararCaso = (c: CasoFBS) => {
  const entradaBanco = c.valorImovel * ENTRADA_MINIMA;
  return {
    entradaBanco,
    pctBanco: ENTRADA_MINIMA * 100, // % do imóvel que o banco pede
    pctFbs: (c.entrada / c.valorImovel) * 100, // % do imóvel que o cliente deu
    economia: entradaBanco - c.entrada, // R$ a menos de entrada
    pctMenos: (1 - c.entrada / entradaBanco) * 100, // quanto % a menos que o banco pediria
  };
};

/** Índice da proposta com valor de imóvel mais próximo (empate: a de menor entrada). */
export const casoMaisProximo = (valorImovel: number) =>
  CASOS_FBS.reduce((melhor, c, i) => {
    const m = CASOS_FBS[melhor];
    const d = Math.abs(c.valorImovel - valorImovel);
    const dm = Math.abs(m.valorImovel - valorImovel);
    return d < dm || (d === dm && c.entrada < m.entrada) ? i : melhor;
  }, 0);

export const pct = (v: number, casas = 1) =>
  `${v.toLocaleString("pt-BR", { minimumFractionDigits: 0, maximumFractionDigits: casas })}%`;

// ---- Cálculos ----

export const brl = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

/** 1ª parcela no sistema SAC (o mais usado no financiamento imobiliário). Sem seguros e taxas. */
export const primeiraParcelaSAC = (financiado: number, taxaAnual: number, meses: number) => {
  if (financiado <= 0) return 0;
  const i = Math.pow(1 + taxaAnual / 100, 1 / 12) - 1;
  return financiado / meses + financiado * i;
};
