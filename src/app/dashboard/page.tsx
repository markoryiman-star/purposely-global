
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "@/components/logout-button";
import WelcomeMessage from "@/components/welcome-message";
import Image from "next/image";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/login");
  }

  const fullName =
    user.user_metadata?.full_name || user.email || "Member";
    const email = user.email ?? "No email available";
    
    const joinedDate = new Date(user.created_at).toLocaleDateString(
    "en-NG",
    {
        day: "numeric",
        month: "long",
        year: "numeric",
    }
    );

  return (
    <main className="min-h-screen bg-slate-50">

    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
     <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

     {/* PURPOSELY Global branding */}
     <Link
      href="/"
      aria-label="PURPOSELY Global homepage"
      className="flex min-w-0 shrink-0 items-center gap-3"
      >
      <Image
        src="/purposely-logo.png"
        alt="PURPOSELY logo"
        width={56}
        height={56}
        priority
        className="h-12 w-12 shrink-0 object-contain"
      />

      <div className="flex flex-col justify-center">
        <span className="text-base font-extrabold leading-tight tracking-wide text-emerald-950 sm:text-lg">
          PURPOSELY
        </span>

        <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500 sm:text-xs">
          Global
        </span>
      </div>
    </Link>

    {/* Sign out action */}
    <div className="ml-4 shrink-0">
      <LogoutButton />
    </div>

    </div>
    </header>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <p className="font-medium text-emerald-800">
          YOUR GROWTH JOURNEY
        </p>
        
        <WelcomeMessage fullName={fullName} />
   
        <div className="mt-8 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-emerald-100 text-emerald-800">
            <span className="text-3xl font-semibold">
            {fullName.charAt(0).toUpperCase()}
            </span>
        </div>

        <div className="min-w-0 flex-1">
            <h2 className="truncate text-lg font-semibold text-slate-900">
            {fullName}
            </h2>
            <p className="mt-1 text-sm text-slate-500">
            PURPOSELY Global member
            </p>
            <Link
            href="/profile"
            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-emerald-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-900"
            >
            View profile
            <span aria-hidden="true"></span>
            </Link>
        </div>
        </div>


        <p className="mt-3 max-w-2xl text-slate-600">
          This is your personal space to set goals, build intentional
          habits, stay accountable, and measure your growth.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">
              My growth goals
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Define the person you want to become and the goals
              you want to achieve.
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">
              Daily accountability
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Build consistency through daily check-ins and
              intentional habits.
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-slate-900">
              My programmes
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Keep track of the PURPOSELY programmes you participate in.
            </p>
          </article>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Your personal growth tools will be developed in the next
          stages of the platform.
        </p>
      </section>
    </main>
  );
}
