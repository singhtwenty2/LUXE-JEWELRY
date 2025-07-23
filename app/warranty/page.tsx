import Header from "@/components/header"
import Footer from "@/components/footer"
import { Shield, Award, RotateCcw, Clock } from "lucide-react"

export default function WarrantyPage() {
  const warrantyFeatures = [
    {
      icon: Shield,
      title: "Lifetime Craftsmanship Warranty",
      description:
        "We guarantee the quality of our craftsmanship for the lifetime of the piece against manufacturing defects.",
    },
    {
      icon: Award,
      title: "Certified Authenticity",
      description:
        "All our jewelry comes with certificates of authenticity and detailed documentation of materials used.",
    },
    {
      icon: RotateCcw,
      title: "Free Annual Maintenance",
      description:
        "Complimentary annual cleaning, inspection, and minor repairs to keep your jewelry in pristine condition.",
    },
    {
      icon: Clock,
      title: "Quick Service Turnaround",
      description: "Most warranty services are completed within 5-7 business days with regular updates on progress.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-light text-gray-900 tracking-tight">Warranty Information</h1>
            <p className="text-lg text-gray-600 font-light">
              Your investment in Luxe Jewelry is protected by our comprehensive warranty program
            </p>
          </div>

          {/* Warranty Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
            {warrantyFeatures.map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium text-gray-900 tracking-wide">{feature.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="prose prose-gray max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-light text-gray-900 tracking-tight">What's Covered</h2>
              <ul className="space-y-2 text-gray-600 font-light">
                <li>• Manufacturing defects in materials and workmanship</li>
                <li>• Loose or missing stones due to setting defects</li>
                <li>• Clasp and closure malfunctions</li>
                <li>• Premature wear of plating or finish</li>
                <li>• Structural integrity issues</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-light text-gray-900 tracking-tight">What's Not Covered</h2>
              <ul className="space-y-2 text-gray-600 font-light">
                <li>• Normal wear and tear</li>
                <li>• Damage from accidents, misuse, or improper care</li>
                <li>• Scratches on metal surfaces</li>
                <li>• Damage from exposure to chemicals or extreme conditions</li>
                <li>• Alterations made by third parties</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-light text-gray-900 tracking-tight">How to Claim Warranty</h2>
              <div className="space-y-4 text-gray-600 font-light leading-relaxed">
                <p>
                  <strong className="text-gray-900">Step 1:</strong> Contact our customer service team at 1800-266-0123
                  or email warranty@luxejewelry.com with your order number and description of the issue.
                </p>
                <p>
                  <strong className="text-gray-900">Step 2:</strong> Our team will review your case and provide
                  instructions for sending your jewelry for inspection.
                </p>
                <p>
                  <strong className="text-gray-900">Step 3:</strong> We'll inspect the piece and determine if the issue
                  is covered under warranty.
                </p>
                <p>
                  <strong className="text-gray-900">Step 4:</strong> If covered, we'll repair or replace the item at no
                  cost and return it to you with complimentary shipping.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-light text-gray-900 tracking-tight">Care Instructions</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                To maintain your warranty coverage, please follow our care instructions: store jewelry separately in
                soft pouches, clean regularly with appropriate methods, avoid exposure to harsh chemicals, and have
                annual professional inspections at our boutiques.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-light text-gray-900 tracking-tight">Contact Us</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                For warranty claims or questions, contact us at warranty@luxejewelry.com or call 1800-266-0123. Our
                warranty service team is available Monday through Saturday, 9:00 AM to 6:00 PM.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
