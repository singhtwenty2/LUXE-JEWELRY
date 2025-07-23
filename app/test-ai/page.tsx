"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { geminiService } from "@/lib/gemini"

export default function TestAI() {
  const [input, setInput] = useState("")
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const testAPI = async () => {
    if (!input.trim()) return

    setLoading(true)
    setError("")
    setResponse("")

    try {
      console.log("Testing API with input:", input)
      const result = await geminiService.generateResponse(input)
      console.log("API test result:", result)
      setResponse(result)
    } catch (err) {
      console.error("API test error:", err)
      setError(err instanceof Error ? err.message : "Unknown error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold">Test Gemini AI Integration</h1>

        <div className="space-y-4">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something about jewelry..."
            className="w-full"
          />

          <Button onClick={testAPI} disabled={loading || !input.trim()}>
            {loading ? "Testing..." : "Test AI"}
          </Button>
        </div>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded">
            <h3 className="font-medium text-red-900">Error:</h3>
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {response && (
          <div className="p-4 bg-green-50 border border-green-200 rounded">
            <h3 className="font-medium text-green-900">AI Response:</h3>
            <p className="text-green-700 whitespace-pre-wrap">{response}</p>
          </div>
        )}

        <div className="text-sm text-gray-600">
          <p>API Key configured: {process.env.NEXT_PUBLIC_GEMINI_API_KEY ? "✅ Yes" : "❌ No"}</p>
          <p>Check browser console for detailed logs</p>
        </div>
      </div>
    </div>
  )
}
