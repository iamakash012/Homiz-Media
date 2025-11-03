import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GenerateDescriptionPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-muted-foreground mb-8">This page is under construction as part of the portfolio redesign.</p>
      <Button asChild>
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  );
}
