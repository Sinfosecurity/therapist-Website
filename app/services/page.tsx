import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, Section } from "@/components/ui/Layout";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & fees",
  description: "Individual therapy, couples therapy, and consultations.",
};

export default function ServicesPage() {
  return (
    <Section>
      <Container>
        <Eyebrow>Services</Eyebrow>
        <h1 className="max-w-2xl font-display text-5xl text-sage-900">Care that fits the season you are in.</h1>
        <p className="mt-5 max-w-prose text-lg text-ink-600">
          Fees below are placeholders. Update them in <code>lib/site.ts</code> before you publish.
          Superbills are available for out-of-network reimbursement.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {site.services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col rounded-[2rem] bg-white p-8 shadow-soft ring-1 ring-cream-200"
            >
              <h2 className="font-display text-3xl text-sage-800">{service.title}</h2>
              <p className="mt-2 text-sm text-ink-400">
                {service.duration} · {service.fee}
              </p>
              <p className="mt-4 flex-1 leading-relaxed text-ink-600">{service.body}</p>
              <Button href="/contact" variant="secondary" className="mt-8">
                Inquire
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
