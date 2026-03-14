"use client";
import Link from "next/link";

const SERVICES = [
  {
    icon: "🌐",
    title: "Web Development",
    subtitle: "Modern websites that convert",
    desc: "We design and build responsive, fast-loading websites using modern frameworks. Whether you need a business landing page, a portfolio site, or a complex multi-page application — we deliver clean, professional results.",
    features: [
      "Responsive design for all devices",
      "SEO-optimized from day one",
      "Fast loading with modern frameworks",
      "Custom designs tailored to your brand",
      "Content management systems",
      "Analytics and performance monitoring",
    ],
  },
  {
    icon: "🚀",
    title: "SaaS Development",
    subtitle: "Full-stack platforms built to scale",
    desc: "We build complete Software-as-a-Service platforms from the ground up. User authentication, dashboards, data management, billing integration, and robust APIs — all production-ready and scalable.",
    features: [
      "User authentication and role management",
      "Admin dashboards and analytics",
      "Database design and optimization",
      "API development and integration",
      "Cloud hosting and deployment",
      "Ongoing support and iteration",
    ],
  },
  {
    icon: "📱",
    title: "Android App Development",
    subtitle: "Apps your users will love",
    desc: "Native Android applications designed for performance and usability. We handle the full lifecycle — from design and development through Google Play Store listing and updates.",
    features: [
      "Native Android development",
      "Google Play Store publishing",
      "Push notifications and offline support",
      "Material Design UI/UX",
      "Backend API integration",
      "App maintenance and updates",
    ],
  },
  {
    icon: "🍎",
    title: "Apple iOS Development",
    subtitle: "Coming soon to the App Store",
    desc: "iOS applications for iPhone and iPad. We build polished, intuitive apps that meet Apple's quality standards and provide a seamless user experience.",
    features: [
      "Native iOS development",
      "App Store publishing",
      "iCloud and Apple services integration",
      "Elegant UI following Apple guidelines",
      "Universal apps (iPhone + iPad)",
      "Ongoing maintenance",
    ],
    comingSoon: true,
  },
  {
    icon: "🤖",
    title: "AI-Powered Features",
    subtitle: "Intelligent solutions for real problems",
    desc: "We integrate smart AI capabilities into your software — document analysis, image recognition, data extraction, intelligent recommendations, and natural language processing. Make your product smarter without the complexity.",
    features: [
      "Document and image analysis",
      "Automated data extraction",
      "Intelligent recommendations",
      "Natural language processing",
      "Quality control and validation",
      "Custom AI model integration",
    ],
  },
  {
    icon: "🛒",
    title: "E-Commerce Solutions",
    subtitle: "Sell online, your way",
    desc: "Online stores and digital product platforms. We build custom shopping experiences with secure checkout, inventory management, and payment processing — tailored to your business model.",
    features: [
      "Custom storefront design",
      "Secure payment processing",
      "Product and inventory management",
      "Order tracking and notifications",
      "Digital product delivery",
      "Multi-currency support",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark via-dark-light to-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-light font-semibold text-sm uppercase tracking-wider mb-4">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Full-Stack Digital Development
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              From concept to launch, we handle every aspect of your digital product.
              Built with modern technology, powered by intelligent solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className={`flex flex-col md:flex-row gap-10 items-start ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{s.icon}</span>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{s.title}</h2>
                      <p className="text-sm text-primary font-medium">{s.subtitle}</p>
                    </div>
                    {s.comingSoon && (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-yellow-100 text-yellow-700">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                  <Link
                    href="/contact"
                    className="text-primary font-semibold hover:underline text-sm"
                  >
                    Discuss Your {s.title} Project &rarr;
                  </Link>
                </div>
                <div className="flex-1 w-full">
                  <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                    <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">What&apos;s Included</h4>
                    <ul className="space-y-3">
                      {s.features.map((f) => (
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
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Simple &amp; Transparent Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We discuss your project, goals, and requirements in detail." },
              { step: "02", title: "Proposal", desc: "You receive a clear scope, timeline, and fixed-price quote." },
              { step: "03", title: "Build", desc: "We develop your project with regular updates and demos." },
              { step: "04", title: "Launch", desc: "We deploy, test, and hand over — with ongoing support." },
            ].map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-12 h-12 bg-primary text-white font-bold rounded-lg flex items-center justify-center text-lg mx-auto mb-4">
                  {p.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-sm text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Let&apos;s Build Your Next Project
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Tell us about your idea. We&apos;ll respond with a free consultation and honest assessment.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
