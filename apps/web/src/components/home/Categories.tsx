import Link from "next/link";
import categories from "@/data/categories";

export default function Categories() {
  return (
    <section className="bg-[#0B0B0B] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white">
            Shop by Categories
          </h2>

          <p className="mt-4 text-gray-400">
            Browse products from our premium collections.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
            >
              <div className="group cursor-pointer rounded-3xl border border-[#2b2b2b] bg-[#151515] p-10 text-center transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_0_35px_rgba(212,175,55,0.2)]">
                <div className="mb-6 text-6xl transition duration-300 group-hover:scale-110">
                  {category.icon}
                </div>

                <h3 className="text-xl font-semibold text-white group-hover:text-[#D4AF37]">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}