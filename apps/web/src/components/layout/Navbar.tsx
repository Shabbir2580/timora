import Image from "next/image";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2d2d2d] bg-[#0B0B0B]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <div className="flex cursor-pointer items-center gap-3">

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

        </div>

        {/* Search */}

        <div className="relative hidden w-[40%] md:block">

          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search products..."
            className="w-full rounded-full border border-[#D4AF37]/40 bg-[#171717] py-3 pl-12 pr-5 text-white outline-none transition-all duration-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30"
          />

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-6">

          <button className="text-white transition hover:text-[#D4AF37]">
            <User size={22} />
          </button>

          <button className="text-white transition hover:text-[#D4AF37]">
            <Heart size={22} />
          </button>

          <button className="rounded-full bg-[#D4AF37] p-3 text-black transition hover:scale-110">
            <ShoppingCart size={20} />
          </button>

        </div>

      </div>
    </header>
  );
}