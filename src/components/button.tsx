"use client";

import clsx from "clsx";
import Link from "next/link";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const baseClass =
  "font-bold rounded-full inline-flex items-center justify-center gap-2 cursor-pointer relative overflow-hidden select-none";

const variantClasses = {
  primary:
    "bg-[#d9fea4] text-[#27322a] border border-[#c6f584] shadow-md shadow-[#d9fea4]/25",
  secondary:
    "bg-[#27322a] text-white border border-[#27322a]",
  outline:
    "border border-[#27322a] text-[#27322a]",
};

const sizeClasses = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-6 py-2.5 text-base",
  lg: "px-8 py-3.5 text-lg tracking-wide",
};

function useButtonSpring() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 400, damping: 20 });
  const springY = useSpring(y, { stiffness: 400, damping: 20 });
  return { x, y, springX, springY };
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const { x, y, springX, springY } = useButtonSpring();

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.25);
    y.set((e.clientY - cy) * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        baseClass,
        variantClasses[variant ?? "primary"],
        sizeClasses[size ?? "md"],
        variant === "primary" &&
          "hover:bg-[#c6f584] hover:shadow-lg hover:shadow-[#d9fea4]/45",
        variant === "secondary" &&
          "hover:bg-[#1e2620]",
        variant === "outline" &&
          "hover:bg-[#d9fea4]/30",
        className
      )}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {/* Shimmer overlay */}
      <motion.span
        className="pointer-events-none absolute inset-0 rounded-full"
        initial={{ opacity: 0, x: "-100%" }}
        whileHover={{ opacity: 1, x: "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)",
        }}
      />
      {children}
    </motion.button>
  );
}

interface LinkButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: LinkButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const { x, y, springX, springY } = useButtonSpring();

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.25);
    y.set((e.clientY - cy) * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      onMouseMove={(e) => handleMouseMove(e as unknown as React.MouseEvent<HTMLElement>)}
      onMouseLeave={handleMouseLeave}
      className="inline-flex"
    >
      <Link
        ref={ref}
        href={href}
        className={clsx(
          baseClass,
          variantClasses[variant ?? "primary"],
          sizeClasses[size ?? "md"],
          variant === "primary" &&
            "hover:bg-[#c6f584] hover:shadow-lg hover:shadow-[#d9fea4]/45",
          variant === "secondary" &&
            "hover:bg-[#1e2620]",
          variant === "outline" &&
            "hover:bg-[#d9fea4]/30",
          className
        )}
        {...props}
      >
        {/* Shimmer overlay */}
        <span
          className="pointer-events-none absolute inset-0 rounded-full overflow-hidden"
          aria-hidden
        />
        {children}
      </Link>
    </motion.div>
  );
}
