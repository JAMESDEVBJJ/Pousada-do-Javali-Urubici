import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { GALLERY, type GalleryImage } from "../../data";

type GalleryProps = {
  active?: string;
  onActiveChange?: (id: string) => void;
};

type Lightbox = { images: GalleryImage[]; index: number };

export function Gallery({ active: controlled, onActiveChange }: GalleryProps) {
  const [internal, setInternal] = useState("exterior");
  const active = controlled ?? internal;
  const setActive = (id: string) => {
    setInternal(id);
    onActiveChange?.(id);
  };
  const album = GALLERY.find((a) => a.id === active) ?? GALLERY[0];

  const [lightbox, setLightbox] = useState<Lightbox | null>(null);
  const open = (images: GalleryImage[], index: number) => setLightbox({ images, index });

  return (
    <section id="galeria" className="scroll-mt-24 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-28">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="text-[11px] uppercase tracking-[0.32em] text-[color:var(--accent)]">
              Galeria
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] font-light leading-[1.1] text-primary">
              Conheça cada canto da propriedade.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {GALLERY.map((a) => (
              <button
                key={a.id}
                onClick={() => setActive(a.id)}
                className={`rounded-full border px-5 py-2.5 text-[13px] uppercase tracking-[0.14em] transition ${
                  active === a.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-transparent text-primary hover:bg-secondary"
                }`}
              >
                {a.name}
              </button>
            ))}
          </div>
        </div>

        {album.carousel ? (
          // Chalés: cada categoria vira um carrossel, centralizado
          <div className="flex flex-wrap justify-center gap-6">
            {album.blocks.map((b) => (
              <CarouselTile
                key={`${album.id}-${b.label}`}
                label={b.label}
                images={b.images}
                onOpen={(i) => open(b.images, i)}
              />
            ))}
          </div>
        ) : (
          // Exterior: cada foto é um tile individual
          <div className="grid auto-rows-[240px] grid-cols-2 gap-4 md:auto-rows-[300px] md:grid-cols-3">
            {album.blocks.flatMap((b) =>
              b.images.map((img, i) => (
                <ImageTile
                  key={`${album.id}-${b.label}-${i}`}
                  label={b.label}
                  image={img}
                  onOpen={() => open(b.images, i)}
                />
              )),
            )}
          </div>
        )}
      </div>

      {lightbox && (
        <LightboxView
          data={lightbox}
          onChange={setLightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}

function ImageTile({
  label,
  image,
  onOpen,
}: {
  label: string;
  image: GalleryImage;
  onOpen: () => void;
}) {
  return (
    <figure className="group relative cursor-zoom-in overflow-hidden rounded-2xl bg-muted">
      <button onClick={onOpen} className="block size-full">
        <ImageWithFallback
          src={image.src}
          alt={`${label} — ${image.caption}`}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-black/40 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
          <ZoomIn className="size-4" />
        </span>
        <figcaption className="absolute bottom-4 left-4 translate-y-1 text-sm uppercase tracking-[0.16em] text-primary-foreground opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          {label}
        </figcaption>
      </button>
    </figure>
  );
}

function CarouselTile({
  label,
  images,
  onOpen,
}: {
  label: string;
  images: GalleryImage[];
  onOpen: (index: number) => void;
}) {
  const [i, setI] = useState(0);
  const prev = () => setI((p) => (p - 1 + images.length) % images.length);
  const next = () => setI((p) => (p + 1) % images.length);
  const current = images[i];

  // Arrastar com o dedo (touch) ou com o mouse pressionado troca a foto.
  const startX = useRef<number | null>(null);
  const moved = useRef(false);
  const THRESHOLD = 45; // px mínimos para considerar um swipe

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    moved.current = false;
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    if (Math.abs(e.clientX - startX.current) > 8) moved.current = true;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    startX.current = null;
    if (images.length > 1 && Math.abs(dx) > THRESHOLD) {
      dx < 0 ? next() : prev();
    }
  };

  const handleClick = () => {
    // Não abre o lightbox se o gesto foi um arraste.
    if (moved.current) return;
    onOpen(i);
  };

  return (
    <figure
      className="group relative h-[300px] w-full touch-pan-y select-none overflow-hidden rounded-2xl bg-muted sm:w-[420px] md:h-[360px]"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={() => (startX.current = null)}
    >
      <button onClick={handleClick} className="block size-full cursor-zoom-in">
        <ImageWithFallback
          src={current.src}
          alt={`${label} — ${current.caption}`}
          className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </button>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />

      <div className="absolute left-4 top-4 flex items-center gap-2">
        <span className="rounded-full bg-primary/90 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-primary-foreground backdrop-blur">
          {label}
        </span>
        {images.length > 1 && (
          <span className="rounded-full bg-black/40 px-2.5 py-1 text-[11px] text-white backdrop-blur">
            {i + 1}/{images.length}
          </span>
        )}
      </div>

      <figcaption className="absolute bottom-4 left-4 text-sm uppercase tracking-[0.16em] text-primary-foreground">
        {current.caption}
      </figcaption>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-3 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-black/60"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={next}
            aria-label="Próxima"
            className="absolute right-3 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-black/60"
          >
            <ChevronRight className="size-5" />
          </button>
          <div className="absolute bottom-4 right-4 flex gap-1.5">
            {images.map((_, d) => (
              <span
                key={d}
                className={`size-1.5 rounded-full transition ${
                  d === i ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </figure>
  );
}

function LightboxView({
  data,
  onChange,
  onClose,
}: {
  data: Lightbox;
  onChange: (d: Lightbox) => void;
  onClose: () => void;
}) {
  const { images, index } = data;
  const current = images[index];
  const go = (dir: number) =>
    onChange({ images, index: (index + dir + images.length) % images.length });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, images]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Fechar"
        className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
      >
        <X className="size-5" />
      </button>

      <div className="relative flex max-h-full max-w-5xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <ImageWithFallback
          src={current.src}
          alt={current.caption}
          className="max-h-[80vh] w-auto rounded-xl object-contain shadow-2xl"
        />
        <p className="mt-4 text-center text-sm uppercase tracking-[0.18em] text-white/90">
          {current.caption}
          {images.length > 1 && (
            <span className="ml-3 text-white/50">
              {index + 1} / {images.length}
            </span>
          )}
        </p>

        {images.length > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Anterior"
              className="absolute left-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:-left-16"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Próxima"
              className="absolute right-2 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:-right-16"
            >
              <ChevronRight className="size-6" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
