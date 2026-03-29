// app/noticias/[slug]/page.tsx

import { noticias } from "@/lib/noticias";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const noticia = noticias.find((n) => n.slug === slug);

  if (!noticia) return notFound();

  return (
    <main className="min-h-screen bg-cream">
      {/* BACK */}
      <div className="flex justify-center px-4 pt-8 sm:justify-start sm:px-8 md:px-12">
        <Link
          href="/#eventos"
          className="group inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-6 py-2.5 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-white sm:px-8"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
          Volver a eventos
        </Link>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden bg-primary/10 py-20 md:py-28 lg:py-36">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]"
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        <div className="relative mx-auto max-w-3xl px-4 text-center p-2">
          <span className="mb-4 inline-block rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary sm:mb-6">
            Evento
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            {noticia.titulo}
          </h1>
          {noticia.date && (
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground sm:mt-8">
              <Calendar className="h-4 w-4 text-primary" />
              <span>{noticia.date}</span>
            </div>
          )}
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </section>

      {/* CONTENIDO */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-2xl px-6 sm:px-8">
          <div className="space-y-6 sm:space-y-7">
            {noticia.contenido.split("\n\n").map((parrafo, i) => (
              <p
                key={i}
                className="text-base leading-loose text-muted-foreground sm:text-lg"
              >
                {parrafo}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* VER TODAS LAS FOTOS */}
      <div className="mx-auto flex max-w-2xl justify-center p-6 pb-8 sm:px-8">
        <Link
          href={noticia.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
        >
          Ver todas las fotos
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-16 p-6">
        {noticia.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Foto ${i + 1}`}
            className="h-64 w-64 rounded-lg object-cover"
          />
        ))}
      </div>
    </main>
  );
}
