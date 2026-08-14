"use client";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cream-200/80 bg-cream-50/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="font-display text-2xl tracking-tight text-sage-800">
          {site.shortName}
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm text-ink-600 transition-colors hover:text-sage-700",
                pathname === item.href && "text-sage-800",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-sage-700 px-4 py-2 text-sm text-cream-50 hover:bg-sage-800"
          >
            Book a consult
          </Link>
        </nav>
        <button
          type="button"
          className="rounded-full p-2 text-sage-800 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="space-y-1 border-t border-cream-200 px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-ink-800 hover:bg-cream-100"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
