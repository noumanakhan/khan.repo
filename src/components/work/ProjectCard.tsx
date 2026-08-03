import Link from "next/link";
import { Project } from "@/data/types";
import ImageCarousel from "./ImageCarousel";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="group flex flex-col overflow-hidden rounded-2xl border border-[#252525] bg-[#161616]/80
                 p-4 transition-all duration-300 hover:border-[#ccef4d]/50 hover:bg-[#161616] hover:shadow-xl hover:shadow-[#ccef4d]/5"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded bg-[#ccef4d]/10 px-2 py-0.5 font-mono text-xs font-bold text-[#ccef4d] border border-[#ccef4d]/30">
          {project.index}
        </span>
        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-1 font-mono text-xs text-slate-400 transition-colors group-hover:text-[#ccef4d]"
        >
          <span>View case study</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <ImageCarousel images={project.images} alt={project.name} />

      <div className="mt-4 flex flex-1 flex-col justify-between gap-3 px-1 pb-1">
        <div>
          <Link href={`/work/${project.slug}`}>
            <h3 className="text-xl font-bold text-white transition-colors group-hover:text-[#ccef4d]">
              {project.fullTitle}
            </h3>
          </Link>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.tagline}</p>
        </div>

        <div className="mt-2 flex flex-wrap gap-1.5 pt-2 border-t border-[#252525]">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-[#252525] bg-[#0d0d0d] px-2 py-0.5 font-mono text-[11px] text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="rounded-md border border-[#252525] bg-[#0d0d0d] px-2 py-0.5 font-mono text-[11px] text-slate-500">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
