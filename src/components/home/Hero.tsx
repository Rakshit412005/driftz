"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.07),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.06),transparent_16%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.04),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:120px_120px] opacity-[0.04]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-[1600px] gap-10 px-6 py-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 flex max-w-2xl flex-col justify-center pt-8 lg:pt-0"
        >
          <div className="mb-5 inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.36em] text-zinc-300 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-white" />
            New Drop
          </div>

          <p className="mb-4 text-xs uppercase tracking-[0.58em] text-zinc-500">
            Built For The After-Hours
          </p>

          <h1 className="max-w-xl text-[clamp(4.6rem,10vw,8.8rem)] font-black uppercase leading-[0.86] tracking-[-0.08em] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.08)]">
            DRIFTZ
          </h1>

          <div className="mt-8">
            <h2 className="text-[1.6rem] font-semibold uppercase tracking-[0.08em] leading-[1.15] text-white md:text-[2rem]">
              Move Different.
              <br />
              Wear Different.
            </h2>

            <p className="mt-5 max-w-lg text-[1rem] leading-8 text-zinc-400 md:text-[1.05rem]">
              Premium oversized streetwear designed for those who lead, not
              follow.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="!text-black inline-flex min-w-[178px] items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.97),rgba(214,219,225,0.88))] px-7 py-3 text-sm font-extrabold uppercase tracking-[0.26em]  shadow-[0_16px_50px_rgba(255,255,255,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(255,255,255,0.16)]"
            >
              Shop Now
            </Link>

            <Link
              href="/categories"
              className="inline-flex min-w-[178px] items-center justify-center rounded-full border border-white/12 bg-white/5 px-7 py-3 text-sm font-extrabold uppercase tracking-[0.26em] text-white backdrop-blur-md transition-all duration-300 hover:border-white/25 hover:bg-white/10"
            >
              Explore Drop
            </Link>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6 text-sm text-zinc-400">
            <div>
              <p className="text-lg font-semibold text-white">250+</p>
              <p className="mt-1 uppercase tracking-[0.22em]">Sold</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-white">₹2L+</p>
              <p className="mt-1 uppercase tracking-[0.22em]">Revenue</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-white">100%</p>
              <p className="mt-1 uppercase tracking-[0.22em]">Gen Z Vibe</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          <div className="relative h-[640px] w-full max-w-[980px] overflow-hidden rounded-[2.2rem] border border-white/10 bg-black/60 shadow-[0_30px_120px_rgba(0,0,0,0.55)] lg:h-[790px]">
            <Image
              src="/hero-model.png"
              alt="DRIFTZ Hero Model"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-[67%_14%] scale-[1.18] translate-y-14 -translate-x-19"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black to-transparent" />

            <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-zinc-300 backdrop-blur-md">
              Limited Drop · Vol. 01
            </div>

            <div className="absolute right-6 bottom-6 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-zinc-300 backdrop-blur-md">
              Made for the outsiders
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}