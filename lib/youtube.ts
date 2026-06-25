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

type YtPlaylistItem = {
  snippet?: {
    title?: string;
    resourceId?: { videoId?: string };
    thumbnails?: { high?: { url?: string }; medium?: { url?: string } };
    liveBroadcastContent?: "live" | "none" | "upcoming";
  };
};

function env(key: string): string {
  return (process.env[key] ?? "").trim();
}

async function ytFetch<T>(
  endpoint: string,
  params: Record<string, string>,
  apiKey: string
): Promise<T | null> {
  const url = new URL(`https://www.googleapis.com/youtube/v3/${endpoint}`);
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
    return null;
  }

  return (await res.json()) as T;
}

async function ytSearch(
  params: Record<string, string>,
  apiKey: string
): Promise<YtSearchItem[]> {
  const data = await ytFetch<{ items?: YtSearchItem[] }>(
    "search",
    { part: "snippet", ...params },
    apiKey
  );
  return data?.items ?? [];
}

async function getLatestUpload(
  channelId: string,
  apiKey: string
): Promise<YtPlaylistItem | null> {
  const channelData = await ytFetch<{
    items?: Array<{
      contentDetails?: { relatedPlaylists?: { uploads?: string } };
    }>;
  }>("channels", { part: "contentDetails", id: channelId }, apiKey);

  const uploadsId =
    channelData?.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
  if (!uploadsId) return null;

  const playlistData = await ytFetch<{ items?: YtPlaylistItem[] }>(
    "playlistItems",
    { part: "snippet", playlistId: uploadsId, maxResults: "10" },
    apiKey
  );

  const items = playlistData?.items ?? [];
  return (
    items.find((item) => item.snippet?.liveBroadcastContent !== "upcoming") ??
    items[0] ??
    null
  );
}

function buildStreamData(
  videoId: string,
  title: string,
  thumb: string | undefined,
  isLive: boolean,
  automated: boolean
): StreamingData {
  return {
    isLive,
    videoId,
    title,
    thumbnailUrl: thumb ?? youtubeThumbnail(videoId),
    watchUrl: youtubeWatchUrl(videoId),
    channelUrl: youtubeChannel.channelUrl,
    subscribeUrl: youtubeChannel.subscribeUrl,
    automated,
  };
}

function searchItemToStream(
  item: YtSearchItem | undefined,
  isLive: boolean
): StreamingData | null {
  if (!item) return null;

  const videoId = item.id?.videoId;
  if (!videoId) return null;

  const title =
    item.snippet?.title ?? (isLive ? "En vivo ahora" : "Última transmisión");
  const thumb =
    item.snippet?.thumbnails?.high?.url ??
    item.snippet?.thumbnails?.medium?.url;

  return buildStreamData(videoId, title, thumb, isLive, true);
}

function playlistItemToStream(item: YtPlaylistItem | null): StreamingData | null {
  if (!item?.snippet) return null;

  const videoId = item.snippet.resourceId?.videoId;
  if (!videoId) return null;

  const title = item.snippet.title ?? "Última transmisión";
  const thumb =
    item.snippet.thumbnails?.high?.url ??
    item.snippet.thumbnails?.medium?.url;
  const isLive = item.snippet.liveBroadcastContent === "live";

  return buildStreamData(videoId, title, thumb, isLive, true);
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
    const liveItems = await ytSearch(
      {
        channelId,
        eventType: "live",
        type: "video",
        maxResults: "1",
      },
      apiKey
    );

    const live = searchItemToStream(liveItems[0], true);
    if (live) return live;

    const latestItem = await getLatestUpload(channelId, apiKey);
    const stream = playlistItemToStream(latestItem);
    if (stream) return stream;
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.error("[YouTube API] Error:", err);
    }
  }

  return fallbackData();
}
