"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User, Sparkles, Loader2 } from "lucide-react"
import { geminiService } from "@/lib/gemini"
import type { ChatMessage } from "@/lib/types"

interface ExtendedChatMessage extends ChatMessage {
  isAI?: boolean
  isLoading?: boolean
}

const fallbackResponses = {
  greeting:
    "Welcome to Luxe Jewelry! I'm your AI jewelry consultant. I can help you find the perfect piece, provide care instructions, or answer questions about our collections. How may I assist you today?",
  products:
    "Our exquisite collections include Heritage (traditional designs), Contemporary (modern elegance), and Bridal (special occasions). Each piece is handcrafted with premium materials. What type of jewelry interests you?",
  pricing:
    "Our jewelry ranges from ₹25,000 to ₹500,000+, with complimentary shipping on orders above ₹75,000. We also offer custom design services. Would you like to explore a specific price range?",
  materials:
    "We work exclusively with 14K, 18K, and 22K gold, platinum, natural diamonds, and precious gemstones. All pieces are BIS hallmarked with authenticity certificates. What material would you prefer?",
  care: "To preserve your jewelry's beauty: clean with a soft cloth, store pieces separately, avoid harsh chemicals, and visit us annually for professional maintenance. Need specific care instructions?",
  default:
    "I'm here to help you discover the perfect jewelry piece. Feel free to ask about our collections, materials, pricing, care instructions, or sizing. Our experts are also available at 1800-266-0123.",
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ExtendedChatMessage[]>([
    {
      id: "1",
      message: fallbackResponses.greeting,
      isUser: false,
      isAI: true,
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getFallbackResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase()

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      return fallbackResponses.greeting
    } else if (
      lowerMessage.includes("product") ||
      lowerMessage.includes("jewelry") ||
      lowerMessage.includes("collection")
    ) {
      return fallbackResponses.products
    } else if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("expensive")) {
      return fallbackResponses.pricing
    } else if (lowerMessage.includes("gold") || lowerMessage.includes("diamond") || lowerMessage.includes("material")) {
      return fallbackResponses.materials
    } else if (lowerMessage.includes("care") || lowerMessage.includes("clean") || lowerMessage.includes("maintain")) {
      return fallbackResponses.care
    } else {
      return fallbackResponses.default
    }
  }

  const sendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: ExtendedChatMessage = {
      id: Date.now().toString(),
      message: inputMessage,
      isUser: true,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    const currentInput = inputMessage
    setInputMessage("")
    setIsLoading(true)

    // Add loading message
    const loadingMessage: ExtendedChatMessage = {
      id: (Date.now() + 1).toString(),
      message: "",
      isUser: false,
      isAI: true,
      isLoading: true,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, loadingMessage])

    try {
      console.log("Sending message to AI:", currentInput) // Debug log

      // Convert messages to conversation history for context
      const conversationHistory = messages
        .filter((msg) => !msg.isLoading)
        .slice(-6) // Last 6 messages for context
        .map((msg) => ({
          role: msg.isUser ? ("user" as const) : ("model" as const),
          parts: [{ text: msg.message }],
        }))

      const aiResponse = await geminiService.generateResponse(currentInput, undefined, conversationHistory)
      console.log("Received AI response:", aiResponse) // Debug log

      const botResponse: ExtendedChatMessage = {
        id: (Date.now() + 2).toString(),
        message: aiResponse,
        isUser: false,
        isAI: true,
        timestamp: new Date(),
      }

      setMessages((prev) => prev.filter((msg) => !msg.isLoading).concat([botResponse]))
    } catch (error) {
      console.error("AI Chat Error:", error)

      // Fallback to predefined responses
      const fallbackResponse: ExtendedChatMessage = {
        id: (Date.now() + 2).toString(),
        message: getFallbackResponse(currentInput),
        isUser: false,
        isAI: false, // Mark as fallback
        timestamp: new Date(),
      }

      setMessages((prev) => prev.filter((msg) => !msg.isLoading).concat([fallbackResponse]))
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* AI Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl z-50 transition-all duration-300 group"
        size="lg"
      >
        <div className="relative">
          <MessageCircle className="h-6 w-6" />
          <Sparkles className="h-3 w-3 absolute -top-1 -right-1 text-yellow-400 animate-pulse" />
        </div>
        <span className="absolute -top-12 right-0 bg-gray-900 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          AI Jewelry Expert
        </span>
      </Button>

      {/* AI Chat Window */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 w-96 h-[600px] bg-white shadow-2xl z-50 flex flex-col border border-gray-200 rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-6 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Bot className="h-5 w-5" />
                <Sparkles className="h-2 w-2 absolute -top-1 -right-1 text-yellow-400" />
              </div>
              <div>
                <span className="font-medium text-sm tracking-wide flex items-center">
                  AI Jewelry Expert
                  <span className="ml-2 text-xs bg-yellow-400 text-gray-900 px-2 py-0.5 rounded-full font-medium">
                    AI
                  </span>
                </span>
                <p className="text-xs text-gray-300 font-light">Powered by Gemini AI</p>
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
                  className={`max-w-xs p-4 rounded-lg ${
                    message.isUser
                      ? "bg-gray-900 text-white"
                      : message.isAI
                        ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-900 border border-blue-100"
                        : "bg-white text-gray-900 border border-gray-200"
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {!message.isUser && (
                      <div className="flex-shrink-0 mt-0.5">
                        {message.isAI ? (
                          <div className="relative">
                            <Bot className="h-4 w-4 text-blue-600" />
                            <Sparkles className="h-2 w-2 absolute -top-0.5 -right-0.5 text-yellow-500" />
                          </div>
                        ) : (
                          <Bot className="h-4 w-4 text-gray-600" />
                        )}
                      </div>
                    )}
                    <div className="flex-1">
                      {message.isLoading ? (
                        <div className="flex items-center space-x-2">
                          <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
                          <span className="text-sm text-gray-600">AI is thinking...</span>
                        </div>
                      ) : (
                        <span className="text-sm leading-relaxed font-light">{message.message}</span>
                      )}
                    </div>
                    {message.isUser && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                  </div>
                  {message.isAI && !message.isLoading && (
                    <div className="mt-2 pt-2 border-t border-blue-100">
                      <span className="text-xs text-blue-600 font-medium">✨ AI-Powered Response</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-6 border-t border-gray-200 bg-white">
            <div className="flex space-x-3">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about jewelry, care tips, sizing..."
                className="flex-1 border-gray-200 rounded-lg focus:border-blue-400 text-sm"
                disabled={isLoading}
              />
              <Button
                onClick={sendMessage}
                size="sm"
                disabled={isLoading || !inputMessage.trim()}
                className="bg-gradient-to-r from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600 text-white rounded-lg px-4"
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Powered by AI • Responses may vary • For complex queries, contact our experts
            </p>
          </div>
        </div>
      )}
    </>
  )
}
