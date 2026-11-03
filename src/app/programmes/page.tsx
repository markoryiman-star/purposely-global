
import Navbar from "@/components/navbar";
import Link from "next/link";
import { WHATSAPP_CHANNEL_LINK } from "@/lib/links";

const programmes = [
  {
    number: "01",
    title: "Purpose discovery",
    description:
      "Gain a clearer understanding of who you are, what matters to you, and how your abilities can contribute to society.",
    outcome: "Clarity of direction and personal values",
  },
  {
    number: "02",
    title: "Personal development",
    description:
      "Develop your knowledge, mindset, skills, and character through continuous learning and deliberate self-improvement.",
    outcome: "A practical plan for continuous growth",
  },
  {
    number: "03",
    title: "Leadership and communication",
    description:
      "Learn to lead yourself, communicate effectively, work with others, and take responsibility for meaningful results.",
    outcome: "Stronger leadership and communication skills",
  },
  {
    number: "04",
    title: "Discipline and accountability",
    description:
      "Build consistent habits, manage distractions, track your commitments, and turn good intentions into daily action.",
    outcome: "Better routines and measurable progress",
  },
  {
    number: "05",
    title: "Financial growth",
    description:
      "Build practical awareness of money management, financial responsibility, and habits that support long-term stability.",
    outcome: "Stronger financial awareness and habits",
  },
  {
    number: "06",
    title: "Purposeful impact",
    description:
      "Identify opportunities to use your skills, knowledge, and resources to solve problems and contribute to society.",
    outcome: "A clearer path from personal growth to service",
  },
];

export default function ProgrammesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Hero section */}
      <section className="bg-emerald-950 px-4 py-16 text-white sm:px-6 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 sm:text-sm">
            Our programmes
          </p>

          <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Growth must be deliberate.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-emerald-100 sm:mt-6 sm:text-lg sm:leading-8">
            We help young people move beyond good intentions by developing
            practical skills, disciplined habits, accountability, and systems
            that support meaningful growth and lasting impact.
          </p>

          <Link
            href="/register"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-amber-400 px-7 py-4 text-center font-bold text-emerald-950 transition hover:bg-amber-300 sm:mt-9 sm:w-auto"
          >
            Get involved
          </Link>
        </div>
      </section>

      {/* Programme cards */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-800 sm:text-sm">
            Areas of growth
          </p>

          <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
            Practical growth for purposeful living.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600">
            Each programme focuses on an important area of personal
            development. Our goal is to help you translate what you learn
            into consistent action and measurable progress.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {programmes.map((programme) => (
            <article
              key={programme.number}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg sm:p-7"
            >
              <span className="text-sm font-bold tracking-widest text-amber-600">
                {programme.number}
              </span>

              <h3 className="mt-5 text-xl font-bold leading-snug text-emerald-950">
                {programme.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600">
                {programme.description}
              </p>

              <div className="mt-6 border-t border-slate-100 pt-5">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  Growth focus
                </p>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-700">
                  {programme.outcome}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Community call to action */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-emerald-50 px-5 py-10 text-center sm:px-10 sm:py-14 md:px-12 md:py-16">
          <h2 className="text-2xl font-bold leading-tight text-emerald-950 sm:text-3xl md:text-4xl">
            Your growth deserves intentional action.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">
            Take the next step toward becoming a person of impact. Connect
            with PURPOSELY and grow alongside people who value deliberate
            development.
          </p>

          <a
            href={WHATSAPP_CHANNEL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-emerald-900 px-7 py-4 text-center font-semibold text-white transition hover:bg-emerald-800 sm:w-auto"
          >
            Join our community
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-4 py-8 text-center text-xs leading-6 text-slate-500 sm:px-6 sm:text-sm">
        PURPOSELY — Building People of Impact for a Better Society.
        <p className="mt-2">Everything With Intentionality.</p>
      </footer>
    </main>
  );
}
