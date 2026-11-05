import { useCallback, useEffect, useState } from "react";
import { motion, type PanInfo } from "framer-motion";
import { BadgeCheck, ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { CLIENT_IMAGES, Eyebrow, Reveal, scrollToId } from "./shared";

/**
 * DEPOIMENTOS REAIS de clientes da FBS Prime (enviados pela FBS em 05/11/2026).
 * `real: true` mostra a etiqueta "Cliente real" no cartão.
 */

const depoimentos = [
  {
    real: true,
    nome: "Edson Silva",
    profissao: "Operador de Máquinas",
    cidade: "Campo Limpo Paulista - SP",
    texto:
      "Eu sempre achei que comprar uma casa era coisa de gente que ganhava muito bem. Nunca nem fui atrás porque tinha certeza de que não conseguiria. Um dia resolvi tentar, mais por curiosidade mesmo, e acabou sendo uma das melhores decisões que tomei. Hoje tenho a condição que há um ano achava impossível.",
  },
  {
    real: true,
    nome: "Mariza Arruda",
    profissao: "Autônoma",
    cidade: "Itupeva - SP",
    texto:
      "O que mais cansava era pagar aluguel todo mês e saber que aquele dinheiro nunca seria nosso. A gente queria muito ter um cantinho próprio, principalmente por causa dos nossos filhos. Fomos atendidos com muita paciência e finalmente conseguimos enxergar um caminho para realizar esse sonho.",
  },
  {
    real: true,
    nome: "Lúcio Saldanha",
    profissao: "Autônomo",
    cidade: "Várzea Paulista - SP",
    texto:
      "Quem trabalha por conta própria sabe como é difícil comprovar renda. Tem mês que entra mais, tem mês que entra menos, e parece que os bancos não entendem muito bem essa realidade. Gostei porque não me trataram como apenas mais um número. Ouviram minha situação e me explicaram o que poderia ser feito.",
  },
  {
    real: true,
    nome: "Janira Mariana",
    profissao: "Fisioterapeuta",
    cidade: "Vinhedo - SP",
    texto:
      "Vou ser sincera, fiquei com bastante receio no começo. Hoje em dia a gente vê tanta coisa na internet que acaba desconfiando de tudo. Mas fui conversando, tirando minhas dúvidas e entendendo como funcionava. O que me deixou mais tranquila foi ter alguém disposto a explicar as coisas sem ficar me pressionando.",
  },
  {
    real: true,
    nome: "Célia de Nazaré",
    profissao: "Supervisora de Estoque",
    cidade: "Várzea Paulista - SP",
    texto:
      "Eu e meu marido já conversávamos sobre ter nossa casa há bastante tempo, mas sempre aparecia alguma coisa e acabávamos deixando para depois. Quando conhecemos a FBS, decidimos pelo menos entender as possibilidades. Foi muito bom perceber que talvez não precisássemos esperar tantos anos para começar a realizar esse sonho.",
  },
  {
    real: true,
    nome: "Ronaldo Fadel",
    profissao: "Professor",
    cidade: "Jundiaí - SP",
    texto:
      "Depois de algumas tentativas frustradas, eu já tinha colocado na cabeça que não conseguiria comprar minha casa. Nem queria mais tocar no assunto. Mas resolvi dar mais uma chance. Não foi tudo do dia para a noite, tive que entender algumas etapas, mas fui bem orientado durante o processo. Só quem já passou por isso sabe o quanto significa voltar a ter esperança.",
  },
];

const n = CLIENT_IMAGES.length;

export const Clients = () => {
  const [ativo, setAtivo] = useState(0);
  const [pausado, setPausado] = useState(false);

  const ir = useCallback((d: number) => setAtivo((a) => (a + d + n) % n), []);

  useEffect(() => {
    if (pausado) return;
    const t = setInterval(() => ir(1), 3500);
    return () => clearInterval(t);
  }, [pausado, ir]);

  const aoSoltar = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60 || info.velocity.x < -400) ir(1);
    else if (info.offset.x > 60 || info.velocity.x > 400) ir(-1);
  };

  return (
    <section id="clientes" className="relative scroll-mt-20 overflow-hidden bg-deep text-white">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand/40 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 pt-24 sm:px-6 sm:pt-32">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <Eyebrow dark>Clientes reais</Eyebrow>
          <h2 className="font-serif text-4xl font-bold leading-[1.1] sm:text-5xl">Você pode ser o próximo.</h2>
          <p className="text-lg leading-relaxed text-[#D3E3EE]">
            Professores, enfermeiras, autônomos, aposentados. Perfis diferentes, cada um com o seu caminho.
          </p>
          <button
            onClick={() => scrollToId("simular")}
            className="mt-1 rounded-2xl bg-white px-6 py-3.5 text-base font-bold text-deep transition hover:scale-[1.03] hover:bg-sky-soft"
          >
            Quero ser o próximo
          </button>
        </Reveal>
      </div>

      {/* Carrossel em leque, arrastável */}
      <div
        className="relative mt-14 h-[440px] select-none sm:h-[520px]"
        onMouseEnter={() => setPausado(true)}
        onMouseLeave={() => setPausado(false)}
        role="region"
        aria-roledescription="carrossel"
        aria-label="Fotos de clientes da FBS Prime"
      >
        <motion.div
          className="absolute inset-0 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragStart={() => setPausado(true)}
          onDragEnd={aoSoltar}
          style={{ perspective: 1400 }}
        >
          {CLIENT_IMAGES.map((src, i) => {
            let off = i - ativo;
            if (off > n / 2) off -= n;
            if (off < -n / 2) off += n;
            const abs = Math.abs(off);
            const visivel = abs <= 3;
            return (
              <motion.button
                key={src}
                type="button"
                onClick={() => setAtivo(i)}
                aria-label={`Foto ${i + 1} de ${n}`}
                aria-current={off === 0}
                tabIndex={visivel ? 0 : -1}
                className="absolute left-1/2 top-1/2 h-[380px] w-[270px] -ml-[135px] -mt-[190px] overflow-hidden rounded-3xl shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] sm:h-[460px] sm:w-[330px] sm:-ml-[165px] sm:-mt-[230px]"
                animate={{
                  x: off * 230,
                  scale: 1 - Math.min(abs, 3) * 0.13,
                  rotateY: off * -18,
                  opacity: visivel ? 1 - abs * 0.18 : 0,
                  zIndex: 20 - abs,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 28 }}
                style={{ pointerEvents: visivel ? "auto" : "none" }}
              >
                <img src={src} alt="" draggable={false} className="h-full w-full object-cover" loading="lazy" />
                <motion.span
                  className="absolute inset-0 bg-deep"
                  animate={{ opacity: off === 0 ? 0 : 0.35 }}
                />
              </motion.button>
            );
          })}
        </motion.div>

        <button
          onClick={() => ir(-1)}
          aria-label="Foto anterior"
          className="absolute left-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-deep shadow-lg transition hover:bg-sky-soft sm:left-8"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => ir(1)}
          aria-label="Próxima foto"
          className="absolute right-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-deep shadow-lg transition hover:bg-sky-soft sm:right-8"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="relative mt-6 flex justify-center gap-2" aria-hidden="true">
        {CLIENT_IMAGES.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === ativo ? "w-8 bg-white" : "w-1.5 bg-white/35"}`}
          />
        ))}
      </div>

      {/* Depoimentos */}
      <div className="relative mx-auto grid max-w-6xl gap-6 px-4 pb-24 pt-20 sm:px-6 sm:pb-32 md:grid-cols-2 lg:grid-cols-3">
        {depoimentos.map((d, i) => (
          <Reveal key={d.nome} delay={(i % 3) * 0.1}>
            <figure className="flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/[0.1]">
              <div className="flex items-center justify-between">
                <div className="flex gap-1" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-sky-soft text-sky-soft" />
                  ))}
                </div>
                <Quote className="h-7 w-7 text-sky/60" />
              </div>
              <blockquote className="flex-1 font-serif text-lg leading-relaxed">“{d.texto}”</blockquote>
              <figcaption className="text-sm">
                <strong className="block text-base">{d.nome}</strong>
                <span className="text-[#B9D3E5]">
                  {d.profissao} · {d.cidade}
                </span>
                {d.real && (
                  <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-sky-soft/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-sky-soft">
                    <BadgeCheck className="h-3 w-3" /> Cliente real
                  </span>
                )}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
