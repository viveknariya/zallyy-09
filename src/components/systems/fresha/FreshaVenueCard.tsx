"use client";

import { Heart, Sparkles, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { VenueInteriorArtwork } from "./FreshaArt";
import type { FreshaVenue } from "./fresha-data";

/**
 * Reusable 3:2 venue photo listing card matching Fresha home rails & search lists.
 */
export function FreshaVenueCard({ venue }: { venue: FreshaVenue }) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="group flex flex-col">
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-surface">
        <Link href="/design-systems/fresha/venue" className="block h-full w-full">
          <VenueInteriorArtwork
            variant={venue.artworkVariant}
            className="h-full w-full transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </Link>

        {venue.featured && (
          <span className="absolute left-3 top-3 inline-flex h-6 items-center gap-1 rounded-full bg-white/75 backdrop-blur-md px-2.5 text-[13px] font-semibold text-foreground shadow-[0_8px_40px_rgba(13,13,13,0.12),0_0_0_0.5px_rgba(19,19,19,0.1)]">
            <Sparkles className="h-3 w-3 text-accent" />
            Featured
          </span>
        )}

        <button
          type="button"
          onClick={() => setLiked((v) => !v)}
          aria-label={liked ? `Remove ${venue.name} from favorites` : `Save ${venue.name} to favorites`}
          className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#131313]/35 text-white backdrop-blur-sm hover:bg-[#131313]/55 transition-colors cursor-pointer"
        >
          <Heart className={`h-4 w-4 ${liked ? "fill-[#ef6997] text-[#ef6997]" : "text-white"}`} />
        </button>
      </div>

      <Link href="/design-systems/fresha/venue" className="mt-2.5 block space-y-1">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-base font-semibold leading-[22px] text-foreground truncate group-hover:text-accent transition-colors">
            {venue.name}
          </h3>
          <span className="inline-flex shrink-0 items-center gap-1 text-[13px] font-semibold tabular-nums text-foreground">
            {venue.rating}
            <Star className="h-3.5 w-3.5 fill-[#ffc00a] text-[#ffc00a]" />
            <span className="font-normal text-muted">({venue.reviewsCount.toLocaleString()})</span>
          </span>
        </div>
        <p className="text-sm leading-5 text-muted truncate">{venue.location}</p>
        <div className="pt-1">
          <span className="inline-flex items-center rounded-md border border-border bg-background px-2 py-0.5 text-xs font-medium text-foreground">
            {venue.category}
          </span>
        </div>
      </Link>
    </article>
  );
}
