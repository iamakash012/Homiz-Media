"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import { generateProductDescription } from "@/ai/flows/generate-product-descriptions"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Loader2, Sparkles } from "lucide-react"

const formSchema = z.object({
  productName: z.string().min(2, { message: "Product name is required." }),
  features: z.string().min(5, { message: "Please list at least one feature." }),
  style: z.string().optional(),
  material: z.string().optional(),
  occasion: z.string().optional(),
});

export function DescriptionGeneratorForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [generatedDescription, setGeneratedDescription] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productName: "",
      features: "",
      style: "",
      material: "",
      occasion: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setGeneratedDescription("");
    try {
      const { description } = await generateProductDescription({
        ...values,
        features: values.features.split(',').map(f => f.trim()),
      });
      setGeneratedDescription(description);
      toast({
        title: "Description Generated!",
        description: "Your new product description is ready.",
      });
    } catch (error) {
      console.error("Error generating description:", error);
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: "Could not generate a description. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="productName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Ethereal Bloom Gown" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="features"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Key Features</FormLabel>
              <FormControl>
                <Textarea placeholder="e.g., floral embroidery, sheer tulle, floor-length" {...field} />
              </FormControl>
              <FormDescription>
                Separate features with a comma.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
            control={form.control}
            name="style"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Style (Optional)</FormLabel>
                <FormControl>
                    <Input placeholder="e.g., Modern, Vintage" {...field} />
                </FormControl>
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="material"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Material (Optional)</FormLabel>
                <FormControl>
                    <Input placeholder="e.g., Cotton, Leather" {...field} />
                </FormControl>
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="occasion"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Occasion (Optional)</FormLabel>
                <FormControl>
                    <Input placeholder="e.g., Casual, Formal" {...field} />
                </FormControl>
                </FormItem>
            )}
            />
        </div>

        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? (
            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...</>
          ) : (
            <><Sparkles className="mr-2 h-4 w-4" /> Generate Description</>
          )}
        </Button>

        {generatedDescription && (
            <div className="space-y-2 pt-4">
                <h3 className="text-lg font-semibold">Generated Description:</h3>
                <div className="bg-secondary p-4 rounded-md prose max-w-none">
                    <p>{generatedDescription}</p>
                </div>
            </div>
        )}
      </form>
    </Form>
  )
}
