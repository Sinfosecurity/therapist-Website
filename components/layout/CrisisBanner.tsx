import { site } from "@/lib/site";

export function CrisisBanner() {
  return (
    <div className="bg-ink-900 px-4 py-2 text-center text-xs text-cream-100 sm:text-sm">
      {site.crisis.line}
    </div>
  );
}
