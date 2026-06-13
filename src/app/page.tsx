import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-7xl font-black tracking-widest">
          DRIFTZ
        </h1>
      </main>
    </>
  );
}