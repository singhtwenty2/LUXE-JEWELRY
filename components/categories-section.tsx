import Image from "next/image"
import Link from "next/link"
import { categories } from "@/lib/data"

export default function CategoriesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 tracking-tight">Curated Collections</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Discover our meticulously crafted jewelry collections, each piece designed to celebrate life's most precious
            moments with timeless elegance
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {categories.map((category) => (
            <Link key={category.id} href={`/category/${category.id}`} className="group text-center">
              <div className="relative overflow-hidden rounded-full mb-6 aspect-square bg-gray-50 shadow-sm hover:shadow-md transition-all duration-500">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900 group-hover:text-gray-700 transition-colors text-sm tracking-wide">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-500 font-light">{category.productCount} pieces</p>
                <p className="text-xs text-gray-400 leading-relaxed max-w-[120px] mx-auto">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
