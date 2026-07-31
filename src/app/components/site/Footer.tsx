import { Leaf, MapPin, Phone, MessageCircle } from "lucide-react";
import { waLink, telLink, CONTACT } from "../../data";
import React from "react";

function BoarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M439.292,130.183c-47.955-21.453-106.125-40.426-136.447-44.216c-24.459-3.057-106.125,30.322-106.125,30.322s-14.088-20.565-24.629-17.056c-10.541,3.517-19.928,12.208-41.011,40.322C81.578,205.557,0,229.453,0,229.453l43.921,57.978l33.556-10.822c-6.5-24.851-1.932-40.13-1.932-40.13c3.517,14.058,22.845,33.386,22.845,33.386l3.509,14.05l-45.675,15.812l14.05,17.574c0,0,38.657-5.27,80.823-10.541c42.166-5.271,50.945,29.862,50.945,29.862l17.574,89.61h35.134l14.058-79.068h159.884l17.566,79.068h38.65c0,0,19.432-87.589,26.398-180.448C516.991,169.979,487.306,151.665,439.292,130.183z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3 md:px-10">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-full border border-primary-foreground/30">
              <BoarIcon className="size-[1.5rem] text-[color:var(--accent)]" />
            </span>
            <span className="text-left leading-tight">
              <span className="font-[family-name:var(--font-display)] text-lg">
                Pousada do Javali
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/60">
            Dois chalés em meio à natureza da Serra Catarinense. Para morar,
            investir ou empreender.
          </p>
        </div>

        <div className="space-y-3 text-sm text-primary-foreground/75">
          <p className="text-[11px] uppercase tracking-[0.24em] text-primary-foreground/50">
            Contato
          </p>
          <a
            href={telLink()}
            className="flex items-center gap-2.5 hover:text-primary-foreground"
          >
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
          © 2026 Pousada do Javali · Urubici, SC — Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
