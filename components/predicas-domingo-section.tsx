"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


const TEASER_IMAGE = "/images/fotoiglesia4.webp";

export function PredicasDomingoSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="predicas"
      className="border-t border-foreground/10 bg-[#cdcfc8] py-24 md:py-32"
      aria-labelledby="predicas-heading"
    >
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-foreground/10 bg-muted shadow-lg shadow-foreground/5 lg:aspect-[5/4]">
            <Image
              src={TEASER_IMAGE}
              alt="Reunión dominical — enseñanza y comunidad"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5"
            />
          </div>

          <div className="text-center lg:text-left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-warm">
              Reunión del domingo
            </p>
            <h2
              id="predicas-heading"
              className="mb-5 text-balance text-4xl font-bold leading-tight text-foreground md:text-5xl"
            >
              ¿Te perdiste la reunión del domingo?
            </h2>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty lg:mx-0 mx-auto">
              Acá podés leer un resumen de la prédica de cada domingo. Entrá y
              buscá la fecha que te interese.
            </p>
            <Button size="lg" className="gap-2" asChild>
              <Link href="/predicas">
                Ver prédicas
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
