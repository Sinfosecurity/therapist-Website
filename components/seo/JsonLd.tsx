import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.contact.phone,
    email: site.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.city,
    },
    medicalSpecialty: "Psychotherapy",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
