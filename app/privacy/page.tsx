import { Container, Section } from "@/components/ui/Layout";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <Section>
      <Container className="prose-site max-w-prose">
        <h1 className="mb-6 font-display text-5xl text-sage-900">Privacy</h1>
        <p>
          {site.name} treats your information with care. This page is a starting point, not legal
          advice. Have an attorney review it before you go live, and add a HIPAA Notice of Privacy
          Practices if you are a covered entity.
        </p>
        <h2>What this site collects</h2>
        <p>
          The contact form collects the name, email, phone number, and message you choose to send.
          A hidden honeypot field is used only to reduce spam. Server logs may include IP address
          and browser information.
        </p>
        <h2>How messages are used</h2>
        <p>
          Inquiries are used to respond to you and to decide whether the practice is a good fit.
          They are not sold. Do not send detailed health information through this website.
        </p>
        <h2>Therapy confidentiality</h2>
        <p>
          Once you become a client, confidentiality is governed by professional ethics, state law,
          and (where applicable) HIPAA. Limits typically include risk of harm, suspected abuse of
          a child or vulnerable adult, and court orders. Those limits will be reviewed in your
          intake paperwork.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about this notice can be sent to {site.contact.email}.
        </p>
      </Container>
    </Section>
  );
}
