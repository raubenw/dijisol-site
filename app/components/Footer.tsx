import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold">
                <span className="text-primary-light">Diji</span>Sol
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Digital solutions that drive real results. We build software,
              websites, and apps that grow your business.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  SaaS Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Android Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  AI Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
              Products
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition-colors"
                >
                  TradeQuotes
                </Link>
              </li>
              <li>
                <a
                  href="https://lifebypriority.com"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-white transition-colors"
                >
                  Life By Priority
                </a>
              </li>
              <li>
                <a
                  href="https://trackingtrax.com"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-white transition-colors"
                >
                  TrackingTrax
                </a>
              </li>
              <li>
                <a
                  href="https://clicomp.agency"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-white transition-colors"
                >
                  CliComp Agency
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="https://x.com/BydesignIlive"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-white transition-colors"
                >
                  X / Twitter
                </a>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="hover:text-white transition-colors"
                >
                  Shop
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} DijiSol. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <Link
              href="/privacy"
              className="hover:text-gray-300 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-gray-300 transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
