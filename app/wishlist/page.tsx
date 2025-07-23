"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heart, Star, Trash2, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Chatbot from "@/components/ai-chatbot"
import { products } from "@/lib/data"

export default function WishlistPage() {
  // Mock wishlist items (in real app, this would come from state management/API)
  const [wishlistItems, setWishlistItems] = useState(products.slice(0, 4))

  const removeFromWishlist = (productId: string) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== productId))
  }

  const addToCart = (productId: string) => {
    // Mock add to cart functionality
    console.log("Added to cart:", productId)
    // In real app, this would update cart state
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 tracking-tight">My Wishlist</h1>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Your carefully curated collection of favorite jewelry pieces
          </p>
        </div>

        {wishlistItems.length > 0 ? (
          <>
            <div className="flex justify-between items-center mb-8">
              <p className="text-gray-600 font-light">{wishlistItems.length} items in your wishlist</p>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
                Share Wishlist
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {wishlistItems.map((product) => (
                <div key={product.id} className="group bg-white shadow-sm hover:shadow-lg transition-all duration-500">
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
                      onClick={() => removeFromWishlist(product.id)}
                      className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
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

                    <div className="flex space-x-2 pt-2">
                      <Button
                        onClick={() => addToCart(product.id)}
                        className="flex-1 bg-gray-900 hover:bg-gray-800 text-white rounded-none py-2 text-xs font-medium tracking-wide transition-all duration-300"
                      >
                        <ShoppingBag className="h-3 w-3 mr-1" />
                        Add to Cart
                      </Button>
                      <Link href={`/product/${product.id}`} className="flex-1">
                        <Button
                          variant="outline"
                          className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 rounded-none py-2 text-xs font-medium tracking-wide bg-transparent"
                        >
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <div className="space-y-6">
              <Heart className="h-16 w-16 text-gray-300 mx-auto" />
              <h3 className="text-xl font-light text-gray-900">Your wishlist is empty</h3>
              <p className="text-gray-600 font-light max-w-md mx-auto">
                Start adding your favorite jewelry pieces to create your perfect collection
              </p>
              <div className="flex justify-center space-x-4 mt-8">
                <Link href="/shop">
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3">Browse Jewelry</Button>
                </Link>
                <Link href="/collections">
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 bg-transparent"
                  >
                    View Collections
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
      <Chatbot />
    </div>
  )
}
