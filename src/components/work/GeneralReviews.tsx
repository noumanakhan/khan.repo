"use client";

import { useState } from "react";
import { reviews, Review } from "@/data/reviews";
import { Star, ChevronDown, ChevronUp, User } from "lucide-react";

export default function GeneralReviews() {
  const [showAll, setShowAll] = useState(false);

  const initialCount = 6;
  const displayedReviews = showAll ? reviews : reviews.slice(0, initialCount);
  const remainingCount = reviews.length - initialCount;

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => {
          const isFull = rating >= star;
          const isHalf = rating >= star - 0.5 && rating < star;
          return (
            <Star
              key={star}
              className={`h-4 w-4 ${isFull
                  ? "fill-[#ccef4d] text-[#ccef4d]"
                  : isHalf
                    ? "fill-[#ccef4d]/50 text-[#ccef4d]"
                    : "fill-[#252525] text-slate-700"
                }`}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="mt-20 border-t border-[#252525] pt-16">
      {/* Header */}
      <div className="mb-10 text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full bg-[#ccef4d]/10 px-3.5 py-1 text-xs font-mono font-bold text-[#ccef4d] border border-[#ccef4d]/30">
          <Star className="h-3.5 w-3.5 fill-[#ccef4d] text-[#ccef4d]" />
          <span>4.9 / 5.0 Rating & Reviews</span>
        </div>
        <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          What Clients & Collaborators Say
        </h3>
        <p className="text-sm text-slate-400">
          Verified feedback from client project leads, system stakeholders, and users.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayedReviews.map((rev: Review) => (
          <div
            key={rev.id}
            className="flex flex-col justify-between gap-4 rounded-2xl border border-[#252525] bg-[#161616]/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#ccef4d]/40 hover:bg-[#161616] hover:shadow-lg hover:shadow-[#ccef4d]/5"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                {renderStars(rev.rating)}
                <span className="font-mono text-[11px] text-slate-500">{rev.date}</span>
              </div>

              {rev.projectMentioned && (
                <span className="inline-block rounded-md bg-[#ccef4d]/10 px-2 py-0.5 font-mono text-[10px] font-bold text-[#ccef4d] border border-[#ccef4d]/20">
                  {rev.projectMentioned}
                </span>
              )}

              <p className="text-sm leading-relaxed text-slate-300">
                &ldquo;{rev.comment}&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-[#252525]">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#ccef4d]/10 text-[#ccef4d] border border-[#ccef4d]/30">
                <User className="h-4 w-4" />
              </div>
              <div className="overflow-hidden leading-tight">
                <div className="truncate text-sm font-semibold text-white">{rev.name}</div>
                <div className="truncate text-xs text-slate-400">{rev.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More / Show Less Toggle Button */}
      <div className="mt-10 text-center">
        <button
          type="button"
          onClick={() => setShowAll(!showAll)}
          className="inline-flex items-center gap-2 rounded-full border border-[#252525] bg-[#161616] px-6 py-3 text-sm font-bold text-slate-200 transition-all hover:border-[#ccef4d]/50 hover:bg-[#161e30] hover:text-[#ccef4d] hover:shadow-md"
        >
          {showAll ? (
            <>
              <span>Show Less Reviews</span>
              <ChevronUp className="h-4 w-4 text-[#ccef4d]" />
            </>
          ) : (
            <>
              <span>See More Reviews ({remainingCount} more)</span>
              <ChevronDown className="h-4 w-4 text-[#ccef4d]" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
