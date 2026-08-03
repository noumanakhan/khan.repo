import clsx from "clsx";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "font-bold rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2 active:scale-95",
        {
          "bg-[#ccef4d] text-slate-950 hover:bg-[#bce436] shadow-lg shadow-[#ccef4d]/20 hover:shadow-[#ccef4d]/35 hover:-translate-y-0.5":
            variant === "primary",
          "bg-[#161616] text-white hover:bg-[#161e30] border border-[#1e293b] shadow-sm hover:border-[#ccef4d]/40":
            variant === "secondary",
          "border border-[#ccef4d]/40 text-[#ccef4d] hover:bg-[#ccef4d]/10 shadow-sm":
            variant === "outline",
        },
        {
          "px-4 py-1.5 text-sm": size === "sm",
          "px-6 py-2.5 text-base": size === "md",
          "px-8 py-3.5 text-lg tracking-wide": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
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
  return (
    <Link
      href={href}
      className={clsx(
        "font-bold rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2 active:scale-95",
        {
          "bg-[#ccef4d] text-slate-950 hover:bg-[#bce436] shadow-lg shadow-[#ccef4d]/20 hover:shadow-[#ccef4d]/35 hover:-translate-y-0.5":
            variant === "primary",
          "bg-[#161616] text-white hover:bg-[#161e30] border border-[#1e293b] shadow-sm hover:border-[#ccef4d]/40":
            variant === "secondary",
          "border border-[#ccef4d]/40 text-[#ccef4d] hover:bg-[#ccef4d]/10 shadow-sm":
            variant === "outline",
        },
        {
          "px-4 py-1.5 text-sm": size === "sm",
          "px-6 py-2.5 text-base": size === "md",
          "px-8 py-3.5 text-lg tracking-wide": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
