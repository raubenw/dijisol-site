"use client";
import Link from "next/link";

const SERVICES = [
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Modern, responsive websites built with cutting-edge technology. From landing pages to complex web applications.",
  },
  {
    icon: "🚀",
    title: "SaaS Development",
    desc: "Full-stack Software-as-a-Service platforms with user management, billing, and scalable architecture.",
  },
  {
    icon: "📱",
    title: "Android Apps",
    desc: "Native Android applications published to the Google Play Store. Clean UX and reliable performance.",
  },
  {
    icon: "🤖",
    title: "AI Integration",
    desc: "Intelligent features powered by modern AI — from document extraction to smart recommendations.",
  },
];

const PRODUCTS = [
  {
    name: "TradeQuotes",
    desc: "AI-powered quote generator for tradespeople. Upload a sketch, get a professional quote in minutes.",
    url: "https://quotes-67f32.web.app",
    badge: "Live",
    icon: "🔧",
  },
  {
    name: "Life By Priority",
    desc: "Goal setting and life planning app. Available on web and Google Play Store.",
    url: "https://lifebypriority.com",
    badge: "Live",
    icon: "🎯",
  },
  {
    name: "TrackingTrax",
    desc: "Budget and finance tracking app to help you take control of your money.",
    url: "https://trackingtrax.com",
    badge: "Live",
    icon: "💰",
  },
  {
    name: "CliComp Agency",
    desc: "AI-powered client finder and competitor analysis tool for agencies.",
    url: "https://clicomp.agency",
    badge: "Live",
    icon: "🔍",
  },
];

const STATS = [
  { value: "4+", label: "Products Shipped" },
  { value: "8", label: "Industries Served" },
  { value: "100%", label: "Client Focused" },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark via-dark-light to-dark">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <p className="text-primary-light font-semibold text-sm uppercase tracking-wider mb-4">
              Digital Solutions That Deliver
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              We Build Software That{" "}
              <span className="gradient-text">Grows Your Business</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
              From websites and SaaS platforms to mobile apps with intelligent AI features —
              we turn your ideas into production-ready digital products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-base"
              >
                Start Your Project
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-primary hover:text-white transition-colors text-base"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-3 gap-8 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">{s.value}</div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              End-to-End Digital Development
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              We build intelligent solutions powered by modern technology. Whatever your digital need, we&apos;ve got you covered.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all group"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="text-primary font-semibold hover:underline text-sm">
              Explore All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Our Products</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Software We&apos;ve Built &amp; Shipped
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Real products, live in production, serving real users. This is what we do — and we can build it for you too.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRODUCTS.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener"
                className="block bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{p.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                        {p.name}
                      </h3>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-accent/10 text-accent">
                        {p.badge}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/products" className="text-primary font-semibold hover:underline text-sm">
              View All Products &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Whether you need a website, a SaaS platform, a mobile app, or smart AI features —
            let&apos;s talk about your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:border-white/60 transition-colors"
            >
              Browse Our Shop
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
