import Link from "next/link";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";

export default function WelcomeSection() {
  return (
    <section className="overflow-hidden bg-[#f3ebe4] px-5 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

          {/* =====================================
              IMAGE
          ===================================== */}
          <div className="relative">

            {/* Decorative circle */}
            <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-[#f59e0b]/15" />

            {/* Main image */}
            <div className="group relative overflow-hidden rounded-[36px]">
              <img
                src="/images/ktm-momo-house-welcoming.jpg"
                alt="Welcome to KTM Momo House"
                className="aspect-[4/5] w-full object-contain transition duration-700 group-hover:scale-105"
              />

              {/* Image overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

              {/* Floating location */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-full border border-white/20 bg-black/35 px-4 py-3 text-white backdrop-blur-md">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c62828]">
                  <MapPin size={15} />
                </span>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/60">
                    Visit us
                  </p>

                  <p className="text-sm font-semibold">
                    Bhadrapur, Jhapa
                  </p>
                </div>
              </div>
            </div>

            {/* Small floating badge */}
            <div className="absolute -bottom-7 -right-3 hidden rounded-2xl bg-white p-5 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff0e5] text-[#c62828]">
                  <Sparkles size={18} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#766c66]">
                    Made with care
                  </p>

                  <p className="mt-0.5 text-sm font-black text-[#241815]">
                    Fresh. Flavorful. Local.
                  </p>
                </div>
              </div>
            </div>

          </div>


          {/* =====================================
              CONTENT
          ===================================== */}
          <div className="lg:pl-4">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#c62828]" />

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#c62828]">
                Welcome to KTM Momo House
              </p>
            </div>


            {/* Heading */}
            <h2 className="mt-6 text-4xl font-bold leading-[0.98] tracking-[-0.04em] text-[#17120f] sm:text-5xl lg:text-6xl">

              Come for the
              <br />

              <span className="font-[var(--font-playfair)] font-normal italic text-[#c62828]">
                momo.
              </span>

              <br />

              Stay for the moments.
            </h2>


            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-7 text-[#766c66] sm:text-lg">
              Welcome to KTM Momo House — a place where delicious food,
              familiar flavors and good company come together.
            </p>

            <p className="mt-4 max-w-xl text-base leading-7 text-[#766c66]">
              From our special momos to noodles and other favorite fast-food
              dishes, everything is prepared to make your visit something
              worth remembering.
            </p>


            {/* Divider */}
            <div className="my-8 h-px w-full max-w-xl bg-black/10" />


            {/* Small highlights */}
            <div className="grid gap-6 sm:grid-cols-3">

              <div>
                <p className="text-2xl font-black text-[#241815]">
                  Fresh
                </p>

                <p className="mt-1 text-xs font-medium text-[#766c66]">
                  Prepared with care
                </p>
              </div>

              <div>
                <p className="text-2xl font-black text-[#241815]">
                  Local
                </p>

                <p className="mt-1 text-xs font-medium text-[#766c66]">
                  Proudly in Bhadrapur
                </p>
              </div>

              <div>
                <p className="text-2xl font-black text-[#241815]">
                  Delicious
                </p>

                <p className="mt-1 text-xs font-medium text-[#766c66]">
                  Made to enjoy
                </p>
              </div>

            </div>


            {/* CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-4">

              <Link
                href="/menu"
                className="group inline-flex items-center gap-3 rounded-full bg-[#c62828] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-900/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#a51f1f]"
              >
                Explore Our Menu

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>

              <Link
                href="/about"
                className="text-sm font-bold text-[#332c28] transition hover:text-[#c62828]"
              >
                Our Story
              </Link>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}