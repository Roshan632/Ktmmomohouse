"use client";

import {
  ChefHat,
  Heart,
  Leaf,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Fresh Ingredients",
    description:
      "We use fresh ingredients to make every dish flavorful and satisfying.",
    icon: Leaf,
  },
  {
    number: "02",
    title: "Signature Flavors",
    description:
      "Our special recipes and chutneys give KTM Momo its own unique taste.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Made Fresh",
    description:
      "Every order is prepared fresh so you can enjoy your food at its best.",
    icon: ChefHat,
  },
  {
    number: "04",
    title: "Made With Love",
    description:
      "Good food brings people together, and that's what we're all about.",
    icon: Heart,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="overflow-hidden bg-white px-5 py-24 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Decorative circle */}
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-[#f8e8da]" />

            <div className="relative overflow-hidden rounded-[32px] bg-[#ead8ca]">
              <img
                src="/images/hero-momo.jpg"
                alt="KTM Momo House food"
                className="aspect-[0.9] w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

              {/* Philosophy Card */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/90 p-5 shadow-xl backdrop-blur-md sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c62828]">
                  Our philosophy
                </p>

                <p className="mt-2 text-xl font-bold leading-tight tracking-tight text-[#241815]">
                  Simple food.
                  <br />
                  <span className="font-[var(--font-playfair)] font-normal italic">
                    Bold flavor.
                  </span>{" "}
                  Happy people.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            {/* Eyebrow */}
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#c62828]">
              Why KTM Momo
            </p>

            {/* Heading */}
            <h2 className="max-w-2xl text-4xl font-bold leading-[1] tracking-[-0.035em] text-[#17120f] sm:text-5xl md:text-6xl">
              Made fresh.
              <br />
              <span className="font-[var(--font-playfair)] font-normal italic text-[#c62828]">
                Served with love.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-[#766c66] sm:text-lg">
              We believe great food doesn&apos;t need to be complicated.
              Fresh ingredients, carefully prepared recipes and a lot of
              passion come together to create food worth coming back for.
            </p>

            {/* Features */}
            <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="group"
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f8eee7] text-[#c62828] transition duration-300 group-hover:bg-[#c62828] group-hover:text-white">
                        <Icon size={18} strokeWidth={1.8} />
                      </div>

                      {/* Text */}
                      <div>
                        <div className="mb-1 flex items-center gap-2">
                          <span className="text-[10px] font-semibold tracking-[0.15em] text-[#c62828]">
                            {feature.number}
                          </span>

                          <h3 className="text-base font-bold tracking-tight text-[#241815]">
                            {feature.title}
                          </h3>
                        </div>

                        <p className="text-sm leading-6 text-[#766c66]">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}