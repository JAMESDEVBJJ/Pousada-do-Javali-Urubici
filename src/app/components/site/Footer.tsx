import { Leaf, MapPin, Phone, MessageCircle } from "lucide-react";
import { waLink, telLink, CONTACT } from "../../data";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3 md:px-10">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-full border border-primary-foreground/30">
              <Leaf className="size-4 text-[color:var(--secondary)]" strokeWidth={1.5} />
            </span>
            <span className="font-[family-name:var(--font-display)] text-lg">
              Hospedagem do Javali
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/60">
            Dois chalés em meio à natureza da Serra Catarinense. Para morar, investir ou empreender.
          </p>
        </div>

        <div className="space-y-3 text-sm text-primary-foreground/75">
          <p className="text-[11px] uppercase tracking-[0.24em] text-primary-foreground/50">
            Contato
          </p>
          <a href={telLink()} className="flex items-center gap-2.5 hover:text-primary-foreground">
            <Phone className="size-4" /> {CONTACT.phoneDisplay}
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 hover:text-primary-foreground"
          >
            <MessageCircle className="size-4" /> WhatsApp
          </a>
        </div>

        <div className="space-y-3 text-sm text-primary-foreground/75">
          <p className="text-[11px] uppercase tracking-[0.24em] text-primary-foreground/50">
            Endereço
          </p>
          <p className="flex items-start gap-2.5">
            <MapPin className="mt-0.5 size-4 shrink-0" /> {CONTACT.address}
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-primary-foreground/50 md:px-10">
          © 2026 Hospedagem do Javali · Urubici, SC — Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
