export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  category: string
  collection: string
  description: string
  material: string
  isNew?: boolean
  isBestseller?: boolean
}

export interface Collection {
  id: string
  name: string
  description: string
  image: string
  products: Product[]
}

export interface Category {
  id: string
  name: string
  image: string
  description: string
}

export interface ChatMessage {
  id: string
  message: string
  isUser: boolean
  timestamp: Date
}
