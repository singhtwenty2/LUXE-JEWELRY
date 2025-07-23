"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Star, Filter, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"
import { products } from "@/lib/data"

export default function ShopPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 500000])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("featured")

  const categories = ["earrings", "rings", "necklaces", "bangles", "pendants"]
  const materials = ["Gold", "Diamond", "Platinum", "Silver"]

  const filteredProducts = products.filter((product) => {
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const matchesMaterial =
      selectedMaterials.length === 0 || selectedMaterials.some((material) => product.material.includes(material))
    return matchesPrice && matchesCategory && matchesMaterial
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "newest":
        return b.id.localeCompare(a.id)
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 tracking-tight">All Jewelry</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Discover our complete collection of handcrafted jewelry, each piece designed to celebrate life's precious
            moments
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 space-y-6 lg:space-y-0">
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-none bg-transparent"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={`p-2 ${
                  viewMode === "grid"
                    ? "bg-gray-900 text-white"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                }`}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={`p-2 ${
                  viewMode === "list"
                    ? "bg-gray-900 text-white"
                    : "border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                }`}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600 font-light">{sortedProducts.length} pieces</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48 border-gray-300 rounded-none bg-transparent">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="lg:w-80 space-y-8">
              <div className="bg-gray-50 p-6 space-y-6">
                <h3 className="font-medium text-gray-900 text-sm tracking-wide">PRICE RANGE</h3>
                <div className="space-y-4">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={500000}
                    min={0}
                    step={5000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>₹{priceRange[0].toLocaleString()}</span>
                    <span>₹{priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-gray-900 text-sm tracking-wide">CATEGORIES</h3>
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={category}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedCategories([...selectedCategories, category])
                        } else {
                          setSelectedCategories(selectedCategories.filter((c) => c !== category))
                        }
                      }}
                    />
                    <label htmlFor={category} className="text-sm text-gray-700 capitalize font-light">
                      {category}
                    </label>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-gray-900 text-sm tracking-wide">MATERIALS</h3>
                {materials.map((material) => (
                  <div key={material} className="flex items-center space-x-2">
                    <Checkbox
                      id={material}
                      checked={selectedMaterials.includes(material)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedMaterials([...selectedMaterials, material])
                        } else {
                          setSelectedMaterials(selectedMaterials.filter((m) => m !== material))
                        }
                      }}
                    />
                    <label htmlFor={material} className="text-sm text-gray-700 font-light">
                      {material}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Products Grid/List */}
          <div className="flex-1">
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {sortedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white shadow-sm hover:shadow-lg transition-all duration-500"
                  >
                    <div className="relative overflow-hidden aspect-square">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <Heart className="h-4 w-4 text-gray-600" />
                      </Button>
                      {product.originalPrice && (
                        <div className="absolute top-4 left-4 bg-gray-900 text-white px-3 py-1 text-xs font-medium tracking-wide">
                          SAVE ₹{(product.originalPrice - product.price).toLocaleString()}
                        </div>
                      )}
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${
                                i < Math.floor(product.rating) ? "text-gray-400 fill-current" : "text-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 font-light">({product.reviews})</span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium text-gray-900 text-sm tracking-wide leading-relaxed">
                          {product.name}
                        </h3>
                        <p className="text-xs text-gray-500 font-light">
                          {product.karat} • {product.weight}
                        </p>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center space-x-3">
                          <span className="text-lg font-light text-gray-900">₹{product.price.toLocaleString()}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-400 line-through font-light">
                              ₹{product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>

                      <Link href={`/product/${product.id}`} className="block pt-2">
                        <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-none py-3 text-sm font-medium tracking-wide transition-all duration-300">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-8">
                {sortedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col md:flex-row bg-white shadow-sm hover:shadow-lg transition-all duration-500"
                  >
                    <div className="relative w-full md:w-80 aspect-square overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="flex-1 p-8 space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${
                                  i < Math.floor(product.rating) ? "text-gray-400 fill-current" : "text-gray-200"
                                }`}
                              />
                            ))}
                            <span className="text-xs text-gray-500 ml-2 font-light">({product.reviews})</span>
                          </div>
                          <Button variant="ghost" size="sm" className="p-2">
                            <Heart className="h-4 w-4 text-gray-600" />
                          </Button>
                        </div>

                        <div className="space-y-2">
                          <h3 className="text-xl font-medium text-gray-900 tracking-wide">{product.name}</h3>
                          <p className="text-sm text-gray-500 font-light">
                            {product.karat} • {product.weight}
                          </p>
                        </div>

                        <p className="text-gray-600 font-light leading-relaxed">{product.description}</p>

                        <div className="flex items-center space-x-4">
                          <span className="text-2xl font-light text-gray-900">₹{product.price.toLocaleString()}</span>
                          {product.originalPrice && (
                            <span className="text-lg text-gray-400 line-through font-light">
                              ₹{product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                      </div>

                      <Link href={`/product/${product.id}`}>
                        <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-none px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
      <Chatbot />
    </div>
  )
}
