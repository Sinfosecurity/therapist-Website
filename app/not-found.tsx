import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-content px-6 py-32 text-center">
      <p className="text-[11px] uppercase tracking-wideish text-gold-600">404</p>
      <h1 className="mt-4 font-display text-5xl text-forest-900">This page is not here.</h1>
      <p className="mt-4 text-ink-700">The link may be old, or the page may have moved.</p>
      <Button href="/" className="mt-10">
        Back home
      </Button>
    </div>
  );
}
