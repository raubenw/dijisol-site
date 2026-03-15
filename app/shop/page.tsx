"use client";
import { useState, useEffect } from "react";

/* ─── Software Products ─── */
const SOFTWARE = [
  {
    name: "TradeQuotes",
    tagline: "AI-Powered Quoting for Tradespeople",
    desc: "Upload sketches, extract measurements with AI, generate branded PDF quotes. Supports 8 trades — granite, tiling, plumbing, electrical, painting, pest control, carpentry, landscaping.",
    price: "Free to Start",
    icon: "🔧",
    url: "https://tradequotes.dijisol.com",
    type: "SaaS",
    features: [
      "AI sketch extraction",
      "8 trade configs",
      "PDF quotes & job cards",
      "CAD drawings",
    ],
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
    features: [
      "AI lead scoring",
      "50+ countries",
      "Outreach templates",
      "Competitor analysis",
    ],
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
    features: [
      "Priority-based planning",
      "Goal tracking",
      "Daily focus",
      "Progress analytics",
    ],
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
    features: [
      "Income tracking",
      "Expense categories",
      "Savings goals",
      "Visual reports",
    ],
    color: "emerald",
  },
];

/* ─── Hardware Products ─── */
interface Product {
  id: string;
  name: string;
  desc: string;
  price: number;
  category: string;
  icon: string;
  specs: string[];
}

const PRODUCTS: Product[] = [
  // Laptops
  {
    id: "laptop-14",
    name: '14" Ultra-Slim Laptop',
    desc: "Lightweight 14-inch notebook with Intel N95 processor, 8GB RAM, 256GB SSD. Perfect for office work, browsing, and light development.",
    price: 4999,
    category: "Laptops",
    icon: "💻",
    specs: ["Intel N95", "8GB RAM", "256GB SSD", '14" FHD IPS'],
  },
  {
    id: "laptop-156",
    name: '15.6" Business Laptop',
    desc: "Powerful 15.6-inch business laptop with Intel i5, 16GB RAM, 512GB SSD. Built for productivity and multitasking.",
    price: 7999,
    category: "Laptops",
    icon: "💻",
    specs: ["Intel i5", "16GB RAM", "512GB SSD", '15.6" FHD'],
  },
  {
    id: "laptop-gaming",
    name: '15.6" Gaming Laptop',
    desc: "Entry-level gaming laptop with dedicated GPU, 16GB RAM, 512GB SSD, 144Hz display. Game and create.",
    price: 12999,
    category: "Laptops",
    icon: "🎮",
    specs: ["Intel i5 + GTX 1650", "16GB RAM", "512GB SSD", "144Hz Display"],
  },
  // Smartphones
  {
    id: "phone-budget",
    name: '6.5" Android Smartphone',
    desc: "Budget-friendly 6.5-inch smartphone with dual camera, 4GB RAM, 64GB storage. Great for everyday use.",
    price: 2499,
    category: "Smartphones",
    icon: "📱",
    specs: ['6.5" HD+', "4GB RAM", "64GB Storage", "5000mAh Battery"],
  },
  {
    id: "phone-mid",
    name: '6.7" AMOLED Smartphone',
    desc: "Mid-range smartphone with stunning AMOLED display, 8GB RAM, 128GB storage, 50MP triple camera.",
    price: 4499,
    category: "Smartphones",
    icon: "📱",
    specs: ['6.7" AMOLED', "8GB RAM", "128GB Storage", "50MP Camera"],
  },
  {
    id: "phone-rugged",
    name: "Rugged Smartphone IP68",
    desc: "Waterproof, dustproof, and drop-resistant. Built for outdoor work with thermal camera and 10000mAh battery.",
    price: 5999,
    category: "Smartphones",
    icon: "📱",
    specs: ["IP68 Rated", "6GB RAM", "128GB Storage", "10000mAh Battery"],
  },
  // Tablets
  {
    id: "tablet-10",
    name: '10.1" Android Tablet',
    desc: "Versatile 10-inch tablet for work and entertainment. Stylus support, split-screen, and long battery life.",
    price: 2499,
    category: "Tablets",
    icon: "📟",
    specs: ['10.1" IPS', "4GB RAM", "64GB Storage", "7000mAh Battery"],
  },
  {
    id: "tablet-drawing",
    name: '11" Drawing Tablet with Pen',
    desc: "Creative tablet with pressure-sensitive stylus, ideal for digital art, note-taking, and design.",
    price: 3999,
    category: "Tablets",
    icon: "🎨",
    specs: ['11" FHD', "6GB RAM", "128GB Storage", "Stylus Included"],
  },
  // Networking
  {
    id: "router-wifi6",
    name: "WiFi 6 Dual-Band Router",
    desc: "Next-gen WiFi 6 router with up to 1800Mbps. Covers large homes with strong, stable connections.",
    price: 899,
    category: "Networking",
    icon: "📡",
    specs: ["WiFi 6 AX1800", "Dual-Band", "4 Antennas", "Easy App Setup"],
  },
  {
    id: "mesh-system",
    name: "Mesh WiFi System (3-Pack)",
    desc: "Seamless whole-home WiFi coverage up to 500m². Eliminates dead zones with smart mesh technology.",
    price: 1799,
    category: "Networking",
    icon: "📡",
    specs: [
      "3-Node System",
      "500m² Coverage",
      "WiFi 5 AC1200",
      "Auto Band-Steering",
    ],
  },
  {
    id: "switch-8port",
    name: "8-Port Gigabit Switch",
    desc: "Unmanaged 8-port gigabit ethernet switch. Plug-and-play networking for home or small office.",
    price: 399,
    category: "Networking",
    icon: "🔌",
    specs: ["8× Gigabit Ports", "Metal Case", "Plug & Play", "Fanless Silent"],
  },
  // Peripherals
  {
    id: "keyboard-mech",
    name: "Mechanical Gaming Keyboard",
    desc: "RGB backlit mechanical keyboard with blue switches. Tactile, clicky, and built to last.",
    price: 599,
    category: "Peripherals",
    icon: "⌨️",
    specs: ["Blue Switches", "RGB Backlit", "Anti-Ghosting", "USB-C"],
  },
  {
    id: "mouse-wireless",
    name: "Wireless Ergonomic Mouse",
    desc: "Silent-click wireless mouse with ergonomic design. 2.4GHz connection, long battery life.",
    price: 349,
    category: "Peripherals",
    icon: "🖱️",
    specs: ["2.4GHz Wireless", "Silent Click", "Ergonomic", "12-Month Battery"],
  },
  {
    id: "usbc-hub",
    name: "7-in-1 USB-C Hub",
    desc: "Expand your laptop with HDMI 4K, USB 3.0, SD card reader, and PD charging. Essential for modern laptops.",
    price: 449,
    category: "Peripherals",
    icon: "🔗",
    specs: ["HDMI 4K", "3× USB 3.0", "SD/TF Card", "100W PD Charging"],
  },
  {
    id: "webcam-1080p",
    name: "1080p HD Webcam",
    desc: "Full HD webcam with built-in microphone and auto-focus. Perfect for video calls and streaming.",
    price: 499,
    category: "Peripherals",
    icon: "📷",
    specs: ["1080p 30fps", "Built-in Mic", "Auto-Focus", "USB Plug & Play"],
  },
  // Storage
  {
    id: "ssd-256",
    name: "256GB SATA SSD",
    desc: "Upgrade your PC with a solid-state drive. 10× faster than traditional hard drives.",
    price: 499,
    category: "Storage",
    icon: "💾",
    specs: ["256GB", "SATA III", "550MB/s Read", '2.5" Form Factor'],
  },
  {
    id: "ssd-512",
    name: "512GB NVMe SSD",
    desc: "Blazing-fast NVMe SSD for modern PCs. Speeds up to 2400MB/s for instant load times.",
    price: 899,
    category: "Storage",
    icon: "💾",
    specs: ["512GB", "NVMe M.2", "2400MB/s Read", "PCIe Gen3"],
  },
  {
    id: "hdd-1tb",
    name: "1TB Portable External HDD",
    desc: "Compact external hard drive for backups, photos, and files. USB 3.0 for fast transfers.",
    price: 999,
    category: "Storage",
    icon: "💾",
    specs: ["1TB", "USB 3.0", 'Portable 2.5"', "Bus Powered"],
  },
  {
    id: "usb-128",
    name: "128GB USB Flash Drive",
    desc: "Compact metal USB 3.0 flash drive. Fast file transfers in your pocket.",
    price: 249,
    category: "Storage",
    icon: "💾",
    specs: ["128GB", "USB 3.0", "Metal Body", "Keychain Loop"],
  },
];

const CATEGORIES = [
  "All",
  "Laptops",
  "Smartphones",
  "Tablets",
  "Networking",
  "Peripherals",
  "Storage",
];

const ZAR_TO_USD = 0.055; // ~R18 per $1

function formatPrice(zarPrice: number, currency: "ZAR" | "USD"): string {
  if (currency === "ZAR") return `R${zarPrice.toLocaleString()}`;
  const usd = Math.round(zarPrice * ZAR_TO_USD);
  return `$${usd.toLocaleString()}`;
}

const COLOR_MAP: Record<string, { bg: string; border: string; text: string }> =
  {
    blue: {
      bg: "bg-blue-50",
      border: "border-blue-200 hover:border-blue-400",
      text: "text-blue-600",
    },
    purple: {
      bg: "bg-purple-50",
      border: "border-purple-200 hover:border-purple-400",
      text: "text-purple-600",
    },
    green: {
      bg: "bg-green-50",
      border: "border-green-200 hover:border-green-400",
      text: "text-green-600",
    },
    emerald: {
      bg: "bg-emerald-50",
      border: "border-emerald-200 hover:border-emerald-400",
      text: "text-emerald-600",
    },
  };

export default function ShopPage() {
  const [tab, setTab] = useState<"software" | "hardware">("software");
  const [category, setCategory] = useState("All");
  const [currency, setCurrency] = useState<"ZAR" | "USD">("USD");
  const [orderProduct, setOrderProduct] = useState<Product | null>(null);
  const [orderForm, setOrderForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const [orderStatus, setOrderStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  // Auto-detect: ZAR for South Africa, USD for everyone else
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((data) => {
        if (data.country_code === "ZA") setCurrency("ZAR");
      })
      .catch(() => {}); // default stays USD
  }, []);

  const fp = (zarPrice: number) => formatPrice(zarPrice, currency);

  const filtered =
    category === "All"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === category);

  const handleOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderProduct) return;
    setOrderStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "5c53a2d5-0ba9-433b-ad6f-8baa902d50c1",
          subject: `DijiSol Order: ${orderProduct.name} — ${fp(orderProduct.price)} (R${orderProduct.price.toLocaleString()})`,
          from_name: orderForm.name,
          name: orderForm.name,
          email: orderForm.email,
          phone: orderForm.phone,
          product: `${orderProduct.name} (${orderProduct.id})`,
          price: `${fp(orderProduct.price)} (R${orderProduct.price.toLocaleString()} ZAR)`,
          currency: currency,
          country: orderForm.country,
          shipping_address: `${orderForm.address}, ${orderForm.city}, ${orderForm.postalCode}, ${orderForm.country}`,
          message: `New order for ${orderProduct.name} at ${fp(orderProduct.price)} (R${orderProduct.price.toLocaleString()} ZAR). Currency: ${currency}. Customer: ${orderForm.name}, ${orderForm.email}, ${orderForm.phone}. Ship to: ${orderForm.address}, ${orderForm.city}, ${orderForm.postalCode}, ${orderForm.country}.`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setOrderStatus("sent");
        setOrderForm({
          name: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          postalCode: "",
          country: "",
        });
      } else {
        setOrderStatus("error");
      }
    } catch {
      setOrderStatus("error");
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark via-dark-light to-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-light font-semibold text-sm uppercase tracking-wider mb-4">
              DijiSol Shop
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Software &amp; Tech Products
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              Digital tools to grow your business and quality tech hardware at
              competitive prices. No middlemen — direct from supplier to your
              door.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Selector + Currency Toggle */}
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
            <div className="ml-auto flex items-center">
              <button
                onClick={() => setCurrency(currency === "ZAR" ? "USD" : "ZAR")}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-gray-200 hover:border-primary/50 transition-colors text-gray-600 hover:text-primary"
              >
                {currency === "ZAR" ? "🇿🇦 ZAR" : "🇺🇸 USD"}
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Software Tab */}
      {tab === "software" && (
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                Our Software
              </h2>
              <p className="text-gray-500 text-lg">
                SaaS tools and apps built by DijiSol — designed to solve real
                business problems.
              </p>
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
                    <div
                      className={`${c.bg} px-6 py-4 border-b border-gray-100`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{p.icon}</span>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                              {p.name}
                            </h3>
                            <p className="text-xs text-gray-500">{p.tagline}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`text-sm font-bold ${c.text}`}>
                            {p.price}
                          </span>
                          <p className="text-xs text-gray-400">{p.type}</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 py-5">
                      <p className="text-sm text-gray-600 leading-relaxed mb-4">
                        {p.desc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {p.features.map((f) => (
                          <span
                            key={f}
                            className="text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full font-medium"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div
                      className={`${c.bg} px-6 py-3 flex items-center justify-between`}
                    >
                      <span className="text-sm font-medium text-gray-600">
                        Visit {p.name} →
                      </span>
                      <svg
                        className={`w-4 h-4 ${c.text} group-hover:translate-x-1 transition-transform`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Build Your Own CTA */}
            <div className="mt-16 text-center bg-white rounded-xl border border-gray-200 p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Need Custom Software?
              </h3>
              <p className="text-gray-500 mb-6 max-w-lg mx-auto">
                We build SaaS products, web apps, and mobile apps for
                businesses. Tell us what you need and we&apos;ll make it happen.
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
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                Tech Hardware
              </h2>
              <p className="text-gray-500 text-lg">
                Quality technology products shipped directly to you. Competitive
                prices, no middlemen.
              </p>
            </div>

            {/* Category Filter */}
            <div className="mb-8 flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === cat
                      ? "bg-primary text-white"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* How It Works */}
            <div className="mb-10 bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h4 className="font-bold text-blue-800 mb-3">
                How Ordering Works
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-blue-700">
                <div className="flex items-start gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">
                    1
                  </span>
                  <span>
                    Click <strong>Order Now</strong> and fill in your details
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">
                    2
                  </span>
                  <span>
                    We&apos;ll send you a <strong>PayPal payment link</strong>{" "}
                    via email
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">
                    3
                  </span>
                  <span>
                    Once paid, your order ships <strong>directly to you</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all flex flex-col"
                >
                  <div className="p-5 flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl">{p.icon}</span>
                      <span className="text-xs font-medium px-2.5 py-1 bg-gray-100 text-gray-500 rounded-full">
                        {p.category}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                      {p.name}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {p.specs.map((s) => (
                        <span
                          key={s}
                          className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded font-medium"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="px-5 pb-5 pt-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-extrabold text-gray-900">
                        {fp(p.price)}
                      </span>
                      <button
                        onClick={() => {
                          setOrderProduct(p);
                          setOrderStatus("idle");
                        }}
                        className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Shipping Info */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                <span className="text-2xl mb-2 block">🚚</span>
                <h4 className="font-bold text-gray-900 mb-1">Shipping</h4>
                <p className="text-sm text-gray-500">
                  Delivery nationwide &amp; international. Shipping calculated
                  at checkout.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                <span className="text-2xl mb-2 block">🔒</span>
                <h4 className="font-bold text-gray-900 mb-1">Secure Payment</h4>
                <p className="text-sm text-gray-500">
                  Pay via PayPal — buyer protection on every order.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
                <span className="text-2xl mb-2 block">💬</span>
                <h4 className="font-bold text-gray-900 mb-1">Support</h4>
                <p className="text-sm text-gray-500">
                  Questions?{" "}
                  <a href="/contact" className="text-primary hover:underline">
                    Contact us
                  </a>{" "}
                  — we respond within 24 hours.
                </p>
              </div>
            </div>

            {/* Wholesale CTA */}
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm">
                Need bulk orders or business pricing?{" "}
                <a
                  href="/contact"
                  className="text-primary font-medium hover:underline"
                >
                  Contact us for wholesale quotes
                </a>
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Order Modal */}
      {orderProduct && orderStatus !== "sent" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setOrderProduct(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Order {orderProduct.name}
                  </h3>
                  <p className="text-primary font-extrabold text-xl">
                    {fp(orderProduct.price)}
                  </p>
                </div>
                <button
                  onClick={() => setOrderProduct(null)}
                  className="text-gray-400 hover:text-gray-600 p-1"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <form onSubmit={handleOrder} className="p-6 space-y-4">
              {orderStatus === "error" && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  Something went wrong. Please try again or email us at{" "}
                  <a href="mailto:solutions@dijisol.com" className="underline">
                    solutions@dijisol.com
                  </a>
                  .
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={orderForm.name}
                    onChange={(e) =>
                      setOrderForm({ ...orderForm, name: e.target.value })
                    }
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={orderForm.email}
                    onChange={(e) =>
                      setOrderForm({ ...orderForm, email: e.target.value })
                    }
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={orderForm.phone}
                  onChange={(e) =>
                    setOrderForm({ ...orderForm, phone: e.target.value })
                  }
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  placeholder="+27 82 123 4567"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Street Address
                </label>
                <input
                  type="text"
                  required
                  value={orderForm.address}
                  onChange={(e) =>
                    setOrderForm({ ...orderForm, address: e.target.value })
                  }
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  placeholder="123 Main Street, Apt 4"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    required
                    value={orderForm.city}
                    onChange={(e) =>
                      setOrderForm({ ...orderForm, city: e.target.value })
                    }
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="Johannesburg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    required
                    value={orderForm.postalCode}
                    onChange={(e) =>
                      setOrderForm({ ...orderForm, postalCode: e.target.value })
                    }
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                    placeholder="2000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <input
                  type="text"
                  required
                  value={orderForm.country}
                  onChange={(e) =>
                    setOrderForm({ ...orderForm, country: e.target.value })
                  }
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                  placeholder="South Africa"
                />
              </div>
              <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-500">
                After submitting, we&apos;ll email you a PayPal payment link.
                Your order ships once payment is confirmed.
              </div>
              <button
                type="submit"
                disabled={orderStatus === "sending"}
                className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
              >
                {orderStatus === "sending"
                  ? "Placing Order..."
                  : `Place Order — ${fp(orderProduct.price)}`}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Order Success Modal */}
      {orderProduct && orderStatus === "sent" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => {
            setOrderProduct(null);
            setOrderStatus("idle");
          }}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-accent"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Order Received!
            </h3>
            <p className="text-gray-500 mb-6">
              We&apos;ve received your order for{" "}
              <strong>{orderProduct.name}</strong>. Check your email —
              we&apos;ll send you a PayPal payment link shortly.
            </p>
            <button
              onClick={() => {
                setOrderProduct(null);
                setOrderStatus("idle");
              }}
              className="px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
