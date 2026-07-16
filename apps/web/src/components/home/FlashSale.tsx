export default function FlashSale() {
  return (
    <section className="bg-[#101010] py-24 px-6">

      <div className="mx-auto max-w-7xl rounded-3xl border border-[#D4AF37]/30 bg-[#151515] p-12">

        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">

          <div>

            <p className="mb-3 text-[#D4AF37] uppercase tracking-[0.4em]">
              Limited Time
            </p>

            <h2 className="text-5xl font-bold text-white">
              ⚡ Flash Sale
            </h2>

            <p className="mt-5 max-w-xl text-gray-400">
              Grab exclusive premium deals before they disappear.
            </p>

          </div>

          <div className="rounded-3xl bg-black px-12 py-8 text-center">

            <p className="text-gray-400">
              Ends In
            </p>

            <h2 className="mt-3 text-5xl font-bold text-[#D4AF37]">
              02 : 15 : 36
            </h2>

          </div>

        </div>

      </div>

    </section>
  );
}