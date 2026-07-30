import { Check, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { waLink, telLink, CONTACT } from "../../data";

export function Valores() {
  return (
    <section id="valores" className="scroll-mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32">
        <div className="mb-14 text-center">
          <span className="text-[11px] uppercase tracking-[0.32em] text-[color:var(--secondary)]">
            Oportunidade
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.2rem)] font-light">
            Para morar, investir ou empreender.
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {/* Venda */}
          <div className="flex flex-col rounded-[2rem] border border-primary-foreground/15 bg-primary-foreground/[0.04] p-9">
            <span className="text-[11px] uppercase tracking-[0.28em] text-primary-foreground/60">
              Venda
            </span>
            <p className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2.4rem,5vw,3.5rem)] font-light leading-none">
              R$ 3.000.000
            </p>
            <p className="mt-3 text-sm text-primary-foreground/70">Aceita propostas.</p>
            <ul className="mt-7 space-y-3 text-sm text-primary-foreground/85">
              {["Dois chalés completos", "Terreno amplo com mata nativa", "Escritura regular"].map(
                (i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <Check className="size-4 text-[color:var(--secondary)]" /> {i}
                  </li>
                ),
              )}
            </ul>
            <Button
              asChild
              variant="outline"
              className="mt-8 h-11 rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground md:mt-auto"
            >
              <a href={waLink()} target="_blank" rel="noreferrer">
                Fazer uma proposta
              </a>
            </Button>
          </div>

          {/* Locação — destaque */}
          <div className="relative flex flex-col rounded-[2rem] bg-[color:var(--accent)] p-9 text-[color:var(--accent-foreground)] shadow-2xl">
            <span className="absolute right-6 top-6 rounded-full bg-black/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em]">
              Destaque
            </span>
            <span className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--accent-foreground)]/70">
              Locação Mensal
            </span>
            <p className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2.4rem,5vw,3.5rem)] font-light leading-none">
              R$ 6.000
              <span className="text-xl font-light text-[color:var(--accent-foreground)]/70">
                {" "}
                /mês
              </span>
            </p>
            <p className="mt-3 text-sm text-[color:var(--accent-foreground)]/80">
              Também disponível para locação anual — consulte condições.
            </p>
            <ul className="mt-7 space-y-3 text-sm">
              {["Imóvel pronto para morar", "Ideal para pousada de charme", "Contratos flexíveis"].map(
                (i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <Check className="size-4" /> {i}
                  </li>
                ),
              )}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="h-11 flex-1 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href={waLink()} target="_blank" rel="noreferrer">
                  Alugar via WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-full border-black/20 bg-transparent text-[color:var(--accent-foreground)] hover:bg-black/5"
              >
                <a href={telLink()} className="gap-2">
                  <Phone className="size-4" /> {CONTACT.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
