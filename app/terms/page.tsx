import { Container, Eyebrow, Section } from "@/components/ui/Layout";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice policies",
};

export default function TermsPage() {
  return (
    <Section>
      <Container className="prose-site max-w-prose">
        <Eyebrow>Policies</Eyebrow>
        <h1 className="mb-6 font-display text-5xl text-forest-900">Practice policies</h1>
        <p>
          These policies govern scheduled care at {site.name}. They are reviewed again in your
          intake paperwork. If anything here is unclear, ask before we begin.
        </p>
        <h2>Who I see</h2>
        <p>
          I work with adults and couples. I do not currently see children or adolescents. Telehealth
          is available only when you are physically located in New York State.
        </p>
        <h2>Fees and payment</h2>
        <p>
          Individual sessions are {site.services[0].fee} for {site.services[0].duration}. Couples
          sessions are {site.services[1].fee} for {site.services[1].duration}. Payment is due at
          the time of service. HSA and FSA cards are accepted.
        </p>
        <h2>Cancellations</h2>
        <p>
          Please give at least 24 hours’ notice. Late cancellations and missed sessions are billed
          at the full fee, except in emergencies.
        </p>
        <h2>Confidentiality</h2>
        <p>
          What you share in session is confidential, with the usual legal limits: risk of harm to
          yourself or others, suspected abuse of a child or vulnerable adult, and valid court
          orders. Those limits will be explained in writing before we start.
        </p>
        <h2>Communication</h2>
        <p>
          Email and this website are for scheduling and brief questions, not therapy. I typically
          reply within two business days. I do not provide emergency coverage between sessions.
        </p>
        <h2>Contact</h2>
        <p>
          {site.contact.email} · {site.contact.phone}
        </p>
      </Container>
    </Section>
  );
}
