import { Container, Eyebrow, Section } from "@/components/ui/Layout";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: `Meet ${site.clinician.name} and learn about ${site.name}.`,
};

export default function AboutPage() {
  return (
    <Section>
      <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="prose-site max-w-prose">
          <Eyebrow>About</Eyebrow>
          <h1 className="mb-6 font-display text-5xl text-sage-900">{site.clinician.name}</h1>
          <p>
            I work with adults and couples who want a place to slow down, tell the truth, and
            practice new ways of being with themselves and the people they love.
          </p>
          <p>
            Before becoming a therapist I learned, as many of us do, that insight alone is not
            always enough. The body keeps score. Families pass down survival strategies. Culture
            and power shape what we are allowed to feel. Therapy here holds all of that.
          </p>
          <p>
            Update this biography in <code>lib/site.ts</code> and this page with your training,
            license, and the story you actually want clients to read. Keep it human. Credentials
            belong here, but so does warmth.
          </p>
          <h2>Credentials</h2>
          <ul>
            <li>{site.clinician.credentials}</li>
            <li>{site.clinician.license}</li>
            <li>Replace with graduate training, certifications, and professional memberships.</li>
          </ul>
        </div>
        <aside className="h-fit rounded-[2rem] bg-cream-100 p-8">
          <p className="text-xs font-semibold uppercase tracking-wideish text-sage-600">
            Practice details
          </p>
          <dl className="mt-6 space-y-5 text-sm">
            <div>
              <dt className="text-ink-400">Location</dt>
              <dd className="mt-1 text-ink-800">{site.location.city}</dd>
            </div>
            <div>
              <dt className="text-ink-400">Serving</dt>
              <dd className="mt-1 text-ink-800">{site.location.serving}</dd>
            </div>
            <div>
              <dt className="text-ink-400">Hours</dt>
              <dd className="mt-1 text-ink-800">{site.contact.hours}</dd>
            </div>
          </dl>
        </aside>
      </Container>
    </Section>
  );
}
