
import Link from "next/link";
import { WHATSAPP_CHANNEL_LINK } from "@/lib/links";

const communityValues = [
  {
    number: "01",
    title: "Intentional growth",
    description:
      "We approach personal development deliberately, setting clear goals and taking practical steps toward becoming better.",
  },
  {
    number: "02",
    title: "Discipline and consistency",
    description:
      "We understand that lasting change requires repeated action, healthy routines, and commitment beyond temporary motivation.",
  },
  {
    number: "03",
    title: "Accountability",
    description:
      "We encourage one another to honour our commitments, review our progress, and keep moving forward when growth becomes difficult.",
  },
  {
    number: "04",
    title: "Collective impact",
    description:
      "We believe that personal growth should extend beyond the individual and contribute to stronger communities and a better society.",
  },
];

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="text-lg font-extrabold tracking-tight text-emerald-900 sm:text-2xl"
          >
            PURPOSELY GLOBAL
            <span className="text-amber-500">.</span>
          </Link>

          <Link
            href="/"
            className="rounded-full border border-emerald-900 px-4 py-2 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-50"
          >
            Back to home
          </Link>
        </nav>
      </header>

      <section className="bg-emerald-950 px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
            The PURPOSELY community
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Growth is better when we grow together.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-100">
            PURPOSELY brings together people who are committed to deliberate
            growth, consistent action, accountability, and becoming people
            of impact for a better society.
          </p>

          <p className="mt-4 leading-7 text-emerald-100">
             <a
                href={WHATSAPP_CHANNEL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-emerald-950 transition hover:bg-yellow-300"
             >
                Join our community
             </a>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">
              Why community matters
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Build better habits in the right environment.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Growth can be difficult when we try to do everything alone.
              A healthy environment gives us opportunities to learn from
              others, share experiences, receive accountability, and stay
              committed to the people we are becoming.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              At PURPOSELY, we aim to make growth more deliberate by
              encouraging practical action, shared learning, and consistent
              progress.
            </p>
          </div>

          <div className="rounded-3xl bg-emerald-50 p-8 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">
              Our shared principle
            </p>

            <h3 className="mt-5 text-3xl font-bold leading-tight text-emerald-950">
              Everything With Intentionality.
            </h3>

            <p className="mt-5 leading-7 text-slate-600">
              We do not want growth to remain a good intention. We want to
              cultivate the discipline, systems, and accountability that
              help turn intentions into consistent action.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">
              What guides us
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              The culture we are building.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              These principles shape how we approach personal development,
              relationships, accountability, and service to society.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {communityValues.map((value) => (
              <article
                key={value.number}
                className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8"
              >
                <span className="text-sm font-bold tracking-widest text-amber-600">
                  {value.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-emerald-950">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-emerald-950 px-7 py-12 text-center text-white sm:px-12 sm:py-16">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-400">
            Take the next step
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Be intentional about the person you are becoming.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-emerald-100">
            Explore our programmes, learn through the Academy, and connect
            with a community that values deliberate growth and meaningful
            impact.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/programmes"
              className="inline-flex justify-center rounded-full bg-amber-400 px-7 py-3 font-bold text-emerald-950 transition hover:bg-amber-300"
            >
              Explore programmes
            </Link>

            <Link
              href="/academy"
              className="inline-flex justify-center rounded-full border border-white/40 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Visit Learning Academy
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500">
        PURPOSELY — Building People of Impact for a Better Society.
        <p className="mt-2">Everything With Intentionality.</p>
      </footer>
    </main>
  );
}
