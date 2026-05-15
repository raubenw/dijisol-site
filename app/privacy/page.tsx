import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | DijiSol",
  description:
    "Privacy Policy for DijiSol. Learn how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicy() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border-b border-gray-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg">
            Effective Date: May 15, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Our Commitment to Privacy
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              DijiSol ("we," "us," "our," or "Company") is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website dijisol.com and use our services.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Please read this Privacy Policy carefully. If you do not agree
              with our policies and practices, please do not use our services.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              1. Information We Collect
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Information You Provide Directly
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Contact information (name, email, phone number)</li>
                  <li>
                    Business information (company name, website URL, industry)
                  </li>
                  <li>Messages and communications you send to us</li>
                  <li>
                    Payment information (processed securely through third-party
                    providers)
                  </li>
                  <li>Project details and requirements you share with us</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Information Collected Automatically
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Browser type and operating system</li>
                  <li>IP address and location data</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website and navigation patterns</li>
                  <li>Device information and unique identifiers</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use the information we collect for purposes including:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Responding to your inquiries and providing services</li>
              <li>
                Processing transactions and sending related communications
              </li>
              <li>Improving our website and services</li>
              <li>Analyzing usage patterns and user preferences</li>
              <li>Marketing and promotional communications (with consent)</li>
              <li>Compliance with legal obligations</li>
              <li>Fraud prevention and security</li>
              <li>Contacting you about updates to our policies</li>
            </ul>
          </div>

          {/* Information Sharing */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              3. How We Share Your Information
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do not sell or rent your personal information. We may share
              your information in the following circumstances:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Service Providers
                </h3>
                <p className="text-gray-300">
                  We share information with vendors who assist us in operating
                  our website and conducting our business, such as payment
                  processors, hosting providers, and analytics services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Legal Requirements
                </h3>
                <p className="text-gray-300">
                  We may disclose information when required by law or when we
                  believe in good faith that disclosure is necessary to comply
                  with legal obligations, enforce our agreements, or protect
                  the rights and safety of our users and public.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Business Transfers
                </h3>
                <p className="text-gray-300">
                  If we are involved in a merger, acquisition, bankruptcy, or
                  sale of assets, your information may be part of that
                  transaction.
                </p>
              </div>
            </div>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              4. Data Security
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We implement appropriate technical and organizational security
              measures to protect your personal information against
              unauthorized access, alteration, disclosure, or destruction.
              However, no method of transmission over the Internet is 100%
              secure. While we strive to use commercially acceptable means to
              protect your information, we cannot guarantee its absolute
              security.
            </p>
          </div>

          {/* Cookies and Tracking */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              5. Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your
              experience on our website. You can control cookie preferences
              through your browser settings. Please note that disabling cookies
              may affect the functionality of our website.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We use analytics tools to understand how visitors interact with
              our website. This information helps us improve our services and
              user experience.
            </p>
          </div>

          {/* Your Rights */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              6. Your Privacy Rights
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Depending on your location, you may have certain rights
              regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Right to access your personal information</li>
              <li>Right to correct inaccurate data</li>
              <li>Right to request deletion of your data</li>
              <li>Right to opt-out of marketing communications</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent at any time</li>
            </ul>
            <p className="text-gray-300 mt-4">
              To exercise these rights, please contact us at{" "}
              <a
                href="mailto:dijitalsolutions@gmail.com"
                className="text-primary hover:text-primary-light transition-colors"
              >
                dijitalsolutions@gmail.com
              </a>
              .
            </p>
          </div>

          {/* Third-Party Links */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              7. Third-Party Links
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices of these external sites.
              This Privacy Policy applies only to information collected through
              our website. We encourage you to review the privacy policies of
              any third-party sites before providing your information.
            </p>
          </div>

          {/* Children's Privacy */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              8. Children's Privacy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our website and services are not intended for children under the
              age of 13. We do not knowingly collect personal information from
              children under 13. If we become aware that a child under 13 has
              provided us with personal information, we will take steps to
              delete such information and terminate the child's account.
            </p>
          </div>

          {/* Policy Updates */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              9. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes
              in our practices or applicable laws. We will notify you of
              material changes by updating the "Effective Date" at the top of
              this policy. Your continued use of our website after any changes
              constitutes your acceptance of the updated Privacy Policy.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              10. Contact Us
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or our privacy
              practices, please contact us:
            </p>
            <div className="bg-gray-800 rounded-lg p-6 space-y-3">
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wide">
                  Email
                </p>
                <a
                  href="mailto:dijitalsolutions@gmail.com"
                  className="text-primary hover:text-primary-light transition-colors"
                >
                  dijitalsolutions@gmail.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wide">
                  Website
                </p>
                <a
                  href="https://dijisol.com"
                  className="text-primary hover:text-primary-light transition-colors"
                >
                  dijisol.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <Link
            href="/"
            className="inline-flex items-center text-primary hover:text-primary-light transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
