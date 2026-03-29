"use client";

import Image from "next/image";
import { predicacionesDomingo } from "@/lib/predicas-domingo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookMarked, BookOpen, Calendar, Images } from "lucide-react";

function PredicaImagenes({
  titulo,
  rutas,
}: {
  titulo: string;
  rutas: string[];
}) {
  const [principal, ...resto] = rutas;

  return (
    <div className="mb-8 space-y-4">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-foreground/10 bg-muted shadow-sm">
        <Image
          src={principal}
          alt={`${titulo} — foto principal`}
          fill
          className="object-cover"
          sizes="(max-width: 896px) 100vw, 896px"
        />
      </div>
      {resto.length > 0 && (
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {resto.map((src, i) => (
            <li
              key={src}
              className="relative aspect-[4/3] overflow-hidden rounded-lg border border-foreground/10 bg-muted"
            >
              <Image
                src={src}
                alt={`${titulo} — foto ${i + 2}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 280px"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

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
