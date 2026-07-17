export default function Footer() {
  return (
    <footer className="border-t border-[#2b2b2b] bg-[#080808]">

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">

        <div>

          <h2 className="text-3xl font-bold text-[#D4AF37]">
            TIMORA
          </h2>

          <p className="mt-3 text-gray-400">
            Timeless Essence.
          </p>

          <p className="mt-6 text-gray-500">
            Luxury shopping for watches, perfumes,
            electronics and premium lifestyle products.
          </p>

        </div>

        <div>

          <h3 className="mb-5 font-semibold text-white">
            Shop
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>Watches</li>
            <li>Perfumes</li>
            <li>Electronics</li>
            <li>Fashion</li>

          </ul>

        </div>

        <div>

          <h3 className="mb-5 font-semibold text-white">
            Customer Care
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>Contact</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>FAQ</li>

          </ul>

        </div>

        <div>

          <h3 className="mb-5 font-semibold text-white">
            Company
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>About</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Careers</li>

          </ul>

        </div>

      </div>

      <div className="border-t border-[#2b2b2b] py-6 text-center text-gray-500">

        © 2026 Timora. All Rights Reserved.

      </div>

    </footer>
  );
}