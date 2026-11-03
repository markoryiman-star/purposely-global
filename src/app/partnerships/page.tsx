
import Navbar from "@/components/navbar";
import Link from "next/link";

const partnershipOpportunities = [
  {
    number: "01",
    title: "Programme collaboration",
    description:
      "Collaborate with PURPOSELY to organise growth initiatives, workshops, leadership development programmes, and other activities that equip people to make meaningful contributions to society.",
  },
  {
    number: "02",
    title: "Learning and mentorship",
    description:
      "Share knowledge, professional expertise, learning resources, and mentorship opportunities that help young people develop practical skills and grow intentionally.",
  },
  {
    number: "03",
    title: "Community development",
    description:
      "Work with us to create initiatives that encourage discipline, accountability, personal development, and positive social impact.",
  },
];

const sponsorshipOpportunities = [
  {
    title: "Financial support",
    description:
      "Help fund programmes, learning initiatives, and activities that expand access to personal development opportunities.",
  },
  {
    title: "Learning resources and equipment",
    description:
      "Support access to educational materials, digital tools, technology, and other resources that facilitate learning and growth.",
  },
  {
    title: "Professional and logistical support",
    description:
      "Contribute expertise, venues, publicity, services, or other practical resources that help initiatives succeed.",
  },
];

export default function PartnershipsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Hero section */}
      <section className="bg-emerald-950 px-4 py-16 text-white sm:px-6 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 sm:text-sm">
            Partnership and sponsorship
          </p>

          <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Let us build people of impact together.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-emerald-100 sm:mt-6 sm:text-lg sm:leading-8">
            PURPOSELY is committed to helping people grow intentionally,
            develop their potential, and contribute meaningfully to society.
            We welcome partnerships and support from individuals,
            organisations, and institutions that share this vision.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
            <a
              href="#become-a-partner"
              className="inline-flex w-full items-center justify-center rounded-full bg-amber-400 px-7 py-4 text-center font-bold text-emerald-950 transition hover:bg-amber-300 sm:w-auto"
            >
              Become a partner
            </a>

            <a
              href="#sponsor-an-initiative"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/40 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Sponsor an initiative
            </a>
          </div>
        </div>
      </section>

      {/* Why partner with us */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-800 sm:text-sm">
            Why work with us?
          </p>

          <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
            Growth is more powerful when we work together.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:mt-6 sm:leading-8">
            Building people of impact requires more than individual effort.
            It requires knowledge, resources, opportunities, and people
            willing to contribute toward a shared vision. Through
            collaboration, we can create more opportunities for intentional
            growth and meaningful service to society.
          </p>
        </div>
      </section>

      {/* Partnership opportunities */}
      <section
        id="become-a-partner"
        className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-800 sm:text-sm">
            Partnership opportunities
          </p>

          <h2 className="mt-4 max-w-3xl text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
            Bring your expertise, ideas, and networks.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            We welcome meaningful collaborations with people and
            organisations interested in personal development, education,
            leadership, and community impact.
          </p>

          <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {partnershipOpportunities.map((opportunity) => (
              <article
                key={opportunity.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-7"
              >
                <span className="text-sm font-bold tracking-widest text-amber-600">
                  {opportunity.number}
                </span>

                <h3 className="mt-4 text-xl font-bold leading-snug text-emerald-950">
                  {opportunity.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  {opportunity.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship opportunities */}
      <section
        id="sponsor-an-initiative"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:py-24"
      >
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-800 sm:text-sm">
            Sponsorship opportunities
          </p>

          <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
            Help make meaningful growth opportunities possible.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600">
            Your support can help us reach more people, improve learning
            experiences, and deliver initiatives that encourage intentional
            growth and positive impact.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {sponsorshipOpportunities.map((opportunity) => (
            <article
              key={opportunity.title}
              className="rounded-2xl border border-slate-200 p-6 sm:p-7"
            >
              <h3 className="text-xl font-bold leading-snug text-emerald-950">
                {opportunity.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600">
                {opportunity.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Contact call to action */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-emerald-950 px-5 py-10 text-center text-white sm:px-10 sm:py-14 md:px-12 md:py-16">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400 sm:text-sm">
            Let us connect
          </p>

          <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
            Interested in working with PURPOSELY?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-emerald-100">
            We would welcome a conversation about how your skills,
            organisation, resources, or ideas could support our vision of
            building people of impact for a better society.
          </p>

          <p className="mt-6 text-sm leading-6 text-emerald-100">
            Our partnership enquiry form and contact details will be added
            here in the next stage.
          </p>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-4 py-8 text-center text-xs leading-6 text-slate-500 sm:px-6 sm:text-sm">
        PURPOSELY — Building People of Impact for a Better Society.
        <p className="mt-2">Everything With Intentionality.</p>
      </footer>
    </main>
  );
}
