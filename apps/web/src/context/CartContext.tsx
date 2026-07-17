"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { Product } from "@/types/product";
import { CartItem } from "@/types/cart";

type CartContextType = {
  cart: CartItem[];

  totalItems: number;
  subtotal: number;
  shipping: number;
  discount: number;
  tax: number;
  grandTotal: number;

  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
const [cart, setCart] = useState<CartItem[]>(() => {
  if (typeof window === "undefined") {
    return [];
  }

  const savedCart = localStorage.getItem("timora-cart");

  return savedCart ? JSON.parse(savedCart) : [];
});



  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem(
      "timora-cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  function addToCart(product: Product) {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  }

  function removeFromCart(id: number) {
    setCart((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }

  function increaseQuantity(id: number) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  function decreaseQuantity(id: number) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function clearCart() {
    setCart([]);
  }

  // ===== Calculations =====

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  // You can change these later
  const shipping = subtotal > 5000 ? 0 : 199;

  const discount = 0;

  const tax = 0;

  const grandTotal =
    subtotal + shipping + tax - discount;

  return (
    <CartContext.Provider
      value={{
        cart,

        totalItems,
        subtotal,
        shipping,
        discount,
        tax,
        grandTotal,

        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}