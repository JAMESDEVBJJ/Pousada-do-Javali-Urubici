import { MessageCircle, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { waLink, telLink, CONTACT } from "../../data";
import React from "react";

export function Contato() {
  return (
    <section id="contato" className="scroll-mt-24 bg-secondary/50">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20 text-center">
        <span className="text-[13px] uppercase tracking-[0.32em] text-[color:var(--accent)]">
          Contato
        </span>
        <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2.2rem,5vw,3.6rem)] font-light leading-[1.1] text-primary">
          Gostou da propriedade? Agende uma visita.
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
          Fale diretamente conosco pelo WhatsApp ou por telefone. Teremos prazer
          em apresentar cada detalhe da Hospedagem do Javali.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-13 rounded-full bg-[#25D366] px-8 text-white hover:bg-[#25D366]/90"
          >
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="gap-2.5 py-3.5"
            >
              <MessageCircle className="size-5" /> Falar no WhatsApp
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-13 rounded-full border-primary/30 bg-transparent px-8 text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <a href={telLink()} className="gap-2.5 py-3.5">
              <Phone className="size-5" /> {CONTACT.phoneDisplay}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
