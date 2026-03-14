"use client";
import Link from "next/link";

const PRODUCTS = [
  {
    name: "TradeQuotes",
    tagline: "AI-Powered Quoting for Tradespeople",
    desc: "Upload a hand-drawn sketch, photo, or PDF — and get a professional quote in minutes. Supports 8 trades including granite countertops, tiling, plumbing, electrical, painting, pest control, carpentry, and landscaping.",
    url: "https://quotes-67f32.web.app",
    icon: "🔧",
    status: "Live",
    features: [
      "AI measurement extraction from sketches and photos",
      "Professional PDF quote and job card generation",
      "CAD technical drawing generator",
      "Multi-trade support (8 industries)",
      "Quality control with AI scoring",
      "Client and project management",
    ],
  },
  {
    name: "Life By Priority",
    tagline: "Goal Setting & Life Planning",
    desc: "A focused goal-setting app that helps you prioritize what matters most. Set goals, track progress, and build the life you want — one priority at a time. Available on web and Google Play Store.",
    url: "https://lifebypriority.com",
    icon: "🎯",
    status: "Live",
    features: [
      "Priority-based goal framework",
      "Progress tracking and streaks",
      "Available on web and Android",
      "Clean, distraction-free interface",
      "Daily and weekly planning tools",
      "Export and share your goals",
    ],
  },
  {
    name: "TrackingTrax",
    tagline: "Budget & Finance Tracking",
    desc: "Take control of your money with intuitive budget tracking. Log expenses, set budgets, visualize spending patterns, and make smarter financial decisions.",
    url: "https://trackingtrax.com",
    icon: "💰",
    status: "Live",
    features: [
      "Expense logging and categorization",
      "Budget setting and alerts",
      "Visual spending analytics",
      "Multi-currency support",
      "Export financial reports",
      "Secure and private",
    ],
  },
  {
    name: "CliComp Agency",
    tagline: "AI Client Finder & Competitor Analysis",
    desc: "An AI-powered tool for agencies to discover new client leads and analyze competitor strategies. Build a pipeline of qualified prospects with intelligent market analysis.",
    url: "https://clicomp.agency",
    icon: "🔍",
    status: "Live",
    features: [
      "AI-powered lead discovery",
      "Competitor analysis and benchmarking",
      "Market opportunity scoring",
      "Prospect pipeline management",
      "Automated outreach suggestions",
      "Industry and niche filtering",
    ],
  },
];

export default function ProductsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark via-dark-light to-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-light font-semibold text-sm uppercase tracking-wider mb-4">Our Products</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Software We&apos;ve Built &amp; Shipped
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              Real products, live in production, solving real problems. Every one of these was built by DijiSol — and we can build something like this for you too.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {PRODUCTS.map((p, i) => (
            <div
              key={p.name}
              className={`flex flex-col md:flex-row gap-10 items-start ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-4xl">{p.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{p.name}</h2>
                    <p className="text-sm text-primary font-medium">{p.tagline}</p>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-accent/10 text-accent">
                    {p.status}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed my-4">{p.desc}</p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm"
                >
                  Visit {p.name}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                        <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Need Something Like This?
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Every product above was built from scratch by DijiSol.
            Tell us about your idea and we&apos;ll make it real.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}
