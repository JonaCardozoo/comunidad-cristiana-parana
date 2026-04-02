"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useState } from "react";
import { predicacionesDomingo } from "@/lib/predicas-domingo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookMarked, BookOpen, Calendar, ChevronLeft, ChevronRight, Images, X } from "lucide-react";

// ---------------------------------------------------------------------------
// Lightbox
// ---------------------------------------------------------------------------

interface LightboxProps {
  images: string[];
  startIndex: number;
  titulo: string;
  onClose: () => void;
}

function Lightbox({ images, startIndex, titulo, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() =>
    setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);

  const next = useCallback(() =>
    setCurrent((c) => (c + 1) % images.length), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Contenedor principal — detiene la propagación del click */}
      <div
        className="relative flex h-full w-full max-w-5xl flex-col items-center justify-center px-4 py-16"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/25"
          aria-label="Cerrar galería"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Imagen */}
        <div className="relative h-full w-full">
          <Image
            src={images[current]}
            alt={`${titulo} — foto ${current + 1}`}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>

        {/* Controles de navegación (solo si hay más de una imagen) */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/25 sm:left-4 sm:p-3"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/25 sm:right-4 sm:p-3"
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Contador */}
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white/80">
              {current + 1} / {images.length}
            </p>

            {/* Thumbnails */}
            <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === current ? "w-5 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Ir a imagen ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}

// ---------------------------------------------------------------------------
// Galería de imágenes de una prédica
// ---------------------------------------------------------------------------

function PredicaImagenes({
  titulo,
  rutas,
}: {
  titulo: string;
  rutas: string[];
}) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [principal, ...resto] = rutas;

  return (
    <>
      <div className="mb-8 space-y-4">
        {/* Imagen principal */}
        <button
          type="button"
          onClick={() => setLightbox(0)}
          className="group relative block w-full aspect-[16/10] overflow-hidden rounded-xl border border-foreground/10 bg-muted shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={`Ver ${titulo} — foto principal ampliada`}
        >
          <Image
            src={principal}
            alt={`${titulo} — foto principal`}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.02] group-hover:brightness-90"
            sizes="(max-width: 896px) 100vw, 896px"
          />
          <span className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
            <span className="rounded-full bg-black/50 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm cursor-pointer">
              Ver ampliada
            </span>
          </span>
        </button>

        {/* Thumbnails secundarios */}
        {resto.length > 0 && (
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {resto.map((src, i) => (
              <li key={src}>
                <button
                  type="button"
                  onClick={() => setLightbox(i + 1)}
                  className="group relative block w-full aspect-[4/3] overflow-hidden rounded-lg border border-foreground/10 bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={`Ver ${titulo} — foto ${i + 2} ampliada`}
                >
                  <Image
                    src={src}
                    alt={`${titulo} — foto ${i + 2}`}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03] group-hover:brightness-90"
                    sizes="(max-width: 640px) 50vw, 280px"
                  />
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
                    <span className="rounded-full bg-black/50 px-2 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                      Ver
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {lightbox !== null && (
        <Lightbox
          images={rutas}
          startIndex={lightbox}
          titulo={titulo}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}

// ---------------------------------------------------------------------------
// Lista principal
// ---------------------------------------------------------------------------

export function PredicasList() {
  const primeraId = predicacionesDomingo[0]?.id;

  if (predicacionesDomingo.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-border bg-muted/40 px-6 py-10 text-center text-muted-foreground">
        Todavía no hay resúmenes cargados.
      </p>
    );
  }

  return (
    <div className="rounded-2xl border border-foreground/10 bg-card p-2 shadow-sm sm:p-3">
      <Accordion
        type="single"
        collapsible
        defaultValue={primeraId}
        className="w-full px-2 sm:px-4"
      >
        {predicacionesDomingo.map((p) => (
          <AccordionItem key={p.id} value={p.id} className="border-border/80">
            <AccordionTrigger className="py-5 text-left hover:no-underline sm:py-6">
              <span className="flex flex-col items-start gap-2 pr-4 sm:flex-row sm:items-center sm:gap-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  <Calendar className="h-3.5 w-3.5" aria-hidden />
                  {p.fecha}
                </span>
                <span className="flex flex-wrap items-center gap-2 text-base font-semibold text-foreground sm:text-lg">
                  {p.titulo}
                  {p.imagenes && p.imagenes.length > 0 && (
                    <span className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 text-xs font-medium normal-case text-muted-foreground">
                      <Images className="h-3.5 w-3.5" aria-hidden />
                      {p.imagenes.length}
                    </span>
                  )}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-8 pt-2 sm:pb-10">
              {p.imagenes && p.imagenes.length > 0 && (
                <PredicaImagenes titulo={p.titulo} rutas={p.imagenes} />
              )}

              {p.versiculos && (
                <div className="mb-8 rounded-xl border border-warm/25 bg-warm/10 px-4 py-4 sm:px-5 sm:py-5">
                  <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-warm">
                    <BookMarked className="h-4 w-4 shrink-0" aria-hidden />
                    Versículos trabajados
                  </p>
                  <p className="text-base font-semibold leading-relaxed text-warm sm:text-lg">
                    {p.versiculos}
                  </p>
                </div>
              )}

              <div className="flex gap-3 border-l-2 border-warm/30 pl-4 sm:pl-5">
                <BookOpen
                  className="mt-1 h-5 w-5 shrink-0 text-warm"
                  aria-hidden
                />
                <div className="min-w-0 space-y-5">
                  {p.predicador && (
                    <p className="text-sm font-semibold text-foreground">
                      {p.predicador}
                    </p>
                  )}
                  <div className="space-y-4 text-base leading-[1.85] text-muted-foreground sm:text-[1.0625rem] sm:leading-[1.9]">
                    {p.contenido.split("\n\n").map((bloque, i) => (
                      <p key={i} className="text-pretty">
                        {bloque}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}