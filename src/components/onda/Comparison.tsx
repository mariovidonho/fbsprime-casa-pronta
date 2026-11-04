import { motion } from "framer-motion";
import { ArrowRight, Check, Minus } from "lucide-react";
import { Eyebrow, Reveal, scrollToId } from "./shared";

const sozinho = [
  "Uma opção por vez, a do banco em que você entrou",
  "Entrada alta exigida logo de início",
  "Atendimento padronizado e “robotizado”",
  "Você corre atrás da papelada",
];
const comFbs = [
  "Financiamento, consórcio e carta contemplada lado a lado",
  "Caminhos com entrada reduzida para o seu perfil",
  "Um consultor especializado do início ao fim",
  "Facilitamos a burocracia para você",
];

const solucoes = [
  { t: "Financiamento", d: "Com entrada facilitada nos bancos parceiros." },
  { t: "Consórcio imobiliário", d: "As taxas mais competitivas do mercado e parcelas reduzidas." },
  { t: "Carta contemplada", d: "Crédito já liberado para comprar agora." },
  { t: "Crédito com garantia", d: "Use o seu bem e pague taxas menores." },
];

export const Comparison = () => (
  <section id="solucoes" className="scroll-mt-20 bg-paper">
    <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
        <Eyebrow>Por que a FBS Prime</Eyebrow>
        <h2 className="font-serif text-4xl font-bold leading-[1.1] text-deep sm:text-5xl">
          Ir sozinho ao banco ou ir com a FBS Prime
        </h2>
      </Reveal>

      <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1fr_1.15fr]">
        <Reveal className="flex flex-col gap-6 rounded-3xl border border-[#DCE3EA] bg-white p-8 sm:p-10">
          <h3 className="text-lg font-semibold uppercase tracking-[0.15em] text-[#4A6478]">Sozinho</h3>
          <ul className="flex flex-col gap-5">
            {sozinho.map((t) => (
              <li key={t} className="flex items-start gap-3 text-lg text-[#4A6478]">
                <Minus className="mt-1 h-5 w-5 shrink-0" /> {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex flex-col gap-6 overflow-hidden rounded-3xl bg-deep p-8 text-white shadow-[0_40px_80px_-30px_rgba(0,51,78,0.6)] sm:p-10 lg:-my-6"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/60 blur-3xl" />
          <h3 className="relative text-lg font-semibold uppercase tracking-[0.15em] text-sky-soft">Com a FBS Prime</h3>
          <ul className="relative flex flex-col gap-5">
            {comFbs.map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.12 }}
                className="flex items-start gap-3 text-lg"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky">
                  <Check className="h-4 w-4 text-deep" />
                </span>
                {t}
              </motion.li>
            ))}
          </ul>
          <button
            onClick={() => scrollToId("simular")}
            className="group relative mt-2 inline-flex items-center gap-2 self-start rounded-2xl bg-white px-6 py-4 font-bold text-deep transition hover:bg-sky-soft"
          >
            Comparar no meu caso
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>

      <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {solucoes.map((s, i) => (
          <Reveal key={s.t} delay={i * 0.08}>
            <div className="group h-full rounded-2xl border border-[#DCE3EA] bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-brand hover:shadow-[0_20px_40px_-20px_rgba(1,91,150,0.45)]">
              <span className="font-serif text-lg font-bold text-sky">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-bold text-deep">{s.t}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink">{s.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
