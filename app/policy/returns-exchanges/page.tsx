import Link from 'next/link';

export const metadata = {
  title: 'Returns & Exchanges Policy | DijiSol',
  description: 'Learn about our returns and exchanges policy. Due to the digital nature of our products, no returns or exchanges are available.',
};

export default function ReturnsExchangesPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-primary to-slate-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Returns & Exchanges Policy</h1>
          <p className="text-xl text-slate-200">Effective Date: January 2025</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Policy</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            At DijiSol, we are committed to providing high-quality digital products and services to our customers. 
            Due to the unique nature of digital products and services, we maintain a no-returns and no-exchanges policy 
            once a purchase has been completed and access has been granted.
          </p>
        </section>

        {/* Why No Returns */}
        <section className="mb-12 bg-slate-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Digital Products Are Non-Returnable</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Immediate Access & Download</h3>
              <p className="text-slate-700 leading-relaxed">
                Digital products are instantly delivered and immediately accessible. Once access is granted, 
                the product cannot be "unsold" or restocked, unlike physical goods. The risk of unauthorized copying 
                or distribution makes returns impractical.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">No Physical Inventory</h3>
              <p className="text-slate-700 leading-relaxed">
                Our digital services, custom websites, mobile applications, and SaaS platforms are intangible products. 
                They cannot be returned to inventory or resold to another customer in the same manner as physical goods.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Consumption Upon Access</h3>
              <p className="text-slate-700 leading-relaxed">
                Once you download, use, or access a digital product, it has been consumed. This is similar to other 
                digital services like streaming subscriptions, online courses, or software licenses.
              </p>
            </div>
          </div>
        </section>

        {/* Service-Specific Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Service-Specific Details</h2>
          
          <div className="space-y-8">
            {/* Websites */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Professional Websites</h3>
              <p className="text-slate-700 leading-relaxed">
                Custom website projects include design, development, deployment, and hosting setup. Once your website 
                has been launched and access has been provided to your domain and hosting account, the service has been delivered 
                and is non-returnable. You maintain full ownership and control of your website and can continue to use it indefinitely 
                as per our hosting agreement.
              </p>
            </div>

            {/* SaaS Products */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">SaaS Products & Applications</h3>
              <p className="text-slate-700 leading-relaxed">
                Custom SaaS solutions, mobile applications, and software platforms are non-returnable once development 
                and deployment are complete. These are bespoke digital products tailored to your specific needs and cannot 
                be resold or returned.
              </p>
            </div>

            {/* Digital Assets */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Digital Assets & Licenses</h3>
              <p className="text-slate-700 leading-relaxed">
                All digital assets, including templates, licenses, customizations, and deliverables, become non-returnable 
                upon completion and delivery. These items have immediate value and cannot be resold.
              </p>
            </div>
          </div>
        </section>

        {/* Exceptions & Support */}
        <section className="mb-12 bg-accent/10 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Important Exceptions</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            While our general policy is no returns or exchanges, we recognize that exceptional circumstances may arise. 
            We are committed to ensuring customer satisfaction with the following provisions:
          </p>
          <ul className="space-y-4 text-slate-700">
            <li className="flex gap-4">
              <span className="text-primary font-bold text-2xl flex-shrink-0">✓</span>
              <span className="leading-relaxed"><strong>Product Defects:</strong> If your product contains technical defects or fails to function as specified, 
              please contact us immediately for support and resolution.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold text-2xl flex-shrink-0">✓</span>
              <span className="leading-relaxed"><strong>Service Issues:</strong> If we fail to deliver the agreed-upon service, we will work with you 
              to resolve the issue at no additional cost.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold text-2xl flex-shrink-0">✓</span>
              <span className="leading-relaxed"><strong>Security Concerns:</strong> If there are legitimate security or privacy concerns with your digital product, 
              we will address them promptly.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-primary font-bold text-2xl flex-shrink-0">✓</span>
              <span className="leading-relaxed"><strong>Billing Errors:</strong> If an billing error occurs, we will work to resolve it immediately upon notification.</span>
            </li>
          </ul>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Have Questions or Concerns?</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            If you believe your situation qualifies for an exception or if you have concerns about your purchase, 
            please reach out to our support team immediately. We're here to help.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Contact Support
          </Link>
        </section>

        {/* Policy Changes */}
        <section className="border-t pt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Policy Updates</h2>
          <p className="text-slate-700 leading-relaxed">
            We reserve the right to update this policy at any time. Changes will be effective immediately upon posting 
            to our website. We encourage you to review this policy periodically to stay informed about how we handle returns 
            and exchanges.
          </p>
        </section>
      </div>
    </div>
  );
}
