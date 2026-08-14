import { Container, Eyebrow, Section } from "@/components/ui/Layout";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about starting therapy.",
};

export default function FaqPage() {
  return (
    <Section>
      <Container>
        <Eyebrow>FAQ</Eyebrow>
        <h1 className="font-display text-5xl text-sage-900">Questions people often ask first.</h1>
        <dl className="mt-12 max-w-3xl space-y-6">
          {site.faqs.map((item) => (
            <div key={item.q} className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-cream-200">
              <dt className="font-display text-2xl text-sage-800">{item.q}</dt>
              <dd className="mt-3 leading-relaxed text-ink-600">{item.a}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
