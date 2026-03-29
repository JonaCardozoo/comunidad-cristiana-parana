import Image from "next/image";
import { noticias } from "@/lib/noticias";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, ArrowLeft, ArrowRight, Images } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const noticia = noticias.find((n) => n.slug === slug);

  if (!noticia) return notFound();

  const [featuredImage, ...restImages] = noticia.images;
  const hasGallery = restImages.length > 0;
  const hasPhotoLink = Boolean(noticia.link?.trim());

  return (
    <main className="min-h-screen bg-cream">
      {/* Barra superior */}
      <header className="border-b border-foreground/10 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-8">
          <Button variant="ghost" size="sm" className="gap-2 -ml-2" asChild>
            <Link href="/#eventos">
              <ArrowLeft className="h-4 w-4" />
              Volver a eventos
            </Link>
          </Button>
          <span className="hidden text-xs font-medium uppercase tracking-widest text-muted-foreground sm:inline">
            Información
          </span>
        </div>
      </header>

      {/* Intro */}
      <section className="relative overflow-hidden px-4 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16 md:pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Evento
          </div>
          <h1 className="text-balance text-3xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            {noticia.titulo}
          </h1>
          {noticia.date && (
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Calendar
                className="h-4 w-4 shrink-0 text-primary"
                aria-hidden
              />
              <time dateTime={noticia.date}>{noticia.date}</time>
            </div>
          )}
        </div>
      </section>

      {/* Imagen destacada */}
      {featuredImage && (
        <div className="mx-auto max-w-4xl px-4 sm:px-8">
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border border-foreground/10 bg-muted shadow-xl shadow-foreground/5 sm:aspect-[2/1]">
            <Image
              src={featuredImage}
              alt={`Imagen destacada: ${noticia.titulo}`}
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
              priority
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5"
            />
          </div>
        </div>
      )}

      {/* Contenido */}
      <article className="mx-auto max-w-2xl px-4 py-14 sm:px-8 sm:py-20">
        <div className="rounded-2xl border border-foreground/10 bg-card/80 p-8 shadow-sm backdrop-blur-sm sm:p-10 md:p-12">
          <div className="space-y-6 sm:space-y-7">
            {noticia.contenido.split("\n\n").map((parrafo, i) => (
              <p
                key={i}
                className="text-[1.0625rem] leading-[1.85] text-muted-foreground first:text-foreground/95 sm:text-lg sm:leading-[1.9]"
              >
                {parrafo}
              </p>
            ))}
          </div>

          {hasPhotoLink && (
            <>
              <Separator className="my-10 bg-border/80" />
              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground">
                  ¿Querés ver más material del evento?
                </p>
                <Button className="gap-2" asChild>
                  <Link
                    href={noticia.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver todas las fotos
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </article>

      {/* Galería */}
      {hasGallery && (
        <section
          className="border-t border-foreground/10 bg-background/40 pb-20 pt-14 sm:pb-28 sm:pt-20"
          aria-labelledby="galeria-heading"
        >
          <div className="mx-auto max-w-5xl px-4 sm:px-8">
            <div className="mb-10 flex flex-col gap-2 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 text-primary">
                  <Images className="h-5 w-5" aria-hidden />
                  <span className="text-xs font-semibold uppercase tracking-widest">
                    Galería
                  </span>
                </div>
                <h2
                  id="galeria-heading"
                  className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
                >
                  Más momentos
                </h2>
              </div>
              <p className="max-w-sm text-sm text-muted-foreground">
                Un vistazo al encuentro en imágenes.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {restImages.map((img, i) => (
                <li
                  key={img}
                  className="group relative overflow-hidden rounded-xl border border-foreground/10 bg-muted shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={img}
                      alt={`${noticia.titulo} — imagen ${i + 2}`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}
