import { Container, Eyebrow, Section } from "@/components/ui/Layout";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Approach",
  description: "How therapy works at this practice.",
};

export default function ApproachPage() {
  return (
    <Section>
      <Container>
        <Eyebrow>Approach</Eyebrow>
        <h1 className="max-w-3xl font-display text-5xl text-sage-900">
          Curious, collaborative, and paced with your nervous system.
        </h1>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {site.approach.map((item) => (
            <article key={item.title} className="rounded-3xl bg-cream-100 p-8">
              <h2 className="font-display text-3xl text-sage-800">{item.title}</h2>
              <p className="mt-4 leading-relaxed text-ink-600">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-16 max-w-prose">
          <h2 className="font-display text-3xl text-sage-900">Modalities</h2>
          <p className="mt-4 text-ink-600">
            Training is a toolbox, not a script. Sessions may draw from:
          </p>
          <ul className="mt-4 space-y-2 text-ink-600">
            {site.modalities.map((item) => (
              <li key={item}>· {item}</li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
