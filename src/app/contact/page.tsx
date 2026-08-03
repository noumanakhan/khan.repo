"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { LinkButton } from "@/components/button";

const GithubLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "hello.devkhan@gmail.com",
    href: "mailto:hello.devkhan@gmail.com",
    description: "Drop me a line anytime",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 300 4746230",
    href: "tel:+923004746230",
    description: "Call / WhatsApp Chat",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lahore, Pakistan",
    href: "#",
    description: "Open to remote worldwide",
  },
];

const socials = [
  { icon: GithubLogo, label: "GitHub", href: "https://github.com/noumanakhan" },
  { icon: LinkedinLogo, label: "LinkedIn", href: "https://linkedin.com/in/noumanakhan" },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#f8fafc]">
      {/* Hero Section */}
      <section className="pt-8 pb-16 border-b border-[#252525]">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            className="max-w-2xl"
          >
            <span className="inline-block rounded-full bg-[#ccef4d]/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-widest text-[#ccef4d] border border-[#ccef4d]/30 mb-4">
              Contact & Inquiry
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight text-white tracking-tight">
              Let's Build Something{" "}
              <span className="text-[#ccef4d]">
                Great Together
              </span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              Whether you have a project in mind, a question, or just want to
              connect — my inbox is always open. I typically respond within 24 hours.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
            >
              <h2 className="text-2xl font-bold mb-2 text-white">Get in Touch</h2>
              <p className="text-slate-400 mb-10">
                Reach out through any of the channels below.
              </p>

              <div className="space-y-5">
                {contactDetails.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={i}
                      href={item.href}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0 }}
                      className="group flex items-center gap-5 p-5 rounded-2xl bg-[#161616]/80 border border-[#252525] hover:border-[#ccef4d]/50 hover:bg-[#161616] hover:shadow-lg hover:shadow-[#ccef4d]/5 transition-all duration-300"
                    >
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-[#ccef4d]/10 border border-[#ccef4d]/20 flex items-center justify-center group-hover:bg-[#ccef4d] group-hover:text-slate-950 transition-colors">
                        <Icon className="w-5 h-5 text-[#ccef4d] group-hover:text-slate-950 transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                          {item.label}
                        </p>
                        <p className="font-semibold text-white truncate group-hover:text-[#ccef4d] transition-colors">
                          {item.value}
                        </p>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {item.description}
                        </p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#ccef4d] transition-colors shrink-0" />
                    </motion.a>
                  );
                })}
              </div>

              {/* Socials Divider */}
              <div className="mt-12 pt-10 border-t border-[#252525]">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-5">
                  Find me on
                </p>
                <div className="flex gap-3">
                  {socials.map((s, i) => {
                    const Icon = s.icon;
                    return (
                      <motion.a
                        key={i}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.08 }}
                        aria-label={s.label}
                        className="w-11 h-11 rounded-xl bg-[#161616] border border-[#252525] flex items-center justify-center text-slate-400 hover:border-[#ccef4d]/50 hover:text-[#ccef4d] hover:bg-[#ccef4d]/10 transition-all duration-200"
                      >
                        <Icon className="w-4 h-4" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Right — Availability Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15, delay: 0 }}
              className="space-y-6"
            >
              {/* Availability Status */}
              <div className="p-6 rounded-2xl bg-[#161616]/80 border border-[#252525]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ccef4d] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ccef4d]"></span>
                  </span>
                  <span className="text-sm font-bold text-[#ccef4d] font-mono">
                    Available for new projects & roles
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  I'm currently open to freelance work, full-time roles, and
                  consulting engagements. If you have a project that needs
                  expertise in full-stack architecture — let's talk.
                </p>
              </div>

              {/* What I Can Help With */}
              <div className="p-6 rounded-2xl bg-[#161616]/80 border border-[#252525]">
                <h3 className="font-bold text-white mb-5 text-lg">
                  What I can help with
                </h3>
                <ul className="space-y-3">
                  {[
                    "Full-stack web application development",
                    "SaaS product architecture & build",
                    "AI Chatbot & RAG Knowledge Base integration",
                    "API design, database & backend systems",
                    "Frontend performance & UI polish",
                    "Technical consulting & code review",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#ccef4d] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
