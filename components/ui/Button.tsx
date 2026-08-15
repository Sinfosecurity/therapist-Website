import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const styles = {
  primary:
    "bg-forest-800 text-parchment-50 hover:bg-forest-900 focus-visible:outline-forest-800",
  secondary:
    "bg-transparent text-forest-800 ring-1 ring-forest-800/30 hover:bg-forest-800 hover:text-parchment-50 focus-visible:outline-forest-800",
  light:
    "bg-parchment-50 text-forest-900 hover:bg-white focus-visible:outline-parchment-50",
  ghost: "bg-transparent text-forest-800 hover:text-gold-600 focus-visible:outline-forest-800",
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: keyof typeof styles;
  children: ReactNode;
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-3 px-7 py-3.5 text-[11px] font-medium uppercase tracking-wideish transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 disabled:opacity-60",
    styles[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
