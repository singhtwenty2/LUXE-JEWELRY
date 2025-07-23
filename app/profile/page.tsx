"use client"

import { useState } from "react"
import Image from "next/image"
import { User, Edit, Package, Heart, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Chatbot from "@/components/ai-chatbot"
import { products } from "@/lib/data"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [userInfo, setUserInfo] = useState({
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 98765 43210",
    address: "123 MG Road, Bangalore, Karnataka 560001",
    joinDate: "March 2023",
  })

  // Mock order history
  const orderHistory = [
    {
      id: "ORD-2024-001",
      date: "2024-01-15",
      status: "Delivered",
      total: 125750,
      items: [products[0]],
    },
    {
      id: "ORD-2024-002",
      date: "2024-01-10",
      status: "Processing",
      total: 85299,
      items: [products[1]],
    },
  ]

  const handleSave = () => {
    setIsEditing(false)
    // In real app, this would save to API
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 tracking-tight">My Account</h1>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Manage your profile, orders, and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="relative w-20 h-20 mx-auto">
                  <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-gray-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 text-sm tracking-wide">{userInfo.name}</h3>
                  <p className="text-xs text-gray-500 font-light">Premium Member</p>
                </div>
              </div>

              <Separator />

              <nav className="space-y-2">
                <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-100 font-light">
                  <User className="h-4 w-4 mr-3" />
                  Profile Information
                </Button>
                <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-100 font-light">
                  <Package className="h-4 w-4 mr-3" />
                  Order History
                </Button>
                <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-100 font-light">
                  <Heart className="h-4 w-4 mr-3" />
                  Wishlist
                </Button>
                <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-100 font-light">
                  <Settings className="h-4 w-4 mr-3" />
                  Settings
                </Button>
                <Button variant="ghost" className="w-full justify-start text-red-600 hover:bg-red-50 font-light">
                  <LogOut className="h-4 w-4 mr-3" />
                  Sign Out
                </Button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="profile" className="space-y-8">
              <TabsList className="grid w-full grid-cols-4 bg-gray-100">
                <TabsTrigger value="profile" className="text-sm font-light">
                  Profile
                </TabsTrigger>
                <TabsTrigger value="orders" className="text-sm font-light">
                  Orders
                </TabsTrigger>
                <TabsTrigger value="wishlist" className="text-sm font-light">
                  Wishlist
                </TabsTrigger>
                <TabsTrigger value="settings" className="text-sm font-light">
                  Settings
                </TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile" className="space-y-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-light text-gray-900">Profile Information</h2>
                  <Button
                    variant="outline"
                    onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    {isEditing ? "Save Changes" : "Edit Profile"}
                  </Button>
                </div>

                <div className="bg-gray-50 p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-900">Full Name</label>
                      <Input
                        value={userInfo.name}
                        onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                        disabled={!isEditing}
                        className="border-gray-300 bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-900">Email Address</label>
                      <Input
                        value={userInfo.email}
                        onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                        disabled={!isEditing}
                        className="border-gray-300 bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-900">Phone Number</label>
                      <Input
                        value={userInfo.phone}
                        onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                        disabled={!isEditing}
                        className="border-gray-300 bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-900">Member Since</label>
                      <Input value={userInfo.joinDate} disabled className="border-gray-300 bg-gray-100" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-900">Address</label>
                    <Textarea
                      value={userInfo.address}
                      onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
                      disabled={!isEditing}
                      className="border-gray-300 bg-white resize-none"
                      rows={3}
                    />
                  </div>
                </div>
              </TabsContent>

              {/* Orders Tab */}
              <TabsContent value="orders" className="space-y-8">
                <h2 className="text-xl font-light text-gray-900">Order History</h2>

                <div className="space-y-6">
                  {orderHistory.map((order) => (
                    <div key={order.id} className="bg-gray-50 p-6 space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <h3 className="font-medium text-gray-900 text-sm tracking-wide">Order {order.id}</h3>
                          <p className="text-xs text-gray-500 font-light">Placed on {order.date}</p>
                        </div>
                        <div className="text-right space-y-1">
                          <span
                            className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.status}
                          </span>
                          <p className="text-sm font-light text-gray-900">₹{order.total.toLocaleString()}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        {order.items.map((item) => (
                          <div key={item.id} className="flex items-center space-x-3">
                            <div className="relative w-12 h-12 overflow-hidden">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <span className="text-sm text-gray-700 font-light">{item.name}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex space-x-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
                        >
                          View Details
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
                        >
                          Track Order
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* Wishlist Tab */}
              <TabsContent value="wishlist" className="space-y-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-light text-gray-900">My Wishlist</h2>
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent">
                    View All
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.slice(0, 3).map((product) => (
                    <div key={product.id} className="bg-gray-50 p-4 space-y-4">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-medium text-gray-900 text-sm tracking-wide">{product.name}</h3>
                        <p className="text-lg font-light text-gray-900">₹{product.price.toLocaleString()}</p>
                      </div>
                      <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-none py-2 text-xs font-medium tracking-wide">
                        Add to Cart
                      </Button>
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings" className="space-y-8">
                <h2 className="text-xl font-light text-gray-900">Account Settings</h2>

                <div className="space-y-8">
                  <div className="bg-gray-50 p-6 space-y-4">
                    <h3 className="font-medium text-gray-900 text-sm tracking-wide">Notifications</h3>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                        <span className="text-sm text-gray-700 font-light">Email notifications for new arrivals</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                        <span className="text-sm text-gray-700 font-light">SMS updates for order status</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm text-gray-700 font-light">Marketing communications</span>
                      </label>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 space-y-4">
                    <h3 className="font-medium text-gray-900 text-sm tracking-wide">Privacy</h3>
                    <div className="space-y-3">
                      <Button
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
                      >
                        Change Password
                      </Button>
                      <Button
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent"
                      >
                        Download My Data
                      </Button>
                      <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50 bg-transparent">
                        Delete Account
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
      <Chatbot />
    </div>
  )
}
