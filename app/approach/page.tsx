import { Container, Eyebrow, Rule, Section } from "@/components/ui/Layout";
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
        <div className="max-w-3xl">
          <Eyebrow>Approach</Eyebrow>
          <h1 className="font-display text-5xl leading-tight text-forest-900 sm:text-6xl">
            Curious, collaborative, and paced with your nervous system.
          </h1>
        </div>
        <div className="mt-20 grid gap-16 lg:grid-cols-3">
          {site.approach.map((item) => (
            <article key={item.title}>
              <Rule />
              <h2 className="mt-6 font-display text-3xl text-forest-800">{item.title}</h2>
              <p className="mt-4 leading-8 text-ink-700">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-24 max-w-prose border-t border-parchment-200 pt-12">
          <h2 className="font-display text-3xl text-forest-900">Modalities</h2>
          <p className="mt-4 leading-8 text-ink-700">
            Training is a toolbox, not a script. Sessions may draw from:
          </p>
          <ul className="mt-6 space-y-3 text-ink-700">
            {site.modalities.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-px w-6 shrink-0 bg-gold-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
