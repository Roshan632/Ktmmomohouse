"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isHome = pathname === "/";

  return (
    <header
      className={`left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        isHome
          ? "absolute border-white/10 bg-black/10 backdrop-blur-md"
          : "sticky border-black/5 bg-[#fffaf5]/95 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c62828] text-xl shadow-lg shadow-black/10">
            🥟
          </div>

          <div className="leading-none">
            <div
              className={`text-xl font-black tracking-tight ${
                isHome ? "text-white" : "text-[#17120f]"
              }`}
            >
              KTM<span className="text-[#c62828]">MOMO</span>
            </div>

            <div
              className={`mt-1 text-[9px] font-semibold uppercase tracking-[0.2em] ${
                isHome ? "text-white/60" : "text-[#766c66]"
              }`}
            >
              Bhadrapur • Jhapa
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-semibold transition ${
                  isHome
                    ? "text-white/85 hover:text-white"
                    : "text-[#4d443f] hover:text-[#c62828]"
                }`}
              >
                {item.name}

                {isActive && !isHome && (
                  <span className="absolute -bottom-2 left-0 right-0 mx-auto h-0.5 w-5 rounded-full bg-[#c62828]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/menu"
            className="group flex items-center gap-2 rounded-full bg-[#c62828] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/10 transition hover:-translate-y-0.5 hover:bg-[#9f1f1f]"
          >
            Explore Menu

            <ArrowUpRight
              size={17}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex h-11 w-11 items-center justify-center rounded-full transition md:hidden ${
            isHome
              ? "border border-white/20 bg-white/10 text-white backdrop-blur-md"
              : "border border-black/10 bg-white text-[#17120f]"
          }`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className={`border-t px-5 py-5 backdrop-blur-xl md:hidden ${
            isHome
              ? "border-white/10 bg-black/90"
              : "border-black/5 bg-[#fffaf5]"
          }`}
        >
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-4 py-3 font-semibold transition ${
                    isHome
                      ? isActive
                        ? "bg-white/10 text-white"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                      : isActive
                        ? "bg-[#fff0e3] text-[#c62828]"
                        : "text-[#332c28] hover:bg-[#fff0e3] hover:text-[#c62828]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="/menu"
              onClick={() => setIsOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#c62828] px-4 py-3 font-bold text-white transition hover:bg-[#9f1f1f]"
            >
              Explore Menu
              <ArrowUpRight size={17} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}