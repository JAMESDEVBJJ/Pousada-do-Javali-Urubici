import { MapPin, Navigation } from "lucide-react";
import { Button } from "../ui/button";
import { CONTACT } from "../../data";
import React from "react";

const LAT = -28.0155;
const LON = -49.5925;
const EMBED = `https://www.openstreetmap.org/export/embed.html?bbox=${
  LON - 0.09
}%2C${LAT - 0.06}%2C${LON + 0.09}%2C${
  LAT + 0.06
}&layer=mapnik&marker=${LAT}%2C${LON}`;

export function Localizacao() {
  return (
    <section id="localizacao" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-18 md:px-10 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="flex flex-col justify-center">
            <span className="text-[12px] uppercase tracking-[0.32em] text-[color:var(--accent)]">
              Localização
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] text-primary">
              No coração da Serra Catarinense.
            </h2>
            <div className="mt-6 flex items-start gap-3 text-primary">
              <MapPin className="mt-0.5 size-5 shrink-0 text-[color:var(--accent)]" />
              <p className="text-lg">
                Urubici — SC
                <span className="mt-1 block text-[16px] text-muted-foreground">
                  {CONTACT.address}
                </span>
              </p>
            </div>
            <p className="mt-6 text-[16px] leading-relaxed text-muted-foreground">
              A poucos minutos do centro de Urubici, a propriedade combina o
              sossego do campo com a conveniência de estar perto de
              restaurantes, mercados e dos principais atrativos da região.
              Estradas de fácil acesso levam você diretamente à natureza.
            </p>
            <Button
              asChild
              className="mt-8 h-11 w-fit rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${LAT},${LON}`}
                target="_blank"
                rel="noreferrer"
                className="gap-2"
              >
                <Navigation className="size-4" /> Traçar rota
              </a>
            </Button>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-border bg-muted shadow-lg">
            <iframe
              title="Mapa de Urubici"
              src={EMBED}
              className="h-[360px] w-full lg:h-[480px]"
              style={{ border: 0, filter: "saturate(0.85) contrast(0.95)" }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
