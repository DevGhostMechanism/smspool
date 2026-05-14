"use client";

import Image from "next/image";
import {
  Home,
  ShoppingCart,
  RefreshCw,
  CreditCard,
  Users,
  Headphones,
  Mail,
  Share2,
  Smartphone,
  Shield,
  Search,
  Ticket,
  List,
  BookOpen,
  Code,
  HelpCircle,
  Phone,
  Settings,
  Bell,
  ChevronDown,
  Menu,
} from "lucide-react";

/* ─── Sidebar nav data ───────────────────────────────────────────── */
const navSections = [
  {
    label: "QUICK MENU",
    items: [{ icon: Phone, label: "Quick Order" }],
  },
  {
    label: "MAIN",
    items: [
      { icon: Home, label: "Dashboard", active: true },
      { icon: ShoppingCart, label: "Order" },
      { icon: RefreshCw, label: "Long-term order" },
    ],
  },
  {
    label: "BALANCE",
    items: [{ icon: CreditCard, label: "Deposit" }],
  },
  {
    label: "BUSINESS",
    items: [{ icon: Users, label: "Sub-accounts" }],
  },
  {
    label: "CONTACT",
    items: [
      { icon: Headphones, label: "Support" },
      { icon: Mail, label: "Tickets" },
    ],
  },
  {
    label: "AFFILIATES",
    items: [{ icon: Share2, label: "My Referrals" }],
  },
  {
    label: "OTHER SERVICES",
    items: [
      { icon: Smartphone, label: "Data-only eSIM" },
      { icon: Shield, label: "Residential Proxy" },
      { icon: Search, label: "Free Carrier Lookup" },
    ],
  },
  {
    label: "TOOLS",
    items: [
      { icon: Ticket, label: "Retrieve Ticketmaster Hits" },
      { icon: List, label: "Request Service Whitelist" },
    ],
  },
  {
    label: "INSTRUCTIONS",
    items: [
      { icon: BookOpen, label: "SMSPool Guides" },
      { icon: Code, label: "SMSPool API" },
      { icon: HelpCircle, label: "How to order an SMS" },
    ],
  },
];

/* ─── Tiny UK flag ───────────────────────────────────────────────── */
function UKFlag() {
  return (
    <svg viewBox="0 0 20 15" className="w-5 h-3.5 shrink-0" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="15" fill="#012169" />
      <path d="M0,0 L20,15 M20,0 L0,15" stroke="#fff" strokeWidth="3" />
      <path d="M0,0 L20,15 M20,0 L0,15" stroke="#C8102E" strokeWidth="2" />
      <path d="M10,0 V15 M0,7.5 H20" stroke="#fff" strokeWidth="5" />
      <path d="M10,0 V15 M0,7.5 H20" stroke="#C8102E" strokeWidth="3" />
    </svg>
  );
}

/* ─── Usage graph (SVG) ──────────────────────────────────────────── */
const chartDates = [
  "04-10","04-13","04-16","04-19","04-22","04-25","04-28",
  "05-01","05-04","05-07",
];

// All flat at 0 except last two points spike for deposited/spent/verifications
const depositedPts = [0,0,0,0,0,0,0,0,3.8,4.2];
const spentPts     = [0,0,0,0,0,0,0,0,3.5,4.0];
const verifyPts    = [0,0,0,0,0,0,0,0,0.3,4.5];

const W = 800, H = 220, PAD_L = 30, PAD_R = 20, PAD_T = 20, PAD_B = 30;
const chartW = W - PAD_L - PAD_R;
const chartH = H - PAD_T - PAD_B;
const maxVal = 5;

function toX(i: number) { return PAD_L + (i / (chartDates.length - 1)) * chartW; }
function toY(v: number) { return PAD_T + chartH - (v / maxVal) * chartH; }

function polyline(pts: number[]) {
  return pts.map((v, i) => `${toX(i)},${toY(v)}`).join(" ");
}

function UsageGraph() {
  const gridLines = [0, 1, 2, 3, 4, 5];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" preserveAspectRatio="none">
      {/* Grid lines */}
      {gridLines.map((g) => (
        <g key={g}>
          <line
            x1={PAD_L} y1={toY(g)} x2={W - PAD_R} y2={toY(g)}
            stroke="#2e3347" strokeWidth="1"
          />
          <text x={PAD_L - 6} y={toY(g) + 4} fill="#6b7280" fontSize="10" textAnchor="end">
            {g}
          </text>
        </g>
      ))}

      {/* X-axis labels */}
      {chartDates.map((d, i) => (
        <text
          key={d}
          x={toX(i)}
          y={H - 6}
          fill="#6b7280"
          fontSize="9"
          textAnchor="middle"
        >
          2026-{d}
        </text>
      ))}

      {/* Deposited line (blue) */}
      <polyline
        points={polyline(depositedPts)}
        fill="none"
        stroke="#5b8dee"
        strokeWidth="2"
      />
      {depositedPts.map((v, i) => (
        <circle key={i} cx={toX(i)} cy={toY(v)} r="3" fill="#5b8dee" />
      ))}

      {/* Spent line (green) */}
      <polyline
        points={polyline(spentPts)}
        fill="none"
        stroke="#4caf82"
        strokeWidth="2"
      />
      {spentPts.map((v, i) => (
        <circle key={i} cx={toX(i)} cy={toY(v)} r="3" fill="#4caf82" />
      ))}

      {/* Verifications line (yellow) */}
      <polyline
        points={polyline(verifyPts)}
        fill="none"
        stroke="#f5c842"
        strokeWidth="2"
      />
      {verifyPts.map((v, i) => (
        <circle key={i} cx={toX(i)} cy={toY(v)} r="3" fill="#f5c842" />
      ))}
    </svg>
  );
}

/* ─── News data ──────────────────────────────────────────────────── */
const news = [
  {
    title: "You can now export your SMSPool account data directly from your dashboard 📦",
    date: "2026-04-21 15:47:48",
    body: "No need to contact support, just download a full copy of your profile, orders, and payment history instantly.",
    link: "smspool.net/my/settings",
  },
  {
    title: "Stripe fees are now passed to the customer",
    date: "2026-04-10 15:23:05",
    body: "We've been covering the Stripe fees since our launch. Sadly, this is no longer sustainable for lower deposit payments, as Stripe charges a flat 0.25 euro fee per payment (nearly 10% on $3). We've decided to cover part of the fee and pass some of it to our customer.\n\nYou'll get a transparent overview of the fees charged and the balance credited to your account. Please keep in mind that we waive all fees for all deposits above $1000.00",
    note: "This only affects flat payments, and does not affect Crypto payments in any way.",
    link: null,
  },
  {
    title: "🚀 Big Update from ProxyApp (by SMSPool)!",
    date: "2026-04-02 14:10:00",
    body: "We've massively dropped our prices and simplified all packages, easier, clearer, and better than ever.\n\n💡 New plans start at just $3, with up to 1TB options for power users.",
    link: "https://proxyapp.net",
  },
  {
    title: "Update regarding WhatsApp Service Applications",
    date: "2026-03-30 13:34:52",
    body: "Please be advised that we are temporarily pausing new applications for our WhatsApp service at this time. We apologize for any inconvenience this may cause and will update you when service reopens. We appreciate your understanding and continued support.",
    link: null,
  },
];

/* ─── Page ───────────────────────────────────────────────────────── */
export default function Homepage() {
  return (
    <div className="flex h-screen overflow-hidden" style={{ background: "#181c28", color: "#c9cdd8" }}>

      {/* ── Sidebar ────────────────────────────────────────────────── */}
      <aside
        className="flex flex-col shrink-0 overflow-y-auto"
        style={{ width: 200, background: "#1e2235", borderRight: "1px solid #272b3d" }}
      >
        {/* Logo row */}
        <div className="flex items-center justify-between px-4 py-4 border-b" style={{ borderColor: "#272b3d" }}>
          <div className="flex items-center gap-2">
            <div
              className="flex items-center justify-center rounded"
              style={{ width: 32, height: 32, background: "#f5c842" }}
            >
              <span className="text-xs font-black" style={{ color: "#181c28" }}>SMS</span>
            </div>
            <span className="font-bold text-sm" style={{ color: "#e2e5ef" }}>SMSPool</span>
          </div>
          <button className="text-gray-500 hover:text-gray-300">
            <Menu size={16} />
          </button>
        </div>

        {/* User info */}
        <div className="px-4 py-3 border-b text-xs" style={{ borderColor: "#272b3d" }}>
          <div style={{ color: "#8a8fa8" }}>Username</div>
          <div className="font-semibold" style={{ color: "#e2e5ef" }}>Ahker007</div>
          <div className="mt-1" style={{ color: "#8a8fa8" }}>Balance</div>
          <div className="font-semibold" style={{ color: "#e2e5ef" }}>$3.71</div>
        </div>

        {/* Nav sections */}
        <nav className="flex-1 py-2">
          {navSections.map((section) => (
            <div key={section.label} className="mb-1">
              <div
                className="px-4 pt-3 pb-1 text-xs font-semibold tracking-wider"
                style={{ color: "#565c73" }}
              >
                {section.label}
              </div>
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href="#"
                    className="flex items-center gap-2.5 px-4 py-1.5 text-sm rounded mx-1 transition-colors"
                    style={
                      item.active
                        ? { background: "#272b3d", color: "#e2e5ef" }
                        : { color: "#8a8fa8" }
                    }
                  >
                    <Icon size={14} className="shrink-0" />
                    <span className="leading-tight">{item.label}</span>
                  </a>
                );
              })}
            </div>
          ))}
        </nav>
      </aside>

      {/* ── Main area ──────────────────────────────────────────────── */}
      <div className="flex flex-col flex-1 overflow-hidden">

        {/* Top bar */}
        <header
          className="flex items-center justify-end gap-3 px-6 py-3 shrink-0"
          style={{ background: "#1e2235", borderBottom: "1px solid #272b3d" }}
        >
          {/* Language */}
          <button className="flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded border"
            style={{ borderColor: "#343849", color: "#8a8fa8" }}>
            <UKFlag />
            <span>English</span>
            <ChevronDown size={12} />
          </button>

          {/* Settings */}
          <button className="text-gray-500 hover:text-gray-300">
            <Settings size={17} />
          </button>

          {/* Notifications */}
          <button className="relative text-gray-500 hover:text-gray-300">
            <Bell size={17} />
            <span
              className="absolute -top-1.5 -right-1.5 flex items-center justify-center rounded-full text-xs font-bold"
              style={{ width: 16, height: 16, background: "#f5c842", color: "#181c28", fontSize: 10 }}
            >
              4
            </span>
          </button>

          {/* User */}
          <button className="flex items-center gap-1.5 text-sm" style={{ color: "#c9cdd8" }}>
            <span>Ahker007</span>
            <ChevronDown size={13} />
          </button>
        </header>

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto p-6 space-y-5">

          {/* Page title */}
          <h1 className="text-lg font-semibold" style={{ color: "#e2e5ef" }}>
            <span style={{ color: "#f5c842" }}>Home</span>
            <span style={{ color: "#565c73" }}> - Dashboard</span>
          </h1>

          {/* Order statistics */}
          <section
            className="rounded-lg p-5"
            style={{ background: "#1e2235", border: "1px solid #272b3d" }}
          >
            <h2 className="text-sm font-semibold mb-4" style={{ color: "#e2e5ef" }}>
              Order statistics
            </h2>
            <div className="grid grid-cols-3 divide-x" style={{ borderColor: "#272b3d" }}>
              {[
                { value: "$8.40", label: "Deposited" },
                { value: "$4.69", label: "Spent" },
                { value: "1",     label: "Verifications" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center py-3">
                  <span className="text-2xl font-bold" style={{ color: "#e2e5ef" }}>
                    {stat.value}
                  </span>
                  <span className="text-xs mt-1" style={{ color: "#6b7280" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Usage graph */}
          <section
            className="rounded-lg p-5"
            style={{ background: "#1e2235", border: "1px solid #272b3d" }}
          >
            <h2 className="text-sm font-semibold mb-3" style={{ color: "#e2e5ef" }}>
              Usage graph
            </h2>

            {/* Legend */}
            <div className="flex items-center gap-5 mb-4">
              {[
                { color: "#5b8dee", label: "Deposited" },
                { color: "#4caf82", label: "Spent" },
                { color: "#f5c842", label: "Verifications" },
              ].map((l) => (
                <div key={l.label} className="flex items-center gap-1.5 text-xs" style={{ color: "#8a8fa8" }}>
                  <span className="inline-block w-6 h-0.5 rounded" style={{ background: l.color }} />
                  {l.label}
                </div>
              ))}
            </div>

            <UsageGraph />
          </section>

          {/* News */}
          <section
            className="rounded-lg p-5"
            style={{ background: "#1e2235", border: "1px solid #272b3d" }}
          >
            <h2 className="text-sm font-semibold mb-4" style={{ color: "#e2e5ef" }}>
              News
            </h2>
            <div className="space-y-0">
              {news.map((item, idx) => (
                <div
                  key={idx}
                  className="py-4"
                  style={{ borderBottom: idx < news.length - 1 ? "1px solid #272b3d" : "none" }}
                >
                  <div className="font-semibold text-sm mb-1" style={{ color: "#e2e5ef" }}>
                    {item.title}
                  </div>
                  <div className="text-xs mb-2" style={{ color: "#565c73" }}>
                    Admin &bull; {item.date}
                  </div>
                  {item.body.split("\n\n").map((para, pi) => (
                    <p key={pi} className="text-sm mb-2 leading-relaxed" style={{ color: "#8a8fa8" }}>
                      {para}
                    </p>
                  ))}
                  {item.note && (
                    <p className="text-sm font-bold mt-1" style={{ color: "#c9cdd8" }}>
                      {item.note}
                    </p>
                  )}
                  {item.link && (
                    <a
                      href={item.link.startsWith("http") ? item.link : `https://${item.link}`}
                      className="text-sm"
                      style={{ color: "#5b8dee" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.link}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
