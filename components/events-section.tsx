"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

const events = [
  {
    title: "Retiro de Jovenes",
    date: "14-15 de Marzo, 2026 - FINALIZADO",
    desc: "Un fin de semana de conexion, aventura y encuentro con Dios para la juventud.",
    image: "/images/foto4campa.webp",
    link: "/informacion/retirojovenes",
  },
  
];

export function EventsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="eventos" className="bg-cream py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div
          className="mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          
          <h2 className=" text-4xl font-bold text-foreground text-balance md:text-5xl">
            Eventos
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event, i) => (
            <article
            key={event.title}
            className={`
              group overflow-hidden rounded-2xl bg-card shadow-sm
              transition-all duration-700 ease-out
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              hover:-translate-y-2 hover:shadow-2xl
              `}
              style={{
                transitionDelay: `${0.1 + i * 0.1}s`,
              }}
              >
              <Link href={event.link}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>
              
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-sm text-warm">
                  <Calendar className="h-4 w-4" />
                  {event.date}
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  {event.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {event.desc}
                </p>
                
              </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
