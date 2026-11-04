
"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleResetRequest(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setMessage("");
    setError("");
    setLoading(true);

    try {
      const supabase = createClient();

      const { error: resetError } =
        await supabase.auth.resetPasswordForEmail(
          email.trim(),
          {
            redirectTo: `${window.location.origin}/reset-password`,
          }
        );

      if (resetError) {
        setError(
          "We couldn't process your request. Please try again."
        );
        return;
      }

      setMessage(
        "If an account exists with that email, you will receive a password recovery link shortly. Please check your inbox."
      );
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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
          Forgot your password?
        </h1>

        <p className="mt-2 text-slate-600">
          Enter the email address associated with your account.
          We'll send you a link to reset your password.
        </p>

        <form
          onSubmit={handleResetRequest}
          className="mt-8 space-y-5"
        >
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-slate-700"
            >
              Email address
            </label>

            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
              placeholder="Enter your registered email"
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
            {loading ? "Sending..." : "Send reset link"}
          </button>
        </form>
      </div>
    </main>
  );
}
