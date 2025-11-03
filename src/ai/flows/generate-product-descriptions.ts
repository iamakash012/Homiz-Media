// The GenerateProductDescriptions flow uses an LLM to generate product descriptions based on key features provided as input.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProductDescriptionInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  features: z
    .array(z.string())
    .describe('An array of key features for the product.'),
  style: z
    .string()
    .optional()
    .describe('The style or aesthetic of the product (e.g., modern, vintage).'),
  material: z
    .string()
    .optional()
    .describe('The primary material of the product (e.g., cotton, leather).'),
  occasion: z
    .string()
    .optional()
    .describe('The occasion for which the product is suitable (e.g., casual, formal).'),
});
export type GenerateProductDescriptionInput =
  z.infer<typeof GenerateProductDescriptionInputSchema>;

const GenerateProductDescriptionOutputSchema = z.object({
  description: z.string().describe('The generated product description.'),
});
export type GenerateProductDescriptionOutput =
  z.infer<typeof GenerateProductDescriptionOutputSchema>;

export async function generateProductDescription(
  input: GenerateProductDescriptionInput
): Promise<GenerateProductDescriptionOutput> {
  return generateProductDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProductDescriptionPrompt',
  input: {schema: GenerateProductDescriptionInputSchema},
  output: {schema: GenerateProductDescriptionOutputSchema},
  prompt: `You are an expert copywriter specializing in product descriptions.

  Generate a compelling and engaging product description for the following product, incorporating relevant features and details.
  Product Name: {{{productName}}}
  Features: {{#each features}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
  {{#if style}}Style: {{{style}}}{{/if}}
  {{#if material}}Material: {{{material}}}{{/if}}
  {{#if occasion}}Occasion: {{{occasion}}}{{/if}}
  `,
});

const generateProductDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProductDescriptionFlow',
    inputSchema: GenerateProductDescriptionInputSchema,
    outputSchema: GenerateProductDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
