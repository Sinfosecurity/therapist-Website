import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-content px-6 sm:px-10", className)}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-24 sm:py-32", className)}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 text-[11px] font-medium uppercase tracking-wideish text-gold-600">
      {children}
    </p>
  );
}

export function Rule({ className }: { className?: string }) {
  return <div className={cn("h-px w-16 bg-gold-500/70", className)} />;
}
