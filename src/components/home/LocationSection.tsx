import { Clock3, MapPin } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="bg-[#fffaf5] px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-[2rem] bg-[#211713] lg:grid-cols-2">
          {/* Left content */}
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f59e0b]">
              Visit Us
            </p>

            <h2 className="mt-4 text-4xl font-black leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl">
              Come enjoy
              <br />
              <span className="font-[var(--font-playfair)] font-normal italic text-[#f59e0b]">
                good food.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
              Find KTM Momo House in Bhadrapur, Jhapa and enjoy freshly
              prepared momos, noodles and your favorite fast food.
            </p>

            <div className="mt-8 space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <MapPin size={19} className="text-[#f59e0b]" />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">Our Location</p>

                  <p className="mt-1 text-sm leading-6 text-white/55">
                    H34M+8QF
                    <br />
                    Bhadrapur, Koshi Province 57200
                    <br />
                    Nepal
                  </p>
                </div>
              </div>

              {/* Opening */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Clock3 size={19} className="text-[#f59e0b]" />
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    Opening Hours
                  </p>

                  <p className="mt-1 text-sm text-white/55">
                    Please check current opening hours before visiting.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative min-h-[420px] bg-[#2c211c]">
            <iframe
              title="KTM Momo House location"
              src="https://www.google.com/maps?q=H34M%2B8QF%2C%20Bhadrapur%2C%20Nepal&output=embed"
              className="absolute inset-0 h-full w-full border-0 grayscale-[20%]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}