import products from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryPage({
  params,
}: PageProps) {
  const { category } = await params;

  const filteredProducts = products.filter(
  (product) =>
    product.category.toLowerCase() ===
    category.toLowerCase()
);

  if (filteredProducts.length === 0) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#080808] px-6 py-20">

      <div className="mx-auto max-w-7xl">

        <h1 className="mb-3 text-5xl font-bold text-white">
          {category}
        </h1>

        <p className="mb-14 text-gray-400">
          Showing {filteredProducts.length} products
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {filteredProducts.map((product) => (
            <ProductCard
        key={product.id}
        product={product}
/>
          ))}

        </div>

      </div>

    </main>
  );
}