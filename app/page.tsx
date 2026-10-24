import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, Rule, Section } from "@/components/ui/Layout";
import { site } from "@/lib/site";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden">
        <Image
          src="/images/hero-path.jpg"
          alt="A quiet forest path in early morning light"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/80 via-forest-900/45 to-forest-900/20" />
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.18]" />
        <Container className="relative flex min-h-[88vh] items-end pb-20 pt-32">
          <div className="max-w-3xl animate-rise text-parchment-50">
            <Eyebrow className="text-parchment-100 drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]">
              {site.hero.eyebrow}
            </Eyebrow>
            <h1 className="font-display text-5xl font-medium leading-[1.08] sm:text-6xl lg:text-7xl">
              {site.hero.title}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-parchment-100/90">{site.hero.lede}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact" variant="light">
                Request a consultation <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button
                href="/approach"
                variant="secondary"
                className="text-parchment-50 ring-parchment-50/40 hover:bg-parchment-50 hover:text-forest-900"
              >
                The approach
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/botanical.jpg"
                alt="Olive branches against a warm wall"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Eyebrow>The practice</Eyebrow>
            <h2 className="font-display text-4xl leading-tight text-forest-900 sm:text-5xl">
              {site.about.lede}
            </h2>
            <Rule className="mt-8" />
            <p className="mt-8 text-[1.05rem] leading-8 text-ink-700">
              {site.description} Sessions are confidential, paced with care, and held in a room —
              or a screen — that does not rush you.
            </p>
            <p className="mt-6 text-sm text-ink-500">{site.location.serving}</p>
            <Button href="/about" variant="secondary" className="mt-10">
              Meet Dr Lena Washington
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-parchment-100">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Specialties</Eyebrow>
            <h2 className="font-display text-4xl text-forest-900 sm:text-5xl">
              Support for the seasons that ask more of you.
            </h2>
          </div>
          <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2">
            {site.specialties.map((item, index) => (
              <article key={item.title} className="border-t border-parchment-300 pt-6">
                <p className="text-[11px] uppercase tracking-wideish text-gold-600">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-3xl text-forest-800">{item.title}</h3>
                <p className="mt-3 leading-7 text-ink-700">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <section className="relative h-[58vh] min-h-[420px]">
        <Image
          src="/images/office-light.jpg"
          alt="A quiet studio with a linen chair and morning light"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest-900/25" />
        <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12">
          <p className="font-display text-3xl text-parchment-50 sm:text-4xl">
            A room designed to feel unhurried.
          </p>
        </div>
      </section>

      <Section>
        <Container>
          <Eyebrow>How the work feels</Eyebrow>
          <div className="grid gap-12 lg:grid-cols-3">
            {site.approach.map((item) => (
              <article key={item.title}>
                <Rule />
                <h2 className="mt-6 font-display text-3xl text-forest-900">{item.title}</h2>
                <p className="mt-4 leading-8 text-ink-700">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-forest-900 text-parchment-50">
        <Container>
          <Eyebrow className="text-gold-400">In their words</Eyebrow>
          <p className="mb-14 max-w-xl text-sm text-parchment-200/70">
            Composite reflections, written to show the tone of the work — not testimonials from
            identifiable clients.
          </p>
          <div className="grid gap-12 lg:grid-cols-3">
            {site.testimonials.map((item) => (
              <blockquote key={item.quote}>
                <p className="font-display text-2xl leading-snug sm:text-3xl">“{item.quote}”</p>
                <footer className="mt-6 text-[11px] uppercase tracking-wideish text-gold-400">
                  {item.attribution}
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-3">
          {site.services.map((service) => (
            <article key={service.title} className="border border-parchment-200 p-8">
              <p className="text-[11px] uppercase tracking-wideish text-gold-600">
                {service.duration}
              </p>
              <h2 className="mt-3 font-display text-3xl text-forest-900">{service.title}</h2>
              <p className="mt-2 font-display text-2xl text-forest-700">{service.fee}</p>
              <p className="mt-5 leading-7 text-ink-700">{service.body}</p>
            </article>
          ))}
        </Container>
      </Section>

      <Section className="bg-parchment-100">
        <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Eyebrow>Begin</Eyebrow>
            <h2 className="font-display text-4xl text-forest-900 sm:text-5xl">
              A complimentary twenty minutes. No performance required.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/contact">
              Write to the practice <ArrowUpRight className="h-4 w-4" />
            </Button>
            <Button href="/first-session" variant="secondary">
              First session
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
