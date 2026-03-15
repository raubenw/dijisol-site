import Link from "next/link";

export default function PortfolioPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-dark via-dark-light to-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-light font-semibold text-sm uppercase tracking-wider mb-4">
              Portfolio
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Case Studies &amp; Portfolio
            </h1>
            <p className="text-lg text-gray-400">
              Detailed breakdowns of projects we&apos;ve built and the results
              they achieved.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-6">📋</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Case Studies Coming Soon
          </h2>
          <p className="text-gray-500 mb-8">
            We&apos;re documenting our project stories including challenges,
            solutions, and outcomes. Check out our live products in the
            meantime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm"
            >
              View Products
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-primary hover:text-primary transition-colors text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
