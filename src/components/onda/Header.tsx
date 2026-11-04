import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { asset, scrollToId, track, whatsappLink, WhatsIcon } from "./shared";

const links = [
  { id: "solucoes", label: "Soluções" },
  { id: "clientes", label: "Clientes" },
  { id: "duvidas", label: "Dúvidas" },
  { id: "contato", label: "Contato" },
];

export const Header = () => {
  const [flutuante, setFlutuante] = useState(false);
  const [escondido, setEscondido] = useState(false);
  const [open, setOpen] = useState(false);
  const ultimoY = useRef(0);

  // No topo: barra transparente sobre o vídeo.
  // Ao rolar: cápsula flutuante, que some ao descer e volta ao subir.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setFlutuante(y > 40);
      const delta = y - ultimoY.current;
      if (Math.abs(delta) > 6) {
        setEscondido(delta > 0 && y > 320);
        ultimoY.current = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  const ativo = flutuante || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${ativo ? "px-3 pt-3 sm:px-6" : "px-0 pt-0"} ${
        escondido && !open ? "-translate-y-[130%]" : "translate-y-0"
      }`}
    >
      <div
        className={`mx-auto transition-all duration-500 ease-out ${
          ativo
            ? "max-w-6xl rounded-2xl border border-white/10 bg-deep/85 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.65)] backdrop-blur-md"
            : "max-w-7xl border border-transparent bg-transparent"
        }`}
      >
      <div className={`flex items-center justify-between gap-4 px-4 transition-all duration-500 sm:px-6 ${ativo ? "py-2.5" : "py-3"}`}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 text-white"
          aria-label="FBS Prime, voltar ao topo"
        >
          <img src={asset("brand/simbolo-branco.png")} alt="" className="h-10 w-auto" />
          <span className="flex flex-col items-start leading-none">
            <span className="whitespace-nowrap font-serif text-xl font-bold tracking-wide">FBS Prime</span>
            <span className="mt-1 hidden text-[10px] font-semibold uppercase tracking-[0.25em] text-sky-soft sm:block">
              Jundiaí e região
            </span>
          </span>
        </button>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="text-sm font-medium text-white/85 transition-colors hover:text-white"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            onClick={() => track("whatsapp_click", { local: "cabecalho" })}
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-2xl border border-white/30 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 sm:inline-flex"
          >
            <WhatsIcon className="h-4 w-4" /> (11) 94070-0447
          </a>
          <button
            onClick={() => go("simular")}
            className="whitespace-nowrap rounded-2xl bg-white px-4 py-2.5 text-sm font-bold text-deep transition hover:bg-sky-soft sm:px-5"
          >
            Simular grátis
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="rounded-xl p-2 text-white lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Menu móvel" className="border-t border-white/10 px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="block w-full py-3 text-left text-base font-medium text-white"
            >
              {l.label}
            </button>
          ))}
        </nav>
      )}
      </div>
    </header>
  );
};
