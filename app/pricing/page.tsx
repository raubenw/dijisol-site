import Link from "next/link";

export default function PricingPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-dark via-dark-light to-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-light font-semibold text-sm uppercase tracking-wider mb-4">
              Pricing
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Transparent Pricing
            </h1>
            <p className="text-lg text-gray-400">
              Clear, honest pricing for every project. No hidden fees.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-6">💰</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Pricing Page Coming Soon
          </h2>
          <p className="text-gray-500 mb-8">
            We&apos;re finalizing our pricing packages for web development,
            SaaS, and app development. In the meantime, get in touch for a
            custom quote.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            Get a Custom Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
