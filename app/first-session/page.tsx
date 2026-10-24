import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, Rule, Section } from "@/components/ui/Layout";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "First session",
  description: "What to expect when you begin therapy at Rowan Vale.",
};

export default function FirstSessionPage() {
  return (
    <Section>
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Beginning</Eyebrow>
          <h1 className="font-display text-5xl leading-tight text-forest-900 sm:text-6xl">
            You do not have to arrive prepared.
          </h1>
          <p className="mt-6 text-lg leading-8 text-ink-700">
            Most people write and delete the first email. A consult is enough. The work starts when
            you are in the room — not when the sentence is perfect.
          </p>
        </div>
        <div className="mt-20 grid gap-16 lg:grid-cols-3">
          {site.firstSession.map((item, index) => (
            <article key={item.title}>
              <p className="text-[11px] uppercase tracking-wideish text-gold-600">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-4 font-display text-3xl text-forest-800">{item.title}</h2>
              <p className="mt-4 leading-8 text-ink-700">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-24 max-w-prose border-t border-parchment-200 pt-12">
          <Rule />
          <h2 className="mt-8 font-display text-3xl text-forest-900">Practical notes</h2>
          <ul className="mt-6 space-y-3 leading-7 text-ink-700">
            <li>In-person sessions are held in a private Chelsea studio.</li>
            <li>Telehealth is for clients physically in New York State during the hour.</li>
            <li>Please be in a private, stable place — not a moving car.</li>
            <li>Payment is due at the time of session. Superbills are sent after each paid hour.</li>
          </ul>
          <Button href="/contact" className="mt-10">
            Request a consultation
          </Button>
        </div>
      </Container>
    </Section>
  );
}
