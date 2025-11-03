import Link from 'next/link';
import Image from 'next/image';
import { type Product } from '@/lib/products';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const hasSale = product.originalPrice && product.originalPrice > product.price;

  return (
    <Link href={`/products/${product.slug}`} className="group space-y-2">
      <div className="relative overflow-hidden rounded-lg bg-card shadow-sm">
        <div className="aspect-[3/4] relative">
          <Image
            src={product.images[0].url}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
            data-ai-hint={product.images[0].dataAiHint}
            className="object-cover object-center transition-opacity duration-300 group-hover:opacity-0"
          />
          {product.images[1] && (
            <Image
              src={product.images[1].url}
              alt={`${product.name} alternative view`}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
              data-ai-hint={product.images[1].dataAiHint}
              className="object-cover object-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          )}
        </div>
        {hasSale && (
          <Badge variant="destructive" className="absolute top-2 left-2">Sale</Badge>
        )}
      </div>
      <div className="text-center">
        <h3 className="font-body text-base font-semibold truncate">{product.name}</h3>
        <div className="flex justify-center items-center gap-2">
          <p className={`text-sm ${hasSale ? 'text-destructive' : 'text-muted-foreground'}`}>${product.price.toFixed(2)}</p>
          {hasSale && <p className="text-sm text-muted-foreground line-through">${product.originalPrice?.toFixed(2)}</p>}
        </div>
      </div>
    </Link>
  );
}
