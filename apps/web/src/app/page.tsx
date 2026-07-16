import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0B0B0B] text-white flex items-center justify-center">
        <h2 className="text-5xl font-bold text-[#D4AF37]">
          Welcome to Timora
        </h2>
      </main>
    </>
  );
}