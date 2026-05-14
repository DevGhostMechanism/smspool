"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [optionalOpen, setOptionalOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    console.log("first")
    setError("");

    if (!agreed) {
      setError("You must agree to the Terms & Conditions to register.");
      return;
    }

    if (password !== repeatPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      // const res = await fetch("/api/auth/register", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ username, password, email: email || undefined }),
      // });

      // const data = await res.json();

      // if (!res.ok) {
      //   setError(data.error ?? "Registration failed.");
      //   return;
      // }

      router.push("/login");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#1e2023" }}>

      {/* Navbar */}
      <nav
        className="flex items-center justify-between px-5 py-0"
        style={{ backgroundColor: "#16181b", height: "48px", borderBottom: "1px solid #2a2c30" }}
      >
        <Link href="/" className="flex items-center gap-2">
          <div
            className="flex items-center justify-center rounded"
            style={{ backgroundColor: "#2563eb", width: "28px", height: "28px" }}
          >
            <span className="text-white font-bold" style={{ fontSize: "9px", lineHeight: 1 }}>SMS</span>
          </div>
          <span className="text-white font-medium text-sm">SMSPool</span>
        </Link>

        <div className="flex items-center" style={{ gap: "24px" }}>
          <button className="flex items-center gap-1.5" style={{ color: "#9ca3af" }}>
            <svg viewBox="0 0 20 15" width="18" height="13" xmlns="http://www.w3.org/2000/svg">
              <rect width="20" height="15" fill="#012169" />
              <path d="M0,0 L20,15 M20,0 L0,15" stroke="#fff" strokeWidth="3" />
              <path d="M0,0 L20,15 M20,0 L0,15" stroke="#C8102E" strokeWidth="2" />
              <path d="M10,0 V15 M0,7.5 H20" stroke="#fff" strokeWidth="5" />
              <path d="M10,0 V15 M0,7.5 H20" stroke="#C8102E" strokeWidth="3" />
            </svg>
            <span className="text-sm">English</span>
          </button>

          <Link href="/register" className="flex items-center gap-1.5" style={{ color: "#9ca3af" }}>
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <span className="text-sm">Register</span>
          </Link>

          <Link href="/login" className="flex items-center gap-1.5" style={{ color: "#9ca3af" }}>
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <span className="text-sm">Login</span>
          </Link>
        </div>
      </nav>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div
          className="w-full rounded-xl p-8"
          style={{ backgroundColor: "#2a2c30", maxWidth: "420px" }}
        >
          {/* Logo */}
          <div className="flex justify-center mb-5">
            <Image src="/smspool-logo.svg" alt="SMSPool" width={145} height={59} priority />
          </div>

          <hr style={{ borderColor: "#3a3c42" }} className="mb-6" />

          {/* Heading */}
          <h1 className="text-white text-2xl font-bold text-center mb-5">Register</h1>

          {/* Generate anonymous account */}
          <button
            className="w-full text-white font-medium text-sm rounded-md transition-opacity hover:opacity-80 mb-5"
            style={{ backgroundColor: "#383a40", height: "42px" }}
          >
            Generate anonymous account
          </button>

          {/* Your credentials divider */}
          <div className="flex items-center gap-3 mb-3">
            <hr className="flex-1" style={{ borderColor: "#3a3c42" }} />
            <span className="text-xs whitespace-nowrap" style={{ color: "#6b7280" }}>Your credentials</span>
            <hr className="flex-1" style={{ borderColor: "#3a3c42" }} />
          </div>

          {/* Error message */}
          {error && (
            <div
              className="rounded-md px-3 py-2 mb-3 text-sm"
              style={{ backgroundColor: "#3b1919", border: "1px solid #7f1d1d", color: "#fca5a5" }}
            >
              {error}
            </div>
          )}

          {/* Username */}
          <div
            className="flex items-center gap-3 rounded-md px-3 mb-3"
            style={{ backgroundColor: "#1e2023", border: "1px solid #3a3c42", height: "42px" }}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#6b7280" strokeWidth="1.8" className="shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <input
              type="text"
              placeholder="Username"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="flex-1 bg-transparent text-white text-sm outline-none placeholder-gray-500"
              style={{ caretColor: "white" }}
            />
          </div>

          {/* Password */}
          <div
            className="flex items-center gap-3 rounded-md px-3 mb-3"
            style={{ backgroundColor: "#1e2023", border: "1px solid #3a3c42", height: "42px" }}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#6b7280" strokeWidth="1.8" className="shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            <input
              type="password"
              placeholder="Password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 bg-transparent text-white text-sm outline-none placeholder-gray-500"
              style={{ caretColor: "white" }}
            />
          </div>

          {/* Repeat Password */}
          <div
            className="flex items-center gap-3 rounded-md px-3 mb-4"
            style={{ backgroundColor: "#1e2023", border: "1px solid #3a3c42", height: "42px" }}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#6b7280" strokeWidth="1.8" className="shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            <input
              type="password"
              placeholder="Repeat Password"
              autoComplete="new-password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              className="flex-1 bg-transparent text-white text-sm outline-none placeholder-gray-500"
              style={{ caretColor: "white" }}
            />
          </div>

          {/* Optional fields */}
          <button
            className="flex items-center gap-1.5 mb-4 transition-opacity hover:opacity-80"
            style={{ color: "#6b7280" }}
            onClick={() => setOptionalOpen(!optionalOpen)}
          >
            <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ transform: optionalOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            <span className="text-sm">Optional fields</span>
          </button>

          {optionalOpen && (
            <div
              className="flex items-center gap-3 rounded-md px-3 mb-4"
              style={{ backgroundColor: "#1e2023", border: "1px solid #3a3c42", height: "42px" }}
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#6b7280" strokeWidth="1.8" className="shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <input
                type="email"
                placeholder="E-mail address"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent text-white text-sm outline-none placeholder-gray-500"
                style={{ caretColor: "white" }}
              />
            </div>
          )}

          {/* Additions divider */}
          <div className="flex items-center gap-3 mb-4">
            <hr className="flex-1" style={{ borderColor: "#3a3c42" }} />
            <span className="text-xs whitespace-nowrap" style={{ color: "#6b7280" }}>Additions</span>
            <hr className="flex-1" style={{ borderColor: "#3a3c42" }} />
          </div>

          {/* Terms checkbox */}
          <div className="flex items-start gap-3 mb-4">
            <div className="relative shrink-0 mt-0.5" style={{ width: "16px", height: "16px" }}>
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
              />
              <div
                className="w-full h-full rounded flex items-center justify-center"
                style={{
                  border: agreed ? "none" : "2px solid #4b5563",
                  backgroundColor: agreed ? "#2563eb" : "transparent",
                }}
              >
                {agreed && (
                  <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="white" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                )}
              </div>
            </div>
            <p className="text-sm leading-5" style={{ color: "#9ca3af" }}>
              By continuing, you&apos;re confirming that you&apos;ve read our{" "}
              <Link href="/terms" className="hover:underline" style={{ color: "#3b82f6" }}>
                Terms &amp; Conditions
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="hover:underline" style={{ color: "#3b82f6" }}>
                Privacy Policy
              </Link>
            </p>
          </div>

          {/* Register button */}
          <button
            onClick={handleRegister}
            disabled={loading}
            className="w-full text-white font-medium text-sm rounded-md transition-opacity hover:opacity-90 disabled:opacity-50"
            style={{ backgroundColor: "#2563eb", height: "42px" }}
          >
            {loading ? "Registering…" : "Register"}
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="flex items-center justify-between px-6 py-4 text-xs"
        style={{ backgroundColor: "#16181b", borderTop: "1px solid #2a2c30", color: "#6b7280" }}
      >
        <span>© 2026 SMSPool</span>

        <div className="flex items-center gap-5">
          <Link href="/privacy" className="flex items-center gap-1.5 hover:text-white transition-colors" style={{ color: "#6b7280" }}>
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
            Privacy Policy
          </Link>

          <Link href="/support" className="flex items-center gap-1.5 hover:text-white transition-colors" style={{ color: "#6b7280" }}>
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
            Support
          </Link>

          <Link href="/knowledgebase" className="flex items-center gap-1.5 hover:text-white transition-colors" style={{ color: "#6b7280" }}>
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
            SMSPool Guides
          </Link>

          <Link href="/blog" className="flex items-center gap-1.5 hover:text-white transition-colors" style={{ color: "#6b7280" }}>
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
            </svg>
            News
          </Link>
        </div>
      </footer>
    </div>
  );
}
