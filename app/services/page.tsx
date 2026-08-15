import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, Section } from "@/components/ui/Layout";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services & fees",
  description: "Individual therapy, couples therapy, and consultations.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="pb-12">
        <Container className="max-w-3xl">
          <Eyebrow>Services</Eyebrow>
          <h1 className="font-display text-5xl leading-tight text-forest-900 sm:text-6xl">
            Care that fits the season you are in.
          </h1>
          <p className="mt-6 text-lg leading-8 text-ink-700">
            Fees are sample figures. Replace them in <code>lib/site.ts</code> before you publish.
            Superbills are available for out-of-network reimbursement.
          </p>
        </Container>
      </Section>
      <Container className="pb-8">
        <div className="relative h-72 overflow-hidden sm:h-96">
          <Image
            src="/images/stones-water.jpg"
            alt="Coastal stones in shallow water"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </Container>
      <Section className="pt-12">
        <Container className="grid gap-8 lg:grid-cols-3">
          {site.services.map((service) => (
            <article key={service.title} className="flex flex-col border border-parchment-200 p-8">
              <p className="text-[11px] uppercase tracking-wideish text-gold-600">
                {service.duration}
              </p>
              <h2 className="mt-3 font-display text-3xl text-forest-800">{service.title}</h2>
              <p className="mt-2 font-display text-2xl text-forest-700">{service.fee}</p>
              <p className="mt-5 flex-1 leading-7 text-ink-700">{service.body}</p>
              <Button href="/contact" variant="secondary" className="mt-10">
                Inquire
              </Button>
            </article>
          ))}
        </Container>
      </Section>
    </>
  );
}
