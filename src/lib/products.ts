export type Product = {
  id: string;
  slug: string;
  name:string;
  price: number;
  originalPrice?: number;
  images: { url: string; dataAiHint: string }[];
  category: string;
  description: string;
  details: string;
  care: string;
  sizing: string;
  featured?: boolean;
};

const products: Product[] = [
  {
    id: '1',
    slug: 'ethereal-bloom-gown',
    name: 'Ethereal Bloom Gown',
    price: 350,
    originalPrice: 420,
    images: [
      { url: 'https://picsum.photos/seed/p1-1/800/1200', dataAiHint: 'fashion model' },
      { url: 'https://picsum.photos/seed/p1-2/800/1200', dataAiHint: 'clothing detail' },
      { url: 'https://picsum.photos/seed/p1-3/800/1200', dataAiHint: 'dress fabric' },
    ],
    category: 'Gowns',
    description: 'A masterpiece of floral embroidery on delicate tulle, this gown is a poetic expression of femininity. Perfect for making a grand entrance.',
    details: '<ul><li>Intricate floral embroidery</li><li>Sheer tulle fabric</li><li>Floor-length with a subtle train</li><li>Concealed zip fastening</li></ul>',
    care: 'Dry clean only. Handle with care.',
    sizing: 'Fits true to size. Model is 5\'9" and wears a size S.',
    featured: true,
  },
  {
    id: '2',
    slug: 'midnight-velvet-lehenga',
    name: 'Midnight Velvet Lehenga',
    price: 480,
    images: [
      { url: 'https://picsum.photos/seed/p2-1/800/1200', dataAiHint: 'ethnic wear' },
      { url: 'https://picsum.photos/seed/p2-2/800/1200', dataAiHint: 'embroidery detail' },
    ],
    category: 'Lehengas',
    description: 'Crafted from plush velvet in a deep midnight hue, this lehenga set is adorned with intricate zardozi work, exuding regal charm.',
    details: '<ul><li>Plush velvet fabric</li><li>Hand-embroidered zardozi work</li><li>Includes choli, lehenga, and dupatta</li></ul>',
    care: 'Dry clean only. Store in a cool, dry place.',
    sizing: 'Available in custom sizes. Please refer to our size chart.',
    featured: true,
  },
  {
    id: '3',
    slug: 'rose-quartz-saree',
    name: 'Rose Quartz Saree',
    price: 290,
    images: [
      { url: 'https://picsum.photos/seed/p3-1/800/1200', dataAiHint: 'saree model' },
      { url: 'https://picsum.photos/seed/p3-2/800/1200', dataAiHint: 'silk fabric' },
      { url: 'https://picsum.photos/seed/p3-3/800/1200', dataAiHint: 'fashion details' },
    ],
    category: 'Sarees',
    description: 'Drape yourself in the elegance of this rose quartz saree, crafted from fine silk chiffon with a delicate pearl border.',
    details: '<ul><li>Fine silk chiffon</li><li>Hand-embellished pearl border</li><li>Lightweight and easy to drape</li></ul>',
    care: 'Dry clean recommended.',
    sizing: 'One size fits all. Blouse piece included.',
    featured: true,
  },
  {
    id: '4',
    slug: 'ivory-dream-anarkali',
    name: 'Ivory Dream Anarkali',
    price: 375,
    originalPrice: 450,
    images: [
      { url: 'https://picsum.photos/seed/p4-1/800/1200', dataAiHint: 'traditional dress' },
      { url: 'https://picsum.photos/seed/p4-2/800/1200', dataAiHint: 'indian fashion' },
    ],
    category: 'Anarkali',
    description: 'An ethereal creation in ivory, this anarkali suit features delicate chikankari embroidery and sequin highlights.',
    details: '<ul><li>Georgette fabric</li><li>Authentic Lucknowi chikankari</li><li>Subtle sequin embellishments</li></ul>',
    care: 'Gentle hand wash or dry clean.',
    sizing: 'Fits true to size. Comes with matching churidar and dupatta.',
    featured: true,
  },
  {
    id: '5',
    slug: 'golden-hour-sharara',
    name: 'Golden Hour Sharara',
    price: 320,
    images: [
      { url: 'https://picsum.photos/seed/p5-1/800/1200', dataAiHint: 'festive wear' },
      { url: 'https://picsum.photos/seed/p5-2/800/1200', dataAiHint: 'party outfit' },
    ],
    category: 'Shararas',
    description: 'Shine bright in our Golden Hour Sharara set. The short kurti and flared pants are crafted from shimmering brocade fabric.',
    details: '<ul><li>Shimmering brocade fabric</li><li>Short kurti with flared sharara pants</li><li>Perfect for festive occasions</li></ul>',
    care: 'Dry clean only.',
    sizing: 'Model is 5\'8" and wearing a size M.',
  },
  {
    id: '6',
    slug: 'sapphire-silk-kurta',
    name: 'Sapphire Silk Kurta',
    price: 180,
    images: [
      { url: 'https://picsum.photos/seed/p6-1/800/1200', dataAiHint: 'mens fashion' },
      { url: 'https://picsum.photos/seed/p6-2/800/1200', dataAiHint: 'kurta design' },
    ],
    category: 'Kurtas',
    description: 'A classic men\'s kurta in a rich sapphire blue, made from premium raw silk for a sophisticated look.',
    details: '<ul><li>Premium raw silk</li><li>Classic straight cut</li><li>Mandarin collar</li></ul>',
    care: 'Dry clean.',
    sizing: 'Available in S, M, L, XL. Refer to men\'s size chart.',
  },
];

export const getProducts = (): Product[] => {
  return products;
}

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
}

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured).slice(0, 4);
}
