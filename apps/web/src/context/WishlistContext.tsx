"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { Product } from "@/types/product";
import { WishlistItem } from "@/types/wishlist";

type WishlistContextType = {
  wishlist: WishlistItem[];
  totalWishlistItems: number;

  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: number) => void;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (id: number) => boolean;
  clearWishlist: () => void;
};

const WishlistContext = createContext<
  WishlistContextType | undefined
>(undefined);

export function WishlistProvider({
  children,
}: {
  children: ReactNode;
}) {
const [wishlist, setWishlist] = useState<WishlistItem[]>(() => {
  if (typeof window === "undefined") {
    return [];
  }

  const savedWishlist = localStorage.getItem("timora-wishlist");

  return savedWishlist ? JSON.parse(savedWishlist) : [];
});



  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(
      "timora-wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  function addToWishlist(product: Product) {
    setWishlist((prev) => {
      const exists = prev.some(
        (item) => item.id === product.id
      );

      if (exists) return prev;

      return [...prev, product];
    });
  }

  function removeFromWishlist(id: number) {
    setWishlist((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }

  function toggleWishlist(product: Product) {
    setWishlist((prev) => {
      const exists = prev.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return prev.filter(
          (item) => item.id !== product.id
        );
      }

      return [...prev, product];
    });
  }

  function isInWishlist(id: number) {
    return wishlist.some((item) => item.id === id);
  }

  function clearWishlist() {
    setWishlist([]);
  }

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        totalWishlistItems: wishlist.length,

        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isInWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );
  }

  return context;
}