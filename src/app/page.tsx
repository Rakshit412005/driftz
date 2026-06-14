import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-[90vh] items-center justify-center">
        <div className="text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-zinc-500">
            Premium Streetwear
          </p>

          <h1 className="text-7xl font-black tracking-wider md:text-9xl">
            DRIFTZ
          </h1>

          <p className="mt-6 text-zinc-400">
            ALL YOUR GENZ NEEDS
          </p>
        </div>
      </main>
    </>
  );
}