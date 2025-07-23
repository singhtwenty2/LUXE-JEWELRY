"use client"

import { useState } from "react"
import {
  ChevronDown,
  ChevronUp,
  Search,
  Phone,
  Mail,
  MessageCircle,
  Shield,
  Truck,
  RotateCcw,
  Sparkles,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AIChatbot from "@/components/ai-chatbot"
import { geminiService } from "@/lib/gemini"

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [openItems, setOpenItems] = useState<string[]>([])
  const [aiAnswer, setAiAnswer] = useState("")
  const [isLoadingAI, setIsLoadingAI] = useState(false)
  const [showAIAnswer, setShowAIAnswer] = useState(false)

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const getAIAnswer = async () => {
    if (!searchQuery.trim()) return

    setIsLoadingAI(true)
    setShowAIAnswer(false)

    try {
      const context =
        "User is asking a support question about Luxe Jewelry. Provide helpful information about our products, services, policies, or direct them to contact our support team."
      const answer = await geminiService.generateResponse(searchQuery, context)
      setAiAnswer(answer)
      setShowAIAnswer(true)
    } catch (error) {
      console.error("AI Support Error:", error)
      setAiAnswer(
        "I'd be happy to help you with your question. For the most accurate information, please contact our support team at 1800-266-0123 or support@luxejewelry.com. Our experts are available Monday-Saturday, 9:00 AM - 8:00 PM.",
      )
      setShowAIAnswer(true)
    } finally {
      setIsLoadingAI(false)
    }
  }

  const faqCategories = [
    {
      title: "Orders & Shipping",
      faqs: [
        {
          id: "shipping-1",
          question: "What are your shipping options and delivery times?",
          answer:
            "We offer complimentary shipping on orders above ₹75,000. Standard delivery takes 3-5 business days within India. Express delivery (1-2 business days) is available for an additional charge. International shipping is available to select countries with delivery times of 7-14 business days.",
        },
        {
          id: "shipping-2",
          question: "How can I track my order?",
          answer:
            "Once your order is shipped, you'll receive a tracking number via email and SMS. You can track your package using this number on our website or the courier partner's website. You'll also receive real-time updates about your order status.",
        },
        {
          id: "shipping-3",
          question: "Can I change or cancel my order after placing it?",
          answer:
            "Orders can be modified or cancelled within 2 hours of placement. After this time, the order enters our fulfillment process and cannot be changed. Please contact our customer service team immediately if you need to make changes.",
        },
      ],
    },
    {
      title: "Product Information",
      faqs: [
        {
          id: "product-1",
          question: "Are your diamonds certified?",
          answer:
            "Yes, all our diamonds above 0.30 carats come with internationally recognized certifications from GIA, IGI, or other reputable gemological institutes. Each certificate details the diamond's cut, color, clarity, and carat weight.",
        },
        {
          id: "product-2",
          question: "What is the purity of your gold jewelry?",
          answer:
            "We offer jewelry in 14K, 18K, and 22K gold. All our gold jewelry is BIS hallmarked, ensuring guaranteed purity. The karat information is clearly mentioned in each product description and is also stamped on the jewelry.",
        },
        {
          id: "product-3",
          question: "Do you offer custom jewelry design services?",
          answer:
            "Yes, we specialize in custom jewelry design. Our master craftsmen can create unique pieces based on your specifications. The process typically takes 4-6 weeks, and we provide regular updates with photos during the creation process.",
        },
      ],
    },
    {
      title: "Returns & Exchanges",
      faqs: [
        {
          id: "returns-1",
          question: "What is your return policy?",
          answer:
            "We offer a 30-day return policy for all jewelry purchases. Items must be in original condition with all certificates and packaging. Custom-made pieces and engraved items cannot be returned unless there's a manufacturing defect.",
        },
        {
          id: "returns-2",
          question: "How do I initiate a return or exchange?",
          answer:
            "Contact our customer service team within 30 days of delivery. We'll provide you with a return authorization number and prepaid shipping label. Once we receive and inspect the item, we'll process your refund or exchange within 5-7 business days.",
        },
        {
          id: "returns-3",
          question: "Are there any return fees?",
          answer:
            "Returns due to manufacturing defects or shipping errors are free. For other returns, a handling fee of ₹500 may apply. This fee is waived for orders above ₹1,00,000 or for our premium members.",
        },
      ],
    },
    {
      title: "Care & Maintenance",
      faqs: [
        {
          id: "care-1",
          question: "How should I clean my jewelry?",
          answer:
            "Clean your jewelry regularly with a soft, lint-free cloth. For deeper cleaning, use warm soapy water and a soft brush. Avoid harsh chemicals and ultrasonic cleaners unless recommended. We also offer professional cleaning services at our boutiques.",
        },
        {
          id: "care-2",
          question: "How should I store my jewelry?",
          answer:
            "Store each piece separately in soft pouches or lined compartments to prevent scratching. Keep jewelry away from direct sunlight and moisture. For long-term storage, consider using anti-tarnish strips for silver jewelry.",
        },
        {
          id: "care-3",
          question: "Do you offer repair services?",
          answer:
            "Yes, we provide comprehensive repair services including resizing, stone replacement, and restoration. Our skilled craftsmen can handle both our own pieces and jewelry from other brands. Contact us for a repair estimate.",
        },
      ],
    },
  ]

  const filteredFAQs = faqCategories
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.faqs.length > 0)

  const supportOptions = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our jewelry experts",
      contact: "1800-266-0123",
      availability: "Mon-Sat: 9:00 AM - 8:00 PM",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed assistance via email",
      contact: "support@luxejewelry.com",
      availability: "Response within 24 hours",
    },
    {
      icon: MessageCircle,
      title: "AI Chat Support",
      description: "Instant AI-powered assistance",
      contact: "Available 24/7",
      availability: "Powered by Gemini AI",
      isAI: true,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8 tracking-tight">Customer Support</h1>
          <p className="text-xl text-gray-600 leading-relaxed font-light mb-12">
            We're here to help you with any questions about our jewelry, orders, or services. Find answers to common
            questions or get AI-powered assistance instantly.
          </p>

          {/* AI-Enhanced Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="Ask anything about our jewelry or services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-32 py-4 w-full border-gray-300 rounded-full bg-white focus:border-blue-500 text-base"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Button
              onClick={getAIAnswer}
              disabled={isLoadingAI || !searchQuery.trim()}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full px-4 py-2 text-sm font-medium"
            >
              {isLoadingAI ? (
                <>
                  <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white mr-1"></div>
                  AI
                </>
              ) : (
                <>
                  <Sparkles className="h-3 w-3 mr-1" />
                  Ask AI
                </>
              )}
            </Button>
          </div>

          {/* AI Answer */}
          {showAIAnswer && (
            <div className="max-w-3xl mx-auto mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <div className="relative flex-shrink-0">
                  <Sparkles className="h-5 w-5 text-blue-600 mt-1" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium text-blue-900">AI Support Assistant</span>
                    <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">AI</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed font-light">{aiAnswer}</p>
                  <p className="text-xs text-blue-600 mt-3 font-medium">✨ AI-Powered Response</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* FAQ Section */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-light text-gray-900 tracking-tight">Frequently Asked Questions</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Find quick answers to the most common questions about our jewelry and services.
              </p>
            </div>

            {filteredFAQs.length > 0 ? (
              <div className="space-y-8">
                {filteredFAQs.map((category) => (
                  <div key={category.title} className="space-y-6">
                    <h3 className="text-lg font-medium text-gray-900 tracking-wide border-b border-gray-200 pb-3">
                      {category.title}
                    </h3>
                    <div className="space-y-4">
                      {category.faqs.map((faq) => (
                        <Collapsible key={faq.id} open={openItems.includes(faq.id)}>
                          <CollapsibleTrigger
                            onClick={() => toggleItem(faq.id)}
                            className="flex items-center justify-between w-full p-6 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                          >
                            <span className="font-medium text-gray-900 text-sm tracking-wide pr-4">{faq.question}</span>
                            {openItems.includes(faq.id) ? (
                              <ChevronUp className="h-4 w-4 text-gray-500 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="h-4 w-4 text-gray-500 flex-shrink-0" />
                            )}
                          </CollapsibleTrigger>
                          <CollapsibleContent className="px-6 pb-6 bg-gray-50">
                            <p className="text-gray-600 font-light leading-relaxed">{faq.answer}</p>
                          </CollapsibleContent>
                        </Collapsible>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 font-light">
                  No results found for "{searchQuery}". Try the AI assistant above for personalized help.
                </p>
              </div>
            )}
          </div>

          {/* Support Options Sidebar */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-light text-gray-900 tracking-tight">Need More Help?</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Can't find what you're looking for? Our support team and AI assistant are ready to help.
              </p>
            </div>

            <div className="space-y-6">
              {supportOptions.map((option, index) => (
                <div
                  key={index}
                  className={`p-6 space-y-4 ${option.isAI ? "bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200" : "bg-gray-50"}`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${option.isAI ? "bg-gradient-to-r from-blue-600 to-indigo-600" : "bg-gray-900"}`}
                    >
                      <option.icon className="h-5 w-5 text-white" />
                      {option.isAI && <Sparkles className="h-2 w-2 absolute text-yellow-400" />}
                    </div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-medium text-gray-900 text-sm tracking-wide">{option.title}</h3>
                      {option.isAI && (
                        <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full font-medium">AI</span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">{option.description}</p>
                  <div className="space-y-1">
                    <p className="text-gray-900 font-medium text-sm">{option.contact}</p>
                    <p className="text-gray-500 font-light text-xs">{option.availability}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Service Guarantees */}
            <div className="bg-gray-50 p-6 space-y-6">
              <h3 className="font-medium text-gray-900 text-sm tracking-wide">Our Service Promise</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-4 w-4 text-gray-600" />
                  <span className="text-sm text-gray-700 font-light">Lifetime warranty on craftsmanship</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Truck className="h-4 w-4 text-gray-600" />
                  <span className="text-sm text-gray-700 font-light">Free shipping on orders above ₹75,000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <RotateCcw className="h-4 w-4 text-gray-600" />
                  <span className="text-sm text-gray-700 font-light">30-day hassle-free returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <AIChatbot />
    </div>
  )
}
