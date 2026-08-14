import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-content px-5 py-28 text-center">
      <p className="text-xs font-semibold uppercase tracking-wideish text-sage-600">404</p>
      <h1 className="mt-3 font-display text-5xl text-sage-900">This page is not here.</h1>
      <p className="mt-4 text-ink-600">The link may be old, or the page may have moved.</p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-sage-700 px-6 py-3 text-sm text-cream-50 hover:bg-sage-800"
      >
        Back home
      </Link>
    </div>
  );
}
