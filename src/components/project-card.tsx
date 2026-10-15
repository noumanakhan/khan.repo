"use client";

import { Project } from "@/types/portfolio";
import Link from "next/link";
import { Code2, ExternalLink } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), {
    stiffness: 200,
    damping: 20,
  });
  const glowX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(nx);
    mouseY.set(ny);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group h-full"
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="h-full rounded-2xl overflow-hidden border border-[#e2e6e2] dark:border-slate-700/50 bg-white dark:bg-slate-800/40 backdrop-blur-xl shadow-sm hover:shadow-2xl hover:shadow-[#d9fea4]/20 dark:hover:shadow-[#ccef4d]/15 flex flex-col relative"
      >
        {/* Dynamic gradient glow that follows cursor */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
          style={{
            background: `radial-gradient(circle at ${glowX} ${glowY}, rgba(217,254,164,0.12) 0%, transparent 70%)`,
          }}
        />

        {/* Image Section */}
        <div className="relative h-56 bg-gradient-to-br from-[#f4f6f4] to-slate-200 dark:from-slate-800 dark:to-slate-900 overflow-hidden z-10">
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-full h-full flex items-center justify-center text-6xl font-bold text-slate-700 dark:text-slate-400"
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {project.image === "/projects/complaint-system.jpg" && "📋"}
            {project.image === "/projects/project-management.jpg" && "📊"}
            {project.image === "/projects/productivity-tool.jpg" && "✨"}
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-6 relative z-10 flex flex-col flex-1">
          {/* Category Badge */}
          <div className="mb-3">
            <motion.span
              className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#d9fea4]/40 dark:bg-[#ccef4d]/10 text-[#27322a] dark:text-[#ccef4d] uppercase tracking-wide border border-[#c6f584]/60 dark:border-[#ccef4d]/20"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {project.category}
            </motion.span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-[#090b09] dark:text-white mb-2 line-clamp-2 group-hover:text-[#27322a] dark:group-hover:text-[#ccef4d] transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-[#525854] dark:text-slate-400 mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.slice(0, 4).map((tech, ti) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + ti * 0.05 }}
                whileHover={{ scale: 1.1, y: -1 }}
                className="px-2 py-1 text-xs rounded bg-[#f4f6f4] dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-[#e2e6e2] dark:border-transparent cursor-default"
              >
                {tech}
              </motion.span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2 py-1 text-xs rounded bg-[#f4f6f4] dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-[#e2e6e2] dark:border-transparent">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-4 border-t border-[#e2e6e2] dark:border-slate-800 mt-auto">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#f4f6f4] dark:bg-slate-800 text-[#090b09] dark:text-slate-300 hover:bg-[#e5e8e5] dark:hover:bg-slate-700 transition-colors text-sm font-medium border border-[#e2e6e2] dark:border-transparent"
            >
              <Code2 className="w-4 h-4" />
              Code
            </motion.a>
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#d9fea4] hover:bg-[#c6f584] text-[#27322a] dark:bg-[#ccef4d] dark:hover:bg-[#bce436] dark:text-slate-950 transition-colors text-sm font-bold border border-[#c6f584]/60 dark:border-transparent shadow-sm hover:shadow-md hover:shadow-[#d9fea4]/30"
              >
                <ExternalLink className="w-4 h-4" />
                Live
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
