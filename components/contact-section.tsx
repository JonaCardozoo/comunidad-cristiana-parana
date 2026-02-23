"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contacto" className="bg-background py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Info */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-60px)",
              transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
            }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-warm">
              Contacto
            </p>
            <h2 className="mb-6  text-4xl font-bold text-foreground text-balance md:text-5xl">
              Estamos para vos
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-muted-foreground text-pretty">
              Tenes alguna pregunta, necesitas oracion o simplemente queres saber mas sobre nuestra comunidad?
              No dudes en escribirnos.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-warm/10">
                  <MapPin className="h-5 w-5 text-warm" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Direccion</p>
                  <p className="text-sm text-muted-foreground">Calle Las camelias 2846, Paraná, Entre Rios</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-warm/10">
                  <Phone className="h-5 w-5 text-warm" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Telefono</p>
                  <p className="text-sm text-muted-foreground">+54 343 509-5743</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                

              </div>
            </div>
          </div>

          {/* Form */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(60px)",
              transition: "opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s",
            }}
          >
            <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="mb-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-warm focus:ring-1 focus:ring-warm focus:outline-none"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-warm focus:ring-1 focus:ring-warm focus:outline-none"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">
                  Asunto
                </label>
                <input
                  id="subject"
                  type="text"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-warm focus:ring-1 focus:ring-warm focus:outline-none"
                  placeholder="De que queres hablarnos?"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-warm focus:ring-1 focus:ring-warm focus:outline-none"
                  placeholder="Escribi tu mensaje..."
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-warm px-6 py-3.5 text-sm font-semibold text-warm-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {submitted ? "Mensaje enviado!" : (
                  <>{"Enviar mensaje"} <Send className="h-4 w-4" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
