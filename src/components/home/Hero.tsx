"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-model.png"
          alt="DRIFTZ Hero Model"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[64%_18%] scale-[1.08]"
        />
      </div>

      {/* Dark overlays for premium contrast */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92)_0%,rgba(0,0,0,0.78)_32%,rgba(0,0,0,0.38)_58%,rgba(0,0,0,0.15)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(255,255,255,0.06),transparent_18%),radial-gradient(circle_at_78%_20%,rgba(255,255,255,0.05),transparent_14%)]" />

      {/* Content */}
      <div className="relative min-h-[calc(100vh-5rem)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute left-[6vw] top-1/2 z-20 max-w-[650px] -translate-y-1/2"
        >
          <div className="mb-5 inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.36em] text-zinc-300 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-white" />
            New Drop
          </div>

          <p className="mb-4 text-xs uppercase tracking-[0.58em] text-zinc-400">
            Built For The After-Hours
          </p>

          <h1 className="max-w-[560px] text-[clamp(4.8rem,10vw,9rem)] font-black uppercase leading-[0.84] tracking-[-0.08em] text-white drop-shadow-[0_0_28px_rgba(255,255,255,0.08)]">
            DRIFTZ
          </h1>

          <div className="mt-8">
            <h2 className="text-[1.6rem] font-semibold uppercase leading-[1.1] tracking-[0.08em] text-white md:text-[2rem]">
              Move Different.
              <br />
              Wear Different.
            </h2>

            <p className="mt-5 max-w-none text-[0.98rem] leading-8 text-zinc-300 md:text-[1.05rem] lg:whitespace-nowrap">
              Premium oversized streetwear designed for those who lead, not
              follow.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-5">
            <Link
              href="/shop"
              className="inline-flex min-w-[178px] items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.97),rgba(214,219,225,0.88))] px-7 py-3 text-sm font-extrabold uppercase tracking-[0.26em] !text-black shadow-[0_16px_50px_rgba(255,255,255,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(255,255,255,0.16)]"
            >
              Shop Now
            </Link>

            <Link
              href="/categories"
              className="inline-flex min-w-[178px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-extrabold uppercase tracking-[0.26em] text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10"
            >
              Explore Drop
            </Link>
          </div>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6 text-sm text-zinc-300">
            <div>
              <p className="text-lg font-semibold text-white">250+</p>
              <p className="mt-1 uppercase tracking-[0.22em] text-zinc-400">
                Sold
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-white">₹2L+</p>
              <p className="mt-1 uppercase tracking-[0.22em] text-zinc-400">
                Revenue
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-white">100%</p>
              <p className="mt-1 uppercase tracking-[0.22em] text-zinc-400">
                Gen Z Vibe
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}