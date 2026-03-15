"use client";
import { useState } from "react";

/* ─── Software Products ─── */
const SOFTWARE = [
  {
    name: "TradeQuotes",
    tagline: "AI-Powered Quoting for Tradespeople",
    desc: "Upload sketches, extract measurements with AI, generate branded PDF quotes. Supports 8 trades — granite, tiling, plumbing, electrical, painting, pest control, carpentry, landscaping.",
    price: "Free to Start",
    icon: "🔧",
    url: "https://quotes-67f32.web.app",
    type: "SaaS",
    features: ["AI sketch extraction", "8 trade configs", "PDF quotes & job cards", "CAD drawings"],
    color: "blue",
  },
  {
    name: "CliComp Agency",
    tagline: "AI Lead Generation for Agencies",
    desc: "Find qualified prospects in any city, scored by AI for fit and intent. Get personalized outreach scripts ready to send.",
    price: "From $29/mo",
    icon: "🔍",
    url: "https://clicomp.agency",
    type: "SaaS",
    features: ["AI lead scoring", "50+ countries", "Outreach templates", "Competitor analysis"],
    color: "purple",
  },
  {
    name: "Life By Priority",
    tagline: "Goal Setting & Life Planning",
    desc: "Set priorities, track goals, and plan your life with a simple, focused interface. Available on web and Google Play.",
    price: "Free",
    icon: "🎯",
    url: "https://lifebypriority.com",
    type: "Web + Android",
    features: ["Priority-based planning", "Goal tracking", "Daily focus", "Progress analytics"],
    color: "green",
  },
  {
    name: "TrackingTrax",
    tagline: "Budget & Finance Tracker",
    desc: "Take control of your money. Track income, expenses, and savings goals with a clean dashboard.",
    price: "Free",
    icon: "💰",
    url: "https://trackingtrax.com",
    type: "Web App",
    features: ["Income tracking", "Expense categories", "Savings goals", "Visual reports"],
    color: "emerald",
  },
];

/* ─── Hardware Categories ─── */
const HARDWARE = [
  {
    name: "Laptops & Notebooks",
    desc: "Business laptops, development workstations, and everyday notebooks from trusted brands. New and certified refurbished.",
    priceRange: "From R4,999",
    icon: "💻",
    items: ["HP ProBook Series", "Lenovo ThinkPad", "Dell Latitude", "Acer Aspire"],
  },
  {
    name: "Smartphones",
    desc: "Quality smartphones at competitive prices. Android flagships and budget-friendly options.",
    priceRange: "From R2,499",
    icon: "📱",
    items: ["Samsung Galaxy Series", "Xiaomi Redmi", "Huawei Nova", "Motorola Edge"],
  },
  {
    name: "Tablets & iPads",
    desc: "Tablets for work, entertainment, and education. Stylus-compatible options available.",
    priceRange: "From R1,999",
    icon: "📟",
    items: ["Samsung Galaxy Tab", "Lenovo Tab", "Huawei MatePad", "Amazon Fire"],
  },
  {
    name: "Networking & WiFi",
    desc: "Routers, mesh systems, switches, and access points for home and business.",
    priceRange: "From R499",
    icon: "📡",
    items: ["TP-Link Archer", "MikroTik", "Ubiquiti UniFi", "Netgear Nighthawk"],
  },
  {
    name: "Peripherals",
    desc: "Keyboards, mice, monitors, webcams, and accessories for your setup.",
    priceRange: "From R199",
    icon: "🖥️",
    items: ["Logitech", "Redragon", "Samsung Monitors", "Corsair"],
  },
  {
    name: "Storage & Memory",
    desc: "External drives, SSDs, USB sticks, and memory cards at wholesale prices.",
    priceRange: "From R149",
    icon: "💾",
    items: ["Samsung SSD", "Western Digital", "SanDisk", "Seagate"],
  },
];

const COLOR_MAP: Record<string, {bg: string; border: string; text: string}> = {
  blue: { bg: "bg-blue-50", border: "border-blue-200 hover:border-blue-400", text: "text-blue-600" },
  purple: { bg: "bg-purple-50", border: "border-purple-200 hover:border-purple-400", text: "text-purple-600" },
  green: { bg: "bg-green-50", border: "border-green-200 hover:border-green-400", text: "text-green-600" },
  emerald: { bg: "bg-emerald-50", border: "border-emerald-200 hover:border-emerald-400", text: "text-emerald-600" },
};

export default function ShopPage() {
  const [tab, setTab] = useState<"software" | "hardware">("software");
  const [notify, setNotify] = useState({ email: "", submitted: false });

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark via-dark-light to-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-light font-semibold text-sm uppercase tracking-wider mb-4">DijiSol Shop</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Software &amp; Tech Products
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              Digital tools to grow your business and quality tech hardware at competitive prices. No middlemen — direct from supplier to your door.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Selector */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0">
            <button
              onClick={() => setTab("software")}
              className={`px-6 py-4 text-sm font-semibold border-b-2 transition-colors ${
                tab === "software"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              🖥️ Software Products
            </button>
            <button
              onClick={() => setTab("hardware")}
              className={`px-6 py-4 text-sm font-semibold border-b-2 transition-colors ${
                tab === "hardware"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              💻 Tech Hardware
            </button>
          </div>
        </div>
      </section>

      {/* Software Tab */}
      {tab === "software" && (
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Our Software</h2>
              <p className="text-gray-500 text-lg">SaaS tools and apps built by DijiSol — designed to solve real business problems.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {SOFTWARE.map((p) => {
                const c = COLOR_MAP[p.color] || COLOR_MAP.blue;
                return (
                  <a
                    key={p.name}
                    href={p.url}
                    target="_blank"
                    rel="noopener"
                    className={`block bg-white rounded-xl border ${c.border} hover:shadow-lg transition-all group overflow-hidden`}
                  >
                    <div className={`${c.bg} px-6 py-4 border-b border-gray-100`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{p.icon}</span>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">{p.name}</h3>
                            <p className="text-xs text-gray-500">{p.tagline}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`text-sm font-bold ${c.text}`}>{p.price}</span>
                          <p className="text-xs text-gray-400">{p.type}</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 py-5">
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">{p.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {p.features.map((f) => (
                          <span key={f} className="text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full font-medium">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className={`${c.bg} px-6 py-3 flex items-center justify-between`}>
                      <span className="text-sm font-medium text-gray-600">Visit {p.name} →</span>
                      <svg className={`w-4 h-4 ${c.text} group-hover:translate-x-1 transition-transform`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Build Your Own CTA */}
            <div className="mt-16 text-center bg-white rounded-xl border border-gray-200 p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Need Custom Software?</h3>
              <p className="text-gray-500 mb-6 max-w-lg mx-auto">
                We build SaaS products, web apps, and mobile apps for businesses. Tell us what you need and we&apos;ll make it happen.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                Get a Free Consultation
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Hardware Tab */}
      {tab === "hardware" && (
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Tech Hardware</h2>
              <p className="text-gray-500 text-lg">Quality technology products shipped directly to you. No middlemen, competitive wholesale pricing.</p>
            </div>

            {/* Hardware Notice */}
            <div className="mb-10 bg-yellow-50 border border-yellow-200 rounded-xl p-6 flex items-start gap-4">
              <span className="text-2xl">🚀</span>
              <div>
                <h4 className="font-bold text-yellow-800 mb-1">Hardware Store Launching Soon</h4>
                <p className="text-sm text-yellow-700">
                  We&apos;re partnering with trusted suppliers to bring you quality tech at wholesale prices.
                  Online ordering with delivery is coming. Sign up below to be notified!
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {HARDWARE.map((h) => (
                <div key={h.name} className="bg-white rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{h.icon}</span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-yellow-100 text-yellow-700">Coming Soon</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{h.name}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{h.desc}</p>
                    <p className="text-sm font-bold text-primary mb-4">{h.priceRange}</p>
                    <div className="border-t border-gray-100 pt-3">
                      <p className="text-xs text-gray-400 font-medium mb-2">Featured Brands:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {h.items.map((item) => (
                          <span key={item} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded font-medium">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Notify Form */}
            <div className="mt-16 bg-gradient-to-br from-dark via-dark-light to-dark rounded-xl p-10 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Get Notified When We Launch</h3>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                Be the first to know when our hardware store goes live. Early subscribers get exclusive launch discounts.
              </p>
              {notify.submitted ? (
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/20 text-accent font-semibold rounded-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                  You&apos;re on the list! We&apos;ll email you at launch.
                </div>
              ) : (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    try {
                      await fetch("https://api.web3forms.com/submit", {
                        method: "POST",
                        headers: { "Content-Type": "application/json", Accept: "application/json" },
                        body: JSON.stringify({
                          access_key: "5c53a2d5-0ba9-433b-ad6f-8baa902d50c1",
                          subject: "DijiSol Hardware Store - Launch Notification Signup",
                          email: notify.email,
                          message: "Please notify me when the hardware store launches.",
                        }),
                      });
                      setNotify({ email: "", submitted: true });
                    } catch { /* silent */ }
                  }}
                  className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
                >
                  <input
                    type="email"
                    required
                    value={notify.email}
                    onChange={(e) => setNotify({ ...notify, email: e.target.value })}
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-primary outline-none"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors whitespace-nowrap"
                  >
                    Notify Me
                  </button>
                </form>
              )}
            </div>

            {/* Wholesale / Business Inquiries */}
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm">
                Need bulk orders or business pricing?{" "}
                <a href="/contact" className="text-primary font-medium hover:underline">Contact us for wholesale quotes</a>
              </p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
