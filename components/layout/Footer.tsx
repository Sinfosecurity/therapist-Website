import { site } from "@/lib/site";
import Link from "next/link";

const legal = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Policies" },
  { href: "/first-session", label: "First session" },
];

export function Footer() {
  return (
    <footer className="bg-forest-900 text-parchment-100">
      <div className="mx-auto grid max-w-content gap-14 px-6 py-20 sm:px-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-4xl text-parchment-50">{site.name}</p>
          <p className="mt-5 max-w-sm text-sm leading-7 text-parchment-200/80">
            {site.tagline} A private practice for adults and couples in {site.location.neighborhood}.
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
            {legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-[11px] uppercase tracking-wideish text-gold-400">Contact</p>
          <p className="mt-5 text-sm">
            <a href={`mailto:${site.contact.email}`} className="hover:text-white">
              {site.contact.email}
            </a>
          </p>
          <p className="text-sm">
            <a href={`tel:+12125550148`} className="hover:text-white">
              {site.contact.phone}
            </a>
          </p>
          <p className="mt-3 text-sm text-parchment-200/80">{site.contact.hours}</p>
          <p className="mt-2 text-sm text-parchment-200/80">{site.location.serving}</p>
          <p className="mt-8 max-w-sm text-xs leading-6 text-parchment-200/70">{site.crisis.line}</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-[11px] uppercase tracking-wideish text-parchment-200/60 sm:px-10">
        © {new Date().getFullYear()} {site.name} · Therapy is not emergency care
      </div>
    </footer>
  );
}
