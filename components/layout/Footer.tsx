import { site } from "@/lib/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-forest-900 text-parchment-100">
      <div className="mx-auto grid max-w-content gap-14 px-6 py-20 sm:px-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-4xl text-parchment-50">{site.name}</p>
          <p className="mt-5 max-w-sm text-sm leading-7 text-parchment-200/80">
            {site.tagline} A private practice for adults and couples.
          </p>
        </div>
        <div className="md:col-span-3">
          <p className="text-[11px] uppercase tracking-wideish text-gold-400">Visit</p>
          <ul className="mt-5 space-y-3 text-sm text-parchment-200">
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
        <div className="md:col-span-4">
          <p className="text-[11px] uppercase tracking-wideish text-gold-400">Contact</p>
          <p className="mt-5 text-sm">{site.contact.email}</p>
          <p className="text-sm">{site.contact.phone}</p>
          <p className="mt-3 text-sm text-parchment-200/80">{site.contact.hours}</p>
          <p className="mt-8 max-w-sm text-xs leading-6 text-parchment-200/70">{site.crisis.line}</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-[11px] uppercase tracking-wideish text-parchment-200/60 sm:px-10">
        © {new Date().getFullYear()} {site.name} · Therapy is not emergency care
      </div>
    </footer>
  );
}
