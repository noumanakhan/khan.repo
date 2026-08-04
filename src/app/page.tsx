"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { LinkButton } from "@/components/button";
import { ChevronDown, Code2, Briefcase, Mail } from "lucide-react";
import Image from "next/image";
import dp from "./dp.jpeg";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0d0d0d] py-12 lg:py-0">
        {/* Animated Ambient Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#ccef4d] rounded-full mix-blend-screen filter blur-[140px] opacity-[0.08] animate-blob"></div>
          <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-[#a3e635] rounded-full mix-blend-screen filter blur-[140px] opacity-[0.06] animate-blob animation-delay-4000"></div>
        </div>

        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-12">
            {/* Left: Text Content (70%) */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="w-full lg:w-[68%] text-center lg:text-left"
            >
              {/* Mobile only: Circular Profile Picture */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center mb-6 lg:hidden"
              >
                <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-[#ccef4d]/40 ring-offset-4 ring-offset-[#0d0d0d] shadow-2xl shadow-[#ccef4d]/20">
                  <Image
                    src={dp}
                    alt="Nouman A Khan"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </motion.div>

              {/* Tagline Badge */}
              <motion.div variants={itemVariants} className="mb-4 text-center lg:text-left">
                <span className="inline-block rounded-full bg-[#ccef4d]/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-widest text-[#ccef4d] border border-[#ccef4d]/30">
                  BUILDER · OPERATOR · SOFTWARE ENGINEER
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight text-center lg:text-left tracking-tight"
              >
                Hi, I'm <br />
                <span className="text-[#ccef4d]">Nouman A. Khan</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-slate-400 mb-8 leading-relaxed text-center lg:text-left"
              >
                Full Stack AI Engineer focused on building scalable, secure, and high-performance applications. Experienced in end-to-end development, clean architecture, and integrating AI-powered solutions.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                variants={itemVariants}
                className="mb-6 flex justify-center lg:justify-start"
              >
                <LinkButton href="/services" variant="primary" size="lg">
                  All Services
                </LinkButton>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                variants={itemVariants}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-8 flex justify-center lg:justify-start"
              >
                <ChevronDown className="w-6 h-6 text-[#ccef4d]" />
              </motion.div>
            </motion.div>

            {/* Right: Desktop Circular Profile Picture & Social Icons (30%) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.15, delay: 0 }}
              className="hidden lg:flex flex-col items-center justify-center w-full lg:w-[32%] self-start lg:pt-2 gap-6"
            >
              <div className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-full p-2 bg-gradient-to-tr from-[#ccef4d] via-[#a3e635]/30 to-transparent shadow-2xl shadow-[#ccef4d]/20">
                <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-[#0d0d0d]">
                  <Image
                    src={dp}
                    alt="Nouman A Khan"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* 3 Contact Social Icons */}
              <div className="flex gap-4 justify-center">
                <a
                  href="https://github.com/noumanakhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#161616] border border-[#252525] text-slate-300 hover:bg-[#ccef4d]/10 hover:text-[#ccef4d] hover:border-[#ccef4d]/40 transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
                </a>
                <a
                  href="https://linkedin.com/in/noumanakhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#161616] border border-[#252525] text-slate-300 hover:bg-[#ccef4d]/10 hover:text-[#ccef4d] hover:border-[#ccef4d]/40 transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                </a>
                <a
                  href="mailto:hello.devkhan@gmail.com"
                  className="p-3 rounded-full bg-[#161616] border border-[#252525] text-slate-300 hover:bg-[#ccef4d]/10 hover:text-[#ccef4d] hover:border-[#ccef4d]/40 transition-all duration-300"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 1. Statement Section */}
      <section className="py-24 bg-[#0d0d0d] border-t border-[#252525]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              I build things <br />
              <span className="text-[#ccef4d]">founders actually</span> <br />
              ship and sell.
            </h2>
          </motion.div>
        </Container>
      </section>

      {/* 2. Watch before you book Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className="bg-[#161616] rounded-3xl p-8 md:p-12 border border-[#252525]"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Watch before you book</h2>
              <p className="text-xl text-slate-400 mb-8 font-medium">How I think about building products.</p>

              <div className="bg-[#0d0d0d] rounded-2xl p-6 mb-8 border border-[#252525]">
                <p className="text-slate-300 mb-4 font-medium">A 90-second breakdown of how I approach MVPs, what kills most product builds before they ship, and what I do differently.</p>
                <ul className="space-y-3 text-slate-400">
                  <li className="flex items-center gap-3"><span className="text-[#ccef4d] font-bold">✓</span> Why most MVPs fail before launch</li>
                  <li className="flex items-center gap-3"><span className="text-[#ccef4d] font-bold">✓</span> What I scope before writing a line of code</li>
                  <li className="flex items-center gap-3"><span className="text-[#ccef4d] font-bold">✓</span> How I deliver fixed price without losing margin</li>
                </ul>
              </div>

              <a
                href="https://cal.com/noumanakhan/20min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-[#ccef4d] hover:bg-[#bce436] text-slate-950 rounded-full font-bold text-lg transition-all shadow-lg shadow-[#ccef4d]/20 hover:shadow-[#ccef4d]/35 w-full sm:w-auto text-center"
              >
                Book a free 20-min call
              </a>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 3. Way to work with me Section */}
      <section id="work" className="py-24 bg-[#0d0d0d] border-t border-[#252525]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15 }}
              className="mb-16 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Way to work with me.</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Every engagement is led by me personally.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: 0 }}
              className="bg-[#161616] rounded-3xl p-8 md:p-12 border border-[#252525]"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">You have an idea. Let's build it.</h3>
              <p className="text-slate-400 mb-8">
                From scoped architecture to deployed product. Fixed price, fixed timeline. No hourly billing, no scope creep, no surprises.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {[
                  "Product scoping and architecture brief",
                  "Full UI design and frontend build",
                  "Backend, database, and integrations",
                  "Auth, payments, and user management",
                  "Staging, QA, and production deployment",
                  "Full handoff with documentation"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#ccef4d] mt-1 font-bold">✦</span>
                    <span className="text-slate-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-[#252525]">
                <p className="text-xl font-bold text-white">From $3500 <span className="text-slate-400 font-normal">· Delivered in 4 to 8 weeks</span></p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 5. What I believe about building */}
      <section className="py-24 bg-[#0a0a0a]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white">What I believe about building.</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: 0 }}
              className="bg-[#161616] p-10 rounded-3xl border border-[#252525] shadow-sm hover:border-[#ccef4d]/40 transition-colors"
            >
              <div className="text-5xl font-extrabold text-[#ccef4d]/30 mb-6">01</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Architecture determines scale</h3>
              <p className="text-slate-400 leading-relaxed">
                The decisions made in week one determine what is possible in year three. Most developers optimise for speed of delivery. I optimise for longevity of the system. The right architecture is unremarkable to build and invaluable to own.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: 0 }}
              className="bg-[#161616] p-10 rounded-3xl border border-[#252525] shadow-sm hover:border-[#ccef4d]/40 transition-colors"
            >
              <div className="text-5xl font-extrabold text-[#ccef4d]/30 mb-6">02</div>
              <h3 className="text-2xl font-bold mb-4 text-white">Systems over features</h3>
              <p className="text-slate-400 leading-relaxed">
                Founders ask for more features. I ask what problem we are actually solving. The best products I have shipped are often the ones with the least code: a tight system that does one thing exceptionally well and scales without breaking.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 6. From conversation to live product */}
      <section className="py-24 bg-[#0d0d0d] border-t border-[#252525]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">From conversation to live product.</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { num: "01", title: "Strategy call", desc: "We talk for 45 minutes. I ask hard questions about your goals, your users, and your constraints. By the end, we both know exactly what needs to be built and whether we are the right fit." },
              { num: "02", title: "Architecture brief", desc: "I send a detailed written scope: what gets built, what does not, why, and what it costs. No vague proposals. No hourly estimates. Fixed scope, fixed price, fixed timeline." },
              { num: "03", title: "Build and iterate", desc: "You get weekly video updates, a live staging link, and direct access to me throughout. No black box." },
              { num: "04", title: "Launch and handoff", desc: "We launch, review, and I hand you a fully documented system. For growth clients, this is where ongoing optimisation begins: monthly reporting, A/B testing, and iteration." }
            ].map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0 }}
                className="flex flex-col bg-[#161616] p-8 rounded-3xl border border-[#252525] hover:border-[#ccef4d]/40 transition-colors"
              >
                <div className="text-[#ccef4d] font-bold text-xl mb-4">{step.num}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[#ccef4d] text-slate-950 rounded-full font-bold text-lg hover:bg-[#bce436] transition-transform hover:scale-105 shadow-lg shadow-[#ccef4d]/20"
            >
              Start the Conversation
            </Link>
          </div>
        </Container>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-[#ccef4d] text-slate-950 text-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Results, not just deliverables.</h2>
            <p className="text-xl text-slate-900 font-semibold leading-relaxed">
              I measure success by what happens after I build.
            </p>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
