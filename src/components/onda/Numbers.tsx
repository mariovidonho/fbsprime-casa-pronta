import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { Reveal } from "./shared";

const Contador = ({ ate, prefixo = "", sufixo = "" }: { ate: number; prefixo?: string; sufixo?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const visto = useInView(ref, { once: true, margin: "-60px" });
  const [valor, setValor] = useState(0);
  useEffect(() => {
    if (!visto) return;
    const c = animate(0, ate, { duration: 1.6, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setValor(Math.round(v)) });
    return () => c.stop();
  }, [visto, ate]);
  return (
    <span ref={ref} className="tabular-nums">
      {prefixo}
      {valor}
      {sufixo}
    </span>
  );
};

const numeros = [
  { ate: 500, prefixo: "+", sufixo: "", label: "famílias atendidas" },
  { ate: 6, prefixo: "", sufixo: " anos", label: "de atuação em Jundiaí" },
  { ate: 4, prefixo: "", sufixo: "", label: "caminhos de crédito comparados" },
];

const faixa = ["Financiamento", "Consórcio imobiliário", "Carta contemplada", "Crédito com garantia", "Jundiaí e região"];

export const Numbers = () => (
  <section id="numeros" className="bg-white">
    <div className="mx-auto grid max-w-6xl gap-10 border-t border-[#E3E8ED] px-4 pb-20 pt-16 text-center sm:grid-cols-3 sm:px-6 sm:pb-24">
      {numeros.map((n, i) => (
        <Reveal key={n.label} delay={i * 0.12} className="flex flex-col items-center gap-2">
          <span className="font-serif text-6xl font-bold text-brand sm:text-7xl">
            <Contador ate={n.ate} prefixo={n.prefixo} sufixo={n.sufixo} />
          </span>
          <span className="text-base text-ink">{n.label}</span>
        </Reveal>
      ))}
    </div>

    {/* Faixa corrida com os produtos */}
    <div className="overflow-hidden border-y border-deep/10 bg-deep py-5" aria-hidden="true">
      <div className="marquee flex w-max gap-10 whitespace-nowrap">
        {[...faixa, ...faixa, ...faixa, ...faixa].map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-serif text-2xl font-bold text-white sm:text-3xl">
            {t}
            <span className="h-2.5 w-2.5 rotate-45 bg-sky" />
          </span>
        ))}
      </div>
    </div>
  </section>
);
