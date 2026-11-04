import { useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CAMINHOS, type CaminhoId } from "./caminhos";
import { HERO_POSTER, HERO_VIDEO, Wave, scrollToId } from "./shared";

// Headline da proposta C. "|" quebra a linha; a última palavra fica em destaque.
const titulo = ["Qual", "é", "o", "seu", "momento?", "|", "A", "gente", "mostra", "o", "caminho."];
const destaque = "caminho.";

type Props = { caminho: CaminhoId; onCaminho: (c: CaminhoId) => void };

export const Hero = ({ caminho, onCaminho }: Props) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  const conteudoY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const atual = CAMINHOS.find((c) => c.id === caminho) ?? CAMINHOS[0];

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-deep text-white">
      {/* Vídeo de fundo */}
      <motion.div style={{ scale: videoScale }} className="absolute inset-0 -z-20">
        <video
          className="h-full w-full object-cover"
          src={HERO_VIDEO}
          poster={HERO_POSTER}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,51,78,0.82)_0%,rgba(0,51,78,0.9)_55%,rgba(0,51,78,0.97)_100%)]" />

      <motion.div style={{ y: conteudoY }} className="mx-auto flex max-w-7xl flex-col gap-10 px-4 pb-44 pt-32 sm:px-6 lg:pt-40">
        {/* Título */}
        <div className="flex max-w-6xl flex-col gap-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="self-start rounded-full bg-sky-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-deep"
          >
            Atendimento em Jundiaí e região
          </motion.span>

          <h1 className="font-serif text-[2.6rem] font-bold leading-[1.06] sm:text-6xl xl:text-7xl">
            {titulo.map((p, i) =>
              p === "|" ? (
                <br key={i} />
              ) : (
                <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
                  <motion.span
                    className={`inline-block ${p === destaque ? "text-sky-soft" : ""}`}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {p}&nbsp;
                  </motion.span>
                </span>
              )
            )}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="max-w-2xl text-lg leading-relaxed text-[#D3E3EE] sm:text-xl"
          >
            Escolha a situação mais parecida com a sua e veja como a FBS Prime pode ajudar.
          </motion.p>
        </div>

        {/* As 4 situações */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4" role="radiogroup" aria-label="Qual é o seu momento?">
          {CAMINHOS.map((c, i) => {
            const ativo = c.id === caminho;
            return (
              <motion.button
                key={c.id}
                type="button"
                role="radio"
                aria-checked={ativo}
                onClick={() => onCaminho(c.id)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className={`flex min-h-[132px] flex-col justify-between gap-4 rounded-2xl border-2 p-4 text-left transition-colors duration-300 sm:min-h-[150px] sm:p-6 ${
                  ativo
                    ? "border-white bg-white text-deep shadow-[0_24px_50px_-20px_rgba(0,0,0,0.6)]"
                    : "border-white/20 bg-white/[0.07] text-white backdrop-blur hover:border-white/50 hover:bg-white/[0.12]"
                }`}
              >
                <span className={`text-[11px] font-bold uppercase tracking-[0.12em] sm:text-xs ${ativo ? "text-brand" : "text-sky-soft"}`}>
                  {c.situacao}
                </span>
                <span className="font-serif text-lg font-bold leading-tight sm:text-2xl">{c.titulo}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Detalhe do caminho escolhido */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-3xl bg-white text-deep shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={atual.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-8 p-6 sm:p-10 lg:flex-row lg:gap-12"
            >
              <div className="flex flex-[2] flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-brand">Indicado para você</span>
                <h2 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">{atual.titulo}</h2>
                <p className="text-base leading-relaxed text-ink sm:text-lg">{atual.texto}</p>
              </div>
              <dl className="flex flex-1 flex-col gap-4">
                <div className="border-b border-[#E3E8ED] pb-3">
                  <dt className="text-xs font-semibold text-[#4A6478]">Entrada</dt>
                  <dd className="text-lg font-semibold">{atual.entrada}</dd>
                </div>
                <div className="border-b border-[#E3E8ED] pb-3">
                  <dt className="text-xs font-semibold text-[#4A6478]">Quando você compra</dt>
                  <dd className="text-lg font-semibold">{atual.quando}</dd>
                </div>
                <button
                  onClick={() => scrollToId("simular")}
                  className="group mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-4 text-base font-bold text-white transition hover:bg-deep"
                >
                  Simular este caminho
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </dl>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <Wave className="absolute inset-x-0 -bottom-px h-28 sm:h-40" />
    </section>
  );
};
