export interface Product {
  id: string
  slug: string
  name: string
  type: string
  description?: string
  profile?: string
  ingredients?: string[]
  presentation?: string
  price?: number
  currency?: string
  image?: string
  images?: string[]
  available?: boolean
  featured?: boolean
}
