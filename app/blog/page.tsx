import Link from "next/link";

export default function BlogPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-dark via-dark-light to-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-light font-semibold text-sm uppercase tracking-wider mb-4">
              Blog
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Insights &amp; Updates
            </h1>
            <p className="text-lg text-gray-400">
              Lessons from building products, development tips, and business
              insights.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-6">📝</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
          <p className="text-gray-500 mb-8">
            We&apos;re preparing articles on development, building in public,
            and digital business. Follow us on X for early updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://x.com/BydesignIlive"
              target="_blank"
              rel="noopener"
              className="px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm"
            >
              Follow on X
            </a>
            <Link
              href="/"
              className="px-6 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-primary hover:text-primary transition-colors text-sm"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
