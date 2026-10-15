"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import GeneralReviews from "./GeneralReviews";
import { Container } from "@/components/container";
import { Briefcase } from "lucide-react";

export default function WorkSection() {
  return (
    <>
      {/* ── Hero Header ─────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 bg-[#27322a] overflow-hidden">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
          <motion.div
            className="absolute -top-16 left-1/4 h-80 w-80 rounded-full bg-[#d9fea4] blur-[130px] opacity-[0.10]"
            animate={{ x: [0, 20, -10, 0], y: [0, -30, 15, 0], scale: [1, 1.08, 0.95, 1] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-[#c6f584] blur-[140px] opacity-[0.07]"
            animate={{ x: [0, -20, 10, 0], y: [0, 30, -20, 0], scale: [1, 0.9, 1.1, 1] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />
        </div>

        <Container>
          <div className="relative z-10 text-center max-w-3xl mx-auto space-y-5">
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center"
            >
              <span className="inline-flex items-center justify-center h-11 w-11 rounded-2xl
                               bg-[#d9fea4]/10 border border-[#d9fea4]/20 text-[#d9fea4]">
                <Briefcase className="h-5 w-5" />
              </span>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block rounded-full bg-[#3a473e] px-4 py-1
                               font-mono text-xs font-bold uppercase tracking-widest
                               text-[#d9fea4] border border-[#4d5e52]">
                Selected Work &amp; Projects
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
            >
              Production systems &amp; products{" "}
              <span className="text-[#d9fea4]">I&apos;ve shipped.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#c5cec7] text-base sm:text-lg leading-relaxed"
            >
              6 key projects — full‑stack platforms, government portals, logistics systems,
              and AI-powered assistants built for real users.
            </motion.p>

            {/* Count row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.30, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center gap-6 pt-2"
            >
              {[
                { label: "Projects", value: "6+" },
                { label: "Industries", value: "4+" },
                { label: "Years", value: "3+" },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-extrabold text-[#d9fea4]">{value}</div>
                  <div className="text-xs font-mono text-[#8a9e91] uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>

        {/* bottom fade into the card section */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-b from-transparent to-[#f4f6f4]" />
      </section>

      {/* ── Projects Grid ───────────────────────────────────────────── */}
      <section id="work" className="py-20 bg-[#f4f6f4]">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </div>

            {/* General Reviews */}
            <GeneralReviews />
          </div>
        </Container>
      </section>
    </>
  );
}
