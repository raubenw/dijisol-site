"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const COOKIE_KEY = "dijisol_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(COOKIE_KEY);
    if (!saved) {
      setVisible(true);
    }
  }, []);

  const setConsent = (value: "accepted" | "declined") => {
    window.localStorage.setItem(COOKIE_KEY, value);
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-xl z-[60] rounded-xl border border-gray-200 bg-white p-4 shadow-xl">
      <p className="text-sm text-gray-700 leading-relaxed mb-3">
        We use cookies to improve site functionality and understand website
        usage. You can accept or decline non-essential cookies. Read our{" "}
        <Link href="/policy/cookies" className="text-primary hover:underline">
          Cookie Policy
        </Link>
        .
      </p>
      <div className="flex gap-2 justify-end">
        <button
          onClick={() => setConsent("declined")}
          className="px-3 py-2 text-sm font-medium border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          type="button"
        >
          Decline
        </button>
        <button
          onClick={() => setConsent("accepted")}
          className="px-3 py-2 text-sm font-semibold rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors"
          type="button"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
