export interface KitAccessory {
  id: string
  name: string
  description?: string
}

export interface Kit {
  id: string
  slug: string
  name: string
  type?: string
  description?: string
  contents?: string[]
  productIds?: string[]
  accessories?: KitAccessory[]
  price?: number
  currency?: string
  image?: string
  images?: string[]
  available?: boolean
  featured?: boolean
}
