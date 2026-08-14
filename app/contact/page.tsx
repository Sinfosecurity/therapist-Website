import { ContactForm } from "@/components/contact/ContactForm";
import { Container, Eyebrow, Section } from "@/components/ui/Layout";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a consultation or ask a question.",
};

export default function ContactPage() {
  return (
    <Section>
      <Container className="grid gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="font-display text-5xl text-sage-900">Let us see whether this is a fit.</h1>
          <p className="mt-5 max-w-prose leading-relaxed text-ink-600">
            Share a little about what you are looking for. I will reply by email, usually within two
            business days. This form is not for emergencies.
          </p>
          <ul className="mt-8 space-y-2 text-sm text-ink-600">
            <li>{site.contact.email}</li>
            <li>{site.contact.phone}</li>
            <li>{site.contact.hours}</li>
            <li>{site.location.serving}</li>
          </ul>
        </div>
        <ContactForm />
      </Container>
    </Section>
  );
}
