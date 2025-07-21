"use client";

import { useQuery } from "convex/react";

import EmptyState from "@/components/EmptyState";
import LoaderSpinner from "@/components/Loader";
import PodcastCard from "@/components/PodcastCard";
import Searchbar from "@/components/Searchbar";
import { demoPodcasts } from "@/constants";
import { api } from "@/convex/_generated/api";
import { cn } from "@/lib/utils";

const DiscoverPage = ({
  searchParams,
}: {
  searchParams: {
    search: string;
  };
}) => {
  const search = searchParams.search || "";
  const podcastsData = useQuery(api.podcasts.getPodcastBySearch, {
    search,
  });

  return (
    <section className="flex flex-col gap-9">
      <Searchbar />
      {/* Demo Podcasts Section */}
      <div className="flex flex-col gap-6">
        <h2 className="text-18 font-bold text-white-1">Demo Podcasts</h2>
        <div className="podcast_grid">
          {demoPodcasts.map((podcast) => (
            podcast.id !== undefined ? (
              <div key={podcast.id} className="relative">
                {podcast.tag === "fansLike" && (
                  <span className="absolute left-2 top-2 z-10 rounded bg-orange-1 px-2 py-1 text-xs font-bold text-white-1">Fans Like You</span>
                )}
                {podcast.tag === "topPodcast" && (
                  <span className="absolute left-2 top-2 z-10 rounded bg-green-600 px-2 py-1 text-xs font-bold text-white-1">Top Podcast</span>
                )}
                <PodcastCard
                  imgUrl={podcast.imgURL}
                  title={podcast.title}
                  description={podcast.description}
                  podcastId={podcast.id.toString()}
                  audioUrl={podcast.audioUrl}
                  // You can add more props if needed
                />
              </div>
            ) : null
          ))}
        </div>
      </div>
      {/* Existing Podcasts Section */}
      <div className="flex flex-col gap-9">
        <h1
          className={cn("text-20 font-bold text-white-1", {
            "text-white-2": search,
          })}
        >
          {!search ? "Discover Trending Podcasts" : `Search results for: `}
          {search && <span className="text-white-2">{search}</span>}
        </h1>
        {podcastsData ? (
          <>
            {podcastsData.length > 0 ? (
              <div className="podcast_grid">
                {podcastsData?.map((podcast) => (
                  <PodcastCard
                    key={podcast._id}
                    imgUrl={podcast.imageUrl!}
                    title={podcast.podcastTitle!}
                    description={podcast.podcastDescription}
                    podcastId={podcast._id}
                  />
                ))}
              </div>
            ) : (
              <EmptyState title="No results found" />
            )}
          </>
        ) : (
          <LoaderSpinner />
        )}
      </div>
    </section>
  );
};

export default DiscoverPage;
