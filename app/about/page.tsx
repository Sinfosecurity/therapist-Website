import { Button } from "@/components/ui/Button";
import { Container, Eyebrow, Rule, Section } from "@/components/ui/Layout";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: `Meet ${site.clinician.name}.`,
};

export default function AboutPage() {
  return (
    <Section>
      <Container className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/images/botanical.jpg"
              alt="Botanical still life in the studio"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
              priority
            />
          </div>
        </div>
        <div className="prose-site lg:col-span-6 lg:col-start-7">
          <Eyebrow>About</Eyebrow>
          <h1 className="mb-4 font-display text-5xl leading-tight text-forest-900">
            {site.clinician.name}
          </h1>
          <p className="text-sm uppercase tracking-wideish text-gold-600">
            {site.clinician.credentials}
          </p>
          <Rule className="my-8" />
          <p className="text-xl leading-8 text-forest-800">{site.about.lede}</p>
          {site.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <h2>Credentials</h2>
          <ul>
            <li>{site.clinician.credentials}</li>
            <li>{site.clinician.education}</li>
            <li>{site.clinician.license}</li>
          </ul>
          <Button href="/contact" className="mt-4">
            Request a consultation
          </Button>
        </div>
      </Container>
    </Section>
  );
}
