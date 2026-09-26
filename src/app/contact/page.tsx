import Link from "next/link";
import {
  ArrowLeft,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-[#fffaf5] text-[#17120f]">
      {/* Hero */}
    <section className="border-b border-black/5 px-5 pb-16 pt-32 lg:px-8 lg:pb-20 lg:pt-36">
  <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
    {/* Left */}
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c62828]">
        Contact Us
      </p>

      <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
        Let&apos;s talk
        <br />
        <span className="font-[var(--font-playfair)] font-normal italic text-[#c62828]">
          food.
        </span>
      </h1>

      <p className="mt-7 max-w-xl text-base leading-7 text-[#766c66]">
        Have a question, want to visit us, or simply looking for some
        delicious momos? Find KTM Momo House in Bhadrapur, Jhapa.
      </p>
    </div>

    {/* Right image */}
    <div className="relative mx-auto w-full max-w-[480px]">
      <div className="aspect-square overflow-hidden rounded-[2rem]">
        <img
          src="/images/buff-momo.jpg"
          alt="Momos at KTM Momo House"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Small location badge */}
      <div className="absolute -bottom-5 -left-5 rounded-2xl bg-[#211713] px-5 py-4 text-white shadow-xl">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
          Find Us
        </p>

        <p className="mt-1 text-sm font-bold">
          Bhadrapur, Jhapa
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Contact Information */}
      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          {/* Location */}
          <div className="rounded-[1.5rem] border border-black/5 bg-white p-7  shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff0e3]">
              <MapPin size={20} className="text-[#c62828]" />
            </div>

            <h2 className="mt-6 text-xl font-black">Visit Us</h2>

            <p className="mt-3 text-sm leading-7 text-[#766c66]">
              H34M+8QF
              <br />
              Bhadrapur, Koshi Province 57200
              <br />
              Nepal
            </p>
          </div>

          {/* Phone */}
          <div className="rounded-[1.5rem] border border-black/5 bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff0e3]">
              <Phone size={20} className="text-[#c62828]" />
            </div>

            <h2 className="mt-6 text-xl font-black">Call Us</h2>

            <p className="mt-3 text-sm text-[#766c66]">
              982-5941554
            </p>
          </div>

          {/* Opening Hours */}
          <div className="rounded-[1.5rem] border border-black/5 bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff0e3]">
              <Clock3 size={20} className="text-[#c62828]" />
            </div>

            <h2 className="mt-6 text-xl font-black">Opening Hours</h2>

            <p className="mt-3 text-sm leading-7 text-[#766c66]">
              Please check the current opening hours before visiting.
            </p>
          </div>
        </div>
      </section>

      {/* Map + Message */}
      <section className="px-5 pb-20 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-[#211713] lg:grid-cols-2">
          {/* Message */}
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f59e0b]">
              KTM Momo House
            </p>

            <h2 className="mt-4 text-4xl font-black leading-[1.05] text-white sm:text-5xl">
              Good food is
              <br />
              <span className="font-[var(--font-playfair)] font-normal italic text-[#f59e0b]">
                worth finding.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/55">
              Visit us in Bhadrapur and enjoy momos, noodles and other
              favorites at KTM Momo House.
            </p>

            <Link
              href="/menu"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#c62828] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#9f1f1f]"
            >
              Explore Menu
            </Link>
          </div>

          {/* Map */}
          <div className="min-h-[400px]">
            <iframe
              title="KTM Momo House location"
              src="https://www.google.com/maps?q=H34M%2B8QF%2C%20Bhadrapur%2C%20Nepal&output=embed"
              className="h-full min-h-[400px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Back */}
      <div className="px-5 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#766c66] transition hover:text-[#c62828]"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}