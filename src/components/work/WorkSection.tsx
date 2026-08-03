import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import GeneralReviews from "./GeneralReviews";
import { Container } from "@/components/container";

export default function WorkSection() {
  return (
    <section id="work" className="pt-8 pb-24 bg-[#0d0d0d]">
      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block rounded-full bg-[#ccef4d]/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-widest text-[#ccef4d] border border-[#ccef4d]/30">
              Selected Work & Projects
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Production systems & products I&apos;ve shipped.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Explore 6 key projects featuring full-stack web platforms, government portals, logistics management systems, and AI-powered assistants.
            </p>
          </div>

          {/* 6 Projects Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          {/* General Reviews Section */}
          <GeneralReviews />
        </div>
      </Container>
    </section>
  );
}
