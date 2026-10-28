
import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function ProfilePage() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/login");
  }

  const fullName =
    user.user_metadata?.full_name || "Member";

  const email = user.email ?? "No email available";

  const joinedDate = new Date(
    user.created_at
  ).toLocaleDateString("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/dashboard"
          className="text-sm font-semibold text-emerald-800"
        >
          ← Back to dashboard
        </Link>

        <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-col items-center border-b border-slate-200 pb-6">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
              <span className="text-4xl font-semibold">
                {fullName.charAt(0).toUpperCase()}
              </span>
            </div>

            <h1 className="mt-4 text-2xl font-bold text-emerald-950">
              {fullName}
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              PURPOSELY Global member
            </p>
          </div>

          <div className="mt-6 space-y-5">
            <div>
              <p className="text-sm text-slate-500">
                Full name
              </p>
              <p className="mt-1 font-medium text-slate-900">
                {fullName}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Email address
              </p>
              <p className="mt-1 break-words font-medium text-slate-900">
                {email}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Member since
              </p>
              <p className="mt-1 font-medium text-slate-900">
                {joinedDate}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
