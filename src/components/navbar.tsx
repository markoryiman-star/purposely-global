
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="border-b border-slate-100 bg-white">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Brand logo */}
        <Link
          href="/"
          aria-label="PURPOSELY Global homepage"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          <Image
            src="/purposely-logo.png"
            alt="PURPOSELY logo"
            width={48}
            height={48}
            priority
            className="h-12 w-12 object-contain"
          />

          <span className="text-lg font-extrabold tracking-tight text-emerald-900 sm:text-2xl">
            PURPOSELY GLOBAL
            <span className="text-amber-500">.</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link href="/about" className="hover:text-emerald-700">
            About
          </Link>

          <Link href="/programmes" className="hover:text-emerald-700">
            Programmes
          </Link>

          <Link href="/academy" className="hover:text-emerald-700">
            Learning Academy
          </Link>

          <Link href="/community" className="hover:text-emerald-700">
            Community
          </Link>

          <Link href="/partnerships" className="hover:text-emerald-700">
            Partnerships
          </Link>
        </div>

        {/* Desktop call to action */}
        <Link
          href="/register"
          className="hidden rounded-full bg-emerald-900 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-800 md:inline-flex"
        >
          Get involved
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="flex items-center gap-2 rounded-lg border border-emerald-900 px-3 py-2 text-sm font-semibold text-emerald-900 md:hidden"
        >
          {menuOpen ? "Close" : "Menu"}
          <span aria-hidden="true">{menuOpen ? "✕" : "☰"}</span>
        </button>

        {/* Mobile navigation */}
        {menuOpen && (
          <div
            id="mobile-navigation"
            className="absolute right-6 top-full z-50 mt-2 w-64 rounded-xl border border-slate-200 bg-white p-3 shadow-xl md:hidden"
          >
            <Link
              href="/about"
              onClick={closeMenu}
              className="block rounded-lg px-4 py-3 text-sm hover:bg-emerald-50"
            >
              About
            </Link>

            <Link
              href="/programmes"
              onClick={closeMenu}
              className="block rounded-lg px-4 py-3 text-sm hover:bg-emerald-50"
            >
              Programmes
            </Link>

            <Link
              href="/academy"
              onClick={closeMenu}
              className="block rounded-lg px-4 py-3 text-sm hover:bg-emerald-50"
            >
              Learning Academy
            </Link>

            <Link
              href="/community"
              onClick={closeMenu}
              className="block rounded-lg px-4 py-3 text-sm hover:bg-emerald-50"
            >
              Community
            </Link>

            <Link
              href="/partnerships"
              onClick={closeMenu}
              className="block rounded-lg px-4 py-3 text-sm hover:bg-emerald-50"
            >
              Partnerships
            </Link>

            <Link
              href="/register"
              onClick={closeMenu}
              className="mt-2 block rounded-lg bg-emerald-900 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-emerald-800"
            >
              Get involved
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
