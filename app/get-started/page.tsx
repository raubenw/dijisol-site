import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Started | DijiSol",
  description:
    "Professional websites for $50 with hosting, plus mobile app and SaaS development services.",
};

const WEBSITE_FEATURES = [
  {
    icon: "🌐",
    title: "Professional Website",
    desc: "A modern, mobile-responsive website tailored to your business.",
  },
  {
    icon: "🏪",
    title: "Online Shop (up to 15 products)",
    desc: "Start selling online with a fully functional e-commerce store.",
  },
  {
    icon: "☁️",
    title: "1 Year Hosting",
    desc: "Fast, secure web hosting included for the first year.",
  },
  {
    icon: "📱",
    title: "Mobile Friendly",
    desc: "Your site looks perfect on phones, tablets, and desktops.",
  },
  {
    icon: "🔍",
    title: "SEO Optimised",
    desc: "Built with search engine optimisation so customers can find you.",
  },
];

const APP_SERVICES = [
  {
    icon: "🤖",
    title: "Android Apps",
    desc: "Custom Android applications published to the Google Play Store. Clean design, reliable performance, and seamless user experience.",
  },
  {
    icon: "🍎",
    title: "iOS / Apple Apps",
    desc: "Beautiful iOS apps for iPhone and iPad, built with Xcode and published to the Apple App Store.",
  },
];

const PRODUCTS = [
  {
    icon: "🔧",
    title: "TradeQuotes",
    desc: "AI-powered quote generator for tradespeople. Upload a sketch, get a professional quote in minutes.",
    href: "https://tradequotes.dijisol.com/",
  },
  {
    icon: "🎯",
    title: "Life By Priority",
    desc: "Goal setting and life planning app. Available on web and Google Play Store.",
    href: "https://lifebypriority.com/",
  },
  {
    icon: "💰",
    title: "TrackingTrax",
    desc: "Budget and finance tracking app to help you take control of your money.",
    href: "https://trackingtrax.com/",
  },
  {
    icon: "🔍",
    title: "CliComp Agency",
    desc: "AI-powered client finder and competitor analysis tool for agencies.",
    href: "https://clicomp.agency/",
  },
];

const CTA_FEATURES = [
  "1 Year Hosting Included",
  "Mobile Responsive",
  "SEO Ready",
];

export default function GetStartedPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-dark via-dark-light to-dark text-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-10 left-8 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-semibold uppercase tracking-wide">
            Limited Offer
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Professional Websites for Only
            <span className="block text-accent">$50</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-300">
            Launch with a conversion-focused website and one year of hosting.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Get Started Today
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition-colors hover:border-white/60"
            >
              Talk to DijiSol
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-200">
            {CTA_FEATURES.map((item) => (
              <span key={item} className="rounded-full border border-white/20 bg-white/10 px-3 py-1">
                ✓ {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="offer" className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">What You Get for $50</h2>
            <p className="mt-3 text-gray-500">
              Need more than 15 products? No problem. Contact us for a custom quote.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WEBSITE_FEATURES.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="mb-3 text-3xl">{feature.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{feature.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="#contact" className="font-semibold text-primary hover:underline">
              Get Your Website Now →
            </Link>
          </div>
        </div>
      </section>

      <section id="apps" className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">We Also Build Mobile Apps</h2>
            <p className="mt-3 text-gray-500">Native apps for Android and Apple iOS</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {APP_SERVICES.map((service) => (
              <article key={service.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-3 text-3xl">{service.icon}</div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{service.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="#contact" className="font-semibold text-primary hover:underline">
              Discuss Your App Idea →
            </Link>
          </div>
        </div>
      </section>

      <section id="saas" className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Custom SaaS Solutions</h2>
            <p className="mx-auto mt-4 max-w-4xl text-gray-600">
              A SaaS product is software that runs in the cloud. Your customers access it through a web browser or app, usually on a monthly subscription. No installation needed, automatic updates, and accessible from anywhere. We build complete SaaS platforms with user management, billing integration, and scalable architecture.
            </p>
          </div>

          <h3 className="mb-6 text-2xl font-bold text-gray-900">Software We&apos;ve Built &amp; Shipped</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {PRODUCTS.map((product) => (
              <a
                key={product.title}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-3xl">{product.icon}</span>
                  <span className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                    Live
                  </span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 transition-colors group-hover:text-primary">
                  {product.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{product.desc}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-primary">Visit →</span>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="#contact" className="font-semibold text-primary hover:underline">
              Let&apos;s Build Your SaaS Product →
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Get Online Today</h2>
            <p className="mt-3 text-gray-500">
              Ready to take your business online? Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <form className="grid grid-cols-1 gap-4 sm:grid-cols-2" action="/contact" method="get">
              <label className="text-sm font-medium text-gray-700">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none ring-primary/20 transition focus:border-primary focus:ring"
                />
              </label>

              <label className="text-sm font-medium text-gray-700">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none ring-primary/20 transition focus:border-primary focus:ring"
                />
              </label>

              <label className="text-sm font-medium text-gray-700">
                Phone
                <input
                  type="tel"
                  name="phone"
                  placeholder="e.g. +1 555 123 4567"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none ring-primary/20 transition focus:border-primary focus:ring"
                />
              </label>

              <label className="text-sm font-medium text-gray-700">
                What do you need?
                <select
                  name="service"
                  className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none ring-primary/20 transition focus:border-primary focus:ring"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Website $50</option>
                  <option>Online Shop</option>
                  <option>Mobile App</option>
                  <option>SaaS Product</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="sm:col-span-2 text-sm font-medium text-gray-700">
                Message
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none ring-primary/20 transition focus:border-primary focus:ring"
                />
              </label>

              <div className="sm:col-span-2 flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Send Enquiry
                </button>
                <Link
                  href="/contact"
                  className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-400"
                >
                  Open Full Contact Form
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
