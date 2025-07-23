import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 tracking-tight">Terms of Service</h1>
            <p className="text-lg text-gray-600 font-light">Last updated: January 2025</p>
          </div>

          <div className="prose prose-gray max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-light text-gray-900 tracking-tight">Acceptance of Terms</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this
                agreement. These terms apply to all visitors, users, and others who access or use the service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-light text-gray-900 tracking-tight">Product Information</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                We strive to provide accurate product descriptions and images. However, we do not warrant that product
                descriptions or other content is accurate, complete, reliable, current, or error-free. All jewelry
                pieces are handcrafted and may have slight variations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-light text-gray-900 tracking-tight">Orders and Payment</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any
                order for any reason. Payment must be received before shipment of products. We accept major credit cards
                and other payment methods as indicated on our website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-light text-gray-900 tracking-tight">Returns and Exchanges</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                We offer a 30-day return policy for most items. Items must be returned in original condition with all
                certificates and packaging. Custom-made and engraved items cannot be returned unless there is a
                manufacturing defect.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-light text-gray-900 tracking-tight">Limitation of Liability</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                In no event shall Luxe Jewelry be liable for any indirect, incidental, special, consequential, or
                punitive damages, including without limitation, loss of profits, data, use, goodwill, or other
                intangible losses.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-light text-gray-900 tracking-tight">Contact Information</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Questions about the Terms of Service should be sent to us at legal@luxejewelry.com or call us at
                1800-266-0123.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
