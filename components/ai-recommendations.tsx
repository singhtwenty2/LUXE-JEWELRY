"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sparkles, RefreshCw } from "lucide-react"
import { products } from "@/lib/data"

export default function AIRecommendations() {
  const [recommendations, setRecommendations] = useState(products.slice(0, 3))
  const [isLoading, setIsLoading] = useState(false)

  const generateRecommendations = async () => {
    setIsLoading(true)

    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Shuffle products for new recommendations
    const shuffled = [...products].sort(() => 0.5 - Math.random())
    setRecommendations(shuffled.slice(0, 3))
    setIsLoading(false)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-6 w-6 text-gray-400 mr-3" />
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 tracking-tight">Curated for You</h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed font-light">
            Our AI analyzes your preferences and browsing patterns to suggest pieces that perfectly complement your
            unique style and taste
          </p>
          <Button
            onClick={generateRecommendations}
            disabled={isLoading}
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 rounded-none px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300 bg-transparent"
          >
            {isLoading ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Personalizing...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4 mr-2" />
                Refresh Recommendations
              </>
            )}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {recommendations.map((product, index) => (
            <div
              key={product.id}
              className={`bg-white shadow-sm hover:shadow-lg transition-all duration-500 ${
                isLoading ? "animate-pulse" : ""
              }`}
            >
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
                  <Button
                    size="sm"
                    className="bg-gray-900 hover:bg-gray-800 text-white rounded-none px-6 py-2 text-xs font-medium tracking-wide transition-all duration-300"
                  >
                    View
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
