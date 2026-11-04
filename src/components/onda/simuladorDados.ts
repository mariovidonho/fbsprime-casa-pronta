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
 * Casos de clientes FBS. Por enquanto, um exemplo ILUSTRATIVO.
 * Troque pelos casos reais (sem nome do cliente) e mude `ilustrativo` para false.
 */
export type CasoFBS = {
  ilustrativo: boolean;
  cidade: string;
  perfil: string;
  rendaFamiliar: number;
  valorImovel: number;
  entradaDisponivel: number;
  resultado: string;
};

export const CASOS_FBS: CasoFBS[] = [
  {
    ilustrativo: true,
    cidade: "Jundiaí - SP",
    perfil: "Casal, renda familiar",
    rendaFamiliar: 6500,
    valorImovel: 280000,
    entradaDisponivel: 15000,
    resultado: "Os bancos pediam pelo menos R$ 56 mil de entrada. Com a Solução FBS, a compra saiu com a entrada que o casal já tinha e a parcela dentro da renda.",
  },
];

// ---- Cálculos ----

export const brl = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

/** 1ª parcela no sistema SAC (o mais usado no financiamento imobiliário). Sem seguros e taxas. */
export const primeiraParcelaSAC = (financiado: number, taxaAnual: number, meses: number) => {
  if (financiado <= 0) return 0;
  const i = Math.pow(1 + taxaAnual / 100, 1 / 12) - 1;
  return financiado / meses + financiado * i;
};
