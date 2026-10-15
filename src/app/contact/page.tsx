"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/container";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { LinkButton } from "@/components/button";

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
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const GithubLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "noumananjumkhan@gmail.com",
    href: "mailto:noumananjumkhan@gmail.com",
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
    <div className="min-h-screen bg-[#f4f6f4] text-[#090b09]">
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-[#27322a] border-b border-[#3a473e] text-white overflow-hidden relative">
        {/* Ambient glow */}
        <motion.div
          className="absolute top-0 right-1/3 w-80 h-80 bg-[#d9fea4] rounded-full mix-blend-screen filter blur-[120px] opacity-[0.08] pointer-events-none"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl relative z-10"
          >
            <motion.span
              className="inline-block rounded-full bg-[#3a473e] px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-widest text-[#d9fea4] border border-[#4d5e52] mb-4"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Contact &amp; Inquiry
            </motion.span>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight text-white tracking-tight">
              Let's Build Something{" "}
              <motion.span
                className="text-[#d9fea4] inline-block"
                animate={{ opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                Great Together
              </motion.span>
            </h1>
            <p className="text-lg text-[#c5cec7] leading-relaxed">
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
            <FadeUp>
              <h2 className="text-2xl font-bold mb-2 text-[#090b09]">Get in Touch</h2>
              <p className="text-[#525854] mb-10">
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
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
                      whileHover={{ y: -3, scale: 1.015, boxShadow: "0 12px 32px rgba(217,254,164,0.15)" }}
                      whileTap={{ scale: 0.98 }}
                      className="group flex items-center gap-5 p-5 rounded-2xl bg-white border border-[#e2e6e2] hover:border-[#27322a]/40 hover:bg-white shadow-xs transition-colors duration-200"
                    >
                      <motion.div
                        className="shrink-0 w-12 h-12 rounded-xl bg-[#d9fea4]/40 border border-[#c6f584]/60 flex items-center justify-center group-hover:bg-[#d9fea4] transition-colors"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      >
                        <Icon className="w-5 h-5 text-[#27322a] group-hover:text-[#27322a] transition-colors" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                          {item.label}
                        </p>
                        <p className="font-semibold text-[#090b09] truncate group-hover:text-[#27322a] transition-colors">
                          {item.value}
                        </p>
                        <p className="text-xs text-[#525854] mt-0.5">
                          {item.description}
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ x: 2, y: -2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#27322a] transition-colors shrink-0" />
                      </motion.div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Socials */}
              <div className="mt-12 pt-10 border-t border-[#e2e6e2]">
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
                        aria-label={s.label}
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 18 }}
                        whileHover={{ scale: 1.15, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-11 h-11 rounded-xl bg-white border border-[#e2e6e2] flex items-center justify-center text-slate-700 hover:border-[#27322a] hover:text-[#27322a] hover:bg-[#d9fea4]/30 shadow-xs transition-colors duration-200"
                      >
                        <Icon className="w-4 h-4" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </FadeUp>

            {/* Right — Availability Card */}
            <FadeUp delay={0.15} className="space-y-6">
              {/* Availability Status */}
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(39,50,42,0.10)" }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="p-6 rounded-2xl bg-white border border-[#e2e6e2] shadow-xs"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="relative flex h-3 w-3">
                    <motion.span
                      className="absolute inline-flex h-full w-full rounded-full bg-[#27322a] opacity-75"
                      animate={{ scale: [1, 2, 1], opacity: [0.75, 0, 0.75] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                    />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#27322a]" />
                  </span>
                  <span className="text-sm font-bold text-[#27322a] font-mono">
                    Available for new projects &amp; roles
                  </span>
                </div>
                <p className="text-[#525854] text-sm leading-relaxed">
                  I'm currently open to freelance work, full-time roles, and
                  consulting engagements. If you have a project that needs
                  expertise in full-stack architecture — let's talk.
                </p>
              </motion.div>

              {/* What I Can Help With */}
              <motion.div
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(39,50,42,0.10)" }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="p-6 rounded-2xl bg-white border border-[#e2e6e2] shadow-xs"
              >
                <h3 className="font-bold text-[#090b09] mb-5 text-lg">
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
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-sm text-[#525854]"
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.35, ease: "easeOut" }}
                      whileHover={{ x: 3 }}
                    >
                      <motion.span
                        className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#27322a] shrink-0"
                        whileHover={{ scale: 2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </FadeUp>
          </div>
        </Container>
      </section>
    </div>
  );
}
