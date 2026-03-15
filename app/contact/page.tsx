"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "confirm">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // FormSubmit.co — free, no registration needed, unlimited submissions
    // First submission triggers a confirmation email to solutions@dijisol.com
    try {
      const res = await fetch("https://formsubmit.co/ajax/solutions@dijisol.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `DijiSol Contact: ${form.service || "General Inquiry"}`,
          name: form.name,
          email: form.email,
          service: form.service,
          message: form.message,
          _template: "table",
          _captcha: "false",
        }),
      });
      const data = await res.json();
      if (data.success === "true" || data.success === true) {
        setStatus("sent");
        setForm({ name: "", email: "", service: "", message: "" });
      } else if (
        data.message?.toLowerCase().includes("confirm") ||
        data.message?.toLowerCase().includes("activat") ||
        data.message?.toLowerCase().includes("verify")
      ) {
        // First-time activation: FormSubmit sent a confirmation email
        setStatus("confirm");
      } else {
        // Likely unactivated email — show as confirm prompt
        console.log("FormSubmit response:", JSON.stringify(data));
        setStatus("confirm");
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark via-dark-light to-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-light font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Let&apos;s Talk About Your Project
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              Tell us what you need. We respond within 24 hours with an honest assessment and free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

              {status === "sent" && (
                <div className="mb-6 p-4 bg-accent/10 border border-accent/20 rounded-lg text-accent font-medium">
                  Message sent! We&apos;ll get back to you within 24 hours.
                </div>
              )}
              {status === "confirm" && (
                <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 font-medium">
                  Almost there! A confirmation email was sent to our inbox. We&apos;re activating the form now — please try again in a few minutes, or email us directly at <a href="mailto:solutions@dijisol.com" className="underline">solutions@dijisol.com</a>.
                </div>
              )}
              {status === "error" && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 font-medium">
                  Something went wrong. Please try again or email us at <a href="mailto:solutions@dijisol.com" className="underline">solutions@dijisol.com</a>.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="Website Development">Website Development</option>
                    <option value="SaaS Development">SaaS Development</option>
                    <option value="Android App">Android App</option>
                    <option value="iOS App">iOS App</option>
                    <option value="AI Integration">AI Integration</option>
                    <option value="E-Commerce">E-Commerce / Online Store</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-primary focus:border-primary outline-none resize-y"
                    placeholder="Tell us about your project, budget, and timeline..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Other Ways to Reach Us</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Email</h4>
                    <a href="mailto:solutions@dijisol.com" className="text-primary hover:underline">solutions@dijisol.com</a>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Social</h4>
                    <a href="https://x.com/BydesignIlive" target="_blank" rel="noopener" className="text-primary hover:underline">
                      @BydesignIlive on X
                    </a>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Response Time</h4>
                    <p className="text-sm text-gray-500">We typically respond within 24 hours on business days.</p>
                  </div>
                </div>

                <hr className="my-6 border-gray-200" />

                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="/services" className="text-primary hover:underline">View Our Services</a></li>
                  <li><a href="/products" className="text-primary hover:underline">See Our Products</a></li>
                  <li><a href="/shop" className="text-primary hover:underline">Browse the Shop</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
