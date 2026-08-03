import { MapPin, ArrowDown } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { IMAGES, waLink } from "../../data";
import urubici from "../../../imports/urubici-sfs3wv70.jpg";
import lucasCaixeta from "../../../imports/lucas-caixeta-jckravmav88-unsplash-95c5pm0j.jpg";
import ivanCheremisin from "../../../imports/ivan-cheremisin-iyxn0f6qxzu-unsplash-xb8il3hg.jpg";
import React, { useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    src: IMAGES.heroLandscape,
    alt: "Serra Catarinense em Urubici ao amanhecer",
  },
  { src: urubici, alt: "Paisagem da serra de Urubici" },
  { src: lucasCaixeta, alt: "Montanhas e natureza da Serra Catarinense" },
  { src: ivanCheremisin, alt: "Vista deslumbrante de Urubici" },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const timeout = useRef<ReturnType<typeof setTimeout>>(0);

  useEffect(() => {
    const delay = 5000 + Math.random() * 2000;
    timeout.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, delay);
    return () => clearTimeout(timeout.current);
  }, [current]);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] w-full overflow-hidden"
    >
      <div className="absolute inset-0">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <ImageWithFallback
              src={slide.src}
              alt={slide.alt}
              className={`size-full object-cover will-change-transform ${
                index === current
                  ? // Imagem ativa: começa no zoom normal (scale 1) e vai
                    // ampliando lentamente enquanto está visível.
                    "scale-[1.08] transition-transform duration-[8000ms] ease-out"
                  : // Imagem inativa: mantém o zoom durante o fade e só volta ao
                    // normal DEPOIS do crossfade (delay), já invisível — sem revert.
                    "scale-100 transition-transform duration-0 delay-[2000ms]"
              }`}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/35 to-primary/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(31,51,37,0.55))]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-6 text-center text-primary-foreground">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-primary-foreground/85">
          <MapPin className="size-3.5" /> Estrada Geral da Jararaca
        </span>
        <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-[clamp(2.4rem,6vw,4.8rem)] font-light leading-[1.05]">
          Viva a tranquilidade da Serra Catarinense
        </h1>
        <p className="mt-7 max-w-2xl text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-relaxed text-primary-foreground/85">
          Dois chalés completos, natureza preservada e uma oportunidade para
          morar, investir ou transformar o seu sonho em realidade.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-[color:var(--accent)] px-8 text-[color:var(--accent-foreground)] hover:bg-[color:var(--accent)]/90"
          >
            <a href={waLink()} target="_blank" rel="noreferrer">
              Agende uma visita
            </a>
          </Button>
          <Button
            onClick={() => go("valores")}
            size="lg"
            variant="outline"
            className="h-12 rounded-full border-primary-foreground/40 bg-transparent px-8 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            Ver valores
          </Button>
        </div>

        {/* Indicadores das imagens */}
        <div className="mt-12 flex items-center gap-2.5">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.src}
              onClick={() => setCurrent(index)}
              aria-label={`Ver imagem ${index + 1}`}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === current
                  ? "w-5 bg-primary-foreground/80"
                  : "w-1 bg-primary-foreground/30 hover:bg-primary-foreground/60"
              }`}
            />
          ))}
        </div>
      </div>

      <button
        onClick={() => go("sobre")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/70 transition hover:text-primary-foreground"
        aria-label="Rolar para baixo"
      >
        <ArrowDown className="size-6 animate-bounce" strokeWidth={1.5} />
      </button>
    </section>
  );
}
