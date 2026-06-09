"use client";

import Image from "next/image";
import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import type { StreamingData } from "@/lib/streaming";
import { youtubeEmbedUrl } from "@/lib/streaming";

const stats = [
  { label: "DOM", desc: "Domingos 10:00 hs" },
  { label: "HD", desc: "Buena calidad" },
  { label: "LIVE", desc: "Estado automático" },
];

type Props = {
  data: StreamingData;
};

export function StreamingSectionClient({ data }: Props) {
  const [playing, setPlaying] = useState(data.isLive);

  const embedSrc =
    data.videoId && playing
      ? youtubeEmbedUrl(data.videoId, data.isLive)
      : null;

  return (
    <section
      id="streaming"
      className="relative overflow-hidden bg-primary py-16 sm:py-20 md:py-24 lg:py-28"
    >
      {/* Glow decorativo — oculto en móvil para no desbordar */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-32 top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-accent/25 blur-[100px] md:block" />
        <div className="absolute -right-20 top-0 hidden h-[320px] w-[320px] rounded-full bg-cream/10 blur-[90px] sm:block" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Video — primero en móvil */}
          <div className="order-1 w-full lg:order-2">
            <div className="mx-auto w-full max-w-xl lg:max-w-none">
              <div className="overflow-hidden rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 shadow-2xl shadow-black/30 ring-1 ring-primary-foreground/10 sm:rounded-2xl">
                {embedSrc ? (
                  <div className="relative aspect-video w-full">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={embedSrc}
                      title={data.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => data.videoId && setPlaying(true)}
                    className="group relative block aspect-video w-full cursor-pointer disabled:cursor-not-allowed"
                    disabled={!data.videoId}
                    aria-label={
                      data.videoId
                        ? "Reproducir transmisión"
                        : "Sin video disponible"
                    }
                  >
                    {data.thumbnailUrl ? (
                      <Image
                        src={data.thumbnailUrl}
                        alt={data.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.02] group-hover:brightness-90"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 560px"
                        unoptimized
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#1b263b] to-accent/40" />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />

                    {data.isLive ? (
                      <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm sm:left-4 sm:top-4 sm:gap-2 sm:px-3 sm:text-xs">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 sm:h-2 sm:w-2" />
                        EN VIVO
                      </span>
                    ) : (
                      data.automated && (
                        <span className="absolute left-3 top-3 max-w-[calc(100%-1.5rem)] rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-sm sm:left-4 sm:top-4 sm:px-3 sm:text-xs">
                          ÚLTIMA TRANSMISIÓN
                        </span>
                      )
                    )}

                    {data.videoId && (
                      <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-xl shadow-black/30 transition-transform group-hover:scale-110 sm:h-14 sm:w-14 md:h-16 md:w-16">
                        <Play className="h-5 w-5 fill-current pl-0.5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
                      </span>
                    )}
                  </button>
                )}
              </div>

              {data.title && (
                <p className="mt-3 line-clamp-2 text-center text-xs text-primary-foreground/70 sm:mt-4 sm:text-sm lg:text-left">
                  {data.title}
                </p>
              )}
            </div>
          </div>

          {/* Texto — debajo del video en móvil */}
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-foreground/90 sm:mb-6 sm:px-4 sm:text-xs sm:tracking-[0.18em]">
              <span
                className={`h-1.5 w-1.5 shrink-0 rounded-full sm:h-2 sm:w-2 ${
                  data.isLive
                    ? "animate-pulse bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                    : "bg-cream/60"
                }`}
                aria-hidden
              />
              <span className="truncate">
                {data.isLive
                  ? "En vivo ahora"
                  : data.automated
                    ? "Última transmisión"
                    : "En vivo todos los domingos"}
              </span>
            </div>

            <h2 className="text-balance text-3xl font-bold leading-[1.12] text-primary-foreground sm:text-4xl md:text-[2.75rem] lg:text-5xl">
              Seguinos{" "}
              <span className="text-cream">en YouTube</span>
            </h2>

            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/75 sm:mt-5 sm:max-w-lg sm:text-base md:text-lg lg:mx-0">
              {data.isLive
                ? "Estamos transmitiendo en este momento. Unite desde donde estés."
                : data.automated
                  ? "No estamos en vivo ahora. Podés ver la última transmisión del domingo."
                  : "Cada domingo transmitimos el culto para quienes no pueden asistir presencialmente. Suscribite al canal para no perderte ninguna reunión."}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href={data.watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-black/20 transition-all hover:bg-accent/90 sm:w-auto sm:px-7 sm:py-3.5"
              >
                {data.isLive ? "Ver en vivo" : "Ver última transmisión"}
                <ExternalLink className="h-4 w-4 shrink-0" />
              </a>
              <a
                href={data.subscribeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl border border-primary-foreground/25 bg-transparent px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10 sm:w-auto sm:px-7 sm:py-3.5"
              >
                Suscribirme
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-2 sm:mt-10 sm:gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 px-2 py-3 text-center backdrop-blur-sm sm:rounded-xl sm:px-3 sm:py-4"
                >
                  <p className="text-xs font-bold tracking-wide text-cream sm:text-sm">
                    {s.label}
                  </p>
                  <p className="mt-0.5 text-[10px] leading-snug text-primary-foreground/60 sm:mt-1 sm:text-[11px]">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
