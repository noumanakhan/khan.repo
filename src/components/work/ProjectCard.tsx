"use client";

import Link from "next/link";
import { Project } from "@/data/types";
import ImageCarousel from "./ImageCarousel";
import { ArrowUpRight } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useRef } from "react";

/* ─── helper: map motion value to CSS transform ─────────────────────────── */
function useTilt(mouseX: MotionValue<number>, mouseY: MotionValue<number>) {
  const rx = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 260,
    damping: 26,
  });
  const ry = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 260,
    damping: 26,
  });
  return { rx, ry };
}

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { rx, ry } = useTilt(mouseX, mouseY);

  // cursor-tracked spotlight
  const glowX = useTransform(mouseX, [-0.5, 0.5], ["15%", "85%"]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], ["15%", "85%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ perspective: 1200 }}
      className="group h-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.015 }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
        className="relative h-full flex flex-col rounded-3xl overflow-hidden
                   bg-white border border-[#e0e5e0]
                   shadow-[0_2px_16px_rgba(39,50,42,0.06)]
                   hover:shadow-[0_20px_60px_rgba(39,50,42,0.13)]
                   transition-shadow duration-500"
      >
        {/* ── Cursor-tracked spotlight ─────────────────────────────────── */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(380px circle at ${glowX} ${glowY}, rgba(217,254,164,0.18) 0%, transparent 68%)`,
          }}
        />

        {/* ── Top shimmer border (gradient line) ───────────────────────── */}
        <div className="absolute inset-x-0 top-0 h-[2px] z-10 rounded-t-3xl
                        bg-gradient-to-r from-transparent via-[#c6f584]/70 to-transparent
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* ── Image / Carousel ──────────────────────────────────────────── */}
        <div className="relative z-10 p-3 pb-0">
          <div className="rounded-2xl overflow-hidden ring-1 ring-[#e0e5e0] group-hover:ring-[#c6f584]/50 transition-all duration-500">
            <ImageCarousel images={project.images} alt={project.name} />
          </div>
        </div>

        {/* ── Content ──────────────────────────────────────────────────── */}
        <div className="relative z-10 flex flex-1 flex-col gap-4 p-5 pt-4">

          {/* Row: index badge + link */}
          <div className="flex items-center justify-between">
            <motion.span
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 420 }}
              className="inline-flex items-center gap-1.5 rounded-full
                         bg-[#27322a] text-[#d9fea4]
                         px-3 py-0.5 font-mono text-[11px] font-bold uppercase tracking-widest
                         shadow-sm select-none"
            >
              <span className="opacity-60">#</span>
              {String(index + 1).padStart(2, "0")}
            </motion.span>

            <motion.div whileHover={{ x: 2, y: -2 }} transition={{ type: "spring", stiffness: 450, damping: 18 }}>
              <Link
                href={`/work/${project.slug}`}
                className="group/link inline-flex items-center gap-1 text-[11px] font-semibold
                           text-[#525854] hover:text-[#27322a] transition-colors duration-200 font-mono"
              >
                View case study
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200
                                         group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>

          {/* Title + tagline */}
          <div>
            <Link href={`/work/${project.slug}`}>
              <h3 className="text-[1.15rem] font-bold leading-snug text-[#090b09]
                             group-hover:text-[#27322a] transition-colors duration-300 mb-1.5">
                {project.fullTitle}
              </h3>
            </Link>
            <p className="text-sm leading-relaxed text-[#60686a] line-clamp-2">
              {project.tagline}
            </p>
          </div>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-[#eaeeea]">
            {project.techStack.slice(0, 5).map((tech, ti) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 + ti * 0.04, duration: 0.35 }}
                whileHover={{ scale: 1.09, y: -1 }}
                className="rounded-full border border-[#e0e5e0] bg-[#f6f8f6]
                           px-2.5 py-0.5 font-mono text-[10.5px] font-medium
                           text-[#3a4740] cursor-default tracking-tight
                           hover:border-[#c6f584] hover:bg-[#f0fce4] transition-colors duration-200"
              >
                {tech}
              </motion.span>
            ))}
            {project.techStack.length > 5 && (
              <span className="rounded-full border border-[#e0e5e0] bg-[#f6f8f6]
                               px-2.5 py-0.5 font-mono text-[10.5px] text-[#8a9290]">
                +{project.techStack.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* ── Bottom CTA bar ───────────────────────────────────────────── */}
        <div className="relative z-10 px-5 pb-4">
          <Link
            href={`/work/${project.slug}`}
            className="group/cta flex w-full items-center justify-between
                       rounded-xl bg-[#f6f8f6] border border-[#e0e5e0]
                       px-4 py-2.5
                       hover:bg-[#27322a] hover:border-[#27322a]
                       transition-all duration-300 shadow-xs"
          >
            <span className="text-[12px] font-semibold text-[#27322a] group-hover/cta:text-[#d9fea4] transition-colors duration-300 tracking-wide">
              Open full case study
            </span>
            <motion.span
              className="flex h-6 w-6 items-center justify-center rounded-full
                         bg-[#27322a] text-[#d9fea4]
                         group-hover/cta:bg-[#d9fea4] group-hover/cta:text-[#27322a]
                         transition-colors duration-300 shadow-sm"
              whileHover={{ rotate: 45 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
            >
              <ArrowUpRight className="h-3.5 w-3.5" />
            </motion.span>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
