import Link from "next/link";
import { Footer } from "@/components/footer";
import { PredicasList } from "@/components/predicas-list";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PredicasPage() {
  return (
    <>
      <main className="min-h-screen bg-cream pb-20">
        <header className="border-b border-foreground/10 bg-background/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-4 sm:px-8 lg:max-w-4xl">
            <Button variant="ghost" size="sm" className="gap-2 -ml-2" asChild>
              <Link href="/#predicas">
                <ArrowLeft className="h-4 w-4" />
                Volver al inicio
              </Link>
            </Button>
            <span className="hidden text-xs font-medium uppercase tracking-widest text-muted-foreground sm:inline">
              Prédicas
            </span>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-8 lg:max-w-4xl md:py-16">
          <div className="mb-10 text-center md:mb-12 md:text-left">
            <h1 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Prédicas del domingo
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty md:mx-0">
              Cada fecha es un resumen de ese domingo: fotos del encuentro y
              notas más extensas del mensaje. Abrí la que quieras leer.
            </p>
          </div>

          <PredicasList />
        </div>
      </main>
      <Footer />
    </>
  );
}
