"use client";

import { Project } from "@/types/portfolio";
import Link from "next/link";
import { Code2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group h-full"
    >
      <div className="h-full rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-800/40 backdrop-blur-xl hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/20 flex flex-col">
        {/* Image Section */}
        <div className="relative h-56 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-slate-700 group-hover:scale-110 transition-transform duration-500">
            {project.image === "/projects/complaint-system.jpg" && "📋"}
            {project.image === "/projects/project-management.jpg" && "📊"}
            {project.image === "/projects/productivity-tool.jpg" && "✨"}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Category Badge */}
          <div className="mb-3">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-900/30 text-blue-300 uppercase tracking-wide">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-400 mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded bg-slate-800 text-slate-300"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-2 py-1 text-xs rounded bg-slate-800 text-slate-300">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-4 border-t border-slate-800">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition-colors text-sm font-medium"
            >
              <Code2 className="w-4 h-4" />
              Code
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors text-sm font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
