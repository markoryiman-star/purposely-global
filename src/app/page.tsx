
import Navbar from "@/components/navbar";
import Link from "next/link";

const programmes = [
  {
    number: "01",
    title: "Purpose discovery",
    description:
      "Discover who you are, understand your strengths and values, and gain clarity about your purpose and the person you are becoming.",
  },
  {
    number: "02",
    title: "Personal development",
    description:
      "Develop yourself intentionally through continuous learning, positive habits, self-awareness, and practical personal growth.",
  },
  {
    number: "03",
    title: "Leadership & communication",
    description:
      "Build leadership capacity, communicate effectively, develop healthy relationships, and learn to influence others positively.",
  },
  {
    number: "04",
    title: "Personal growth",
    description:
      "Build self-awareness, develop useful habits, and become more intentional about who you are becoming.",
  },
  {
    number: "05",
    title: "Discipline & accountability",
    description:
      "Turn your intentions into consistent action through practical systems, routines, and accountability.",
  },
  {
    number: "06",
    title: "Purposeful impact",
    description:
      "Develop your capacity to serve others, contribute meaningfully, and create positive change in society.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Hero section */}
      <section className="relative overflow-hidden bg-emerald-950 text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-emerald-800/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-2 md:items-center md:gap-12 md:py-28 lg:py-32">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-amber-400 sm:mb-6 sm:text-sm">
              Growth must be deliberate
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building People of Impact
            </h1>

            <p className="mt-4 text-lg font-semibold text-emerald-100 sm:text-xl">
              Become who you are meant to be. Intentionally.
            </p>

            <p className="mt-6 max-w-xl text-base leading-7 text-emerald-100 sm:mt-7 sm:text-lg sm:leading-8">
              PURPOSELY builds people of impact by helping them grow with
              intention, develop discipline, and turn their potential into
              meaningful action.
            </p>

            {/* Call-to-action buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:mt-9 sm:flex-row sm:flex-wrap">
              <Link
                href="/register"
                className="inline-flex w-full items-center justify-center rounded-full bg-amber-400 px-7 py-4 text-center font-bold text-emerald-950 transition hover:bg-amber-300 sm:w-auto"
              >
                Start your growth journey →
              </Link>

              <Link
                href="/about"
                className="inline-flex w-full items-center justify-center rounded-full border border-emerald-700 px-7 py-4 text-center font-semibold text-white transition hover:bg-emerald-900 sm:w-auto"
              >
                Discover PURPOSELY
              </Link>
            </div>
          </div>

          {/* Guiding principle card */}
          <div className="rounded-3xl border border-emerald-800 bg-emerald-900/60 p-6 sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 sm:text-sm">
              Our guiding principle
            </p>

            <p className="mt-5 text-2xl font-bold leading-snug sm:mt-6 sm:text-3xl lg:text-4xl">
              Everything With Intentionality.
            </p>

            <div className="my-6 h-px bg-emerald-700 sm:my-8" />

            <p className="text-base leading-7 text-emerald-100 sm:text-lg sm:leading-8">
              We believe growth is not left to chance. It is cultivated
              through deliberate decisions, consistent action, and a
              commitment to becoming better.
            </p>

            <p className="mt-6 text-xs font-semibold leading-6 text-amber-400 sm:mt-8 sm:text-sm">
              THINK INTENTIONALLY. GROW DELIBERATELY. LIVE PURPOSEFULLY.
            </p>
          </div>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">
          Who we are
        </p>

        <div className="mt-5 grid gap-8 md:grid-cols-2 md:items-start">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Building people of impact for a better society.
          </h2>

          <p className="text-lg leading-8 text-slate-600">
            PURPOSELY is a growth-focused community helping young people
            develop intentionally through practical learning, disciplined
            habits, accountability, and systems that turn potential into
            meaningful impact.
          </p>
        </div>
      </section>

      {/* Programmes section */}
      <section id="programmes" className="bg-slate-50 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">
            How we help you grow
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
            Intentional growth requires action, discipline, and accountability.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            We provide practical learning experiences, growth systems, and
            accountability structures that help people turn their intentions
            into consistent action and measurable progress.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-12 lg:grid-cols-3">
            {programmes.map((programme) => (
              <article
                key={programme.number}
                className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-sm font-bold text-amber-600">
                  {programme.number}
                </p>

                <h3 className="mt-5 text-xl font-bold">
                  {programme.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {programme.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Academy section */}
      <section id="academy" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="rounded-3xl bg-emerald-950 p-8 text-white sm:p-12 md:p-16">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-400">
            Coming soon
          </p>

          <h2 className="mt-5 max-w-2xl text-3xl font-bold sm:text-4xl">
            PURPOSELY Learning Academy
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-100">
            A learning platform designed to make practical knowledge,
            personal development, and lifelong learning more accessible.
            Our vision is to help learners study, practise, and track their
            growth over time.
          </p>

          <Link
            href="/academy"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-amber-400 px-6 py-4 text-center font-bold text-emerald-950 transition hover:bg-amber-300 sm:w-auto"
          >
            Explore the Academy →
          </Link>
        </div>
      </section>

      {/* Community section */}
      <section id="community" className="border-t border-slate-100 px-6 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Growth is better together.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
            Join a community of people committed to learning, accountability,
            intentional action, and meaningful impact.
          </p>

          <Link
            href="/community"
            className="mt-7 inline-flex w-full items-center justify-center rounded-full border border-emerald-900 px-7 py-4 font-semibold text-emerald-900 transition hover:bg-emerald-50 sm:w-auto"
          >
            Discover our community →
          </Link>
        </div>
      </section>

      {/* Get involved section */}
      <section id="get-involved" className="bg-amber-50 px-6 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold">
            Your growth deserves intention.
          </h2>

          <p className="mt-4 text-slate-600">
            Take the next step towards becoming a person of impact.
          </p>

          <Link
            href="/programmes"
            className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-emerald-900 px-7 py-4 font-bold text-white transition hover:bg-emerald-800 sm:w-auto"
          >
            Explore our focus areas →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-6 py-8 text-center text-sm text-slate-300">
        <p className="font-bold tracking-wide text-white">PURPOSELY</p>

        <p className="mt-2">
          Building People of Impact for a Better Society.
        </p>

        <p className="mt-1">Everything With Intentionality.</p>

        <p className="mt-6 text-slate-500">
          © 2026 PURPOSELY GLOBAL. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
