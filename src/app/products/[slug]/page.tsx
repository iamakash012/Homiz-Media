import Link from "next/link";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import { getProducts } from "@/lib/products";

export async function generateStaticParams() {
  const products = getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}


export default function ProductPage({ params }: { params: { slug: string } }) {
  // This page is deprecated in the new design.
  // We can show a simple message or redirect.
  // notFound(); // Or uncomment this to show a 404

  return (
     <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-muted-foreground mb-8">This page is under construction as part of the portfolio redesign.</p>
      <Button asChild>
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  )
}
