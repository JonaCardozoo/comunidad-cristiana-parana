import { noticias } from "@/lib/noticias";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, ArrowLeft } from "lucide-react";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const noticia = noticias.find((n) => n.slug === slug);

  if (!noticia) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-cream">
      {/* HERO */}
      <section className="bg-primary/10 py-36">
        <div className="mx-auto max-w-3xl px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground md:text-6xl leading-tight">
            {noticia.titulo}
          </h1>

          {noticia.date && (
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{noticia.date}</span>
            </div>
          )}
        </div>
      </section>

      {/* DIVISOR */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* CONTENIDO */}
      <section className="py-24">
        <div className="mx-auto max-w-2xl px-8">
          <div className="space-y-6">
            {noticia.contenido.split("\n\n").map((parrafo, i) => (
              <p
                key={i}
                className="text-lg leading-loose text-muted-foreground"
              >
                {parrafo}
              </p>
            ))}
          </div>

          <div className="mt-16 border-t border-border p-3">
            <Link
              href="/#eventos"
              className="inline-flex items-center  rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              <ArrowLeft className="h-4 w-10 mr-2" />
              Volver a eventos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
