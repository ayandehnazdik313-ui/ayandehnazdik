export interface Category {
  id: string
  name: string
  description?: string
  imageUrl?: string
  sortOrder: number
  isActive: boolean
}

export interface ProductOption {
  id: string
  name: string
  choices: Array<{ id: string; name: string; priceMinor: number }>
}

export interface ProductAddon {
  id: string
  name: string
  priceMinor: number
  isAvailable: boolean
}

export interface Product {
  id: string
  name: string
  description?: string
  categoryId: string
  priceMinor: number
  discountPriceMinor?: number
  imageUrl?: string
  isAvailable: boolean
  isFeatured: boolean
  options: ProductOption[]
  addons: ProductAddon[]
  ingredients?: string[]
  allergens?: string[]
  preparationTime?: number
  stock?: number
  sortOrder: number
}
