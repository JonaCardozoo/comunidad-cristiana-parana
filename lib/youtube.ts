import {
  streamingFallback,
  youtubeChannel,
  youtubeThumbnail,
  youtubeWatchUrl,
  type StreamingData,
} from "@/lib/streaming";

/** Segundos entre consultas a YouTube (en vivo ↔ último video) */
export const STREAMING_REVALIDATE_SECONDS = 60;

type YtSearchItem = {
  id?: { videoId?: string };
  snippet?: {
    title?: string;
    thumbnails?: { high?: { url?: string }; medium?: { url?: string } };
    liveBroadcastContent?: "live" | "none" | "upcoming";
  };
};

function env(key: string): string {
  return (process.env[key] ?? "").trim();
}

async function ytSearch(
  params: Record<string, string>,
  apiKey: string
): Promise<YtSearchItem[]> {
  const url = new URL("https://www.googleapis.com/youtube/v3/search");
  url.searchParams.set("part", "snippet");
  url.searchParams.set("key", apiKey);
  for (const [k, v] of Object.entries(params)) {
    url.searchParams.set(k, v);
  }

  const res = await fetch(url.toString(), {
    next: { revalidate: STREAMING_REVALIDATE_SECONDS },
  });

  if (!res.ok) {
    if (process.env.NODE_ENV === "development") {
      const body = await res.text();
      console.error("[YouTube API]", res.status, body.slice(0, 200));
    }
    return [];
  }

  const data = (await res.json()) as { items?: YtSearchItem[] };
  return data.items ?? [];
}

function itemToStream(
  item: YtSearchItem,
  isLive: boolean,
  automated: boolean
): StreamingData | null {
  const videoId = item.id?.videoId;
  if (!videoId) return null;

  const title = item.snippet?.title ?? (isLive ? "En vivo ahora" : "Última transmisión");
  const thumb =
    item.snippet?.thumbnails?.high?.url ??
    item.snippet?.thumbnails?.medium?.url ??
    youtubeThumbnail(videoId);

  return {
    isLive,
    videoId,
    title,
    thumbnailUrl: thumb,
    watchUrl: youtubeWatchUrl(videoId),
    channelUrl: youtubeChannel.channelUrl,
    subscribeUrl: youtubeChannel.subscribeUrl,
    automated,
  };
}

function fallbackData(): StreamingData {
  const videoId = env("YOUTUBE_FALLBACK_VIDEO_ID") || streamingFallback.videoId;
  const hasVideo = Boolean(videoId);

  return {
    isLive: false,
    videoId: hasVideo ? videoId : null,
    title: streamingFallback.title,
    thumbnailUrl: hasVideo ? youtubeThumbnail(videoId) : null,
    watchUrl: hasVideo ? youtubeWatchUrl(videoId) : youtubeChannel.channelUrl,
    channelUrl: youtubeChannel.channelUrl,
    subscribeUrl: youtubeChannel.subscribeUrl,
    automated: false,
  };
}

/**
 * 1. Si hay transmisión en vivo → la muestra con badge EN VIVO
 * 2. Si no hay live → muestra el último video publicado del canal
 * 3. Si falla la API → usa YOUTUBE_FALLBACK_VIDEO_ID
 */
export async function getStreamingData(): Promise<StreamingData> {
  const channelId = env("YOUTUBE_CHANNEL_ID") || youtubeChannel.channelId;
  const apiKey = env("YOUTUBE_API_KEY");

  if (!channelId || !apiKey) {
    return fallbackData();
  }

  try {
    // Paso 1: ¿Hay algo en vivo ahora?
    const liveItems = await ytSearch(
      {
        channelId,
        eventType: "live",
        type: "video",
        maxResults: "1",
      },
      apiKey
    );

    const live = itemToStream(liveItems[0], true, true);
    if (live) return live;

    // Paso 2: No hay live → último video del canal (el stream recién terminado queda acá)
    const latestItems = await ytSearch(
      {
        channelId,
        order: "date",
        type: "video",
        maxResults: "10",
      },
      apiKey
    );

    const latest = latestItems.find(
      (item) => item.snippet?.liveBroadcastContent !== "upcoming"
    );

    const stream = itemToStream(latest ?? latestItems[0], false, true);
    if (stream) return stream;
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.error("[YouTube API] Error:", err);
    }
  }

  return fallbackData();
}
