import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-dark via-dark-light to-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-primary-light font-semibold text-sm uppercase tracking-wider mb-4">
              About DijiSol
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Professional Digital Development With Long-Term Support
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
              We focus on practical, dependable digital solutions with clear
              communication, structured delivery, and long-term support.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
            How We Deliver
          </h2>
          <div className="prose prose-lg text-gray-600 space-y-6">
            <p>
              DijiSol provides professional WordPress development, long-term
              website maintenance, SaaS platforms, and digital solutions for
              organisations, businesses, and research-oriented initiatives.
            </p>
            <p>
              We prioritise dependable execution, strong communication, and
              maintainable delivery standards. Our work supports both immediate
              project requirements and long-term operational continuity.
            </p>
            <p>
              We build editor-friendly WordPress implementations that allow
              non-technical teams to confidently manage and publish content.
              Our support model includes updates, troubleshooting, optimisation,
              backups, and practical long-term maintenance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Delivery Principles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Dependable Delivery",
                desc: "Structured planning, practical execution, and clear milestones from project start through handover.",
              },
              {
                title: "Collaborative Communication",
                desc: "Clear communication with stakeholders, communication teams, and technical teams throughout delivery.",
              },
              {
                title: "Long-Term Support",
                desc: "Ongoing maintenance and support to keep websites and digital platforms secure, stable, and current.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-xl p-8 border border-gray-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Core Technology Stack
            </h2>
            <p className="mt-4 text-gray-500">
              WordPress, modern web engineering, SaaS architecture, and
              maintainable delivery tooling
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              "WordPress",
              "PHP",
              "Next.js",
              "TypeScript",
              "React",
              "Tailwind CSS",
              "Firebase",
              "Google Cloud",
              "Node.js",
              "PostgreSQL",
              "SEO Foundations",
              "Performance Tooling",
            ].map((t) => (
              <div
                key={t}
                className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-sm font-medium text-gray-700"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
            Looking For A Long-Term Digital Partner?
          </h2>
          <p className="text-lg text-blue-100 mb-10">
            We support organisational websites and digital platforms with
            dependable delivery and continued support.
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
