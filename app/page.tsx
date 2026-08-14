import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, Section } from "@/components/ui/Layout";
import { site } from "@/lib/site";
import { ArrowRight, HeartHandshake, Leaf, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.12]" />
        <Container className="grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2">
          <div>
            <Eyebrow>{site.clinician.credentials}</Eyebrow>
            <h1 className="font-display text-5xl leading-tight text-sage-900 sm:text-6xl">
              Therapy that makes room for the whole of you.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600">
              {site.description} Sessions are unhurried, confidential, and paced with care.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">
                Request a consultation <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/approach" variant="secondary">
                How I work
              </Button>
            </div>
            <p className="mt-6 text-sm text-ink-400">{site.location.serving}</p>
          </div>
          <div className="rounded-[2rem] bg-sage-800 p-8 text-cream-50 shadow-soft sm:p-12">
            <p className="font-display text-3xl leading-snug">
              “You do not have to arrive with the right words. We can find them together.”
            </p>
            <p className="mt-6 text-sm text-sage-100">{site.clinician.name}</p>
            <dl className="mt-10 grid grid-cols-2 gap-6 text-sm">
              <div>
                <dt className="text-sage-200">Session length</dt>
                <dd className="mt-1 text-lg">50–75 minutes</dd>
              </div>
              <div>
                <dt className="text-sage-200">Format</dt>
                <dd className="mt-1 text-lg">Video or in person</dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      <Section className="bg-cream-100/70">
        <Container>
          <Eyebrow>Specialties</Eyebrow>
          <h2 className="max-w-2xl font-display text-4xl text-sage-900">
            Support for the seasons that ask more of you.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {site.specialties.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-cream-200"
              >
                <h3 className="font-display text-2xl text-sage-800">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-3">
          {[
            {
              icon: HeartHandshake,
              title: "A steady relationship",
              body: "Change happens in a relationship that feels safe enough to tell the truth. We build that first.",
            },
            {
              icon: Leaf,
              title: "Paced, not pushed",
              body: "Insight without overwhelm. We work with your window of tolerance, not against it.",
            },
            {
              icon: ShieldCheck,
              title: "Clear and confidential",
              body: "You will know the fee, the cancellation policy, and the limits of confidentiality before we begin.",
            },
          ].map((item) => (
            <article key={item.title}>
              <item.icon className="h-8 w-8 text-sage-600" aria-hidden />
              <h2 className="mt-4 font-display text-3xl text-sage-900">{item.title}</h2>
              <p className="mt-3 leading-relaxed text-ink-600">{item.body}</p>
            </article>
          ))}
        </Container>
      </Section>

      <Section className="bg-sage-800 text-cream-50">
        <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-4xl">Ready to take a first step?</h2>
            <p className="mt-3 max-w-xl text-sage-100">
              A complimentary 20-minute consultation is a low-pressure way to see whether we are a
              good fit.
            </p>
          </div>
          <Button href="/contact" variant="secondary">
            Get in touch
          </Button>
        </Container>
      </Section>
    </>
  );
}
