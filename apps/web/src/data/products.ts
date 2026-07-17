import { Product } from "@/types/product";

const products: Product[] = [
  {
    id: 1,
    slug: "luxury-watch",
    name: "Luxury Watch",
    brand: "Timora",
    category: "Watches",

    price: 12999,
    oldPrice: 15999,

    rating: 4.8,
    reviews: 512,

    stock: 20,

    description:
      "Premium luxury watch crafted with elegant design, precision movement and timeless style. Perfect for everyday wear and special occasions.",

    image: "/images/products/watches/luxury-watch-01.png",

    images: [
      "/images/products/watches/luxury-watch-01.png",
    ],
  },

  {
    id: 2,
    slug: "premium-perfume",
    name: "Premium Perfume",
    brand: "Timora",
    category: "Perfumes",

    price: 4499,
    oldPrice: 5999,

    rating: 4.7,
    reviews: 218,

    stock: 35,

    description:
      "Elegant premium perfume with a long-lasting fragrance suitable for daily use and special occasions.",

    image: "/images/products/perfumes/premium-perfume-01.png",

    images: [
      "/images/products/perfumes/premium-perfume-01.png",
    ],
  },

  {
    id: 3,
    slug: "power-bank",
    name: "Power Bank",
    brand: "Timora",
    category: "Electronics",

    price: 2999,
    oldPrice: 3999,

    rating: 4.6,
    reviews: 342,

    stock: 42,

    description:
      "High-capacity fast charging power bank with premium build quality and multiple safety protections.",

    image: "/images/products/electronics/powerbank-01.png",

    images: [
      "/images/products/electronics/powerbank-01.png",
    ],
  },

  {
    id: 4,
    slug: "wireless-microphone",
    name: "Wireless Microphone",
    brand: "Timora",
    category: "Electronics",

    price: 5999,
    oldPrice: 7499,

    rating: 4.9,
    reviews: 186,

    stock: 14,

    description:
      "Professional wireless microphone delivering crystal-clear audio for creators, meetings and live performances.",

    image: "/images/products/electronics/microphone-01.png",

    images: [
      "/images/products/electronics/microphone-01.png",
    ],
  },
];

export default products;