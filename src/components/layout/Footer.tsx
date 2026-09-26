
import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Clock3,
} from "lucide-react";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#211713] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.7fr_0.9fr_0.9fr]">
          {/* Brand */}
          <div className="max-w-md">
            <Link href="/" className="inline-block">
              <div className="text-2xl font-black tracking-tight">
                KTM<span className="text-[#f59e0b]">MOMO</span>
              </div>

              <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/45">
                Bhadrapur • Jhapa
              </div>
            </Link>

            <h2 className="mt-8 text-4xl font-black leading-[1.05] tracking-[-0.03em] sm:text-5xl">
              Good food.
              <br />
              <span className="font-[var(--font-playfair)] font-normal italic text-[#f59e0b]">
                Good moments.
              </span>
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
              Bringing delicious momos, noodles and comforting flavors to
              Bhadrapur, Jhapa.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Explore
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="w-fit text-sm font-medium text-white/75 transition hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Visit */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Visit Us
            </p>

            <div className="mt-6 space-y-6">
              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-[#f59e0b]"
                />

                <p className="text-sm leading-6 text-white/70">
                  H34M+8QF
                  <br />
                  Bhadrapur, Koshi Province 57200
                  <br />
                  Nepal
                </p>
              </div>

              <div className="flex gap-3">
                <Clock3
                  size={18}
                  className="mt-1 shrink-0 text-[#f59e0b]"
                />

                <div className="text-sm leading-6 text-white/70">
                  <p>Open daily</p>
                  <p className="text-white/45">
                    Please check current opening hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Follow */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Follow Along
            </p>

            <p className="mt-6 max-w-xs text-sm leading-6 text-white/55">
              Follow KTM Momo House for food, moments and updates from
              Bhadrapur.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
              >
                <span className="text-xs font-bold">IG</span>
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
              >
                <span className="text-sm font-bold">f</span>
              </a>
            </div>

            <Link
              href="/menu"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-white"
            >
              Explore our menu
              <ArrowUpRight
                size={17}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} KTM Momo House. All rights reserved.
          </p>

          <p>
            Bhadrapur, Jhapa, Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}
