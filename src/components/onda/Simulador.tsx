import { useEffect, useMemo, useRef, useState } from "react";
import { animate, motion } from "framer-motion";
import { AlertTriangle, ArrowDown, Check, Info, Sparkles } from "lucide-react";
import { HeroForm } from "./HeroForm";
import { CAMINHOS, type CaminhoId } from "./caminhos";
import { Eyebrow, Reveal, scrollToId, track } from "./shared";
import {
  BANCOS,
  CASOS_FBS,
  COMPROMETIMENTO_MAXIMO,
  ENTRADA_MINIMA,
  TAXAS_ATUALIZADAS_EM,
  TAXAS_FONTE,
  brl,
  primeiraParcelaSAC,
} from "./simuladorDados";

/** Número que "rola" até o novo valor. */
const Valor = ({ v }: { v: number }) => {
  const [mostrado, setMostrado] = useState(v);
  const anterior = useRef(v);
  useEffect(() => {
    const c = animate(anterior.current, v, {
      duration: 0.45,
      ease: "easeOut",
      onUpdate: (x) => setMostrado(x),
    });
    anterior.current = v;
    return () => c.stop();
  }, [v]);
  return <span className="tabular-nums">{brl(Math.round(mostrado))}</span>;
};

const Slider = ({
  id,
  label,
  valor,
  min,
  max,
  passo,
  onChange,
  dica,
}: {
  id: string;
  label: string;
  valor: number;
  min: number;
  max: number;
  passo: number;
  onChange: (v: number) => void;
  dica?: string;
}) => {
  const pct = ((valor - min) / (max - min)) * 100;
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-sm font-semibold text-[#D3E3EE]">
          {label}
        </label>
        <span className="font-serif text-2xl font-bold text-white">{brl(valor)}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={passo}
        value={valor}
        onChange={(e) => onChange(Number(e.target.value))}
        className="fbs-range"
        style={{ "--pct": `${pct}%` } as React.CSSProperties}
      />
      {dica && <span className="text-xs text-[#9FC0D6]">{dica}</span>}
    </div>
  );
};

export const Simulador = ({ caminho }: { caminho: CaminhoId }) => {
  const atual = CAMINHOS.find((c) => c.id === caminho) ?? CAMINHOS[0];

  const [imovel, setImovel] = useState(300000);
  const [entrada, setEntrada] = useState(30000);
  const [renda, setRenda] = useState(7000);
  const [prazoAnos, setPrazoAnos] = useState(30);

  // Mede no GTM a primeira vez que a pessoa mexe no simulador
  const primeiroRender = useRef(true);
  const jaMediu = useRef(false);
  useEffect(() => {
    if (primeiroRender.current) {
      primeiroRender.current = false;
      return;
    }
    if (!jaMediu.current) {
      jaMediu.current = true;
      track("simulador_interacao");
    }
  }, [imovel, entrada, renda, prazoAnos]);

  // a entrada nunca passa do valor do imóvel
  useEffect(() => {
    if (entrada > imovel) setEntrada(imovel);
  }, [imovel, entrada]);

  const r = useMemo(() => {
    const financiado = Math.max(imovel - entrada, 0);
    const meses = prazoAnos * 12;
    const entradaMin = imovel * ENTRADA_MINIMA;
    const limite = renda * COMPROMETIMENTO_MAXIMO;
    const bancos = BANCOS.map((b) => {
      const parcela = primeiraParcelaSAC(financiado, b.taxaAnual, meses);
      const entradaOk = entrada >= entradaMin;
      const rendaOk = parcela <= limite;
      return { ...b, parcela, entradaOk, rendaOk, ok: entradaOk && rendaOk };
    });
    const melhor = bancos[0];
    const faltaEntrada = Math.max(entradaMin - entrada, 0);
    const pctRenda = renda > 0 ? melhor.parcela / renda : 0;
    const aprovados = bancos.filter((b) => b.ok).length;
    return { financiado, entradaMin, limite, bancos, melhor, faltaEntrada, pctRenda, aprovados };
  }, [imovel, entrada, renda, prazoAnos]);

  const caso = CASOS_FBS[0];

  const prefill = useMemo(
    () => ({
      valorImovel: brl(imovel),
      valorEntrada: brl(entrada),
      valorMensal: brl(Math.round(r.limite)),
    }),
    [imovel, entrada, r.limite]
  );
  const extra = useMemo(
    () => ({
      rendaFamiliar: brl(renda),
      prazoAnos: String(prazoAnos),
      parcelaMelhorBanco: brl(Math.round(r.melhor.parcela)),
      bancosDentroDasRegras: `${r.aprovados} de ${BANCOS.length}`,
    }),
    [renda, prazoAnos, r.melhor.parcela, r.aprovados]
  );

  // Diagnóstico em linguagem simples
  const diagnostico =
    r.aprovados === BANCOS.length
      ? { tom: "ok" as const, texto: "Pelas regras dos bancos, seu perfil passa. Ainda assim, dá para buscar condições melhores." }
      : r.faltaEntrada > 0 && r.pctRenda > COMPROMETIMENTO_MAXIMO
        ? { tom: "alerta" as const, texto: `Pelas regras dos bancos, faltariam ${brl(r.faltaEntrada)} de entrada e a parcela passaria de 30% da sua renda.` }
        : r.faltaEntrada > 0
          ? { tom: "alerta" as const, texto: `Pelas regras dos bancos, faltariam ${brl(r.faltaEntrada)} de entrada para chegar aos 20% exigidos.` }
          : { tom: "alerta" as const, texto: `Pelas regras dos bancos, a parcela comprometeria ${Math.round(r.pctRenda * 100)}% da sua renda, acima dos 30% permitidos.` };

  return (
    <section id="simular" className="scroll-mt-20 bg-white">
      {/* ===== Simulador ===== */}
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <Eyebrow>Simulador de mercado</Eyebrow>
          <h2 className="font-serif text-4xl font-bold leading-[1.1] text-deep sm:text-5xl">
            Tenha uma noção do seu poder de compra.
          </h2>
          <p className="text-lg leading-relaxed text-ink">
            Veja o que os principais bancos cobrariam no seu caso hoje e onde a FBS Prime entra para mudar essa conta.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 overflow-hidden rounded-[28px] bg-deep shadow-[0_40px_80px_-40px_rgba(0,51,78,0.8)]">
          {/* Entradas */}
          <div className="grid gap-8 p-6 sm:p-10 md:grid-cols-3">
            <Slider id="sim-imovel" label="Valor do imóvel" valor={imovel} min={100000} max={1500000} passo={5000} onChange={setImovel} />
            <Slider
              id="sim-entrada"
              label="Quanto você tem de entrada"
              valor={entrada}
              min={0}
              max={Math.min(imovel, 600000)}
              passo={1000}
              onChange={setEntrada}
              dica={`Os bancos costumam pedir 20%: ${brl(r.entradaMin)}`}
            />
            <Slider
              id="sim-renda"
              label="Renda familiar por mês"
              valor={renda}
              min={2000}
              max={50000}
              passo={250}
              onChange={setRenda}
              dica={`Parcela máxima aceita (30%): ${brl(r.limite)}`}
            />
          </div>
          <div className="flex flex-wrap items-center gap-3 border-t border-white/10 px-6 py-4 sm:px-10">
            <span className="text-sm font-semibold text-[#D3E3EE]">Prazo</span>
            {[20, 30, 35].map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => setPrazoAnos(a)}
                aria-pressed={prazoAnos === a}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  prazoAnos === a ? "bg-white text-deep" : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {a} anos
              </button>
            ))}
            <span className="ml-auto text-xs text-[#9FC0D6]">Valor financiado: {brl(r.financiado)}</span>
          </div>

          {/* Resultado: bancos x Solução FBS */}
          <div className="grid gap-4 bg-paper p-4 sm:p-6 lg:grid-cols-[1.35fr_1fr]">
            {/* Bancos */}
            <div className="flex flex-col rounded-3xl bg-white p-5 sm:p-7">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-bold text-deep">Como está o mercado</h3>
                <span className="text-xs font-semibold text-[#4A6478]">1ª parcela · sistema SAC</span>
              </div>

              <div
                role="status"
                className={`mt-4 flex items-start gap-3 rounded-2xl p-4 text-sm font-medium leading-relaxed ${
                  diagnostico.tom === "ok" ? "bg-[#E6F1F8] text-deep" : "bg-[#FFF4E5] text-[#7A4300]"
                }`}
              >
                {diagnostico.tom === "ok" ? (
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                ) : (
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" />
                )}
                {diagnostico.texto}
              </div>

              <ul className="mt-4 flex flex-col divide-y divide-[#E3E8ED]">
                {r.bancos.map((b) => (
                  <li key={b.nome} className="flex items-center gap-3 py-3.5">
                    <div className="flex min-w-0 flex-1 flex-col">
                      <span className="font-semibold text-deep">{b.nome}</span>
                      <span className="text-xs text-[#4A6478]">a partir de {b.taxaAnual.toLocaleString("pt-BR")}% a.a. + TR</span>
                    </div>
                    <span className="font-serif text-lg font-bold text-deep sm:text-xl">
                      <Valor v={b.parcela} />
                    </span>
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full sm:hidden ${b.ok ? "bg-[#E6F1F8] text-brand" : "bg-[#FFF4E5] text-[#7A4300]"}`}
                      aria-label={b.ok ? "Dentro das regras" : !b.entradaOk ? "Entrada insuficiente" : "Acima de 30% da renda"}
                    >
                      {b.ok ? <Check className="h-3.5 w-3.5" /> : <AlertTriangle className="h-3.5 w-3.5" />}
                    </span>
                    <span
                      className={`hidden w-[158px] whitespace-nowrap rounded-full px-2.5 py-1 text-center text-[11px] font-bold sm:inline-block ${
                        b.ok ? "bg-[#E6F1F8] text-brand" : "bg-[#FFF4E5] text-[#7A4300]"
                      }`}
                    >
                      {b.ok ? "Dentro das regras" : !b.entradaOk ? "Entrada insuficiente" : "Acima de 30% da renda"}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 flex items-start gap-2 text-[11px] leading-relaxed text-[#4A6478]">
                <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                <span>
                  Estimativa com taxas mínimas de balcão divulgadas em {TAXAS_ATUALIZADAS_EM} ({TAXAS_FONTE}), sem TR, seguros
                  e tarifas. Não é proposta de crédito. A taxa final e o Custo Efetivo Total (CET) dependem da análise de cada banco.
                </span>
              </p>
            </div>

            {/* Solução FBS */}
            <motion.div
              layout
              className="relative flex flex-col overflow-hidden rounded-3xl bg-brand p-5 text-white sm:p-7"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sky/50 blur-3xl" />
              <span className="relative inline-flex items-center gap-2 self-start rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em]">
                <Sparkles className="h-3.5 w-3.5" /> Solução FBS
              </span>
              <h3 className="relative mt-4 font-serif text-3xl font-bold leading-tight">
                {r.aprovados === BANCOS.length ? "Dá para pagar menos." : "A conta do banco não é a única."}
              </h3>
              <p className="relative mt-3 text-base leading-relaxed text-[#E1EDF5]">
                Nossos consultores analisam o seu perfil e buscam condições melhores do que as de balcão, para reduzir a entrada,
                a parcela ou as duas. Cada cliente tem um caminho.
              </p>

              {/* Caso */}
              <figure className="relative mt-6 rounded-2xl bg-white/10 p-5 backdrop-blur">
                <figcaption className="text-[11px] font-bold uppercase tracking-[0.12em] text-sky-soft">
                  {caso.ilustrativo ? "Exemplo ilustrativo" : "Baseado em cliente real"} · {caso.cidade}
                </figcaption>
                <dl className="mt-3 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <dt className="text-[11px] text-[#C9DBE8]">Renda</dt>
                    <dd className="text-sm font-bold">{brl(caso.rendaFamiliar)}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] text-[#C9DBE8]">Imóvel</dt>
                    <dd className="text-sm font-bold">{brl(caso.valorImovel)}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] text-[#C9DBE8]">Entrada</dt>
                    <dd className="text-sm font-bold">{brl(caso.entradaDisponivel)}</dd>
                  </div>
                </dl>
                <p className="mt-3 text-sm leading-relaxed">{caso.resultado}</p>
              </figure>

              <button
                onClick={() => {
                  track("simulador_enviar", { bancos_dentro_das_regras: r.aprovados });
                  scrollToId("simular-form");
                }}
                className="group relative mt-6 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-bold text-deep transition hover:bg-sky-soft"
              >
                Enviar minha simulação para um consultor
                <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
              </button>
              <p className="relative mt-3 text-center text-xs text-[#C9DBE8]">Seus números já vão preenchidos.</p>
            </motion.div>
          </div>
        </Reveal>
      </div>

      {/* ===== Envio para o consultor ===== */}
      <div id="simular-form" className="mx-auto grid max-w-6xl scroll-mt-24 items-center gap-12 px-4 pb-24 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <Reveal className="flex flex-col gap-5">
          <Eyebrow>Simulação gratuita</Eyebrow>
          <h2 className="font-serif text-4xl font-bold leading-[1.1] text-deep sm:text-5xl">Sua casa própria começa com uma entrada que cabe.</h2>
          <p className="text-lg leading-relaxed text-ink">
            Comparamos financiamento, consórcio e carta contemplada para encontrar o caminho com a menor entrada possível
            para o seu perfil.
          </p>
          <ul className="flex flex-col gap-3 text-base text-deep">
            {["Simulação gratuita", "Resposta em até 24 h", "Consultor dedicado"].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand">
                  <Check className="h-4 w-4 text-white" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-[28px] bg-deep p-2 sm:p-3">
            <HeroForm caminho={atual.produto} prefill={prefill} extra={extra} />
          </div>
        </Reveal>
      </div>
    </section>
  );
};
