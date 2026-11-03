
import Navbar from "@/components/navbar";
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
      <Navbar />

      {/* Community introduction */}
      <section
        id="community"
        className="border-t border-slate-100 px-4 py-14 sm:px-6 sm:py-16 md:py-20"
      >
        <div className="mx-auto max-w-7xl px-2 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
            The PURPOSELY community
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Growth is better together.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-emerald-800 sm:text-lg sm:leading-8">
            PURPOSELY brings together people who are committed to deliberate
            growth, consistent action, accountability, and becoming people
            of impact for a better society.
          </p>

          <a
            href={WHATSAPP_CHANNEL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-emerald-950 transition hover:bg-yellow-300 sm:mt-4 sm:w-auto"
          >
            Join our community
          </a>
        </div>
      </section>

      {/* Why community matters */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 md:items-center md:gap-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">
              Why community matters
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Build better habits in the right environment.
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600 sm:leading-8">
              Growth can be difficult when we try to do everything alone.
              A healthy environment gives us opportunities to learn from
              others, share experiences, receive accountability, and stay
              committed to the people we are becoming.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:leading-8">
              At PURPOSELY, we aim to make growth more deliberate by
              encouraging practical action, shared learning, and consistent
              progress.
            </p>
          </div>

          <div className="rounded-3xl bg-emerald-50 p-6 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">
              Our shared principle
            </p>

            <h3 className="mt-5 text-2xl font-bold leading-tight text-emerald-950 sm:text-3xl">
              Everything With Intentionality.
            </h3>

            <p className="mt-5 text-base leading-7 text-slate-600">
              We do not want growth to remain a good intention. We want to
              cultivate the discipline, systems, and accountability that
              help turn intentions into consistent action.
            </p>
          </div>
        </div>
      </section>

      {/* Community values */}
      <section className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">
              What guides us
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              The culture we are building.
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:leading-8">
              These principles shape how we approach personal development,
              relationships, accountability, and service to society.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6">
            {communityValues.map((value) => (
              <article
                key={value.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
              >
                <span className="text-sm font-bold tracking-widest text-amber-600">
                  {value.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-emerald-950">
                  {value.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final call to action */}
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-emerald-950 px-5 py-10 text-center text-white sm:px-10 sm:py-14 md:px-12 md:py-16">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-400">
            Take the next step
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
            Be intentional about the person you are becoming.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-emerald-100 sm:leading-8">
            Explore our programmes, learn through the Academy, and connect
            with a community that values deliberate growth and meaningful
            impact.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/programmes"
              className="inline-flex w-full justify-center rounded-full bg-amber-400 px-7 py-3 font-bold text-emerald-950 transition hover:bg-amber-300 sm:w-auto"
            >
              Explore programmes
            </Link>

            <Link
              href="/academy"
              className="inline-flex w-full justify-center rounded-full border border-white/40 px-7 py-3 font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Visit Learning Academy
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-4 py-8 text-center text-xs leading-6 text-slate-500 sm:px-6 sm:text-sm">
        <p>
          PURPOSELY — Building People of Impact for a Better Society.
        </p>
        <p className="mt-2">Everything With Intentionality.</p>
      </footer>
    </main>
  );
}
