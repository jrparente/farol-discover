"use client";

import * as z from "zod";

export const contactSchema = z.object({
  first_name: z.string().min(1, { message: "Last name is required" }),
  last_name: z.string().min(1, { message: "First name is required" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(10, { message: "Message should be at least 10 characters" }),
});
