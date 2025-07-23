import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { collections } from "@/lib/data"

export default function CollectionsShowcase() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 tracking-tight">Exclusive Collections</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Explore our carefully curated collections, each representing a unique aesthetic and celebrating different
            facets of luxury jewelry
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {collections.map((collection, index) => (
            <div key={collection.id} className="group">
              <div className="relative overflow-hidden aspect-[4/5] mb-8">
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-2xl font-light mb-2 tracking-wide">{collection.name}</h3>
                  <p className="text-sm font-light opacity-90 leading-relaxed mb-4">{collection.description}</p>
                  <p className="text-xs opacity-75">{collection.productCount} pieces</p>
                </div>
              </div>

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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
