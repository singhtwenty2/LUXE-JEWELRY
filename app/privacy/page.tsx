import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 tracking-tight">Privacy Policy</h1>
            <p className="text-lg text-gray-600 font-light">Last updated: January 2025</p>
          </div>

          <div className="prose prose-gray max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-light text-gray-900 tracking-tight">Information We Collect</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                We collect information you provide directly to us, such as when you create an account, make a purchase,
                subscribe to our newsletter, or contact us for support. This may include your name, email address, phone
                number, shipping address, and payment information.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-light text-gray-900 tracking-tight">How We Use Your Information</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, process transactions,
                send you technical notices and support messages, and communicate with you about products, services, and
                promotional offers.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-light text-gray-900 tracking-tight">Information Sharing</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your
                consent, except as described in this policy. We may share your information with trusted service
                providers who assist us in operating our website and conducting our business.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-light text-gray-900 tracking-tight">Data Security</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no method of transmission over the internet is
                100% secure.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-light text-gray-900 tracking-tight">Contact Us</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at privacy@luxejewelry.com or
                call us at 1800-266-0123.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
