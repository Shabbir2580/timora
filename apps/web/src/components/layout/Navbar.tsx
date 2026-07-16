import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2d2d2d] bg-[#0B0B0B]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
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

            <p className="text-xs text-gray-400 tracking-[0.3em]">
              TIMELESS ESSENCE
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="hidden md:flex w-[40%]">
          <input
            type="text"
            placeholder="Search luxury products..."
            className="w-full rounded-full border border-[#D4AF37]/40 bg-[#171717] px-5 py-3 text-white outline-none transition-all duration-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/40"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          <button className="text-white hover:text-[#D4AF37] transition">
            Login
          </button>

          <button className="text-white hover:text-[#D4AF37] transition">
            Wishlist
          </button>

          <button className="rounded-full bg-[#D4AF37] px-5 py-2 font-semibold text-black transition hover:scale-105">
            Cart
          </button>

        </div>

      </div>
    </header>
  );
}