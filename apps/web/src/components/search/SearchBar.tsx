"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import products from "@/data/products";

export default function SearchBar() {
  const [query, setQuery] = useState("");

const filteredProducts = products.filter((product) => {
  const search = query.toLowerCase();

  return (
    product.name.toLowerCase().includes(search) ||
    product.brand.toLowerCase().includes(search) ||
    product.category.toLowerCase().includes(search) ||
    product.description.toLowerCase().includes(search) ||
    product.slug.toLowerCase().includes(search)
  );
});

  return (
    <div className="relative w-full">

      <input
        type="text"
        placeholder="Search luxury products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-full border border-[#D4AF37]/40 bg-[#171717] px-5 py-3 text-white outline-none transition focus:border-[#D4AF37]"
      />

      {query.length > 0 && (

        <div className="absolute mt-2 w-full overflow-hidden rounded-2xl border border-[#2b2b2b] bg-[#141414] shadow-2xl">

          {filteredProducts.length > 0 ? (

            filteredProducts.map((product) => (

              <Link
                key={product.id}
                href={`/product/${product.id}`}
                onClick={() => setQuery("")}
              >

                <div className="flex items-center gap-4 border-b border-[#262626] p-4 transition hover:bg-[#1d1d1d]">

                  <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-white">

                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-2"
                    />

                  </div>

                  <div className="flex-1">

                    <h3 className="font-semibold text-white">
                      {product.name}
                    </h3>

                    <p className="text-sm text-gray-400">
                      {product.category}
                    </p>

                    <p className="mt-1 font-semibold text-[#D4AF37]">
                      {product.price}
                    </p>

                  </div>

                </div>

              </Link>

            ))

          ) : (

            <div className="p-6 text-center text-gray-400">
              No products found.
            </div>

          )}

        </div>

      )}

    </div>
  );
}