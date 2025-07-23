"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles, Loader2, Wand2 } from "lucide-react"
import { geminiService } from "@/lib/gemini"
import { products } from "@/lib/data"

export default function AIProductRecommendations() {
  const [recommendations, setRecommendations] = useState(products.slice(0, 3))
  const [isLoading, setIsLoading] = useState(false)
  const [userPreferences, setUserPreferences] = useState("")
  const [aiRecommendation, setAiRecommendation] = useState("")
  const [showAIResponse, setShowAIResponse] = useState(false)

  const generateRecommendations = async () => {
    setIsLoading(true)
    setShowAIResponse(false)

    try {
      // Get AI recommendation text
      const preferences = userPreferences || "elegant jewelry for special occasions"
      const aiResponse = await geminiService.generateProductRecommendations(preferences)
      setAiRecommendation(aiResponse)
      setShowAIResponse(true)

      // Simulate product matching (in real app, this would be more sophisticated)
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Shuffle products for variety
      const shuffled = [...products].sort(() => 0.5 - Math.random())
      setRecommendations(shuffled.slice(0, 3))
    } catch (error) {
      console.error("AI Recommendation Error:", error)

      // Fallback to basic recommendation
      setAiRecommendation(
        "Based on your preferences, I recommend exploring our Heritage Collection for traditional elegance, Contemporary pieces for modern style, or our Bridal Collection for special occasions. Each piece is handcrafted with premium materials and comes with our lifetime warranty.",
      )
      setShowAIResponse(true)

      // Still shuffle products
      const shuffled = [...products].sort(() => 0.5 - Math.random())
      setRecommendations(shuffled.slice(0, 3))
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickPreference = (preference: string) => {
    setUserPreferences(preference)
  }

  const quickPreferences = [
    "Elegant earrings for daily wear",
    "Traditional Indian jewelry",
    "Modern minimalist pieces",
    "Bridal jewelry set",
    "Diamond rings under ₹1 lakh",
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Sparkles className="h-6 w-6 text-blue-600 mr-3" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 tracking-tight">AI-Powered Recommendations</h2>
            <span className="ml-3 text-xs bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full font-medium">
              AI ENHANCED
            </span>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed font-light">
            Our AI jewelry expert analyzes your preferences to suggest pieces that perfectly match your style and needs
          </p>

          {/* AI Preference Input */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                value={userPreferences}
                onChange={(e) => setUserPreferences(e.target.value)}
                placeholder="Describe your ideal jewelry (e.g., elegant gold earrings for office wear)"
                className="flex-1 border-gray-300 rounded-lg focus:border-blue-400 text-sm"
              />
              <Button
                onClick={generateRecommendations}
                disabled={isLoading}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg px-6 py-2 text-sm font-medium tracking-wide transition-all duration-300"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    AI Analyzing...
                  </>
                ) : (
                  <>
                    <Wand2 className="h-4 w-4 mr-2" />
                    Get AI Recommendations
                  </>
                )}
              </Button>
            </div>

            {/* Quick Preferences */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {quickPreferences.map((preference, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickPreference(preference)}
                  className="text-xs bg-gray-100 hover:bg-blue-50 text-gray-700 hover:text-blue-700 px-3 py-1 rounded-full transition-colors border hover:border-blue-200"
                >
                  {preference}
                </button>
              ))}
            </div>
          </div>

          {/* AI Response */}
          {showAIResponse && (
            <div className="max-w-3xl mx-auto mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <div className="relative flex-shrink-0">
                  <Sparkles className="h-5 w-5 text-blue-600 mt-1" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
                </div>
                <div className="flex-1 text-left">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium text-blue-900">AI Jewelry Expert</span>
                    <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">AI</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed font-light">{aiRecommendation}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {recommendations.map((product, index) => (
            <div
              key={product.id}
              className={`bg-white shadow-sm hover:shadow-lg transition-all duration-500 ${
                isLoading ? "animate-pulse" : ""
              } relative`}
            >
              {/* AI Badge */}
              <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                <Sparkles className="h-3 w-3 mr-1" />
                AI Pick
              </div>

              <div className="relative overflow-hidden aspect-square">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/95 text-gray-900 px-3 py-1 text-xs font-medium tracking-wide">
                  {index === 0 ? "PERFECT MATCH" : index === 1 ? "TRENDING NOW" : "HIGHLY RATED"}
                </div>
              </div>

              <div className="p-8 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium text-gray-900 text-sm tracking-wide leading-relaxed">{product.name}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-light">
                    {product.description.substring(0, 80)}...
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-lg font-light text-gray-900">₹{product.price.toLocaleString()}</span>
                  <Link href={`/product/${product.id}`}>
                    <Button
                      size="sm"
                      className="bg-gray-900 hover:bg-gray-800 text-white rounded-none px-6 py-2 text-xs font-medium tracking-wide transition-all duration-300"
                    >
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Disclaimer */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-500 font-light">
            ✨ Recommendations powered by Gemini AI • Results may vary based on preferences •
            <Link href="/contact" className="text-blue-600 hover:text-blue-700 ml-1">
              Contact our experts for personalized consultation
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
