import { ContactForm } from "@/components/contact/ContactForm";
import { Container, Eyebrow, Rule, Section } from "@/components/ui/Layout";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a consultation or ask a question.",
};

export default function ContactPage() {
  return (
    <Section>
      <Container className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="font-display text-5xl leading-tight text-forest-900">
            Let us see whether this is a fit.
          </h1>
          <p className="mt-6 leading-8 text-ink-700">
            Share a little about what you are looking for. I reply by email, usually within two
            business days. This form is not for emergencies.
          </p>
          <Rule className="my-8" />
          <ul className="space-y-2 text-sm text-ink-700">
            <li>{site.contact.email}</li>
            <li>{site.contact.phone}</li>
            <li>{site.contact.hours}</li>
            <li>{site.location.serving}</li>
          </ul>
          <div className="relative mt-12 hidden aspect-[4/3] overflow-hidden lg:block">
            <Image
              src="/images/stones-water.jpg"
              alt="Still water over stones"
              fill
              className="object-cover"
              sizes="40vw"
            />
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}
