"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useRef } from "react";

const events = [
  {
    title: "Retiro de Jóvenes",
    date: "Sábado, Domingo 14 y 15 de marzo, 2026",
    status: "Finalizado",
    desc: "Un fin de semana de conexión, aventura y encuentro con Dios para la juventud.",
    image: "/images/foto4campa.webp",
    link: "/informacion/retirojovenes",
  },
  {
    title: "Encuentro de oración y adoración",
    date: "Viernes 3 de abril, 2026",
    status: "Próximamente",
    desc: "Un viernes de oración y adoración para toda la comunidad. Un espacio para buscar a Dios juntos.",
    image: "/images/fotopagina6.webp",
    link: "/informacion/oracion-adoracion",
  },
  {
    title: "Actividad de Jóvenes",
    date: "Sábado 4 de abril, 2026",
    status: "Próximamente",
    desc: "Un sábado de actividades para jóvenes. Un espacio para crecer y conectarse.",
    image: "/images/fotoiglesia5.webp",
    link: "/informacion/actividad-jovenes",
  },
  {
    title: "Domingo de resurrección",
    date: "Domingo 5 de abril, 2026",
    status: "Próximamente",
    desc: "Un domingo de resurrección y celebración. Un espacio para toda la familia.",
    image: "/images/fotoiglesia4.webp",
    link: "/informacion/domingo-resurreccion",
  },
  {
    title: "Reunión de varones",
    date: "Jueves 16 de abril, 2026",
    status: "Próximamente",
    desc: "Un espacio para la reflexión y el crecimiento espiritual de los hombres de la iglesia.",
    image: "/images/fotoiglesia1.webp",
    link: "/informacion/reunion-varones",
  },
  {
    title: "Convivencia local Botánico",
    date: "Domingo 3 de mayo, 2026",
    status: "Próximamente",
    desc: "Un domingo distinto para celebrar la vida y el amor de Dios. Un espacio para conectarse y compartir.",
    image: "/images/fotoiglesia2.webp",
    link: "/informacion/convivencia-botanico",
  },
];

export function EventsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.firstElementChild
      ? (scrollRef.current.firstElementChild as HTMLElement).offsetWidth + 32
      : 340;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section id="eventos" className="bg-cream py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div
          className="mb-16 flex items-center justify-between"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <h2 className="text-4xl font-bold text-foreground text-balance md:text-5xl">
            Eventos
          </h2>

          {/* Botones de navegación */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 bg-card text-foreground transition hover:bg-foreground hover:text-background"
              aria-label="Anterior"
              style={{ cursor: "pointer" }}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 bg-card text-foreground transition hover:bg-foreground hover:text-background"
              aria-label="Siguiente"
              style={{ cursor: "pointer" }}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carrusel horizontal */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-4"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        >
          {events.map((event, i) => (
            <article
              key={event.title}
              className={`
                group shrink-0 overflow-hidden rounded-2xl bg-card shadow-sm
                transition-all duration-700 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                hover:-translate-y-2 hover:shadow-2xl
              `}
              style={{
                transitionDelay: `${0.1 + i * 0.1}s`,
                scrollSnapAlign: "start",
                width: "clamp(280px, 80vw, 360px)",
              }}
            >
              <Link href={event.link}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 80vw, 360px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-sm text-warm">
                    <Calendar className="h-4 w-4" />
                    {event.date} &middot;{" "}
                    <Badge
                      variant={
                        event.status === "Finalizado" ? "success" : "info"
                      }
                    >
                      {event.status}
                    </Badge>
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
