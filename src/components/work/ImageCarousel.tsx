"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  aspect?: string;
}

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 28 : -28, scale: 0.97 }),
  center: { opacity: 1, x: 0, scale: 1 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -28 : 28, scale: 0.97 }),
};

export default function ImageCarousel({
  images,
  alt,
  aspect = "aspect-[16/10]",
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [errorMap, setErrorMap] = useState<Record<number, boolean>>({});

  if (!images || !images.length) return null;

  const goTo = (i: number) => {
    const next = (i + images.length) % images.length;
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  };

  return (
    <div
      className={`group relative w-full overflow-hidden rounded-xl
                  bg-[#f2f4f2] border border-[#e0e5e0] ${aspect}`}
    >
      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: [0.25, 0.8, 0.35, 1] }}
          className="absolute inset-0"
        >
          {!errorMap[index] ? (
            <Image
              src={images[index]}
              alt={`${alt} — screenshot ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain p-1 rounded-lg"
              priority={index === 0}
              onError={() => setErrorMap((p) => ({ ...p, [index]: true }))}
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center
                            bg-gradient-to-br from-[#f8f9f9] via-[#f2f4f2] to-slate-200 p-4 text-center">
              <ImageIcon className="mb-2 h-8 w-8 text-[#27322a]/40" />
              <span className="font-mono text-xs text-slate-700 font-medium">{alt}</span>
              <span className="mt-1 font-mono text-[10px] text-slate-500">
                Screenshot {index + 1} of {images.length}
              </span>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          {/* Prev */}
          <button
            type="button"
            aria-label="Previous screenshot"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); goTo(index - 1); }}
            className="absolute left-2 top-1/2 z-20 flex h-7 w-7 -translate-y-1/2 items-center justify-center
                       rounded-full bg-white/90 text-slate-700 shadow-md backdrop-blur-md
                       opacity-0 group-hover:opacity-100 transition-all duration-200
                       hover:bg-[#d9fea4] hover:text-[#27322a] hover:scale-110"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Next */}
          <button
            type="button"
            aria-label="Next screenshot"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); goTo(index + 1); }}
            className="absolute right-2 top-1/2 z-20 flex h-7 w-7 -translate-y-1/2 items-center justify-center
                       rounded-full bg-white/90 text-slate-700 shadow-md backdrop-blur-md
                       opacity-0 group-hover:opacity-100 transition-all duration-200
                       hover:bg-[#d9fea4] hover:text-[#27322a] hover:scale-110"
          >
            <ChevronRight className="h-4 w-4" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-2.5 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to screenshot ${i + 1}`}
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); goTo(i); }}
                className={`rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-5 h-1.5 bg-[#27322a]"
                    : "w-1.5 h-1.5 bg-slate-400/40 hover:bg-slate-600"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
