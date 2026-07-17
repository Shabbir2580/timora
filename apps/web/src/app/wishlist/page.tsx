"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";

import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

export default function WishlistPage() {
  const {
    wishlist,
    removeFromWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <main className="min-h-screen bg-[#080808] px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-[#2b2b2b] bg-[#141414] p-16 text-center">

          <Heart
            className="mx-auto mb-6 text-red-500"
            size={60}
          />

          <h1 className="text-4xl font-bold text-white">
            Your Wishlist is Empty
          </h1>

          <p className="mt-4 text-gray-400">
            Save your favourite luxury products here.
          </p>

          <Link
            href="/"
            className="mt-8 inline-block rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Explore Products
          </Link>

        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#080808] px-6 py-12">

      <div className="mx-auto max-w-7xl">

        <div className="mb-10 flex items-center gap-4">

          <Heart
            className="fill-red-500 text-red-500"
            size={34}
          />

          <h1 className="text-4xl font-bold text-white">
            My Wishlist
          </h1>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {wishlist.map((product) => (

            <div
              key={product.id}
              className="overflow-hidden rounded-3xl border border-[#2b2b2b] bg-[#141414] transition hover:-translate-y-2 hover:border-[#D4AF37]"
            >

              <Link href={`/product/${product.id}`}>

                <div className="relative h-64 bg-white">

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6"
                  />

                </div>

              </Link>

              <div className="p-6">

                <h2 className="line-clamp-2 text-xl font-semibold text-white">
                  {product.name}
                </h2>

                <p className="mt-2 text-gray-400">
                  {product.brand}
                </p>

                <p className="mt-4 text-2xl font-bold text-[#D4AF37]">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>

                <div className="mt-6 space-y-3">

                  <button
                    onClick={() => addToCart(product)}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#D4AF37] py-3 font-semibold text-black transition hover:scale-[1.02]"
                  >
                    <ShoppingBag size={18} />
                    Add to Cart
                  </button>

                  <button
                    onClick={() =>
                      removeFromWishlist(product.id)
                    }
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-red-500 py-3 text-red-400 transition hover:bg-red-500 hover:text-white"
                  >
                    <Trash2 size={18} />
                    Remove
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}