import Button from "@/components/shared/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0B]">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center gap-16 px-6 py-20 lg:flex-row">

        {/* Left Side */}
        <div className="flex-1">

          <p className="mb-4 tracking-[0.5em] uppercase text-[#D4AF37]">
            Luxury Lifestyle
          </p>

          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Timeless Style.
            <br />
            Modern Shopping.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
            Discover premium watches, perfumes, fashion, electronics and lifestyle
            products selected for people who appreciate elegance and quality.
          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Button>
              Shop Now
            </Button>

            <Button variant="outline">
              Explore Collection
            </Button>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex flex-1 justify-center">

          <div className="grid grid-cols-2 gap-6">

            <div className="flex h-48 w-48 items-center justify-center rounded-3xl border border-[#2b2b2b] bg-[#151515] text-7xl shadow-xl transition hover:-translate-y-2">
              ⌚
            </div>

            <div className="mt-12 flex h-48 w-48 items-center justify-center rounded-3xl border border-[#2b2b2b] bg-[#151515] text-7xl shadow-xl transition hover:-translate-y-2">
              🌸
            </div>

            <div className="-mt-10 flex h-48 w-48 items-center justify-center rounded-3xl border border-[#2b2b2b] bg-[#151515] text-7xl shadow-xl transition hover:-translate-y-2">
              💎
            </div>

            <div className="flex h-48 w-48 items-center justify-center rounded-3xl border border-[#2b2b2b] bg-[#151515] text-7xl shadow-xl transition hover:-translate-y-2">
              🎧
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}