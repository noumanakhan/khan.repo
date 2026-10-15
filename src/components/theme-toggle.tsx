"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? (resolvedTheme || theme) === "dark" : true;

  return (
    <div
      role="tablist"
      aria-label="Theme selection"
      className={`relative inline-flex items-center p-1 rounded-full bg-[#1e2620] dark:bg-[#141414] border border-[#3a473e] dark:border-[#262626] transition-colors duration-200 shadow-xs ${className}`}
    >
      {/* Light Mode Tab */}
      <button
        type="button"
        role="tab"
        id="theme-tab-light"
        aria-selected={mounted ? !isDark : false}
        aria-label="Switch to light mode"
        onClick={() => setTheme("light")}
        className={`relative z-10 flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full transition-colors duration-200 cursor-pointer ${
          mounted && !isDark
            ? "text-[#27322a]"
            : "text-slate-300 hover:text-white dark:text-slate-400 dark:hover:text-white"
        }`}
      >
        <Sun
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            mounted && !isDark ? "text-amber-500 scale-110" : "text-slate-300 dark:text-slate-400"
          }`}
        />
        <span>Light</span>
        {mounted && !isDark && (
          <motion.div
            layoutId="activeThemePill"
            className="absolute inset-0 -z-10 rounded-full bg-white shadow-sm border border-black/5"
            transition={{ type: "spring", stiffness: 450, damping: 32 }}
          />
        )}
      </button>

      {/* Dark Mode Tab */}
      <button
        type="button"
        role="tab"
        id="theme-tab-dark"
        aria-selected={mounted ? isDark : true}
        aria-label="Switch to dark mode"
        onClick={() => setTheme("dark")}
        className={`relative z-10 flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full transition-colors duration-200 cursor-pointer ${
          mounted && isDark
            ? "text-white"
            : "text-slate-300 hover:text-white dark:text-slate-400 dark:hover:text-white"
        }`}
      >
        <Moon
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            mounted && isDark ? "text-[#ccef4d] scale-110" : "text-slate-400"
          }`}
        />
        <span>Dark</span>
        {mounted && isDark && (
          <motion.div
            layoutId="activeThemePill"
            className="absolute inset-0 -z-10 rounded-full bg-[#242424] shadow-sm border border-white/10"
            transition={{ type: "spring", stiffness: 450, damping: 32 }}
          />
        )}
      </button>
    </div>
  );
}
