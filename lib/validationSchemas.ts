import { z } from "zod";

export const ContactFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Field must not be empty" }),
});
