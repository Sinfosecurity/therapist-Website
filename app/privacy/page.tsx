import { Container, Eyebrow, Section } from "@/components/ui/Layout";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <Section>
      <Container className="prose-site max-w-prose">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="mb-6 font-display text-5xl text-forest-900">Privacy</h1>
        <p>
          {site.name} treats the information you share with care. This notice describes how the
          website handles inquiries. Once you become a client, confidentiality is also governed by
          New York law, professional ethics, and — where it applies — a HIPAA Notice of Privacy
          Practices provided at intake.
        </p>
        <h2>What this site collects</h2>
        <p>
          The contact form collects the name, email, optional phone number, and message you choose
          to send. A hidden honeypot field is used only to reduce spam. Server logs may include IP
          address and browser information.
        </p>
        <h2>How messages are used</h2>
        <p>
          Inquiries are used to respond to you and to decide whether the practice is a good fit.
          They are not sold or used for advertising. Do not send detailed health information through
          this website. Email is not a therapy session.
        </p>
        <h2>Therapy confidentiality</h2>
        <p>
          What you share in session is confidential, with the usual legal limits: risk of harm to
          yourself or others, suspected abuse of a child or vulnerable adult, and valid court
          orders. Those limits are reviewed in writing before we begin.
        </p>
        <h2>Contact</h2>
        <p>Questions about this notice can be sent to {site.contact.email}.</p>
      </Container>
    </Section>
  );
}
