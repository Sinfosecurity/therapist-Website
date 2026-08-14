import { contactSchema } from "@/lib/validations";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
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

  console.info("[contact]", {
    name: parsed.data.name,
    email: parsed.data.email,
    preferred: parsed.data.preferred,
  });

  return NextResponse.json({ ok: true });
}
