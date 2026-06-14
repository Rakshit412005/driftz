"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_28%),radial-gradient(circle_at_top_right,rgba(212,255,63,0.06),transparent_22%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.04),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:120px_120px] opacity-[0.05]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-14 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        {/* LEFT: Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl pt-6 lg:pt-0"
        >
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.36em] text-zinc-300 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-white" />
            New Drop
          </div>

          <p className="mb-4 text-xs uppercase tracking-[0.6em] text-zinc-500">
            Premium Streetwear
          </p>

          <h1 className="max-w-xl text-[clamp(4rem,9vw,7.75rem)] font-black uppercase leading-[0.9] tracking-[-0.06em] text-white">
            DRIFTZ
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-zinc-400 md:text-lg">
            All your Gen Z needs.
            <br />
            Oversized tees built for those who move different.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-black transition-transform duration-300 hover:scale-[1.02]"
            >
              Shop Now
            </Link>

            <Link
              href="/categories"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10"
            >
              View Categories
            </Link>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6 text-sm text-zinc-400">
            <div>
              <p className="text-lg font-semibold text-white">250+</p>
              <p className="mt-1 uppercase tracking-[0.2em]">Sold</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-white">₹2L+</p>
              <p className="mt-1 uppercase tracking-[0.2em]">Revenue</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-white">100%</p>
              <p className="mt-1 uppercase tracking-[0.2em]">Gen Z Vibe</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Placeholder for future AI model */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
          className="relative flex min-h-[640px] items-center justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[560px]">
            {/* outer frame */}
            <div className="absolute inset-0 rounded-[2.25rem] border border-white/10 bg-white/[0.03] shadow-[0_0_120px_rgba(255,255,255,0.03)] backdrop-blur-sm" />

            {/* top label */}
            <div className="absolute right-6 top-5 z-10 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-zinc-300 backdrop-blur-md">
              Oversized Tee
            </div>

            {/* inner dashed card */}
            <div className="absolute inset-7 rounded-[2rem] border border-dashed border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012))]" />

            {/* main placeholder */}
            <div className="absolute inset-x-16 top-16 bottom-16 rounded-[2rem] border border-white/10 bg-black/55 shadow-2xl shadow-black/50" />

            {/* soft light */}
            <div className="absolute inset-x-24 top-24 h-56 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.12),transparent_70%)] blur-2xl" />

            {/* center label */}
            <div className="relative z-10 flex min-h-[640px] items-center justify-center">
              <div className="text-center">
                <p className="mb-3 text-[11px] uppercase tracking-[0.55em] text-zinc-500">
                  AI Model Placeholder
                </p>
                <p className="text-3xl font-black uppercase tracking-[0.35em] text-white">
                  DRIFTZ
                </p>
                <p className="mt-3 text-sm text-zinc-400">
                  Hero image goes here later
                </p>
              </div>
            </div>

            {/* floating tags */}
            <div className="absolute bottom-6 left-6 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-zinc-300 backdrop-blur-md">
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