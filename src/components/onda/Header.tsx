import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { asset, scrollToId, whatsappLink, WhatsIcon } from "./shared";

const links = [
  { id: "solucoes", label: "Soluções" },
  { id: "clientes", label: "Clientes" },
  { id: "duvidas", label: "Dúvidas" },
  { id: "contato", label: "Contato" },
];

export const Header = () => {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid || open ? "bg-deep/95 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)] backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
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
    </header>
  );
};
