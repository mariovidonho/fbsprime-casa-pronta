import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Eyebrow, Reveal, track, whatsappLink, WhatsIcon } from "./shared";

const perguntas = [
  {
    p: "Não tenho o valor da entrada. Ainda assim dá?",
    r: "Em muitos casos, sim. Consórcio e carta contemplada têm regras de entrada diferentes do financiamento tradicional. Na simulação mostramos as opções lado a lado para você ver qual exige menos no começo.",
  },
  {
    p: "Tenho medo de não conseguir pagar as parcelas.",
    r: "Por isso a conversa começa pela parcela que cabe no seu mês, e não pelo valor do imóvel. O consultor monta o plano a partir da sua renda e mostra o custo total antes de qualquer assinatura.",
  },
  {
    p: "Minha renda é baixa. Vocês atendem meu perfil?",
    r: "Atendemos perfis de renda bem diferentes, incluindo autônomos e aposentados. Cada caminho tem suas regras, e parte do nosso trabalho é encontrar o que se encaixa na sua realidade.",
  },
  {
    p: "Já tive crédito negado em outro lugar. Adianta tentar?",
    r: "Uma negativa em um banco não fecha todas as portas. Outros bancos, o consórcio ou a carta contemplada podem ter critérios diferentes. Vale conversar e entender o motivo da negativa.",
  },
  {
    p: "A simulação tem algum custo?",
    r: "Não. A simulação é gratuita e sem compromisso. Você só segue adiante se uma das opções fizer sentido para você.",
  },
  {
    p: "Quem aprova o crédito?",
    r: "A FBS Prime é correspondente bancário: preparamos e acompanhamos o seu processo, mas a aprovação final é sempre do banco ou da administradora do consórcio.",
  },
];

export const Faq = () => (
  <section id="duvidas" className="scroll-mt-20 bg-white">
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 sm:py-32 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <Reveal className="flex flex-col gap-5 lg:sticky lg:top-28 lg:self-start">
        <Eyebrow>Perguntas frequentes</Eyebrow>
        <h2 className="font-serif text-4xl font-bold leading-[1.1] text-deep sm:text-5xl">Perguntas que todo mundo faz.</h2>
        <p className="text-lg leading-relaxed text-ink">Se a sua não estiver aqui, chame no WhatsApp. Uma pessoa responde.</p>
        <a
          href={whatsappLink("Olá! Tenho uma dúvida sobre a compra de imóveis em Jundiaí e região.")}
          target="_blank"
          onClick={() => track("whatsapp_click", { local: "faq" })}
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-start rounded-2xl border-2 border-deep px-5 py-3 font-bold text-deep transition hover:bg-deep hover:text-white"
        >
          <WhatsIcon /> Tirar minha dúvida
        </a>
      </Reveal>

      <Reveal delay={0.1}>
        <Accordion type="single" collapsible defaultValue="item-0" className="flex flex-col gap-3">
          {perguntas.map((q, i) => (
            <AccordionItem
              key={q.p}
              value={`item-${i}`}
              className="rounded-2xl border border-[#DCE3EA] bg-paper px-6 transition data-[state=open]:border-brand data-[state=open]:bg-white data-[state=open]:shadow-[0_20px_40px_-24px_rgba(1,91,150,0.5)]"
            >
              <AccordionTrigger className="py-5 text-left text-lg font-semibold text-deep hover:no-underline">
                {q.p}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-ink">{q.r}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);
