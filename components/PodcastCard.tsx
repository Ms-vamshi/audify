"use client";
import { useMutation } from "convex/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { api } from "@/convex/_generated/api";
import { useAudio } from "@/providers/AudioProvider";
import { PodcastCardProps } from "@/types";

const PodcastCard = ({
  imgUrl,
  title,
  description,
  podcastId,
  audioUrl,
}: PodcastCardProps) => {
  const router = useRouter();
  const { setAudio } = useAudio();
  const updateViews = useMutation(api.podcasts.updatePodcastViews);

  const handleViews = async () => {
    if (typeof podcastId === "object" && podcastId !== null && "_tableName" in podcastId) {
      await updateViews({ podcastId });
      router.push(`/podcast/${podcastId}`, { scroll: true });
    } else {
      // For demo podcasts, just play audio in the footer
      setAudio({
        title,
        audioUrl: audioUrl || "",
        author: title,
        imageUrl: imgUrl,
        podcastId: podcastId.toString(),
      });
    }
  };
  return (
    <div className="rounded-xl flex flex-col gap-3 bg-gray-900 p-4 transition-shadow hover:shadow-lg cursor-pointer" onClick={handleViews}>
      <Image
        src={imgUrl}
        alt={title}
        width={400}
        height={160}
        className="h-40 w-full object-cover rounded-xl"
      />
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-base text-white-1">{title}</h2>
        <p className="text-sm text-white-2">{description}</p>
      </div>
    </div>
  );
};

export default PodcastCard;
