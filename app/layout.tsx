import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import ScrollToTop from "@/components/scroll-to-top"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Luxe Jewelry - Exquisite Handcrafted Fine Jewelry",
  description:
    "Discover our curated collection of premium handcrafted jewelry. From heritage designs to contemporary elegance, each piece represents exceptional craftsmanship and timeless beauty.",
  keywords:
    "luxury jewelry, handcrafted jewelry, gold jewelry, diamond jewelry, premium jewelry, fine jewelry, heritage jewelry, contemporary jewelry, bridal jewelry",
  openGraph: {
    title: "Luxe Jewelry - Exquisite Handcrafted Fine Jewelry",
    description:
      "Discover our curated collection of premium handcrafted jewelry featuring exceptional craftsmanship and timeless elegance.",
    type: "website",
  },
    generator: '@singhtwenty2'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white text-gray-900`}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
