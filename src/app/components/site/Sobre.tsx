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
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { IMAGES } from "../../data";
import React from "react";

const FEATURES = [
  { icon: Home, label: "2 chalés completos" },
  { icon: BedDouble, label: "Quartos aconchegantes" },
  { icon: Bath, label: "Banheiros privativos" },
  { icon: ChefHat, label: "Cozinhas equipadas" },
  { icon: Trees, label: "Natureza preservada" },
  { icon: Mountain, label: "Vista para a serra" },
  { icon: Flame, label: "Lareira e madeira" },
  { icon: Sun, label: "Energia solar renovável" },
  { icon: Wifi, label: "Infraestrutura pronta" },
];

const CHALES = [
  {
    albumId: "chale1",
    tag: "A Casa de vidro",
    title: "Casa de vidro",
    text: "Luz natural com um teto de vidro e uma varanda voltada para floresta. Quartos, banheiro e cozinha completa em meio à natureza.",
    img: IMAGES.casas,
    imgClass: "object-right scale-[1.4] origin-right group-hover:scale-[1.45]",
  },
  {
    albumId: "chale2",
    tag: "A Casa do Javali",
    title: "Casa do Javali",
    text: "Revestido em madeira, quarto com vista paras montanhas, banheiros privativos e cozinha bem equipada integrada a sala. Perfeito para receber a família.",
    img: IMAGES.casaJavali,
    imgClass: "object-center group-hover:scale-105",
  },
];

type SobreProps = {
  onSelectChale?: (albumId: string) => void;
};

export function Sobre({ onSelectChale }: SobreProps) {
  return (
    <section id="sobre" className="scroll-mt-24 bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:px-10 lg:grid-cols-2 lg:gap-20 lg:py-32">
        <div className="flex flex-col justify-center">
          <span className="text-[11px] uppercase tracking-[0.32em] text-[color:var(--accent)]">
            Sobre a propriedade
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.2rem)] font-light leading-[1.1] text-primary">
            Em meio à natureza e à serra de Urubici
          </h2>
          <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
            <p>
              Localizada na Estrada Geral da Jararaca, em
              Urubici, a propriedade reúne dois chalés
              independentes construídos em madeira, cercados por
              vegetação nativa e pelo silêncio das montanhas.
            </p>
            <p>
              São ambientes pensados para o conforto em qualquer
              estação — do calor da lareira no inverno serrano
              às manhãs de neblina que descem pelo vale. Os
              chalés contam com painéis solares, garantindo
              energia limpa e renovável o ano inteiro. Um lugar
              para morar, para investir ou para dar vida a uma
              pousada de charme.
            </p>
            <p>
              A estrutura já está pronta: acessos, parquinho,
              elétrodomésticos, área verde ampla, espaço para
              receber e uma natureza que se torna parte da casa.
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
            <div
              key={f.label}
              className="flex items-center gap-3 px-2 py-5"
            >
              <f.icon
                className="size-5 shrink-0 text-[color:var(--accent)]"
                strokeWidth={1.5}
              />
              <span className="text-sm text-primary">
                {f.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div
        id="chales"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 md:px-10 lg:py-28"
      >
        <div className="mb-14 max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.32em] text-[color:var(--accent)]">
            Os dois chalés
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] text-primary">
            Duas casas, uma paisagem.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {CHALES.map((c) => (
            <button
              key={c.albumId}
              type="button"
              onClick={() => {
                onSelectChale?.(c.albumId);
                document
                  .getElementById("galeria")
                  ?.scrollIntoView({
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
                  className={`size-full object-cover transition-transform duration-700 ${c.imgClass ?? ""}`}
                />
                <span className="absolute left-5 top-5 rounded-full bg-primary/90 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-primary-foreground backdrop-blur">
                  {c.tag}
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-[family-name:var(--font-display)] text-2xl text-primary">
                  {c.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {c.text}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] uppercase tracking-[0.14em] text-[color:var(--accent)]">
                  Ver na galeria →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}