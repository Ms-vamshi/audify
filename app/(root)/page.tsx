"use client";

import { useQuery } from "convex/react";

import Header from "@/components/Header";
import LoaderSpinner from "@/components/Loader";
import PodcastCard from "@/components/PodcastCard";
import { demoPodcasts } from "@/constants";
import { api } from "@/convex/_generated/api";

// import { cn } from "@/lib/utils";
// import Searchbar from "@/components/Searchbar";

const Home = () => {
  const trendingPodcasts = useQuery(api.podcasts.getTrendingPodcasts);
  const latestPodcasts = useQuery(api.podcasts.getAllPodcasts);

  if (!trendingPodcasts || !latestPodcasts) return <LoaderSpinner />;

  return (
    <div className="mt-9 flex flex-col gap-9">
      <div className="flex flex-col gap-9 lg:flex-row">
        {/* Main Demo Podcasts Grid */}
        <section className="flex flex-1 flex-col gap-5">
          <h1 className="text-20 font-bold text-white-1">Podcasts</h1>
          <div className="podcast_grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {demoPodcasts.slice(0, 6).map((podcast) => (
              podcast.id !== undefined ? (
                <PodcastCard
                  key={podcast.id}
                  imgUrl={podcast.imgURL}
                  title={podcast.title}
                  description={podcast.description}
                  podcastId={podcast.id.toString()}
                  audioUrl={podcast.audioUrl}
                />
              ) : null
            ))}
          </div>
        </section>
        {/* Removed Top Podcasts List on the right */}
      </div>

      {/* Trending Podcasts Section */}
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>
        <div className="podcast_grid">
          {trendingPodcasts.map((podcast) => (
            <PodcastCard
              key={podcast._id}
              imgUrl={podcast.imageUrl!}
              title={podcast.podcastTitle!}
              description={podcast.podcastDescription}
              podcastId={podcast._id}
            />
          ))}
        </div>
      </section>

      {/* Demo Podcasts Below Trending */}
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">More Podcasts</h1>
        <div className="podcast_grid">
          {demoPodcasts.slice(4, 7).map((podcast) => (
            podcast.id !== undefined ? (
              <PodcastCard
                key={podcast.id}
                imgUrl={podcast.imgURL}
                title={podcast.title}
                description={podcast.description}
                podcastId={podcast.id.toString()}
              />
            ) : null
          ))}
        </div>
      </section>

      <Header />
    </div>
  );
};

export default Home;
