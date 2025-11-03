"use server";

import { z } from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function handleContactForm(values: z.infer<typeof formSchema>) {
  // Here you would typically send an email, save to a database, etc.
  // For this simulation, we'll just log the data to the server console.
  
  console.log("New contact form submission:");
  console.log("Name:", values.name);
  console.log("Email:", values.email);
  console.log("Message:", values.message);

  // Simulate a successful operation
  return { success: true };
}
