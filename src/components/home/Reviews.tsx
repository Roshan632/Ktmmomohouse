import { ArrowUpRight, Star } from "lucide-react";
import { reviews } from "@/data/reviews";

export default function Reviews() {
  return (
    <section className="bg-[#211713] px-5 py-20 text-white lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f59e0b]">
              Guest Reviews
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-black leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Loved for the
              <br />
              <span className="font-[var(--font-playfair)] font-normal italic text-[#f59e0b]">
                momo.
              </span>
            </h2>
          </div>

          {/* Google Rating */}
          <div className="flex items-center gap-4">
            <div>
              <div className="flex items-center gap-1">
                <span className="text-3xl font-black">4.4</span>

                <Star
                  size={21}
                  fill="currentColor"
                  className="text-[#f59e0b]"
                />
              </div>

              <p className="mt-1 text-xs text-white/45">
                Google Reviews
              </p>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <a
              href="https://www.google.com/search?q=KTM+Momo+House+Bhadrapur"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm font-bold text-white transition hover:text-[#f59e0b]"
            >
              View on Google
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="flex min-h-[280px] flex-col rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Star
                    key={index}
                    size={15}
                    fill="currentColor"
                    className="text-[#f59e0b]"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-6 flex-1 text-sm leading-7 text-white/70">
                “{review.text}”
              </p>

              {/* Reviewer */}
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-sm font-bold text-white">
                  {review.name}
                </p>

                <p className="mt-1 text-xs text-white/40">
                  Google Review · {review.time}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}