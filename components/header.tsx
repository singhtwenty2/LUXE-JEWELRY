"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import TopBanner from "@/components/top-banner"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const pathname = usePathname()
  const router = useRouter()

  const navigation = [
    { name: "Shop", href: "/shop" },
    { name: "Collections", href: "/collections" },
    { name: "Earrings", href: "/category/earrings" },
    { name: "Rings", href: "/category/rings" },
    { name: "Necklaces", href: "/category/necklaces" },
    { name: "Bangles", href: "/category/bangles" },
    { name: "About", href: "/about" },
  ]

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  const handleSearchKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch(e as any)
    }
  }

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      {/* Top Banner */}
      <TopBanner />

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="text-2xl font-light text-gray-900 tracking-wider">
              <span className="font-serif italic">L</span>UXE
              <span className="text-xs text-gray-400 ml-1">JEWELRY</span>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-12">
            <form onSubmit={handleSearch} className="relative w-full">
              <Input
                type="text"
                placeholder="Search for exquisite jewelry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleSearchKeyPress}
                className="pl-12 pr-4 py-3 w-full border-gray-200 rounded-full bg-gray-50/50 focus:bg-white focus:border-gray-300 transition-all text-sm"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </form>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <Link href="/wishlist">
              <Button variant="ghost" size="sm" className="hidden lg:flex text-gray-600 hover:text-gray-900 p-2">
                <Heart className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/cart">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900 p-2 relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 text-xs bg-gray-900 text-white rounded-full px-1.5 py-0.5 min-w-[18px] text-center">
                  2
                </span>
              </Button>
            </Link>
            <Link href="/profile">
              <Button variant="ghost" size="sm" className="hidden lg:flex text-gray-600 hover:text-gray-900 p-2">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-gray-600 hover:text-gray-900 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex justify-center space-x-12 py-6 border-t border-gray-100">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-gray-700 hover:text-gray-900 font-medium transition-colors text-sm tracking-wide relative group ${
                isActive(item.href) ? "text-gray-900" : ""
              }`}
            >
              {item.name}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gray-900 transition-all duration-300 ${
                  isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100">
            <div className="mb-6">
              <form onSubmit={handleSearch}>
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full bg-gray-50"
                />
              </form>
            </div>
            <nav className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors ${
                    isActive(item.href) ? "text-gray-900" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex space-x-4 pt-4 border-t border-gray-100">
                <Link href="/wishlist" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                    <Heart className="h-4 w-4 mr-2" />
                    Wishlist
                  </Button>
                </Link>
                <Link href="/profile" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
