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
    <div className="min-h-screen bg-[#f4f6f4] text-[#090b09]">
      {/* Hero Header */}
      <section className="pt-28 pb-12 bg-[#27322a] border-b border-[#3a473e] text-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Link
              href="/work"
              className="group mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-300 hover:text-[#d9fea4] transition-colors"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to work
            </Link>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="rounded bg-[#3a473e] px-2.5 py-0.5 font-mono text-xs font-bold text-[#d9fea4] border border-[#4d5e52]">
                  {project.index}
                </span>
                <span className="font-mono text-xs text-[#a0ada3] uppercase tracking-wider">
                  Case Study
                </span>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
                {project.fullTitle}
              </h1>
              <p className="max-w-2xl text-lg text-[#c5cec7] leading-relaxed">
                {project.tagline}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#d9fea4] hover:bg-[#c6f584] px-6 py-3
                           text-sm font-bold text-[#27322a] border border-[#c6f584] shadow-md shadow-[#d9fea4]/25 transition-all w-fit cursor-pointer"
              >
                <span>Live Demo</span>
                <ExternalLink className="h-4 w-4" />
              </a>

              {/* Demo Credentials */}
              {project.credentials && (
                <div className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs text-[#a0ada3]">
                  {project.credentials.login && (
                    <span>
                      <span>login :</span>{" "}
                      <span className="text-white font-semibold">{project.credentials.login}</span>
                    </span>
                  )}
                  <span>
                    <span>password :</span>{" "}
                    <span className="text-white font-semibold">{project.credentials.password}</span>
                  </span>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Body */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-4xl">
            {/* Screenshot Carousel */}
            <div>
              <ImageCarousel
                images={project.images}
                alt={project.name}
                aspect="aspect-[16/9]"
              />
            </div>

            {/* Tech Stack — placed above About the Project */}
            <section className="mt-14 space-y-4 rounded-2xl border border-[#e2e6e2] bg-white p-6 md:p-8 shadow-xs">
              <div className="flex items-center gap-2 border-b border-[#e2e6e2] pb-3">
                <Code className="h-4 w-4 text-[#27322a]" />
                <h2 className="font-mono text-xs uppercase tracking-widest text-[#090b09] font-bold">
                  Technologies &amp; Stack
                </h2>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-[#e2e6e2] bg-[#f4f6f4] px-3 py-1.5 font-mono text-xs font-medium text-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Project Details / Description — below Tech Stack */}
            <section className="mt-8 space-y-4 rounded-2xl border border-[#e2e6e2] bg-white p-6 md:p-8 shadow-xs">
              <div className="flex items-center gap-2 border-b border-[#e2e6e2] pb-3">
                <Layers className="h-4 w-4 text-[#27322a]" />
                <h2 className="font-mono text-xs uppercase tracking-widest text-[#090b09] font-bold">
                  About the Project
                </h2>
              </div>
              <div className="space-y-4 pt-2">
                {project.description.map((paragraph, i) => {
                  // Render the "Key Features" paragraph with proper bullet formatting
                  if (paragraph.startsWith("Key Features")) {
                    const lines = paragraph.split("\n").filter(Boolean);
                    const heading = lines[0];
                    const bullets = lines.slice(1);
                    return (
                      <div key={i} className="pt-2">
                        <p className="font-semibold text-[#090b09] mb-2">{heading}</p>
                        <ul className="space-y-1.5 pl-1">
                          {bullets.map((bullet, j) => (
                            <li key={j} className="flex items-start gap-2 text-[#525854] text-sm leading-relaxed">
                              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#27322a]" />
                              <span>{bullet.replace(/^•\s*/, "")}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                  return (
                    <p key={i} className="leading-relaxed text-[#525854] text-base">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </section>
          </div>
        </Container>
      </section>
    </div>
  );
}
