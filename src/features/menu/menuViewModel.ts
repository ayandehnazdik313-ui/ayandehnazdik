import type { Category, Product } from './types'

export interface MenuSection {
  category: Category
  products: Product[]
}

export function groupProductsByCategory(categories: Category[], products: Product[]): MenuSection[] {
  return categories
    .map((category) => ({
      category,
      products: products
        .filter((product) => product.categoryId === category.id)
        .sort((a, b) => a.sortOrder - b.sortOrder),
    }))
    .filter((section) => section.products.length > 0)
}

export function effectivePriceMinor(product: Product): number {
  return product.discountPriceMinor !== undefined && product.discountPriceMinor < product.priceMinor
    ? product.discountPriceMinor
    : product.priceMinor
}
