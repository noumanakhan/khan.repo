"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  aspect?: string;
}

export default function ImageCarousel({
  images,
  alt,
  aspect = "aspect-[16/10]",
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [errorMap, setErrorMap] = useState<Record<number, boolean>>({});

  if (!images || !images.length) return null;

  const goTo = (i: number) => setIndex((i + images.length) % images.length);

  const handleImageError = (imgIdx: number) => {
    setErrorMap((prev) => ({ ...prev, [imgIdx]: true }));
  };

  return (
    <div className={`group relative w-full overflow-hidden rounded-xl bg-[#0d0d0d] border border-[#252525] ${aspect}`}>
      {images.map((src, i) => (
        <div
          key={src + i}
          className={`absolute inset-0 transition-opacity duration-300 ${
            i === index ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
          }`}
        >
          {!errorMap[i] ? (
            <Image
              src={src}
              alt={`${alt} — screenshot ${i + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain p-1 rounded-lg"
              priority={i === 0}
              onError={() => handleImageError(i)}
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#0d0d0d] via-[#161616] to-[#0d1322] p-4 text-center">
              <ImageIcon className="mb-2 h-8 w-8 text-[#ccef4d]/70" />
              <span className="font-mono text-xs text-slate-300 font-medium">{alt}</span>
              <span className="mt-1 font-mono text-[10px] text-slate-500">
                Screenshot {i + 1} of {images.length}
              </span>
            </div>
          )}
        </div>
      ))}

      {images.length > 1 && (
        <>
          {/* Prev arrow */}
          <button
            type="button"
            aria-label="Previous screenshot"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goTo(index - 1);
            }}
            className="absolute left-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center
                       rounded-full bg-[#0d0d0d]/80 text-slate-200 opacity-0 backdrop-blur-md transition-all duration-200
                       group-hover:opacity-100 hover:bg-[#ccef4d] hover:text-slate-950 focus-visible:opacity-100
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ccef4d]"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Next arrow */}
          <button
            type="button"
            aria-label="Next screenshot"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goTo(index + 1);
            }}
            className="absolute right-2 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center
                       rounded-full bg-[#0d0d0d]/80 text-slate-200 opacity-0 backdrop-blur-md transition-all duration-200
                       group-hover:opacity-100 hover:bg-[#ccef4d] hover:text-slate-950 focus-visible:opacity-100
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ccef4d]"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to screenshot ${i + 1}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  goTo(i);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-5 bg-[#ccef4d]" : "w-1.5 bg-slate-500/40 hover:bg-slate-300"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
