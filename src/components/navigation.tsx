"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Floating pill — same width as page content (max-w-7xl) */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 sm:px-6 lg:px-8 pointer-events-none">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: "80rem" }} /* 80rem = max-w-7xl */
          className={`pointer-events-auto w-full flex items-center justify-between px-6 py-2.5 rounded-full border transition-all duration-300 ${
            scrolled
              ? "bg-[#27322a]/98 backdrop-blur-2xl shadow-2xl shadow-black/25 border-[#4d5e52]/80"
              : "bg-[#27322a]/92 backdrop-blur-xl shadow-lg shadow-black/15 border-[#3a473e]/70"
          }`}
        >
          {/* LEFT: Logo */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Link href="/" className="flex items-center shrink-0">
              <span className="text-white font-extrabold text-base tracking-tight whitespace-nowrap">
                Nouman A<span className="text-[#d9fea4]">.</span> Khan
              </span>
            </Link>
          </motion.div>

          {/* CENTER: Nav links */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item, i) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.35, ease: "easeOut" }}
                >
                  <Link
                    href={item.href}
                    className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-white font-bold"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full bg-[#3a473e]"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT: Book a Call + mobile hamburger */}
          <div className="flex items-center gap-3">
            {/* Book a Call — desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.35 }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className="hidden md:block"
            >
              <a
                href="https://cal.com/noumanakhan/20min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-1.5 text-sm font-bold text-[#27322a] bg-[#d9fea4] hover:bg-[#c6f584] rounded-full transition-colors shadow-sm hover:shadow-md hover:shadow-[#d9fea4]/40 border border-[#c6f584]/60 whitespace-nowrap cursor-pointer"
              >
                Book a Call
              </a>
            </motion.div>

            {/* Mobile hamburger */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-1.5 rounded-full text-slate-200 hover:text-white hover:bg-[#3a473e] transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-[4.5rem] left-4 right-4 z-40 md:hidden"
          >
            <div className="rounded-2xl bg-[#27322a]/98 backdrop-blur-2xl border border-[#3a473e] shadow-2xl shadow-black/30 overflow-hidden">
              <div className="flex flex-col p-3 gap-1">
                {navItems.map((item, i) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.055, duration: 0.28, ease: "easeOut" }}
                    >
                      <Link
                        href={item.href}
                        className={`block w-full text-center py-2.5 px-4 rounded-xl text-sm font-medium transition-colors ${
                          isActive
                            ? "text-white font-bold bg-[#3a473e]"
                            : "text-slate-200 hover:bg-[#3a473e]/60 hover:text-white"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <div className="mt-1 pt-1 border-t border-[#3a473e]">
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.055 + 0.04, duration: 0.28 }}
                  >
                    <a
                      href="https://cal.com/noumanakhan/20min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full mt-2 py-2.5 text-center rounded-full text-sm font-bold text-[#27322a] bg-[#d9fea4] hover:bg-[#c6f584] transition-colors shadow-md"
                      onClick={() => setIsOpen(false)}
                    >
                      Book a Call
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
