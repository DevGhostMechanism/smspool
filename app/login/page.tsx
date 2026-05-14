"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setError("");

    if (!username || !password) {
      setError("Username and password are required.");
      return;
    }

    setLoading(true);
    try {
      // const res = await fetch("/api/auth/login", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ username, password }),
      // });

      // const data = await res.json();

      // if (!res.ok) {
      //   setError(data.error ?? "Login failed.");
      //   return;
      // }
      

      router.push("/deposit");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#1e2023" }}
    >
      {/* Navbar */}
      <nav
        className="flex items-center justify-between px-5 py-0"
        style={{
          backgroundColor: "#16181b",
          height: "48px",
          borderBottom: "1px solid #2a2c30",
        }}
      >
        <Link href="/" className="flex items-center gap-2">
          <div
            className="flex items-center justify-center rounded"
            style={{
              backgroundColor: "#2563eb",
              width: "28px",
              height: "28px",
            }}
          >
            <span
              className="text-white font-bold"
              style={{ fontSize: "9px", lineHeight: 1 }}
            >
              SMS
            </span>
          </div>
          <span className="text-white font-medium text-sm">SMSPool</span>
        </Link>

        <div className="flex items-center" style={{ gap: "24px" }}>
          <button
            className="flex items-center gap-1.5"
            style={{ color: "#9ca3af" }}
          >
            <svg
              viewBox="0 0 20 15"
              width="18"
              height="13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="15" fill="#012169" />
              <path d="M0,0 L20,15 M20,0 L0,15" stroke="#fff" strokeWidth="3" />
              <path
                d="M0,0 L20,15 M20,0 L0,15"
                stroke="#C8102E"
                strokeWidth="2"
              />
              <path d="M10,0 V15 M0,7.5 H20" stroke="#fff" strokeWidth="5" />
              <path d="M10,0 V15 M0,7.5 H20" stroke="#C8102E" strokeWidth="3" />
            </svg>
            <span className="text-sm">English</span>
          </button>

          <Link
            href="/register"
            className="flex items-center gap-1.5"
            style={{ color: "#9ca3af" }}
          >
            <svg
              viewBox="0 0 24 24"
              width="15"
              height="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <span className="text-sm">Register</span>
          </Link>

          <Link
            href="/login"
            className="flex items-center gap-1.5"
            style={{ color: "#9ca3af" }}
          >
            <svg
              viewBox="0 0 24 24"
              width="15"
              height="15"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
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
            <Image
              src="/smspool-logo.svg"
              alt="SMSPool"
              width={145}
              height={59}
              priority
            />
          </div>

          <hr style={{ borderColor: "#3a3c42" }} className="mb-6" />

          {/* Heading */}
          <h1 className="text-white text-2xl font-bold text-center mb-1">
            Login
          </h1>
          <p className="text-center text-sm mb-5" style={{ color: "#9ca3af" }}>
            Your credentials
          </p>

          {/* Error message */}
          {error && (
            <div
              className="rounded-md px-3 py-2 mb-3 text-sm"
              style={{
                backgroundColor: "#3b1919",
                border: "1px solid #7f1d1d",
                color: "#fca5a5",
              }}
            >
              {error}
            </div>
          )}

          {/* Username / e-mail */}
          <div
            className="flex items-center gap-3 rounded-md px-3 mb-3"
            style={{
              backgroundColor: "#1e2023",
              border: "1px solid #3a3c42",
              height: "42px",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="#6b7280"
              strokeWidth="1.8"
              className="shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            <input
              type="text"
              placeholder="Username / e-mail"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className="flex-1 bg-transparent text-white text-sm outline-none"
              style={{ caretColor: "white" }}
            />
          </div>

          {/* Password */}
          <div
            className="flex items-center gap-3 rounded-md px-3 mb-4"
            style={{
              backgroundColor: "#1e2023",
              border: "1px solid #3a3c42",
              height: "42px",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="#6b7280"
              strokeWidth="1.8"
              className="shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            <input
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className="flex-1 bg-transparent text-white text-sm outline-none"
              style={{ caretColor: "white" }}
            />
          </div>

          {/* Sign in */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full text-white font-medium text-sm rounded-md transition-opacity hover:opacity-90 disabled:opacity-50 mb-3"
            style={{ backgroundColor: "#2563eb", height: "42px" }}
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>

          {/* Forgot password */}
          <div className="flex justify-end mb-5">
            <Link
              href="/forgot-password"
              className="text-sm"
              style={{ color: "#3b82f6" }}
            >
              Forgot password?
            </Link>
          </div>

          {/* Log in with other services */}
          <div className="flex items-center gap-3 mb-5">
            <hr className="flex-1" style={{ borderColor: "#3a3c42" }} />
            <span
              className="text-xs whitespace-nowrap"
              style={{ color: "#6b7280" }}
            >
              Log in with other services
            </span>
            <hr className="flex-1" style={{ borderColor: "#3a3c42" }} />
          </div>

          {/* Social buttons */}
          <div className="flex justify-center gap-4 mb-5">
            <button
              className="rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
              style={{
                backgroundColor: "#29a8e0",
                width: "44px",
                height: "44px",
              }}
              aria-label="Log in with Telegram"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </button>

            <button
              className="rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#111", width: "44px", height: "44px" }}
              aria-label="Log in with Apple"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
              </svg>
            </button>
          </div>

          {/* Don't have an account */}
          <div className="flex items-center gap-3 mb-4">
            <hr className="flex-1" style={{ borderColor: "#3a3c42" }} />
            <span
              className="text-xs whitespace-nowrap"
              style={{ color: "#6b7280" }}
            >
              Don&apos;t have an account?
            </span>
            <hr className="flex-1" style={{ borderColor: "#3a3c42" }} />
          </div>

          {/* Sign up */}
          <Link
            href="/register"
            className="w-full text-white font-medium text-sm rounded-md transition-opacity hover:opacity-80 mb-3 flex items-center justify-center"
            style={{ backgroundColor: "#383a40", height: "42px" }}
          >
            Sign up
          </Link>

          {/* Generate anonymous account */}
          <button
            className="w-full text-white font-medium text-sm rounded-md transition-opacity hover:opacity-90 mb-5"
            style={{ backgroundColor: "#2563eb", height: "42px" }}
          >
            Generate anonymous account
          </button>

          {/* Terms */}
          <p className="text-xs leading-5" style={{ color: "#6b7280" }}>
            By continuing, you&apos;re confirming that you&apos;ve read our{" "}
            <Link
              href="/terms"
              className="hover:underline"
              style={{ color: "#3b82f6" }}
            >
              Terms &amp; Conditions
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="hover:underline"
              style={{ color: "#3b82f6" }}
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="flex items-center justify-between px-6 py-4 text-xs"
        style={{
          backgroundColor: "#16181b",
          borderTop: "1px solid #2a2c30",
          color: "#6b7280",
        }}
      >
        <span>© 2026 SMSPool</span>

        <div className="flex items-center gap-5">
          <Link
            href="/privacy"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            style={{ color: "#6b7280" }}
          >
            <svg
              viewBox="0 0 24 24"
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
              />
            </svg>
            Privacy Policy
          </Link>

          <Link
            href="/support"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            style={{ color: "#6b7280" }}
          >
            <svg
              viewBox="0 0 24 24"
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
            Support
          </Link>

          <Link
            href="/knowledgebase"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            style={{ color: "#6b7280" }}
          >
            <svg
              viewBox="0 0 24 24"
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
            SMSPool Guides
          </Link>

          <Link
            href="/blog"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
            style={{ color: "#6b7280" }}
          >
            <svg
              viewBox="0 0 24 24"
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
              />
            </svg>
            News
          </Link>
        </div>
      </footer>
    </div>
  );
}
