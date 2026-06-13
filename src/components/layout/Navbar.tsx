export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-black tracking-wider">
            DRIFTZ
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden gap-8 text-sm uppercase tracking-widest lg:flex">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/categories">Categories</a>
          <a href="/new-arrivals">New Arrivals</a>
          <a href="/best-sellers">Best Sellers</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button>🔍</button>
          <button>♡</button>
          <button>🛒</button>
          <button>👤</button>
        </div>
      </div>
    </header>
  );
}