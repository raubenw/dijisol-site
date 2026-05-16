import Link from "next/link";

const SERVICES = [
  {
    title: "WordPress Development & Maintenance",
    subtitle: "Professional websites with long-term support",
    desc: "Professional WordPress websites with long-term support, responsive implementation, performance optimisation, and editor-friendly content management.",
    features: [
      "Custom WordPress development",
      "Responsive frontend implementation",
      "Long-term maintenance and support",
      "Plugin and update management",
      "Performance optimisation",
      "SEO-ready structure",
      "Content management workflows",
      "Security and backup best practices",
    ],
  },
  {
    title: "Organisational Website Development",
    subtitle: "Dependable platforms for institutions and associations",
    desc: "We design and build organisational websites for associations, organisations, institutions, and research initiatives with structured delivery and maintainable architecture.",
    features: [
      "Structured information architecture",
      "Responsive and accessibility-conscious implementation",
      "Editor-friendly page structures",
      "SEO and metadata foundations",
      "Performance-focused frontend delivery",
      "Technical documentation and handover",
    ],
  },
  {
    title: "SaaS Development",
    subtitle: "Secure digital platforms built for operational continuity",
    desc: "We build SaaS platforms with clear architecture, secure integrations, and maintainable implementation standards for long-term reliability.",
    features: [
      "Authentication and role-based permissions",
      "Admin and reporting dashboards",
      "Database and API architecture",
      "Integration-ready platform design",
      "Cloud deployment and monitoring",
      "Support and maintenance planning",
    ],
  },
  {
    title: "Android App Development",
    subtitle: "Reliable mobile solutions for practical use",
    desc: "Native Android applications with clear UX, dependable performance, and maintainable implementation.",
    features: [
      "Native Android implementation",
      "Google Play deployment",
      "API and backend integration",
      "Support and update planning",
      "Structured testing approach",
      "Post-release maintenance",
    ],
  },
  {
    title: "AI Integration",
    subtitle: "Applied intelligence where it creates clear value",
    desc: "We add AI features where they improve workflows and outcomes, while keeping systems stable, understandable, and maintainable.",
    features: [
      "Workflow-aware AI integration",
      "Document and data extraction",
      "Search and recommendation improvements",
      "Validation and quality controls",
      "Human-in-the-loop safeguards",
      "Maintainable implementation approach",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-dark via-dark-light to-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-primary-light font-semibold text-sm uppercase tracking-wider mb-4">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Professional Digital Development With Long-Term Support
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
              We deliver WordPress expertise, SaaS development, and digital
              platform support for organisations, businesses, and
              research-oriented initiatives.
            </p>
          </div>
        </div>
      </section>

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
                  <div className="mb-3">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {s.title}
                    </h2>
                    <p className="text-sm text-primary font-medium">
                      {s.subtitle}
                    </p>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                  <Link
                    href="/contact"
                    className="text-primary font-semibold hover:underline text-sm"
                  >
                    Discuss This Service &rarr;
                  </Link>
                </div>
                <div className="flex-1 w-full">
                  <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                    <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-4">
                      What&apos;s Included
                    </h4>
                    <ul className="space-y-3">
                      {s.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-3 text-sm text-gray-600"
                        >
                          <svg
                            className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
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

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
              How We Work
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Structured And Transparent Delivery Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We align on goals, stakeholders, and practical project requirements.",
              },
              {
                step: "02",
                title: "Proposal",
                desc: "You receive a clear scope, timeline, and delivery approach.",
              },
              {
                step: "03",
                title: "Development & Review",
                desc: "Implementation with milestone reviews and transparent progress updates.",
              },
              {
                step: "04",
                title: "Launch & Ongoing Support",
                desc: "Go-live support, maintenance planning, and long-term technical continuity.",
              },
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

      <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Need Professional WordPress Support Or Platform Development?
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            We provide dependable implementation and ongoing support for
            organisational websites and digital platforms.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact DijiSol
          </Link>
        </div>
      </section>
    </main>
  );
}
