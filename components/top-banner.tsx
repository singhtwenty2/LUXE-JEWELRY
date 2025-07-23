"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true)

  // Check if banner was previously closed
  useEffect(() => {
    const bannerClosed = localStorage.getItem("topBannerClosed")
    if (bannerClosed === "true") {
      setIsVisible(false)
    }
  }, [])

  const closeBanner = () => {
    setIsVisible(false)
    localStorage.setItem("topBannerClosed", "true")
  }

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-3 text-center relative">
      <p className="text-sm text-gray-700 font-medium">
        Complimentary shipping on orders above ₹75,000
        <span className="mx-3 text-gray-400">|</span>
        <span className="text-gray-600">Call: </span>
        <a href="tel:1800-266-0123" className="text-gray-900 hover:text-gray-700 transition-colors">
          1800-266-0123
        </a>
      </p>
      <Button
        variant="ghost"
        size="sm"
        onClick={closeBanner}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 h-auto hover:bg-gray-200 rounded-full"
      >
        <X className="h-4 w-4 text-gray-500" />
      </Button>
    </div>
  )
}
