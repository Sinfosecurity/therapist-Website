"use client";

import { Button } from "@/components/ui/Button";
import { contactSchema, type ContactInput } from "@/lib/validations";
import { useState, type FormEvent, type ReactNode } from "react";

const initial: ContactInput = {
  name: "",
  email: "",
  phone: "",
  preferred: "consultation",
  message: "",
  website: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        next[issue.path[0]?.toString() ?? "form"] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("sent");
      setValues(initial);
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-parchment-200 bg-parchment-100 p-8 text-forest-900">
        <h2 className="font-display text-3xl">Thank you.</h2>
        <p className="mt-3 leading-8 text-ink-700">
          Your note was received. I typically reply within two business days. If this is an
          emergency, please call 911 or 988 instead.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        value={values.website}
        onChange={(event) => setValues((current) => ({ ...current, website: event.target.value }))}
      />
      <Field label="Name" error={errors.name}>
        <input
          required
          name="name"
          value={values.name}
          onChange={(event) => setValues((current) => ({ ...current, name: event.target.value }))}
          className="input"
        />
      </Field>
      <Field label="Email" error={errors.email}>
        <input
          required
          type="email"
          name="email"
          value={values.email}
          onChange={(event) => setValues((current) => ({ ...current, email: event.target.value }))}
          className="input"
        />
      </Field>
      <Field label="Phone (optional)" error={errors.phone}>
        <input
          name="phone"
          value={values.phone}
          onChange={(event) => setValues((current) => ({ ...current, phone: event.target.value }))}
          className="input"
        />
      </Field>
      <Field label="I am interested in" error={errors.preferred}>
        <select
          name="preferred"
          value={values.preferred}
          onChange={(event) =>
            setValues((current) => ({
              ...current,
              preferred: event.target.value as ContactInput["preferred"],
            }))
          }
          className="input"
        >
          <option value="consultation">A complimentary consultation</option>
          <option value="individual">Individual therapy</option>
          <option value="couples">Couples therapy</option>
          <option value="unsure">I am not sure yet</option>
        </select>
      </Field>
      <Field label="What would you like support with?" error={errors.message}>
        <textarea
          required
          name="message"
          rows={6}
          value={values.message}
          onChange={(event) =>
            setValues((current) => ({ ...current, message: event.target.value }))
          }
          className="input resize-y"
        />
      </Field>
      <p className="text-xs leading-relaxed text-ink-400">
        Please do not include sensitive medical details in this form. Email is not a confidential
        therapy session.
      </p>
      {status === "error" ? (
        <p className="text-sm text-clay-600">
          Something went wrong. Please email directly or try again in a moment.
        </p>
      ) : null}
      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] uppercase tracking-wideish text-ink-500">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-sm text-clay-600">{error}</span> : null}
    </label>
  );
}
