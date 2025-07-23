"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkles, Loader2, Ruler, Info } from "lucide-react"
import { geminiService } from "@/lib/gemini"

export default function AISizeGuide() {
  const [selectedCategory, setSelectedCategory] = useState("")
  const [sizeGuide, setSizeGuide] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showGuide, setShowGuide] = useState(false)

  const categories = [
    { value: "rings", label: "Rings" },
    { value: "bangles", label: "Bangles & Bracelets" },
    { value: "necklaces", label: "Necklaces" },
    { value: "earrings", label: "Earrings" },
  ]

  const generateSizeGuide = async () => {
    if (!selectedCategory) return

    setIsLoading(true)
    setShowGuide(false)

    try {
      const guide = await geminiService.generateSizeGuide(selectedCategory)
      setSizeGuide(guide)
      setShowGuide(true)
    } catch (error) {
      console.error("AI Size Guide Error:", error)

      // Fallback size guides
      const fallbackGuides: Record<string, string> = {
        rings: `Ring Sizing Guide:

• Measure your finger at the end of the day when it's largest
• Use a ring sizer or measure the inner diameter of a well-fitting ring
• Consider the width of the band - wider bands need larger sizes
• Account for knuckle size if larger than finger base
• Our complimentary sizing service ensures perfect fit
• Standard sizes: 10-22 (Indian sizing)

Visit our boutique for professional ring sizing and consultation.`,

        bangles: `Bangle Sizing Guide:

• Measure your wrist circumference with a flexible tape
• Add 1-2 cm for comfortable movement
• Consider bangle width - wider bangles may need larger sizes
• Traditional bangles should fit snugly but not tight
• Our artisans can adjust sizing for perfect fit
• Standard sizes: 2.2" to 2.8" diameter

Complimentary sizing adjustments available at our boutiques.`,

        necklaces: `Necklace Length Guide:

• Choker: 14-16 inches (sits at base of neck)
• Princess: 17-19 inches (sits at collarbone)
• Matinee: 20-24 inches (sits at chest)
• Opera: 28-36 inches (sits at breastbone)
• Consider neckline and personal preference
• Custom lengths available upon request

Our experts can help you choose the perfect length for your style.`,

        earrings: `Earring Fit Guide:

• Consider ear lobe thickness for post earrings
• Ensure comfortable weight for extended wear
• Check for metal allergies - we use hypoallergenic materials
• Hoops: measure ear opening for comfortable fit
• Drops: consider length for face shape
• Secure closures for active wear

Professional consultation available for custom ear jewelry.`,
      }

      setSizeGuide(fallbackGuides[selectedCategory] || fallbackGuides.rings)
      setShowGuide(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="relative">
            <Ruler className="h-6 w-6 text-green-600 mr-3" />
            <Sparkles className="h-3 w-3 absolute -top-1 -right-1 text-yellow-500" />
          </div>
          <h3 className="text-xl font-medium text-gray-900 tracking-wide">AI Sizing Guide</h3>
          <span className="ml-3 text-xs bg-green-600 text-white px-2 py-1 rounded-full font-medium">AI ENHANCED</span>
        </div>
        <p className="text-gray-600 font-light">Get personalized sizing recommendations using AI expertise</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-900">Jewelry Category</label>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="border-gray-300 bg-white">
              <SelectValue placeholder="Select jewelry category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={generateSizeGuide}
          disabled={!selectedCategory || isLoading}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-lg py-3 text-sm font-medium tracking-wide transition-all duration-300"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              AI Generating Guide...
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4 mr-2" />
              Get AI Sizing Guide
            </>
          )}
        </Button>

        {showGuide && (
          <div className="bg-white border border-green-200 rounded-lg p-6 space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-900">AI Sizing Guide</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Personalized</span>
            </div>

            <div className="prose prose-sm max-w-none">
              <div className="text-gray-700 leading-relaxed font-light whitespace-pre-line">{sizeGuide}</div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-2 text-xs text-green-600 bg-green-50 px-3 py-1 rounded-full">
                <Info className="h-3 w-3" />
                <span>Complimentary sizing service available</span>
              </div>
              <span className="text-xs text-green-600 font-medium">✨ AI-Generated</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
