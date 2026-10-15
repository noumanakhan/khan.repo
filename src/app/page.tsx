"use client";

import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/container";
import { LinkButton } from "@/components/button";
import { ChevronDown, Code2, Briefcase, Mail } from "lucide-react";
import Image from "next/image";
import dp from "./dp.jpeg";

// Reusable scroll-reveal wrapper
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#27322a] dark:bg-[#0d0d0d] pt-24 pb-16 lg:py-0 transition-colors duration-300">
        {/* Animated Ambient Glows */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-[#d9fea4] dark:bg-[#ccef4d] rounded-full mix-blend-screen filter blur-[140px] opacity-[0.10] dark:opacity-[0.07]"
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -50, 20, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-96 h-96 bg-[#c6f584] rounded-full mix-blend-screen filter blur-[140px] opacity-[0.07] dark:opacity-[0.05]"
            animate={{
              x: [0, -30, 20, 0],
              y: [0, 40, -30, 0],
              scale: [1, 0.9, 1.1, 1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          />
        </div>

        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-12">
            {/* Left: Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full lg:w-[68%] text-center lg:text-left"
            >
              {/* Mobile profile */}
              <motion.div variants={itemVariants} className="flex justify-center mb-6 lg:hidden">
                <motion.div
                  className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-[#d9fea4]/60 dark:ring-[#ccef4d]/40 ring-offset-4 ring-offset-[#27322a] dark:ring-offset-[#0d0d0d] shadow-2xl shadow-[#d9fea4]/25 dark:shadow-[#ccef4d]/20"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image src={dp} alt="Nouman A Khan" fill className="object-cover object-top" priority />
                </motion.div>
              </motion.div>

              {/* Badge */}
              <motion.div variants={itemVariants} className="mb-4 text-center lg:text-left">
                <motion.span
                  className="inline-block rounded-full bg-[#3a473e] dark:bg-[#ccef4d]/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-widest text-[#d9fea4] dark:text-[#ccef4d] border border-[#4d5e52] dark:border-[#ccef4d]/30"
                  whileHover={{ scale: 1.04, boxShadow: "0 0 20px rgba(217,254,164,0.2)" }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  SOFTWARE ENGINEERING · AI SYSTEMS · PRODUCT DEVELOPMENT
                </motion.span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight text-center lg:text-left tracking-tight"
              >
                Hi, I'm <br />
                <motion.span
                  className="text-[#d9fea4] dark:text-[#ccef4d] inline-block"
                  animate={{ opacity: [0.85, 1, 0.85] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  Nouman A. Khan
                </motion.span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-[#c5cec7] dark:text-slate-400 mb-8 leading-relaxed text-center lg:text-left"
              >
                Full Stack AI Engineer focused on building scalable, secure, and high-performance applications. Experienced in end-to-end development, clean architecture, and integrating AI-powered solutions.
              </motion.p>

              {/* Tagline */}
              <motion.p
                variants={itemVariants}
                className="text-xl sm:text-2xl font-extrabold text-[#d9fea4] mb-5 text-center lg:text-left tracking-tight"
              >
                Building the systems behind ambitious ideas.
              </motion.p>

              {/* CTA */}
              <motion.div variants={itemVariants} className="mb-6 flex justify-center lg:justify-start">
                <LinkButton href="/services" variant="primary" size="lg">
                  All Services
                </LinkButton>
              </motion.div>

              {/* Scroll indicator */}
              <motion.div
                variants={itemVariants}
                className="mt-8 flex justify-center lg:justify-start"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-6 h-6 text-[#d9fea4] dark:text-[#ccef4d]" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right: Desktop Profile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex flex-col items-center justify-center w-full lg:w-[32%] self-start lg:pt-2 gap-6"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-full p-2 bg-gradient-to-tr from-[#d9fea4] via-[#d9fea4]/40 to-transparent dark:from-[#ccef4d] dark:via-[#a3e635]/30 shadow-2xl shadow-[#d9fea4]/20 dark:shadow-[#ccef4d]/20"
              >
                <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-[#27322a] dark:ring-[#0d0d0d]">
                  <Image src={dp} alt="Nouman A Khan" fill className="object-cover object-top" priority />
                </div>
              </motion.div>

              {/* Social Icons */}
              <div className="flex gap-4 justify-center">
                {[
                  {
                    href: "https://github.com/noumanakhan",
                    label: "GitHub",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    ),
                  },
                  {
                    href: "https://linkedin.com/in/noumanakhan",
                    label: "LinkedIn",
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                  },
                  {
                    href: "mailto:noumananjumkhan@gmail.com",
                    label: "Email",
                    icon: <Mail className="w-6 h-6" />,
                  },
                ].map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.label !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.5, ease: "easeOut" }}
                    whileHover={{ scale: 1.15, y: -3, boxShadow: "0 8px 24px rgba(217,254,164,0.25)" }}
                    whileTap={{ scale: 0.92 }}
                    className="p-3 rounded-full bg-[#344237] dark:bg-[#161616] border border-[#445649] dark:border-[#252525] text-slate-200 dark:text-slate-300 hover:bg-[#d9fea4] hover:text-[#27322a] hover:border-[#d9fea4] dark:hover:bg-[#ccef4d]/10 dark:hover:text-[#ccef4d] dark:hover:border-[#ccef4d]/40 transition-colors duration-200 shadow-sm"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 1. Statement Section */}
      <section className="py-24 bg-white dark:bg-[#0d0d0d] border-t border-[#e2e6e2] dark:border-[#252525] transition-colors duration-300 overflow-hidden">
        <Container>
          <FadeUp className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#090b09] dark:text-white leading-tight">
              I build things <br />
              <motion.span
                className="text-[#090b09] dark:text-[#ccef4d] bg-[#d9fea4]/40 dark:bg-transparent px-2.5 py-0.5 rounded-lg border border-[#c6f584]/50 dark:border-transparent inline-block"
                whileHover={{ scale: 1.03, boxShadow: "0 4px 20px rgba(217,254,164,0.3)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                founders actually
              </motion.span>{" "}
              <br />
              ship and sell.
            </h2>
          </FadeUp>
        </Container>
      </section>

      {/* 2. Watch before you book Section */}
      <section className="py-24 bg-[#f4f6f4] dark:bg-[#0a0a0a] transition-colors duration-300">
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeUp>
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 24px 60px rgba(39,50,42,0.12)" }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="bg-white dark:bg-[#161616] rounded-3xl p-8 md:p-12 border border-[#e2e6e2] dark:border-[#252525] shadow-sm"
              >
                <h2 className="text-3xl font-bold mb-4 text-[#090b09] dark:text-white">Watch before you book</h2>
                <p className="text-xl text-[#525854] dark:text-slate-400 mb-8 font-medium">How I think about building products.</p>

                <div className="bg-[#f8f9fa] dark:bg-[#0d0d0d] rounded-2xl p-6 mb-8 border border-[#e2e6e2] dark:border-[#252525]">
                  <p className="text-[#090b09] dark:text-slate-300 mb-4 font-medium">A 90-second breakdown of how I approach MVPs, what kills most product builds before they ship, and what I do differently.</p>
                  <ul className="space-y-3 text-[#525854] dark:text-slate-400">
                    {[
                      "Why most MVPs fail before launch",
                      "What I scope before writing a line of code",
                      "How I deliver fixed price without losing margin",
                    ].map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
                      >
                        <span className="text-[#27322a] dark:text-[#ccef4d] font-bold">✓</span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.a
                  href="https://cal.com/noumanakhan/20min"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, boxShadow: "0 12px 32px rgba(217,254,164,0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className="inline-block px-8 py-4 bg-[#d9fea4] hover:bg-[#c6f584] text-[#27322a] dark:bg-[#ccef4d] dark:hover:bg-[#bce436] dark:text-slate-950 rounded-full font-bold text-lg transition-colors shadow-md shadow-[#d9fea4]/25 dark:shadow-[#ccef4d]/20 w-full sm:w-auto text-center border border-[#c6f584]/60 dark:border-transparent cursor-pointer"
                >
                  Book a free 20-min call
                </motion.a>
              </motion.div>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* 3. Way to work with me Section */}
      <section id="work" className="py-24 bg-white dark:bg-[#0d0d0d] border-t border-[#e2e6e2] dark:border-[#252525] transition-colors duration-300">
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeUp className="mb-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#090b09] dark:text-white">Way to work with me.</h2>
              <p className="text-lg text-[#525854] dark:text-slate-400 leading-relaxed">Every engagement is led by me personally.</p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 24px 60px rgba(39,50,42,0.10)" }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="bg-[#f4f6f4] dark:bg-[#161616] rounded-3xl p-8 md:p-12 border border-[#e2e6e2] dark:border-[#252525] shadow-xs"
              >
                <h3 className="text-2xl font-bold mb-4 text-[#090b09] dark:text-white">You have an idea. Let's build it.</h3>
                <p className="text-[#525854] dark:text-slate-400 mb-8">
                  From scoped architecture to deployed product. Fixed price, fixed timeline. No hourly billing, no scope creep, no surprises.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-10">
                  {[
                    "Product scoping and architecture brief",
                    "Full UI design and frontend build",
                    "Backend, database, and integrations",
                    "Auth, payments, and user management",
                    "Staging, QA, and production deployment",
                    "Full handoff with documentation",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
                    >
                      <motion.span
                        className="text-[#27322a] dark:text-[#ccef4d] mt-1 font-bold"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                      >
                        ✦
                      </motion.span>
                      <span className="text-[#090b09] dark:text-slate-300 font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-8 border-t border-[#e2e6e2] dark:border-[#252525]">
                  <p className="text-xl font-bold text-[#090b09] dark:text-white">
                    From $3500 <span className="text-[#525854] dark:text-slate-400 font-normal">· Delivered in 4 to 8 weeks</span>
                  </p>
                </div>
              </motion.div>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* 5. Bento Grid — beliefs */}
      <section className="py-24 bg-[#f4f6f4] dark:bg-[#0a0a0a] transition-colors duration-300">
        <Container>
          <FadeUp className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#090b09] dark:text-white">What I believe about building.</h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                num: "01",
                title: "Architecture determines scale",
                body: "The decisions made in week one determine what is possible in year three. Most developers optimise for speed of delivery. I optimise for longevity of the system. The right architecture is unremarkable to build and invaluable to own.",
                dark: true,
              },
              {
                num: "02",
                title: "Systems over features",
                body: "Founders ask for more features. I ask what problem we are actually solving. The best products I have shipped are often the ones with the least code: a tight system that does one thing exceptionally well and scales without breaking.",
                dark: false,
              },
            ].map((card, i) => (
              <FadeUp key={i} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 250, damping: 22 }}
                  className={`p-10 rounded-3xl border shadow-md transition-shadow hover:shadow-xl ${
                    card.dark
                      ? "bg-[#27322a] dark:bg-[#161616] border-[#3a473e] dark:border-[#252525] hover:border-[#d9fea4]/50 dark:hover:border-[#ccef4d]/40 hover:shadow-[#d9fea4]/10 dark:hover:shadow-[#ccef4d]/5"
                      : "bg-[#d9fea4] dark:bg-[#18231c] border-[#c6f584] dark:border-[#2e3e33] hover:border-[#27322a]/40 dark:hover:border-[#ccef4d]/40"
                  }`}
                >
                  <motion.div
                    className={`text-5xl font-extrabold mb-6 ${card.dark ? "text-[#d9fea4] dark:text-[#ccef4d]/40" : "text-[#27322a]/40 dark:text-[#ccef4d]/40"}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    {card.num}
                  </motion.div>
                  <h3 className={`text-2xl font-bold mb-4 ${card.dark ? "text-white" : "text-[#27322a] dark:text-white"}`}>
                    {card.title}
                  </h3>
                  <p className={`leading-relaxed ${card.dark ? "text-[#c5cec7] dark:text-slate-400" : "text-[#27322a]/90 dark:text-slate-300 font-medium"}`}>
                    {card.body}
                  </p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. From conversation to live product */}
      <section className="py-24 bg-white dark:bg-[#0d0d0d] border-t border-[#e2e6e2] dark:border-[#252525] transition-colors duration-300">
        <Container>
          <FadeUp className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#090b09] dark:text-white">From conversation to live product.</h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { num: "01", title: "Strategy call", desc: "We talk for 45 minutes. I ask hard questions about your goals, your users, and your constraints. By the end, we both know exactly what needs to be built and whether we are the right fit." },
              { num: "02", title: "Architecture brief", desc: "I send a detailed written scope: what gets built, what does not, why, and what it costs. No vague proposals. No hourly estimates. Fixed scope, fixed price, fixed timeline." },
              { num: "03", title: "Build and iterate", desc: "You get weekly video updates, a live staging link, and direct access to me throughout. No black box." },
              { num: "04", title: "Launch and handoff", desc: "We launch, review, and I hand you a fully documented system. For growth clients, this is where ongoing optimisation begins: monthly reporting, A/B testing, and iteration." },
            ].map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, borderColor: "rgba(39,50,42,0.4)" }}
                  transition={{ type: "spring", stiffness: 250, damping: 22 }}
                  className="flex flex-col bg-[#f4f6f4] dark:bg-[#161616] p-8 rounded-3xl border border-[#e2e6e2] dark:border-[#252525] dark:hover:border-[#ccef4d]/40 shadow-xs hover:shadow-xl hover:shadow-[#d9fea4]/10 dark:hover:shadow-[#ccef4d]/5 h-full"
                >
                  <motion.div
                    className="text-[#d9fea4] bg-[#27322a] px-3 py-1 rounded-full font-mono font-bold text-sm w-fit mb-4 dark:bg-transparent dark:text-[#ccef4d] dark:p-0 dark:text-xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {step.num}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 text-[#090b09] dark:text-white">{step.title}</h3>
                  <p className="text-[#525854] dark:text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3} className="mt-16 text-center">
            <motion.div
              whileHover={{ scale: 1.06, boxShadow: "0 16px 40px rgba(217,254,164,0.35)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="inline-block"
            >
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-[#d9fea4] text-[#27322a] dark:bg-[#ccef4d] dark:text-slate-950 rounded-full font-bold text-lg hover:bg-[#c6f584] dark:hover:bg-[#bce436] transition-colors shadow-lg shadow-[#d9fea4]/25 dark:shadow-[#ccef4d]/20 border border-[#c6f584]/60 dark:border-transparent"
              >
                Start the Conversation
              </Link>
            </motion.div>
          </FadeUp>
        </Container>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-[#d9fea4] dark:bg-[#ccef4d] text-[#27322a] dark:text-slate-950 text-center transition-colors duration-300 overflow-hidden relative">
        <motion.div
          className="absolute inset-0 -z-10"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <Container>
          <FadeUp className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#27322a] dark:text-slate-950">Results, not just deliverables.</h2>
            <p className="text-xl text-[#27322a]/85 dark:text-slate-900 font-semibold leading-relaxed">
              I measure success by what happens after I build.
            </p>
          </FadeUp>
        </Container>
      </section>
    </>
  );
}
