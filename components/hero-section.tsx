"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const heroSlides = [
  {
    id: 1,
    title: "Timeless Elegance",
    subtitle: "Discover our heritage collection of handcrafted jewelry",
    description: "Each piece tells a story of tradition, craftsmanship, and enduring beauty",
    image: "/images/hero-earrings.png",
    cta: "Explore Collection",
  },
  {
    id: 2,
    title: "Contemporary Grace",
    subtitle: "Modern designs for the discerning connoisseur",
    description: "Where innovation meets tradition in perfect harmony",
    image: "/images/hero-necklace.png",
    cta: "Shop Now",
  },
  {
    id: 3,
    title: "Eternal Promises",
    subtitle: "Celebrate life's precious moments",
    description: "Exquisite pieces that capture the essence of your special occasions",
    image: "/images/hero-rings.png",
    cta: "View Bridal",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <section className="relative h-[85vh] overflow-hidden bg-gray-50">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            {/* Content */}
            <div className="flex items-center justify-center p-12 lg:p-20 bg-white lg:bg-transparent">
              <div className="text-center lg:text-left max-w-lg space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-6xl font-light text-gray-900 leading-tight tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed">{slide.subtitle}</p>
                  <p className="text-base text-gray-500 leading-relaxed max-w-md mx-auto lg:mx-0">
                    {slide.description}
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-base font-medium rounded-none transition-all duration-300 hover:shadow-lg"
                >
                  {slide.cta}
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-full">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/10 to-transparent lg:from-transparent lg:to-white/20" />
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:shadow-xl"
      >
        <ChevronLeft className="h-5 w-5 text-gray-700" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:shadow-xl"
      >
        <ChevronRight className="h-5 w-5 text-gray-700" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-gray-900 w-8" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
