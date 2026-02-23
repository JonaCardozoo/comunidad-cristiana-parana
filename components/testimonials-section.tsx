"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria G.",
    role: "Miembro desde 2018",
    text: "Encontre una familia real. Cuando mas lo necesite, la comunidad estuvo ahi para sostenerme. Mi vida cambio por completo.",
  },
  {
    name: "Carlos P.",
    role: "Lider de grupo",
    text: "Ser parte de esta comunidad me ayudo a descubrir mi proposito. Hoy sirvo con alegria y veo como Dios transforma vidas cada semana.",
  },
  {
    name: "Lucia M.",
    role: "Miembro desde 2020",
    text: "Llegue rota y sin esperanza. Aqui encontre amor genuino, amistades que perduran y una fe que me sostiene dia a dia.",
  },
  {
    name: "Pablo R.",
    role: "Voluntario",
    text: "Lo que mas me impacto fue la autenticidad de las personas. No hay mascaras, solo amor real y un compromiso genuino con Dios.",
  },
];

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="bg-primary py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-4xl px-6 text-center">
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <Quote className="mx-auto mb-6 h-10 w-10 text-warm" />
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-warm">
            Testimonios
          </p>
          <h2 className="mb-16  text-4xl font-bold text-primary-foreground text-balance md:text-5xl">
            Vidas transformadas
          </h2>
        </div>

        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.8s ease-out 0.3s",
          }}
        >
          <div className="min-h-[200px]">
            <blockquote key={current} className="animate-fade-in">
              <p className="mb-8  text-2xl leading-relaxed text-primary-foreground/90 text-pretty md:text-3xl">
                {`"${testimonials[current].text}"`}
              </p>
              <footer>
                <p className="text-lg font-bold text-primary-foreground">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-primary-foreground/60">
                  {testimonials[current].role}
                </p>
              </footer>
            </blockquote>
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-warm" : "w-2 bg-primary-foreground/30"
                  }`}
                  aria-label={`Ir a testimonio ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
