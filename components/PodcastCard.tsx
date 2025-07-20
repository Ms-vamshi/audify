"use client";
import { useMutation } from "convex/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { api } from "@/convex/_generated/api";
import { PodcastCardProps } from "@/types";
import { useAudio } from "@/providers/AudioProvider";

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
    <div onClick={handleViews} className="cursor-pointer">
      <figure className="flex flex-col gap-2">
        <Image
          src={imgUrl}
          width={174}
          height={174}
          alt="pod"
          className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"
        />
        <div className="flex flex-col">
          <h1 className="text-16 truncate font-bold text-white-1">{title}</h1>
          <h2 className="text-12 truncate font-normal capitalize text-white-4">
            {description}
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
