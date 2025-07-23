"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const locations = [
    {
      city: "Mumbai",
      address: "Phoenix Mills, Lower Parel, Mumbai 400013",
      phone: "+91 22 6789 1234",
      hours: "10:00 AM - 9:00 PM",
      image: "/images/store-mumbai.png",
    },
    {
      city: "Delhi",
      address: "DLF Emporio, Vasant Kunj, New Delhi 110070",
      phone: "+91 11 4567 8901",
      hours: "10:00 AM - 9:00 PM",
      image: "/images/store-delhi.png",
    },
    {
      city: "Bangalore",
      address: "UB City Mall, Vittal Mallya Road, Bangalore 560001",
      phone: "+91 80 2345 6789",
      hours: "10:00 AM - 9:00 PM",
      image: "/images/store-bangalore.png",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8 tracking-tight">Get in Touch</h1>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            We're here to help you find the perfect piece or answer any questions about our collections. Reach out to
            our jewelry experts for personalized assistance.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-light text-gray-900 tracking-tight">Send us a Message</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-none p-8 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Send className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-medium text-green-900">Message Sent Successfully!</h3>
                  <p className="text-green-700 font-light">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-900 tracking-wide">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                      className="border-gray-300 rounded-none focus:border-gray-500 bg-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-900 tracking-wide">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      className="border-gray-300 rounded-none focus:border-gray-500 bg-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-900 tracking-wide">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="border-gray-300 rounded-none focus:border-gray-500 bg-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-900 tracking-wide">
                      Subject *
                    </label>
                    <Select value={formData.subject} onValueChange={(value) => handleChange("subject", value)}>
                      <SelectTrigger className="border-gray-300 rounded-none focus:border-gray-500 bg-transparent">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="product">Product Information</SelectItem>
                        <SelectItem value="custom">Custom Design</SelectItem>
                        <SelectItem value="appointment">Schedule Appointment</SelectItem>
                        <SelectItem value="support">Customer Support</SelectItem>
                        <SelectItem value="wholesale">Wholesale Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-900 tracking-wide">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    required
                    rows={6}
                    className="border-gray-300 rounded-none focus:border-gray-500 resize-none bg-transparent"
                    placeholder="Tell us about your requirements or questions..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-none py-4 text-sm font-medium tracking-wide transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-light text-gray-900 tracking-tight">Contact Information</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Visit our boutiques or reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-gray-600" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium text-gray-900 text-sm tracking-wide">Customer Care</h3>
                  <p className="text-gray-600 font-light">1800-266-0123 (Toll Free)</p>
                  <p className="text-xs text-gray-500 font-light">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-gray-600" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium text-gray-900 text-sm tracking-wide">Email Support</h3>
                  <p className="text-gray-600 font-light">concierge@luxejewelry.com</p>
                  <p className="text-xs text-gray-500 font-light">We respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-gray-600" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium text-gray-900 text-sm tracking-wide">Business Hours</h3>
                  <p className="text-gray-600 font-light">Monday - Saturday: 10:00 AM - 9:00 PM</p>
                  <p className="text-gray-600 font-light">Sunday: 11:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-50 p-6 space-y-4">
              <h3 className="font-medium text-gray-900 text-sm tracking-wide">Quick Actions</h3>
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-300 text-gray-700 hover:bg-gray-100 rounded-none bg-transparent"
                >
                  Schedule Private Viewing
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-300 text-gray-700 hover:bg-gray-100 rounded-none bg-transparent"
                >
                  Request Custom Design
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-300 text-gray-700 hover:bg-gray-100 rounded-none bg-transparent"
                >
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Store Locations */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8 tracking-tight">Visit Our Boutiques</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Experience our collections in person at our flagship boutiques across India's major cities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {locations.map((location, index) => (
              <div key={index} className="bg-white shadow-sm hover:shadow-lg transition-all duration-500">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={location.image || "/placeholder.svg"}
                    alt={`Luxe Jewelry ${location.city}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-gray-900 tracking-wide">{location.city} Boutique</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-600 font-light text-sm leading-relaxed">{location.address}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                        <p className="text-gray-600 font-light text-sm">{location.phone}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-4 w-4 text-gray-400 flex-shrink-0" />
                        <p className="text-gray-600 font-light text-sm">{location.hours}</p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-none py-3 text-sm font-medium tracking-wide transition-all duration-300">
                    Get Directions
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  )
}
