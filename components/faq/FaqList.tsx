"use client";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function FaqList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <dl className="divide-y divide-parchment-200 border-y border-parchment-200">
      {site.faqs.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q}>
            <dt>
              <button
                type="button"
                className="flex w-full items-baseline justify-between gap-6 py-6 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span className="font-display text-2xl text-forest-900 sm:text-[1.85rem]">
                  {item.q}
                </span>
                <span className="text-gold-600" aria-hidden>
                  {isOpen ? "–" : "+"}
                </span>
              </button>
            </dt>
            <dd
              className={cn(
                "overflow-hidden text-[1.05rem] leading-8 text-ink-700 transition-[max-height,opacity] duration-300",
                isOpen ? "max-h-64 pb-6 opacity-100" : "max-h-0 opacity-0",
              )}
            >
              {item.a}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
