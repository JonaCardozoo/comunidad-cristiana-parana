import { getStreamingData, STREAMING_REVALIDATE_SECONDS } from "@/lib/youtube";
import { StreamingSectionClient } from "@/components/streaming-section-client";

export const revalidate = STREAMING_REVALIDATE_SECONDS;

export async function StreamingSection() {
  const data = await getStreamingData();
  return <StreamingSectionClient data={data} />;
}