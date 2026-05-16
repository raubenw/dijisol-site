import Link from "next/link";

const SERVICES = [
  {
    icon: "WP",
    title: "WordPress Development & Maintenance",
    desc: "Professional WordPress websites with long-term support, responsive implementation, performance optimisation, and editor-friendly content management.",
  },
  {
    icon: "WEB",
    title: "Web Development",
    desc: "Professional organisational websites and digital platforms built for maintainability, accessibility, and long-term reliability.",
  },
  {
    icon: "SaaS",
    title: "SaaS Development",
    desc: "Full-stack Software-as-a-Service platforms with secure architecture, robust integrations, and structured delivery.",
  },
  {
    icon: "APP",
    title: "Android Apps",
    desc: "Mobile applications with dependable performance, clear UX, and practical implementation for real-world use.",
  },
  {
    icon: "AI",
    title: "AI Integration",
    desc: "Practical AI features added where they create clear value, supported by stable engineering and maintainable systems.",
  },
];

const PRODUCTS = [
  {
    name: "TradeQuotes",
    desc: "Digital platform for trades and quoting workflows.",
    url: "https://tradequotes.dijisol.com",
    badge: "Live",
    icon: "TQ",
  },
  {
    name: "Life By Priority",
    desc: "Goal planning and productivity platform with web and mobile delivery.",
    url: "https://lifebypriority.com",
    badge: "Live",
    icon: "LBP",
  },
  {
    name: "TrackingTrax",
    desc: "Finance and tracking platform for practical daily use.",
    url: "https://trackingtrax.com",
    badge: "Live",
    icon: "TT",
  },
  {
    name: "CliComp Agency",
    desc: "Business-focused agency platform and operational tools.",
    url: "https://clicomp.agency",
    badge: "Live",
    icon: "CC",
  },
];

const CLIENT_REFERENCES = [
  {
    name: "WALT PBM",
    desc: "International scientific organisation website maintained and supported for more than 10 years.",
  },
  {
    name: "CliComp Agency",
    desc: "Business-focused digital platform and agency tools.",
  },
  {
    name: "DijiSol",
    desc: "Internal company platform and digital services infrastructure.",
  },
];

const STATS = [
  { value: "10+", label: "Years Of Long-Term Support" },
  { value: "4+", label: "Products In Production" },
  { value: "100%", label: "Structured Delivery Focus" },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-dark via-dark-light to-dark">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-4xl">
            <p className="text-primary-light font-semibold text-sm uppercase tracking-wider mb-4">
              Trusted long-term support provider for international and
              research-oriented organisations
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Professional Web Development & Digital Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl leading-relaxed">
              DijiSol provides professional WordPress development, long-term
              website maintenance, SaaS platforms, and digital solutions for
              organisations, businesses, and research-oriented initiatives.
            </p>
            <p className="text-base md:text-lg text-gray-400 mb-10 max-w-3xl leading-relaxed">
              We deliver organisational websites with editor-friendly content
              management, dependable support, and structured implementation for
              communication teams and operational stakeholders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-base"
              >
                Discuss Your Requirements
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-primary hover:text-white transition-colors text-base"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-3 gap-8 text-center">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">
                  {s.value}
                </div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Professional Development & Long-Term Support
            </h2>
            <p className="mt-4 text-gray-500 max-w-3xl mx-auto">
              We build dependable digital platforms for associations,
              organisations, research initiatives, and businesses that need
              stable delivery and maintainable outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all group"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="text-primary font-semibold hover:underline text-sm"
            >
              Explore All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Ongoing Maintenance & Support
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We provide continued technical support after launch to ensure
            websites remain stable, secure, and up to date. Our support
            services include WordPress updates, troubleshooting, optimisation,
            backups, and long-term maintenance assistance.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
              Selected Clients & Projects
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Proven Long-Term Delivery
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLIENT_REFERENCES.map((item) => (
              <div
                key={item.name}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-7">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Accessibility & Performance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We prioritise responsive design, accessibility-conscious
              implementation, and performance optimisation to ensure websites
              remain usable, fast, and maintainable across devices and browsers.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-7">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Documentation & Handover
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We provide practical documentation and handover guidance to help
              teams manage website content and workflows after launch.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
              Our Products
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Digital Platforms In Production
            </h2>
            <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
              Practical, production-ready platforms developed with structured
              engineering and maintainable architecture.
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
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Professional Digital Delivery With Long-Term Reliability
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            We support organisations with dependable WordPress implementation,
            structured development, and ongoing technical support.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start A Professional Discussion
          </Link>
        </div>
      </section>
    </main>
  );
}
