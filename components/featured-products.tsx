import Image from "next/image"
import Link from "next/link"
import { Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/data"

export default function FeaturedProducts() {
  const featuredProducts = products.slice(0, 4)

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 tracking-tight">Signature Pieces</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Handpicked masterpieces that showcase exceptional craftsmanship and enduring beauty, each telling its own
            unique story
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-none shadow-sm hover:shadow-xl transition-all duration-500"
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

              <div className="p-8 space-y-4">
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
                  <h3 className="font-medium text-gray-900 group-hover:text-gray-700 transition-colors text-sm tracking-wide leading-relaxed">
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

                <Link href={`/product/${product.id}`} className="block pt-4">
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-none py-3 text-sm font-medium tracking-wide transition-all duration-300">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
