import {
  Trees,
  Home,
  Wifi,
  Flame,
  Mountain,
  Bath,
  BedDouble,
  ChefHat,
  Sun,
  Fish,
  Baby,
  Waves,
  Thermometer,
  Snowflake,
  Droplets,
  Info,
  X,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { IMAGES } from "../../data";
import React, { useEffect, useState } from "react";

type ChaleDetail = { icon: typeof Home; label: string };

type Chale = {
  albumId: string;
  tag: string;
  title: string;
  text: string;
  img: string;
  imgClass: string;
  details: ChaleDetail[];
};

const FEATURES = [
  { icon: Home, label: "2 chalés completos" },
  { icon: Trees, label: "Natureza preservada" },
  { icon: Flame, label: "Lareira" },
  { icon: ChefHat, label: "Cozinhas equipadas" },
  { icon: BedDouble, label: "Quartos aconchegantes" },
  { icon: Bath, label: "Banheiros privativos" },
  { icon: Fish, label: "Lago de carpas" },
  { icon: Wifi, label: "Wi-Fi gratuito" },
  { icon: Mountain, label: "Vista para a serra" },
  { icon: Baby, label: "Parquinho infantil" },
];

const CHALES: Chale[] = [
  {
    albumId: "chale1",
    tag: "A Casa de vidro",
    title: "Casa de vidro",
    text: "Luz natural durante todo o dia, teto de vidro, lustres, chao quente e uma jacuzzi para relaxar. Varanda pra floresta e cozinha completa para sua estadia.",
    img: IMAGES.casas,
    imgClass: "object-right scale-[1.4] origin-right group-hover:scale-[1.45]",
    details: [
      { icon: Waves, label: "Jacuzzi" },
      { icon: Thermometer, label: "Chão aquecido" },
      { icon: Snowflake, label: "Ar condicionado" },
    ],
  },
  {
    albumId: "chale2",
    tag: "A Casa do Javali",
    title: "Casa do Javali",
    text: "Casa rústica construída em pedra e troncos de árvores, com um ambiente amplo, cozinha completa e espaços pensados para reunir toda a família.",
    img: IMAGES.casaJavali,
    imgClass: "object-center group-hover:scale-105",
    details: [
      { icon: Droplets, label: "Água aquecida em todas as torneiras" },
      { icon: Flame, label: "Calefator" },
      { icon: ChefHat, label: "Sala ampla com cozinha e churrasqueira" },
      { icon: BedDouble, label: "3 quartos e 2 banheiros" },
    ],
  },
];

type SobreProps = {
  onSelectChale?: (albumId: string) => void;
};

export function Sobre({ onSelectChale }: SobreProps) {
  const [detail, setDetail] = useState<Chale | null>(null);

  return (
    <section id="sobre" className="scroll-mt-24 bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-18 md:px-10 lg:grid-cols-2 lg:gap-20 lg:py-24">
        <div className="flex flex-col justify-center">
          <span className="text-[12px] uppercase tracking-[0.32em] text-[color:var(--accent)]">
            Sobre a propriedade
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.1] text-primary">
            Em meio à natureza e à serra de Urubici
          </h2>
          <div className="mt-7 space-y-5 text-[16px] leading-relaxed text-muted-foreground">
            <p>
              Localizada na Estrada Geral da Jararaca, em Urubici, a propriedade
              reúne dois chalés independentes construídos em madeira, cercados
              por vegetação nativa e pelo silêncio das montanhas.
            </p>
            <p>
              São ambientes pensados para o conforto em qualquer estação — do
              calor da lareira no inverno serrano às manhãs de neblina que
              descem pelo vale. Os chalés contam com painéis solares, garantindo
              energia limpa e renovável o ano inteiro. Um lugar para morar, para
              investir ou para dar vida a uma pousada de charme.
            </p>
            <p>
              A estrutura já está pronta: acessos, parquinho, elétrodomésticos,
              área verde ampla, espaço para receber e uma natureza que se torna
              parte da casa.
            </p>
          </div>
        </div>

        <div className="relative">
          <ImageWithFallback
            src={IMAGES.sitio}
            alt="O sítio da Pousada do Javali cercado pela mata nativa e um céu lindo"
            className="h-[420px] w-full rounded-[2rem] object-cover shadow-xl lg:h-[560px]"
          />
          <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-2xl bg-primary p-6 text-primary-foreground shadow-2xl sm:block">
            <p className="mt-1 text-sm text-primary-foreground/75">
              Energia solar renovável
            </p>
          </div>
        </div>
      </div>

      <div className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-6 py-4 md:grid-cols-4 md:px-10">
          {FEATURES.map((f) => (
            <div key={f.label} className="flex items-center gap-3 px-2 py-5">
              <f.icon
                className="size-6 shrink-0 text-[color:var(--accent)]"
                strokeWidth={1.8}
              />
              <span className="text-sm  text-primary ">{f.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        id="chales"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-16 md:px-10 lg:py-18"
      >
        <div className="mb-14 max-w-2xl">
          <span className="text-[13px] uppercase tracking-[0.32em] text-[color:var(--accent)]">
            Os dois chalés
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] text-primary">
            Duas casas, uma paisagem.
          </h2>
        </div>

        <div className="grid gap-18 lg:grid-cols-2">
          {CHALES.map((c) => (
            <button
              key={c.albumId}
              type="button"
              onClick={() => {
                onSelectChale?.(c.albumId);
                document.getElementById("galeria")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="group block overflow-hidden rounded-[2rem] border border-border bg-card text-left shadow-sm transition-shadow hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]"
            >
              <div className="relative h-72 overflow-hidden bg-muted">
                <ImageWithFallback
                  src={c.img}
                  alt={`${c.title} — ${c.tag}`}
                  className={`size-full object-cover transition-transform duration-700 ${
                    c.imgClass ?? ""
                  }`}
                />
                <span className="absolute left-5 top-5 rounded-full bg-primary/90 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-primary-foreground backdrop-blur">
                  {c.tag}
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setDetail(c);
                  }}
                  aria-label={`Ver detalhes da ${c.title}`}
                  className="absolute right-4 top-5 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-primary shadow-md backdrop-blur transition hover:bg-white"
                >
                  <Info className="size-3.5" /> Detalhes
                </button>
              </div>
              <div className="p-7">
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-primary">
                  {c.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {c.text}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] uppercase tracking-[0.14em] text-[color:var(--accent)]">
                  Ver na galeria →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
      {detail && <ChaleModal chale={detail} onClose={() => setDetail(null)} />}
    </section>
  );
}

function ChaleModal({ chale, onClose }: { chale: Chale; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Detalhes da ${chale.title}`}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg overflow-hidden rounded-t-3xl bg-card shadow-2xl sm:rounded-3xl"
      >
        <div className="relative h-40 overflow-hidden bg-muted sm:h-48">
          <ImageWithFallback
            src={chale.img}
            alt={chale.title}
            className={`size-full object-cover ${
              chale.imgClass?.replace(/group-hover:[^\s]+/g, "") ?? ""
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar"
            className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-black/60"
          >
            <X className="size-5" />
          </button>
          <div className="absolute bottom-4 left-5 right-5 text-primary-foreground">
            <span className="text-[11px] uppercase tracking-[0.24em] text-primary-foreground/80">
              {chale.tag}
            </span>
          </div>
        </div>

        <div className="max-h-[55vh] overflow-y-auto p-6 sm:p-7">
          <p className="text-[16px] leading-relaxed text-muted-foreground">
            {chale.text}
          </p>

          <p className="mt-6 text-[13px] uppercase tracking-[0.28em] text-[color:var(--accent)]">
            Diferenciais deste chalé
          </p>
          <ul className="mt-4 space-y-3">
            {chale.details.map((d) => (
              <li key={d.label} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-secondary/60 text-[color:var(--accent)]">
                  <d.icon className="size-[1.125rem]" strokeWidth={1.5} />
                </span>
                <span className="pt-1.5 text-[15px] text-primary">
                  {d.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
