import { rateLimit } from "@/lib/rate-limit";
import { site } from "@/lib/site";
import { contactSchema } from "@/lib/validations";
import { NextResponse } from "next/server";

const labels = {
  consultation: "Complimentary consultation",
  individual: "Individual therapy",
  couples: "Couples therapy",
  unsure: "Not sure yet",
} as const;

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Please wait a few minutes and try again." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 422 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, phone, preferred, message } = parsed.data;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `Interest: ${labels[preferred]}`,
    "",
    message,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM ?? `${site.name} <${site.contact.email}>`,
        to: [process.env.CONTACT_TO ?? site.contact.email],
        reply_to: email,
        subject: `New inquiry from ${name}`,
        text,
      }),
    });
    if (!response.ok) {
      return NextResponse.json({ error: "Unable to send just now." }, { status: 502 });
    }
  } else {
    console.info("[contact]", { name, email, preferred });
  }

  return NextResponse.json({ ok: true });
}
