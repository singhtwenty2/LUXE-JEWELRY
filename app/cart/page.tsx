"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2, ShoppingBag, Shield, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Chatbot from "@/components/ai-chatbot"
import { products } from "@/lib/data"

interface CartItem {
  id: string
  product: (typeof products)[0]
  quantity: number
}

export default function CartPage() {
  // Mock cart items (in real app, this would come from state management/API)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: "1", product: products[0], quantity: 1 },
    { id: "2", product: products[1], quantity: 2 },
  ])

  const [promoCode, setPromoCode] = useState("")

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(itemId)
      return
    }
    setCartItems(cartItems.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (itemId: string) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const shipping = subtotal >= 75000 ? 0 : 2500
  const tax = subtotal * 0.03 // 3% tax
  const total = subtotal + shipping + tax

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 tracking-tight">Shopping Cart</h1>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Review your selected jewelry pieces before checkout
          </p>
        </div>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-light text-gray-900">Cart Items ({cartItems.length})</h2>
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
                  Continue Shopping
                </Button>
              </div>

              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex space-x-6 bg-gray-50 p-6">
                    <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden">
                      <Image
                        src={item.product.image || "/placeholder.svg"}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 space-y-4">
                      <div className="flex justify-between">
                        <div className="space-y-2">
                          <h3 className="font-medium text-gray-900 text-sm tracking-wide">{item.product.name}</h3>
                          <p className="text-xs text-gray-500 font-light">
                            {item.product.karat} • {item.product.weight}
                          </p>
                          <p className="text-xs text-gray-500 font-light capitalize">{item.product.category}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8 p-0 border-gray-300"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 p-0 border-gray-300"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <div className="text-right">
                          <p className="text-lg font-light text-gray-900">
                            ₹{(item.product.price * item.quantity).toLocaleString()}
                          </p>
                          {item.quantity > 1 && (
                            <p className="text-xs text-gray-500 font-light">
                              ₹{item.product.price.toLocaleString()} each
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 space-y-6">
                <h2 className="text-xl font-light text-gray-900">Order Summary</h2>

                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 font-light">Subtotal</span>
                    <span className="text-gray-900">₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 font-light">Shipping</span>
                    <span className="text-gray-900">{shipping === 0 ? "Free" : `₹${shipping.toLocaleString()}`}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 font-light">Tax</span>
                    <span className="text-gray-900">₹{tax.toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-medium">
                    <span className="text-gray-900">Total</span>
                    <span className="text-gray-900">₹{total.toLocaleString()}</span>
                  </div>
                </div>

                {shipping === 0 && (
                  <div className="flex items-center space-x-2 text-green-600 text-sm">
                    <Truck className="h-4 w-4" />
                    <span className="font-light">Free shipping applied!</span>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 border-gray-300 rounded-none bg-white"
                    />
                    <Button
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:bg-gray-100 rounded-none bg-transparent"
                    >
                      Apply
                    </Button>
                  </div>

                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-none py-4 text-base font-medium tracking-wide">
                    Proceed to Checkout
                  </Button>
                </div>
              </div>

              {/* Security Features */}
              <div className="bg-gray-50 p-6 space-y-4">
                <h3 className="font-medium text-gray-900 text-sm tracking-wide">Why Shop With Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-700 font-light">Lifetime warranty on craftsmanship</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Truck className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-700 font-light">Free shipping on orders above ₹75,000</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ShoppingBag className="h-4 w-4 text-gray-600" />
                    <span className="text-sm text-gray-700 font-light">30-day hassle-free returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="space-y-6">
              <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto" />
              <h3 className="text-xl font-light text-gray-900">Your cart is empty</h3>
              <p className="text-gray-600 font-light max-w-md mx-auto">
                Discover our exquisite jewelry collections and add your favorite pieces to cart
              </p>
              <div className="flex justify-center space-x-4 mt-8">
                <Link href="/shop">
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3">Start Shopping</Button>
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
