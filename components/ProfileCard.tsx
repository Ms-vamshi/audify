"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import { useAudio } from "@/providers/AudioProvider";
import { PodcastProps, ProfileCardProps } from "@/types";

import LoaderSpinner from "./Loader";
import { Button } from "./ui/button";

const ProfileCard = ({
  podcastData,
  imageUrl,
  userFirstName,
}: ProfileCardProps) => {
  const { setAudio } = useAudio();

  const [randomPodcast, setRandomPodcast] = useState<PodcastProps | null>(null);

  const playRandomPodcast = () => {
    const randomIndex = Math.floor(Math.random() * podcastData.podcasts.length);

    setRandomPodcast(podcastData.podcasts[randomIndex]);
  };

  useEffect(() => {
    if (randomPodcast) {
      setAudio({
        title: randomPodcast.podcastTitle,
        audioUrl: randomPodcast.audioUrl || "",
        imageUrl: randomPodcast.imageUrl || "",
        author: randomPodcast.author,
        podcastId: randomPodcast._id,
      });
    }
  }, [randomPodcast, setAudio]);

  if (!imageUrl) return <LoaderSpinner />;

  return (
    <div className="mt-6 flex flex-col gap-6 md:flex-row max-md:items-center">
      <Image
        src={imageUrl}
        width={250}
        height={250}
        alt="Podcaster"
        className="rounded-lg aspect-square"
      />
      <div className="flex flex-col gap-2.5 max-md:justify-center">
        <div className="flex flex-col gap-2.5">
          <figure className="flex gap-2 max-md:justify-center">
            <Image
              src="/icons/verified.svg"
              width={15}
              height={15}
              alt="verified"
            />
            <h2 className="font-medium text-14 text-white-2">
              Verified Creator
            </h2>
          </figure>
          <h1 className="font-extrabold text-32 text-white-1 tracking-[-0.32px]">
            {userFirstName}
          </h1>
        </div>
        <figure className="flex gap-3 py-6">
          <Image
            src="/icons/headphone.svg"
            width={24}
            height={24}
            alt="headphones"
          />
          <h2 className="font-semibold text-16 text-white-1">
            {podcastData?.listeners} &nbsp;
            <span className="font-normal text-white-2">monthly listeners</span>
          </h2>
        </figure>
        {podcastData?.podcasts.length > 0 && (
          <Button
            onClick={playRandomPodcast}
            className="font-extrabold bg-orange-1 text-16 text-white-1"
          >
            <Image
              src="/icons/Play.svg"
              width={20}
              height={20}
              alt="random play"
            />{" "}
            &nbsp; Play a random podcast
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
