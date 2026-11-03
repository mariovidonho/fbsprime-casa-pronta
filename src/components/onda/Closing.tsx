import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Reveal, Wave, scrollToId, whatsappLink, WhatsIcon } from "./shared";

export const CtaBand = () => (
  <section className="relative overflow-hidden bg-brand text-white">
    <div className="pointer-events-none absolute -left-20 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(81,154,196,0.45),transparent_70%)]" />
    <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 py-20 sm:px-6 sm:py-24 lg:flex-row lg:items-center lg:justify-between">
      <Reveal className="flex max-w-2xl flex-col gap-4">
        <h2 className="font-serif text-4xl font-bold leading-[1.1] sm:text-5xl">Já foi negado em outro lugar?</h2>
        <p className="text-lg leading-relaxed text-[#E1EDF5]">
          Uma negativa no banco não fecha todas as portas. Converse com um consultor e veja outras opções.
        </p>
      </Reveal>
      <Reveal delay={0.15} className="flex flex-wrap gap-3">
        <a
          href={whatsappLink("Olá! Já tive crédito negado e quero ver outras opções.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 text-lg font-bold text-deep transition hover:scale-[1.03] hover:bg-sky-soft"
        >
          <WhatsIcon /> Chamar no WhatsApp
        </a>
        <button
          onClick={() => scrollToId("simular")}
          className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/60 px-7 py-4 text-lg font-bold text-white transition hover:bg-white/10"
        >
          <ArrowUp className="h-5 w-5" /> Simular agora
        </button>
      </Reveal>
    </div>
  </section>
);

export const SiteFooter = () => (
  <footer id="contato" className="scroll-mt-20 bg-white">
    <Wave className="h-24 sm:h-32" bottomFill="#00334E" />
    <div className="bg-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-24 pt-10 sm:px-6 md:grid-cols-3 md:pb-12">
        <div className="flex flex-col gap-4">
          <img src="/brand/logo-branco.png" alt="FBS Prime" className="h-28 w-auto self-start" />
          <p className="max-w-xs text-sm leading-relaxed text-[#C9DBE8]">
            Correspondente bancário. A aprovação de crédito depende da análise do banco ou da administradora.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-[15px]">
          <strong className="mb-1 text-xs uppercase tracking-[0.2em] text-sky-soft">Fale com a gente</strong>
          <a className="hover:underline" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            Comercial · (11) 94070-0447
          </a>
          <span>Pós-venda · (11) 91491-1179</span>
          <span>Pós-venda · (11) 97054-1325</span>
          <a className="hover:underline" href="mailto:fbsprime20@gmail.com">
            fbsprime20@gmail.com
          </a>
        </div>
        <div className="flex flex-col gap-2 text-[15px] leading-relaxed">
          <strong className="mb-1 text-xs uppercase tracking-[0.2em] text-sky-soft">Visite</strong>
          <span>
            R. Seike Saito, 511 · Jardim Currupira
            <br />
            Jundiaí - SP, 13214-077
          </span>
          <a href="/privacidade.html" className="underline">
            Política de Privacidade
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-[#B9D3E5]">
        © {new Date().getFullYear()} FBS Prime. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

/** WhatsApp flutuante no desktop e barra fixa no celular, que aparecem depois do hero. */
export const StickyActions = () => {
  const [mostrar, setMostrar] = useState(false);
  useEffect(() => {
    const f = () => setMostrar(window.scrollY > window.innerHeight * 0.8);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <AnimatePresence>
      {mostrar && (
        <>
          <motion.a
            key="wa"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar no WhatsApp"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50 hidden h-16 w-16 items-center justify-center rounded-full bg-brand text-white shadow-[0_14px_34px_-10px_rgba(0,51,78,0.8)] transition hover:scale-110 md:flex"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-brand/40" />
            <WhatsIcon className="relative h-8 w-8" />
          </motion.a>
          <motion.div
            key="bar"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-white/10 bg-deep/95 p-3 backdrop-blur md:hidden"
          >
            <button
              onClick={() => scrollToId("simular")}
              className="flex-1 rounded-xl bg-white py-3.5 text-base font-bold text-deep"
            >
              Simular grátis
            </button>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar no WhatsApp"
              className="flex w-14 items-center justify-center rounded-xl bg-brand text-white"
            >
              <WhatsIcon className="h-6 w-6" />
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
