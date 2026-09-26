import Link from "next/link";
import {
  ArrowRight,
  ChefHat,
  Heart,
  Leaf,
  MapPin,
  Sparkles,
} from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description:
      "We use fresh ingredients to create food that is flavorful and satisfying.",
  },
  {
    icon: ChefHat,
    title: "Made Fresh",
    description:
      "Our dishes are prepared with care so you can enjoy them fresh and delicious.",
  },
  {
    icon: Sparkles,
    title: "Signature Flavor",
    description:
      "From momos to noodles, every dish is prepared with its own character and taste.",
  },
  {
    icon: Heart,
    title: "Made With Care",
    description:
      "We want every visit to feel welcoming, enjoyable and worth coming back for.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#fffaf5] text-[#17120f]">

      {/* ========================================
          HERO
      ======================================== */}
      <section className="relative min-h-[70vh] overflow-hidden bg-black">
        <img
          src="/images/ktm-momo-house-hero.jpg"
          alt="KTM Momo House"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-center px-5 py-24 lg:px-8">
          <div className="max-w-3xl text-white">

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
              About KTM Momo House
            </p>

            <h1 className="text-5xl font-bold leading-[0.95] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[82px]">
              Good food.
              <br />

              <span className="font-[var(--font-playfair)] font-normal italic text-[#f59e0b]">
                Good moments.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
              A place in Bhadrapur where you can enjoy freshly prepared
              momos, noodles and delicious fast food in a relaxed and
              welcoming atmosphere.
            </p>

          </div>
        </div>
      </section>


      {/* ========================================
          OUR STORY
      ======================================== */}
      <section className="px-5 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

          {/* Heading */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c62828]">
              Our story
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-[1] tracking-[-0.035em] sm:text-5xl">
              More than
              <br />

              <span className="font-[var(--font-playfair)] font-normal italic">
                just momos.
              </span>
            </h2>
          </div>

          {/* Story */}
          <div className="max-w-2xl">

            <p className="text-lg leading-8 text-[#4e4540]">
              KTM Momo House is a local restaurant in Bhadrapur, Jhapa,
              bringing together momos, noodles and other favorite fast-food
              dishes in one place.
            </p>

            <p className="mt-6 text-base leading-7 text-[#766c66]">
              Our focus is simple: prepare food with care, serve it fresh
              and create a place where people can enjoy good food with
              friends and family.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm font-medium text-[#766c66]">
              <MapPin size={17} className="text-[#c62828]" />
              Bhadrapur, Jhapa, Nepal
            </div>

          </div>
        </div>
      </section>


      {/* ========================================
          PHILOSOPHY / 3D IMAGE
      ======================================== */}
      <section className="overflow-hidden bg-[#f3ebe4] px-5 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-24">

          {/* =====================================
              3D PEOPLE IMAGE
          ===================================== */}
          <div className="relative">

            {/* Decorative background circle */}
            <div className="absolute -left-12 -top-12 h-40 w-40 rounded-full bg-[#f59e0b]/10" />

            {/* Image container */}
            <div className="group relative flex min-h-[500px] items-end justify-center overflow-hidden rounded-[34px] bg-[#ead8ca] sm:min-h-[560px]">

              {/* Decorative circle */}
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border-[32px] border-white/20" />

              {/* Decorative small circle */}
              <div className="absolute bottom-10 left-8 h-20 w-20 rounded-full bg-[#c62828]/10" />

              {/* 3D Image */}
              <img
                src="/images/buff-momo.jpg"
                alt="People enjoying momos at KTM Momo House"
                className="relative z-10 h-auto max-h-[570px] w-auto max-w-[95%] object-contain transition duration-700 group-hover:scale-[1.03]"
              />

              {/* Floating label */}
              <div className="absolute bottom-5 left-5 z-20 rounded-full border border-white/50 bg-white/90 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-[#241815] shadow-lg backdrop-blur-md">
                Good food · Good moments
              </div>

            </div>
          </div>


          {/* =====================================
              PHILOSOPHY CONTENT
          ===================================== */}
          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c62828]">
              What we believe
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-[1] tracking-[-0.035em] sm:text-5xl">

              Simple food,

              <br />

              <span className="font-[var(--font-playfair)] font-normal italic text-[#c62828]">
                thoughtfully made.
              </span>

            </h2>

            <p className="mt-7 text-base leading-7 text-[#766c66]">
              Great food doesn&apos;t always have to be complicated. We believe
              that fresh ingredients, good preparation and attention to
              flavor can make a simple meal memorable.
            </p>

            <p className="mt-5 text-base leading-7 text-[#766c66]">
              Whether you&apos;re stopping by for a plate of momos, sharing
              noodles with friends or simply looking for something
              delicious, KTM Momo House is here to serve food you can enjoy.
            </p>

            {/* Small highlights */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2">

              <div className="border-l-2 border-[#c62828] pl-4">
                <p className="text-sm font-bold text-[#241815]">
                  Freshly prepared
                </p>

                <p className="mt-1 text-sm leading-6 text-[#766c66]">
                  Food made with care for every order.
                </p>
              </div>

              <div className="border-l-2 border-[#f59e0b] pl-4">
                <p className="text-sm font-bold text-[#241815]">
                  Made to share
                </p>

                <p className="mt-1 text-sm leading-6 text-[#766c66]">
                  Good food is better with good company.
                </p>
              </div>

            </div>

            <Link
              href="/menu"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#c62828] px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#a51f1f]"
            >
              Explore our menu

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </Link>

          </div>
        </div>
      </section>


      {/* ========================================
          VALUES
      ======================================== */}
      <section className="px-5 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="max-w-2xl">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c62828]">
              Our values
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-[1] tracking-[-0.035em] sm:text-5xl md:text-6xl">

              What goes into

              <br />

              <span className="font-[var(--font-playfair)] font-normal italic">
                every plate.
              </span>

            </h2>

          </div>


          {/* Values */}
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value) => {

              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5e9df] text-[#c62828] transition duration-300 group-hover:bg-[#c62828] group-hover:text-white">
                    <Icon
                      size={19}
                      strokeWidth={1.8}
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-bold">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#766c66]">
                    {value.description}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>


      {/* ========================================
          CTA
      ======================================== */}
      <section className="bg-[#241815] px-5 py-24 text-white sm:py-28 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f59e0b]">
            Come hungry
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-[1] tracking-[-0.035em] sm:text-5xl md:text-6xl">

            Your next favorite

            <br />

            <span className="font-[var(--font-playfair)] font-normal italic">
              meal is waiting.
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/60">
            Explore our menu and discover the flavors waiting for you at
            KTM Momo House.
          </p>

          <Link
            href="/menu"
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#241815] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f59e0b]"
          >
            View Menu

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

        </div>
      </section>

    </main>
  );
}