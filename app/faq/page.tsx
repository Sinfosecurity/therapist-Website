import { FaqList } from "@/components/faq/FaqList";
import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, Section } from "@/components/ui/Layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about starting therapy.",
};

export default function FaqPage() {
  return (
    <Section>
      <Container className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Eyebrow>FAQ</Eyebrow>
          <h1 className="font-display text-5xl leading-tight text-forest-900">
            Questions people often ask first.
          </h1>
          <p className="mt-6 leading-8 text-ink-700">
            If yours is not here, write anyway. Fit is easier to feel in conversation than on a
            page.
          </p>
          <Button href="/contact" className="mt-8">
            Ask a question
          </Button>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          <FaqList />
        </div>
      </Container>
    </Section>
  );
}
