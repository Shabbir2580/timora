export type Product = {
  id: number;
  slug: string;

  name: string;
  brand: string;
  category: string;

  price: number;
  oldPrice: number;

  rating: number;
  reviews: number;

  stock: number;

  description: string;

  image: string;
  images: string[];
};