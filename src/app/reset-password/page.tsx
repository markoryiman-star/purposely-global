
"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);
  const [validSession, setValidSession] = useState(false);

  useEffect(() => {
    async function checkRecoverySession() {
      const supabase = createClient();

      const { data, error: sessionError } =
        await supabase.auth.getSession();

      if (sessionError || !data.session) {
        setError(
          "This password reset link is invalid or has expired. Please request a new one."
        );
        setValidSession(false);
      } else {
        setValidSession(true);
      }

      setCheckingSession(false);
    }

    checkRecoverySession();
  }, []);

  async function handlePasswordReset(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError("");
    setMessage("");

    if (password.length < 8) {
      setError("Your password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Your passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const supabase = createClient();

      const { error: updateError } =
        await supabase.auth.updateUser({
          password,
        });

      if (updateError) {
        setError(
          "We couldn't update your password. Please try again."
        );
        return;
      }

      setMessage(
        "Your password has been updated successfully. Redirecting you to login..."
      );

      await supabase.auth.signOut();

      setTimeout(() => {
        router.push("/login");
        router.refresh();
      }, 2000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (checkingSession) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <p className="text-slate-600">
          Verifying your password reset link...
        </p>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <Link
          href="/login"
          className="text-sm font-semibold text-emerald-800 hover:underline"
        >
          ← Back to login
        </Link>

        <h1 className="mt-6 text-3xl font-bold text-emerald-950">
          Reset your password
        </h1>

        <p className="mt-2 text-slate-600">
          Create a new password for your PURPOSELY account.
        </p>

        {!validSession ? (
          <div className="mt-6 space-y-4">
            <p
              role="alert"
              className="rounded-lg bg-red-50 p-3 text-sm text-red-700"
            >
              {error}
            </p>

            <Link
              href="/forgot-password"
              className="block text-center font-semibold text-emerald-800 hover:underline"
            >
              Request another reset link
            </Link>
          </div>
        ) : (
          <form
            onSubmit={handlePasswordReset}
            className="mt-8 space-y-5"
          >
            <div>
              <label
                htmlFor="password"
                className="mb-1 block text-sm font-medium text-slate-700"
              >
                New password
              </label>

              <input
                id="password"
                type="password"
                autoComplete="new-password"
                required
                minLength={8}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
                placeholder="Enter your new password"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-1 block text-sm font-medium text-slate-700"
              >
                Confirm new password
              </label>

              <input
                id="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                minLength={8}
                value={confirmPassword}
                onChange={(event) =>
                  setConfirmPassword(event.target.value)
                }
                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
                placeholder="Confirm your new password"
              />
            </div>

            {error && (
              <p
                role="alert"
                className="rounded-lg bg-red-50 p-3 text-sm text-red-700"
              >
                {error}
              </p>
            )}

            {message && (
              <p
                role="status"
                className="rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800"
              >
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-emerald-800 px-4 py-3 font-semibold text-white transition hover:bg-emerald-900 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Updating password..." : "Update password"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
