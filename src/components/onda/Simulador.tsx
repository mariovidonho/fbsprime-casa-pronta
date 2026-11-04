import { Check } from "lucide-react";
import { HeroForm } from "./HeroForm";
import { CAMINHOS, type CaminhoId } from "./caminhos";
import { Eyebrow, Reveal } from "./shared";

/**
 * Seção do simulador. Por enquanto traz o formulário de simulação;
 * é aqui que vai entrar o simulador de mercado (bancos x FBS) que estamos desenhando.
 */
export const Simulador = ({ caminho }: { caminho: CaminhoId }) => {
  const atual = CAMINHOS.find((c) => c.id === caminho) ?? CAMINHOS[0];

  return (
    <section id="simular" className="scroll-mt-20 bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-24 pt-10 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-16">
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
            <HeroForm caminho={atual.produto} />
          </div>
        </Reveal>
      </div>
    </section>
  );
};
