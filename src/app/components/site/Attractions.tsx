import { MapPin } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ATTRACTIONS, IMAGES } from "../../data";
import React from "react";

export function Attractions() {
  return (
    <section
      id="pontos-turisticos"
      className="relative scroll-mt-24 overflow-hidden bg-primary text-primary-foreground"
    >
      <ImageWithFallback
        src={IMAGES.c2natureza}
        alt="Cachoeira em meio à mata da Serra Catarinense"
        className="absolute inset-0 size-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-primary/85" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:py-20">
        <div className="mb-14 max-w-2xl">
          <span className="text-[12px] uppercase tracking-[0.32em] text-[color:var(--secondary)]">
            Próximo das
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1]">
            Principais atrações de Urubici.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-primary-foreground/75">
            Em poucos minutos você chega a alguns dos pontos turísticos mais
            conhecidos da Serra Catarinense, aproveitando o melhor da região sem
            precisar percorrer longas distâncias.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-primary-foreground/10 bg-primary-foreground/10 sm:grid-cols-2 lg:grid-cols-3">
          {ATTRACTIONS.map((a) => (
            <div
              key={a.name}
              className="bg-primary p-7 transition-colors hover:bg-primary-foreground/[0.04]"
            >
              <div className="flex items-center gap-2 text-[color:var(--secondary)]">
                <MapPin className="size-4" />
                <span className="text-[12px] uppercase tracking-[0.18em]">
                  {a.distance}
                </span>
              </div>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl">
                {a.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
