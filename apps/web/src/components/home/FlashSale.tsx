"use client";

import { useEffect, useState } from "react";
import products from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function FlashSale() {
  const [timeLeft, setTimeLeft] = useState(4 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <section className="bg-[#0B0B0B] py-24 px-6">

      <div className="mx-auto max-w-7xl">

        <div className="mb-16 flex flex-col items-center justify-between gap-6 md:flex-row">

          <div>

            <p className="mb-2 text-[#D4AF37] tracking-[0.3em] uppercase">
              Limited Time
            </p>

            <h2 className="text-5xl font-bold text-white">
              🔥 Flash Sale
            </h2>

          </div>

          <div className="rounded-2xl border border-[#D4AF37] px-8 py-5 text-center">

            <p className="text-sm text-gray-400">
              Ends In
            </p>

            <h3 className="mt-2 text-4xl font-bold text-[#D4AF37]">
              {hours}:{minutes}:{seconds}
            </h3>

          </div>

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <ProductCard
  key={product.id}
  product={product}
/>
          ))}

        </div>

      </div>

    </section>
  );
}