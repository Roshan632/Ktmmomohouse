"use client";

import Link from "next/link";
import { ArrowUpRight, Plus, Star } from "lucide-react";
import { motion } from "framer-motion";

const featuredItems = [
  {
    name: "KTM Special Momo",
    description:
      "Our signature momo prepared with a flavorful filling and served with our special house chutney.",
    price: "Rs. 180",
    rating: "4.9",
    reviews: "120+",
    image: "/images/special-momo.jpg",
    featured: true,
  },
  {
    name: "Chicken Momo",
    description:
      "Juicy chicken filling wrapped in soft, freshly prepared momo dough.",
    price: "Rs. 180",
    rating: "4.8",
    reviews: "90+",
    image: "/images/chicken-momo.jpg",
  },
  {
    name: "Chicken Chowmein",
    description:
      "Fresh noodles tossed with chicken, vegetables and signature seasoning.",
    price: "Rs. 180",
    rating: "4.8",
    reviews: "80+",
    image: "/images/chicken-chowmein.jpg",
  },
];

export default function FeaturedItems() {
  const featured = featuredItems[0];
  const otherItems = featuredItems.slice(1);

  return (
    <section className="bg-[#f6f1eb] px-5 py-24 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#c62828]">
              Customer favorites
            </p>

            <h2 className="max-w-2xl text-4xl font-bold leading-[1] tracking-[-0.035em] text-[#17120f] sm:text-5xl md:text-6xl">
              The flavors
              <br />
              <span className="font-[var(--font-playfair)] font-normal italic">
                everyone loves.
              </span>
            </h2>
          </div>

          <Link
            href="/menu"
            className="group flex w-fit items-center gap-2 border-b border-[#17120f]/25 pb-2 text-sm font-semibold text-[#17120f] transition hover:border-[#c62828] hover:text-[#c62828]"
          >
            View full menu

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Featured Layout */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Main Dish */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="group relative min-h-[560px] overflow-hidden rounded-[32px] bg-[#241815]"
          >
            <img
              src={featured.image}
              alt={featured.name}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/5" />

            {/* Label */}
            <div className="absolute left-6 top-6 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#17120f]">
              Signature dish
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-9">

              <div className="mb-4 flex items-center gap-2">
                <Star
                  size={15}
                  className="fill-[#f59e0b] text-[#f59e0b]"
                />

                <span className="text-sm font-semibold">
                  {featured.rating}
                </span>

                <span className="text-sm text-white/55">
                  ({featured.reviews})
                </span>
              </div>

              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {featured.name}
              </h3>

              <p className="mt-3 max-w-lg text-sm leading-6 text-white/75 sm:text-base">
                {featured.description}
              </p>

              <div className="mt-7 flex items-center justify-between gap-5">
                <span className="text-2xl font-bold">
                  {featured.price}
                </span>

                <button
                  className="flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#17120f] transition hover:bg-[#f59e0b]"
                  aria-label={`Add ${featured.name} to order`}
                >
                  Add to order

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#c62828] text-white">
                    <Plus size={14} />
                  </span>
                </button>
              </div>
            </div>
          </motion.article>

          {/* Other Dishes */}
          <div className="grid gap-6">
            {otherItems.map((item, index) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group grid overflow-hidden rounded-[28px] bg-white sm:grid-cols-[0.9fr_1.1fr]"
              >
                {/* Image */}
                <div className="relative min-h-[250px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#17120f] backdrop-blur">
                    Popular
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <Star
                        size={14}
                        className="fill-[#f59e0b] text-[#f59e0b]"
                      />

                      <span className="text-sm font-semibold text-[#17120f]">
                        {item.rating}
                      </span>

                      <span className="text-xs text-[#766c66]">
                        ({item.reviews})
                      </span>
                    </div>

                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#17120f]">
                      {item.name}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#766c66]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xl font-bold text-[#17120f]">
                      {item.price}
                    </span>

                    <button
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f6eee7] text-[#c62828] transition hover:bg-[#c62828] hover:text-white"
                      aria-label={`Add ${item.name} to order`}
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Bottom Link */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/menu"
            className="group flex items-center gap-2 text-sm font-semibold text-[#17120f] transition hover:text-[#c62828]"
          >
            Explore the complete menu

            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}