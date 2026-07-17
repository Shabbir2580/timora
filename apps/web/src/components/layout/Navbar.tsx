"use client";

import Image from "next/image";
import Link from "next/link";
import { User, Heart, ShoppingCart } from "lucide-react";

import SearchBar from "@/components/search/SearchBar";

import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function Navbar() {
  const { totalItems } = useCart();

  const { totalWishlistItems } = useWishlist();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2d2d2d] bg-[#0B0B0B]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">

          <Image
            src="/images/logo.png"
            alt="Timora Logo"
            width={55}
            height={55}
            className="rounded-full"
          />

          <div>

            <h1 className="text-2xl font-bold tracking-widest text-[#D4AF37]">
              TIMORA
            </h1>

            <p className="text-xs tracking-[0.3em] text-gray-400">
              TIMELESS ESSENCE
            </p>

          </div>

        </Link>

        {/* Search */}
        <div className="hidden w-[40%] md:flex">
          <SearchBar />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          <button className="text-white transition hover:text-[#D4AF37]">
            <User size={22} />
          </button>

          {/* Wishlist */}

          <div className="relative">

            <Link href="/wishlist">

              <button className="text-white transition hover:scale-110 hover:text-red-500">

                <Heart size={22} />

              </button>

            </Link>

            {totalWishlistItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                {totalWishlistItems}
              </span>
            )}

          </div>

          {/* Cart */}

          <div className="relative">

            <Link href="/cart">

              <button className="rounded-full bg-[#D4AF37] p-3 text-black transition hover:scale-110">

                <ShoppingCart size={20} />

              </button>

            </Link>

            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}

          </div>

        </div>

      </div>
    </header>
  );
}