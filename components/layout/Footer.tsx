import { site } from "@/lib/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-cream-200 bg-sage-900 text-cream-100">
      <div className="mx-auto grid max-w-content gap-10 px-5 py-16 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl text-cream-50">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream-200">
            {site.tagline} {site.location.serving}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wideish text-sage-200">
            Visit
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wideish text-sage-200">
            Contact
          </p>
          <p className="mt-4 text-sm">{site.contact.email}</p>
          <p className="text-sm">{site.contact.phone}</p>
          <p className="mt-2 text-sm text-cream-200">{site.contact.hours}</p>
          <p className="mt-6 text-xs leading-relaxed text-sage-200">{site.crisis.line}</p>
        </div>
      </div>
      <div className="border-t border-sage-800 px-5 py-6 text-center text-xs text-sage-200 sm:px-8">
        © {new Date().getFullYear()} {site.name}. Therapy is not a substitute for emergency
        care.
      </div>
    </footer>
  );
}
