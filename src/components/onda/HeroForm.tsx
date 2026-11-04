import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Loader2, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { asset, MODO_DEMO, track, whatsappLink, WhatsIcon } from "./shared";

const WEBHOOK = "https://hook.us2.make.com/6ajtjv40petejbmlxoedaludgbv027p5";

type Dados = {
  nome: string;
  telefone: string;
  email: string;
  valorImovel: string;
  valorEntrada: string;
  valorMensal: string;
};

const vazio: Dados = { nome: "", telefone: "", email: "", valorImovel: "", valorEntrada: "", valorMensal: "" };

const inputCls =
  "w-full rounded-xl border border-[#B9C7D3] bg-white px-4 py-3.5 text-base text-deep placeholder:text-[#7D93A5] outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/15";

const formatarTelefone = (v: string) => {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
};

const formatarMoeda = (v: string) => {
  const d = v.replace(/\D/g, "");
  if (!d) return "";
  return "R$ " + Number(d).toLocaleString("pt-BR");
};

type Props = {
  caminho?: string;
  /** Valores vindos do simulador, que preenchem o passo 2. */
  prefill?: Pick<Dados, "valorImovel" | "valorEntrada" | "valorMensal">;
  /** Dados extras enviados junto ao Make (renda, prazo etc.). */
  extra?: Record<string, string>;
};

export const HeroForm = ({ caminho, prefill, extra }: Props) => {
  const { toast } = useToast();
  const [passo, setPasso] = useState<1 | 2 | 3>(1);
  const [dados, setDados] = useState<Dados>(vazio);
  const [enviando, setEnviando] = useState(false);

  useEffect(() => {
    if (prefill) setDados((d) => ({ ...d, ...prefill }));
  }, [prefill]);

  const condicoes = [
    dados.valorImovel ? `Valor do imóvel: ${dados.valorImovel}` : "",
    dados.valorEntrada ? `Entrada: ${dados.valorEntrada}` : "",
    dados.valorMensal ? `Parcela ideal: ${dados.valorMensal}` : "",
  ].filter(Boolean);

  const mensagemWhats = [
    `Olá! Sou ${dados.nome || "cliente"} e gostaria de saber mais sobre a compra de imóveis em Jundiaí e região.`,
    ...(condicoes.length ? ["", "Essas seriam as minhas condições:", ...condicoes] : []),
  ].join("\n");

  const set = (k: keyof Dados, v: string) => setDados((d) => ({ ...d, [k]: v }));

  const avancar = (e: React.FormEvent) => {
    e.preventDefault();
    setPasso(2);
  };

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    if (MODO_DEMO) {
      // Demonstração para a equipe: simula o envio sem gerar lead no Make.
      await new Promise((r) => setTimeout(r, 700));
      setEnviando(false);
      setPasso(3);
      return;
    }
    try {
      const r = await fetch(WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...dados,
          ...extra,
          localizacao: "",
          caminho: caminho ?? "",
          timestamp: new Date().toISOString(),
          source: "Landing Page FBS Prime",
        }),
      });
      if (!r.ok) throw new Error("Erro no envio");
      track("lead_enviado", { caminho: caminho ?? "" });
      setPasso(3);
    } catch {
      toast({
        title: "Não foi possível enviar",
        description: "Tente de novo ou fale com a gente pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-3xl bg-white p-6 text-deep shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] sm:p-8"
    >
      {/* Barra de progresso */}
      {passo < 3 && (
        <div className="mb-6 flex items-center gap-3">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-paper">
            <motion.div
              className="h-full rounded-full bg-brand"
              animate={{ width: passo === 1 ? "50%" : "100%" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
          <span className="text-xs font-semibold text-ink">Passo {passo} de 2</span>
        </div>
      )}

      <>
        {passo === 1 && (
          <motion.form
            key="p1"
            onSubmit={avancar}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4"
          >
            <div>
              <h2 className="font-serif text-3xl font-bold leading-tight">Simule agora</h2>
              <p className="mt-1 text-sm text-ink">Dois minutos. Sem compromisso.</p>
              {caminho && (
                <p className="mt-3 inline-flex rounded-full bg-paper px-3 py-1.5 text-xs font-semibold text-brand">
                  Caminho escolhido: {caminho}
                </p>
              )}
            </div>
            <label className="flex flex-col gap-2 text-sm font-semibold">
              Nome
              <input className={inputCls} required autoComplete="name" placeholder="Seu nome" value={dados.nome} onChange={(e) => set("nome", e.target.value)} />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold">
              WhatsApp
              <input
                className={inputCls}
                required
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="(11) 90000-0000"
                pattern="\(\d{2}\) \d{4,5}-\d{4}"
                title="Informe DDD e número"
                value={dados.telefone}
                onChange={(e) => set("telefone", formatarTelefone(e.target.value))}
              />
            </label>
            <button className="group mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-4 text-base font-bold text-white transition hover:bg-deep">
              Quero minha simulação
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.form>
        )}

        {passo === 2 && (
          <motion.form
            key="p2"
            onSubmit={enviar}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4"
          >
            <div>
              <h2 className="font-serif text-2xl font-bold leading-tight">
                Quase lá, {dados.nome.split(" ")[0] || "tudo certo"}.
              </h2>
              <p className="mt-1 text-sm text-ink">Com esses números o consultor já chega com as opções.</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex flex-col gap-2 text-sm font-semibold">
                Valor do imóvel
                <input className={inputCls} required inputMode="numeric" placeholder="R$ 300.000" value={dados.valorImovel} onChange={(e) => set("valorImovel", formatarMoeda(e.target.value))} />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold">
                Parcela ideal
                <input className={inputCls} required inputMode="numeric" placeholder="R$ 2.000" value={dados.valorMensal} onChange={(e) => set("valorMensal", formatarMoeda(e.target.value))} />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm font-semibold">
              Entrada disponível <span className="-mt-1 text-xs font-normal text-ink">opcional</span>
              <input className={inputCls} inputMode="numeric" placeholder="R$ 30.000" value={dados.valorEntrada} onChange={(e) => set("valorEntrada", formatarMoeda(e.target.value))} />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold">
              E-mail
              <input className={inputCls} required type="email" autoComplete="email" placeholder="seu@email.com" value={dados.email} onChange={(e) => set("email", e.target.value)} />
            </label>
            <div className="mt-1 flex gap-3">
              <button
                type="button"
                onClick={() => setPasso(1)}
                className="rounded-2xl border border-[#B9C7D3] px-4 text-deep transition hover:bg-paper"
                aria-label="Voltar"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                disabled={enviando}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-4 text-base font-bold text-white transition hover:bg-deep disabled:opacity-70"
              >
                {enviando ? <Loader2 className="h-5 w-5 animate-spin" /> : null}
                {enviando ? "Enviando..." : "Receber minha simulação"}
              </button>
            </div>
          </motion.form>
        )}

        {passo === 3 && (
          <motion.div
            key="p3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 py-8 text-center"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 15, delay: 0.1 }}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white"
            >
              <Check className="h-8 w-8" />
            </motion.span>
            <h2 className="font-serif text-3xl font-bold">Simulação recebida!</h2>
            <p className="max-w-xs text-ink">
              Um consultor vai chamar você no WhatsApp em até 24 horas com as opções para o seu perfil.
            </p>
            <a
              href={whatsappLink(mensagemWhats)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("whatsapp_click", { local: "pos_simulacao" })}
              className="mt-2 inline-flex items-center gap-2 rounded-2xl bg-brand px-6 py-4 font-bold text-white transition hover:bg-deep"
            >
              <WhatsIcon /> Quero falar agora no WhatsApp
            </a>
            <span className="text-xs text-ink">A mensagem já vai com os dados da sua simulação.</span>
          </motion.div>
        )}
      </>

      {passo < 3 && (
        <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-ink">
          <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          <span>
            Seus dados são usados só para o contato sobre a simulação, conforme a LGPD.{" "}
            <a href={asset("privacidade.html")} className="underline">
              Política de Privacidade
            </a>
          </span>
        </p>
      )}
    </div>
  );
};
