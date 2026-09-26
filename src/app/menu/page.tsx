import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Flame,
  Leaf,
  MapPin,
  Star,
} from "lucide-react";

const categories = [
  "All",
  "Momos",
  "Noodles",
  "Fast Food",
 
];

const menuItems = [
  {
    name: "KTM Special Momo",
    category: "Momos",
    description:
      "Our signature momo prepared with flavorful filling and served with special house chutney.",
    price: "180",
    image: "/images/special-momo.jpg",
    rating: "4.9",
    reviews: "120+",
    popular: true,
    vegetarian: false,
  },
  {
    name: "Chicken Momo",
    category: "Momos",
    description:
      "Juicy chicken filling wrapped in soft, freshly prepared momo dough.",
    price: "180",
    image: "/images/chicken-momo.jpg",
    rating: "4.8",
    reviews: "90+",
    popular: true,
    vegetarian: false,
  },
  {
    name: "Buff Momo",
    category: "Momos",
    description:
      "Classic Nepali-style buff momo served hot with flavorful chutney.",
    price: "170",
    image: "/images/buff-momo.jpg",
    rating: "4.8",
    reviews: "80+",
    popular: false,
    vegetarian: false,
  },
  {
    name: "Veg Momo",
    category: "Momos",
    description:
      "Fresh vegetables wrapped in soft momo dough and steamed to perfection.",
    price: "140",
    image: "/images/veg-momo.jpg",
    rating: "4.7",
    reviews: "60+",
    popular: false,
    vegetarian: true,
  },
  {
    name: "Chicken Chowmein",
    category: "Noodles",
    description:
      "Fresh noodles tossed with chicken, vegetables and our signature seasoning.",
    price: "180",
    image: "/images/chicken-chowmein.jpg",
    rating: "4.8",
    reviews: "80+",
    popular: true,
    vegetarian: false,
  },
  {
    name: "Veg Chowmein",
    category: "Noodles",
    description:
      "Stir-fried noodles loaded with fresh vegetables and aromatic seasoning.",
    price: "150",
    image: "/images/veg-chowmein.jpg",
    rating: "4.7",
    reviews: "50+",
    popular: false,
    vegetarian: true,
  },
  {
    name: "Chicken Fried Rice",
    category: "Fast Food",
    description:
      "Fragrant fried rice prepared with chicken, vegetables and balanced seasoning.",
    price: "190",
    image: "/images/chicken-fried-rice.jpg",
    rating: "4.7",
    reviews: "45+",
    popular: false,
    vegetarian: false,
  },
  {
    name: " Noodles",
    category: "Fast Food",
    description:
      "Crispy, golden noodles prepared for a satisfying bite.",
    price: "220",
    image: "/images/noodles.jpg",
    rating: "4.8",
    reviews: "55+",
    popular: true,
    vegetarian: false,
  },
];

export default function MenuPage() {
  return (
    <main className="bg-[#fffaf5] text-[#17120f]">

      {/* =====================================================
          MENU HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#241815] px-5 pb-20 pt-28 text-white sm:pb-24 sm:pt-36 lg:px-8">

        {/* Decorative circle */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#c62828]/20 blur-3xl" />

        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-[#f59e0b]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">

          <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto]">

            <div className="max-w-3xl">

              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-9 bg-[#f59e0b]" />

                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f59e0b]">
                  KTM Momo House
                </p>
              </div>

              <h1 className="text-5xl font-bold leading-[0.92] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[86px]">
                Good food and taste.
                <br />
                <span className="font-[var(--font-playfair)] font-normal italic text-[#f59e0b]">
                  No boring bites.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
                From steaming hot momos to wok-tossed noodles and satisfying
                fast food, find something delicious for every craving.
              </p>

            </div>

            {/* Location */}
            <div className="flex items-center justify gap-3 text-sm text-white/60 lg:pb-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <MapPin size={16} />
              </span>

              <div>
                <p className="font-semibold text-white">
                  Bhadrapur, Jhapa
                </p>

                <p className="text-xs text-white/45">
                  KTM Momo House
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORY NAVIGATION
      ===================================================== */}
      <section className="sticky top-0 z-30 border-b border-black/5 bg-[#fffaf5]/95 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl overflow-x-auto px-5 lg:px-8">
          <div className="flex min-w-max items-center gap-2 py-4">

            {categories.map((category, index) => (
              <a
                key={category}
                href={
                  category === "All"
                    ? "#menu"
                    : `#${category.toLowerCase().replace(" ", "-")}`
                }
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  index === 0
                    ? "bg-[#c62828] text-white"
                    : "text-[#766c66] hover:bg-[#f3e7dc] hover:text-[#241815]"
                }`}
              >
                {category}
              </a>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          MENU
      ===================================================== */}
      <section
        id="menu"
        className="px-5 py-20 sm:py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">

          {/* Section heading */}
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c62828]">
                Our menu
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-none tracking-[-0.04em] sm:text-5xl">
                Made for
                <br />
                <span className="font-[var(--font-playfair)] font-normal italic text-[#c62828]">
                  every craving.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#766c66]">
              Explore our selection of momos, noodles and fast food favorites.
              Prices and availability may vary.
            </p>

          </div>

          {/* =================================================
              FEATURED SPECIAL
          ================================================= */}
          <div className="mt-14 overflow-hidden rounded-[32px] bg-[#241815] text-white">

            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">

              {/* Image */}
              <div className="group relative min-h-[380px] overflow-hidden lg:min-h-[500px]">

                <img
                  src="/images/hero-momo.jpg"
                  alt="KTM Special Momo"
                  className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-[#f59e0b] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#241815]">
                  <Flame size={14} fill="currentColor" />
                  House Special
                </div>

                <div className="absolute bottom-6 left-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Customer favorite
                  </p>

                  <p className="mt-1 text-2xl font-bold">
                    KTM Special Momo
                  </p>
                </div>

              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

                <div className="flex items-center gap-3">

                  <div className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5">
                    <Star
                      size={14}
                      className="fill-[#f59e0b] text-[#f59e0b]"
                    />

                    <span className="text-sm font-semibold">
                      4.9
                    </span>
                  </div>

                  <span className="text-xs text-white/45">
                    120+ reviews
                  </span>

                </div>

                <h3 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
                  The momo
                  <br />
                  <span className="font-[var(--font-playfair)] font-normal italic text-[#f59e0b]">
                    you came for.
                  </span>
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/60 sm:text-base">
                  Our signature momo prepared with a flavorful filling and
                  served with our special house chutney.
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">

                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/40">
                      Starting from
                    </p>

                    <p className="mt-1 text-2xl font-bold">
                      Rs. 180
                    </p>
                  </div>

                  <Link
                    href="#momos"
                    className="group flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#241815] transition hover:bg-[#f59e0b]"
                  >
                    Explore

                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>

                </div>
              </div>

            </div>
          </div>

          {/* =================================================
              MOMOS
          ================================================= */}
          <MenuCategory
            id="momos"
            title="Momos"
            subtitle="Steamed, juicy and made fresh."
            items={menuItems.filter((item) => item.category === "Momos")}
          />

          {/* =================================================
              NOODLES
          ================================================= */}
          <MenuCategory
            id="noodles"
            title="Noodles"
            subtitle="Wok-tossed favorites with plenty of flavor."
            items={menuItems.filter((item) => item.category === "Noodles")}
          />

          {/* =================================================
              FAST FOOD
          ================================================= */}
          <MenuCategory
            id="fast-food"
            title="Fast Food"
            subtitle="Something delicious when you're really hungry."
            items={menuItems.filter((item) => item.category === "Fast Food")}
          />

          {/* =================================================
              NOTE
          ================================================= */}
          <div className="mt-16 rounded-2xl border border-black/5 bg-white p-5 text-center">
            <p className="text-xs leading-5 text-[#766c66]">
            <span className="text-red-500">Note:</span>  Prices shown are for reference. Please confirm current prices
              and availability at KTM Momo House.
            </p>
          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-[#f0e2d6] px-5 py-24 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#c62828]">
            Still hungry?
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-[1] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            There is always room
            <br />
            for{" "}
            <span className="font-[var(--font-playfair)] font-normal italic text-[#c62828]">
              one more momo.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#766c66]">
            Come by KTM Momo House in Bhadrapur and enjoy your favorites
            freshly prepared.
          </p>

          <Link
            href="/"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#241815] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#c62828]"
          >
            Back to home

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

        </div>
      </section>

    </main>
  );
}

/* =========================================================
   MENU CATEGORY COMPONENT
========================================================= */

type MenuItem = {
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  rating: string;
  reviews: string;
  popular: boolean;
  vegetarian: boolean;
};

function MenuCategory({
  id,
  title,
  subtitle,
  items,
}: {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
}) {
  return (
    <section id={id} className="scroll-mt-24 pt-24">

      {/* Heading */}
      <div className="mb-9 flex items-end justify-between gap-6">

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c62828]">
            Category
          </p>

          <h3 className="mt-2 text-3xl font-bold tracking-[-0.035em] sm:text-4xl">
            {title}
          </h3>

          <p className="mt-2 text-sm text-[#766c66]">
            {subtitle}
          </p>
        </div>

        <span className="hidden h-px flex-1 bg-black/10 md:block" />

      </div>

      {/* Cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {items.map((item) => (
          <article
            key={item.name}
            className="group overflow-hidden rounded-[24px] border border-black/5 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
          >

            {/* Image */}
            <div className="relative aspect-[1.15] overflow-hidden bg-[#ead8ca]">

              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70" />

              {/* Popular */}
              {item.popular && (
                <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-[#f59e0b] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#241815]">
                  <Flame size={12} fill="currentColor" />
                  Popular
                </div>
              )}

              {/* Vegetarian */}
              {item.vegetarian && (
                <div className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-green-700 backdrop-blur">
                  <Leaf size={13} />
                </div>
              )}

            </div>

            {/* Content */}
            <div className="p-5">

              <div className="flex items-center gap-2">

                <div className="flex items-center gap-1">
                  <Star
                    size={13}
                    className="fill-[#f59e0b] text-[#f59e0b]"
                  />

                  <span className="text-xs font-bold">
                    {item.rating}
                  </span>
                </div>

                <span className="text-[11px] text-[#9b9088]">
                  ({item.reviews})
                </span>

              </div>

              <h4 className="mt-3 text-lg font-bold tracking-tight text-[#241815]">
                {item.name}
              </h4>

              <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#766c66]">
                {item.description}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-black/5 pt-4">

                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#9b9088]">
                    Price
                  </span>

                  <p className="text-lg font-bold text-[#241815]">
                    Rs. {item.price}
                  </p>
                </div>

                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff0e5] text-[#c62828] transition hover:bg-[#c62828] hover:text-white"
                  aria-label={`Add ${item.name}`}
                >
                  <ArrowUpRight size={17} />
                </button>

              </div>

            </div>

          </article>
        ))}

      </div>
    </section>
  );
}