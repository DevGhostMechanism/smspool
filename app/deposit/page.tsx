"use client";

import { useState } from "react";
import Link from "next/link";

/* ─── tiny icon helpers ─────────────────────────────────────────────────── */

function Icon({ d, size = 16 }: { d: string | string[]; size?: number }) {
  const paths = Array.isArray(d) ? d : [d];
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      {paths.map((p, i) => (
        <path key={i} d={p} />
      ))}
    </svg>
  );
}

const ICONS = {
  quickOrder:
    "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z",
  dashboard:
    "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
  order:
    "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-3 3h3",
  longTerm: [
    "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    "M10.5 1.5H8.25",
  ],
  deposit:
    "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z",
  subAccounts:
    "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
  support:
    "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z",
  tickets:
    "M16.5 6v.75a3.375 3.375 0 0 1-3.375 3.375h-1.5A3.375 3.375 0 0 1 8.25 6.75V6m0 0A2.25 2.25 0 0 1 10.5 3.75h3A2.25 2.25 0 0 1 15.75 6m-7.5 0h7.5m-7.5 3.75v9.75c0 .621.504 1.125 1.125 1.125h5.25c.621 0 1.125-.504 1.125-1.125V9.75m-7.5 0h7.5",
  referrals:
    "M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z",
  esim: "M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3",
  proxy:
    "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418",
  carrier: [
    "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z",
    "m15.75 15.75 2.489 2.489m0 0 3.5 3.5m-3.5-3.5-2.489 2.489m-7.261-11.74a3 3 0 0 0-4.243 4.243",
  ],
  ticketmaster: [
    "M16.5 6v.75a3.375 3.375 0 0 1-3.375 3.375h-1.5A3.375 3.375 0 0 1 8.25 6.75V6m0 0A2.25 2.25 0 0 1 10.5 3.75h3A2.25 2.25 0 0 1 15.75 6m-7.5 0h7.5",
    "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
  ],
  whitelist:
    "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z",
  guides:
    "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25",
  api: "M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z",
  howTo:
    "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z",
  chevronDown: "m19.5 8.25-7.5 7.5-7.5-7.5",
  search:
    "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
  bell: "M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0",
  swap: "M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5",
  check: "m4.5 12.75 6 6 9-13.5",
  tag: [
    "M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z",
    "M6 6h.008v.008H6V6Z",
  ],
  info: "M11.25 11.25l.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z",
  wallet:
    "M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75",
};

/* ─── Sidebar sub-components ─────────────────────────────────────────────── */

function NavSection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-1">
      <p
        className="px-4 py-1.5 text-xs font-semibold tracking-wider"
        style={{ color: "#4b5563" }}
      >
        {label}
      </p>
      {children}
    </div>
  );
}

function NavItem({
  iconKey,
  label,
  href,
  active,
  onClick,
}: {
  iconKey: keyof typeof ICONS;
  label: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
}) {
  const className =
    "flex items-center gap-3 px-4 py-2 text-sm transition-colors";
  const style = {
    color: active ? "#ffffff" : "#9ca3af",
    backgroundColor: active ? "#1e3a5f" : "transparent",
    borderLeft: active ? "2px solid #2563eb" : "2px solid transparent",
  };

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={className}
        style={{
          ...style,
          border: "none",
          width: "100%",
          textAlign: "left",
          cursor: "pointer",
        }}
      >
        <Icon d={ICONS[iconKey] as string | string[]} size={15} />
        <span>{label}</span>
      </button>
    );
  }

  return (
    <Link href={href} className={className} style={style}>
      <Icon d={ICONS[iconKey] as string | string[]} size={15} />
      <span>{label}</span>
    </Link>
  );
}

/* ─── QR placeholder ─────────────────────────────────────────────────────── */

function QrPlaceholder() {
  const modules = [
    // scattered data cells to simulate a QR pattern
    [40, 5],
    [50, 5],
    [60, 5],
    [45, 10],
    [55, 10],
    [40, 15],
    [60, 15],
    [50, 20],
    [58, 20],
    [5, 40],
    [15, 40],
    [25, 40],
    [35, 40],
    [45, 40],
    [60, 40],
    [70, 40],
    [80, 40],
    [90, 40],
    [5, 50],
    [20, 50],
    [35, 50],
    [50, 50],
    [65, 50],
    [80, 50],
    [92, 50],
    [5, 60],
    [15, 60],
    [30, 60],
    [45, 60],
    [55, 60],
    [70, 60],
    [85, 60],
    [40, 70],
    [55, 70],
    [65, 70],
    [80, 70],
    [92, 70],
    [40, 80],
    [50, 80],
    [70, 80],
    [90, 80],
    [45, 90],
    [60, 90],
    [75, 90],
    [85, 90],
  ];
  return (
    <svg viewBox="0 0 100 100" width="150" height="150">
      <rect width="100" height="100" fill="white" />
      {/* TL finder */}
      <rect x="5" y="5" width="30" height="30" fill="black" rx="2" />
      <rect x="9" y="9" width="22" height="22" fill="white" rx="1" />
      <rect x="13" y="13" width="14" height="14" fill="black" />
      {/* TR finder */}
      <rect x="65" y="5" width="30" height="30" fill="black" rx="2" />
      <rect x="69" y="9" width="22" height="22" fill="white" rx="1" />
      <rect x="73" y="13" width="14" height="14" fill="black" />
      {/* BL finder */}
      <rect x="5" y="65" width="30" height="30" fill="black" rx="2" />
      <rect x="9" y="69" width="22" height="22" fill="white" rx="1" />
      <rect x="13" y="73" width="14" height="14" fill="black" />
      {/* data modules */}
      {modules.map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="5" height="5" fill="black" />
      ))}
    </svg>
  );
}

/* ─── Dropdown display ───────────────────────────────────────────────────── */

function SelectBox({ value, helpIcon }: { value: string; helpIcon?: boolean }) {
  return (
    <div
      className="flex items-center justify-between rounded-md px-3 cursor-pointer select-none"
      style={{
        backgroundColor: "#1e2023",
        border: "1px solid #3a3c42",
        height: "40px",
      }}
    >
      <span className="text-white text-sm">{value}</span>
      <div className="flex items-center gap-1.5">
        {helpIcon && (
          <span style={{ color: "#6b7280" }}>
            <Icon d={ICONS.info} size={15} />
          </span>
        )}
        <span style={{ color: "#6b7280" }}>
          <Icon d={ICONS.chevronDown} size={15} />
        </span>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────── */

const BTC_ADDRESS = "bc1qvqlm06dl780798ln0zycxevapeqsvzpj3yr2n8";

export default function DepositPage() {
  const [promoCode, setPromoCode] = useState("");

  return (
    <div
      className="flex overflow-hidden"
      style={{ height: "100dvh", backgroundColor: "#1e2023" }}
    >
      {/* ── Sidebar ─────────────────────────────────────────────────────── */}
      <aside
        className="flex flex-col flex-shrink-0 overflow-y-auto"
        style={{
          width: "238px",
          backgroundColor: "#16181b",
          borderRight: "1px solid #23262b",
        }}
      >
        {/* Logo row */}
        <div
          className="flex items-center gap-2 px-4 py-3 flex-shrink-0"
          style={{ borderBottom: "1px solid #23262b" }}
        >
          <div
            className="flex items-center justify-center rounded text-white font-extrabold flex-shrink-0"
            style={{
              backgroundColor: "#2563eb",
              width: "28px",
              height: "28px",
              fontSize: "8px",
            }}
          >
            SMS
          </div>
          <span className="text-white font-semibold text-sm">SMSPool</span>
          <button
            className="ml-auto flex-shrink-0"
            style={{ color: "#6b7280" }}
          >
            <Icon d={ICONS.swap} size={15} />
          </button>
        </div>

        {/* User info */}
        <div
          className="px-4 py-3 flex-shrink-0"
          style={{ borderBottom: "1px solid #23262b" }}
        >
          <div className="flex gap-8 text-xs">
            <div>
              <div style={{ color: "#6b7280" }}>Username</div>
              <div className="text-white font-semibold mt-0.5">Ahker007</div>
            </div>
            <div>
              <div style={{ color: "#6b7280" }}>Balance</div>
              <div className="text-white font-semibold mt-0.5">$0.00</div>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 pb-4 overflow-y-auto">
          <NavSection label="QUICK MENU">
            <button
              onClick={() => alert("Please deposit money to use service!")}
              style={{
                color: "#3b82f6",
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
              }}
            >
              <NavItem iconKey="quickOrder" label="Quick Order" href="" />
            </button>
          </NavSection>

          <NavSection label="MAIN">
            <NavItem
              iconKey="dashboard"
              label="Dashboard"
              href=""
              onClick={() => alert("Please deposit money to use service!")}
            />

            <NavItem
              iconKey="order"
              label="Order"
              href=""
              onClick={() => alert("Please deposit money to use service!")}
            />

            <NavItem
              iconKey="longTerm"
              label="Long-term order"
              href=""
              onClick={() => alert("Please deposit money to use service!")}
            />
          </NavSection>

          <NavSection label="BALANCE">
            <NavItem iconKey="deposit" label="Deposit" href="/deposit" active />
          </NavSection>

          <NavSection label="BUSINESS">
            <NavItem
              iconKey="subAccounts"
              label="Sub-accounts"
              href=""
              onClick={() => alert("Please deposit money to use service!")}
            />
          </NavSection>

          <NavSection label="CONTACT">
            <NavItem
              iconKey="support"
              label="Support"
              href=""
              onClick={() => alert("Please deposit money to use service!")}
            />
            <NavItem
              iconKey="tickets"
              label="Tickets"
              href=""
              onClick={() => alert("Please deposit money to use service!")}
            />
          </NavSection>

          <NavSection label="AFFILIATES">
            <NavItem
              iconKey="referrals"
              label="My Referrals"
              href=""
              onClick={() => alert("Please deposit money to use service!")}
            />
          </NavSection>

          <NavSection label="OTHER SERVICES">
            <NavItem iconKey="esim" label="Data-only eSIM" href="/esim" />
            <NavItem iconKey="proxy" label="Residential Proxy" href="/proxy" />
            <NavItem
              iconKey="carrier"
              label="Free Carrier Lookup"
              href=""
              onClick={() => alert("Please deposit money to use service!")}
            />
          </NavSection>

          <NavSection label="TOOLS">
            <NavItem
              iconKey="ticketmaster"
              label="Retrieve Ticketmaster Hits"
              href=""
              onClick={() => alert("Please deposit money to use service!")}
            />
            <NavItem
              iconKey="whitelist"
              label="Request Service Whitelist"
              href=""
              onClick={() => alert("Please deposit money to use service!")}
            />
          </NavSection>

          <NavSection label="INSTRUCTIONS">
            <NavItem
              iconKey="guides"
              label="SMSPool Guides"
              href=""
              onClick={() => alert("Please deposit money to use service!")}
            />
            <NavItem
              iconKey="api"
              label="SMSPool API"
              href=""
              onClick={() => alert("Please deposit money to use service!")}
            />
            <NavItem
              iconKey="howTo"
              label="How to order an SMS"
              href=""
              onClick={() => alert("Please deposit money to use service!")}
            />
          </NavSection>
        </nav>
      </aside>

      {/* ── Main area ───────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar */}
        <header
          className="flex items-center justify-end gap-5 px-5 flex-shrink-0"
          style={{
            height: "48px",
            backgroundColor: "#16181b",
            borderBottom: "1px solid #23262b",
          }}
        >
          {/* Language */}
          <button
            className="flex items-center gap-1.5 text-sm"
            style={{ color: "#9ca3af" }}
          >
            <svg
              viewBox="0 0 20 15"
              width="20"
              height="14"
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
            <span>English</span>
          </button>

          {/* Notifications */}
          <button className="relative" style={{ color: "#9ca3af" }}>
            <Icon d={ICONS.bell} size={18} />
            <span
              className="absolute -top-1 -right-1.5 text-white font-bold flex items-center justify-center rounded-full"
              style={{
                backgroundColor: "#2563eb",
                fontSize: "9px",
                width: "15px",
                height: "15px",
                lineHeight: 1,
              }}
            >
              4
            </span>
          </button>

          {/* User avatar + name */}
          <div
            className="flex items-center gap-2 text-sm"
            style={{ color: "#9ca3af" }}
          >
            <div
              className="flex items-center justify-center rounded-full text-xs font-semibold text-white flex-shrink-0"
              style={{
                backgroundColor: "#374151",
                width: "28px",
                height: "28px",
              }}
            >
              A
            </div>
            <span>Inactive</span>
          </div>
        </header>

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto p-6">
          <h1 className="text-white text-xl font-semibold mb-5">Deposit</h1>

          {/* Two-column layout */}
          <div className="flex gap-5" style={{ alignItems: "flex-start" }}>
            {/* ── Left column ──────────────────────────────────────────── */}
            <div
              className="flex flex-col gap-4 min-w-0"
              style={{ flex: "1 1 0" }}
            >
              {/* Info box */}
              <div
                className="rounded-lg p-4 text-sm leading-6"
                style={{ backgroundColor: "#2a2c30", color: "#d1d5db" }}
              >
                <strong className="text-white">
                  All payments are processed by our trusted payment processor
                  Stripe, we do not store, nor keep any of your creditcard
                  information on our servers.
                </strong>{" "}
                Top up your account here, crypto payments need at least 3
                confirmations before it&apos;s credited to your account.
                Creditcard deposits will be deposited instantly, if it has not
                deposited within 20 minutes feel free to contact{" "}
                <button
                  onClick={() => alert("Please deposit money to use service!")}
                  style={{
                    color: "#3b82f6",
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                >
                  support
                </button>
                , if your crypto payment hasn&apos;t credited within 24 hours
                please contact support. If the service wasn&apos;t suitable for
                your needs, you can request a refund within 14 days as long as
                your balance has not been used, refunds are only possible to the
                original payment method.
              </div>

              {/* Deposit form card */}
              <div
                className="rounded-lg p-5"
                style={{ backgroundColor: "#2a2c30" }}
              >
                {/* Card header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <span style={{ color: "#9ca3af" }}>
                      <Icon d={ICONS.wallet} size={18} />
                    </span>
                    <h2 className="text-white font-semibold text-base">
                      Deposit
                    </h2>
                  </div>
                  <div
                    className="flex items-center justify-center rounded-full flex-shrink-0"
                    style={{
                      backgroundColor: "#1d4ed8",
                      width: "28px",
                      height: "28px",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="14"
                      height="14"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={ICONS.check as string} />
                    </svg>
                  </div>
                </div>

                {/* Currency */}
                <div className="mb-4">
                  <label
                    className="block text-sm mb-1.5"
                    style={{ color: "#9ca3af" }}
                  >
                    Currency
                  </label>
                  <SelectBox value="Cryptocurrency" />
                </div>

                {/* Country */}

                {/* Cryptocurrency */}
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-sm" style={{ color: "#9ca3af" }}>
                      Cryptocurrency
                    </label>
                    <span style={{ color: "#6b7280" }}>
                      <Icon d={ICONS.info} size={15} />
                    </span>
                  </div>
                  <SelectBox value="BTC" />
                </div>

                {/* Generated address message */}
                <p
                  className="font-bold text-white mb-3"
                  style={{ fontSize: "17px", lineHeight: "1.55" }}
                >
                  We have successfully generated a{" "}
                  <span style={{ color: "#22c55e" }}>BTC</span> address for you,
                  please ONLY send <span style={{ color: "#22c55e" }}>BTC</span>{" "}
                  on the <span style={{ color: "#22c55e" }}>BTC</span> network
                  to this address or your funds will be{" "}
                  <span style={{ color: "#ef4444" }}>permanently</span> lost, do
                  not send any other token to this address.
                </p>

                <p
                  className="text-sm mb-1 leading-6"
                  style={{ color: "#9ca3af" }}
                >
                  Any payment sent to:{" "}
                  <strong
                    className="text-white"
                    style={{ wordBreak: "break-all" }}
                  >
                    {BTC_ADDRESS}
                  </strong>{" "}
                  will be credited to your account within 3 network
                  confirmations.
                </p>

                <p
                  className="text-sm font-semibold mb-5"
                  style={{ color: "#9ca3af" }}
                >
                  A minimum deposit of{" "}
                  <strong className="text-white">$20 USD in BTC</strong> is
                  required or the payment will not be credited.
                </p>

                {/* QR code */}
                <div
                  className="rounded-lg overflow-hidden"
                  style={{
                    width: "160px",
                    height: "160px",
                    backgroundColor: "white",
                    padding: "5px",
                  }}
                >
                  <QrPlaceholder />
                </div>
              </div>
            </div>

            {/* ── Right column ─────────────────────────────────────────── */}
            <div
              className="flex flex-col gap-4 flex-shrink-0"
              style={{ width: "340px" }}
            >
              {/* My deposits */}
              <div
                className="rounded-lg p-5"
                style={{ backgroundColor: "#2a2c30" }}
              >
                <h2 className="text-white font-semibold mb-0.5">My deposits</h2>
                <p className="text-xs mb-4" style={{ color: "#6b7280" }}>
                  A list of all your previous deposits.
                </p>

                {/* Filter + Show row */}
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="text-sm flex-shrink-0"
                    style={{ color: "#6b7280" }}
                  >
                    Filter:
                  </span>
                  <div
                    className="flex-1 flex items-center gap-2 rounded-md px-2.5"
                    style={{
                      backgroundColor: "#1e2023",
                      border: "1px solid #3a3c42",
                      height: "34px",
                    }}
                  >
                    <span style={{ color: "#6b7280" }}>
                      <Icon d={ICONS.search} size={13} />
                    </span>
                    <span className="text-xs" style={{ color: "#4b5563" }}>
                      Type to filter...
                    </span>
                  </div>
                  <span
                    className="text-sm flex-shrink-0"
                    style={{ color: "#6b7280" }}
                  >
                    Show:
                  </span>
                  <div
                    className="flex items-center gap-1 rounded-md px-2"
                    style={{
                      backgroundColor: "#1e2023",
                      border: "1px solid #3a3c42",
                      height: "34px",
                    }}
                  >
                    <span className="text-white text-sm">10</span>
                    <span style={{ color: "#6b7280" }}>
                      <Icon d={ICONS.chevronDown} size={13} />
                    </span>
                  </div>
                </div>

                {/* Table */}
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ borderBottom: "1px solid #3a3c42" }}>
                      {["#", "Amount", "Method", "Date", "Invoice"].map((h) => (
                        <th
                          key={h}
                          className="text-left pb-2 font-semibold pr-2"
                          style={{ color: "#9ca3af", fontSize: "12px" }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  {/* <tbody>
                    {[
                      {
                        id: "2026-2",
                        amount: "3.39",
                        method: "Cryptomus",
                        date: "2026-05-07",
                        time: "15:45:44",
                      },
                      {
                        id: "2026-1",
                        amount: "5.01",
                        method: "Cryptomus",
                        date: "2026-01-02",
                        time: "10:12:14",
                      },
                    ].map((row, i, arr) => (
                      <tr
                        key={row.id}
                        style={{
                          borderBottom:
                            i < arr.length - 1 ? "1px solid #23262b" : "none",
                        }}
                      >
                        <td
                          className="py-3 pr-2 text-white"
                          style={{ fontSize: "13px" }}
                        >
                          {row.id}
                        </td>
                        <td
                          className="py-3 pr-2 text-white"
                          style={{ fontSize: "13px" }}
                        >
                          {row.amount}
                        </td>
                        <td
                          className="py-3 pr-2 text-white"
                          style={{ fontSize: "13px" }}
                        >
                          {row.method}
                        </td>
                        <td
                          className="py-3 pr-2"
                          style={{
                            color: "#9ca3af",
                            fontSize: "12px",
                            lineHeight: "1.4",
                          }}
                        >
                          {row.date}
                          <br />
                          {row.time}
                        </td>
                        <td className="py-3">
                          <Link
                            href="#"
                            style={{ color: "#3b82f6", fontSize: "13px" }}
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody> */}
                </table>

                {/* Pagination */}
                <div
                  className="flex items-center justify-between mt-4 pt-3"
                  style={{ borderTop: "1px solid #23262b" }}
                >
                  <span className="text-xs" style={{ color: "#6b7280" }}></span>
                  <div className="flex items-center gap-1">
                    <button
                      className="text-xs px-2 py-1 rounded transition-colors"
                      style={{ color: "#6b7280" }}
                    >
                      ←
                    </button>
                    <button
                      className="text-xs px-2.5 py-1 rounded font-semibold text-white"
                      style={{ backgroundColor: "#2563eb" }}
                    >
                      1
                    </button>
                    <button
                      className="text-xs px-2 py-1 rounded transition-colors"
                      style={{ color: "#6b7280" }}
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>

              {/* Promotion code */}
              <div
                className="rounded-lg p-5"
                style={{ backgroundColor: "#2a2c30" }}
              >
                <h2 className="text-white font-semibold mb-0.5">
                  Promotion code
                </h2>
                <p className="text-xs mb-4" style={{ color: "#6b7280" }}>
                  Found a promotion code? Redeem it here!
                </p>

                <input
                  type="text"
                  placeholder="Promocode"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="w-full rounded-md px-3 text-white text-sm outline-none mb-3"
                  style={{
                    backgroundColor: "#1e2023",
                    border: "1px solid #3a3c42",
                    height: "40px",
                    caretColor: "white",
                  }}
                />

                <button
                  className="flex items-center gap-2 px-4 rounded-md text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#16a34a", height: "38px" }}
                >
                  <span style={{ color: "white" }}>
                    <Icon d={ICONS.tag} size={15} />
                  </span>
                  Redeem
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
