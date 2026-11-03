import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { HeroForm } from "./HeroForm";
import { HERO_POSTER, HERO_VIDEO, Wave, scrollToId } from "./shared";

const titulo = ["Sua", "casa", "própria", "começa", "com", "uma", "entrada", "que", "cabe."];

export const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  const conteudoY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const conteudoOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative isolate min-h-[100svh] overflow-hidden bg-deep text-white">
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
      {/* Camada azul da marca por cima do vídeo */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(0,51,78,0.95)_0%,rgba(0,51,78,0.78)_45%,rgba(1,91,150,0.35)_100%)]" />

      <motion.div
        style={{ y: conteudoY, opacity: conteudoOpacity }}
        className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-48 pt-32 sm:px-6 lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:pt-40"
      >
        <div className="flex flex-col gap-7">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="self-start rounded-full bg-sky-soft px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-deep"
          >
            Atendimento em Jundiaí e região
          </motion.span>

          <h1 className="font-serif text-[2.6rem] font-bold leading-[1.04] sm:text-6xl xl:text-7xl">
            {titulo.map((p, i) => (
              <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
                <motion.span
                  className={`inline-block ${p === "cabe." ? "text-sky-soft" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  {p}&nbsp;
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="max-w-xl text-lg leading-relaxed text-[#D3E3EE] sm:text-xl"
          >
            Comparamos financiamento, consórcio e carta contemplada para encontrar o caminho com a menor
            entrada possível para o seu perfil.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="flex flex-wrap gap-x-7 gap-y-3 text-[15px] text-[#D3E3EE]"
          >
            {["Simulação gratuita", "Resposta em até 24 h", "Consultor dedicado"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-soft/20">
                  <Check className="h-3.5 w-3.5 text-sky-soft" />
                </span>
                {t}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroForm />
        </motion.div>
      </motion.div>

      <button
        onClick={() => scrollToId("numeros")}
        className="absolute bottom-36 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs font-medium uppercase tracking-[0.2em] text-white/70 lg:flex"
        aria-label="Rolar para baixo"
      >
        Role
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </button>

      <Wave className="absolute inset-x-0 -bottom-px h-28 sm:h-40" />
    </section>
  );
};
