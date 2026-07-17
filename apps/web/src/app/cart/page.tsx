"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
} from "lucide-react";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cart,
    subtotal,
    shipping,
    discount,
    tax,
    grandTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-[#080808] px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-[#2b2b2b] bg-[#141414] p-16 text-center">
          <ShoppingBag
            className="mx-auto mb-6 text-[#D4AF37]"
            size={60}
          />

          <h1 className="text-4xl font-bold text-white">
            Your Cart is Empty
          </h1>

          <p className="mt-4 text-gray-400">
            Add some luxury products and start shopping.
          </p>

          <Link
            href="/"
            className="mt-8 inline-block rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#080808] px-6 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">

        {/* Products */}

        <div className="space-y-6 lg:col-span-2">
          <h1 className="text-4xl font-bold text-white">
            Shopping Cart
          </h1>

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-6 rounded-3xl border border-[#2b2b2b] bg-[#141414] p-6 md:flex-row"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={140}
                height={140}
                className="rounded-xl bg-white p-4"
              />

              <div className="flex flex-1 flex-col justify-between">

                <div>
                  <h2 className="text-2xl font-semibold text-white">
                    {item.name}
                  </h2>

                  <p className="mt-2 text-xl font-bold text-[#D4AF37]">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>

                  <p className="mt-2 text-gray-400">
                    Brand: {item.brand}
                  </p>

                  <p className="mt-2 text-gray-400">
                    Item Total:
                    <span className="ml-2 font-semibold text-white">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </span>
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4">

                  <div className="flex items-center overflow-hidden rounded-full border border-gray-600">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="p-3 transition hover:bg-[#252525]"
                    >
                      <Minus size={18} />
                    </button>

                    <span className="px-5 font-semibold text-white">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="p-3 transition hover:bg-[#252525]"
                    >
                      <Plus size={18} />
                    </button>

                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="flex items-center gap-2 rounded-full border border-red-500 px-4 py-2 text-red-400 transition hover:bg-red-500 hover:text-white"
                  >
                    <Trash2 size={18} />
                    Remove
                  </button>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}

        <div className="sticky top-28 h-fit rounded-3xl border border-[#2b2b2b] bg-[#141414] p-8">

          <h2 className="mb-8 text-3xl font-bold text-white">
            Order Summary
          </h2>

          <div className="space-y-5">

            <div className="flex justify-between text-gray-300">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString("en-IN")}</span>
            </div>

            <div className="flex justify-between text-gray-300">
              <span>Shipping</span>

              <span
                className={
                  shipping === 0
                    ? "font-semibold text-green-400"
                    : "text-white"
                }
              >
                {shipping === 0
                  ? "FREE"
                  : `₹${shipping.toLocaleString("en-IN")}`}
              </span>
            </div>

            <div className="flex justify-between text-gray-300">
              <span>Discount</span>
              <span>
                -₹{discount.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="flex justify-between text-gray-300">
              <span>Tax</span>
              <span>
                ₹{tax.toLocaleString("en-IN")}
              </span>
            </div>

            <hr className="border-[#2b2b2b]" />

            <div className="flex justify-between text-2xl font-bold text-white">
              <span>Total</span>

              <span className="text-[#D4AF37]">
                ₹{grandTotal.toLocaleString("en-IN")}
              </span>
            </div>

          </div>

          <button className="mt-10 w-full rounded-full bg-[#D4AF37] py-4 text-lg font-bold text-black transition hover:scale-105">
            Proceed to Checkout
          </button>

        </div>

      </div>
    </main>
  );
}