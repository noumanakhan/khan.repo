"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#0d0d0d]/90 backdrop-blur-md border-b border-[#252525]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center font-bold text-xl tracking-tight shrink-0">
            <span className="text-white">Nouman A<span className="text-[#ccef4d]">.</span> Khan</span>
          </Link>

          {/* Desktop: Links + Button */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "text-[#ccef4d]"
                      : "text-slate-300 hover:text-[#ccef4d]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <a
              href="https://cal.com/noumanakhan/20min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-bold text-slate-950 bg-[#ccef4d] hover:bg-[#bce436] rounded-full transition-all shadow-sm hover:shadow-md hover:shadow-[#ccef4d]/20 whitespace-nowrap"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile: Hamburger Button */}
          <button
            className="md:hidden p-2 rounded-md text-slate-300 hover:text-[#ccef4d] hover:bg-[#161616] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — full-width dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-[#252525] bg-[#0d0d0d]">
          <div className="flex flex-col items-center py-4 gap-1 px-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`w-full text-center py-3 rounded-md text-base font-medium transition-colors ${
                  pathname === item.href
                    ? "text-[#ccef4d] bg-[#ccef4d]/10"
                    : "text-slate-300 hover:bg-[#161616] hover:text-[#ccef4d]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://cal.com/noumanakhan/20min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-3 py-3 text-center rounded-full text-base font-bold text-slate-950 bg-[#ccef4d] hover:bg-[#bce436] transition-colors shadow-lg shadow-[#ccef4d]/20"
              onClick={() => setIsOpen(false)}
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
