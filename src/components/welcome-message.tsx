
"use client";

import { useEffect, useState } from "react";

type WelcomeMessageProps = {
  fullName: string;
};

export default function WelcomeMessage({
  fullName,
}: WelcomeMessageProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 60 * 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-emerald-950">
        Welcome, {fullName}!
      </h1>

      <p className="mt-2 text-slate-600">
        Building people of impact through intentional growth.
      </p>
    </div>
  );
}
