import Link from "next/link";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-black tracking-wider transition-all duration-300 hover:opacity-80">
            DRIFTZ
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {[
            "Home",
            "Shop",
            "Categories",
            "New Arrivals",
            "Best Sellers",
            "About",
            "Contact",
          ].map((item) => (
            <Link
              key={item}
              href="/"
              className="group relative text-xs font-semibold uppercase tracking-[0.25em] text-zinc-300 transition-colors duration-300 hover:text-white"
            >
              {item}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <button className="text-zinc-300 transition hover:text-white">
            <Search size={18} />
          </button>

          <button className="text-zinc-300 transition hover:text-white">
            <Heart size={18} />
          </button>

          <button className="text-zinc-300 transition hover:text-white">
            <ShoppingCart size={18} />
          </button>

          <button className="text-zinc-300 transition hover:text-white">
            <User size={18} />
          </button>
        </div>

      </div>
    </header>
  );
}