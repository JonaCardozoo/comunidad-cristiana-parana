"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Heart, BookOpen, Users, Star } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Amor",
    desc: "Creemos en el amor incondicional de Dios para cada persona.",
  },
  {
    icon: BookOpen,
    title: "Palabra",
    desc: "La Biblia es la base de todo lo que creemos y ensenamos.",
  },
  {
    icon: Users,
    title: "Comunidad",
    desc: "Crecemos juntos en fe, amistad y servicio.",
  },
  {
    icon: Star,
    title: "Proposito",
    desc: "Cada persona fue creada con un proposito unico y especial.",
  },
];

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="nosotros" className="bg-cream py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image side */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-60px)",
              transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <video
                src="/videos/videoiglesia5.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Text side */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(60px)",
              transition:
                "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
            }}
          >
            <h2 className="mb-6  text-4xl font-bold leading-tight text-foreground text-balance md:text-5xl">
              Nuestra visión
            </h2>
            <div className="mb-10 text-lg leading-relaxed text-muted-foreground text-pretty space-y-6">
  <p>
    Que Cristo sea el centro absoluto de todo. No predicamos al hombre
    ni sus esfuerzos, sino a Jesucristo y su obra consumada.
  </p>

  <p>
    Creemos que en Él está la vida, la justicia y la plenitud del creyente.
    Nuestra mirada no está puesta en la Ley, sino en la gracia; no en el desempeño,
    sino en la cruz; no en la culpa, sino en la identidad que recibimos en Cristo.
  </p>

  <p>
    Anunciamos su señorío, descansamos en su obra perfecta y vivimos desde
    la realidad de que Cristo no solo está con nosotros, sino en nosotros.
    Porque cuando Cristo es revelado, el corazón es transformado.
  </p>
</div>

            
          </div>
        </div>
      </div>
    </section>
  );
}
