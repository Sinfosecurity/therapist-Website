import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please share your name.").max(120),
  email: z.string().trim().email("Please enter a valid email."),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  preferred: z.enum(["consultation", "individual", "couples", "unsure"]),
  message: z
    .string()
    .trim()
    .min(12, "A little more context helps us respond thoughtfully.")
    .max(4000),
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
