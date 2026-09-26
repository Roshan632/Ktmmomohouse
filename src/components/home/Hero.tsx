"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[680px] overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-momo.jpg"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/ktm-momo-hero.mp4" type="video/mp4" />
      </video>

      {/* Light overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl text-white">

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-7 flex items-center gap-3"
            >
              <MapPin size={17} className="text-white/80" />

              <span className="text-sm font-medium tracking-wide text-white/85">
                Bhadrapur, Jhapa
              </span>
            </motion.div>

            {/* Intro */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-white/75"
            >
              Welcome to KTM Momo House
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[86px]"
            >
              Authentic Taste
              <br />
              <span className="font-[var(--font-playfair)] font-normal italic tracking-[-0.02em] text-[#f59e0b]">
                of KTM
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-7 max-w-lg text-base leading-7 text-white/85 sm:text-lg"
            >
              Steamed, fried, or spicy — enjoy delicious momos and
              freshly prepared flavors right here in Bhadrapur.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9"
            >
              <Link
                href="/menu"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#17120f] transition duration-300 hover:-translate-y-1 hover:bg-[#f59e0b]"
              >
                View Menu

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#17120f] text-white">
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Information */}
      <div className="absolute bottom-7 left-0 right-0 z-10">
        <div className="mx-auto flex max-w-7xl items-end justify-between px-5 lg:px-8">
          <p className="hidden text-xs uppercase tracking-[0.2em] text-white/60 sm:block">
            Freshly prepared • Bhadrapur
          </p>

          <a
            href="#popular"
            className="group ml-auto flex flex-col items-center gap-2 text-white/70 transition hover:text-white"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
              Scroll
            </span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/10 backdrop-blur-sm">
              <ArrowDown
                size={15}
                className="transition-transform group-hover:translate-y-1"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}