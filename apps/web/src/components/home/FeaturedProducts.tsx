import products from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="bg-[#080808] py-24 px-6">
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-bold text-white">
            Featured Products
          </h2>

          <p className="mt-4 text-gray-400">
            Handpicked premium products for our customers.
          </p>

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