
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* About introduction */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 md:py-28"
      >
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-800 sm:text-sm">
          About PURPOSELY
        </p>

        <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Building people of impact for a better society.
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:mt-8 sm:text-lg sm:leading-8">
          PURPOSELY is a growth-focused community committed to helping
          young people develop intentionally through practical learning,
          disciplined habits, accountability, and systems for sustainable
          personal growth.
        </p>

        {/* Guiding principle */}
        <div className="mt-10 rounded-3xl bg-emerald-950 p-6 text-white sm:mt-12 sm:p-10 md:p-12">
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
            Everything With Intentionality.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-emerald-100 sm:text-lg sm:leading-8">
            We believe growth should be deliberate. Our focus is to help
            people turn good intentions into consistent action, measurable
            progress, and meaningful contributions to society.
          </p>
        </div>

        {/* Call to action */}
        <div className="mt-10 sm:mt-12">
          <Link
            href="/#programmes"
            className="inline-flex w-full items-center justify-center rounded-full bg-emerald-900 px-6 py-4 text-center font-bold text-white transition hover:bg-emerald-800 sm:w-auto"
          >
            Explore our programmes →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-4 py-8 text-center text-xs leading-6 text-slate-500 sm:px-6 sm:text-sm">
        PURPOSELY — Building People of Impact for a Better Society.
      </footer>
    </main>
  );
}
