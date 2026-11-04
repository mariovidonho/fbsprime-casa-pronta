import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

// Contatos e mídia num só lugar
export const WHATSAPP_COMERCIAL = "5511940700447";
export const whatsappLink = (texto = "Olá! Vim pelo site e quero fazer uma simulação.") =>
  `https://wa.me/${WHATSAPP_COMERCIAL}?text=${encodeURIComponent(texto)}`;

// Vídeo do hero (Pexels, licença livre: "A Realtor Giving Keys to a Couple", id 7646764).
// Para produção, o ideal é hospedar o arquivo em /public/video/hero.mp4 e trocar aqui.
export const HERO_VIDEO =
  "https://videos.pexels.com/video-files/7646764/7646764-hd_1920_1080_25fps.mp4";
/** Caminho de arquivos da pasta public, respeitando a base do build (permite publicar em subpastas). */
export const asset = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\//, "")}`;

/** Versão de demonstração: o formulário não envia nada ao Make. */
export const MODO_DEMO = import.meta.env.VITE_DEMO === "1";

export const HERO_POSTER = asset("clientes/cliente-01.jpg");

export const CLIENT_IMAGES = [
  "/clientes/cliente-01.jpg",
  "/clientes/cliente-02.jpg",
  "/clientes/cliente-03.jpg",
  "/clientes/cliente-05.jpg",
  "/clientes/cliente-06.jpg",
  "/clientes/cliente-07.jpg",
  "/clientes/cliente-08.jpg",
  "/clientes/cliente-09.jpg",
  "/clientes/cliente-10.jpg",
  "/clientes/cliente-11.jpg",
  "/clientes/cliente-15.jpg",
  "/clientes/cliente-12.jpg",
  "/clientes/cliente-13.jpg",
].map(asset);

/**
 * Envia um evento ao Google Tag Manager (dataLayer).
 * Eventos: whatsapp_click {local}, simulador_interacao, simulador_enviar, lead_enviado.
 */
export const track = (event: string, params: Record<string, unknown> = {}) => {
  const w = window as unknown as { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
};

export const scrollToId = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

/** Aparece suavemente quando entra na tela. */
export const Reveal = ({
  children,
  delay = 0,
  y = 40,
  ...rest
}: { children: ReactNode; delay?: number; y?: number } & HTMLMotionProps<"div">) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    {...rest}
  >
    {children}
  </motion.div>
);

export const WhatsIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.06c-.24.68-1.42 1.3-1.95 1.35-.5.05-.97.23-3.28-.68-2.78-1.1-4.55-3.95-4.69-4.13-.13-.18-1.12-1.49-1.12-2.84 0-1.35.71-2.02.96-2.29.25-.27.55-.34.73-.34h.52c.17 0 .4-.06.62.48.24.56.8 1.94.87 2.08.07.14.12.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.28-.12.56.16.27.71 1.17 1.52 1.9 1.05.93 1.93 1.22 2.2 1.36.27.14.43.11.59-.07.16-.18.68-.8.86-1.07.18-.27.36-.23.61-.14.25.09 1.6.75 1.87.89.27.14.45.2.52.32.07.11.07.66-.17 1.33z" />
  </svg>
);

/** A onda do manual: camadas sky / brand / deep com fios brancos. */
export const Wave = ({
  className = "",
  bottomFill = "#FFFFFF",
}: {
  className?: string;
  bottomFill?: string;
}) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 1440 180"
    preserveAspectRatio="none"
    className={`block w-full ${className}`}
  >
    <path className="wave-a" d="M0 70 C 300 150, 700 0, 1040 80 S 1440 120, 1440 120 L1440 180 L0 180 Z" fill="#519AC4" />
    <path d="M0 98 C 320 168, 720 36, 1060 106 S 1440 140, 1440 140 L1440 180 L0 180 Z" fill="#FFFFFF" />
    <path className="wave-b" d="M0 103 C 320 173, 720 41, 1060 111 S 1440 145, 1440 145 L1440 180 L0 180 Z" fill="#015B96" />
    <path d="M0 132 C 340 186, 740 86, 1080 140 S 1440 158, 1440 158 L1440 180 L0 180 Z" fill="#FFFFFF" />
    <path d="M0 137 C 340 191, 740 91, 1080 145 S 1440 163, 1440 163 L1440 180 L0 180 Z" fill={bottomFill} />
  </svg>
);

export const Eyebrow = ({ children, dark = false }: { children: ReactNode; dark?: boolean }) => (
  <span
    className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] ${
      dark ? "text-sky-soft" : "text-brand"
    }`}
  >
    <span className={`h-px w-8 ${dark ? "bg-sky-soft" : "bg-brand"}`} />
    {children}
  </span>
);
