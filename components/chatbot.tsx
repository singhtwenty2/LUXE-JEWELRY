"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import type { ChatMessage } from "@/lib/types"

const predefinedResponses = {
  greeting: "Welcome to Luxe Jewelry. I'm here to help you find the perfect piece. How may I assist you today?",
  products:
    "We offer an exquisite range of handcrafted jewelry including rings, necklaces, earrings, and bangles. What type of piece interests you?",
  pricing:
    "Our jewelry ranges from ₹25,000 to ₹500,000, with pieces to suit every occasion. Would you like to explore a specific price range?",
  materials:
    "We work exclusively with premium materials: 18K and 22K gold, platinum, natural diamonds, and precious gemstones. What material would you prefer?",
  sizing:
    "We offer complimentary sizing for all rings and bangles, with expert consultation to ensure the perfect fit. Would you like to know more?",
  care: "To preserve your jewelry's beauty, store pieces separately, clean with a soft cloth, and visit us annually for professional maintenance.",
  collections:
    "Our signature collections include Heritage (traditional designs), Contemporary (modern elegance), and Bridal (special occasion pieces). Which appeals to you?",
  default:
    "I'd be delighted to help you discover the perfect piece. Feel free to ask about our collections, materials, pricing, or care instructions.",
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      message: predefinedResponses.greeting,
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")

  const getResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase()

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      return predefinedResponses.greeting
    } else if (lowerMessage.includes("product") || lowerMessage.includes("jewelry") || lowerMessage.includes("piece")) {
      return predefinedResponses.products
    } else if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("expensive")) {
      return predefinedResponses.pricing
    } else if (
      lowerMessage.includes("gold") ||
      lowerMessage.includes("diamond") ||
      lowerMessage.includes("material") ||
      lowerMessage.includes("platinum")
    ) {
      return predefinedResponses.materials
    } else if (lowerMessage.includes("size") || lowerMessage.includes("fit") || lowerMessage.includes("sizing")) {
      return predefinedResponses.sizing
    } else if (
      lowerMessage.includes("care") ||
      lowerMessage.includes("clean") ||
      lowerMessage.includes("maintain") ||
      lowerMessage.includes("polish")
    ) {
      return predefinedResponses.care
    } else if (
      lowerMessage.includes("collection") ||
      lowerMessage.includes("heritage") ||
      lowerMessage.includes("contemporary") ||
      lowerMessage.includes("bridal")
    ) {
      return predefinedResponses.collections
    } else {
      return predefinedResponses.default
    }
  }

  const sendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      message: inputMessage,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        message: getResponse(inputMessage),
        isUser: false,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1200)

    setInputMessage("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 bg-gray-900 hover:bg-gray-800 text-white rounded-full p-4 shadow-lg hover:shadow-xl z-50 transition-all duration-300"
        size="lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 w-96 h-[500px] bg-white shadow-2xl z-50 flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-gray-900 text-white p-6 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Bot className="h-5 w-5" />
              <div>
                <span className="font-medium text-sm tracking-wide">Jewelry Concierge</span>
                <p className="text-xs text-gray-300 font-light">Always here to help</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-gray-800 p-2 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-gray-50">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs p-4 ${
                    message.isUser ? "bg-gray-900 text-white" : "bg-white text-gray-900 border border-gray-200"
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {!message.isUser && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0 text-gray-600" />}
                    <span className="text-sm leading-relaxed font-light">{message.message}</span>
                    {message.isUser && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-6 border-t border-gray-200 bg-white">
            <div className="flex space-x-3">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about our jewelry..."
                className="flex-1 border-gray-200 rounded-none focus:border-gray-400 text-sm"
              />
              <Button
                onClick={sendMessage}
                size="sm"
                className="bg-gray-900 hover:bg-gray-800 text-white rounded-none px-4"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
