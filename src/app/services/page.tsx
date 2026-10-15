"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/container";
import { services } from "@/data/portfolio";
import { LinkButton } from "@/components/button";
import { Layers, CheckCircle2 } from "lucide-react";

/* ─── Tilt card (same spring physics as work ProjectCard) ───────────────── */
function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 260,
    damping: 26,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 260,
    damping: 26,
  });
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
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
      className="group h-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.018 }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
        className="relative h-full flex flex-col rounded-3xl overflow-hidden
                   bg-white border border-[#e0e5e0]
                   shadow-[0_2px_20px_rgba(39,50,42,0.06)]
                   hover:shadow-[0_24px_64px_rgba(39,50,42,0.14)]
                   transition-shadow duration-500"
      >
        {/* Cursor spotlight */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{
            background: `radial-gradient(400px circle at ${glowX} ${glowY}, rgba(217,254,164,0.16) 0%, transparent 70%)`,
          }}
        />

        {/* Top shimmer border */}
        <div className="absolute inset-x-0 top-0 h-[2px] z-10 rounded-t-3xl
                        bg-gradient-to-r from-transparent via-[#c6f584]/80 to-transparent
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* ── Icon block ─────────────────────────────────────────────── */}
        <div className="relative z-10 flex items-end justify-between px-6 pt-6 pb-4
                        border-b border-[#f0f2f0] group-hover:border-[#e4f0d4] transition-colors duration-500">
          {/* Large icon on a tinted square */}
          <motion.div
            className="flex items-center justify-center h-14 w-14 rounded-2xl
                       bg-[#f4f8f0] border border-[#e4eee0]
                       group-hover:bg-[#eaf6d5] group-hover:border-[#c6f584]/60
                       transition-colors duration-400 shadow-sm"
            whileHover={{ scale: 1.12, rotate: 5 }}
            transition={{ type: "spring", stiffness: 380, damping: 16 }}
          >
            <span className="text-3xl leading-none">{service.icon}</span>
          </motion.div>

          {/* Number badge */}
          <motion.span
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 420 }}
            className="inline-flex items-center gap-1 rounded-full
                       bg-[#f4f8f0] border border-[#ddebd0]
                       px-2.5 py-0.5 font-mono text-[10px] font-bold
                       text-[#3a5c44] uppercase tracking-widest select-none"
          >
            <span className="opacity-50">#</span>
            {String(index + 1).padStart(2, "0")}
          </motion.span>
        </div>

        {/* ── Main body ──────────────────────────────────────────────── */}
        <div className="relative z-10 flex flex-1 flex-col gap-4 px-6 py-5">

          {/* Title + description */}
          <div>
            <h3 className="text-[1.1rem] font-bold leading-snug text-[#090b09]
                           group-hover:text-[#1e2e22] transition-colors duration-300 mb-1.5">
              {service.title}
            </h3>
            <p className="text-[13px] leading-relaxed text-[#6b7572]">
              {service.description}
            </p>
          </div>

          {/* Feature checklist */}
          <ul className="flex-1 space-y-2.5">
            {service.items.map((item, ii) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 + ii * 0.055, duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 3 }}
                className="flex items-center gap-2.5 text-[13px] text-[#444c48] font-medium"
              >
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#27322a] opacity-70
                                          group-hover:opacity-100 transition-opacity duration-300" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* ── Bottom status strip ─────────────────────────────────── */}
        <div className="relative z-10 mx-5 mb-5 flex items-center justify-between
                        rounded-2xl bg-[#f6f8f6] border border-[#eaeeea] px-4 py-2.5
                        group-hover:bg-[#f0fce8] group-hover:border-[#c6f584]/50
                        transition-all duration-400">
          <span className="font-mono text-[10.5px] font-semibold uppercase tracking-widest text-[#8a9e91]">
            {service.items.length} deliverables
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#27322a] opacity-70
                             group-hover:opacity-100 transition-opacity
                             animate-pulse" />
            <span className="font-mono text-[10.5px] font-semibold text-[#27322a]">
              Available
            </span>
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Tech stack card (same style as service card) ──────────────────────── */
function TechCard({
  category,
  techs,
  index,
}: {
  category: string;
  techs: string[];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { stiffness: 240, damping: 24 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), { stiffness: 240, damping: 24 });
  const glowX = useTransform(mouseX, [-0.5, 0.5], ["15%", "85%"]);
  const glowY = useTransform(mouseY, [-0.5, 0.5], ["15%", "85%"]);

  const handle = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1000 }}
      className="group h-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handle}
        onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.015 }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
        className="relative h-full rounded-3xl overflow-hidden bg-white border border-[#e0e5e0]
                   shadow-[0_2px_16px_rgba(39,50,42,0.06)]
                   hover:shadow-[0_16px_48px_rgba(39,50,42,0.11)]
                   transition-shadow duration-500 p-6"
      >
        {/* Spotlight */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{ background: `radial-gradient(300px circle at ${glowX} ${glowY}, rgba(217,254,164,0.15) 0%, transparent 68%)` }}
        />
        {/* Shimmer border */}
        <div className="absolute inset-x-0 top-0 h-[2px] z-10 rounded-t-3xl bg-gradient-to-r from-transparent via-[#c6f584]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          <h3 className="text-[13px] font-bold uppercase tracking-widest text-[#27322a] mb-4 font-mono">{category}</h3>
          <ul className="space-y-2">
            {techs.map((tech, ti) => (
              <motion.li
                key={tech}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 + ti * 0.05, duration: 0.3 }}
                whileHover={{ x: 3 }}
                className="flex items-center gap-2 text-sm text-[#525854]"
              >
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-[#27322a] shrink-0"
                  whileHover={{ scale: 1.8 }}
                  transition={{ type: "spring", stiffness: 400 }}
                />
                {tech}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────────── */
const techStacks = [
  { category: "AI & RAG Engineering", techs: ["LLM RAG", "Agentic RAG", "LangChain", "pgvector", "Qdrant Vector DB"] },
  { category: "Frontend", techs: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend & ORM", techs: ["FastAPI", "Python & Django", "Node.js & Express", "SQLAlchemy ORM", "RESTful APIs", "Socket.io"] },
  { category: "Databases & Storage", techs: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Prisma ORM", "Redis"] },
  { category: "DevOps & Infrastructure", techs: ["Docker", "PM2", "Linux / Ubuntu", "Hostinger VPS", "Nginx & Vercel", "Git & CI/CD"] },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#f4f6f4] text-[#090b09]">

      {/* ── Hero — identical structure to WorkSection ────────────────── */}
      <section className="relative pt-32 pb-20 bg-[#27322a] overflow-hidden">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
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
                <Layers className="h-5 w-5" />
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
                Expertise &amp; Solutions
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
            >
              What I Build &amp;{" "}
              <span className="text-[#d9fea4]">Ship.</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#c5cec7] text-base sm:text-lg leading-relaxed"
            >
              High-performance, scalable, and secure engineering solutions — from intelligent
              AI integrations to enterprise-grade web applications.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.30, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center gap-6 pt-2"
            >
              {[
                { label: "Services", value: `${services.length}+` },
                { label: "Tech stacks", value: "20+" },
                { label: "Years exp.", value: "3+" },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-extrabold text-[#d9fea4]">{value}</div>
                  <div className="text-xs font-mono text-[#8a9e91] uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </Container>

        {/* Fade to card section */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-b from-transparent to-[#f4f6f4]" />
      </section>

      {/* ── Services Grid ────────────────────────────────────────────── */}
      <section className="py-20 bg-[#f4f6f4]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Tech Stack ───────────────────────────────────────────────── */}
      <section className="py-20 border-t border-[#e0e5e0] bg-[#f4f6f4]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <span className="inline-block rounded-full bg-[#27322a] px-4 py-1
                             font-mono text-xs font-bold uppercase tracking-widest
                             text-[#d9fea4] border border-[#3a473e] mb-4">
              Tools &amp; Technologies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#090b09] tracking-tight">
              My Tech Stack
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {techStacks.map((stack, i) => (
              <TechCard key={i} category={stack.category} techs={stack.techs} index={i} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#f4f6f4]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              whileHover={{ scale: 1.01, boxShadow: "0 32px 80px rgba(217,254,164,0.30)" }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="rounded-3xl overflow-hidden border border-[#c6f584]
                         bg-[#27322a] shadow-xl shadow-[#d9fea4]/10 relative"
            >
              {/* Inner glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,254,164,0.12)_0%,transparent_65%)] pointer-events-none" />

              <div className="relative z-10 px-8 py-16 sm:px-12 sm:py-20 text-center">
                <motion.h2
                  className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Ready to start your project?
                </motion.h2>
                <motion.p
                  className="text-lg text-[#c5cec7] mb-8 font-medium"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Let&apos;s discuss your requirements and build something exceptional together.
                </motion.p>
                <LinkButton href="/contact" variant="primary" size="lg">
                  Get in Touch
                </LinkButton>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
