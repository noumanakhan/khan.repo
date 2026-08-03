import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import ImageCarousel from "@/components/work/ImageCarousel";
import { Container } from "@/components/container";
import { ArrowLeft, ExternalLink, Code, Layers } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.fullTitle} — Nouman A Khan`,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-[#0d0d0d] pt-8 pb-24 text-slate-100">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Link
            href="/work"
            className="group mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-400 hover:text-[#ccef4d] transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to work
          </Link>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="rounded bg-[#ccef4d]/10 px-2.5 py-0.5 font-mono text-xs font-bold text-[#ccef4d] border border-[#ccef4d]/30">
                {project.index}
              </span>
              <span className="font-mono text-xs text-slate-500 uppercase tracking-wider">
                Case Study
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              {project.fullTitle}
            </h1>
            <p className="max-w-2xl text-lg text-slate-400 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          <div className="mt-6">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#ccef4d] px-6 py-3
                         text-sm font-bold text-slate-950 shadow-lg shadow-[#ccef4d]/20 transition-all hover:bg-[#bce436] hover:shadow-[#ccef4d]/35"
            >
              <span>Live Demo</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          {/* Screenshot Carousel */}
          <div className="mt-10">
            <ImageCarousel
              images={project.images}
              alt={project.name}
              aspect="aspect-[16/9]"
            />
          </div>

          {/* Project Details / Description */}
          <section className="mt-14 space-y-4 rounded-2xl border border-[#252525] bg-[#161616]/80 p-6 md:p-8">
            <div className="flex items-center gap-2 border-b border-[#252525] pb-3">
              <Layers className="h-4 w-4 text-[#ccef4d]" />
              <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 font-bold">
                About the Project
              </h2>
            </div>
            <div className="space-y-4 pt-2">
              {project.description.map((paragraph, i) => (
                <p key={i} className="leading-relaxed text-slate-300 text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mt-8 space-y-4 rounded-2xl border border-[#252525] bg-[#161616]/80 p-6 md:p-8">
            <div className="flex items-center gap-2 border-b border-[#252525] pb-3">
              <Code className="h-4 w-4 text-[#ccef4d]" />
              <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 font-bold">
                Technologies & Stack
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-[#252525] bg-[#0d0d0d] px-3 py-1.5 font-mono text-xs font-medium text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
