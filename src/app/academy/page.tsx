
import Link from "next/link";

const courses = [
  {
    category: "FREE LEARNING",
    title: "Building intentional habits",
    description:
      "Learn how to approach daily habits deliberately, create routines, and take consistent steps toward personal growth.",
    level: "Beginner",
    style: "border-emerald-200 bg-emerald-50 text-emerald-900",
  },
  {
    category: "FREE LEARNING",
    title: "Goal setting and personal growth",
    description:
      "Understand how to set meaningful goals, break them into practical actions, and review your progress.",
    level: "Beginner",
    style: "border-emerald-200 bg-emerald-50 text-emerald-900",
  },
  {
    category: "PAID LEARNING",
    title: "Leadership and communication",
    description:
      "Explore practical approaches to self-leadership, effective communication, responsibility, and teamwork.",
    level: "Developing",
    style: "border-amber-200 bg-amber-50 text-amber-900",
  },
];

export default function AcademyPage() {
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
            PURPOSELY Learning Academy
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Learn intentionally. Grow consistently. Create impact.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-emerald-100">
            A learning space designed to help young people develop practical
            knowledge, strengthen their skills, build disciplined habits,
            and apply what they learn to everyday life.
          </p>

          <a
            href="#courses"
            className="mt-9 inline-flex rounded-full bg-amber-400 px-7 py-3 font-bold text-emerald-950 transition hover:bg-amber-300"
          >
            Explore learning opportunities
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 p-6">
            <div className="text-2xl">📚</div>
            <h2 className="mt-4 text-xl font-bold text-emerald-950">
              Practical learning
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Focus on useful knowledge that can be applied beyond the
              classroom and into everyday life.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 p-6">
            <div className="text-2xl">🎯</div>
            <h2 className="mt-4 text-xl font-bold text-emerald-950">
              Deliberate development
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Learn with clear objectives and turn new knowledge into
              intentional action.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 p-6">
            <div className="text-2xl">📈</div>
            <h2 className="mt-4 text-xl font-bold text-emerald-950">
              Measurable progress
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Build toward a future learning experience with progress
              tracking, practice, and accountability.
            </p>
          </article>
        </div>
      </section>

      <section id="courses" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">
              Explore the Academy
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Learning opportunities for your growth.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              The following are sample course concepts showing how free
              and paid learning could be presented. They are not yet
              published courses.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <article
                key={course.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span
                  className={`w-fit rounded-full border px-3 py-1 text-xs font-bold ${course.style}`}
                >
                  {course.category}
                </span>

                <h3 className="mt-5 text-xl font-bold text-emerald-950">
                  {course.title}
                </h3>

                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {course.description}
                </p>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <p className="text-sm text-slate-500">
                    Level: {course.level}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-emerald-800">
                    Course details coming soon
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-emerald-950 px-7 py-12 text-center text-white sm:px-12 sm:py-16">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-400">
            Everything With Intentionality.
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Your growth journey starts with a decision.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-emerald-100">
            Connect with PURPOSELY and be part of a community committed
            to intentional growth, accountability, and meaningful impact.
          </p>

          <Link
            href="/#get-involved"
            className="mt-8 inline-flex rounded-full bg-amber-400 px-7 py-3 font-bold text-emerald-950 transition hover:bg-amber-300"
          >
            Join the community
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500">
        PURPOSELY — Building People of Impact for a Better Society.
        <p className="mt-2">Everything With Intentionality.</p>
      </footer>
    </main>
  );
}
