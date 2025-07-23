import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"
import { collections, getProductsByCollection } from "@/lib/data"

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8 tracking-tight">Our Collections</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Each collection tells a unique story, celebrating different aspects of beauty, tradition, and contemporary
            elegance. Discover the perfect pieces that resonate with your personal style.
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {collections.map((collection, index) => {
              const collectionProducts = getProductsByCollection(collection.id)
              return (
                <div key={collection.id} className="group">
                  <div className="relative overflow-hidden aspect-[4/5] mb-8">
                    <Image
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <h2 className="text-3xl font-light mb-4 tracking-wide">{collection.name}</h2>
                      <p className="text-base font-light opacity-90 leading-relaxed mb-6">{collection.description}</p>
                      <p className="text-sm opacity-75">{collection.productCount} exquisite pieces</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="text-center">
                      <Link href={`/collection/${collection.id}`}>
                        <Button
                          variant="outline"
                          className="border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 rounded-none px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300 bg-transparent"
                        >
                          Explore Collection
                        </Button>
                      </Link>
                    </div>

                    {/* Featured Products from Collection */}
                    <div className="grid grid-cols-2 gap-4">
                      {collectionProducts.slice(0, 2).map((product) => (
                        <Link key={product.id} href={`/product/${product.id}`} className="group/product">
                          <div className="relative aspect-square overflow-hidden bg-gray-50">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              fill
                              className="object-cover group-hover/product:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="pt-3 space-y-1">
                            <h3 className="text-sm font-medium text-gray-900 group-hover/product:text-gray-700 transition-colors">
                              {product.name}
                            </h3>
                            <p className="text-sm font-light text-gray-900">₹{product.price.toLocaleString()}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Collection Philosophy */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8 tracking-tight">Our Design Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 tracking-wide">HERITAGE</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Celebrating timeless traditions and royal craftsmanship passed down through generations of master
                artisans.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 tracking-wide">CONTEMPORARY</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Modern designs that reflect today's aesthetic sensibilities while maintaining exceptional quality and
                elegance.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 tracking-wide">BRIDAL</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Exquisite pieces designed for life's most precious moments, creating memories that last forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  )
}
