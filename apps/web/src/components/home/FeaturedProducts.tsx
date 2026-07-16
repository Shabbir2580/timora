import ProductCard from "@/components/product/ProductCard";

const products = [
  {
    id: 1,
    name: "Luxury Watch",
    price: "₹12,999",
    oldPrice: "₹15,999",
    image: "/images/products/watch.png",
  },
  {
    id: 2,
    name: "Premium Perfume",
    price: "₹4,499",
    oldPrice: "₹5,999",
    image: "/images/products/perfume.png",
  },
  {
    id: 3,
    name: "Power Bank",
    price: "₹2,999",
    oldPrice: "₹3,999",
    image: "/images/products/powerbank.png",
  },
  {
    id: 4,
    name: "Wireless Microphone",
    price: "₹5,999",
    oldPrice: "₹7,499",
    image: "/images/products/microphone.png",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-[#080808] px-6 py-24">
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
              name={product.name}
              price={product.price}
              oldPrice={product.oldPrice}
              image={product.image}
            />
          ))}

        </div>

      </div>
    </section>
  );
}