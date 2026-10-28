import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tight text-emerald-900"
          >
            PURPOSELY
          </Link>

          <Link
            href="/"
            className="text-sm font-semibold text-emerald-800 hover:text-emerald-600"
          >
            Back to home
          </Link>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">
          About PURPOSELY
        </p>

        <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Building people of impact for a better society.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
          PURPOSELY is a growth-focused community committed to helping
          young people develop intentionally through practical learning,
          disciplined habits, accountability, and systems for sustainable
          personal growth.
        </p>

        <div className="mt-12 rounded-3xl bg-emerald-950 p-8 text-white sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Everything With Intentionality.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-emerald-100">
            We believe growth should be deliberate. Our focus is to help
            people turn good intentions into consistent action, measurable
            progress, and meaningful contributions to society.
          </p>
        </div>

        <div className="mt-12">
          <Link
            href="/#programmes"
            className="inline-flex rounded-full bg-emerald-900 px-6 py-3 font-bold text-white transition hover:bg-emerald-800"
          >
            Explore our programmes →
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500">
        PURPOSELY — Building People of Impact for a Better Society.
      </footer>
    </main>
  );
}
