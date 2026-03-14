"use client";

const DIGITAL_PRODUCTS = [
  {
    name: "TradeQuotes Pro",
    desc: "AI-powered quoting tool for tradespeople. Generate professional quotes from sketches in minutes.",
    price: "Coming Soon",
    icon: "🔧",
    url: "https://quotes-67f32.web.app",
    type: "SaaS Subscription",
  },
  {
    name: "Life By Priority",
    desc: "Goal setting and life planning app. Available on web and Google Play Store.",
    price: "Free",
    icon: "🎯",
    url: "https://lifebypriority.com",
    type: "Web App",
  },
  {
    name: "TrackingTrax",
    desc: "Budget and finance tracking app. Take control of your money.",
    price: "Free",
    icon: "💰",
    url: "https://trackingtrax.com",
    type: "Web App",
  },
  {
    name: "CliComp Agency",
    desc: "AI-powered client finder and competitor analysis for agencies.",
    price: "Coming Soon",
    icon: "🔍",
    url: "https://clicomp.agency",
    type: "SaaS Tool",
  },
];

const TECH_PRODUCTS = [
  {
    name: "Laptops & Notebooks",
    desc: "Refurbished and new laptops from trusted brands. Perfect for business, development, and everyday use.",
    price: "From $299",
    icon: "💻",
    type: "Hardware",
    comingSoon: true,
  },
  {
    name: "Smartphones",
    desc: "Quality smartphones at competitive prices. Android and iOS devices available.",
    price: "From $149",
    icon: "📱",
    type: "Hardware",
    comingSoon: true,
  },
  {
    name: "Tablets & Accessories",
    desc: "Tablets, cases, chargers, and accessories for your digital lifestyle.",
    price: "From $99",
    icon: "📟",
    type: "Hardware",
    comingSoon: true,
  },
  {
    name: "Networking & Peripherals",
    desc: "Routers, keyboards, mice, monitors, and everything you need for your setup.",
    price: "From $29",
    icon: "🖥️",
    type: "Hardware",
    comingSoon: true,
  },
];

export default function ShopPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark via-dark-light to-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-light font-semibold text-sm uppercase tracking-wider mb-4">DijiSol Shop</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Software &amp; Tech Products
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              Digital tools to grow your business and quality tech hardware at competitive prices.
            </p>
          </div>
        </div>
      </section>

      {/* Digital Products */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Digital Products</h2>
            <p className="text-gray-500">Software tools and SaaS applications built by DijiSol</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DIGITAL_PRODUCTS.map((p) => (
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
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                        {p.name}
                      </h3>
                      <span className="text-sm font-bold text-primary">{p.price}</span>
                    </div>
                    <span className="text-xs text-gray-400 font-medium">{p.type}</span>
                    <p className="text-sm text-gray-500 leading-relaxed mt-2">{p.desc}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Physical Tech */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Tech Hardware</h2>
            <p className="text-gray-500">Quality technology products at competitive prices</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TECH_PRODUCTS.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-xl p-6 border border-gray-200 relative"
              >
                {p.comingSoon && (
                  <span className="absolute top-4 right-4 text-xs font-semibold px-2 py-0.5 rounded bg-yellow-100 text-yellow-700">
                    Coming Soon
                  </span>
                )}
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{p.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{p.name}</h3>
                    <span className="text-xs text-gray-400 font-medium">{p.type}</span>
                    <p className="text-sm text-gray-500 leading-relaxed mt-2">{p.desc}</p>
                    <p className="text-sm font-bold text-primary mt-3">{p.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Notify */}
          <div className="mt-12 text-center bg-white rounded-xl border border-gray-200 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Tech Store Opening Soon</h3>
            <p className="text-gray-500 mb-6 max-w-lg mx-auto">
              We&apos;re setting up our hardware store with competitive pricing on laptops, phones, and accessories. Follow us for updates.
            </p>
            <a
              href="https://x.com/BydesignIlive"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors text-sm"
            >
              Follow @BydesignIlive for Updates
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
