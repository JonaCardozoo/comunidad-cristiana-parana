"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Clock, MapPin, Music, BookOpen, Users, Coffee } from "lucide-react";

const meetings = [
  {
    icon: BookOpen,
    title: "Reunion General",
    day: "Domingos",
    time: "10:00 hs",
    desc: "Adoracion, ensenanza biblica y comunion. Un espacio para toda la familia.",
  },

  {
    icon: Users,
    title: "Jovenes",
    day: "Viernes",
    time: "19:30 hs",
    desc: "Un espacio dinamico para la nueva generacion con musica, juegos y ensenanza.",
  },

];

export function MeetingsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="reuniones"
      className="relative overflow-hidden bg-background py-24 md:py-32"
    >
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div
          className="mb-16 text-center "
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-warm">
            Reuniones
          </p>
          <h2 className="mb-4  text-4xl font-bold text-foreground text-balance md:text-5xl">
            Encontra tu lugar
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Tenemos diferentes espacios durante la semana para que puedas
            conectar, crecer y ser parte de la comunidad.
          </p>
        </div>

        <div className="flex justify-center gap-6 md:gap-12 lg:gap-16">
          {meetings.map((m, i) => (
            <div
              key={m.title}
              className={`
group relative overflow-hidden rounded-2xl border border-border bg-card p-6
transition-all duration-200 ease-in
${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
hover:-translate-y-2 hover:shadow-2xl
`}
              style={{
                transitionDelay: `${0.1 + i * 0.15}s`,
              }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-warm/10 transition-colors ">
                <m.icon className="h-6 w-6 text-warm" />
              </div>
              <h3 className="mb-1 text-lg font-bold text-foreground">
                {m.title}
              </h3>
              <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {m.day} {m.time}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Location info */}
        <div
          className="mt-16 flex flex-col items-center justify-center gap-4 rounded-2xl bg-primary p-8 text-center sm:flex-row sm:text-left"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition:
              "opacity 0.8s ease-out 0.8s, transform 0.8s ease-out 0.8s",
          }}
        >
          <MapPin className="h-8 w-8 shrink-0 text-warm" />
          <div>
            <p className="text-lg font-semibold text-primary-foreground">
              Donde nos encontramos
            </p>
            <p className="text-primary-foreground/70">
              Calle las camelias 2846, Paraná, Entre Rios, Argentina
            </p>
          </div>
          <a
            href="https://maps.app.goo.gl/HH3quoxMuJ3UgTWu7"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-warm px-6 py-2.5 text-sm font-semibold text-warm-foreground transition-transform hover:scale-105 sm:ml-auto"
          >
            Como llegar
          </a>
        </div>
      </div>
    </section>
  );
}
