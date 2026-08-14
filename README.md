# Haven Path Therapy

A calm, content-driven website for a private therapy practice. Built with Next.js, TypeScript, and Tailwind CSS.

**This repository started empty.** Practice name, clinician bio, fees, and location are placeholders. Edit `lib/site.ts` before you publish.

## Pages

- Home
- About
- Services & fees
- Approach
- FAQ
- Contact (validated form + `/api/contact`)
- Privacy

The site includes a crisis banner (988), skip-to-content, and basic security headers. The contact API validates input and logs inquiries. Wire it to email (for example Resend) when you are ready.

## Customize

1. Open `lib/site.ts`.
2. Replace the practice name, clinician credentials, location, fees, and copy.
3. Update `site.url` and `app/robots.ts` with the real domain.
4. Have an attorney review the privacy page and add a HIPAA Notice of Privacy Practices if required.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run type-check
npm run build
```

## Stack

Matches the later Sinfosecurity marketing sites: Next.js App Router, TypeScript, Tailwind, Zod validation, and a small custom UI rather than a full component library dump.
