import { MapPin, ArrowDown } from "lucide-react";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { IMAGES, waLink } from "../../data";
import React from "react";

export function Hero() {
  const go = (id: string) =>
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] w-full overflow-hidden"
    >
      <ImageWithFallback
        src={IMAGES.heroLandscape}
        alt="Serra Catarinense em Urubici ao amanhecer, vista da propriedade"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/35 to-primary/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(31,51,37,0.55))]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-6 text-center text-primary-foreground">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-primary-foreground/85">
          <MapPin className="size-3.5" /> Estrada Geral da
          Jararaca
        </span>
        <h1 className="max-w-4xl font-[family-name:var(--font-display)] text-[clamp(2.4rem,6vw,4.8rem)] font-light leading-[1.05]">
          Viva a tranquilidade da Serra Catarinense
        </h1>
        <p className="mt-7 max-w-2xl text-[clamp(1rem,1.6vw,1.2rem)] font-light leading-relaxed text-primary-foreground/85">
          Dois chalés completos, natureza preservada e uma
          oportunidade para morar, investir ou transformar
          o seu sonho em realidade.
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
      </div>

      <button
        onClick={() => go("sobre")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/70 transition hover:text-primary-foreground"
        aria-label="Rolar para baixo"
      >
        <ArrowDown
          className="size-6 animate-bounce"
          strokeWidth={1.5}
        />
      </button>
    </section>
  );
}