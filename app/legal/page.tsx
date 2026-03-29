import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import {
  politicaPrivacidad,
  avisoLegal,
  LEY_DATOS_PERSONALES_FRASE,
  LEY_DATOS_PERSONALES_URL,
} from "@/lib/privacidad-legal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad y Aviso Legal | Comunidad Cristiana Paraná",
  description:
    "Política de privacidad y aviso legal del sitio de Comunidad Cristiana Paraná.",
};

function parrafoConEnlaceLey(texto: string): ReactNode {
  const frase = LEY_DATOS_PERSONALES_FRASE;
  if (!texto.includes(frase)) {
    return texto;
  }
  const partes: ReactNode[] = [];
  let resto = texto;
  let k = 0;
  while (resto.includes(frase)) {
    const i = resto.indexOf(frase);
    if (i > 0) partes.push(resto.slice(0, i));
    partes.push(
      <a
        key={k++}
        href={LEY_DATOS_PERSONALES_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-warm underline decoration-warm/40 underline-offset-[3px] transition-colors hover:text-warm/90 hover:decoration-warm"
      >
        {frase}
      </a>,
    );
    resto = resto.slice(i + frase.length);
  }
  if (resto) partes.push(resto);
  return partes;
}

function BloqueTexto({ texto }: { texto: string }) {
  const parrafos = texto.split(/\n\n+/).filter(Boolean);
  return (
    <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
      {parrafos.map((p, i) => (
        <p key={i} className="text-pretty whitespace-pre-line">
          {parrafoConEnlaceLey(p.trim())}
        </p>
      ))}
    </div>
  );
}

export default function LegalPage() {
  return (
    <>
      <main className="min-h-screen bg-cream pb-16">
        <header className="border-b border-foreground/10 bg-background/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-3xl items-center px-4 py-4 sm:px-8 lg:max-w-4xl">
            <Button variant="ghost" size="sm" className="gap-2 -ml-2" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                Volver al inicio
              </Link>
            </Button>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-8 lg:max-w-4xl md:py-16">
          <h1 className="mb-12 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:mb-16">
            Política de Privacidad y Aviso Legal
          </h1>

          <section
            id="privacidad"
            aria-labelledby="titulo-privacidad"
            className="mb-16 scroll-mt-8 md:mb-20"
          >
            <h2
              id="titulo-privacidad"
              className="mb-6 text-2xl font-bold text-foreground sm:text-3xl"
            >
              Política de Privacidad
            </h2>
            <BloqueTexto texto={politicaPrivacidad} />
          </section>

          <section
            id="aviso-legal"
            aria-labelledby="titulo-aviso"
            className="scroll-mt-8"
          >
            <h2
              id="titulo-aviso"
              className="mb-6 text-2xl font-bold text-foreground sm:text-3xl"
            >
              Aviso Legal
            </h2>
            <BloqueTexto texto={avisoLegal} />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
