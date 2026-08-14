import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const styles = {
  primary:
    "bg-sage-700 text-cream-50 hover:bg-sage-800 focus-visible:outline-sage-700",
  secondary:
    "bg-cream-100 text-sage-800 ring-1 ring-sage-200 hover:bg-cream-200 focus-visible:outline-sage-700",
  ghost:
    "bg-transparent text-sage-800 hover:bg-sage-50 focus-visible:outline-sage-700",
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
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60",
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
