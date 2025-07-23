import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="text-2xl font-light tracking-wider">
              <span className="font-serif italic">L</span>UXE
              <span className="text-xs text-gray-400 ml-1">JEWELRY</span>
            </div>
            <p className="text-gray-300 leading-relaxed font-light text-sm">
              Crafting exceptional jewelry since 1985. Each piece represents our commitment to timeless elegance,
              superior craftsmanship, and enduring beauty.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors p-2">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors p-2">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors p-2">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors p-2">
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Collections */}
          <div className="space-y-6">
            <h3 className="text-base font-medium tracking-wide">Collections</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/collections"
                  className="text-gray-300 hover:text-white transition-colors text-sm font-light"
                >
                  All Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/collection/heritage"
                  className="text-gray-300 hover:text-white transition-colors text-sm font-light"
                >
                  Heritage Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/collection/contemporary"
                  className="text-gray-300 hover:text-white transition-colors text-sm font-light"
                >
                  Contemporary
                </Link>
              </li>
              <li>
                <Link
                  href="/collection/bridal"
                  className="text-gray-300 hover:text-white transition-colors text-sm font-light"
                >
                  Bridal Collection
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-6">
            <h3 className="text-base font-medium tracking-wide">Customer Care</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm font-light">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-300 hover:text-white transition-colors text-sm font-light">
                  Support Center
                </Link>
              </li>
              <li>
                <Link
                  href="/support#shipping"
                  className="text-gray-300 hover:text-white transition-colors text-sm font-light"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/support#care"
                  className="text-gray-300 hover:text-white transition-colors text-sm font-light"
                >
                  Jewelry Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-base font-medium tracking-wide">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 mt-0.5 text-gray-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-light">1800-266-0123</p>
                  <p className="text-gray-400 text-xs font-light">Mon-Sat: 10AM-8PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-0.5 text-gray-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm font-light">concierge@luxejewelry.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 text-gray-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm font-light">Flagship Boutiques</p>
                  <p className="text-gray-400 text-xs font-light">Mumbai • Delhi • Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm font-light">© 2025 Luxe Jewelry. All rights reserved.</p>
          <div className="flex space-x-8">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm font-light transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm font-light transition-colors">
              Terms of Service
            </Link>
            <Link href="/warranty" className="text-gray-400 hover:text-white text-sm font-light transition-colors">
              Warranty
            </Link>
          </div>
        </div>

        {/* Attribution */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-xs font-light">
            From Draft to Delivery -{" "}
            <a
              href="https://singhtwenty2.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Aryan Singh (singhtwenty2)
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
