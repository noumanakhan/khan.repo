"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { services } from "@/data/portfolio";
import { LinkButton } from "@/components/button";

// Fast-appear: simple fade-in with no stagger delay
const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, delay: 0 },
  }),
};

export default function Services() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#f8fafc]">
      {/* Hero Section */}
      <section className="pt-8 pb-16 border-b border-[#252525]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block rounded-full bg-[#ccef4d]/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-widest text-[#ccef4d] border border-[#ccef4d]/30 mb-4">
              Expertise & Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white tracking-tight leading-tight">
              What I Build &amp; Ship
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              High-performance, scalable, and secure engineering solutions. From intelligent AI integrations to
              enterprise-grade web applications — robust systems tailored to fuel your business growth.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                custom={index}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="group p-8 rounded-2xl border border-[#252525] bg-[#161616]/80
                           hover:border-[#ccef4d]/50 hover:bg-[#161616] hover:shadow-lg
                           hover:shadow-[#ccef4d]/5 transition-all duration-200"
              >
                <div className="text-4xl mb-5 transform group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#ccef4d] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="text-sm text-slate-400 flex items-start gap-2">
                      <span className="text-[#ccef4d] font-bold mt-0.5">+</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 border-t border-[#252525]">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            className="text-3xl sm:text-4xl font-extrabold mb-12 text-center text-white"
          >
            Tech Stack
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              {
                category: "AI & RAG Engineering",
                techs: ["LLM RAG", "Agentic RAG", "LangChain", "pgvector", "Qdrant Vector DB"],
              },
              {
                category: "Frontend",
                techs: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion"],
              },
              {
                category: "Backend & ORM",
                techs: ["FastAPI", "Python & Django", "Node.js & Express", "SQLAlchemy ORM", "RESTful APIs", "Socket.io"],
              },
              {
                category: "Databases & Storage",
                techs: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Prisma ORM", "Redis"],
              },
              {
                category: "DevOps & Infrastructure",
                techs: ["Docker", "PM2", "Linux / Ubuntu", "Hostinger VPS", "Nginx & Vercel", "Git & CI/CD"],
              },
            ].map((stack, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="p-6 rounded-2xl bg-[#161616]/80 border border-[#252525]
                           hover:border-[#ccef4d]/40 hover:bg-[#161616] transition-all duration-200"
              >
                <h3 className="text-base font-bold mb-4 text-[#ccef4d]">{stack.category}</h3>
                <ul className="space-y-2">
                  {stack.techs.map((tech) => (
                    <li key={tech} className="text-sm text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ccef4d] shrink-0"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            className="rounded-3xl overflow-hidden border border-[#ccef4d]/40 bg-[#ccef4d]"
          >
            <div className="px-8 py-16 sm:px-12 sm:py-20 text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mb-4 tracking-tight">
                Ready to start your project?
              </h2>
              <p className="text-lg text-slate-800 mb-8 font-medium">
                Let's discuss your requirements and create something exceptional together.
              </p>
              <LinkButton
                href="/contact"
                variant="secondary"
                size="lg"
              >
                Get in Touch
              </LinkButton>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
