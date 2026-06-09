function env(key: string): string {
  return (process.env[key] ?? "").trim();
}

/** Configuración del canal de YouTube de la iglesia */
export const youtubeChannel = {
  /** ID del canal (UC...) — ver .env.example */
  channelId: env("YOUTUBE_CHANNEL_ID"),
  /** Página del canal para suscribirse */
  channelUrl: env("YOUTUBE_CHANNEL_URL") || "https://www.youtube.com/",
  subscribeUrl:
    env("YOUTUBE_SUBSCRIBE_URL") ||
    env("YOUTUBE_CHANNEL_URL") ||
    "https://www.youtube.com/",
};

/** Fallback si no hay API key o falla la consulta */
export const streamingFallback = {
  videoId: env("YOUTUBE_FALLBACK_VIDEO_ID"),
  title: "Última transmisión",
};
export type StreamingData = {
  isLive: boolean;
  videoId: string | null;
  title: string;
  thumbnailUrl: string | null;
  watchUrl: string;
  channelUrl: string;
  subscribeUrl: string;
  /** true = datos de la API; false = fallback manual */
  automated: boolean;
};

export function youtubeWatchUrl(videoId: string) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

export function youtubeEmbedUrl(videoId: string, autoplay = false) {
  const params = autoplay ? "?autoplay=1" : "";
  return `https://www.youtube.com/embed/${videoId}${params}`;
}

export function youtubeThumbnail(videoId: string) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}
