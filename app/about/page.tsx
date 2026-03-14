"use client";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark via-dark-light to-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-light font-semibold text-sm uppercase tracking-wider mb-4">About DijiSol</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              We Build. We Ship. We Iterate.
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              DijiSol is a digital development studio focused on building real software that solves real problems — without the enterprise overhead.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Our Story</h2>
          <div className="prose prose-lg text-gray-600 space-y-6">
            <p>
              DijiSol started with a simple belief: great software doesn&apos;t need to cost a fortune
              or take forever to build. We&apos;ve shipped multiple products — from AI-powered quoting tools
              to goal-setting apps — and every one taught us something new.
            </p>
            <p>
              We build in public, learn from every launch, and focus on what actually works.
              No hype. No guru promises. Just solid development and honest results.
            </p>
            <p>
              Our approach combines modern development frameworks with intelligent AI capabilities
              to deliver products that are both powerful and practical. Whether it&apos;s a website for
              your business, a SaaS platform for your customers, or a mobile app for the Play Store —
              we handle the full journey from concept to production.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Ship Fast, Iterate Often",
                desc: "We get your product live quickly, then improve based on real feedback — not assumptions.",
                icon: "⚡",
              },
              {
                title: "Transparent & Honest",
                desc: "Clear pricing, realistic timelines, and open communication. You always know where your project stands.",
                icon: "🤝",
              },
              {
                title: "Built to Last",
                desc: "We use proven, modern technology stacks. Your product won't be stuck on outdated frameworks.",
                icon: "🏗️",
              },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-8 border border-gray-200">
                <span className="text-3xl mb-4 block">{v.icon}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Technology</h2>
            <p className="mt-4 text-gray-500">Modern, proven tools that deliver results</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              "Next.js", "React", "TypeScript", "Tailwind CSS",
              "Firebase", "Google Cloud", "Node.js", "Android Studio",
              "Google AI", "PostgreSQL", "jsPDF", "HTML Canvas",
            ].map((t) => (
              <div key={t} className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-sm font-medium text-gray-700">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-blue-100 mb-10">
            Have a project in mind? We&apos;d love to hear about it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
