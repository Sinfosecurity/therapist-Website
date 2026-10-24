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
    <header className="sticky top-0 z-50 border-b border-parchment-200/80 bg-parchment-50/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-5 sm:px-10">
        <Link href="/" className="group max-w-[13rem] sm:max-w-none" onClick={() => setOpen(false)}>
          <span className="block font-display text-[1.35rem] leading-[1.1] tracking-tight text-forest-900 sm:text-[1.7rem]">
            {site.name}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[11px] uppercase tracking-wideish text-ink-500 transition-colors hover:text-forest-800",
                pathname === item.href && "text-forest-900",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-forest-800 px-5 py-2.5 text-[11px] uppercase tracking-wideish text-parchment-50 transition-colors hover:bg-forest-900"
          >
            Consult
          </Link>
        </nav>
        <button
          type="button"
          className="p-2 text-forest-800 lg:hidden"
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
          className="space-y-1 border-t border-parchment-200 px-6 py-5 lg:hidden"
          aria-label="Mobile"
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-1 py-2 text-sm text-ink-800"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-3 inline-flex bg-forest-800 px-5 py-2.5 text-[11px] uppercase tracking-wideish text-parchment-50"
            onClick={() => setOpen(false)}
          >
            Consult
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
