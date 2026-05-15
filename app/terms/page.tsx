import Link from "next/link";

export const metadata = {
  title: "Terms of Service | DijiSol",
  description:
    "Terms of Service for DijiSol. Read our terms and conditions for using our website and services.",
};

export default function TermsOfService() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 border-b border-gray-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
            Terms of Service
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
              Agreement to Terms
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              These Terms of Service ("Terms") constitute a legally binding
              agreement between you and DijiSol ("Company," "we," "us," or
              "our") governing your access to and use of our website
              (dijisol.com) and our services. By accessing or using our
              website and services, you acknowledge that you have read,
              understood, and agree to be bound by these Terms.
            </p>
            <p className="text-gray-300 leading-relaxed">
              If you do not agree to these Terms, you may not access or use our
              website or services. We reserve the right to modify these Terms
              at any time. Your continued use of our services following the
              posting of revised Terms means you accept and agree to the
              changes.
            </p>
          </div>

          {/* Use License */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              1. Use License
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We grant you a limited, non-exclusive, non-transferable,
              revocable license to access and use our website and services
              subject to these Terms. This license does not include:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Modifying or copying materials</li>
              <li>Using materials for any commercial purpose</li>
              <li>
                Attempting to decompile or reverse engineer any software on our
                website
              </li>
              <li>Removing any copyright or proprietary notices</li>
              <li>Transferring materials to another person or "mirroring"</li>
              <li>Accessing our website through automated means</li>
              <li>
                Harassing, threatening, or violating laws through our website
              </li>
            </ul>
          </div>

          {/* Disclaimer of Warranties */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              2. Disclaimer of Warranties
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The materials and services on our website are provided on an "as
              is" and "as available" basis. DijiSol makes no warranties, either
              expressed or implied, regarding the website, services, or
              materials. This includes warranties of merchantability, fitness
              for a particular purpose, and non-infringement.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We do not warrant that the website will be uninterrupted, secure,
              error-free, or free of viruses or other harmful components. We
              are not liable for any damages resulting from your use of or
              inability to use the website or services.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              3. Limitation of Liability
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              In no event shall DijiSol be liable for any damages (including
              direct, indirect, incidental, special, consequential, or punitive
              damages) arising out of or related to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Your use of or inability to use the website or services</li>
              <li>Any unauthorized access or use of our website</li>
              <li>
                Any interruption or cessation of transmission to/from our
                website
              </li>
              <li>Any bugs, viruses, or harmful code transmitted</li>
              <li>Any content, products, or services obtained through our site</li>
              <li>Your reliance on information obtained from our website</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              This applies even if DijiSol has been advised of the possibility
              of such damages.
            </p>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              4. Intellectual Property Rights
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              All content on our website, including text, graphics, logos,
              images, and software, is the property of DijiSol or our content
              suppliers and is protected by international copyright laws.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Your Content
                </h3>
                <p className="text-gray-300">
                  By submitting content to our website (including comments,
                  feedback, or project details), you grant DijiSol a
                  non-exclusive, royalty-free license to use, reproduce,
                  modify, and distribute your content.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Trademarks
                </h3>
                <p className="text-gray-300">
                  DijiSol, our logo, and other marks are trademarks of DijiSol.
                  Any unauthorized use of these marks is prohibited.
                </p>
              </div>
            </div>
          </div>

          {/* Service Terms */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              5. Service Terms and Conditions
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Scope of Services
                </h3>
                <p className="text-gray-300">
                  Our services are provided as described on our website. We
                  reserve the right to modify or discontinue services at any
                  time without notice.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Payment Terms
                </h3>
                <p className="text-gray-300">
                  Payment for services is due as specified in your project
                  agreement. We accept various payment methods. All prices are
                  in the currency specified and include applicable taxes unless
                  stated otherwise.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Invoicing
                </h3>
                <p className="text-gray-300">
                  Invoices will be provided as agreed. Payment must be received
                  within the terms specified on the invoice. Accounts not paid
                  may result in suspension of services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Project Scope Changes
                </h3>
                <p className="text-gray-300">
                  Changes to project scope requested after the initial agreement
                  may result in additional fees or timeline adjustments.
                </p>
              </div>
            </div>
          </div>

          {/* User Conduct */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              6. User Conduct
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>
                Engage in any conduct that restricts or inhibits anyone from
                using our website
              </li>
              <li>Post or transmit obscene, offensive, or illegal content</li>
              <li>Disrupt the normal flow of our website</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Collect or track personal information of others</li>
              <li>Spam or send unsolicited communications</li>
              <li>Engage in fraudulent activities</li>
            </ul>
          </div>

          {/* Indemnification */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              7. Indemnification
            </h2>
            <p className="text-gray-300 leading-relaxed">
              You agree to indemnify, defend, and hold harmless DijiSol and our
              officers, directors, employees, and agents from any claims,
              damages, losses, or expenses arising out of or related to your
              use of the website, violation of these Terms, or infringement of
              any intellectual property or other rights.
            </p>
          </div>

          {/* Termination */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              8. Termination
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to terminate or suspend your access to our
              website and services immediately, without prior notice or
              liability, for any reason including if you breach these Terms or
              engage in conduct we deem inappropriate. Upon termination, your
              right to use our website and services ceases immediately.
            </p>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              9. Governing Law and Jurisdiction
            </h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms are governed by and construed in accordance with the
              laws of the jurisdiction where DijiSol operates, without regard
              to its conflict of law principles. You agree to submit to the
              exclusive jurisdiction of the courts located in that jurisdiction
              for resolution of any disputes.
            </p>
          </div>

          {/* Dispute Resolution */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              10. Dispute Resolution
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Before pursuing legal action, you agree to attempt to resolve any
              dispute with DijiSol through good faith negotiation. If negotiation
              fails, you agree to pursue mediation or arbitration as a final
              remedy before filing any legal action.
            </p>
          </div>

          {/* Severability */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              11. Severability
            </h2>
            <p className="text-gray-300 leading-relaxed">
              If any provision of these Terms is found to be unenforceable or
              invalid, that provision will be limited or eliminated to the
              minimum extent necessary, and the remaining provisions will
              remain in full force and effect.
            </p>
          </div>

          {/* Entire Agreement */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              12. Entire Agreement
            </h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms, together with our Privacy Policy and any other
              agreements you have with DijiSol, constitute the entire agreement
              between you and DijiSol regarding your use of our website and
              services. These Terms supersede all prior or contemporaneous
              agreements, understandings, or communications.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              13. Contact Us
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have questions about these Terms of Service, please
              contact us:
            </p>
            <div className="bg-gray-800 rounded-lg p-6 space-y-3">
              <div>
                <p className="text-gray-400 text-sm uppercase tracking-wide">
                  Email
                </p>
                <a
                  href="mailto:dijitalsolutions@gmail.com"
                  className="text-accent hover:text-accent-light transition-colors"
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
                  className="text-accent hover:text-accent-light transition-colors"
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
            className="inline-flex items-center text-accent hover:text-accent-light transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
