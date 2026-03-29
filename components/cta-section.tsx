"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function CtaSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0">
        <Image
          src="/images/jovenes2.webp"
          alt="Adoración en comunidad"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div
        ref={ref}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
      >
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "scale(1)" : "scale(0.95)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <h2 className="mb-6  text-4xl font-bold text-primary-foreground text-balance md:text-6xl">
            Vení como sos. Salí transformado.
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-primary-foreground/80 text-pretty">
            No importa tu historia, tu pasado o tus dudas. Hay un lugar para vos
            en esta familia. Te esperamos este domingo.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#reuniones"
              className="inline-flex items-center rounded-full bg-warm px-8 py-4 text-base font-semibold text-warm-foreground transition-transform hover:scale-105"
            >
              Quiero ir este domingo
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center rounded-full border-2 border-primary-foreground/30 px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
