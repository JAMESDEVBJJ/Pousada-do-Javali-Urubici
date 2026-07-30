import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { waLink } from "../../data";
import React from "react";

export function WhatsAppTeaser() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 12000);
    return () => clearTimeout(t);
  }, []);

  if (!show || dismissed) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50 w-[min(19rem,calc(100vw-3rem))] animate-in fade-in slide-in-from-bottom-2 duration-500">
      <a
        href={waLink()}
        target="_blank"
        rel="noreferrer"
        className="block rounded-2xl rounded-br-sm bg-card p-3.5 shadow-xl ring-1 ring-border transition-shadow hover:shadow-2xl"
      >
        <div className="flex items-start gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-sm text-white">
            CX
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <p className="truncate text-[13px] text-primary">
                Claudio Xavier
              </p>
              <span className="shrink-0 text-[10px] text-muted-foreground">
                agora
              </span>
            </div>
            <p className="mt-0.5 text-[13px] leading-snug text-muted-foreground">
              Olá! Em caso de dúvidas deixe aqui que respondemos assim que
              possível! Obrigado!
            </p>
          </div>
        </div>
      </a>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setDismissed(true);
        }}
        aria-label="Fechar mensagem"
        className="absolute -left-2 -top-2 grid size-6 place-items-center rounded-full bg-primary text-primary-foreground shadow-md transition hover:scale-105"
      >
        <X className="size-3.5" />
      </button>
    </div>
  );
}
