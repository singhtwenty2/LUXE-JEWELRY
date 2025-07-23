"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkles, Loader2, Shield, Droplets, Sun } from "lucide-react"
import { geminiService } from "@/lib/gemini"

export default function AICareAssistant() {
  const [selectedJewelry, setSelectedJewelry] = useState("")
  const [selectedMaterial, setSelectedMaterial] = useState("")
  const [careInstructions, setCareInstructions] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showInstructions, setShowInstructions] = useState(false)

  const jewelryTypes = [
    { value: "rings", label: "Rings" },
    { value: "necklaces", label: "Necklaces" },
    { value: "earrings", label: "Earrings" },
    { value: "bangles", label: "Bangles & Bracelets" },
    { value: "pendants", label: "Pendants" },
  ]

  const materials = [
    { value: "gold", label: "Gold (14K/18K/22K)" },
    { value: "platinum", label: "Platinum" },
    { value: "diamond", label: "Diamond" },
    { value: "silver", label: "Silver" },
    { value: "gemstone", label: "Precious Gemstones" },
  ]

  const generateCareInstructions = async () => {
    if (!selectedJewelry || !selectedMaterial) return

    setIsLoading(true)
    setShowInstructions(false)

    try {
      const instructions = await geminiService.generateCareInstructions(selectedJewelry, selectedMaterial)
      setCareInstructions(instructions)
      setShowInstructions(true)
    } catch (error) {
      console.error("AI Care Instructions Error:", error)

      // Fallback instructions
      const fallbackInstructions = `For ${selectedJewelry} made of ${selectedMaterial}:

• Clean gently with a soft, lint-free cloth after each wear
• Store separately in soft pouches to prevent scratching
• Avoid exposure to harsh chemicals, perfumes, and lotions
• Remove before swimming, exercising, or household cleaning
• Have professional cleaning and inspection annually
• For deep cleaning, use warm soapy water and a soft brush

Visit our boutiques for complimentary professional cleaning and maintenance services.`

      setCareInstructions(fallbackInstructions)
      setShowInstructions(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="relative">
            <Shield className="h-6 w-6 text-blue-600 mr-3" />
            <Sparkles className="h-3 w-3 absolute -top-1 -right-1 text-yellow-500" />
          </div>
          <h3 className="text-xl font-medium text-gray-900 tracking-wide">AI Care Assistant</h3>
          <span className="ml-3 text-xs bg-blue-600 text-white px-2 py-1 rounded-full font-medium">AI POWERED</span>
        </div>
        <p className="text-gray-600 font-light">
          Get personalized care instructions for your jewelry using AI expertise
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">Jewelry Type</label>
            <Select value={selectedJewelry} onValueChange={setSelectedJewelry}>
              <SelectTrigger className="border-gray-300 bg-white">
                <SelectValue placeholder="Select jewelry type" />
              </SelectTrigger>
              <SelectContent>
                {jewelryTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-900">Material</label>
            <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
              <SelectTrigger className="border-gray-300 bg-white">
                <SelectValue placeholder="Select material" />
              </SelectTrigger>
              <SelectContent>
                {materials.map((material) => (
                  <SelectItem key={material.value} value={material.value}>
                    {material.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          onClick={generateCareInstructions}
          disabled={!selectedJewelry || !selectedMaterial || isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg py-3 text-sm font-medium tracking-wide transition-all duration-300"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              AI Generating Instructions...
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4 mr-2" />
              Get AI Care Instructions
            </>
          )}
        </Button>

        {showInstructions && (
          <div className="bg-white border border-blue-200 rounded-lg p-6 space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">AI Care Instructions</span>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Personalized</span>
            </div>

            <div className="prose prose-sm max-w-none">
              <div className="text-gray-700 leading-relaxed font-light whitespace-pre-line">{careInstructions}</div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <div className="flex items-center">
                  <Droplets className="h-3 w-3 mr-1" />
                  Clean regularly
                </div>
                <div className="flex items-center">
                  <Shield className="h-3 w-3 mr-1" />
                  Store safely
                </div>
                <div className="flex items-center">
                  <Sun className="h-3 w-3 mr-1" />
                  Avoid chemicals
                </div>
              </div>
              <span className="text-xs text-blue-600 font-medium">✨ AI-Generated</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
