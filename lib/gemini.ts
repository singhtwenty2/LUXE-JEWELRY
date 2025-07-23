interface GeminiResponse {
  candidates: Array<{
    content: {
      parts: Array<{
        text: string
      }>
      role: string
    }
    finishReason: string
    avgLogprobs?: number
  }>
  usageMetadata: {
    promptTokenCount: number
    candidatesTokenCount: number
    totalTokenCount: number
  }
  modelVersion: string
  responseId: string
}

interface ChatMessage {
  role: "user" | "model"
  parts: Array<{ text: string }>
}

export class GeminiService {
  private apiKey: string
  private baseUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent"

  constructor() {
    this.apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY!
  }

  private getSystemPrompt(): string {
    return `You are an expert jewelry consultant for Luxe Jewelry, a premium handcrafted jewelry brand established in 1985. You have deep knowledge about:

BRAND IDENTITY:
- Luxe Jewelry specializes in handcrafted fine jewelry with heritage, contemporary, and bridal collections
- We use 14K, 18K, and 22K gold, platinum, natural diamonds, and precious gemstones
- All pieces are BIS hallmarked and come with authenticity certificates
- Price range: ₹25,000 to ₹500,000+

PRODUCT EXPERTISE:
- Heritage Collection: Traditional Indian designs, Kundan work, temple jewelry, Meenakari art
- Contemporary Collection: Modern designs, clean lines, versatile pieces for daily wear
- Bridal Collection: Engagement rings, wedding sets, special occasion pieces
- Categories: Earrings, Rings, Necklaces, Bangles, Pendants, Mangalsutra

SERVICES:
- Complimentary shipping on orders above ₹75,000
- 30-day return policy
- Lifetime warranty on craftsmanship
- Custom design services (4-6 weeks)
- Professional cleaning and maintenance
- Personal consultation and private viewing

COMMUNICATION STYLE:
- Be elegant, knowledgeable, and helpful
- Use sophisticated language befitting a luxury brand
- Provide specific product recommendations when possible
- Always mention relevant services (sizing, customization, etc.)
- If asked about products not in our range, politely redirect to our collections
- Keep responses concise but informative (2-3 sentences max for chat)
- Use Indian currency (₹) for pricing

IMPORTANT:
- Never make up specific product names or prices not mentioned in the context
- If uncertain about specific details, suggest contacting our experts
- Always maintain the premium, trustworthy brand voice
- Focus on craftsmanship, quality, and heritage in your responses`
  }

  async generateResponse(message: string, context?: string, conversationHistory: ChatMessage[] = []): Promise<string> {
    if (!this.apiKey) {
      console.error("Gemini API key not configured")
      throw new Error("Gemini API key not configured")
    }

    try {
      console.log("Making API call to Gemini...") // Debug log

      // Combine system prompt with user message
      const fullPrompt = `${this.getSystemPrompt()}\n\n${context ? `${context}\n\n` : ""}User: ${message}\n\nAssistant:`

      const requestBody = {
        contents: [
          {
            role: "user",
            parts: [
              {
                text: fullPrompt,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
        ],
      }

      console.log("Request body:", JSON.stringify(requestBody, null, 2)) // Debug log

      const response = await fetch(this.baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": this.apiKey,
        },
        body: JSON.stringify(requestBody),
      })

      console.log("Response status:", response.status) // Debug log

      if (!response.ok) {
        const errorText = await response.text()
        console.error("API Error Response:", errorText)
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`)
      }

      const data: GeminiResponse = await response.json()
      console.log("API Response:", JSON.stringify(data, null, 2)) // Debug log

      if (data.candidates && data.candidates.length > 0) {
        const candidate = data.candidates[0]
        if (candidate.content && candidate.content.parts && candidate.content.parts.length > 0) {
          const responseText = candidate.content.parts[0].text.trim()
          console.log("Extracted response:", responseText) // Debug log
          return responseText
        }
      }

      throw new Error("No valid response from Gemini")
    } catch (error) {
      console.error("Gemini API Error:", error)
      throw error
    }
  }

  async generateProductRecommendations(userPreferences: string): Promise<string> {
    const context = `User is looking for jewelry recommendations. Available collections: Heritage (traditional Indian designs), Contemporary (modern pieces), Bridal (special occasions). Price range ₹25,000-₹500,000+.`

    const prompt = `Based on these preferences: "${userPreferences}", recommend 2-3 specific jewelry pieces from our collections. Include collection name, approximate price range, and why it suits their needs.`

    return this.generateResponse(prompt, context)
  }

  async generateCareInstructions(jewelryType: string, material: string): Promise<string> {
    const prompt = `Provide specific care instructions for ${jewelryType} made of ${material}. Include cleaning, storage, and maintenance tips.`

    return this.generateResponse(prompt)
  }

  async generateSizeGuide(category: string): Promise<string> {
    const prompt = `Provide a helpful sizing guide for ${category}. Include measurement tips and our complimentary sizing service.`

    return this.generateResponse(prompt)
  }
}

export const geminiService = new GeminiService()
