"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  const { addToCart } = useCart();

  const {
    toggleWishlist,
    isInWishlist,
  } = useWishlist();

  const inWishlist = isInWishlist(product.id);

  const discount =
    product.oldPrice > product.price
      ? Math.round(
          ((product.oldPrice - product.price) /
            product.oldPrice) *
            100
        )
      : 0;

  return (
    <div className="group overflow-hidden rounded-3xl border border-[#2b2b2b] bg-[#141414] transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_0_35px_rgba(212,175,55,0.2)]">

      <div className="relative">

        {discount > 0 && (
          <div className="absolute left-4 top-4 z-10 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
            {discount}% OFF
          </div>
        )}

        <button
          onClick={() => toggleWishlist(product)}
          className="absolute right-4 top-4 z-10 rounded-full bg-white p-2 shadow-lg transition hover:scale-110"
        >
          <Heart
            size={20}
            className={
              inWishlist
                ? "fill-red-500 text-red-500"
                : "text-gray-600"
            }
          />
        </button>

        <Link href={`/product/${product.id}`}>
          <div className="relative h-64 bg-white">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width:768px) 100vw, 25vw"
              className="object-contain p-6 transition duration-500 group-hover:scale-110"
            />
          </div>

          <div className="p-6">

            <h3 className="line-clamp-2 text-lg font-semibold text-white">
              {product.name}
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              {product.brand}
            </p>

            <div className="mt-4 flex items-center gap-3">

              <span className="text-2xl font-bold text-[#D4AF37]">
                ₹{product.price.toLocaleString("en-IN")}
              </span>

              {product.oldPrice > product.price && (
                <span className="text-gray-500 line-through">
                  ₹{product.oldPrice.toLocaleString("en-IN")}
                </span>
              )}

            </div>

          </div>
        </Link>

      </div>

      <div className="px-6 pb-6">

        <button
          onClick={() => addToCart(product)}
          className="w-full rounded-full bg-[#D4AF37] py-3 font-semibold text-black transition hover:scale-[1.03]"
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
}