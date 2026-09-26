"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Momos",
    description: "Steamed, fried & full of flavor",
    image: "/images/special-momo.jpg",
   // image:"/images/hero-momo.jpg",
  },
  {
    name: "Noodles",
    description: "Freshly tossed & delicious",
    image: "/images/chicken-chowmein.jpg",
    //image:"/images/hero-momo.jpg",
  },
  {
    name: "Fast Food",
    description: "Something for every craving",
    image: "/images/chicken-momo.jpg",
    //image:"/images/hero-momo.jpg",
  },
  {
    name: "Rice & Meals",
    description: "Comforting & satisfying",
    image: "/images/chicken-fried-rice.jpg",
    //image:"/images/hero-momo.jpg",
  },
];

export default function Categories() {
  return (
    <section
      id="popular"
      className="bg-[#fffaf5] px-5 py-24 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#c62828]">
              Explore our flavors
            </p>

            <h2 className="max-w-xl text-4xl font-bold leading-[1] tracking-[-0.035em] text-[#17120f] sm:text-5xl md:text-6xl">
              Something delicious
              <br />
              <span className="font-[var(--font-playfair)] font-normal italic">
                for everyone.
              </span>
            </h2>
          </div>

          <Link
            href="/menu"
            className="group flex w-fit items-center gap-2 border-b border-[#17120f]/30 pb-2 text-sm font-semibold text-[#17120f] transition hover:border-[#c62828] hover:text-[#c62828]"
          >
            View full menu
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Categories */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <Link
                href="/menu"
                className="group relative block aspect-[4/5] overflow-hidden rounded-[28px] bg-[#e8ddd4]"
              >
                {/* Image */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-2xl font-bold tracking-tight">
                      {category.name}
                    </h3>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm transition duration-300 group-hover:bg-white group-hover:text-[#17120f]">
                      <ArrowUpRight size={17} />
                    </span>
                  </div>

                  <p className="text-sm text-white/75">
                    {category.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}