import { site } from "@/lib/site";

export function CrisisBanner() {
  return (
    <div className="bg-ink-900 px-4 py-2 text-center text-[11px] leading-5 tracking-wide text-parchment-100/90 sm:text-xs">
      {site.crisis.line}
    </div>
  );
}
