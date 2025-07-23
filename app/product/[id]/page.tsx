import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Star, Heart, Share2, Shield, Truck, RotateCcw, Sparkles } from "lucide-react"
import { products } from "@/lib/data"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AIChatbot from "@/components/ai-chatbot"
import AICareAssistant from "@/components/ai-care-assistant"
import AISizeGuide from "@/components/ai-size-guide"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <div className="space-y-6">
            <div className="relative aspect-square overflow-hidden bg-gray-50">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-6 left-6 flex flex-col space-y-2">
                {product.isNew && (
                  <Badge className="bg-gray-900 text-white hover:bg-gray-800 text-xs font-medium tracking-wide">
                    NEW ARRIVAL
                  </Badge>
                )}
                {product.isBestseller && (
                  <Badge className="bg-amber-600 text-white hover:bg-amber-700 text-xs font-medium tracking-wide">
                    BESTSELLER
                  </Badge>
                )}
              </div>
              <div className="absolute top-6 right-6 flex space-x-2">
                <Button size="sm" variant="outline" className="bg-white/95 hover:bg-white">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="bg-white/95 hover:bg-white">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Additional Images */}
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative aspect-square overflow-hidden bg-gray-50">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={`${product.name} view ${i}`}
                    fill
                    className="object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600 font-light">(127 reviews)</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-light text-gray-900 tracking-tight leading-tight">
                {product.name}
              </h1>

              <p className="text-gray-600 leading-relaxed font-light text-lg">{product.description}</p>

              <div className="flex items-baseline space-x-4">
                <span className="text-3xl font-light text-gray-900">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through font-light">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            <Separator />

            {/* Product Specifications */}
            <div className="space-y-6">
              <h3 className="text-lg font-medium text-gray-900 tracking-wide">Specifications</h3>
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-light">Material</span>
                    <span className="text-gray-900 font-medium">{product.material}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-light">Category</span>
                    <span className="text-gray-900 font-medium capitalize">{product.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-light">Collection</span>
                    <span className="text-gray-900 font-medium">{product.collection}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-light">Weight</span>
                    <span className="text-gray-900 font-medium">12.5g</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-light">Purity</span>
                    <span className="text-gray-900 font-medium">18K Gold</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 font-light">Certification</span>
                    <span className="text-gray-900 font-medium">BIS Hallmarked</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Actions */}
            <div className="space-y-6">
              <div className="flex space-x-4">
                <Button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-4 text-base font-medium tracking-wide">
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-gray-300 hover:bg-gray-50 py-4 text-base font-medium tracking-wide bg-transparent"
                >
                  Buy Now
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div className="flex flex-col items-center space-y-2 p-4 bg-gray-50">
                  <Shield className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-900 font-medium text-xs tracking-wide">Lifetime Warranty</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-4 bg-gray-50">
                  <Truck className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-900 font-medium text-xs tracking-wide">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center space-y-2 p-4 bg-gray-50">
                  <RotateCcw className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-900 font-medium text-xs tracking-wide">30-Day Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI-Enhanced Features */}
        <div className="mt-24 space-y-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-6 w-6 text-blue-600 mr-3" />
              <h2 className="text-2xl font-light text-gray-900 tracking-tight">AI-Powered Assistance</h2>
              <span className="ml-3 text-xs bg-blue-600 text-white px-3 py-1 rounded-full font-medium">
                AI ENHANCED
              </span>
            </div>
            <p className="text-gray-600 font-light max-w-2xl mx-auto">
              Get personalized care instructions and sizing guidance powered by AI
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AICareAssistant />
            <AISizeGuide />
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <div className="text-center mb-16">
              <h2 className="text-2xl lg:text-3xl font-light text-gray-900 mb-6 tracking-tight">You May Also Like</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Discover more pieces from our {product.collection} collection
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-white shadow-sm hover:shadow-lg transition-all duration-500">
                  <div className="relative overflow-hidden aspect-square">
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium text-gray-900 text-sm tracking-wide leading-relaxed">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed font-light">
                        {relatedProduct.description.substring(0, 80)}...
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-lg font-light text-gray-900">₹{relatedProduct.price.toLocaleString()}</span>
                      <Link href={`/product/${relatedProduct.id}`}>
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
          </div>
        )}
      </div>

      <Footer />
      <AIChatbot />
    </div>
  )
}
