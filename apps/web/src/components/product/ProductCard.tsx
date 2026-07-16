import Image from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";

type ProductCardProps = {
  name: string;
  price: string;
  oldPrice: string;
  image: string;
};

export default function ProductCard({
  name,
  price,
  oldPrice,
  image,
}: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-[#2b2b2b] bg-[#141414] transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_0_35px_rgba(212,175,55,0.20)]">

      {/* Product Image */}

      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-[#1b1b1b]">

        <button className="absolute right-4 top-4 z-10 rounded-full bg-black/60 p-2 text-white transition hover:text-red-500">
          <Heart size={18} />
        </button>

        <Image
          src={image}
          alt={name}
          width={260}
          height={260}
          className="object-contain transition duration-500 group-hover:scale-110"
        />

      </div>

      {/* Product Details */}

      <div className="space-y-4 p-6">

        <h3 className="text-xl font-semibold text-white group-hover:text-[#D4AF37]">
          {name}
        </h3>

        <div className="flex items-center gap-1 text-[#D4AF37]">

          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} fill="currentColor" />
          <Star size={16} />

          <span className="ml-2 text-sm text-gray-400">
            (214)
          </span>

        </div>

        <div className="flex items-center gap-3">

          <span className="text-3xl font-bold text-[#D4AF37]">
            {price}
          </span>

          <span className="text-gray-500 line-through">
            {oldPrice}
          </span>

        </div>

        <button className="flex w-full items-center justify-center gap-3 rounded-full bg-[#D4AF37] py-3 font-semibold text-black transition hover:scale-[1.03]">

          <ShoppingCart size={18} />

          Add to Cart

        </button>

      </div>

    </div>
  );
}