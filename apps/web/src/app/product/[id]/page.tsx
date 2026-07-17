import Image from "next/image";
import products from "@/data/products";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailsPage({ params }: Props) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#080808] px-6 py-16">

      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <div className="overflow-hidden rounded-3xl bg-white p-10">

            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              className="mx-auto object-contain"
            />

          </div>

          <div className="mt-6 flex gap-4">

            {product.images.map((img, index) => (

              <div
                key={index}
                className="rounded-xl border border-[#D4AF37] bg-white p-3"
              >

                <Image
                  src={img}
                  alt={product.name}
                  width={80}
                  height={80}
                />

              </div>

            ))}

          </div>

        </div>

        {/* RIGHT */}

        <div>

          <p className="tracking-[0.4em] uppercase text-[#D4AF37]">
            {product.category}
          </p>

          <h1 className="mt-4 text-5xl font-bold text-white">
            {product.name}
          </h1>

          <p className="mt-4 text-lg text-gray-400">
            {product.brand}
          </p>

          <div className="mt-6 flex items-center gap-4">

            <span className="text-4xl font-bold text-[#D4AF37]">
              {product.price}
            </span>

            <span className="text-2xl text-gray-500 line-through">
              {product.oldPrice}
            </span>

          </div>

          <div className="mt-4">

            <span className="text-yellow-400">
              ⭐ {product.rating}
            </span>

            <span className="ml-3 text-gray-400">
              ({product.reviews} Reviews)
            </span>

          </div>

          <p className="mt-8 leading-8 text-gray-400">
            {product.description}
          </p>

          <p className="mt-6 text-green-400">
            In Stock : {product.stock}
          </p>

          <div className="mt-10 flex gap-5">

            <button className="rounded-full bg-[#D4AF37] px-10 py-4 font-semibold text-black transition hover:scale-105">
              Add to Cart
            </button>

            <button className="rounded-full border border-[#D4AF37] px-10 py-4 text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black">
              Buy Now
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}