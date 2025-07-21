"use client";

import { useQuery } from "convex/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import { demoPodcasts } from "@/constants";
import { api } from "@/convex/_generated/api";
import { useAudio } from "@/providers/AudioProvider";

import Header from "./Header";

const RightSidebar = () => {
  const { setAudio } = useAudio();
  const router = useRouter();
  const topPodcasters = useQuery(api.users.getTopUserByPodcastCount);
  return (
    <section className="right_sidebar bg-gray-800 h-[calc(100vh-5px)]">
      <section className="flex flex-col gap-4 mt-8">
        <h2 className="text-16 font-bold text-white-1 mb-2">Top Podcasts</h2>
        {demoPodcasts.slice(0, 2).map((podcast) => (
          <div
            key={podcast.id}
            className="flex items-center gap-3 border-b border-black-5 pb-3 last:border-b-0 last:pb-0 cursor-pointer"
            onClick={() => setAudio({
              title: podcast.title,
              audioUrl: podcast.audioUrl,
              author: podcast.title,
              imageUrl: podcast.imgURL,
              podcastId: podcast.id.toString(),
            })}
          >
            <Image
              src={podcast.imgURL}
              alt={podcast.title}
              width={48}
              height={48}
              className="object-cover size-12 rounded"
            />
            <div className="flex flex-col">
              <span className="text-14 font-bold text-white-1">{podcast.title}</span>
            </div>
          </div>
        ))}
      </section>
      <section className="flex flex-col gap-8 pt-12">
        <Header headerTitle="Top Podcasters" />
        <div className="flex flex-col gap-6">
          {topPodcasters?.slice(0, 4).map((podcaster) => (
            <div
              key={podcaster._id}
              className="flex justify-between cursor-pointer"
              onClick={() => router.push(`/profile/${podcaster.clerkId}`)}
            >
              <figure className="flex items-center gap-2">
                <Image
                  src={podcaster.imageUrl}
                  alt="casters"
                  width={44}
                  height={44}
                  className="aspect-square rounded-lg"
                />
                <h2 className="text-14 font-semibold text-white-1">
                  {podcaster.name}
                </h2>
              </figure>
              <div className="flex items-center">
                <p className="text-12 font-normal text-white-1">
                  {podcaster.totalPodcasts}&nbsp; podcasts
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default RightSidebar;
