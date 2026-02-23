"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const opacity = Math.max(1 - offsetY / 600, 0);
  const overlayOpacity = Math.min(0.6 + offsetY / 800, 0.85);
  const scale = 1 + offsetY * 0.0003;

  return (
    <section
      id="inicio"
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <div
        className="absolute inset-0"
        style={{ transform: `scale(${scale}) translateY(${offsetY * 0.3}px)` }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/videoiglesia4.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Dynamic overlay */}
      <div
        className="absolute inset-0 bg-primary"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content */}
      <div
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        style={{ opacity, transform: `translateY(${offsetY * 0.15}px)` }}
      >
        <p className="animate-fade-in-up mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary-foreground/70">
          Bienvenido a casa
        </p>
        <h1 className="animate-fade-in-up delay-200 mb-6  text-5xl font-bold leading-tight text-primary-foreground text-balance md:text-7xl lg:text-8xl">
          Comunidad Cristiana Paraná
        </h1>
        <p className="animate-fade-in-up delay-400 mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 text-pretty md:text-xl">
          "A quienes Dios quiso dar a conocer las riquezas de la gloria de este
          misterio entre los gentiles; que es Cristo en vosotros, la esperanza
          de gloria"
          <div className="mt-2 text-lg font-semibold text-primary-foreground/70">
            <b>Colonses 1:27</b>
          </div>
        </p>
        <div className="animate-fade-in-up delay-600 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#reuniones"
            className="inline-flex items-center rounded-full bg-warm px-8 py-3.5 text-sm font-semibold text-warm-foreground transition-transform hover:scale-105"
          >
            Nuestras reuniones
          </a>
          <a
            href="#nosotros"
            className="inline-flex items-center rounded-full border border-primary-foreground/30 px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Conocenos
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ opacity }}
      >
        <ChevronDown className="h-6 w-6 text-primary-foreground/60" />
      </div>
    </section>
  );
}
