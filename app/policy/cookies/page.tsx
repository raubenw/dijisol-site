import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | DijiSol",
  description:
    "Cookie Policy for DijiSol. Learn how and why cookies are used on our website.",
};

export default function CookiePolicyPage() {
  return (
    <main>
      <section className="relative bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border-b border-gray-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-white text-lg">Effective Date: 1 January 2026</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              What Are Cookies
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Cookies are small text files stored on your device when you visit
              a website. They help websites function correctly, improve user
              experience, and provide useful usage insights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              How DijiSol Uses Cookies
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use cookies to support secure and reliable website operation,
              remember user preferences, and understand overall website
              performance.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Essential cookies for core site functionality</li>
              <li>Preference cookies for user experience settings</li>
              <li>Analytics cookies to understand site usage patterns</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Managing Cookie Preferences
            </h2>
            <p className="text-gray-300 leading-relaxed">
              You can accept or decline non-essential cookies through our cookie
              consent banner. You can also control cookies through your browser
              settings. Disabling some cookies may affect parts of site
              functionality.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may use trusted third-party tools for analytics and platform
              performance monitoring. These services may set their own cookies
              in line with their privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Contact
            </h2>
            <p className="text-gray-300 leading-relaxed">
              If you have questions about our Cookie Policy, contact us at{" "}
              <a
                href="mailto:solutions@dijisol.com"
                className="text-primary hover:text-primary-light transition-colors"
              >
                solutions@dijisol.com
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <Link
            href="/"
            className="inline-flex items-center text-primary hover:text-primary-light transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
